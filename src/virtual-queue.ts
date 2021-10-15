import { fetchJson } from './fetch';

export const VQ_ORIGINS = {
  WDW: 'https://vqguest-svc-wdw.wdprapps.disney.com' as const,
  DL: 'https://vqguest-svc.wdprapps.disney.com' as const,
};

type Resort = keyof typeof VQ_ORIGINS;
type Origin = typeof VQ_ORIGINS[Resort];

const originToResort = {
  [VQ_ORIGINS.WDW]: 'WDW' as const,
  [VQ_ORIGINS.DL]: 'DL' as const,
};

export function isVirtualQueueOrigin(origin: string): origin is Origin {
  return origin in originToResort;
}

export interface BaseQueue {
  queueId: string;
}

export interface Queue extends BaseQueue {
  name: string;
  isAcceptingJoins: boolean;
  nextScheduledOpenTime: string | null;
  maxPartySize: number;
  howToEnterMessage: string;
}

export interface BaseGuest {
  guestId: string;
}

export interface Guest extends BaseGuest {
  firstName: string;
  lastName: string;
  avatarImageUrl?: string;
  isPrimaryGuest?: boolean;
  isPreselected?: boolean;
}

export interface Position {
  queueId: string;
  guestIds: string[];
  boardingGroup: number;
  queuedAt: number;
}

interface Response {
  responseStatus: string;
}

interface JoinQueueRequest {
  resource: 'joinQueue';
  data: {
    queueId: string;
    guestIds: string[];
  };
}

interface JoinQueueOKResponse {
  responseStatus: 'OK';
  queues: Queue[];
  guests: Guest[];
  positions: Position[];
}

type JoinQueueConflictType =
  | 'NO_PARK_PASS'
  | 'NOT_IN_PARK'
  | 'REDEEM_LIMIT_REACHED';

interface JoinQueueConflictsResponse {
  responseStatus: 'INVALID_GUEST' | 'CLOSED_QUEUE';
  conflicts: {
    conflictType: JoinQueueConflictType;
    guestIds: string[];
  }[];
}

type JoinQueueResponse = JoinQueueOKResponse | JoinQueueConflictsResponse;

export type JoinQueueConflicts = { [key: string]: JoinQueueConflictType };

export interface JoinQueueResult {
  boardingGroup: number | null;
  conflicts: JoinQueueConflicts;
  closed: boolean;
}

interface GetLinkedGuestsRequest {
  resource: 'getLinkedGuests';
  data: {
    queueId: string;
  };
}

interface GetLinkedGuestsOKResponse {
  responseStatus: 'OK';
  guests: Guest[];
}

type VQRequest = JoinQueueRequest | GetLinkedGuestsRequest;
type VQResource = VQRequest['resource'] | 'getQueues';

export function sortGuests(guests: Guest[]): Guest[] {
  return guests.sort((a, b) => {
    if (a.isPrimaryGuest !== b.isPrimaryGuest) {
      return Number(b.isPrimaryGuest) - Number(a.isPrimaryGuest);
    }
    if (a.isPreselected !== b.isPreselected) {
      return Number(b.isPreselected) - Number(a.isPreselected);
    }
    return `${a.firstName} ${a.lastName}`.localeCompare(
      `${b.firstName} ${b.lastName}`
    );
  });
}

export class RequestError extends Error {
  name = 'RequestError';

  constructor(public responseData: Response, message = 'Request failed') {
    super(`${message}: ${JSON.stringify(responseData)}`);
  }
}

export class ApiClient {
  constructor(
    protected origin: Origin,
    protected fetch: typeof fetchJson,
    protected getAccessToken: () => string | Promise<string>
  ) {}

  get resort(): Resort {
    return originToResort[this.origin];
  }

  url(resource: VQResource): string {
    return `${this.origin}/application/v1/guest/${resource}`;
  }

  async getQueues(): Promise<Queue[]> {
    return (await this.fetch(this.url('getQueues'))).data.queues;
  }

  async getQueue(queue: BaseQueue): Promise<Queue> {
    const q = (await this.getQueues()).find(q => q.queueId === queue.queueId);
    if (q) return q;
    throw new Error('Queue not Found');
  }

  async getLinkedGuests(queue: BaseQueue): Promise<Guest[]> {
    const data = await this.post<GetLinkedGuestsOKResponse>({
      resource: 'getLinkedGuests',
      data: { queueId: queue.queueId },
    });
    return sortGuests(
      data.guests.map(g => ({
        guestId: g.guestId,
        firstName: g.firstName,
        lastName: g.lastName,
        avatarImageUrl: g.avatarImageUrl,
        isPrimaryGuest: g.isPrimaryGuest,
        isPreselected: g.isPreselected,
      }))
    );
  }

  async joinQueue<T extends BaseGuest>(
    queue: BaseQueue,
    guests: T[]
  ): Promise<JoinQueueResult> {
    const guestIds = guests.map(g => g.guestId);
    const data = await this.post<JoinQueueResponse>({
      resource: 'joinQueue',
      data: { queueId: queue.queueId, guestIds },
    });
    if (data.responseStatus === 'OK') {
      const pos = data.positions.find(
        p =>
          p.queueId === queue.queueId &&
          p.guestIds.length > 0 &&
          guestIds.some(gid => p.guestIds.includes(gid))
      );
      if (!pos) throw new RequestError(data);
      return {
        boardingGroup: pos.boardingGroup,
        conflicts: {},
        closed: false,
      };
    } else if (
      data.responseStatus === 'INVALID_GUEST' ||
      data.responseStatus === 'CLOSED_QUEUE'
    ) {
      const closed = data.responseStatus === 'CLOSED_QUEUE';
      const invalidIds = new Set<string>();
      const conflicts: JoinQueueResult['conflicts'] = {};
      for (const conflict of data.conflicts) {
        for (const guestId of conflict.guestIds) {
          const guest = guests.find(g => g.guestId === guestId);
          if (!guest) continue;
          conflicts[guest.guestId] = conflict.conflictType;
          invalidIds.add(guestId);
        }
      }
      const validGuests = guests.filter(g => !invalidIds.has(g.guestId));
      if (closed || validGuests.length === 0) {
        return { boardingGroup: null, conflicts, closed };
      }
      const result = await this.joinQueue(queue, validGuests);
      result.conflicts = { ...conflicts, ...result.conflicts };
      return result;
    } else {
      throw new RequestError(data);
    }
  }

  protected async post<T>(request: VQRequest): Promise<T> {
    const { status, data } = await this.fetch(this.url(request.resource), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `BEARER ${await this.getAccessToken()}`,
      },
      body: JSON.stringify(request.data),
    });
    if (status >= 500) {
      throw new RequestError(data);
    }
    return data as T;
  }
}
