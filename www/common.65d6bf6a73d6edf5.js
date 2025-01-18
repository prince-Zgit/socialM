"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(y,_,i)=>{i.d(_,{c:()=>r});var g=i(4261),d=i(1086),l=i(8607);const r=(n,s)=>{let t,e;const u=(c,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(c,w);E&&s(E)&&!E.disabled?E!==t&&(o(),a(E,p)):o()},a=(c,w)=>{t=c,e||(e=t);const p=t;(0,g.w)(()=>p.classList.add("ion-activated")),w()},o=(c=!1)=>{if(!t)return;const w=t;(0,g.w)(()=>w.classList.remove("ion-activated")),c&&e!==t&&t.click(),t=void 0};return(0,l.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>u(c.currentX,c.currentY,d.a),onMove:c=>u(c.currentX,c.currentY,d.b),onEnd:()=>{o(!0),(0,d.h)(),e=void 0}})}},8438:(y,_,i)=>{i.d(_,{g:()=>d});var g=i(8476);const d=()=>{if(void 0!==g.w)return g.w.Capacitor}},5572:(y,_,i)=>{i.d(_,{c:()=>g,i:()=>d});const g=(l,r,n)=>"function"==typeof n?n(l,r):"string"==typeof n?l[n]===r[n]:Array.isArray(r)?r.includes(l):l===r,d=(l,r,n)=>void 0!==l&&(Array.isArray(l)?l.some(s=>g(s,r,n)):g(l,r,n))},3351:(y,_,i)=>{i.d(_,{g:()=>g});const g=(s,t,e,u,a)=>l(s[1],t[1],e[1],u[1],a).map(o=>d(s[0],t[0],e[0],u[0],o)),d=(s,t,e,u,a)=>a*(3*t*Math.pow(a-1,2)+a*(-3*e*a+3*e+u*a))-s*Math.pow(a-1,3),l=(s,t,e,u,a)=>n((u-=a)-3*(e-=a)+3*(t-=a)-(s-=a),3*e-6*t+3*s,3*t-3*s,s).filter(c=>c>=0&&c<=1),n=(s,t,e,u)=>{if(0===s)return((s,t,e)=>{const u=t*t-4*s*e;return u<0?[]:[(-t+Math.sqrt(u))/(2*s),(-t-Math.sqrt(u))/(2*s)]})(t,e,u);const a=(3*(e/=s)-(t/=s)*t)/3,o=(2*t*t*t-9*t*e+27*(u/=s))/27;if(0===a)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-a),-Math.sqrt(-a)];const c=Math.pow(o/2,2)+Math.pow(a/3,3);if(0===c)return[Math.pow(o/2,.5)-t/3];if(c>0)return[Math.pow(-o/2+Math.sqrt(c),1/3)-Math.pow(o/2+Math.sqrt(c),1/3)-t/3];const w=Math.sqrt(Math.pow(-a/3,3)),p=Math.acos(-o/(2*Math.sqrt(Math.pow(-a/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-t/3,E*Math.cos((p+2*Math.PI)/3)-t/3,E*Math.cos((p+4*Math.PI)/3)-t/3]}},5083:(y,_,i)=>{i.d(_,{i:()=>g});const g=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,_,i)=>{i.r(_),i.d(_,{startFocusVisible:()=>r});const g="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=n=>{let s=[],t=!0;const e=n?n.shadowRoot:document,u=n||document.body,a=M=>{s.forEach(h=>h.classList.remove(g)),M.forEach(h=>h.classList.add(g)),s=M},o=()=>{t=!1,a([])},c=M=>{t=l.includes(M.key),t||a([])},w=M=>{if(t&&void 0!==M.composedPath){const h=M.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));a(h)}},p=()=>{e.activeElement===u&&a([])};return e.addEventListener("keydown",c),e.addEventListener("focusin",w),e.addEventListener("focusout",p),e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("mousedown",o),{destroy:()=>{e.removeEventListener("keydown",c),e.removeEventListener("focusin",w),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",o),e.removeEventListener("mousedown",o)},setFocus:a}}},1086:(y,_,i)=>{i.d(_,{I:()=>d,a:()=>t,b:()=>e,c:()=>s,d:()=>a,h:()=>u});var g=i(8438),d=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(d||{});const r={getEngine(){const o=(0,g.g)();if(null!=o&&o.isPluginAvailable("Haptics"))return o.Plugins.Haptics},available(){if(!this.getEngine())return!1;const c=(0,g.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(o){const c=this.getEngine();c&&c.impact({style:o.style})},notification(o){const c=this.getEngine();c&&c.notification({type:o.type})},selection(){this.impact({style:d.Light})},selectionStart(){const o=this.getEngine();o&&o.selectionStart()},selectionChanged(){const o=this.getEngine();o&&o.selectionChanged()},selectionEnd(){const o=this.getEngine();o&&o.selectionEnd()}},n=()=>r.available(),s=()=>{n()&&r.selection()},t=()=>{n()&&r.selectionStart()},e=()=>{n()&&r.selectionChanged()},u=()=>{n()&&r.selectionEnd()},a=o=>{n()&&r.impact(o)}},909:(y,_,i)=>{i.d(_,{I:()=>s,a:()=>a,b:()=>n,c:()=>w,d:()=>E,f:()=>o,g:()=>u,i:()=>e,p:()=>p,r:()=>M,s:()=>c});var g=i(467),d=i(4920),l=i(4929);const n="ion-content",s=".ion-content-scroll-host",t=`${n}, ${s}`,e=h=>"ION-CONTENT"===h.tagName,u=function(){var h=(0,g.A)(function*(f){return e(f)?(yield new Promise(m=>(0,d.c)(f,m)),f.getScrollElement()):f});return function(m){return h.apply(this,arguments)}}(),a=h=>h.querySelector(s)||h.querySelector(t),o=h=>h.closest(t),c=(h,f)=>e(h)?h.scrollToTop(f):Promise.resolve(h.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),w=(h,f,m,O)=>e(h)?h.scrollByPoint(f,m,O):Promise.resolve(h.scrollBy({top:m,left:f,behavior:O>0?"smooth":"auto"})),p=h=>(0,l.b)(h,n),E=h=>{if(e(h)){const m=h.scrollY;return h.scrollY=!1,m}return h.style.setProperty("overflow","hidden"),!0},M=(h,f)=>{e(h)?h.scrollY=f:h.style.removeProperty("overflow")}},3992:(y,_,i)=>{i.d(_,{a:()=>g,b:()=>w,c:()=>t,d:()=>p,e:()=>L,f:()=>s,g:()=>E,h:()=>l,i:()=>d,j:()=>v,k:()=>C,l:()=>e,m:()=>o,n:()=>M,o:()=>a,p:()=>n,q:()=>r,r:()=>D,s:()=>P,t:()=>c,u:()=>m,v:()=>O,w:()=>u,x:()=>h,y:()=>f});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,_,i)=>{i.d(_,{c:()=>r,g:()=>n});var g=i(8476),d=i(4920),l=i(4929);const r=(t,e,u)=>{let a,o;if(void 0!==g.w&&"MutationObserver"in g.w){const E=Array.isArray(e)?e:[e];a=new MutationObserver(M=>{for(const h of M)for(const f of h.addedNodes)if(f.nodeType===Node.ELEMENT_NODE&&E.includes(f.slot))return u(),void(0,d.r)(()=>c(f))}),a.observe(t,{childList:!0,subtree:!0})}const c=E=>{var M;o&&(o.disconnect(),o=void 0),o=new MutationObserver(h=>{u();for(const f of h)for(const m of f.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===e&&p()}),o.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},p=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{a&&(a.disconnect(),a=void 0),p()}}},n=(t,e,u)=>{const a=null==t?0:t.toString().length,o=s(a,e);if(void 0===u)return o;try{return u(a,e)}catch(c){return(0,l.a)("Exception in provided `counterFormatter`.",c),o}},s=(t,e)=>`${t} / ${e}`},1622:(y,_,i)=>{i.r(_),i.d(_,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>D,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>a,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>o,trackViewportChanges:()=>O});var g=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",n="ionKeyboardDidHide";let t={},e={},u=!1;const a=()=>{t={},e={},u=!1},o=v=>{if(g.K.getEngine())c(v);else{if(!v.visualViewport)return;e=D(v.visualViewport),v.visualViewport.onresize=()=>{O(v),E()||M(v)?w(v):h(v)&&p(v)}}},c=v=>{v.addEventListener("keyboardDidShow",C=>w(v,C)),v.addEventListener("keyboardDidHide",()=>p(v))},w=(v,C)=>{f(v,C),u=!0},p=v=>{m(v),u=!1},E=()=>!u&&t.width===e.width&&(t.height-e.height)*e.scale>150,M=v=>u&&!h(v),h=v=>u&&e.height===v.innerHeight,f=(v,C)=>{const L=new CustomEvent(r,{detail:{keyboardHeight:C?C.keyboardHeight:v.innerHeight-e.height}});v.dispatchEvent(L)},m=v=>{const C=new CustomEvent(n);v.dispatchEvent(C)},O=v=>{t=Object.assign({},e),e=D(v.visualViewport)},D=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},4379:(y,_,i)=>{i.d(_,{K:()=>r,a:()=>l});var g=i(8438),d=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(d||{}),l=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(l||{});const r={getEngine(){const n=(0,g.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(s=>{if(s.code!==d.Unimplemented)throw s}):Promise.resolve(void 0)}}},4731:(y,_,i)=>{i.d(_,{c:()=>s});var g=i(467),d=i(8476),l=i(4379);const r=t=>{if(void 0===d.d||t===l.a.None||void 0===t)return null;const e=d.d.querySelector("ion-app");return null!=e?e:d.d.body},n=t=>{const e=r(t);return null===e?0:e.clientHeight},s=function(){var t=(0,g.A)(function*(e){let u,a,o,c;const w=function(){var f=(0,g.A)(function*(){const m=yield l.K.getResizeMode(),O=void 0===m?void 0:m.mode;u=()=>{void 0===c&&(c=n(O)),o=!0,p(o,O)},a=()=>{o=!1,p(o,O)},null==d.w||d.w.addEventListener("keyboardWillShow",u),null==d.w||d.w.addEventListener("keyboardWillHide",a)});return function(){return f.apply(this,arguments)}}(),p=(f,m)=>{e&&e(f,E(m))},E=f=>{if(0===c||c===n(f))return;const m=r(f);return null!==m?new Promise(O=>{const v=new ResizeObserver(()=>{m.clientHeight===c&&(v.disconnect(),O())});v.observe(m)}):void 0};return yield w(),{init:w,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",u),null==d.w||d.w.removeEventListener("keyboardWillHide",a),u=a=void 0},isKeyboardVisible:()=>o}});return function(u){return t.apply(this,arguments)}}()},7838:(y,_,i)=>{i.d(_,{c:()=>d});var g=i(467);const d=()=>{let l;return{lock:function(){var n=(0,g.A)(function*(){const s=l;let t;return l=new Promise(e=>t=e),void 0!==s&&(yield s),t});return function(){return n.apply(this,arguments)}}()}}},9001:(y,_,i)=>{i.d(_,{c:()=>l});var g=i(8476),d=i(4920);const l=(r,n,s)=>{let t;const e=()=>!(void 0===n()||void 0!==r.label||null===s()),a=()=>{const c=n();if(void 0===c)return;if(!e())return void c.style.removeProperty("width");const w=s().scrollWidth;if(0===w&&null===c.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==t)return;const p=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(a(),p.disconnect(),t=void 0)},{threshold:.01,root:r});p.observe(c)}else c.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{e()&&(0,d.r)(()=>{a()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(y,_,i)=>{i.d(_,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(l,r,n)=>{const s=l*r/n-l+"ms",t=2*Math.PI*r/n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(l,r,n)=>{const s=r/n,t=l*s-l+"ms",e=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,r,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":l*r/n-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":l*r/n-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/n-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/n-l+"ms"}})}}},7166:(y,_,i)=>{i.r(_),i.d(_,{createSwipeBackGesture:()=>n});var g=i(4920),d=i(5083),l=i(8607);i(1970);const n=(s,t,e,u,a)=>{const o=s.ownerDocument.defaultView;let c=(0,d.i)(s);const p=m=>c?-m.deltaX:m.deltaX;return(0,l.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(c=(0,d.i)(s),(m=>{const{startX:D}=m;return c?D>=o.innerWidth-50:D<=50})(m)&&t()),onStart:e,onMove:m=>{const D=p(m)/o.innerWidth;u(D)},onEnd:m=>{const O=p(m),D=o.innerWidth,v=O/D,C=(m=>c?-m.velocityX:m.velocityX)(m),L=C>=0&&(C>.2||O>D/2),x=(L?1-v:v)*D;let A=0;if(x>5){const b=x/Math.abs(C);A=Math.min(b,540)}a(L,v<=0?.01:(0,g.j)(0,v,.9999),A)}})}},2935:(y,_,i)=>{i.d(_,{w:()=>g});const g=(r,n,s)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{s(d(e,n))});return t.observe(r,{childList:!0,subtree:!0}),t},d=(r,n)=>{let s;return r.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)s=l(t.addedNodes[e],n)||s}),s},l=(r,n)=>{if(1!==r.nodeType)return;const s=r;return(s.tagName===n.toUpperCase()?[s]:Array.from(s.querySelectorAll(n))).find(e=>e.value===s.value)}},3366:(y,_,i)=>{i.d(_,{G:()=>s});var g=i(9437),d=i(6354),l=i(7673),r=i(4438),n=i(1626);let s=(()=>{var t;class e{constructor(a){this.http=a,this.baseUrl="../../assets/data/data.json"}getSampleData(){return this.http.get(this.baseUrl).pipe((0,g.W)(this.handleError("getSampleData",[])))}getFriends(){return this.http.get(this.baseUrl).pipe((0,d.T)(a=>a.friends),(0,g.W)(this.handleError("getFriends",[])))}getGroups(){return this.http.get(this.baseUrl).pipe((0,d.T)(a=>a.groups),(0,g.W)(this.handleError("getGroups",[])))}handleError(a="operation",o){return c=>(console.error(c),(0,l.of)(o))}}return(t=e).\u0275fac=function(a){return new(a||t)(r.KVO(n.Qq))},t.\u0275prov=r.jDH({token:t,factory:t.\u0275fac,providedIn:"root"}),e})()}}]);