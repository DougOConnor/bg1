var We=Object.defineProperty,Qe=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable;var ee=(t,e,n)=>e in t?We(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,C=(t,e)=>{for(var n in e||(e={}))Re.call(e,n)&&ee(t,n,e[n]);if(X)for(var n of X(e))Je.call(e,n)&&ee(t,n,e[n]);return t},te=(t,e)=>Qe(t,je(e));var H,d,ne,A,se,oe,U={},re=[],qe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function D(t,e){for(var n in e)t[n]=e[n];return t}function ie(t){var e=t.parentNode;e&&e.removeChild(t)}function l(t,e,n){var s,i,o,u={};for(o in e)o=="key"?s=e[o]:o=="ref"?i=e[o]:u[o]=e[o];if(arguments.length>2&&(u.children=arguments.length>3?H.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)u[o]===void 0&&(u[o]=t.defaultProps[o]);return O(t,u,s,i,null)}function O(t,e,n,s,i){var o={type:t,props:e,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++ne:i};return i==null&&d.vnode!=null&&d.vnode(o),o}function w(t){return t.children}function M(t,e){this.props=t,this.context=e}function P(t,e){if(e==null)return t.__?P(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?P(t):null}function le(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return le(t)}}function ae(t){(!t.__d&&(t.__d=!0)&&A.push(t)&&!B.__r++||oe!==d.debounceRendering)&&((oe=d.debounceRendering)||se)(B)}function B(){for(var t;B.__r=A.length;)t=A.sort(function(e,n){return e.__v.__b-n.__v.__b}),A=[],t.some(function(e){var n,s,i,o,u,_;e.__d&&(u=(o=(n=e).__v).__e,(_=n.__P)&&(s=[],(i=D({},o)).__v=o.__v+1,J(_,o,i,n.__n,_.ownerSVGElement!==void 0,o.__h!=null?[u]:null,s,u==null?P(o):u,o.__h),me(s,o),o.__e!=u&&le(o)))})}function ue(t,e,n,s,i,o,u,_,c,h){var r,p,f,a,m,S,g,v=s&&s.__k||re,k=v.length;for(n.__k=[],r=0;r<e.length;r++)if((a=n.__k[r]=(a=e[r])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?O(null,a,null,null,a):Array.isArray(a)?O(w,{children:a},null,null,null):a.__b>0?O(a.type,a.props,a.key,null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(f=v[r])===null||f&&a.key==f.key&&a.type===f.type)v[r]=void 0;else for(p=0;p<k;p++){if((f=v[p])&&a.key==f.key&&a.type===f.type){v[p]=void 0;break}f=null}J(t,a,f=f||U,i,o,u,_,c,h),m=a.__e,(p=a.ref)&&f.ref!=p&&(g||(g=[]),f.ref&&g.push(f.ref,null,a),g.push(p,a.__c||m,a)),m!=null?(S==null&&(S=m),typeof a.type=="function"&&a.__k===f.__k?a.__d=c=ce(a,c,t):c=_e(t,a,f,v,m,c),typeof n.type=="function"&&(n.__d=c)):c&&f.__e==c&&c.parentNode!=t&&(c=P(f))}for(n.__e=S,r=k;r--;)v[r]!=null&&(typeof n.type=="function"&&v[r].__e!=null&&v[r].__e==n.__d&&(n.__d=P(s,r+1)),ge(v[r],v[r]));if(g)for(r=0;r<g.length;r++)pe(g[r],g[++r],g[++r])}function ce(t,e,n){for(var s,i=t.__k,o=0;i&&o<i.length;o++)(s=i[o])&&(s.__=t,e=typeof s.type=="function"?ce(s,e,n):_e(n,s,s,i,s.__e,e));return e}function _e(t,e,n,s,i,o){var u,_,c;if(e.__d!==void 0)u=e.__d,e.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(i),u=null;else{for(_=o,c=0;(_=_.nextSibling)&&c<s.length;c+=2)if(_==i)break e;t.insertBefore(i,o),u=o}return u!==void 0?u:i.nextSibling}function ze(t,e,n,s,i){var o;for(o in n)o==="children"||o==="key"||o in e||F(t,o,null,n[o],s);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||F(t,o,e[o],n[o],s)}function fe(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||qe.test(e)?n:n+"px"}function F(t,e,n,s,i){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof s=="string"&&(t.style.cssText=s=""),s)for(e in s)n&&e in n||fe(t.style,e,"");if(n)for(e in n)s&&n[e]===s[e]||fe(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?s||t.addEventListener(e,o?he:de,o):t.removeEventListener(e,o?he:de,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function de(t){this.l[t.type+!1](d.event?d.event(t):t)}function he(t){this.l[t.type+!0](d.event?d.event(t):t)}function J(t,e,n,s,i,o,u,_,c){var h,r,p,f,a,m,S,g,v,k,E,y=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,_=e.__e=n.__e,e.__h=null,o=[_]),(h=d.__b)&&h(e);try{e:if(typeof y=="function"){if(g=e.props,v=(h=y.contextType)&&s[h.__c],k=h?v?v.props.value:h.__:s,n.__c?S=(r=e.__c=n.__c).__=r.__E:("prototype"in y&&y.prototype.render?e.__c=r=new y(g,k):(e.__c=r=new M(g,k),r.constructor=y,r.render=Ye),v&&v.sub(r),r.props=g,r.state||(r.state={}),r.context=k,r.__n=s,p=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),y.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=D({},r.__s)),D(r.__s,y.getDerivedStateFromProps(g,r.__s))),f=r.props,a=r.state,p)y.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(y.getDerivedStateFromProps==null&&g!==f&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(g,k),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(g,r.__s,k)===!1||e.__v===n.__v){r.props=g,r.state=r.__s,e.__v!==n.__v&&(r.__d=!1),r.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(b){b&&(b.__=e)}),r.__h.length&&u.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(g,r.__s,k),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(f,a,m)})}r.context=k,r.props=g,r.state=r.__s,(h=d.__r)&&h(e),r.__d=!1,r.__v=e,r.__P=t,h=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(s=D(D({},s),r.getChildContext())),p||r.getSnapshotBeforeUpdate==null||(m=r.getSnapshotBeforeUpdate(f,a)),E=h!=null&&h.type===w&&h.key==null?h.props.children:h,ue(t,Array.isArray(E)?E:[E],e,n,s,i,o,u,_,c),r.base=e.__e,e.__h=null,r.__h.length&&u.push(r),S&&(r.__E=r.__=null),r.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ve(n.__e,e,n,s,i,o,u,c);(h=d.diffed)&&h(e)}catch(b){e.__v=null,(c||o!=null)&&(e.__e=_,e.__h=!!c,o[o.indexOf(_)]=null),d.__e(b,e,n)}}function me(t,e){d.__c&&d.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(s){s.call(n)})}catch(s){d.__e(s,n.__v)}})}function Ve(t,e,n,s,i,o,u,_){var c,h,r,p=n.props,f=e.props,a=e.type,m=0;if(a==="svg"&&(i=!0),o!=null){for(;m<o.length;m++)if((c=o[m])&&(c===t||(a?c.localName==a:c.nodeType==3))){t=c,o[m]=null;break}}if(t==null){if(a===null)return document.createTextNode(f);t=i?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,f.is&&f),o=null,_=!1}if(a===null)p===f||_&&t.data===f||(t.data=f);else{if(o=o&&H.call(t.childNodes),h=(p=n.props||U).dangerouslySetInnerHTML,r=f.dangerouslySetInnerHTML,!_){if(o!=null)for(p={},m=0;m<t.attributes.length;m++)p[t.attributes[m].name]=t.attributes[m].value;(r||h)&&(r&&(h&&r.__html==h.__html||r.__html===t.innerHTML)||(t.innerHTML=r&&r.__html||""))}if(ze(t,f,p,i,_),r)e.__k=[];else if(m=e.props.children,ue(t,Array.isArray(m)?m:[m],e,n,s,i&&a!=="foreignObject",o,u,o?o[0]:n.__k&&P(n,0),_),o!=null)for(m=o.length;m--;)o[m]!=null&&ie(o[m]);_||("value"in f&&(m=f.value)!==void 0&&(m!==t.value||a==="progress"&&!m)&&F(t,"value",m,p.value,!1),"checked"in f&&(m=f.checked)!==void 0&&m!==t.checked&&F(t,"checked",m,p.checked,!1))}return t}function pe(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(s){d.__e(s,n)}}function ge(t,e,n){var s,i;if(d.unmount&&d.unmount(t),(s=t.ref)&&(s.current&&s.current!==t.__e||pe(s,null,e)),(s=t.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(o){d.__e(o,e)}s.base=s.__P=null}if(s=t.__k)for(i=0;i<s.length;i++)s[i]&&ge(s[i],e,typeof t.type!="function");n||t.__e==null||ie(t.__e),t.__e=t.__d=void 0}function Ye(t,e,n){return this.constructor(t,n)}function Ze(t,e,n){var s,i,o;d.__&&d.__(t,e),i=(s=typeof n=="function")?null:n&&n.__k||e.__k,o=[],J(e,t=(!s&&n||e).__k=l(w,null,[t]),i||U,U,e.ownerSVGElement!==void 0,!s&&n?[n]:i?null:e.firstChild?H.call(e.childNodes):null,o,!s&&n?n:i?i.__e:e.firstChild,s),me(o,t)}H=re.slice,d={__e:function(t,e){for(var n,s,i;e=e.__;)if((n=e.__c)&&!n.__)try{if((s=n.constructor)&&s.getDerivedStateFromError!=null&&(n.setState(s.getDerivedStateFromError(t)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),i=n.__d),i)return n.__E=n}catch(o){t=o}throw t}},ne=0,M.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=D({},this.state),typeof t=="function"&&(t=t(D({},n),this.props)),t&&D(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),ae(this))},M.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ae(this))},M.prototype.render=w,A=[],se=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B.__r=0;let ye="America/New_York";function Ke(t){ye=t}function q(t){t=t||new Date(Date.now());const e={},n="2-digit";Intl.DateTimeFormat("en-US",{timeZone:ye,hourCycle:"h23",year:"numeric",month:n,day:n,hour:n,minute:n,second:n}).formatToParts(t).forEach(i=>e[i.type]=i.value);const s=t.getMilliseconds().toString().padStart(3,"0");return{date:`${e.year}-${e.month}-${e.day}`,time:`${e.hour}:${e.minute}:${e.second}.${s}`}}class ve extends Error{constructor(e){super(`Token "${e}" missing or expired`);this.name="TokenStale"}}class Xe{constructor(e,n=localStorage){this.name=e,this.storage=n}get(){const e=this.storage.getItem(this.name);if(e){const{token:n,expires:s}=JSON.parse(e),i=q(new Date(s)),o=q();if(i.date>o.date||i.date===o.date&&i.time>o.time&&i.time>="17")return n}throw new ve(this.name)}set(e,n){this.storage.setItem(this.name,JSON.stringify({token:e,expires:n}))}delete(){this.storage.removeItem(this.name)}}async function et(t,e={}){const n=await fetch(t,e);return{status:n.status,data:await n.json()}}const be={WDW:"https://vqguest-svc-wdw.wdprapps.disney.com",DL:"https://vqguest-svc.wdprapps.disney.com"},we={[be.WDW]:"WDW",[be.DL]:"DL"};function tt(t){return t in we}function nt(t){return t.sort((e,n)=>e.isPrimaryGuest!==n.isPrimaryGuest?Number(n.isPrimaryGuest)-Number(e.isPrimaryGuest):e.isPreselected!==n.isPreselected?Number(n.isPreselected)-Number(e.isPreselected):`${e.firstName} ${e.lastName}`.localeCompare(`${n.firstName} ${n.lastName}`))}class W extends Error{constructor(e,n="Request failed"){super(`${n}: ${JSON.stringify(e)}`);this.responseData=e,this.name="RequestError"}}class st{constructor(e,n,s){this.origin=e,this.fetch=n,this.getAccessToken=s}get resort(){return we[this.origin]}url(e){return`${this.origin}/application/v1/guest/${e}`}async getQueues(){return(await this.fetch(this.url("getQueues"))).data.queues.sort((e,n)=>e.categoryContentId===n.categoryContentId?e.name.localeCompare(n.name):e.categoryContentId==="attraction"?-1:1)}async getQueue(e){const n=(await this.getQueues()).find(s=>s.queueId===e.queueId);if(n)return n;throw new Error("Queue not Found")}async getLinkedGuests(e){const n=await this.post({resource:"getLinkedGuests",data:{queueId:e.queueId}});return nt(n.guests.map(s=>({guestId:s.guestId,firstName:s.firstName,lastName:s.lastName,avatarImageUrl:s.avatarImageUrl,isPrimaryGuest:s.isPrimaryGuest,isPreselected:s.isPreselected})))}async joinQueue(e,n){const s=n.map(o=>o.guestId),i=await this.post({resource:"joinQueue",data:{queueId:e.queueId,guestIds:s}});if(i.responseStatus==="OK"){const o=i.positions.find(u=>u.queueId===e.queueId&&u.guestIds.length>0&&s.some(_=>u.guestIds.includes(_)));if(!o)throw new W(i);return{boardingGroup:o.boardingGroup,conflicts:{},closed:!1}}else if(i.responseStatus==="INVALID_GUEST"||i.responseStatus==="CLOSED_QUEUE"){const o=i.responseStatus==="CLOSED_QUEUE",u=new Set,_={};for(const r of i.conflicts)for(const p of r.guestIds){const f=n.find(a=>a.guestId===p);!f||(_[f.guestId]=r.conflictType,u.add(p))}const c=n.filter(r=>!u.has(r.guestId));if(o||c.length===0)return{boardingGroup:null,conflicts:_,closed:o};const h=await this.joinQueue(e,c);return h.conflicts=C(C({},_),h.conflicts),h}else throw new W(i)}async post(e){const{status:n,data:s}=await this.fetch(this.url(e.resource),{method:"POST",headers:{"Content-Type":"application/json",Authorization:`BEARER ${await this.getAccessToken()}`},body:JSON.stringify(e.data)});if(n>=500)throw new W(s);return s}}var Q,N,ke,$=0,z=[],xe=d.__b,Ne=d.__r,Ie=d.diffed,Se=d.__c,Te=d.unmount;function V(t,e){d.__h&&d.__h(N,t,$||e),$=0;var n=N.__H||(N.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function x(t){return $=1,ot(Ee,t)}function ot(t,e,n){var s=V(Q++,2);return s.t=t,s.__c||(s.__=[n?n(e):Ee(void 0,e),function(i){var o=s.t(s.__[0],i);s.__[0]!==o&&(s.__=[o,s.__[1]],s.__c.setState({}))}],s.__c=N),s.__}function I(t,e){var n=V(Q++,3);!d.__s&&Pe(n.__H,e)&&(n.__=t,n.__H=e,N.__H.__h.push(n))}function rt(t){return $=5,De(function(){return{current:t}},[])}function De(t,e){var n=V(Q++,7);return Pe(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function it(t,e){return $=8,De(function(){return t},e)}function lt(){z.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(j),t.__H.__h.forEach(Y),t.__H.__h=[]}catch(e){t.__H.__h=[],d.__e(e,t.__v)}}),z=[]}d.__b=function(t){N=null,xe&&xe(t)},d.__r=function(t){Ne&&Ne(t),Q=0;var e=(N=t.__c).__H;e&&(e.__h.forEach(j),e.__h.forEach(Y),e.__h=[])},d.diffed=function(t){Ie&&Ie(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(z.push(e)!==1&&ke===d.requestAnimationFrame||((ke=d.requestAnimationFrame)||function(n){var s,i=function(){clearTimeout(o),Ce&&cancelAnimationFrame(s),setTimeout(n)},o=setTimeout(i,100);Ce&&(s=requestAnimationFrame(i))})(lt)),N=null},d.__c=function(t,e){e.some(function(n){try{n.__h.forEach(j),n.__h=n.__h.filter(function(s){return!s.__||Y(s)})}catch(s){e.some(function(i){i.__h&&(i.__h=[])}),e=[],d.__e(s,n.__v)}}),Se&&Se(t,e)},d.unmount=function(t){Te&&Te(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(j)}catch(n){d.__e(n,e.__v)}};var Ce=typeof requestAnimationFrame=="function";function j(t){var e=N;typeof t.__c=="function"&&t.__c(),N=e}function Y(t){var e=N;t.__c=t.__(),N=e}function Pe(t,e){return!t||t.length!==e.length||e.some(function(n,s){return n!==t[s]})}function Ee(t,e){return typeof e=="function"?e(t):e}function R({onClick:t,disabled:e,href:n,children:s}){return l("div",{className:"mb-20"},l("div",{className:"fixed bottom-0 left-0 w-full bg-gray-50 bg-opacity-75 text-center"},l("a",{href:n,className:"block max-w-2xl mx-auto px-3 pb-5"},l("button",{onClick:t,disabled:e,className:"w-full p-3 rounded-lg bg-blue-500 text-white font-semibold focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2 disabled:bg-gray-400"},s))))}function G({guests:t,selectable:e,conflicts:n}){return t.length===0?null:l("ul",{className:"mt-3 ml-3"},t.map((s,i)=>l("li",{key:s.guestId,className:"py-1.5"},l("label",{className:"flex items-center"},e?l("input",{type:"checkbox",checked:e.isSelected(i),onChange:()=>e.onToggle(i),className:"rounded mr-4 p-2.5 text-green-500"}):null,s.avatarImageUrl?l("img",{src:s.avatarImageUrl,alt:"",width:"56",height:"56",className:"rounded-full"}):l("span",{className:"rounded-full text-3xl font-bold text-center bg-purple-600 text-white",style:{width:"56px",lineHeight:"56px"},"aria-hidden":"true"},(s.firstName+s.lastName)[0]),l("span",{className:"ml-3"},s.firstName," ",s.lastName,l("br",null),n&&s.guestId in n?l("span",{className:"text-xs font-semibold text-red-700"},n[s.guestId].replace(/_/g," ")):null)))))}function at({guests:t,party:e,onToggle:n,onConfirm:s}){return l(w,null,l("h2",{className:"mt-5 text-xl"},"Choose Your Party"),l(G,{guests:t,selectable:{isSelected:i=>!!e[i],onToggle:n}}),l(R,{disabled:Object.keys(e).length===0,onClick:s},"Confirm Party"))}async function ut(t){return new Promise(e=>{setTimeout(e,t)})}function Ae({message:t,type:e}){return e||(e="alert"),t?l("div",{role:"alert",className:`fixed bottom-20 left-0 w-full p-2 font-semibold text-center ${{alert:"bg-yellow-200",error:"bg-red-200"}[e]} text-gray-800`},t):null}function $e(){const[t,e]=x(0),[n,s]=x({message:"",type:"alert"});function i(o,u){clearTimeout(t),s({message:o,type:u}),o&&e(self.setTimeout(()=>{s({message:"",type:u})},2500))}return[n,i]}const ct=999;function _t({guests:t,joinQueue:e,onEdit:n}){const[s,i]=x(!1),[o,u]=$e();async function _(){i(!0),u("");const c=ut(ct);try{await e()||u("Queue not open yet")}catch(h){if(h instanceof W)return u("Error: try again","error");throw h}finally{await c,i(!1)}}return l(w,null,l("div",{className:"mt-5 text-xl"},l("h2",{className:"inline"},"Your Party"),l("span",null,l("button",{onClick:n,className:"ml-3 px-2 py-1.5 rounded-lg bg-blue-500 text-white text-xs uppercase font-semibold tracking-wide align-middle focus:outline-none focus:ring focus:ring-blue-600 focus:ring-offset-2"},"Edit"))),l(G,{guests:t}),l(R,{disabled:s,onClick:_},"Join Boarding Group"),l(Ae,C({},o)))}function Z({queue:t,queues:e,onChange:n}){return e||(e=[]),l("h1",{className:"border-b-2 border-gray-200 text-xl font-semibold"},e.length<=1?l("span",{className:"block w-full p-1 whitespace-nowrap overflow-hidden overflow-ellipsis"},t.name):l("select",{className:"block w-full border-none p-1 pr-7 bg-right bg-transparent text-xl font-semibold focus:ring-0",onChange:s=>n?n(s.currentTarget.value):null},e.map(s=>l("option",{selected:s===t,key:s.queueId,value:s.queueId,className:"text-base font-normal"},s.name))))}const ft={success:5e3,failure:1e3};function dt({guests:t,result:e,onDone:n}){const{boardingGroup:s,conflicts:i}=e,o=t.filter(h=>!(h.guestId in i)),u=t.filter(h=>h.guestId in i),[_,c]=x(!0);return I(()=>{setTimeout(()=>c(!1),ft[s?"success":"failure"])},[s]),l(w,null,s?l(w,null,l("h2",{className:"mt-5 text-xl"},"Boarding Group: ",s),l(G,{guests:o}),Object.keys(i).length>0?l(w,null,l("p",{className:"font-semibold"},"These guests could not join:"),l(G,{guests:u,conflicts:i})):null,l("p",null,"Refer to the My Disney Experience app for return time and other information.")):l(w,null,l("h2",{className:"mt-5 text-xl"},"Sorry!"),l("p",null,"A boarding group could not be obtained."),l(G,{guests:u,conflicts:i})),_?null:l(R,{onClick:n},"Done"))}const Ge="https://widget.time.is/t.js";function ht(){if([...document.scripts].some(e=>e.src===Ge))return;const t=document.createElement("script");t.src=Ge,t.onload=He,document.head.appendChild(t)}const Le={};function He(){"time_is_widget"in self&&self.time_is_widget.init(Le)}function mt(t){ht(),Le[t]={},He()}function Ue(t,e){const n=document.getElementById(t);if(!n||n.firstElementChild)return e();n.textContent=q().time.slice(0,8),setTimeout(()=>Ue(t,e),100)}function pt({id:t,onSync:e}){return I(()=>{mt(t),Ue(t,e)},[t,e]),l("time",{id:t})}const gt={Orlando:"Orlando_z161",Anaheim:"Anaheim_z14e"},yt=5e3;function Oe({city:t,queue:e}){const[n,s]=x(null);I(()=>{setTimeout(()=>s(o=>o||!1),yt)},[]);const i=it(()=>s(!0),[]);return l("table",{className:"mt-4 mx-auto text-gray-500"},l(Me,{heading:"Next queue opening",time:l("time",null,e.nextScheduledOpenTime||"--:--:--")}),l(Me,{heading:l("a",{href:`https://time.is/${t}`,id:"time_is_link",target:"_blank",rel:"noreferrer"},"Current time"),time:l(w,null,l(pt,{id:gt[t],onSync:i}),n===!1?l("span",{className:"text-sm font-sans font-semibold text-red-500"}," ","(unsynced)"):null)}))}function Me({heading:t,time:e}){return l("tr",null,l("th",{scope:"row",className:"pr-3 text-right text-xs font-semibold uppercase"},t,":"),l("td",{className:"text-xl font-mono leading-tight"},"\uFEFF",e))}function vt({queue:t}){return l("div",null,t.howToEnterMessage.split(`

`).map((e,n)=>l("p",{key:n},e)))}const bt={WDW:"Orlando",DL:"Anaheim"};function wt({client:t}){const[e,n]=x([]),[s,i]=x(null),[o,u]=x([]),[_,c]=x([]),[h,r]=x({boardingGroup:null,conflicts:{},closed:!0}),[p,f]=x("ChooseParty"),[a,m]=$e();I(()=>{(async()=>{const y=await t.getQueues();n(y),i(y[0])})()},[t]),I(()=>{if(!s)return;let y=!1;return(async()=>{var T;const b=await t.getLinkedGuests(s);if(!y){u(b);const K=[];for(let L=0;(T=b[L])==null?void 0:T.isPreselected;++L)K[L]=b[L];c(K)}})(),()=>{y=!0}},[t,s]),I(()=>scrollTo(0,0),[p]);function S(y){const b=_.slice();b[y]?delete b[y]:b[y]=o[y];const T=Number(s==null?void 0:s.maxPartySize);T>0&&Object.values(b).length>T?m(`Max party size: ${T}`,"error"):(c(b),m(""))}function g(y){const b=e.find(T=>T.queueId===y);b&&i(b)}async function v(){return!s||!(await t.getQueue(s)).isAcceptingJoins?!1:(r(await t.joinQueue(s,Object.values(_))),f("BGResult"),!0)}if(!s)return null;const k=bt[t.resort];return{ChooseParty:l(w,null,l(Z,{queue:s,queues:e,onChange:g}),l(vt,{queue:s}),l(Oe,{city:k,queue:s}),l(at,{guests:o,party:_,onToggle:S,onConfirm:()=>f("JoinQueue")}),l(Ae,C({},a))),JoinQueue:l(w,null,l(Z,{queue:s}),l(Oe,{city:k,queue:s}),l(_t,{guests:Object.values(_),onEdit:()=>f("ChooseParty"),joinQueue:v})),BGResult:l(w,null,l(Z,{queue:s}),l(dt,{guests:Object.values(_),result:h,onDone:()=>f("ChooseParty")}))}[p]}function kt({onAccept:t}){return l(w,null,l("h1",{className:"text-xl font-semibold"},"Warning!"),l("p",null,'Use at your own risk. BG1 is highly experimental, for demonstration purposes only, and provided "as is" without warranty of any kind. It could stop working at any time for any reason. There is no guarantee that using BG1 will actually help you obtain a boarding group, and it should not be relied on for this or any other purpose. Always use the official Disney app.'),l(R,{onClick:t},"Accept"))}function xt(t=localStorage,e="bg1:disclaimerAccepted"){const[n,s]=x(!!t.getItem(e));return I(()=>{n&&t.setItem(e,"1")},[n,t,e]),[n,()=>s(!0)]}const Nt="17b993bd1a4",Be=`https://cdn.registerdisney.go.com/v2/TPR-WDW-LBSDK.IOS-PROD/en-US?include=l10n,config,html,js&buildId=${Nt}`;function It(t){return"deferredUuid"in t&&t.deferredUuid!==void 0}class St{constructor(e,n,s=!1){this.iframe=e,this.logging=s,this.handlers={},this.handshakeAcked=!1,this.onMessage=i=>{if(i.source!==this.iframe.contentWindow||i.data==="inner.loaded")return;const o=JSON.parse(i.data);this.logging&&console.log("Message:",o);const u=o.type==="message"?o.eventName:o.type,_=this.handlers[u],c=_?_("data"in o?o.data:null):void 0;It(o)&&this.send({type:"deferred",action:"resolve",deferredUuid:o.deferredUuid,data:c!=null?c:{}})},this.on("handshake",()=>{this.handshakeAcked||(this.handshakeAcked=!0,this.send({type:"handshakeAck"}),this.logging&&this.sendMessage("setLogLevel",{level:"log"}),this.sendMessage("workflow.execute",{name:"login"}))}),this.on("lightbox.hide",()=>this.open()),this.on("session.loggedin",({token:i})=>{n(i.access_token,new Date(i.expires))})}open(){addEventListener("message",this.onMessage),this.iframe.src=Be.toString(),this.handshakeAcked=!1}close(){removeEventListener("message",this.onMessage)}on(e,n){this.handlers[e]=n}sendMessage(e,n){this.send({type:"message",eventName:e,data:n})}send(e){var n;(n=this.iframe.contentWindow)==null||n.postMessage(JSON.stringify(te(C({},e),{name:"lightbox-client-window"})),Be)}}function Tt({onLogin:t}){const e=rt(null);return I(()=>{if(!e.current)return;const n=new St(e.current,t);return n.open(),()=>n.close()},[e,t]),l("iframe",{title:"Disney Login Form",ref:e,className:"fixed top-0 left-0 w-full h-full border-0"})}function Dt({accessToken:t,client:e}){const[n,s]=x("Blank"),[i,o]=xt();I(()=>{if(!i)return s("Disclaimer");try{t.get()}catch(c){if(c instanceof ve)return s("LoginForm");throw c}s("BGClient")},[t,i]);function u(c,h){t.set(c,h),s("BGClient")}return l("div",{className:"max-w-2xl mx-auto px-3 py-2"},{Blank:l("div",null),Disclaimer:l(kt,{onAccept:o}),LoginForm:l(Tt,{onLogin:u}),BGClient:l(wt,{client:e})}[n])}const{origin:Fe}=location;if(tt(Fe)){document.head.innerHTML+=`
    <meta name=viewport content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>BG1</title>
  `;const{body:t}=document;t.className="bg-gray-50 text-black",t.addEventListener("click",()=>null);const e=new Xe("bg1:accessToken"),n=new st(Fe,et,()=>e.get());Ke({WDW:"America/New_York",DL:"America/Los_Angeles"}[n.resort]),Ze(l(Dt,{accessToken:e,client:n}),t)}else location.href="https://joelface.github.io/bg1/start.html";
