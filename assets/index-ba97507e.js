function V1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pp={exports:{}},Vo={},jp={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),H1=Symbol.for("react.portal"),Y1=Symbol.for("react.fragment"),G1=Symbol.for("react.strict_mode"),K1=Symbol.for("react.profiler"),Q1=Symbol.for("react.provider"),X1=Symbol.for("react.context"),Z1=Symbol.for("react.forward_ref"),q1=Symbol.for("react.suspense"),J1=Symbol.for("react.memo"),eg=Symbol.for("react.lazy"),cf=Symbol.iterator;function tg(e){return e===null||typeof e!="object"?null:(e=cf&&e[cf]||e["@@iterator"],typeof e=="function"?e:null)}var _p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tp=Object.assign,Np={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||_p}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Op(){}Op.prototype=Mr.prototype;function Uu(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||_p}var Bu=Uu.prototype=new Op;Bu.constructor=Uu;Tp(Bu,Mr.prototype);Bu.isPureReactComponent=!0;var ff=Array.isArray,$p=Object.prototype.hasOwnProperty,Wu={current:null},Ap={key:!0,ref:!0,__self:!0,__source:!0};function Rp(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)$p.call(t,r)&&!Ap.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gi,type:e,key:a,ref:o,props:i,_owner:Wu.current}}function ng(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function rg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var df=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rg(""+e.key):t.toString(36)}function Da(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gi:case H1:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Il(o,0):r,ff(i)?(n="",e!=null&&(n=e.replace(df,"$&/")+"/"),Da(i,t,n,"",function(u){return u})):i!=null&&(Vu(i)&&(i=ng(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(df,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ff(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Il(a,l);o+=Da(a,t,n,s,i)}else if(s=tg(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Il(a,l++),o+=Da(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(e,t,n){if(e==null)return e;var r=[],i=0;return Da(e,r,"","",function(a){return t.call(n,a,i++)}),r}function ig(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},Fa={transition:null},ag={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:Wu};F.Children={map:ua,forEach:function(e,t,n){ua(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ua(e,function(){t++}),t},toArray:function(e){return ua(e,function(t){return t})||[]},only:function(e){if(!Vu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Mr;F.Fragment=Y1;F.Profiler=K1;F.PureComponent=Uu;F.StrictMode=G1;F.Suspense=q1;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ag;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tp({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Wu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)$p.call(t,s)&&!Ap.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Gi,type:e.type,key:i,ref:a,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:X1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Q1,_context:e},e.Consumer=e};F.createElement=Rp;F.createFactory=function(e){var t=Rp.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Z1,render:e}};F.isValidElement=Vu;F.lazy=function(e){return{$$typeof:eg,_payload:{_status:-1,_result:e},_init:ig}};F.memo=function(e,t){return{$$typeof:J1,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Fa.transition;Fa.transition={};try{e()}finally{Fa.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return Oe.current.useCallback(e,t)};F.useContext=function(e){return Oe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};F.useEffect=function(e,t){return Oe.current.useEffect(e,t)};F.useId=function(){return Oe.current.useId()};F.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Oe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};F.useRef=function(e){return Oe.current.useRef(e)};F.useState=function(e){return Oe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Oe.current.useTransition()};F.version="18.2.0";jp.exports=F;var E=jp.exports;const Te=Ep(E),xs=V1({__proto__:null,default:Te},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og=E,lg=Symbol.for("react.element"),sg=Symbol.for("react.fragment"),ug=Object.prototype.hasOwnProperty,cg=og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fg={key:!0,ref:!0,__self:!0,__source:!0};function Ip(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ug.call(t,r)&&!fg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lg,type:e,key:a,ref:o,props:i,_owner:cg.current}}Vo.Fragment=sg;Vo.jsx=Ip;Vo.jsxs=Ip;Pp.exports=Vo;var m=Pp.exports,ws={},Lp={exports:{}},Qe={},zp={exports:{}},Mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,R){var I=_.length;_.push(R);e:for(;0<I;){var J=I-1>>>1,ie=_[J];if(0<i(ie,R))_[J]=R,_[I]=ie,I=J;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],I=_.pop();if(I!==R){_[0]=I;e:for(var J=0,ie=_.length,jt=ie>>>1;J<jt;){var Ue=2*(J+1)-1,Ht=_[Ue],Be=Ue+1,et=_[Be];if(0>i(Ht,I))Be<ie&&0>i(et,Ht)?(_[J]=et,_[Be]=I,J=Be):(_[J]=Ht,_[Ue]=I,J=Ue);else if(Be<ie&&0>i(et,I))_[J]=et,_[Be]=I,J=Be;else break e}}return R}function i(_,R){var I=_.sortIndex-R.sortIndex;return I!==0?I:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,d=null,g=3,y=!1,x=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=_)r(u),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(u)}}function w(_){if(v=!1,h(_),!x)if(n(s)!==null)x=!0,jn(k);else{var R=n(u);R!==null&&Je(w,R.startTime-_)}}function k(_,R){x=!1,v&&(v=!1,p(N),N=-1),y=!0;var I=g;try{for(h(R),d=n(s);d!==null&&(!(d.expirationTime>R)||_&&!Fe());){var J=d.callback;if(typeof J=="function"){d.callback=null,g=d.priorityLevel;var ie=J(d.expirationTime<=R);R=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(s)&&r(s),h(R)}else r(s);d=n(s)}if(d!==null)var jt=!0;else{var Ue=n(u);Ue!==null&&Je(w,Ue.startTime-R),jt=!1}return jt}finally{d=null,g=I,y=!1}}var C=!1,b=null,N=-1,M=5,L=-1;function Fe(){return!(e.unstable_now()-L<M)}function En(){if(b!==null){var _=e.unstable_now();L=_;var R=!0;try{R=b(!0,_)}finally{R?Pn():(C=!1,b=null)}}else C=!1}var Pn;if(typeof c=="function")Pn=function(){c(En)};else if(typeof MessageChannel<"u"){var la=new MessageChannel,Al=la.port2;la.port1.onmessage=En,Pn=function(){Al.postMessage(null)}}else Pn=function(){S(En,0)};function jn(_){b=_,C||(C=!0,Pn())}function Je(_,R){N=S(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,jn(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var I=g;g=R;try{return _()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=g;g=_;try{return R()}finally{g=I}},e.unstable_scheduleCallback=function(_,R,I){var J=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?J+I:J):I=J,_){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=I+ie,_={id:f++,callback:R,priorityLevel:_,startTime:I,expirationTime:ie,sortIndex:-1},I>J?(_.sortIndex=I,t(u,_),n(s)===null&&_===n(u)&&(v?(p(N),N=-1):v=!0,Je(w,I-J))):(_.sortIndex=ie,t(s,_),x||y||(x=!0,jn(k))),_},e.unstable_shouldYield=Fe,e.unstable_wrapCallback=function(_){var R=g;return function(){var I=g;g=R;try{return _.apply(this,arguments)}finally{g=I}}}})(Mp);zp.exports=Mp;var dg=zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=E,Ke=dg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,yi={};function Kn(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(yi[e]=t,e=0;e<t.length;e++)Fp.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ks=Object.prototype.hasOwnProperty,pg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pf={},mf={};function mg(e){return ks.call(mf,e)?!0:ks.call(pf,e)?!1:pg.test(e)?mf[e]=!0:(pf[e]=!0,!1)}function hg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gg(e,t,n,r){if(t===null||typeof t>"u"||hg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hu=/[\-:]([a-z])/g;function Yu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hu,Yu);be[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hu,Yu);be[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hu,Yu);be[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gu(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gg(t,n,i,r)&&(n=null),r||i===null?mg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Ku=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),Up=Symbol.for("react.provider"),Bp=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),Ss=Symbol.for("react.suspense"),Cs=Symbol.for("react.suspense_list"),Xu=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Wp=Symbol.for("react.offscreen"),hf=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=hf&&e[hf]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Ll;function ei(e){if(Ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ll=t&&t[1]||""}return`
`+Ll+e}var zl=!1;function Ml(e,t){if(!e||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ei(e):""}function vg(e){switch(e.tag){case 5:return ei(e.type);case 16:return ei("Lazy");case 13:return ei("Suspense");case 19:return ei("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function Es(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case Jn:return"Portal";case bs:return"Profiler";case Ku:return"StrictMode";case Ss:return"Suspense";case Cs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bp:return(e.displayName||"Context")+".Consumer";case Up:return(e._context.displayName||"Context")+".Provider";case Qu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xu:return t=e.displayName||null,t!==null?t:Es(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return Es(e(t))}catch{}}return null}function yg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Es(t);case 8:return t===Ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xg(e){var t=Vp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fa(e){e._valueTracker||(e._valueTracker=xg(e))}function Hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ps(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yp(e,t){t=t.checked,t!=null&&Gu(e,"checked",t,!1)}function js(e,t){Yp(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_s(e,t.type,n):t.hasOwnProperty("defaultValue")&&_s(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _s(e,t,n){(t!=="number"||lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ti=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ts(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(ti(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function Gp(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ns(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var da,Qp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wg=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(e){wg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oi[t]=oi[e]})});function Xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oi.hasOwnProperty(e)&&oi[e]?(""+t).trim():t+"px"}function Zp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kg=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Os(e,t){if(t){if(kg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function $s(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As=null;function Zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,gr=null,vr=null;function wf(e){if(e=Xi(e)){if(typeof Rs!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Qo(t),Rs(e.stateNode,e.type,t))}}function qp(e){gr?vr?vr.push(e):vr=[e]:gr=e}function Jp(){if(gr){var e=gr,t=vr;if(vr=gr=null,wf(e),t)for(e=0;e<t.length;e++)wf(t[e])}}function em(e,t){return e(t)}function tm(){}var Dl=!1;function nm(e,t,n){if(Dl)return e(t,n);Dl=!0;try{return em(e,t,n)}finally{Dl=!1,(gr!==null||vr!==null)&&(tm(),Jp())}}function wi(e,t){var n=e.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Is=!1;if(It)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Is=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Is=!1}function bg(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var li=!1,so=null,uo=!1,Ls=null,Sg={onError:function(e){li=!0,so=e}};function Cg(e,t,n,r,i,a,o,l,s){li=!1,so=null,bg.apply(Sg,arguments)}function Eg(e,t,n,r,i,a,o,l,s){if(Cg.apply(this,arguments),li){if(li){var u=so;li=!1,so=null}else throw Error(P(198));uo||(uo=!0,Ls=u)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kf(e){if(Qn(e)!==e)throw Error(P(188))}function Pg(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return kf(i),e;if(a===r)return kf(i),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function im(e){return e=Pg(e),e!==null?am(e):null}function am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=am(e);if(t!==null)return t;e=e.sibling}return null}var om=Ke.unstable_scheduleCallback,bf=Ke.unstable_cancelCallback,jg=Ke.unstable_shouldYield,_g=Ke.unstable_requestPaint,se=Ke.unstable_now,Tg=Ke.unstable_getCurrentPriorityLevel,qu=Ke.unstable_ImmediatePriority,lm=Ke.unstable_UserBlockingPriority,co=Ke.unstable_NormalPriority,Ng=Ke.unstable_LowPriority,sm=Ke.unstable_IdlePriority,Ho=null,Ct=null;function Og(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Ho,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Rg,$g=Math.log,Ag=Math.LN2;function Rg(e){return e>>>=0,e===0?32:31-($g(e)/Ag|0)|0}var pa=64,ma=4194304;function ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ni(l):(a&=o,a!==0&&(r=ni(a)))}else o=n&~i,o!==0?r=ni(o):a!==0&&(r=ni(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ig(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-pt(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=Ig(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function um(){var e=pa;return pa<<=1,!(pa&4194240)&&(pa=64),e}function Fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ki(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function zg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ju(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function cm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fm,ec,dm,pm,mm,Ms=!1,ha=[],ln=null,sn=null,un=null,ki=new Map,bi=new Map,en=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function Gr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Xi(t),t!==null&&ec(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dg(e,t,n,r,i){switch(t){case"focusin":return ln=Gr(ln,e,t,n,r,i),!0;case"dragenter":return sn=Gr(sn,e,t,n,r,i),!0;case"mouseover":return un=Gr(un,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ki.set(a,Gr(ki.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,bi.set(a,Gr(bi.get(a)||null,e,t,n,r,i)),!0}return!1}function hm(e){var t=Nn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=rm(n),t!==null){e.blockedOn=t,mm(e.priority,function(){dm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ua(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);As=r,n.target.dispatchEvent(r),As=null}else return t=Xi(n),t!==null&&ec(t),e.blockedOn=n,!1;t.shift()}return!0}function Cf(e,t,n){Ua(e)&&n.delete(t)}function Fg(){Ms=!1,ln!==null&&Ua(ln)&&(ln=null),sn!==null&&Ua(sn)&&(sn=null),un!==null&&Ua(un)&&(un=null),ki.forEach(Cf),bi.forEach(Cf)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ms||(Ms=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Fg)))}function Si(e){function t(i){return Kr(i,e)}if(0<ha.length){Kr(ha[0],e);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Kr(ln,e),sn!==null&&Kr(sn,e),un!==null&&Kr(un,e),ki.forEach(t),bi.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)hm(n),n.blockedOn===null&&en.shift()}var yr=Bt.ReactCurrentBatchConfig,po=!0;function Ug(e,t,n,r){var i=H,a=yr.transition;yr.transition=null;try{H=1,tc(e,t,n,r)}finally{H=i,yr.transition=a}}function Bg(e,t,n,r){var i=H,a=yr.transition;yr.transition=null;try{H=4,tc(e,t,n,r)}finally{H=i,yr.transition=a}}function tc(e,t,n,r){if(po){var i=Ds(e,t,n,r);if(i===null)Xl(e,t,r,mo,n),Sf(e,r);else if(Dg(i,e,t,n,r))r.stopPropagation();else if(Sf(e,r),t&4&&-1<Mg.indexOf(e)){for(;i!==null;){var a=Xi(i);if(a!==null&&fm(a),a=Ds(e,t,n,r),a===null&&Xl(e,t,r,mo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var mo=null;function Ds(e,t,n,r){if(mo=null,e=Zu(r),e=Nn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mo=e,null}function gm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tg()){case qu:return 1;case lm:return 4;case co:case Ng:return 16;case sm:return 536870912;default:return 16}default:return 16}}var nn=null,nc=null,Ba=null;function vm(){if(Ba)return Ba;var e,t=nc,n=t.length,r,i="value"in nn?nn.value:nn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ba=i.slice(e,1<r?1-r:void 0)}function Wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ga(){return!0}function Ef(){return!1}function Xe(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ga:Ef,this.isPropagationStopped=Ef,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Xe(Dr),Qi=re({},Dr,{view:0,detail:0}),Wg=Xe(Qi),Ul,Bl,Qr,Yo=re({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(Ul=e.screenX-Qr.screenX,Bl=e.screenY-Qr.screenY):Bl=Ul=0,Qr=e),Ul)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),Pf=Xe(Yo),Vg=re({},Yo,{dataTransfer:0}),Hg=Xe(Vg),Yg=re({},Qi,{relatedTarget:0}),Wl=Xe(Yg),Gg=re({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kg=Xe(Gg),Qg=re({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xg=Xe(Qg),Zg=re({},Dr,{data:0}),jf=Xe(Zg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ev[e])?!!t[e]:!1}function ic(){return tv}var nv=re({},Qi,{key:function(e){if(e.key){var t=qg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(e){return e.type==="keypress"?Wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rv=Xe(nv),iv=re({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=Xe(iv),av=re({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),ov=Xe(av),lv=re({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=Xe(lv),uv=re({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cv=Xe(uv),fv=[9,13,27,32],ac=It&&"CompositionEvent"in window,si=null;It&&"documentMode"in document&&(si=document.documentMode);var dv=It&&"TextEvent"in window&&!si,ym=It&&(!ac||si&&8<si&&11>=si),Tf=String.fromCharCode(32),Nf=!1;function xm(e,t){switch(e){case"keyup":return fv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function pv(e,t){switch(e){case"compositionend":return wm(t);case"keypress":return t.which!==32?null:(Nf=!0,Tf);case"textInput":return e=t.data,e===Tf&&Nf?null:e;default:return null}}function mv(e,t){if(tr)return e==="compositionend"||!ac&&xm(e,t)?(e=vm(),Ba=nc=nn=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ym&&t.locale!=="ko"?null:t.data;default:return null}}var hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hv[e.type]:t==="textarea"}function km(e,t,n,r){qp(r),t=ho(t,"onChange"),0<t.length&&(n=new rc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ui=null,Ci=null;function gv(e){$m(e,0)}function Go(e){var t=ir(e);if(Hp(t))return e}function vv(e,t){if(e==="change")return t}var bm=!1;if(It){var Vl;if(It){var Hl="oninput"in document;if(!Hl){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),Hl=typeof $f.oninput=="function"}Vl=Hl}else Vl=!1;bm=Vl&&(!document.documentMode||9<document.documentMode)}function Af(){ui&&(ui.detachEvent("onpropertychange",Sm),Ci=ui=null)}function Sm(e){if(e.propertyName==="value"&&Go(Ci)){var t=[];km(t,Ci,e,Zu(e)),nm(gv,t)}}function yv(e,t,n){e==="focusin"?(Af(),ui=t,Ci=n,ui.attachEvent("onpropertychange",Sm)):e==="focusout"&&Af()}function xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(Ci)}function wv(e,t){if(e==="click")return Go(t)}function kv(e,t){if(e==="input"||e==="change")return Go(t)}function bv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:bv;function Ei(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ks.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function If(e,t){var n=Rf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rf(n)}}function Cm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Em(){for(var e=window,t=lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=lo(e.document)}return t}function oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sv(e){var t=Em(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cm(n.ownerDocument.documentElement,n)){if(r!==null&&oc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=If(n,a);var o=If(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cv=It&&"documentMode"in document&&11>=document.documentMode,nr=null,Fs=null,ci=null,Us=!1;function Lf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Us||nr==null||nr!==lo(r)||(r=nr,"selectionStart"in r&&oc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ci&&Ei(ci,r)||(ci=r,r=ho(Fs,"onSelect"),0<r.length&&(t=new rc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nr)))}function va(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},Yl={},Pm={};It&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Ko(e){if(Yl[e])return Yl[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pm)return Yl[e]=t[n];return e}var jm=Ko("animationend"),_m=Ko("animationiteration"),Tm=Ko("animationstart"),Nm=Ko("transitionend"),Om=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){Om.set(e,t),Kn(t,[e])}for(var Gl=0;Gl<zf.length;Gl++){var Kl=zf[Gl],Ev=Kl.toLowerCase(),Pv=Kl[0].toUpperCase()+Kl.slice(1);bn(Ev,"on"+Pv)}bn(jm,"onAnimationEnd");bn(_m,"onAnimationIteration");bn(Tm,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(Nm,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function Mf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Eg(r,t,void 0,e),e.currentTarget=null}function $m(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Mf(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Mf(i,l,u),a=s}}}if(uo)throw e=Ls,uo=!1,Ls=null,e}function K(e,t){var n=t[Ys];n===void 0&&(n=t[Ys]=new Set);var r=e+"__bubble";n.has(r)||(Am(t,e,2,!1),n.add(r))}function Ql(e,t,n){var r=0;t&&(r|=4),Am(n,e,r,t)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[ya]){e[ya]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(jv.has(n)||Ql(n,!1,e),Ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ya]||(t[ya]=!0,Ql("selectionchange",!1,t))}}function Am(e,t,n,r){switch(gm(t)){case 1:var i=Ug;break;case 4:i=Bg;break;default:i=tc}n=i.bind(null,t,n,e),i=void 0,!Is||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Nn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}nm(function(){var u=a,f=Zu(n),d=[];e:{var g=Om.get(e);if(g!==void 0){var y=rc,x=e;switch(e){case"keypress":if(Wa(n)===0)break e;case"keydown":case"keyup":y=rv;break;case"focusin":x="focus",y=Wl;break;case"focusout":x="blur",y=Wl;break;case"beforeblur":case"afterblur":y=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ov;break;case jm:case _m:case Tm:y=Kg;break;case Nm:y=sv;break;case"scroll":y=Wg;break;case"wheel":y=cv;break;case"copy":case"cut":case"paste":y=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=_f}var v=(t&4)!==0,S=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var c=u,h;c!==null;){h=c;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,p!==null&&(w=wi(c,p),w!=null&&v.push(ji(c,w,h)))),S)break;c=c.return}0<v.length&&(g=new y(g,x,null,n,f),d.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==As&&(x=n.relatedTarget||n.fromElement)&&(Nn(x)||x[Lt]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?Nn(x):null,x!==null&&(S=Qn(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(v=Pf,w="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=_f,w="onPointerLeave",p="onPointerEnter",c="pointer"),S=y==null?g:ir(y),h=x==null?g:ir(x),g=new v(w,c+"leave",y,n,f),g.target=S,g.relatedTarget=h,w=null,Nn(f)===u&&(v=new v(p,c+"enter",x,n,f),v.target=h,v.relatedTarget=S,w=v),S=w,y&&x)t:{for(v=y,p=x,c=0,h=v;h;h=Zn(h))c++;for(h=0,w=p;w;w=Zn(w))h++;for(;0<c-h;)v=Zn(v),c--;for(;0<h-c;)p=Zn(p),h--;for(;c--;){if(v===p||p!==null&&v===p.alternate)break t;v=Zn(v),p=Zn(p)}v=null}else v=null;y!==null&&Df(d,g,y,v,!1),x!==null&&S!==null&&Df(d,S,x,v,!0)}}e:{if(g=u?ir(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=vv;else if(Of(g))if(bm)k=kv;else{k=xv;var C=yv}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=wv);if(k&&(k=k(e,u))){km(d,k,n,f);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&_s(g,"number",g.value)}switch(C=u?ir(u):window,e){case"focusin":(Of(C)||C.contentEditable==="true")&&(nr=C,Fs=u,ci=null);break;case"focusout":ci=Fs=nr=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,Lf(d,n,f);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":Lf(d,n,f)}var b;if(ac)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else tr?xm(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(ym&&n.locale!=="ko"&&(tr||N!=="onCompositionStart"?N==="onCompositionEnd"&&tr&&(b=vm()):(nn=f,nc="value"in nn?nn.value:nn.textContent,tr=!0)),C=ho(u,N),0<C.length&&(N=new jf(N,e,null,n,f),d.push({event:N,listeners:C}),b?N.data=b:(b=wm(n),b!==null&&(N.data=b)))),(b=dv?pv(e,n):mv(e,n))&&(u=ho(u,"onBeforeInput"),0<u.length&&(f=new jf("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=b))}$m(d,t)})}function ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=wi(e,n),a!=null&&r.unshift(ji(e,a,i)),a=wi(e,t),a!=null&&r.push(ji(e,a,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Df(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=wi(n,a),s!=null&&o.unshift(ji(n,s,l))):i||(s=wi(n,a),s!=null&&o.push(ji(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var _v=/\r\n?/g,Tv=/\u0000|\uFFFD/g;function Ff(e){return(typeof e=="string"?e:""+e).replace(_v,`
`).replace(Tv,"")}function xa(e,t,n){if(t=Ff(t),Ff(e)!==t&&n)throw Error(P(425))}function go(){}var Bs=null,Ws=null;function Vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hs=typeof setTimeout=="function"?setTimeout:void 0,Nv=typeof clearTimeout=="function"?clearTimeout:void 0,Uf=typeof Promise=="function"?Promise:void 0,Ov=typeof queueMicrotask=="function"?queueMicrotask:typeof Uf<"u"?function(e){return Uf.resolve(null).then(e).catch($v)}:Hs;function $v(e){setTimeout(function(){throw e})}function Zl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Si(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Si(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),bt="__reactFiber$"+Fr,_i="__reactProps$"+Fr,Lt="__reactContainer$"+Fr,Ys="__reactEvents$"+Fr,Av="__reactListeners$"+Fr,Rv="__reactHandles$"+Fr;function Nn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bf(e);e!==null;){if(n=e[bt])return n;e=Bf(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){return e=e[bt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Qo(e){return e[_i]||null}var Gs=[],ar=-1;function Sn(e){return{current:e}}function Z(e){0>ar||(e.current=Gs[ar],Gs[ar]=null,ar--)}function G(e,t){ar++,Gs[ar]=e.current,e.current=t}var yn={},je=Sn(yn),Le=Sn(!1),Un=yn;function Cr(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function vo(){Z(Le),Z(je)}function Wf(e,t,n){if(je.current!==yn)throw Error(P(168));G(je,t),G(Le,n)}function Rm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,yg(e)||"Unknown",i));return re({},n,r)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Un=je.current,G(je,e),G(Le,Le.current),!0}function Vf(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Rm(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,Z(Le),Z(je),G(je,e)):Z(Le),G(Le,n)}var Nt=null,Xo=!1,ql=!1;function Im(e){Nt===null?Nt=[e]:Nt.push(e)}function Iv(e){Xo=!0,Im(e)}function Cn(){if(!ql&&Nt!==null){ql=!0;var e=0,t=H;try{var n=Nt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,Xo=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),om(qu,Cn),i}finally{H=t,ql=!1}}return null}var or=[],lr=0,xo=null,wo=0,tt=[],nt=0,Bn=null,Ot=1,$t="";function _n(e,t){or[lr++]=wo,or[lr++]=xo,xo=e,wo=t}function Lm(e,t,n){tt[nt++]=Ot,tt[nt++]=$t,tt[nt++]=Bn,Bn=e;var r=Ot;e=$t;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var a=32-pt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ot=1<<32-pt(t)+i|n<<i|r,$t=a+e}else Ot=1<<a|n<<i|r,$t=e}function lc(e){e.return!==null&&(_n(e,1),Lm(e,1,0))}function sc(e){for(;e===xo;)xo=or[--lr],or[lr]=null,wo=or[--lr],or[lr]=null;for(;e===Bn;)Bn=tt[--nt],tt[nt]=null,$t=tt[--nt],tt[nt]=null,Ot=tt[--nt],tt[nt]=null}var Ye=null,He=null,ee=!1,ft=null;function zm(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,He=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Ot,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,He=null,!0):!1;default:return!1}}function Ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qs(e){if(ee){var t=He;if(t){var n=t;if(!Hf(e,t)){if(Ks(e))throw Error(P(418));t=cn(n.nextSibling);var r=Ye;t&&Hf(e,t)?zm(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ye=e)}}else{if(Ks(e))throw Error(P(418));e.flags=e.flags&-4097|2,ee=!1,Ye=e}}}function Yf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function wa(e){if(e!==Ye)return!1;if(!ee)return Yf(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vs(e.type,e.memoizedProps)),t&&(t=He)){if(Ks(e))throw Mm(),Error(P(418));for(;t;)zm(e,t),t=cn(t.nextSibling)}if(Yf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ye?cn(e.stateNode.nextSibling):null;return!0}function Mm(){for(var e=He;e;)e=cn(e.nextSibling)}function Er(){He=Ye=null,ee=!1}function uc(e){ft===null?ft=[e]:ft.push(e)}var Lv=Bt.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ko=Sn(null),bo=null,sr=null,cc=null;function fc(){cc=sr=bo=null}function dc(e){var t=ko.current;Z(ko),e._currentValue=t}function Xs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){bo=e,cc=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(cc!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(bo===null)throw Error(P(308));sr=e,bo.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var On=null;function pc(e){On===null?On=[e]:On.push(e)}function Dm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function mc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ju(e,n)}}function Gf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function So(e,t,n,r){var i=e.updateQueue;Jt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(a!==null){var d=i.baseState;o=0,f=u=s=null,l=a;do{var g=l.lane,y=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,v=l;switch(g=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(y,d,g);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(y,d,g):x,g==null)break e;d=re({},d,g);break e;case 2:Jt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,s=d):f=f.next=y,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Vn|=o,e.lanes=o,e.memoizedState=d}}function Kf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Um=new Dp.Component().refs;function Zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zo={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=pn(e),a=At(r,i);a.payload=t,n!=null&&(a.callback=n),t=fn(e,a,i),t!==null&&(mt(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=pn(e),a=At(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=fn(e,a,i),t!==null&&(mt(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=pn(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,r),t!==null&&(mt(t,e,r,n),Va(t,e,r))}};function Qf(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,r)||!Ei(i,a):!0}function Bm(e,t,n){var r=!1,i=yn,a=t.contextType;return typeof a=="object"&&a!==null?a=at(a):(i=ze(t)?Un:je.current,r=t.contextTypes,a=(r=r!=null)?Cr(e,i):yn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Xf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zo.enqueueReplaceState(t,t.state,null)}function qs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Um,mc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=at(a):(a=ze(t)?Un:je.current,i.context=Cr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Zs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Zo.enqueueReplaceState(i,i.state,null),So(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===Um&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function ka(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zf(e){var t=e._init;return t(e._payload)}function Wm(e){function t(p,c){if(e){var h=p.deletions;h===null?(p.deletions=[c],p.flags|=16):h.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=mn(p,c),p.index=0,p.sibling=null,p}function a(p,c,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<c?(p.flags|=2,c):h):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,c,h,w){return c===null||c.tag!==6?(c=as(h,p.mode,w),c.return=p,c):(c=i(c,h),c.return=p,c)}function s(p,c,h,w){var k=h.type;return k===er?f(p,c,h.props.children,w,h.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qt&&Zf(k)===c.type)?(w=i(c,h.props),w.ref=Xr(p,c,h),w.return=p,w):(w=Xa(h.type,h.key,h.props,null,p.mode,w),w.ref=Xr(p,c,h),w.return=p,w)}function u(p,c,h,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=os(h,p.mode,w),c.return=p,c):(c=i(c,h.children||[]),c.return=p,c)}function f(p,c,h,w,k){return c===null||c.tag!==7?(c=zn(h,p.mode,w,k),c.return=p,c):(c=i(c,h),c.return=p,c)}function d(p,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=as(""+c,p.mode,h),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ca:return h=Xa(c.type,c.key,c.props,null,p.mode,h),h.ref=Xr(p,null,c),h.return=p,h;case Jn:return c=os(c,p.mode,h),c.return=p,c;case qt:var w=c._init;return d(p,w(c._payload),h)}if(ti(c)||Hr(c))return c=zn(c,p.mode,h,null),c.return=p,c;ka(p,c)}return null}function g(p,c,h,w){var k=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:l(p,c,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ca:return h.key===k?s(p,c,h,w):null;case Jn:return h.key===k?u(p,c,h,w):null;case qt:return k=h._init,g(p,c,k(h._payload),w)}if(ti(h)||Hr(h))return k!==null?null:f(p,c,h,w,null);ka(p,h)}return null}function y(p,c,h,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(h)||null,l(c,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ca:return p=p.get(w.key===null?h:w.key)||null,s(c,p,w,k);case Jn:return p=p.get(w.key===null?h:w.key)||null,u(c,p,w,k);case qt:var C=w._init;return y(p,c,h,C(w._payload),k)}if(ti(w)||Hr(w))return p=p.get(h)||null,f(c,p,w,k,null);ka(c,w)}return null}function x(p,c,h,w){for(var k=null,C=null,b=c,N=c=0,M=null;b!==null&&N<h.length;N++){b.index>N?(M=b,b=null):M=b.sibling;var L=g(p,b,h[N],w);if(L===null){b===null&&(b=M);break}e&&b&&L.alternate===null&&t(p,b),c=a(L,c,N),C===null?k=L:C.sibling=L,C=L,b=M}if(N===h.length)return n(p,b),ee&&_n(p,N),k;if(b===null){for(;N<h.length;N++)b=d(p,h[N],w),b!==null&&(c=a(b,c,N),C===null?k=b:C.sibling=b,C=b);return ee&&_n(p,N),k}for(b=r(p,b);N<h.length;N++)M=y(b,p,N,h[N],w),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?N:M.key),c=a(M,c,N),C===null?k=M:C.sibling=M,C=M);return e&&b.forEach(function(Fe){return t(p,Fe)}),ee&&_n(p,N),k}function v(p,c,h,w){var k=Hr(h);if(typeof k!="function")throw Error(P(150));if(h=k.call(h),h==null)throw Error(P(151));for(var C=k=null,b=c,N=c=0,M=null,L=h.next();b!==null&&!L.done;N++,L=h.next()){b.index>N?(M=b,b=null):M=b.sibling;var Fe=g(p,b,L.value,w);if(Fe===null){b===null&&(b=M);break}e&&b&&Fe.alternate===null&&t(p,b),c=a(Fe,c,N),C===null?k=Fe:C.sibling=Fe,C=Fe,b=M}if(L.done)return n(p,b),ee&&_n(p,N),k;if(b===null){for(;!L.done;N++,L=h.next())L=d(p,L.value,w),L!==null&&(c=a(L,c,N),C===null?k=L:C.sibling=L,C=L);return ee&&_n(p,N),k}for(b=r(p,b);!L.done;N++,L=h.next())L=y(b,p,N,L.value,w),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?N:L.key),c=a(L,c,N),C===null?k=L:C.sibling=L,C=L);return e&&b.forEach(function(En){return t(p,En)}),ee&&_n(p,N),k}function S(p,c,h,w){if(typeof h=="object"&&h!==null&&h.type===er&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ca:e:{for(var k=h.key,C=c;C!==null;){if(C.key===k){if(k=h.type,k===er){if(C.tag===7){n(p,C.sibling),c=i(C,h.props.children),c.return=p,p=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===qt&&Zf(k)===C.type){n(p,C.sibling),c=i(C,h.props),c.ref=Xr(p,C,h),c.return=p,p=c;break e}n(p,C);break}else t(p,C);C=C.sibling}h.type===er?(c=zn(h.props.children,p.mode,w,h.key),c.return=p,p=c):(w=Xa(h.type,h.key,h.props,null,p.mode,w),w.ref=Xr(p,c,h),w.return=p,p=w)}return o(p);case Jn:e:{for(C=h.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(p,c.sibling),c=i(c,h.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=os(h,p.mode,w),c.return=p,p=c}return o(p);case qt:return C=h._init,S(p,c,C(h._payload),w)}if(ti(h))return x(p,c,h,w);if(Hr(h))return v(p,c,h,w);ka(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,h),c.return=p,p=c):(n(p,c),c=as(h,p.mode,w),c.return=p,p=c),o(p)):n(p,c)}return S}var Pr=Wm(!0),Vm=Wm(!1),Zi={},Et=Sn(Zi),Ti=Sn(Zi),Ni=Sn(Zi);function $n(e){if(e===Zi)throw Error(P(174));return e}function hc(e,t){switch(G(Ni,t),G(Ti,e),G(Et,Zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ns(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ns(t,e)}Z(Et),G(Et,t)}function jr(){Z(Et),Z(Ti),Z(Ni)}function Hm(e){$n(Ni.current);var t=$n(Et.current),n=Ns(t,e.type);t!==n&&(G(Ti,e),G(Et,n))}function gc(e){Ti.current===e&&(Z(Et),Z(Ti))}var te=Sn(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function vc(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Ha=Bt.ReactCurrentDispatcher,es=Bt.ReactCurrentBatchConfig,Wn=0,ne=null,de=null,he=null,Eo=!1,fi=!1,Oi=0,zv=0;function Se(){throw Error(P(321))}function yc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function xc(e,t,n,r,i,a){if(Wn=a,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ha.current=e===null||e.memoizedState===null?Uv:Bv,e=n(r,i),fi){a=0;do{if(fi=!1,Oi=0,25<=a)throw Error(P(301));a+=1,he=de=null,t.updateQueue=null,Ha.current=Wv,e=n(r,i)}while(fi)}if(Ha.current=Po,t=de!==null&&de.next!==null,Wn=0,he=de=ne=null,Eo=!1,t)throw Error(P(300));return e}function wc(){var e=Oi!==0;return Oi=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ne.memoizedState=he=e:he=he.next=e,he}function ot(){if(de===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?ne.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(P(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?ne.memoizedState=he=e:he=he.next=e}return he}function $i(e,t){return typeof t=="function"?t(e):t}function ts(e){var t=ot(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=de,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var f=u.lane;if((Wn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,ne.lanes|=f,Vn|=f}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,gt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ne.lanes|=a,Vn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ns(e){var t=ot(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);gt(a,t.memoizedState)||(Re=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ym(){}function Gm(e,t){var n=ne,r=ot(),i=t(),a=!gt(r.memoizedState,i);if(a&&(r.memoizedState=i,Re=!0),r=r.queue,kc(Xm.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Ai(9,Qm.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(P(349));Wn&30||Km(n,t,i)}return i}function Km(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qm(e,t,n,r){t.value=n,t.getSnapshot=r,Zm(t)&&qm(e)}function Xm(e,t,n){return n(function(){Zm(t)&&qm(e)})}function Zm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function qm(e){var t=zt(e,1);t!==null&&mt(t,e,1,-1)}function qf(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=Fv.bind(null,ne,e),[t.memoizedState,e]}function Ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jm(){return ot().memoizedState}function Ya(e,t,n,r){var i=yt();ne.flags|=e,i.memoizedState=Ai(1|t,n,void 0,r===void 0?null:r)}function qo(e,t,n,r){var i=ot();r=r===void 0?null:r;var a=void 0;if(de!==null){var o=de.memoizedState;if(a=o.destroy,r!==null&&yc(r,o.deps)){i.memoizedState=Ai(t,n,a,r);return}}ne.flags|=e,i.memoizedState=Ai(1|t,n,a,r)}function Jf(e,t){return Ya(8390656,8,e,t)}function kc(e,t){return qo(2048,8,e,t)}function eh(e,t){return qo(4,2,e,t)}function th(e,t){return qo(4,4,e,t)}function nh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rh(e,t,n){return n=n!=null?n.concat([e]):null,qo(4,4,nh.bind(null,t,e),n)}function bc(){}function ih(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ah(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oh(e,t,n){return Wn&21?(gt(n,t)||(n=um(),ne.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Mv(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=es.transition;es.transition={};try{e(!1),t()}finally{H=n,es.transition=r}}function lh(){return ot().memoizedState}function Dv(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sh(e))uh(t,n);else if(n=Dm(e,t,n,r),n!==null){var i=Ne();mt(n,e,r,i),ch(n,t,r)}}function Fv(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sh(e))uh(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,gt(l,o)){var s=t.interleaved;s===null?(i.next=i,pc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Dm(e,t,i,r),n!==null&&(i=Ne(),mt(n,e,r,i),ch(n,t,r))}}function sh(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function uh(e,t){fi=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ch(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ju(e,n)}}var Po={readContext:at,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Uv={readContext:at,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Jf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ya(4194308,4,nh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ya(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dv.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:qf,useDebugValue:bc,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=qf(!1),t=e[0];return e=Mv.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=yt();if(ee){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ve===null)throw Error(P(349));Wn&30||Km(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Jf(Xm.bind(null,r,a,e),[e]),r.flags|=2048,Ai(9,Qm.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=yt(),t=ve.identifierPrefix;if(ee){var n=$t,r=Ot;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bv={readContext:at,useCallback:ih,useContext:at,useEffect:kc,useImperativeHandle:rh,useInsertionEffect:eh,useLayoutEffect:th,useMemo:ah,useReducer:ts,useRef:Jm,useState:function(){return ts($i)},useDebugValue:bc,useDeferredValue:function(e){var t=ot();return oh(t,de.memoizedState,e)},useTransition:function(){var e=ts($i)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Ym,useSyncExternalStore:Gm,useId:lh,unstable_isNewReconciler:!1},Wv={readContext:at,useCallback:ih,useContext:at,useEffect:kc,useImperativeHandle:rh,useInsertionEffect:eh,useLayoutEffect:th,useMemo:ah,useReducer:ns,useRef:Jm,useState:function(){return ns($i)},useDebugValue:bc,useDeferredValue:function(e){var t=ot();return de===null?t.memoizedState=e:oh(t,de.memoizedState,e)},useTransition:function(){var e=ns($i)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Ym,useSyncExternalStore:Gm,useId:lh,unstable_isNewReconciler:!1};function _r(e,t){try{var n="",r=t;do n+=vg(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function rs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Js(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vv=typeof WeakMap=="function"?WeakMap:Map;function fh(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_o||(_o=!0,uu=r),Js(e,t)},n}function dh(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Js(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Js(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ed(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=iy.bind(null,e,t,n),t.then(e,e))}function td(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var Hv=Bt.ReactCurrentOwner,Re=!1;function _e(e,t,n,r){t.child=e===null?Vm(t,null,n,r):Pr(t,e.child,n,r)}function rd(e,t,n,r,i){n=n.render;var a=t.ref;return xr(t,i),r=xc(e,t,n,r,a,i),n=wc(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(ee&&n&&lc(t),t.flags|=1,_e(e,t,r,i),t.child)}function id(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Nc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,ph(e,t,a,r,i)):(e=Xa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(o,r)&&e.ref===t.ref)return Mt(e,t,i)}return t.flags|=1,e=mn(a,r),e.ref=t.ref,e.return=t,t.child=e}function ph(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ei(a,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Mt(e,t,i)}return eu(e,t,n,r,i)}function mh(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(cr,Ve),Ve|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(cr,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,G(cr,Ve),Ve|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,G(cr,Ve),Ve|=r;return _e(e,t,i,n),t.child}function hh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function eu(e,t,n,r,i){var a=ze(n)?Un:je.current;return a=Cr(t,a),xr(t,i),n=xc(e,t,n,r,a,i),r=wc(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(ee&&r&&lc(t),t.flags|=1,_e(e,t,n,i),t.child)}function ad(e,t,n,r,i){if(ze(n)){var a=!0;yo(t)}else a=!1;if(xr(t,i),t.stateNode===null)Ga(e,t),Bm(t,n,r),qs(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=ze(n)?Un:je.current,u=Cr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Xf(t,o,r,u),Jt=!1;var g=t.memoizedState;o.state=g,So(t,r,o,i),s=t.memoizedState,l!==r||g!==s||Le.current||Jt?(typeof f=="function"&&(Zs(t,n,f,r),s=t.memoizedState),(l=Jt||Qf(t,n,l,r,g,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Fm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ut(t.type,l),o.props=u,d=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=at(s):(s=ze(n)?Un:je.current,s=Cr(t,s));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||g!==s)&&Xf(t,o,r,s),Jt=!1,g=t.memoizedState,o.state=g,So(t,r,o,i);var x=t.memoizedState;l!==d||g!==x||Le.current||Jt?(typeof y=="function"&&(Zs(t,n,y,r),x=t.memoizedState),(u=Jt||Qf(t,n,u,r,g,x,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return tu(e,t,n,r,a,i)}function tu(e,t,n,r,i,a){hh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Vf(t,n,!1),Mt(e,t,a);r=t.stateNode,Hv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Pr(t,e.child,null,a),t.child=Pr(t,null,l,a)):_e(e,t,l,a),t.memoizedState=r.state,i&&Vf(t,n,!0),t.child}function gh(e){var t=e.stateNode;t.pendingContext?Wf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wf(e,t.context,!1),hc(e,t.containerInfo)}function od(e,t,n,r,i){return Er(),uc(i),t.flags|=256,_e(e,t,n,r),t.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function ru(e){return{baseLanes:e,cachePool:null,transitions:null}}function vh(e,t,n){var r=t.pendingProps,i=te.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(te,i&1),e===null)return Qs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=tl(o,r,0,null),e=zn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ru(n),t.memoizedState=nu,e):Sc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Yv(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=mn(l,a):(a=zn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ru(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=nu,r}return a=e.child,e=a.sibling,r=mn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sc(e,t){return t=tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ba(e,t,n,r){return r!==null&&uc(r),Pr(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yv(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=rs(Error(P(422))),ba(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=tl({mode:"visible",children:r.children},i,0,null),a=zn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Pr(t,e.child,null,o),t.child.memoizedState=ru(o),t.memoizedState=nu,a);if(!(t.mode&1))return ba(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(P(419)),r=rs(a,r,void 0),ba(e,t,o,r)}if(l=(o&e.childLanes)!==0,Re||l){if(r=ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,zt(e,i),mt(r,e,i,-1))}return Tc(),r=rs(Error(P(421))),ba(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ay.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,He=cn(i.nextSibling),Ye=t,ee=!0,ft=null,e!==null&&(tt[nt++]=Ot,tt[nt++]=$t,tt[nt++]=Bn,Ot=e.id,$t=e.overflow,Bn=t),t=Sc(t,r.children),t.flags|=4096,t)}function ld(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xs(e.return,t,n)}function is(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function yh(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(_e(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,n,t);else if(e.tag===19)ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),is(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}is(t,!0,n,null,a);break;case"together":is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ga(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gv(e,t,n){switch(t.tag){case 3:gh(t),Er();break;case 5:Hm(t);break;case 1:ze(t.type)&&yo(t);break;case 4:hc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(ko,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?vh(e,t,n):(G(te,te.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);G(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,mh(e,t,n)}return Mt(e,t,n)}var xh,iu,wh,kh;xh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};iu=function(){};wh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(Et.current);var a=null;switch(n){case"input":i=Ps(e,i),r=Ps(e,r),a=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),a=[];break;case"textarea":i=Ts(e,i),r=Ts(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=go)}Os(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&K("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};kh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kv(e,t,n){var r=t.pendingProps;switch(sc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return ze(t.type)&&vo(),Ce(t),null;case 3:return r=t.stateNode,jr(),Z(Le),Z(je),vc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(du(ft),ft=null))),iu(e,t),Ce(t),null;case 5:gc(t);var i=$n(Ni.current);if(n=t.type,e!==null&&t.stateNode!=null)wh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ce(t),null}if(e=$n(Et.current),wa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[bt]=t,r[_i]=a,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<ri.length;i++)K(ri[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":gf(r,a),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},K("invalid",r);break;case"textarea":yf(r,a),K("invalid",r)}Os(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&xa(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&xa(r.textContent,l,e),i=["children",""+l]):yi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":fa(r),vf(r,a,!0);break;case"textarea":fa(r),xf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[bt]=t,e[_i]=r,xh(e,t,!1,!1),t.stateNode=e;e:{switch(o=$s(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<ri.length;i++)K(ri[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":gf(e,r),i=Ps(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),K("invalid",e);break;case"textarea":yf(e,r),i=Ts(e,r),K("invalid",e);break;default:i=r}Os(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Zp(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Qp(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&xi(e,s):typeof s=="number"&&xi(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(yi.hasOwnProperty(a)?s!=null&&a==="onScroll"&&K("scroll",e):s!=null&&Gu(e,a,s,o))}switch(n){case"input":fa(e),vf(e,r,!1);break;case"textarea":fa(e),xf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?hr(e,!!r.multiple,a,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)kh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=$n(Ni.current),$n(Et.current),wa(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(a=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:xa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xa(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return Ce(t),null;case 13:if(Z(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&He!==null&&t.mode&1&&!(t.flags&128))Mm(),Er(),t.flags|=98560,a=!1;else if(a=wa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[bt]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),a=!1}else ft!==null&&(du(ft),ft=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?pe===0&&(pe=3):Tc())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return jr(),iu(e,t),e===null&&Pi(t.stateNode.containerInfo),Ce(t),null;case 10:return dc(t.type._context),Ce(t),null;case 17:return ze(t.type)&&vo(),Ce(t),null;case 19:if(Z(te),a=t.memoizedState,a===null)return Ce(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Zr(a,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Co(e),o!==null){for(t.flags|=128,Zr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(te,te.current&1|2),t.child}e=e.sibling}a.tail!==null&&se()>Tr&&(t.flags|=128,r=!0,Zr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Co(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ee)return Ce(t),null}else 2*se()-a.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,Zr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,n=te.current,G(te,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return _c(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Qv(e,t){switch(sc(t),t.tag){case 1:return ze(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),Z(Le),Z(je),vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gc(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return jr(),null;case 10:return dc(t.type._context),null;case 22:case 23:return _c(),null;case 24:return null;default:return null}}var Sa=!1,Pe=!1,Xv=typeof WeakSet=="function"?WeakSet:Set,$=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function au(e,t,n){try{n()}catch(r){ae(e,t,r)}}var sd=!1;function Zv(e,t){if(Bs=po,e=Em(),oc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,d=e,g=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==a||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)g=d,d=y;for(;;){if(d===e)break t;if(g===n&&++u===i&&(l=o),g===a&&++f===r&&(s=o),(y=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ws={focusedElem:e,selectionRange:n},po=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,S=x.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:ut(t.type,v),S);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return x=sd,sd=!1,x}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&au(t,n,a)}i=i.next}while(i!==r)}}function Jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ou(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bh(e){var t=e.alternate;t!==null&&(e.alternate=null,bh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[_i],delete t[Ys],delete t[Av],delete t[Rv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sh(e){return e.tag===5||e.tag===3||e.tag===4}function ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(r!==4&&(e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}function su(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(su(e,t,n),e=e.sibling;e!==null;)su(e,t,n),e=e.sibling}var xe=null,ct=!1;function Gt(e,t,n){for(n=n.child;n!==null;)Ch(e,t,n),n=n.sibling}function Ch(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:Pe||ur(n,t);case 6:var r=xe,i=ct;xe=null,Gt(e,t,n),xe=r,ct=i,xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?Zl(e.parentNode,n):e.nodeType===1&&Zl(e,n),Si(e)):Zl(xe,n.stateNode));break;case 4:r=xe,i=ct,xe=n.stateNode.containerInfo,ct=!0,Gt(e,t,n),xe=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&au(n,t,o),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!Pe&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ae(n,t,l)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Gt(e,t,n),Pe=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xv),t.forEach(function(r){var i=oy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,ct=!1;break e;case 3:xe=l.stateNode.containerInfo,ct=!0;break e;case 4:xe=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(xe===null)throw Error(P(160));Ch(a,o,i),xe=null,ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ae(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Eh(t,e),t=t.sibling}function Eh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),vt(e),r&4){try{di(3,e,e.return),Jo(3,e)}catch(v){ae(e,e.return,v)}try{di(5,e,e.return)}catch(v){ae(e,e.return,v)}}break;case 1:st(t,e),vt(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(st(t,e),vt(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var i=e.stateNode;try{xi(i,"")}catch(v){ae(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Yp(i,a),$s(l,o);var u=$s(l,a);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?Zp(i,d):f==="dangerouslySetInnerHTML"?Qp(i,d):f==="children"?xi(i,d):Gu(i,f,d,u)}switch(l){case"input":js(i,a);break;case"textarea":Gp(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?hr(i,!!a.multiple,y,!1):g!==!!a.multiple&&(a.defaultValue!=null?hr(i,!!a.multiple,a.defaultValue,!0):hr(i,!!a.multiple,a.multiple?[]:"",!1))}i[_i]=a}catch(v){ae(e,e.return,v)}}break;case 6:if(st(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){ae(e,e.return,v)}}break;case 3:if(st(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(v){ae(e,e.return,v)}break;case 4:st(t,e),vt(e);break;case 13:st(t,e),vt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Pc=se())),r&4&&cd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||f,st(t,e),Pe=u):st(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for($=e,f=e.child;f!==null;){for(d=$=f;$!==null;){switch(g=$,y=g.child,g.tag){case 0:case 11:case 14:case 15:di(4,g,g.return);break;case 1:ur(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:ur(g,g.return);break;case 22:if(g.memoizedState!==null){dd(d);continue}}y!==null?(y.return=g,$=y):dd(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Xp("display",o))}catch(v){ae(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ae(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:st(t,e),vt(e),r&4&&cd(e);break;case 21:break;default:st(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sh(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xi(i,""),r.flags&=-33);var a=ud(e);su(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ud(e);lu(e,l,o);break;default:throw Error(P(161))}}catch(s){ae(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qv(e,t,n){$=e,Ph(e)}function Ph(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Sa;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Pe;l=Sa;var u=Pe;if(Sa=o,(Pe=s)&&!u)for($=i;$!==null;)o=$,s=o.child,o.tag===22&&o.memoizedState!==null?pd(i):s!==null?(s.return=o,$=s):pd(i);for(;a!==null;)$=a,Ph(a),a=a.sibling;$=i,Sa=l,Pe=u}fd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,$=a):fd(e)}}function fd(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Kf(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kf(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Si(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Pe||t.flags&512&&ou(t)}catch(g){ae(t,t.return,g)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function dd(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function pd(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Jo(4,t)}catch(s){ae(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ae(t,i,s)}}var a=t.return;try{ou(t)}catch(s){ae(t,a,s)}break;case 5:var o=t.return;try{ou(t)}catch(s){ae(t,o,s)}}}catch(s){ae(t,t.return,s)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var Jv=Math.ceil,jo=Bt.ReactCurrentDispatcher,Cc=Bt.ReactCurrentOwner,it=Bt.ReactCurrentBatchConfig,U=0,ve=null,fe=null,ke=0,Ve=0,cr=Sn(0),pe=0,Ri=null,Vn=0,el=0,Ec=0,pi=null,Ae=null,Pc=0,Tr=1/0,_t=null,_o=!1,uu=null,dn=null,Ca=!1,rn=null,To=0,mi=0,cu=null,Ka=-1,Qa=0;function Ne(){return U&6?se():Ka!==-1?Ka:Ka=se()}function pn(e){return e.mode&1?U&2&&ke!==0?ke&-ke:Lv.transition!==null?(Qa===0&&(Qa=um()),Qa):(e=H,e!==0||(e=window.event,e=e===void 0?16:gm(e.type)),e):1}function mt(e,t,n,r){if(50<mi)throw mi=0,cu=null,Error(P(185));Ki(e,n,r),(!(U&2)||e!==ve)&&(e===ve&&(!(U&2)&&(el|=n),pe===4&&tn(e,ke)),Me(e,r),n===1&&U===0&&!(t.mode&1)&&(Tr=se()+500,Xo&&Cn()))}function Me(e,t){var n=e.callbackNode;Lg(e,t);var r=fo(e,e===ve?ke:0);if(r===0)n!==null&&bf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bf(n),t===1)e.tag===0?Iv(md.bind(null,e)):Im(md.bind(null,e)),Ov(function(){!(U&6)&&Cn()}),n=null;else{switch(cm(r)){case 1:n=qu;break;case 4:n=lm;break;case 16:n=co;break;case 536870912:n=sm;break;default:n=co}n=Rh(n,jh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jh(e,t){if(Ka=-1,Qa=0,U&6)throw Error(P(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=fo(e,e===ve?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=No(e,r);else{t=r;var i=U;U|=2;var a=Th();(ve!==e||ke!==t)&&(_t=null,Tr=se()+500,Ln(e,t));do try{ny();break}catch(l){_h(e,l)}while(1);fc(),jo.current=a,U=i,fe!==null?t=0:(ve=null,ke=0,t=pe)}if(t!==0){if(t===2&&(i=zs(e),i!==0&&(r=i,t=fu(e,i))),t===1)throw n=Ri,Ln(e,0),tn(e,r),Me(e,se()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ey(i)&&(t=No(e,r),t===2&&(a=zs(e),a!==0&&(r=a,t=fu(e,a))),t===1))throw n=Ri,Ln(e,0),tn(e,r),Me(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Tn(e,Ae,_t);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Pc+500-se(),10<t)){if(fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hs(Tn.bind(null,e,Ae,_t),t);break}Tn(e,Ae,_t);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-pt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jv(r/1960))-r,10<r){e.timeoutHandle=Hs(Tn.bind(null,e,Ae,_t),r);break}Tn(e,Ae,_t);break;case 5:Tn(e,Ae,_t);break;default:throw Error(P(329))}}}return Me(e,se()),e.callbackNode===n?jh.bind(null,e):null}function fu(e,t){var n=pi;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=No(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&du(t)),e}function du(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function ey(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!gt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Ec,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function md(e){if(U&6)throw Error(P(327));wr();var t=fo(e,0);if(!(t&1))return Me(e,se()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=zs(e);r!==0&&(t=r,n=fu(e,r))}if(n===1)throw n=Ri,Ln(e,0),tn(e,t),Me(e,se()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,Ae,_t),Me(e,se()),null}function jc(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Tr=se()+500,Xo&&Cn())}}function Hn(e){rn!==null&&rn.tag===0&&!(U&6)&&wr();var t=U;U|=1;var n=it.transition,r=H;try{if(it.transition=null,H=1,e)return e()}finally{H=r,it.transition=n,U=t,!(U&6)&&Cn()}}function _c(){Ve=cr.current,Z(cr)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nv(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(sc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:jr(),Z(Le),Z(je),vc();break;case 5:gc(r);break;case 4:jr();break;case 13:Z(te);break;case 19:Z(te);break;case 10:dc(r.type._context);break;case 22:case 23:_c()}n=n.return}if(ve=e,fe=e=mn(e.current,null),ke=Ve=t,pe=0,Ri=null,Ec=el=Vn=0,Ae=pi=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}On=null}return e}function _h(e,t){do{var n=fe;try{if(fc(),Ha.current=Po,Eo){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eo=!1}if(Wn=0,he=de=ne=null,fi=!1,Oi=0,Cc.current=null,n===null||n.return===null){pe=1,Ri=t,fe=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=ke,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=td(o);if(y!==null){y.flags&=-257,nd(y,o,l,a,t),y.mode&1&&ed(a,u,t),t=y,s=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(s),t.updateQueue=v}else x.add(s);break e}else{if(!(t&1)){ed(a,u,t),Tc();break e}s=Error(P(426))}}else if(ee&&l.mode&1){var S=td(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),nd(S,o,l,a,t),uc(_r(s,l));break e}}a=s=_r(s,l),pe!==4&&(pe=2),pi===null?pi=[a]:pi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=fh(a,s,t);Gf(a,p);break e;case 1:l=s;var c=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(dn===null||!dn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=dh(a,l,t);Gf(a,w);break e}}a=a.return}while(a!==null)}Oh(n)}catch(k){t=k,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function Th(){var e=jo.current;return jo.current=Po,e===null?Po:e}function Tc(){(pe===0||pe===3||pe===2)&&(pe=4),ve===null||!(Vn&268435455)&&!(el&268435455)||tn(ve,ke)}function No(e,t){var n=U;U|=2;var r=Th();(ve!==e||ke!==t)&&(_t=null,Ln(e,t));do try{ty();break}catch(i){_h(e,i)}while(1);if(fc(),U=n,jo.current=r,fe!==null)throw Error(P(261));return ve=null,ke=0,pe}function ty(){for(;fe!==null;)Nh(fe)}function ny(){for(;fe!==null&&!jg();)Nh(fe)}function Nh(e){var t=Ah(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?Oh(e):fe=t,Cc.current=null}function Oh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qv(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,fe=null;return}}else if(n=Kv(n,t,Ve),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);pe===0&&(pe=5)}function Tn(e,t,n){var r=H,i=it.transition;try{it.transition=null,H=1,ry(e,t,n,r)}finally{it.transition=i,H=r}return null}function ry(e,t,n,r){do wr();while(rn!==null);if(U&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(zg(e,a),e===ve&&(fe=ve=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,Rh(co,function(){return wr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=it.transition,it.transition=null;var o=H;H=1;var l=U;U|=4,Cc.current=null,Zv(e,n),Eh(n,e),Sv(Ws),po=!!Bs,Ws=Bs=null,e.current=n,qv(n),_g(),U=l,H=o,it.transition=a}else e.current=n;if(Ca&&(Ca=!1,rn=e,To=i),a=e.pendingLanes,a===0&&(dn=null),Og(n.stateNode),Me(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,e=uu,uu=null,e;return To&1&&e.tag!==0&&wr(),a=e.pendingLanes,a&1?e===cu?mi++:(mi=0,cu=e):mi=0,Cn(),null}function wr(){if(rn!==null){var e=cm(To),t=it.transition,n=H;try{if(it.transition=null,H=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,To=0,U&6)throw Error(P(331));var i=U;for(U|=4,$=e.current;$!==null;){var a=$,o=a.child;if($.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for($=u;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:di(8,f,a)}var d=f.child;if(d!==null)d.return=f,$=d;else for(;$!==null;){f=$;var g=f.sibling,y=f.return;if(bh(f),f===u){$=null;break}if(g!==null){g.return=y,$=g;break}$=y}}}var x=a.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}$=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,$=o;else e:for(;$!==null;){if(a=$,a.flags&2048)switch(a.tag){case 0:case 11:case 15:di(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,$=p;break e}$=a.return}}var c=e.current;for($=c;$!==null;){o=$;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,$=h;else e:for(o=c;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Jo(9,l)}}catch(k){ae(l,l.return,k)}if(l===o){$=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,$=w;break e}$=l.return}}if(U=i,Cn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Ho,e)}catch{}r=!0}return r}finally{H=n,it.transition=t}}return!1}function hd(e,t,n){t=_r(n,t),t=fh(e,t,1),e=fn(e,t,1),t=Ne(),e!==null&&(Ki(e,1,t),Me(e,t))}function ae(e,t,n){if(e.tag===3)hd(e,e,n);else for(;t!==null;){if(t.tag===3){hd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=_r(n,e),e=dh(t,e,1),t=fn(t,e,1),e=Ne(),t!==null&&(Ki(t,1,e),Me(t,e));break}}t=t.return}}function iy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ke&n)===n&&(pe===4||pe===3&&(ke&130023424)===ke&&500>se()-Pc?Ln(e,0):Ec|=n),Me(e,t)}function $h(e,t){t===0&&(e.mode&1?(t=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):t=1);var n=Ne();e=zt(e,t),e!==null&&(Ki(e,t,n),Me(e,n))}function ay(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$h(e,n)}function oy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),$h(e,n)}var Ah;Ah=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Gv(e,t,n);Re=!!(e.flags&131072)}else Re=!1,ee&&t.flags&1048576&&Lm(t,wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ga(e,t),e=t.pendingProps;var i=Cr(t,je.current);xr(t,n),i=xc(null,t,r,e,i,n);var a=wc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(a=!0,yo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mc(t),i.updater=Zo,t.stateNode=i,i._reactInternals=t,qs(t,r,e,n),t=tu(null,t,r,!0,a,n)):(t.tag=0,ee&&a&&lc(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ga(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=sy(r),e=ut(r,e),i){case 0:t=eu(null,t,r,e,n);break e;case 1:t=ad(null,t,r,e,n);break e;case 11:t=rd(null,t,r,e,n);break e;case 14:t=id(null,t,r,ut(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),eu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),ad(e,t,r,i,n);case 3:e:{if(gh(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Fm(e,t),So(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=_r(Error(P(423)),t),t=od(e,t,r,n,i);break e}else if(r!==i){i=_r(Error(P(424)),t),t=od(e,t,r,n,i);break e}else for(He=cn(t.stateNode.containerInfo.firstChild),Ye=t,ee=!0,ft=null,n=Vm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===i){t=Mt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Hm(t),e===null&&Qs(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Vs(r,i)?o=null:a!==null&&Vs(r,a)&&(t.flags|=32),hh(e,t),_e(e,t,o,n),t.child;case 6:return e===null&&Qs(t),null;case 13:return vh(e,t,n);case 4:return hc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),rd(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,G(ko,r._currentValue),r._currentValue=o,a!==null)if(gt(a.value,o)){if(a.children===i.children&&!Le.current){t=Mt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=At(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Xs(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(P(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xs(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=at(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),id(e,t,r,i,n);case 15:return ph(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ga(e,t),t.tag=1,ze(r)?(e=!0,yo(t)):e=!1,xr(t,n),Bm(t,r,i),qs(t,r,i,n),tu(null,t,r,!0,e,n);case 19:return yh(e,t,n);case 22:return mh(e,t,n)}throw Error(P(156,t.tag))};function Rh(e,t){return om(e,t)}function ly(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new ly(e,t,n,r)}function Nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sy(e){if(typeof e=="function")return Nc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qu)return 11;if(e===Xu)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xa(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Nc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case er:return zn(n.children,i,a,t);case Ku:o=8,i|=8;break;case bs:return e=rt(12,n,t,i|2),e.elementType=bs,e.lanes=a,e;case Ss:return e=rt(13,n,t,i),e.elementType=Ss,e.lanes=a,e;case Cs:return e=rt(19,n,t,i),e.elementType=Cs,e.lanes=a,e;case Wp:return tl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Up:o=10;break e;case Bp:o=9;break e;case Qu:o=11;break e;case Xu:o=14;break e;case qt:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=rt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function zn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function tl(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Wp,e.lanes=n,e.stateNode={isHidden:!1},e}function as(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function os(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Oc(e,t,n,r,i,a,o,l,s){return e=new uy(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=rt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mc(a),e}function cy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ih(e){if(!e)return yn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(ze(n))return Rm(e,n,t)}return t}function Lh(e,t,n,r,i,a,o,l,s){return e=Oc(n,r,!0,e,i,a,o,l,s),e.context=Ih(null),n=e.current,r=Ne(),i=pn(n),a=At(r,i),a.callback=t??null,fn(n,a,i),e.current.lanes=i,Ki(e,i,r),Me(e,r),e}function nl(e,t,n,r){var i=t.current,a=Ne(),o=pn(i);return n=Ih(n),t.context===null?t.context=n:t.pendingContext=n,t=At(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(i,t,o),e!==null&&(mt(e,i,o,a),Va(e,i,o)),o}function Oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){gd(e,t),(e=e.alternate)&&gd(e,t)}function fy(){return null}var zh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ac(e){this._internalRoot=e}rl.prototype.render=Ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));nl(e,t,null,null)};rl.prototype.unmount=Ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hn(function(){nl(null,e,null,null)}),t[Lt]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=pm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&hm(e)}};function Rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vd(){}function dy(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Oo(o);a.call(u)}}var o=Lh(t,r,e,0,null,!1,!1,"",vd);return e._reactRootContainer=o,e[Lt]=o.current,Pi(e.nodeType===8?e.parentNode:e),Hn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Oo(s);l.call(u)}}var s=Oc(e,0,!1,null,null,!1,!1,"",vd);return e._reactRootContainer=s,e[Lt]=s.current,Pi(e.nodeType===8?e.parentNode:e),Hn(function(){nl(t,s,n,r)}),s}function al(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Oo(o);l.call(s)}}nl(t,o,e,i)}else o=dy(n,t,e,i,r);return Oo(o)}fm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ni(t.pendingLanes);n!==0&&(Ju(t,n|1),Me(t,se()),!(U&6)&&(Tr=se()+500,Cn()))}break;case 13:Hn(function(){var r=zt(e,1);if(r!==null){var i=Ne();mt(r,e,1,i)}}),$c(e,1)}};ec=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Ne();mt(t,e,134217728,n)}$c(e,134217728)}};dm=function(e){if(e.tag===13){var t=pn(e),n=zt(e,t);if(n!==null){var r=Ne();mt(n,e,t,r)}$c(e,t)}};pm=function(){return H};mm=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Rs=function(e,t,n){switch(t){case"input":if(js(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qo(r);if(!i)throw Error(P(90));Hp(r),js(r,i)}}}break;case"textarea":Gp(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};em=jc;tm=Hn;var py={usingClientEntryPoint:!1,Events:[Xi,ir,Qo,qp,Jp,jc]},qr={findFiberByHostInstance:Nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},my={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=im(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Ho=Ea.inject(my),Ct=Ea}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rc(t))throw Error(P(200));return cy(e,t,null,n)};Qe.createRoot=function(e,t){if(!Rc(e))throw Error(P(299));var n=!1,r="",i=zh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Oc(e,1,!1,null,null,n,!1,r,i),e[Lt]=t.current,Pi(e.nodeType===8?e.parentNode:e),new Ac(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=im(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Hn(e)};Qe.hydrate=function(e,t,n){if(!il(t))throw Error(P(200));return al(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Rc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=zh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lh(t,null,e,1,n??null,i,!1,a,o),e[Lt]=t.current,Pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new rl(t)};Qe.render=function(e,t,n){if(!il(t))throw Error(P(200));return al(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!il(e))throw Error(P(40));return e._reactRootContainer?(Hn(function(){al(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};Qe.unstable_batchedUpdates=jc;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!il(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return al(e,t,n,!1,r)};Qe.version="18.2.0-next-9e3b772b8-20220608";function Mh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mh)}catch(e){console.error(e)}}Mh(),Lp.exports=Qe;var hy=Lp.exports,yd=hy;ws.createRoot=yd.createRoot,ws.hydrateRoot=yd.hydrateRoot;function pu(){return pu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pu.apply(this,arguments)}function Dh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var gy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,vy=Dh(function(e){return gy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function yy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function xy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var wy=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(xy(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=yy(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ee="-ms-",$o="-moz-",B="-webkit-",Fh="comm",Ic="rule",Lc="decl",ky="@import",Uh="@keyframes",by="@layer",Sy=Math.abs,ol=String.fromCharCode,Cy=Object.assign;function Ey(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function Bh(e){return e.trim()}function Py(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function mu(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function Ii(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function zc(e){return e.length}function Pa(e,t){return t.push(e),e}function jy(e,t){return e.map(t).join("")}var ll=1,Nr=1,Wh=0,De=0,ue=0,Ur="";function sl(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ll,column:Nr,length:o,return:""}}function Jr(e,t){return Cy(sl("",null,null,"",null,null,0),e,{length:-e.length},t)}function _y(){return ue}function Ty(){return ue=De>0?we(Ur,--De):0,Nr--,ue===10&&(Nr=1,ll--),ue}function Ge(){return ue=De<Wh?we(Ur,De++):0,Nr++,ue===10&&(Nr=1,ll++),ue}function Pt(){return we(Ur,De)}function Za(){return De}function qi(e,t){return Ii(Ur,e,t)}function Li(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vh(e){return ll=Nr=1,Wh=xt(Ur=e),De=0,[]}function Hh(e){return Ur="",e}function qa(e){return Bh(qi(De-1,hu(e===91?e+2:e===40?e+1:e)))}function Ny(e){for(;(ue=Pt())&&ue<33;)Ge();return Li(e)>2||Li(ue)>3?"":" "}function Oy(e,t){for(;--t&&Ge()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return qi(e,Za()+(t<6&&Pt()==32&&Ge()==32))}function hu(e){for(;Ge();)switch(ue){case e:return De;case 34:case 39:e!==34&&e!==39&&hu(ue);break;case 40:e===41&&hu(e);break;case 92:Ge();break}return De}function $y(e,t){for(;Ge()&&e+ue!==47+10;)if(e+ue===42+42&&Pt()===47)break;return"/*"+qi(t,De-1)+"*"+ol(e===47?e:Ge())}function Ay(e){for(;!Li(Pt());)Ge();return qi(e,De)}function Ry(e){return Hh(Ja("",null,null,null,[""],e=Vh(e),0,[0],e))}function Ja(e,t,n,r,i,a,o,l,s){for(var u=0,f=0,d=o,g=0,y=0,x=0,v=1,S=1,p=1,c=0,h="",w=i,k=a,C=r,b=h;S;)switch(x=c,c=Ge()){case 40:if(x!=108&&we(b,d-1)==58){mu(b+=W(qa(c),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:b+=qa(c);break;case 9:case 10:case 13:case 32:b+=Ny(x);break;case 92:b+=Oy(Za()-1,7);continue;case 47:switch(Pt()){case 42:case 47:Pa(Iy($y(Ge(),Za()),t,n),s);break;default:b+="/"}break;case 123*v:l[u++]=xt(b)*p;case 125*v:case 59:case 0:switch(c){case 0:case 125:S=0;case 59+f:p==-1&&(b=W(b,/\f/g,"")),y>0&&xt(b)-d&&Pa(y>32?wd(b+";",r,n,d-1):wd(W(b," ","")+";",r,n,d-2),s);break;case 59:b+=";";default:if(Pa(C=xd(b,t,n,u,f,i,l,h,w=[],k=[],d),a),c===123)if(f===0)Ja(b,t,C,C,w,a,d,l,k);else switch(g===99&&we(b,3)===110?100:g){case 100:case 108:case 109:case 115:Ja(e,C,C,r&&Pa(xd(e,C,C,0,0,i,l,h,i,w=[],d),k),i,k,d,l,r?w:k);break;default:Ja(b,C,C,C,[""],k,0,l,k)}}u=f=y=0,v=p=1,h=b="",d=o;break;case 58:d=1+xt(b),y=x;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&Ty()==125)continue}switch(b+=ol(c),c*v){case 38:p=f>0?1:(b+="\f",-1);break;case 44:l[u++]=(xt(b)-1)*p,p=1;break;case 64:Pt()===45&&(b+=qa(Ge())),g=Pt(),f=d=xt(h=b+=Ay(Za())),c++;break;case 45:x===45&&xt(b)==2&&(v=0)}}return a}function xd(e,t,n,r,i,a,o,l,s,u,f){for(var d=i-1,g=i===0?a:[""],y=zc(g),x=0,v=0,S=0;x<r;++x)for(var p=0,c=Ii(e,d+1,d=Sy(v=o[x])),h=e;p<y;++p)(h=Bh(v>0?g[p]+" "+c:W(c,/&\f/g,g[p])))&&(s[S++]=h);return sl(e,t,n,i===0?Ic:l,s,u,f)}function Iy(e,t,n){return sl(e,t,n,Fh,ol(_y()),Ii(e,2,-2),0)}function wd(e,t,n,r){return sl(e,t,n,Lc,Ii(e,0,r),Ii(e,r+1,-1),r)}function kr(e,t){for(var n="",r=zc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Ly(e,t,n,r){switch(e.type){case by:if(e.children.length)break;case ky:case Lc:return e.return=e.return||e.value;case Fh:return"";case Uh:return e.return=e.value+"{"+kr(e.children,r)+"}";case Ic:e.value=e.props.join(",")}return xt(n=kr(e.children,r))?e.return=e.value+"{"+n+"}":""}function zy(e){var t=zc(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function My(e){return function(t){t.root||(t=t.return)&&e(t)}}var Dy=function(t,n,r){for(var i=0,a=0;i=a,a=Pt(),i===38&&a===12&&(n[r]=1),!Li(a);)Ge();return qi(t,De)},Fy=function(t,n){var r=-1,i=44;do switch(Li(i)){case 0:i===38&&Pt()===12&&(n[r]=1),t[r]+=Dy(De-1,n,r);break;case 2:t[r]+=qa(i);break;case 4:if(i===44){t[++r]=Pt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ol(i)}while(i=Ge());return t},Uy=function(t,n){return Hh(Fy(Vh(t),n))},kd=new WeakMap,By=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!kd.get(r))&&!i){kd.set(t,!0);for(var a=[],o=Uy(n,a),l=r.props,s=0,u=0;s<o.length;s++)for(var f=0;f<l.length;f++,u++)t.props[u]=a[s]?o[s].replace(/&\f/g,l[f]):l[f]+" "+o[s]}}},Wy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Yh(e,t){switch(Ey(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+$o+e+Ee+e+e;case 6828:case 4268:return B+e+Ee+e+e;case 6165:return B+e+Ee+"flex-"+e+e;case 5187:return B+e+W(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+Ee+"flex-$1$2")+e;case 5443:return B+e+Ee+"flex-item-"+W(e,/flex-|-self/,"")+e;case 4675:return B+e+Ee+"flex-line-pack"+W(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+Ee+W(e,"shrink","negative")+e;case 5292:return B+e+Ee+W(e,"basis","preferred-size")+e;case 6060:return B+"box-"+W(e,"-grow","")+B+e+Ee+W(e,"grow","positive")+e;case 4554:return B+W(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+$o+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~mu(e,"stretch")?Yh(W(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,xt(e)-3-(~mu(e,"!important")&&10))){case 107:return W(e,":",":"+B)+e;case 101:return W(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(we(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+Ee+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+Ee+e+e}return e}var Vy=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Lc:t.return=Yh(t.value,t.length);break;case Uh:return kr([Jr(t,{value:W(t.value,"@","@"+B)})],i);case Ic:if(t.length)return jy(t.props,function(a){switch(Py(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return kr([Jr(t,{props:[W(a,/:(read-\w+)/,":"+$o+"$1")]})],i);case"::placeholder":return kr([Jr(t,{props:[W(a,/:(plac\w+)/,":"+B+"input-$1")]}),Jr(t,{props:[W(a,/:(plac\w+)/,":"+$o+"$1")]}),Jr(t,{props:[W(a,/:(plac\w+)/,Ee+"input-$1")]})],i)}return""})}},Hy=[Vy],Yy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var S=v.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||Hy,a={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var S=v.getAttribute("data-emotion").split(" "),p=1;p<S.length;p++)a[S[p]]=!0;l.push(v)});var s,u=[By,Wy];{var f,d=[Ly,My(function(v){f.insert(v)})],g=zy(u.concat(i,d)),y=function(S){return kr(Ry(S),g)};s=function(S,p,c,h){f=c,y(S?S+"{"+p.styles+"}":p.styles),h&&(x.inserted[p.name]=!0)}}var x={key:n,sheet:new wy({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:s};return x.sheet.hydrate(l),x},Gh={exports:{}},Y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=typeof Symbol=="function"&&Symbol.for,Mc=ye?Symbol.for("react.element"):60103,Dc=ye?Symbol.for("react.portal"):60106,ul=ye?Symbol.for("react.fragment"):60107,cl=ye?Symbol.for("react.strict_mode"):60108,fl=ye?Symbol.for("react.profiler"):60114,dl=ye?Symbol.for("react.provider"):60109,pl=ye?Symbol.for("react.context"):60110,Fc=ye?Symbol.for("react.async_mode"):60111,ml=ye?Symbol.for("react.concurrent_mode"):60111,hl=ye?Symbol.for("react.forward_ref"):60112,gl=ye?Symbol.for("react.suspense"):60113,Gy=ye?Symbol.for("react.suspense_list"):60120,vl=ye?Symbol.for("react.memo"):60115,yl=ye?Symbol.for("react.lazy"):60116,Ky=ye?Symbol.for("react.block"):60121,Qy=ye?Symbol.for("react.fundamental"):60117,Xy=ye?Symbol.for("react.responder"):60118,Zy=ye?Symbol.for("react.scope"):60119;function Ze(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mc:switch(e=e.type,e){case Fc:case ml:case ul:case fl:case cl:case gl:return e;default:switch(e=e&&e.$$typeof,e){case pl:case hl:case yl:case vl:case dl:return e;default:return t}}case Dc:return t}}}function Kh(e){return Ze(e)===ml}Y.AsyncMode=Fc;Y.ConcurrentMode=ml;Y.ContextConsumer=pl;Y.ContextProvider=dl;Y.Element=Mc;Y.ForwardRef=hl;Y.Fragment=ul;Y.Lazy=yl;Y.Memo=vl;Y.Portal=Dc;Y.Profiler=fl;Y.StrictMode=cl;Y.Suspense=gl;Y.isAsyncMode=function(e){return Kh(e)||Ze(e)===Fc};Y.isConcurrentMode=Kh;Y.isContextConsumer=function(e){return Ze(e)===pl};Y.isContextProvider=function(e){return Ze(e)===dl};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mc};Y.isForwardRef=function(e){return Ze(e)===hl};Y.isFragment=function(e){return Ze(e)===ul};Y.isLazy=function(e){return Ze(e)===yl};Y.isMemo=function(e){return Ze(e)===vl};Y.isPortal=function(e){return Ze(e)===Dc};Y.isProfiler=function(e){return Ze(e)===fl};Y.isStrictMode=function(e){return Ze(e)===cl};Y.isSuspense=function(e){return Ze(e)===gl};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ul||e===ml||e===fl||e===cl||e===gl||e===Gy||typeof e=="object"&&e!==null&&(e.$$typeof===yl||e.$$typeof===vl||e.$$typeof===dl||e.$$typeof===pl||e.$$typeof===hl||e.$$typeof===Qy||e.$$typeof===Xy||e.$$typeof===Zy||e.$$typeof===Ky)};Y.typeOf=Ze;Gh.exports=Y;var qy=Gh.exports,Qh=qy,Jy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},e2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xh={};Xh[Qh.ForwardRef]=Jy;Xh[Qh.Memo]=e2;var t2=!0;function n2(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Zh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||t2===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},r2=function(t,n,r){Zh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function i2(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var qh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a2=/[A-Z]|^ms/g,o2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Jh=function(t){return t.charCodeAt(1)===45},bd=function(t){return t!=null&&typeof t!="boolean"},ls=Dh(function(e){return Jh(e)?e:e.replace(a2,"-$&").toLowerCase()}),Sd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(o2,function(r,i,a){return wt={name:i,styles:a,next:wt},i})}return qh[t]!==1&&!Jh(t)&&typeof n=="number"&&n!==0?n+"px":n};function zi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return wt={name:n.name,styles:n.styles,next:wt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)wt={name:r.name,styles:r.styles,next:wt},r=r.next;var i=n.styles+";";return i}return l2(e,t,n)}case"function":{if(e!==void 0){var a=wt,o=n(e);return wt=a,zi(e,t,o)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function l2(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=zi(e,t,n[i])+";";else for(var a in n){var o=n[a];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=a+"{"+t[o]+"}":bd(o)&&(r+=ls(a)+":"+Sd(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)bd(o[l])&&(r+=ls(a)+":"+Sd(a,o[l])+";");else{var s=zi(e,t,o);switch(a){case"animation":case"animationName":{r+=ls(a)+":"+s+";";break}default:r+=a+"{"+s+"}"}}}return r}var Cd=/label:\s*([^\s;\n{]+)\s*(;|$)/g,wt,e0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,a="";wt=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,a+=zi(r,n,o)):a+=o[0];for(var l=1;l<t.length;l++)a+=zi(r,n,t[l]),i&&(a+=o[l]);Cd.lastIndex=0;for(var s="",u;(u=Cd.exec(a))!==null;)s+="-"+u[1];var f=i2(a)+s;return{name:f,styles:a,next:wt}},s2=function(t){return t()},u2=xs["useInsertionEffect"]?xs["useInsertionEffect"]:!1,c2=u2||s2,t0=E.createContext(typeof HTMLElement<"u"?Yy({key:"css"}):null);t0.Provider;var f2=function(t){return E.forwardRef(function(n,r){var i=E.useContext(t0);return t(n,i,r)})},d2=E.createContext({});function p2(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e0(t)}var Uc=function(){var t=p2.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},m2=vy,h2=function(t){return t!=="theme"},Ed=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?m2:h2},Pd=function(t,n,r){var i;if(n){var a=n.shouldForwardProp;i=t.__emotion_forwardProp&&a?function(o){return t.__emotion_forwardProp(o)&&a(o)}:a}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},g2=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Zh(n,r,i),c2(function(){return r2(n,r,i)}),null},v2=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var l=Pd(t,n,r),s=l||Ed(i),u=!s("as");return function(){var f=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push("label:"+a+";"),f[0]==null||f[0].raw===void 0)d.push.apply(d,f);else{d.push(f[0][0]);for(var g=f.length,y=1;y<g;y++)d.push(f[y],f[0][y])}var x=f2(function(v,S,p){var c=u&&v.as||i,h="",w=[],k=v;if(v.theme==null){k={};for(var C in v)k[C]=v[C];k.theme=E.useContext(d2)}typeof v.className=="string"?h=n2(S.registered,w,v.className):v.className!=null&&(h=v.className+" ");var b=e0(d.concat(w),S.registered,k);h+=S.key+"-"+b.name,o!==void 0&&(h+=" "+o);var N=u&&l===void 0?Ed(c):s,M={};for(var L in v)u&&L==="as"||N(L)&&(M[L]=v[L]);return M.className=h,M.ref=p,E.createElement(E.Fragment,null,E.createElement(g2,{cache:S,serialized:b,isStringTag:typeof c=="string"}),E.createElement(c,M))});return x.displayName=a!==void 0?a:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=d,x.__emotion_forwardProp=l,Object.defineProperty(x,"toString",{value:function(){return"."+o}}),x.withComponent=function(v,S){return e(v,pu({},n,S,{shouldForwardProp:Pd(x,S,!0)})).apply(void 0,d)},x}},y2=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],D=v2.bind();y2.forEach(function(e){D[e]=D(e)});const x2=Uc`
  100% {
    transform: rotate(360deg);
  }
`,w2=Uc`
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
`,k2=Uc`
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
`,b2=D.div`
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
`,S2=D.svg`
  animation: ${x2} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`,C2=D.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${w2} 1.5s ease-in-out infinite, ${k2} 6s ease-in-out infinite;
  stroke-linecap: round;
`,E2=()=>m.jsx(b2,{children:m.jsx(S2,{viewBox:"25 25 50 50",children:m.jsx(C2,{cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})})});/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const jd="popstate";function P2(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return gu("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ao(i)}return _2(t,n,null,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function j2(){return Math.random().toString(36).substr(2,8)}function _d(e,t){return{usr:e.state,key:e.key,idx:t}}function gu(e,t,n,r){return n===void 0&&(n=null),Mi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:n,key:t&&t.key||r||j2()})}function Ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=an.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(Mi({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){l=an.Pop;let S=f(),p=S==null?null:S-u;u=S,s&&s({action:l,location:v.location,delta:p})}function g(S,p){l=an.Push;let c=gu(v.location,S,p);n&&n(c,S),u=f()+1;let h=_d(c,u),w=v.createHref(c);try{o.pushState(h,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}a&&s&&s({action:l,location:v.location,delta:1})}function y(S,p){l=an.Replace;let c=gu(v.location,S,p);n&&n(c,S),u=f();let h=_d(c,u),w=v.createHref(c);o.replaceState(h,"",w),a&&s&&s({action:l,location:v.location,delta:0})}function x(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof S=="string"?S:Ao(S);return le(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let v={get action(){return l},get location(){return e(i,o)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(jd,d),s=S,()=>{i.removeEventListener(jd,d),s=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let p=x(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(S){return o.go(S)}};return v}var Td;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Td||(Td={}));function T2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Br(t):t,i=Di(r.pathname||"/",n);if(i==null)return null;let a=n0(e);N2(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=D2(a[l],U2(i));return o}function n0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(le(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=hn([r,s.relativePath]),f=n.concat(s);a.children&&a.children.length>0&&(le(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),n0(a.children,t,f,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:z2(u,a.index),routesMeta:f})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of r0(a.path))i(a,o,s)}),t}function r0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=r0(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function N2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:M2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const O2=/^:\w+$/,$2=3,A2=2,R2=1,I2=10,L2=-2,Nd=e=>e==="*";function z2(e,t){let n=e.split("/"),r=n.length;return n.some(Nd)&&(r+=L2),t&&(r+=A2),n.filter(i=>!Nd(i)).reduce((i,a)=>i+(O2.test(a)?$2:a===""?R2:I2),r)}function M2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function D2(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=vu({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;a.push({params:r,pathname:hn([i,f.pathname]),pathnameBase:H2(hn([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=hn([i,f.pathnameBase]))}return a}function vu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=F2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let g=l[d]||"";o=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}return u[f]=B2(l[d]||"",f),u},{}),pathname:a,pathnameBase:o,pattern:e}}function F2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function U2(e){try{return decodeURI(e)}catch(t){return Bc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function B2(e,t){try{return decodeURIComponent(e)}catch(n){return Bc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Di(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function W2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Br(e):e;return{pathname:n?n.startsWith("/")?n:V2(n,t):t,search:Y2(r),hash:G2(i)}}function V2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ss(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function a0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Br(e):(i=Mi({},e),le(!i.pathname||!i.pathname.includes("?"),ss("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),ss("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),ss("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}l=d>=0?t[d]:"/"}let s=W2(i,l),u=o&&o!=="/"&&o.endsWith("/"),f=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),H2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Y2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function K2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const o0=["post","put","patch","delete"];new Set(o0);const Q2=["get",...o0];new Set(Q2);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}const xl=E.createContext(null),l0=E.createContext(null),Xn=E.createContext(null),wl=E.createContext(null),Wt=E.createContext({outlet:null,matches:[],isDataRoute:!1}),s0=E.createContext(null);function X2(e,t){let{relative:n}=t===void 0?{}:t;Ji()||le(!1);let{basename:r,navigator:i}=E.useContext(Xn),{hash:a,pathname:o,search:l}=bl(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:hn([r,o])),i.createHref({pathname:s,search:l,hash:a})}function Ji(){return E.useContext(wl)!=null}function ea(){return Ji()||le(!1),E.useContext(wl).location}function u0(e){E.useContext(Xn).static||E.useLayoutEffect(e)}function kl(){let{isDataRoute:e}=E.useContext(Wt);return e?fx():Z2()}function Z2(){Ji()||le(!1);let e=E.useContext(xl),{basename:t,navigator:n}=E.useContext(Xn),{matches:r}=E.useContext(Wt),{pathname:i}=ea(),a=JSON.stringify(i0(r).map(s=>s.pathnameBase)),o=E.useRef(!1);return u0(()=>{o.current=!0}),E.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){n.go(s);return}let f=a0(s,JSON.parse(a),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:hn([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,a,i,e])}const q2=E.createContext(null);function J2(e){let t=E.useContext(Wt).outlet;return t&&E.createElement(q2.Provider,{value:e},t)}function c0(){let{matches:e}=E.useContext(Wt),t=e[e.length-1];return t?t.params:{}}function bl(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext(Wt),{pathname:i}=ea(),a=JSON.stringify(i0(r).map(o=>o.pathnameBase));return E.useMemo(()=>a0(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function ex(e,t){return tx(e,t)}function tx(e,t,n){Ji()||le(!1);let{navigator:r}=E.useContext(Xn),{matches:i}=E.useContext(Wt),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=ea(),u;if(t){var f;let v=typeof t=="string"?Br(t):t;l==="/"||(f=v.pathname)!=null&&f.startsWith(l)||le(!1),u=v}else u=s;let d=u.pathname||"/",g=l==="/"?d:d.slice(l.length)||"/",y=T2(e,{pathname:g}),x=ox(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:hn([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:hn([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&x?E.createElement(wl.Provider,{value:{location:Ro({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:an.Pop}},x):x}function nx(){let e=cx(),t=K2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,a)}const rx=E.createElement(nx,null);class ix extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(Wt.Provider,{value:this.props.routeContext},E.createElement(s0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ax(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(xl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Wt.Provider,{value:t},r)}function ox(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=a.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||le(!1),a=a.slice(0,Math.min(a.length,l+1))}return a.reduceRight((l,s,u)=>{let f=s.route.id?o==null?void 0:o[s.route.id]:null,d=null;n&&(d=s.route.errorElement||rx);let g=t.concat(a.slice(0,u+1)),y=()=>{let x;return f?x=d:s.route.Component?x=E.createElement(s.route.Component,null):s.route.element?x=s.route.element:x=l,E.createElement(ax,{match:s,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:x})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?E.createElement(ix,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var f0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(f0||{}),Io=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Io||{});function lx(e){let t=E.useContext(xl);return t||le(!1),t}function sx(e){let t=E.useContext(l0);return t||le(!1),t}function ux(e){let t=E.useContext(Wt);return t||le(!1),t}function d0(e){let t=ux(),n=t.matches[t.matches.length-1];return n.route.id||le(!1),n.route.id}function cx(){var e;let t=E.useContext(s0),n=sx(Io.UseRouteError),r=d0(Io.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function fx(){let{router:e}=lx(f0.UseNavigateStable),t=d0(Io.UseNavigateStable),n=E.useRef(!1);return u0(()=>{n.current=!0}),E.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ro({fromRouteId:t},a)))},[e,t])}function dx(e){return J2(e.context)}function We(e){le(!1)}function px(e){let{basename:t="/",children:n=null,location:r,navigationType:i=an.Pop,navigator:a,static:o=!1}=e;Ji()&&le(!1);let l=t.replace(/^\/*/,"/"),s=E.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof r=="string"&&(r=Br(r));let{pathname:u="/",search:f="",hash:d="",state:g=null,key:y="default"}=r,x=E.useMemo(()=>{let v=Di(u,l);return v==null?null:{location:{pathname:v,search:f,hash:d,state:g,key:y},navigationType:i}},[l,u,f,d,g,y,i]);return x==null?null:E.createElement(Xn.Provider,{value:s},E.createElement(wl.Provider,{children:n,value:x}))}function mx(e){let{children:t,location:n}=e;return ex(yu(t),n)}new Promise(()=>{});function yu(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let a=[...t,i];if(r.type===E.Fragment){n.push.apply(n,yu(r.props.children,a));return}r.type!==We&&le(!1),!r.props.index||!r.props.children||le(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=yu(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lo.apply(this,arguments)}function p0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function hx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gx(e,t){return e.button===0&&(!t||t==="_self")&&!hx(e)}const vx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],yx=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],xx=E.createContext({isTransitioning:!1}),wx="startTransition",Od=xs[wx];function kx(e){let{basename:t,children:n,future:r,window:i}=e,a=E.useRef();a.current==null&&(a.current=P2({window:i,v5Compat:!0}));let o=a.current,[l,s]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=E.useCallback(d=>{u&&Od?Od(()=>s(d)):s(d)},[s,u]);return E.useLayoutEffect(()=>o.listen(f),[o,f]),E.createElement(px,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const bx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rt=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:f,unstable_viewTransition:d}=t,g=p0(t,vx),{basename:y}=E.useContext(Xn),x,v=!1;if(typeof u=="string"&&Sx.test(u)&&(x=u,bx))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),k=Di(w.pathname,y);w.origin===h.origin&&k!=null?u=k+w.search+w.hash:v=!0}catch{}let S=X2(u,{relative:i}),p=Ex(u,{replace:o,state:l,target:s,preventScrollReset:f,relative:i,unstable_viewTransition:d});function c(h){r&&r(h),h.defaultPrevented||p(h)}return E.createElement("a",Lo({},g,{href:x||S,onClick:v||a?r:c,ref:n,target:s}))}),ta=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:s,unstable_viewTransition:u,children:f}=t,d=p0(t,yx),g=bl(s,{relative:d.relative}),y=ea(),x=E.useContext(l0),{navigator:v}=E.useContext(Xn),S=x!=null&&Px(g)&&u===!0,p=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,c=y.pathname,h=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(c=c.toLowerCase(),h=h?h.toLowerCase():null,p=p.toLowerCase());let w=c===p||!o&&c.startsWith(p)&&c.charAt(p.length)==="/",k=h!=null&&(h===p||!o&&h.startsWith(p)&&h.charAt(p.length)==="/"),C={isActive:w,isPending:k,isTransitioning:S},b=w?r:void 0,N;typeof a=="function"?N=a(C):N=[a,w?"active":null,k?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let M=typeof l=="function"?l(C):l;return E.createElement(Rt,Lo({},d,{"aria-current":b,className:N,ref:n,style:M,to:s,unstable_viewTransition:u}),typeof f=="function"?f(C):f)});var xu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xu||(xu={}));var $d;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($d||($d={}));function Cx(e){let t=E.useContext(xl);return t||le(!1),t}function Ex(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:l}=t===void 0?{}:t,s=kl(),u=ea(),f=bl(e,{relative:o});return E.useCallback(d=>{if(gx(d,n)){d.preventDefault();let g=r!==void 0?r:Ao(u)===Ao(f);s(e,{replace:g,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:l})}},[u,s,f,r,i,n,e,a,o,l])}function Px(e,t){t===void 0&&(t={});let n=E.useContext(xx);n==null&&le(!1);let{basename:r}=Cx(xu.useViewTransitionState),i=bl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Di(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Di(n.nextLocation.pathname,r)||n.nextLocation.pathname;return vu(i.pathname,o)!=null||vu(i.pathname,a)!=null}var Ie=function(){return Ie=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ie.apply(this,arguments)};function zo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var Q="-ms-",hi="-moz-",V="-webkit-",m0="comm",Sl="rule",Wc="decl",jx="@import",h0="@keyframes",_x="@layer",Tx=Math.abs,Vc=String.fromCharCode,wu=Object.assign;function Nx(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function g0(e){return e.trim()}function Tt(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,n){return e.replace(t,n)}function eo(e,t){return e.indexOf(t)}function ge(e,t){return e.charCodeAt(t)|0}function Or(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function v0(e){return e.length}function ii(e,t){return t.push(e),e}function Ox(e,t){return e.map(t).join("")}function Ad(e,t){return e.filter(function(n){return!Tt(n,t)})}var Cl=1,$r=1,y0=0,lt=0,ce=0,Wr="";function El(e,t,n,r,i,a,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Cl,column:$r,length:o,return:"",siblings:l}}function Zt(e,t){return wu(El("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qn(e){for(;e.root;)e=Zt(e.root,{children:[e]});ii(e,e.siblings)}function $x(){return ce}function Ax(){return ce=lt>0?ge(Wr,--lt):0,$r--,ce===10&&($r=1,Cl--),ce}function ht(){return ce=lt<y0?ge(Wr,lt++):0,$r++,ce===10&&($r=1,Cl++),ce}function Mn(){return ge(Wr,lt)}function to(){return lt}function Pl(e,t){return Or(Wr,e,t)}function ku(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rx(e){return Cl=$r=1,y0=kt(Wr=e),lt=0,[]}function Ix(e){return Wr="",e}function us(e){return g0(Pl(lt-1,bu(e===91?e+2:e===40?e+1:e)))}function Lx(e){for(;(ce=Mn())&&ce<33;)ht();return ku(e)>2||ku(ce)>3?"":" "}function zx(e,t){for(;--t&&ht()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Pl(e,to()+(t<6&&Mn()==32&&ht()==32))}function bu(e){for(;ht();)switch(ce){case e:return lt;case 34:case 39:e!==34&&e!==39&&bu(ce);break;case 40:e===41&&bu(e);break;case 92:ht();break}return lt}function Mx(e,t){for(;ht()&&e+ce!==47+10;)if(e+ce===42+42&&Mn()===47)break;return"/*"+Pl(t,lt-1)+"*"+Vc(e===47?e:ht())}function Dx(e){for(;!ku(Mn());)ht();return Pl(e,lt)}function Fx(e){return Ix(no("",null,null,null,[""],e=Rx(e),0,[0],e))}function no(e,t,n,r,i,a,o,l,s){for(var u=0,f=0,d=o,g=0,y=0,x=0,v=1,S=1,p=1,c=0,h="",w=i,k=a,C=r,b=h;S;)switch(x=c,c=ht()){case 40:if(x!=108&&ge(b,d-1)==58){eo(b+=z(us(c),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:b+=us(c);break;case 9:case 10:case 13:case 32:b+=Lx(x);break;case 92:b+=zx(to()-1,7);continue;case 47:switch(Mn()){case 42:case 47:ii(Ux(Mx(ht(),to()),t,n,s),s);break;default:b+="/"}break;case 123*v:l[u++]=kt(b)*p;case 125*v:case 59:case 0:switch(c){case 0:case 125:S=0;case 59+f:p==-1&&(b=z(b,/\f/g,"")),y>0&&kt(b)-d&&ii(y>32?Id(b+";",r,n,d-1,s):Id(z(b," ","")+";",r,n,d-2,s),s);break;case 59:b+=";";default:if(ii(C=Rd(b,t,n,u,f,i,l,h,w=[],k=[],d,a),a),c===123)if(f===0)no(b,t,C,C,w,a,d,l,k);else switch(g===99&&ge(b,3)===110?100:g){case 100:case 108:case 109:case 115:no(e,C,C,r&&ii(Rd(e,C,C,0,0,i,l,h,i,w=[],d,k),k),i,k,d,l,r?w:k);break;default:no(b,C,C,C,[""],k,0,l,k)}}u=f=y=0,v=p=1,h=b="",d=o;break;case 58:d=1+kt(b),y=x;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&Ax()==125)continue}switch(b+=Vc(c),c*v){case 38:p=f>0?1:(b+="\f",-1);break;case 44:l[u++]=(kt(b)-1)*p,p=1;break;case 64:Mn()===45&&(b+=us(ht())),g=Mn(),f=d=kt(h=b+=Dx(to())),c++;break;case 45:x===45&&kt(b)==2&&(v=0)}}return a}function Rd(e,t,n,r,i,a,o,l,s,u,f,d){for(var g=i-1,y=i===0?a:[""],x=v0(y),v=0,S=0,p=0;v<r;++v)for(var c=0,h=Or(e,g+1,g=Tx(S=o[v])),w=e;c<x;++c)(w=g0(S>0?y[c]+" "+h:z(h,/&\f/g,y[c])))&&(s[p++]=w);return El(e,t,n,i===0?Sl:l,s,u,f,d)}function Ux(e,t,n,r){return El(e,t,n,m0,Vc($x()),Or(e,2,-2),0,r)}function Id(e,t,n,r,i){return El(e,t,n,Wc,Or(e,0,r),Or(e,r+1,-1),r,i)}function x0(e,t,n){switch(Nx(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return hi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+hi+e+Q+e+e;case 5936:switch(ge(e,t+11)){case 114:return V+e+Q+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+Q+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+Q+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+Q+e+e;case 6165:return V+e+Q+"flex-"+e+e;case 5187:return V+e+z(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return V+e+Q+"flex-item-"+z(e,/flex-|-self/g,"")+(Tt(e,/flex-|baseline/)?"":Q+"grid-row-"+z(e,/flex-|-self/g,""))+e;case 4675:return V+e+Q+"flex-line-pack"+z(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+Q+z(e,"shrink","negative")+e;case 5292:return V+e+Q+z(e,"basis","preferred-size")+e;case 6060:return V+"box-"+z(e,"-grow","")+V+e+Q+z(e,"grow","positive")+e;case 4554:return V+z(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!Tt(e,/flex-|baseline/))return Q+"grid-column-align"+Or(e,t)+e;break;case 2592:case 3360:return Q+z(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Tt(r.props,/grid-\w+-end/)})?~eo(e+(n=n[t].value),"span")?e:Q+z(e,"-start","")+e+Q+"grid-row-span:"+(~eo(n,"span")?Tt(n,/\d+/):+Tt(n,/\d+/)-+Tt(e,/\d+/))+";":Q+z(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Tt(r.props,/grid-\w+-start/)})?e:Q+z(z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+hi+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~eo(e,"stretch")?x0(z(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,l,s,u){return Q+i+":"+a+u+(o?Q+i+"-span:"+(l?s:+s-+a)+u:"")+e});case 4949:if(ge(e,t+6)===121)return z(e,":",":"+V)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(ge(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+Q+"$2box$3")+e;case 100:return z(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,"scroll-","scroll-snap-")+e}return e}function Mo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Bx(e,t,n,r){switch(e.type){case _x:if(e.children.length)break;case jx:case Wc:return e.return=e.return||e.value;case m0:return"";case h0:return e.return=e.value+"{"+Mo(e.children,r)+"}";case Sl:if(!kt(e.value=e.props.join(",")))return""}return kt(n=Mo(e.children,r))?e.return=e.value+"{"+n+"}":""}function Wx(e){var t=v0(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function Vx(e){return function(t){t.root||(t=t.return)&&e(t)}}function Hx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Wc:e.return=x0(e.value,e.length,n);return;case h0:return Mo([Zt(e,{value:z(e.value,"@","@"+V)})],r);case Sl:if(e.length)return Ox(n=e.props,function(i){switch(Tt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(Zt(e,{props:[z(i,/:(read-\w+)/,":"+hi+"$1")]})),qn(Zt(e,{props:[i]})),wu(e,{props:Ad(n,r)});break;case"::placeholder":qn(Zt(e,{props:[z(i,/:(plac\w+)/,":"+V+"input-$1")]})),qn(Zt(e,{props:[z(i,/:(plac\w+)/,":"+hi+"$1")]})),qn(Zt(e,{props:[z(i,/:(plac\w+)/,Q+"input-$1")]})),qn(Zt(e,{props:[i]})),wu(e,{props:Ad(n,r)});break}return""})}}var Ar=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Hc=typeof window<"u"&&"HTMLElement"in window,Yx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),jl=Object.freeze([]),Rr=Object.freeze({});function Gx(e,t,n){return n===void 0&&(n=Rr),e.theme!==n.theme&&e.theme||t||n.theme}var w0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Kx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qx=/(^-|-$)/g;function Ld(e){return e.replace(Kx,"-").replace(Qx,"")}var Xx=/(a)(d)/gi,zd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Su(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=zd(t%52)+n;return(zd(t%52)+n).replace(Xx,"$1-$2")}var cs,fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},k0=function(e){return fr(5381,e)};function Zx(e){return Su(k0(e)>>>0)}function qx(e){return e.displayName||e.name||"Component"}function fs(e){return typeof e=="string"&&!0}var b0=typeof Symbol=="function"&&Symbol.for,S0=b0?Symbol.for("react.memo"):60115,Jx=b0?Symbol.for("react.forward_ref"):60112,ew={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nw=((cs={})[Jx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cs[S0]=C0,cs);function Md(e){return("type"in(t=e)&&t.type.$$typeof)===S0?C0:"$$typeof"in e?nw[e.$$typeof]:ew;var t}var rw=Object.defineProperty,iw=Object.getOwnPropertyNames,Dd=Object.getOwnPropertySymbols,aw=Object.getOwnPropertyDescriptor,ow=Object.getPrototypeOf,Fd=Object.prototype;function E0(e,t,n){if(typeof t!="string"){if(Fd){var r=ow(t);r&&r!==Fd&&E0(e,r,n)}var i=iw(t);Dd&&(i=i.concat(Dd(t)));for(var a=Md(e),o=Md(t),l=0;l<i.length;++l){var s=i[l];if(!(s in tw||n&&n[s]||o&&s in o||a&&s in a)){var u=aw(t,s);try{rw(e,s,u)}catch{}}}}return e}function Ir(e){return typeof e=="function"}function Yc(e){return typeof e=="object"&&"styledComponentId"in e}function An(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ud(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Fi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cu(e,t,n){if(n===void 0&&(n=!1),!n&&!Fi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Cu(e[r],t[r]);else if(Fi(t))for(var r in t)e[r]=Cu(e[r],t[r]);return e}function Gc(e,t){Object.defineProperty(e,"toString",{value:t})}function na(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var lw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw na(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),s=(o=0,n.length);o<s;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),ro=new Map,Do=new Map,ds=1,ja=function(e){if(ro.has(e))return ro.get(e);for(;Do.has(ds);)ds++;var t=ds++;return ro.set(e,t),Do.set(t,e),t},sw=function(e,t){ro.set(e,t),Do.set(t,e)},uw="style[".concat(Ar,"][").concat("data-styled-version",'="').concat("6.0.3",'"]'),cw=new RegExp("^".concat(Ar,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fw=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},dw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],a=0,o=r.length;a<o;a++){var l=r[a].trim();if(l){var s=l.match(cw);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(sw(f,u),fw(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function pw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var P0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Ar,"]")));return s[s.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Ar,"active"),r.setAttribute("data-styled-version","6.0.3");var o=pw();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},mw=function(){function e(t){this.element=P0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw na(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),hw=function(){function e(t){this.element=P0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),gw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Bd=Hc,vw={isServer:!Hc,useCSSOMInjection:!Yx},j0=function(){function e(t,n,r){t===void 0&&(t=Rr),n===void 0&&(n={});var i=this;this.options=Ie(Ie({},vw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Hc&&Bd&&(Bd=!1,function(a){for(var o=document.querySelectorAll(uw),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute(Ar)!=="active"&&(dw(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Gc(this,function(){return function(a){for(var o=a.getTag(),l=o.length,s="",u=function(d){var g=function(p){return Do.get(p)}(d);if(g===void 0)return"continue";var y=a.names.get(g),x=o.getGroup(d);if(y===void 0||x.length===0)return"continue";var v="".concat(Ar,".g").concat(d,'[id="').concat(g,'"]'),S="";y!==void 0&&y.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),s+="".concat(x).concat(v,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},f=0;f<l;f++)u(f);return s}(i)})}return e.registerId=function(t){return ja(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ie(Ie({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new gw(i):r?new mw(i):new hw(i)}(this.options),new lw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ja(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ja(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ja(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yw=/&/g,xw=/^\s*\/\/.*$/gm;function _0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=_0(n.children,t)),n})}function ww(e){var t,n,r,i=e===void 0?Rr:e,a=i.options,o=a===void 0?Rr:a,l=i.plugins,s=l===void 0?jl:l,u=function(g,y,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},f=s.slice();f.push(function(g){g.type===Sl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(yw,n).replace(r,u))}),o.prefix&&f.push(Hx),f.push(Bx);var d=function(g,y,x,v){y===void 0&&(y=""),x===void 0&&(x=""),v===void 0&&(v="&"),t=v,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var S=g.replace(xw,""),p=Fx(x||y?"".concat(x," ").concat(y," { ").concat(S," }"):S);o.namespace&&(p=_0(p,o.namespace));var c=[];return Mo(p,Wx(f.concat(Vx(function(h){return c.push(h)})))),c};return d.hash=s.length?s.reduce(function(g,y){return y.name||na(15),fr(g,y.name)},5381).toString():"",d}var kw=new j0,Eu=ww(),T0=Te.createContext({shouldForwardProp:void 0,styleSheet:kw,stylis:Eu});T0.Consumer;Te.createContext(void 0);function Wd(){return E.useContext(T0)}var bw=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Eu);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Gc(this,function(){throw na(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Eu),this.name+t.hash},e}(),Sw=function(e){return e>="A"&&e<="Z"};function Vd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Sw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var N0=function(e){return e==null||e===!1||e===""},O0=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!N0(a)&&(Array.isArray(a)&&a.isCss||Ir(a)?r.push("".concat(Vd(i),":"),a,";"):Fi(a)?r.push.apply(r,zo(zo(["".concat(i," {")],O0(a),!1),["}"],!1)):r.push("".concat(Vd(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in qh||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dn(e,t,n,r){if(N0(e))return[];if(Yc(e))return[".".concat(e.styledComponentId)];if(Ir(e)){if(!Ir(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Dn(i,t,n,r)}var a;return e instanceof bw?n?(e.inject(n,r),[e.getName(r)]):[e]:Fi(e)?O0(e):Array.isArray(e)?Array.prototype.concat.apply(jl,e.map(function(o){return Dn(o,t,n,r)})):[e.toString()]}function Cw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ir(n)&&!Yc(n))return!1}return!0}var Ew=k0("6.0.3"),Pw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Cw(t),this.componentId=n,this.baseHash=fr(Ew,n),this.baseStyle=r,j0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=An(i,this.staticRulesId);else{var a=Ud(Dn(this.rules,t,n,r)),o=Su(fr(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=An(i,o),this.staticRulesId=o}else{for(var s=fr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")u+=d;else if(d){var g=Ud(Dn(d,t,n,r));s=fr(s,g),u+=g}}if(u){var y=Su(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=An(i,y)}}return i},e}(),$0=Te.createContext(void 0);$0.Consumer;var ps={};function jw(e,t,n){var r=Yc(e),i=e,a=!fs(e),o=t.attrs,l=o===void 0?jl:o,s=t.componentId,u=s===void 0?function(h,w){var k=typeof h!="string"?"sc":Ld(h);ps[k]=(ps[k]||0)+1;var C="".concat(k,"-").concat(Zx("6.0.3"+k+ps[k]));return w?"".concat(w,"-").concat(C):C}(t.displayName,t.parentComponentId):s,f=t.displayName;f===void 0&&function(h){return fs(h)?"styled.".concat(h):"Styled(".concat(qx(h),")")}(e);var d=t.displayName&&t.componentId?"".concat(Ld(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;y=function(h,w){return x(h,w)&&v(h,w)}}else y=x}var S=new Pw(n,d,r?i.componentStyle:void 0);function p(h,w){return function(k,C,b){var N=k.attrs,M=k.componentStyle,L=k.defaultProps,Fe=k.foldedComponentIds,En=k.styledComponentId,Pn=k.target,la=Te.useContext($0),Al=Wd(),jn=k.shouldForwardProp||Al.shouldForwardProp,Je=function(jt,Ue,Ht){for(var Be,et=Ie(Ie({},Ue),{className:void 0,theme:Ht}),Rl=0;Rl<jt.length;Rl+=1){var sa=Ir(Be=jt[Rl])?Be(et):Be;for(var Yt in sa)et[Yt]=Yt==="className"?An(et[Yt],sa[Yt]):Yt==="style"?Ie(Ie({},et[Yt]),sa[Yt]):sa[Yt]}return Ue.className&&(et.className=An(et.className,Ue.className)),et}(N,C,Gx(C,la,L)||Rr),_=Je.as||Pn,R={};for(var I in Je)Je[I]===void 0||I[0]==="$"||I==="as"||I==="theme"||(I==="forwardedAs"?R.as=Je.forwardedAs:jn&&!jn(I,_)||(R[I]=Je[I]));var J=function(jt,Ue){var Ht=Wd(),Be=jt.generateAndInjectStyles(Ue,Ht.styleSheet,Ht.stylis);return Be}(M,Je),ie=An(Fe,En);return J&&(ie+=" "+J),Je.className&&(ie+=" "+Je.className),R[fs(_)&&!w0.has(_)?"class":"className"]=ie,R.ref=b,E.createElement(_,R)}(c,h,w)}var c=Te.forwardRef(p);return c.attrs=g,c.componentStyle=S,c.shouldForwardProp=y,c.foldedComponentIds=r?An(i.foldedComponentIds,i.styledComponentId):"",c.styledComponentId=d,c.target=r?i.target:e,Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?function(w){for(var k=[],C=1;C<arguments.length;C++)k[C-1]=arguments[C];for(var b=0,N=k;b<N.length;b++)Cu(w,N[b],!0);return w}({},i.defaultProps,h):h}}),Gc(c,function(){return".".concat(c.styledComponentId)}),a&&E0(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),c}function Hd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Yd=function(e){return Object.assign(e,{isCss:!0})};function _w(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ir(e)||Fi(e)){var r=e;return Yd(Dn(Hd(jl,zo([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Dn(i):Yd(Dn(Hd(i,t)))}function Pu(e,t,n){if(n===void 0&&(n=Rr),!t)throw na(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,_w.apply(void 0,zo([i],a,!1)))};return r.attrs=function(i){return Pu(e,t,Ie(Ie({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Pu(e,t,Ie(Ie({},n),i))},r}var A0=function(e){return Pu(jw,e)},j=A0;w0.forEach(function(e){j[e]=A0(e)});const Tw=j.div`
  /* max-width: 960px; */
  margin: 0 auto;
  padding: 0;
  position:relative;
`,Nw=j.ul`
display: flex;
`,Ow=j.header`
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
`,$w=j.span`
margin-left: 10px;
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
`;const Aw=j(ta)`
 text-decoration: none;
 color: inherit;
`,Rw=j.div`
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
`,Kt=j(ta)`
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
`;const Iw=j.nav`
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
    font-size: 16px;
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
  `;function Gd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gd(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fo(e){"@babel/helpers - typeof";return Fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fo(e)}function Lw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function zw(e,t,n){return t&&Kd(e.prototype,t),n&&Kd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kc(e,t){return Dw(e)||Uw(e,t)||R0(e,t)||Ww()}function ra(e){return Mw(e)||Fw(e)||R0(e)||Bw()}function Mw(e){if(Array.isArray(e))return ju(e)}function Dw(e){if(Array.isArray(e))return e}function Fw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Uw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function R0(e,t){if(e){if(typeof e=="string")return ju(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ju(e,t)}}function ju(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Bw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ww(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qd=function(){},Qc={},I0={},L0=null,z0={mark:Qd,measure:Qd};try{typeof window<"u"&&(Qc=window),typeof document<"u"&&(I0=document),typeof MutationObserver<"u"&&(L0=MutationObserver),typeof performance<"u"&&(z0=performance)}catch{}var Vw=Qc.navigator||{},Xd=Vw.userAgent,Zd=Xd===void 0?"":Xd,xn=Qc,q=I0,qd=L0,_a=z0;xn.document;var Vt=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",M0=~Zd.indexOf("MSIE")||~Zd.indexOf("Trident/"),Ta,Na,Oa,$a,Aa,Dt="___FONT_AWESOME___",_u=16,D0="fa",F0="svg-inline--fa",Yn="data-fa-i2svg",Tu="data-fa-pseudo-element",Hw="data-fa-pseudo-element-pending",Xc="data-prefix",Zc="data-icon",Jd="fontawesome-i2svg",Yw="async",Gw=["HTML","HEAD","STYLE","SCRIPT"],U0=function(){try{return!0}catch{return!1}}(),X="classic",oe="sharp",qc=[X,oe];function ia(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Ui=ia((Ta={},me(Ta,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),me(Ta,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ta)),Bi=ia((Na={},me(Na,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),me(Na,oe,{solid:"fass",regular:"fasr",light:"fasl"}),Na)),Wi=ia((Oa={},me(Oa,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),me(Oa,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Oa)),Kw=ia(($a={},me($a,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),me($a,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),$a)),Qw=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,B0="fa-layers-text",Xw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Zw=ia((Aa={},me(Aa,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),me(Aa,oe,{900:"fass",400:"fasr",300:"fasl"}),Aa)),W0=[1,2,3,4,5,6,7,8,9,10],qw=W0.concat([11,12,13,14,15,16,17,18,19,20]),Jw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vi=new Set;Object.keys(Bi[X]).map(Vi.add.bind(Vi));Object.keys(Bi[oe]).map(Vi.add.bind(Vi));var ek=[].concat(qc,ra(Vi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Rn.GROUP,Rn.SWAP_OPACITY,Rn.PRIMARY,Rn.SECONDARY]).concat(W0.map(function(e){return"".concat(e,"x")})).concat(qw.map(function(e){return"w-".concat(e)})),gi=xn.FontAwesomeConfig||{};function tk(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function nk(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var rk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];rk.forEach(function(e){var t=Kc(e,2),n=t[0],r=t[1],i=nk(tk(n));i!=null&&(gi[r]=i)})}var V0={styleDefault:"solid",familyDefault:"classic",cssPrefix:D0,replacementClass:F0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gi.familyPrefix&&(gi.cssPrefix=gi.familyPrefix);var Lr=O(O({},V0),gi);Lr.autoReplaceSvg||(Lr.observeMutations=!1);var A={};Object.keys(V0).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(n){Lr[e]=n,vi.forEach(function(r){return r(A)})},get:function(){return Lr[e]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(t){Lr.cssPrefix=t,vi.forEach(function(n){return n(A)})},get:function(){return Lr.cssPrefix}});xn.FontAwesomeConfig=A;var vi=[];function ik(e){return vi.push(e),function(){vi.splice(vi.indexOf(e),1)}}var Qt=_u,St={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ak(e){if(!(!e||!Vt)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return q.head.insertBefore(t,r),e}}var ok="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Hi(){for(var e=12,t="";e-- >0;)t+=ok[Math.random()*62|0];return t}function Vr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Jc(e){return e.classList?Vr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function H0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lk(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(H0(e[n]),'" ')},"").trim()}function _l(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ef(e){return e.size!==St.size||e.x!==St.x||e.y!==St.y||e.rotate!==St.rotate||e.flipX||e.flipY}function sk(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function uk(e){var t=e.transform,n=e.width,r=n===void 0?_u:n,i=e.height,a=i===void 0?_u:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&M0?s+="translate(".concat(t.x/Qt-r/2,"em, ").concat(t.y/Qt-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/Qt,"em), calc(-50% + ").concat(t.y/Qt,"em)) "):s+="translate(".concat(t.x/Qt,"em, ").concat(t.y/Qt,"em) "),s+="scale(".concat(t.size/Qt*(t.flipX?-1:1),", ").concat(t.size/Qt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var ck=`:root, :host {
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
}`;function Y0(){var e=D0,t=F0,n=A.cssPrefix,r=A.replacementClass,i=ck;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var ep=!1;function ms(){A.autoAddCss&&!ep&&(ak(Y0()),ep=!0)}var fk={mixout:function(){return{dom:{css:Y0,insertCss:ms}}},hooks:function(){return{beforeDOMElementCreation:function(){ms()},beforeI2svg:function(){ms()}}}},Ft=xn||{};Ft[Dt]||(Ft[Dt]={});Ft[Dt].styles||(Ft[Dt].styles={});Ft[Dt].hooks||(Ft[Dt].hooks={});Ft[Dt].shims||(Ft[Dt].shims=[]);var dt=Ft[Dt],G0=[],dk=function e(){q.removeEventListener("DOMContentLoaded",e),Uo=1,G0.map(function(t){return t()})},Uo=!1;Vt&&(Uo=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Uo||q.addEventListener("DOMContentLoaded",dk));function pk(e){Vt&&(Uo?setTimeout(e,0):G0.push(e))}function aa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?H0(e):"<".concat(t," ").concat(lk(r),">").concat(a.map(aa).join(""),"</").concat(t,">")}function tp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var mk=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},hs=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?mk(n,i):n,s,u,f;for(r===void 0?(s=1,f=t[a[0]]):(s=0,f=r);s<o;s++)u=a[s],f=l(f,t[u],u,t);return f};function hk(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Nu(e){var t=hk(e);return t.length===1?t[0].toString(16):null}function gk(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function np(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ou(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=np(t);typeof dt.hooks.addPack=="function"&&!i?dt.hooks.addPack(e,np(t)):dt.styles[e]=O(O({},dt.styles[e]||{}),a),e==="fas"&&Ou("fa",t)}var Ra,Ia,La,dr=dt.styles,vk=dt.shims,yk=(Ra={},me(Ra,X,Object.values(Wi[X])),me(Ra,oe,Object.values(Wi[oe])),Ra),tf=null,K0={},Q0={},X0={},Z0={},q0={},xk=(Ia={},me(Ia,X,Object.keys(Ui[X])),me(Ia,oe,Object.keys(Ui[oe])),Ia);function wk(e){return~ek.indexOf(e)}function kk(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!wk(i)?i:null}var J0=function(){var t=function(a){return hs(dr,function(o,l,s){return o[s]=hs(l,a,{}),o},{})};K0=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),Q0=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),q0=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in dr||A.autoFetchSvg,r=hs(vk,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});X0=r.names,Z0=r.unicodes,tf=Tl(A.styleDefault,{family:A.familyDefault})};ik(function(e){tf=Tl(e.styleDefault,{family:A.familyDefault})});J0();function nf(e,t){return(K0[e]||{})[t]}function bk(e,t){return(Q0[e]||{})[t]}function In(e,t){return(q0[e]||{})[t]}function e1(e){return X0[e]||{prefix:null,iconName:null}}function Sk(e){var t=Z0[e],n=nf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wn(){return tf}var rf=function(){return{prefix:null,iconName:null,rest:[]}};function Tl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,i=Ui[r][e],a=Bi[r][e]||Bi[r][i],o=e in dt.styles?e:null;return a||o||null}var rp=(La={},me(La,X,Object.keys(Wi[X])),me(La,oe,Object.keys(Wi[oe])),La);function Nl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},me(t,X,"".concat(A.cssPrefix,"-").concat(X)),me(t,oe,"".concat(A.cssPrefix,"-").concat(oe)),t),o=null,l=X;(e.includes(a[X])||e.some(function(u){return rp[X].includes(u)}))&&(l=X),(e.includes(a[oe])||e.some(function(u){return rp[oe].includes(u)}))&&(l=oe);var s=e.reduce(function(u,f){var d=kk(A.cssPrefix,f);if(dr[f]?(f=yk[l].includes(f)?Kw[l][f]:f,o=f,u.prefix=f):xk[l].indexOf(f)>-1?(o=f,u.prefix=Tl(f,{family:l})):d?u.iconName=d:f!==A.replacementClass&&f!==a[X]&&f!==a[oe]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var g=o==="fa"?e1(u.iconName):{},y=In(u.prefix,u.iconName);g.prefix&&(o=null),u.iconName=g.iconName||y||u.iconName,u.prefix=g.prefix||u.prefix,u.prefix==="far"&&!dr.far&&dr.fas&&!A.autoFetchSvg&&(u.prefix="fas")}return u},rf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===oe&&(dr.fass||A.autoFetchSvg)&&(s.prefix="fass",s.iconName=In(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=wn()||"fas"),s}var Ck=function(){function e(){Lw(this,e),this.definitions={}}return zw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=O(O({},n.definitions[l]||{}),o[l]),Ou(l,o[l]);var s=Wi[X][l];s&&Ou(s,o[l]),J0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),ip=[],pr={},br={},Ek=Object.keys(br);function Pk(e,t){var n=t.mixoutsTo;return ip=e,pr={},Object.keys(br).forEach(function(r){Ek.indexOf(r)===-1&&delete br[r]}),ip.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Fo(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){pr[o]||(pr[o]=[]),pr[o].push(a[o])})}r.provides&&r.provides(br)}),n}function $u(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=pr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Gn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=pr[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ut(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return br[e]?br[e].apply(null,t):void 0}function Au(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||wn();if(t)return t=In(n,t)||t,tp(t1.definitions,n,t)||tp(dt.styles,n,t)}var t1=new Ck,jk=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,Gn("noAuto")},_k={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vt?(Gn("beforeI2svg",t),Ut("pseudoElements2svg",t),Ut("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,pk(function(){Nk({autoReplaceSvgRoot:n}),Gn("watch",t)})}},Tk={icon:function(t){if(t===null)return null;if(Fo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:In(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Tl(t[0]);return{prefix:r,iconName:In(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(A.cssPrefix,"-"))>-1||t.match(Qw))){var i=Nl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||wn(),iconName:In(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=wn();return{prefix:a,iconName:In(a,t)||t}}}},qe={noAuto:jk,config:A,dom:_k,parse:Tk,library:t1,findIconDefinition:Au,toHtml:aa},Nk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(dt.styles).length>0||A.autoFetchSvg)&&Vt&&A.autoReplaceSvg&&qe.dom.i2svg({node:r})};function Ol(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return aa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Vt){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ok(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(ef(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=_l(O(O({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function $k(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(A.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function af(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,d=e.extra,g=e.watchable,y=g===void 0?!1:g,x=r.found?r:n,v=x.width,S=x.height,p=i==="fak",c=[A.replacementClass,a?"".concat(A.cssPrefix,"-").concat(a):""].filter(function(M){return d.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(d.classes).join(" "),h={children:[],attributes:O(O({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:c,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(S)})},w=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/S*16*.0625,"em")}:{};y&&(h.attributes[Yn]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(f||Hi())},children:[s]}),delete h.attributes.title);var k=O(O({},h),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:O(O({},w),d.styles)}),C=r.found&&n.found?Ut("generateAbstractMask",k)||{children:[],attributes:{}}:Ut("generateAbstractIcon",k)||{children:[],attributes:{}},b=C.children,N=C.attributes;return k.children=b,k.attributes=N,l?$k(k):Ok(k)}function ap(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=O(O(O({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[Yn]="");var f=O({},o.styles);ef(i)&&(f.transform=uk({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=_l(f);d.length>0&&(u.style=d);var g=[];return g.push({tag:"span",attributes:u,children:[t]}),a&&g.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),g}function Ak(e){var t=e.content,n=e.title,r=e.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=_l(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var gs=dt.styles;function Ru(e){var t=e[0],n=e[1],r=e.slice(4),i=Kc(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(Rn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Rn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Rn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Rk={found:!1,width:512,height:512};function Ik(e,t){!U0&&!A.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Iu(e,t){var n=t;return t==="fa"&&A.styleDefault!==null&&(t=wn()),new Promise(function(r,i){if(Ut("missingIconAbstract"),n==="fa"){var a=e1(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&gs[t]&&gs[t][e]){var o=gs[t][e];return r(Ru(o))}Ik(e,t),r(O(O({},Rk),{},{icon:A.showMissingIcons&&e?Ut("missingIconAbstract")||{}:{}}))})}var op=function(){},Lu=A.measurePerformance&&_a&&_a.mark&&_a.measure?_a:{mark:op,measure:op},ai='FA "6.4.0"',Lk=function(t){return Lu.mark("".concat(ai," ").concat(t," begins")),function(){return n1(t)}},n1=function(t){Lu.mark("".concat(ai," ").concat(t," ends")),Lu.measure("".concat(ai," ").concat(t),"".concat(ai," ").concat(t," begins"),"".concat(ai," ").concat(t," ends"))},of={begin:Lk,end:n1},io=function(){};function lp(e){var t=e.getAttribute?e.getAttribute(Yn):null;return typeof t=="string"}function zk(e){var t=e.getAttribute?e.getAttribute(Xc):null,n=e.getAttribute?e.getAttribute(Zc):null;return t&&n}function Mk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function Dk(){if(A.autoReplaceSvg===!0)return ao.replace;var e=ao[A.autoReplaceSvg];return e||ao.replace}function Fk(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Uk(e){return q.createElement(e)}function r1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Fk:Uk:n;if(typeof e=="string")return q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(r1(o,{ceFn:r}))}),i}function Bk(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ao={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(r1(i),n)}),n.getAttribute(Yn)===null&&A.keepOriginalSource){var r=q.createComment(Bk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Jc(n).indexOf(A.replacementClass))return ao.replace(t);var i=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===A.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return aa(l)}).join(`
`);n.setAttribute(Yn,""),n.innerHTML=o}};function sp(e){e()}function i1(e,t){var n=typeof t=="function"?t:io;if(e.length===0)n();else{var r=sp;A.mutateApproach===Yw&&(r=xn.requestAnimationFrame||sp),r(function(){var i=Dk(),a=of.begin("mutate");e.map(i),a(),n()})}}var lf=!1;function a1(){lf=!0}function zu(){lf=!1}var Bo=null;function up(e){if(qd&&A.observeMutations){var t=e.treeCallback,n=t===void 0?io:t,r=e.nodeCallback,i=r===void 0?io:r,a=e.pseudoElementsCallback,o=a===void 0?io:a,l=e.observeMutationsRoot,s=l===void 0?q:l;Bo=new qd(function(u){if(!lf){var f=wn();Vr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!lp(d.addedNodes[0])&&(A.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&A.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&lp(d.target)&&~Jw.indexOf(d.attributeName))if(d.attributeName==="class"&&zk(d.target)){var g=Nl(Jc(d.target)),y=g.prefix,x=g.iconName;d.target.setAttribute(Xc,y||f),x&&d.target.setAttribute(Zc,x)}else Mk(d.target)&&i(d.target)})}}),Vt&&Bo.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wk(){Bo&&Bo.disconnect()}function Vk(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Hk(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Nl(Jc(e));return i.prefix||(i.prefix=wn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=bk(i.prefix,e.innerText)||nf(i.prefix,Nu(e.innerText))),!i.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Yk(e){var t=Vr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return A.autoA11y&&(n?t["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||Hi()):(t["aria-hidden"]="true",t.focusable="false")),t}function Gk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:St,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function cp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Hk(e),r=n.iconName,i=n.prefix,a=n.rest,o=Yk(e),l=$u("parseNodeAttributes",{},e),s=t.styleParser?Vk(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:St,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var Kk=dt.styles;function o1(e){var t=A.autoReplaceSvg==="nest"?cp(e,{styleParser:!1}):cp(e);return~t.extra.classes.indexOf(B0)?Ut("generateLayersText",e,t):Ut("generateSvgReplacementMutation",e,t)}var kn=new Set;qc.map(function(e){kn.add("fa-".concat(e))});Object.keys(Ui[X]).map(kn.add.bind(kn));Object.keys(Ui[oe]).map(kn.add.bind(kn));kn=ra(kn);function fp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vt)return Promise.resolve();var n=q.documentElement.classList,r=function(d){return n.add("".concat(Jd,"-").concat(d))},i=function(d){return n.remove("".concat(Jd,"-").concat(d))},a=A.autoFetchSvg?kn:qc.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Kk));a.includes("fa")||a.push("fa");var o=[".".concat(B0,":not([").concat(Yn,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(Yn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Vr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=of.begin("onTree"),u=l.reduce(function(f,d){try{var g=o1(d);g&&f.push(g)}catch(y){U0||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(g){i1(g,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(g){s(),d(g)})})}function Qk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;o1(e).then(function(n){n&&i1([n],t)})}function Xk(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Au(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Au(i||{})),e(r,O(O({},n),{},{mask:i}))}}var Zk=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?St:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,g=d===void 0?null:d,y=n.titleId,x=y===void 0?null:y,v=n.classes,S=v===void 0?[]:v,p=n.attributes,c=p===void 0?{}:p,h=n.styles,w=h===void 0?{}:h;if(t){var k=t.prefix,C=t.iconName,b=t.icon;return Ol(O({type:"icon"},t),function(){return Gn("beforeDOMElementCreation",{iconDefinition:t,params:n}),A.autoA11y&&(g?c["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(x||Hi()):(c["aria-hidden"]="true",c.focusable="false")),af({icons:{main:Ru(b),mask:s?Ru(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:O(O({},St),i),symbol:o,title:g,maskId:f,titleId:x,extra:{attributes:c,styles:w,classes:S}})})}},qk={mixout:function(){return{icon:Xk(Zk)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=fp,n.nodeCallback=Qk,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?q:r,a=n.callback,o=a===void 0?function(){}:a;return fp(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,d=r.maskId,g=r.extra;return new Promise(function(y,x){Promise.all([Iu(i,l),f.iconName?Iu(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var S=Kc(v,2),p=S[0],c=S[1];y([n,af({icons:{main:p,mask:c},prefix:l,iconName:i,transform:s,symbol:u,maskId:d,title:a,titleId:o,extra:g,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=_l(l);s.length>0&&(i.style=s);var u;return ef(o)&&(u=Ut("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Jk={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Ol({type:"layer"},function(){Gn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(ra(a)).join(" ")},children:o}]})}}}},e5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return Ol({type:"counter",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),Ak({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(ra(l))}})})}}}},t5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?St:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,g=r.styles,y=g===void 0?{}:g;return Ol({type:"text",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),ap({content:n,transform:O(O({},St),a),title:l,extra:{attributes:d,styles:y,classes:["".concat(A.cssPrefix,"-layers-text")].concat(ra(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(M0){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return A.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ap({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},n5=new RegExp('"',"ug"),dp=[1105920,1112319];function r5(e){var t=e.replace(n5,""),n=gk(t,0),r=n>=dp[0]&&n<=dp[1],i=t.length===2?t[0]===t[1]:!1;return{value:Nu(i?t[0]:t),isSecondary:r||i}}function pp(e,t){var n="".concat(Hw).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Vr(e.children),o=a.filter(function(b){return b.getAttribute(Tu)===t})[0],l=xn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(Xw),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),g=~["Sharp"].indexOf(s[2])?oe:X,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Bi[g][s[2].toLowerCase()]:Zw[g][u],x=r5(d),v=x.value,S=x.isSecondary,p=s[0].startsWith("FontAwesome"),c=nf(y,v),h=c;if(p){var w=Sk(v);w.iconName&&w.prefix&&(c=w.iconName,y=w.prefix)}if(c&&!S&&(!o||o.getAttribute(Xc)!==y||o.getAttribute(Zc)!==h)){e.setAttribute(n,h),o&&e.removeChild(o);var k=Gk(),C=k.extra;C.attributes[Tu]=t,Iu(c,y).then(function(b){var N=af(O(O({},k),{},{icons:{main:b,mask:rf()},prefix:y,iconName:h,extra:C,watchable:!0})),M=q.createElement("svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=N.map(function(L){return aa(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function i5(e){return Promise.all([pp(e,"::before"),pp(e,"::after")])}function a5(e){return e.parentNode!==document.head&&!~Gw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function mp(e){if(Vt)return new Promise(function(t,n){var r=Vr(e.querySelectorAll("*")).filter(a5).map(i5),i=of.begin("searchPseudoElements");a1(),Promise.all(r).then(function(){i(),zu(),t()}).catch(function(){i(),zu(),n()})})}var o5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=mp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?q:r;A.searchPseudoElements&&mp(i)}}},hp=!1,l5={mixout:function(){return{dom:{unwatch:function(){a1(),hp=!0}}}},hooks:function(){return{bootstrap:function(){up($u("mutationObserverCallbacks",{}))},noAuto:function(){Wk()},watch:function(n){var r=n.observeMutationsRoot;hp?zu():up($u("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},gp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},s5={mixout:function(){return{parse:{transform:function(n){return gp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=gp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},y={outer:l,inner:d,path:g};return{tag:"g",attributes:O({},y.outer),children:[{tag:"g",attributes:O({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),y.path)}]}]}}}},vs={x:0,y:0,width:"100%",height:"100%"};function vp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function u5(e){return e.tag==="g"?e.children:[e]}var c5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Nl(i.split(" ").map(function(o){return o.trim()})):rf();return a.prefix||(a.prefix=wn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,f=a.icon,d=o.width,g=o.icon,y=sk({transform:s,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:O(O({},vs),{},{fill:"white"})},v=f.children?{children:f.children.map(vp)}:{},S={tag:"g",attributes:O({},y.inner),children:[vp(O({tag:f.tag,attributes:O(O({},f.attributes),y.path)},v))]},p={tag:"g",attributes:O({},y.outer),children:[S]},c="mask-".concat(l||Hi()),h="clip-".concat(l||Hi()),w={tag:"mask",attributes:O(O({},vs),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,p]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:u5(g)},w]};return r.push(k,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(c,")")},vs)}),{children:r,attributes:i}}}},f5={provides:function(t){var n=!1;xn.matchMedia&&(n=xn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:O(O({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},d5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},p5=[fk,qk,Jk,e5,t5,o5,l5,s5,c5,f5,d5];Pk(p5,{mixoutsTo:qe});qe.noAuto;qe.config;qe.library;qe.dom;var Mu=qe.parse;qe.findIconDefinition;qe.toHtml;var m5=qe.icon;qe.layer;qe.text;qe.counter;var l1={exports:{}},h5="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",g5=h5,v5=g5;function s1(){}function u1(){}u1.resetWarningCache=s1;var y5=function(){function e(r,i,a,o,l,s){if(s!==v5){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u1,resetWarningCache:s1};return n.PropTypes=n,n};l1.exports=y5();var x5=l1.exports;const T=Ep(x5);function yp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function on(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yp(Object(n),!0).forEach(function(r){mr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wo(e){"@babel/helpers - typeof";return Wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wo(e)}function mr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function k5(e,t){if(e==null)return{};var n=w5(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Du(e){return b5(e)||S5(e)||C5(e)||E5()}function b5(e){if(Array.isArray(e))return Fu(e)}function S5(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function C5(e,t){if(e){if(typeof e=="string")return Fu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fu(e,t)}}function Fu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P5(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,g=e.fixedWidth,y=e.inverse,x=e.border,v=e.listItem,S=e.flip,p=e.size,c=e.rotation,h=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":g,"fa-inverse":y,"fa-border":x,"fa-li":v,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},mr(t,"fa-".concat(p),typeof p<"u"&&p!==null),mr(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),mr(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),mr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function j5(e){return e=e-0,e===e}function c1(e){return j5(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var _5=["style"];function T5(e){return e.charAt(0).toUpperCase()+e.slice(1)}function N5(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=c1(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[T5(i)]=a:t[i]=a,t},{})}function f1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return f1(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=N5(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[c1(u)]=f}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=k5(n,_5);return i.attrs.style=on(on({},i.attrs.style),o),e.apply(void 0,[t.tag,on(on({},i.attrs),l)].concat(Du(r)))}var d1=!1;try{d1=!0}catch{}function O5(){if(!d1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xp(e){if(e&&Wo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Mu.icon)return Mu.icon(e);if(e===null)return null;if(e&&Wo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ys(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?mr({},e,t):{}}var Fn=Te.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,l=e.titleId,s=e.maskId,u=xp(n),f=ys("classes",[].concat(Du(P5(e)),Du(a.split(" ")))),d=ys("transform",typeof e.transform=="string"?Mu.transform(e.transform):e.transform),g=ys("mask",xp(r)),y=m5(u,on(on(on(on({},f),d),g),{},{symbol:i,title:o,titleId:l,maskId:s}));if(!y)return O5("Could not find icon",u),null;var x=y.abstract,v={ref:t};return Object.keys(e).forEach(function(S){Fn.defaultProps.hasOwnProperty(S)||(v[S]=e[S])}),$5(x[0],v)});Fn.displayName="FontAwesomeIcon";Fn.propTypes={beat:T.bool,border:T.bool,beatFade:T.bool,bounce:T.bool,className:T.string,fade:T.bool,flash:T.bool,mask:T.oneOfType([T.object,T.array,T.string]),maskId:T.string,fixedWidth:T.bool,inverse:T.bool,flip:T.oneOf([!0,!1,"horizontal","vertical","both"]),icon:T.oneOfType([T.object,T.array,T.string]),listItem:T.bool,pull:T.oneOf(["right","left"]),pulse:T.bool,rotation:T.oneOf([0,90,180,270]),shake:T.bool,size:T.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:T.bool,spinPulse:T.bool,spinReverse:T.bool,symbol:T.oneOfType([T.bool,T.string]),title:T.string,titleId:T.string,transform:T.oneOfType([T.string,T.object]),swapOpacity:T.bool};Fn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var $5=f1.bind(null,Te.createElement),A5={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},R5={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},I5={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const L5=j.div`
  padding: 10px;
  margin-bottom: 10px;
  /* margin-left: auto;
  margin-right: auto; */
`,z5=j.p`
  color: var(--mainColor);
  font-weight: bold;
  margin-bottom: 10px;
`;j(ta)`
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
  
  &:hover,
  &:focus{
    
    transform: translateY(-2px);
  }
`;const M5=()=>m.jsxs(L5,{children:[m.jsx(z5,{children:"Слідкуйте за нами у соцмережах"}),m.jsx(Rt,{to:"https://www.youtube.com/@user-ck5dw5yi1l/videos",className:"youtube social",target:"_blank",children:m.jsx(Fn,{style:{color:"#eb3223",marginRight:"20px"},icon:I5,size:"2x"})}),m.jsx(Rt,{to:"https://www.facebook.com/kdmsh22",className:"facebook social",target:"_blank",children:m.jsx(Fn,{style:{color:"#4968ad",backgroundColor:"#fff",borderRadius:"50%",marginRight:"20px"},icon:R5,size:"2x"})}),m.jsx(Rt,{to:"https://www.instagram.com/kdmsh22/",className:"instagram social",target:"_blank",children:m.jsx(Fn,{style:{color:"#ff4d4d"},icon:A5,size:"2x"})})]}),D5=j.footer`
    position: fixed;
     ${""}
  color: #3b3937;
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
`,F5=j.div`
  color: #212121;
  font-size: 10px;
  padding: 25px 50px;
`,U5=()=>m.jsx(F5,{children:m.jsx("p",{children:"Copyright ©TarasPapka 2023"})}),B5=()=>m.jsx(D5,{children:m.jsxs(m.Fragment,{children:[m.jsx(M5,{}),m.jsx(U5,{})]})});j.li`
list-style: none;
`;const W5=j.ul`
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
`,Xt=j(ta)`
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
`,p1=({closeMobileMenu:e})=>m.jsxs(W5,{children:[m.jsx(Xt,{to:"/",onClick:e,children:"Головна"}),m.jsx(Xt,{to:"/about",onClick:e,children:"Про нас"}),m.jsx(Xt,{to:"management",onClick:e,children:"Дирекція"}),m.jsx(Xt,{to:"team/1",onClick:e,children:"Викладачі"}),m.jsx(Xt,{to:"reviews",onClick:e,children:"Умови вступу"}),m.jsx(Xt,{to:"/departments",onClick:e,children:"Відділи"}),m.jsx(Xt,{to:"/bands",onClick:e,children:"Колективи"}),m.jsx(Xt,{to:"/contacts",onClick:e,children:"Контакти"})]});p1.propTypes={closeMobileMenu:T.func};const V5="/KDMSH/assets/xCross-436de7cd.svg",H5="/KDMSH/assets/mobileMenu-9d967880.svg",Y5="/KDMSH/assets/logo-0e82c53b.svg",G5=j.div`
margin-right: 14px;
`,wp=j.img`
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
`,K5=j.div`
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
`,Q5=()=>{const[e,t]=E.useState(!1),n=()=>{t(!0),document.body.classList.add("no-scroll")},r=()=>{t(!1),document.body.classList.remove("no-scroll")};return m.jsxs(G5,{children:[e?m.jsx(wp,{onClick:r,src:V5,alt:"mobile menu close"}):m.jsx(wp,{onClick:n,src:H5,alt:"mobile menu"}),e?m.jsx(K5,{children:m.jsx(p1,{closeMobileMenu:r})}):null]})},X5=()=>{const[e,t]=E.useState(!1),n=Y5;return E.useEffect(()=>{const r=()=>{};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),E.useEffect(()=>{const r=()=>{window.innerWidth<778?t(!0):t(!1)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),m.jsxs(Tw,{children:[m.jsxs(Ow,{children:[m.jsx(Aw,{to:"/",end:!0,children:m.jsxs(Rw,{children:[m.jsx("img",{src:n}),m.jsx($w,{children:"КДМШ №22"})]})}),e?m.jsx(m.Fragment,{children:m.jsx(Q5,{})}):m.jsx(Iw,{children:m.jsxs(Nw,{children:[m.jsx("li",{children:m.jsx(Kt,{to:"/",end:!0,children:"Головна"})}),m.jsxs("li",{children:[m.jsx(Kt,{to:"/about",children:"Про нас "}),m.jsxs("ul",{className:"sub-menus",children:[m.jsx("li",{children:m.jsx(Kt,{to:"management",children:"Дирекція"})}),m.jsx("li",{children:m.jsx(Kt,{to:"team/1",children:"Викладачі"})}),m.jsx("li",{children:m.jsx(Kt,{to:"reviews",children:"Умови вступу"})})]})]}),m.jsx("li",{children:m.jsx(Kt,{to:"/departments",children:"Відділи"})}),m.jsx("li",{children:m.jsx(Kt,{to:"/bands",children:"Колективи"})}),m.jsx("li",{children:m.jsx(Kt,{to:"/contacts",children:"Контакти"})})]})})]}),m.jsx(dx,{}),m.jsx(B5,{})]})},Z5=D.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 550px;
  margin-left: auto;
  margin-right: auto;
`,q5=D.img`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
  width: 100%;
  height: 100%;
  display: ${e=>e.active?"block":"none"};
  object-fit:cover;
`,m1=D.div`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: white;
  cursor: pointer;
`,J5=D(m1)`
  left: 1rem;
`,e4=D(m1)`
  right: 0rem;
`,t4=D.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
`,n4=D.button`
  background-color: ${e=>e.active?"white":"grey"};
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`;var h1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},kp=Te.createContext&&Te.createContext(h1),gn=globalThis&&globalThis.__assign||function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gn.apply(this,arguments)},r4=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function g1(e){return e&&e.map(function(t,n){return Te.createElement(t.tag,gn({key:n},t.attr),g1(t.child))})}function sf(e){return function(t){return Te.createElement(i4,gn({attr:gn({},e.attr)},t),g1(e.child))}}function i4(e){var t=function(n){var r=e.attr,i=e.size,a=e.title,o=r4(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Te.createElement("svg",gn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:s,style:gn(gn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&Te.createElement("title",null,a),e.children)};return kp!==void 0?Te.createElement(kp.Consumer,null,function(n){return t(n)}):t(h1)}function a4(e){return sf({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"}}]})(e)}function o4(e){return sf({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}}]})(e)}const v1=({data:e})=>{const[t,n]=E.useState(0),r=()=>{n(t===e.length-1?0:t+1)},i=()=>{n(t===0?e.length-1:t-1)};return m.jsxs(Z5,{children:[m.jsx(J5,{onClick:i,children:m.jsx(a4,{style:{width:"1.5em",height:"1.5em",fill:"wheat"}})}),e.map((a,o)=>m.jsx(q5,{src:a.src,alt:a.alt,active:t===o},o)),m.jsx(e4,{onClick:r,children:m.jsx(o4,{style:{width:"1.5em",height:"1.5em",fill:"wheat"}})}),m.jsx(t4,{children:e.map((a,o)=>m.jsx(n4,{active:t===o,onClick:()=>n(o)},o))})]})};v1.propTypes={data:T.arrayOf(T.shape({src:T.string.isRequired,alt:T.string.isRequired})).isRequired};const l4=[{src:"https://i.ibb.co/sRV81GS/pic1.jpg",alt:"Image 1 for carousel"},{src:"https://i.ibb.co/PNQPh2b/pic2.jpg",alt:"Image 2 for carousel"},{src:"https://i.ibb.co/hfh7Nnx/pic3.jpg",alt:"Image 3 for carousel"},{src:"https://i.ibb.co/R7BQ92v/pic4.jpg",alt:"Image 4 for carousel"},{src:"https://i.ibb.co/5hc8PtF/pic5.jpg",alt:"Image 5 for carousel"}];j.img`
 max-width: 100%;
 height: auto;
`;const s4=j.section`
margin-left: auto;
margin-right: auto;
`,u4=j.img`
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`,c4=j.div`
margin-top: 20px;
svg {
	width: 100%; height: 100%;
}
svg text {

	animation: stroke 5s infinite alternate;
  animation-delay: 3s;
	stroke-width: 2;
	stroke: var(--accentColor);
  fill: #fff5ed;
  font-family: 'Marck Script';
	font-size: 5vw;
  text-align: center;
  @media screen and (min-width: 1200px) {
      font-size: 66px; 
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
`,y1=j.div`
margin: auto;

`,oa=j.section`
max-width: 1200px;
/* margin-left: 200px; */
margin-top:20px;
font-size: 18px;
line-height:150%;
`,zr=j.h3`
color: var(--accentColor);
font-weight: bold;
font-size: 36px;
text-align: center;
text-transform: uppercase;
margin-bottom: 50px;
`,Yi=j.div`
color: var(--mainColor);
display:flex;
justify-content: center;
flex-direction:column;
font-size: 16px;
line-height: 1.5;
margin-bottom: 20px;
`,f4=j.div`
margin-top: 40px;
`,d4=j.ul`
margin-bottom: 20px;
`,za=j.li`
list-style:square;
margin-left: 30px;
`,bp=j.p`
color: var(--accentColor);
font-size: 12px;
line-height: 1.1;
`,p4=()=>m.jsx(y1,{children:m.jsxs(s4,{children:[m.jsx(v1,{data:l4}),m.jsx(c4,{children:m.jsx("svg",{children:m.jsx("text",{x:"12%",y:"50%",dy:".15em",children:"Ласкаво просимо у світ музики!"})})})]})}),m4=()=>m.jsx(oa,{children:m.jsxs(Yi,{children:[m.jsx(zr,{children:"Про нас"}),"Для мешканців Святошинського району працює з 1971 року. Школа є державним позашкільним навчальним закладом освіти в галузі культури, здійснює естетичне виховання дітей, учнів, громадян, забезпечуючи принцип єдності і наступності мистецької освіти; проводить навчально-виховну, методичну, просвітницьку роботу."]})}),x1=j.div`
 display: flex;
  position: absolute;
  gap: 0.5em;
  flex-direction: column;
  background-color: var(--base);
  color: var(--mainColor);
  height: 30%;
   width: 100%;
  bottom: 0;
  border-radius: 10px;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  /* padding: 1rem; */
`,h4=j.svg`
  width: 48px;
  margin-left: auto;
  margin-right: auto;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,g4=j.div`
  height: 250px;
 max-width: 220px;
  flex-grow: 1;
  flex-basis: 190px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  box-shadow: 0 0 20px 8px #d0d0d0;
  overflow: hidden;

  &:hover ${x1} {
    transform: translateY(100%);
    opacity: 0;
  }
`,v4=j.img`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #0a3394;
  background: linear-gradient(to top, #0a3394, #4286f4);
`,y4=j.p`
font-size: 1rem;
  font-weight: 700;
  text-align: center;
`,Sp=j.p`
font-size: 0.8rem;
  line-height: 100%;
  text-align: center;
`,w1=[{url:"https://i.ibb.co/hfh7Nnx/pic3.jpg",name:"Соломія Гуль",title:"Викладач",experience:"2021",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичкові інструменти",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/KxJcy9Z/Yehor.jpg",name:"Єгор Куриленко",title:"Викладач",experience:"2019",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Духові інструменти",instrument:"Саксофон, Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/SKBXr0X/Tetiana.jpg",name:"Тетяна Чайка",title:"Викладач",experience:"1972",band:"Оркестр народної музики 'Барвисті Візерунки', Дует 'НоТа'",department:"Фортепіано",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/W5bMjKK/Serhiy.jpg",name:"Сергій Левчук",title:"Викладач",experience:"2010",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Духові інструменти",instrument:"Труба",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/YjbDdJ1/Lyubov.jpg",name:"Любов Герасимчук",title:"Директор",experience:"1972",band:"",department:"Фортепіано",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/MSTR3kf/svitlana.jpg",name:"Світлана Філоненко",title:"Заступник директора",experience:"1995",band:"",department:"Народні інструменти",instrument:"Бандура",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/J3KBkzZ/Tamara.jpg",name:"Тамара Теліна",title:"Заввідділом",experience:"2002",band:"Ансамбль флейтистів",department:"Духові інструменти",instrument:"Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/DG1ZYY4/Halyna.jpg",name:"Галина Головацька-Гуль",title:"Заввідділом",experience:"1999",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичкові інструменти",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/fGpdTBV/Gitar.jpg",name:"Лілія Герасимчук",title:"Викладач",experience:"1992",band:"Ансамбль гітаристів",department:"Народні інструменти",instrument:"Гітара",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/hfh7Nnx/pic3.jpg",name:"Соломія Гуль",title:"Викладач",experience:"2021",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичкові інструменти",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/KxJcy9Z/Yehor.jpg",name:"Єгор Куриленко",title:"Викладач",experience:"2019",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Духові інструменти",instrument:"Саксофон, Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/SKBXr0X/Tetiana.jpg",name:"Тетяна Чайка",title:"Викладач",experience:"1972",band:"Оркестр народної музики 'Барвисті Візерунки', Дует 'НоТа'",department:"Фортепіано",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/W5bMjKK/Serhiy.jpg",name:"Сергій Левчук",title:"Викладач",experience:"2010",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Духові інструменти",instrument:"Труба",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/YjbDdJ1/Lyubov.jpg",name:"Любов Герасимчук",title:"Директор",experience:"1972",band:"",department:"Фортепіано",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/MSTR3kf/svitlana.jpg",name:"Світлана Філоненко",title:"Заступник директора",experience:"1995",band:"",department:"Народні інструменти",instrument:"Бандура",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/J3KBkzZ/Tamara.jpg",name:"Тамара Теліна",title:"Заввідділом",experience:"2002",band:"Ансамбль флейтистів",department:"Духові інструменти",instrument:"Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/DG1ZYY4/Halyna.jpg",name:"Галина Головацька-Гуль",title:"Заввідділом",experience:"1999",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичкові інструменти",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/fGpdTBV/Gitar.jpg",name:"Лілія Герасимчук",title:"Викладач",experience:"1992",band:"Ансамбль гітаристів",department:"Народні інструменти",instrument:"Гітара",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"}],oo=j.div`
display: flex;
gap: 20px;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`,uf=j.li`
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
`,x4=j.div`
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
  ${uf}:hover & {
    transform: rotateX(0deg);
    /* transform: scale(1.05); */
  }
`,w4=j.p`
 margin: 5px 0 5px;
  font-size: 12px;
  color: var(--mainColor);
  line-height: 1.4;
`,k4=j.p`
  margin: 0;
  font-size: 14px;
  color: var(--mainColor);
  font-weight: 700;
`,b4=j.button`
  padding: 10px;
  border-radius: 8px;
  background: var(--accentColor);
  border: none;
  color: white;
  cursor: pointer;
`,S4=j.img`
  object-fit: contain;
  width: 100%;
  height: 100%;

`,k1=j.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${uf}:hover & {
    transform: scale(0);
  }
`,C4=()=>{const e=w1.filter(t=>t.section==="Management");return m.jsx(oo,{children:e.map((t,n)=>m.jsxs(g4,{children:[t.url?m.jsx(v4,{src:t.url,alt:`photo of ${t.name}`}):m.jsx(h4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),m.jsxs(x1,{children:[m.jsx(y4,{children:t.name}),m.jsx(Sp,{children:t.title}),m.jsx(Sp,{children:t.phone})]})]},n))})},E4=()=>m.jsxs(oa,{children:[m.jsx(zr,{children:"Керівний склад"}),m.jsx(Yi,{children:"В школі творчо і натхненно працює понад 50 висококваліфікованих викладачів, які мають значний професійний досвід,гарантують індивідуальний підхід до кожного учня. Вони всебічно працюють над розвитком музичної грамотності, техніки гри, виразності та інтерпретації для забезпечення найкращих результатів навчання. Щорічно в школі навчаються 410 учнів від 5 до 18 років."}),m.jsx(C4,{})]});D.div`
`;const P4=D.ul`
  z-index: 2;
  padding: 0 0 40px 0;

  @media screen and (min-width: 778px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;

  }

`,j4=D.div`
  cursor: pointer;
`,_4=D.button`
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
`,T4=D.p`
  // position: absolute;
  // z-index: 2;
`,N4=D.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  >li{
    list-style: none;
  }
`;D.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;const b1=({currentPage:e,totalPages:t,onChangePage:n,pageType:r})=>{const i=kl(),a=o=>{i(`/${r}/${o}`),n(o)};return m.jsx(N4,{children:[...Array(t).keys()].map(o=>m.jsx("li",{children:m.jsx(Rt,{to:`/${r}/${o+1}`,children:m.jsx(_4,{onClick:()=>a(o+1),active:`${e===o+1?"active":""}`,children:m.jsx(T4,{children:o+1})})})},o))})};b1.propTypes={currentPage:T.number,totalPages:T.number,onChangePage:T.func,pageType:T.string};function O4(e){return sf({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}const $4=D.div`
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
`,A4=D.div`
  background-color: #fff;
  width: 540px;
  max-height: auto;
  position: relative;
  padding: 40px;
  margin: 20px;
  overflow-y: auto;
  border-radius: 24px;
`,R4=D.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`,S1=({isOpen:e,closeModal:t,children:n})=>{const r=a=>{a.stopPropagation()},i=a=>{a.target===a.currentTarget&&t()};return m.jsx(m.Fragment,{children:e&&m.jsx($4,{onClick:i,children:m.jsxs(A4,{className:"ModalContent",onClick:r,children:[m.jsx(R4,{onClick:t,children:m.jsx(O4,{size:18})}),n]})})})};S1.propTypes={isOpen:T.bool.isRequired,closeModal:T.func.isRequired,children:T.node};const I4=D.div`
font-size: inherit;
`,C1=D.div`
width: 100%;
margin-bottom: 30px;
border-radius: 20px;
`,L4=D.img`
object-fit: cover;
width: 100%;
height: 500px;
border-radius: 20px;
`,z4=D.div`
text-align: center;

`,M4=D.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${C1}:hover & {
    transform: scale(0);
  }
`,D4=D.div`

`,F4=D.p`
font-weight: 600;
text-transform: uppercase;
font-size: 5vw;
margin-bottom: 15px;

@media screen and (min-width: 487px) {
      font-size: 36px; 
  }
`,U4=D.p`
text-transform: uppercase;
font-size: 4vw;
/* color: var(--accentColor); */
padding-bottom: 10px;
margin-bottom: 10px;
border-bottom: 1px solid var(--accentColor);

@media screen and (min-width: 487px) {
      font-size: 24px;
  }
`,B4=D.span`
margin-left: 10px;
color: var(--accentColor);

`,W4=D.p`

`,V4=D.p`
margin-bottom: 20px;
`,Cp=D.span`
font-weight: 600;
margin-right: 10px;
color:var(--accentColor);
`;D.button`

`;const H4=D.p`
/* color:var(--accentColor); */
`,$l=j.button`
padding: 15px 25px;
 border: unset;
 border-radius: 15px;
 color: white;
 z-index: 1;
 background-color: var(--accentColor);

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

`,E1=j.span`
 font-size: 15px;
 z-index: 3;
 position: relative;
 font-weight: 600;
`,P1=({name:e,title:t,img:n,description:r,experience:i,band:a,department:o})=>{const s=new Date().getFullYear()-i;return m.jsxs(I4,{children:[m.jsx(C1,{children:n?m.jsx(L4,{src:n,alt:`photo of ${e}`}):m.jsx(M4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})})}),m.jsxs(D4,{children:[m.jsx(F4,{children:e}),m.jsxs(U4,{children:[t,":",m.jsx(B4,{children:o})]}),m.jsx(W4,{children:r}),m.jsxs(H4,{children:[m.jsx(Cp,{children:"Стаж:"}),s,"р."]}),m.jsxs(V4,{children:[m.jsx(Cp,{children:"Колективи:"}),a]}),m.jsx(z4,{children:m.jsx(Rt,{to:"https://forms.gle/PVcbo8fZEWQrJm4G8",target:"_blank",children:m.jsx($l,{children:m.jsx(E1,{children:"Записатися"})})})})]})]})};P1.propTypes={id:T.number,name:T.string,title:T.string,phone:T.string,img:T.string,description:T.string,experience:T.string,band:T.string,department:T.string};const j1=({items:e})=>{const[t,n]=E.useState(!1),[r,i]=E.useState(null),a=l=>{i(l),n(!t)},o=l=>{oo.current&&!oo.current.contains(l.target)&&n(!1)};return E.useEffect(()=>{const l=s=>{s.key==="Escape"&&t&&n(!1)};return document.addEventListener("keydown",l),document.addEventListener("click",o),()=>{document.removeEventListener("keydown",l),document.removeEventListener("click",o)}},[t]),m.jsxs(oo,{children:[e.map((l,s)=>m.jsxs(uf,{children:[l.url?m.jsx(S4,{src:l.url,alt:`photo of ${l.name}`}):m.jsx(k1,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),m.jsxs(x4,{children:[m.jsx(k4,{children:l.name}),m.jsx(w4,{children:l.title}),m.jsx(b4,{onClick:()=>a(l),children:"Детальніше"})]})]},s)),t&&r&&m.jsx(S1,{isOpen:t,closeModal:()=>n(!1),children:m.jsx(P1,{name:r.name,title:r.title,description:r.description,phone:r.phone,img:r.url,experience:r.experience,band:r.band,department:r.department})})]})};j1.propTypes={items:T.arrayOf(T.object)};const _1=({items:e})=>{const[t,n]=E.useState(16),[r,i]=E.useState(1);E.useEffect(()=>{const o=()=>{window.innerWidth>778?n(16):n(2)};return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]);const a=o=>{i(o)};return m.jsxs(m.Fragment,{children:[m.jsx(P4,{children:m.jsx(j1,{items:e.slice((r-1)*t,r*t)})}),m.jsx(j4,{children:m.jsx(b1,{currentPage:r,totalPages:Math.ceil(e.length/t),onChangePage:a,pageType:"team"})})]})};_1.propTypes={items:T.array};const Y4=()=>{const[e,t]=E.useState([]);return E.useEffect(()=>{t(w1)},[]),m.jsxs(oa,{children:[m.jsx(zr,{children:"Викладацький склад"}),m.jsx(_1,{items:e})]})},G4=()=>m.jsxs(oa,{children:[m.jsxs("div",{children:[m.jsx(zr,{children:"Умови вступу"}),m.jsx(Yi,{children:"До школи приймаються діти віком від 5 років у залежності від обраного музичного інструменту. Навчання у школі проводиться на таких відділах: - фортепіанному; - струнно-смичковому: скрипка,  віолончель; - народних інструментів: баян, акордеон, гітара; - духових та ударних інструментів: флейта, саксофон, труба, ударні інструменти; - хоровому. Вступ до школи  відбувається на конкурсній основі на підставі вступних  прослуховувань перевірки музичних здібностей, що включає в себе:  виконання (спів) пісні за власним вибором, повторення за вчителем нескладного ритму та мелодії."}),m.jsx(Yi,{children:"Заповнити форму рєстрації для вступу можна за посиланням:"}),m.jsx(Rt,{to:"https://forms.gle/PVcbo8fZEWQrJm4G8",target:"_blank",children:m.jsx($l,{children:m.jsx(E1,{children:"Форма рєстрації"})})})]}),m.jsxs(f4,{children:[m.jsx(zr,{children:"Перелік документів, які необхідні для вступу до школи:"}),m.jsxs(d4,{children:[m.jsx(za,{children:"Заява"}),m.jsx(za,{children:"Копія свідоцтва про народження"}),m.jsx(za,{children:"Медична довідка."}),m.jsx(za,{children:"Копія ідентифікаційного коду (за наявності)"})]}),m.jsx(bp,{children:"* Заява встановленого зразка заповнюється на місці."}),m.jsx(bp,{children:"Для здобувачів, що навчаються на пільговій основі, передбачен інший пакет документів."})]})]}),T1=[{id:"a-1",name:"Фортепіано",photo:"https://i.ibb.co/QYzYNWg/pexels-cottonbro-studio-5650529.jpg",about:"Гра на фортепіано - це захоплива подорож для дітей у світ музики та можливість виявити свій музичний потенціал та розвинути творчі здібності. Цей чудовий інструмент надає можливість дітям виразити свої почуття та емоції через музику, розвиваючи в них музичний слух і вміння читати ноти. Гра на фортепіано також сприяє поліпшенню координації рук, розвитку концентрації та терпіння. Безсумнівно, цей інструмент відкриває двері до неймовірного світу музики, який зачаровує та надихає юних музикантів."},{id:"a-2",name:"Струнно-смичкові інструменти",photo:"https://i.ibb.co/jrbbY7z/pexels-pixabay-210854.jpg",about:"Гра на струнно-смичкових інструментах - це захоплюючий світ, який дає дітям відкрити в собі музичну магію. Вони зможуть відчути власні обрані ноти, створюючи чарівні мелодії, що сповнені почуттями та виразністю. Гра на скрипці, віолончелі або альту розвиває в дітях вміння слухати, концентруватися і сприяє виробленню гармонійного почуття ритму. Крім того, ці інструменти навчають відповідальності, адже для досягнення високих результатів потрібно вкладати час та наполегливість. Грати на струнно-смичкових інструментах - це завжди цікаво та вдячно, адже вони дарують можливість створювати чарівну музику."},{id:"a-3",name:"Духові інструменти",photo:"https://i.ibb.co/RNtNjTy/pexels-teddy-yang-2254140.jpg",about:"Гра на духових інструментах - це неймовірна пригода для дітей, яка запрошує у музичний світ. Вони зможуть відчути себе справжніми музикантами, навчившись грати на трубі, саксофоні, флейті та інших інструментах. Ця діяльність сприяє розвитку дихальної системи та допомагає покращити контроль над диханням. Гра на духових інструментах також вчить дітей спілкуватися мовою музики та виражати свої почуття через звуки. Вона робить музику доступною і захоплюючою, а також допомагає формувати вміння слухати та сприймати мелодію. Це чудовий спосіб для дітей виразити свою індивідуальність та розкрити свій творчий потенціал."},{id:"a-4",name:"Ударні інструменти",photo:"https://i.ibb.co/XJKYNGg/pexels-josh-sorenson-995301.jpg",about:"Гра на ударних інструментах - це особливий спосіб виплеснути свою енергію. Діти зможуть віднайти у собі справжнього ударника, навчившись грати на барабанах, ксилофоні, дзвіночках і багатьох інших інструментах. Гра на ударних інструментах розвиває координацію рук та розвиток моторики, а також допомагає дітям вчитися працювати в команді та слухати одне одного у музичному виконанні. Це чудовий спосіб для дітей виразити свої почуття через ритм і створити музику власноруч. Ударні інструменти роблять музику неймовірно захопливою і доступною для маленьких музикантів."},{id:"a-5",name:"Народні інструменти",photo:"https://i.ibb.co/3FLhwtw/pexels-pixabay-33597.jpg",about:"Народні інструменти, такі як гітара, бандура, баян та інші, відкривають дітям чарівний світ музики, насичений культурними традиціями. Граючи на цих інструментах, діти пізнають багатство своєї спадщини і вчаться виконувати мелодії, які були передані з покоління в покоління. Народні інструменти допомагають зберігати і популяризувати унікальні музичні традиції та вчать дітей цінувати різноманіття культур. Завдяки навчанню на народних інструментах, діти можуть долучитися до світу української, а також інших національних музичних мистецтв та стати частиною неперевершеної музичної спадщини."},{id:"a-6",name:"Вокал",photo:"https://i.ibb.co/7n0qgsY/pexels-dmitry-demidov-3783471.jpg",about:"Вокальне мистецтво - це дивовижний світ виразності та музичної гармонії. У нашій музичній школі, діти отримають можливість розкрити свій вокальний талант під керівництвом досвідчених викладачів. Ми пропонуємо індивідуальні та групові заняття вокалом, де діти вивчають основи вокальної техніки, розвивають свій голос, та вчаться виконувати улюблені пісні. Вокальне навчання розширює музичний горизонт дітей і дарує їм можливість виразити свої почуття та емоції через музику."},{id:"a-7",name:"Музично - теоретичний відділ",photo:"https://i.ibb.co/Qrsrzc2/bg.jpg",about:"Музично-теоретичний відділ нашої школи є важливою складовою частиною музичної освіти для дітей. Тут діти здобувають теоретичні знання, які є основою для розуміння музики. Вони вивчають музичну нотацію, ритміку, гармонію, історію музики та багато іншого. Навички, отримані в музично-теоретичному відділі, допомагають дітям краще розуміти та виконувати музику на своїх інструментах або вокально. Відкривши для себе музичну теорію, діти розкривають перед собою безмежні можливості у музичному світі."}],K4=()=>T1,Q4=e=>T1.find(t=>t.id===e),N1=[{id:"q-1",name:"Оркестр народної музики 'Барвисті Візерунки'",photo:"https://i.ibb.co/3CJPfYt/orhestra.jpg",about:" Колектив оркестру народної музики «Барвисті візерунки» створений у 2008 році, має численні нагороди на багатьох міжнародних та всеукраїнських конкурсах-фестивалях як в Україні, так і за кордоном (Чехії, Угорщині, Італії та ін.). Репертуар оркестру складається з обробок українських пісень і танців народів світу."},{id:"q-2",name:"Фортепіанний дует 'Но-Та'",photo:"https://i.ibb.co/Khng8mg/Nota.jpg",about:"Фортепіанний дует «НоТа» у складі викладачів - Нонни Козлової і Тетяни Чайки, лауреати Міжнародних премій «Дружба» та ім. С.Гулака-Артемовського, КДМШ №22 "},{id:"q-3",name:"Дитячий хор",photo:"https://i.ibb.co/mztr6F7/IMG-20230120-160646-225.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-4",name:"Ансамбль скрипалів",photo:"https://i.ibb.co/FDxTGJX/image.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-5",name:"Ансамбль флейтистів",photo:"https://i.ibb.co/5WKxV46/IMG-20230508-154004-124.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-6",name:"Вокальний дует",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-7",name:"Фольклорний ансамбль",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-8",name:"Ансамбль гітаристів",photo:"https://i.ibb.co/PNQPh2b/pic2.jpg",about:"lorem ipsum dolor sit amet, consectetur"}],X4=()=>N1,Z4=e=>N1.find(t=>t.id===e),O1=j.div`
     width:100%;
    margin-bottom: 100px;
    
`,$1=j.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,A1=j.li`
 text-align: center;
 backdrop-filter: blur(10px);
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
 cursor:pointer;
 border-radius: 15px;
    width: 400px;
    &:hover,
        &:focus {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

    @media screen and (min-width: 558px) {
            width: 230px;
        }

  > a {
    text-decoration: none;
  }
  > a img {
    margin-top: 10px;
    border: 1px solid var(--border-header);
    width: 90%;
    border-radius: 15px;
      margin-left: auto;
  margin-right: auto;
  }
`,R1=j.img`
width: 100%;
height: 120px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`,I1=j(ta)`
    display: block;
    max-width: 250px;
    height: 200px;
    text-decoration: none;
    color: currentColor;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width:768px) and (max-width:1199px) {
        height: 100%;
    }
`,L1=j.p`
    font-weight: 700;
    font-size: 13px;
    line-height: 1.4;
    letter-spacing: 0.06em;
    text-align: center;
    margin-top: 5%;
    margin-bottom: auto;
    height: 55px;
`,z1=({departments:e})=>m.jsx(O1,{children:m.jsx($1,{children:e.map(t=>m.jsx(A1,{children:m.jsxs(I1,{to:`${t.id}`,children:[m.jsx(R1,{src:t.photo,alt:t.name}),m.jsx(L1,{children:t.name})]})},t.id))})});z1.propTypes={departments:T.arrayOf(T.shape({id:T.string.isRequired,name:T.string.isRequired})).isRequired};const q4=()=>{const e=K4();return m.jsx(y1,{children:m.jsx(z1,{departments:e})})},M1=j.p`

  color: var(--accentColor);
  font-size: 1.8em;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`,D1=j.p`
  font-size: 1.4em;
  font-weight: 400;
  line-height: 1.5em;
  color: var(--mainColor);

`,F1=j.div`

`,J4=j.div`
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
`,U1=j.div`
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
`,B1=j.div`
   margin-top: -4px;
  margin-right: -4px;
  color: var(--mainColor);
  font-family: courier, sans;
`,e3=()=>{const{id:e}=c0(),t=Q4(e),n=kl(),r=()=>{n(-1)};return m.jsxs(F1,{children:[m.jsxs(J4,{children:[m.jsx(u4,{src:t.photo,alt:t.name}),m.jsx(M1,{children:t.name}),m.jsx(D1,{children:t.about}),m.jsx(U1,{children:m.jsx(B1,{})})]}),m.jsx($l,{onClick:r,children:"Повернутися назад"})]})},W1=({bands:e})=>m.jsx(O1,{children:m.jsx($1,{children:e.map(t=>m.jsx(A1,{children:m.jsxs(I1,{to:`${t.id}`,children:[t.photo?m.jsx(R1,{src:t.photo,alt:`photo of ${t.name}`}):m.jsx(k1,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),m.jsx(L1,{children:t.name})]})},t.id))})});W1.propTypes={bands:T.arrayOf(T.shape({id:T.string.isRequired,name:T.string.isRequired})).isRequired};const t3=()=>{const e=X4();return m.jsx(W1,{bands:e})},n3=j.div`
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
`,r3=j.img`
width: 100%;
height: 400px;
/* object-fit: cover; */
object-fit: contain;
border-radius: 15px;
 /* box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px; */
`,i3=()=>{const{id:e}=c0(),t=Z4(e),n=kl(),r=()=>{n(-1)};return m.jsxs(F1,{children:[m.jsxs(n3,{children:[m.jsx(r3,{src:t.photo,alt:t.name}),m.jsx(M1,{children:t.name}),m.jsx(D1,{children:t.about}),m.jsx(U1,{children:m.jsx(B1,{})})]}),m.jsx($l,{onClick:r,children:"Повернутися назад"})]})},a3=j.div`
margin: auto;

`,o3=j.h2`
font-family: 'Montserrat', sans-serif;
font-size: 24px;
font-weight: 600;
text-align: center;
color: var(--accentColor);
@media screen and (min-width: 558px) {
    font-size: 36px;
  }
`,l3=j.div`
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
`,s3=j.img`
width: 300px;
height: auto;
transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.35s ease-out;
margin-bottom: 30px;
box-shadow: 0px 0px 5px 0px rgba(255, 77, 77, 1);
@media screen and (min-width: 558px) {
    width: 400px;
  }
  @media screen and (min-width: 1100px) {
    width: 700px;
  }
  &:hover{
  transform: scale(1.1);
}
`,u3=j.address`
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
`,Ma=j.span`
font-weight: 600;
margin-right: 20px;

color: var(--accentColor);
`,c3="/KDMSH/assets/map-643c9983.png",f3=()=>m.jsxs(a3,{children:[m.jsx(o3,{children:"Контактна інформація"}),m.jsxs(l3,{children:[m.jsx(m.Fragment,{children:m.jsx(s3,{src:c3,alt:"map",width:"500px",height:"500px"})}),m.jsx(u3,{children:m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx(Ma,{children:"Адреса:"})," вулиця Зодчих, 30а, ",m.jsx("br",{}),"Київ, 03194"]}),m.jsxs("li",{children:[m.jsx(Ma,{children:"Телефон:"}),m.jsx(Rt,{to:"tel:+380934139512",style:{textDecoration:"none",color:"#212121"},children:"(093) 413-95-12"})]}),m.jsxs("li",{children:[m.jsx(Ma,{children:"Email:"}),m.jsx(Rt,{to:"mailto:dmsh22@ukr.net",target:"_blank",style:{textDecoration:"none",color:"#212121"},children:"dmsh22@ukr.net"})]}),m.jsxs("li",{children:[m.jsx(Ma,{children:"Розклад роботи:"})," ",m.jsx("br",{})," пн-пт: 10.00 - 20.00 ",m.jsx("br",{})," cб: 10.00 - 16.00 ",m.jsx("br",{})," нд: вихідний"]})]})})]})]}),d3=()=>m.jsx(oa,{children:m.jsxs(Yi,{children:[m.jsx(zr,{children:"Про нас"}),"Для мешканців Святошинського району працює з 1971 року. Школа є державним позашкільним навчальним закладом освіти в галузі культури, здійснює естетичне виховання дітей, учнів, громадян, забезпечуючи принцип єдності і наступності мистецької освіти; проводить навчально-виховну, методичну, просвітницьку роботу."]})}),p3=()=>m.jsx(E.Suspense,{fallback:m.jsx(E2,{}),children:m.jsx(mx,{children:m.jsxs(We,{path:"/",element:m.jsx(X5,{}),children:[m.jsx(We,{index:!0,element:m.jsx(p4,{})}),m.jsx(We,{path:"about",element:m.jsx(m4,{})}),m.jsx(We,{path:"school",element:m.jsx(d3,{})}),m.jsx(We,{path:"management",element:m.jsx(E4,{})}),m.jsx(We,{path:"team/:currentPage",element:m.jsx(Y4,{})}),m.jsx(We,{path:"reviews",element:m.jsx(G4,{})}),m.jsx(We,{path:"departments",element:m.jsx(q4,{})}),m.jsx(We,{path:"departments/:id",element:m.jsx(e3,{})}),m.jsx(We,{path:"bands",element:m.jsx(t3,{})}),m.jsx(We,{path:"bands/:id",element:m.jsx(i3,{})}),m.jsx(We,{path:"contacts",element:m.jsx(f3,{})})]})})});function m3(){return m.jsx(m.Fragment,{children:m.jsx(p3,{})})}ws.createRoot(document.getElementById("root")).render(m.jsx(kx,{basename:"/KDMSH",children:m.jsx(m3,{})}));
