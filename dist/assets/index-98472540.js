function D1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function _p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jp={exports:{}},Wo={},Op={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),F1=Symbol.for("react.portal"),U1=Symbol.for("react.fragment"),B1=Symbol.for("react.strict_mode"),W1=Symbol.for("react.profiler"),H1=Symbol.for("react.provider"),V1=Symbol.for("react.context"),Y1=Symbol.for("react.forward_ref"),Q1=Symbol.for("react.suspense"),G1=Symbol.for("react.memo"),K1=Symbol.for("react.lazy"),ff=Symbol.iterator;function X1(e){return e===null||typeof e!="object"?null:(e=ff&&e[ff]||e["@@iterator"],typeof e=="function"?e:null)}var Np={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tp=Object.assign,$p={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=$p,this.updater=n||Np}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ap(){}Ap.prototype=Ir.prototype;function Mu(e,t,n){this.props=e,this.context=t,this.refs=$p,this.updater=n||Np}var Du=Mu.prototype=new Ap;Du.constructor=Mu;Tp(Du,Ir.prototype);Du.isPureReactComponent=!0;var df=Array.isArray,Rp=Object.prototype.hasOwnProperty,Fu={current:null},Ip={key:!0,ref:!0,__self:!0,__source:!0};function Lp(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Rp.call(t,r)&&!Ip.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gi,type:e,key:a,ref:o,props:i,_owner:Fu.current}}function Z1(e,t){return{$$typeof:Gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Uu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gi}function q1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pf=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?q1(""+e.key):t.toString(36)}function Da(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gi:case F1:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+$l(o,0):r,df(i)?(n="",e!=null&&(n=e.replace(pf,"$&/")+"/"),Da(i,t,n,"",function(u){return u})):i!=null&&(Uu(i)&&(i=Z1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",df(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+$l(a,l);o+=Da(a,t,n,s,i)}else if(s=X1(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+$l(a,l++),o+=Da(a,t,n,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(e,t,n){if(e==null)return e;var r=[],i=0;return Da(e,r,"","",function(a){return t.call(n,a,i++)}),r}function J1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},Fa={transition:null},eg={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:Fu};F.Children={map:sa,forEach:function(e,t,n){sa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sa(e,function(){t++}),t},toArray:function(e){return sa(e,function(t){return t})||[]},only:function(e){if(!Uu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Ir;F.Fragment=U1;F.Profiler=W1;F.PureComponent=Mu;F.StrictMode=B1;F.Suspense=Q1;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eg;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tp({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Fu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Rp.call(t,s)&&!Ip.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Gi,type:e.type,key:i,ref:a,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:V1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:H1,_context:e},e.Consumer=e};F.createElement=Lp;F.createFactory=function(e){var t=Lp.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Y1,render:e}};F.isValidElement=Uu;F.lazy=function(e){return{$$typeof:K1,_payload:{_status:-1,_result:e},_init:J1}};F.memo=function(e,t){return{$$typeof:G1,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Fa.transition;Fa.transition={};try{e()}finally{Fa.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return Te.current.useCallback(e,t)};F.useContext=function(e){return Te.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};F.useEffect=function(e,t){return Te.current.useEffect(e,t)};F.useId=function(){return Te.current.useId()};F.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Te.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};F.useRef=function(e){return Te.current.useRef(e)};F.useState=function(e){return Te.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Te.current.useTransition()};F.version="18.2.0";Op.exports=F;var E=Op.exports;const Oe=_p(E),gs=D1({__proto__:null,default:Oe},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg=E,ng=Symbol.for("react.element"),rg=Symbol.for("react.fragment"),ig=Object.prototype.hasOwnProperty,ag=tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,og={key:!0,ref:!0,__self:!0,__source:!0};function zp(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ig.call(t,r)&&!og.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ng,type:e,key:a,ref:o,props:i,_owner:ag.current}}Wo.Fragment=rg;Wo.jsx=zp;Wo.jsxs=zp;jp.exports=Wo;var m=jp.exports,vs={},Mp={exports:{}},Ke={},Dp={exports:{}},Fp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,R){var I=_.length;_.push(R);e:for(;0<I;){var J=I-1>>>1,ie=_[J];if(0<i(ie,R))_[J]=R,_[I]=ie,I=J;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],I=_.pop();if(I!==R){_[0]=I;e:for(var J=0,ie=_.length,_t=ie>>>1;J<_t;){var Ue=2*(J+1)-1,Vt=_[Ue],Be=Ue+1,et=_[Be];if(0>i(Vt,I))Be<ie&&0>i(et,Vt)?(_[J]=et,_[Be]=I,J=Be):(_[J]=Vt,_[Ue]=I,J=Ue);else if(Be<ie&&0>i(et,I))_[J]=et,_[Be]=I,J=Be;else break e}}return R}function i(_,R){var I=_.sortIndex-R.sortIndex;return I!==0?I:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,d=null,g=3,y=!1,x=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=_)r(u),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(u)}}function w(_){if(v=!1,h(_),!x)if(n(s)!==null)x=!0,En(k);else{var R=n(u);R!==null&&Je(w,R.startTime-_)}}function k(_,R){x=!1,v&&(v=!1,p($),$=-1),y=!0;var I=g;try{for(h(R),d=n(s);d!==null&&(!(d.expirationTime>R)||_&&!Fe());){var J=d.callback;if(typeof J=="function"){d.callback=null,g=d.priorityLevel;var ie=J(d.expirationTime<=R);R=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(s)&&r(s),h(R)}else r(s);d=n(s)}if(d!==null)var _t=!0;else{var Ue=n(u);Ue!==null&&Je(w,Ue.startTime-R),_t=!1}return _t}finally{d=null,g=I,y=!1}}var C=!1,S=null,$=-1,M=5,L=-1;function Fe(){return!(e.unstable_now()-L<M)}function bn(){if(S!==null){var _=e.unstable_now();L=_;var R=!0;try{R=S(!0,_)}finally{R?Cn():(C=!1,S=null)}}else C=!1}var Cn;if(typeof c=="function")Cn=function(){c(bn)};else if(typeof MessageChannel<"u"){var oa=new MessageChannel,Nl=oa.port2;oa.port1.onmessage=bn,Cn=function(){Nl.postMessage(null)}}else Cn=function(){b(bn,0)};function En(_){S=_,C||(C=!0,Cn())}function Je(_,R){$=b(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,En(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var I=g;g=R;try{return _()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=g;g=_;try{return R()}finally{g=I}},e.unstable_scheduleCallback=function(_,R,I){var J=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?J+I:J):I=J,_){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=I+ie,_={id:f++,callback:R,priorityLevel:_,startTime:I,expirationTime:ie,sortIndex:-1},I>J?(_.sortIndex=I,t(u,_),n(s)===null&&_===n(u)&&(v?(p($),$=-1):v=!0,Je(w,I-J))):(_.sortIndex=ie,t(s,_),x||y||(x=!0,En(k))),_},e.unstable_shouldYield=Fe,e.unstable_wrapCallback=function(_){var R=g;return function(){var I=g;g=R;try{return _.apply(this,arguments)}finally{g=I}}}})(Fp);Dp.exports=Fp;var lg=Dp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up=E,Ge=lg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bp=new Set,yi={};function Yn(e,t){kr(e,t),kr(e+"Capture",t)}function kr(e,t){for(yi[e]=t,e=0;e<t.length;e++)Bp.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ys=Object.prototype.hasOwnProperty,sg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mf={},hf={};function ug(e){return ys.call(hf,e)?!0:ys.call(mf,e)?!1:sg.test(e)?hf[e]=!0:(mf[e]=!0,!1)}function cg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fg(e,t,n,r){if(t===null||typeof t>"u"||cg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bu=/[\-:]([a-z])/g;function Wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bu,Wu);Se[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bu,Wu);Se[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bu,Wu);Se[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hu(e,t,n,r){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fg(t,n,i,r)&&(n=null),r||i===null?ug(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),xs=Symbol.for("react.profiler"),Wp=Symbol.for("react.provider"),Hp=Symbol.for("react.context"),Yu=Symbol.for("react.forward_ref"),ws=Symbol.for("react.suspense"),ks=Symbol.for("react.suspense_list"),Qu=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Vp=Symbol.for("react.offscreen"),gf=Symbol.iterator;function Wr(e){return e===null||typeof e!="object"?null:(e=gf&&e[gf]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Al;function ei(e){if(Al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Al=t&&t[1]||""}return`
`+Al+e}var Rl=!1;function Il(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ei(e):""}function dg(e){switch(e.tag){case 5:return ei(e.type);case 16:return ei("Lazy");case 13:return ei("Suspense");case 19:return ei("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function Ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Zn:return"Portal";case xs:return"Profiler";case Vu:return"StrictMode";case ws:return"Suspense";case ks:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hp:return(e.displayName||"Context")+".Consumer";case Wp:return(e._context.displayName||"Context")+".Provider";case Yu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qu:return t=e.displayName||null,t!==null?t:Ss(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return Ss(e(t))}catch{}}return null}function pg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ss(t);case 8:return t===Vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mg(e){var t=Yp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ca(e){e._valueTracker||(e._valueTracker=mg(e))}function Qp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bs(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gp(e,t){t=t.checked,t!=null&&Hu(e,"checked",t,!1)}function Cs(e,t){Gp(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Es(e,t.type,n):t.hasOwnProperty("defaultValue")&&Es(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Es(e,t,n){(t!=="number"||lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ti=Array.isArray;function pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ps(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(ti(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function Kp(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _s(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fa,Zp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hg=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(e){hg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oi[t]=oi[e]})});function qp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oi.hasOwnProperty(e)&&oi[e]?(""+t).trim():t+"px"}function Jp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gg=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function js(e,t){if(t){if(gg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Os(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ns=null;function Gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ts=null,mr=null,hr=null;function kf(e){if(e=Zi(e)){if(typeof Ts!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Go(t),Ts(e.stateNode,e.type,t))}}function em(e){mr?hr?hr.push(e):hr=[e]:mr=e}function tm(){if(mr){var e=mr,t=hr;if(hr=mr=null,kf(e),t)for(e=0;e<t.length;e++)kf(t[e])}}function nm(e,t){return e(t)}function rm(){}var Ll=!1;function im(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return nm(e,t,n)}finally{Ll=!1,(mr!==null||hr!==null)&&(rm(),tm())}}function wi(e,t){var n=e.stateNode;if(n===null)return null;var r=Go(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var $s=!1;if(It)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{$s=!1}function vg(e,t,n,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var li=!1,so=null,uo=!1,As=null,yg={onError:function(e){li=!0,so=e}};function xg(e,t,n,r,i,a,o,l,s){li=!1,so=null,vg.apply(yg,arguments)}function wg(e,t,n,r,i,a,o,l,s){if(xg.apply(this,arguments),li){if(li){var u=so;li=!1,so=null}else throw Error(P(198));uo||(uo=!0,As=u)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function am(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sf(e){if(Qn(e)!==e)throw Error(P(188))}function kg(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Sf(i),e;if(a===r)return Sf(i),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function om(e){return e=kg(e),e!==null?lm(e):null}function lm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lm(e);if(t!==null)return t;e=e.sibling}return null}var sm=Ge.unstable_scheduleCallback,bf=Ge.unstable_cancelCallback,Sg=Ge.unstable_shouldYield,bg=Ge.unstable_requestPaint,le=Ge.unstable_now,Cg=Ge.unstable_getCurrentPriorityLevel,Ku=Ge.unstable_ImmediatePriority,um=Ge.unstable_UserBlockingPriority,co=Ge.unstable_NormalPriority,Eg=Ge.unstable_LowPriority,cm=Ge.unstable_IdlePriority,Ho=null,Ct=null;function Pg(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Ho,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Og,_g=Math.log,jg=Math.LN2;function Og(e){return e>>>=0,e===0?32:31-(_g(e)/jg|0)|0}var da=64,pa=4194304;function ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ni(l):(a&=o,a!==0&&(r=ni(a)))}else o=n&~i,o!==0?r=ni(o):a!==0&&(r=ni(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ng(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-pt(a),l=1<<o,s=i[o];s===-1?(!(l&n)||l&r)&&(i[o]=Ng(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Rs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fm(){var e=da;return da<<=1,!(da&4194240)&&(da=64),e}function zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ki(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function $g(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Xu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function dm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pm,Zu,mm,hm,gm,Is=!1,ma=[],an=null,on=null,ln=null,ki=new Map,Si=new Map,qt=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Vr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Zi(t),t!==null&&Zu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rg(e,t,n,r,i){switch(t){case"focusin":return an=Vr(an,e,t,n,r,i),!0;case"dragenter":return on=Vr(on,e,t,n,r,i),!0;case"mouseover":return ln=Vr(ln,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ki.set(a,Vr(ki.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Si.set(a,Vr(Si.get(a)||null,e,t,n,r,i)),!0}return!1}function vm(e){var t=jn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=am(n),t!==null){e.blockedOn=t,gm(e.priority,function(){mm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ua(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ls(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ns=r,n.target.dispatchEvent(r),Ns=null}else return t=Zi(n),t!==null&&Zu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ef(e,t,n){Ua(e)&&n.delete(t)}function Ig(){Is=!1,an!==null&&Ua(an)&&(an=null),on!==null&&Ua(on)&&(on=null),ln!==null&&Ua(ln)&&(ln=null),ki.forEach(Ef),Si.forEach(Ef)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Is||(Is=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Ig)))}function bi(e){function t(i){return Yr(i,e)}if(0<ma.length){Yr(ma[0],e);for(var n=1;n<ma.length;n++){var r=ma[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Yr(an,e),on!==null&&Yr(on,e),ln!==null&&Yr(ln,e),ki.forEach(t),Si.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)vm(n),n.blockedOn===null&&qt.shift()}var gr=Bt.ReactCurrentBatchConfig,po=!0;function Lg(e,t,n,r){var i=V,a=gr.transition;gr.transition=null;try{V=1,qu(e,t,n,r)}finally{V=i,gr.transition=a}}function zg(e,t,n,r){var i=V,a=gr.transition;gr.transition=null;try{V=4,qu(e,t,n,r)}finally{V=i,gr.transition=a}}function qu(e,t,n,r){if(po){var i=Ls(e,t,n,r);if(i===null)Ql(e,t,r,mo,n),Cf(e,r);else if(Rg(i,e,t,n,r))r.stopPropagation();else if(Cf(e,r),t&4&&-1<Ag.indexOf(e)){for(;i!==null;){var a=Zi(i);if(a!==null&&pm(a),a=Ls(e,t,n,r),a===null&&Ql(e,t,r,mo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var mo=null;function Ls(e,t,n,r){if(mo=null,e=Gu(r),e=jn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=am(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mo=e,null}function ym(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cg()){case Ku:return 1;case um:return 4;case co:case Eg:return 16;case cm:return 536870912;default:return 16}default:return 16}}var en=null,Ju=null,Ba=null;function xm(){if(Ba)return Ba;var e,t=Ju,n=t.length,r,i="value"in en?en.value:en.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ba=i.slice(e,1<r?1-r:void 0)}function Wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ha(){return!0}function Pf(){return!1}function Xe(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ha:Pf,this.isPropagationStopped=Pf,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=Xe(Lr),Xi=re({},Lr,{view:0,detail:0}),Mg=Xe(Xi),Ml,Dl,Qr,Vo=re({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(Ml=e.screenX-Qr.screenX,Dl=e.screenY-Qr.screenY):Dl=Ml=0,Qr=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),_f=Xe(Vo),Dg=re({},Vo,{dataTransfer:0}),Fg=Xe(Dg),Ug=re({},Xi,{relatedTarget:0}),Fl=Xe(Ug),Bg=re({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wg=Xe(Bg),Hg=re({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vg=Xe(Hg),Yg=re({},Lr,{data:0}),jf=Xe(Yg),Qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kg[e])?!!t[e]:!1}function tc(){return Xg}var Zg=re({},Xi,{key:function(e){if(e.key){var t=Qg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(e){return e.type==="keypress"?Wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qg=Xe(Zg),Jg=re({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=Xe(Jg),ev=re({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),tv=Xe(ev),nv=re({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=Xe(nv),iv=re({},Vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),av=Xe(iv),ov=[9,13,27,32],nc=It&&"CompositionEvent"in window,si=null;It&&"documentMode"in document&&(si=document.documentMode);var lv=It&&"TextEvent"in window&&!si,wm=It&&(!nc||si&&8<si&&11>=si),Nf=String.fromCharCode(32),Tf=!1;function km(e,t){switch(e){case"keyup":return ov.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function sv(e,t){switch(e){case"compositionend":return Sm(t);case"keypress":return t.which!==32?null:(Tf=!0,Nf);case"textInput":return e=t.data,e===Nf&&Tf?null:e;default:return null}}function uv(e,t){if(Jn)return e==="compositionend"||!nc&&km(e,t)?(e=xm(),Ba=Ju=en=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wm&&t.locale!=="ko"?null:t.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cv[e.type]:t==="textarea"}function bm(e,t,n,r){em(r),t=ho(t,"onChange"),0<t.length&&(n=new ec("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ui=null,Ci=null;function fv(e){Rm(e,0)}function Yo(e){var t=nr(e);if(Qp(t))return e}function dv(e,t){if(e==="change")return t}var Cm=!1;if(It){var Ul;if(It){var Bl="oninput"in document;if(!Bl){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),Bl=typeof Af.oninput=="function"}Ul=Bl}else Ul=!1;Cm=Ul&&(!document.documentMode||9<document.documentMode)}function Rf(){ui&&(ui.detachEvent("onpropertychange",Em),Ci=ui=null)}function Em(e){if(e.propertyName==="value"&&Yo(Ci)){var t=[];bm(t,Ci,e,Gu(e)),im(fv,t)}}function pv(e,t,n){e==="focusin"?(Rf(),ui=t,Ci=n,ui.attachEvent("onpropertychange",Em)):e==="focusout"&&Rf()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Ci)}function hv(e,t){if(e==="click")return Yo(t)}function gv(e,t){if(e==="input"||e==="change")return Yo(t)}function vv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:vv;function Ei(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ys.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function If(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lf(e,t){var n=If(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=If(n)}}function Pm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _m(){for(var e=window,t=lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=lo(e.document)}return t}function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yv(e){var t=_m(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pm(n.ownerDocument.documentElement,n)){if(r!==null&&rc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Lf(n,a);var o=Lf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xv=It&&"documentMode"in document&&11>=document.documentMode,er=null,zs=null,ci=null,Ms=!1;function zf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ms||er==null||er!==lo(r)||(r=er,"selectionStart"in r&&rc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ci&&Ei(ci,r)||(ci=r,r=ho(zs,"onSelect"),0<r.length&&(t=new ec("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Wl={},jm={};It&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Qo(e){if(Wl[e])return Wl[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jm)return Wl[e]=t[n];return e}var Om=Qo("animationend"),Nm=Qo("animationiteration"),Tm=Qo("animationstart"),$m=Qo("transitionend"),Am=new Map,Mf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){Am.set(e,t),Yn(t,[e])}for(var Hl=0;Hl<Mf.length;Hl++){var Vl=Mf[Hl],wv=Vl.toLowerCase(),kv=Vl[0].toUpperCase()+Vl.slice(1);wn(wv,"on"+kv)}wn(Om,"onAnimationEnd");wn(Nm,"onAnimationIteration");wn(Tm,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn($m,"onTransitionEnd");kr("onMouseEnter",["mouseout","mouseover"]);kr("onMouseLeave",["mouseout","mouseover"]);kr("onPointerEnter",["pointerout","pointerover"]);kr("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function Df(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wg(r,t,void 0,e),e.currentTarget=null}function Rm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Df(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Df(i,l,u),a=s}}}if(uo)throw e=As,uo=!1,As=null,e}function G(e,t){var n=t[Ws];n===void 0&&(n=t[Ws]=new Set);var r=e+"__bubble";n.has(r)||(Im(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Im(n,e,r,t)}var va="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[va]){e[va]=!0,Bp.forEach(function(n){n!=="selectionchange"&&(Sv.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[va]||(t[va]=!0,Yl("selectionchange",!1,t))}}function Im(e,t,n,r){switch(ym(t)){case 1:var i=Lg;break;case 4:i=zg;break;default:i=qu}n=i.bind(null,t,n,e),i=void 0,!$s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jn(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}im(function(){var u=a,f=Gu(n),d=[];e:{var g=Am.get(e);if(g!==void 0){var y=ec,x=e;switch(e){case"keypress":if(Wa(n)===0)break e;case"keydown":case"keyup":y=qg;break;case"focusin":x="focus",y=Fl;break;case"focusout":x="blur",y=Fl;break;case"beforeblur":case"afterblur":y=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=tv;break;case Om:case Nm:case Tm:y=Wg;break;case $m:y=rv;break;case"scroll":y=Mg;break;case"wheel":y=av;break;case"copy":case"cut":case"paste":y=Vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Of}var v=(t&4)!==0,b=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var c=u,h;c!==null;){h=c;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,p!==null&&(w=wi(c,p),w!=null&&v.push(_i(c,w,h)))),b)break;c=c.return}0<v.length&&(g=new y(g,x,null,n,f),d.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Ns&&(x=n.relatedTarget||n.fromElement)&&(jn(x)||x[Lt]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?jn(x):null,x!==null&&(b=Qn(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(v=_f,w="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Of,w="onPointerLeave",p="onPointerEnter",c="pointer"),b=y==null?g:nr(y),h=x==null?g:nr(x),g=new v(w,c+"leave",y,n,f),g.target=b,g.relatedTarget=h,w=null,jn(f)===u&&(v=new v(p,c+"enter",x,n,f),v.target=h,v.relatedTarget=b,w=v),b=w,y&&x)t:{for(v=y,p=x,c=0,h=v;h;h=Kn(h))c++;for(h=0,w=p;w;w=Kn(w))h++;for(;0<c-h;)v=Kn(v),c--;for(;0<h-c;)p=Kn(p),h--;for(;c--;){if(v===p||p!==null&&v===p.alternate)break t;v=Kn(v),p=Kn(p)}v=null}else v=null;y!==null&&Ff(d,g,y,v,!1),x!==null&&b!==null&&Ff(d,b,x,v,!0)}}e:{if(g=u?nr(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=dv;else if($f(g))if(Cm)k=gv;else{k=mv;var C=pv}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=hv);if(k&&(k=k(e,u))){bm(d,k,n,f);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Es(g,"number",g.value)}switch(C=u?nr(u):window,e){case"focusin":($f(C)||C.contentEditable==="true")&&(er=C,zs=u,ci=null);break;case"focusout":ci=zs=er=null;break;case"mousedown":Ms=!0;break;case"contextmenu":case"mouseup":case"dragend":Ms=!1,zf(d,n,f);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":zf(d,n,f)}var S;if(nc)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Jn?km(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(wm&&n.locale!=="ko"&&(Jn||$!=="onCompositionStart"?$==="onCompositionEnd"&&Jn&&(S=xm()):(en=f,Ju="value"in en?en.value:en.textContent,Jn=!0)),C=ho(u,$),0<C.length&&($=new jf($,e,null,n,f),d.push({event:$,listeners:C}),S?$.data=S:(S=Sm(n),S!==null&&($.data=S)))),(S=lv?sv(e,n):uv(e,n))&&(u=ho(u,"onBeforeInput"),0<u.length&&(f=new jf("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=S))}Rm(d,t)})}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=wi(e,n),a!=null&&r.unshift(_i(e,a,i)),a=wi(e,t),a!=null&&r.push(_i(e,a,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ff(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=wi(n,a),s!=null&&o.unshift(_i(n,s,l))):i||(s=wi(n,a),s!=null&&o.push(_i(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var bv=/\r\n?/g,Cv=/\u0000|\uFFFD/g;function Uf(e){return(typeof e=="string"?e:""+e).replace(bv,`
`).replace(Cv,"")}function ya(e,t,n){if(t=Uf(t),Uf(e)!==t&&n)throw Error(P(425))}function go(){}var Ds=null,Fs=null;function Us(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bs=typeof setTimeout=="function"?setTimeout:void 0,Ev=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,Pv=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(e){return Bf.resolve(null).then(e).catch(_v)}:Bs;function _v(e){setTimeout(function(){throw e})}function Gl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),bi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bi(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),St="__reactFiber$"+zr,ji="__reactProps$"+zr,Lt="__reactContainer$"+zr,Ws="__reactEvents$"+zr,jv="__reactListeners$"+zr,Ov="__reactHandles$"+zr;function jn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wf(e);e!==null;){if(n=e[St])return n;e=Wf(e)}return t}e=n,n=e.parentNode}return null}function Zi(e){return e=e[St]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Go(e){return e[ji]||null}var Hs=[],rr=-1;function kn(e){return{current:e}}function Z(e){0>rr||(e.current=Hs[rr],Hs[rr]=null,rr--)}function Q(e,t){rr++,Hs[rr]=e.current,e.current=t}var gn={},_e=kn(gn),Le=kn(!1),Dn=gn;function Sr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function vo(){Z(Le),Z(_e)}function Hf(e,t,n){if(_e.current!==gn)throw Error(P(168));Q(_e,t),Q(Le,n)}function Lm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,pg(e)||"Unknown",i));return re({},n,r)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,Dn=_e.current,Q(_e,e),Q(Le,Le.current),!0}function Vf(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Lm(e,t,Dn),r.__reactInternalMemoizedMergedChildContext=e,Z(Le),Z(_e),Q(_e,e)):Z(Le),Q(Le,n)}var Nt=null,Ko=!1,Kl=!1;function zm(e){Nt===null?Nt=[e]:Nt.push(e)}function Nv(e){Ko=!0,zm(e)}function Sn(){if(!Kl&&Nt!==null){Kl=!0;var e=0,t=V;try{var n=Nt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,Ko=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),sm(Ku,Sn),i}finally{V=t,Kl=!1}}return null}var ir=[],ar=0,xo=null,wo=0,tt=[],nt=0,Fn=null,Tt=1,$t="";function Pn(e,t){ir[ar++]=wo,ir[ar++]=xo,xo=e,wo=t}function Mm(e,t,n){tt[nt++]=Tt,tt[nt++]=$t,tt[nt++]=Fn,Fn=e;var r=Tt;e=$t;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var a=32-pt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tt=1<<32-pt(t)+i|n<<i|r,$t=a+e}else Tt=1<<a|n<<i|r,$t=e}function ic(e){e.return!==null&&(Pn(e,1),Mm(e,1,0))}function ac(e){for(;e===xo;)xo=ir[--ar],ir[ar]=null,wo=ir[--ar],ir[ar]=null;for(;e===Fn;)Fn=tt[--nt],tt[nt]=null,$t=tt[--nt],tt[nt]=null,Tt=tt[--nt],tt[nt]=null}var Ye=null,Ve=null,ee=!1,ft=null;function Dm(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Ve=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fn!==null?{id:Tt,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Ve=null,!0):!1;default:return!1}}function Vs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ys(e){if(ee){var t=Ve;if(t){var n=t;if(!Yf(e,t)){if(Vs(e))throw Error(P(418));t=sn(n.nextSibling);var r=Ye;t&&Yf(e,t)?Dm(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ye=e)}}else{if(Vs(e))throw Error(P(418));e.flags=e.flags&-4097|2,ee=!1,Ye=e}}}function Qf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function xa(e){if(e!==Ye)return!1;if(!ee)return Qf(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Us(e.type,e.memoizedProps)),t&&(t=Ve)){if(Vs(e))throw Fm(),Error(P(418));for(;t;)Dm(e,t),t=sn(t.nextSibling)}if(Qf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Ye?sn(e.stateNode.nextSibling):null;return!0}function Fm(){for(var e=Ve;e;)e=sn(e.nextSibling)}function br(){Ve=Ye=null,ee=!1}function oc(e){ft===null?ft=[e]:ft.push(e)}var Tv=Bt.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ko=kn(null),So=null,or=null,lc=null;function sc(){lc=or=So=null}function uc(e){var t=ko.current;Z(ko),e._currentValue=t}function Qs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){So=e,lc=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(lc!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(So===null)throw Error(P(308));or=e,So.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var On=null;function cc(e){On===null?On=[e]:On.push(e)}function Um(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,cc(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,cc(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function Ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xu(e,n)}}function Gf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var i=e.updateQueue;Zt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(a!==null){var d=i.baseState;o=0,f=u=s=null,l=a;do{var g=l.lane,y=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,v=l;switch(g=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(y,d,g);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(y,d,g):x,g==null)break e;d=re({},d,g);break e;case 2:Zt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,s=d):f=f.next=y,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Bn|=o,e.lanes=o,e.memoizedState=d}}function Kf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Wm=new Up.Component().refs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xo={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=fn(e),a=At(r,i);a.payload=t,n!=null&&(a.callback=n),t=un(e,a,i),t!==null&&(mt(t,e,i,r),Ha(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=fn(e),a=At(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=un(e,a,i),t!==null&&(mt(t,e,i,r),Ha(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=fn(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=un(e,i,r),t!==null&&(mt(t,e,r,n),Ha(t,e,r))}};function Xf(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,r)||!Ei(i,a):!0}function Hm(e,t,n){var r=!1,i=gn,a=t.contextType;return typeof a=="object"&&a!==null?a=at(a):(i=ze(t)?Dn:_e.current,r=t.contextTypes,a=(r=r!=null)?Sr(e,i):gn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Zf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function Ks(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Wm,fc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=at(a):(a=ze(t)?Dn:_e.current,i.context=Sr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Gs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xo.enqueueReplaceState(i,i.state,null),bo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===Wm&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function wa(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qf(e){var t=e._init;return t(e._payload)}function Vm(e){function t(p,c){if(e){var h=p.deletions;h===null?(p.deletions=[c],p.flags|=16):h.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=dn(p,c),p.index=0,p.sibling=null,p}function a(p,c,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<c?(p.flags|=2,c):h):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,c,h,w){return c===null||c.tag!==6?(c=ns(h,p.mode,w),c.return=p,c):(c=i(c,h),c.return=p,c)}function s(p,c,h,w){var k=h.type;return k===qn?f(p,c,h.props.children,w,h.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xt&&qf(k)===c.type)?(w=i(c,h.props),w.ref=Gr(p,c,h),w.return=p,w):(w=Xa(h.type,h.key,h.props,null,p.mode,w),w.ref=Gr(p,c,h),w.return=p,w)}function u(p,c,h,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=rs(h,p.mode,w),c.return=p,c):(c=i(c,h.children||[]),c.return=p,c)}function f(p,c,h,w,k){return c===null||c.tag!==7?(c=In(h,p.mode,w,k),c.return=p,c):(c=i(c,h),c.return=p,c)}function d(p,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ns(""+c,p.mode,h),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ua:return h=Xa(c.type,c.key,c.props,null,p.mode,h),h.ref=Gr(p,null,c),h.return=p,h;case Zn:return c=rs(c,p.mode,h),c.return=p,c;case Xt:var w=c._init;return d(p,w(c._payload),h)}if(ti(c)||Wr(c))return c=In(c,p.mode,h,null),c.return=p,c;wa(p,c)}return null}function g(p,c,h,w){var k=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:l(p,c,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ua:return h.key===k?s(p,c,h,w):null;case Zn:return h.key===k?u(p,c,h,w):null;case Xt:return k=h._init,g(p,c,k(h._payload),w)}if(ti(h)||Wr(h))return k!==null?null:f(p,c,h,w,null);wa(p,h)}return null}function y(p,c,h,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(h)||null,l(c,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ua:return p=p.get(w.key===null?h:w.key)||null,s(c,p,w,k);case Zn:return p=p.get(w.key===null?h:w.key)||null,u(c,p,w,k);case Xt:var C=w._init;return y(p,c,h,C(w._payload),k)}if(ti(w)||Wr(w))return p=p.get(h)||null,f(c,p,w,k,null);wa(c,w)}return null}function x(p,c,h,w){for(var k=null,C=null,S=c,$=c=0,M=null;S!==null&&$<h.length;$++){S.index>$?(M=S,S=null):M=S.sibling;var L=g(p,S,h[$],w);if(L===null){S===null&&(S=M);break}e&&S&&L.alternate===null&&t(p,S),c=a(L,c,$),C===null?k=L:C.sibling=L,C=L,S=M}if($===h.length)return n(p,S),ee&&Pn(p,$),k;if(S===null){for(;$<h.length;$++)S=d(p,h[$],w),S!==null&&(c=a(S,c,$),C===null?k=S:C.sibling=S,C=S);return ee&&Pn(p,$),k}for(S=r(p,S);$<h.length;$++)M=y(S,p,$,h[$],w),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?$:M.key),c=a(M,c,$),C===null?k=M:C.sibling=M,C=M);return e&&S.forEach(function(Fe){return t(p,Fe)}),ee&&Pn(p,$),k}function v(p,c,h,w){var k=Wr(h);if(typeof k!="function")throw Error(P(150));if(h=k.call(h),h==null)throw Error(P(151));for(var C=k=null,S=c,$=c=0,M=null,L=h.next();S!==null&&!L.done;$++,L=h.next()){S.index>$?(M=S,S=null):M=S.sibling;var Fe=g(p,S,L.value,w);if(Fe===null){S===null&&(S=M);break}e&&S&&Fe.alternate===null&&t(p,S),c=a(Fe,c,$),C===null?k=Fe:C.sibling=Fe,C=Fe,S=M}if(L.done)return n(p,S),ee&&Pn(p,$),k;if(S===null){for(;!L.done;$++,L=h.next())L=d(p,L.value,w),L!==null&&(c=a(L,c,$),C===null?k=L:C.sibling=L,C=L);return ee&&Pn(p,$),k}for(S=r(p,S);!L.done;$++,L=h.next())L=y(S,p,$,L.value,w),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?$:L.key),c=a(L,c,$),C===null?k=L:C.sibling=L,C=L);return e&&S.forEach(function(bn){return t(p,bn)}),ee&&Pn(p,$),k}function b(p,c,h,w){if(typeof h=="object"&&h!==null&&h.type===qn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ua:e:{for(var k=h.key,C=c;C!==null;){if(C.key===k){if(k=h.type,k===qn){if(C.tag===7){n(p,C.sibling),c=i(C,h.props.children),c.return=p,p=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xt&&qf(k)===C.type){n(p,C.sibling),c=i(C,h.props),c.ref=Gr(p,C,h),c.return=p,p=c;break e}n(p,C);break}else t(p,C);C=C.sibling}h.type===qn?(c=In(h.props.children,p.mode,w,h.key),c.return=p,p=c):(w=Xa(h.type,h.key,h.props,null,p.mode,w),w.ref=Gr(p,c,h),w.return=p,p=w)}return o(p);case Zn:e:{for(C=h.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(p,c.sibling),c=i(c,h.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=rs(h,p.mode,w),c.return=p,p=c}return o(p);case Xt:return C=h._init,b(p,c,C(h._payload),w)}if(ti(h))return x(p,c,h,w);if(Wr(h))return v(p,c,h,w);wa(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,h),c.return=p,p=c):(n(p,c),c=ns(h,p.mode,w),c.return=p,p=c),o(p)):n(p,c)}return b}var Cr=Vm(!0),Ym=Vm(!1),qi={},Et=kn(qi),Oi=kn(qi),Ni=kn(qi);function Nn(e){if(e===qi)throw Error(P(174));return e}function dc(e,t){switch(Q(Ni,t),Q(Oi,e),Q(Et,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_s(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_s(t,e)}Z(Et),Q(Et,t)}function Er(){Z(Et),Z(Oi),Z(Ni)}function Qm(e){Nn(Ni.current);var t=Nn(Et.current),n=_s(t,e.type);t!==n&&(Q(Oi,e),Q(Et,n))}function pc(e){Oi.current===e&&(Z(Et),Z(Oi))}var te=kn(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xl=[];function mc(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var Va=Bt.ReactCurrentDispatcher,Zl=Bt.ReactCurrentBatchConfig,Un=0,ne=null,de=null,he=null,Eo=!1,fi=!1,Ti=0,$v=0;function be(){throw Error(P(321))}function hc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function gc(e,t,n,r,i,a){if(Un=a,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Va.current=e===null||e.memoizedState===null?Lv:zv,e=n(r,i),fi){a=0;do{if(fi=!1,Ti=0,25<=a)throw Error(P(301));a+=1,he=de=null,t.updateQueue=null,Va.current=Mv,e=n(r,i)}while(fi)}if(Va.current=Po,t=de!==null&&de.next!==null,Un=0,he=de=ne=null,Eo=!1,t)throw Error(P(300));return e}function vc(){var e=Ti!==0;return Ti=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ne.memoizedState=he=e:he=he.next=e,he}function ot(){if(de===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?ne.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(P(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?ne.memoizedState=he=e:he=he.next=e}return he}function $i(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=ot(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=de,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var f=u.lane;if((Un&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,ne.lanes|=f,Bn|=f}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,gt(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ne.lanes|=a,Bn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jl(e){var t=ot(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);gt(a,t.memoizedState)||(Re=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Gm(){}function Km(e,t){var n=ne,r=ot(),i=t(),a=!gt(r.memoizedState,i);if(a&&(r.memoizedState=i,Re=!0),r=r.queue,yc(qm.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Ai(9,Zm.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(P(349));Un&30||Xm(n,t,i)}return i}function Xm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zm(e,t,n,r){t.value=n,t.getSnapshot=r,Jm(t)&&eh(e)}function qm(e,t,n){return n(function(){Jm(t)&&eh(e)})}function Jm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function eh(e){var t=zt(e,1);t!==null&&mt(t,e,1,-1)}function Jf(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},t.queue=e,e=e.dispatch=Iv.bind(null,ne,e),[t.memoizedState,e]}function Ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function th(){return ot().memoizedState}function Ya(e,t,n,r){var i=yt();ne.flags|=e,i.memoizedState=Ai(1|t,n,void 0,r===void 0?null:r)}function Zo(e,t,n,r){var i=ot();r=r===void 0?null:r;var a=void 0;if(de!==null){var o=de.memoizedState;if(a=o.destroy,r!==null&&hc(r,o.deps)){i.memoizedState=Ai(t,n,a,r);return}}ne.flags|=e,i.memoizedState=Ai(1|t,n,a,r)}function ed(e,t){return Ya(8390656,8,e,t)}function yc(e,t){return Zo(2048,8,e,t)}function nh(e,t){return Zo(4,2,e,t)}function rh(e,t){return Zo(4,4,e,t)}function ih(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ah(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4,4,ih.bind(null,t,e),n)}function xc(){}function oh(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lh(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sh(e,t,n){return Un&21?(gt(n,t)||(n=fm(),ne.lanes|=n,Bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Av(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Zl.transition;Zl.transition={};try{e(!1),t()}finally{V=n,Zl.transition=r}}function uh(){return ot().memoizedState}function Rv(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ch(e))fh(t,n);else if(n=Um(e,t,n,r),n!==null){var i=Ne();mt(n,e,r,i),dh(n,t,r)}}function Iv(e,t,n){var r=fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ch(e))fh(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,gt(l,o)){var s=t.interleaved;s===null?(i.next=i,cc(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Um(e,t,i,r),n!==null&&(i=Ne(),mt(n,e,r,i),dh(n,t,r))}}function ch(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function fh(e,t){fi=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xu(e,n)}}var Po={readContext:at,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},Lv={readContext:at,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:ed,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ya(4194308,4,ih.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ya(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rv.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Jf,useDebugValue:xc,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Jf(!1),t=e[0];return e=Av.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=yt();if(ee){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ve===null)throw Error(P(349));Un&30||Xm(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ed(qm.bind(null,r,a,e),[e]),r.flags|=2048,Ai(9,Zm.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=yt(),t=ve.identifierPrefix;if(ee){var n=$t,r=Tt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ti++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$v++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zv={readContext:at,useCallback:oh,useContext:at,useEffect:yc,useImperativeHandle:ah,useInsertionEffect:nh,useLayoutEffect:rh,useMemo:lh,useReducer:ql,useRef:th,useState:function(){return ql($i)},useDebugValue:xc,useDeferredValue:function(e){var t=ot();return sh(t,de.memoizedState,e)},useTransition:function(){var e=ql($i)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:Km,useId:uh,unstable_isNewReconciler:!1},Mv={readContext:at,useCallback:oh,useContext:at,useEffect:yc,useImperativeHandle:ah,useInsertionEffect:nh,useLayoutEffect:rh,useMemo:lh,useReducer:Jl,useRef:th,useState:function(){return Jl($i)},useDebugValue:xc,useDeferredValue:function(e){var t=ot();return de===null?t.memoizedState=e:sh(t,de.memoizedState,e)},useTransition:function(){var e=Jl($i)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:Km,useId:uh,unstable_isNewReconciler:!1};function Pr(e,t){try{var n="",r=t;do n+=dg(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dv=typeof WeakMap=="function"?WeakMap:Map;function ph(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){jo||(jo=!0,ou=r),Xs(e,t)},n}function mh(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xs(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Xs(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function td(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Jv.bind(null,e,t,n),t.then(e,e))}function nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var Fv=Bt.ReactCurrentOwner,Re=!1;function je(e,t,n,r){t.child=e===null?Ym(t,null,n,r):Cr(t,e.child,n,r)}function id(e,t,n,r,i){n=n.render;var a=t.ref;return vr(t,i),r=gc(e,t,n,r,a,i),n=vc(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(ee&&n&&ic(t),t.flags|=1,je(e,t,r,i),t.child)}function ad(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!_c(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,hh(e,t,a,r,i)):(e=Xa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(o,r)&&e.ref===t.ref)return Mt(e,t,i)}return t.flags|=1,e=dn(a,r),e.ref=t.ref,e.return=t,t.child=e}function hh(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ei(a,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Mt(e,t,i)}return Zs(e,t,n,r,i)}function gh(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(sr,He),He|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(sr,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Q(sr,He),He|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Q(sr,He),He|=r;return je(e,t,i,n),t.child}function vh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zs(e,t,n,r,i){var a=ze(n)?Dn:_e.current;return a=Sr(t,a),vr(t,i),n=gc(e,t,n,r,a,i),r=vc(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(ee&&r&&ic(t),t.flags|=1,je(e,t,n,i),t.child)}function od(e,t,n,r,i){if(ze(n)){var a=!0;yo(t)}else a=!1;if(vr(t,i),t.stateNode===null)Qa(e,t),Hm(t,n,r),Ks(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=ze(n)?Dn:_e.current,u=Sr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Zf(t,o,r,u),Zt=!1;var g=t.memoizedState;o.state=g,bo(t,r,o,i),s=t.memoizedState,l!==r||g!==s||Le.current||Zt?(typeof f=="function"&&(Gs(t,n,f,r),s=t.memoizedState),(l=Zt||Xf(t,n,l,r,g,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Bm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ut(t.type,l),o.props=u,d=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=at(s):(s=ze(n)?Dn:_e.current,s=Sr(t,s));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||g!==s)&&Zf(t,o,r,s),Zt=!1,g=t.memoizedState,o.state=g,bo(t,r,o,i);var x=t.memoizedState;l!==d||g!==x||Le.current||Zt?(typeof y=="function"&&(Gs(t,n,y,r),x=t.memoizedState),(u=Zt||Xf(t,n,u,r,g,x,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return qs(e,t,n,r,a,i)}function qs(e,t,n,r,i,a){vh(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Vf(t,n,!1),Mt(e,t,a);r=t.stateNode,Fv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Cr(t,e.child,null,a),t.child=Cr(t,null,l,a)):je(e,t,l,a),t.memoizedState=r.state,i&&Vf(t,n,!0),t.child}function yh(e){var t=e.stateNode;t.pendingContext?Hf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hf(e,t.context,!1),dc(e,t.containerInfo)}function ld(e,t,n,r,i){return br(),oc(i),t.flags|=256,je(e,t,n,r),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function xh(e,t,n){var r=t.pendingProps,i=te.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(te,i&1),e===null)return Ys(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=el(o,r,0,null),e=In(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=eu(n),t.memoizedState=Js,e):wc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Uv(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=dn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=dn(l,a):(a=In(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?eu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Js,r}return a=e.child,e=a.sibling,r=dn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wc(e,t){return t=el({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ka(e,t,n,r){return r!==null&&oc(r),Cr(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uv(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=es(Error(P(422))),ka(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=el({mode:"visible",children:r.children},i,0,null),a=In(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Cr(t,e.child,null,o),t.child.memoizedState=eu(o),t.memoizedState=Js,a);if(!(t.mode&1))return ka(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(P(419)),r=es(a,r,void 0),ka(e,t,o,r)}if(l=(o&e.childLanes)!==0,Re||l){if(r=ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,zt(e,i),mt(r,e,i,-1))}return Pc(),r=es(Error(P(421))),ka(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ey.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ve=sn(i.nextSibling),Ye=t,ee=!0,ft=null,e!==null&&(tt[nt++]=Tt,tt[nt++]=$t,tt[nt++]=Fn,Tt=e.id,$t=e.overflow,Fn=t),t=wc(t,r.children),t.flags|=4096,t)}function sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qs(e.return,t,n)}function ts(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function wh(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(je(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sd(e,n,t);else if(e.tag===19)sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ts(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ts(t,!0,n,null,a);break;case"together":ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bv(e,t,n){switch(t.tag){case 3:yh(t),br();break;case 5:Qm(t);break;case 1:ze(t.type)&&yo(t);break;case 4:dc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(ko,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?xh(e,t,n):(Q(te,te.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);Q(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,gh(e,t,n)}return Mt(e,t,n)}var kh,tu,Sh,bh;kh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tu=function(){};Sh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nn(Et.current);var a=null;switch(n){case"input":i=bs(e,i),r=bs(e,r),a=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),a=[];break;case"textarea":i=Ps(e,i),r=Ps(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=go)}js(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&G("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};bh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wv(e,t,n){var r=t.pendingProps;switch(ac(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return ze(t.type)&&vo(),Ce(t),null;case 3:return r=t.stateNode,Er(),Z(Le),Z(_e),mc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(uu(ft),ft=null))),tu(e,t),Ce(t),null;case 5:pc(t);var i=Nn(Ni.current);if(n=t.type,e!==null&&t.stateNode!=null)Sh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ce(t),null}if(e=Nn(Et.current),xa(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[St]=t,r[ji]=a,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<ri.length;i++)G(ri[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":vf(r,a),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},G("invalid",r);break;case"textarea":xf(r,a),G("invalid",r)}js(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ya(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ya(r.textContent,l,e),i=["children",""+l]):yi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":ca(r),yf(r,a,!0);break;case"textarea":ca(r),wf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[St]=t,e[ji]=r,kh(e,t,!1,!1),t.stateNode=e;e:{switch(o=Os(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<ri.length;i++)G(ri[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":vf(e,r),i=bs(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),G("invalid",e);break;case"textarea":xf(e,r),i=Ps(e,r),G("invalid",e);break;default:i=r}js(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Jp(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Zp(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&xi(e,s):typeof s=="number"&&xi(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(yi.hasOwnProperty(a)?s!=null&&a==="onScroll"&&G("scroll",e):s!=null&&Hu(e,a,s,o))}switch(n){case"input":ca(e),yf(e,r,!1);break;case"textarea":ca(e),wf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?pr(e,!!r.multiple,a,!1):r.defaultValue!=null&&pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)bh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Nn(Ni.current),Nn(Et.current),xa(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(a=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:ya(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ya(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ce(t),null;case 13:if(Z(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Ve!==null&&t.mode&1&&!(t.flags&128))Fm(),br(),t.flags|=98560,a=!1;else if(a=xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[St]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),a=!1}else ft!==null&&(uu(ft),ft=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?pe===0&&(pe=3):Pc())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Er(),tu(e,t),e===null&&Pi(t.stateNode.containerInfo),Ce(t),null;case 10:return uc(t.type._context),Ce(t),null;case 17:return ze(t.type)&&vo(),Ce(t),null;case 19:if(Z(te),a=t.memoizedState,a===null)return Ce(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Kr(a,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Co(e),o!==null){for(t.flags|=128,Kr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(te,te.current&1|2),t.child}e=e.sibling}a.tail!==null&&le()>_r&&(t.flags|=128,r=!0,Kr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Co(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ee)return Ce(t),null}else 2*le()-a.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Kr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=le(),t.sibling=null,n=te.current,Q(te,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Ec(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Hv(e,t){switch(ac(t),t.tag){case 1:return ze(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),Z(Le),Z(_e),mc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pc(t),null;case 13:if(Z(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(te),null;case 4:return Er(),null;case 10:return uc(t.type._context),null;case 22:case 23:return Ec(),null;case 24:return null;default:return null}}var Sa=!1,Pe=!1,Vv=typeof WeakSet=="function"?WeakSet:Set,T=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function nu(e,t,n){try{n()}catch(r){ae(e,t,r)}}var ud=!1;function Yv(e,t){if(Ds=po,e=_m(),rc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,d=e,g=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==a||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)g=d,d=y;for(;;){if(d===e)break t;if(g===n&&++u===i&&(l=o),g===a&&++f===r&&(s=o),(y=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fs={focusedElem:e,selectionRange:n},po=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,b=x.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:ut(t.type,v),b);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return x=ud,ud=!1,x}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&nu(t,n,a)}i=i.next}while(i!==r)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ru(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ch(e){var t=e.alternate;t!==null&&(e.alternate=null,Ch(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[ji],delete t[Ws],delete t[jv],delete t[Ov])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Eh(e){return e.tag===5||e.tag===3||e.tag===4}function cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}function au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(au(e,t,n),e=e.sibling;e!==null;)au(e,t,n),e=e.sibling}var xe=null,ct=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Ph(e,t,n),n=n.sibling}function Ph(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:Pe||lr(n,t);case 6:var r=xe,i=ct;xe=null,Qt(e,t,n),xe=r,ct=i,xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),bi(e)):Gl(xe,n.stateNode));break;case 4:r=xe,i=ct,xe=n.stateNode.containerInfo,ct=!0,Qt(e,t,n),xe=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&nu(n,t,o),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!Pe&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ae(n,t,l)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Qt(e,t,n),Pe=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function fd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vv),t.forEach(function(r){var i=ty.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,ct=!1;break e;case 3:xe=l.stateNode.containerInfo,ct=!0;break e;case 4:xe=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(xe===null)throw Error(P(160));Ph(a,o,i),xe=null,ct=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ae(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_h(t,e),t=t.sibling}function _h(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),vt(e),r&4){try{di(3,e,e.return),qo(3,e)}catch(v){ae(e,e.return,v)}try{di(5,e,e.return)}catch(v){ae(e,e.return,v)}}break;case 1:st(t,e),vt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(st(t,e),vt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var i=e.stateNode;try{xi(i,"")}catch(v){ae(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Gp(i,a),Os(l,o);var u=Os(l,a);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?Jp(i,d):f==="dangerouslySetInnerHTML"?Zp(i,d):f==="children"?xi(i,d):Hu(i,f,d,u)}switch(l){case"input":Cs(i,a);break;case"textarea":Kp(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?pr(i,!!a.multiple,y,!1):g!==!!a.multiple&&(a.defaultValue!=null?pr(i,!!a.multiple,a.defaultValue,!0):pr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ji]=a}catch(v){ae(e,e.return,v)}}break;case 6:if(st(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){ae(e,e.return,v)}}break;case 3:if(st(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bi(t.containerInfo)}catch(v){ae(e,e.return,v)}break;case 4:st(t,e),vt(e);break;case 13:st(t,e),vt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(bc=le())),r&4&&fd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||f,st(t,e),Pe=u):st(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(d=T=f;T!==null;){switch(g=T,y=g.child,g.tag){case 0:case 11:case 14:case 15:di(4,g,g.return);break;case 1:lr(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:lr(g,g.return);break;case 22:if(g.memoizedState!==null){pd(d);continue}}y!==null?(y.return=g,T=y):pd(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=qp("display",o))}catch(v){ae(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ae(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:st(t,e),vt(e),r&4&&fd(e);break;case 21:break;default:st(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Eh(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xi(i,""),r.flags&=-33);var a=cd(e);au(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=cd(e);iu(e,l,o);break;default:throw Error(P(161))}}catch(s){ae(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qv(e,t,n){T=e,jh(e)}function jh(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Sa;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Pe;l=Sa;var u=Pe;if(Sa=o,(Pe=s)&&!u)for(T=i;T!==null;)o=T,s=o.child,o.tag===22&&o.memoizedState!==null?md(i):s!==null?(s.return=o,T=s):md(i);for(;a!==null;)T=a,jh(a),a=a.sibling;T=i,Sa=l,Pe=u}dd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,T=a):dd(e)}}function dd(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Kf(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kf(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&bi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Pe||t.flags&512&&ru(t)}catch(g){ae(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function pd(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function md(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qo(4,t)}catch(s){ae(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ae(t,i,s)}}var a=t.return;try{ru(t)}catch(s){ae(t,a,s)}break;case 5:var o=t.return;try{ru(t)}catch(s){ae(t,o,s)}}}catch(s){ae(t,t.return,s)}if(t===e){T=null;break}var l=t.sibling;if(l!==null){l.return=t.return,T=l;break}T=t.return}}var Gv=Math.ceil,_o=Bt.ReactCurrentDispatcher,kc=Bt.ReactCurrentOwner,it=Bt.ReactCurrentBatchConfig,U=0,ve=null,ce=null,ke=0,He=0,sr=kn(0),pe=0,Ri=null,Bn=0,Jo=0,Sc=0,pi=null,Ae=null,bc=0,_r=1/0,jt=null,jo=!1,ou=null,cn=null,ba=!1,tn=null,Oo=0,mi=0,lu=null,Ga=-1,Ka=0;function Ne(){return U&6?le():Ga!==-1?Ga:Ga=le()}function fn(e){return e.mode&1?U&2&&ke!==0?ke&-ke:Tv.transition!==null?(Ka===0&&(Ka=fm()),Ka):(e=V,e!==0||(e=window.event,e=e===void 0?16:ym(e.type)),e):1}function mt(e,t,n,r){if(50<mi)throw mi=0,lu=null,Error(P(185));Ki(e,n,r),(!(U&2)||e!==ve)&&(e===ve&&(!(U&2)&&(Jo|=n),pe===4&&Jt(e,ke)),Me(e,r),n===1&&U===0&&!(t.mode&1)&&(_r=le()+500,Ko&&Sn()))}function Me(e,t){var n=e.callbackNode;Tg(e,t);var r=fo(e,e===ve?ke:0);if(r===0)n!==null&&bf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bf(n),t===1)e.tag===0?Nv(hd.bind(null,e)):zm(hd.bind(null,e)),Pv(function(){!(U&6)&&Sn()}),n=null;else{switch(dm(r)){case 1:n=Ku;break;case 4:n=um;break;case 16:n=co;break;case 536870912:n=cm;break;default:n=co}n=Lh(n,Oh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Oh(e,t){if(Ga=-1,Ka=0,U&6)throw Error(P(327));var n=e.callbackNode;if(yr()&&e.callbackNode!==n)return null;var r=fo(e,e===ve?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=No(e,r);else{t=r;var i=U;U|=2;var a=Th();(ve!==e||ke!==t)&&(jt=null,_r=le()+500,Rn(e,t));do try{Zv();break}catch(l){Nh(e,l)}while(1);sc(),_o.current=a,U=i,ce!==null?t=0:(ve=null,ke=0,t=pe)}if(t!==0){if(t===2&&(i=Rs(e),i!==0&&(r=i,t=su(e,i))),t===1)throw n=Ri,Rn(e,0),Jt(e,r),Me(e,le()),n;if(t===6)Jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Kv(i)&&(t=No(e,r),t===2&&(a=Rs(e),a!==0&&(r=a,t=su(e,a))),t===1))throw n=Ri,Rn(e,0),Jt(e,r),Me(e,le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:_n(e,Ae,jt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=bc+500-le(),10<t)){if(fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bs(_n.bind(null,e,Ae,jt),t);break}_n(e,Ae,jt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-pt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gv(r/1960))-r,10<r){e.timeoutHandle=Bs(_n.bind(null,e,Ae,jt),r);break}_n(e,Ae,jt);break;case 5:_n(e,Ae,jt);break;default:throw Error(P(329))}}}return Me(e,le()),e.callbackNode===n?Oh.bind(null,e):null}function su(e,t){var n=pi;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=No(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&uu(t)),e}function uu(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Kv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!gt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~Sc,t&=~Jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function hd(e){if(U&6)throw Error(P(327));yr();var t=fo(e,0);if(!(t&1))return Me(e,le()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=Rs(e);r!==0&&(t=r,n=su(e,r))}if(n===1)throw n=Ri,Rn(e,0),Jt(e,t),Me(e,le()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Ae,jt),Me(e,le()),null}function Cc(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(_r=le()+500,Ko&&Sn())}}function Wn(e){tn!==null&&tn.tag===0&&!(U&6)&&yr();var t=U;U|=1;var n=it.transition,r=V;try{if(it.transition=null,V=1,e)return e()}finally{V=r,it.transition=n,U=t,!(U&6)&&Sn()}}function Ec(){He=sr.current,Z(sr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ev(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(ac(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:Er(),Z(Le),Z(_e),mc();break;case 5:pc(r);break;case 4:Er();break;case 13:Z(te);break;case 19:Z(te);break;case 10:uc(r.type._context);break;case 22:case 23:Ec()}n=n.return}if(ve=e,ce=e=dn(e.current,null),ke=He=t,pe=0,Ri=null,Sc=Jo=Bn=0,Ae=pi=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}On=null}return e}function Nh(e,t){do{var n=ce;try{if(sc(),Va.current=Po,Eo){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eo=!1}if(Un=0,he=de=ne=null,fi=!1,Ti=0,kc.current=null,n===null||n.return===null){pe=1,Ri=t,ce=null;break}e:{var a=e,o=n.return,l=n,s=t;if(t=ke,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=nd(o);if(y!==null){y.flags&=-257,rd(y,o,l,a,t),y.mode&1&&td(a,u,t),t=y,s=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(s),t.updateQueue=v}else x.add(s);break e}else{if(!(t&1)){td(a,u,t),Pc();break e}s=Error(P(426))}}else if(ee&&l.mode&1){var b=nd(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),rd(b,o,l,a,t),oc(Pr(s,l));break e}}a=s=Pr(s,l),pe!==4&&(pe=2),pi===null?pi=[a]:pi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=ph(a,s,t);Gf(a,p);break e;case 1:l=s;var c=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(cn===null||!cn.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=mh(a,l,t);Gf(a,w);break e}}a=a.return}while(a!==null)}Ah(n)}catch(k){t=k,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function Th(){var e=_o.current;return _o.current=Po,e===null?Po:e}function Pc(){(pe===0||pe===3||pe===2)&&(pe=4),ve===null||!(Bn&268435455)&&!(Jo&268435455)||Jt(ve,ke)}function No(e,t){var n=U;U|=2;var r=Th();(ve!==e||ke!==t)&&(jt=null,Rn(e,t));do try{Xv();break}catch(i){Nh(e,i)}while(1);if(sc(),U=n,_o.current=r,ce!==null)throw Error(P(261));return ve=null,ke=0,pe}function Xv(){for(;ce!==null;)$h(ce)}function Zv(){for(;ce!==null&&!Sg();)$h(ce)}function $h(e){var t=Ih(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?Ah(e):ce=t,kc.current=null}function Ah(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hv(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(n=Wv(n,t,He),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function _n(e,t,n){var r=V,i=it.transition;try{it.transition=null,V=1,qv(e,t,n,r)}finally{it.transition=i,V=r}return null}function qv(e,t,n,r){do yr();while(tn!==null);if(U&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if($g(e,a),e===ve&&(ce=ve=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,Lh(co,function(){return yr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=it.transition,it.transition=null;var o=V;V=1;var l=U;U|=4,kc.current=null,Yv(e,n),_h(n,e),yv(Fs),po=!!Ds,Fs=Ds=null,e.current=n,Qv(n),bg(),U=l,V=o,it.transition=a}else e.current=n;if(ba&&(ba=!1,tn=e,Oo=i),a=e.pendingLanes,a===0&&(cn=null),Pg(n.stateNode),Me(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jo)throw jo=!1,e=ou,ou=null,e;return Oo&1&&e.tag!==0&&yr(),a=e.pendingLanes,a&1?e===lu?mi++:(mi=0,lu=e):mi=0,Sn(),null}function yr(){if(tn!==null){var e=dm(Oo),t=it.transition,n=V;try{if(it.transition=null,V=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Oo=0,U&6)throw Error(P(331));var i=U;for(U|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:di(8,f,a)}var d=f.child;if(d!==null)d.return=f,T=d;else for(;T!==null;){f=T;var g=f.sibling,y=f.return;if(Ch(f),f===u){T=null;break}if(g!==null){g.return=y,T=g;break}T=y}}}var x=a.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:di(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,T=p;break e}T=a.return}}var c=e.current;for(T=c;T!==null;){o=T;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,T=h;else e:for(o=c;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qo(9,l)}}catch(k){ae(l,l.return,k)}if(l===o){T=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,T=w;break e}T=l.return}}if(U=i,Sn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Ho,e)}catch{}r=!0}return r}finally{V=n,it.transition=t}}return!1}function gd(e,t,n){t=Pr(n,t),t=ph(e,t,1),e=un(e,t,1),t=Ne(),e!==null&&(Ki(e,1,t),Me(e,t))}function ae(e,t,n){if(e.tag===3)gd(e,e,n);else for(;t!==null;){if(t.tag===3){gd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=Pr(n,e),e=mh(t,e,1),t=un(t,e,1),e=Ne(),t!==null&&(Ki(t,1,e),Me(t,e));break}}t=t.return}}function Jv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ke&n)===n&&(pe===4||pe===3&&(ke&130023424)===ke&&500>le()-bc?Rn(e,0):Sc|=n),Me(e,t)}function Rh(e,t){t===0&&(e.mode&1?(t=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):t=1);var n=Ne();e=zt(e,t),e!==null&&(Ki(e,t,n),Me(e,n))}function ey(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rh(e,n)}function ty(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Rh(e,n)}var Ih;Ih=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Bv(e,t,n);Re=!!(e.flags&131072)}else Re=!1,ee&&t.flags&1048576&&Mm(t,wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qa(e,t),e=t.pendingProps;var i=Sr(t,_e.current);vr(t,n),i=gc(null,t,r,e,i,n);var a=vc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(a=!0,yo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fc(t),i.updater=Xo,t.stateNode=i,i._reactInternals=t,Ks(t,r,e,n),t=qs(null,t,r,!0,a,n)):(t.tag=0,ee&&a&&ic(t),je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ry(r),e=ut(r,e),i){case 0:t=Zs(null,t,r,e,n);break e;case 1:t=od(null,t,r,e,n);break e;case 11:t=id(null,t,r,e,n);break e;case 14:t=ad(null,t,r,ut(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Zs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),od(e,t,r,i,n);case 3:e:{if(yh(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Bm(e,t),bo(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Pr(Error(P(423)),t),t=ld(e,t,r,n,i);break e}else if(r!==i){i=Pr(Error(P(424)),t),t=ld(e,t,r,n,i);break e}else for(Ve=sn(t.stateNode.containerInfo.firstChild),Ye=t,ee=!0,ft=null,n=Ym(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){t=Mt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return Qm(t),e===null&&Ys(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Us(r,i)?o=null:a!==null&&Us(r,a)&&(t.flags|=32),vh(e,t),je(e,t,o,n),t.child;case 6:return e===null&&Ys(t),null;case 13:return xh(e,t,n);case 4:return dc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cr(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),id(e,t,r,i,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Q(ko,r._currentValue),r._currentValue=o,a!==null)if(gt(a.value,o)){if(a.children===i.children&&!Le.current){t=Mt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=At(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Qs(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(P(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qs(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vr(t,n),i=at(i),r=r(i),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),ad(e,t,r,i,n);case 15:return hh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Qa(e,t),t.tag=1,ze(r)?(e=!0,yo(t)):e=!1,vr(t,n),Hm(t,r,i),Ks(t,r,i,n),qs(null,t,r,!0,e,n);case 19:return wh(e,t,n);case 22:return gh(e,t,n)}throw Error(P(156,t.tag))};function Lh(e,t){return sm(e,t)}function ny(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new ny(e,t,n,r)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ry(e){if(typeof e=="function")return _c(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yu)return 11;if(e===Qu)return 14}return 2}function dn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xa(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")_c(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case qn:return In(n.children,i,a,t);case Vu:o=8,i|=8;break;case xs:return e=rt(12,n,t,i|2),e.elementType=xs,e.lanes=a,e;case ws:return e=rt(13,n,t,i),e.elementType=ws,e.lanes=a,e;case ks:return e=rt(19,n,t,i),e.elementType=ks,e.lanes=a,e;case Vp:return el(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wp:o=10;break e;case Hp:o=9;break e;case Yu:o=11;break e;case Qu:o=14;break e;case Xt:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=rt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function In(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function el(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Vp,e.lanes=n,e.stateNode={isHidden:!1},e}function ns(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function rs(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jc(e,t,n,r,i,a,o,l,s){return e=new iy(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=rt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(a),e}function ay(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zh(e){if(!e)return gn;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(ze(n))return Lm(e,n,t)}return t}function Mh(e,t,n,r,i,a,o,l,s){return e=jc(n,r,!0,e,i,a,o,l,s),e.context=zh(null),n=e.current,r=Ne(),i=fn(n),a=At(r,i),a.callback=t??null,un(n,a,i),e.current.lanes=i,Ki(e,i,r),Me(e,r),e}function tl(e,t,n,r){var i=t.current,a=Ne(),o=fn(i);return n=zh(n),t.context===null?t.context=n:t.pendingContext=n,t=At(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(i,t,o),e!==null&&(mt(e,i,o,a),Ha(e,i,o)),o}function To(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oc(e,t){vd(e,t),(e=e.alternate)&&vd(e,t)}function oy(){return null}var Dh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nc(e){this._internalRoot=e}nl.prototype.render=Nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));tl(e,t,null,null)};nl.prototype.unmount=Nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){tl(null,e,null,null)}),t[Lt]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=hm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&vm(e)}};function Tc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yd(){}function ly(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=To(o);a.call(u)}}var o=Mh(t,r,e,0,null,!1,!1,"",yd);return e._reactRootContainer=o,e[Lt]=o.current,Pi(e.nodeType===8?e.parentNode:e),Wn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=To(s);l.call(u)}}var s=jc(e,0,!1,null,null,!1,!1,"",yd);return e._reactRootContainer=s,e[Lt]=s.current,Pi(e.nodeType===8?e.parentNode:e),Wn(function(){tl(t,s,n,r)}),s}function il(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=To(o);l.call(s)}}tl(t,o,e,i)}else o=ly(n,t,e,i,r);return To(o)}pm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ni(t.pendingLanes);n!==0&&(Xu(t,n|1),Me(t,le()),!(U&6)&&(_r=le()+500,Sn()))}break;case 13:Wn(function(){var r=zt(e,1);if(r!==null){var i=Ne();mt(r,e,1,i)}}),Oc(e,1)}};Zu=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Ne();mt(t,e,134217728,n)}Oc(e,134217728)}};mm=function(e){if(e.tag===13){var t=fn(e),n=zt(e,t);if(n!==null){var r=Ne();mt(n,e,t,r)}Oc(e,t)}};hm=function(){return V};gm=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Ts=function(e,t,n){switch(t){case"input":if(Cs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Go(r);if(!i)throw Error(P(90));Qp(r),Cs(r,i)}}}break;case"textarea":Kp(e,n);break;case"select":t=n.value,t!=null&&pr(e,!!n.multiple,t,!1)}};nm=Cc;rm=Wn;var sy={usingClientEntryPoint:!1,Events:[Zi,nr,Go,em,tm,Cc]},Xr={findFiberByHostInstance:jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uy={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=om(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{Ho=Ca.inject(uy),Ct=Ca}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tc(t))throw Error(P(200));return ay(e,t,null,n)};Ke.createRoot=function(e,t){if(!Tc(e))throw Error(P(299));var n=!1,r="",i=Dh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=jc(e,1,!1,null,null,n,!1,r,i),e[Lt]=t.current,Pi(e.nodeType===8?e.parentNode:e),new Nc(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=om(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return Wn(e)};Ke.hydrate=function(e,t,n){if(!rl(t))throw Error(P(200));return il(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Tc(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Dh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Mh(t,null,e,1,n??null,i,!1,a,o),e[Lt]=t.current,Pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new nl(t)};Ke.render=function(e,t,n){if(!rl(t))throw Error(P(200));return il(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!rl(e))throw Error(P(40));return e._reactRootContainer?(Wn(function(){il(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Cc;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return il(e,t,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function Fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fh)}catch(e){console.error(e)}}Fh(),Mp.exports=Ke;var cy=Mp.exports,xd=cy;vs.createRoot=xd.createRoot,vs.hydrateRoot=xd.hydrateRoot;function cu(){return cu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cu.apply(this,arguments)}function Uh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var fy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,dy=Uh(function(e){return fy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function py(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function my(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var hy=function(){function e(n){var r=this;this._insertTag=function(i){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,a),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(my(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var a=py(i);try{a.insertRule(r,a.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ee="-ms-",$o="-moz-",B="-webkit-",Bh="comm",$c="rule",Ac="decl",gy="@import",Wh="@keyframes",vy="@layer",yy=Math.abs,al=String.fromCharCode,xy=Object.assign;function wy(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function Hh(e){return e.trim()}function ky(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function fu(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function Ii(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function Rc(e){return e.length}function Ea(e,t){return t.push(e),e}function Sy(e,t){return e.map(t).join("")}var ol=1,jr=1,Vh=0,De=0,se=0,Mr="";function ll(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ol,column:jr,length:o,return:""}}function Zr(e,t){return xy(ll("",null,null,"",null,null,0),e,{length:-e.length},t)}function by(){return se}function Cy(){return se=De>0?we(Mr,--De):0,jr--,se===10&&(jr=1,ol--),se}function Qe(){return se=De<Vh?we(Mr,De++):0,jr++,se===10&&(jr=1,ol++),se}function Pt(){return we(Mr,De)}function Za(){return De}function Ji(e,t){return Ii(Mr,e,t)}function Li(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yh(e){return ol=jr=1,Vh=xt(Mr=e),De=0,[]}function Qh(e){return Mr="",e}function qa(e){return Hh(Ji(De-1,du(e===91?e+2:e===40?e+1:e)))}function Ey(e){for(;(se=Pt())&&se<33;)Qe();return Li(e)>2||Li(se)>3?"":" "}function Py(e,t){for(;--t&&Qe()&&!(se<48||se>102||se>57&&se<65||se>70&&se<97););return Ji(e,Za()+(t<6&&Pt()==32&&Qe()==32))}function du(e){for(;Qe();)switch(se){case e:return De;case 34:case 39:e!==34&&e!==39&&du(se);break;case 40:e===41&&du(e);break;case 92:Qe();break}return De}function _y(e,t){for(;Qe()&&e+se!==47+10;)if(e+se===42+42&&Pt()===47)break;return"/*"+Ji(t,De-1)+"*"+al(e===47?e:Qe())}function jy(e){for(;!Li(Pt());)Qe();return Ji(e,De)}function Oy(e){return Qh(Ja("",null,null,null,[""],e=Yh(e),0,[0],e))}function Ja(e,t,n,r,i,a,o,l,s){for(var u=0,f=0,d=o,g=0,y=0,x=0,v=1,b=1,p=1,c=0,h="",w=i,k=a,C=r,S=h;b;)switch(x=c,c=Qe()){case 40:if(x!=108&&we(S,d-1)==58){fu(S+=W(qa(c),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=qa(c);break;case 9:case 10:case 13:case 32:S+=Ey(x);break;case 92:S+=Py(Za()-1,7);continue;case 47:switch(Pt()){case 42:case 47:Ea(Ny(_y(Qe(),Za()),t,n),s);break;default:S+="/"}break;case 123*v:l[u++]=xt(S)*p;case 125*v:case 59:case 0:switch(c){case 0:case 125:b=0;case 59+f:p==-1&&(S=W(S,/\f/g,"")),y>0&&xt(S)-d&&Ea(y>32?kd(S+";",r,n,d-1):kd(W(S," ","")+";",r,n,d-2),s);break;case 59:S+=";";default:if(Ea(C=wd(S,t,n,u,f,i,l,h,w=[],k=[],d),a),c===123)if(f===0)Ja(S,t,C,C,w,a,d,l,k);else switch(g===99&&we(S,3)===110?100:g){case 100:case 108:case 109:case 115:Ja(e,C,C,r&&Ea(wd(e,C,C,0,0,i,l,h,i,w=[],d),k),i,k,d,l,r?w:k);break;default:Ja(S,C,C,C,[""],k,0,l,k)}}u=f=y=0,v=p=1,h=S="",d=o;break;case 58:d=1+xt(S),y=x;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&Cy()==125)continue}switch(S+=al(c),c*v){case 38:p=f>0?1:(S+="\f",-1);break;case 44:l[u++]=(xt(S)-1)*p,p=1;break;case 64:Pt()===45&&(S+=qa(Qe())),g=Pt(),f=d=xt(h=S+=jy(Za())),c++;break;case 45:x===45&&xt(S)==2&&(v=0)}}return a}function wd(e,t,n,r,i,a,o,l,s,u,f){for(var d=i-1,g=i===0?a:[""],y=Rc(g),x=0,v=0,b=0;x<r;++x)for(var p=0,c=Ii(e,d+1,d=yy(v=o[x])),h=e;p<y;++p)(h=Hh(v>0?g[p]+" "+c:W(c,/&\f/g,g[p])))&&(s[b++]=h);return ll(e,t,n,i===0?$c:l,s,u,f)}function Ny(e,t,n){return ll(e,t,n,Bh,al(by()),Ii(e,2,-2),0)}function kd(e,t,n,r){return ll(e,t,n,Ac,Ii(e,0,r),Ii(e,r+1,-1),r)}function xr(e,t){for(var n="",r=Rc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Ty(e,t,n,r){switch(e.type){case vy:if(e.children.length)break;case gy:case Ac:return e.return=e.return||e.value;case Bh:return"";case Wh:return e.return=e.value+"{"+xr(e.children,r)+"}";case $c:e.value=e.props.join(",")}return xt(n=xr(e.children,r))?e.return=e.value+"{"+n+"}":""}function $y(e){var t=Rc(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function Ay(e){return function(t){t.root||(t=t.return)&&e(t)}}var Ry=function(t,n,r){for(var i=0,a=0;i=a,a=Pt(),i===38&&a===12&&(n[r]=1),!Li(a);)Qe();return Ji(t,De)},Iy=function(t,n){var r=-1,i=44;do switch(Li(i)){case 0:i===38&&Pt()===12&&(n[r]=1),t[r]+=Ry(De-1,n,r);break;case 2:t[r]+=qa(i);break;case 4:if(i===44){t[++r]=Pt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=al(i)}while(i=Qe());return t},Ly=function(t,n){return Qh(Iy(Yh(t),n))},Sd=new WeakMap,zy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Sd.get(r))&&!i){Sd.set(t,!0);for(var a=[],o=Ly(n,a),l=r.props,s=0,u=0;s<o.length;s++)for(var f=0;f<l.length;f++,u++)t.props[u]=a[s]?o[s].replace(/&\f/g,l[f]):l[f]+" "+o[s]}}},My=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Gh(e,t){switch(wy(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+$o+e+Ee+e+e;case 6828:case 4268:return B+e+Ee+e+e;case 6165:return B+e+Ee+"flex-"+e+e;case 5187:return B+e+W(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+Ee+"flex-$1$2")+e;case 5443:return B+e+Ee+"flex-item-"+W(e,/flex-|-self/,"")+e;case 4675:return B+e+Ee+"flex-line-pack"+W(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+Ee+W(e,"shrink","negative")+e;case 5292:return B+e+Ee+W(e,"basis","preferred-size")+e;case 6060:return B+"box-"+W(e,"-grow","")+B+e+Ee+W(e,"grow","positive")+e;case 4554:return B+W(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+$o+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fu(e,"stretch")?Gh(W(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,xt(e)-3-(~fu(e,"!important")&&10))){case 107:return W(e,":",":"+B)+e;case 101:return W(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(we(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+Ee+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+Ee+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+Ee+e+e}return e}var Dy=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Ac:t.return=Gh(t.value,t.length);break;case Wh:return xr([Zr(t,{value:W(t.value,"@","@"+B)})],i);case $c:if(t.length)return Sy(t.props,function(a){switch(ky(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return xr([Zr(t,{props:[W(a,/:(read-\w+)/,":"+$o+"$1")]})],i);case"::placeholder":return xr([Zr(t,{props:[W(a,/:(plac\w+)/,":"+B+"input-$1")]}),Zr(t,{props:[W(a,/:(plac\w+)/,":"+$o+"$1")]}),Zr(t,{props:[W(a,/:(plac\w+)/,Ee+"input-$1")]})],i)}return""})}},Fy=[Dy],Uy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var b=v.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||Fy,a={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var b=v.getAttribute("data-emotion").split(" "),p=1;p<b.length;p++)a[b[p]]=!0;l.push(v)});var s,u=[zy,My];{var f,d=[Ty,Ay(function(v){f.insert(v)})],g=$y(u.concat(i,d)),y=function(b){return xr(Oy(b),g)};s=function(b,p,c,h){f=c,y(b?b+"{"+p.styles+"}":p.styles),h&&(x.inserted[p.name]=!0)}}var x={key:n,sheet:new hy({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:s};return x.sheet.hydrate(l),x},Kh={exports:{}},Y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=typeof Symbol=="function"&&Symbol.for,Ic=ye?Symbol.for("react.element"):60103,Lc=ye?Symbol.for("react.portal"):60106,sl=ye?Symbol.for("react.fragment"):60107,ul=ye?Symbol.for("react.strict_mode"):60108,cl=ye?Symbol.for("react.profiler"):60114,fl=ye?Symbol.for("react.provider"):60109,dl=ye?Symbol.for("react.context"):60110,zc=ye?Symbol.for("react.async_mode"):60111,pl=ye?Symbol.for("react.concurrent_mode"):60111,ml=ye?Symbol.for("react.forward_ref"):60112,hl=ye?Symbol.for("react.suspense"):60113,By=ye?Symbol.for("react.suspense_list"):60120,gl=ye?Symbol.for("react.memo"):60115,vl=ye?Symbol.for("react.lazy"):60116,Wy=ye?Symbol.for("react.block"):60121,Hy=ye?Symbol.for("react.fundamental"):60117,Vy=ye?Symbol.for("react.responder"):60118,Yy=ye?Symbol.for("react.scope"):60119;function Ze(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ic:switch(e=e.type,e){case zc:case pl:case sl:case cl:case ul:case hl:return e;default:switch(e=e&&e.$$typeof,e){case dl:case ml:case vl:case gl:case fl:return e;default:return t}}case Lc:return t}}}function Xh(e){return Ze(e)===pl}Y.AsyncMode=zc;Y.ConcurrentMode=pl;Y.ContextConsumer=dl;Y.ContextProvider=fl;Y.Element=Ic;Y.ForwardRef=ml;Y.Fragment=sl;Y.Lazy=vl;Y.Memo=gl;Y.Portal=Lc;Y.Profiler=cl;Y.StrictMode=ul;Y.Suspense=hl;Y.isAsyncMode=function(e){return Xh(e)||Ze(e)===zc};Y.isConcurrentMode=Xh;Y.isContextConsumer=function(e){return Ze(e)===dl};Y.isContextProvider=function(e){return Ze(e)===fl};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ic};Y.isForwardRef=function(e){return Ze(e)===ml};Y.isFragment=function(e){return Ze(e)===sl};Y.isLazy=function(e){return Ze(e)===vl};Y.isMemo=function(e){return Ze(e)===gl};Y.isPortal=function(e){return Ze(e)===Lc};Y.isProfiler=function(e){return Ze(e)===cl};Y.isStrictMode=function(e){return Ze(e)===ul};Y.isSuspense=function(e){return Ze(e)===hl};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===sl||e===pl||e===cl||e===ul||e===hl||e===By||typeof e=="object"&&e!==null&&(e.$$typeof===vl||e.$$typeof===gl||e.$$typeof===fl||e.$$typeof===dl||e.$$typeof===ml||e.$$typeof===Hy||e.$$typeof===Vy||e.$$typeof===Yy||e.$$typeof===Wy)};Y.typeOf=Ze;Kh.exports=Y;var Qy=Kh.exports,Zh=Qy,Gy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ky={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qh={};qh[Zh.ForwardRef]=Gy;qh[Zh.Memo]=Ky;var Xy=!0;function Zy(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var Jh=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Xy===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},qy=function(t,n,r){Jh(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+i:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function Jy(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var e0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},e2=/[A-Z]|^ms/g,t2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,t0=function(t){return t.charCodeAt(1)===45},bd=function(t){return t!=null&&typeof t!="boolean"},is=Uh(function(e){return t0(e)?e:e.replace(e2,"-$&").toLowerCase()}),Cd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(t2,function(r,i,a){return wt={name:i,styles:a,next:wt},i})}return e0[t]!==1&&!t0(t)&&typeof n=="number"&&n!==0?n+"px":n};function zi(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return wt={name:n.name,styles:n.styles,next:wt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)wt={name:r.name,styles:r.styles,next:wt},r=r.next;var i=n.styles+";";return i}return n2(e,t,n)}case"function":{if(e!==void 0){var a=wt,o=n(e);return wt=a,zi(e,t,o)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function n2(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=zi(e,t,n[i])+";";else for(var a in n){var o=n[a];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=a+"{"+t[o]+"}":bd(o)&&(r+=is(a)+":"+Cd(a,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)bd(o[l])&&(r+=is(a)+":"+Cd(a,o[l])+";");else{var s=zi(e,t,o);switch(a){case"animation":case"animationName":{r+=is(a)+":"+s+";";break}default:r+=a+"{"+s+"}"}}}return r}var Ed=/label:\s*([^\s;\n{]+)\s*(;|$)/g,wt,n0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,a="";wt=void 0;var o=t[0];o==null||o.raw===void 0?(i=!1,a+=zi(r,n,o)):a+=o[0];for(var l=1;l<t.length;l++)a+=zi(r,n,t[l]),i&&(a+=o[l]);Ed.lastIndex=0;for(var s="",u;(u=Ed.exec(a))!==null;)s+="-"+u[1];var f=Jy(a)+s;return{name:f,styles:a,next:wt}},r2=function(t){return t()},i2=gs["useInsertionEffect"]?gs["useInsertionEffect"]:!1,a2=i2||r2,r0=E.createContext(typeof HTMLElement<"u"?Uy({key:"css"}):null);r0.Provider;var o2=function(t){return E.forwardRef(function(n,r){var i=E.useContext(r0);return t(n,i,r)})},l2=E.createContext({});function s2(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return n0(t)}var Mc=function(){var t=s2.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},u2=dy,c2=function(t){return t!=="theme"},Pd=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?u2:c2},_d=function(t,n,r){var i;if(n){var a=n.shouldForwardProp;i=t.__emotion_forwardProp&&a?function(o){return t.__emotion_forwardProp(o)&&a(o)}:a}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},f2=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return Jh(n,r,i),a2(function(){return qy(n,r,i)}),null},d2=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var l=_d(t,n,r),s=l||Pd(i),u=!s("as");return function(){var f=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push("label:"+a+";"),f[0]==null||f[0].raw===void 0)d.push.apply(d,f);else{d.push(f[0][0]);for(var g=f.length,y=1;y<g;y++)d.push(f[y],f[0][y])}var x=o2(function(v,b,p){var c=u&&v.as||i,h="",w=[],k=v;if(v.theme==null){k={};for(var C in v)k[C]=v[C];k.theme=E.useContext(l2)}typeof v.className=="string"?h=Zy(b.registered,w,v.className):v.className!=null&&(h=v.className+" ");var S=n0(d.concat(w),b.registered,k);h+=b.key+"-"+S.name,o!==void 0&&(h+=" "+o);var $=u&&l===void 0?Pd(c):s,M={};for(var L in v)u&&L==="as"||$(L)&&(M[L]=v[L]);return M.className=h,M.ref=p,E.createElement(E.Fragment,null,E.createElement(f2,{cache:b,serialized:S,isStringTag:typeof c=="string"}),E.createElement(c,M))});return x.displayName=a!==void 0?a:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=d,x.__emotion_forwardProp=l,Object.defineProperty(x,"toString",{value:function(){return"."+o}}),x.withComponent=function(v,b){return e(v,cu({},n,b,{shouldForwardProp:_d(x,b,!0)})).apply(void 0,d)},x}},p2=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],D=d2.bind();p2.forEach(function(e){D[e]=D(e)});const m2=Mc`
  100% {
    transform: rotate(360deg);
  }
`,h2=Mc`
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
`,g2=Mc`
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
`,v2=D.div`
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
`,y2=D.svg`
  animation: ${m2} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`,x2=D.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${h2} 1.5s ease-in-out infinite, ${g2} 6s ease-in-out infinite;
  stroke-linecap: round;
`,w2=()=>m.jsx(v2,{children:m.jsx(y2,{viewBox:"25 25 50 50",children:m.jsx(x2,{cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})})});/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}var nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(nn||(nn={}));const jd="popstate";function k2(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return pu("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ao(i)}return b2(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function S2(){return Math.random().toString(36).substr(2,8)}function Od(e,t){return{usr:e.state,key:e.key,idx:t}}function pu(e,t,n,r){return n===void 0&&(n=null),Mi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Dr(t):t,{state:n,key:t&&t.key||r||S2()})}function Ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Dr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function b2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=nn.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(Mi({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){l=nn.Pop;let b=f(),p=b==null?null:b-u;u=b,s&&s({action:l,location:v.location,delta:p})}function g(b,p){l=nn.Push;let c=pu(v.location,b,p);n&&n(c,b),u=f()+1;let h=Od(c,u),w=v.createHref(c);try{o.pushState(h,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}a&&s&&s({action:l,location:v.location,delta:1})}function y(b,p){l=nn.Replace;let c=pu(v.location,b,p);n&&n(c,b),u=f();let h=Od(c,u),w=v.createHref(c);o.replaceState(h,"",w),a&&s&&s({action:l,location:v.location,delta:0})}function x(b){let p=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof b=="string"?b:Ao(b);return fe(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let v={get action(){return l},get location(){return e(i,o)},listen(b){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(jd,d),s=b,()=>{i.removeEventListener(jd,d),s=null}},createHref(b){return t(i,b)},createURL:x,encodeLocation(b){let p=x(b);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(b){return o.go(b)}};return v}var Nd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Nd||(Nd={}));function C2(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Dr(t):t,i=Fc(r.pathname||"/",n);if(i==null)return null;let a=i0(e);E2(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=R2(a[l],z2(i));return o}function i0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(fe(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=pn([r,s.relativePath]),f=n.concat(s);a.children&&a.children.length>0&&(fe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),i0(a.children,t,f,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:$2(u,a.index),routesMeta:f})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of a0(a.path))i(a,o,s)}),t}function a0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=a0(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function E2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:A2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const P2=/^:\w+$/,_2=3,j2=2,O2=1,N2=10,T2=-2,Td=e=>e==="*";function $2(e,t){let n=e.split("/"),r=n.length;return n.some(Td)&&(r+=T2),t&&(r+=j2),n.filter(i=>!Td(i)).reduce((i,a)=>i+(P2.test(a)?_2:a===""?O2:N2),r)}function A2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function R2(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=I2({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;a.push({params:r,pathname:pn([i,f.pathname]),pathnameBase:U2(pn([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=pn([i,f.pathnameBase]))}return a}function I2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=L2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let g=l[d]||"";o=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}return u[f]=M2(l[d]||"",f),u},{}),pathname:a,pathnameBase:o,pattern:e}}function L2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Dc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function z2(e){try{return decodeURI(e)}catch(t){return Dc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function M2(e,t){try{return decodeURIComponent(e)}catch(n){return Dc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Fc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function D2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Dr(e):e;return{pathname:n?n.startsWith("/")?n:F2(n,t):t,search:B2(r),hash:W2(i)}}function F2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function as(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function l0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Dr(e):(i=Mi({},e),fe(!i.pathname||!i.pathname.includes("?"),as("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),as("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),as("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}l=d>=0?t[d]:"/"}let s=D2(i,l),u=o&&o!=="/"&&o.endsWith("/"),f=(a||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),U2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,W2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function H2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const s0=["post","put","patch","delete"];new Set(s0);const V2=["get",...s0];new Set(V2);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}const Uc=E.createContext(null),u0=E.createContext(null),Gn=E.createContext(null),yl=E.createContext(null),Wt=E.createContext({outlet:null,matches:[],isDataRoute:!1}),c0=E.createContext(null);function Y2(e,t){let{relative:n}=t===void 0?{}:t;ea()||fe(!1);let{basename:r,navigator:i}=E.useContext(Gn),{hash:a,pathname:o,search:l}=Bc(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:pn([r,o])),i.createHref({pathname:s,search:l,hash:a})}function ea(){return E.useContext(yl)!=null}function ta(){return ea()||fe(!1),E.useContext(yl).location}function f0(e){E.useContext(Gn).static||E.useLayoutEffect(e)}function d0(){let{isDataRoute:e}=E.useContext(Wt);return e?lx():Q2()}function Q2(){ea()||fe(!1);let e=E.useContext(Uc),{basename:t,navigator:n}=E.useContext(Gn),{matches:r}=E.useContext(Wt),{pathname:i}=ta(),a=JSON.stringify(o0(r).map(s=>s.pathnameBase)),o=E.useRef(!1);return f0(()=>{o.current=!0}),E.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){n.go(s);return}let f=l0(s,JSON.parse(a),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:pn([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,a,i,e])}const G2=E.createContext(null);function K2(e){let t=E.useContext(Wt).outlet;return t&&E.createElement(G2.Provider,{value:e},t)}function p0(){let{matches:e}=E.useContext(Wt),t=e[e.length-1];return t?t.params:{}}function Bc(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext(Wt),{pathname:i}=ta(),a=JSON.stringify(o0(r).map(o=>o.pathnameBase));return E.useMemo(()=>l0(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function X2(e,t){return Z2(e,t)}function Z2(e,t,n){ea()||fe(!1);let{navigator:r}=E.useContext(Gn),{matches:i}=E.useContext(Wt),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=ta(),u;if(t){var f;let v=typeof t=="string"?Dr(t):t;l==="/"||(f=v.pathname)!=null&&f.startsWith(l)||fe(!1),u=v}else u=s;let d=u.pathname||"/",g=l==="/"?d:d.slice(l.length)||"/",y=C2(e,{pathname:g}),x=nx(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:pn([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:pn([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&x?E.createElement(yl.Provider,{value:{location:Ro({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:nn.Pop}},x):x}function q2(){let e=ox(),t=H2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,a)}const J2=E.createElement(q2,null);class ex extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(Wt.Provider,{value:this.props.routeContext},E.createElement(c0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tx(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Uc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Wt.Provider,{value:t},r)}function nx(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=a.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||fe(!1),a=a.slice(0,Math.min(a.length,l+1))}return a.reduceRight((l,s,u)=>{let f=s.route.id?o==null?void 0:o[s.route.id]:null,d=null;n&&(d=s.route.errorElement||J2);let g=t.concat(a.slice(0,u+1)),y=()=>{let x;return f?x=d:s.route.Component?x=E.createElement(s.route.Component,null):s.route.element?x=s.route.element:x=l,E.createElement(tx,{match:s,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:x})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?E.createElement(ex,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var mu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(mu||(mu={}));var Di;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Di||(Di={}));function rx(e){let t=E.useContext(Uc);return t||fe(!1),t}function ix(e){let t=E.useContext(u0);return t||fe(!1),t}function ax(e){let t=E.useContext(Wt);return t||fe(!1),t}function m0(e){let t=ax(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function ox(){var e;let t=E.useContext(c0),n=ix(Di.UseRouteError),r=m0(Di.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function lx(){let{router:e}=rx(mu.UseNavigateStable),t=m0(Di.UseNavigateStable),n=E.useRef(!1);return f0(()=>{n.current=!0}),E.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ro({fromRouteId:t},a)))},[e,t])}function h0(e){return K2(e.context)}function We(e){fe(!1)}function sx(e){let{basename:t="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:a,static:o=!1}=e;ea()&&fe(!1);let l=t.replace(/^\/*/,"/"),s=E.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof r=="string"&&(r=Dr(r));let{pathname:u="/",search:f="",hash:d="",state:g=null,key:y="default"}=r,x=E.useMemo(()=>{let v=Fc(u,l);return v==null?null:{location:{pathname:v,search:f,hash:d,state:g,key:y},navigationType:i}},[l,u,f,d,g,y,i]);return x==null?null:E.createElement(Gn.Provider,{value:s},E.createElement(yl.Provider,{children:n,value:x}))}function ux(e){let{children:t,location:n}=e;return X2(hu(t),n)}var $d;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})($d||($d={}));new Promise(()=>{});function hu(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let a=[...t,i];if(r.type===E.Fragment){n.push.apply(n,hu(r.props.children,a));return}r.type!==We&&fe(!1),!r.props.index||!r.props.children||fe(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=hu(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Io.apply(this,arguments)}function g0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function cx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fx(e,t){return e.button===0&&(!t||t==="_self")&&!cx(e)}const dx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],px=["aria-current","caseSensitive","className","end","style","to","children"],mx="startTransition",Ad=gs[mx];function hx(e){let{basename:t,children:n,future:r,window:i}=e,a=E.useRef();a.current==null&&(a.current=k2({window:i,v5Compat:!0}));let o=a.current,[l,s]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=E.useCallback(d=>{u&&Ad?Ad(()=>s(d)):s(d)},[s,u]);return E.useLayoutEffect(()=>o.listen(f),[o,f]),E.createElement(sx,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const gx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rt=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:f}=t,d=g0(t,dx),{basename:g}=E.useContext(Gn),y,x=!1;if(typeof u=="string"&&vx.test(u)&&(y=u,gx))try{let c=new URL(window.location.href),h=u.startsWith("//")?new URL(c.protocol+u):new URL(u),w=Fc(h.pathname,g);h.origin===c.origin&&w!=null?u=w+h.search+h.hash:x=!0}catch{}let v=Y2(u,{relative:i}),b=yx(u,{replace:o,state:l,target:s,preventScrollReset:f,relative:i});function p(c){r&&r(c),c.defaultPrevented||b(c)}return E.createElement("a",Io({},d,{href:y||v,onClick:x||a?r:p,ref:n,target:s}))}),Fr=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:s,children:u}=t,f=g0(t,px),d=Bc(s,{relative:f.relative}),g=ta(),y=E.useContext(u0),{navigator:x}=E.useContext(Gn),v=x.encodeLocation?x.encodeLocation(d).pathname:d.pathname,b=g.pathname,p=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(b=b.toLowerCase(),p=p?p.toLowerCase():null,v=v.toLowerCase());let c=b===v||!o&&b.startsWith(v)&&b.charAt(v.length)==="/",h=p!=null&&(p===v||!o&&p.startsWith(v)&&p.charAt(v.length)==="/"),w=c?r:void 0,k;typeof a=="function"?k=a({isActive:c,isPending:h}):k=[a,c?"active":null,h?"pending":null].filter(Boolean).join(" ");let C=typeof l=="function"?l({isActive:c,isPending:h}):l;return E.createElement(Rt,Io({},f,{"aria-current":w,className:k,ref:n,style:C,to:s}),typeof u=="function"?u({isActive:c,isPending:h}):u)});var Rd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Rd||(Rd={}));var Id;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Id||(Id={}));function yx(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,l=d0(),s=ta(),u=Bc(e,{relative:o});return E.useCallback(f=>{if(fx(f,n)){f.preventDefault();let d=r!==void 0?r:Ao(s)===Ao(u);l(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[s,l,u,r,i,n,e,a,o])}var Ie=function(){return Ie=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ie.apply(this,arguments)};function Lo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var K="-ms-",hi="-moz-",H="-webkit-",v0="comm",xl="rule",Wc="decl",xx="@import",y0="@keyframes",wx="@layer",kx=Math.abs,Hc=String.fromCharCode,gu=Object.assign;function Sx(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function x0(e){return e.trim()}function Ot(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,n){return e.replace(t,n)}function eo(e,t){return e.indexOf(t)}function ge(e,t){return e.charCodeAt(t)|0}function Or(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function w0(e){return e.length}function ii(e,t){return t.push(e),e}function bx(e,t){return e.map(t).join("")}function Ld(e,t){return e.filter(function(n){return!Ot(n,t)})}var wl=1,Nr=1,k0=0,lt=0,ue=0,Ur="";function kl(e,t,n,r,i,a,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:wl,column:Nr,length:o,return:"",siblings:l}}function Kt(e,t){return gu(kl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Xn(e){for(;e.root;)e=Kt(e.root,{children:[e]});ii(e,e.siblings)}function Cx(){return ue}function Ex(){return ue=lt>0?ge(Ur,--lt):0,Nr--,ue===10&&(Nr=1,wl--),ue}function ht(){return ue=lt<k0?ge(Ur,lt++):0,Nr++,ue===10&&(Nr=1,wl++),ue}function Ln(){return ge(Ur,lt)}function to(){return lt}function Sl(e,t){return Or(Ur,e,t)}function vu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Px(e){return wl=Nr=1,k0=kt(Ur=e),lt=0,[]}function _x(e){return Ur="",e}function os(e){return x0(Sl(lt-1,yu(e===91?e+2:e===40?e+1:e)))}function jx(e){for(;(ue=Ln())&&ue<33;)ht();return vu(e)>2||vu(ue)>3?"":" "}function Ox(e,t){for(;--t&&ht()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return Sl(e,to()+(t<6&&Ln()==32&&ht()==32))}function yu(e){for(;ht();)switch(ue){case e:return lt;case 34:case 39:e!==34&&e!==39&&yu(ue);break;case 40:e===41&&yu(e);break;case 92:ht();break}return lt}function Nx(e,t){for(;ht()&&e+ue!==47+10;)if(e+ue===42+42&&Ln()===47)break;return"/*"+Sl(t,lt-1)+"*"+Hc(e===47?e:ht())}function Tx(e){for(;!vu(Ln());)ht();return Sl(e,lt)}function $x(e){return _x(no("",null,null,null,[""],e=Px(e),0,[0],e))}function no(e,t,n,r,i,a,o,l,s){for(var u=0,f=0,d=o,g=0,y=0,x=0,v=1,b=1,p=1,c=0,h="",w=i,k=a,C=r,S=h;b;)switch(x=c,c=ht()){case 40:if(x!=108&&ge(S,d-1)==58){eo(S+=z(os(c),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=os(c);break;case 9:case 10:case 13:case 32:S+=jx(x);break;case 92:S+=Ox(to()-1,7);continue;case 47:switch(Ln()){case 42:case 47:ii(Ax(Nx(ht(),to()),t,n,s),s);break;default:S+="/"}break;case 123*v:l[u++]=kt(S)*p;case 125*v:case 59:case 0:switch(c){case 0:case 125:b=0;case 59+f:p==-1&&(S=z(S,/\f/g,"")),y>0&&kt(S)-d&&ii(y>32?Md(S+";",r,n,d-1,s):Md(z(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(ii(C=zd(S,t,n,u,f,i,l,h,w=[],k=[],d,a),a),c===123)if(f===0)no(S,t,C,C,w,a,d,l,k);else switch(g===99&&ge(S,3)===110?100:g){case 100:case 108:case 109:case 115:no(e,C,C,r&&ii(zd(e,C,C,0,0,i,l,h,i,w=[],d,k),k),i,k,d,l,r?w:k);break;default:no(S,C,C,C,[""],k,0,l,k)}}u=f=y=0,v=p=1,h=S="",d=o;break;case 58:d=1+kt(S),y=x;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&Ex()==125)continue}switch(S+=Hc(c),c*v){case 38:p=f>0?1:(S+="\f",-1);break;case 44:l[u++]=(kt(S)-1)*p,p=1;break;case 64:Ln()===45&&(S+=os(ht())),g=Ln(),f=d=kt(h=S+=Tx(to())),c++;break;case 45:x===45&&kt(S)==2&&(v=0)}}return a}function zd(e,t,n,r,i,a,o,l,s,u,f,d){for(var g=i-1,y=i===0?a:[""],x=w0(y),v=0,b=0,p=0;v<r;++v)for(var c=0,h=Or(e,g+1,g=kx(b=o[v])),w=e;c<x;++c)(w=x0(b>0?y[c]+" "+h:z(h,/&\f/g,y[c])))&&(s[p++]=w);return kl(e,t,n,i===0?xl:l,s,u,f,d)}function Ax(e,t,n,r){return kl(e,t,n,v0,Hc(Cx()),Or(e,2,-2),0,r)}function Md(e,t,n,r,i){return kl(e,t,n,Wc,Or(e,0,r),Or(e,r+1,-1),r,i)}function S0(e,t,n){switch(Sx(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return hi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+hi+e+K+e+e;case 5936:switch(ge(e,t+11)){case 114:return H+e+K+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+K+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+K+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+K+e+e;case 6165:return H+e+K+"flex-"+e+e;case 5187:return H+e+z(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return H+e+K+"flex-item-"+z(e,/flex-|-self/g,"")+(Ot(e,/flex-|baseline/)?"":K+"grid-row-"+z(e,/flex-|-self/g,""))+e;case 4675:return H+e+K+"flex-line-pack"+z(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+K+z(e,"shrink","negative")+e;case 5292:return H+e+K+z(e,"basis","preferred-size")+e;case 6060:return H+"box-"+z(e,"-grow","")+H+e+K+z(e,"grow","positive")+e;case 4554:return H+z(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!Ot(e,/flex-|baseline/))return K+"grid-column-align"+Or(e,t)+e;break;case 2592:case 3360:return K+z(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Ot(r.props,/grid-\w+-end/)})?~eo(e+(n=n[t].value),"span")?e:K+z(e,"-start","")+e+K+"grid-row-span:"+(~eo(n,"span")?Ot(n,/\d+/):+Ot(n,/\d+/)-+Ot(e,/\d+/))+";":K+z(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ot(r.props,/grid-\w+-start/)})?e:K+z(z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+hi+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~eo(e,"stretch")?S0(z(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,l,s,u){return K+i+":"+a+u+(o?K+i+"-span:"+(l?s:+s-+a)+u:"")+e});case 4949:if(ge(e,t+6)===121)return z(e,":",":"+H)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(ge(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+K+"$2box$3")+e;case 100:return z(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,"scroll-","scroll-snap-")+e}return e}function zo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Rx(e,t,n,r){switch(e.type){case wx:if(e.children.length)break;case xx:case Wc:return e.return=e.return||e.value;case v0:return"";case y0:return e.return=e.value+"{"+zo(e.children,r)+"}";case xl:if(!kt(e.value=e.props.join(",")))return""}return kt(n=zo(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ix(e){var t=w0(e);return function(n,r,i,a){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,a)||"";return o}}function Lx(e){return function(t){t.root||(t=t.return)&&e(t)}}function zx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Wc:e.return=S0(e.value,e.length,n);return;case y0:return zo([Kt(e,{value:z(e.value,"@","@"+H)})],r);case xl:if(e.length)return bx(n=e.props,function(i){switch(Ot(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xn(Kt(e,{props:[z(i,/:(read-\w+)/,":"+hi+"$1")]})),Xn(Kt(e,{props:[i]})),gu(e,{props:Ld(n,r)});break;case"::placeholder":Xn(Kt(e,{props:[z(i,/:(plac\w+)/,":"+H+"input-$1")]})),Xn(Kt(e,{props:[z(i,/:(plac\w+)/,":"+hi+"$1")]})),Xn(Kt(e,{props:[z(i,/:(plac\w+)/,K+"input-$1")]})),Xn(Kt(e,{props:[i]})),gu(e,{props:Ld(n,r)});break}return""})}}var Tr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Vc=typeof window<"u"&&"HTMLElement"in window,Mx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),bl=Object.freeze([]),$r=Object.freeze({});function Dx(e,t,n){return n===void 0&&(n=$r),e.theme!==n.theme&&e.theme||t||n.theme}var b0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Fx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ux=/(^-|-$)/g;function Dd(e){return e.replace(Fx,"-").replace(Ux,"")}var Bx=/(a)(d)/gi,Fd=function(e){return String.fromCharCode(e+(e>25?39:97))};function xu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Fd(t%52)+n;return(Fd(t%52)+n).replace(Bx,"$1-$2")}var ls,ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},C0=function(e){return ur(5381,e)};function Wx(e){return xu(C0(e)>>>0)}function Hx(e){return e.displayName||e.name||"Component"}function ss(e){return typeof e=="string"&&!0}var E0=typeof Symbol=="function"&&Symbol.for,P0=E0?Symbol.for("react.memo"):60115,Vx=E0?Symbol.for("react.forward_ref"):60112,Yx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gx=((ls={})[Vx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ls[P0]=_0,ls);function Ud(e){return("type"in(t=e)&&t.type.$$typeof)===P0?_0:"$$typeof"in e?Gx[e.$$typeof]:Yx;var t}var Kx=Object.defineProperty,Xx=Object.getOwnPropertyNames,Bd=Object.getOwnPropertySymbols,Zx=Object.getOwnPropertyDescriptor,qx=Object.getPrototypeOf,Wd=Object.prototype;function j0(e,t,n){if(typeof t!="string"){if(Wd){var r=qx(t);r&&r!==Wd&&j0(e,r,n)}var i=Xx(t);Bd&&(i=i.concat(Bd(t)));for(var a=Ud(e),o=Ud(t),l=0;l<i.length;++l){var s=i[l];if(!(s in Qx||n&&n[s]||o&&s in o||a&&s in a)){var u=Zx(t,s);try{Kx(e,s,u)}catch{}}}}return e}function Ar(e){return typeof e=="function"}function Yc(e){return typeof e=="object"&&"styledComponentId"in e}function Tn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Fi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function wu(e,t,n){if(n===void 0&&(n=!1),!n&&!Fi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=wu(e[r],t[r]);else if(Fi(t))for(var r in t)e[r]=wu(e[r],t[r]);return e}function Qc(e,t){Object.defineProperty(e,"toString",{value:t})}function na(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Jx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw na(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),s=(o=0,n.length);o<s;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),ro=new Map,Mo=new Map,us=1,Pa=function(e){if(ro.has(e))return ro.get(e);for(;Mo.has(us);)us++;var t=us++;return ro.set(e,t),Mo.set(t,e),t},ew=function(e,t){ro.set(e,t),Mo.set(t,e)},tw="style[".concat(Tr,"][").concat("data-styled-version",'="').concat("6.0.3",'"]'),nw=new RegExp("^".concat(Tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rw=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},iw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],a=0,o=r.length;a<o;a++){var l=r[a].trim();if(l){var s=l.match(nw);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(ew(f,u),rw(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function aw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var O0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Tr,"]")));return s[s.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Tr,"active"),r.setAttribute("data-styled-version","6.0.3");var o=aw();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},ow=function(){function e(t){this.element=O0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw na(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),lw=function(){function e(t){this.element=O0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),sw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vd=Vc,uw={isServer:!Vc,useCSSOMInjection:!Mx},N0=function(){function e(t,n,r){t===void 0&&(t=$r),n===void 0&&(n={});var i=this;this.options=Ie(Ie({},uw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Vc&&Vd&&(Vd=!1,function(a){for(var o=document.querySelectorAll(tw),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute(Tr)!=="active"&&(iw(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Qc(this,function(){return function(a){for(var o=a.getTag(),l=o.length,s="",u=function(d){var g=function(p){return Mo.get(p)}(d);if(g===void 0)return"continue";var y=a.names.get(g),x=o.getGroup(d);if(y===void 0||x.length===0)return"continue";var v="".concat(Tr,".g").concat(d,'[id="').concat(g,'"]'),b="";y!==void 0&&y.forEach(function(p){p.length>0&&(b+="".concat(p,","))}),s+="".concat(x).concat(v,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},f=0;f<l;f++)u(f);return s}(i)})}return e.registerId=function(t){return Pa(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ie(Ie({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new sw(i):r?new ow(i):new lw(i)}(this.options),new Jx(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Pa(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Pa(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Pa(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),cw=/&/g,fw=/^\s*\/\/.*$/gm;function T0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=T0(n.children,t)),n})}function dw(e){var t,n,r,i=e===void 0?$r:e,a=i.options,o=a===void 0?$r:a,l=i.plugins,s=l===void 0?bl:l,u=function(g,y,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},f=s.slice();f.push(function(g){g.type===xl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(cw,n).replace(r,u))}),o.prefix&&f.push(zx),f.push(Rx);var d=function(g,y,x,v){y===void 0&&(y=""),x===void 0&&(x=""),v===void 0&&(v="&"),t=v,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var b=g.replace(fw,""),p=$x(x||y?"".concat(x," ").concat(y," { ").concat(b," }"):b);o.namespace&&(p=T0(p,o.namespace));var c=[];return zo(p,Ix(f.concat(Lx(function(h){return c.push(h)})))),c};return d.hash=s.length?s.reduce(function(g,y){return y.name||na(15),ur(g,y.name)},5381).toString():"",d}var pw=new N0,ku=dw(),$0=Oe.createContext({shouldForwardProp:void 0,styleSheet:pw,stylis:ku});$0.Consumer;Oe.createContext(void 0);function Yd(){return E.useContext($0)}var mw=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=ku);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Qc(this,function(){throw na(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ku),this.name+t.hash},e}(),hw=function(e){return e>="A"&&e<="Z"};function Qd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;hw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var A0=function(e){return e==null||e===!1||e===""},R0=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!A0(a)&&(Array.isArray(a)&&a.isCss||Ar(a)?r.push("".concat(Qd(i),":"),a,";"):Fi(a)?r.push.apply(r,Lo(Lo(["".concat(i," {")],R0(a),!1),["}"],!1)):r.push("".concat(Qd(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in e0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zn(e,t,n,r){if(A0(e))return[];if(Yc(e))return[".".concat(e.styledComponentId)];if(Ar(e)){if(!Ar(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return zn(i,t,n,r)}var a;return e instanceof mw?n?(e.inject(n,r),[e.getName(r)]):[e]:Fi(e)?R0(e):Array.isArray(e)?Array.prototype.concat.apply(bl,e.map(function(o){return zn(o,t,n,r)})):[e.toString()]}function gw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ar(n)&&!Yc(n))return!1}return!0}var vw=C0("6.0.3"),yw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gw(t),this.componentId=n,this.baseHash=ur(vw,n),this.baseStyle=r,N0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Tn(i,this.staticRulesId);else{var a=Hd(zn(this.rules,t,n,r)),o=xu(ur(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Tn(i,o),this.staticRulesId=o}else{for(var s=ur(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")u+=d;else if(d){var g=Hd(zn(d,t,n,r));s=ur(s,g),u+=g}}if(u){var y=xu(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=Tn(i,y)}}return i},e}(),I0=Oe.createContext(void 0);I0.Consumer;var cs={};function xw(e,t,n){var r=Yc(e),i=e,a=!ss(e),o=t.attrs,l=o===void 0?bl:o,s=t.componentId,u=s===void 0?function(h,w){var k=typeof h!="string"?"sc":Dd(h);cs[k]=(cs[k]||0)+1;var C="".concat(k,"-").concat(Wx("6.0.3"+k+cs[k]));return w?"".concat(w,"-").concat(C):C}(t.displayName,t.parentComponentId):s,f=t.displayName;f===void 0&&function(h){return ss(h)?"styled.".concat(h):"Styled(".concat(Hx(h),")")}(e);var d=t.displayName&&t.componentId?"".concat(Dd(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;y=function(h,w){return x(h,w)&&v(h,w)}}else y=x}var b=new yw(n,d,r?i.componentStyle:void 0);function p(h,w){return function(k,C,S){var $=k.attrs,M=k.componentStyle,L=k.defaultProps,Fe=k.foldedComponentIds,bn=k.styledComponentId,Cn=k.target,oa=Oe.useContext(I0),Nl=Yd(),En=k.shouldForwardProp||Nl.shouldForwardProp,Je=function(_t,Ue,Vt){for(var Be,et=Ie(Ie({},Ue),{className:void 0,theme:Vt}),Tl=0;Tl<_t.length;Tl+=1){var la=Ar(Be=_t[Tl])?Be(et):Be;for(var Yt in la)et[Yt]=Yt==="className"?Tn(et[Yt],la[Yt]):Yt==="style"?Ie(Ie({},et[Yt]),la[Yt]):la[Yt]}return Ue.className&&(et.className=Tn(et.className,Ue.className)),et}($,C,Dx(C,oa,L)||$r),_=Je.as||Cn,R={};for(var I in Je)Je[I]===void 0||I[0]==="$"||I==="as"||I==="theme"||(I==="forwardedAs"?R.as=Je.forwardedAs:En&&!En(I,_)||(R[I]=Je[I]));var J=function(_t,Ue){var Vt=Yd(),Be=_t.generateAndInjectStyles(Ue,Vt.styleSheet,Vt.stylis);return Be}(M,Je),ie=Tn(Fe,bn);return J&&(ie+=" "+J),Je.className&&(ie+=" "+Je.className),R[ss(_)&&!b0.has(_)?"class":"className"]=ie,R.ref=S,E.createElement(_,R)}(c,h,w)}var c=Oe.forwardRef(p);return c.attrs=g,c.componentStyle=b,c.shouldForwardProp=y,c.foldedComponentIds=r?Tn(i.foldedComponentIds,i.styledComponentId):"",c.styledComponentId=d,c.target=r?i.target:e,Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?function(w){for(var k=[],C=1;C<arguments.length;C++)k[C-1]=arguments[C];for(var S=0,$=k;S<$.length;S++)wu(w,$[S],!0);return w}({},i.defaultProps,h):h}}),Qc(c,function(){return".".concat(c.styledComponentId)}),a&&j0(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),c}function Gd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Kd=function(e){return Object.assign(e,{isCss:!0})};function ww(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ar(e)||Fi(e)){var r=e;return Kd(zn(Gd(bl,Lo([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?zn(i):Kd(zn(Gd(i,t)))}function Su(e,t,n){if(n===void 0&&(n=$r),!t)throw na(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,ww.apply(void 0,Lo([i],a,!1)))};return r.attrs=function(i){return Su(e,t,Ie(Ie({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Su(e,t,Ie(Ie({},n),i))},r}var L0=function(e){return Su(xw,e)},O=L0;b0.forEach(function(e){O[e]=L0(e)});const kw=O.div`
  /* max-width: 960px; */
  margin: 0 auto;
  padding: 0;
  position:relative;
`,Sw=O.header`
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
`,bw=O.p`
  font-weight: 700;
  margin: 0;
  color: var(--mainColor);
  padding: 2px 4px;
  display: flex;
align-items: center;
&:hover{
  color: var(--accentColor);
}
`,Cw=O(Fr)`
 text-decoration: none;
 color: inherit;
`,qr=O(Fr)`
  padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #3b3937;
  font-weight: 500;
  margin-left: 20px;
position: relative;
  &.active {
    color: white;
    background-color: #ff4d4d;
  }
`;O.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  z-index: 1000;
`;O.header`

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
`;var z0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bu=Oe.createContext&&Oe.createContext(z0),mn=globalThis&&globalThis.__assign||function(){return mn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mn.apply(this,arguments)},Ew=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function M0(e){return e&&e.map(function(t,n){return Oe.createElement(t.tag,mn({key:n},t.attr),M0(t.child))})}function Cl(e){return function(t){return Oe.createElement(Pw,mn({attr:mn({},e.attr)},t),M0(e.child))}}function Pw(e){var t=function(n){var r=e.attr,i=e.size,a=e.title,o=Ew(e,["attr","size","title"]),l=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Oe.createElement("svg",mn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:s,style:mn(mn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&Oe.createElement("title",null,a),e.children)};return bu!==void 0?Oe.createElement(bu.Consumer,null,function(n){return t(n)}):t(z0)}function _w(e){return Cl({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M238.75 138.492l18.147-18.829c.898-21.472 9.107-59.37 26.166-60.771 6.994.097 14.566 5.833 15.742 16.021 3.25 28.145-11.833 40.563-29.072 57.372l-31.408 32.586-.037-.038c-28.467 31.447-65.355 70.37-69.772 106.973-5.588 53.77 31.264 108.42 87.149 105.693l-3.178-18.066c-37.522-4.905-69.771-43.77-56.711-81.312 23.275-60.413 75.664-92.822 116.333-148.022 11.474-15.574 14.575-46.945 11.815-63.128-2.76-16.184-14.345-43.066-32.059-45.017-34.714-4.59-60.724 62.476-53.114 116.538zm25.667 75.896l-15.508 15.248c.542 2.775 1.166 6.185 2.088 12.14-34.017 21.505-36.576 66.707-12.186 90.96 5.177 5.31 15.165-2.767 10.104-8.674-10.971-19.786-12.097-44.028 5.742-57.137 8.78 50.539 24.627 117.16 30.164 170.895.364 3.535-6.593 10.614-9.973 11.396 0-22.091-17.908-40-40-40-22.09 0-40 17.909-40 40 .017 20.193 15.266 36.007 35.123 39.668 42.008 7.745 78.659-17.935 72.76-53.16-8.793-59.062-21.986-121.007-30.857-175.32 12.066-1.253 28.875 5.169 36.428 12.847 8.575 9.297 12.95 22.35 11.982 32.787-.924 9.96-7.425 20.992-17.06 30.381l3.662 20.776c17.346-12.583 35.117-30.185 36.94-49.844 1.518-16.352-5.01-40.324-18.08-52.273-16.885-15.437-38.313-18.553-57.349-16.612-2.004-13.065-3.018-18.039-3.98-24.078z"}}]})(e)}function Xd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xd(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Do(e){"@babel/helpers - typeof";return Do=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Do(e)}function jw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ow(e,t,n){return t&&Zd(e.prototype,t),n&&Zd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gc(e,t){return Tw(e)||Aw(e,t)||D0(e,t)||Iw()}function ra(e){return Nw(e)||$w(e)||D0(e)||Rw()}function Nw(e){if(Array.isArray(e))return Cu(e)}function Tw(e){if(Array.isArray(e))return e}function $w(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Aw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(s){a=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function D0(e,t){if(e){if(typeof e=="string")return Cu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cu(e,t)}}function Cu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Rw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qd=function(){},Kc={},F0={},U0=null,B0={mark:qd,measure:qd};try{typeof window<"u"&&(Kc=window),typeof document<"u"&&(F0=document),typeof MutationObserver<"u"&&(U0=MutationObserver),typeof performance<"u"&&(B0=performance)}catch{}var Lw=Kc.navigator||{},Jd=Lw.userAgent,ep=Jd===void 0?"":Jd,vn=Kc,q=F0,tp=U0,_a=B0;vn.document;var Ht=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",W0=~ep.indexOf("MSIE")||~ep.indexOf("Trident/"),ja,Oa,Na,Ta,$a,Dt="___FONT_AWESOME___",Eu=16,H0="fa",V0="svg-inline--fa",Hn="data-fa-i2svg",Pu="data-fa-pseudo-element",zw="data-fa-pseudo-element-pending",Xc="data-prefix",Zc="data-icon",np="fontawesome-i2svg",Mw="async",Dw=["HTML","HEAD","STYLE","SCRIPT"],Y0=function(){try{return!0}catch{return!1}}(),X="classic",oe="sharp",qc=[X,oe];function ia(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Ui=ia((ja={},me(ja,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),me(ja,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ja)),Bi=ia((Oa={},me(Oa,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),me(Oa,oe,{solid:"fass",regular:"fasr",light:"fasl"}),Oa)),Wi=ia((Na={},me(Na,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),me(Na,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Na)),Fw=ia((Ta={},me(Ta,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),me(Ta,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ta)),Uw=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Q0="fa-layers-text",Bw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ww=ia(($a={},me($a,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),me($a,oe,{900:"fass",400:"fasr",300:"fasl"}),$a)),G0=[1,2,3,4,5,6,7,8,9,10],Hw=G0.concat([11,12,13,14,15,16,17,18,19,20]),Vw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$n={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hi=new Set;Object.keys(Bi[X]).map(Hi.add.bind(Hi));Object.keys(Bi[oe]).map(Hi.add.bind(Hi));var Yw=[].concat(qc,ra(Hi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$n.GROUP,$n.SWAP_OPACITY,$n.PRIMARY,$n.SECONDARY]).concat(G0.map(function(e){return"".concat(e,"x")})).concat(Hw.map(function(e){return"w-".concat(e)})),gi=vn.FontAwesomeConfig||{};function Qw(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Gw(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var Kw=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kw.forEach(function(e){var t=Gc(e,2),n=t[0],r=t[1],i=Gw(Qw(n));i!=null&&(gi[r]=i)})}var K0={styleDefault:"solid",familyDefault:"classic",cssPrefix:H0,replacementClass:V0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gi.familyPrefix&&(gi.cssPrefix=gi.familyPrefix);var Rr=N(N({},K0),gi);Rr.autoReplaceSvg||(Rr.observeMutations=!1);var A={};Object.keys(K0).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(n){Rr[e]=n,vi.forEach(function(r){return r(A)})},get:function(){return Rr[e]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(t){Rr.cssPrefix=t,vi.forEach(function(n){return n(A)})},get:function(){return Rr.cssPrefix}});vn.FontAwesomeConfig=A;var vi=[];function Xw(e){return vi.push(e),function(){vi.splice(vi.indexOf(e),1)}}var Gt=Eu,bt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zw(e){if(!(!e||!Ht)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return q.head.insertBefore(t,r),e}}var qw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vi(){for(var e=12,t="";e-- >0;)t+=qw[Math.random()*62|0];return t}function Br(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Jc(e){return e.classList?Br(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function X0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jw(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(X0(e[n]),'" ')},"").trim()}function El(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ef(e){return e.size!==bt.size||e.x!==bt.x||e.y!==bt.y||e.rotate!==bt.rotate||e.flipX||e.flipY}function ek(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(a," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function tk(e){var t=e.transform,n=e.width,r=n===void 0?Eu:n,i=e.height,a=i===void 0?Eu:i,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&W0?s+="translate(".concat(t.x/Gt-r/2,"em, ").concat(t.y/Gt-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/Gt,"em), calc(-50% + ").concat(t.y/Gt,"em)) "):s+="translate(".concat(t.x/Gt,"em, ").concat(t.y/Gt,"em) "),s+="scale(".concat(t.size/Gt*(t.flipX?-1:1),", ").concat(t.size/Gt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var nk=`:root, :host {
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
}`;function Z0(){var e=H0,t=V0,n=A.cssPrefix,r=A.replacementClass,i=nk;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var rp=!1;function fs(){A.autoAddCss&&!rp&&(Zw(Z0()),rp=!0)}var rk={mixout:function(){return{dom:{css:Z0,insertCss:fs}}},hooks:function(){return{beforeDOMElementCreation:function(){fs()},beforeI2svg:function(){fs()}}}},Ft=vn||{};Ft[Dt]||(Ft[Dt]={});Ft[Dt].styles||(Ft[Dt].styles={});Ft[Dt].hooks||(Ft[Dt].hooks={});Ft[Dt].shims||(Ft[Dt].shims=[]);var dt=Ft[Dt],q0=[],ik=function e(){q.removeEventListener("DOMContentLoaded",e),Fo=1,q0.map(function(t){return t()})},Fo=!1;Ht&&(Fo=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Fo||q.addEventListener("DOMContentLoaded",ik));function ak(e){Ht&&(Fo?setTimeout(e,0):q0.push(e))}function aa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?X0(e):"<".concat(t," ").concat(Jw(r),">").concat(a.map(aa).join(""),"</").concat(t,">")}function ip(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ok=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},ds=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=i!==void 0?ok(n,i):n,s,u,f;for(r===void 0?(s=1,f=t[a[0]]):(s=0,f=r);s<o;s++)u=a[s],f=l(f,t[u],u,t);return f};function lk(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function _u(e){var t=lk(e);return t.length===1?t[0].toString(16):null}function sk(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ap(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function ju(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=ap(t);typeof dt.hooks.addPack=="function"&&!i?dt.hooks.addPack(e,ap(t)):dt.styles[e]=N(N({},dt.styles[e]||{}),a),e==="fas"&&ju("fa",t)}var Aa,Ra,Ia,cr=dt.styles,uk=dt.shims,ck=(Aa={},me(Aa,X,Object.values(Wi[X])),me(Aa,oe,Object.values(Wi[oe])),Aa),tf=null,J0={},e1={},t1={},n1={},r1={},fk=(Ra={},me(Ra,X,Object.keys(Ui[X])),me(Ra,oe,Object.keys(Ui[oe])),Ra);function dk(e){return~Yw.indexOf(e)}function pk(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!dk(i)?i:null}var i1=function(){var t=function(a){return ds(cr,function(o,l,s){return o[s]=ds(l,a,{}),o},{})};J0=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=o})}return i}),e1=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=o})}return i}),r1=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(s){i[s]=o}),i});var n="far"in cr||A.autoFetchSvg,r=ds(uk,function(i,a){var o=a[0],l=a[1],s=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});t1=r.names,n1=r.unicodes,tf=Pl(A.styleDefault,{family:A.familyDefault})};Xw(function(e){tf=Pl(e.styleDefault,{family:A.familyDefault})});i1();function nf(e,t){return(J0[e]||{})[t]}function mk(e,t){return(e1[e]||{})[t]}function An(e,t){return(r1[e]||{})[t]}function a1(e){return t1[e]||{prefix:null,iconName:null}}function hk(e){var t=n1[e],n=nf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yn(){return tf}var rf=function(){return{prefix:null,iconName:null,rest:[]}};function Pl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,i=Ui[r][e],a=Bi[r][e]||Bi[r][i],o=e in dt.styles?e:null;return a||o||null}var op=(Ia={},me(Ia,X,Object.keys(Wi[X])),me(Ia,oe,Object.keys(Wi[oe])),Ia);function _l(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},me(t,X,"".concat(A.cssPrefix,"-").concat(X)),me(t,oe,"".concat(A.cssPrefix,"-").concat(oe)),t),o=null,l=X;(e.includes(a[X])||e.some(function(u){return op[X].includes(u)}))&&(l=X),(e.includes(a[oe])||e.some(function(u){return op[oe].includes(u)}))&&(l=oe);var s=e.reduce(function(u,f){var d=pk(A.cssPrefix,f);if(cr[f]?(f=ck[l].includes(f)?Fw[l][f]:f,o=f,u.prefix=f):fk[l].indexOf(f)>-1?(o=f,u.prefix=Pl(f,{family:l})):d?u.iconName=d:f!==A.replacementClass&&f!==a[X]&&f!==a[oe]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var g=o==="fa"?a1(u.iconName):{},y=An(u.prefix,u.iconName);g.prefix&&(o=null),u.iconName=g.iconName||y||u.iconName,u.prefix=g.prefix||u.prefix,u.prefix==="far"&&!cr.far&&cr.fas&&!A.autoFetchSvg&&(u.prefix="fas")}return u},rf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===oe&&(cr.fass||A.autoFetchSvg)&&(s.prefix="fass",s.iconName=An(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=yn()||"fas"),s}var gk=function(){function e(){jw(this,e),this.definitions={}}return Ow(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=N(N({},n.definitions[l]||{}),o[l]),ju(l,o[l]);var s=Wi[X][l];s&&ju(s,o[l]),i1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),lp=[],fr={},wr={},vk=Object.keys(wr);function yk(e,t){var n=t.mixoutsTo;return lp=e,fr={},Object.keys(wr).forEach(function(r){vk.indexOf(r)===-1&&delete wr[r]}),lp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Do(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){fr[o]||(fr[o]=[]),fr[o].push(a[o])})}r.provides&&r.provides(wr)}),n}function Ou(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=fr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Vn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=fr[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ut(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wr[e]?wr[e].apply(null,t):void 0}function Nu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||yn();if(t)return t=An(n,t)||t,ip(o1.definitions,n,t)||ip(dt.styles,n,t)}var o1=new gk,xk=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,Vn("noAuto")},wk={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ht?(Vn("beforeI2svg",t),Ut("pseudoElements2svg",t),Ut("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,ak(function(){Sk({autoReplaceSvgRoot:n}),Vn("watch",t)})}},kk={icon:function(t){if(t===null)return null;if(Do(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:An(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Pl(t[0]);return{prefix:r,iconName:An(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(A.cssPrefix,"-"))>-1||t.match(Uw))){var i=_l(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||yn(),iconName:An(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=yn();return{prefix:a,iconName:An(a,t)||t}}}},qe={noAuto:xk,config:A,dom:wk,parse:kk,library:o1,findIconDefinition:Nu,toHtml:aa},Sk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(dt.styles).length>0||A.autoFetchSvg)&&Ht&&A.autoReplaceSvg&&qe.dom.i2svg({node:r})};function jl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return aa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ht){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function bk(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(ef(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=El(N(N({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Ck(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(A.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},i),{},{id:o}),children:r}]}]}function af(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,d=e.extra,g=e.watchable,y=g===void 0?!1:g,x=r.found?r:n,v=x.width,b=x.height,p=i==="fak",c=[A.replacementClass,a?"".concat(A.cssPrefix,"-").concat(a):""].filter(function(M){return d.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(d.classes).join(" "),h={children:[],attributes:N(N({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:c,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(b)})},w=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/b*16*.0625,"em")}:{};y&&(h.attributes[Hn]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(f||Vi())},children:[s]}),delete h.attributes.title);var k=N(N({},h),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:N(N({},w),d.styles)}),C=r.found&&n.found?Ut("generateAbstractMask",k)||{children:[],attributes:{}}:Ut("generateAbstractIcon",k)||{children:[],attributes:{}},S=C.children,$=C.attributes;return k.children=S,k.attributes=$,l?Ck(k):bk(k)}function sp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=N(N(N({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(u[Hn]="");var f=N({},o.styles);ef(i)&&(f.transform=tk({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=El(f);d.length>0&&(u.style=d);var g=[];return g.push({tag:"span",attributes:u,children:[t]}),a&&g.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),g}function Ek(e){var t=e.content,n=e.title,r=e.extra,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=El(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ps=dt.styles;function Tu(e){var t=e[0],n=e[1],r=e.slice(4),i=Gc(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat($n.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat($n.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat($n.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Pk={found:!1,width:512,height:512};function _k(e,t){!Y0&&!A.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $u(e,t){var n=t;return t==="fa"&&A.styleDefault!==null&&(t=yn()),new Promise(function(r,i){if(Ut("missingIconAbstract"),n==="fa"){var a=a1(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ps[t]&&ps[t][e]){var o=ps[t][e];return r(Tu(o))}_k(e,t),r(N(N({},Pk),{},{icon:A.showMissingIcons&&e?Ut("missingIconAbstract")||{}:{}}))})}var up=function(){},Au=A.measurePerformance&&_a&&_a.mark&&_a.measure?_a:{mark:up,measure:up},ai='FA "6.4.0"',jk=function(t){return Au.mark("".concat(ai," ").concat(t," begins")),function(){return l1(t)}},l1=function(t){Au.mark("".concat(ai," ").concat(t," ends")),Au.measure("".concat(ai," ").concat(t),"".concat(ai," ").concat(t," begins"),"".concat(ai," ").concat(t," ends"))},of={begin:jk,end:l1},io=function(){};function cp(e){var t=e.getAttribute?e.getAttribute(Hn):null;return typeof t=="string"}function Ok(e){var t=e.getAttribute?e.getAttribute(Xc):null,n=e.getAttribute?e.getAttribute(Zc):null;return t&&n}function Nk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function Tk(){if(A.autoReplaceSvg===!0)return ao.replace;var e=ao[A.autoReplaceSvg];return e||ao.replace}function $k(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Ak(e){return q.createElement(e)}function s1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?$k:Ak:n;if(typeof e=="string")return q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(s1(o,{ceFn:r}))}),i}function Rk(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ao={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(s1(i),n)}),n.getAttribute(Hn)===null&&A.keepOriginalSource){var r=q.createComment(Rk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Jc(n).indexOf(A.replacementClass))return ao.replace(t);var i=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,s){return s===A.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return aa(l)}).join(`
`);n.setAttribute(Hn,""),n.innerHTML=o}};function fp(e){e()}function u1(e,t){var n=typeof t=="function"?t:io;if(e.length===0)n();else{var r=fp;A.mutateApproach===Mw&&(r=vn.requestAnimationFrame||fp),r(function(){var i=Tk(),a=of.begin("mutate");e.map(i),a(),n()})}}var lf=!1;function c1(){lf=!0}function Ru(){lf=!1}var Uo=null;function dp(e){if(tp&&A.observeMutations){var t=e.treeCallback,n=t===void 0?io:t,r=e.nodeCallback,i=r===void 0?io:r,a=e.pseudoElementsCallback,o=a===void 0?io:a,l=e.observeMutationsRoot,s=l===void 0?q:l;Uo=new tp(function(u){if(!lf){var f=yn();Br(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!cp(d.addedNodes[0])&&(A.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&A.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&cp(d.target)&&~Vw.indexOf(d.attributeName))if(d.attributeName==="class"&&Ok(d.target)){var g=_l(Jc(d.target)),y=g.prefix,x=g.iconName;d.target.setAttribute(Xc,y||f),x&&d.target.setAttribute(Zc,x)}else Nk(d.target)&&i(d.target)})}}),Ht&&Uo.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ik(){Uo&&Uo.disconnect()}function Lk(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function zk(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=_l(Jc(e));return i.prefix||(i.prefix=yn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=mk(i.prefix,e.innerText)||nf(i.prefix,_u(e.innerText))),!i.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Mk(e){var t=Br(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return A.autoA11y&&(n?t["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||Vi()):(t["aria-hidden"]="true",t.focusable="false")),t}function Dk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zk(e),r=n.iconName,i=n.prefix,a=n.rest,o=Mk(e),l=Ou("parseNodeAttributes",{},e),s=t.styleParser?Lk(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:bt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},l)}var Fk=dt.styles;function f1(e){var t=A.autoReplaceSvg==="nest"?pp(e,{styleParser:!1}):pp(e);return~t.extra.classes.indexOf(Q0)?Ut("generateLayersText",e,t):Ut("generateSvgReplacementMutation",e,t)}var xn=new Set;qc.map(function(e){xn.add("fa-".concat(e))});Object.keys(Ui[X]).map(xn.add.bind(xn));Object.keys(Ui[oe]).map(xn.add.bind(xn));xn=ra(xn);function mp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ht)return Promise.resolve();var n=q.documentElement.classList,r=function(d){return n.add("".concat(np,"-").concat(d))},i=function(d){return n.remove("".concat(np,"-").concat(d))},a=A.autoFetchSvg?xn:qc.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Fk));a.includes("fa")||a.push("fa");var o=[".".concat(Q0,":not([").concat(Hn,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(Hn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Br(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=of.begin("onTree"),u=l.reduce(function(f,d){try{var g=f1(d);g&&f.push(g)}catch(y){Y0||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(g){u1(g,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(g){s(),d(g)})})}function Uk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;f1(e).then(function(n){n&&u1([n],t)})}function Bk(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Nu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Nu(i||{})),e(r,N(N({},n),{},{mask:i}))}}var Wk=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?bt:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,g=d===void 0?null:d,y=n.titleId,x=y===void 0?null:y,v=n.classes,b=v===void 0?[]:v,p=n.attributes,c=p===void 0?{}:p,h=n.styles,w=h===void 0?{}:h;if(t){var k=t.prefix,C=t.iconName,S=t.icon;return jl(N({type:"icon"},t),function(){return Vn("beforeDOMElementCreation",{iconDefinition:t,params:n}),A.autoA11y&&(g?c["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(x||Vi()):(c["aria-hidden"]="true",c.focusable="false")),af({icons:{main:Tu(S),mask:s?Tu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:N(N({},bt),i),symbol:o,title:g,maskId:f,titleId:x,extra:{attributes:c,styles:w,classes:b}})})}},Hk={mixout:function(){return{icon:Bk(Wk)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=mp,n.nodeCallback=Uk,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?q:r,a=n.callback,o=a===void 0?function(){}:a;return mp(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,d=r.maskId,g=r.extra;return new Promise(function(y,x){Promise.all([$u(i,l),f.iconName?$u(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var b=Gc(v,2),p=b[0],c=b[1];y([n,af({icons:{main:p,mask:c},prefix:l,iconName:i,transform:s,symbol:u,maskId:d,title:a,titleId:o,extra:g,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,s=El(l);s.length>0&&(i.style=s);var u;return ef(o)&&(u=Ut("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Vk={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return jl({type:"layer"},function(){Vn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(ra(a)).join(" ")},children:o}]})}}}},Yk={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return jl({type:"counter",content:n},function(){return Vn("beforeDOMElementCreation",{content:n,params:r}),Ek({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(ra(l))}})})}}}},Qk={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?bt:i,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,g=r.styles,y=g===void 0?{}:g;return jl({type:"text",content:n},function(){return Vn("beforeDOMElementCreation",{content:n,params:r}),sp({content:n,transform:N(N({},bt),a),title:l,extra:{attributes:d,styles:y,classes:["".concat(A.cssPrefix,"-layers-text")].concat(ra(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,s=null;if(W0){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return A.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,sp({content:n.innerHTML,width:l,height:s,transform:a,title:i,extra:o,watchable:!0})])}}},Gk=new RegExp('"',"ug"),hp=[1105920,1112319];function Kk(e){var t=e.replace(Gk,""),n=sk(t,0),r=n>=hp[0]&&n<=hp[1],i=t.length===2?t[0]===t[1]:!1;return{value:_u(i?t[0]:t),isSecondary:r||i}}function gp(e,t){var n="".concat(zw).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Br(e.children),o=a.filter(function(S){return S.getAttribute(Pu)===t})[0],l=vn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(Bw),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),g=~["Sharp"].indexOf(s[2])?oe:X,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Bi[g][s[2].toLowerCase()]:Ww[g][u],x=Kk(d),v=x.value,b=x.isSecondary,p=s[0].startsWith("FontAwesome"),c=nf(y,v),h=c;if(p){var w=hk(v);w.iconName&&w.prefix&&(c=w.iconName,y=w.prefix)}if(c&&!b&&(!o||o.getAttribute(Xc)!==y||o.getAttribute(Zc)!==h)){e.setAttribute(n,h),o&&e.removeChild(o);var k=Dk(),C=k.extra;C.attributes[Pu]=t,$u(c,y).then(function(S){var $=af(N(N({},k),{},{icons:{main:S,mask:rf()},prefix:y,iconName:h,extra:C,watchable:!0})),M=q.createElement("svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=$.map(function(L){return aa(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Xk(e){return Promise.all([gp(e,"::before"),gp(e,"::after")])}function Zk(e){return e.parentNode!==document.head&&!~Dw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function vp(e){if(Ht)return new Promise(function(t,n){var r=Br(e.querySelectorAll("*")).filter(Zk).map(Xk),i=of.begin("searchPseudoElements");c1(),Promise.all(r).then(function(){i(),Ru(),t()}).catch(function(){i(),Ru(),n()})})}var qk={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=vp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?q:r;A.searchPseudoElements&&vp(i)}}},yp=!1,Jk={mixout:function(){return{dom:{unwatch:function(){c1(),yp=!0}}}},hooks:function(){return{bootstrap:function(){dp(Ou("mutationObserverCallbacks",{}))},noAuto:function(){Ik()},watch:function(n){var r=n.observeMutationsRoot;yp?Ru():dp(Ou("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},xp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},e4={mixout:function(){return{parse:{transform:function(n){return xp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=xp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},y={outer:l,inner:d,path:g};return{tag:"g",attributes:N({},y.outer),children:[{tag:"g",attributes:N({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),y.path)}]}]}}}},ms={x:0,y:0,width:"100%",height:"100%"};function wp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function t4(e){return e.tag==="g"?e.children:[e]}var n4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?_l(i.split(" ").map(function(o){return o.trim()})):rf();return a.prefix||(a.prefix=yn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,s=n.transform,u=a.width,f=a.icon,d=o.width,g=o.icon,y=ek({transform:s,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:N(N({},ms),{},{fill:"white"})},v=f.children?{children:f.children.map(wp)}:{},b={tag:"g",attributes:N({},y.inner),children:[wp(N({tag:f.tag,attributes:N(N({},f.attributes),y.path)},v))]},p={tag:"g",attributes:N({},y.outer),children:[b]},c="mask-".concat(l||Vi()),h="clip-".concat(l||Vi()),w={tag:"mask",attributes:N(N({},ms),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,p]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:t4(g)},w]};return r.push(k,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(c,")")},ms)}),{children:r,attributes:i}}}},r4={provides:function(t){var n=!1;vn.matchMedia&&(n=vn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:N(N({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:N(N({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:N(N({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},i4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},a4=[rk,Hk,Vk,Yk,Qk,qk,Jk,e4,n4,r4,i4];yk(a4,{mixoutsTo:qe});qe.noAuto;qe.config;qe.library;qe.dom;var Iu=qe.parse;qe.findIconDefinition;qe.toHtml;var o4=qe.icon;qe.layer;qe.text;qe.counter;var d1={exports:{}},l4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",s4=l4,u4=s4;function p1(){}function m1(){}m1.resetWarningCache=p1;var c4=function(){function e(r,i,a,o,l,s){if(s!==u4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:m1,resetWarningCache:p1};return n.PropTypes=n,n};d1.exports=c4();var f4=d1.exports;const j=_p(f4);function kp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kp(Object(n),!0).forEach(function(r){dr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bo(e){"@babel/helpers - typeof";return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bo(e)}function dr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function p4(e,t){if(e==null)return{};var n=d4(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Lu(e){return m4(e)||h4(e)||g4(e)||v4()}function m4(e){if(Array.isArray(e))return zu(e)}function h4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function g4(e,t){if(e){if(typeof e=="string")return zu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zu(e,t)}}function zu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y4(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,g=e.fixedWidth,y=e.inverse,x=e.border,v=e.listItem,b=e.flip,p=e.size,c=e.rotation,h=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":g,"fa-inverse":y,"fa-border":x,"fa-li":v,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},dr(t,"fa-".concat(p),typeof p<"u"&&p!==null),dr(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),dr(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),dr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function x4(e){return e=e-0,e===e}function h1(e){return x4(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var w4=["style"];function k4(e){return e.charAt(0).toUpperCase()+e.slice(1)}function S4(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=h1(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[k4(i)]=a:t[i]=a,t},{})}function g1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return g1(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=S4(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[h1(u)]=f}return s},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=p4(n,w4);return i.attrs.style=rn(rn({},i.attrs.style),o),e.apply(void 0,[t.tag,rn(rn({},i.attrs),l)].concat(Lu(r)))}var v1=!1;try{v1=!0}catch{}function b4(){if(!v1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Sp(e){if(e&&Bo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Iu.icon)return Iu.icon(e);if(e===null)return null;if(e&&Bo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function hs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?dr({},e,t):{}}var Mn=Oe.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Sp(n),f=hs("classes",[].concat(Lu(y4(e)),Lu(a.split(" ")))),d=hs("transform",typeof e.transform=="string"?Iu.transform(e.transform):e.transform),g=hs("mask",Sp(r)),y=o4(u,rn(rn(rn(rn({},f),d),g),{},{symbol:i,title:o,titleId:l,maskId:s}));if(!y)return b4("Could not find icon",u),null;var x=y.abstract,v={ref:t};return Object.keys(e).forEach(function(b){Mn.defaultProps.hasOwnProperty(b)||(v[b]=e[b])}),C4(x[0],v)});Mn.displayName="FontAwesomeIcon";Mn.propTypes={beat:j.bool,border:j.bool,beatFade:j.bool,bounce:j.bool,className:j.string,fade:j.bool,flash:j.bool,mask:j.oneOfType([j.object,j.array,j.string]),maskId:j.string,fixedWidth:j.bool,inverse:j.bool,flip:j.oneOf([!0,!1,"horizontal","vertical","both"]),icon:j.oneOfType([j.object,j.array,j.string]),listItem:j.bool,pull:j.oneOf(["right","left"]),pulse:j.bool,rotation:j.oneOf([0,90,180,270]),shake:j.bool,size:j.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:j.bool,spinPulse:j.bool,spinReverse:j.bool,symbol:j.oneOfType([j.bool,j.string]),title:j.string,titleId:j.string,transform:j.oneOfType([j.string,j.object]),swapOpacity:j.bool};Mn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var C4=g1.bind(null,Oe.createElement),E4={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},P4={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},_4={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const j4=O.div`
  padding: 10px;
  margin-bottom: 10px;
  /* margin-left: auto;
  margin-right: auto; */
`,O4=O.p`
  color: var(--mainColor);
  font-weight: bold;
  margin-bottom: 10px;
`;O(Fr)`
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
  
  &:hover,
  &:focus{
    
    transform: translateY(-2px);
  }
`;const N4=()=>m.jsxs(j4,{children:[m.jsx(O4,{children:"Слідкуйте за нами у соцмережах"}),m.jsx(Rt,{to:"https://www.youtube.com/@user-ck5dw5yi1l/videos",className:"youtube social",target:"_blank",children:m.jsx(Mn,{style:{color:"#eb3223",marginRight:"20px"},icon:_4,size:"2x"})}),m.jsx(Rt,{to:"https://www.facebook.com/kdmsh22",className:"facebook social",target:"_blank",children:m.jsx(Mn,{style:{color:"#4968ad",backgroundColor:"#fff",borderRadius:"50%",marginRight:"20px"},icon:P4,size:"2x"})}),m.jsx(Rt,{to:"https://www.instagram.com/kdmsh22/",className:"instagram social",target:"_blank",children:m.jsx(Mn,{style:{color:"#ff4d4d"},icon:E4,size:"2x"})})]}),T4=O.footer`
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
`,$4=O.div`
  color: #212121;
  font-size: 10px;
  padding: 25px 50px;
`,A4=()=>m.jsx($4,{children:m.jsx("p",{children:"Copyright ©TarasPapka 2023"})}),R4=()=>m.jsx(T4,{children:m.jsxs(m.Fragment,{children:[m.jsx(N4,{}),m.jsx(A4,{})]})}),I4=O.nav`
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
`,Jr=O(Fr)`
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
`,y1=({closeMobileMenu:e})=>m.jsxs(I4,{children:[m.jsx(Jr,{to:"/",onClick:e,children:"Головна"}),m.jsx(Jr,{to:"/about",onClick:e,children:"Про нас"}),m.jsx(Jr,{to:"/departments",onClick:e,children:"Відділи"}),m.jsx(Jr,{to:"/bands",onClick:e,children:"Колективи"}),m.jsx(Jr,{to:"/contacts",onClick:e,children:"Контакти"})]});y1.propTypes={closeMobileMenu:j.func};const L4="/KDMSH/assets/xCross-436de7cd.svg",z4="/KDMSH/assets/mobileMenu-9d967880.svg",M4=O.div`
margin-right: 14px;
`,bp=O.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
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
`,D4=O.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 85px;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 999;
  overflow: hidden;

  background-color: #fff5ed;
`,F4=()=>{const[e,t]=E.useState(!1),n=()=>{t(!0),document.body.classList.add("no-scroll")},r=()=>{t(!1),document.body.classList.remove("no-scroll")};return m.jsxs(M4,{children:[e?m.jsx(bp,{onClick:r,src:L4,alt:"mobile menu close"}):m.jsx(bp,{onClick:n,src:z4,alt:"mobile menu"}),e?m.jsx(D4,{children:m.jsx(y1,{closeMobileMenu:r})}):null]})},U4=()=>{const[e,t]=E.useState(!1);return E.useEffect(()=>{const n=()=>{};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),E.useEffect(()=>{const n=()=>{window.innerWidth<778?t(!0):t(!1)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),m.jsxs(kw,{children:[m.jsxs(Sw,{children:[m.jsx(Cw,{to:"/",end:!0,children:m.jsxs(bw,{children:[m.jsxs(bu.Provider,{value:{color:"#ff4d4d",size:"1.5em",className:"global-class-name"},children:[m.jsx("span",{role:"img","aria-label":"music icon",children:m.jsx(_w,{})}),""]}),"КДМШ №22"]})}),e?m.jsx(m.Fragment,{children:m.jsx(F4,{})}):m.jsxs("nav",{children:[m.jsx(qr,{to:"/",end:!0,children:"Головна"}),m.jsx(qr,{to:"/about",children:"Про нас"}),m.jsx(qr,{to:"/departments",children:"Відділи"}),m.jsx(qr,{to:"/bands",children:"Колективи"}),m.jsx(qr,{to:"/contacts",children:"Контакти"})]})]}),m.jsx(h0,{}),m.jsx(R4,{})]})},B4=D.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 550px;
  margin-left: auto;
  margin-right: auto;
`,W4=D.img`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
  width: 100%;
  height: 100%;
  display: ${e=>e.active?"block":"none"};
  object-fit:cover;
`,x1=D.div`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: white;
  cursor: pointer;
`,H4=D(x1)`
  left: 1rem;
`,V4=D(x1)`
  right: 0rem;
`,Y4=D.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
`,Q4=D.button`
  background-color: ${e=>e.active?"white":"grey"};
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`;function G4(e){return Cl({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"}}]})(e)}function K4(e){return Cl({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}}]})(e)}const w1=({data:e})=>{const[t,n]=E.useState(0),r=()=>{n(t===e.length-1?0:t+1)},i=()=>{n(t===0?e.length-1:t-1)};return m.jsxs(B4,{children:[m.jsx(H4,{onClick:i,children:m.jsx(G4,{style:{width:"1.5em",height:"1.5em",fill:"wheat"}})}),e.map((a,o)=>m.jsx(W4,{src:a.src,alt:a.alt,active:t===o},o)),m.jsx(V4,{onClick:r,children:m.jsx(K4,{style:{width:"1.5em",height:"1.5em",fill:"wheat"}})}),m.jsx(Y4,{children:e.map((a,o)=>m.jsx(Q4,{active:t===o,onClick:()=>n(o)},o))})]})};w1.propTypes={data:j.arrayOf(j.shape({src:j.string.isRequired,alt:j.string.isRequired})).isRequired};const X4=[{src:"https://i.ibb.co/sRV81GS/pic1.jpg",alt:"Image 1 for carousel"},{src:"https://i.ibb.co/PNQPh2b/pic2.jpg",alt:"Image 2 for carousel"},{src:"https://i.ibb.co/hfh7Nnx/pic3.jpg",alt:"Image 3 for carousel"},{src:"https://i.ibb.co/R7BQ92v/pic4.jpg",alt:"Image 4 for carousel"},{src:"https://i.ibb.co/5hc8PtF/pic5.jpg",alt:"Image 5 for carousel"}],Z4=O.img`
 max-width: 100%;
 height: auto;
`,q4=O.section`
margin-left: auto;
margin-right: auto;
`,J4=O.img`
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`,e5=O.div`
margin-top: 20px;

svg {
	width: 100%; height: 100%;
}
svg text {

	animation: stroke 5s infinite alternate;
  animation-delay: 3s;
	stroke-width: 2;
	stroke: #FF4D4D;
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
`,k1=O.div`
margin: auto;

`,Ol=O.section`
max-width: 1200px;
margin-left: 200px;
/* margin-top:20px; */
font-size: 18px;
line-height:150%;
`,Yi=O.h3`
color: var(--accentColor);
font-weight: bold;
font-size: 24px;
margin-bottom: 20px;
`,Qi=O.div`
color: var(--mainColor);
display:flex;
flex-direction:column;
font-size: 16px;
margin-bottom: 20px;
`,t5=O.div`
margin-top: 40px;
`,n5=O.ul`
margin-bottom: 20px;
`,La=O.li`
list-style:square;
margin-left: 30px;
`,Cp=O.p`
color: var(--accentColor);
font-size: 12px;
line-height: 1.1;
`,r5=()=>m.jsx(k1,{children:m.jsxs(q4,{children:[m.jsx(w1,{data:X4}),m.jsx(e5,{children:m.jsx("svg",{children:m.jsx("text",{x:"2%",y:"50%",dy:".15em",children:"Ласкаво просимо у світ музики!"})})})]})}),i5=O.div`
/* position: relative;
display: flex;
flex-direction:column; */

`,a5=O.div`
margin: auto;
/* background-image: url('/public/img/bg.jpg'); */
`;O.div`
${""}
${""}
${""}
${""}
${""}
`;const o5=O.ul`
position: absolute;
 list-style-type: none;
 text-decoration: none;
color: #3b3937;
 display: flex;
 flex-direction: column;
 gap: 12px;
 /* margin-top: 50px; */
margin-bottom: 20px;
 ${""}
 > li button {
    padding: 0;
  margin: 0;
  border: none;
  background: none;

    --primary-color: #212121;
  --hovered-color: #ff4d4d;
  position: relative;
  display: flex;
  ${""}
  ${""}
  ${""}
  align-items: center;
  > a{
     font-size: 18pxpx;
     font-weight: 700;
 }
 }

 > li button::after {
   position: absolute;
   content: '';
   width: 0;
   left: 0;
   bottom: -5px;
   background:var(--hovered-color);
   height:2px;
   transition: 0.3s ease-out;
 }
 > li button Link::before{
   position: absolute;
   content: 'Read about our mission';
   width: 0%;
   inset: 0;
   bottom: -7px;
   color:var(--hovered-color);
  overflow: hidden;
   transition: 0.3s ease-out;
 }
 > li button:hover::after{
   width: 100%;
 }
  > li button:hover Link::before{
   width: 100%;
 }
`,za=O(Fr)`
  text-decoration: none;
   margin: 0;
  position: relative;
  font-size: 18px;
  color: var(--primary-color)

`,l5=()=>m.jsxs(o5,{children:[m.jsx("li",{children:m.jsx("button",{children:m.jsx(za,{to:"school",children:"Про школу"})})}),m.jsx("li",{children:m.jsx("button",{children:m.jsx(za,{to:"management",children:"Керівництво"})})}),m.jsx("li",{children:m.jsx("button",{children:m.jsx(za,{to:"team/1",children:"Колектив"})})}),m.jsx("li",{children:m.jsx("button",{children:m.jsx(za,{to:"reviews",children:"Умови вступу"})})})]}),s5=()=>m.jsxs(a5,{children:[m.jsx(i5,{children:m.jsx(l5,{})}),m.jsx(h0,{})]}),S1=O.div`
 display: flex;
  position: absolute;
  gap: 0.5em;
  flex-direction: column;
  background-color: var(--base);
  color: var(--mainColor);
  height: 40%;
   width: 100%;
  bottom: 0;
  border-radius: 16px;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 1rem;
`,u5=O.svg`
  width: 48px;
  margin-left: auto;
  margin-right: auto;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,c5=O.div`
  height: 254px;
 
  flex-grow: 1;
  flex-basis: 190px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  box-shadow: 0 0 20px 8px #d0d0d0;
  overflow: hidden;

  &:hover ${S1} {
    transform: translateY(100%);
    opacity: 0;
  }
`,f5=O.img`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #0a3394;
  background: linear-gradient(to top, #0a3394, #4286f4);
`,d5=O.p`
font-size: 1rem;
  font-weight: 700;
`,Ep=O.p`
font-size: 0.8rem;
  line-height: 130%;
`,sf=[{url:"https://i.ibb.co/hfh7Nnx/pic3.jpg",name:"Соломія Гуль",title:"Викладач",experience:"2021",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичкові інструменти",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/KxJcy9Z/Yehor.jpg",name:"Єгор Куриленко",title:"Викладач",experience:"2019",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Духові інструменти",instrument:"Саксофон, Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/SKBXr0X/Tetiana.jpg",name:"Тетяна Чайка",title:"Викладач",experience:"1972",band:"Оркестр народної музики 'Барвисті Візерунки', Дует 'НоТа'",department:"Фортепіано",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/W5bMjKK/Serhiy.jpg",name:"Сергій Левчук",title:"Викладач",experience:"2010",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Духові інструменти",instrument:"Труба",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/YjbDdJ1/Lyubov.jpg",name:"Любов Герасимчук",title:"Директор",experience:"1972",band:"",department:"Фортепіано",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/MSTR3kf/svitlana.jpg",name:"Світлана Філоненко",title:"Заступник директора",experience:"1995",band:"",department:"Народні інструменти",instrument:"Бандура",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/J3KBkzZ/Tamara.jpg",name:"Тамара Теліна",title:"Заввідділом",experience:"2002",band:"Ансамбль флейтистів",department:"Духові інструменти",instrument:"Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/DG1ZYY4/Halyna.jpg",name:"Галина Головацька-Гуль",title:"Заввідділом",experience:"1999",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичкові інструменти",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/fGpdTBV/Gitar.jpg",name:"Лілія Герасимчук",title:"Викладач",experience:"1992",band:"Ансамбль гітаристів",department:"Народні інструменти",instrument:"Гітара",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"}],oo=O.div`
display: flex;
gap: 20px;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`,uf=O.li`
  position: relative;
  /* width: 250px; */
  aspect-ratio: 16/9;
  background-color: var(--base);
  border-radius: 5px;
    /* max-width: 250px; */
  flex-grow: 1;
  flex-basis: 250px;
  /* max-width: 250px; */
  overflow: hidden;
  box-shadow: 0 0 0 5px #ff4d4d20;
  transition: all 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
   &:hover {
    transform: scale(1.03);
    /* box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2); */
    background-color: var(--base);
  }
`,p5=O.div`
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
`,m5=O.p`
 margin: 10px 0 10px;
  font-size: 12px;
  color: var(--mainColor);
  line-height: 1.4;
`,h5=O.p`
  margin: 0;
  font-size: 20px;
  color: var(--mainColor);
  font-weight: 700;
`,g5=O.button`
  padding: 15px;
  border-radius: 8px;
  background: var(--accentColor);
  border: none;
  color: white;
  cursor: pointer;
`,v5=O.img`
  object-fit: contain;
  width: 100%;
  height: 100%;

`,y5=O.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${uf}:hover & {
    transform: scale(0);
  }
`,x5=()=>{const e=sf.filter(t=>t.section==="Management");return m.jsx(oo,{children:e.map((t,n)=>m.jsxs(c5,{children:[t.url?m.jsx(f5,{src:t.url,alt:`photo of ${t.name}`}):m.jsx(u5,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),m.jsxs(S1,{children:[m.jsx(d5,{children:t.name}),m.jsx(Ep,{children:t.title}),m.jsx(Ep,{children:t.phone})]})]},n))})},w5=()=>m.jsxs(Ol,{children:[m.jsx(Yi,{children:"Керівний склад"}),m.jsx(Qi,{children:"В школі творчо і натхненно працює понад 50 висококваліфікованих викладачів, які мають значний професійний досвід,гарантують індивідуальний підхід до кожного учня."}),m.jsx(x5,{})]});D.div`
`;const k5=D.ul`
  z-index: 2;
  padding: 0 0 40px 0;

  @media screen and (min-width: 778px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;

  }

`,S5=D.div`
  cursor: pointer;
`,b5=D.button`
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
`,C5=D.p`
  // position: absolute;
  // z-index: 2;
`,E5=D.div`
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
`;const b1=({currentPage:e,totalPages:t,onChangePage:n,pageType:r})=>{const i=d0(),a=o=>{i(`/${r}/${o}`),n(o)};return m.jsx(E5,{children:[...Array(t).keys()].map(o=>m.jsx("li",{children:m.jsx(Rt,{to:`/${r}/${o+1}`,children:m.jsx(b5,{onClick:()=>a(o+1),active:`${e===o+1?"active":""}`,children:m.jsx(C5,{children:o+1})})})},o))})};b1.propTypes={currentPage:j.number,totalPages:j.number,onChangePage:j.func,pageType:j.string};function P5(e){return Cl({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}const _5=D.div`
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
`,j5=D.div`
  background-color: #fff;
  width: 540px;
  max-height: auto;
  position: relative;
  padding: 40px;
  margin: 20px;
  overflow-y: auto;
  border-radius: 24px;
`,O5=D.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`,C1=({isOpen:e,closeModal:t,children:n})=>{const r=a=>{a.stopPropagation()},i=a=>{a.target===a.currentTarget&&t()};return m.jsx(m.Fragment,{children:e&&m.jsx(_5,{onClick:i,children:m.jsxs(j5,{className:"ModalContent",onClick:r,children:[m.jsx(O5,{onClick:t,children:m.jsx(P5,{size:18})}),n]})})})};C1.propTypes={isOpen:j.bool.isRequired,closeModal:j.func.isRequired,children:j.node};const N5=D.div`
font-size: inherit;
`,E1=D.div`
width: 100%;
margin-bottom: 30px;
border-radius: 20px;
`,T5=D.img`
object-fit: cover;
width: 100%;
height: 500px;
border-radius: 20px;
`,$5=D.div`
text-align: center;

`,A5=D.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${E1}:hover & {
    transform: scale(0);
  }
`,R5=D.div`

`,I5=D.p`
font-weight: 600;
text-transform: uppercase;
font-size: 5vw;
margin-bottom: 15px;

@media screen and (min-width: 487px) {
      font-size: 36px; 
  }
`,L5=D.p`
text-transform: uppercase;
font-size: 4vw;
/* color: var(--accentColor); */
padding-bottom: 10px;
margin-bottom: 10px;
border-bottom: 1px solid var(--accentColor);

@media screen and (min-width: 487px) {
      font-size: 24px;
  }
`,z5=D.span`
margin-left: 10px;
color: var(--accentColor);

`,M5=D.p`

`,D5=D.p`
margin-bottom: 20px;
`,Pp=D.span`
font-weight: 600;
margin-right: 10px;
color:var(--accentColor);
`;D.button`

`;const F5=D.p`
/* color:var(--accentColor); */
`,P1=O.button`
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

`,_1=O.span`
 font-size: 15px;
 z-index: 3;
 position: relative;
 font-weight: 600;
`,j1=({name:e,title:t,img:n,description:r,experience:i,band:a,department:o})=>{const s=new Date().getFullYear()-i;return m.jsxs(N5,{children:[m.jsx(E1,{children:n?m.jsx(T5,{src:n,alt:`photo of ${e}`}):m.jsx(A5,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})})}),m.jsxs(R5,{children:[m.jsx(I5,{children:e}),m.jsxs(L5,{children:[t,":",m.jsx(z5,{children:o})]}),m.jsx(M5,{children:r}),m.jsxs(F5,{children:[m.jsx(Pp,{children:"Стаж:"}),s,"р."]}),m.jsxs(D5,{children:[m.jsx(Pp,{children:"Колективи:"}),a]}),m.jsx($5,{children:m.jsx(Rt,{to:"https://forms.gle/PVcbo8fZEWQrJm4G8",target:"_blank",children:m.jsx(P1,{children:m.jsx(_1,{children:"Записатися"})})})})]})]})};j1.propTypes={id:j.number,name:j.string,title:j.string,phone:j.string,img:j.string,description:j.string,experience:j.string,band:j.string,department:j.string};const O1=({items:e})=>{const[t,n]=E.useState(!1),[r,i]=E.useState(null),a=l=>{i(l),n(!t)},o=l=>{oo.current&&!oo.current.contains(l.target)&&n(!1)};return E.useEffect(()=>{const l=s=>{s.key==="Escape"&&t&&n(!1)};return document.addEventListener("keydown",l),document.addEventListener("click",o),()=>{document.removeEventListener("keydown",l),document.removeEventListener("click",o)}},[t]),m.jsxs(oo,{children:[e.map((l,s)=>m.jsxs(uf,{children:[l.url?m.jsx(v5,{src:l.url,alt:`photo of ${l.name}`}):m.jsx(y5,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),m.jsxs(p5,{children:[m.jsx(h5,{children:l.name}),m.jsx(m5,{children:l.title}),m.jsx(g5,{onClick:()=>a(l),children:"Детальніше"})]})]},s)),t&&r&&m.jsx(C1,{isOpen:t,closeModal:()=>n(!1),children:m.jsx(j1,{name:r.name,title:r.title,description:r.description,phone:r.phone,img:r.url,experience:r.experience,band:r.band,department:r.department})})]})};O1.propTypes={items:j.arrayOf(j.object)};const cf=({items:e})=>{const[t,n]=E.useState(6),[r,i]=E.useState(1);E.useEffect(()=>{const o=()=>{window.innerWidth>778?n(6):n(2)};return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]);const a=o=>{i(o)};return m.jsxs(m.Fragment,{children:[m.jsx(k5,{children:m.jsx(O1,{items:e.slice((r-1)*t,r*t)})}),m.jsx(S5,{children:m.jsx(b1,{currentPage:r,totalPages:Math.ceil(e.length/t),onChangePage:a,pageType:"about/team"})})]})};cf.propTypes={items:j.array};const U5=()=>{const[e,t]=E.useState([]);return E.useEffect(()=>{t(sf)},[]),m.jsxs(Ol,{children:[m.jsx(Yi,{children:"Викладацький склад"}),m.jsx(Qi,{children:"В школі творчо і натхненно працює понад 50 висококваліфікованих викладачів, які мають значний професійний досвід,гарантують індивідуальний підхід до кожного учня. Вони всебічно працюють над розвитком музичної грамотності, техніки гри, виразності та інтерпретації для забезпечення найкращих результатів навчання. Щорічно в школі навчаються 410 учнів з 5 до 18 років."}),m.jsx(cf,{items:e})]})},B5=()=>m.jsxs(Ol,{children:[m.jsxs("div",{children:[m.jsx(Yi,{children:"Умови вступу"}),m.jsx(Qi,{children:"До школи приймаються діти віком від 5 років у залежності від обраного музичного інструменту. Навчання у школі проводиться на таких відділах: - фортепіанному; - струнно-смичковому: скрипка,  віолончель; - народних інструментів: баян, акордеон, гітара; - духових та ударних інструментів: флейта, саксофон, труба, ударні інструменти; - хоровому. Вступ до школи  відбувається на конкурсній основі на підставі вступних  прослуховувань перевірки музичних здібностей, що включає в себе:  виконання (спів) пісні за власним вибором, повторення за вчителем нескладного ритму та мелодії."}),m.jsx(Qi,{children:"Заповнити форму рєстрації для вступу можна за посиланням:"}),m.jsx(Rt,{to:"https://forms.gle/PVcbo8fZEWQrJm4G8",target:"_blank",children:m.jsx(P1,{children:m.jsx(_1,{children:"Форма рєстрації"})})})]}),m.jsxs(t5,{children:[m.jsx(Yi,{children:"Перелік документів, які необхідні для вступу до школи:"}),m.jsxs(n5,{children:[m.jsx(La,{children:"Заява"}),m.jsx(La,{children:"Копія свідоцтва про народження"}),m.jsx(La,{children:"Медична довідка."}),m.jsx(La,{children:"Копія ідентифікаційного коду (за наявності)"})]}),m.jsx(Cp,{children:"* Заява встановленого зразка заповнюється на місці."}),m.jsx(Cp,{children:"Для здобувачів, що навчаються на пільговій основі, передбачен інший пакет документів."})]})]}),N1=[{id:"a-1",name:"Фортепіано",photo:"/img/pexels-cottonbro-studio-5650529.jpg",about:"Гра на фортепіано - це захоплива подорож для дітей у світ музики та можливість виявити свій музичний потенціал та розвинути творчі здібності. Цей чудовий інструмент надає можливість дітям виразити свої почуття та емоції через музику, розвиваючи в них музичний слух і вміння читати ноти. Гра на фортепіано також сприяє поліпшенню координації рук, розвитку концентрації та терпіння. Безсумнівно, цей інструмент відкриває двері до неймовірного світу музики, який зачаровує та надихає юних музикантів."},{id:"a-2",name:"Струнно-смичкові інструменти",photo:"/img/pexels-pixabay-210854.jpg",about:"Гра на струнно-смичкових інструментах - це захоплюючий світ, який дає дітям відкрити в собі музичну магію. Вони зможуть відчути власні обрані ноти, створюючи чарівні мелодії, що сповнені почуттями та виразністю. Гра на скрипці, віолончелі або альту розвиває в дітях вміння слухати, концентруватися і сприяє виробленню гармонійного почуття ритму. Крім того, ці інструменти навчають відповідальності, адже для досягнення високих результатів потрібно вкладати час та наполегливість. Грати на струнно-смичкових інструментах - це завжди цікаво та вдячно, адже вони дарують можливість створювати чарівну музику."},{id:"a-3",name:"Духові інструменти",photo:"/img/pexels-teddy-yang-2254140.jpg",about:"Гра на духових інструментах - це неймовірна пригода для дітей, яка запрошує у музичний світ. Вони зможуть відчути себе справжніми музикантами, навчившись грати на трубі, саксофоні, флейті та інших інструментах. Ця діяльність сприяє розвитку дихальної системи та допомагає покращити контроль над диханням. Гра на духових інструментах також вчить дітей спілкуватися мовою музики та виражати свої почуття через звуки. Вона робить музику доступною і захоплюючою, а також допомагає формувати вміння слухати та сприймати мелодію. Це чудовий спосіб для дітей виразити свою індивідуальність та розкрити свій творчий потенціал."},{id:"a-4",name:"Ударні інструменти",photo:"/img/pexels-josh-sorenson-995301.jpg",about:"Гра на ударних інструментах - це особливий спосіб виплеснути свою енергію. Діти зможуть віднайти у собі справжнього ударника, навчившись грати на барабанах, ксилофоні, дзвіночках і багатьох інших інструментах. Гра на ударних інструментах розвиває координацію рук та розвиток моторики, а також допомагає дітям вчитися працювати в команді та слухати одне одного у музичному виконанні. Це чудовий спосіб для дітей виразити свої почуття через ритм і створити музику власноруч. Ударні інструменти роблять музику неймовірно захопливою і доступною для маленьких музикантів."},{id:"a-5",name:"Народні інструменти",photo:"/img/pexels-pixabay-33597.jpg",about:"Народні інструменти, такі як гітара, бандура, баян та інші, відкривають дітям чарівний світ музики, насичений культурними традиціями. Граючи на цих інструментах, діти пізнають багатство своєї спадщини і вчаться виконувати мелодії, які були передані з покоління в покоління. Народні інструменти допомагають зберігати і популяризувати унікальні музичні традиції та вчать дітей цінувати різноманіття культур. Завдяки навчанню на народних інструментах, діти можуть долучитися до світу української, а також інших національних музичних мистецтв та стати частиною неперевершеної музичної спадщини."},{id:"a-6",name:"Вокал",photo:"/img/pexels-dmitry-demidov-3783471.jpg",about:"Вокальне мистецтво - це дивовижний світ виразності та музичної гармонії. У нашій музичній школі, діти отримають можливість розкрити свій вокальний талант під керівництвом досвідчених викладачів. Ми пропонуємо індивідуальні та групові заняття вокалом, де діти вивчають основи вокальної техніки, розвивають свій голос, та вчаться виконувати улюблені пісні. Вокальне навчання розширює музичний горизонт дітей і дарує їм можливість виразити свої почуття та емоції через музику."},{id:"a-7",name:"Музично - теоретичний відділ",photo:"/img/bg.jpg",about:"Музично-теоретичний відділ нашої школи є важливою складовою частиною музичної освіти для дітей. Тут діти здобувають теоретичні знання, які є основою для розуміння музики. Вони вивчають музичну нотацію, ритміку, гармонію, історію музики та багато іншого. Навички, отримані в музично-теоретичному відділі, допомагають дітям краще розуміти та виконувати музику на своїх інструментах або вокально. Відкривши для себе музичну теорію, діти розкривають перед собою безмежні можливості у музичному світі."}],W5=()=>N1,H5=e=>N1.find(t=>t.id===e),T1=[{id:"q-1",name:"Оркестр народної музики 'Барвисті Візерунки'",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg"},{id:"q-2",name:"Фортепіанний дует 'Но-Та'",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg"},{id:"q-3",name:"Дитячий хор",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg"},{id:"q-4",name:"Ансамбль скрипалів",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg"},{id:"q-5",name:"Ансамбль флейтистів",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg"},{id:"q-6",name:"Вокальний дует",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg"},{id:"q-7",name:"Фольклорний ансамбль",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg"},{id:"q-8",name:"Ансамбль гітаристів",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg"}],V5=()=>T1,Y5=e=>T1.find(t=>t.id===e),$1=O.div`
     width:100%;
    margin-bottom: 100px;
    
`,A1=O.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,R1=O.li`
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
    margin: 10px;
    border: 1px solid var(--border-header);
    width: 80%;
    border-radius: 15px;
      margin-left: auto;
  margin-right: auto;
${""}
  }
`,I1=O(Fr)`
    display: block;
    text-decoration: none;
    color: currentColor;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width:768px) and (max-width:1199px) {
        height: 100%;
    }
`,L1=O.p`
    font-weight: 700;
    font-size: 13px;
    line-height: 2.0;
    letter-spacing: 0.06em;
    text-align: center;
    margin-top: 0;
    margin-bottom: 4px;
    height: 55px;
`,z1=({departments:e})=>m.jsx($1,{children:m.jsx(A1,{children:e.map(t=>m.jsx(R1,{children:m.jsxs(I1,{to:`${t.id}`,children:[m.jsx("img",{src:t.photo,alt:t.name}),m.jsx(L1,{children:t.name})]})},t.id))})});z1.propTypes={departments:j.arrayOf(j.shape({id:j.string.isRequired,name:j.string.isRequired})).isRequired};const Q5=()=>{const e=W5();return m.jsx(k1,{children:m.jsx(z1,{departments:e})})},G5=O.p`

  color: var(--accentColor);
  font-size: 1.5em;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5em;

`,K5=O.p`

  font-size: 1em;
  font-weight: 400;
  line-height: 1.5em;
  color: var(--mainColor);

`,X5=O.div`

`,Z5=O.div`
    display: block;
  position: relative;
  max-width: auto;
  max-height: 600px;
  backdrop-filter: blur(10px);
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  padding: 2em 1.2em;
  margin: 12px;
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
`,q5=O.div`
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

`,J5=O.div`
   margin-top: -4px;
  margin-right: -4px;
  color: var(--mainColor);
  font-family: courier, sans;

`,e3=()=>{const[e,t]=E.useState([]),{id:n}=p0(),r=H5(n);return E.useEffect(()=>{const i=sf.filter(a=>a.department===r.name);t(i)},[r.name]),m.jsxs(X5,{children:[m.jsxs(Z5,{children:[m.jsx(J4,{src:r.photo,alt:r.name}),m.jsx(G5,{children:r.name}),m.jsx(K5,{children:r.about}),m.jsx(q5,{children:m.jsx(J5,{})})]}),m.jsx(cf,{items:e})]})},M1=({bands:e})=>m.jsx($1,{children:m.jsx(A1,{children:e.map(t=>m.jsx(R1,{children:m.jsxs(I1,{to:`${t.id}`,children:[m.jsx("img",{src:t.photo,alt:t.name}),m.jsx(L1,{children:t.name})]})},t.id))})});M1.propTypes={bands:j.arrayOf(j.shape({id:j.string.isRequired,name:j.string.isRequired})).isRequired};const t3=()=>{const e=V5();return m.jsx(M1,{bands:e})},n3=()=>{const{id:e}=p0(),t=Y5(e);return m.jsxs("main",{children:[m.jsx(Z4,{src:"https://via.placeholder.com/960x240",alt:""}),m.jsxs("div",{children:[m.jsxs("h2",{children:["Band - ",t.name," - ",e]}),m.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam praesentium ipsum quos unde voluptatum?"})]})]})},r3=O.div`
margin: auto;

`,i3=O.h2`
font-family: 'Montserrat', sans-serif;
font-size: 36px;
font-weight: 600;
text-align: center;
color: var(--accentColor)
`,a3=O.div`
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
`,o3=O.img`
width: 100%;
height: auto;

margin-bottom: 30px;
box-shadow: 0px 0px 5px 0px rgba(255, 77, 77, 1);
@media screen and (min-width: 558px) {
    width: 500px;
  }
  @media screen and (min-width: 1100px) {
    width: 700px;
  }
`,l3=O.address`
/* border: 1px solid var(--accentColor); */
padding: 20px;
font-size: 14px;
border-radius: 10px;
box-sizing: border-box;
width: 100%;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

@media screen and (min-width: 558px) {
    width: 500px;
  }
@media screen and (min-width: 1100px) {
    font-size: 18px;
    margin-left: 30px;
    box-shadow: none;

  }
`,Ma=O.span`
font-weight: 600;
margin-right: 20px;

color: var(--accentColor);
`,s3="/KDMSH/assets/map-643c9983.png",u3=()=>m.jsxs(r3,{children:[m.jsx(i3,{children:"Контактна інформація"}),m.jsxs(a3,{children:[m.jsx(m.Fragment,{children:m.jsx(o3,{src:s3,alt:"map",width:"500px",height:"500px"})}),m.jsx(l3,{children:m.jsxs("ul",{style:{width:"400px"},children:[m.jsxs("li",{children:[m.jsx(Ma,{children:"Адреса:"})," вулиця Зодчих, 30а, ",m.jsx("br",{}),"Київ, 03194"]}),m.jsxs("li",{children:[m.jsx(Ma,{children:"Телефон:"}),m.jsx(Rt,{to:"tel:+380934139512",style:{textDecoration:"none",color:"#212121"},children:"(093) 413-95-12"})]}),m.jsxs("li",{children:[m.jsx(Ma,{children:"Email:"}),m.jsx(Rt,{to:"mailto:dmsh22@ukr.net",target:"_blank",style:{textDecoration:"none",color:"#212121"},children:"dmsh22@ukr.net"})]}),m.jsxs("li",{children:[m.jsx(Ma,{children:"Розклад роботи:"})," ",m.jsx("br",{})," пн-пт: 10.00 - 20.00 ",m.jsx("br",{})," cб: 10.00 - 16.00 ",m.jsx("br",{})," нд: вихідний"]})]})})]})]}),c3=()=>m.jsx(Ol,{children:m.jsxs(Qi,{children:[m.jsx(Yi,{children:"Про нас"}),"Для мешканців Святошинського району працює з 1971 року. Школа є державним позашкільним навчальним закладом освіти в галузі культури, здійснює естетичне виховання дітей, учнів, громадян, забезпечуючи принцип єдності і наступності мистецької освіти; проводить навчально-виховну, методичну, просвітницьку роботу."]})}),f3=()=>m.jsx(E.Suspense,{fallback:m.jsx(w2,{}),children:m.jsx(ux,{children:m.jsxs(We,{path:"/",element:m.jsx(U4,{}),children:[m.jsx(We,{index:!0,element:m.jsx(r5,{})}),m.jsxs(We,{path:"about",element:m.jsx(s5,{}),children:[m.jsx(We,{path:"school",element:m.jsx(c3,{})}),m.jsx(We,{path:"management",element:m.jsx(w5,{})}),m.jsx(We,{path:"team/:currentPage",element:m.jsx(U5,{})}),m.jsx(We,{path:"reviews",element:m.jsx(B5,{})})]}),m.jsx(We,{path:"departments",element:m.jsx(Q5,{})}),m.jsx(We,{path:"departments/:id",element:m.jsx(e3,{})}),m.jsx(We,{path:"bands",element:m.jsx(t3,{})}),m.jsx(We,{path:"bands/:id",element:m.jsx(n3,{})}),m.jsx(We,{path:"contacts",element:m.jsx(u3,{})})]})})});function d3(){return m.jsx(m.Fragment,{children:m.jsx(f3,{})})}vs.createRoot(document.getElementById("root")).render(m.jsx(hx,{basename:"/KDMSH",children:m.jsx(d3,{})}));
