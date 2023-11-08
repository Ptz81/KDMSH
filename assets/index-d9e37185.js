function q1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function _p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tp={exports:{}},Ya={},Np={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),Z1=Symbol.for("react.portal"),J1=Symbol.for("react.fragment"),eg=Symbol.for("react.strict_mode"),tg=Symbol.for("react.profiler"),ng=Symbol.for("react.provider"),rg=Symbol.for("react.context"),ig=Symbol.for("react.forward_ref"),og=Symbol.for("react.suspense"),ag=Symbol.for("react.memo"),lg=Symbol.for("react.lazy"),ff=Symbol.iterator;function sg(e){return e===null||typeof e!="object"?null:(e=ff&&e[ff]||e["@@iterator"],typeof e=="function"?e:null)}var Op={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$p=Object.assign,zp={};function Fr(e,t,n){this.props=e,this.context=t,this.refs=zp,this.updater=n||Op}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ap(){}Ap.prototype=Fr.prototype;function Wu(e,t,n){this.props=e,this.context=t,this.refs=zp,this.updater=n||Op}var Vu=Wu.prototype=new Ap;Vu.constructor=Wu;$p(Vu,Fr.prototype);Vu.isPureReactComponent=!0;var df=Array.isArray,Lp=Object.prototype.hasOwnProperty,Hu={current:null},Rp={key:!0,ref:!0,__self:!0,__source:!0};function Ip(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Lp.call(t,r)&&!Rp.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gi,type:e,key:o,ref:a,props:i,_owner:Hu.current}}function ug(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function cg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pf=/\/+/g;function Rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cg(""+e.key):t.toString(36)}function Bo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Gi:case Z1:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Rl(a,0):r,df(i)?(n="",e!=null&&(n=e.replace(pf,"$&/")+"/"),Bo(i,t,n,"",function(u){return u})):i!=null&&(Yu(i)&&(i=ug(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(pf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",df(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Rl(o,l);a+=Bo(o,t,n,s,i)}else if(s=sg(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Rl(o,l++),a+=Bo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function fo(e,t,n){if(e==null)return e;var r=[],i=0;return Bo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function fg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},Wo={transition:null},dg={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Hu};D.Children={map:fo,forEach:function(e,t,n){fo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fo(e,function(){t++}),t},toArray:function(e){return fo(e,function(t){return t})||[]},only:function(e){if(!Yu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Fr;D.Fragment=J1;D.Profiler=tg;D.PureComponent=Wu;D.StrictMode=eg;D.Suspense=og;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dg;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$p({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Hu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Lp.call(t,s)&&!Rp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Gi,type:e.type,key:i,ref:o,props:r,_owner:a}};D.createContext=function(e){return e={$$typeof:rg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ng,_context:e},e.Consumer=e};D.createElement=Ip;D.createFactory=function(e){var t=Ip.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:ig,render:e}};D.isValidElement=Yu;D.lazy=function(e){return{$$typeof:lg,_payload:{_status:-1,_result:e},_init:fg}};D.memo=function(e,t){return{$$typeof:ag,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return Oe.current.useCallback(e,t)};D.useContext=function(e){return Oe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};D.useEffect=function(e,t){return Oe.current.useEffect(e,t)};D.useId=function(){return Oe.current.useId()};D.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Oe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};D.useRef=function(e){return Oe.current.useRef(e)};D.useState=function(e){return Oe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Oe.current.useTransition()};D.version="18.2.0";Np.exports=D;var C=Np.exports;const Te=_p(C),ws=q1({__proto__:null,default:Te},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg=C,mg=Symbol.for("react.element"),hg=Symbol.for("react.fragment"),gg=Object.prototype.hasOwnProperty,vg=pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yg={key:!0,ref:!0,__self:!0,__source:!0};function Mp(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)gg.call(t,r)&&!yg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:mg,type:e,key:o,ref:a,props:i,_owner:vg.current}}Ya.Fragment=hg;Ya.jsx=Mp;Ya.jsxs=Mp;Tp.exports=Ya;var d=Tp.exports,ks={},Fp={exports:{}},Ke={},Dp={exports:{}},Up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,A){var L=T.length;T.push(A);e:for(;0<L;){var J=L-1>>>1,ie=T[J];if(0<i(ie,A))T[J]=A,T[L]=ie,L=J;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],L=T.pop();if(L!==A){T[0]=L;e:for(var J=0,ie=T.length,jt=ie>>>1;J<jt;){var Ue=2*(J+1)-1,Ht=T[Ue],Be=Ue+1,et=T[Be];if(0>i(Ht,L))Be<ie&&0>i(et,Ht)?(T[J]=et,T[Be]=L,J=Be):(T[J]=Ht,T[Ue]=L,J=Ue);else if(Be<ie&&0>i(et,L))T[J]=et,T[Be]=L,J=Be;else break e}}return A}function i(T,A){var L=T.sortIndex-A.sortIndex;return L!==0?L:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,p=null,g=3,y=!1,x=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=T)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function w(T){if(v=!1,h(T),!x)if(n(s)!==null)x=!0,jn(k);else{var A=n(u);A!==null&&Je(w,A.startTime-T)}}function k(T,A){x=!1,v&&(v=!1,m(N),N=-1),y=!0;var L=g;try{for(h(A),p=n(s);p!==null&&(!(p.expirationTime>A)||T&&!De());){var J=p.callback;if(typeof J=="function"){p.callback=null,g=p.priorityLevel;var ie=J(p.expirationTime<=A);A=e.unstable_now(),typeof ie=="function"?p.callback=ie:p===n(s)&&r(s),h(A)}else r(s);p=n(s)}if(p!==null)var jt=!0;else{var Ue=n(u);Ue!==null&&Je(w,Ue.startTime-A),jt=!1}return jt}finally{p=null,g=L,y=!1}}var E=!1,b=null,N=-1,M=5,R=-1;function De(){return!(e.unstable_now()-R<M)}function En(){if(b!==null){var T=e.unstable_now();R=T;var A=!0;try{A=b(!0,T)}finally{A?Pn():(E=!1,b=null)}}else E=!1}var Pn;if(typeof c=="function")Pn=function(){c(En)};else if(typeof MessageChannel<"u"){var uo=new MessageChannel,Al=uo.port2;uo.port1.onmessage=En,Pn=function(){Al.postMessage(null)}}else Pn=function(){S(En,0)};function jn(T){b=T,E||(E=!0,Pn())}function Je(T,A){N=S(function(){T(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,jn(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var L=g;g=A;try{return T()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=g;g=T;try{return A()}finally{g=L}},e.unstable_scheduleCallback=function(T,A,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,T){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=L+ie,T={id:f++,callback:A,priorityLevel:T,startTime:L,expirationTime:ie,sortIndex:-1},L>J?(T.sortIndex=L,t(u,T),n(s)===null&&T===n(u)&&(v?(m(N),N=-1):v=!0,Je(w,L-J))):(T.sortIndex=ie,t(s,T),x||y||(x=!0,jn(k))),T},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(T){var A=g;return function(){var L=g;g=A;try{return T.apply(this,arguments)}finally{g=L}}}})(Up);Dp.exports=Up;var xg=Dp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp=C,Qe=xg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wp=new Set,xi={};function Qn(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(xi[e]=t,e=0;e<t.length;e++)Wp.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bs=Object.prototype.hasOwnProperty,wg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mf={},hf={};function kg(e){return bs.call(hf,e)?!0:bs.call(mf,e)?!1:wg.test(e)?hf[e]=!0:(mf[e]=!0,!1)}function bg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sg(e,t,n,r){if(t===null||typeof t>"u"||bg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gu=/[\-:]([a-z])/g;function Qu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gu,Qu);be[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gu,Qu);be[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gu,Qu);be[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ku(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sg(t,n,i,r)&&(n=null),r||i===null?kg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Xu=Symbol.for("react.strict_mode"),Ss=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),Hp=Symbol.for("react.context"),qu=Symbol.for("react.forward_ref"),Cs=Symbol.for("react.suspense"),Es=Symbol.for("react.suspense_list"),Zu=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),Yp=Symbol.for("react.offscreen"),gf=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=gf&&e[gf]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Il;function ti(e){if(Il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Il=t&&t[1]||""}return`
`+Il+e}var Ml=!1;function Fl(e,t){if(!e||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ti(e):""}function Cg(e){switch(e.tag){case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function Ps(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case Jn:return"Portal";case Ss:return"Profiler";case Xu:return"StrictMode";case Cs:return"Suspense";case Es:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hp:return(e.displayName||"Context")+".Consumer";case Vp:return(e._context.displayName||"Context")+".Provider";case qu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zu:return t=e.displayName||null,t!==null?t:Ps(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return Ps(e(t))}catch{}}return null}function Eg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ps(t);case 8:return t===Xu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pg(e){var t=Gp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mo(e){e._valueTracker||(e._valueTracker=Pg(e))}function Qp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function js(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kp(e,t){t=t.checked,t!=null&&Ku(e,"checked",t,!1)}function _s(e,t){Kp(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ts(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ts(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ts(e,t,n){(t!=="number"||ca(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ni=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(ni(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function Xp(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,Zp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jg=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(e){jg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),li[t]=li[e]})});function Jp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||li.hasOwnProperty(e)&&li[e]?(""+t).trim():t+"px"}function em(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _g=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $s(e,t){if(t){if(_g[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function zs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As=null;function Ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,gr=null,vr=null;function kf(e){if(e=Xi(e)){if(typeof Ls!="function")throw Error(P(280));var t=e.stateNode;t&&(t=qa(t),Ls(e.stateNode,e.type,t))}}function tm(e){gr?vr?vr.push(e):vr=[e]:gr=e}function nm(){if(gr){var e=gr,t=vr;if(vr=gr=null,kf(e),t)for(e=0;e<t.length;e++)kf(t[e])}}function rm(e,t){return e(t)}function im(){}var Dl=!1;function om(e,t,n){if(Dl)return e(t,n);Dl=!0;try{return rm(e,t,n)}finally{Dl=!1,(gr!==null||vr!==null)&&(im(),nm())}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var r=qa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Rs=!1;if(Lt)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Rs=!1}function Tg(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var si=!1,fa=null,da=!1,Is=null,Ng={onError:function(e){si=!0,fa=e}};function Og(e,t,n,r,i,o,a,l,s){si=!1,fa=null,Tg.apply(Ng,arguments)}function $g(e,t,n,r,i,o,a,l,s){if(Og.apply(this,arguments),si){if(si){var u=fa;si=!1,fa=null}else throw Error(P(198));da||(da=!0,Is=u)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function am(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bf(e){if(Kn(e)!==e)throw Error(P(188))}function zg(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return bf(i),e;if(o===r)return bf(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function lm(e){return e=zg(e),e!==null?sm(e):null}function sm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sm(e);if(t!==null)return t;e=e.sibling}return null}var um=Qe.unstable_scheduleCallback,Sf=Qe.unstable_cancelCallback,Ag=Qe.unstable_shouldYield,Lg=Qe.unstable_requestPaint,se=Qe.unstable_now,Rg=Qe.unstable_getCurrentPriorityLevel,ec=Qe.unstable_ImmediatePriority,cm=Qe.unstable_UserBlockingPriority,pa=Qe.unstable_NormalPriority,Ig=Qe.unstable_LowPriority,fm=Qe.unstable_IdlePriority,Ga=null,Ct=null;function Mg(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Ga,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Ug,Fg=Math.log,Dg=Math.LN2;function Ug(e){return e>>>=0,e===0?32:31-(Fg(e)/Dg|0)|0}var go=64,vo=4194304;function ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ma(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ri(l):(o&=a,o!==0&&(r=ri(o)))}else a=n&~i,a!==0?r=ri(a):o!==0&&(r=ri(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Bg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-pt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=Bg(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Ms(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dm(){var e=go;return go<<=1,!(go&4194240)&&(go=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function Vg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function tc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function pm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mm,nc,hm,gm,vm,Fs=!1,yo=[],ln=null,sn=null,un=null,bi=new Map,Si=new Map,en=[],Hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Xi(t),t!==null&&nc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yg(e,t,n,r,i){switch(t){case"focusin":return ln=Qr(ln,e,t,n,r,i),!0;case"dragenter":return sn=Qr(sn,e,t,n,r,i),!0;case"mouseover":return un=Qr(un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return bi.set(o,Qr(bi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Si.set(o,Qr(Si.get(o)||null,e,t,n,r,i)),!0}return!1}function ym(e){var t=Nn(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=am(n),t!==null){e.blockedOn=t,vm(e.priority,function(){hm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);As=r,n.target.dispatchEvent(r),As=null}else return t=Xi(n),t!==null&&nc(t),e.blockedOn=n,!1;t.shift()}return!0}function Ef(e,t,n){Vo(e)&&n.delete(t)}function Gg(){Fs=!1,ln!==null&&Vo(ln)&&(ln=null),sn!==null&&Vo(sn)&&(sn=null),un!==null&&Vo(un)&&(un=null),bi.forEach(Ef),Si.forEach(Ef)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Fs||(Fs=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Gg)))}function Ci(e){function t(i){return Kr(i,e)}if(0<yo.length){Kr(yo[0],e);for(var n=1;n<yo.length;n++){var r=yo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Kr(ln,e),sn!==null&&Kr(sn,e),un!==null&&Kr(un,e),bi.forEach(t),Si.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)ym(n),n.blockedOn===null&&en.shift()}var yr=Bt.ReactCurrentBatchConfig,ha=!0;function Qg(e,t,n,r){var i=H,o=yr.transition;yr.transition=null;try{H=1,rc(e,t,n,r)}finally{H=i,yr.transition=o}}function Kg(e,t,n,r){var i=H,o=yr.transition;yr.transition=null;try{H=4,rc(e,t,n,r)}finally{H=i,yr.transition=o}}function rc(e,t,n,r){if(ha){var i=Ds(e,t,n,r);if(i===null)ql(e,t,r,ga,n),Cf(e,r);else if(Yg(i,e,t,n,r))r.stopPropagation();else if(Cf(e,r),t&4&&-1<Hg.indexOf(e)){for(;i!==null;){var o=Xi(i);if(o!==null&&mm(o),o=Ds(e,t,n,r),o===null&&ql(e,t,r,ga,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ql(e,t,r,null,n)}}var ga=null;function Ds(e,t,n,r){if(ga=null,e=Ju(r),e=Nn(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=am(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ga=e,null}function xm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rg()){case ec:return 1;case cm:return 4;case pa:case Ig:return 16;case fm:return 536870912;default:return 16}default:return 16}}var nn=null,ic=null,Ho=null;function wm(){if(Ho)return Ho;var e,t=ic,n=t.length,r,i="value"in nn?nn.value:nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ho=i.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xo(){return!0}function Pf(){return!1}function Xe(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xo:Pf,this.isPropagationStopped=Pf,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=Xe(Dr),Ki=re({},Dr,{view:0,detail:0}),Xg=Xe(Ki),Bl,Wl,Xr,Qa=re({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Bl=e.screenX-Xr.screenX,Wl=e.screenY-Xr.screenY):Wl=Bl=0,Xr=e),Bl)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),jf=Xe(Qa),qg=re({},Qa,{dataTransfer:0}),Zg=Xe(qg),Jg=re({},Ki,{relatedTarget:0}),Vl=Xe(Jg),ev=re({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),tv=Xe(ev),nv=re({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rv=Xe(nv),iv=re({},Dr,{data:0}),_f=Xe(iv),ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lv[e])?!!t[e]:!1}function ac(){return sv}var uv=re({},Ki,{key:function(e){if(e.key){var t=ov[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?av[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cv=Xe(uv),fv=re({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=Xe(fv),dv=re({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),pv=Xe(dv),mv=re({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=Xe(mv),gv=re({},Qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=Xe(gv),yv=[9,13,27,32],lc=Lt&&"CompositionEvent"in window,ui=null;Lt&&"documentMode"in document&&(ui=document.documentMode);var xv=Lt&&"TextEvent"in window&&!ui,km=Lt&&(!lc||ui&&8<ui&&11>=ui),Nf=String.fromCharCode(32),Of=!1;function bm(e,t){switch(e){case"keyup":return yv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function wv(e,t){switch(e){case"compositionend":return Sm(t);case"keypress":return t.which!==32?null:(Of=!0,Nf);case"textInput":return e=t.data,e===Nf&&Of?null:e;default:return null}}function kv(e,t){if(tr)return e==="compositionend"||!lc&&bm(e,t)?(e=wm(),Ho=ic=nn=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return km&&t.locale!=="ko"?null:t.data;default:return null}}var bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bv[e.type]:t==="textarea"}function Cm(e,t,n,r){tm(r),t=va(t,"onChange"),0<t.length&&(n=new oc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ci=null,Ei=null;function Sv(e){Lm(e,0)}function Ka(e){var t=ir(e);if(Qp(t))return e}function Cv(e,t){if(e==="change")return t}var Em=!1;if(Lt){var Hl;if(Lt){var Yl="oninput"in document;if(!Yl){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),Yl=typeof zf.oninput=="function"}Hl=Yl}else Hl=!1;Em=Hl&&(!document.documentMode||9<document.documentMode)}function Af(){ci&&(ci.detachEvent("onpropertychange",Pm),Ei=ci=null)}function Pm(e){if(e.propertyName==="value"&&Ka(Ei)){var t=[];Cm(t,Ei,e,Ju(e)),om(Sv,t)}}function Ev(e,t,n){e==="focusin"?(Af(),ci=t,Ei=n,ci.attachEvent("onpropertychange",Pm)):e==="focusout"&&Af()}function Pv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ka(Ei)}function jv(e,t){if(e==="click")return Ka(t)}function _v(e,t){if(e==="input"||e==="change")return Ka(t)}function Tv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Tv;function Pi(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bs.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Lf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rf(e,t){var n=Lf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lf(n)}}function jm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _m(){for(var e=window,t=ca();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ca(e.document)}return t}function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nv(e){var t=_m(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jm(n.ownerDocument.documentElement,n)){if(r!==null&&sc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Rf(n,o);var a=Rf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ov=Lt&&"documentMode"in document&&11>=document.documentMode,nr=null,Us=null,fi=null,Bs=!1;function If(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bs||nr==null||nr!==ca(r)||(r=nr,"selectionStart"in r&&sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fi&&Pi(fi,r)||(fi=r,r=va(Us,"onSelect"),0<r.length&&(t=new oc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nr)))}function wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Gl={},Tm={};Lt&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Xa(e){if(Gl[e])return Gl[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tm)return Gl[e]=t[n];return e}var Nm=Xa("animationend"),Om=Xa("animationiteration"),$m=Xa("animationstart"),zm=Xa("transitionend"),Am=new Map,Mf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){Am.set(e,t),Qn(t,[e])}for(var Ql=0;Ql<Mf.length;Ql++){var Kl=Mf[Ql],$v=Kl.toLowerCase(),zv=Kl[0].toUpperCase()+Kl.slice(1);bn($v,"on"+zv)}bn(Nm,"onAnimationEnd");bn(Om,"onAnimationIteration");bn($m,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(zm,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Av=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function Ff(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$g(r,t,void 0,e),e.currentTarget=null}function Lm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Ff(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Ff(i,l,u),o=s}}}if(da)throw e=Is,da=!1,Is=null,e}function Q(e,t){var n=t[Gs];n===void 0&&(n=t[Gs]=new Set);var r=e+"__bubble";n.has(r)||(Rm(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),Rm(n,e,r,t)}var ko="_reactListening"+Math.random().toString(36).slice(2);function ji(e){if(!e[ko]){e[ko]=!0,Wp.forEach(function(n){n!=="selectionchange"&&(Av.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ko]||(t[ko]=!0,Xl("selectionchange",!1,t))}}function Rm(e,t,n,r){switch(xm(t)){case 1:var i=Qg;break;case 4:i=Kg;break;default:i=rc}n=i.bind(null,t,n,e),i=void 0,!Rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ql(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Nn(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}om(function(){var u=o,f=Ju(n),p=[];e:{var g=Am.get(e);if(g!==void 0){var y=oc,x=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":y=cv;break;case"focusin":x="focus",y=Vl;break;case"focusout":x="blur",y=Vl;break;case"beforeblur":case"afterblur":y=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=pv;break;case Nm:case Om:case $m:y=tv;break;case zm:y=hv;break;case"scroll":y=Xg;break;case"wheel":y=vv;break;case"copy":case"cut":case"paste":y=rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Tf}var v=(t&4)!==0,S=!v&&e==="scroll",m=v?g!==null?g+"Capture":null:g;v=[];for(var c=u,h;c!==null;){h=c;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,m!==null&&(w=ki(c,m),w!=null&&v.push(_i(c,w,h)))),S)break;c=c.return}0<v.length&&(g=new y(g,x,null,n,f),p.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==As&&(x=n.relatedTarget||n.fromElement)&&(Nn(x)||x[Rt]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?Nn(x):null,x!==null&&(S=Kn(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(v=jf,w="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Tf,w="onPointerLeave",m="onPointerEnter",c="pointer"),S=y==null?g:ir(y),h=x==null?g:ir(x),g=new v(w,c+"leave",y,n,f),g.target=S,g.relatedTarget=h,w=null,Nn(f)===u&&(v=new v(m,c+"enter",x,n,f),v.target=h,v.relatedTarget=S,w=v),S=w,y&&x)t:{for(v=y,m=x,c=0,h=v;h;h=qn(h))c++;for(h=0,w=m;w;w=qn(w))h++;for(;0<c-h;)v=qn(v),c--;for(;0<h-c;)m=qn(m),h--;for(;c--;){if(v===m||m!==null&&v===m.alternate)break t;v=qn(v),m=qn(m)}v=null}else v=null;y!==null&&Df(p,g,y,v,!1),x!==null&&S!==null&&Df(p,S,x,v,!0)}}e:{if(g=u?ir(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=Cv;else if($f(g))if(Em)k=_v;else{k=Pv;var E=Ev}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=jv);if(k&&(k=k(e,u))){Cm(p,k,n,f);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Ts(g,"number",g.value)}switch(E=u?ir(u):window,e){case"focusin":($f(E)||E.contentEditable==="true")&&(nr=E,Us=u,fi=null);break;case"focusout":fi=Us=nr=null;break;case"mousedown":Bs=!0;break;case"contextmenu":case"mouseup":case"dragend":Bs=!1,If(p,n,f);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":If(p,n,f)}var b;if(lc)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else tr?bm(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(km&&n.locale!=="ko"&&(tr||N!=="onCompositionStart"?N==="onCompositionEnd"&&tr&&(b=wm()):(nn=f,ic="value"in nn?nn.value:nn.textContent,tr=!0)),E=va(u,N),0<E.length&&(N=new _f(N,e,null,n,f),p.push({event:N,listeners:E}),b?N.data=b:(b=Sm(n),b!==null&&(N.data=b)))),(b=xv?wv(e,n):kv(e,n))&&(u=va(u,"onBeforeInput"),0<u.length&&(f=new _f("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=b))}Lm(p,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function va(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ki(e,n),o!=null&&r.unshift(_i(e,o,i)),o=ki(e,t),o!=null&&r.push(_i(e,o,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Df(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ki(n,o),s!=null&&a.unshift(_i(n,s,l))):i||(s=ki(n,o),s!=null&&a.push(_i(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Lv=/\r\n?/g,Rv=/\u0000|\uFFFD/g;function Uf(e){return(typeof e=="string"?e:""+e).replace(Lv,`
`).replace(Rv,"")}function bo(e,t,n){if(t=Uf(t),Uf(e)!==t&&n)throw Error(P(425))}function ya(){}var Ws=null,Vs=null;function Hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ys=typeof setTimeout=="function"?setTimeout:void 0,Iv=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,Mv=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(e){return Bf.resolve(null).then(e).catch(Fv)}:Ys;function Fv(e){setTimeout(function(){throw e})}function Zl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ci(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ci(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),bt="__reactFiber$"+Ur,Ti="__reactProps$"+Ur,Rt="__reactContainer$"+Ur,Gs="__reactEvents$"+Ur,Dv="__reactListeners$"+Ur,Uv="__reactHandles$"+Ur;function Nn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wf(e);e!==null;){if(n=e[bt])return n;e=Wf(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){return e=e[bt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function qa(e){return e[Ti]||null}var Qs=[],or=-1;function Sn(e){return{current:e}}function q(e){0>or||(e.current=Qs[or],Qs[or]=null,or--)}function G(e,t){or++,Qs[or]=e.current,e.current=t}var yn={},je=Sn(yn),Re=Sn(!1),Un=yn;function Cr(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ie(e){return e=e.childContextTypes,e!=null}function xa(){q(Re),q(je)}function Vf(e,t,n){if(je.current!==yn)throw Error(P(168));G(je,t),G(Re,n)}function Im(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Eg(e)||"Unknown",i));return re({},n,r)}function wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Un=je.current,G(je,e),G(Re,Re.current),!0}function Hf(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Im(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,q(Re),q(je),G(je,e)):q(Re),G(Re,n)}var Nt=null,Za=!1,Jl=!1;function Mm(e){Nt===null?Nt=[e]:Nt.push(e)}function Bv(e){Za=!0,Mm(e)}function Cn(){if(!Jl&&Nt!==null){Jl=!0;var e=0,t=H;try{var n=Nt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,Za=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),um(ec,Cn),i}finally{H=t,Jl=!1}}return null}var ar=[],lr=0,ka=null,ba=0,tt=[],nt=0,Bn=null,Ot=1,$t="";function _n(e,t){ar[lr++]=ba,ar[lr++]=ka,ka=e,ba=t}function Fm(e,t,n){tt[nt++]=Ot,tt[nt++]=$t,tt[nt++]=Bn,Bn=e;var r=Ot;e=$t;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var o=32-pt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ot=1<<32-pt(t)+i|n<<i|r,$t=o+e}else Ot=1<<o|n<<i|r,$t=e}function uc(e){e.return!==null&&(_n(e,1),Fm(e,1,0))}function cc(e){for(;e===ka;)ka=ar[--lr],ar[lr]=null,ba=ar[--lr],ar[lr]=null;for(;e===Bn;)Bn=tt[--nt],tt[nt]=null,$t=tt[--nt],tt[nt]=null,Ot=tt[--nt],tt[nt]=null}var Ye=null,He=null,ee=!1,ft=null;function Dm(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,He=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Ot,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,He=null,!0):!1;default:return!1}}function Ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xs(e){if(ee){var t=He;if(t){var n=t;if(!Yf(e,t)){if(Ks(e))throw Error(P(418));t=cn(n.nextSibling);var r=Ye;t&&Yf(e,t)?Dm(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ye=e)}}else{if(Ks(e))throw Error(P(418));e.flags=e.flags&-4097|2,ee=!1,Ye=e}}}function Gf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function So(e){if(e!==Ye)return!1;if(!ee)return Gf(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hs(e.type,e.memoizedProps)),t&&(t=He)){if(Ks(e))throw Um(),Error(P(418));for(;t;)Dm(e,t),t=cn(t.nextSibling)}if(Gf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ye?cn(e.stateNode.nextSibling):null;return!0}function Um(){for(var e=He;e;)e=cn(e.nextSibling)}function Er(){He=Ye=null,ee=!1}function fc(e){ft===null?ft=[e]:ft.push(e)}var Wv=Bt.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Sa=Sn(null),Ca=null,sr=null,dc=null;function pc(){dc=sr=Ca=null}function mc(e){var t=Sa.current;q(Sa),e._currentValue=t}function qs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Ca=e,dc=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(dc!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(Ca===null)throw Error(P(308));sr=e,Ca.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var On=null;function hc(e){On===null?On=[e]:On.push(e)}function Bm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hc(t)):(n.next=i.next,i.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,It(e,n)}return i=r.interleaved,i===null?(t.next=t,hc(r)):(t.next=i.next,i.next=t),r.interleaved=t,It(e,n)}function Go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tc(e,n)}}function Qf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ea(e,t,n,r){var i=e.updateQueue;Jt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(o!==null){var p=i.baseState;a=0,f=u=s=null,l=o;do{var g=l.lane,y=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,v=l;switch(g=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){p=x.call(y,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(y,p,g):x,g==null)break e;p=re({},p,g);break e;case 2:Jt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,s=p):f=f.next=y,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(s=p),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Vn|=a,e.lanes=a,e.memoizedState=p}}function Kf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Vm=new Bp.Component().refs;function Zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ja={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=pn(e),o=zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(mt(t,e,i,r),Go(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=pn(e),o=zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(mt(t,e,i,r),Go(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=pn(e),i=zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,r),t!==null&&(mt(t,e,r,n),Go(t,e,r))}};function Xf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,o):!0}function Hm(e,t,n){var r=!1,i=yn,o=t.contextType;return typeof o=="object"&&o!==null?o=ot(o):(i=Ie(t)?Un:je.current,r=t.contextTypes,o=(r=r!=null)?Cr(e,i):yn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ja,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ja.enqueueReplaceState(t,t.state,null)}function Js(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Vm,gc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ot(o):(o=Ie(t)?Un:je.current,i.context=Cr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ja.enqueueReplaceState(i,i.state,null),Ea(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Vm&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Co(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zf(e){var t=e._init;return t(e._payload)}function Ym(e){function t(m,c){if(e){var h=m.deletions;h===null?(m.deletions=[c],m.flags|=16):h.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(m,c){return m=mn(m,c),m.index=0,m.sibling=null,m}function o(m,c,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<c?(m.flags|=2,c):h):(m.flags|=2,c)):(m.flags|=1048576,c)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,h,w){return c===null||c.tag!==6?(c=as(h,m.mode,w),c.return=m,c):(c=i(c,h),c.return=m,c)}function s(m,c,h,w){var k=h.type;return k===er?f(m,c,h.props.children,w,h.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Zt&&Zf(k)===c.type)?(w=i(c,h.props),w.ref=qr(m,c,h),w.return=m,w):(w=Jo(h.type,h.key,h.props,null,m.mode,w),w.ref=qr(m,c,h),w.return=m,w)}function u(m,c,h,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=ls(h,m.mode,w),c.return=m,c):(c=i(c,h.children||[]),c.return=m,c)}function f(m,c,h,w,k){return c===null||c.tag!==7?(c=In(h,m.mode,w,k),c.return=m,c):(c=i(c,h),c.return=m,c)}function p(m,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=as(""+c,m.mode,h),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case po:return h=Jo(c.type,c.key,c.props,null,m.mode,h),h.ref=qr(m,null,c),h.return=m,h;case Jn:return c=ls(c,m.mode,h),c.return=m,c;case Zt:var w=c._init;return p(m,w(c._payload),h)}if(ni(c)||Yr(c))return c=In(c,m.mode,h,null),c.return=m,c;Co(m,c)}return null}function g(m,c,h,w){var k=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:l(m,c,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case po:return h.key===k?s(m,c,h,w):null;case Jn:return h.key===k?u(m,c,h,w):null;case Zt:return k=h._init,g(m,c,k(h._payload),w)}if(ni(h)||Yr(h))return k!==null?null:f(m,c,h,w,null);Co(m,h)}return null}function y(m,c,h,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(h)||null,l(c,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case po:return m=m.get(w.key===null?h:w.key)||null,s(c,m,w,k);case Jn:return m=m.get(w.key===null?h:w.key)||null,u(c,m,w,k);case Zt:var E=w._init;return y(m,c,h,E(w._payload),k)}if(ni(w)||Yr(w))return m=m.get(h)||null,f(c,m,w,k,null);Co(c,w)}return null}function x(m,c,h,w){for(var k=null,E=null,b=c,N=c=0,M=null;b!==null&&N<h.length;N++){b.index>N?(M=b,b=null):M=b.sibling;var R=g(m,b,h[N],w);if(R===null){b===null&&(b=M);break}e&&b&&R.alternate===null&&t(m,b),c=o(R,c,N),E===null?k=R:E.sibling=R,E=R,b=M}if(N===h.length)return n(m,b),ee&&_n(m,N),k;if(b===null){for(;N<h.length;N++)b=p(m,h[N],w),b!==null&&(c=o(b,c,N),E===null?k=b:E.sibling=b,E=b);return ee&&_n(m,N),k}for(b=r(m,b);N<h.length;N++)M=y(b,m,N,h[N],w),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?N:M.key),c=o(M,c,N),E===null?k=M:E.sibling=M,E=M);return e&&b.forEach(function(De){return t(m,De)}),ee&&_n(m,N),k}function v(m,c,h,w){var k=Yr(h);if(typeof k!="function")throw Error(P(150));if(h=k.call(h),h==null)throw Error(P(151));for(var E=k=null,b=c,N=c=0,M=null,R=h.next();b!==null&&!R.done;N++,R=h.next()){b.index>N?(M=b,b=null):M=b.sibling;var De=g(m,b,R.value,w);if(De===null){b===null&&(b=M);break}e&&b&&De.alternate===null&&t(m,b),c=o(De,c,N),E===null?k=De:E.sibling=De,E=De,b=M}if(R.done)return n(m,b),ee&&_n(m,N),k;if(b===null){for(;!R.done;N++,R=h.next())R=p(m,R.value,w),R!==null&&(c=o(R,c,N),E===null?k=R:E.sibling=R,E=R);return ee&&_n(m,N),k}for(b=r(m,b);!R.done;N++,R=h.next())R=y(b,m,N,R.value,w),R!==null&&(e&&R.alternate!==null&&b.delete(R.key===null?N:R.key),c=o(R,c,N),E===null?k=R:E.sibling=R,E=R);return e&&b.forEach(function(En){return t(m,En)}),ee&&_n(m,N),k}function S(m,c,h,w){if(typeof h=="object"&&h!==null&&h.type===er&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case po:e:{for(var k=h.key,E=c;E!==null;){if(E.key===k){if(k=h.type,k===er){if(E.tag===7){n(m,E.sibling),c=i(E,h.props.children),c.return=m,m=c;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Zt&&Zf(k)===E.type){n(m,E.sibling),c=i(E,h.props),c.ref=qr(m,E,h),c.return=m,m=c;break e}n(m,E);break}else t(m,E);E=E.sibling}h.type===er?(c=In(h.props.children,m.mode,w,h.key),c.return=m,m=c):(w=Jo(h.type,h.key,h.props,null,m.mode,w),w.ref=qr(m,c,h),w.return=m,m=w)}return a(m);case Jn:e:{for(E=h.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(m,c.sibling),c=i(c,h.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=ls(h,m.mode,w),c.return=m,m=c}return a(m);case Zt:return E=h._init,S(m,c,E(h._payload),w)}if(ni(h))return x(m,c,h,w);if(Yr(h))return v(m,c,h,w);Co(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(m,c.sibling),c=i(c,h),c.return=m,m=c):(n(m,c),c=as(h,m.mode,w),c.return=m,m=c),a(m)):n(m,c)}return S}var Pr=Ym(!0),Gm=Ym(!1),qi={},Et=Sn(qi),Ni=Sn(qi),Oi=Sn(qi);function $n(e){if(e===qi)throw Error(P(174));return e}function vc(e,t){switch(G(Oi,t),G(Ni,e),G(Et,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Os(t,e)}q(Et),G(Et,t)}function jr(){q(Et),q(Ni),q(Oi)}function Qm(e){$n(Oi.current);var t=$n(Et.current),n=Os(t,e.type);t!==n&&(G(Ni,e),G(Et,n))}function yc(e){Ni.current===e&&(q(Et),q(Ni))}var te=Sn(0);function Pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var es=[];function xc(){for(var e=0;e<es.length;e++)es[e]._workInProgressVersionPrimary=null;es.length=0}var Qo=Bt.ReactCurrentDispatcher,ts=Bt.ReactCurrentBatchConfig,Wn=0,ne=null,de=null,he=null,ja=!1,di=!1,$i=0,Vv=0;function Se(){throw Error(P(321))}function wc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function kc(e,t,n,r,i,o){if(Wn=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qo.current=e===null||e.memoizedState===null?Qv:Kv,e=n(r,i),di){o=0;do{if(di=!1,$i=0,25<=o)throw Error(P(301));o+=1,he=de=null,t.updateQueue=null,Qo.current=Xv,e=n(r,i)}while(di)}if(Qo.current=_a,t=de!==null&&de.next!==null,Wn=0,he=de=ne=null,ja=!1,t)throw Error(P(300));return e}function bc(){var e=$i!==0;return $i=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ne.memoizedState=he=e:he=he.next=e,he}function at(){if(de===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?ne.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(P(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?ne.memoizedState=he=e:he=he.next=e}return he}function zi(e,t){return typeof t=="function"?t(e):t}function ns(e){var t=at(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=de,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var f=u.lane;if((Wn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,ne.lanes|=f,Vn|=f}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,gt(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ne.lanes|=o,Vn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rs(e){var t=at(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gt(o,t.memoizedState)||(Ae=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Km(){}function Xm(e,t){var n=ne,r=at(),i=t(),o=!gt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ae=!0),r=r.queue,Sc(Jm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Ai(9,Zm.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(P(349));Wn&30||qm(n,t,i)}return i}function qm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zm(e,t,n,r){t.value=n,t.getSnapshot=r,eh(t)&&th(e)}function Jm(e,t,n){return n(function(){eh(t)&&th(e)})}function eh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function th(e){var t=It(e,1);t!==null&&mt(t,e,1,-1)}function Jf(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},t.queue=e,e=e.dispatch=Gv.bind(null,ne,e),[t.memoizedState,e]}function Ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nh(){return at().memoizedState}function Ko(e,t,n,r){var i=yt();ne.flags|=e,i.memoizedState=Ai(1|t,n,void 0,r===void 0?null:r)}function el(e,t,n,r){var i=at();r=r===void 0?null:r;var o=void 0;if(de!==null){var a=de.memoizedState;if(o=a.destroy,r!==null&&wc(r,a.deps)){i.memoizedState=Ai(t,n,o,r);return}}ne.flags|=e,i.memoizedState=Ai(1|t,n,o,r)}function ed(e,t){return Ko(8390656,8,e,t)}function Sc(e,t){return el(2048,8,e,t)}function rh(e,t){return el(4,2,e,t)}function ih(e,t){return el(4,4,e,t)}function oh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ah(e,t,n){return n=n!=null?n.concat([e]):null,el(4,4,oh.bind(null,t,e),n)}function Cc(){}function lh(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sh(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uh(e,t,n){return Wn&21?(gt(n,t)||(n=dm(),ne.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function Hv(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=ts.transition;ts.transition={};try{e(!1),t()}finally{H=n,ts.transition=r}}function ch(){return at().memoizedState}function Yv(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fh(e))dh(t,n);else if(n=Bm(e,t,n,r),n!==null){var i=Ne();mt(n,e,r,i),ph(n,t,r)}}function Gv(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fh(e))dh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,gt(l,a)){var s=t.interleaved;s===null?(i.next=i,hc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Bm(e,t,i,r),n!==null&&(i=Ne(),mt(n,e,r,i),ph(n,t,r))}}function fh(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function dh(e,t){di=ja=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ph(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tc(e,n)}}var _a={readContext:ot,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Qv={readContext:ot,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:ed,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4194308,4,oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ko(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yv.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Jf,useDebugValue:Cc,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Jf(!1),t=e[0];return e=Hv.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=yt();if(ee){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ve===null)throw Error(P(349));Wn&30||qm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ed(Jm.bind(null,r,o,e),[e]),r.flags|=2048,Ai(9,Zm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yt(),t=ve.identifierPrefix;if(ee){var n=$t,r=Ot;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kv={readContext:ot,useCallback:lh,useContext:ot,useEffect:Sc,useImperativeHandle:ah,useInsertionEffect:rh,useLayoutEffect:ih,useMemo:sh,useReducer:ns,useRef:nh,useState:function(){return ns(zi)},useDebugValue:Cc,useDeferredValue:function(e){var t=at();return uh(t,de.memoizedState,e)},useTransition:function(){var e=ns(zi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Km,useSyncExternalStore:Xm,useId:ch,unstable_isNewReconciler:!1},Xv={readContext:ot,useCallback:lh,useContext:ot,useEffect:Sc,useImperativeHandle:ah,useInsertionEffect:rh,useLayoutEffect:ih,useMemo:sh,useReducer:rs,useRef:nh,useState:function(){return rs(zi)},useDebugValue:Cc,useDeferredValue:function(e){var t=at();return de===null?t.memoizedState=e:uh(t,de.memoizedState,e)},useTransition:function(){var e=rs(zi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Km,useSyncExternalStore:Xm,useId:ch,unstable_isNewReconciler:!1};function _r(e,t){try{var n="",r=t;do n+=Cg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function eu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qv=typeof WeakMap=="function"?WeakMap:Map;function mh(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Na||(Na=!0,cu=r),eu(e,t)},n}function hh(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){eu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){eu(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function td(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fy.bind(null,e,t,n),t.then(e,e))}function nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var Zv=Bt.ReactCurrentOwner,Ae=!1;function _e(e,t,n,r){t.child=e===null?Gm(t,null,n,r):Pr(t,e.child,n,r)}function id(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=kc(e,t,n,r,o,i),n=bc(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(ee&&n&&uc(t),t.flags|=1,_e(e,t,r,i),t.child)}function od(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$c(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,gh(e,t,o,r,i)):(e=Jo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(a,r)&&e.ref===t.ref)return Mt(e,t,i)}return t.flags|=1,e=mn(o,r),e.ref=t.ref,e.return=t,t.child=e}function gh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Pi(o,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,Mt(e,t,i)}return tu(e,t,n,r,i)}function vh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(cr,Ve),Ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(cr,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(cr,Ve),Ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(cr,Ve),Ve|=r;return _e(e,t,i,n),t.child}function yh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tu(e,t,n,r,i){var o=Ie(n)?Un:je.current;return o=Cr(t,o),xr(t,i),n=kc(e,t,n,r,o,i),r=bc(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(ee&&r&&uc(t),t.flags|=1,_e(e,t,n,i),t.child)}function ad(e,t,n,r,i){if(Ie(n)){var o=!0;wa(t)}else o=!1;if(xr(t,i),t.stateNode===null)Xo(e,t),Hm(t,n,r),Js(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Ie(n)?Un:je.current,u=Cr(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&qf(t,a,r,u),Jt=!1;var g=t.memoizedState;a.state=g,Ea(t,r,a,i),s=t.memoizedState,l!==r||g!==s||Re.current||Jt?(typeof f=="function"&&(Zs(t,n,f,r),s=t.memoizedState),(l=Jt||Xf(t,n,l,r,g,s,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ut(t.type,l),a.props=u,p=t.pendingProps,g=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=ot(s):(s=Ie(n)?Un:je.current,s=Cr(t,s));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||g!==s)&&qf(t,a,r,s),Jt=!1,g=t.memoizedState,a.state=g,Ea(t,r,a,i);var x=t.memoizedState;l!==p||g!==x||Re.current||Jt?(typeof y=="function"&&(Zs(t,n,y,r),x=t.memoizedState),(u=Jt||Xf(t,n,u,r,g,x,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return nu(e,t,n,r,o,i)}function nu(e,t,n,r,i,o){yh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Hf(t,n,!1),Mt(e,t,o);r=t.stateNode,Zv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Pr(t,e.child,null,o),t.child=Pr(t,null,l,o)):_e(e,t,l,o),t.memoizedState=r.state,i&&Hf(t,n,!0),t.child}function xh(e){var t=e.stateNode;t.pendingContext?Vf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vf(e,t.context,!1),vc(e,t.containerInfo)}function ld(e,t,n,r,i){return Er(),fc(i),t.flags|=256,_e(e,t,n,r),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function wh(e,t,n){var r=t.pendingProps,i=te.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(te,i&1),e===null)return Xs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=rl(a,r,0,null),e=In(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=iu(n),t.memoizedState=ru,e):Ec(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Jv(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=mn(l,o):(o=In(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?iu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ru,r}return o=e.child,e=o.sibling,r=mn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ec(e,t){return t=rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Eo(e,t,n,r){return r!==null&&fc(r),Pr(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=is(Error(P(422))),Eo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=rl({mode:"visible",children:r.children},i,0,null),o=In(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Pr(t,e.child,null,a),t.child.memoizedState=iu(a),t.memoizedState=ru,o);if(!(t.mode&1))return Eo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(P(419)),r=is(o,r,void 0),Eo(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ae||l){if(r=ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,It(e,i),mt(r,e,i,-1))}return Oc(),r=is(Error(P(421))),Eo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=dy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=cn(i.nextSibling),Ye=t,ee=!0,ft=null,e!==null&&(tt[nt++]=Ot,tt[nt++]=$t,tt[nt++]=Bn,Ot=e.id,$t=e.overflow,Bn=t),t=Ec(t,r.children),t.flags|=4096,t)}function sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qs(e.return,t,n)}function os(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function kh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sd(e,n,t);else if(e.tag===19)sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Pa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),os(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Pa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}os(t,!0,n,null,o);break;case"together":os(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ey(e,t,n){switch(t.tag){case 3:xh(t),Er();break;case 5:Qm(t);break;case 1:Ie(t.type)&&wa(t);break;case 4:vc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(Sa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?wh(e,t,n):(G(te,te.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);G(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,vh(e,t,n)}return Mt(e,t,n)}var bh,ou,Sh,Ch;bh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ou=function(){};Sh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(Et.current);var o=null;switch(n){case"input":i=js(e,i),r=js(e,r),o=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":i=Ns(e,i),r=Ns(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ya)}$s(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Q("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ch=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ty(e,t,n){var r=t.pendingProps;switch(cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ie(t.type)&&xa(),Ce(t),null;case 3:return r=t.stateNode,jr(),q(Re),q(je),xc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(So(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(pu(ft),ft=null))),ou(e,t),Ce(t),null;case 5:yc(t);var i=$n(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)Sh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ce(t),null}if(e=$n(Et.current),So(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[bt]=t,r[Ti]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)Q(ii[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":vf(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":xf(r,o),Q("invalid",r)}$s(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&bo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&bo(r.textContent,l,e),i=["children",""+l]):xi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Q("scroll",r)}switch(n){case"input":mo(r),yf(r,o,!0);break;case"textarea":mo(r),wf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ya)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[bt]=t,e[Ti]=r,bh(e,t,!1,!1),t.stateNode=e;e:{switch(a=zs(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)Q(ii[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":vf(e,r),i=js(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),Q("invalid",e);break;case"textarea":xf(e,r),i=Ns(e,r),Q("invalid",e);break;default:i=r}$s(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?em(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Zp(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wi(e,s):typeof s=="number"&&wi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Q("scroll",e):s!=null&&Ku(e,o,s,a))}switch(n){case"input":mo(e),yf(e,r,!1);break;case"textarea":mo(e),wf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hr(e,!!r.multiple,o,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Ch(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=$n(Oi.current),$n(Et.current),So(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(o=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Ce(t),null;case 13:if(q(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&He!==null&&t.mode&1&&!(t.flags&128))Um(),Er(),t.flags|=98560,o=!1;else if(o=So(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[bt]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else ft!==null&&(pu(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?pe===0&&(pe=3):Oc())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return jr(),ou(e,t),e===null&&ji(t.stateNode.containerInfo),Ce(t),null;case 10:return mc(t.type._context),Ce(t),null;case 17:return Ie(t.type)&&xa(),Ce(t),null;case 19:if(q(te),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Zr(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Pa(e),a!==null){for(t.flags|=128,Zr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>Tr&&(t.flags|=128,r=!0,Zr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Pa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ee)return Ce(t),null}else 2*se()-o.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,Zr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=te.current,G(te,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Nc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function ny(e,t){switch(cc(t),t.tag){case 1:return Ie(t.type)&&xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),q(Re),q(je),xc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yc(t),null;case 13:if(q(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(te),null;case 4:return jr(),null;case 10:return mc(t.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var Po=!1,Pe=!1,ry=typeof WeakSet=="function"?WeakSet:Set,$=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function au(e,t,n){try{n()}catch(r){oe(e,t,r)}}var ud=!1;function iy(e,t){if(Ws=ha,e=_m(),sc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,p=e,g=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break t;if(g===n&&++u===i&&(l=a),g===o&&++f===r&&(s=a),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vs={focusedElem:e,selectionRange:n},ha=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,S=x.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:ut(t.type,v),S);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){oe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return x=ud,ud=!1,x}function pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&au(t,n,o)}i=i.next}while(i!==r)}}function tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function lu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Eh(e){var t=e.alternate;t!==null&&(e.alternate=null,Eh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[Ti],delete t[Gs],delete t[Dv],delete t[Uv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ph(e){return e.tag===5||e.tag===3||e.tag===4}function cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ph(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function su(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ya));else if(r!==4&&(e=e.child,e!==null))for(su(e,t,n),e=e.sibling;e!==null;)su(e,t,n),e=e.sibling}function uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(uu(e,t,n),e=e.sibling;e!==null;)uu(e,t,n),e=e.sibling}var xe=null,ct=!1;function Gt(e,t,n){for(n=n.child;n!==null;)jh(e,t,n),n=n.sibling}function jh(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Ga,n)}catch{}switch(n.tag){case 5:Pe||ur(n,t);case 6:var r=xe,i=ct;xe=null,Gt(e,t,n),xe=r,ct=i,xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?Zl(e.parentNode,n):e.nodeType===1&&Zl(e,n),Ci(e)):Zl(xe,n.stateNode));break;case 4:r=xe,i=ct,xe=n.stateNode.containerInfo,ct=!0,Gt(e,t,n),xe=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&au(n,t,a),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!Pe&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){oe(n,t,l)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Gt(e,t,n),Pe=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function fd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ry),t.forEach(function(r){var i=py.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,ct=!1;break e;case 3:xe=l.stateNode.containerInfo,ct=!0;break e;case 4:xe=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(xe===null)throw Error(P(160));jh(o,a,i),xe=null,ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_h(t,e),t=t.sibling}function _h(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),vt(e),r&4){try{pi(3,e,e.return),tl(3,e)}catch(v){oe(e,e.return,v)}try{pi(5,e,e.return)}catch(v){oe(e,e.return,v)}}break;case 1:st(t,e),vt(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(st(t,e),vt(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var i=e.stateNode;try{wi(i,"")}catch(v){oe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Kp(i,o),zs(l,a);var u=zs(l,o);for(a=0;a<s.length;a+=2){var f=s[a],p=s[a+1];f==="style"?em(i,p):f==="dangerouslySetInnerHTML"?Zp(i,p):f==="children"?wi(i,p):Ku(i,f,p,u)}switch(l){case"input":_s(i,o);break;case"textarea":Xp(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?hr(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ti]=o}catch(v){oe(e,e.return,v)}}break;case 6:if(st(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){oe(e,e.return,v)}}break;case 3:if(st(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(v){oe(e,e.return,v)}break;case 4:st(t,e),vt(e);break;case 13:st(t,e),vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_c=se())),r&4&&fd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||f,st(t,e),Pe=u):st(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for($=e,f=e.child;f!==null;){for(p=$=f;$!==null;){switch(g=$,y=g.child,g.tag){case 0:case 11:case 14:case 15:pi(4,g,g.return);break;case 1:ur(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){oe(r,n,v)}}break;case 5:ur(g,g.return);break;case 22:if(g.memoizedState!==null){pd(p);continue}}y!==null?(y.return=g,$=y):pd(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Jp("display",a))}catch(v){oe(e,e.return,v)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){oe(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:st(t,e),vt(e),r&4&&fd(e);break;case 21:break;default:st(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ph(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var o=cd(e);uu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=cd(e);su(e,l,a);break;default:throw Error(P(161))}}catch(s){oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function oy(e,t,n){$=e,Th(e)}function Th(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Po;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Pe;l=Po;var u=Pe;if(Po=a,(Pe=s)&&!u)for($=i;$!==null;)a=$,s=a.child,a.tag===22&&a.memoizedState!==null?md(i):s!==null?(s.return=a,$=s):md(i);for(;o!==null;)$=o,Th(o),o=o.sibling;$=i,Po=l,Pe=u}dd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):dd(e)}}function dd(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Kf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ci(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Pe||t.flags&512&&lu(t)}catch(g){oe(t,t.return,g)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function pd(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function md(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(s){oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){oe(t,i,s)}}var o=t.return;try{lu(t)}catch(s){oe(t,o,s)}break;case 5:var a=t.return;try{lu(t)}catch(s){oe(t,a,s)}}}catch(s){oe(t,t.return,s)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var ay=Math.ceil,Ta=Bt.ReactCurrentDispatcher,Pc=Bt.ReactCurrentOwner,it=Bt.ReactCurrentBatchConfig,U=0,ve=null,fe=null,ke=0,Ve=0,cr=Sn(0),pe=0,Li=null,Vn=0,nl=0,jc=0,mi=null,ze=null,_c=0,Tr=1/0,_t=null,Na=!1,cu=null,dn=null,jo=!1,rn=null,Oa=0,hi=0,fu=null,qo=-1,Zo=0;function Ne(){return U&6?se():qo!==-1?qo:qo=se()}function pn(e){return e.mode&1?U&2&&ke!==0?ke&-ke:Wv.transition!==null?(Zo===0&&(Zo=dm()),Zo):(e=H,e!==0||(e=window.event,e=e===void 0?16:xm(e.type)),e):1}function mt(e,t,n,r){if(50<hi)throw hi=0,fu=null,Error(P(185));Qi(e,n,r),(!(U&2)||e!==ve)&&(e===ve&&(!(U&2)&&(nl|=n),pe===4&&tn(e,ke)),Me(e,r),n===1&&U===0&&!(t.mode&1)&&(Tr=se()+500,Za&&Cn()))}function Me(e,t){var n=e.callbackNode;Wg(e,t);var r=ma(e,e===ve?ke:0);if(r===0)n!==null&&Sf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sf(n),t===1)e.tag===0?Bv(hd.bind(null,e)):Mm(hd.bind(null,e)),Mv(function(){!(U&6)&&Cn()}),n=null;else{switch(pm(r)){case 1:n=ec;break;case 4:n=cm;break;case 16:n=pa;break;case 536870912:n=fm;break;default:n=pa}n=Ih(n,Nh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nh(e,t){if(qo=-1,Zo=0,U&6)throw Error(P(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=ma(e,e===ve?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$a(e,r);else{t=r;var i=U;U|=2;var o=$h();(ve!==e||ke!==t)&&(_t=null,Tr=se()+500,Rn(e,t));do try{uy();break}catch(l){Oh(e,l)}while(1);pc(),Ta.current=o,U=i,fe!==null?t=0:(ve=null,ke=0,t=pe)}if(t!==0){if(t===2&&(i=Ms(e),i!==0&&(r=i,t=du(e,i))),t===1)throw n=Li,Rn(e,0),tn(e,r),Me(e,se()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ly(i)&&(t=$a(e,r),t===2&&(o=Ms(e),o!==0&&(r=o,t=du(e,o))),t===1))throw n=Li,Rn(e,0),tn(e,r),Me(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Tn(e,ze,_t);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=_c+500-se(),10<t)){if(ma(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ys(Tn.bind(null,e,ze,_t),t);break}Tn(e,ze,_t);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-pt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ay(r/1960))-r,10<r){e.timeoutHandle=Ys(Tn.bind(null,e,ze,_t),r);break}Tn(e,ze,_t);break;case 5:Tn(e,ze,_t);break;default:throw Error(P(329))}}}return Me(e,se()),e.callbackNode===n?Nh.bind(null,e):null}function du(e,t){var n=mi;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=$a(e,t),e!==2&&(t=ze,ze=n,t!==null&&pu(t)),e}function pu(e){ze===null?ze=e:ze.push.apply(ze,e)}function ly(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~jc,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function hd(e){if(U&6)throw Error(P(327));wr();var t=ma(e,0);if(!(t&1))return Me(e,se()),null;var n=$a(e,t);if(e.tag!==0&&n===2){var r=Ms(e);r!==0&&(t=r,n=du(e,r))}if(n===1)throw n=Li,Rn(e,0),tn(e,t),Me(e,se()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,ze,_t),Me(e,se()),null}function Tc(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Tr=se()+500,Za&&Cn())}}function Hn(e){rn!==null&&rn.tag===0&&!(U&6)&&wr();var t=U;U|=1;var n=it.transition,r=H;try{if(it.transition=null,H=1,e)return e()}finally{H=r,it.transition=n,U=t,!(U&6)&&Cn()}}function Nc(){Ve=cr.current,q(cr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Iv(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xa();break;case 3:jr(),q(Re),q(je),xc();break;case 5:yc(r);break;case 4:jr();break;case 13:q(te);break;case 19:q(te);break;case 10:mc(r.type._context);break;case 22:case 23:Nc()}n=n.return}if(ve=e,fe=e=mn(e.current,null),ke=Ve=t,pe=0,Li=null,jc=nl=Vn=0,ze=mi=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}On=null}return e}function Oh(e,t){do{var n=fe;try{if(pc(),Qo.current=_a,ja){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ja=!1}if(Wn=0,he=de=ne=null,di=!1,$i=0,Pc.current=null,n===null||n.return===null){pe=1,Li=t,fe=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=ke,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=nd(a);if(y!==null){y.flags&=-257,rd(y,a,l,o,t),y.mode&1&&td(o,u,t),t=y,s=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(s),t.updateQueue=v}else x.add(s);break e}else{if(!(t&1)){td(o,u,t),Oc();break e}s=Error(P(426))}}else if(ee&&l.mode&1){var S=nd(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),rd(S,a,l,o,t),fc(_r(s,l));break e}}o=s=_r(s,l),pe!==4&&(pe=2),mi===null?mi=[o]:mi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=mh(o,s,t);Qf(o,m);break e;case 1:l=s;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(dn===null||!dn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=hh(o,l,t);Qf(o,w);break e}}o=o.return}while(o!==null)}Ah(n)}catch(k){t=k,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function $h(){var e=Ta.current;return Ta.current=_a,e===null?_a:e}function Oc(){(pe===0||pe===3||pe===2)&&(pe=4),ve===null||!(Vn&268435455)&&!(nl&268435455)||tn(ve,ke)}function $a(e,t){var n=U;U|=2;var r=$h();(ve!==e||ke!==t)&&(_t=null,Rn(e,t));do try{sy();break}catch(i){Oh(e,i)}while(1);if(pc(),U=n,Ta.current=r,fe!==null)throw Error(P(261));return ve=null,ke=0,pe}function sy(){for(;fe!==null;)zh(fe)}function uy(){for(;fe!==null&&!Ag();)zh(fe)}function zh(e){var t=Rh(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?Ah(e):fe=t,Pc.current=null}function Ah(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ny(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,fe=null;return}}else if(n=ty(n,t,Ve),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);pe===0&&(pe=5)}function Tn(e,t,n){var r=H,i=it.transition;try{it.transition=null,H=1,cy(e,t,n,r)}finally{it.transition=i,H=r}return null}function cy(e,t,n,r){do wr();while(rn!==null);if(U&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Vg(e,o),e===ve&&(fe=ve=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jo||(jo=!0,Ih(pa,function(){return wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=it.transition,it.transition=null;var a=H;H=1;var l=U;U|=4,Pc.current=null,iy(e,n),_h(n,e),Nv(Vs),ha=!!Ws,Vs=Ws=null,e.current=n,oy(n),Lg(),U=l,H=a,it.transition=o}else e.current=n;if(jo&&(jo=!1,rn=e,Oa=i),o=e.pendingLanes,o===0&&(dn=null),Mg(n.stateNode),Me(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Na)throw Na=!1,e=cu,cu=null,e;return Oa&1&&e.tag!==0&&wr(),o=e.pendingLanes,o&1?e===fu?hi++:(hi=0,fu=e):hi=0,Cn(),null}function wr(){if(rn!==null){var e=pm(Oa),t=it.transition,n=H;try{if(it.transition=null,H=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Oa=0,U&6)throw Error(P(331));var i=U;for(U|=4,$=e.current;$!==null;){var o=$,a=o.child;if($.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for($=u;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:pi(8,f,o)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var g=f.sibling,y=f.return;if(Eh(f),f===u){$=null;break}if(g!==null){g.return=y,$=g;break}$=y}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}$=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,$=a;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pi(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,$=m;break e}$=o.return}}var c=e.current;for($=c;$!==null;){a=$;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,$=h;else e:for(a=c;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:tl(9,l)}}catch(k){oe(l,l.return,k)}if(l===a){$=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,$=w;break e}$=l.return}}if(U=i,Cn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Ga,e)}catch{}r=!0}return r}finally{H=n,it.transition=t}}return!1}function gd(e,t,n){t=_r(n,t),t=mh(e,t,1),e=fn(e,t,1),t=Ne(),e!==null&&(Qi(e,1,t),Me(e,t))}function oe(e,t,n){if(e.tag===3)gd(e,e,n);else for(;t!==null;){if(t.tag===3){gd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=_r(n,e),e=hh(t,e,1),t=fn(t,e,1),e=Ne(),t!==null&&(Qi(t,1,e),Me(t,e));break}}t=t.return}}function fy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ke&n)===n&&(pe===4||pe===3&&(ke&130023424)===ke&&500>se()-_c?Rn(e,0):jc|=n),Me(e,t)}function Lh(e,t){t===0&&(e.mode&1?(t=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):t=1);var n=Ne();e=It(e,t),e!==null&&(Qi(e,t,n),Me(e,n))}function dy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lh(e,n)}function py(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Lh(e,n)}var Rh;Rh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,ey(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,ee&&t.flags&1048576&&Fm(t,ba,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xo(e,t),e=t.pendingProps;var i=Cr(t,je.current);xr(t,n),i=kc(null,t,r,e,i,n);var o=bc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(o=!0,wa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gc(t),i.updater=Ja,t.stateNode=i,i._reactInternals=t,Js(t,r,e,n),t=nu(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&uc(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=hy(r),e=ut(r,e),i){case 0:t=tu(null,t,r,e,n);break e;case 1:t=ad(null,t,r,e,n);break e;case 11:t=id(null,t,r,e,n);break e;case 14:t=od(null,t,r,ut(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),tu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),ad(e,t,r,i,n);case 3:e:{if(xh(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Wm(e,t),Ea(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=_r(Error(P(423)),t),t=ld(e,t,r,n,i);break e}else if(r!==i){i=_r(Error(P(424)),t),t=ld(e,t,r,n,i);break e}else for(He=cn(t.stateNode.containerInfo.firstChild),Ye=t,ee=!0,ft=null,n=Gm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===i){t=Mt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Qm(t),e===null&&Xs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Hs(r,i)?a=null:o!==null&&Hs(r,o)&&(t.flags|=32),yh(e,t),_e(e,t,a,n),t.child;case 6:return e===null&&Xs(t),null;case 13:return wh(e,t,n);case 4:return vc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),id(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,G(Sa,r._currentValue),r._currentValue=a,o!==null)if(gt(o.value,a)){if(o.children===i.children&&!Re.current){t=Mt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=zt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),qs(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(P(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),qs(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=ot(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),od(e,t,r,i,n);case 15:return gh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Xo(e,t),t.tag=1,Ie(r)?(e=!0,wa(t)):e=!1,xr(t,n),Hm(t,r,i),Js(t,r,i,n),nu(null,t,r,!0,e,n);case 19:return kh(e,t,n);case 22:return vh(e,t,n)}throw Error(P(156,t.tag))};function Ih(e,t){return um(e,t)}function my(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new my(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hy(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qu)return 11;if(e===Zu)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Jo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")$c(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case er:return In(n.children,i,o,t);case Xu:a=8,i|=8;break;case Ss:return e=rt(12,n,t,i|2),e.elementType=Ss,e.lanes=o,e;case Cs:return e=rt(13,n,t,i),e.elementType=Cs,e.lanes=o,e;case Es:return e=rt(19,n,t,i),e.elementType=Es,e.lanes=o,e;case Yp:return rl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vp:a=10;break e;case Hp:a=9;break e;case qu:a=11;break e;case Zu:a=14;break e;case Zt:a=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function In(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function rl(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Yp,e.lanes=n,e.stateNode={isHidden:!1},e}function as(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function ls(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zc(e,t,n,r,i,o,a,l,s){return e=new gy(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=rt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(o),e}function vy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mh(e){if(!e)return yn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Im(e,n,t)}return t}function Fh(e,t,n,r,i,o,a,l,s){return e=zc(n,r,!0,e,i,o,a,l,s),e.context=Mh(null),n=e.current,r=Ne(),i=pn(n),o=zt(r,i),o.callback=t??null,fn(n,o,i),e.current.lanes=i,Qi(e,i,r),Me(e,r),e}function il(e,t,n,r){var i=t.current,o=Ne(),a=pn(i);return n=Mh(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(i,t,a),e!==null&&(mt(e,i,a,o),Go(e,i,a)),a}function za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ac(e,t){vd(e,t),(e=e.alternate)&&vd(e,t)}function yy(){return null}var Dh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lc(e){this._internalRoot=e}ol.prototype.render=Lc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));il(e,t,null,null)};ol.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){il(null,e,null,null)}),t[Rt]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=gm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&ym(e)}};function Rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yd(){}function xy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=za(a);o.call(u)}}var a=Fh(t,r,e,0,null,!1,!1,"",yd);return e._reactRootContainer=a,e[Rt]=a.current,ji(e.nodeType===8?e.parentNode:e),Hn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=za(s);l.call(u)}}var s=zc(e,0,!1,null,null,!1,!1,"",yd);return e._reactRootContainer=s,e[Rt]=s.current,ji(e.nodeType===8?e.parentNode:e),Hn(function(){il(t,s,n,r)}),s}function ll(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=za(a);l.call(s)}}il(t,a,e,i)}else a=xy(n,t,e,i,r);return za(a)}mm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ri(t.pendingLanes);n!==0&&(tc(t,n|1),Me(t,se()),!(U&6)&&(Tr=se()+500,Cn()))}break;case 13:Hn(function(){var r=It(e,1);if(r!==null){var i=Ne();mt(r,e,1,i)}}),Ac(e,1)}};nc=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=Ne();mt(t,e,134217728,n)}Ac(e,134217728)}};hm=function(e){if(e.tag===13){var t=pn(e),n=It(e,t);if(n!==null){var r=Ne();mt(n,e,t,r)}Ac(e,t)}};gm=function(){return H};vm=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Ls=function(e,t,n){switch(t){case"input":if(_s(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qa(r);if(!i)throw Error(P(90));Qp(r),_s(r,i)}}}break;case"textarea":Xp(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};rm=Tc;im=Hn;var wy={usingClientEntryPoint:!1,Events:[Xi,ir,qa,tm,nm,Tc]},Jr={findFiberByHostInstance:Nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ky={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lm(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Ga=_o.inject(ky),Ct=_o}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rc(t))throw Error(P(200));return vy(e,t,null,n)};Ke.createRoot=function(e,t){if(!Rc(e))throw Error(P(299));var n=!1,r="",i=Dh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zc(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,ji(e.nodeType===8?e.parentNode:e),new Lc(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=lm(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return Hn(e)};Ke.hydrate=function(e,t,n){if(!al(t))throw Error(P(200));return ll(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Rc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Dh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Fh(t,null,e,1,n??null,i,!1,o,a),e[Rt]=t.current,ji(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ol(t)};Ke.render=function(e,t,n){if(!al(t))throw Error(P(200));return ll(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!al(e))throw Error(P(40));return e._reactRootContainer?(Hn(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Tc;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!al(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ll(e,t,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function Uh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uh)}catch(e){console.error(e)}}Uh(),Fp.exports=Ke;var by=Fp.exports,xd=by;ks.createRoot=xd.createRoot,ks.hydrateRoot=xd.hydrateRoot;function mu(){return mu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mu.apply(this,arguments)}function Bh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Sy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Cy=Bh(function(e){return Sy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Ey(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Py(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var jy=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Py(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Ey(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ee="-ms-",Aa="-moz-",B="-webkit-",Wh="comm",Ic="rule",Mc="decl",_y="@import",Vh="@keyframes",Ty="@layer",Ny=Math.abs,sl=String.fromCharCode,Oy=Object.assign;function $y(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function Hh(e){return e.trim()}function zy(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function hu(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function Ri(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function Fc(e){return e.length}function To(e,t){return t.push(e),e}function Ay(e,t){return e.map(t).join("")}var ul=1,Nr=1,Yh=0,Fe=0,ue=0,Br="";function cl(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ul,column:Nr,length:a,return:""}}function ei(e,t){return Oy(cl("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ly(){return ue}function Ry(){return ue=Fe>0?we(Br,--Fe):0,Nr--,ue===10&&(Nr=1,ul--),ue}function Ge(){return ue=Fe<Yh?we(Br,Fe++):0,Nr++,ue===10&&(Nr=1,ul++),ue}function Pt(){return we(Br,Fe)}function ea(){return Fe}function Zi(e,t){return Ri(Br,e,t)}function Ii(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gh(e){return ul=Nr=1,Yh=xt(Br=e),Fe=0,[]}function Qh(e){return Br="",e}function ta(e){return Hh(Zi(Fe-1,gu(e===91?e+2:e===40?e+1:e)))}function Iy(e){for(;(ue=Pt())&&ue<33;)Ge();return Ii(e)>2||Ii(ue)>3?"":" "}function My(e,t){for(;--t&&Ge()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return Zi(e,ea()+(t<6&&Pt()==32&&Ge()==32))}function gu(e){for(;Ge();)switch(ue){case e:return Fe;case 34:case 39:e!==34&&e!==39&&gu(ue);break;case 40:e===41&&gu(e);break;case 92:Ge();break}return Fe}function Fy(e,t){for(;Ge()&&e+ue!==47+10;)if(e+ue===42+42&&Pt()===47)break;return"/*"+Zi(t,Fe-1)+"*"+sl(e===47?e:Ge())}function Dy(e){for(;!Ii(Pt());)Ge();return Zi(e,Fe)}function Uy(e){return Qh(na("",null,null,null,[""],e=Gh(e),0,[0],e))}function na(e,t,n,r,i,o,a,l,s){for(var u=0,f=0,p=a,g=0,y=0,x=0,v=1,S=1,m=1,c=0,h="",w=i,k=o,E=r,b=h;S;)switch(x=c,c=Ge()){case 40:if(x!=108&&we(b,p-1)==58){hu(b+=W(ta(c),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:b+=ta(c);break;case 9:case 10:case 13:case 32:b+=Iy(x);break;case 92:b+=My(ea()-1,7);continue;case 47:switch(Pt()){case 42:case 47:To(By(Fy(Ge(),ea()),t,n),s);break;default:b+="/"}break;case 123*v:l[u++]=xt(b)*m;case 125*v:case 59:case 0:switch(c){case 0:case 125:S=0;case 59+f:m==-1&&(b=W(b,/\f/g,"")),y>0&&xt(b)-p&&To(y>32?kd(b+";",r,n,p-1):kd(W(b," ","")+";",r,n,p-2),s);break;case 59:b+=";";default:if(To(E=wd(b,t,n,u,f,i,l,h,w=[],k=[],p),o),c===123)if(f===0)na(b,t,E,E,w,o,p,l,k);else switch(g===99&&we(b,3)===110?100:g){case 100:case 108:case 109:case 115:na(e,E,E,r&&To(wd(e,E,E,0,0,i,l,h,i,w=[],p),k),i,k,p,l,r?w:k);break;default:na(b,E,E,E,[""],k,0,l,k)}}u=f=y=0,v=m=1,h=b="",p=a;break;case 58:p=1+xt(b),y=x;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&Ry()==125)continue}switch(b+=sl(c),c*v){case 38:m=f>0?1:(b+="\f",-1);break;case 44:l[u++]=(xt(b)-1)*m,m=1;break;case 64:Pt()===45&&(b+=ta(Ge())),g=Pt(),f=p=xt(h=b+=Dy(ea())),c++;break;case 45:x===45&&xt(b)==2&&(v=0)}}return o}function wd(e,t,n,r,i,o,a,l,s,u,f){for(var p=i-1,g=i===0?o:[""],y=Fc(g),x=0,v=0,S=0;x<r;++x)for(var m=0,c=Ri(e,p+1,p=Ny(v=a[x])),h=e;m<y;++m)(h=Hh(v>0?g[m]+" "+c:W(c,/&\f/g,g[m])))&&(s[S++]=h);return cl(e,t,n,i===0?Ic:l,s,u,f)}function By(e,t,n){return cl(e,t,n,Wh,sl(Ly()),Ri(e,2,-2),0)}function kd(e,t,n,r){return cl(e,t,n,Mc,Ri(e,0,r),Ri(e,r+1,-1),r)}function kr(e,t){for(var n="",r=Fc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Wy(e,t,n,r){switch(e.type){case Ty:if(e.children.length)break;case _y:case Mc:return e.return=e.return||e.value;case Wh:return"";case Vh:return e.return=e.value+"{"+kr(e.children,r)+"}";case Ic:e.value=e.props.join(",")}return xt(n=kr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Vy(e){var t=Fc(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function Hy(e){return function(t){t.root||(t=t.return)&&e(t)}}var Yy=function(t,n,r){for(var i=0,o=0;i=o,o=Pt(),i===38&&o===12&&(n[r]=1),!Ii(o);)Ge();return Zi(t,Fe)},Gy=function(t,n){var r=-1,i=44;do switch(Ii(i)){case 0:i===38&&Pt()===12&&(n[r]=1),t[r]+=Yy(Fe-1,n,r);break;case 2:t[r]+=ta(i);break;case 4:if(i===44){t[++r]=Pt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=sl(i)}while(i=Ge());return t},Qy=function(t,n){return Qh(Gy(Gh(t),n))},bd=new WeakMap,Ky=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!bd.get(r))&&!i){bd.set(t,!0);for(var o=[],a=Qy(n,o),l=r.props,s=0,u=0;s<a.length;s++)for(var f=0;f<l.length;f++,u++)t.props[u]=o[s]?a[s].replace(/&\f/g,l[f]):l[f]+" "+a[s]}}},Xy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Kh(e,t){switch($y(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Aa+e+Ee+e+e;case 6828:case 4268:return B+e+Ee+e+e;case 6165:return B+e+Ee+"flex-"+e+e;case 5187:return B+e+W(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+Ee+"flex-$1$2")+e;case 5443:return B+e+Ee+"flex-item-"+W(e,/flex-|-self/,"")+e;case 4675:return B+e+Ee+"flex-line-pack"+W(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+Ee+W(e,"shrink","negative")+e;case 5292:return B+e+Ee+W(e,"basis","preferred-size")+e;case 6060:return B+"box-"+W(e,"-grow","")+B+e+Ee+W(e,"grow","positive")+e;case 4554:return B+W(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Aa+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~hu(e,"stretch")?Kh(W(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,xt(e)-3-(~hu(e,"!important")&&10))){case 107:return W(e,":",":"+B)+e;case 101:return W(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(we(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+Ee+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+Ee+e+e}return e}var qy=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Mc:t.return=Kh(t.value,t.length);break;case Vh:return kr([ei(t,{value:W(t.value,"@","@"+B)})],i);case Ic:if(t.length)return Ay(t.props,function(o){switch(zy(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return kr([ei(t,{props:[W(o,/:(read-\w+)/,":"+Aa+"$1")]})],i);case"::placeholder":return kr([ei(t,{props:[W(o,/:(plac\w+)/,":"+B+"input-$1")]}),ei(t,{props:[W(o,/:(plac\w+)/,":"+Aa+"$1")]}),ei(t,{props:[W(o,/:(plac\w+)/,Ee+"input-$1")]})],i)}return""})}},Zy=[qy],Jy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var S=v.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||Zy,o={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var S=v.getAttribute("data-emotion").split(" "),m=1;m<S.length;m++)o[S[m]]=!0;l.push(v)});var s,u=[Ky,Xy];{var f,p=[Wy,Hy(function(v){f.insert(v)})],g=Vy(u.concat(i,p)),y=function(S){return kr(Uy(S),g)};s=function(S,m,c,h){f=c,y(S?S+"{"+m.styles+"}":m.styles),h&&(x.inserted[m.name]=!0)}}var x={key:n,sheet:new jy({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:s};return x.sheet.hydrate(l),x},Xh={exports:{}},Y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=typeof Symbol=="function"&&Symbol.for,Dc=ye?Symbol.for("react.element"):60103,Uc=ye?Symbol.for("react.portal"):60106,fl=ye?Symbol.for("react.fragment"):60107,dl=ye?Symbol.for("react.strict_mode"):60108,pl=ye?Symbol.for("react.profiler"):60114,ml=ye?Symbol.for("react.provider"):60109,hl=ye?Symbol.for("react.context"):60110,Bc=ye?Symbol.for("react.async_mode"):60111,gl=ye?Symbol.for("react.concurrent_mode"):60111,vl=ye?Symbol.for("react.forward_ref"):60112,yl=ye?Symbol.for("react.suspense"):60113,ex=ye?Symbol.for("react.suspense_list"):60120,xl=ye?Symbol.for("react.memo"):60115,wl=ye?Symbol.for("react.lazy"):60116,tx=ye?Symbol.for("react.block"):60121,nx=ye?Symbol.for("react.fundamental"):60117,rx=ye?Symbol.for("react.responder"):60118,ix=ye?Symbol.for("react.scope"):60119;function qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dc:switch(e=e.type,e){case Bc:case gl:case fl:case pl:case dl:case yl:return e;default:switch(e=e&&e.$$typeof,e){case hl:case vl:case wl:case xl:case ml:return e;default:return t}}case Uc:return t}}}function qh(e){return qe(e)===gl}Y.AsyncMode=Bc;Y.ConcurrentMode=gl;Y.ContextConsumer=hl;Y.ContextProvider=ml;Y.Element=Dc;Y.ForwardRef=vl;Y.Fragment=fl;Y.Lazy=wl;Y.Memo=xl;Y.Portal=Uc;Y.Profiler=pl;Y.StrictMode=dl;Y.Suspense=yl;Y.isAsyncMode=function(e){return qh(e)||qe(e)===Bc};Y.isConcurrentMode=qh;Y.isContextConsumer=function(e){return qe(e)===hl};Y.isContextProvider=function(e){return qe(e)===ml};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dc};Y.isForwardRef=function(e){return qe(e)===vl};Y.isFragment=function(e){return qe(e)===fl};Y.isLazy=function(e){return qe(e)===wl};Y.isMemo=function(e){return qe(e)===xl};Y.isPortal=function(e){return qe(e)===Uc};Y.isProfiler=function(e){return qe(e)===pl};Y.isStrictMode=function(e){return qe(e)===dl};Y.isSuspense=function(e){return qe(e)===yl};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fl||e===gl||e===pl||e===dl||e===yl||e===ex||typeof e=="object"&&e!==null&&(e.$$typeof===wl||e.$$typeof===xl||e.$$typeof===ml||e.$$typeof===hl||e.$$typeof===vl||e.$$typeof===nx||e.$$typeof===rx||e.$$typeof===ix||e.$$typeof===tx)};Y.typeOf=qe;Xh.exports=Y;var ox=Xh.exports,Zh=ox,ax={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jh={};Jh[Zh.ForwardRef]=ax;Jh[Zh.Memo]=lx;var sx=!0;function ux(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var e0=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||sx===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},cx=function(t,n,r){e0(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function fx(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var t0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dx=/[A-Z]|^ms/g,px=/_EMO_([^_]+?)_([^]*?)_EMO_/g,n0=function(t){return t.charCodeAt(1)===45},Sd=function(t){return t!=null&&typeof t!="boolean"},ss=Bh(function(e){return n0(e)?e:e.replace(dx,"-$&").toLowerCase()}),Cd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(px,function(r,i,o){return wt={name:i,styles:o,next:wt},i})}return t0[t]!==1&&!n0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Mi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return wt={name:n.name,styles:n.styles,next:wt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)wt={name:r.name,styles:r.styles,next:wt},r=r.next;var i=n.styles+";";return i}return mx(e,t,n)}case"function":{if(e!==void 0){var o=wt,a=n(e);return wt=o,Mi(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function mx(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Mi(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Sd(a)&&(r+=ss(o)+":"+Cd(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)Sd(a[l])&&(r+=ss(o)+":"+Cd(o,a[l])+";");else{var s=Mi(e,t,a);switch(o){case"animation":case"animationName":{r+=ss(o)+":"+s+";";break}default:r+=o+"{"+s+"}"}}}return r}var Ed=/label:\s*([^\s;\n{]+)\s*(;|$)/g,wt,r0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";wt=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Mi(r,n,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=Mi(r,n,t[l]),i&&(o+=a[l]);Ed.lastIndex=0;for(var s="",u;(u=Ed.exec(o))!==null;)s+="-"+u[1];var f=fx(o)+s;return{name:f,styles:o,next:wt}},hx=function(t){return t()},gx=ws["useInsertionEffect"]?ws["useInsertionEffect"]:!1,vx=gx||hx,i0=C.createContext(typeof HTMLElement<"u"?Jy({key:"css"}):null);i0.Provider;var yx=function(t){return C.forwardRef(function(n,r){var i=C.useContext(i0);return t(n,i,r)})},xx=C.createContext({});function wx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r0(t)}var Wc=function(){var t=wx.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},kx=Cy,bx=function(t){return t!=="theme"},Pd=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?kx:bx},jd=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Sx=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return e0(n,r,i),vx(function(){return cx(n,r,i)}),null},Cx=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var l=jd(t,n,r),s=l||Pd(i),u=!s("as");return function(){var f=arguments,p=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&p.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)p.push.apply(p,f);else{p.push(f[0][0]);for(var g=f.length,y=1;y<g;y++)p.push(f[y],f[0][y])}var x=yx(function(v,S,m){var c=u&&v.as||i,h="",w=[],k=v;if(v.theme==null){k={};for(var E in v)k[E]=v[E];k.theme=C.useContext(xx)}typeof v.className=="string"?h=ux(S.registered,w,v.className):v.className!=null&&(h=v.className+" ");var b=r0(p.concat(w),S.registered,k);h+=S.key+"-"+b.name,a!==void 0&&(h+=" "+a);var N=u&&l===void 0?Pd(c):s,M={};for(var R in v)u&&R==="as"||N(R)&&(M[R]=v[R]);return M.className=h,M.ref=m,C.createElement(C.Fragment,null,C.createElement(Sx,{cache:S,serialized:b,isStringTag:typeof c=="string"}),C.createElement(c,M))});return x.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=p,x.__emotion_forwardProp=l,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(v,S){return e(v,mu({},n,S,{shouldForwardProp:jd(x,S,!0)})).apply(void 0,p)},x}},Ex=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],F=Cx.bind();Ex.forEach(function(e){F[e]=F(e)});const Px=Wc`
  100% {
    transform: rotate(360deg);
  }
`,jx=Wc`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`,_x=Wc`
  0%, 100% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%, 90% {
    stroke: #ffa700;
  }
`,Tx=F.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  width: 100px;
  
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`,Nx=F.svg`
  animation: ${Px} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`,Ox=F.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${jx} 1.5s ease-in-out infinite, ${_x} 6s ease-in-out infinite;
  stroke-linecap: round;
`,$x=()=>d.jsx(Tx,{children:d.jsx(Nx,{viewBox:"25 25 50 50",children:d.jsx(Ox,{cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})})});/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fi.apply(this,arguments)}var on;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(on||(on={}));const _d="popstate";function zx(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return vu("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:La(i)}return Lx(t,n,null,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ax(){return Math.random().toString(36).substr(2,8)}function Td(e,t){return{usr:e.state,key:e.key,idx:t}}function vu(e,t,n,r){return n===void 0&&(n=null),Fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wr(t):t,{state:n,key:t&&t.key||r||Ax()})}function La(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Lx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=on.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(Fi({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function p(){l=on.Pop;let S=f(),m=S==null?null:S-u;u=S,s&&s({action:l,location:v.location,delta:m})}function g(S,m){l=on.Push;let c=vu(v.location,S,m);n&&n(c,S),u=f()+1;let h=Td(c,u),w=v.createHref(c);try{a.pushState(h,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}o&&s&&s({action:l,location:v.location,delta:1})}function y(S,m){l=on.Replace;let c=vu(v.location,S,m);n&&n(c,S),u=f();let h=Td(c,u),w=v.createHref(c);a.replaceState(h,"",w),o&&s&&s({action:l,location:v.location,delta:0})}function x(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof S=="string"?S:La(S);return le(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let v={get action(){return l},get location(){return e(i,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(_d,p),s=S,()=>{i.removeEventListener(_d,p),s=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let m=x(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(S){return a.go(S)}};return v}var Nd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Nd||(Nd={}));function Rx(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Wr(t):t,i=Di(r.pathname||"/",n);if(i==null)return null;let o=o0(e);Ix(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=Yx(o[l],Qx(i));return a}function o0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=hn([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),o0(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Vx(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of a0(o.path))i(o,a,s)}),t}function a0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=a0(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Ix(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Hx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Mx=/^:\w+$/,Fx=3,Dx=2,Ux=1,Bx=10,Wx=-2,Od=e=>e==="*";function Vx(e,t){let n=e.split("/"),r=n.length;return n.some(Od)&&(r+=Wx),t&&(r+=Dx),n.filter(i=>!Od(i)).reduce((i,o)=>i+(Mx.test(o)?Fx:o===""?Ux:Bx),r)}function Hx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Yx(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=yu({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let p=l.route;o.push({params:r,pathname:hn([i,f.pathname]),pathnameBase:Zx(hn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=hn([i,f.pathnameBase]))}return o}function yu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Gx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,p)=>{if(f==="*"){let g=l[p]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return u[f]=Kx(l[p]||"",f),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Gx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Qx(e){try{return decodeURI(e)}catch(t){return Vc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kx(e,t){try{return decodeURIComponent(e)}catch(n){return Vc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Di(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Xx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Wr(e):e;return{pathname:n?n.startsWith("/")?n:qx(n,t):t,search:Jx(r),hash:e2(i)}}function qx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function us(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function l0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function s0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Wr(e):(i=Fi({},e),le(!i.pathname||!i.pathname.includes("?"),us("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),us("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),us("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let p=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?t[p]:"/"}let s=Xx(i,l),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),Zx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,e2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function t2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const u0=["post","put","patch","delete"];new Set(u0);const n2=["get",...u0];new Set(n2);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ra.apply(this,arguments)}const kl=C.createContext(null),c0=C.createContext(null),Xn=C.createContext(null),bl=C.createContext(null),Wt=C.createContext({outlet:null,matches:[],isDataRoute:!1}),f0=C.createContext(null);function r2(e,t){let{relative:n}=t===void 0?{}:t;Ji()||le(!1);let{basename:r,navigator:i}=C.useContext(Xn),{hash:o,pathname:a,search:l}=Cl(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:hn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function Ji(){return C.useContext(bl)!=null}function eo(){return Ji()||le(!1),C.useContext(bl).location}function d0(e){C.useContext(Xn).static||C.useLayoutEffect(e)}function Sl(){let{isDataRoute:e}=C.useContext(Wt);return e?y2():i2()}function i2(){Ji()||le(!1);let e=C.useContext(kl),{basename:t,navigator:n}=C.useContext(Xn),{matches:r}=C.useContext(Wt),{pathname:i}=eo(),o=JSON.stringify(l0(r).map(s=>s.pathnameBase)),a=C.useRef(!1);return d0(()=>{a.current=!0}),C.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let f=s0(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:hn([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,o,i,e])}const o2=C.createContext(null);function a2(e){let t=C.useContext(Wt).outlet;return t&&C.createElement(o2.Provider,{value:e},t)}function p0(){let{matches:e}=C.useContext(Wt),t=e[e.length-1];return t?t.params:{}}function Cl(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(Wt),{pathname:i}=eo(),o=JSON.stringify(l0(r).map(a=>a.pathnameBase));return C.useMemo(()=>s0(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function l2(e,t){return s2(e,t)}function s2(e,t,n){Ji()||le(!1);let{navigator:r}=C.useContext(Xn),{matches:i}=C.useContext(Wt),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=eo(),u;if(t){var f;let v=typeof t=="string"?Wr(t):t;l==="/"||(f=v.pathname)!=null&&f.startsWith(l)||le(!1),u=v}else u=s;let p=u.pathname||"/",g=l==="/"?p:p.slice(l.length)||"/",y=Rx(e,{pathname:g}),x=p2(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:hn([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:hn([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&x?C.createElement(bl.Provider,{value:{location:Ra({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:on.Pop}},x):x}function u2(){let e=v2(),t=t2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const c2=C.createElement(u2,null);class f2 extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Wt.Provider,{value:this.props.routeContext},C.createElement(f0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function d2(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(kl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Wt.Provider,{value:t},r)}function p2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let f=s.route.id?a==null?void 0:a[s.route.id]:null,p=null;n&&(p=s.route.errorElement||c2);let g=t.concat(o.slice(0,u+1)),y=()=>{let x;return f?x=p:s.route.Component?x=C.createElement(s.route.Component,null):s.route.element?x=s.route.element:x=l,C.createElement(d2,{match:s,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:x})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?C.createElement(f2,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var m0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(m0||{}),Ia=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ia||{});function m2(e){let t=C.useContext(kl);return t||le(!1),t}function h2(e){let t=C.useContext(c0);return t||le(!1),t}function g2(e){let t=C.useContext(Wt);return t||le(!1),t}function h0(e){let t=g2(),n=t.matches[t.matches.length-1];return n.route.id||le(!1),n.route.id}function v2(){var e;let t=C.useContext(f0),n=h2(Ia.UseRouteError),r=h0(Ia.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function y2(){let{router:e}=m2(m0.UseNavigateStable),t=h0(Ia.UseNavigateStable),n=C.useRef(!1);return d0(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ra({fromRouteId:t},o)))},[e,t])}function x2(e){return a2(e.context)}function We(e){le(!1)}function w2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=on.Pop,navigator:o,static:a=!1}=e;Ji()&&le(!1);let l=t.replace(/^\/*/,"/"),s=C.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Wr(r));let{pathname:u="/",search:f="",hash:p="",state:g=null,key:y="default"}=r,x=C.useMemo(()=>{let v=Di(u,l);return v==null?null:{location:{pathname:v,search:f,hash:p,state:g,key:y},navigationType:i}},[l,u,f,p,g,y,i]);return x==null?null:C.createElement(Xn.Provider,{value:s},C.createElement(bl.Provider,{children:n,value:x}))}function k2(e){let{children:t,location:n}=e;return l2(xu(t),n)}new Promise(()=>{});function xu(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,xu(r.props.children,o));return}r.type!==We&&le(!1),!r.props.index||!r.props.children||le(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=xu(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma.apply(this,arguments)}function g0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function b2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function S2(e,t){return e.button===0&&(!t||t==="_self")&&!b2(e)}const C2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],E2=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],P2=C.createContext({isTransitioning:!1}),j2="startTransition",$d=ws[j2];function _2(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=zx({window:i,v5Compat:!0}));let a=o.current,[l,s]=C.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=C.useCallback(p=>{u&&$d?$d(()=>s(p)):s(p)},[s,u]);return C.useLayoutEffect(()=>a.listen(f),[a,f]),C.createElement(w2,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a})}const T2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",N2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,At=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:f,unstable_viewTransition:p}=t,g=g0(t,C2),{basename:y}=C.useContext(Xn),x,v=!1;if(typeof u=="string"&&N2.test(u)&&(x=u,T2))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),k=Di(w.pathname,y);w.origin===h.origin&&k!=null?u=k+w.search+w.hash:v=!0}catch{}let S=r2(u,{relative:i}),m=$2(u,{replace:a,state:l,target:s,preventScrollReset:f,relative:i,unstable_viewTransition:p});function c(h){r&&r(h),h.defaultPrevented||m(h)}return C.createElement("a",Ma({},g,{href:x||S,onClick:v||o?r:c,ref:n,target:s}))}),to=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,unstable_viewTransition:u,children:f}=t,p=g0(t,E2),g=Cl(s,{relative:p.relative}),y=eo(),x=C.useContext(c0),{navigator:v}=C.useContext(Xn),S=x!=null&&z2(g)&&u===!0,m=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,c=y.pathname,h=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(c=c.toLowerCase(),h=h?h.toLowerCase():null,m=m.toLowerCase());let w=c===m||!a&&c.startsWith(m)&&c.charAt(m.length)==="/",k=h!=null&&(h===m||!a&&h.startsWith(m)&&h.charAt(m.length)==="/"),E={isActive:w,isPending:k,isTransitioning:S},b=w?r:void 0,N;typeof o=="function"?N=o(E):N=[o,w?"active":null,k?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let M=typeof l=="function"?l(E):l;return C.createElement(At,Ma({},p,{"aria-current":b,className:N,ref:n,style:M,to:s,unstable_viewTransition:u}),typeof f=="function"?f(E):f)});var wu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wu||(wu={}));var zd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zd||(zd={}));function O2(e){let t=C.useContext(kl);return t||le(!1),t}function $2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=Sl(),u=eo(),f=Cl(e,{relative:a});return C.useCallback(p=>{if(S2(p,n)){p.preventDefault();let g=r!==void 0?r:La(u)===La(f);s(e,{replace:g,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l})}},[u,s,f,r,i,n,e,o,a,l])}function z2(e,t){t===void 0&&(t={});let n=C.useContext(P2);n==null&&le(!1);let{basename:r}=O2(wu.useViewTransitionState),i=Cl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Di(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Di(n.nextLocation.pathname,r)||n.nextLocation.pathname;return yu(i.pathname,a)!=null||yu(i.pathname,o)!=null}var Le=function(){return Le=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Le.apply(this,arguments)};function Fa(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var K="-ms-",gi="-moz-",V="-webkit-",v0="comm",El="rule",Hc="decl",A2="@import",y0="@keyframes",L2="@layer",R2=Math.abs,Yc=String.fromCharCode,ku=Object.assign;function I2(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function x0(e){return e.trim()}function Tt(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function ra(e,t){return e.indexOf(t)}function ge(e,t){return e.charCodeAt(t)|0}function Or(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function w0(e){return e.length}function oi(e,t){return t.push(e),e}function M2(e,t){return e.map(t).join("")}function Ad(e,t){return e.filter(function(n){return!Tt(n,t)})}var Pl=1,$r=1,k0=0,lt=0,ce=0,Vr="";function jl(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Pl,column:$r,length:a,return:"",siblings:l}}function qt(e,t){return ku(jl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Zn(e){for(;e.root;)e=qt(e.root,{children:[e]});oi(e,e.siblings)}function F2(){return ce}function D2(){return ce=lt>0?ge(Vr,--lt):0,$r--,ce===10&&($r=1,Pl--),ce}function ht(){return ce=lt<k0?ge(Vr,lt++):0,$r++,ce===10&&($r=1,Pl++),ce}function Mn(){return ge(Vr,lt)}function ia(){return lt}function _l(e,t){return Or(Vr,e,t)}function bu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U2(e){return Pl=$r=1,k0=kt(Vr=e),lt=0,[]}function B2(e){return Vr="",e}function cs(e){return x0(_l(lt-1,Su(e===91?e+2:e===40?e+1:e)))}function W2(e){for(;(ce=Mn())&&ce<33;)ht();return bu(e)>2||bu(ce)>3?"":" "}function V2(e,t){for(;--t&&ht()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return _l(e,ia()+(t<6&&Mn()==32&&ht()==32))}function Su(e){for(;ht();)switch(ce){case e:return lt;case 34:case 39:e!==34&&e!==39&&Su(ce);break;case 40:e===41&&Su(e);break;case 92:ht();break}return lt}function H2(e,t){for(;ht()&&e+ce!==47+10;)if(e+ce===42+42&&Mn()===47)break;return"/*"+_l(t,lt-1)+"*"+Yc(e===47?e:ht())}function Y2(e){for(;!bu(Mn());)ht();return _l(e,lt)}function G2(e){return B2(oa("",null,null,null,[""],e=U2(e),0,[0],e))}function oa(e,t,n,r,i,o,a,l,s){for(var u=0,f=0,p=a,g=0,y=0,x=0,v=1,S=1,m=1,c=0,h="",w=i,k=o,E=r,b=h;S;)switch(x=c,c=ht()){case 40:if(x!=108&&ge(b,p-1)==58){ra(b+=I(cs(c),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:b+=cs(c);break;case 9:case 10:case 13:case 32:b+=W2(x);break;case 92:b+=V2(ia()-1,7);continue;case 47:switch(Mn()){case 42:case 47:oi(Q2(H2(ht(),ia()),t,n,s),s);break;default:b+="/"}break;case 123*v:l[u++]=kt(b)*m;case 125*v:case 59:case 0:switch(c){case 0:case 125:S=0;case 59+f:m==-1&&(b=I(b,/\f/g,"")),y>0&&kt(b)-p&&oi(y>32?Rd(b+";",r,n,p-1,s):Rd(I(b," ","")+";",r,n,p-2,s),s);break;case 59:b+=";";default:if(oi(E=Ld(b,t,n,u,f,i,l,h,w=[],k=[],p,o),o),c===123)if(f===0)oa(b,t,E,E,w,o,p,l,k);else switch(g===99&&ge(b,3)===110?100:g){case 100:case 108:case 109:case 115:oa(e,E,E,r&&oi(Ld(e,E,E,0,0,i,l,h,i,w=[],p,k),k),i,k,p,l,r?w:k);break;default:oa(b,E,E,E,[""],k,0,l,k)}}u=f=y=0,v=m=1,h=b="",p=a;break;case 58:p=1+kt(b),y=x;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&D2()==125)continue}switch(b+=Yc(c),c*v){case 38:m=f>0?1:(b+="\f",-1);break;case 44:l[u++]=(kt(b)-1)*m,m=1;break;case 64:Mn()===45&&(b+=cs(ht())),g=Mn(),f=p=kt(h=b+=Y2(ia())),c++;break;case 45:x===45&&kt(b)==2&&(v=0)}}return o}function Ld(e,t,n,r,i,o,a,l,s,u,f,p){for(var g=i-1,y=i===0?o:[""],x=w0(y),v=0,S=0,m=0;v<r;++v)for(var c=0,h=Or(e,g+1,g=R2(S=a[v])),w=e;c<x;++c)(w=x0(S>0?y[c]+" "+h:I(h,/&\f/g,y[c])))&&(s[m++]=w);return jl(e,t,n,i===0?El:l,s,u,f,p)}function Q2(e,t,n,r){return jl(e,t,n,v0,Yc(F2()),Or(e,2,-2),0,r)}function Rd(e,t,n,r,i){return jl(e,t,n,Hc,Or(e,0,r),Or(e,r+1,-1),r,i)}function b0(e,t,n){switch(I2(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return gi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+gi+e+K+e+e;case 5936:switch(ge(e,t+11)){case 114:return V+e+K+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+K+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+K+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+K+e+e;case 6165:return V+e+K+"flex-"+e+e;case 5187:return V+e+I(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return V+e+K+"flex-item-"+I(e,/flex-|-self/g,"")+(Tt(e,/flex-|baseline/)?"":K+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return V+e+K+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+K+I(e,"shrink","negative")+e;case 5292:return V+e+K+I(e,"basis","preferred-size")+e;case 6060:return V+"box-"+I(e,"-grow","")+V+e+K+I(e,"grow","positive")+e;case 4554:return V+I(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!Tt(e,/flex-|baseline/))return K+"grid-column-align"+Or(e,t)+e;break;case 2592:case 3360:return K+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Tt(r.props,/grid-\w+-end/)})?~ra(e+(n=n[t].value),"span")?e:K+I(e,"-start","")+e+K+"grid-row-span:"+(~ra(n,"span")?Tt(n,/\d+/):+Tt(n,/\d+/)-+Tt(e,/\d+/))+";":K+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Tt(r.props,/grid-\w+-start/)})?e:K+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+gi+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ra(e,"stretch")?b0(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return K+i+":"+o+u+(a?K+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(ge(e,t+6)===121)return I(e,":",":"+V)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(ge(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+K+"$2box$3")+e;case 100:return I(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Da(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function K2(e,t,n,r){switch(e.type){case L2:if(e.children.length)break;case A2:case Hc:return e.return=e.return||e.value;case v0:return"";case y0:return e.return=e.value+"{"+Da(e.children,r)+"}";case El:if(!kt(e.value=e.props.join(",")))return""}return kt(n=Da(e.children,r))?e.return=e.value+"{"+n+"}":""}function X2(e){var t=w0(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function q2(e){return function(t){t.root||(t=t.return)&&e(t)}}function Z2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Hc:e.return=b0(e.value,e.length,n);return;case y0:return Da([qt(e,{value:I(e.value,"@","@"+V)})],r);case El:if(e.length)return M2(n=e.props,function(i){switch(Tt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zn(qt(e,{props:[I(i,/:(read-\w+)/,":"+gi+"$1")]})),Zn(qt(e,{props:[i]})),ku(e,{props:Ad(n,r)});break;case"::placeholder":Zn(qt(e,{props:[I(i,/:(plac\w+)/,":"+V+"input-$1")]})),Zn(qt(e,{props:[I(i,/:(plac\w+)/,":"+gi+"$1")]})),Zn(qt(e,{props:[I(i,/:(plac\w+)/,K+"input-$1")]})),Zn(qt(e,{props:[i]})),ku(e,{props:Ad(n,r)});break}return""})}}var zr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Gc=typeof window<"u"&&"HTMLElement"in window,J2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Tl=Object.freeze([]),Ar=Object.freeze({});function ew(e,t,n){return n===void 0&&(n=Ar),e.theme!==n.theme&&e.theme||t||n.theme}var S0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nw=/(^-|-$)/g;function Id(e){return e.replace(tw,"-").replace(nw,"")}var rw=/(a)(d)/gi,Md=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Md(t%52)+n;return(Md(t%52)+n).replace(rw,"$1-$2")}var fs,fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},C0=function(e){return fr(5381,e)};function iw(e){return Cu(C0(e)>>>0)}function ow(e){return e.displayName||e.name||"Component"}function ds(e){return typeof e=="string"&&!0}var E0=typeof Symbol=="function"&&Symbol.for,P0=E0?Symbol.for("react.memo"):60115,aw=E0?Symbol.for("react.forward_ref"):60112,lw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},j0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uw=((fs={})[aw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fs[P0]=j0,fs);function Fd(e){return("type"in(t=e)&&t.type.$$typeof)===P0?j0:"$$typeof"in e?uw[e.$$typeof]:lw;var t}var cw=Object.defineProperty,fw=Object.getOwnPropertyNames,Dd=Object.getOwnPropertySymbols,dw=Object.getOwnPropertyDescriptor,pw=Object.getPrototypeOf,Ud=Object.prototype;function _0(e,t,n){if(typeof t!="string"){if(Ud){var r=pw(t);r&&r!==Ud&&_0(e,r,n)}var i=fw(t);Dd&&(i=i.concat(Dd(t)));for(var o=Fd(e),a=Fd(t),l=0;l<i.length;++l){var s=i[l];if(!(s in sw||n&&n[s]||a&&s in a||o&&s in o)){var u=dw(t,s);try{cw(e,s,u)}catch{}}}}return e}function Lr(e){return typeof e=="function"}function Qc(e){return typeof e=="object"&&"styledComponentId"in e}function zn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Bd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ui(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Eu(e,t,n){if(n===void 0&&(n=!1),!n&&!Ui(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Eu(e[r],t[r]);else if(Ui(t))for(var r in t)e[r]=Eu(e[r],t[r]);return e}function Kc(e,t){Object.defineProperty(e,"toString",{value:t})}function no(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var mw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw no(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),aa=new Map,Ua=new Map,ps=1,No=function(e){if(aa.has(e))return aa.get(e);for(;Ua.has(ps);)ps++;var t=ps++;return aa.set(e,t),Ua.set(t,e),t},hw=function(e,t){aa.set(e,t),Ua.set(t,e)},gw="style[".concat(zr,"][").concat("data-styled-version",'="').concat("6.0.3",'"]'),vw=new RegExp("^".concat(zr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yw=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},xw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(vw);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(hw(f,u),yw(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function ww(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var T0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(zr,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(zr,"active"),r.setAttribute("data-styled-version","6.0.3");var a=ww();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},kw=function(){function e(t){this.element=T0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw no(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),bw=function(){function e(t){this.element=T0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Sw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Wd=Gc,Cw={isServer:!Gc,useCSSOMInjection:!J2},N0=function(){function e(t,n,r){t===void 0&&(t=Ar),n===void 0&&(n={});var i=this;this.options=Le(Le({},Cw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Gc&&Wd&&(Wd=!1,function(o){for(var a=document.querySelectorAll(gw),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(zr)!=="active"&&(xw(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Kc(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(p){var g=function(m){return Ua.get(m)}(p);if(g===void 0)return"continue";var y=o.names.get(g),x=a.getGroup(p);if(y===void 0||x.length===0)return"continue";var v="".concat(zr,".g").concat(p,'[id="').concat(g,'"]'),S="";y!==void 0&&y.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),s+="".concat(x).concat(v,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},f=0;f<l;f++)u(f);return s}(i)})}return e.registerId=function(t){return No(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Le(Le({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Sw(i):r?new kw(i):new bw(i)}(this.options),new mw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(No(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(No(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(No(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ew=/&/g,Pw=/^\s*\/\/.*$/gm;function O0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=O0(n.children,t)),n})}function jw(e){var t,n,r,i=e===void 0?Ar:e,o=i.options,a=o===void 0?Ar:o,l=i.plugins,s=l===void 0?Tl:l,u=function(g,y,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},f=s.slice();f.push(function(g){g.type===El&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Ew,n).replace(r,u))}),a.prefix&&f.push(Z2),f.push(K2);var p=function(g,y,x,v){y===void 0&&(y=""),x===void 0&&(x=""),v===void 0&&(v="&"),t=v,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var S=g.replace(Pw,""),m=G2(x||y?"".concat(x," ").concat(y," { ").concat(S," }"):S);a.namespace&&(m=O0(m,a.namespace));var c=[];return Da(m,X2(f.concat(q2(function(h){return c.push(h)})))),c};return p.hash=s.length?s.reduce(function(g,y){return y.name||no(15),fr(g,y.name)},5381).toString():"",p}var _w=new N0,Pu=jw(),$0=Te.createContext({shouldForwardProp:void 0,styleSheet:_w,stylis:Pu});$0.Consumer;Te.createContext(void 0);function Vd(){return C.useContext($0)}var Tw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Pu);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Kc(this,function(){throw no(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Pu),this.name+t.hash},e}(),Nw=function(e){return e>="A"&&e<="Z"};function Hd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Nw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var z0=function(e){return e==null||e===!1||e===""},A0=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!z0(o)&&(Array.isArray(o)&&o.isCss||Lr(o)?r.push("".concat(Hd(i),":"),o,";"):Ui(o)?r.push.apply(r,Fa(Fa(["".concat(i," {")],A0(o),!1),["}"],!1)):r.push("".concat(Hd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in t0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Fn(e,t,n,r){if(z0(e))return[];if(Qc(e))return[".".concat(e.styledComponentId)];if(Lr(e)){if(!Lr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Fn(i,t,n,r)}var o;return e instanceof Tw?n?(e.inject(n,r),[e.getName(r)]):[e]:Ui(e)?A0(e):Array.isArray(e)?Array.prototype.concat.apply(Tl,e.map(function(a){return Fn(a,t,n,r)})):[e.toString()]}function Ow(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Lr(n)&&!Qc(n))return!1}return!0}var $w=C0("6.0.3"),zw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ow(t),this.componentId=n,this.baseHash=fr($w,n),this.baseStyle=r,N0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=zn(i,this.staticRulesId);else{var o=Bd(Fn(this.rules,t,n,r)),a=Cu(fr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=zn(i,a),this.staticRulesId=a}else{for(var s=fr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")u+=p;else if(p){var g=Bd(Fn(p,t,n,r));s=fr(s,g),u+=g}}if(u){var y=Cu(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=zn(i,y)}}return i},e}(),L0=Te.createContext(void 0);L0.Consumer;var ms={};function Aw(e,t,n){var r=Qc(e),i=e,o=!ds(e),a=t.attrs,l=a===void 0?Tl:a,s=t.componentId,u=s===void 0?function(h,w){var k=typeof h!="string"?"sc":Id(h);ms[k]=(ms[k]||0)+1;var E="".concat(k,"-").concat(iw("6.0.3"+k+ms[k]));return w?"".concat(w,"-").concat(E):E}(t.displayName,t.parentComponentId):s,f=t.displayName;f===void 0&&function(h){return ds(h)?"styled.".concat(h):"Styled(".concat(ow(h),")")}(e);var p=t.displayName&&t.componentId?"".concat(Id(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;y=function(h,w){return x(h,w)&&v(h,w)}}else y=x}var S=new zw(n,p,r?i.componentStyle:void 0);function m(h,w){return function(k,E,b){var N=k.attrs,M=k.componentStyle,R=k.defaultProps,De=k.foldedComponentIds,En=k.styledComponentId,Pn=k.target,uo=Te.useContext(L0),Al=Vd(),jn=k.shouldForwardProp||Al.shouldForwardProp,Je=function(jt,Ue,Ht){for(var Be,et=Le(Le({},Ue),{className:void 0,theme:Ht}),Ll=0;Ll<jt.length;Ll+=1){var co=Lr(Be=jt[Ll])?Be(et):Be;for(var Yt in co)et[Yt]=Yt==="className"?zn(et[Yt],co[Yt]):Yt==="style"?Le(Le({},et[Yt]),co[Yt]):co[Yt]}return Ue.className&&(et.className=zn(et.className,Ue.className)),et}(N,E,ew(E,uo,R)||Ar),T=Je.as||Pn,A={};for(var L in Je)Je[L]===void 0||L[0]==="$"||L==="as"||L==="theme"||(L==="forwardedAs"?A.as=Je.forwardedAs:jn&&!jn(L,T)||(A[L]=Je[L]));var J=function(jt,Ue){var Ht=Vd(),Be=jt.generateAndInjectStyles(Ue,Ht.styleSheet,Ht.stylis);return Be}(M,Je),ie=zn(De,En);return J&&(ie+=" "+J),Je.className&&(ie+=" "+Je.className),A[ds(T)&&!S0.has(T)?"class":"className"]=ie,A.ref=b,C.createElement(T,A)}(c,h,w)}var c=Te.forwardRef(m);return c.attrs=g,c.componentStyle=S,c.shouldForwardProp=y,c.foldedComponentIds=r?zn(i.foldedComponentIds,i.styledComponentId):"",c.styledComponentId=p,c.target=r?i.target:e,Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?function(w){for(var k=[],E=1;E<arguments.length;E++)k[E-1]=arguments[E];for(var b=0,N=k;b<N.length;b++)Eu(w,N[b],!0);return w}({},i.defaultProps,h):h}}),Kc(c,function(){return".".concat(c.styledComponentId)}),o&&_0(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),c}function Yd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Gd=function(e){return Object.assign(e,{isCss:!0})};function Lw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Lr(e)||Ui(e)){var r=e;return Gd(Fn(Yd(Tl,Fa([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Fn(i):Gd(Fn(Yd(i,t)))}function ju(e,t,n){if(n===void 0&&(n=Ar),!t)throw no(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Lw.apply(void 0,Fa([i],o,!1)))};return r.attrs=function(i){return ju(e,t,Le(Le({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ju(e,t,Le(Le({},n),i))},r}var R0=function(e){return ju(Aw,e)},j=R0;S0.forEach(function(e){j[e]=R0(e)});const Rw=j.div`
  /* max-width: 960px; */
  margin: 0 auto;
  padding: 0;
  position:relative;
`,Iw=j.ul`
display: flex;
`,Mw=j.header`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--accentColor);
  /* background:#e6e6e6; */
  > nav {
    display: flex;
  }
`,Fw=j.span`
/* margin-left: 3px; */
font-family: 'Marck Script', cursive;
line-height: 1.5em;
color: var(--semiAccentColor);
&:hover{
  color: var(--accentColor);
}
`;j.p`
  font-weight: 700;
  margin: 0;
  color: var(--mainColor);
  padding: 2px 4px;
  display: flex;
align-items: center;
&:hover{
  color: var(--accentColor);
}
`;const Dw=j(to)`
 text-decoration: none;
 color: inherit;
`,Uw=j.div`
padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  /* color: #3b3937; */
  color: var(--accentColor);
  font-weight: 500;
  margin-left: 20px;
position: relative;
svg{
  fill: var(--accentColor);
}
  &.active {
    color: white;
    /* background-color: #ff4d4d; */
    background-color:var(--accentColor)
  }
`,Qt=j(to)`
  padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  /* color: #3b3937; */
  color: var(--mainColor);
  font-weight: 500;
  margin-left: 20px;
position: relative;
  &.active {
    color: white;
    /* background-color: #ff4d4d; */
    background-color:var(--accentColor)
  }
`;j.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  z-index: 1000;
`;j.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: var();
  border-bottom: 1px solid black;


  @media screen and (min-width: 768px) {
    padding: 20px 32px;
  }

  @media screen and (min-width: 1200px) {
    justify-content: space-between;
    padding: 20px 100px;
  }
`;const Bw=j.nav`
 font-size: 16px;

ul.sub-menus {
    height: auto;
    overflow: hidden;
    width: 140px;
    font-size: 10px;
    line-height: 2;
    /* background: #FFF5ED; */
    background: var(--base);
    position: absolute;
    top:43px;
    z-index: 99;
    display: none;
    border-radius: 10px;
   
  }

  ul.sub-menus li {
    display: block;
    width: 100%;

  }
  ul.sub-menus li:first-child{
    margin-top: 20px;
  }
  ul.sub-menus li:last-child{
    margin-bottom: 20px;
  }

  ul.sub-menus a {
    /* color: #FF4D4D; */
    color: var(--accentColor);
    font-size: 14px;
    margin-left: 10px;
    &.active {
    color: white;
    /* background-color: #ff4d4d; */
  }
  }

  li:hover ul.sub-menus {
    display: block;
  }

  ul.sub-menus a:hover {
    background: var(--lightGrey);
    color: var(--mainColor);
  }
  `;function Qd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qd(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ba(e){"@babel/helpers - typeof";return Ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ba(e)}function Ww(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Vw(e,t,n){return t&&Kd(e.prototype,t),n&&Kd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xc(e,t){return Yw(e)||Qw(e,t)||I0(e,t)||Xw()}function ro(e){return Hw(e)||Gw(e)||I0(e)||Kw()}function Hw(e){if(Array.isArray(e))return _u(e)}function Yw(e){if(Array.isArray(e))return e}function Gw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(s){o=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function I0(e,t){if(e){if(typeof e=="string")return _u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _u(e,t)}}function _u(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Kw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xd=function(){},qc={},M0={},F0=null,D0={mark:Xd,measure:Xd};try{typeof window<"u"&&(qc=window),typeof document<"u"&&(M0=document),typeof MutationObserver<"u"&&(F0=MutationObserver),typeof performance<"u"&&(D0=performance)}catch{}var qw=qc.navigator||{},qd=qw.userAgent,Zd=qd===void 0?"":qd,xn=qc,Z=M0,Jd=F0,Oo=D0;xn.document;var Vt=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",U0=~Zd.indexOf("MSIE")||~Zd.indexOf("Trident/"),$o,zo,Ao,Lo,Ro,Ft="___FONT_AWESOME___",Tu=16,B0="fa",W0="svg-inline--fa",Yn="data-fa-i2svg",Nu="data-fa-pseudo-element",Zw="data-fa-pseudo-element-pending",Zc="data-prefix",Jc="data-icon",ep="fontawesome-i2svg",Jw="async",ek=["HTML","HEAD","STYLE","SCRIPT"],V0=function(){try{return!0}catch{return!1}}(),X="classic",ae="sharp",ef=[X,ae];function io(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Bi=io(($o={},me($o,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),me($o,ae,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),$o)),Wi=io((zo={},me(zo,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),me(zo,ae,{solid:"fass",regular:"fasr",light:"fasl"}),zo)),Vi=io((Ao={},me(Ao,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),me(Ao,ae,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ao)),tk=io((Lo={},me(Lo,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),me(Lo,ae,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Lo)),nk=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,H0="fa-layers-text",rk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ik=io((Ro={},me(Ro,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),me(Ro,ae,{900:"fass",400:"fasr",300:"fasl"}),Ro)),Y0=[1,2,3,4,5,6,7,8,9,10],ok=Y0.concat([11,12,13,14,15,16,17,18,19,20]),ak=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],An={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hi=new Set;Object.keys(Wi[X]).map(Hi.add.bind(Hi));Object.keys(Wi[ae]).map(Hi.add.bind(Hi));var lk=[].concat(ef,ro(Hi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",An.GROUP,An.SWAP_OPACITY,An.PRIMARY,An.SECONDARY]).concat(Y0.map(function(e){return"".concat(e,"x")})).concat(ok.map(function(e){return"w-".concat(e)})),vi=xn.FontAwesomeConfig||{};function sk(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function uk(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var ck=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ck.forEach(function(e){var t=Xc(e,2),n=t[0],r=t[1],i=uk(sk(n));i!=null&&(vi[r]=i)})}var G0={styleDefault:"solid",familyDefault:"classic",cssPrefix:B0,replacementClass:W0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vi.familyPrefix&&(vi.cssPrefix=vi.familyPrefix);var Rr=O(O({},G0),vi);Rr.autoReplaceSvg||(Rr.observeMutations=!1);var z={};Object.keys(G0).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){Rr[e]=n,yi.forEach(function(r){return r(z)})},get:function(){return Rr[e]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(t){Rr.cssPrefix=t,yi.forEach(function(n){return n(z)})},get:function(){return Rr.cssPrefix}});xn.FontAwesomeConfig=z;var yi=[];function fk(e){return yi.push(e),function(){yi.splice(yi.indexOf(e),1)}}var Kt=Tu,St={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dk(e){if(!(!e||!Vt)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return Z.head.insertBefore(t,r),e}}var pk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yi(){for(var e=12,t="";e-- >0;)t+=pk[Math.random()*62|0];return t}function Hr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function tf(e){return e.classList?Hr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Q0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mk(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Q0(e[n]),'" ')},"").trim()}function Nl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function nf(e){return e.size!==St.size||e.x!==St.x||e.y!==St.y||e.rotate!==St.rotate||e.flipX||e.flipY}function hk(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(o," ").concat(a," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function gk(e){var t=e.transform,n=e.width,r=n===void 0?Tu:n,i=e.height,o=i===void 0?Tu:i,a=e.startCentered,l=a===void 0?!1:a,s="";return l&&U0?s+="translate(".concat(t.x/Kt-r/2,"em, ").concat(t.y/Kt-o/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/Kt,"em), calc(-50% + ").concat(t.y/Kt,"em)) "):s+="translate(".concat(t.x/Kt,"em, ").concat(t.y/Kt,"em) "),s+="scale(".concat(t.size/Kt*(t.flipX?-1:1),", ").concat(t.size/Kt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var vk=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function K0(){var e=B0,t=W0,n=z.cssPrefix,r=z.replacementClass,i=vk;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var tp=!1;function hs(){z.autoAddCss&&!tp&&(dk(K0()),tp=!0)}var yk={mixout:function(){return{dom:{css:K0,insertCss:hs}}},hooks:function(){return{beforeDOMElementCreation:function(){hs()},beforeI2svg:function(){hs()}}}},Dt=xn||{};Dt[Ft]||(Dt[Ft]={});Dt[Ft].styles||(Dt[Ft].styles={});Dt[Ft].hooks||(Dt[Ft].hooks={});Dt[Ft].shims||(Dt[Ft].shims=[]);var dt=Dt[Ft],X0=[],xk=function e(){Z.removeEventListener("DOMContentLoaded",e),Wa=1,X0.map(function(t){return t()})},Wa=!1;Vt&&(Wa=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),Wa||Z.addEventListener("DOMContentLoaded",xk));function wk(e){Vt&&(Wa?setTimeout(e,0):X0.push(e))}function oo(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Q0(e):"<".concat(t," ").concat(mk(r),">").concat(o.map(oo).join(""),"</").concat(t,">")}function np(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var kk=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},gs=function(t,n,r,i){var o=Object.keys(t),a=o.length,l=i!==void 0?kk(n,i):n,s,u,f;for(r===void 0?(s=1,f=t[o[0]]):(s=0,f=r);s<a;s++)u=o[s],f=l(f,t[u],u,t);return f};function bk(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ou(e){var t=bk(e);return t.length===1?t[0].toString(16):null}function Sk(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function rp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function $u(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=rp(t);typeof dt.hooks.addPack=="function"&&!i?dt.hooks.addPack(e,rp(t)):dt.styles[e]=O(O({},dt.styles[e]||{}),o),e==="fas"&&$u("fa",t)}var Io,Mo,Fo,dr=dt.styles,Ck=dt.shims,Ek=(Io={},me(Io,X,Object.values(Vi[X])),me(Io,ae,Object.values(Vi[ae])),Io),rf=null,q0={},Z0={},J0={},e1={},t1={},Pk=(Mo={},me(Mo,X,Object.keys(Bi[X])),me(Mo,ae,Object.keys(Bi[ae])),Mo);function jk(e){return~lk.indexOf(e)}function _k(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!jk(i)?i:null}var n1=function(){var t=function(o){return gs(dr,function(a,l,s){return a[s]=gs(l,o,{}),a},{})};q0=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var l=o[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=a})}return i}),Z0=t(function(i,o,a){if(i[a]=a,o[2]){var l=o[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=a})}return i}),t1=t(function(i,o,a){var l=o[2];return i[a]=a,l.forEach(function(s){i[s]=a}),i});var n="far"in dr||z.autoFetchSvg,r=gs(Ck,function(i,o){var a=o[0],l=o[1],s=o[2];return l==="far"&&!n&&(l="fas"),typeof a=="string"&&(i.names[a]={prefix:l,iconName:s}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});J0=r.names,e1=r.unicodes,rf=Ol(z.styleDefault,{family:z.familyDefault})};fk(function(e){rf=Ol(e.styleDefault,{family:z.familyDefault})});n1();function of(e,t){return(q0[e]||{})[t]}function Tk(e,t){return(Z0[e]||{})[t]}function Ln(e,t){return(t1[e]||{})[t]}function r1(e){return J0[e]||{prefix:null,iconName:null}}function Nk(e){var t=e1[e],n=of("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wn(){return rf}var af=function(){return{prefix:null,iconName:null,rest:[]}};function Ol(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,i=Bi[r][e],o=Wi[r][e]||Wi[r][i],a=e in dt.styles?e:null;return o||a||null}var ip=(Fo={},me(Fo,X,Object.keys(Vi[X])),me(Fo,ae,Object.keys(Vi[ae])),Fo);function $l(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},me(t,X,"".concat(z.cssPrefix,"-").concat(X)),me(t,ae,"".concat(z.cssPrefix,"-").concat(ae)),t),a=null,l=X;(e.includes(o[X])||e.some(function(u){return ip[X].includes(u)}))&&(l=X),(e.includes(o[ae])||e.some(function(u){return ip[ae].includes(u)}))&&(l=ae);var s=e.reduce(function(u,f){var p=_k(z.cssPrefix,f);if(dr[f]?(f=Ek[l].includes(f)?tk[l][f]:f,a=f,u.prefix=f):Pk[l].indexOf(f)>-1?(a=f,u.prefix=Ol(f,{family:l})):p?u.iconName=p:f!==z.replacementClass&&f!==o[X]&&f!==o[ae]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var g=a==="fa"?r1(u.iconName):{},y=Ln(u.prefix,u.iconName);g.prefix&&(a=null),u.iconName=g.iconName||y||u.iconName,u.prefix=g.prefix||u.prefix,u.prefix==="far"&&!dr.far&&dr.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},af());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ae&&(dr.fass||z.autoFetchSvg)&&(s.prefix="fass",s.iconName=Ln(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=wn()||"fas"),s}var Ok=function(){function e(){Ww(this,e),this.definitions={}}return Vw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){n.definitions[l]=O(O({},n.definitions[l]||{}),a[l]),$u(l,a[l]);var s=Vi[X][l];s&&$u(s,a[l]),n1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],l=a.prefix,s=a.iconName,u=a.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[l][p]=u)}),n[l][s]=u}),n}}]),e}(),op=[],pr={},br={},$k=Object.keys(br);function zk(e,t){var n=t.mixoutsTo;return op=e,pr={},Object.keys(br).forEach(function(r){$k.indexOf(r)===-1&&delete br[r]}),op.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Ba(i[a])==="object"&&Object.keys(i[a]).forEach(function(l){n[a]||(n[a]={}),n[a][l]=i[a][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){pr[a]||(pr[a]=[]),pr[a].push(o[a])})}r.provides&&r.provides(br)}),n}function zu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=pr[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Gn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=pr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Ut(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return br[e]?br[e].apply(null,t):void 0}function Au(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||wn();if(t)return t=Ln(n,t)||t,np(i1.definitions,n,t)||np(dt.styles,n,t)}var i1=new Ok,Ak=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Gn("noAuto")},Lk={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vt?(Gn("beforeI2svg",t),Ut("pseudoElements2svg",t),Ut("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,wk(function(){Ik({autoReplaceSvgRoot:n}),Gn("watch",t)})}},Rk={icon:function(t){if(t===null)return null;if(Ba(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ln(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ol(t[0]);return{prefix:r,iconName:Ln(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.cssPrefix,"-"))>-1||t.match(nk))){var i=$l(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||wn(),iconName:Ln(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=wn();return{prefix:o,iconName:Ln(o,t)||t}}}},Ze={noAuto:Ak,config:z,dom:Lk,parse:Rk,library:i1,findIconDefinition:Au,toHtml:oo},Ik=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(dt.styles).length>0||z.autoFetchSvg)&&Vt&&z.autoReplaceSvg&&Ze.dom.i2svg({node:r})};function zl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return oo(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Vt){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Mk(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(nf(a)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=Nl(O(O({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Fk(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(z.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:a}),children:r}]}]}function lf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,p=e.extra,g=e.watchable,y=g===void 0?!1:g,x=r.found?r:n,v=x.width,S=x.height,m=i==="fak",c=[z.replacementClass,o?"".concat(z.cssPrefix,"-").concat(o):""].filter(function(M){return p.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(p.classes).join(" "),h={children:[],attributes:O(O({},p.attributes),{},{"data-prefix":i,"data-icon":o,class:c,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(S)})},w=m&&!~p.classes.indexOf("fa-fw")?{width:"".concat(v/S*16*.0625,"em")}:{};y&&(h.attributes[Yn]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(f||Yi())},children:[s]}),delete h.attributes.title);var k=O(O({},h),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:l,styles:O(O({},w),p.styles)}),E=r.found&&n.found?Ut("generateAbstractMask",k)||{children:[],attributes:{}}:Ut("generateAbstractIcon",k)||{children:[],attributes:{}},b=E.children,N=E.attributes;return k.children=b,k.attributes=N,l?Fk(k):Mk(k)}function ap(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,l=e.watchable,s=l===void 0?!1:l,u=O(O(O({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});s&&(u[Yn]="");var f=O({},a.styles);nf(i)&&(f.transform=gk({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var p=Nl(f);p.length>0&&(u.style=p);var g=[];return g.push({tag:"span",attributes:u,children:[t]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Dk(e){var t=e.content,n=e.title,r=e.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Nl(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var vs=dt.styles;function Lu(e){var t=e[0],n=e[1],r=e.slice(4),i=Xc(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(An.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(An.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(An.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var Uk={found:!1,width:512,height:512};function Bk(e,t){!V0&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ru(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=wn()),new Promise(function(r,i){if(Ut("missingIconAbstract"),n==="fa"){var o=r1(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&vs[t]&&vs[t][e]){var a=vs[t][e];return r(Lu(a))}Bk(e,t),r(O(O({},Uk),{},{icon:z.showMissingIcons&&e?Ut("missingIconAbstract")||{}:{}}))})}var lp=function(){},Iu=z.measurePerformance&&Oo&&Oo.mark&&Oo.measure?Oo:{mark:lp,measure:lp},ai='FA "6.4.0"',Wk=function(t){return Iu.mark("".concat(ai," ").concat(t," begins")),function(){return o1(t)}},o1=function(t){Iu.mark("".concat(ai," ").concat(t," ends")),Iu.measure("".concat(ai," ").concat(t),"".concat(ai," ").concat(t," begins"),"".concat(ai," ").concat(t," ends"))},sf={begin:Wk,end:o1},la=function(){};function sp(e){var t=e.getAttribute?e.getAttribute(Yn):null;return typeof t=="string"}function Vk(e){var t=e.getAttribute?e.getAttribute(Zc):null,n=e.getAttribute?e.getAttribute(Jc):null;return t&&n}function Hk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function Yk(){if(z.autoReplaceSvg===!0)return sa.replace;var e=sa[z.autoReplaceSvg];return e||sa.replace}function Gk(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function Qk(e){return Z.createElement(e)}function a1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Gk:Qk:n;if(typeof e=="string")return Z.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(a1(a,{ceFn:r}))}),i}function Kk(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var sa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(a1(i),n)}),n.getAttribute(Yn)===null&&z.keepOriginalSource){var r=Z.createComment(Kk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~tf(n).indexOf(z.replacementClass))return sa.replace(t);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,s){return s===z.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(l){return oo(l)}).join(`
`);n.setAttribute(Yn,""),n.innerHTML=a}};function up(e){e()}function l1(e,t){var n=typeof t=="function"?t:la;if(e.length===0)n();else{var r=up;z.mutateApproach===Jw&&(r=xn.requestAnimationFrame||up),r(function(){var i=Yk(),o=sf.begin("mutate");e.map(i),o(),n()})}}var uf=!1;function s1(){uf=!0}function Mu(){uf=!1}var Va=null;function cp(e){if(Jd&&z.observeMutations){var t=e.treeCallback,n=t===void 0?la:t,r=e.nodeCallback,i=r===void 0?la:r,o=e.pseudoElementsCallback,a=o===void 0?la:o,l=e.observeMutationsRoot,s=l===void 0?Z:l;Va=new Jd(function(u){if(!uf){var f=wn();Hr(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!sp(p.addedNodes[0])&&(z.searchPseudoElements&&a(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&z.searchPseudoElements&&a(p.target.parentNode),p.type==="attributes"&&sp(p.target)&&~ak.indexOf(p.attributeName))if(p.attributeName==="class"&&Vk(p.target)){var g=$l(tf(p.target)),y=g.prefix,x=g.iconName;p.target.setAttribute(Zc,y||f),x&&p.target.setAttribute(Jc,x)}else Hk(p.target)&&i(p.target)})}}),Vt&&Va.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Xk(){Va&&Va.disconnect()}function qk(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],l=o.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function Zk(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=$l(tf(e));return i.prefix||(i.prefix=wn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Tk(i.prefix,e.innerText)||of(i.prefix,Ou(e.innerText))),!i.iconName&&z.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Jk(e){var t=Hr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Yi()):(t["aria-hidden"]="true",t.focusable="false")),t}function e4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:St,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Zk(e),r=n.iconName,i=n.prefix,o=n.rest,a=Jk(e),l=zu("parseNodeAttributes",{},e),s=t.styleParser?qk(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:St,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:s,attributes:a}},l)}var t4=dt.styles;function u1(e){var t=z.autoReplaceSvg==="nest"?fp(e,{styleParser:!1}):fp(e);return~t.extra.classes.indexOf(H0)?Ut("generateLayersText",e,t):Ut("generateSvgReplacementMutation",e,t)}var kn=new Set;ef.map(function(e){kn.add("fa-".concat(e))});Object.keys(Bi[X]).map(kn.add.bind(kn));Object.keys(Bi[ae]).map(kn.add.bind(kn));kn=ro(kn);function dp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vt)return Promise.resolve();var n=Z.documentElement.classList,r=function(p){return n.add("".concat(ep,"-").concat(p))},i=function(p){return n.remove("".concat(ep,"-").concat(p))},o=z.autoFetchSvg?kn:ef.map(function(f){return"fa-".concat(f)}).concat(Object.keys(t4));o.includes("fa")||o.push("fa");var a=[".".concat(H0,":not([").concat(Yn,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(Yn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var l=[];try{l=Hr(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=sf.begin("onTree"),u=l.reduce(function(f,p){try{var g=u1(p);g&&f.push(g)}catch(y){V0||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,p){Promise.all(u).then(function(g){l1(g,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(g){s(),p(g)})})}function n4(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;u1(e).then(function(n){n&&l1([n],t)})}function r4(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Au(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Au(i||{})),e(r,O(O({},n),{},{mask:i}))}}var i4=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?St:r,o=n.symbol,a=o===void 0?!1:o,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,p=n.title,g=p===void 0?null:p,y=n.titleId,x=y===void 0?null:y,v=n.classes,S=v===void 0?[]:v,m=n.attributes,c=m===void 0?{}:m,h=n.styles,w=h===void 0?{}:h;if(t){var k=t.prefix,E=t.iconName,b=t.icon;return zl(O({type:"icon"},t),function(){return Gn("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(g?c["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(x||Yi()):(c["aria-hidden"]="true",c.focusable="false")),lf({icons:{main:Lu(b),mask:s?Lu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:E,transform:O(O({},St),i),symbol:a,title:g,maskId:f,titleId:x,extra:{attributes:c,styles:w,classes:S}})})}},o4={mixout:function(){return{icon:r4(i4)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=dp,n.nodeCallback=n4,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Z:r,o=n.callback,a=o===void 0?function(){}:o;return dp(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,p=r.maskId,g=r.extra;return new Promise(function(y,x){Promise.all([Ru(i,l),f.iconName?Ru(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var S=Xc(v,2),m=S[0],c=S[1];y([n,lf({icons:{main:m,mask:c},prefix:l,iconName:i,transform:s,symbol:u,maskId:p,title:o,titleId:a,extra:g,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,l=n.styles,s=Nl(l);s.length>0&&(i.style=s);var u;return nf(a)&&(u=Ut("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},a4={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return zl({type:"layer"},function(){Gn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(l){Array.isArray(l)?l.map(function(s){a=a.concat(s.abstract)}):a=a.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(ro(o)).join(" ")},children:a}]})}}}},l4={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,l=a===void 0?[]:a,s=r.attributes,u=s===void 0?{}:s,f=r.styles,p=f===void 0?{}:f;return zl({type:"counter",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),Dk({content:n.toString(),title:o,extra:{attributes:u,styles:p,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(ro(l))}})})}}}},s4={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?St:i,a=r.title,l=a===void 0?null:a,s=r.classes,u=s===void 0?[]:s,f=r.attributes,p=f===void 0?{}:f,g=r.styles,y=g===void 0?{}:g;return zl({type:"text",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),ap({content:n,transform:O(O({},St),o),title:l,extra:{attributes:p,styles:y,classes:["".concat(z.cssPrefix,"-layers-text")].concat(ro(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,l=null,s=null;if(U0){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return z.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,ap({content:n.innerHTML,width:l,height:s,transform:o,title:i,extra:a,watchable:!0})])}}},u4=new RegExp('"',"ug"),pp=[1105920,1112319];function c4(e){var t=e.replace(u4,""),n=Sk(t,0),r=n>=pp[0]&&n<=pp[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ou(i?t[0]:t),isSecondary:r||i}}function mp(e,t){var n="".concat(Zw).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Hr(e.children),a=o.filter(function(b){return b.getAttribute(Nu)===t})[0],l=xn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(rk),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(a&&!s)return e.removeChild(a),r();if(s&&f!=="none"&&f!==""){var p=l.getPropertyValue("content"),g=~["Sharp"].indexOf(s[2])?ae:X,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Wi[g][s[2].toLowerCase()]:ik[g][u],x=c4(p),v=x.value,S=x.isSecondary,m=s[0].startsWith("FontAwesome"),c=of(y,v),h=c;if(m){var w=Nk(v);w.iconName&&w.prefix&&(c=w.iconName,y=w.prefix)}if(c&&!S&&(!a||a.getAttribute(Zc)!==y||a.getAttribute(Jc)!==h)){e.setAttribute(n,h),a&&e.removeChild(a);var k=e4(),E=k.extra;E.attributes[Nu]=t,Ru(c,y).then(function(b){var N=lf(O(O({},k),{},{icons:{main:b,mask:af()},prefix:y,iconName:h,extra:E,watchable:!0})),M=Z.createElement("svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=N.map(function(R){return oo(R)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function f4(e){return Promise.all([mp(e,"::before"),mp(e,"::after")])}function d4(e){return e.parentNode!==document.head&&!~ek.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function hp(e){if(Vt)return new Promise(function(t,n){var r=Hr(e.querySelectorAll("*")).filter(d4).map(f4),i=sf.begin("searchPseudoElements");s1(),Promise.all(r).then(function(){i(),Mu(),t()}).catch(function(){i(),Mu(),n()})})}var p4={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=hp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Z:r;z.searchPseudoElements&&hp(i)}}},gp=!1,m4={mixout:function(){return{dom:{unwatch:function(){s1(),gp=!0}}}},hooks:function(){return{bootstrap:function(){cp(zu("mutationObserverCallbacks",{}))},noAuto:function(){Xk()},watch:function(n){var r=n.observeMutationsRoot;gp?Mu():cp(zu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],l=o.slice(1).join("-");if(a&&l==="h")return r.flipX=!0,r;if(a&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(a){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},h4={mixout:function(){return{parse:{transform:function(n){return vp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=vp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(s," ").concat(u," ").concat(f)},g={transform:"translate(".concat(a/2*-1," -256)")},y={outer:l,inner:p,path:g};return{tag:"g",attributes:O({},y.outer),children:[{tag:"g",attributes:O({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),y.path)}]}]}}}},ys={x:0,y:0,width:"100%",height:"100%"};function yp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function g4(e){return e.tag==="g"?e.children:[e]}var v4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?$l(i.split(" ").map(function(a){return a.trim()})):af();return o.prefix||(o.prefix=wn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,l=n.maskId,s=n.transform,u=o.width,f=o.icon,p=a.width,g=a.icon,y=hk({transform:s,containerWidth:p,iconWidth:u}),x={tag:"rect",attributes:O(O({},ys),{},{fill:"white"})},v=f.children?{children:f.children.map(yp)}:{},S={tag:"g",attributes:O({},y.inner),children:[yp(O({tag:f.tag,attributes:O(O({},f.attributes),y.path)},v))]},m={tag:"g",attributes:O({},y.outer),children:[S]},c="mask-".concat(l||Yi()),h="clip-".concat(l||Yi()),w={tag:"mask",attributes:O(O({},ys),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:g4(g)},w]};return r.push(k,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(c,")")},ys)}),{children:r,attributes:i}}}},y4={provides:function(t){var n=!1;xn.matchMedia&&(n=xn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=O(O({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:O(O({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},x4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},w4=[yk,o4,a4,l4,s4,p4,m4,h4,v4,y4,x4];zk(w4,{mixoutsTo:Ze});Ze.noAuto;Ze.config;Ze.library;Ze.dom;var Fu=Ze.parse;Ze.findIconDefinition;Ze.toHtml;var k4=Ze.icon;Ze.layer;Ze.text;Ze.counter;var c1={exports:{}},b4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",S4=b4,C4=S4;function f1(){}function d1(){}d1.resetWarningCache=f1;var E4=function(){function e(r,i,o,a,l,s){if(s!==C4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:d1,resetWarningCache:f1};return n.PropTypes=n,n};c1.exports=E4();var P4=c1.exports;const _=_p(P4);function xp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function an(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xp(Object(n),!0).forEach(function(r){mr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ha(e){"@babel/helpers - typeof";return Ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ha(e)}function mr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _4(e,t){if(e==null)return{};var n=j4(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Du(e){return T4(e)||N4(e)||O4(e)||$4()}function T4(e){if(Array.isArray(e))return Uu(e)}function N4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function O4(e,t){if(e){if(typeof e=="string")return Uu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uu(e,t)}}function Uu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z4(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,p=e.pulse,g=e.fixedWidth,y=e.inverse,x=e.border,v=e.listItem,S=e.flip,m=e.size,c=e.rotation,h=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":g,"fa-inverse":y,"fa-border":x,"fa-li":v,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},mr(t,"fa-".concat(m),typeof m<"u"&&m!==null),mr(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),mr(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),mr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function A4(e){return e=e-0,e===e}function p1(e){return A4(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var L4=["style"];function R4(e){return e.charAt(0).toUpperCase()+e.slice(1)}function I4(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=p1(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[R4(i)]=o:t[i]=o,t},{})}function m1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return m1(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=I4(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[p1(u)]=f}return s},{attrs:{}}),o=n.style,a=o===void 0?{}:o,l=_4(n,L4);return i.attrs.style=an(an({},i.attrs.style),a),e.apply(void 0,[t.tag,an(an({},i.attrs),l)].concat(Du(r)))}var h1=!1;try{h1=!0}catch{}function M4(){if(!h1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function wp(e){if(e&&Ha(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Fu.icon)return Fu.icon(e);if(e===null)return null;if(e&&Ha(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?mr({},e,t):{}}var Dn=Te.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,l=e.titleId,s=e.maskId,u=wp(n),f=xs("classes",[].concat(Du(z4(e)),Du(o.split(" ")))),p=xs("transform",typeof e.transform=="string"?Fu.transform(e.transform):e.transform),g=xs("mask",wp(r)),y=k4(u,an(an(an(an({},f),p),g),{},{symbol:i,title:a,titleId:l,maskId:s}));if(!y)return M4("Could not find icon",u),null;var x=y.abstract,v={ref:t};return Object.keys(e).forEach(function(S){Dn.defaultProps.hasOwnProperty(S)||(v[S]=e[S])}),F4(x[0],v)});Dn.displayName="FontAwesomeIcon";Dn.propTypes={beat:_.bool,border:_.bool,beatFade:_.bool,bounce:_.bool,className:_.string,fade:_.bool,flash:_.bool,mask:_.oneOfType([_.object,_.array,_.string]),maskId:_.string,fixedWidth:_.bool,inverse:_.bool,flip:_.oneOf([!0,!1,"horizontal","vertical","both"]),icon:_.oneOfType([_.object,_.array,_.string]),listItem:_.bool,pull:_.oneOf(["right","left"]),pulse:_.bool,rotation:_.oneOf([0,90,180,270]),shake:_.bool,size:_.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:_.bool,spinPulse:_.bool,spinReverse:_.bool,symbol:_.oneOfType([_.bool,_.string]),title:_.string,titleId:_.string,transform:_.oneOfType([_.string,_.object]),swapOpacity:_.bool};Dn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var F4=m1.bind(null,Te.createElement),D4={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},U4={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},B4={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const W4=j.div`
  padding: 10px;
  margin-bottom: 10px;
  /* margin-left: auto;
  margin-right: auto; */
`,V4=j.p`
  color: var(--mainColor);
  font-weight: bold;
  margin-bottom: 5px;
  @media screen and (min-width: 778px) {
margin-bottom: 10px;
  }
`;j(to)`
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
  
  &:hover,
  &:focus{
    
    transform: translateY(-2px);
  }
`;const H4=()=>d.jsxs(W4,{children:[d.jsx(V4,{children:"Слідкуйте за нами у соцмережах"}),d.jsx(At,{"aria-label":"youtube link",to:"https://www.youtube.com/@user-ck5dw5yi1l/videos",className:"youtube social",target:"_blank",children:d.jsx(Dn,{style:{color:"#eb3223",marginRight:"20px"},icon:B4,size:"2x"})}),d.jsx(At,{"aria-label":"facebook link",to:"https://www.facebook.com/kdmsh22",className:"facebook social",target:"_blank",children:d.jsx(Dn,{style:{color:"#4968ad",backgroundColor:"#fff",borderRadius:"50%",marginRight:"20px"},icon:U4,size:"2x"})}),d.jsx(At,{"aria-label":"instagram link",to:"https://www.instagram.com/kdmsh22/",className:"instagram social",target:"_blank",children:d.jsx(Dn,{style:{color:"#ff4d4d"},icon:D4,size:"2x"})})]}),Y4=j.footer`
    position: relative;
     ${""}
  color: var(--accentColor);
  border-top: 1px solid var(--accentColor);
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2px;
  height: auto;
  backdrop-filter: blur(5px);
`,G4=j.div`
  color: #212121;
  font-size: 10px;
  padding: 10px 20px;

`,Q4=()=>d.jsx(G4,{children:d.jsx("p",{children:"Copyright ©TarasPapka 2023"})}),K4=()=>d.jsx(Y4,{children:d.jsxs(d.Fragment,{children:[d.jsx(H4,{}),d.jsx(Q4,{})]})});j.li`
list-style: none;
`;const X4=j.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: auto;
  z-index: 999;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0;
  }
`,Xt=j(to)`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  text-decoration: none;
  white-space: nowrap;

  color: var(--mainColor);
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 12px;
  transition: backgroundColor 0.5s ease-out;

  &:hover,   &:active  {
    /* background-color: var(--subColor); */
    color: var(--accentColor);
    font-weight: 600;
  }
`,g1=({closeMobileMenu:e})=>d.jsxs(X4,{children:[d.jsx(Xt,{to:"/",onClick:e,children:"Головна"}),d.jsx(Xt,{to:"/about",onClick:e,children:"Про нас"}),d.jsx(Xt,{to:"management",onClick:e,children:"Дирекція"}),d.jsx(Xt,{to:"team/1",onClick:e,children:"Викладачі"}),d.jsx(Xt,{to:"reviews",onClick:e,children:"Умови вступу"}),d.jsx(Xt,{to:"/departments",onClick:e,children:"Відділи"}),d.jsx(Xt,{to:"/bands",onClick:e,children:"Колективи"}),d.jsx(Xt,{to:"/contacts",onClick:e,children:"Контакти"})]});g1.propTypes={closeMobileMenu:_.func};const q4="/KDMSH/assets/xCross-436de7cd.svg",Z4="/KDMSH/assets/mobileMenu-9d967880.svg",J4="/KDMSH/assets/logo-99832143.svg",eb=j.div`
margin-right: 14px;
`,kp=j.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 999;
  transition: scale 0.5s ease-out;
  &:hover,
  &:focus {
    scale: calc(1.05);
  }

  @media screen and (min-width: 778px) {
    margin-left: 24px;
    width: 38px;
    height: 38px;
  }
`,tb=j.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50px;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 999;
  overflow: hidden;

  background-color: #fff5ed;
`,nb=()=>{const[e,t]=C.useState(!1),n=()=>{t(!0),document.body.classList.add("no-scroll")},r=()=>{t(!1),document.body.classList.remove("no-scroll")};return d.jsxs(eb,{children:[e?d.jsx(kp,{onClick:r,src:q4,alt:"mobile menu close"}):d.jsx(kp,{onClick:n,src:Z4,alt:"mobile menu"}),e?d.jsx(tb,{children:d.jsx(g1,{closeMobileMenu:r})}):null]})},rb=()=>{const[e,t]=C.useState(!1),n=J4;return C.useEffect(()=>{const r=()=>{};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),C.useEffect(()=>{const r=()=>{window.innerWidth<778?t(!0):t(!1)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),d.jsxs(Rw,{children:[d.jsxs(Mw,{children:[d.jsx(Dw,{to:"/",end:!0,children:d.jsxs(Uw,{children:[d.jsx("img",{src:n,width:"24px",height:"24px",alt:"logo"}),d.jsx(Fw,{children:"КДМШ №22"})]})}),e?d.jsx(d.Fragment,{children:d.jsx(nb,{})}):d.jsx(Bw,{children:d.jsxs(Iw,{children:[d.jsx("li",{children:d.jsx(Qt,{to:"/",end:!0,children:"Головна"})}),d.jsxs("li",{children:[d.jsx(Qt,{to:"/about",children:"Про нас "}),d.jsxs("ul",{className:"sub-menus",children:[d.jsx("li",{children:d.jsx(Qt,{to:"management",children:"Дирекція"})}),d.jsx("li",{children:d.jsx(Qt,{to:"team/1",children:"Викладачі"})}),d.jsx("li",{children:d.jsx(Qt,{to:"reviews",children:"Умови вступу"})})]})]}),d.jsx("li",{children:d.jsx(Qt,{to:"/departments",children:"Відділи"})}),d.jsx("li",{children:d.jsx(Qt,{to:"/bands",children:"Колективи"})}),d.jsx("li",{children:d.jsx(Qt,{to:"/contacts",children:"Контакти"})})]})})]}),d.jsx(x2,{}),d.jsx(K4,{})]})},ib=F.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 778px) {
width: 800px;
height: auto;
  }
`,ob=F.img`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
  width: 100%;
  height: 500px;
  display: ${e=>e.active?"block":"none"};
  object-fit:cover;
`,v1=F.div`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: var(--accentColor);
  cursor: pointer;
`,ab=F(v1)`
  left: 0.5rem;
`,lb=F(v1)`
  right: 1rem;
`,sb=F.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
`,ub=F.button`
  background-color: ${e=>e.active?"white":"grey"};
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`;var y1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bp=Te.createContext&&Te.createContext(y1),gn=globalThis&&globalThis.__assign||function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gn.apply(this,arguments)},cb=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function x1(e){return e&&e.map(function(t,n){return Te.createElement(t.tag,gn({key:n},t.attr),x1(t.child))})}function ao(e){return function(t){return Te.createElement(fb,gn({attr:gn({},e.attr)},t),x1(e.child))}}function fb(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=cb(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Te.createElement("svg",gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:s,style:gn(gn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&Te.createElement("title",null,o),e.children)};return bp!==void 0?Te.createElement(bp.Consumer,null,function(n){return t(n)}):t(y1)}function db(e){return ao({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"}}]})(e)}function pb(e){return ao({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}}]})(e)}const w1=({data:e})=>{const[t,n]=C.useState(0),r=()=>{n(t===e.length-1?0:t+1)},i=()=>{n(t===0?e.length-1:t-1)};return d.jsxs(ib,{children:[d.jsx(ab,{onClick:i,children:d.jsx(db,{style:{width:"2.5em",height:"2.5em",fill:"wheat"}})}),e.map((o,a)=>d.jsx(ob,{src:o.src,alt:o.alt,active:t===a},a)),d.jsx(lb,{onClick:r,children:d.jsx(pb,{style:{width:"2.5em",height:"2.5em",fill:"wheat"}})}),d.jsx(sb,{children:e.map((o,a)=>d.jsx(ub,{active:t===a,onClick:()=>n(a)},a))})]})};w1.propTypes={data:_.arrayOf(_.shape({src:_.string.isRequired,alt:_.string.isRequired})).isRequired};const mb=[{src:"https://i.ibb.co/tPsCykS/22-4-min.jpg",alt:"Image 1 for carousel"},{src:"https://i.ibb.co/wzFfLB6/DSCN6143.jpg",alt:"Image 2 for carousel"},{src:"https://i.ibb.co/RC21V1V/IMG-1981.jpg",alt:"Image 3 for carousel"},{src:"https://i.ibb.co/S3PPn49/261519482-486004376151181-1670904827646877067-n.jpg",alt:"Image 4 for carousel"},{src:"https://i.ibb.co/5hc8PtF/pic5.jpg",alt:"Image 5 for carousel"}];j.img`
 max-width: 100%;
 height: auto;
`;const hb=j.section`
margin-left: auto;
margin-right: auto;
min-height: 700px;
`,gb=j.img`
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`,Sp=j.div`
/* margin-top: 20px; */
svg {
	width: 100%; height: 100%;
}
svg text {
font-size: 40px; 
	animation: stroke 5s infinite alternate;
  animation-delay: 3s;
	stroke-width: 2;
	stroke: var(--accentColor);
  fill: #fff5ed;
  font-family: 'Marck Script';
	font-size: 5vw;
  text-align: center;
  @media screen and (min-width: 1200px) {
      font-size: 60px; 
  }
}
@keyframes stroke {
	0%   {
		fill: rgba(255,77,77,0); stroke: rgba(255,77,77,1);
		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
	}
	70%  {fill: rgba(255,77,77,0); stroke: rgba(255,77,77,1); }
	80%  {fill: rgba(255,77,77,0); stroke: rgba(255,77,77,1); stroke-width: 3; }
	100% {
		fill: rgba(255,77,77,1); stroke: rgba(255,77,77,0);
		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
	}

	
}
@media screen and (max-width: 480px) {
height: 50px;
  }
`,k1=j.div`
/* margin: auto; */
min-height: 500px;
@media screen and (min-width: 778px) {
min-height: 700px;
  }
`,lo=j.section`
max-width: 1200px;
/* margin-left: 200px; */
/* margin-bottom:200px; */
font-size: 18px;
line-height:150%;
min-height: 500px;

@media screen and (min-width: 778px) {
min-height: 700px;
  }
`,vb=j.div`
margin-left: auto;
margin-right: auto;
padding:10px;

`,Cp=j.p`
font-size: 24px;
@media screen and (max-width: 480px) {
font-size: 18px;
  }
`,Ir=j.h3`
color: var(--accentColor);
font-weight: bold;
font-size: 20px;
line-height: 1.4;
text-align: center;
text-transform: uppercase;
margin-bottom: 20px;
@media screen and (min-width: 778px) {
font-size: 32px;
margin-bottom: 20px;
  }
`,Mr=j.div`
color: var(--mainColor);
display:flex;
justify-content: center;
flex-direction:column;
font-size: 12px;
line-height: 1.5;
margin-bottom: 20px;
@media screen and (min-width: 778px) {
font-size: 16px;
  }
`,yb=j.div`
margin-top: 40px;
margin-bottom: 10px;
`,xb=j.ul`
margin-bottom: 20px;
font-size: 14px;
@media screen and (min-width: 778px) {
font-size: 18px;
  }
`,Do=j.li`
list-style:square;
margin-left: 30px;
`,Ep=j.p`
color: var(--accentColor);
font-size: 12px;
line-height: 1.1;
@media screen and (min-width: 778px) {
font-size: 14px;
  }
`,wb=()=>{const[e,t]=C.useState(window.innerWidth);C.useEffect(()=>{const r=()=>{t(window.innerWidth)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]);const n=e>=778?"24px":"36px";return d.jsx(hb,{children:e>=778?d.jsxs(d.Fragment,{children:[d.jsx(w1,{data:mb}),d.jsx(Sp,{children:d.jsx("svg",{width:"100%",height:"100%",children:d.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",fontSize:n,children:"Запрошуємо вас у світ музики!"})})})]}):d.jsxs(vb,{children:[d.jsx(Sp,{children:d.jsx("svg",{width:"100%",height:"100%",children:d.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",fontSize:n,children:"Вас вітає Київська музична школа №22!"})})}),d.jsx(Cp,{children:"Для мешканців Святошинського району працює з 1971 року. Школа є державним позашкільним навчальним закладом освіти в галузі культури, здійснює естетичне виховання дітей, учнів, громадян, забезпечуючи принцип єдності і наступності мистецької освіти; проводить навчально-виховну, методичну, просвітницьку роботу."}),d.jsx(Cp,{children:"Учні і викладачі школи є активними учасниками концертного життя не лише Києва, де виступають в Національній філармонії України в проектах КДФ, музеях, бібліотеках, в концертних залах на сценах міста, але й відомі в багатьох містах України та за її межами. Вони мають численні нагороди лауреатів конкурсів, фестивалів у Білорусі, Чехії, Угорщині, Чорногорії, Грузії, Болгарії, Італії, Іспанії, Німеччині, Словенії, Польщі, Канаді, Швеції, Греції та ін."})]})})},kb=()=>d.jsxs(lo,{children:[d.jsx(Ir,{children:"Про нас"}),d.jsx(Mr,{children:d.jsxs("article",{children:[d.jsx("p",{children:"У мальовничому, ошатному куточку Микільської Борщагівки Святошинського району міста Києва, на вулиці Зодчих, 22 - 01 жовтня 1971 року за рішенням №1615 виконавчого комітету Київської міської ради депутатів трудящих та завдяки ентузіазму і зусиллям світлої пам'яті директора Ворони Миколи Івановича, - розпочався перший навчальний рік дитячої музичної школи №22."}),d.jsx("p",{children:"Їй було надано частину приміщення четвертого поверху СШ №196, яку одразу було перебудовано й пристосовано для занять з учнями музичної школи."}),d.jsx("p",{children:"На початок відкриття у школі навчалося 68 учнів. З 1978 по 2017 рік плановий контингент виріс до 410 учнів. З вересня 2017 року школа отримала сучасне, капітально відремонтоване приміщення з великою актовою залою за адресою вулиця Зодчих, 30-а. затверджений міською владою контингент на сьогодні становить 502 учні. "}),d.jsx("p",{children:"50 років - значуща дата. Це половина сторіччя, не одне покоління випускників і сила пам'ятних моментів."}),d.jsx("p",{children:"Школа має не тільки багате минуле, творче сучасне, а й широкі перспективи розвитку в майбутньому. Впевненість у завтрашньому дні ґрунтується на високому професіоналізмі колективу, на багаторічних традиціях, сучасних методиках навчання і виховання, тісній співпраці з випускниками, батьками. "}),d.jsx("p",{children:"Саме людська неповторність викладача визначає обличчя нашого закладу. Глибока шана у нашому серці тим, кого ми називаємо педагогами-ветеранами: це - Триліська Наталія Костянтинівна, Манаєнкова Лариса Олегівна, Рудніцька Ніна Петрівна, Лосєва Евеліна Леонтіївна, Козлова Нонна Олексіївна, Чайка Тетяна Олексіївна, Галаєва Валерія Олександрівна, Іванько Лариса Олександрівна, Єфремова Тетяна Миколаївна, Давидовська Лоліта Ігорівна, Касатова Людмила Федорівна, Уманець Валентина Дмитрівна, Кірш Наталія Євгеніїівна, Кірш Анатолій Якович, Семенова Галина Петрівна, Лук'янчук Наталія Євгеніївна, Пучко Євгенія Федорівна, Васіна Людмила Василівна, Бєлєнок Маргарита Генріховна. Їх щедрого дару душі вистачає не тільки на учнів, адже молоді педагоги вчаться у них високому дару віддавати серце маленьким музикантам."}),d.jsx("p",{children:"Життя невблаганне і сьогодні, на превеликий жаль не змогли святкувати з нами педагоги, які відійшли у вічність - Штанько Володимир Степанович, Малушенко Людмила Сельвестрівна, Колесник Тетяна Львівна, Кір'янов Олександр Миколайович, Вакаренко Валентина Юріївна, Перевозніков Олег Олександрович, Ускова Наталія Владленівна."}),d.jsx("p",{children:"Навчання в школі здійснюється за індивідуальними і груповими дисциплінами: фортепіано, скрипка, віолончель, акордеон, баян, гітара, укулеле, домра, бандура, мандоліна, саксофон, флейта, труба, ударні інструменти, академічний та естрадний вокал, синтезатор, ансамбль, оркестр, історія музичної літератури, сольфеджіо, хор."}),d.jsx("p",{children:"За весь період роботи КДМШ №22 (з 1971 по 2021 рр.) свідоцтва про закінчення школи отримали 2256 учнів. З них 682 учні закінчили вищі навчальні мистецькі заклади та працюють у сфері мистецтва. 32 - працюють викладачами у ДМШ. Колишня випускниця школи Гончарова І.Б. в 2000 році отримала звання «Заслужена артистка України»."})]})})]}),b1=j.div`
 display: flex;
  position: absolute;
  gap: 0.4em;
  flex-direction: column;
  background-color: var(--base);
  color: var(--mainColor);
  height: 40%;
   width: 100%;
  bottom: 0;
  border-radius: 10px;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  line-height: normal;
  padding-top: 10px;
  /* padding: 1rem; */
`,bb=j.svg`
  width: 48px;
  margin-left: auto;
  margin-right: auto;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,Sb=j.div`
  height: 220px;
 max-width: 180px;
 margin-bottom: 10px;
  flex-grow: 1;
  flex-basis: 190px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  box-shadow: 0 0 2px 1px var(--accentColor);
  overflow: hidden;

  &:hover ${b1} {
    transform: translateY(100%);
    opacity: 0;
  }
`,Cb=j.img`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: var(--base);
  /* background: linear-gradient(to top, #0a3394, #4286f4); */
`,Eb=j.p`
font-size: 1rem;
  font-weight: 700;
  text-align: center;
`,Pp=j.p`
font-size: 0.8rem;
  line-height: 100%;
  text-align: center;
`,S1=[{url:"https://i.ibb.co/hfh7Nnx/pic3.jpg",name:"Соломія Гуль",title:"Викладач",experience:"2021",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичковий відділ",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/CnWqZnT/Yehor.jpg",name:"Єгор Куриленко",title:"Викладач",experience:"2019",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Відділ духових та ударних інструментів",instrument:"Саксофон, Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/W5bMjKK/Serhiy.jpg",name:"Сергій Левчук",title:"Викладач",experience:"2010",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Відділ духових та ударних інструментів",instrument:"Труба",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/QHZNNTN/image.jpg",name:"Любов Герасимчук",title:"Директор, Викладач",experience:"1972",band:"",department:"Фортепіанний відділ",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/hyW2xpR/image.jpg",name:"Світлана Філоненко",title:"Заступник директора з навчальної роботи, Викладач",experience:"1995",band:"",department:"Відділ народних інструментів",instrument:"Бандура",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/pRyX9gZ/image.jpg",name:"Олександра Снігур",title:"Директор з виховної роботи, Викладач",experience:"2021",band:"",department:"Фортепіанний відділ",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/J3KBkzZ/Tamara.jpg",name:"Тамара Теліна",title:"Заввідділом, Викладач",experience:"2002",band:"Ансамбль флейтистів",department:"Відділ духових та ударних інструментів",instrument:"Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/236357H/8-S7-A9117-min.jpg",name:"Галина Головацька-Гуль",title:"Заввідділом, Викладач",experience:"1999",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичковий відділ",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/fGpdTBV/Gitar.jpg",name:"Лілія Герасимчук",title:"Викладач",experience:"1992",band:"Ансамбль гітаристів",department:"Відділ народних інструментів",instrument:"Гітара",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/yR78MF6/Daniil.jpg",name:"Даниїл Голубєв",title:"Викладач",experience:"",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Відділ народних інструментів",instrument:"Гітара",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/CQ0FgZs/image.jpg",name:"Юлія Лисенко",title:"Викладач",experience:"2019",band:"",department:"Відділ народних інструментів",instrument:"Гітара",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/SKBXr0X/Tetiana.jpg",name:"Тетяна Чайка",title:"Викладач",experience:"1972",band:"Оркестр народної музики 'Барвисті Візерунки', Дует 'НоТа'",department:"Фортепіанний відділ",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Наталія Триліська",title:"Заввідділом, Викладач",experience:"",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Галина Семенова",title:"Заввідділом, Викладач",experience:"1972",band:"",department:"Теоретичний відділ",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Людмила Васіна",title:"Викладач",experience:"",band:"",department:"",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Евеліна Лосєва",title:"Заввідділом, Викладач",experience:"2002",band:"",department:"Відділ предмету за вибором",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Наталія Лук'янчук",title:"Заввідділом, Викладач",experience:"1999",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"Вокал",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/rwtYC85/image.jpg",name:"Ірина Іщук",title:"Заввідділом, Викладач",experience:"",band:"",department:"Відділ народних інструментів",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Євгенія Пучко",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/H4GFfhs/128189.jpg",name:"Андрій Качановський",title:"Викладач",experience:"",band:"",department:"Відділ народних інструментів",instrument:"Баян",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/Z6NSjtq/Valeria.jpg",name:"Валерія Швець",title:"Викладач",experience:"",band:"",department:"Струнно-смичковий відділ",instrument:"Віолончель",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/8gML0SL/image.jpg",name:"Нона Козлова",title:"Заввідділом, Викладач",experience:"1972",band:"Дует 'НоТа'",department:"Фортепіанний відділ №2",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"}],ua=j.div`
display: flex;
gap: 20px;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`,cf=j.li`
  position: relative;
  max-width: 250px;
  aspect-ratio: 16/9;
  background-color: var(--base);
  border-radius: 5px;
  /* max-width: 200px; */
  height: 150px;
  flex-grow: 1;
  flex-basis: 200px;
  overflow: hidden;
  box-shadow: 0 0 0 2px #e86969;
  transition: all 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
   &:hover {
    transform: scale(1.03);
    /* box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2); */
    background-color: var(--base);
  }
`,Pb=j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--base);
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${cf}:hover & {
    transform: rotateX(0deg);
    /* transform: scale(1.05); */
  }
`,jb=j.p`
 margin: 5px 0 5px;
  font-size: 12px;
  color: var(--mainColor);
  line-height: 1.4;
`,_b=j.p`
  margin: 0;
  font-size: 14px;
  color: var(--mainColor);
  font-weight: 700;
`,Tb=j.button`
  padding: 10px;
  border-radius: 8px;
  background: var(--accentColor);
  border: none;
  color: white;
  cursor: pointer;
`,Nb=j.img`
  object-fit: contain;
  width: 100%;
  height: 100%;

`,C1=j.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${cf}:hover & {
    transform: scale(0);
  }
`,Ob=()=>{const e=S1.filter(t=>t.section==="Management");return d.jsx(ua,{children:e.map((t,n)=>d.jsxs(Sb,{children:[t.url?d.jsx(Cb,{src:t.url,alt:`photo of ${t.name}`}):d.jsx(bb,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),d.jsxs(b1,{children:[d.jsx(Eb,{children:t.name}),d.jsx(Pp,{children:t.title}),d.jsx(Pp,{children:t.phone})]})]},n))})},$b=()=>d.jsxs(lo,{children:[d.jsx(Ir,{children:"Керівний склад"}),d.jsx(Mr,{children:d.jsx("article",{children:d.jsx("p",{children:"Сьогодні КДМШ №22 - мистецький заклад, творчий колектив якого, на чолі з директором Любов'ю Василівною Герасимчук (яка очолює школу з 1999 року, до цього з 1978 року - була заступником директора з навчальної роботи) та заступниками директора Філоненко Світланою Леонідівною (яка замінила на посаді заступника директора з навчальної роботи Уманець Олену Миколаївну у 2019 році) та Снігур Олександрою Олегівною (яка на посаді заступника директора з виховної роботи у 2019 році замінила Лисенко Юлію Валеріївну) по праву займає достойне місце серед мистецьких навчальних закладів міста."})})}),d.jsx(Ob,{})]});F.div`
`;const zb=F.ul`
  z-index: 2;
  padding: 0 0 40px 0;

  @media screen and (min-width: 778px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;

  }

`,Ab=F.div`
  cursor: pointer;
  margin-bottom: 10px;
`,Lb=F.button`
  color: var(--mainColor);
  text-align: center;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${e=>e.active?"rgba(64, 112, 205, 0.50)":"transparent"};
  border: none;
  outline: none;
  width: 27.81px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
`,Rb=F.p`
  // position: absolute;
  // z-index: 2;
`,Ib=F.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  >li{
    list-style: none;
  }
`;F.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;const E1=({currentPage:e,totalPages:t,onChangePage:n,pageType:r})=>{const i=Sl(),o=a=>{i(`/${r}/${a}`),n(a)};return d.jsx(Ib,{children:[...Array(t).keys()].map(a=>d.jsx("li",{children:d.jsx(At,{to:`/${r}/${a+1}`,children:d.jsx(Lb,{onClick:()=>o(a+1),active:`${e===a+1?"active":""}`,children:d.jsx(Rb,{children:a+1})})})},a))})};E1.propTypes={currentPage:_.number,totalPages:_.number,onChangePage:_.func,pageType:_.string};function Mb(e){return ao({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}const Fb=F.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  
`,Db=F.div`
  background-color: #fff;
  width: 400px;
  position: relative;
  padding: 20px;
  margin: 10px;
  overflow-y: auto;
  border-radius: 12px;
   @media screen and (min-width: 768px) {
  margin: 0;
  width: 540px;
  border-radius: 24px;
  }
`,Ub=F.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
   @media screen and (min-width: 768px) {
 top: 15px;
  right: 15px;
  }
`,P1=({isOpen:e,closeModal:t,children:n})=>{const r=o=>{o.stopPropagation()},i=o=>{o.target===o.currentTarget&&t()};return C.useEffect(()=>{e?(document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"):(document.body.style.overflow="auto",document.documentElement.style.overflow="auto")},[e]),d.jsx(d.Fragment,{children:e&&d.jsx(Fb,{onClick:i,children:d.jsxs(Db,{className:"ModalContent",onClick:r,children:[d.jsx(Ub,{onClick:t,children:d.jsx(Mb,{size:18})}),n]})})})};P1.propTypes={isOpen:_.bool.isRequired,closeModal:_.func.isRequired,children:_.node};const Bb=F.div`
font-size: inherit;
@media screen and (min-width: 768px) {
margin-bottom:20px;
margin-top:20px
  }
`,j1=F.div`
width: 100%;
box-sizing: border-box;
border-radius: 20px;
 padding: 5px 10px;
 text-align: center;

@media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    padding: 10px 20px;
    box-sizing: border-box;
  }
`,Wb=F.img`
object-fit: cover;
width: 100%;
height: 300px;
/* text-align: center; */
border-radius: 10px;
@media screen and (min-width: 768px) {
    height: 400px;
    width: 100%;
    border-radius: 20px;
  }
`,Vb=F.div`
text-align: center;

`,Hb=F.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${j1}:hover & {
    transform: scale(0);
  }
`,Yb=F.div`
font-size: 14px;
padding: 5px 10px;
@media screen and (min-width: 768px) {
      font-size: 20px;
      padding: 10px 20px;
  }
`,Gb=F.p`
font-weight: 600;
text-transform: uppercase;
font-size: 4vw;
margin-bottom: 10px;

@media screen and (min-width: 768px) {
      font-size: 36px; 
      text-transform: uppercase;
      margin-bottom: 15px;
  }
`,Qb=F.p`
/* text-transform: uppercase; */
font-size: 3vw;
/* color: var(--accentColor); */
padding-bottom: 10px;
margin-bottom: 10px;
border-bottom: 1px solid var(--accentColor);

@media screen and (min-width: 768px) {
      font-size: 20px;
  }
`,Kb=F.span`
margin-left: 10px;
color: var(--accentColor);

`,Xb=F.p`
/* font-size: 14px; */
`,qb=F.p`
margin-bottom: 20px;
/* font-size: 14px; */
`,jp=F.span`
font-weight: 600;
margin-right: 10px;
color:var(--accentColor);
/* font-size: 14px; */
@media screen and (min-width: 768px) {
      font-size: 20px;
  }
`;F.button`

`;const Zb=F.p`
/* font-size: 14px; */
`,so=j.button`
padding: 15px 25px;
 border: unset;
 border-radius: 15px;
 color: white;
 z-index: 1;
 background-color: var(--accentColor);
margin-left: auto;
margin-right: auto;
 backdrop-filter: blur(10px);
 ${""}
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;
 margin-bottom: 20px;
 /* margin-top: 20px; */

&:hover {
cursor: pointer;
color: var(--accentColor);
&:before{
width: 100%;
}

}

&:before{
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
  background: #fff5ed;
  color: var(--accentColor);
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

`,_1=j.span`
 font-size: 15px;
 z-index: 3;
 position: relative;
 font-weight: 600;
`,T1=({name:e,title:t,img:n,description:r,instrument:i,band:o,department:a})=>d.jsxs(Bb,{children:[d.jsx(j1,{children:n?d.jsx(Wb,{src:n,alt:`photo of ${e}`}):d.jsx(Hb,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})})}),d.jsxs(Yb,{children:[d.jsx(Gb,{children:e}),d.jsxs(Qb,{children:[t,":",d.jsx(Kb,{children:a})]}),d.jsx(Xb,{children:r}),d.jsxs(Zb,{children:[d.jsx(jp,{children:"Інструмент:"}),i]}),d.jsxs(qb,{children:[d.jsx(jp,{children:"Колективи:"}),o]}),d.jsx(Vb,{children:d.jsx(At,{to:"https://forms.gle/PVcbo8fZEWQrJm4G8",target:"_blank",children:d.jsx(so,{children:d.jsx(_1,{children:"Записатися"})})})})]})]});T1.propTypes={id:_.number,name:_.string,title:_.string,phone:_.string,img:_.string,description:_.string,instrument:_.string,band:_.string,department:_.string};const N1=({data:e})=>{const[t,n]=C.useState(!1),[r,i]=C.useState(null),o=l=>{i(l),n(!t)},a=l=>{ua.current&&!ua.current.contains(l.target)&&n(!1)};return C.useEffect(()=>{const l=s=>{s.key==="Escape"&&t&&n(!1)};return document.addEventListener("keydown",l),document.addEventListener("click",a),()=>{document.removeEventListener("keydown",l),document.removeEventListener("click",a)}},[t]),d.jsxs(ua,{children:[e.map((l,s)=>d.jsxs(cf,{children:[l.url?d.jsx(Nb,{src:l.url,alt:`photo of ${l.name}`}):d.jsx(C1,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),d.jsxs(Pb,{children:[d.jsx(_b,{children:l.name}),d.jsx(jb,{children:l.title}),d.jsx(Tb,{onClick:()=>o(l),children:"Детальніше"})]})]},s)),t&&r&&d.jsx(P1,{isOpen:t,closeModal:()=>n(!1),children:d.jsx(T1,{name:r.name,title:r.title,description:r.description,phone:r.phone,img:r.url,instrument:r.instrument,band:r.band,department:r.department})})]})};N1.propTypes={data:_.array.isRequired};const O1=({data:e})=>{const[t,n]=C.useState(15),[r,i]=C.useState(1);C.useEffect(()=>{const a=()=>{window.innerWidth>778?n(15):n(6)};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]);const o=a=>{i(a)};return d.jsxs(d.Fragment,{children:[d.jsx(zb,{children:d.jsx(N1,{data:e.slice((r-1)*t,r*t)})}),d.jsx(Ab,{children:d.jsx(E1,{currentPage:r,totalPages:Math.ceil(e.length/t),onChangePage:o,pageType:"team"})})]})};O1.propTypes={data:_.array.isRequired};const Jb=j.div`
position: relative;
width: 100%;
@media only screen and (min-width: 1200px) {  
    width: 260px;
  }
`,$1=j.input`
box-sizing: border-box;
width: 100%;
  padding: 14px 25px;
  /* padding-left:200px; */
  border: 1px solid var(--semiAccentColor);
  /* border-right: 1px solid var(--semiAccentColor); */
  font-size: inherit;
  border-radius: 14px;
  background: var(--base);
  color: var(--mainColor);
  outline: none;
  z-index:9;
  @media only screen and (min-width: 1200px) {
    padding: 14px;
    width: 260px;
    border-radius: 14px;
  }
  
 :focus{
      border: 2px solid var(--accentColor);
     
    }
  ::placeholder{
        /* color: var(--lightGray);
        font-size: 14px; */
        @media only screen and (min-width: 1200px){
    padding: 14px ;
    font-size: 14px;
  }
    }
    :focus::placeholder {
    color: transparent; 
  }
  ::before {
    content: "";
    background-repeat: no-repeat;
    background-position: left center; 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px; 
    width: 16px;
    height: 16px;
    z-index: 10; 
  }
`,e5=j($1)`
border-radius: 14px;
border-left: 1px solid var(--semiAccentColor);
::placeholder{
        color: var(--lightGray);
        font-size: 14px;
        @media only screen and (min-width: 1200px){
    padding: 14px ;
    font-size: 14px;
  }}
@media only screen and (min-width: 1200px) {
    padding-left: 200px;
  }
`,Bu=({value:e,onFilterChange:t,inputStyle:n,placeholder:r})=>{let i;return n==="active"?i=$1:n==="secondary"&&(i=e5),d.jsx(Jb,{children:d.jsx(i,{type:"text",name:"text",placeholder:r,value:e,onChange:o=>t(o.target.value)})})};Bu.propTypes={value:_.string,inputStyle:_.string.isRequired,placeholder:_.string,onFilterChange:_.func.isRequired};function t5(e){return ao({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function n5(e){return ao({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(e)}const r5=j.div`
  position: relative;
  width:100%;
   @media only screen and (min-width: 1200px) {
    width: 300px;
  }
`,i5=j.button`
  width: 100%;
  padding: 18px 24px;
  border-radius: 14px;
  font-size: 14px;
  background: var(--base);
  color: var(--lightGray);
        font-size: 14px;
  outline: none;
  text-align: left;
  border: 1px solid var(--semiAccentColor);
  cursor: pointer;
  margin-bottom: 4px;
  @media only screen and (min-width: 1200px) {
    width: 100%;
    padding: 14px 10px 14px 18px;
    font-size: 13px;
    margin-bottom: 0;
  }
`,o5=j.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: var(--base);
  /* color: var(--mainColor); */
  -webkit-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
-moz-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
  font-size: 14px;
  font-weight: 500;
  border: 1var(--base);
  border-radius: 14px;
  max-height: 200px;
  overflow-y: auto;
  display: ${({open:e})=>e?"block":"none"};
  z-index: 100;
  scrollbar-width: 8px;
  scrollbar-color: var(--lightGrey) transparent;
  ::-webkit-scrollbar {
    width: 8px;
    margin-right: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--subColor);
    border-radius: 10px;
    width: 8px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  user-select: none;
`,a5=j.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: var(--subColor);
  }
`,l5=j.div`
  color: var(--subColor);
  font-size: 17px;
`,z1=({options:e,value:t,onChange:n,placeholder:r,onFilterChange:i})=>{const[o,a]=C.useState(!1),[l,s]=C.useState(t||""),u=p=>{p!==l&&(s(p),n(p),i(p)),a(!1)},f=()=>{a(!o)};return d.jsxs(r5,{onClick:f,children:[d.jsx(i5,{children:r?l||d.jsx(l5,{children:r}):l}),o?d.jsx(n5,{width:20,height:20,style:{position:"absolute",top:"20px",right:"20px"}}):d.jsx(t5,{style:{position:"absolute",top:"20px",right:"20px"}}),o&&d.jsx(o5,{open:o,children:e.map(p=>d.jsx(a5,{onClick:()=>u(p),children:p},p))})]})};z1.propTypes={options:_.arrayOf(_.string),value:_.string,onChange:_.func,placeholder:_.string,onFilterChange:_.func};const s5=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  color: var(--lightGray);
        font-size: 14px;

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 30px;
  }
`,A1=({onFilterChange:e,data:t})=>{const[n,r]=C.useState(t),[i,o]=C.useState([]),[a,l]=C.useState([]),[s,u]=C.useState([]),[f,p]=C.useState("Виберіть відділ"),[g,y]=C.useState(""),[x,v]=C.useState("");C.useEffect(()=>{p("Виберіть відділ"),y(""),v("")},[]),C.useEffect(()=>{const m=Array.from(new Set(n.map(w=>w.department))),c=Array.from(new Set(n.map(w=>w.title))),h=Array.from(new Set(n.map(w=>w.name)));o(["Виберіть відділ",...m]),l(["Пошук за прізвищем",...h]),u(["Пошук за посадою",...c])},[n]);const S=()=>{const m={department:f,name:g.toLowerCase(),title:x.toLowerCase()},c=n.filter(h=>{const w=m.department==="Виберіть відділ"||h.department===f,k=m.name===""||h.name.toLowerCase().includes(g),E=m.title===""||h.title.toLowerCase().includes(x);return w&&k&&E});e(c),y(""),v("")};return d.jsxs(s5,{children:[d.jsx(z1,{options:i,value:f,onChange:m=>p(m),placeholder:"Виберіть відділ",onFilterChange:m=>p(m)},t.id),d.jsx(Bu,{options:a,value:g,onFilterChange:m=>y(m),inputStyle:"active",placeholder:"Пошук за прізвищем",name:"name"}),d.jsx(Bu,{options:s,value:x,onFilterChange:m=>v(m),inputStyle:"active",placeholder:"Пошук за посадою",name:"title"}),d.jsx(so,{style:{margin:"0px"},onClick:S,children:"Пошук"})]})};A1.propTypes={data:_.array.isRequired,onFilterChange:_.func.isRequired};const L1=()=>{const[e,t]=C.useState(S1),n=r=>{t(r)};return d.jsxs(lo,{children:[d.jsx(Ir,{children:"Викладацький склад"}),d.jsx(A1,{onFilterChange:n,data:e}),d.jsx(O1,{data:e})]})};L1.propTypes={data:_.array};const u5=()=>d.jsxs(lo,{children:[d.jsxs("div",{children:[d.jsx(Ir,{children:"Умови вступу"}),d.jsx(Mr,{children:"До школи приймаються діти віком від 5 років у залежності від обраного музичного інструменту. Навчання у школі проводиться на таких відділах: - фортепіанному; - струнно-смичковому: скрипка,  віолончель; - народних інструментів: баян, акордеон, гітара; - духових та ударних інструментів: флейта, саксофон, труба, ударні інструменти; - хоровому. Вступ до школи  відбувається на конкурсній основі на підставі вступних  прослуховувань перевірки музичних здібностей, що включає в себе:  виконання (спів) пісні за власним вибором, повторення за вчителем нескладного ритму та мелодії."}),d.jsx(Mr,{children:"Заповнити форму рєстрації для вступу можна за посиланням:"}),d.jsx(At,{to:"https://forms.gle/PVcbo8fZEWQrJm4G8",target:"_blank",children:d.jsx(so,{"aria-label":"registration",children:d.jsx(_1,{children:"Форма рєстрації"})})})]}),d.jsxs(yb,{children:[d.jsx(Ir,{children:"Перелік документів, які необхідні для вступу до школи:"}),d.jsxs(xb,{children:[d.jsx(Do,{children:"Заява"}),d.jsx(Do,{children:"Копія свідоцтва про народження"}),d.jsx(Do,{children:"Медична довідка."}),d.jsx(Do,{children:"Копія ідентифікаційного коду (за наявності)"})]}),d.jsx(Ep,{children:"* Заява встановленого зразка заповнюється на місці."}),d.jsx(Ep,{children:"Для здобувачів, що навчаються на пільговій основі, передбачен інший пакет документів."})]})]}),R1=[{id:"a-1",name:"Фортепіанний відділ",photo:"https://i.ibb.co/QYzYNWg/pexels-cottonbro-studio-5650529.jpg",about:"Гра на фортепіано - це захоплива подорож для дітей у світ музики та можливість виявити свій музичний потенціал та розвинути творчі здібності. Цей чудовий інструмент надає можливість дітям виразити свої почуття та емоції через музику, розвиваючи в них музичний слух і вміння читати ноти. Гра на фортепіано також сприяє поліпшенню координації рук, розвитку концентрації та терпіння. Безсумнівно, цей інструмент відкриває двері до неймовірного світу музики, який зачаровує та надихає юних музикантів."},{id:"a-2",name:"Струнно-смичковий відділ",photo:"https://i.ibb.co/jrbbY7z/pexels-pixabay-210854.jpg",about:"Гра на струнно-смичкових інструментах - це захоплюючий світ, який дає дітям відкрити в собі музичну магію. Вони зможуть відчути власні обрані ноти, створюючи чарівні мелодії, що сповнені почуттями та виразністю. Гра на скрипці, віолончелі або альту розвиває в дітях вміння слухати, концентруватися і сприяє виробленню гармонійного почуття ритму. Крім того, ці інструменти навчають відповідальності, адже для досягнення високих результатів потрібно вкладати час та наполегливість. Грати на струнно-смичкових інструментах - це завжди цікаво та вдячно, адже вони дарують можливість створювати чарівну музику."},{id:"a-3",name:"Відділ предмету за вибором",photo:"https://i.ibb.co/RNtNjTy/pexels-teddy-yang-2254140.jpg",about:"Гра на духових інструментах - це неймовірна пригода для дітей, яка запрошує у музичний світ. Вони зможуть відчути себе справжніми музикантами, навчившись грати на трубі, саксофоні, флейті та інших інструментах. Ця діяльність сприяє розвитку дихальної системи та допомагає покращити контроль над диханням. Гра на духових інструментах також вчить дітей спілкуватися мовою музики та виражати свої почуття через звуки. Вона робить музику доступною і захоплюючою, а також допомагає формувати вміння слухати та сприймати мелодію. Це чудовий спосіб для дітей виразити свою індивідуальність та розкрити свій творчий потенціал."},{id:"a-4",name:"Відділ духових та ударних інструментів ",photo:"https://i.ibb.co/XJKYNGg/pexels-josh-sorenson-995301.jpg",about:"Гра на ударних інструментах - це особливий спосіб виплеснути свою енергію. Діти зможуть віднайти у собі справжнього ударника, навчившись грати на барабанах, ксилофоні, дзвіночках і багатьох інших інструментах. Гра на ударних інструментах розвиває координацію рук та розвиток моторики, а також допомагає дітям вчитися працювати в команді та слухати одне одного у музичному виконанні. Це чудовий спосіб для дітей виразити свої почуття через ритм і створити музику власноруч. Ударні інструменти роблять музику неймовірно захопливою і доступною для маленьких музикантів."},{id:"a-5",name:"Відділ народних інструментів",photo:"https://i.ibb.co/3FLhwtw/pexels-pixabay-33597.jpg",about:"Народні інструменти, такі як гітара, бандура, баян та інші, відкривають дітям чарівний світ музики, насичений культурними традиціями. Граючи на цих інструментах, діти пізнають багатство своєї спадщини і вчаться виконувати мелодії, які були передані з покоління в покоління. Народні інструменти допомагають зберігати і популяризувати унікальні музичні традиції та вчать дітей цінувати різноманіття культур. Завдяки навчанню на народних інструментах, діти можуть долучитися до світу української, а також інших національних музичних мистецтв та стати частиною неперевершеної музичної спадщини."},{id:"a-6",name:"Відділ концертмейстерства та вокалу",photo:"https://i.ibb.co/7n0qgsY/pexels-dmitry-demidov-3783471.jpg",about:"Вокальне мистецтво - це дивовижний світ виразності та музичної гармонії. У нашій музичній школі, діти отримають можливість розкрити свій вокальний талант під керівництвом досвідчених викладачів. Ми пропонуємо індивідуальні та групові заняття вокалом, де діти вивчають основи вокальної техніки, розвивають свій голос, та вчаться виконувати улюблені пісні. Вокальне навчання розширює музичний горизонт дітей і дарує їм можливість виразити свої почуття та емоції через музику."},{id:"a-7",name:"Теоретичний відділ",photo:"https://i.ibb.co/Qrsrzc2/bg.jpg",about:"Музично-теоретичний відділ нашої школи є важливою складовою частиною музичної освіти для дітей. Тут діти здобувають теоретичні знання, які є основою для розуміння музики. Вони вивчають музичну нотацію, ритміку, гармонію, історію музики та багато іншого. Навички, отримані в музично-теоретичному відділі, допомагають дітям краще розуміти та виконувати музику на своїх інструментах або вокально. Відкривши для себе музичну теорію, діти розкривають перед собою безмежні можливості у музичному світі."}],c5=()=>R1,f5=e=>R1.find(t=>t.id===e),I1=[{id:"q-1",name:"Оркестр народної музики 'Барвисті Візерунки'",photo:"https://i.ibb.co/4Nw2QkK/orhestra3.jpg",about:"Гордістю школи є оркестр народної музики «Барвисті візерунки» (керівник Галина Головацька-Гуль), створений в жовтні 2008 року. Репертуар оркестру складається з обробок пісень і танців народів світу. Колектив веде активну концертну діяльність, має численні нагороди багатьох міжнародних конкурсів та фестивалів як в Україні так і за кордоном – у Чехії, Угорщині, Болгарії, Італії та ін. Керівник оркестру - викладач Галина Головацька-Гуль, саме вона наполегливо відкриває в душах своїх вихованців чарівний світ музики та гармонії. Звичайно, велика роль належить обдарованим і талановитим викладачам струнно-смичкового, духового та відділу народних інструментів школи, з учнів яких і складається колектив."},{id:"q-2",name:"Фортепіанний дует 'Но-Та'",photo:"https://i.ibb.co/Khng8mg/Nota.jpg",about:"Фортепіанний дует 'НоТа' у складі викладачів - Нонни Козлової і Тетяни Чайки (лауреати Міжнародних премій 'Дружба' та ім. С.Гулака-Артемовського), вже більше 40 років дарує свою яскраву, емоційну, неперевершену майстерність слухачам, популяризуючи як творчість автора відомого романсу 'Хризантеми' Миколи Харито, так і у власному перекладенні для фортепіанного ансамблю перлин української класики та народних пісень. Їх виступи завжди супроводжуються аваціями глядацької аудиторії. За час своєї творчої діяльності вони дали біля 700 концертів на найрізноманітніших сценах України та зарубіжжя. "},{id:"q-3",name:'Дитячий хор "Струмочок"',photo:"https://i.ibb.co/mztr6F7/IMG-20230120-160646-225.jpg",about:"Керівник: Євгенія Пучко, концертмейстер: Наталія Лук’янчук"},{id:"q-4",name:"Ансамбль скрипалів 'Унісон'",photo:"https://i.ibb.co/FDxTGJX/image.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-5",name:"Ансамбль флейтистів 'Вітерець'",photo:"https://i.ibb.co/5WKxV46/IMG-20230508-154004-124.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-6",name:"Вокальний дует",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-7",name:"фольклорний гурт 'Рахта'",photo:"https://i.ibb.co/pRP3tMd/2.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-8",name:"Ансамблі гітаристів",photo:"https://i.ibb.co/PNQPh2b/pic2.jpg",about:"Активну концертну діяльність ведуть ансамблі гітаристів «Палітра», «Лілея», до складу яких входять викладачі Лілія Герасимчук, Тамара Теліна, Юлія Лисенко. Ансамблі майстерно та яскраво виступають на конкурсних сценах України, Білорусі, беруть участь у численних благодійних концертах.	Талановиті викладачі КДМШ №22 успішно поєднують педагогічну й артистичну діяльність та вписують свою сторінку в історію української музичної культури."},{id:"q-9",name:"Дитячий музичний театральний колектив 'Пташечки'",photo:"https://i.ibb.co/pZFmyzf/6.jpg",about:'У 2015 році в школі створено дитячий музичний театральний колектив "Пташечки" (керівник Триліська Наталія Костянтинівна, концертмейстер і постановник Кірш Наталія Євгеніївна). В творчому доробку колективу налічується 1 дитяча опера («З друзями біда – не біда»), 2 мюзикли («Пригоди трьох кошенят» і «День народження Принцеси») та кілька театралізованих музичних вистав (українська сюїта «А у нас на Україні» та постановка на пісню, написану Наталією Триліською у співавторстві з Наталією Кірш - «Україна моя»). Колектив «Пташечки» – неодноразовий лауреат Всеукраїнських та Міжнародних конкурсів.'}],d5=()=>I1,p5=e=>I1.find(t=>t.id===e),M1=j.div`
     width:100%;
    /* margin-bottom: 100px; */
    /* min-height: 700px; */
`,F1=j.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
`,D1=j.li`
 text-align: center;
 backdrop-filter: blur(10px);
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
 cursor:pointer;
 border-radius: 15px;
    width: 320px;
    &:hover,
        &:focus {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

    @media screen and (min-width: 558px) {
            width: 230px;
        }

  > a {
    text-decoration: none;
    margin-left: auto;
    margin-right:auto;
  }
  > a img {
    margin-top: 10px;
    border: 1px solid var(--border-header);
    width: 100%;
    border-radius: 15px;
      margin-left: auto;
  margin-right: auto;
  }
`,U1=j.img`
width: 100%;
height: 140px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`,B1=j(to)`
    display: block;
    max-width: 250px;
    height: 200px;
    text-decoration: none;
    color: currentColor;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width:768px) and (max-width:1199px) {
        height: 100%;
    }
`,W1=j.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.2;
    letter-spacing: 0.06em;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
    /* height: 60px; */
`,V1=({departments:e})=>d.jsx(M1,{children:d.jsx(F1,{children:e.map(t=>d.jsx(D1,{children:d.jsxs(B1,{to:`${t.id}`,children:[d.jsx(U1,{src:t.photo,alt:t.name}),d.jsx(W1,{children:t.name})]})},t.id))})});V1.propTypes={departments:_.arrayOf(_.shape({id:_.string.isRequired,name:_.string.isRequired})).isRequired};const m5=()=>{const e=c5();return d.jsxs(k1,{children:[d.jsx(V1,{departments:e}),d.jsx(Mr,{children:d.jsx("article",{children:d.jsx("p",{children:"В школі працює 8 відділів, які очолюють висококваліфіковані викладачі: фортепіанний відділ №1 - завідуюча відділом Триліська Н.К., фортепіанний відділ №2 - Козлова Н.О., відділ народних інструментів - Іщук І.В., струнно-смичковий відділ - Головацька-Гуль Г.В., відділ духових та ударних інструментів - Теліна Т.К., відділ предмету за вибором - Лосєва Е.Л., відділ концертмейстерства та вокалу - Лук'янчук Н.Є., теоретичний відділ - Семенова Г.П."})})})]})},H1=j.p`

  color: var(--accentColor);
  font-size: 1.8em;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`,Y1=j.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  color: var(--mainColor);
  @media screen and (min-width: 778px) {
  font-size: 1.4em;
  }
`,G1=j.div`
margin-bottom: 20px;
margin: auto;
min-height: 700px;
/* margin-bottom: 20px; */
`,h5=j.div`
  display: block;
  position: relative;
  max-width: auto;
  max-height: 600px;
  backdrop-filter: blur(10px);
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  padding: 2em 1.2em;
  margin-top: 12px;
  margin-bottom: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
 background-image: #a6ffa6;
 >img{
  width: 95%;
 }
  &:hover,
        &:focus {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

  &:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.35s ease-out;
  }
&:hover:before {
  transform: scale(28);
}
&:hover .Description{
    transition: all 0.5s ease-out;
  color: rgba(255, 255, 255, 0.8);
}
&:hover .Title{
  transition: all 0.5s ease-out;
  color: var(--mainColor);
}
`,Q1=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2em;
  height: 2em;
  overflow: hidden;
  top: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(250,253,45,1) 100%);
  border-radius: 0 4px 0 32px;
`,K1=j.div`
   margin-top: -4px;
  margin-right: -4px;
  color: var(--mainColor);
  font-family: courier, sans;
`,g5=()=>{const{id:e}=p0(),t=f5(e),n=Sl(),r=()=>{n(-1)};return d.jsxs(G1,{children:[d.jsxs(h5,{children:[d.jsx(gb,{src:t.photo,alt:t.name,onError:i=>{i.target.style.display="none";const o=document.createElement("div");o.style.width="100%",o.style.height="200px",o.style.border="1px solid var(--accentColor)",o.style.backgroundColor="linear-gradient(to right, #fff5ed 0 90%)",i.target.parentNode.insertBefore(o,i.target)}}),d.jsx(H1,{children:t.name}),d.jsx(Y1,{children:t.about}),d.jsx(Q1,{children:d.jsx(K1,{})})]}),d.jsx(so,{"aria-label":"go back",onClick:r,children:"Повернутися назад"})]})},X1=({bands:e})=>d.jsx(M1,{children:d.jsx(F1,{children:e.map(t=>d.jsx(D1,{children:d.jsxs(B1,{to:`${t.id}`,children:[t.photo?d.jsx(U1,{src:t.photo,alt:`photo of ${t.name}`}):d.jsx(C1,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),d.jsx(W1,{children:t.name})]})},t.id))})});X1.propTypes={bands:_.arrayOf(_.shape({id:_.string.isRequired,name:_.string.isRequired})).isRequired};const v5=()=>{const e=d5();return d.jsx(k1,{children:d.jsx(X1,{bands:e})})},y5=j.div`
    display: block;
  position: relative;
  font-size: 12px;
  max-width: auto;
  max-height: 600px;
  backdrop-filter: blur(10px);
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  padding: 2em 1.2em;
  margin-top: 12px;
  margin-bottom: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
 background-image: #b87333;
  &:hover,
        &:focus {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

  &:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.35s ease-out;
  }
&:hover:before {
  transform: scale(28);
}
&:hover .Description{
    transition: all 0.5s ease-out;
  color: rgba(255, 255, 255, 0.8);
}
&:hover .Title{
  transition: all 0.5s ease-out;
  color: var(--mainColor);
}
`,x5=j.img`
width: 100%;
height: auto;
/* object-fit: cover; */
object-fit: contain;
border-radius: 15px;
 /* box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px; */
 @media screen and (min-width: 778px) {
  height: 400px;
  }
`,w5=()=>{const{id:e}=p0(),t=p5(e),n=Sl(),r=()=>{n(-1)};return d.jsxs(G1,{children:[d.jsxs(y5,{children:[d.jsx(x5,{src:t.photo,alt:t.name,onError:i=>{i.target.style.display="none";const o=document.createElement("div");o.style.width="100%",o.style.height="200px",o.style.border="1px solid var(--accentColor)",o.style.backgroundColor="linear-gradient(to right, #fff5ed 0 90%)",i.target.parentNode.insertBefore(o,i.target)}}),d.jsx(H1,{children:t.name}),d.jsx(Y1,{children:t.about}),d.jsx(Q1,{children:d.jsx(K1,{})})]}),d.jsx(so,{"aria-label":"go back",onClick:r,children:"Повернутися назад"})]})},k5=j.div`
margin: auto;
min-height: 700px;
`,b5=j.h2`
font-family: 'Montserrat', sans-serif;
font-size: 24px;
font-weight: 600;
text-align: center;
color: var(--accentColor);
@media screen and (min-width: 558px) {
    font-size: 36px;
  }
`,S5=j.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 800px;
/* margin-left: auto;
margin-right: auto; */
margin-top:30px;
font-size: 18px;
line-height:150%;
@media screen and (min-width: 1100px) {
    flex-direction: row;
    align-items: flex-start
  }
`,C5=j.img`
width: 300px;
height: auto;
transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.35s ease-out;
/* margin-bottom: 30px; */
box-shadow: 0px 0px 5px 0px rgba(255, 77, 77, 1);
@media screen and (min-width: 558px) {
    width: 400px;
  }
  @media screen and (min-width: 1100px) {
    width: 600px;
  }
  &:hover{
  transform: scale(1.1);
}
`,E5=j.address`
/* border: 1px solid var(--accentColor); */
padding: 20px;
font-size: 14px;
border-radius: 10px;
box-sizing: border-box;
width: 100%;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

ul{
  width: 100%;
}

@media screen and (min-width: 558px) {
    width: 500px;
    ul{
  width: 400px;
}
  }
@media screen and (min-width: 1100px) {
    font-size: 18px;
    margin-left: 30px;
    box-shadow: none;

  }
`,Uo=j.span`
font-weight: 600;
margin-right: 20px;

color: var(--accentColor);
`,P5="/KDMSH/assets/map-a7958fcf.png",j5=()=>d.jsxs(k5,{children:[d.jsx(b5,{children:"Контактна інформація"}),d.jsxs(S5,{children:[d.jsx(d.Fragment,{children:d.jsx(C5,{src:P5,alt:"map",width:"500px",height:"500px"})}),d.jsx(E5,{children:d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(Uo,{children:"Адреса:"})," вулиця Зодчих, 30а, ",d.jsx("br",{}),"Київ, 03194"]}),d.jsxs("li",{children:[d.jsx(Uo,{children:"Телефон:"}),d.jsx(At,{to:"tel:+380934139512",style:{textDecoration:"none",color:"#212121"},children:"(093) 413-95-12"})]}),d.jsxs("li",{children:[d.jsx(Uo,{children:"Email:"}),d.jsx(At,{to:"mailto:dmsh22@ukr.net",target:"_blank",style:{textDecoration:"none",color:"#212121"},children:"dmsh22@ukr.net"})]}),d.jsxs("li",{children:[d.jsx(Uo,{children:"Розклад роботи:"})," ",d.jsx("br",{})," пн-пт: 10.00 - 20.00 ",d.jsx("br",{})," cб: 10.00 - 16.00 ",d.jsx("br",{})," нд: вихідний"]})]})})]})]}),_5=()=>d.jsx(lo,{children:d.jsxs(Mr,{children:[d.jsx(Ir,{children:"Про нас"}),"Для мешканців Святошинського району працює з 1971 року. Школа є державним позашкільним навчальним закладом освіти в галузі культури, здійснює естетичне виховання дітей, учнів, громадян, забезпечуючи принцип єдності і наступності мистецької освіти; проводить навчально-виховну, методичну, просвітницьку роботу."]})}),T5=()=>d.jsx(C.Suspense,{fallback:d.jsx($x,{}),children:d.jsx(k2,{children:d.jsxs(We,{path:"/",element:d.jsx(rb,{}),children:[d.jsx(We,{index:!0,element:d.jsx(wb,{})}),d.jsx(We,{path:"about",element:d.jsx(kb,{})}),d.jsx(We,{path:"school",element:d.jsx(_5,{})}),d.jsx(We,{path:"management",element:d.jsx($b,{})}),d.jsx(We,{path:"team/:currentPage",element:d.jsx(L1,{})}),d.jsx(We,{path:"reviews",element:d.jsx(u5,{})}),d.jsx(We,{path:"departments",element:d.jsx(m5,{})}),d.jsx(We,{path:"departments/:id",element:d.jsx(g5,{})}),d.jsx(We,{path:"bands",element:d.jsx(v5,{})}),d.jsx(We,{path:"bands/:id",element:d.jsx(w5,{})}),d.jsx(We,{path:"contacts",element:d.jsx(j5,{})})]})})});function N5(){return d.jsx(d.Fragment,{children:d.jsx(T5,{})})}ks.createRoot(document.getElementById("root")).render(d.jsx(_2,{basename:"/KDMSH",children:d.jsx(N5,{})}));
