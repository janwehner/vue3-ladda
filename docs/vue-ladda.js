/*! For license information please see vue-ladda.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueLadda=e():t.VueLadda=e()}(self,(function(){return(()=>{"use strict";var t={51:(t,e,a)=>{var n=a(645);a.n(n)()((function(t){return t[1]})).push([t.id,'/*!\r\n * Ladda including the default theme.\r\n *//*!\r\n * Ladda\r\n * http://lab.hakim.se/ladda\r\n * MIT licensed\r\n *\r\n * Copyright (C) 2018 Hakim El Hattab, http://hakim.se\r\n */@keyframes ladda-spinner-line-fade{0%,100%{opacity:0.22}1%{opacity:1}}.ladda-button{position:relative}.ladda-button .ladda-spinner{position:absolute;z-index:2;display:inline-block;width:32px;top:50%;margin-top:0;opacity:0;pointer-events:none}.ladda-button .ladda-label{position:relative;z-index:3}.ladda-button .ladda-progress{position:absolute;width:0;height:100%;left:0;top:0;background:rgba(0,0,0,0.2);display:none;transition:0.1s linear all !important}.ladda-button[data-loading] .ladda-progress{display:block}.ladda-button,.ladda-button .ladda-spinner,.ladda-button .ladda-label{transition:0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) all !important}.ladda-button[data-style=zoom-in],.ladda-button[data-style=zoom-in] .ladda-spinner,.ladda-button[data-style=zoom-in] .ladda-label,.ladda-button[data-style=zoom-out],.ladda-button[data-style=zoom-out] .ladda-spinner,.ladda-button[data-style=zoom-out] .ladda-label{transition:0.3s ease all !important}.ladda-button[data-style=expand-right] .ladda-spinner{right:-6px}.ladda-button[data-style=expand-right][data-size="s"] .ladda-spinner,.ladda-button[data-style=expand-right][data-size="xs"] .ladda-spinner{right:-12px}.ladda-button[data-style=expand-right][data-loading]{padding-right:56px}.ladda-button[data-style=expand-right][data-loading] .ladda-spinner{opacity:1}.ladda-button[data-style=expand-right][data-loading][data-size="s"],.ladda-button[data-style=expand-right][data-loading][data-size="xs"]{padding-right:40px}.ladda-button[data-style=expand-left] .ladda-spinner{left:26px}.ladda-button[data-style=expand-left][data-size="s"] .ladda-spinner,.ladda-button[data-style=expand-left][data-size="xs"] .ladda-spinner{left:4px}.ladda-button[data-style=expand-left][data-loading]{padding-left:56px}.ladda-button[data-style=expand-left][data-loading] .ladda-spinner{opacity:1}.ladda-button[data-style=expand-left][data-loading][data-size="s"],.ladda-button[data-style=expand-left][data-loading][data-size="xs"]{padding-left:40px}.ladda-button[data-style=expand-up]{overflow:hidden}.ladda-button[data-style=expand-up] .ladda-spinner{top:-32px;left:50%;margin-left:0}.ladda-button[data-style=expand-up][data-loading]{padding-top:54px}.ladda-button[data-style=expand-up][data-loading] .ladda-spinner{opacity:1;top:26px;margin-top:0}.ladda-button[data-style=expand-up][data-loading][data-size="s"],.ladda-button[data-style=expand-up][data-loading][data-size="xs"]{padding-top:32px}.ladda-button[data-style=expand-up][data-loading][data-size="s"] .ladda-spinner,.ladda-button[data-style=expand-up][data-loading][data-size="xs"] .ladda-spinner{top:4px}.ladda-button[data-style=expand-down]{overflow:hidden}.ladda-button[data-style=expand-down] .ladda-spinner{top:62px;left:50%;margin-left:0}.ladda-button[data-style=expand-down][data-size="s"] .ladda-spinner,.ladda-button[data-style=expand-down][data-size="xs"] .ladda-spinner{top:40px}.ladda-button[data-style=expand-down][data-loading]{padding-bottom:54px}.ladda-button[data-style=expand-down][data-loading] .ladda-spinner{opacity:1}.ladda-button[data-style=expand-down][data-loading][data-size="s"],.ladda-button[data-style=expand-down][data-loading][data-size="xs"]{padding-bottom:32px}.ladda-button[data-style=slide-left]{overflow:hidden}.ladda-button[data-style=slide-left] .ladda-label{position:relative}.ladda-button[data-style=slide-left] .ladda-spinner{left:100%;margin-left:0}.ladda-button[data-style=slide-left][data-loading] .ladda-label{opacity:0;left:-100%}.ladda-button[data-style=slide-left][data-loading] .ladda-spinner{opacity:1;left:50%}.ladda-button[data-style=slide-right]{overflow:hidden}.ladda-button[data-style=slide-right] .ladda-label{position:relative}.ladda-button[data-style=slide-right] .ladda-spinner{right:100%;margin-left:0;left:16px}[dir="rtl"] .ladda-button[data-style=slide-right] .ladda-spinner{right:auto}.ladda-button[data-style=slide-right][data-loading] .ladda-label{opacity:0;left:100%}.ladda-button[data-style=slide-right][data-loading] .ladda-spinner{opacity:1;left:50%}.ladda-button[data-style=slide-up]{overflow:hidden}.ladda-button[data-style=slide-up] .ladda-label{position:relative}.ladda-button[data-style=slide-up] .ladda-spinner{left:50%;margin-left:0;margin-top:1em}.ladda-button[data-style=slide-up][data-loading] .ladda-label{opacity:0;top:-1em}.ladda-button[data-style=slide-up][data-loading] .ladda-spinner{opacity:1;margin-top:0}.ladda-button[data-style=slide-down]{overflow:hidden}.ladda-button[data-style=slide-down] .ladda-label{position:relative}.ladda-button[data-style=slide-down] .ladda-spinner{left:50%;margin-left:0;margin-top:-2em}.ladda-button[data-style=slide-down][data-loading] .ladda-label{opacity:0;top:1em}.ladda-button[data-style=slide-down][data-loading] .ladda-spinner{opacity:1;margin-top:0}.ladda-button[data-style=zoom-out]{overflow:hidden}.ladda-button[data-style=zoom-out] .ladda-spinner{left:50%;margin-left:32px;transform:scale(2.5)}.ladda-button[data-style=zoom-out] .ladda-label{position:relative;display:inline-block}.ladda-button[data-style=zoom-out][data-loading] .ladda-label{opacity:0;transform:scale(0.5)}.ladda-button[data-style=zoom-out][data-loading] .ladda-spinner{opacity:1;margin-left:0;transform:none}.ladda-button[data-style=zoom-in]{overflow:hidden}.ladda-button[data-style=zoom-in] .ladda-spinner{left:50%;margin-left:-16px;transform:scale(0.2)}.ladda-button[data-style=zoom-in] .ladda-label{position:relative;display:inline-block}.ladda-button[data-style=zoom-in][data-loading] .ladda-label{opacity:0;transform:scale(2.2)}.ladda-button[data-style=zoom-in][data-loading] .ladda-spinner{opacity:1;margin-left:0;transform:none}.ladda-button[data-style=contract]{overflow:hidden;width:100px}.ladda-button[data-style=contract] .ladda-spinner{left:50%;margin-left:0}.ladda-button[data-style=contract][data-loading]{border-radius:50%;width:52px}.ladda-button[data-style=contract][data-loading] .ladda-label{opacity:0}.ladda-button[data-style=contract][data-loading] .ladda-spinner{opacity:1}.ladda-button[data-style=contract-overlay]{overflow:hidden;width:100px;box-shadow:0px 0px 0px 2000px rgba(0,0,0,0)}.ladda-button[data-style=contract-overlay] .ladda-spinner{left:50%;margin-left:0}.ladda-button[data-style=contract-overlay][data-loading]{border-radius:50%;width:52px;box-shadow:0px 0px 0px 2000px rgba(0,0,0,0.8)}.ladda-button[data-style=contract-overlay][data-loading] .ladda-label{opacity:0}.ladda-button[data-style=contract-overlay][data-loading] .ladda-spinner{opacity:1}[dir="rtl"] .ladda-spinner>div{left:25% !important}.ladda-button{background:#666;border:0;padding:14px 18px;font-size:18px;cursor:pointer;color:#fff;border-radius:2px;border:1px solid transparent;-webkit-appearance:none;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0)}.ladda-button:hover{border-color:rgba(0,0,0,0.07);background-color:#888}.ladda-button[data-color=green]{background:#2aca76}.ladda-button[data-color=green]:hover{background-color:#38d683}.ladda-button[data-color=blue]{background:#53b5e6}.ladda-button[data-color=blue]:hover{background-color:#69bfe9}.ladda-button[data-color=red]{background:#ea8557}.ladda-button[data-color=red]:hover{background-color:#ed956e}.ladda-button[data-color=purple]{background:#9973C2}.ladda-button[data-color=purple]:hover{background-color:#a685ca}.ladda-button[data-color=mint]{background:#16a085}.ladda-button[data-color=mint]:hover{background-color:#19b698}.ladda-button[disabled],.ladda-button[data-loading]{border-color:rgba(0,0,0,0.07)}.ladda-button[disabled],.ladda-button[disabled]:hover,.ladda-button[data-loading],.ladda-button[data-loading]:hover{cursor:default;background-color:#999}.ladda-button[data-size=xs]{padding:4px 8px}.ladda-button[data-size=xs] .ladda-label{font-size:0.7em}.ladda-button[data-size=s]{padding:6px 10px}.ladda-button[data-size=s] .ladda-label{font-size:0.9em}.ladda-button[data-size=l] .ladda-label{font-size:1.2em}.ladda-button[data-size=xl] .ladda-label{font-size:1.5em}\n',""])},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a=t(e);return e[2]?"@media ".concat(e[2]," {").concat(a,"}"):a})).join("")},e.i=function(t,a,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(o[d]=!0)}for(var r=0;r<t.length;r++){var i=[].concat(t[r]);n&&o[i[0]]||(a&&(i[2]?i[2]="".concat(a," and ").concat(i[2]):i[2]=a),e.push(i))}},e}}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var l=e[n]={id:n,exports:{}};return t[n](l,l.exports,a),l.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{function t(t,e){const a=Object.create(null),n=t.split(",");for(let t=0;t<n.length;t++)a[n[t]]=!0;return e?t=>!!a[t.toLowerCase()]:t=>!!a[t]}a.r(n),a.d(n,{default:()=>De});const e=t("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt");function o(t){if(y(t)){const e={};for(let a=0;a<t.length;a++){const n=t[a],l=o(x(n)?r(n):n);if(l)for(const t in l)e[t]=l[t]}return e}if(w(t))return t}const l=/;(?![^(]*\))/g,d=/:(.+)/;function r(t){const e={};return t.split(l).forEach((t=>{if(t){const a=t.split(d);a.length>1&&(e[a[0].trim()]=a[1].trim())}})),e}function i(t){let e="";if(x(t))e=t;else if(y(t))for(let a=0;a<t.length;a++){const n=i(t[a]);n&&(e+=n+" ")}else if(w(t))for(const a in t)t[a]&&(e+=a+" ");return e.trim()}const s={},u=[],c=()=>{},p=/^on[^a-z]/,f=t=>p.test(t),h=Object.assign,b=Object.prototype.hasOwnProperty,g=(t,e)=>b.call(t,e),y=Array.isArray,m=t=>"[object Map]"===k(t),v=t=>"function"==typeof t,x=t=>"string"==typeof t,_=t=>"symbol"==typeof t,w=t=>null!==t&&"object"==typeof t,z=Object.prototype.toString,k=t=>z.call(t),S=t=>x(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,C=t=>{const e=Object.create(null);return a=>e[a]||(e[a]=t(a))},O=/-(\w)/g,R=(C((t=>t.replace(O,((t,e)=>e?e.toUpperCase():"")))),/\B([A-Z])/g),A=(C((t=>t.replace(R,"-$1").toLowerCase())),C((t=>t.charAt(0).toUpperCase()+t.slice(1)))),E=(C((t=>t?`on${A(t)}`:"")),(t,e)=>t!==e&&(t==t||e==e)),j=new WeakMap,I=[];let N;const P=Symbol(""),M=Symbol("");function $(t,e=s){(function(t){return t&&!0===t._isEffect})(t)&&(t=t.raw);const a=function(t,e){const a=function(){if(!a.active)return e.scheduler?void 0:t();if(!I.includes(a)){U(a);try{return V.push(L),L=!0,I.push(a),N=a,t()}finally{I.pop(),W(),N=I[I.length-1]}}};return a.id=T++,a.allowRecurse=!!e.allowRecurse,a._isEffect=!0,a.active=!0,a.raw=t,a.deps=[],a.options=e,a}(t,e);return e.lazy||a(),a}function F(t){t.active&&(U(t),t.options.onStop&&t.options.onStop(),t.active=!1)}let T=0;function U(t){const{deps:e}=t;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(t);e.length=0}}let L=!0;const V=[];function B(){V.push(L),L=!1}function W(){const t=V.pop();L=void 0===t||t}function q(t,e,a){if(!L||void 0===N)return;let n=j.get(t);n||j.set(t,n=new Map);let o=n.get(a);o||n.set(a,o=new Set),o.has(N)||(o.add(N),N.deps.push(o))}function H(t,e,a,n,o,l){const d=j.get(t);if(!d)return;const r=new Set,i=t=>{t&&t.forEach((t=>{(t!==N||t.allowRecurse)&&r.add(t)}))};if("clear"===e)d.forEach(i);else if("length"===a&&y(t))d.forEach(((t,e)=>{("length"===e||e>=n)&&i(t)}));else switch(void 0!==a&&i(d.get(a)),e){case"add":y(t)?S(a)&&i(d.get("length")):(i(d.get(P)),m(t)&&i(d.get(M)));break;case"delete":y(t)||(i(d.get(P)),m(t)&&i(d.get(M)));break;case"set":m(t)&&i(d.get(P))}r.forEach((t=>{t.options.scheduler?t.options.scheduler(t):t()}))}const Z=t("__proto__,__v_isRef,__isVue"),K=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(_)),D=Y(),J=Y(!1,!0),X=Y(!0),G=Y(!0,!0),Q={};function Y(t=!1,e=!1){return function(a,n,o){if("__v_isReactive"===n)return!t;if("__v_isReadonly"===n)return t;if("__v_raw"===n&&o===(t?kt:zt).get(a))return a;const l=y(a);if(!t&&l&&g(Q,n))return Reflect.get(Q,n,o);const d=Reflect.get(a,n,o);return(_(n)?K.has(n):Z(n))?d:(t||q(a,0,n),e?d:It(d)?l&&S(n)?d:d.value:w(d)?t?Ct(d):St(d):d)}}function tt(t=!1){return function(e,a,n,o){const l=e[a];if(!t&&(n=jt(n),!y(e)&&It(l)&&!It(n)))return l.value=n,!0;const d=y(e)&&S(a)?Number(a)<e.length:g(e,a),r=Reflect.set(e,a,n,o);return e===jt(o)&&(d?E(n,l)&&H(e,"set",a,n):H(e,"add",a,n)),r}}["includes","indexOf","lastIndexOf"].forEach((t=>{const e=Array.prototype[t];Q[t]=function(...t){const a=jt(this);for(let t=0,e=this.length;t<e;t++)q(a,0,t+"");const n=e.apply(a,t);return-1===n||!1===n?e.apply(a,t.map(jt)):n}})),["push","pop","shift","unshift","splice"].forEach((t=>{const e=Array.prototype[t];Q[t]=function(...t){B();const a=e.apply(this,t);return W(),a}}));const et={get:D,set:tt(),deleteProperty:function(t,e){const a=g(t,e),n=(t[e],Reflect.deleteProperty(t,e));return n&&a&&H(t,"delete",e,void 0),n},has:function(t,e){const a=Reflect.has(t,e);return _(e)&&K.has(e)||q(t,0,e),a},ownKeys:function(t){return q(t,0,y(t)?"length":P),Reflect.ownKeys(t)}},at={get:X,set:(t,e)=>!0,deleteProperty:(t,e)=>!0},nt=(h({},et,{get:J,set:tt(!0)}),h({},at,{get:G}),t=>w(t)?St(t):t),ot=t=>w(t)?Ct(t):t,lt=t=>t,dt=t=>Reflect.getPrototypeOf(t);function rt(t,e,a=!1,n=!1){const o=jt(t=t.__v_raw),l=jt(e);e!==l&&!a&&q(o,0,e),!a&&q(o,0,l);const{has:d}=dt(o),r=a?ot:n?lt:nt;return d.call(o,e)?r(t.get(e)):d.call(o,l)?r(t.get(l)):void 0}function it(t,e=!1){const a=this.__v_raw,n=jt(a),o=jt(t);return t!==o&&!e&&q(n,0,t),!e&&q(n,0,o),t===o?a.has(t):a.has(t)||a.has(o)}function st(t,e=!1){return t=t.__v_raw,!e&&q(jt(t),0,P),Reflect.get(t,"size",t)}function ut(t){t=jt(t);const e=jt(this);return dt(e).has.call(e,t)||(e.add(t),H(e,"add",t,t)),this}function ct(t,e){e=jt(e);const a=jt(this),{has:n,get:o}=dt(a);let l=n.call(a,t);l||(t=jt(t),l=n.call(a,t));const d=o.call(a,t);return a.set(t,e),l?E(e,d)&&H(a,"set",t,e):H(a,"add",t,e),this}function pt(t){const e=jt(this),{has:a,get:n}=dt(e);let o=a.call(e,t);o||(t=jt(t),o=a.call(e,t)),n&&n.call(e,t);const l=e.delete(t);return o&&H(e,"delete",t,void 0),l}function ft(){const t=jt(this),e=0!==t.size,a=t.clear();return e&&H(t,"clear",void 0,void 0),a}function ht(t,e){return function(a,n){const o=this,l=o.__v_raw,d=jt(l),r=t?ot:e?lt:nt;return!t&&q(d,0,P),l.forEach(((t,e)=>a.call(n,r(t),r(e),o)))}}function bt(t,e,a){return function(...n){const o=this.__v_raw,l=jt(o),d=m(l),r="entries"===t||t===Symbol.iterator&&d,i="keys"===t&&d,s=o[t](...n),u=e?ot:a?lt:nt;return!e&&q(l,0,i?M:P),{next(){const{value:t,done:e}=s.next();return e?{value:t,done:e}:{value:r?[u(t[0]),u(t[1])]:u(t),done:e}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return"delete"!==t&&this}}const yt={get(t){return rt(this,t)},get size(){return st(this)},has:it,add:ut,set:ct,delete:pt,clear:ft,forEach:ht(!1,!1)},mt={get(t){return rt(this,t,!1,!0)},get size(){return st(this)},has:it,add:ut,set:ct,delete:pt,clear:ft,forEach:ht(!1,!0)},vt={get(t){return rt(this,t,!0)},get size(){return st(this,!0)},has(t){return it.call(this,t,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:ht(!0,!1)};function xt(t,e){const a=e?mt:t?vt:yt;return(e,n,o)=>"__v_isReactive"===n?!t:"__v_isReadonly"===n?t:"__v_raw"===n?e:Reflect.get(g(a,n)&&n in e?a:e,n,o)}["keys","values","entries",Symbol.iterator].forEach((t=>{yt[t]=bt(t,!1,!1),vt[t]=bt(t,!0,!1),mt[t]=bt(t,!1,!0)}));const _t={get:xt(!1,!1)},wt=(xt(!1,!0),{get:xt(!0,!1)}),zt=new WeakMap,kt=new WeakMap;function St(t){return t&&t.__v_isReadonly?t:Ot(t,!1,et,_t)}function Ct(t){return Ot(t,!0,at,wt)}function Ot(t,e,a,n){if(!w(t))return t;if(t.__v_raw&&(!e||!t.__v_isReactive))return t;const o=e?kt:zt,l=o.get(t);if(l)return l;const d=(r=t).__v_skip||!Object.isExtensible(r)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((t=>k(t).slice(8,-1))(r));var r;if(0===d)return t;const i=new Proxy(t,2===d?n:a);return o.set(t,i),i}function Rt(t){return At(t)?Rt(t.__v_raw):!(!t||!t.__v_isReactive)}function At(t){return!(!t||!t.__v_isReadonly)}function Et(t){return Rt(t)||At(t)}function jt(t){return t&&jt(t.__v_raw)||t}function It(t){return Boolean(t&&!0===t.__v_isRef)}function Nt(t,e,a,n){let o;try{o=n?t(...n):t()}catch(t){Mt(t,e,a)}return o}function Pt(t,e,a,n){if(v(t)){const l=Nt(t,e,a,n);return l&&w(o=l)&&v(o.then)&&v(o.catch)&&l.catch((t=>{Mt(t,e,a)})),l}var o;const l=[];for(let o=0;o<t.length;o++)l.push(Pt(t[o],e,a,n));return l}function Mt(t,e,a,n=!0){if(e&&e.vnode,e){let n=e.parent;const o=e.proxy,l=a;for(;n;){const e=n.ec;if(e)for(let a=0;a<e.length;a++)if(!1===e[a](t,o,l))return;n=n.parent}const d=e.appContext.config.errorHandler;if(d)return void Nt(d,null,10,[t,o,l])}!function(t,e,a,n=!0){console.error(t)}(t,0,0,n)}let $t=!1,Ft=!1;const Tt=[];let Ut=0;const Lt=[];let Vt=null,Bt=0;const Wt=[];let qt=null,Ht=0;const Zt=Promise.resolve();let Kt=null,Dt=null;function Jt(t){const e=Kt||Zt;return t?e.then(this?t.bind(this):t):e}function Xt(){$t||Ft||(Ft=!0,Kt=Zt.then(te))}function Gt(t,e,a,n){y(t)?a.push(...t):e&&e.includes(t,t.allowRecurse?n+1:n)||a.push(t),Xt()}function Qt(t,e=null){if(Lt.length){for(Dt=e,Vt=[...new Set(Lt)],Lt.length=0,Bt=0;Bt<Vt.length;Bt++)Vt[Bt]();Vt=null,Bt=0,Dt=null,Qt(t,e)}}const Yt=t=>null==t.id?1/0:t.id;function te(t){Ft=!1,$t=!0,Qt(t),Tt.sort(((t,e)=>Yt(t)-Yt(e)));try{for(Ut=0;Ut<Tt.length;Ut++){const t=Tt[Ut];t&&Nt(t,null,14)}}finally{Ut=0,Tt.length=0,function(t){if(Wt.length){const t=[...new Set(Wt)];if(Wt.length=0,qt)return void qt.push(...t);for(qt=t,qt.sort(((t,e)=>Yt(t)-Yt(e))),Ht=0;Ht<qt.length;Ht++)qt[Ht]();qt=null,Ht=0}}(),$t=!1,Kt=null,(Tt.length||Wt.length)&&te(t)}}new Set,new Map;let ee=null;function ae(t){return v(t)&&(t=t()),y(t)&&(t=function(t){let e;for(let a=0;a<t.length;a++){const n=t[a];if(!_e(n))return;if(n.type!==ge||"v-if"===n.children){if(e)return;e=n}}return e}(t)),Re(t)}let ne=0;const oe=t=>ne+=t;function le(t,e,a={},n){let o=t[e];ne++,ve();const l=o&&de(o(a)),d=xe(he,{key:a.key||`_${e}`},l||(n?n():[]),l&&1===t._?64:-2);return ne--,d}function de(t){return t.some((t=>!_e(t)||t.type!==ge&&!(t.type===he&&!de(t.children))))?t:null}const re=t=>(e,a=Pe)=>!$e&&function(t,e,a=Pe,n=!1){if(a){const o=a[t]||(a[t]=[]),l=e.__weh||(e.__weh=(...n)=>{if(a.isUnmounted)return;B(),Me(a);const o=Pt(e,a,t,n);return Me(null),W(),o});return n?o.unshift(l):o.push(l),l}}(t,e,a);re("bm"),re("m"),re("bu"),re("u"),re("bum");re("um"),re("rtg"),re("rtc");const ie={};function se(t,e,{immediate:a,deep:n,flush:o,onTrack:l,onTrigger:d}=s,r=Pe){let i,u,p=!1;if(It(t)?(i=()=>t.value,p=!!t._shallow):Rt(t)?(i=()=>t,n=!0):i=y(t)?()=>t.map((t=>It(t)?t.value:Rt(t)?ce(t):v(t)?Nt(t,r,2,[r&&r.proxy]):void 0)):v(t)?e?()=>Nt(t,r,2,[r&&r.proxy]):()=>{if(!r||!r.isUnmounted)return u&&u(),Nt(t,r,3,[f])}:c,e&&n){const t=i;i=()=>ce(t())}const f=t=>{u=m.options.onStop=()=>{Nt(t,r,4)}};let h=y(t)?[]:ie;const b=()=>{if(m.active)if(e){const t=m();(n||p||E(t,h))&&(u&&u(),Pt(e,r,3,[t,h===ie?void 0:h,f]),h=t)}else m()};let g;b.allowRecurse=!!e,g="sync"===o?b:"post"===o?()=>pe(b,r&&r.suspense):()=>{!r||r.isMounted?function(t){Gt(t,Vt,Lt,Bt)}(b):b()};const m=$(i,{lazy:!0,onTrack:l,onTrigger:d,scheduler:g});return function(t,e=Pe){e&&(e.effects||(e.effects=[])).push(t)}(m,r),e?a?b():h=m():"post"===o?pe(m,r&&r.suspense):m(),()=>{F(m),r&&((t,e)=>{const a=t.indexOf(e);a>-1&&t.splice(a,1)})(r.effects,m)}}function ue(t,e,a){const n=this.proxy;return se(x(t)?()=>n[t]:t.bind(n),e.bind(n),a,this)}function ce(t,e=new Set){if(!w(t)||e.has(t))return t;if(e.add(t),It(t))ce(t.value,e);else if(y(t))for(let a=0;a<t.length;a++)ce(t[a],e);else if("[object Set]"===k(t)||m(t))t.forEach((t=>{ce(t,e)}));else for(const a in t)ce(t[a],e);return t}Boolean,Boolean;RegExp,RegExp;const pe=function(t,e){e&&e.pendingBranch?y(t)?e.effects.push(...t):e.effects.push(t):Gt(t,qt,Wt,Ht)};const fe=Symbol(),he=Symbol(void 0),be=Symbol(void 0),ge=Symbol(void 0),ye=(Symbol(void 0),[]);let me=null;function ve(t=!1){ye.push(me=t?null:[])}function xe(t,e,a,n,o){const l=Se(t,e,a,n,o,!0);return l.dynamicChildren=me||u,ye.pop(),me=ye[ye.length-1]||null,me&&me.push(l),l}function _e(t){return!!t&&!0===t.__v_isVNode}const we="__vInternal",ze=({key:t})=>null!=t?t:null,ke=({ref:t})=>null!=t?x(t)||It(t)||v(t)?{i:ee,r:t}:t:null,Se=function(t,e=null,a=null,n=0,l=null,d=!1){if(t&&t!==fe||(t=ge),_e(t)){const n=Ce(t,e,!0);return a&&Ae(n,a),n}if(r=t,v(r)&&"__vccOpts"in r&&(t=t.__vccOpts),e){(Et(e)||we in e)&&(e=h({},e));let{class:t,style:a}=e;t&&!x(t)&&(e.class=i(t)),w(a)&&(Et(a)&&!y(a)&&(a=h({},a)),e.style=o(a))}var r;const s=x(t)?1:(t=>t.__isSuspense)(t)?128:(t=>t.__isTeleport)(t)?64:w(t)?4:v(t)?2:0,u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ze(e),ref:e&&ke(e),scopeId:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:l,dynamicChildren:null,appContext:null};if(Ae(u,a),128&s){const{content:t,fallback:e}=function(t){const{shapeFlag:e,children:a}=t;let n,o;return 32&e?(n=ae(a.default),o=ae(a.fallback)):(n=ae(a),o=Re(null)),{content:n,fallback:o}}(u);u.ssContent=t,u.ssFallback=e}return!d&&me&&(n>0||6&s)&&32!==n&&me.push(u),u};function Ce(t,e,a=!1){const{props:n,ref:l,patchFlag:d,children:r}=t,s=e?function(...t){const e=h({},t[0]);for(let a=1;a<t.length;a++){const n=t[a];for(const t in n)if("class"===t)e.class!==n.class&&(e.class=i([e.class,n.class]));else if("style"===t)e.style=o([e.style,n.style]);else if(f(t)){const a=e[t],o=n[t];a!==o&&(e[t]=a?[].concat(a,n[t]):o)}else""!==t&&(e[t]=n[t])}return e}(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&ze(s),ref:e&&e.ref?a&&l?y(l)?l.concat(ke(e)):[l,ke(e)]:ke(e):l,scopeId:t.scopeId,children:r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==he?-1===d?16:16|d:d,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ce(t.ssContent),ssFallback:t.ssFallback&&Ce(t.ssFallback),el:t.el,anchor:t.anchor}}function Oe(t=" ",e=0){return Se(be,null,t,e)}function Re(t){return null==t||"boolean"==typeof t?Se(ge):y(t)?Se(he,null,t):"object"==typeof t?null===t.el?t:Ce(t):Se(be,null,String(t))}function Ae(t,e){let a=0;const{shapeFlag:n}=t;if(null==e)e=null;else if(y(e))a=16;else if("object"==typeof e){if(1&n||64&n){const a=e.default;return void(a&&(a._c&&oe(1),Ae(t,a()),a._c&&oe(-1)))}{a=32;const t=e._;!t&&!(we in e)&&(e._ctx=ee)}}else v(e)?(e={default:e,_ctx:ee},a=32):(e=String(e),64&n?(a=16,e=[Oe(e)]):a=8);t.children=e,t.shapeFlag|=a}function Ee(t,e,a){const n=a.appContext.config.optionMergeStrategies,{mixins:o,extends:l}=e;l&&Ee(t,l,a),o&&o.forEach((e=>Ee(t,e,a)));for(const o in e)n&&g(n,o)?t[o]=n[o](t[o],e[o],a.proxy,o):t[o]=e[o]}const je=t=>t?4&t.vnode.shapeFlag?t.exposed?t.exposed:t.proxy:je(t.parent):null,Ie=h(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>je(t.parent),$root:t=>je(t.root),$emit:t=>t.emit,$options:t=>__VUE_OPTIONS_API__?function(t){const e=t.type,{__merged:a,mixins:n,extends:o}=e;if(a)return a;const l=t.appContext.mixins;if(!l.length&&!n&&!o)return e;const d={};return l.forEach((e=>Ee(d,e,t))),Ee(d,e,t),e.__merged=d}(t):t.type,$forceUpdate:t=>()=>function(t){if(!(Tt.length&&Tt.includes(t,$t&&t.allowRecurse?Ut+1:Ut)||t===Dt)){const e=function(t){let e=Ut+1,a=Tt.length;const n=Yt(t);for(;e<a;){const t=e+a>>>1;Yt(Tt[t])<n?e=t+1:a=t}return e}(t);e>-1?Tt.splice(e,0,t):Tt.push(t),Xt()}}(t.update),$nextTick:t=>Jt.bind(t.proxy),$watch:t=>__VUE_OPTIONS_API__?ue.bind(t):c}),Ne={get({_:t},e){const{ctx:a,setupState:n,data:o,props:l,accessCache:d,type:r,appContext:i}=t;if("__v_skip"===e)return!0;let u;if("$"!==e[0]){const r=d[e];if(void 0!==r)switch(r){case 0:return n[e];case 1:return o[e];case 3:return a[e];case 2:return l[e]}else{if(n!==s&&g(n,e))return d[e]=0,n[e];if(o!==s&&g(o,e))return d[e]=1,o[e];if((u=t.propsOptions[0])&&g(u,e))return d[e]=2,l[e];if(a!==s&&g(a,e))return d[e]=3,a[e];__VUE_OPTIONS_API__,d[e]=4}}const c=Ie[e];let p,f;return c?("$attrs"===e&&q(t,0,e),c(t)):(p=r.__cssModules)&&(p=p[e])?p:a!==s&&g(a,e)?(d[e]=3,a[e]):(f=i.config.globalProperties,g(f,e)?f[e]:void 0)},set({_:t},e,a){const{data:n,setupState:o,ctx:l}=t;if(o!==s&&g(o,e))o[e]=a;else if(n!==s&&g(n,e))n[e]=a;else if(g(t.props,e))return!1;return!("$"===e[0]&&e.slice(1)in t||(l[e]=a,0))},has({_:{data:t,setupState:e,accessCache:a,ctx:n,appContext:o,propsOptions:l}},d){let r;return void 0!==a[d]||t!==s&&g(t,d)||e!==s&&g(e,d)||(r=l[0])&&g(r,d)||g(n,d)||g(Ie,d)||g(o.config.globalProperties,d)}};h({},Ne,{get(t,e){if(e!==Symbol.unscopables)return Ne.get(t,e,t)},has:(t,a)=>"_"!==a[0]&&!e(a)}),Object.create(null);let Pe=null;const Me=t=>{Pe=t};let $e=!1;Symbol("");var Fe=Se("span",{class:"ladda-label"},"Submit",-1),Te=function(){return(Te=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var o in e=arguments[a])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},Ue={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},Le=function(){function t(t){void 0===t&&(t={}),this.opts=Te(Te({},Ue),t)}return t.prototype.spin=function(t){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),Ve(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),function(t,e){var a=Math.round(e.corners*e.width*500)/1e3+"px",n="none";!0===e.shadow?n="0 2px 4px #000":"string"==typeof e.shadow&&(n=e.shadow);for(var o=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,a=[],n=0,o=t.split(",");n<o.length;n++){var l=o[n].match(e);if(null!==l){var d=+l[2],r=+l[5],i=l[4],s=l[7];0!==d||i||(i=s),0!==r||s||(s=i),i===s&&a.push({prefix:l[1]||"",x:d,y:r,xUnits:i,yUnits:s,end:l[8]})}}return a}(n),l=0;l<e.lines;l++){var d=~~(360/e.lines*l+e.rotate),r=Ve(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:Be(e.fadeColor,l),borderRadius:a,transformOrigin:"left",transform:"rotate("+d+"deg) translateX("+e.radius+"px)"}),i=l*e.direction/e.lines/e.speed;i-=1/e.speed;var s=Ve(document.createElement("div"),{width:"100%",height:"100%",background:Be(e.color,l),borderRadius:a,boxShadow:We(o,d),animation:1/e.speed+"s linear "+i+"s infinite "+e.animation});r.appendChild(s),t.appendChild(r)}}(this.el,this.opts),this},t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t}();function Ve(t,e){for(var a in e)t.style[a]=e[a];return t}function Be(t,e){return"string"==typeof t?t:t[e%t.length]}function We(t,e){for(var a=[],n=0,o=t;n<o.length;n++){var l=o[n],d=qe(l.x,l.y,e);a.push(l.prefix+d[0]+l.xUnits+" "+d[1]+l.yUnits+l.end)}return a.join(", ")}function qe(t,e,a){var n=a*Math.PI/180,o=Math.sin(n),l=Math.cos(n);return[Math.round(1e3*(t*l+e*o))/1e3,Math.round(1e3*(-t*o+e*l))/1e3]}var He=[];const Ze={name:"VueLadda",props:{buttonClass:{type:[String,Object],default:"ladda-button"},dataStyle:{type:String,default:"expand-left"},loading:{type:Boolean,required:!0},progress:{validator:function(t){return t>=0&&t<=1},default:0}},watch:{loading:function(t){t?this.ladda.start():this.ladda.stop()},progress:function(t){this.ladda.setProgress(t)}},methods:{handleClick:function(t){this.$emit("click",t)}},mounted:function(){this.ladda=function(t){if(void 0!==t){if(t.classList.contains("ladda-button")||t.classList.add("ladda-button"),t.hasAttribute("data-style")||t.setAttribute("data-style","expand-right"),!t.querySelector(".ladda-label")){var e=document.createElement("span");e.className="ladda-label",a=t,n=e,(o=document.createRange()).selectNodeContents(a),o.surroundContents(n),a.appendChild(n)}var a,n,o,l,d,r=t.querySelector(".ladda-spinner");r||((r=document.createElement("span")).className="ladda-spinner"),t.appendChild(r);var i={start:function(){return l||(l=function(t){var e,a,n=t.offsetHeight;0===n&&(n=parseFloat(window.getComputedStyle(t).height)),n>32&&(n*=.8),t.hasAttribute("data-spinner-size")&&(n=parseInt(t.getAttribute("data-spinner-size"),10)),t.hasAttribute("data-spinner-color")&&(e=t.getAttribute("data-spinner-color")),t.hasAttribute("data-spinner-lines")&&(a=parseInt(t.getAttribute("data-spinner-lines"),10));var o=.2*n;return new Le({color:e||"#fff",lines:a||12,radius:o,length:.6*o,width:o<7?2:3,animation:"ladda-spinner-line-fade",zIndex:"auto",top:"auto",left:"auto",className:""})}(t)),t.disabled=!0,t.setAttribute("data-loading",""),clearTimeout(d),l.spin(r),this.setProgress(0),this},startAfter:function(t){return clearTimeout(d),d=setTimeout((function(){i.start()}),t),this},stop:function(){return i.isLoading()&&(t.disabled=!1,t.removeAttribute("data-loading")),clearTimeout(d),l&&(d=setTimeout((function(){l.stop()}),1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start()},setProgress:function(e){e=Math.max(Math.min(e,1),0);var a=t.querySelector(".ladda-progress");0===e&&a&&a.parentNode?a.parentNode.removeChild(a):(a||((a=document.createElement("div")).className="ladda-progress",t.appendChild(a)),a.style.width=(e||0)*t.offsetWidth+"px")},isLoading:function(){return t.hasAttribute("data-loading")},remove:function(){clearTimeout(d),t.disabled=!1,t.removeAttribute("data-loading"),l&&(l.stop(),l=null),He.splice(He.indexOf(i),1)}};return He.push(i),i}console.warn("Ladda button target must be defined.")}(this.$refs.ladda),this.loading?this.ladda.start():this.ladda.stop()},beforeUnmount:function(){this.ladda.remove(),delete this.ladda}};a(51),Ze.render=function(t,e,a,n,o,l){return ve(),xe("button",{class:a.buttonClass,ref:"ladda","data-style":a.dataStyle,onClick:e[1]||(e[1]=function(){return l.handleClick&&l.handleClick.apply(l,arguments)})},[le(t.$slots,"default",{},(function(){return[Fe]}))],10,["data-style"])};const Ke=Ze,De={install:function(t,e){t.component("vue-ladda",Ke)}}})(),n})()}));