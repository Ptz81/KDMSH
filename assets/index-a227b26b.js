function K1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Pp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jp={exports:{}},Yo={},_p={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),X1=Symbol.for("react.portal"),Z1=Symbol.for("react.fragment"),q1=Symbol.for("react.strict_mode"),J1=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),ng=Symbol.for("react.forward_ref"),rg=Symbol.for("react.suspense"),ig=Symbol.for("react.memo"),ag=Symbol.for("react.lazy"),ff=Symbol.iterator;function og(e){return e===null||typeof e!="object"?null:(e=ff&&e[ff]||e["@@iterator"],typeof e=="function"?e:null)}var Tp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Np=Object.assign,Op={};function Fr(e,t,n){this.props=e,this.context=t,this.refs=Op,this.updater=n||Tp}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $p(){}$p.prototype=Fr.prototype;function Wu(e,t,n){this.props=e,this.context=t,this.refs=Op,this.updater=n||Tp}var Vu=Wu.prototype=new $p;Vu.constructor=Wu;Np(Vu,Fr.prototype);Vu.isPureReactComponent=!0;var df=Array.isArray,zp=Object.prototype.hasOwnProperty,Hu={current:null},Ap={key:!0,ref:!0,__self:!0,__source:!0};function Rp(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)zp.call(t,r)&&!Ap.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gi,type:e,key:a,ref:o,props:i,_owner:Hu.current}}function lg(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function sg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pf=/\/+/g;function Ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sg(""+e.key):t.toString(36)}function Ua(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gi:case X1:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ll(o,0):r,df(i)?(n="",e!=null&&(n=e.replace(pf,"$&/")+"/"),Ua(i,t,n,"",function(u){return u})):i!=null&&(Yu(i)&&(i=lg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",df(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Ll(a,l);o+=Ua(a,t,n,s,i)}else if(s=og(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Ll(a,l++),o+=Ua(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function fa(e,t,n){if(e==null)return e;var r=[],i=0;return Ua(e,r,"","",function(a){return t.call(n,a,i++)}),r}function ug(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},Ba={transition:null},cg={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:Hu};D.Children={map:fa,forEach:function(e,t,n){fa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fa(e,function(){t++}),t},toArray:function(e){return fa(e,function(t){return t})||[]},only:function(e){if(!Yu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Fr;D.Fragment=Z1;D.Profiler=J1;D.PureComponent=Wu;D.StrictMode=q1;D.Suspense=rg;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cg;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Np({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Hu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)zp.call(t,s)&&!Ap.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Gi,type:e.type,key:i,ref:a,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:tg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eg,_context:e},e.Consumer=e};D.createElement=Rp;D.createFactory=function(e){var t=Rp.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:ng,render:e}};D.isValidElement=Yu;D.lazy=function(e){return{$$typeof:ag,_payload:{_status:-1,_result:e},_init:ug}};D.memo=function(e,t){return{$$typeof:ig,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Ba.transition;Ba.transition={};try{e()}finally{Ba.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return Oe.current.useCallback(e,t)};D.useContext=function(e){return Oe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};D.useEffect=function(e,t){return Oe.current.useEffect(e,t)};D.useId=function(){return Oe.current.useId()};D.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Oe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};D.useRef=function(e){return Oe.current.useRef(e)};D.useState=function(e){return Oe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Oe.current.useTransition()};D.version="18.2.0";_p.exports=D;var C=_p.exports;const Te=Pp(C),ws=K1({__proto__:null,default:Te},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg=C,dg=Symbol.for("react.element"),pg=Symbol.for("react.fragment"),mg=Object.prototype.hasOwnProperty,hg=fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gg={key:!0,ref:!0,__self:!0,__source:!0};function Lp(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)mg.call(t,r)&&!gg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dg,type:e,key:a,ref:o,props:i,_owner:hg.current}}Yo.Fragment=pg;Yo.jsx=Lp;Yo.jsxs=Lp;jp.exports=Yo;var d=jp.exports,ks={},Ip={exports:{}},Ke={},Mp={exports:{}},Fp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,A){var R=T.length;T.push(A);e:for(;0<R;){var J=R-1>>>1,ie=T[J];if(0<i(ie,A))T[J]=A,T[R]=ie,R=J;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],R=T.pop();if(R!==A){T[0]=R;e:for(var J=0,ie=T.length,jt=ie>>>1;J<jt;){var Ue=2*(J+1)-1,Ht=T[Ue],Be=Ue+1,et=T[Be];if(0>i(Ht,R))Be<ie&&0>i(et,Ht)?(T[J]=et,T[Be]=R,J=Be):(T[J]=Ht,T[Ue]=R,J=Ue);else if(Be<ie&&0>i(et,R))T[J]=et,T[Be]=R,J=Be;else break e}}return A}function i(T,A){var R=T.sortIndex-A.sortIndex;return R!==0?R:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,p=null,g=3,y=!1,x=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=T)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function w(T){if(v=!1,h(T),!x)if(n(s)!==null)x=!0,jn(k);else{var A=n(u);A!==null&&Je(w,A.startTime-T)}}function k(T,A){x=!1,v&&(v=!1,m(N),N=-1),y=!0;var R=g;try{for(h(A),p=n(s);p!==null&&(!(p.expirationTime>A)||T&&!De());){var J=p.callback;if(typeof J=="function"){p.callback=null,g=p.priorityLevel;var ie=J(p.expirationTime<=A);A=e.unstable_now(),typeof ie=="function"?p.callback=ie:p===n(s)&&r(s),h(A)}else r(s);p=n(s)}if(p!==null)var jt=!0;else{var Ue=n(u);Ue!==null&&Je(w,Ue.startTime-A),jt=!1}return jt}finally{p=null,g=R,y=!1}}var E=!1,b=null,N=-1,M=5,L=-1;function De(){return!(e.unstable_now()-L<M)}function En(){if(b!==null){var T=e.unstable_now();L=T;var A=!0;try{A=b(!0,T)}finally{A?Pn():(E=!1,b=null)}}else E=!1}var Pn;if(typeof c=="function")Pn=function(){c(En)};else if(typeof MessageChannel<"u"){var ua=new MessageChannel,Al=ua.port2;ua.port1.onmessage=En,Pn=function(){Al.postMessage(null)}}else Pn=function(){S(En,0)};function jn(T){b=T,E||(E=!0,Pn())}function Je(T,A){N=S(function(){T(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,jn(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var R=g;g=A;try{return T()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=g;g=T;try{return A()}finally{g=R}},e.unstable_scheduleCallback=function(T,A,R){var J=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?J+R:J):R=J,T){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=R+ie,T={id:f++,callback:A,priorityLevel:T,startTime:R,expirationTime:ie,sortIndex:-1},R>J?(T.sortIndex=R,t(u,T),n(s)===null&&T===n(u)&&(v?(m(N),N=-1):v=!0,Je(w,R-J))):(T.sortIndex=ie,t(s,T),x||y||(x=!0,jn(k))),T},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(T){var A=g;return function(){var R=g;g=A;try{return T.apply(this,arguments)}finally{g=R}}}})(Fp);Mp.exports=Fp;var vg=Mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=C,Qe=vg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Up=new Set,xi={};function Qn(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(xi[e]=t,e=0;e<t.length;e++)Up.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bs=Object.prototype.hasOwnProperty,yg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mf={},hf={};function xg(e){return bs.call(hf,e)?!0:bs.call(mf,e)?!1:yg.test(e)?hf[e]=!0:(mf[e]=!0,!1)}function wg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kg(e,t,n,r){if(t===null||typeof t>"u"||wg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gu=/[\-:]([a-z])/g;function Qu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gu,Qu);be[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gu,Qu);be[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gu,Qu);be[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ku(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kg(t,n,i,r)&&(n=null),r||i===null?xg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Xu=Symbol.for("react.strict_mode"),Ss=Symbol.for("react.profiler"),Bp=Symbol.for("react.provider"),Wp=Symbol.for("react.context"),Zu=Symbol.for("react.forward_ref"),Cs=Symbol.for("react.suspense"),Es=Symbol.for("react.suspense_list"),qu=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Vp=Symbol.for("react.offscreen"),gf=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=gf&&e[gf]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Il;function ti(e){if(Il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Il=t&&t[1]||""}return`
`+Il+e}var Ml=!1;function Fl(e,t){if(!e||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ti(e):""}function bg(e){switch(e.tag){case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function Ps(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case Jn:return"Portal";case Ss:return"Profiler";case Xu:return"StrictMode";case Cs:return"Suspense";case Es:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wp:return(e.displayName||"Context")+".Consumer";case Bp:return(e._context.displayName||"Context")+".Provider";case Zu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qu:return t=e.displayName||null,t!==null?t:Ps(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return Ps(e(t))}catch{}}return null}function Sg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ps(t);case 8:return t===Xu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cg(e){var t=Hp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pa(e){e._valueTracker||(e._valueTracker=Cg(e))}function Yp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function js(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gp(e,t){t=t.checked,t!=null&&Ku(e,"checked",t,!1)}function _s(e,t){Gp(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ts(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ts(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ts(e,t,n){(t!=="number"||uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ni=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(ni(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function Qp(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,Xp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Eg=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(e){Eg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),li[t]=li[e]})});function Zp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||li.hasOwnProperty(e)&&li[e]?(""+t).trim():t+"px"}function qp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Pg=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $s(e,t){if(t){if(Pg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function zs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As=null;function Ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,gr=null,vr=null;function kf(e){if(e=Xi(e)){if(typeof Rs!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Zo(t),Rs(e.stateNode,e.type,t))}}function Jp(e){gr?vr?vr.push(e):vr=[e]:gr=e}function em(){if(gr){var e=gr,t=vr;if(vr=gr=null,kf(e),t)for(e=0;e<t.length;e++)kf(t[e])}}function tm(e,t){return e(t)}function nm(){}var Dl=!1;function rm(e,t,n){if(Dl)return e(t,n);Dl=!0;try{return tm(e,t,n)}finally{Dl=!1,(gr!==null||vr!==null)&&(nm(),em())}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var r=Zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ls=!1;if(Rt)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Ls=!1}function jg(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var si=!1,co=null,fo=!1,Is=null,_g={onError:function(e){si=!0,co=e}};function Tg(e,t,n,r,i,a,o,l,s){si=!1,co=null,jg.apply(_g,arguments)}function Ng(e,t,n,r,i,a,o,l,s){if(Tg.apply(this,arguments),si){if(si){var u=co;si=!1,co=null}else throw Error(P(198));fo||(fo=!0,Is=u)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function im(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bf(e){if(Kn(e)!==e)throw Error(P(188))}function Og(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return bf(i),e;if(a===r)return bf(i),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function am(e){return e=Og(e),e!==null?om(e):null}function om(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=om(e);if(t!==null)return t;e=e.sibling}return null}var lm=Qe.unstable_scheduleCallback,Sf=Qe.unstable_cancelCallback,$g=Qe.unstable_shouldYield,zg=Qe.unstable_requestPaint,se=Qe.unstable_now,Ag=Qe.unstable_getCurrentPriorityLevel,ec=Qe.unstable_ImmediatePriority,sm=Qe.unstable_UserBlockingPriority,po=Qe.unstable_NormalPriority,Rg=Qe.unstable_LowPriority,um=Qe.unstable_IdlePriority,Go=null,Ct=null;function Lg(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Go,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Fg,Ig=Math.log,Mg=Math.LN2;function Fg(e){return e>>>=0,e===0?32:31-(Ig(e)/Mg|0)|0}var ha=64,ga=4194304;function ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ri(l):(a&=o,a!==0&&(r=ri(a)))}else o=n&~i,o!==0?r=ri(o):a!==0&&(r=ri(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Dg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ug(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-pt(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=Dg(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Ms(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cm(){var e=ha;return ha<<=1,!(ha&4194240)&&(ha=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function Bg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function tc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function fm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dm,nc,pm,mm,hm,Fs=!1,va=[],ln=null,sn=null,un=null,bi=new Map,Si=new Map,en=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Qr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Xi(t),t!==null&&nc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vg(e,t,n,r,i){switch(t){case"focusin":return ln=Qr(ln,e,t,n,r,i),!0;case"dragenter":return sn=Qr(sn,e,t,n,r,i),!0;case"mouseover":return un=Qr(un,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return bi.set(a,Qr(bi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Si.set(a,Qr(Si.get(a)||null,e,t,n,r,i)),!0}return!1}function gm(e){var t=Nn(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=im(n),t!==null){e.blockedOn=t,hm(e.priority,function(){pm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);As=r,n.target.dispatchEvent(r),As=null}else return t=Xi(n),t!==null&&nc(t),e.blockedOn=n,!1;t.shift()}return!0}function Ef(e,t,n){Wa(e)&&n.delete(t)}function Hg(){Fs=!1,ln!==null&&Wa(ln)&&(ln=null),sn!==null&&Wa(sn)&&(sn=null),un!==null&&Wa(un)&&(un=null),bi.forEach(Ef),Si.forEach(Ef)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Fs||(Fs=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Hg)))}function Ci(e){function t(i){return Kr(i,e)}if(0<va.length){Kr(va[0],e);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Kr(ln,e),sn!==null&&Kr(sn,e),un!==null&&Kr(un,e),bi.forEach(t),Si.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)gm(n),n.blockedOn===null&&en.shift()}var yr=Bt.ReactCurrentBatchConfig,ho=!0;function Yg(e,t,n,r){var i=H,a=yr.transition;yr.transition=null;try{H=1,rc(e,t,n,r)}finally{H=i,yr.transition=a}}function Gg(e,t,n,r){var i=H,a=yr.transition;yr.transition=null;try{H=4,rc(e,t,n,r)}finally{H=i,yr.transition=a}}function rc(e,t,n,r){if(ho){var i=Ds(e,t,n,r);if(i===null)Zl(e,t,r,go,n),Cf(e,r);else if(Vg(i,e,t,n,r))r.stopPropagation();else if(Cf(e,r),t&4&&-1<Wg.indexOf(e)){for(;i!==null;){var a=Xi(i);if(a!==null&&dm(a),a=Ds(e,t,n,r),a===null&&Zl(e,t,r,go,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var go=null;function Ds(e,t,n,r){if(go=null,e=Ju(r),e=Nn(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=im(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return go=e,null}function vm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ag()){case ec:return 1;case sm:return 4;case po:case Rg:return 16;case um:return 536870912;default:return 16}default:return 16}}var nn=null,ic=null,Va=null;function ym(){if(Va)return Va;var e,t=ic,n=t.length,r,i="value"in nn?nn.value:nn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Va=i.slice(e,1<r?1-r:void 0)}function Ha(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ya(){return!0}function Pf(){return!1}function Xe(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ya:Pf,this.isPropagationStopped=Pf,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=Xe(Dr),Ki=re({},Dr,{view:0,detail:0}),Qg=Xe(Ki),Bl,Wl,Xr,Qo=re({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Bl=e.screenX-Xr.screenX,Wl=e.screenY-Xr.screenY):Wl=Bl=0,Xr=e),Bl)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),jf=Xe(Qo),Kg=re({},Qo,{dataTransfer:0}),Xg=Xe(Kg),Zg=re({},Ki,{relatedTarget:0}),Vl=Xe(Zg),qg=re({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=Xe(qg),ev=re({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tv=Xe(ev),nv=re({},Dr,{data:0}),_f=Xe(nv),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ov(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=av[e])?!!t[e]:!1}function oc(){return ov}var lv=re({},Ki,{key:function(e){if(e.key){var t=rv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ha(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(e){return e.type==="keypress"?Ha(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ha(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sv=Xe(lv),uv=re({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=Xe(uv),cv=re({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),fv=Xe(cv),dv=re({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),pv=Xe(dv),mv=re({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hv=Xe(mv),gv=[9,13,27,32],lc=Rt&&"CompositionEvent"in window,ui=null;Rt&&"documentMode"in document&&(ui=document.documentMode);var vv=Rt&&"TextEvent"in window&&!ui,xm=Rt&&(!lc||ui&&8<ui&&11>=ui),Nf=String.fromCharCode(32),Of=!1;function wm(e,t){switch(e){case"keyup":return gv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function km(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function yv(e,t){switch(e){case"compositionend":return km(t);case"keypress":return t.which!==32?null:(Of=!0,Nf);case"textInput":return e=t.data,e===Nf&&Of?null:e;default:return null}}function xv(e,t){if(tr)return e==="compositionend"||!lc&&wm(e,t)?(e=ym(),Va=ic=nn=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xm&&t.locale!=="ko"?null:t.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wv[e.type]:t==="textarea"}function bm(e,t,n,r){Jp(r),t=vo(t,"onChange"),0<t.length&&(n=new ac("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ci=null,Ei=null;function kv(e){zm(e,0)}function Ko(e){var t=ir(e);if(Yp(t))return e}function bv(e,t){if(e==="change")return t}var Sm=!1;if(Rt){var Hl;if(Rt){var Yl="oninput"in document;if(!Yl){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),Yl=typeof zf.oninput=="function"}Hl=Yl}else Hl=!1;Sm=Hl&&(!document.documentMode||9<document.documentMode)}function Af(){ci&&(ci.detachEvent("onpropertychange",Cm),Ei=ci=null)}function Cm(e){if(e.propertyName==="value"&&Ko(Ei)){var t=[];bm(t,Ei,e,Ju(e)),rm(kv,t)}}function Sv(e,t,n){e==="focusin"?(Af(),ci=t,Ei=n,ci.attachEvent("onpropertychange",Cm)):e==="focusout"&&Af()}function Cv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(Ei)}function Ev(e,t){if(e==="click")return Ko(t)}function Pv(e,t){if(e==="input"||e==="change")return Ko(t)}function jv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:jv;function Pi(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bs.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lf(e,t){var n=Rf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rf(n)}}function Em(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Em(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pm(){for(var e=window,t=uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=uo(e.document)}return t}function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _v(e){var t=Pm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Em(n.ownerDocument.documentElement,n)){if(r!==null&&sc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Lf(n,a);var o=Lf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tv=Rt&&"documentMode"in document&&11>=document.documentMode,nr=null,Us=null,fi=null,Bs=!1;function If(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bs||nr==null||nr!==uo(r)||(r=nr,"selectionStart"in r&&sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fi&&Pi(fi,r)||(fi=r,r=vo(Us,"onSelect"),0<r.length&&(t=new ac("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nr)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Gl={},jm={};Rt&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Xo(e){if(Gl[e])return Gl[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jm)return Gl[e]=t[n];return e}var _m=Xo("animationend"),Tm=Xo("animationiteration"),Nm=Xo("animationstart"),Om=Xo("transitionend"),$m=new Map,Mf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){$m.set(e,t),Qn(t,[e])}for(var Ql=0;Ql<Mf.length;Ql++){var Kl=Mf[Ql],Nv=Kl.toLowerCase(),Ov=Kl[0].toUpperCase()+Kl.slice(1);bn(Nv,"on"+Ov)}bn(_m,"onAnimationEnd");bn(Tm,"onAnimationIteration");bn(Nm,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(Om,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$v=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function Ff(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ng(r,t,void 0,e),e.currentTarget=null}function zm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Ff(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Ff(i,l,u),a=s}}}if(fo)throw e=Is,fo=!1,Is=null,e}function Q(e,t){var n=t[Gs];n===void 0&&(n=t[Gs]=new Set);var r=e+"__bubble";n.has(r)||(Am(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),Am(n,e,r,t)}var wa="_reactListening"+Math.random().toString(36).slice(2);function ji(e){if(!e[wa]){e[wa]=!0,Up.forEach(function(n){n!=="selectionchange"&&($v.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wa]||(t[wa]=!0,Xl("selectionchange",!1,t))}}function Am(e,t,n,r){switch(vm(t)){case 1:var i=Yg;break;case 4:i=Gg;break;default:i=rc}n=i.bind(null,t,n,e),i=void 0,!Ls||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Nn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}rm(function(){var u=a,f=Ju(n),p=[];e:{var g=$m.get(e);if(g!==void 0){var y=ac,x=e;switch(e){case"keypress":if(Ha(n)===0)break e;case"keydown":case"keyup":y=sv;break;case"focusin":x="focus",y=Vl;break;case"focusout":x="blur",y=Vl;break;case"beforeblur":case"afterblur":y=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=fv;break;case _m:case Tm:case Nm:y=Jg;break;case Om:y=pv;break;case"scroll":y=Qg;break;case"wheel":y=hv;break;case"copy":case"cut":case"paste":y=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Tf}var v=(t&4)!==0,S=!v&&e==="scroll",m=v?g!==null?g+"Capture":null:g;v=[];for(var c=u,h;c!==null;){h=c;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,m!==null&&(w=ki(c,m),w!=null&&v.push(_i(c,w,h)))),S)break;c=c.return}0<v.length&&(g=new y(g,x,null,n,f),p.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==As&&(x=n.relatedTarget||n.fromElement)&&(Nn(x)||x[Lt]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?Nn(x):null,x!==null&&(S=Kn(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(v=jf,w="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Tf,w="onPointerLeave",m="onPointerEnter",c="pointer"),S=y==null?g:ir(y),h=x==null?g:ir(x),g=new v(w,c+"leave",y,n,f),g.target=S,g.relatedTarget=h,w=null,Nn(f)===u&&(v=new v(m,c+"enter",x,n,f),v.target=h,v.relatedTarget=S,w=v),S=w,y&&x)t:{for(v=y,m=x,c=0,h=v;h;h=Zn(h))c++;for(h=0,w=m;w;w=Zn(w))h++;for(;0<c-h;)v=Zn(v),c--;for(;0<h-c;)m=Zn(m),h--;for(;c--;){if(v===m||m!==null&&v===m.alternate)break t;v=Zn(v),m=Zn(m)}v=null}else v=null;y!==null&&Df(p,g,y,v,!1),x!==null&&S!==null&&Df(p,S,x,v,!0)}}e:{if(g=u?ir(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=bv;else if($f(g))if(Sm)k=Pv;else{k=Cv;var E=Sv}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Ev);if(k&&(k=k(e,u))){bm(p,k,n,f);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Ts(g,"number",g.value)}switch(E=u?ir(u):window,e){case"focusin":($f(E)||E.contentEditable==="true")&&(nr=E,Us=u,fi=null);break;case"focusout":fi=Us=nr=null;break;case"mousedown":Bs=!0;break;case"contextmenu":case"mouseup":case"dragend":Bs=!1,If(p,n,f);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":If(p,n,f)}var b;if(lc)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else tr?wm(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(xm&&n.locale!=="ko"&&(tr||N!=="onCompositionStart"?N==="onCompositionEnd"&&tr&&(b=ym()):(nn=f,ic="value"in nn?nn.value:nn.textContent,tr=!0)),E=vo(u,N),0<E.length&&(N=new _f(N,e,null,n,f),p.push({event:N,listeners:E}),b?N.data=b:(b=km(n),b!==null&&(N.data=b)))),(b=vv?yv(e,n):xv(e,n))&&(u=vo(u,"onBeforeInput"),0<u.length&&(f=new _f("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=b))}zm(p,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ki(e,n),a!=null&&r.unshift(_i(e,a,i)),a=ki(e,t),a!=null&&r.push(_i(e,a,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Df(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ki(n,a),s!=null&&o.unshift(_i(n,s,l))):i||(s=ki(n,a),s!=null&&o.push(_i(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var zv=/\r\n?/g,Av=/\u0000|\uFFFD/g;function Uf(e){return(typeof e=="string"?e:""+e).replace(zv,`
`).replace(Av,"")}function ka(e,t,n){if(t=Uf(t),Uf(e)!==t&&n)throw Error(P(425))}function yo(){}var Ws=null,Vs=null;function Hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ys=typeof setTimeout=="function"?setTimeout:void 0,Rv=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,Lv=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(e){return Bf.resolve(null).then(e).catch(Iv)}:Ys;function Iv(e){setTimeout(function(){throw e})}function ql(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ci(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ci(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),bt="__reactFiber$"+Ur,Ti="__reactProps$"+Ur,Lt="__reactContainer$"+Ur,Gs="__reactEvents$"+Ur,Mv="__reactListeners$"+Ur,Fv="__reactHandles$"+Ur;function Nn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wf(e);e!==null;){if(n=e[bt])return n;e=Wf(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){return e=e[bt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Zo(e){return e[Ti]||null}var Qs=[],ar=-1;function Sn(e){return{current:e}}function Z(e){0>ar||(e.current=Qs[ar],Qs[ar]=null,ar--)}function G(e,t){ar++,Qs[ar]=e.current,e.current=t}var yn={},je=Sn(yn),Le=Sn(!1),Un=yn;function Cr(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ie(e){return e=e.childContextTypes,e!=null}function xo(){Z(Le),Z(je)}function Vf(e,t,n){if(je.current!==yn)throw Error(P(168));G(je,t),G(Le,n)}function Rm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Sg(e)||"Unknown",i));return re({},n,r)}function wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Un=je.current,G(je,e),G(Le,Le.current),!0}function Hf(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Rm(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,Z(Le),Z(je),G(je,e)):Z(Le),G(Le,n)}var Nt=null,qo=!1,Jl=!1;function Lm(e){Nt===null?Nt=[e]:Nt.push(e)}function Dv(e){qo=!0,Lm(e)}function Cn(){if(!Jl&&Nt!==null){Jl=!0;var e=0,t=H;try{var n=Nt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,qo=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),lm(ec,Cn),i}finally{H=t,Jl=!1}}return null}var or=[],lr=0,ko=null,bo=0,tt=[],nt=0,Bn=null,Ot=1,$t="";function _n(e,t){or[lr++]=bo,or[lr++]=ko,ko=e,bo=t}function Im(e,t,n){tt[nt++]=Ot,tt[nt++]=$t,tt[nt++]=Bn,Bn=e;var r=Ot;e=$t;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var a=32-pt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ot=1<<32-pt(t)+i|n<<i|r,$t=a+e}else Ot=1<<a|n<<i|r,$t=e}function uc(e){e.return!==null&&(_n(e,1),Im(e,1,0))}function cc(e){for(;e===ko;)ko=or[--lr],or[lr]=null,bo=or[--lr],or[lr]=null;for(;e===Bn;)Bn=tt[--nt],tt[nt]=null,$t=tt[--nt],tt[nt]=null,Ot=tt[--nt],tt[nt]=null}var Ye=null,He=null,ee=!1,ft=null;function Mm(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,He=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Ot,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,He=null,!0):!1;default:return!1}}function Ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xs(e){if(ee){var t=He;if(t){var n=t;if(!Yf(e,t)){if(Ks(e))throw Error(P(418));t=cn(n.nextSibling);var r=Ye;t&&Yf(e,t)?Mm(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ye=e)}}else{if(Ks(e))throw Error(P(418));e.flags=e.flags&-4097|2,ee=!1,Ye=e}}}function Gf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function ba(e){if(e!==Ye)return!1;if(!ee)return Gf(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hs(e.type,e.memoizedProps)),t&&(t=He)){if(Ks(e))throw Fm(),Error(P(418));for(;t;)Mm(e,t),t=cn(t.nextSibling)}if(Gf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ye?cn(e.stateNode.nextSibling):null;return!0}function Fm(){for(var e=He;e;)e=cn(e.nextSibling)}function Er(){He=Ye=null,ee=!1}function fc(e){ft===null?ft=[e]:ft.push(e)}var Uv=Bt.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var So=Sn(null),Co=null,sr=null,dc=null;function pc(){dc=sr=Co=null}function mc(e){var t=So.current;Z(So),e._currentValue=t}function Zs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Co=e,dc=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(dc!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(Co===null)throw Error(P(308));sr=e,Co.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var On=null;function hc(e){On===null?On=[e]:On.push(e)}function Dm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hc(t)):(n.next=i.next,i.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Um(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,It(e,n)}return i=r.interleaved,i===null?(t.next=t,hc(r)):(t.next=i.next,i.next=t),r.interleaved=t,It(e,n)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tc(e,n)}}function Qf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Eo(e,t,n,r){var i=e.updateQueue;Jt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(a!==null){var p=i.baseState;o=0,f=u=s=null,l=a;do{var g=l.lane,y=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,v=l;switch(g=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){p=x.call(y,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(y,p,g):x,g==null)break e;p=re({},p,g);break e;case 2:Jt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,s=p):f=f.next=y,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(s=p),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Vn|=o,e.lanes=o,e.memoizedState=p}}function Kf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Bm=new Dp.Component().refs;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=pn(e),a=zt(r,i);a.payload=t,n!=null&&(a.callback=n),t=fn(e,a,i),t!==null&&(mt(t,e,i,r),Ya(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=pn(e),a=zt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=fn(e,a,i),t!==null&&(mt(t,e,i,r),Ya(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=pn(e),i=zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,r),t!==null&&(mt(t,e,r,n),Ya(t,e,r))}};function Xf(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,a):!0}function Wm(e,t,n){var r=!1,i=yn,a=t.contextType;return typeof a=="object"&&a!==null?a=at(a):(i=Ie(t)?Un:je.current,r=t.contextTypes,a=(r=r!=null)?Cr(e,i):yn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Zf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function Js(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Bm,gc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=at(a):(a=Ie(t)?Un:je.current,i.context=Cr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(qs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Jo.enqueueReplaceState(i,i.state,null),Eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===Bm&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Sa(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qf(e){var t=e._init;return t(e._payload)}function Vm(e){function t(m,c){if(e){var h=m.deletions;h===null?(m.deletions=[c],m.flags|=16):h.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(m,c){return m=mn(m,c),m.index=0,m.sibling=null,m}function a(m,c,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<c?(m.flags|=2,c):h):(m.flags|=2,c)):(m.flags|=1048576,c)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,h,w){return c===null||c.tag!==6?(c=os(h,m.mode,w),c.return=m,c):(c=i(c,h),c.return=m,c)}function s(m,c,h,w){var k=h.type;return k===er?f(m,c,h.props.children,w,h.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qt&&qf(k)===c.type)?(w=i(c,h.props),w.ref=Zr(m,c,h),w.return=m,w):(w=qa(h.type,h.key,h.props,null,m.mode,w),w.ref=Zr(m,c,h),w.return=m,w)}function u(m,c,h,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=ls(h,m.mode,w),c.return=m,c):(c=i(c,h.children||[]),c.return=m,c)}function f(m,c,h,w,k){return c===null||c.tag!==7?(c=In(h,m.mode,w,k),c.return=m,c):(c=i(c,h),c.return=m,c)}function p(m,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=os(""+c,m.mode,h),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case da:return h=qa(c.type,c.key,c.props,null,m.mode,h),h.ref=Zr(m,null,c),h.return=m,h;case Jn:return c=ls(c,m.mode,h),c.return=m,c;case qt:var w=c._init;return p(m,w(c._payload),h)}if(ni(c)||Yr(c))return c=In(c,m.mode,h,null),c.return=m,c;Sa(m,c)}return null}function g(m,c,h,w){var k=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:l(m,c,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case da:return h.key===k?s(m,c,h,w):null;case Jn:return h.key===k?u(m,c,h,w):null;case qt:return k=h._init,g(m,c,k(h._payload),w)}if(ni(h)||Yr(h))return k!==null?null:f(m,c,h,w,null);Sa(m,h)}return null}function y(m,c,h,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(h)||null,l(c,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case da:return m=m.get(w.key===null?h:w.key)||null,s(c,m,w,k);case Jn:return m=m.get(w.key===null?h:w.key)||null,u(c,m,w,k);case qt:var E=w._init;return y(m,c,h,E(w._payload),k)}if(ni(w)||Yr(w))return m=m.get(h)||null,f(c,m,w,k,null);Sa(c,w)}return null}function x(m,c,h,w){for(var k=null,E=null,b=c,N=c=0,M=null;b!==null&&N<h.length;N++){b.index>N?(M=b,b=null):M=b.sibling;var L=g(m,b,h[N],w);if(L===null){b===null&&(b=M);break}e&&b&&L.alternate===null&&t(m,b),c=a(L,c,N),E===null?k=L:E.sibling=L,E=L,b=M}if(N===h.length)return n(m,b),ee&&_n(m,N),k;if(b===null){for(;N<h.length;N++)b=p(m,h[N],w),b!==null&&(c=a(b,c,N),E===null?k=b:E.sibling=b,E=b);return ee&&_n(m,N),k}for(b=r(m,b);N<h.length;N++)M=y(b,m,N,h[N],w),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?N:M.key),c=a(M,c,N),E===null?k=M:E.sibling=M,E=M);return e&&b.forEach(function(De){return t(m,De)}),ee&&_n(m,N),k}function v(m,c,h,w){var k=Yr(h);if(typeof k!="function")throw Error(P(150));if(h=k.call(h),h==null)throw Error(P(151));for(var E=k=null,b=c,N=c=0,M=null,L=h.next();b!==null&&!L.done;N++,L=h.next()){b.index>N?(M=b,b=null):M=b.sibling;var De=g(m,b,L.value,w);if(De===null){b===null&&(b=M);break}e&&b&&De.alternate===null&&t(m,b),c=a(De,c,N),E===null?k=De:E.sibling=De,E=De,b=M}if(L.done)return n(m,b),ee&&_n(m,N),k;if(b===null){for(;!L.done;N++,L=h.next())L=p(m,L.value,w),L!==null&&(c=a(L,c,N),E===null?k=L:E.sibling=L,E=L);return ee&&_n(m,N),k}for(b=r(m,b);!L.done;N++,L=h.next())L=y(b,m,N,L.value,w),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?N:L.key),c=a(L,c,N),E===null?k=L:E.sibling=L,E=L);return e&&b.forEach(function(En){return t(m,En)}),ee&&_n(m,N),k}function S(m,c,h,w){if(typeof h=="object"&&h!==null&&h.type===er&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case da:e:{for(var k=h.key,E=c;E!==null;){if(E.key===k){if(k=h.type,k===er){if(E.tag===7){n(m,E.sibling),c=i(E,h.props.children),c.return=m,m=c;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qt&&qf(k)===E.type){n(m,E.sibling),c=i(E,h.props),c.ref=Zr(m,E,h),c.return=m,m=c;break e}n(m,E);break}else t(m,E);E=E.sibling}h.type===er?(c=In(h.props.children,m.mode,w,h.key),c.return=m,m=c):(w=qa(h.type,h.key,h.props,null,m.mode,w),w.ref=Zr(m,c,h),w.return=m,m=w)}return o(m);case Jn:e:{for(E=h.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(m,c.sibling),c=i(c,h.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=ls(h,m.mode,w),c.return=m,m=c}return o(m);case qt:return E=h._init,S(m,c,E(h._payload),w)}if(ni(h))return x(m,c,h,w);if(Yr(h))return v(m,c,h,w);Sa(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(m,c.sibling),c=i(c,h),c.return=m,m=c):(n(m,c),c=os(h,m.mode,w),c.return=m,m=c),o(m)):n(m,c)}return S}var Pr=Vm(!0),Hm=Vm(!1),Zi={},Et=Sn(Zi),Ni=Sn(Zi),Oi=Sn(Zi);function $n(e){if(e===Zi)throw Error(P(174));return e}function vc(e,t){switch(G(Oi,t),G(Ni,e),G(Et,Zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Os(t,e)}Z(Et),G(Et,t)}function jr(){Z(Et),Z(Ni),Z(Oi)}function Ym(e){$n(Oi.current);var t=$n(Et.current),n=Os(t,e.type);t!==n&&(G(Ni,e),G(Et,n))}function yc(e){Ni.current===e&&(Z(Et),Z(Ni))}var te=Sn(0);function Po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var es=[];function xc(){for(var e=0;e<es.length;e++)es[e]._workInProgressVersionPrimary=null;es.length=0}var Ga=Bt.ReactCurrentDispatcher,ts=Bt.ReactCurrentBatchConfig,Wn=0,ne=null,de=null,he=null,jo=!1,di=!1,$i=0,Bv=0;function Se(){throw Error(P(321))}function wc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function kc(e,t,n,r,i,a){if(Wn=a,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ga.current=e===null||e.memoizedState===null?Yv:Gv,e=n(r,i),di){a=0;do{if(di=!1,$i=0,25<=a)throw Error(P(301));a+=1,he=de=null,t.updateQueue=null,Ga.current=Qv,e=n(r,i)}while(di)}if(Ga.current=_o,t=de!==null&&de.next!==null,Wn=0,he=de=ne=null,jo=!1,t)throw Error(P(300));return e}function bc(){var e=$i!==0;return $i=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ne.memoizedState=he=e:he=he.next=e,he}function ot(){if(de===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?ne.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(P(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?ne.memoizedState=he=e:he=he.next=e}return he}function zi(e,t){return typeof t=="function"?t(e):t}function ns(e){var t=ot(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=de,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var f=u.lane;if((Wn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=p,o=r):s=s.next=p,ne.lanes|=f,Vn|=f}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,gt(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ne.lanes|=a,Vn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rs(e){var t=ot(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);gt(a,t.memoizedState)||(Ae=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Gm(){}function Qm(e,t){var n=ne,r=ot(),i=t(),a=!gt(r.memoizedState,i);if(a&&(r.memoizedState=i,Ae=!0),r=r.queue,Sc(Zm.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Ai(9,Xm.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(P(349));Wn&30||Km(n,t,i)}return i}function Km(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xm(e,t,n,r){t.value=n,t.getSnapshot=r,qm(t)&&Jm(e)}function Zm(e,t,n){return n(function(){qm(t)&&Jm(e)})}function qm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Jm(e){var t=It(e,1);t!==null&&mt(t,e,1,-1)}function Jf(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},t.queue=e,e=e.dispatch=Hv.bind(null,ne,e),[t.memoizedState,e]}function Ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function eh(){return ot().memoizedState}function Qa(e,t,n,r){var i=yt();ne.flags|=e,i.memoizedState=Ai(1|t,n,void 0,r===void 0?null:r)}function el(e,t,n,r){var i=ot();r=r===void 0?null:r;var a=void 0;if(de!==null){var o=de.memoizedState;if(a=o.destroy,r!==null&&wc(r,o.deps)){i.memoizedState=Ai(t,n,a,r);return}}ne.flags|=e,i.memoizedState=Ai(1|t,n,a,r)}function ed(e,t){return Qa(8390656,8,e,t)}function Sc(e,t){return el(2048,8,e,t)}function th(e,t){return el(4,2,e,t)}function nh(e,t){return el(4,4,e,t)}function rh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ih(e,t,n){return n=n!=null?n.concat([e]):null,el(4,4,rh.bind(null,t,e),n)}function Cc(){}function ah(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function oh(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lh(e,t,n){return Wn&21?(gt(n,t)||(n=cm(),ne.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function Wv(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=ts.transition;ts.transition={};try{e(!1),t()}finally{H=n,ts.transition=r}}function sh(){return ot().memoizedState}function Vv(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uh(e))ch(t,n);else if(n=Dm(e,t,n,r),n!==null){var i=Ne();mt(n,e,r,i),fh(n,t,r)}}function Hv(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uh(e))ch(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,gt(l,o)){var s=t.interleaved;s===null?(i.next=i,hc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Dm(e,t,i,r),n!==null&&(i=Ne(),mt(n,e,r,i),fh(n,t,r))}}function uh(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function ch(e,t){di=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tc(e,n)}}var _o={readContext:at,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Yv={readContext:at,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:ed,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4194308,4,rh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qa(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vv.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Jf,useDebugValue:Cc,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Jf(!1),t=e[0];return e=Wv.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=yt();if(ee){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ve===null)throw Error(P(349));Wn&30||Km(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ed(Zm.bind(null,r,a,e),[e]),r.flags|=2048,Ai(9,Xm.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=yt(),t=ve.identifierPrefix;if(ee){var n=$t,r=Ot;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gv={readContext:at,useCallback:ah,useContext:at,useEffect:Sc,useImperativeHandle:ih,useInsertionEffect:th,useLayoutEffect:nh,useMemo:oh,useReducer:ns,useRef:eh,useState:function(){return ns(zi)},useDebugValue:Cc,useDeferredValue:function(e){var t=ot();return lh(t,de.memoizedState,e)},useTransition:function(){var e=ns(zi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:Qm,useId:sh,unstable_isNewReconciler:!1},Qv={readContext:at,useCallback:ah,useContext:at,useEffect:Sc,useImperativeHandle:ih,useInsertionEffect:th,useLayoutEffect:nh,useMemo:oh,useReducer:rs,useRef:eh,useState:function(){return rs(zi)},useDebugValue:Cc,useDeferredValue:function(e){var t=ot();return de===null?t.memoizedState=e:lh(t,de.memoizedState,e)},useTransition:function(){var e=rs(zi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:Qm,useId:sh,unstable_isNewReconciler:!1};function _r(e,t){try{var n="",r=t;do n+=bg(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function eu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kv=typeof WeakMap=="function"?WeakMap:Map;function dh(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){No||(No=!0,cu=r),eu(e,t)},n}function ph(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){eu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){eu(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function td(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=uy.bind(null,e,t,n),t.then(e,e))}function nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var Xv=Bt.ReactCurrentOwner,Ae=!1;function _e(e,t,n,r){t.child=e===null?Hm(t,null,n,r):Pr(t,e.child,n,r)}function id(e,t,n,r,i){n=n.render;var a=t.ref;return xr(t,i),r=kc(e,t,n,r,a,i),n=bc(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(ee&&n&&uc(t),t.flags|=1,_e(e,t,r,i),t.child)}function ad(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!$c(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,mh(e,t,a,r,i)):(e=qa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(o,r)&&e.ref===t.ref)return Mt(e,t,i)}return t.flags|=1,e=mn(a,r),e.ref=t.ref,e.return=t,t.child=e}function mh(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Pi(a,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,Mt(e,t,i)}return tu(e,t,n,r,i)}function hh(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(cr,Ve),Ve|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(cr,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,G(cr,Ve),Ve|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,G(cr,Ve),Ve|=r;return _e(e,t,i,n),t.child}function gh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tu(e,t,n,r,i){var a=Ie(n)?Un:je.current;return a=Cr(t,a),xr(t,i),n=kc(e,t,n,r,a,i),r=bc(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(ee&&r&&uc(t),t.flags|=1,_e(e,t,n,i),t.child)}function od(e,t,n,r,i){if(Ie(n)){var a=!0;wo(t)}else a=!1;if(xr(t,i),t.stateNode===null)Ka(e,t),Wm(t,n,r),Js(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Ie(n)?Un:je.current,u=Cr(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Zf(t,o,r,u),Jt=!1;var g=t.memoizedState;o.state=g,Eo(t,r,o,i),s=t.memoizedState,l!==r||g!==s||Le.current||Jt?(typeof f=="function"&&(qs(t,n,f,r),s=t.memoizedState),(l=Jt||Xf(t,n,l,r,g,s,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Um(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ut(t.type,l),o.props=u,p=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=at(s):(s=Ie(n)?Un:je.current,s=Cr(t,s));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==s)&&Zf(t,o,r,s),Jt=!1,g=t.memoizedState,o.state=g,Eo(t,r,o,i);var x=t.memoizedState;l!==p||g!==x||Le.current||Jt?(typeof y=="function"&&(qs(t,n,y,r),x=t.memoizedState),(u=Jt||Xf(t,n,u,r,g,x,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return nu(e,t,n,r,a,i)}function nu(e,t,n,r,i,a){gh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Hf(t,n,!1),Mt(e,t,a);r=t.stateNode,Xv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Pr(t,e.child,null,a),t.child=Pr(t,null,l,a)):_e(e,t,l,a),t.memoizedState=r.state,i&&Hf(t,n,!0),t.child}function vh(e){var t=e.stateNode;t.pendingContext?Vf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vf(e,t.context,!1),vc(e,t.containerInfo)}function ld(e,t,n,r,i){return Er(),fc(i),t.flags|=256,_e(e,t,n,r),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function yh(e,t,n){var r=t.pendingProps,i=te.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(te,i&1),e===null)return Xs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=rl(o,r,0,null),e=In(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=iu(n),t.memoizedState=ru,e):Ec(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Zv(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=mn(l,a):(a=In(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?iu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=ru,r}return a=e.child,e=a.sibling,r=mn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ec(e,t){return t=rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ca(e,t,n,r){return r!==null&&fc(r),Pr(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zv(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=is(Error(P(422))),Ca(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=rl({mode:"visible",children:r.children},i,0,null),a=In(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Pr(t,e.child,null,o),t.child.memoizedState=iu(o),t.memoizedState=ru,a);if(!(t.mode&1))return Ca(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(P(419)),r=is(a,r,void 0),Ca(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ae||l){if(r=ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,It(e,i),mt(r,e,i,-1))}return Oc(),r=is(Error(P(421))),Ca(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cy.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,He=cn(i.nextSibling),Ye=t,ee=!0,ft=null,e!==null&&(tt[nt++]=Ot,tt[nt++]=$t,tt[nt++]=Bn,Ot=e.id,$t=e.overflow,Bn=t),t=Ec(t,r.children),t.flags|=4096,t)}function sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zs(e.return,t,n)}function as(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function xh(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(_e(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sd(e,n,t);else if(e.tag===19)sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),as(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}as(t,!0,n,null,a);break;case"together":as(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ka(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qv(e,t,n){switch(t.tag){case 3:vh(t),Er();break;case 5:Ym(t);break;case 1:Ie(t.type)&&wo(t);break;case 4:vc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(So,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?yh(e,t,n):(G(te,te.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);G(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,hh(e,t,n)}return Mt(e,t,n)}var wh,au,kh,bh;wh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};au=function(){};kh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(Et.current);var a=null;switch(n){case"input":i=js(e,i),r=js(e,r),a=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),a=[];break;case"textarea":i=Ns(e,i),r=Ns(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yo)}$s(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Q("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};bh=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jv(e,t,n){var r=t.pendingProps;switch(cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ie(t.type)&&xo(),Ce(t),null;case 3:return r=t.stateNode,jr(),Z(Le),Z(je),xc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ba(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(pu(ft),ft=null))),au(e,t),Ce(t),null;case 5:yc(t);var i=$n(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)kh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ce(t),null}if(e=$n(Et.current),ba(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[bt]=t,r[Ti]=a,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)Q(ii[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":vf(r,a),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Q("invalid",r);break;case"textarea":xf(r,a),Q("invalid",r)}$s(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ka(r.textContent,l,e),i=["children",""+l]):xi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":pa(r),yf(r,a,!0);break;case"textarea":pa(r),wf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=yo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[bt]=t,e[Ti]=r,wh(e,t,!1,!1),t.stateNode=e;e:{switch(o=zs(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)Q(ii[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":vf(e,r),i=js(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),Q("invalid",e);break;case"textarea":xf(e,r),i=Ns(e,r),Q("invalid",e);break;default:i=r}$s(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?qp(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Xp(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wi(e,s):typeof s=="number"&&wi(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(xi.hasOwnProperty(a)?s!=null&&a==="onScroll"&&Q("scroll",e):s!=null&&Ku(e,a,s,o))}switch(n){case"input":pa(e),yf(e,r,!1);break;case"textarea":pa(e),wf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?hr(e,!!r.multiple,a,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)bh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=$n(Oi.current),$n(Et.current),ba(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(a=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:ka(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Ce(t),null;case 13:if(Z(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&He!==null&&t.mode&1&&!(t.flags&128))Fm(),Er(),t.flags|=98560,a=!1;else if(a=ba(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[bt]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),a=!1}else ft!==null&&(pu(ft),ft=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?pe===0&&(pe=3):Oc())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return jr(),au(e,t),e===null&&ji(t.stateNode.containerInfo),Ce(t),null;case 10:return mc(t.type._context),Ce(t),null;case 17:return Ie(t.type)&&xo(),Ce(t),null;case 19:if(Z(te),a=t.memoizedState,a===null)return Ce(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)qr(a,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Po(e),o!==null){for(t.flags|=128,qr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(te,te.current&1|2),t.child}e=e.sibling}a.tail!==null&&se()>Tr&&(t.flags|=128,r=!0,qr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Po(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ee)return Ce(t),null}else 2*se()-a.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,qr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,n=te.current,G(te,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Nc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function ey(e,t){switch(cc(t),t.tag){case 1:return Ie(t.type)&&xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),Z(Le),Z(je),xc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yc(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return jr(),null;case 10:return mc(t.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var Ea=!1,Pe=!1,ty=typeof WeakSet=="function"?WeakSet:Set,$=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function ou(e,t,n){try{n()}catch(r){ae(e,t,r)}}var ud=!1;function ny(e,t){if(Ws=ho,e=Pm(),sc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,p=e,g=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==a||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break t;if(g===n&&++u===i&&(l=o),g===a&&++f===r&&(s=o),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vs={focusedElem:e,selectionRange:n},ho=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,S=x.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:ut(t.type,v),S);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return x=ud,ud=!1,x}function pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ou(t,n,a)}i=i.next}while(i!==r)}}function tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function lu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sh(e){var t=e.alternate;t!==null&&(e.alternate=null,Sh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[Ti],delete t[Gs],delete t[Mv],delete t[Fv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ch(e){return e.tag===5||e.tag===3||e.tag===4}function cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ch(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function su(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yo));else if(r!==4&&(e=e.child,e!==null))for(su(e,t,n),e=e.sibling;e!==null;)su(e,t,n),e=e.sibling}function uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(uu(e,t,n),e=e.sibling;e!==null;)uu(e,t,n),e=e.sibling}var xe=null,ct=!1;function Gt(e,t,n){for(n=n.child;n!==null;)Eh(e,t,n),n=n.sibling}function Eh(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Go,n)}catch{}switch(n.tag){case 5:Pe||ur(n,t);case 6:var r=xe,i=ct;xe=null,Gt(e,t,n),xe=r,ct=i,xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?ql(e.parentNode,n):e.nodeType===1&&ql(e,n),Ci(e)):ql(xe,n.stateNode));break;case 4:r=xe,i=ct,xe=n.stateNode.containerInfo,ct=!0,Gt(e,t,n),xe=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&ou(n,t,o),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!Pe&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ae(n,t,l)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Gt(e,t,n),Pe=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function fd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ty),t.forEach(function(r){var i=fy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,ct=!1;break e;case 3:xe=l.stateNode.containerInfo,ct=!0;break e;case 4:xe=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(xe===null)throw Error(P(160));Eh(a,o,i),xe=null,ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ae(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ph(t,e),t=t.sibling}function Ph(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),vt(e),r&4){try{pi(3,e,e.return),tl(3,e)}catch(v){ae(e,e.return,v)}try{pi(5,e,e.return)}catch(v){ae(e,e.return,v)}}break;case 1:st(t,e),vt(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(st(t,e),vt(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var i=e.stateNode;try{wi(i,"")}catch(v){ae(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Gp(i,a),zs(l,o);var u=zs(l,a);for(o=0;o<s.length;o+=2){var f=s[o],p=s[o+1];f==="style"?qp(i,p):f==="dangerouslySetInnerHTML"?Xp(i,p):f==="children"?wi(i,p):Ku(i,f,p,u)}switch(l){case"input":_s(i,a);break;case"textarea":Qp(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?hr(i,!!a.multiple,y,!1):g!==!!a.multiple&&(a.defaultValue!=null?hr(i,!!a.multiple,a.defaultValue,!0):hr(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ti]=a}catch(v){ae(e,e.return,v)}}break;case 6:if(st(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){ae(e,e.return,v)}}break;case 3:if(st(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(v){ae(e,e.return,v)}break;case 4:st(t,e),vt(e);break;case 13:st(t,e),vt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(_c=se())),r&4&&fd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||f,st(t,e),Pe=u):st(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for($=e,f=e.child;f!==null;){for(p=$=f;$!==null;){switch(g=$,y=g.child,g.tag){case 0:case 11:case 14:case 15:pi(4,g,g.return);break;case 1:ur(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:ur(g,g.return);break;case 22:if(g.memoizedState!==null){pd(p);continue}}y!==null?(y.return=g,$=y):pd(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Zp("display",o))}catch(v){ae(e,e.return,v)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){ae(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:st(t,e),vt(e),r&4&&fd(e);break;case 21:break;default:st(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ch(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var a=cd(e);uu(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=cd(e);su(e,l,o);break;default:throw Error(P(161))}}catch(s){ae(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ry(e,t,n){$=e,jh(e)}function jh(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ea;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Pe;l=Ea;var u=Pe;if(Ea=o,(Pe=s)&&!u)for($=i;$!==null;)o=$,s=o.child,o.tag===22&&o.memoizedState!==null?md(i):s!==null?(s.return=o,$=s):md(i);for(;a!==null;)$=a,jh(a),a=a.sibling;$=i,Ea=l,Pe=u}dd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,$=a):dd(e)}}function dd(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Kf(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kf(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ci(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Pe||t.flags&512&&lu(t)}catch(g){ae(t,t.return,g)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function pd(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function md(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(s){ae(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ae(t,i,s)}}var a=t.return;try{lu(t)}catch(s){ae(t,a,s)}break;case 5:var o=t.return;try{lu(t)}catch(s){ae(t,o,s)}}}catch(s){ae(t,t.return,s)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var iy=Math.ceil,To=Bt.ReactCurrentDispatcher,Pc=Bt.ReactCurrentOwner,it=Bt.ReactCurrentBatchConfig,U=0,ve=null,fe=null,ke=0,Ve=0,cr=Sn(0),pe=0,Ri=null,Vn=0,nl=0,jc=0,mi=null,ze=null,_c=0,Tr=1/0,_t=null,No=!1,cu=null,dn=null,Pa=!1,rn=null,Oo=0,hi=0,fu=null,Xa=-1,Za=0;function Ne(){return U&6?se():Xa!==-1?Xa:Xa=se()}function pn(e){return e.mode&1?U&2&&ke!==0?ke&-ke:Uv.transition!==null?(Za===0&&(Za=cm()),Za):(e=H,e!==0||(e=window.event,e=e===void 0?16:vm(e.type)),e):1}function mt(e,t,n,r){if(50<hi)throw hi=0,fu=null,Error(P(185));Qi(e,n,r),(!(U&2)||e!==ve)&&(e===ve&&(!(U&2)&&(nl|=n),pe===4&&tn(e,ke)),Me(e,r),n===1&&U===0&&!(t.mode&1)&&(Tr=se()+500,qo&&Cn()))}function Me(e,t){var n=e.callbackNode;Ug(e,t);var r=mo(e,e===ve?ke:0);if(r===0)n!==null&&Sf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sf(n),t===1)e.tag===0?Dv(hd.bind(null,e)):Lm(hd.bind(null,e)),Lv(function(){!(U&6)&&Cn()}),n=null;else{switch(fm(r)){case 1:n=ec;break;case 4:n=sm;break;case 16:n=po;break;case 536870912:n=um;break;default:n=po}n=Rh(n,_h.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _h(e,t){if(Xa=-1,Za=0,U&6)throw Error(P(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=mo(e,e===ve?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$o(e,r);else{t=r;var i=U;U|=2;var a=Nh();(ve!==e||ke!==t)&&(_t=null,Tr=se()+500,Ln(e,t));do try{ly();break}catch(l){Th(e,l)}while(1);pc(),To.current=a,U=i,fe!==null?t=0:(ve=null,ke=0,t=pe)}if(t!==0){if(t===2&&(i=Ms(e),i!==0&&(r=i,t=du(e,i))),t===1)throw n=Ri,Ln(e,0),tn(e,r),Me(e,se()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ay(i)&&(t=$o(e,r),t===2&&(a=Ms(e),a!==0&&(r=a,t=du(e,a))),t===1))throw n=Ri,Ln(e,0),tn(e,r),Me(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Tn(e,ze,_t);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=_c+500-se(),10<t)){if(mo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ys(Tn.bind(null,e,ze,_t),t);break}Tn(e,ze,_t);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-pt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iy(r/1960))-r,10<r){e.timeoutHandle=Ys(Tn.bind(null,e,ze,_t),r);break}Tn(e,ze,_t);break;case 5:Tn(e,ze,_t);break;default:throw Error(P(329))}}}return Me(e,se()),e.callbackNode===n?_h.bind(null,e):null}function du(e,t){var n=mi;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=$o(e,t),e!==2&&(t=ze,ze=n,t!==null&&pu(t)),e}function pu(e){ze===null?ze=e:ze.push.apply(ze,e)}function ay(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!gt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~jc,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function hd(e){if(U&6)throw Error(P(327));wr();var t=mo(e,0);if(!(t&1))return Me(e,se()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=Ms(e);r!==0&&(t=r,n=du(e,r))}if(n===1)throw n=Ri,Ln(e,0),tn(e,t),Me(e,se()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,ze,_t),Me(e,se()),null}function Tc(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Tr=se()+500,qo&&Cn())}}function Hn(e){rn!==null&&rn.tag===0&&!(U&6)&&wr();var t=U;U|=1;var n=it.transition,r=H;try{if(it.transition=null,H=1,e)return e()}finally{H=r,it.transition=n,U=t,!(U&6)&&Cn()}}function Nc(){Ve=cr.current,Z(cr)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rv(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:jr(),Z(Le),Z(je),xc();break;case 5:yc(r);break;case 4:jr();break;case 13:Z(te);break;case 19:Z(te);break;case 10:mc(r.type._context);break;case 22:case 23:Nc()}n=n.return}if(ve=e,fe=e=mn(e.current,null),ke=Ve=t,pe=0,Ri=null,jc=nl=Vn=0,ze=mi=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}On=null}return e}function Th(e,t){do{var n=fe;try{if(pc(),Ga.current=_o,jo){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jo=!1}if(Wn=0,he=de=ne=null,di=!1,$i=0,Pc.current=null,n===null||n.return===null){pe=1,Ri=t,fe=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=ke,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=nd(o);if(y!==null){y.flags&=-257,rd(y,o,l,a,t),y.mode&1&&td(a,u,t),t=y,s=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(s),t.updateQueue=v}else x.add(s);break e}else{if(!(t&1)){td(a,u,t),Oc();break e}s=Error(P(426))}}else if(ee&&l.mode&1){var S=nd(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),rd(S,o,l,a,t),fc(_r(s,l));break e}}a=s=_r(s,l),pe!==4&&(pe=2),mi===null?mi=[a]:mi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=dh(a,s,t);Qf(a,m);break e;case 1:l=s;var c=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(dn===null||!dn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=ph(a,l,t);Qf(a,w);break e}}a=a.return}while(a!==null)}$h(n)}catch(k){t=k,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function Nh(){var e=To.current;return To.current=_o,e===null?_o:e}function Oc(){(pe===0||pe===3||pe===2)&&(pe=4),ve===null||!(Vn&268435455)&&!(nl&268435455)||tn(ve,ke)}function $o(e,t){var n=U;U|=2;var r=Nh();(ve!==e||ke!==t)&&(_t=null,Ln(e,t));do try{oy();break}catch(i){Th(e,i)}while(1);if(pc(),U=n,To.current=r,fe!==null)throw Error(P(261));return ve=null,ke=0,pe}function oy(){for(;fe!==null;)Oh(fe)}function ly(){for(;fe!==null&&!$g();)Oh(fe)}function Oh(e){var t=Ah(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?$h(e):fe=t,Pc.current=null}function $h(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ey(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,fe=null;return}}else if(n=Jv(n,t,Ve),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);pe===0&&(pe=5)}function Tn(e,t,n){var r=H,i=it.transition;try{it.transition=null,H=1,sy(e,t,n,r)}finally{it.transition=i,H=r}return null}function sy(e,t,n,r){do wr();while(rn!==null);if(U&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Bg(e,a),e===ve&&(fe=ve=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,Rh(po,function(){return wr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=it.transition,it.transition=null;var o=H;H=1;var l=U;U|=4,Pc.current=null,ny(e,n),Ph(n,e),_v(Vs),ho=!!Ws,Vs=Ws=null,e.current=n,ry(n),zg(),U=l,H=o,it.transition=a}else e.current=n;if(Pa&&(Pa=!1,rn=e,Oo=i),a=e.pendingLanes,a===0&&(dn=null),Lg(n.stateNode),Me(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(No)throw No=!1,e=cu,cu=null,e;return Oo&1&&e.tag!==0&&wr(),a=e.pendingLanes,a&1?e===fu?hi++:(hi=0,fu=e):hi=0,Cn(),null}function wr(){if(rn!==null){var e=fm(Oo),t=it.transition,n=H;try{if(it.transition=null,H=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Oo=0,U&6)throw Error(P(331));var i=U;for(U|=4,$=e.current;$!==null;){var a=$,o=a.child;if($.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for($=u;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:pi(8,f,a)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var g=f.sibling,y=f.return;if(Sh(f),f===u){$=null;break}if(g!==null){g.return=y,$=g;break}$=y}}}var x=a.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}$=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,$=o;else e:for(;$!==null;){if(a=$,a.flags&2048)switch(a.tag){case 0:case 11:case 15:pi(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,$=m;break e}$=a.return}}var c=e.current;for($=c;$!==null;){o=$;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,$=h;else e:for(o=c;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:tl(9,l)}}catch(k){ae(l,l.return,k)}if(l===o){$=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,$=w;break e}$=l.return}}if(U=i,Cn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Go,e)}catch{}r=!0}return r}finally{H=n,it.transition=t}}return!1}function gd(e,t,n){t=_r(n,t),t=dh(e,t,1),e=fn(e,t,1),t=Ne(),e!==null&&(Qi(e,1,t),Me(e,t))}function ae(e,t,n){if(e.tag===3)gd(e,e,n);else for(;t!==null;){if(t.tag===3){gd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=_r(n,e),e=ph(t,e,1),t=fn(t,e,1),e=Ne(),t!==null&&(Qi(t,1,e),Me(t,e));break}}t=t.return}}function uy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ke&n)===n&&(pe===4||pe===3&&(ke&130023424)===ke&&500>se()-_c?Ln(e,0):jc|=n),Me(e,t)}function zh(e,t){t===0&&(e.mode&1?(t=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):t=1);var n=Ne();e=It(e,t),e!==null&&(Qi(e,t,n),Me(e,n))}function cy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zh(e,n)}function fy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),zh(e,n)}var Ah;Ah=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,qv(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,ee&&t.flags&1048576&&Im(t,bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ka(e,t),e=t.pendingProps;var i=Cr(t,je.current);xr(t,n),i=kc(null,t,r,e,i,n);var a=bc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(a=!0,wo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gc(t),i.updater=Jo,t.stateNode=i,i._reactInternals=t,Js(t,r,e,n),t=nu(null,t,r,!0,a,n)):(t.tag=0,ee&&a&&uc(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ka(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=py(r),e=ut(r,e),i){case 0:t=tu(null,t,r,e,n);break e;case 1:t=od(null,t,r,e,n);break e;case 11:t=id(null,t,r,e,n);break e;case 14:t=ad(null,t,r,ut(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),tu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),od(e,t,r,i,n);case 3:e:{if(vh(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Um(e,t),Eo(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=_r(Error(P(423)),t),t=ld(e,t,r,n,i);break e}else if(r!==i){i=_r(Error(P(424)),t),t=ld(e,t,r,n,i);break e}else for(He=cn(t.stateNode.containerInfo.firstChild),Ye=t,ee=!0,ft=null,n=Hm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===i){t=Mt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Ym(t),e===null&&Xs(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Hs(r,i)?o=null:a!==null&&Hs(r,a)&&(t.flags|=32),gh(e,t),_e(e,t,o,n),t.child;case 6:return e===null&&Xs(t),null;case 13:return yh(e,t,n);case 4:return vc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),id(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,G(So,r._currentValue),r._currentValue=o,a!==null)if(gt(a.value,o)){if(a.children===i.children&&!Le.current){t=Mt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=zt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Zs(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(P(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Zs(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=at(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),ad(e,t,r,i,n);case 15:return mh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ka(e,t),t.tag=1,Ie(r)?(e=!0,wo(t)):e=!1,xr(t,n),Wm(t,r,i),Js(t,r,i,n),nu(null,t,r,!0,e,n);case 19:return xh(e,t,n);case 22:return hh(e,t,n)}throw Error(P(156,t.tag))};function Rh(e,t){return lm(e,t)}function dy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new dy(e,t,n,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function py(e){if(typeof e=="function")return $c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zu)return 11;if(e===qu)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qa(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")$c(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case er:return In(n.children,i,a,t);case Xu:o=8,i|=8;break;case Ss:return e=rt(12,n,t,i|2),e.elementType=Ss,e.lanes=a,e;case Cs:return e=rt(13,n,t,i),e.elementType=Cs,e.lanes=a,e;case Es:return e=rt(19,n,t,i),e.elementType=Es,e.lanes=a,e;case Vp:return rl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bp:o=10;break e;case Wp:o=9;break e;case Zu:o=11;break e;case qu:o=14;break e;case qt:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=rt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function In(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function rl(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Vp,e.lanes=n,e.stateNode={isHidden:!1},e}function os(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function ls(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function my(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zc(e,t,n,r,i,a,o,l,s){return e=new my(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=rt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(a),e}function hy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lh(e){if(!e)return yn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Rm(e,n,t)}return t}function Ih(e,t,n,r,i,a,o,l,s){return e=zc(n,r,!0,e,i,a,o,l,s),e.context=Lh(null),n=e.current,r=Ne(),i=pn(n),a=zt(r,i),a.callback=t??null,fn(n,a,i),e.current.lanes=i,Qi(e,i,r),Me(e,r),e}function il(e,t,n,r){var i=t.current,a=Ne(),o=pn(i);return n=Lh(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(i,t,o),e!==null&&(mt(e,i,o,a),Ya(e,i,o)),o}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ac(e,t){vd(e,t),(e=e.alternate)&&vd(e,t)}function gy(){return null}var Mh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rc(e){this._internalRoot=e}al.prototype.render=Rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));il(e,t,null,null)};al.prototype.unmount=Rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){il(null,e,null,null)}),t[Lt]=null}};function al(e){this._internalRoot=e}al.prototype.unstable_scheduleHydration=function(e){if(e){var t=mm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&gm(e)}};function Lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yd(){}function vy(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=zo(o);a.call(u)}}var o=Ih(t,r,e,0,null,!1,!1,"",yd);return e._reactRootContainer=o,e[Lt]=o.current,ji(e.nodeType===8?e.parentNode:e),Hn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=zo(s);l.call(u)}}var s=zc(e,0,!1,null,null,!1,!1,"",yd);return e._reactRootContainer=s,e[Lt]=s.current,ji(e.nodeType===8?e.parentNode:e),Hn(function(){il(t,s,n,r)}),s}function ll(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=zo(o);l.call(s)}}il(t,o,e,i)}else o=vy(n,t,e,i,r);return zo(o)}dm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ri(t.pendingLanes);n!==0&&(tc(t,n|1),Me(t,se()),!(U&6)&&(Tr=se()+500,Cn()))}break;case 13:Hn(function(){var r=It(e,1);if(r!==null){var i=Ne();mt(r,e,1,i)}}),Ac(e,1)}};nc=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=Ne();mt(t,e,134217728,n)}Ac(e,134217728)}};pm=function(e){if(e.tag===13){var t=pn(e),n=It(e,t);if(n!==null){var r=Ne();mt(n,e,t,r)}Ac(e,t)}};mm=function(){return H};hm=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Rs=function(e,t,n){switch(t){case"input":if(_s(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zo(r);if(!i)throw Error(P(90));Yp(r),_s(r,i)}}}break;case"textarea":Qp(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};tm=Tc;nm=Hn;var yy={usingClientEntryPoint:!1,Events:[Xi,ir,Zo,Jp,em,Tc]},Jr={findFiberByHostInstance:Nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xy={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=am(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||gy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{Go=ja.inject(xy),Ct=ja}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(t))throw Error(P(200));return hy(e,t,null,n)};Ke.createRoot=function(e,t){if(!Lc(e))throw Error(P(299));var n=!1,r="",i=Mh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zc(e,1,!1,null,null,n,!1,r,i),e[Lt]=t.current,ji(e.nodeType===8?e.parentNode:e),new Rc(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=am(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return Hn(e)};Ke.hydrate=function(e,t,n){if(!ol(t))throw Error(P(200));return ll(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Lc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Mh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ih(t,null,e,1,n??null,i,!1,a,o),e[Lt]=t.current,ji(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new al(t)};Ke.render=function(e,t,n){if(!ol(t))throw Error(P(200));return ll(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!ol(e))throw Error(P(40));return e._reactRootContainer?(Hn(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Tc;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ol(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return ll(e,t,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function Fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fh)}catch(e){console.error(e)}}Fh(),Ip.exports=Ke;var wy=Ip.exports,xd=wy;ks.createRoot=xd.createRoot,ks.hydrateRoot=xd.hydrateRoot;function mu(){return mu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mu.apply(this,arguments)}function Dh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ky=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,by=Dh(function(e){return ky.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Sy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Cy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ey=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Cy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Sy(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ee="-ms-",Ao="-moz-",B="-webkit-",Uh="comm",Ic="rule",Mc="decl",Py="@import",Bh="@keyframes",jy="@layer",_y=Math.abs,sl=String.fromCharCode,Ty=Object.assign;function Ny(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function Wh(e){return e.trim()}function Oy(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function hu(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function Li(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function Fc(e){return e.length}function _a(e,t){return t.push(e),e}function $y(e,t){return e.map(t).join("")}var ul=1,Nr=1,Vh=0,Fe=0,ue=0,Br="";function cl(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ul,column:Nr,length:o,return:""}}function ei(e,t){return Ty(cl("",null,null,"",null,null,0),e,{length:-e.length},t)}function zy(){return ue}function Ay(){return ue=Fe>0?we(Br,--Fe):0,Nr--,ue===10&&(Nr=1,ul--),ue}function Ge(){return ue=Fe<Vh?we(Br,Fe++):0,Nr++,ue===10&&(Nr=1,ul++),ue}function Pt(){return we(Br,Fe)}function Ja(){return Fe}function qi(e,t){return Li(Br,e,t)}function Ii(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hh(e){return ul=Nr=1,Vh=xt(Br=e),Fe=0,[]}function Yh(e){return Br="",e}function eo(e){return Wh(qi(Fe-1,gu(e===91?e+2:e===40?e+1:e)))}function Ry(e){for(;(ue=Pt())&&ue<33;)Ge();return Ii(e)>2||Ii(ue)>3?"":" "}function Ly(e,t){for(;--t&&Ge()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return qi(e,Ja()+(t<6&&Pt()==32&&Ge()==32))}function gu(e){for(;Ge();)switch(ue){case e:return Fe;case 34:case 39:e!==34&&e!==39&&gu(ue);break;case 40:e===41&&gu(e);break;case 92:Ge();break}return Fe}function Iy(e,t){for(;Ge()&&e+ue!==47+10;)if(e+ue===42+42&&Pt()===47)break;return"/*"+qi(t,Fe-1)+"*"+sl(e===47?e:Ge())}function My(e){for(;!Ii(Pt());)Ge();return qi(e,Fe)}function Fy(e){return Yh(to("",null,null,null,[""],e=Hh(e),0,[0],e))}function to(e,t,n,r,i,a,o,l,s){for(var u=0,f=0,p=o,g=0,y=0,x=0,v=1,S=1,m=1,c=0,h="",w=i,k=a,E=r,b=h;S;)switch(x=c,c=Ge()){case 40:if(x!=108&&we(b,p-1)==58){hu(b+=W(eo(c),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:b+=eo(c);break;case 9:case 10:case 13:case 32:b+=Ry(x);break;case 92:b+=Ly(Ja()-1,7);continue;case 47:switch(Pt()){case 42:case 47:_a(Dy(Iy(Ge(),Ja()),t,n),s);break;default:b+="/"}break;case 123*v:l[u++]=xt(b)*m;case 125*v:case 59:case 0:switch(c){case 0:case 125:S=0;case 59+f:m==-1&&(b=W(b,/\f/g,"")),y>0&&xt(b)-p&&_a(y>32?kd(b+";",r,n,p-1):kd(W(b," ","")+";",r,n,p-2),s);break;case 59:b+=";";default:if(_a(E=wd(b,t,n,u,f,i,l,h,w=[],k=[],p),a),c===123)if(f===0)to(b,t,E,E,w,a,p,l,k);else switch(g===99&&we(b,3)===110?100:g){case 100:case 108:case 109:case 115:to(e,E,E,r&&_a(wd(e,E,E,0,0,i,l,h,i,w=[],p),k),i,k,p,l,r?w:k);break;default:to(b,E,E,E,[""],k,0,l,k)}}u=f=y=0,v=m=1,h=b="",p=o;break;case 58:p=1+xt(b),y=x;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&Ay()==125)continue}switch(b+=sl(c),c*v){case 38:m=f>0?1:(b+="\f",-1);break;case 44:l[u++]=(xt(b)-1)*m,m=1;break;case 64:Pt()===45&&(b+=eo(Ge())),g=Pt(),f=p=xt(h=b+=My(Ja())),c++;break;case 45:x===45&&xt(b)==2&&(v=0)}}return a}function wd(e,t,n,r,i,a,o,l,s,u,f){for(var p=i-1,g=i===0?a:[""],y=Fc(g),x=0,v=0,S=0;x<r;++x)for(var m=0,c=Li(e,p+1,p=_y(v=o[x])),h=e;m<y;++m)(h=Wh(v>0?g[m]+" "+c:W(c,/&\f/g,g[m])))&&(s[S++]=h);return cl(e,t,n,i===0?Ic:l,s,u,f)}function Dy(e,t,n){return cl(e,t,n,Uh,sl(zy()),Li(e,2,-2),0)}function kd(e,t,n,r){return cl(e,t,n,Mc,Li(e,0,r),Li(e,r+1,-1),r)}function kr(e,t){for(var n="",r=Fc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Uy(e,t,n,r){switch(e.type){case jy:if(e.children.length)break;case Py:case Mc:return e.return=e.return||e.value;case Uh:return"";case Bh:return e.return=e.value+"{"+kr(e.children,r)+"}";case Ic:e.value=e.props.join(",")}return xt(n=kr(e.children,r))?e.return=e.value+"{"+n+"}":""}function By(e){var t=Fc(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function Wy(e){return function(t){t.root||(t=t.return)&&e(t)}}var Vy=function(t,n,r){for(var i=0,a=0;i=a,a=Pt(),i===38&&a===12&&(n[r]=1),!Ii(a);)Ge();return qi(t,Fe)},Hy=function(t,n){var r=-1,i=44;do switch(Ii(i)){case 0:i===38&&Pt()===12&&(n[r]=1),t[r]+=Vy(Fe-1,n,r);break;case 2:t[r]+=eo(i);break;case 4:if(i===44){t[++r]=Pt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=sl(i)}while(i=Ge());return t},Yy=function(t,n){return Yh(Hy(Hh(t),n))},bd=new WeakMap,Gy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!bd.get(r))&&!i){bd.set(t,!0);for(var a=[],o=Yy(n,a),l=r.props,s=0,u=0;s<o.length;s++)for(var f=0;f<l.length;f++,u++)t.props[u]=a[s]?o[s].replace(/&\f/g,l[f]):l[f]+" "+o[s]}}},Qy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Gh(e,t){switch(Ny(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Ao+e+Ee+e+e;case 6828:case 4268:return B+e+Ee+e+e;case 6165:return B+e+Ee+"flex-"+e+e;case 5187:return B+e+W(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+Ee+"flex-$1$2")+e;case 5443:return B+e+Ee+"flex-item-"+W(e,/flex-|-self/,"")+e;case 4675:return B+e+Ee+"flex-line-pack"+W(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+Ee+W(e,"shrink","negative")+e;case 5292:return B+e+Ee+W(e,"basis","preferred-size")+e;case 6060:return B+"box-"+W(e,"-grow","")+B+e+Ee+W(e,"grow","positive")+e;case 4554:return B+W(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Ao+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~hu(e,"stretch")?Gh(W(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,xt(e)-3-(~hu(e,"!important")&&10))){case 107:return W(e,":",":"+B)+e;case 101:return W(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(we(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+Ee+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+Ee+e+e}return e}var Ky=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Mc:t.return=Gh(t.value,t.length);break;case Bh:return kr([ei(t,{value:W(t.value,"@","@"+B)})],i);case Ic:if(t.length)return $y(t.props,function(a){switch(Oy(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return kr([ei(t,{props:[W(a,/:(read-\w+)/,":"+Ao+"$1")]})],i);case"::placeholder":return kr([ei(t,{props:[W(a,/:(plac\w+)/,":"+B+"input-$1")]}),ei(t,{props:[W(a,/:(plac\w+)/,":"+Ao+"$1")]}),ei(t,{props:[W(a,/:(plac\w+)/,Ee+"input-$1")]})],i)}return""})}},Xy=[Ky],Zy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var S=v.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||Xy,a={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var S=v.getAttribute("data-emotion").split(" "),m=1;m<S.length;m++)a[S[m]]=!0;l.push(v)});var s,u=[Gy,Qy];{var f,p=[Uy,Wy(function(v){f.insert(v)})],g=By(u.concat(i,p)),y=function(S){return kr(Fy(S),g)};s=function(S,m,c,h){f=c,y(S?S+"{"+m.styles+"}":m.styles),h&&(x.inserted[m.name]=!0)}}var x={key:n,sheet:new Ey({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:s};return x.sheet.hydrate(l),x},Qh={exports:{}},Y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=typeof Symbol=="function"&&Symbol.for,Dc=ye?Symbol.for("react.element"):60103,Uc=ye?Symbol.for("react.portal"):60106,fl=ye?Symbol.for("react.fragment"):60107,dl=ye?Symbol.for("react.strict_mode"):60108,pl=ye?Symbol.for("react.profiler"):60114,ml=ye?Symbol.for("react.provider"):60109,hl=ye?Symbol.for("react.context"):60110,Bc=ye?Symbol.for("react.async_mode"):60111,gl=ye?Symbol.for("react.concurrent_mode"):60111,vl=ye?Symbol.for("react.forward_ref"):60112,yl=ye?Symbol.for("react.suspense"):60113,qy=ye?Symbol.for("react.suspense_list"):60120,xl=ye?Symbol.for("react.memo"):60115,wl=ye?Symbol.for("react.lazy"):60116,Jy=ye?Symbol.for("react.block"):60121,ex=ye?Symbol.for("react.fundamental"):60117,tx=ye?Symbol.for("react.responder"):60118,nx=ye?Symbol.for("react.scope"):60119;function Ze(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dc:switch(e=e.type,e){case Bc:case gl:case fl:case pl:case dl:case yl:return e;default:switch(e=e&&e.$$typeof,e){case hl:case vl:case wl:case xl:case ml:return e;default:return t}}case Uc:return t}}}function Kh(e){return Ze(e)===gl}Y.AsyncMode=Bc;Y.ConcurrentMode=gl;Y.ContextConsumer=hl;Y.ContextProvider=ml;Y.Element=Dc;Y.ForwardRef=vl;Y.Fragment=fl;Y.Lazy=wl;Y.Memo=xl;Y.Portal=Uc;Y.Profiler=pl;Y.StrictMode=dl;Y.Suspense=yl;Y.isAsyncMode=function(e){return Kh(e)||Ze(e)===Bc};Y.isConcurrentMode=Kh;Y.isContextConsumer=function(e){return Ze(e)===hl};Y.isContextProvider=function(e){return Ze(e)===ml};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dc};Y.isForwardRef=function(e){return Ze(e)===vl};Y.isFragment=function(e){return Ze(e)===fl};Y.isLazy=function(e){return Ze(e)===wl};Y.isMemo=function(e){return Ze(e)===xl};Y.isPortal=function(e){return Ze(e)===Uc};Y.isProfiler=function(e){return Ze(e)===pl};Y.isStrictMode=function(e){return Ze(e)===dl};Y.isSuspense=function(e){return Ze(e)===yl};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fl||e===gl||e===pl||e===dl||e===yl||e===qy||typeof e=="object"&&e!==null&&(e.$$typeof===wl||e.$$typeof===xl||e.$$typeof===ml||e.$$typeof===hl||e.$$typeof===vl||e.$$typeof===ex||e.$$typeof===tx||e.$$typeof===nx||e.$$typeof===Jy)};Y.typeOf=Ze;Qh.exports=Y;var rx=Qh.exports,Xh=rx,ix={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ax={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zh={};Zh[Xh.ForwardRef]=ix;Zh[Xh.Memo]=ax;var ox=!0;function lx(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var qh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||ox===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},sx=function(t,n,r){qh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function ux(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Jh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cx=/[A-Z]|^ms/g,fx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,e0=function(t){return t.charCodeAt(1)===45},Sd=function(t){return t!=null&&typeof t!="boolean"},ss=Dh(function(e){return e0(e)?e:e.replace(cx,"-$&").toLowerCase()}),Cd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(fx,function(r,i,a){return wt={name:i,styles:a,next:wt},i})}return Jh[t]!==1&&!e0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Mi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return wt={name:n.name,styles:n.styles,next:wt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)wt={name:r.name,styles:r.styles,next:wt},r=r.next;var i=n.styles+";";return i}return dx(e,t,n)}case"function":{if(e!==void 0){var a=wt,o=n(e);return wt=a,Mi(e,t,o)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function dx(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Mi(e,t,n[i])+";";else for(var a in n){var o=n[a];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=a+"{"+t[o]+"}":Sd(o)&&(r+=ss(a)+":"+Cd(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)Sd(o[l])&&(r+=ss(a)+":"+Cd(a,o[l])+";");else{var s=Mi(e,t,o);switch(a){case"animation":case"animationName":{r+=ss(a)+":"+s+";";break}default:r+=a+"{"+s+"}"}}}return r}var Ed=/label:\s*([^\s;\n{]+)\s*(;|$)/g,wt,t0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,a="";wt=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,a+=Mi(r,n,o)):a+=o[0];for(var l=1;l<t.length;l++)a+=Mi(r,n,t[l]),i&&(a+=o[l]);Ed.lastIndex=0;for(var s="",u;(u=Ed.exec(a))!==null;)s+="-"+u[1];var f=ux(a)+s;return{name:f,styles:a,next:wt}},px=function(t){return t()},mx=ws["useInsertionEffect"]?ws["useInsertionEffect"]:!1,hx=mx||px,n0=C.createContext(typeof HTMLElement<"u"?Zy({key:"css"}):null);n0.Provider;var gx=function(t){return C.forwardRef(function(n,r){var i=C.useContext(n0);return t(n,i,r)})},vx=C.createContext({});function yx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t0(t)}var Wc=function(){var t=yx.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},xx=by,wx=function(t){return t!=="theme"},Pd=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?xx:wx},jd=function(t,n,r){var i;if(n){var a=n.shouldForwardProp;i=t.__emotion_forwardProp&&a?function(o){return t.__emotion_forwardProp(o)&&a(o)}:a}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},kx=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return qh(n,r,i),hx(function(){return sx(n,r,i)}),null},bx=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var l=jd(t,n,r),s=l||Pd(i),u=!s("as");return function(){var f=arguments,p=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&p.push("label:"+a+";"),f[0]==null||f[0].raw===void 0)p.push.apply(p,f);else{p.push(f[0][0]);for(var g=f.length,y=1;y<g;y++)p.push(f[y],f[0][y])}var x=gx(function(v,S,m){var c=u&&v.as||i,h="",w=[],k=v;if(v.theme==null){k={};for(var E in v)k[E]=v[E];k.theme=C.useContext(vx)}typeof v.className=="string"?h=lx(S.registered,w,v.className):v.className!=null&&(h=v.className+" ");var b=t0(p.concat(w),S.registered,k);h+=S.key+"-"+b.name,o!==void 0&&(h+=" "+o);var N=u&&l===void 0?Pd(c):s,M={};for(var L in v)u&&L==="as"||N(L)&&(M[L]=v[L]);return M.className=h,M.ref=m,C.createElement(C.Fragment,null,C.createElement(kx,{cache:S,serialized:b,isStringTag:typeof c=="string"}),C.createElement(c,M))});return x.displayName=a!==void 0?a:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=p,x.__emotion_forwardProp=l,Object.defineProperty(x,"toString",{value:function(){return"."+o}}),x.withComponent=function(v,S){return e(v,mu({},n,S,{shouldForwardProp:jd(x,S,!0)})).apply(void 0,p)},x}},Sx=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],F=bx.bind();Sx.forEach(function(e){F[e]=F(e)});const Cx=Wc`
  100% {
    transform: rotate(360deg);
  }
`,Ex=Wc`
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
`,Px=Wc`
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
`,jx=F.div`
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
`,_x=F.svg`
  animation: ${Cx} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`,Tx=F.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${Ex} 1.5s ease-in-out infinite, ${Px} 6s ease-in-out infinite;
  stroke-linecap: round;
`,Nx=()=>d.jsx(jx,{children:d.jsx(_x,{viewBox:"25 25 50 50",children:d.jsx(Tx,{cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})})});/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fi.apply(this,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const _d="popstate";function Ox(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return vu("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ro(i)}return zx(t,n,null,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $x(){return Math.random().toString(36).substr(2,8)}function Td(e,t){return{usr:e.state,key:e.key,idx:t}}function vu(e,t,n,r){return n===void 0&&(n=null),Fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wr(t):t,{state:n,key:t&&t.key||r||$x()})}function Ro(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=an.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(Fi({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=an.Pop;let S=f(),m=S==null?null:S-u;u=S,s&&s({action:l,location:v.location,delta:m})}function g(S,m){l=an.Push;let c=vu(v.location,S,m);n&&n(c,S),u=f()+1;let h=Td(c,u),w=v.createHref(c);try{o.pushState(h,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}a&&s&&s({action:l,location:v.location,delta:1})}function y(S,m){l=an.Replace;let c=vu(v.location,S,m);n&&n(c,S),u=f();let h=Td(c,u),w=v.createHref(c);o.replaceState(h,"",w),a&&s&&s({action:l,location:v.location,delta:0})}function x(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof S=="string"?S:Ro(S);return le(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let v={get action(){return l},get location(){return e(i,o)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(_d,p),s=S,()=>{i.removeEventListener(_d,p),s=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let m=x(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(S){return o.go(S)}};return v}var Nd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Nd||(Nd={}));function Ax(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Wr(t):t,i=Di(r.pathname||"/",n);if(i==null)return null;let a=r0(e);Rx(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=Vx(a[l],Yx(i));return o}function r0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=hn([r,s.relativePath]),f=n.concat(s);a.children&&a.children.length>0&&(le(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),r0(a.children,t,f,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Bx(u,a.index),routesMeta:f})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of i0(a.path))i(a,o,s)}),t}function i0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=i0(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Rx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Wx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lx=/^:\w+$/,Ix=3,Mx=2,Fx=1,Dx=10,Ux=-2,Od=e=>e==="*";function Bx(e,t){let n=e.split("/"),r=n.length;return n.some(Od)&&(r+=Ux),t&&(r+=Mx),n.filter(i=>!Od(i)).reduce((i,a)=>i+(Lx.test(a)?Ix:a===""?Fx:Dx),r)}function Wx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Vx(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=yu({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let p=l.route;a.push({params:r,pathname:hn([i,f.pathname]),pathnameBase:Xx(hn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=hn([i,f.pathnameBase]))}return a}function yu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Hx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,p)=>{if(f==="*"){let g=l[p]||"";o=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}return u[f]=Gx(l[p]||"",f),u},{}),pathname:a,pathnameBase:o,pattern:e}}function Hx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Yx(e){try{return decodeURI(e)}catch(t){return Vc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Gx(e,t){try{return decodeURIComponent(e)}catch(n){return Vc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Di(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Qx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Wr(e):e;return{pathname:n?n.startsWith("/")?n:Kx(n,t):t,search:Zx(r),hash:qx(i)}}function Kx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function us(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function a0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function o0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Wr(e):(i=Fi({},e),le(!i.pathname||!i.pathname.includes("?"),us("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),us("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),us("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(r||o==null)l=n;else{let p=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?t[p]:"/"}let s=Qx(i,l),u=o&&o!=="/"&&o.endsWith("/"),f=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),Xx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const l0=["post","put","patch","delete"];new Set(l0);const e2=["get",...l0];new Set(e2);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lo.apply(this,arguments)}const kl=C.createContext(null),s0=C.createContext(null),Xn=C.createContext(null),bl=C.createContext(null),Wt=C.createContext({outlet:null,matches:[],isDataRoute:!1}),u0=C.createContext(null);function t2(e,t){let{relative:n}=t===void 0?{}:t;Ji()||le(!1);let{basename:r,navigator:i}=C.useContext(Xn),{hash:a,pathname:o,search:l}=Cl(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:hn([r,o])),i.createHref({pathname:s,search:l,hash:a})}function Ji(){return C.useContext(bl)!=null}function ea(){return Ji()||le(!1),C.useContext(bl).location}function c0(e){C.useContext(Xn).static||C.useLayoutEffect(e)}function Sl(){let{isDataRoute:e}=C.useContext(Wt);return e?g2():n2()}function n2(){Ji()||le(!1);let e=C.useContext(kl),{basename:t,navigator:n}=C.useContext(Xn),{matches:r}=C.useContext(Wt),{pathname:i}=ea(),a=JSON.stringify(a0(r).map(s=>s.pathnameBase)),o=C.useRef(!1);return c0(()=>{o.current=!0}),C.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){n.go(s);return}let f=o0(s,JSON.parse(a),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:hn([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,a,i,e])}const r2=C.createContext(null);function i2(e){let t=C.useContext(Wt).outlet;return t&&C.createElement(r2.Provider,{value:e},t)}function f0(){let{matches:e}=C.useContext(Wt),t=e[e.length-1];return t?t.params:{}}function Cl(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(Wt),{pathname:i}=ea(),a=JSON.stringify(a0(r).map(o=>o.pathnameBase));return C.useMemo(()=>o0(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function a2(e,t){return o2(e,t)}function o2(e,t,n){Ji()||le(!1);let{navigator:r}=C.useContext(Xn),{matches:i}=C.useContext(Wt),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=ea(),u;if(t){var f;let v=typeof t=="string"?Wr(t):t;l==="/"||(f=v.pathname)!=null&&f.startsWith(l)||le(!1),u=v}else u=s;let p=u.pathname||"/",g=l==="/"?p:p.slice(l.length)||"/",y=Ax(e,{pathname:g}),x=f2(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:hn([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:hn([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&x?C.createElement(bl.Provider,{value:{location:Lo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:an.Pop}},x):x}function l2(){let e=h2(),t=Jx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,a)}const s2=C.createElement(l2,null);class u2 extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Wt.Provider,{value:this.props.routeContext},C.createElement(u0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function c2(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(kl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Wt.Provider,{value:t},r)}function f2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=a.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||le(!1),a=a.slice(0,Math.min(a.length,l+1))}return a.reduceRight((l,s,u)=>{let f=s.route.id?o==null?void 0:o[s.route.id]:null,p=null;n&&(p=s.route.errorElement||s2);let g=t.concat(a.slice(0,u+1)),y=()=>{let x;return f?x=p:s.route.Component?x=C.createElement(s.route.Component,null):s.route.element?x=s.route.element:x=l,C.createElement(c2,{match:s,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:x})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?C.createElement(u2,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var d0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(d0||{}),Io=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Io||{});function d2(e){let t=C.useContext(kl);return t||le(!1),t}function p2(e){let t=C.useContext(s0);return t||le(!1),t}function m2(e){let t=C.useContext(Wt);return t||le(!1),t}function p0(e){let t=m2(),n=t.matches[t.matches.length-1];return n.route.id||le(!1),n.route.id}function h2(){var e;let t=C.useContext(u0),n=p2(Io.UseRouteError),r=p0(Io.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function g2(){let{router:e}=d2(d0.UseNavigateStable),t=p0(Io.UseNavigateStable),n=C.useRef(!1);return c0(()=>{n.current=!0}),C.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Lo({fromRouteId:t},a)))},[e,t])}function v2(e){return i2(e.context)}function We(e){le(!1)}function y2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=an.Pop,navigator:a,static:o=!1}=e;Ji()&&le(!1);let l=t.replace(/^\/*/,"/"),s=C.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof r=="string"&&(r=Wr(r));let{pathname:u="/",search:f="",hash:p="",state:g=null,key:y="default"}=r,x=C.useMemo(()=>{let v=Di(u,l);return v==null?null:{location:{pathname:v,search:f,hash:p,state:g,key:y},navigationType:i}},[l,u,f,p,g,y,i]);return x==null?null:C.createElement(Xn.Provider,{value:s},C.createElement(bl.Provider,{children:n,value:x}))}function x2(e){let{children:t,location:n}=e;return a2(xu(t),n)}new Promise(()=>{});function xu(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let a=[...t,i];if(r.type===C.Fragment){n.push.apply(n,xu(r.props.children,a));return}r.type!==We&&le(!1),!r.props.index||!r.props.children||le(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=xu(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mo.apply(this,arguments)}function m0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function w2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function k2(e,t){return e.button===0&&(!t||t==="_self")&&!w2(e)}const b2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],S2=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],C2=C.createContext({isTransitioning:!1}),E2="startTransition",$d=ws[E2];function P2(e){let{basename:t,children:n,future:r,window:i}=e,a=C.useRef();a.current==null&&(a.current=Ox({window:i,v5Compat:!0}));let o=a.current,[l,s]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=C.useCallback(p=>{u&&$d?$d(()=>s(p)):s(p)},[s,u]);return C.useLayoutEffect(()=>o.listen(f),[o,f]),C.createElement(y2,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const j2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,At=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:f,unstable_viewTransition:p}=t,g=m0(t,b2),{basename:y}=C.useContext(Xn),x,v=!1;if(typeof u=="string"&&_2.test(u)&&(x=u,j2))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),k=Di(w.pathname,y);w.origin===h.origin&&k!=null?u=k+w.search+w.hash:v=!0}catch{}let S=t2(u,{relative:i}),m=N2(u,{replace:o,state:l,target:s,preventScrollReset:f,relative:i,unstable_viewTransition:p});function c(h){r&&r(h),h.defaultPrevented||m(h)}return C.createElement("a",Mo({},g,{href:x||S,onClick:v||a?r:c,ref:n,target:s}))}),ta=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:s,unstable_viewTransition:u,children:f}=t,p=m0(t,S2),g=Cl(s,{relative:p.relative}),y=ea(),x=C.useContext(s0),{navigator:v}=C.useContext(Xn),S=x!=null&&O2(g)&&u===!0,m=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,c=y.pathname,h=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(c=c.toLowerCase(),h=h?h.toLowerCase():null,m=m.toLowerCase());let w=c===m||!o&&c.startsWith(m)&&c.charAt(m.length)==="/",k=h!=null&&(h===m||!o&&h.startsWith(m)&&h.charAt(m.length)==="/"),E={isActive:w,isPending:k,isTransitioning:S},b=w?r:void 0,N;typeof a=="function"?N=a(E):N=[a,w?"active":null,k?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let M=typeof l=="function"?l(E):l;return C.createElement(At,Mo({},p,{"aria-current":b,className:N,ref:n,style:M,to:s,unstable_viewTransition:u}),typeof f=="function"?f(E):f)});var wu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wu||(wu={}));var zd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zd||(zd={}));function T2(e){let t=C.useContext(kl);return t||le(!1),t}function N2(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:l}=t===void 0?{}:t,s=Sl(),u=ea(),f=Cl(e,{relative:o});return C.useCallback(p=>{if(k2(p,n)){p.preventDefault();let g=r!==void 0?r:Ro(u)===Ro(f);s(e,{replace:g,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:l})}},[u,s,f,r,i,n,e,a,o,l])}function O2(e,t){t===void 0&&(t={});let n=C.useContext(C2);n==null&&le(!1);let{basename:r}=T2(wu.useViewTransitionState),i=Cl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Di(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Di(n.nextLocation.pathname,r)||n.nextLocation.pathname;return yu(i.pathname,o)!=null||yu(i.pathname,a)!=null}var Re=function(){return Re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Re.apply(this,arguments)};function Fo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var K="-ms-",gi="-moz-",V="-webkit-",h0="comm",El="rule",Hc="decl",$2="@import",g0="@keyframes",z2="@layer",A2=Math.abs,Yc=String.fromCharCode,ku=Object.assign;function R2(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function v0(e){return e.trim()}function Tt(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function no(e,t){return e.indexOf(t)}function ge(e,t){return e.charCodeAt(t)|0}function Or(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function y0(e){return e.length}function ai(e,t){return t.push(e),e}function L2(e,t){return e.map(t).join("")}function Ad(e,t){return e.filter(function(n){return!Tt(n,t)})}var Pl=1,$r=1,x0=0,lt=0,ce=0,Vr="";function jl(e,t,n,r,i,a,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Pl,column:$r,length:o,return:"",siblings:l}}function Zt(e,t){return ku(jl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qn(e){for(;e.root;)e=Zt(e.root,{children:[e]});ai(e,e.siblings)}function I2(){return ce}function M2(){return ce=lt>0?ge(Vr,--lt):0,$r--,ce===10&&($r=1,Pl--),ce}function ht(){return ce=lt<x0?ge(Vr,lt++):0,$r++,ce===10&&($r=1,Pl++),ce}function Mn(){return ge(Vr,lt)}function ro(){return lt}function _l(e,t){return Or(Vr,e,t)}function bu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F2(e){return Pl=$r=1,x0=kt(Vr=e),lt=0,[]}function D2(e){return Vr="",e}function cs(e){return v0(_l(lt-1,Su(e===91?e+2:e===40?e+1:e)))}function U2(e){for(;(ce=Mn())&&ce<33;)ht();return bu(e)>2||bu(ce)>3?"":" "}function B2(e,t){for(;--t&&ht()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return _l(e,ro()+(t<6&&Mn()==32&&ht()==32))}function Su(e){for(;ht();)switch(ce){case e:return lt;case 34:case 39:e!==34&&e!==39&&Su(ce);break;case 40:e===41&&Su(e);break;case 92:ht();break}return lt}function W2(e,t){for(;ht()&&e+ce!==47+10;)if(e+ce===42+42&&Mn()===47)break;return"/*"+_l(t,lt-1)+"*"+Yc(e===47?e:ht())}function V2(e){for(;!bu(Mn());)ht();return _l(e,lt)}function H2(e){return D2(io("",null,null,null,[""],e=F2(e),0,[0],e))}function io(e,t,n,r,i,a,o,l,s){for(var u=0,f=0,p=o,g=0,y=0,x=0,v=1,S=1,m=1,c=0,h="",w=i,k=a,E=r,b=h;S;)switch(x=c,c=ht()){case 40:if(x!=108&&ge(b,p-1)==58){no(b+=I(cs(c),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:b+=cs(c);break;case 9:case 10:case 13:case 32:b+=U2(x);break;case 92:b+=B2(ro()-1,7);continue;case 47:switch(Mn()){case 42:case 47:ai(Y2(W2(ht(),ro()),t,n,s),s);break;default:b+="/"}break;case 123*v:l[u++]=kt(b)*m;case 125*v:case 59:case 0:switch(c){case 0:case 125:S=0;case 59+f:m==-1&&(b=I(b,/\f/g,"")),y>0&&kt(b)-p&&ai(y>32?Ld(b+";",r,n,p-1,s):Ld(I(b," ","")+";",r,n,p-2,s),s);break;case 59:b+=";";default:if(ai(E=Rd(b,t,n,u,f,i,l,h,w=[],k=[],p,a),a),c===123)if(f===0)io(b,t,E,E,w,a,p,l,k);else switch(g===99&&ge(b,3)===110?100:g){case 100:case 108:case 109:case 115:io(e,E,E,r&&ai(Rd(e,E,E,0,0,i,l,h,i,w=[],p,k),k),i,k,p,l,r?w:k);break;default:io(b,E,E,E,[""],k,0,l,k)}}u=f=y=0,v=m=1,h=b="",p=o;break;case 58:p=1+kt(b),y=x;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&M2()==125)continue}switch(b+=Yc(c),c*v){case 38:m=f>0?1:(b+="\f",-1);break;case 44:l[u++]=(kt(b)-1)*m,m=1;break;case 64:Mn()===45&&(b+=cs(ht())),g=Mn(),f=p=kt(h=b+=V2(ro())),c++;break;case 45:x===45&&kt(b)==2&&(v=0)}}return a}function Rd(e,t,n,r,i,a,o,l,s,u,f,p){for(var g=i-1,y=i===0?a:[""],x=y0(y),v=0,S=0,m=0;v<r;++v)for(var c=0,h=Or(e,g+1,g=A2(S=o[v])),w=e;c<x;++c)(w=v0(S>0?y[c]+" "+h:I(h,/&\f/g,y[c])))&&(s[m++]=w);return jl(e,t,n,i===0?El:l,s,u,f,p)}function Y2(e,t,n,r){return jl(e,t,n,h0,Yc(I2()),Or(e,2,-2),0,r)}function Ld(e,t,n,r,i){return jl(e,t,n,Hc,Or(e,0,r),Or(e,r+1,-1),r,i)}function w0(e,t,n){switch(R2(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return gi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+gi+e+K+e+e;case 5936:switch(ge(e,t+11)){case 114:return V+e+K+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+K+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+K+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+K+e+e;case 6165:return V+e+K+"flex-"+e+e;case 5187:return V+e+I(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return V+e+K+"flex-item-"+I(e,/flex-|-self/g,"")+(Tt(e,/flex-|baseline/)?"":K+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return V+e+K+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+K+I(e,"shrink","negative")+e;case 5292:return V+e+K+I(e,"basis","preferred-size")+e;case 6060:return V+"box-"+I(e,"-grow","")+V+e+K+I(e,"grow","positive")+e;case 4554:return V+I(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!Tt(e,/flex-|baseline/))return K+"grid-column-align"+Or(e,t)+e;break;case 2592:case 3360:return K+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Tt(r.props,/grid-\w+-end/)})?~no(e+(n=n[t].value),"span")?e:K+I(e,"-start","")+e+K+"grid-row-span:"+(~no(n,"span")?Tt(n,/\d+/):+Tt(n,/\d+/)-+Tt(e,/\d+/))+";":K+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Tt(r.props,/grid-\w+-start/)})?e:K+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+gi+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~no(e,"stretch")?w0(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,l,s,u){return K+i+":"+a+u+(o?K+i+"-span:"+(l?s:+s-+a)+u:"")+e});case 4949:if(ge(e,t+6)===121)return I(e,":",":"+V)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(ge(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+K+"$2box$3")+e;case 100:return I(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Do(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function G2(e,t,n,r){switch(e.type){case z2:if(e.children.length)break;case $2:case Hc:return e.return=e.return||e.value;case h0:return"";case g0:return e.return=e.value+"{"+Do(e.children,r)+"}";case El:if(!kt(e.value=e.props.join(",")))return""}return kt(n=Do(e.children,r))?e.return=e.value+"{"+n+"}":""}function Q2(e){var t=y0(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function K2(e){return function(t){t.root||(t=t.return)&&e(t)}}function X2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Hc:e.return=w0(e.value,e.length,n);return;case g0:return Do([Zt(e,{value:I(e.value,"@","@"+V)})],r);case El:if(e.length)return L2(n=e.props,function(i){switch(Tt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(Zt(e,{props:[I(i,/:(read-\w+)/,":"+gi+"$1")]})),qn(Zt(e,{props:[i]})),ku(e,{props:Ad(n,r)});break;case"::placeholder":qn(Zt(e,{props:[I(i,/:(plac\w+)/,":"+V+"input-$1")]})),qn(Zt(e,{props:[I(i,/:(plac\w+)/,":"+gi+"$1")]})),qn(Zt(e,{props:[I(i,/:(plac\w+)/,K+"input-$1")]})),qn(Zt(e,{props:[i]})),ku(e,{props:Ad(n,r)});break}return""})}}var zr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Gc=typeof window<"u"&&"HTMLElement"in window,Z2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Tl=Object.freeze([]),Ar=Object.freeze({});function q2(e,t,n){return n===void 0&&(n=Ar),e.theme!==n.theme&&e.theme||t||n.theme}var k0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),J2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ew=/(^-|-$)/g;function Id(e){return e.replace(J2,"-").replace(ew,"")}var tw=/(a)(d)/gi,Md=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Md(t%52)+n;return(Md(t%52)+n).replace(tw,"$1-$2")}var fs,fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},b0=function(e){return fr(5381,e)};function nw(e){return Cu(b0(e)>>>0)}function rw(e){return e.displayName||e.name||"Component"}function ds(e){return typeof e=="string"&&!0}var S0=typeof Symbol=="function"&&Symbol.for,C0=S0?Symbol.for("react.memo"):60115,iw=S0?Symbol.for("react.forward_ref"):60112,aw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ow={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},E0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lw=((fs={})[iw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fs[C0]=E0,fs);function Fd(e){return("type"in(t=e)&&t.type.$$typeof)===C0?E0:"$$typeof"in e?lw[e.$$typeof]:aw;var t}var sw=Object.defineProperty,uw=Object.getOwnPropertyNames,Dd=Object.getOwnPropertySymbols,cw=Object.getOwnPropertyDescriptor,fw=Object.getPrototypeOf,Ud=Object.prototype;function P0(e,t,n){if(typeof t!="string"){if(Ud){var r=fw(t);r&&r!==Ud&&P0(e,r,n)}var i=uw(t);Dd&&(i=i.concat(Dd(t)));for(var a=Fd(e),o=Fd(t),l=0;l<i.length;++l){var s=i[l];if(!(s in ow||n&&n[s]||o&&s in o||a&&s in a)){var u=cw(t,s);try{sw(e,s,u)}catch{}}}}return e}function Rr(e){return typeof e=="function"}function Qc(e){return typeof e=="object"&&"styledComponentId"in e}function zn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Bd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ui(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Eu(e,t,n){if(n===void 0&&(n=!1),!n&&!Ui(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Eu(e[r],t[r]);else if(Ui(t))for(var r in t)e[r]=Eu(e[r],t[r]);return e}function Kc(e,t){Object.defineProperty(e,"toString",{value:t})}function na(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var dw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw na(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),s=(o=0,n.length);o<s;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),ao=new Map,Uo=new Map,ps=1,Ta=function(e){if(ao.has(e))return ao.get(e);for(;Uo.has(ps);)ps++;var t=ps++;return ao.set(e,t),Uo.set(t,e),t},pw=function(e,t){ao.set(e,t),Uo.set(t,e)},mw="style[".concat(zr,"][").concat("data-styled-version",'="').concat("6.0.3",'"]'),hw=new RegExp("^".concat(zr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gw=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},vw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],a=0,o=r.length;a<o;a++){var l=r[a].trim();if(l){var s=l.match(hw);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(pw(f,u),gw(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function yw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var j0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(zr,"]")));return s[s.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(zr,"active"),r.setAttribute("data-styled-version","6.0.3");var o=yw();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},xw=function(){function e(t){this.element=j0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw na(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ww=function(){function e(t){this.element=j0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),kw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Wd=Gc,bw={isServer:!Gc,useCSSOMInjection:!Z2},_0=function(){function e(t,n,r){t===void 0&&(t=Ar),n===void 0&&(n={});var i=this;this.options=Re(Re({},bw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Gc&&Wd&&(Wd=!1,function(a){for(var o=document.querySelectorAll(mw),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute(zr)!=="active"&&(vw(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Kc(this,function(){return function(a){for(var o=a.getTag(),l=o.length,s="",u=function(p){var g=function(m){return Uo.get(m)}(p);if(g===void 0)return"continue";var y=a.names.get(g),x=o.getGroup(p);if(y===void 0||x.length===0)return"continue";var v="".concat(zr,".g").concat(p,'[id="').concat(g,'"]'),S="";y!==void 0&&y.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),s+="".concat(x).concat(v,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},f=0;f<l;f++)u(f);return s}(i)})}return e.registerId=function(t){return Ta(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new kw(i):r?new xw(i):new ww(i)}(this.options),new dw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ta(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ta(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ta(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Sw=/&/g,Cw=/^\s*\/\/.*$/gm;function T0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=T0(n.children,t)),n})}function Ew(e){var t,n,r,i=e===void 0?Ar:e,a=i.options,o=a===void 0?Ar:a,l=i.plugins,s=l===void 0?Tl:l,u=function(g,y,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},f=s.slice();f.push(function(g){g.type===El&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Sw,n).replace(r,u))}),o.prefix&&f.push(X2),f.push(G2);var p=function(g,y,x,v){y===void 0&&(y=""),x===void 0&&(x=""),v===void 0&&(v="&"),t=v,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var S=g.replace(Cw,""),m=H2(x||y?"".concat(x," ").concat(y," { ").concat(S," }"):S);o.namespace&&(m=T0(m,o.namespace));var c=[];return Do(m,Q2(f.concat(K2(function(h){return c.push(h)})))),c};return p.hash=s.length?s.reduce(function(g,y){return y.name||na(15),fr(g,y.name)},5381).toString():"",p}var Pw=new _0,Pu=Ew(),N0=Te.createContext({shouldForwardProp:void 0,styleSheet:Pw,stylis:Pu});N0.Consumer;Te.createContext(void 0);function Vd(){return C.useContext(N0)}var jw=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Pu);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Kc(this,function(){throw na(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Pu),this.name+t.hash},e}(),_w=function(e){return e>="A"&&e<="Z"};function Hd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_w(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var O0=function(e){return e==null||e===!1||e===""},$0=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!O0(a)&&(Array.isArray(a)&&a.isCss||Rr(a)?r.push("".concat(Hd(i),":"),a,";"):Ui(a)?r.push.apply(r,Fo(Fo(["".concat(i," {")],$0(a),!1),["}"],!1)):r.push("".concat(Hd(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Jh||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Fn(e,t,n,r){if(O0(e))return[];if(Qc(e))return[".".concat(e.styledComponentId)];if(Rr(e)){if(!Rr(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Fn(i,t,n,r)}var a;return e instanceof jw?n?(e.inject(n,r),[e.getName(r)]):[e]:Ui(e)?$0(e):Array.isArray(e)?Array.prototype.concat.apply(Tl,e.map(function(o){return Fn(o,t,n,r)})):[e.toString()]}function Tw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Rr(n)&&!Qc(n))return!1}return!0}var Nw=b0("6.0.3"),Ow=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Tw(t),this.componentId=n,this.baseHash=fr(Nw,n),this.baseStyle=r,_0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=zn(i,this.staticRulesId);else{var a=Bd(Fn(this.rules,t,n,r)),o=Cu(fr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=zn(i,o),this.staticRulesId=o}else{for(var s=fr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")u+=p;else if(p){var g=Bd(Fn(p,t,n,r));s=fr(s,g),u+=g}}if(u){var y=Cu(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=zn(i,y)}}return i},e}(),z0=Te.createContext(void 0);z0.Consumer;var ms={};function $w(e,t,n){var r=Qc(e),i=e,a=!ds(e),o=t.attrs,l=o===void 0?Tl:o,s=t.componentId,u=s===void 0?function(h,w){var k=typeof h!="string"?"sc":Id(h);ms[k]=(ms[k]||0)+1;var E="".concat(k,"-").concat(nw("6.0.3"+k+ms[k]));return w?"".concat(w,"-").concat(E):E}(t.displayName,t.parentComponentId):s,f=t.displayName;f===void 0&&function(h){return ds(h)?"styled.".concat(h):"Styled(".concat(rw(h),")")}(e);var p=t.displayName&&t.componentId?"".concat(Id(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;y=function(h,w){return x(h,w)&&v(h,w)}}else y=x}var S=new Ow(n,p,r?i.componentStyle:void 0);function m(h,w){return function(k,E,b){var N=k.attrs,M=k.componentStyle,L=k.defaultProps,De=k.foldedComponentIds,En=k.styledComponentId,Pn=k.target,ua=Te.useContext(z0),Al=Vd(),jn=k.shouldForwardProp||Al.shouldForwardProp,Je=function(jt,Ue,Ht){for(var Be,et=Re(Re({},Ue),{className:void 0,theme:Ht}),Rl=0;Rl<jt.length;Rl+=1){var ca=Rr(Be=jt[Rl])?Be(et):Be;for(var Yt in ca)et[Yt]=Yt==="className"?zn(et[Yt],ca[Yt]):Yt==="style"?Re(Re({},et[Yt]),ca[Yt]):ca[Yt]}return Ue.className&&(et.className=zn(et.className,Ue.className)),et}(N,E,q2(E,ua,L)||Ar),T=Je.as||Pn,A={};for(var R in Je)Je[R]===void 0||R[0]==="$"||R==="as"||R==="theme"||(R==="forwardedAs"?A.as=Je.forwardedAs:jn&&!jn(R,T)||(A[R]=Je[R]));var J=function(jt,Ue){var Ht=Vd(),Be=jt.generateAndInjectStyles(Ue,Ht.styleSheet,Ht.stylis);return Be}(M,Je),ie=zn(De,En);return J&&(ie+=" "+J),Je.className&&(ie+=" "+Je.className),A[ds(T)&&!k0.has(T)?"class":"className"]=ie,A.ref=b,C.createElement(T,A)}(c,h,w)}var c=Te.forwardRef(m);return c.attrs=g,c.componentStyle=S,c.shouldForwardProp=y,c.foldedComponentIds=r?zn(i.foldedComponentIds,i.styledComponentId):"",c.styledComponentId=p,c.target=r?i.target:e,Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?function(w){for(var k=[],E=1;E<arguments.length;E++)k[E-1]=arguments[E];for(var b=0,N=k;b<N.length;b++)Eu(w,N[b],!0);return w}({},i.defaultProps,h):h}}),Kc(c,function(){return".".concat(c.styledComponentId)}),a&&P0(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),c}function Yd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Gd=function(e){return Object.assign(e,{isCss:!0})};function zw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Rr(e)||Ui(e)){var r=e;return Gd(Fn(Yd(Tl,Fo([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Fn(i):Gd(Fn(Yd(i,t)))}function ju(e,t,n){if(n===void 0&&(n=Ar),!t)throw na(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,zw.apply(void 0,Fo([i],a,!1)))};return r.attrs=function(i){return ju(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ju(e,t,Re(Re({},n),i))},r}var A0=function(e){return ju($w,e)},_=A0;k0.forEach(function(e){_[e]=A0(e)});const Aw=_.div`
  /* max-width: 960px; */
  margin: 0 auto;
  padding: 0;
  position:relative;
`,Rw=_.ul`
display: flex;
`,Lw=_.header`
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
`,Iw=_.span`
/* margin-left: 3px; */
font-family: 'Marck Script', cursive;
line-height: 1.5em;
color: var(--semiAccentColor);
&:hover{
  color: var(--accentColor);
}
`;_.p`
  font-weight: 700;
  margin: 0;
  color: var(--mainColor);
  padding: 2px 4px;
  display: flex;
align-items: center;
&:hover{
  color: var(--accentColor);
}
`;const Mw=_(ta)`
 text-decoration: none;
 color: inherit;
`,Fw=_.div`
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
`,Qt=_(ta)`
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
`;_.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  z-index: 1000;
`;_.header`

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
`;const Dw=_.nav`
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
  `;function Qd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qd(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bo(e){"@babel/helpers - typeof";return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bo(e)}function Uw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Bw(e,t,n){return t&&Kd(e.prototype,t),n&&Kd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xc(e,t){return Vw(e)||Yw(e,t)||R0(e,t)||Qw()}function ra(e){return Ww(e)||Hw(e)||R0(e)||Gw()}function Ww(e){if(Array.isArray(e))return _u(e)}function Vw(e){if(Array.isArray(e))return e}function Hw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function R0(e,t){if(e){if(typeof e=="string")return _u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _u(e,t)}}function _u(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Gw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xd=function(){},Zc={},L0={},I0=null,M0={mark:Xd,measure:Xd};try{typeof window<"u"&&(Zc=window),typeof document<"u"&&(L0=document),typeof MutationObserver<"u"&&(I0=MutationObserver),typeof performance<"u"&&(M0=performance)}catch{}var Kw=Zc.navigator||{},Zd=Kw.userAgent,qd=Zd===void 0?"":Zd,xn=Zc,q=L0,Jd=I0,Na=M0;xn.document;var Vt=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",F0=~qd.indexOf("MSIE")||~qd.indexOf("Trident/"),Oa,$a,za,Aa,Ra,Ft="___FONT_AWESOME___",Tu=16,D0="fa",U0="svg-inline--fa",Yn="data-fa-i2svg",Nu="data-fa-pseudo-element",Xw="data-fa-pseudo-element-pending",qc="data-prefix",Jc="data-icon",ep="fontawesome-i2svg",Zw="async",qw=["HTML","HEAD","STYLE","SCRIPT"],B0=function(){try{return!0}catch{return!1}}(),X="classic",oe="sharp",ef=[X,oe];function ia(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Bi=ia((Oa={},me(Oa,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),me(Oa,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Oa)),Wi=ia(($a={},me($a,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),me($a,oe,{solid:"fass",regular:"fasr",light:"fasl"}),$a)),Vi=ia((za={},me(za,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),me(za,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),za)),Jw=ia((Aa={},me(Aa,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),me(Aa,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Aa)),ek=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,W0="fa-layers-text",tk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,nk=ia((Ra={},me(Ra,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),me(Ra,oe,{900:"fass",400:"fasr",300:"fasl"}),Ra)),V0=[1,2,3,4,5,6,7,8,9,10],rk=V0.concat([11,12,13,14,15,16,17,18,19,20]),ik=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],An={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hi=new Set;Object.keys(Wi[X]).map(Hi.add.bind(Hi));Object.keys(Wi[oe]).map(Hi.add.bind(Hi));var ak=[].concat(ef,ra(Hi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",An.GROUP,An.SWAP_OPACITY,An.PRIMARY,An.SECONDARY]).concat(V0.map(function(e){return"".concat(e,"x")})).concat(rk.map(function(e){return"w-".concat(e)})),vi=xn.FontAwesomeConfig||{};function ok(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function lk(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var sk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];sk.forEach(function(e){var t=Xc(e,2),n=t[0],r=t[1],i=lk(ok(n));i!=null&&(vi[r]=i)})}var H0={styleDefault:"solid",familyDefault:"classic",cssPrefix:D0,replacementClass:U0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vi.familyPrefix&&(vi.cssPrefix=vi.familyPrefix);var Lr=O(O({},H0),vi);Lr.autoReplaceSvg||(Lr.observeMutations=!1);var z={};Object.keys(H0).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){Lr[e]=n,yi.forEach(function(r){return r(z)})},get:function(){return Lr[e]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(t){Lr.cssPrefix=t,yi.forEach(function(n){return n(z)})},get:function(){return Lr.cssPrefix}});xn.FontAwesomeConfig=z;var yi=[];function uk(e){return yi.push(e),function(){yi.splice(yi.indexOf(e),1)}}var Kt=Tu,St={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ck(e){if(!(!e||!Vt)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return q.head.insertBefore(t,r),e}}var fk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yi(){for(var e=12,t="";e-- >0;)t+=fk[Math.random()*62|0];return t}function Hr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function tf(e){return e.classList?Hr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Y0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dk(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Y0(e[n]),'" ')},"").trim()}function Nl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function nf(e){return e.size!==St.size||e.x!==St.x||e.y!==St.y||e.rotate!==St.rotate||e.flipX||e.flipY}function pk(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function mk(e){var t=e.transform,n=e.width,r=n===void 0?Tu:n,i=e.height,a=i===void 0?Tu:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&F0?s+="translate(".concat(t.x/Kt-r/2,"em, ").concat(t.y/Kt-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/Kt,"em), calc(-50% + ").concat(t.y/Kt,"em)) "):s+="translate(".concat(t.x/Kt,"em, ").concat(t.y/Kt,"em) "),s+="scale(".concat(t.size/Kt*(t.flipX?-1:1),", ").concat(t.size/Kt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var hk=`:root, :host {
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
}`;function G0(){var e=D0,t=U0,n=z.cssPrefix,r=z.replacementClass,i=hk;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var tp=!1;function hs(){z.autoAddCss&&!tp&&(ck(G0()),tp=!0)}var gk={mixout:function(){return{dom:{css:G0,insertCss:hs}}},hooks:function(){return{beforeDOMElementCreation:function(){hs()},beforeI2svg:function(){hs()}}}},Dt=xn||{};Dt[Ft]||(Dt[Ft]={});Dt[Ft].styles||(Dt[Ft].styles={});Dt[Ft].hooks||(Dt[Ft].hooks={});Dt[Ft].shims||(Dt[Ft].shims=[]);var dt=Dt[Ft],Q0=[],vk=function e(){q.removeEventListener("DOMContentLoaded",e),Wo=1,Q0.map(function(t){return t()})},Wo=!1;Vt&&(Wo=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Wo||q.addEventListener("DOMContentLoaded",vk));function yk(e){Vt&&(Wo?setTimeout(e,0):Q0.push(e))}function aa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Y0(e):"<".concat(t," ").concat(dk(r),">").concat(a.map(aa).join(""),"</").concat(t,">")}function np(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var xk=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},gs=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?xk(n,i):n,s,u,f;for(r===void 0?(s=1,f=t[a[0]]):(s=0,f=r);s<o;s++)u=a[s],f=l(f,t[u],u,t);return f};function wk(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ou(e){var t=wk(e);return t.length===1?t[0].toString(16):null}function kk(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function rp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function $u(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=rp(t);typeof dt.hooks.addPack=="function"&&!i?dt.hooks.addPack(e,rp(t)):dt.styles[e]=O(O({},dt.styles[e]||{}),a),e==="fas"&&$u("fa",t)}var La,Ia,Ma,dr=dt.styles,bk=dt.shims,Sk=(La={},me(La,X,Object.values(Vi[X])),me(La,oe,Object.values(Vi[oe])),La),rf=null,K0={},X0={},Z0={},q0={},J0={},Ck=(Ia={},me(Ia,X,Object.keys(Bi[X])),me(Ia,oe,Object.keys(Bi[oe])),Ia);function Ek(e){return~ak.indexOf(e)}function Pk(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Ek(i)?i:null}var e1=function(){var t=function(a){return gs(dr,function(o,l,s){return o[s]=gs(l,a,{}),o},{})};K0=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),X0=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),J0=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in dr||z.autoFetchSvg,r=gs(bk,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});Z0=r.names,q0=r.unicodes,rf=Ol(z.styleDefault,{family:z.familyDefault})};uk(function(e){rf=Ol(e.styleDefault,{family:z.familyDefault})});e1();function af(e,t){return(K0[e]||{})[t]}function jk(e,t){return(X0[e]||{})[t]}function Rn(e,t){return(J0[e]||{})[t]}function t1(e){return Z0[e]||{prefix:null,iconName:null}}function _k(e){var t=q0[e],n=af("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wn(){return rf}var of=function(){return{prefix:null,iconName:null,rest:[]}};function Ol(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,i=Bi[r][e],a=Wi[r][e]||Wi[r][i],o=e in dt.styles?e:null;return a||o||null}var ip=(Ma={},me(Ma,X,Object.keys(Vi[X])),me(Ma,oe,Object.keys(Vi[oe])),Ma);function $l(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},me(t,X,"".concat(z.cssPrefix,"-").concat(X)),me(t,oe,"".concat(z.cssPrefix,"-").concat(oe)),t),o=null,l=X;(e.includes(a[X])||e.some(function(u){return ip[X].includes(u)}))&&(l=X),(e.includes(a[oe])||e.some(function(u){return ip[oe].includes(u)}))&&(l=oe);var s=e.reduce(function(u,f){var p=Pk(z.cssPrefix,f);if(dr[f]?(f=Sk[l].includes(f)?Jw[l][f]:f,o=f,u.prefix=f):Ck[l].indexOf(f)>-1?(o=f,u.prefix=Ol(f,{family:l})):p?u.iconName=p:f!==z.replacementClass&&f!==a[X]&&f!==a[oe]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var g=o==="fa"?t1(u.iconName):{},y=Rn(u.prefix,u.iconName);g.prefix&&(o=null),u.iconName=g.iconName||y||u.iconName,u.prefix=g.prefix||u.prefix,u.prefix==="far"&&!dr.far&&dr.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},of());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===oe&&(dr.fass||z.autoFetchSvg)&&(s.prefix="fass",s.iconName=Rn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=wn()||"fas"),s}var Tk=function(){function e(){Uw(this,e),this.definitions={}}return Bw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=O(O({},n.definitions[l]||{}),o[l]),$u(l,o[l]);var s=Vi[X][l];s&&$u(s,o[l]),e1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[l][p]=u)}),n[l][s]=u}),n}}]),e}(),ap=[],pr={},br={},Nk=Object.keys(br);function Ok(e,t){var n=t.mixoutsTo;return ap=e,pr={},Object.keys(br).forEach(function(r){Nk.indexOf(r)===-1&&delete br[r]}),ap.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Bo(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){pr[o]||(pr[o]=[]),pr[o].push(a[o])})}r.provides&&r.provides(br)}),n}function zu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=pr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Gn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=pr[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ut(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return br[e]?br[e].apply(null,t):void 0}function Au(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||wn();if(t)return t=Rn(n,t)||t,np(n1.definitions,n,t)||np(dt.styles,n,t)}var n1=new Tk,$k=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Gn("noAuto")},zk={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vt?(Gn("beforeI2svg",t),Ut("pseudoElements2svg",t),Ut("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,yk(function(){Rk({autoReplaceSvgRoot:n}),Gn("watch",t)})}},Ak={icon:function(t){if(t===null)return null;if(Bo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Rn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ol(t[0]);return{prefix:r,iconName:Rn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.cssPrefix,"-"))>-1||t.match(ek))){var i=$l(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||wn(),iconName:Rn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=wn();return{prefix:a,iconName:Rn(a,t)||t}}}},qe={noAuto:$k,config:z,dom:zk,parse:Ak,library:n1,findIconDefinition:Au,toHtml:aa},Rk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(dt.styles).length>0||z.autoFetchSvg)&&Vt&&z.autoReplaceSvg&&qe.dom.i2svg({node:r})};function zl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return aa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Vt){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Lk(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(nf(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=Nl(O(O({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Ik(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(z.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function lf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,p=e.extra,g=e.watchable,y=g===void 0?!1:g,x=r.found?r:n,v=x.width,S=x.height,m=i==="fak",c=[z.replacementClass,a?"".concat(z.cssPrefix,"-").concat(a):""].filter(function(M){return p.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(p.classes).join(" "),h={children:[],attributes:O(O({},p.attributes),{},{"data-prefix":i,"data-icon":a,class:c,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(S)})},w=m&&!~p.classes.indexOf("fa-fw")?{width:"".concat(v/S*16*.0625,"em")}:{};y&&(h.attributes[Yn]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(f||Yi())},children:[s]}),delete h.attributes.title);var k=O(O({},h),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:O(O({},w),p.styles)}),E=r.found&&n.found?Ut("generateAbstractMask",k)||{children:[],attributes:{}}:Ut("generateAbstractIcon",k)||{children:[],attributes:{}},b=E.children,N=E.attributes;return k.children=b,k.attributes=N,l?Ik(k):Lk(k)}function op(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=O(O(O({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[Yn]="");var f=O({},o.styles);nf(i)&&(f.transform=mk({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var p=Nl(f);p.length>0&&(u.style=p);var g=[];return g.push({tag:"span",attributes:u,children:[t]}),a&&g.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),g}function Mk(e){var t=e.content,n=e.title,r=e.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Nl(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vs=dt.styles;function Ru(e){var t=e[0],n=e[1],r=e.slice(4),i=Xc(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(An.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(An.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(An.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Fk={found:!1,width:512,height:512};function Dk(e,t){!B0&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Lu(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=wn()),new Promise(function(r,i){if(Ut("missingIconAbstract"),n==="fa"){var a=t1(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&vs[t]&&vs[t][e]){var o=vs[t][e];return r(Ru(o))}Dk(e,t),r(O(O({},Fk),{},{icon:z.showMissingIcons&&e?Ut("missingIconAbstract")||{}:{}}))})}var lp=function(){},Iu=z.measurePerformance&&Na&&Na.mark&&Na.measure?Na:{mark:lp,measure:lp},oi='FA "6.4.0"',Uk=function(t){return Iu.mark("".concat(oi," ").concat(t," begins")),function(){return r1(t)}},r1=function(t){Iu.mark("".concat(oi," ").concat(t," ends")),Iu.measure("".concat(oi," ").concat(t),"".concat(oi," ").concat(t," begins"),"".concat(oi," ").concat(t," ends"))},sf={begin:Uk,end:r1},oo=function(){};function sp(e){var t=e.getAttribute?e.getAttribute(Yn):null;return typeof t=="string"}function Bk(e){var t=e.getAttribute?e.getAttribute(qc):null,n=e.getAttribute?e.getAttribute(Jc):null;return t&&n}function Wk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function Vk(){if(z.autoReplaceSvg===!0)return lo.replace;var e=lo[z.autoReplaceSvg];return e||lo.replace}function Hk(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Yk(e){return q.createElement(e)}function i1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Hk:Yk:n;if(typeof e=="string")return q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(i1(o,{ceFn:r}))}),i}function Gk(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var lo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(i1(i),n)}),n.getAttribute(Yn)===null&&z.keepOriginalSource){var r=q.createComment(Gk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~tf(n).indexOf(z.replacementClass))return lo.replace(t);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===z.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return aa(l)}).join(`
`);n.setAttribute(Yn,""),n.innerHTML=o}};function up(e){e()}function a1(e,t){var n=typeof t=="function"?t:oo;if(e.length===0)n();else{var r=up;z.mutateApproach===Zw&&(r=xn.requestAnimationFrame||up),r(function(){var i=Vk(),a=sf.begin("mutate");e.map(i),a(),n()})}}var uf=!1;function o1(){uf=!0}function Mu(){uf=!1}var Vo=null;function cp(e){if(Jd&&z.observeMutations){var t=e.treeCallback,n=t===void 0?oo:t,r=e.nodeCallback,i=r===void 0?oo:r,a=e.pseudoElementsCallback,o=a===void 0?oo:a,l=e.observeMutationsRoot,s=l===void 0?q:l;Vo=new Jd(function(u){if(!uf){var f=wn();Hr(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!sp(p.addedNodes[0])&&(z.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&z.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&sp(p.target)&&~ik.indexOf(p.attributeName))if(p.attributeName==="class"&&Bk(p.target)){var g=$l(tf(p.target)),y=g.prefix,x=g.iconName;p.target.setAttribute(qc,y||f),x&&p.target.setAttribute(Jc,x)}else Wk(p.target)&&i(p.target)})}}),Vt&&Vo.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qk(){Vo&&Vo.disconnect()}function Kk(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Xk(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=$l(tf(e));return i.prefix||(i.prefix=wn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=jk(i.prefix,e.innerText)||af(i.prefix,Ou(e.innerText))),!i.iconName&&z.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Zk(e){var t=Hr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Yi()):(t["aria-hidden"]="true",t.focusable="false")),t}function qk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:St,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Xk(e),r=n.iconName,i=n.prefix,a=n.rest,o=Zk(e),l=zu("parseNodeAttributes",{},e),s=t.styleParser?Kk(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:St,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var Jk=dt.styles;function l1(e){var t=z.autoReplaceSvg==="nest"?fp(e,{styleParser:!1}):fp(e);return~t.extra.classes.indexOf(W0)?Ut("generateLayersText",e,t):Ut("generateSvgReplacementMutation",e,t)}var kn=new Set;ef.map(function(e){kn.add("fa-".concat(e))});Object.keys(Bi[X]).map(kn.add.bind(kn));Object.keys(Bi[oe]).map(kn.add.bind(kn));kn=ra(kn);function dp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vt)return Promise.resolve();var n=q.documentElement.classList,r=function(p){return n.add("".concat(ep,"-").concat(p))},i=function(p){return n.remove("".concat(ep,"-").concat(p))},a=z.autoFetchSvg?kn:ef.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Jk));a.includes("fa")||a.push("fa");var o=[".".concat(W0,":not([").concat(Yn,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(Yn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Hr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=sf.begin("onTree"),u=l.reduce(function(f,p){try{var g=l1(p);g&&f.push(g)}catch(y){B0||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,p){Promise.all(u).then(function(g){a1(g,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(g){s(),p(g)})})}function e4(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;l1(e).then(function(n){n&&a1([n],t)})}function t4(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Au(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Au(i||{})),e(r,O(O({},n),{},{mask:i}))}}var n4=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?St:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,p=n.title,g=p===void 0?null:p,y=n.titleId,x=y===void 0?null:y,v=n.classes,S=v===void 0?[]:v,m=n.attributes,c=m===void 0?{}:m,h=n.styles,w=h===void 0?{}:h;if(t){var k=t.prefix,E=t.iconName,b=t.icon;return zl(O({type:"icon"},t),function(){return Gn("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(g?c["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(x||Yi()):(c["aria-hidden"]="true",c.focusable="false")),lf({icons:{main:Ru(b),mask:s?Ru(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:E,transform:O(O({},St),i),symbol:o,title:g,maskId:f,titleId:x,extra:{attributes:c,styles:w,classes:S}})})}},r4={mixout:function(){return{icon:t4(n4)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=dp,n.nodeCallback=e4,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?q:r,a=n.callback,o=a===void 0?function(){}:a;return dp(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,p=r.maskId,g=r.extra;return new Promise(function(y,x){Promise.all([Lu(i,l),f.iconName?Lu(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var S=Xc(v,2),m=S[0],c=S[1];y([n,lf({icons:{main:m,mask:c},prefix:l,iconName:i,transform:s,symbol:u,maskId:p,title:a,titleId:o,extra:g,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=Nl(l);s.length>0&&(i.style=s);var u;return nf(o)&&(u=Ut("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},i4={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return zl({type:"layer"},function(){Gn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(ra(a)).join(" ")},children:o}]})}}}},a4={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,p=f===void 0?{}:f;return zl({type:"counter",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),Mk({content:n.toString(),title:a,extra:{attributes:u,styles:p,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(ra(l))}})})}}}},o4={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?St:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,p=f===void 0?{}:f,g=r.styles,y=g===void 0?{}:g;return zl({type:"text",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),op({content:n,transform:O(O({},St),a),title:l,extra:{attributes:p,styles:y,classes:["".concat(z.cssPrefix,"-layers-text")].concat(ra(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(F0){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,op({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},l4=new RegExp('"',"ug"),pp=[1105920,1112319];function s4(e){var t=e.replace(l4,""),n=kk(t,0),r=n>=pp[0]&&n<=pp[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ou(i?t[0]:t),isSecondary:r||i}}function mp(e,t){var n="".concat(Xw).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Hr(e.children),o=a.filter(function(b){return b.getAttribute(Nu)===t})[0],l=xn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(tk),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var p=l.getPropertyValue("content"),g=~["Sharp"].indexOf(s[2])?oe:X,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Wi[g][s[2].toLowerCase()]:nk[g][u],x=s4(p),v=x.value,S=x.isSecondary,m=s[0].startsWith("FontAwesome"),c=af(y,v),h=c;if(m){var w=_k(v);w.iconName&&w.prefix&&(c=w.iconName,y=w.prefix)}if(c&&!S&&(!o||o.getAttribute(qc)!==y||o.getAttribute(Jc)!==h)){e.setAttribute(n,h),o&&e.removeChild(o);var k=qk(),E=k.extra;E.attributes[Nu]=t,Lu(c,y).then(function(b){var N=lf(O(O({},k),{},{icons:{main:b,mask:of()},prefix:y,iconName:h,extra:E,watchable:!0})),M=q.createElement("svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=N.map(function(L){return aa(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function u4(e){return Promise.all([mp(e,"::before"),mp(e,"::after")])}function c4(e){return e.parentNode!==document.head&&!~qw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function hp(e){if(Vt)return new Promise(function(t,n){var r=Hr(e.querySelectorAll("*")).filter(c4).map(u4),i=sf.begin("searchPseudoElements");o1(),Promise.all(r).then(function(){i(),Mu(),t()}).catch(function(){i(),Mu(),n()})})}var f4={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=hp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?q:r;z.searchPseudoElements&&hp(i)}}},gp=!1,d4={mixout:function(){return{dom:{unwatch:function(){o1(),gp=!0}}}},hooks:function(){return{bootstrap:function(){cp(zu("mutationObserverCallbacks",{}))},noAuto:function(){Qk()},watch:function(n){var r=n.observeMutationsRoot;gp?Mu():cp(zu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},p4={mixout:function(){return{parse:{transform:function(n){return vp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=vp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(s," ").concat(u," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},y={outer:l,inner:p,path:g};return{tag:"g",attributes:O({},y.outer),children:[{tag:"g",attributes:O({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),y.path)}]}]}}}},ys={x:0,y:0,width:"100%",height:"100%"};function yp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function m4(e){return e.tag==="g"?e.children:[e]}var h4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?$l(i.split(" ").map(function(o){return o.trim()})):of();return a.prefix||(a.prefix=wn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,f=a.icon,p=o.width,g=o.icon,y=pk({transform:s,containerWidth:p,iconWidth:u}),x={tag:"rect",attributes:O(O({},ys),{},{fill:"white"})},v=f.children?{children:f.children.map(yp)}:{},S={tag:"g",attributes:O({},y.inner),children:[yp(O({tag:f.tag,attributes:O(O({},f.attributes),y.path)},v))]},m={tag:"g",attributes:O({},y.outer),children:[S]},c="mask-".concat(l||Yi()),h="clip-".concat(l||Yi()),w={tag:"mask",attributes:O(O({},ys),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:m4(g)},w]};return r.push(k,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(c,")")},ys)}),{children:r,attributes:i}}}},g4={provides:function(t){var n=!1;xn.matchMedia&&(n=xn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:O(O({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},v4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},y4=[gk,r4,i4,a4,o4,f4,d4,p4,h4,g4,v4];Ok(y4,{mixoutsTo:qe});qe.noAuto;qe.config;qe.library;qe.dom;var Fu=qe.parse;qe.findIconDefinition;qe.toHtml;var x4=qe.icon;qe.layer;qe.text;qe.counter;var s1={exports:{}},w4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",k4=w4,b4=k4;function u1(){}function c1(){}c1.resetWarningCache=u1;var S4=function(){function e(r,i,a,o,l,s){if(s!==b4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c1,resetWarningCache:u1};return n.PropTypes=n,n};s1.exports=S4();var C4=s1.exports;const j=Pp(C4);function xp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function on(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xp(Object(n),!0).forEach(function(r){mr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ho(e){"@babel/helpers - typeof";return Ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ho(e)}function mr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function P4(e,t){if(e==null)return{};var n=E4(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Du(e){return j4(e)||_4(e)||T4(e)||N4()}function j4(e){if(Array.isArray(e))return Uu(e)}function _4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function T4(e,t){if(e){if(typeof e=="string")return Uu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uu(e,t)}}function Uu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O4(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,p=e.pulse,g=e.fixedWidth,y=e.inverse,x=e.border,v=e.listItem,S=e.flip,m=e.size,c=e.rotation,h=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":g,"fa-inverse":y,"fa-border":x,"fa-li":v,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},mr(t,"fa-".concat(m),typeof m<"u"&&m!==null),mr(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),mr(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),mr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function $4(e){return e=e-0,e===e}function f1(e){return $4(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var z4=["style"];function A4(e){return e.charAt(0).toUpperCase()+e.slice(1)}function R4(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=f1(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[A4(i)]=a:t[i]=a,t},{})}function d1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return d1(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=R4(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[f1(u)]=f}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=P4(n,z4);return i.attrs.style=on(on({},i.attrs.style),o),e.apply(void 0,[t.tag,on(on({},i.attrs),l)].concat(Du(r)))}var p1=!1;try{p1=!0}catch{}function L4(){if(!p1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function wp(e){if(e&&Ho(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Fu.icon)return Fu.icon(e);if(e===null)return null;if(e&&Ho(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?mr({},e,t):{}}var Dn=Te.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,l=e.titleId,s=e.maskId,u=wp(n),f=xs("classes",[].concat(Du(O4(e)),Du(a.split(" ")))),p=xs("transform",typeof e.transform=="string"?Fu.transform(e.transform):e.transform),g=xs("mask",wp(r)),y=x4(u,on(on(on(on({},f),p),g),{},{symbol:i,title:o,titleId:l,maskId:s}));if(!y)return L4("Could not find icon",u),null;var x=y.abstract,v={ref:t};return Object.keys(e).forEach(function(S){Dn.defaultProps.hasOwnProperty(S)||(v[S]=e[S])}),I4(x[0],v)});Dn.displayName="FontAwesomeIcon";Dn.propTypes={beat:j.bool,border:j.bool,beatFade:j.bool,bounce:j.bool,className:j.string,fade:j.bool,flash:j.bool,mask:j.oneOfType([j.object,j.array,j.string]),maskId:j.string,fixedWidth:j.bool,inverse:j.bool,flip:j.oneOf([!0,!1,"horizontal","vertical","both"]),icon:j.oneOfType([j.object,j.array,j.string]),listItem:j.bool,pull:j.oneOf(["right","left"]),pulse:j.bool,rotation:j.oneOf([0,90,180,270]),shake:j.bool,size:j.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:j.bool,spinPulse:j.bool,spinReverse:j.bool,symbol:j.oneOfType([j.bool,j.string]),title:j.string,titleId:j.string,transform:j.oneOfType([j.string,j.object]),swapOpacity:j.bool};Dn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var I4=d1.bind(null,Te.createElement),M4={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},F4={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},D4={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const U4=_.div`
  padding: 10px;
  margin-bottom: 10px;
  /* margin-left: auto;
  margin-right: auto; */
`,B4=_.p`
  color: var(--mainColor);
  font-weight: bold;
  margin-bottom: 5px;
  @media screen and (min-width: 778px) {
margin-bottom: 10px;
  }
`;_(ta)`
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
  
  &:hover,
  &:focus{
    
    transform: translateY(-2px);
  }
`;const W4=()=>d.jsxs(U4,{children:[d.jsx(B4,{children:"Слідкуйте за нами у соцмережах"}),d.jsx(At,{"aria-label":"youtube link",to:"https://www.youtube.com/@user-ck5dw5yi1l/videos",className:"youtube social",target:"_blank",children:d.jsx(Dn,{style:{color:"#eb3223",marginRight:"20px"},icon:D4,size:"2x"})}),d.jsx(At,{"aria-label":"facebook link",to:"https://www.facebook.com/kdmsh22",className:"facebook social",target:"_blank",children:d.jsx(Dn,{style:{color:"#4968ad",backgroundColor:"#fff",borderRadius:"50%",marginRight:"20px"},icon:F4,size:"2x"})}),d.jsx(At,{"aria-label":"instagram link",to:"https://www.instagram.com/kdmsh22/",className:"instagram social",target:"_blank",children:d.jsx(Dn,{style:{color:"#ff4d4d"},icon:M4,size:"2x"})})]}),V4=_.footer`
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
`,H4=_.div`
  color: #212121;
  font-size: 10px;
  padding: 10px 20px;

`,Y4=()=>d.jsx(H4,{children:d.jsx("p",{children:"Copyright ©TarasPapka 2023"})}),G4=()=>d.jsx(V4,{children:d.jsxs(d.Fragment,{children:[d.jsx(W4,{}),d.jsx(Y4,{})]})});_.li`
list-style: none;
`;const Q4=_.ul`
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
`,Xt=_(ta)`
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
`,m1=({closeMobileMenu:e})=>d.jsxs(Q4,{children:[d.jsx(Xt,{to:"/",onClick:e,children:"Головна"}),d.jsx(Xt,{to:"/about",onClick:e,children:"Про нас"}),d.jsx(Xt,{to:"management",onClick:e,children:"Дирекція"}),d.jsx(Xt,{to:"team/1",onClick:e,children:"Викладачі"}),d.jsx(Xt,{to:"reviews",onClick:e,children:"Умови вступу"}),d.jsx(Xt,{to:"/departments",onClick:e,children:"Відділи"}),d.jsx(Xt,{to:"/bands",onClick:e,children:"Колективи"}),d.jsx(Xt,{to:"/contacts",onClick:e,children:"Контакти"})]});m1.propTypes={closeMobileMenu:j.func};const K4="/assets/xCross-436de7cd.svg",X4="/assets/mobileMenu-9d967880.svg",Z4="/assets/logo-99832143.svg",q4=_.div`
margin-right: 14px;
`,kp=_.img`
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
`,J4=_.div`
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
`,eb=()=>{const[e,t]=C.useState(!1),n=()=>{t(!0),document.body.classList.add("no-scroll")},r=()=>{t(!1),document.body.classList.remove("no-scroll")};return d.jsxs(q4,{children:[e?d.jsx(kp,{onClick:r,src:K4,alt:"mobile menu close"}):d.jsx(kp,{onClick:n,src:X4,alt:"mobile menu"}),e?d.jsx(J4,{children:d.jsx(m1,{closeMobileMenu:r})}):null]})},tb=()=>{const[e,t]=C.useState(!1),n=Z4;return C.useEffect(()=>{const r=()=>{};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),C.useEffect(()=>{const r=()=>{window.innerWidth<778?t(!0):t(!1)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),d.jsxs(Aw,{children:[d.jsxs(Lw,{children:[d.jsx(Mw,{to:"/",end:!0,children:d.jsxs(Fw,{children:[d.jsx("img",{src:n,width:"24px",height:"24px",alt:"logo"}),d.jsx(Iw,{children:"КДМШ №22"})]})}),e?d.jsx(d.Fragment,{children:d.jsx(eb,{})}):d.jsx(Dw,{children:d.jsxs(Rw,{children:[d.jsx("li",{children:d.jsx(Qt,{to:"/",end:!0,children:"Головна"})}),d.jsxs("li",{children:[d.jsx(Qt,{to:"/about",children:"Про нас "}),d.jsxs("ul",{className:"sub-menus",children:[d.jsx("li",{children:d.jsx(Qt,{to:"management",children:"Дирекція"})}),d.jsx("li",{children:d.jsx(Qt,{to:"team/1",children:"Викладачі"})}),d.jsx("li",{children:d.jsx(Qt,{to:"reviews",children:"Умови вступу"})})]})]}),d.jsx("li",{children:d.jsx(Qt,{to:"/departments",children:"Відділи"})}),d.jsx("li",{children:d.jsx(Qt,{to:"/bands",children:"Колективи"})}),d.jsx("li",{children:d.jsx(Qt,{to:"/contacts",children:"Контакти"})})]})})]}),d.jsx(v2,{}),d.jsx(G4,{})]})},nb=F.div`
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
`,rb=F.img`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
  width: 100%;
  height: 500px;
  display: ${e=>e.active?"block":"none"};
  object-fit:cover;
`,h1=F.div`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: #212121;
  cursor: pointer;
`,ib=F(h1)`
  left: 1rem;
`,ab=F(h1)`
  right: 0rem;
`,ob=F.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
`,lb=F.button`
  background-color: ${e=>e.active?"white":"grey"};
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`;var g1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bp=Te.createContext&&Te.createContext(g1),gn=globalThis&&globalThis.__assign||function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gn.apply(this,arguments)},sb=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function v1(e){return e&&e.map(function(t,n){return Te.createElement(t.tag,gn({key:n},t.attr),v1(t.child))})}function oa(e){return function(t){return Te.createElement(ub,gn({attr:gn({},e.attr)},t),v1(e.child))}}function ub(e){var t=function(n){var r=e.attr,i=e.size,a=e.title,o=sb(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Te.createElement("svg",gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:s,style:gn(gn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&Te.createElement("title",null,a),e.children)};return bp!==void 0?Te.createElement(bp.Consumer,null,function(n){return t(n)}):t(g1)}function cb(e){return oa({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"}}]})(e)}function fb(e){return oa({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}}]})(e)}const y1=({data:e})=>{const[t,n]=C.useState(0),r=()=>{n(t===e.length-1?0:t+1)},i=()=>{n(t===0?e.length-1:t-1)};return d.jsxs(nb,{children:[d.jsx(ib,{onClick:i,children:d.jsx(cb,{style:{width:"1.5em",height:"1.5em",fill:"wheat"}})}),e.map((a,o)=>d.jsx(rb,{src:a.src,alt:a.alt,active:t===o},o)),d.jsx(ab,{onClick:r,children:d.jsx(fb,{style:{width:"1.5em",height:"1.5em",fill:"wheat"}})}),d.jsx(ob,{children:e.map((a,o)=>d.jsx(lb,{active:t===o,onClick:()=>n(o)},o))})]})};y1.propTypes={data:j.arrayOf(j.shape({src:j.string.isRequired,alt:j.string.isRequired})).isRequired};const db=[{src:"https://i.ibb.co/sRV81GS/pic1.jpg",alt:"Image 1 for carousel"},{src:"https://i.ibb.co/PNQPh2b/pic2.jpg",alt:"Image 2 for carousel"},{src:"https://i.ibb.co/hfh7Nnx/pic3.jpg",alt:"Image 3 for carousel"},{src:"https://i.ibb.co/R7BQ92v/pic4.jpg",alt:"Image 4 for carousel"},{src:"https://i.ibb.co/5hc8PtF/pic5.jpg",alt:"Image 5 for carousel"}];_.img`
 max-width: 100%;
 height: auto;
`;const pb=_.section`
margin-left: auto;
margin-right: auto;
min-height: 700px;
`,mb=_.img`
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`,hb=_.div`
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
`,x1=_.div`
/* margin: auto; */
min-height: 500px;
@media screen and (min-width: 778px) {
min-height: 700px;
  }
`,la=_.section`
max-width: 1200px;
/* margin-left: 200px; */
/* margin-bottom:200px; */
font-size: 18px;
line-height:150%;
min-height: 500px;
@media screen and (min-width: 778px) {
min-height: 700px;
  }
`,Ir=_.h3`
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
`,Mr=_.div`
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
`,gb=_.div`
margin-top: 40px;
margin-bottom: 10px;
`,vb=_.ul`
margin-bottom: 20px;
font-size: 14px;
@media screen and (min-width: 778px) {
font-size: 18px;
  }
`,Fa=_.li`
list-style:square;
margin-left: 30px;
`,Sp=_.p`
color: var(--accentColor);
font-size: 12px;
line-height: 1.1;
@media screen and (min-width: 778px) {
font-size: 14px;
  }
`,yb=()=>d.jsxs(pb,{children:[d.jsx(y1,{data:db}),d.jsx(hb,{children:d.jsx("svg",{width:"100%",height:"100%",children:d.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",children:"Ласкаво просимо у світ музики!"})})})]}),xb=()=>d.jsxs(la,{children:[d.jsx(Ir,{children:"Про нас"}),d.jsx(Mr,{children:d.jsxs("article",{children:[d.jsx("p",{children:"У мальовничому, ошатному куточку Микільської Борщагівки Святошинського району міста Києва, на вулиці Зодчих, 22 - 01 жовтня 1971 року за рішенням №1615 виконавчого комітету Київської міської ради депутатів трудящих та завдяки ентузіазму і зусиллям світлої пам'яті директора Ворони Миколи Івановича, - розпочався перший навчальний рік дитячої музичної школи №22."}),d.jsx("p",{children:"Їй було надано частину приміщення четвертого поверху СШ №196, яку одразу було перебудовано й пристосовано для занять з учнями музичної школи."}),d.jsx("p",{children:"На початок відкриття у школі навчалося 68 учнів. З 1978 по 2017 рік плановий контингент виріс до 410 учнів. З вересня 2017 року школа отримала сучасне, капітально відремонтоване приміщення з великою актовою залою за адресою вулиця Зодчих, 30-а. затверджений міською владою контингент на сьогодні становить 502 учні. "}),d.jsx("p",{children:"50 років - значуща дата. Це половина сторіччя, не одне покоління випускників і сила пам'ятних моментів."}),d.jsx("p",{children:"Школа має не тільки багате минуле, творче сучасне, а й широкі перспективи розвитку в майбутньому. Впевненість у завтрашньому дні ґрунтується на високому професіоналізмі колективу, на багаторічних традиціях, сучасних методиках навчання і виховання, тісній співпраці з випускниками, батьками. "}),d.jsx("p",{children:"Саме людська неповторність викладача визначає обличчя нашого закладу. Глибока шана у нашому серці тим, кого ми називаємо педагогами-ветеранами: це - Триліська Наталія Костянтинівна, Манаєнкова Лариса Олегівна, Рудніцька Ніна Петрівна, Лосєва Евеліна Леонтіївна, Козлова Нонна Олексіївна, Чайка Тетяна Олексіївна, Галаєва Валерія Олександрівна, Іванько Лариса Олександрівна, Єфремова Тетяна Миколаївна, Давидовська Лоліта Ігорівна, Касатова Людмила Федорівна, Уманець Валентина Дмитрівна, Кірш Наталія Євгеніїівна, Кірш Анатолій Якович, Семенова Галина Петрівна, Лук'янчук Наталія Євгеніївна, Пучко Євгенія Федорівна, Васіна Людмила Василівна, Бєлєнок Маргарита Генріховна. Їх щедрого дару душі вистачає не тільки на учнів, адже молоді педагоги вчаться у них високому дару віддавати серце маленьким музикантам."}),d.jsx("p",{children:"Життя невблаганне і сьогодні, на превеликий жаль не змогли святкувати з нами педагоги, які відійшли у вічність - Штанько Володимир Степанович, Малушенко Людмила Сельвестрівна, Колесник Тетяна Львівна, Кір'янов Олександр Миколайович, Вакаренко Валентина Юріївна, Перевозніков Олег Олександрович, Ускова Наталія Владленівна."}),d.jsx("p",{children:"Навчання в школі здійснюється за індивідуальними і груповими дисциплінами: фортепіано, скрипка, віолончель, акордеон, баян, гітара, укулеле, домра, бандура, мандоліна, саксофон, флейта, труба, ударні інструменти, академічний та естрадний вокал, синтезатор, ансамбль, оркестр, історія музичної літератури, сольфеджіо, хор."}),d.jsx("p",{children:"За весь період роботи КДМШ №22 (з 1971 по 2021 рр.) свідоцтва про закінчення школи отримали 2256 учнів. З них 682 учні закінчили вищі навчальні мистецькі заклади та працюють у сфері мистецтва. 32 - працюють викладачами у ДМШ. Колишня випускниця школи Гончарова І.Б. в 2000 році отримала звання «Заслужена артистка України»."})]})})]}),w1=_.div`
 display: flex;
  position: absolute;
  gap: 0.4em;
  flex-direction: column;
  background-color: var(--base);
  color: var(--mainColor);
  height: 30%;
   width: 100%;
  bottom: 0;
  border-radius: 10px;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  /* padding: 1rem; */
`,wb=_.svg`
  width: 48px;
  margin-left: auto;
  margin-right: auto;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,kb=_.div`
  height: 220px;
 max-width: 200px;
 margin-bottom: 10px;
  flex-grow: 1;
  flex-basis: 190px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  box-shadow: 0 0 2px 1px var(--accentColor);
  overflow: hidden;

  &:hover ${w1} {
    transform: translateY(100%);
    opacity: 0;
  }
`,bb=_.img`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #0a3394;
  background: linear-gradient(to top, #0a3394, #4286f4);
`,Sb=_.p`
font-size: 1rem;
  font-weight: 700;
  text-align: center;
`,Cp=_.p`
font-size: 0.8rem;
  line-height: 100%;
  text-align: center;
`,k1=[{url:"https://i.ibb.co/hfh7Nnx/pic3.jpg",name:"Соломія Гуль",title:"Викладач",experience:"2021",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичкові інструменти",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/KxJcy9Z/Yehor.jpg",name:"Єгор Куриленко",title:"Викладач",experience:"2019",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Духові інструменти",instrument:"Саксофон, Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/SKBXr0X/Tetiana.jpg",name:"Тетяна Чайка",title:"Викладач",experience:"1972",band:"Оркестр народної музики 'Барвисті Візерунки', Дует 'НоТа'",department:"Фортепіано",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/W5bMjKK/Serhiy.jpg",name:"Сергій Левчук",title:"Викладач",experience:"2010",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Духові інструменти",instrument:"Труба",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/YjbDdJ1/Lyubov.jpg",name:"Любов Герасимчук",title:"Директор",experience:"1972",band:"",department:"Фортепіано",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/MSTR3kf/svitlana.jpg",name:"Світлана Філоненко",title:"Заступник директора",experience:"1995",band:"",department:"Народні інструменти",instrument:"Бандура",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/J3KBkzZ/Tamara.jpg",name:"Тамара Теліна",title:"Заввідділом",experience:"2002",band:"Ансамбль флейтистів",department:"Духові інструменти",instrument:"Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/DG1ZYY4/Halyna.jpg",name:"Галина Головацька-Гуль",title:"Заввідділом",experience:"1999",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичкові інструменти",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/fGpdTBV/Gitar.jpg",name:"Лілія Герасимчук",title:"Викладач",experience:"1992",band:"Ансамбль гітаристів",department:"Народні інструменти",instrument:"Гітара",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/hfh7Nnx/pic3.jpg",name:"Соломія Гуль",title:"Викладач",experience:"2021",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичкові інструменти",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/KxJcy9Z/Yehor.jpg",name:"Єгор Куриленко",title:"Викладач",experience:"2019",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Духові інструменти",instrument:"Саксофон, Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/SKBXr0X/Tetiana.jpg",name:"Тетяна Чайка",title:"Викладач",experience:"1972",band:"Оркестр народної музики 'Барвисті Візерунки', Дует 'НоТа'",department:"Фортепіано",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/W5bMjKK/Serhiy.jpg",name:"Сергій Левчук",title:"Викладач",experience:"2010",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Духові інструменти",instrument:"Труба",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/YjbDdJ1/Lyubov.jpg",name:"Любов Герасимчук",title:"Директор",experience:"1972",band:"",department:"Фортепіано",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/MSTR3kf/svitlana.jpg",name:"Світлана Філоненко",title:"Заступник директора",experience:"1995",band:"",department:"Народні інструменти",instrument:"Бандура",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/J3KBkzZ/Tamara.jpg",name:"Тамара Теліна",title:"Заввідділом",experience:"2002",band:"Ансамбль флейтистів",department:"Духові інструменти",instrument:"Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/DG1ZYY4/Halyna.jpg",name:"Галина Головацька-Гуль",title:"Заввідділом",experience:"1999",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичкові інструменти",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/fGpdTBV/Gitar.jpg",name:"Лілія Герасимчук",title:"Викладач",experience:"1992",band:"Ансамбль гітаристів",department:"Народні інструменти",instrument:"Гітара",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"}],so=_.div`
display: flex;
gap: 20px;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`,cf=_.li`
  position: relative;
  /* max-width: 250px; */
  aspect-ratio: 16/9;
  background-color: var(--base);
  border-radius: 5px;
  max-width: 230px;
  flex-grow: 1;
  flex-basis: 250px;
  overflow: hidden;
  box-shadow: 0 0 0 2px #e86969;
  transition: all 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
   &:hover {
    transform: scale(1.03);
    /* box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2); */
    background-color: var(--base);
  }
`,Cb=_.div`
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
`,Eb=_.p`
 margin: 5px 0 5px;
  font-size: 12px;
  color: var(--mainColor);
  line-height: 1.4;
`,Pb=_.p`
  margin: 0;
  font-size: 14px;
  color: var(--mainColor);
  font-weight: 700;
`,jb=_.button`
  padding: 10px;
  border-radius: 8px;
  background: var(--accentColor);
  border: none;
  color: white;
  cursor: pointer;
`,_b=_.img`
  object-fit: contain;
  width: 100%;
  height: 100%;

`,b1=_.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${cf}:hover & {
    transform: scale(0);
  }
`,Tb=()=>{const e=k1.filter(t=>t.section==="Management");return d.jsx(so,{children:e.map((t,n)=>d.jsxs(kb,{children:[t.url?d.jsx(bb,{src:t.url,alt:`photo of ${t.name}`}):d.jsx(wb,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),d.jsxs(w1,{children:[d.jsx(Sb,{children:t.name}),d.jsx(Cp,{children:t.title}),d.jsx(Cp,{children:t.phone})]})]},n))})},Nb=()=>d.jsxs(la,{children:[d.jsx(Ir,{children:"Керівний склад"}),d.jsx(Mr,{children:d.jsx("article",{children:d.jsx("p",{children:"Сьогодні КДМШ №22 - мистецький заклад, творчий колектив якого, на чолі з директором Любов'ю Василівною Герасимчук (яка очолює школу з 1999 року, до цього з 1978 року - була заступником директора з навчальної роботи) та заступниками директора Філоненко Світланою Леонідівною (яка замінила на посаді заступника директора з навчальної роботи Уманець Олену Миколаївну у 2019 році) та Снігур Олександрою Олегівною (яка на посаді заступника директора з виховної роботи у 2019 році замінила Лисенко Юлію Валеріївну) по праву займає достойне місце серед мистецьких навчальних закладів міста."})})}),d.jsx(Tb,{})]});F.div`
`;const Ob=F.ul`
  z-index: 2;
  padding: 0 0 40px 0;

  @media screen and (min-width: 778px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;

  }

`,$b=F.div`
  cursor: pointer;
  margin-bottom: 10px;
`,zb=F.button`
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
`,Ab=F.p`
  // position: absolute;
  // z-index: 2;
`,Rb=F.div`
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
`;const S1=({currentPage:e,totalPages:t,onChangePage:n,pageType:r})=>{const i=Sl(),a=o=>{i(`/${r}/${o}`),n(o)};return d.jsx(Rb,{children:[...Array(t).keys()].map(o=>d.jsx("li",{children:d.jsx(At,{to:`/${r}/${o+1}`,children:d.jsx(zb,{onClick:()=>a(o+1),active:`${e===o+1?"active":""}`,children:d.jsx(Ab,{children:o+1})})})},o))})};S1.propTypes={currentPage:j.number,totalPages:j.number,onChangePage:j.func,pageType:j.string};function Lb(e){return oa({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}const Ib=F.div`
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
  
`,Mb=F.div`
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
`,Fb=F.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
   @media screen and (min-width: 768px) {
 top: 15px;
  right: 15px;
  }
`,C1=({isOpen:e,closeModal:t,children:n})=>{const r=a=>{a.stopPropagation()},i=a=>{a.target===a.currentTarget&&t()};return C.useEffect(()=>{e?(document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"):(document.body.style.overflow="auto",document.documentElement.style.overflow="auto")},[e]),d.jsx(d.Fragment,{children:e&&d.jsx(Ib,{onClick:i,children:d.jsxs(Mb,{className:"ModalContent",onClick:r,children:[d.jsx(Fb,{onClick:t,children:d.jsx(Lb,{size:18})}),n]})})})};C1.propTypes={isOpen:j.bool.isRequired,closeModal:j.func.isRequired,children:j.node};const Db=F.div`
font-size: inherit;
@media screen and (min-width: 768px) {
margin-bottom:20px;
margin-top:20px
  }
`,E1=F.div`
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
`,Ub=F.img`
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
`,Bb=F.div`
text-align: center;

`,Wb=F.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${E1}:hover & {
    transform: scale(0);
  }
`,Vb=F.div`
font-size: 14px;
padding: 5px 10px;
@media screen and (min-width: 768px) {
      font-size: 20px;
      padding: 10px 20px;
  }
`,Hb=F.p`
font-weight: 600;
text-transform: uppercase;
font-size: 4vw;
margin-bottom: 10px;

@media screen and (min-width: 768px) {
      font-size: 36px; 
      text-transform: uppercase;
      margin-bottom: 15px;
  }
`,Yb=F.p`
/* text-transform: uppercase; */
font-size: 3vw;
/* color: var(--accentColor); */
padding-bottom: 10px;
margin-bottom: 10px;
border-bottom: 1px solid var(--accentColor);

@media screen and (min-width: 768px) {
      font-size: 20px;
  }
`,Gb=F.span`
margin-left: 10px;
color: var(--accentColor);

`,Qb=F.p`
/* font-size: 14px; */
`,Kb=F.p`
margin-bottom: 20px;
/* font-size: 14px; */
`,Ep=F.span`
font-weight: 600;
margin-right: 10px;
color:var(--accentColor);
/* font-size: 14px; */
@media screen and (min-width: 768px) {
      font-size: 20px;
  }
`;F.button`

`;const Xb=F.p`
/* font-size: 14px; */
`,sa=_.button`
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

`,P1=_.span`
 font-size: 15px;
 z-index: 3;
 position: relative;
 font-weight: 600;
`,j1=({name:e,title:t,img:n,description:r,experience:i,band:a,department:o})=>{const s=new Date().getFullYear()-i;return d.jsxs(Db,{children:[d.jsx(E1,{children:n?d.jsx(Ub,{src:n,alt:`photo of ${e}`}):d.jsx(Wb,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})})}),d.jsxs(Vb,{children:[d.jsx(Hb,{children:e}),d.jsxs(Yb,{children:[t,":",d.jsx(Gb,{children:o})]}),d.jsx(Qb,{children:r}),d.jsxs(Xb,{children:[d.jsx(Ep,{children:"Стаж:"}),s,"р."]}),d.jsxs(Kb,{children:[d.jsx(Ep,{children:"Колективи:"}),a]}),d.jsx(Bb,{children:d.jsx(At,{to:"https://forms.gle/PVcbo8fZEWQrJm4G8",target:"_blank",children:d.jsx(sa,{children:d.jsx(P1,{children:"Записатися"})})})})]})]})};j1.propTypes={id:j.number,name:j.string,title:j.string,phone:j.string,img:j.string,description:j.string,experience:j.string,band:j.string,department:j.string};const _1=({data:e})=>{const[t,n]=C.useState(!1),[r,i]=C.useState(null),a=l=>{i(l),n(!t)},o=l=>{so.current&&!so.current.contains(l.target)&&n(!1)};return C.useEffect(()=>{const l=s=>{s.key==="Escape"&&t&&n(!1)};return document.addEventListener("keydown",l),document.addEventListener("click",o),()=>{document.removeEventListener("keydown",l),document.removeEventListener("click",o)}},[t]),d.jsxs(so,{children:[e.map((l,s)=>d.jsxs(cf,{children:[l.url?d.jsx(_b,{src:l.url,alt:`photo of ${l.name}`}):d.jsx(b1,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),d.jsxs(Cb,{children:[d.jsx(Pb,{children:l.name}),d.jsx(Eb,{children:l.title}),d.jsx(jb,{onClick:()=>a(l),children:"Детальніше"})]})]},s)),t&&r&&d.jsx(C1,{isOpen:t,closeModal:()=>n(!1),children:d.jsx(j1,{name:r.name,title:r.title,description:r.description,phone:r.phone,img:r.url,experience:r.experience,band:r.band,department:r.department})})]})};_1.propTypes={data:j.array.isRequired};const T1=({data:e})=>{const[t,n]=C.useState(16),[r,i]=C.useState(1);C.useEffect(()=>{const o=()=>{window.innerWidth>778?n(16):n(6)};return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]);const a=o=>{i(o)};return d.jsxs(d.Fragment,{children:[d.jsx(Ob,{children:d.jsx(_1,{data:e.slice((r-1)*t,r*t)})}),d.jsx($b,{children:d.jsx(S1,{currentPage:r,totalPages:Math.ceil(e.length/t),onChangePage:a,pageType:"team"})})]})};T1.propTypes={data:j.array.isRequired};const Zb=_.div`
position: relative;
width: 100%;
@media only screen and (min-width: 1200px) {  
    width: 260px;
  }
`,N1=_.input`
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
`,qb=_(N1)`
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
`,Bu=({value:e,onFilterChange:t,inputStyle:n,placeholder:r})=>{let i;return n==="active"?i=N1:n==="secondary"&&(i=qb),d.jsx(Zb,{children:d.jsx(i,{type:"text",name:"text",placeholder:r,value:e,onChange:a=>t(a.target.value)})})};Bu.propTypes={value:j.string,inputStyle:j.string.isRequired,placeholder:j.string,onFilterChange:j.func.isRequired};function Jb(e){return oa({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function e5(e){return oa({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(e)}const t5=_.div`
  position: relative;
  width:100%;
   @media only screen and (min-width: 1200px) {
    width: 300px;
  }
`,n5=_.button`
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
    font-size: 17px;
    margin-bottom: 0;
  }
`,r5=_.div`
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
`,i5=_.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: var(--subColor);
  }
`,a5=_.div`
  color: var(--subColor);
  font-size: 17px;
`,O1=({options:e,value:t,onChange:n,placeholder:r,onFilterChange:i})=>{const[a,o]=C.useState(!1),[l,s]=C.useState(t||""),u=p=>{p!==l&&(s(p),n(p),i(p)),o(!1)},f=()=>{o(!a)};return d.jsxs(t5,{onClick:f,children:[d.jsx(n5,{children:r?l||d.jsx(a5,{children:r}):l}),a?d.jsx(e5,{width:20,height:20,style:{position:"absolute",top:"20px",right:"20px"}}):d.jsx(Jb,{style:{position:"absolute",top:"20px",right:"20px"}}),a&&d.jsx(r5,{open:a,children:e.map(p=>d.jsx(i5,{onClick:()=>u(p),children:p},p))})]})};O1.propTypes={options:j.arrayOf(j.string),value:j.string,onChange:j.func,placeholder:j.string,onFilterChange:j.func};const o5=_.div`
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
`,$1=({onFilterChange:e,data:t})=>{const[n,r]=C.useState(t),[i,a]=C.useState([]),[o,l]=C.useState([]),[s,u]=C.useState([]),[f,p]=C.useState("Виберіть відділ"),[g,y]=C.useState(""),[x,v]=C.useState("");C.useEffect(()=>{p("Виберіть відділ"),y(""),v("")},[]),C.useEffect(()=>{const m=Array.from(new Set(n.map(w=>w.department))),c=Array.from(new Set(n.map(w=>w.title))),h=Array.from(new Set(n.map(w=>w.name)));a(["Виберіть відділ",...m]),l(["Пошук за прізвищем",...h]),u(["Пошук за посадою",...c])},[n]);const S=()=>{const m={department:f,name:g.toLowerCase(),title:x.toLowerCase()},c=n.filter(h=>{const w=m.department==="Виберіть відділ"||h.department===f,k=m.name===""||h.name.toLowerCase().includes(g),E=m.title===""||h.title.toLowerCase().includes(x);return w&&k&&E});e(c),y(""),v("")};return d.jsxs(o5,{children:[d.jsx(O1,{options:i,value:f,onChange:m=>p(m),placeholder:"Виберіть відділ",onFilterChange:m=>p(m)},t.id),d.jsx(Bu,{options:o,value:g,onFilterChange:m=>y(m),inputStyle:"active",placeholder:"Пошук за прізвищем",name:"name"}),d.jsx(Bu,{options:s,value:x,onFilterChange:m=>v(m),inputStyle:"active",placeholder:"Пошук за посадою",name:"title"}),d.jsx(sa,{style:{margin:"0px"},onClick:S,children:"Пошук"})]})};$1.propTypes={data:j.array.isRequired,onFilterChange:j.func.isRequired};const z1=()=>{const[e,t]=C.useState(k1),n=r=>{t(r)};return d.jsxs(la,{children:[d.jsx(Ir,{children:"Викладацький склад"}),d.jsx($1,{onFilterChange:n,data:e}),d.jsx(T1,{data:e})]})};z1.propTypes={data:j.array};const l5=()=>d.jsxs(la,{children:[d.jsxs("div",{children:[d.jsx(Ir,{children:"Умови вступу"}),d.jsx(Mr,{children:"До школи приймаються діти віком від 5 років у залежності від обраного музичного інструменту. Навчання у школі проводиться на таких відділах: - фортепіанному; - струнно-смичковому: скрипка,  віолончель; - народних інструментів: баян, акордеон, гітара; - духових та ударних інструментів: флейта, саксофон, труба, ударні інструменти; - хоровому. Вступ до школи  відбувається на конкурсній основі на підставі вступних  прослуховувань перевірки музичних здібностей, що включає в себе:  виконання (спів) пісні за власним вибором, повторення за вчителем нескладного ритму та мелодії."}),d.jsx(Mr,{children:"Заповнити форму рєстрації для вступу можна за посиланням:"}),d.jsx(At,{to:"https://forms.gle/PVcbo8fZEWQrJm4G8",target:"_blank",children:d.jsx(sa,{"aria-label":"registration",children:d.jsx(P1,{children:"Форма рєстрації"})})})]}),d.jsxs(gb,{children:[d.jsx(Ir,{children:"Перелік документів, які необхідні для вступу до школи:"}),d.jsxs(vb,{children:[d.jsx(Fa,{children:"Заява"}),d.jsx(Fa,{children:"Копія свідоцтва про народження"}),d.jsx(Fa,{children:"Медична довідка."}),d.jsx(Fa,{children:"Копія ідентифікаційного коду (за наявності)"})]}),d.jsx(Sp,{children:"* Заява встановленого зразка заповнюється на місці."}),d.jsx(Sp,{children:"Для здобувачів, що навчаються на пільговій основі, передбачен інший пакет документів."})]})]}),A1=[{id:"a-1",name:"Фортепіано",photo:"https://i.ibb.co/QYzYNWg/pexels-cottonbro-studio-5650529.jpg",about:"Гра на фортепіано - це захоплива подорож для дітей у світ музики та можливість виявити свій музичний потенціал та розвинути творчі здібності. Цей чудовий інструмент надає можливість дітям виразити свої почуття та емоції через музику, розвиваючи в них музичний слух і вміння читати ноти. Гра на фортепіано також сприяє поліпшенню координації рук, розвитку концентрації та терпіння. Безсумнівно, цей інструмент відкриває двері до неймовірного світу музики, який зачаровує та надихає юних музикантів."},{id:"a-2",name:"Струнно-смичкові інструменти",photo:"https://i.ibb.co/jrbbY7z/pexels-pixabay-210854.jpg",about:"Гра на струнно-смичкових інструментах - це захоплюючий світ, який дає дітям відкрити в собі музичну магію. Вони зможуть відчути власні обрані ноти, створюючи чарівні мелодії, що сповнені почуттями та виразністю. Гра на скрипці, віолончелі або альту розвиває в дітях вміння слухати, концентруватися і сприяє виробленню гармонійного почуття ритму. Крім того, ці інструменти навчають відповідальності, адже для досягнення високих результатів потрібно вкладати час та наполегливість. Грати на струнно-смичкових інструментах - це завжди цікаво та вдячно, адже вони дарують можливість створювати чарівну музику."},{id:"a-3",name:"Духові інструменти",photo:"https://i.ibb.co/RNtNjTy/pexels-teddy-yang-2254140.jpg",about:"Гра на духових інструментах - це неймовірна пригода для дітей, яка запрошує у музичний світ. Вони зможуть відчути себе справжніми музикантами, навчившись грати на трубі, саксофоні, флейті та інших інструментах. Ця діяльність сприяє розвитку дихальної системи та допомагає покращити контроль над диханням. Гра на духових інструментах також вчить дітей спілкуватися мовою музики та виражати свої почуття через звуки. Вона робить музику доступною і захоплюючою, а також допомагає формувати вміння слухати та сприймати мелодію. Це чудовий спосіб для дітей виразити свою індивідуальність та розкрити свій творчий потенціал."},{id:"a-4",name:"Ударні інструменти",photo:"https://i.ibb.co/XJKYNGg/pexels-josh-sorenson-995301.jpg",about:"Гра на ударних інструментах - це особливий спосіб виплеснути свою енергію. Діти зможуть віднайти у собі справжнього ударника, навчившись грати на барабанах, ксилофоні, дзвіночках і багатьох інших інструментах. Гра на ударних інструментах розвиває координацію рук та розвиток моторики, а також допомагає дітям вчитися працювати в команді та слухати одне одного у музичному виконанні. Це чудовий спосіб для дітей виразити свої почуття через ритм і створити музику власноруч. Ударні інструменти роблять музику неймовірно захопливою і доступною для маленьких музикантів."},{id:"a-5",name:"Народні інструменти",photo:"https://i.ibb.co/3FLhwtw/pexels-pixabay-33597.jpg",about:"Народні інструменти, такі як гітара, бандура, баян та інші, відкривають дітям чарівний світ музики, насичений культурними традиціями. Граючи на цих інструментах, діти пізнають багатство своєї спадщини і вчаться виконувати мелодії, які були передані з покоління в покоління. Народні інструменти допомагають зберігати і популяризувати унікальні музичні традиції та вчать дітей цінувати різноманіття культур. Завдяки навчанню на народних інструментах, діти можуть долучитися до світу української, а також інших національних музичних мистецтв та стати частиною неперевершеної музичної спадщини."},{id:"a-6",name:"Вокал",photo:"https://i.ibb.co/7n0qgsY/pexels-dmitry-demidov-3783471.jpg",about:"Вокальне мистецтво - це дивовижний світ виразності та музичної гармонії. У нашій музичній школі, діти отримають можливість розкрити свій вокальний талант під керівництвом досвідчених викладачів. Ми пропонуємо індивідуальні та групові заняття вокалом, де діти вивчають основи вокальної техніки, розвивають свій голос, та вчаться виконувати улюблені пісні. Вокальне навчання розширює музичний горизонт дітей і дарує їм можливість виразити свої почуття та емоції через музику."},{id:"a-7",name:"Музично - теоретичний відділ",photo:"https://i.ibb.co/Qrsrzc2/bg.jpg",about:"Музично-теоретичний відділ нашої школи є важливою складовою частиною музичної освіти для дітей. Тут діти здобувають теоретичні знання, які є основою для розуміння музики. Вони вивчають музичну нотацію, ритміку, гармонію, історію музики та багато іншого. Навички, отримані в музично-теоретичному відділі, допомагають дітям краще розуміти та виконувати музику на своїх інструментах або вокально. Відкривши для себе музичну теорію, діти розкривають перед собою безмежні можливості у музичному світі."}],s5=()=>A1,u5=e=>A1.find(t=>t.id===e),R1=[{id:"q-1",name:"Оркестр народної музики 'Барвисті Візерунки'",photo:"https://i.ibb.co/3CJPfYt/orhestra.jpg",about:"Гордістю школи є оркестр народної музики «Барвисті візерунки» (керівник Галина Головацька-Гуль), створений в жовтні 2008 року. Репертуар оркестру складається з обробок пісень і танців народів світу. Колектив веде активну концертну діяльність, має численні нагороди багатьох міжнародних конкурсів та фестивалів як в Україні так і за кордоном – у Чехії, Угорщині, Болгарії, Італії та ін. Керівник оркестру - викладач Галина Головацька-Гуль, саме вона наполегливо відкриває в душах своїх вихованців чарівний світ музики та гармонії. Звичайно, велика роль належить обдарованим і талановитим викладачам струнно-смичкового, духового та відділу народних інструментів школи, з учнів яких і складається колектив."},{id:"q-2",name:"Фортепіанний дует 'Но-Та'",photo:"https://i.ibb.co/Khng8mg/Nota.jpg",about:"Фортепіанний дует 'НоТа' у складі викладачів - Нонни Козлової і Тетяни Чайки (лауреати Міжнародних премій 'Дружба' та ім. С.Гулака-Артемовського), вже більше 40 років дарує свою яскраву, емоційну, неперевершену майстерність слухачам, популяризуючи як творчість автора відомого романсу 'Хризантеми' Миколи Харито, так і у власному перекладенні для фортепіанного ансамблю перлин української класики та народних пісень. Їх виступи завжди супроводжуються аваціями глядацької аудиторії. За час своєї творчої діяльності вони дали біля 700 концертів на найрізноманітніших сценах України та зарубіжжя. "},{id:"q-3",name:'Дитячий хор "Струмочок"',photo:"https://i.ibb.co/mztr6F7/IMG-20230120-160646-225.jpg",about:"Керівник: Євгенія Пучко, концертмейстер: Наталія Лук’янчук"},{id:"q-4",name:"Ансамбль скрипалів",photo:"https://i.ibb.co/FDxTGJX/image.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-5",name:"Ансамбль флейтистів",photo:"https://i.ibb.co/5WKxV46/IMG-20230508-154004-124.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-6",name:"Вокальний дует",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-7",name:"Фольклорний ансамбль",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-8",name:"Ансамблі гітаристів",photo:"https://i.ibb.co/PNQPh2b/pic2.jpg",about:"Активну концертну діяльність ведуть ансамблі гітаристів «Палітра», «Лілея», до складу яких входять викладачі Лілія Герасимчук, Тамара Теліна, Юлія Лисенко. Ансамблі майстерно та яскраво виступають на конкурсних сценах України, Білорусі, беруть участь у численних благодійних концертах.	Талановиті викладачі КДМШ №22 успішно поєднують педагогічну й артистичну діяльність та вписують свою сторінку в історію української музичної культури."},{id:"q-9",name:"Дитячий музичний театральний колектив 'Пташечки'",photo:"https://i.ibb.co/pZFmyzf/6.jpg",about:'У 2015 році в школі створено дитячий музичний театральний колектив "Пташечки" (керівник Триліська Наталія Костянтинівна, концертмейстер і постановник Кірш Наталія Євгеніївна). В творчому доробку колективу налічується 1 дитяча опера («З друзями біда – не біда»), 2 мюзикли («Пригоди трьох кошенят» і «День народження Принцеси») та кілька театралізованих музичних вистав (українська сюїта «А у нас на Україні» та постановка на пісню, написану Наталією Триліською у співавторстві з Наталією Кірш - «Україна моя»). Колектив «Пташечки» – неодноразовий лауреат Всеукраїнських та Міжнародних конкурсів.'}],c5=()=>R1,f5=e=>R1.find(t=>t.id===e),L1=_.div`
     width:100%;
    /* margin-bottom: 100px; */
    /* min-height: 700px; */
`,I1=_.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
`,M1=_.li`
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
`,F1=_.img`
width: 100%;
height: 140px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`,D1=_(ta)`
    display: block;
    max-width: 250px;
    height: 200px;
    text-decoration: none;
    color: currentColor;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width:768px) and (max-width:1199px) {
        height: 100%;
    }
`,U1=_.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.2;
    letter-spacing: 0.06em;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
    /* height: 60px; */
`,B1=({departments:e})=>d.jsx(L1,{children:d.jsx(I1,{children:e.map(t=>d.jsx(M1,{children:d.jsxs(D1,{to:`${t.id}`,children:[d.jsx(F1,{src:t.photo,alt:t.name}),d.jsx(U1,{children:t.name})]})},t.id))})});B1.propTypes={departments:j.arrayOf(j.shape({id:j.string.isRequired,name:j.string.isRequired})).isRequired};const d5=()=>{const e=s5();return d.jsxs(x1,{children:[d.jsx(B1,{departments:e}),d.jsx(Mr,{children:d.jsx("article",{children:d.jsx("p",{children:"В школі працює 8 відділів, які очолюють висококваліфіковані викладачі: фортепіанний відділ №1 - завідуюча відділом Триліська Н.К., фортепіанний відділ №2 - Козлова Н.О., відділ народних інструментів - Іщук І.В., струнно-смичковий відділ - Головацька-Гуль Г.В., відділ духових та ударних інструментів - Теліна Т.К., відділ предмету за вибором - Лосєва Е.Л., відділ концертмейстерства та вокалу - Лук'янчук Н.Є., теоретичний відділ - Семенова Г.П."})})})]})},W1=_.p`

  color: var(--accentColor);
  font-size: 1.8em;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`,V1=_.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  color: var(--mainColor);
  @media screen and (min-width: 778px) {
  font-size: 1.4em;
  }
`,H1=_.div`
margin-bottom: 20px;
margin: auto;
min-height: 700px;
/* margin-bottom: 20px; */
`,p5=_.div`
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
`,Y1=_.div`
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
`,G1=_.div`
   margin-top: -4px;
  margin-right: -4px;
  color: var(--mainColor);
  font-family: courier, sans;
`,m5=()=>{const{id:e}=f0(),t=u5(e),n=Sl(),r=()=>{n(-1)};return d.jsxs(H1,{children:[d.jsxs(p5,{children:[d.jsx(mb,{src:t.photo,alt:t.name,onError:i=>{i.target.style.display="none";const a=document.createElement("div");a.style.width="100%",a.style.height="200px",a.style.border="1px solid var(--accentColor)",a.style.backgroundColor="linear-gradient(to right, #fff5ed 0 90%)",i.target.parentNode.insertBefore(a,i.target)}}),d.jsx(W1,{children:t.name}),d.jsx(V1,{children:t.about}),d.jsx(Y1,{children:d.jsx(G1,{})})]}),d.jsx(sa,{"aria-label":"go back",onClick:r,children:"Повернутися назад"})]})},Q1=({bands:e})=>d.jsx(L1,{children:d.jsx(I1,{children:e.map(t=>d.jsx(M1,{children:d.jsxs(D1,{to:`${t.id}`,children:[t.photo?d.jsx(F1,{src:t.photo,alt:`photo of ${t.name}`}):d.jsx(b1,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),d.jsx(U1,{children:t.name})]})},t.id))})});Q1.propTypes={bands:j.arrayOf(j.shape({id:j.string.isRequired,name:j.string.isRequired})).isRequired};const h5=()=>{const e=c5();return d.jsx(x1,{children:d.jsx(Q1,{bands:e})})},g5=_.div`
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
`,v5=_.img`
width: 100%;
height: auto;
/* object-fit: cover; */
object-fit: contain;
border-radius: 15px;
 /* box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px; */
 @media screen and (min-width: 778px) {
  height: 400px;
  }
`,y5=()=>{const{id:e}=f0(),t=f5(e),n=Sl(),r=()=>{n(-1)};return d.jsxs(H1,{children:[d.jsxs(g5,{children:[d.jsx(v5,{src:t.photo,alt:t.name,onError:i=>{i.target.style.display="none";const a=document.createElement("div");a.style.width="100%",a.style.height="200px",a.style.border="1px solid var(--accentColor)",a.style.backgroundColor="linear-gradient(to right, #fff5ed 0 90%)",i.target.parentNode.insertBefore(a,i.target)}}),d.jsx(W1,{children:t.name}),d.jsx(V1,{children:t.about}),d.jsx(Y1,{children:d.jsx(G1,{})})]}),d.jsx(sa,{"aria-label":"go back",onClick:r,children:"Повернутися назад"})]})},x5=_.div`
margin: auto;
min-height: 700px;
`,w5=_.h2`
font-family: 'Montserrat', sans-serif;
font-size: 24px;
font-weight: 600;
text-align: center;
color: var(--accentColor);
@media screen and (min-width: 558px) {
    font-size: 36px;
  }
`,k5=_.div`
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
`,b5=_.img`
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
`,S5=_.address`
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
`,Da=_.span`
font-weight: 600;
margin-right: 20px;

color: var(--accentColor);
`,C5="/assets/map-a7958fcf.png",E5=()=>d.jsxs(x5,{children:[d.jsx(w5,{children:"Контактна інформація"}),d.jsxs(k5,{children:[d.jsx(d.Fragment,{children:d.jsx(b5,{src:C5,alt:"map",width:"500px",height:"500px"})}),d.jsx(S5,{children:d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(Da,{children:"Адреса:"})," вулиця Зодчих, 30а, ",d.jsx("br",{}),"Київ, 03194"]}),d.jsxs("li",{children:[d.jsx(Da,{children:"Телефон:"}),d.jsx(At,{to:"tel:+380934139512",style:{textDecoration:"none",color:"#212121"},children:"(093) 413-95-12"})]}),d.jsxs("li",{children:[d.jsx(Da,{children:"Email:"}),d.jsx(At,{to:"mailto:dmsh22@ukr.net",target:"_blank",style:{textDecoration:"none",color:"#212121"},children:"dmsh22@ukr.net"})]}),d.jsxs("li",{children:[d.jsx(Da,{children:"Розклад роботи:"})," ",d.jsx("br",{})," пн-пт: 10.00 - 20.00 ",d.jsx("br",{})," cб: 10.00 - 16.00 ",d.jsx("br",{})," нд: вихідний"]})]})})]})]}),P5=()=>d.jsx(la,{children:d.jsxs(Mr,{children:[d.jsx(Ir,{children:"Про нас"}),"Для мешканців Святошинського району працює з 1971 року. Школа є державним позашкільним навчальним закладом освіти в галузі культури, здійснює естетичне виховання дітей, учнів, громадян, забезпечуючи принцип єдності і наступності мистецької освіти; проводить навчально-виховну, методичну, просвітницьку роботу."]})}),j5=()=>d.jsx(C.Suspense,{fallback:d.jsx(Nx,{}),children:d.jsx(x2,{children:d.jsxs(We,{path:"/",element:d.jsx(tb,{}),children:[d.jsx(We,{index:!0,element:d.jsx(yb,{})}),d.jsx(We,{path:"about",element:d.jsx(xb,{})}),d.jsx(We,{path:"school",element:d.jsx(P5,{})}),d.jsx(We,{path:"management",element:d.jsx(Nb,{})}),d.jsx(We,{path:"team/:currentPage",element:d.jsx(z1,{})}),d.jsx(We,{path:"reviews",element:d.jsx(l5,{})}),d.jsx(We,{path:"departments",element:d.jsx(d5,{})}),d.jsx(We,{path:"departments/:id",element:d.jsx(m5,{})}),d.jsx(We,{path:"bands",element:d.jsx(h5,{})}),d.jsx(We,{path:"bands/:id",element:d.jsx(y5,{})}),d.jsx(We,{path:"contacts",element:d.jsx(E5,{})})]})})});function _5(){return d.jsx(d.Fragment,{children:d.jsx(j5,{})})}ks.createRoot(document.getElementById("root")).render(d.jsx(P2,{children:d.jsx(_5,{})}));
