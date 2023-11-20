function Z1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function _p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Np={exports:{}},Ya={},Lp={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yi=Symbol.for("react.element"),J1=Symbol.for("react.portal"),eg=Symbol.for("react.fragment"),tg=Symbol.for("react.strict_mode"),ng=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),ig=Symbol.for("react.context"),og=Symbol.for("react.forward_ref"),ag=Symbol.for("react.suspense"),sg=Symbol.for("react.memo"),lg=Symbol.for("react.lazy"),df=Symbol.iterator;function ug(e){return e===null||typeof e!="object"?null:(e=df&&e[df]||e["@@iterator"],typeof e=="function"?e:null)}var Op={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zp=Object.assign,$p={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=$p,this.updater=n||Op}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ap(){}Ap.prototype=Mr.prototype;function Bu(e,t,n){this.props=e,this.context=t,this.refs=$p,this.updater=n||Op}var Vu=Bu.prototype=new Ap;Vu.constructor=Bu;zp(Vu,Mr.prototype);Vu.isPureReactComponent=!0;var pf=Array.isArray,Rp=Object.prototype.hasOwnProperty,Hu={current:null},Ip={key:!0,ref:!0,__self:!0,__source:!0};function Mp(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Rp.call(t,r)&&!Ip.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Yi,type:e,key:o,ref:a,props:i,_owner:Hu.current}}function cg(e,t){return{$$typeof:Yi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yi}function fg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mf=/\/+/g;function Rs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fg(""+e.key):t.toString(36)}function Uo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yi:case J1:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Rs(a,0):r,pf(i)?(n="",e!=null&&(n=e.replace(mf,"$&/")+"/"),Uo(i,t,n,"",function(u){return u})):i!=null&&(Yu(i)&&(i=cg(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(mf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",pf(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Rs(o,s);a+=Uo(o,t,n,l,i)}else if(l=ug(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Rs(o,s++),a+=Uo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function co(e,t,n){if(e==null)return e;var r=[],i=0;return Uo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function dg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Wo={transition:null},pg={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Hu};D.Children={map:co,forEach:function(e,t,n){co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return co(e,function(){t++}),t},toArray:function(e){return co(e,function(t){return t})||[]},only:function(e){if(!Yu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Mr;D.Fragment=eg;D.Profiler=ng;D.PureComponent=Bu;D.StrictMode=tg;D.Suspense=ag;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pg;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Hu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Rp.call(t,l)&&!Ip.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Yi,type:e.type,key:i,ref:o,props:r,_owner:a}};D.createContext=function(e){return e={$$typeof:ig,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rg,_context:e},e.Consumer=e};D.createElement=Mp;D.createFactory=function(e){var t=Mp.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:og,render:e}};D.isValidElement=Yu;D.lazy=function(e){return{$$typeof:lg,_payload:{_status:-1,_result:e},_init:dg}};D.memo=function(e,t){return{$$typeof:sg,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return Le.current.useCallback(e,t)};D.useContext=function(e){return Le.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};D.useEffect=function(e,t){return Le.current.useEffect(e,t)};D.useId=function(){return Le.current.useId()};D.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Le.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};D.useRef=function(e){return Le.current.useRef(e)};D.useState=function(e){return Le.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Le.current.useTransition()};D.version="18.2.0";Lp.exports=D;var C=Lp.exports;const _e=_p(C),wl=Z1({__proto__:null,default:_e},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg=C,hg=Symbol.for("react.element"),gg=Symbol.for("react.fragment"),vg=Object.prototype.hasOwnProperty,yg=mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xg={key:!0,ref:!0,__self:!0,__source:!0};function Fp(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)vg.call(t,r)&&!xg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hg,type:e,key:o,ref:a,props:i,_owner:yg.current}}Ya.Fragment=gg;Ya.jsx=Fp;Ya.jsxs=Fp;Np.exports=Ya;var d=Np.exports,bl={},Dp={exports:{}},Qe={},Up={exports:{}},Wp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,$){var A=_.length;_.push($);e:for(;0<A;){var J=A-1>>>1,ie=_[J];if(0<i(ie,$))_[J]=$,_[A]=ie,A=J;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var $=_[0],A=_.pop();if(A!==$){_[0]=A;e:for(var J=0,ie=_.length,Pt=ie>>>1;J<Pt;){var Ue=2*(J+1)-1,Vt=_[Ue],We=Ue+1,et=_[We];if(0>i(Vt,A))We<ie&&0>i(et,Vt)?(_[J]=et,_[We]=A,J=We):(_[J]=Vt,_[Ue]=A,J=Ue);else if(We<ie&&0>i(et,A))_[J]=et,_[We]=A,J=We;else break e}}return $}function i(_,$){var A=_.sortIndex-$.sortIndex;return A!==0?A:_.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,p=null,g=3,y=!1,x=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=_)r(u),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(u)}}function w(_){if(v=!1,h(_),!x)if(n(l)!==null)x=!0,jn(b);else{var $=n(u);$!==null&&Je(w,$.startTime-_)}}function b(_,$){x=!1,v&&(v=!1,m(N),N=-1),y=!0;var A=g;try{for(h($),p=n(l);p!==null&&(!(p.expirationTime>$)||_&&!De());){var J=p.callback;if(typeof J=="function"){p.callback=null,g=p.priorityLevel;var ie=J(p.expirationTime<=$);$=e.unstable_now(),typeof ie=="function"?p.callback=ie:p===n(l)&&r(l),h($)}else r(l);p=n(l)}if(p!==null)var Pt=!0;else{var Ue=n(u);Ue!==null&&Je(w,Ue.startTime-$),Pt=!1}return Pt}finally{p=null,g=A,y=!1}}var E=!1,S=null,N=-1,M=5,R=-1;function De(){return!(e.unstable_now()-R<M)}function Cn(){if(S!==null){var _=e.unstable_now();R=_;var $=!0;try{$=S(!0,_)}finally{$?En():(E=!1,S=null)}}else E=!1}var En;if(typeof c=="function")En=function(){c(Cn)};else if(typeof MessageChannel<"u"){var lo=new MessageChannel,$s=lo.port2;lo.port1.onmessage=Cn,En=function(){$s.postMessage(null)}}else En=function(){k(Cn,0)};function jn(_){S=_,E||(E=!0,En())}function Je(_,$){N=k(function(){_(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,jn(b))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var A=g;g=$;try{return _()}finally{g=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,$){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var A=g;g=_;try{return $()}finally{g=A}},e.unstable_scheduleCallback=function(_,$,A){var J=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?J+A:J):A=J,_){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=A+ie,_={id:f++,callback:$,priorityLevel:_,startTime:A,expirationTime:ie,sortIndex:-1},A>J?(_.sortIndex=A,t(u,_),n(l)===null&&_===n(u)&&(v?(m(N),N=-1):v=!0,Je(w,A-J))):(_.sortIndex=ie,t(l,_),x||y||(x=!0,jn(b))),_},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(_){var $=g;return function(){var A=g;g=$;try{return _.apply(this,arguments)}finally{g=A}}}})(Wp);Up.exports=Wp;var wg=Up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp=C,Ge=wg;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vp=new Set,yi={};function Qn(e,t){Cr(e,t),Cr(e+"Capture",t)}function Cr(e,t){for(yi[e]=t,e=0;e<t.length;e++)Vp.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kl=Object.prototype.hasOwnProperty,bg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hf={},gf={};function kg(e){return kl.call(gf,e)?!0:kl.call(hf,e)?!1:bg.test(e)?gf[e]=!0:(hf[e]=!0,!1)}function Sg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cg(e,t,n,r){if(t===null||typeof t>"u"||Sg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xu=/[\-:]([a-z])/g;function Gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xu,Gu);ke[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xu,Gu);ke[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xu,Gu);ke[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qu(e,t,n,r){var i=ke.hasOwnProperty(t)?ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cg(t,n,i,r)&&(n=null),r||i===null?kg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ut=Bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Ku=Symbol.for("react.strict_mode"),Sl=Symbol.for("react.profiler"),Hp=Symbol.for("react.provider"),Yp=Symbol.for("react.context"),qu=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),Zu=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Xp=Symbol.for("react.offscreen"),vf=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=vf&&e[vf]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Is;function ei(e){if(Is===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Is=t&&t[1]||""}return`
`+Is+e}var Ms=!1;function Fs(e,t){if(!e||Ms)return"";Ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ms=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ei(e):""}function Eg(e){switch(e.tag){case 5:return ei(e.type);case 16:return ei("Lazy");case 13:return ei("Suspense");case 19:return ei("SuspenseList");case 0:case 2:case 15:return e=Fs(e.type,!1),e;case 11:return e=Fs(e.type.render,!1),e;case 1:return e=Fs(e.type,!0),e;default:return""}}function jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case Sl:return"Profiler";case Ku:return"StrictMode";case Cl:return"Suspense";case El:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yp:return(e.displayName||"Context")+".Consumer";case Hp:return(e._context.displayName||"Context")+".Provider";case qu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zu:return t=e.displayName||null,t!==null?t:jl(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return jl(e(t))}catch{}}return null}function jg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jl(t);case 8:return t===Ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pg(e){var t=Gp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function po(e){e._valueTracker||(e._valueTracker=Pg(e))}function Qp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kp(e,t){t=t.checked,t!=null&&Qu(e,"checked",t,!1)}function Tl(e,t){Kp(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_l(e,t.type,n):t.hasOwnProperty("defaultValue")&&_l(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _l(e,t,n){(t!=="number"||ca(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ti=Array.isArray;function gr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(ti(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function qp(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mo,Jp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tg=["Webkit","ms","Moz","O"];Object.keys(ai).forEach(function(e){Tg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ai[t]=ai[e]})});function em(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ai.hasOwnProperty(e)&&ai[e]?(""+t).trim():t+"px"}function tm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=em(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _g=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,t){if(t){if(_g[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $l=null;function Ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,vr=null,yr=null;function kf(e){if(e=Qi(e)){if(typeof Al!="function")throw Error(j(280));var t=e.stateNode;t&&(t=qa(t),Al(e.stateNode,e.type,t))}}function nm(e){vr?yr?yr.push(e):yr=[e]:vr=e}function rm(){if(vr){var e=vr,t=yr;if(yr=vr=null,kf(e),t)for(e=0;e<t.length;e++)kf(t[e])}}function im(e,t){return e(t)}function om(){}var Ds=!1;function am(e,t,n){if(Ds)return e(t,n);Ds=!0;try{return im(e,t,n)}finally{Ds=!1,(vr!==null||yr!==null)&&(om(),rm())}}function wi(e,t){var n=e.stateNode;if(n===null)return null;var r=qa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Rl=!1;if($t)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Rl=!1}function Ng(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var si=!1,fa=null,da=!1,Il=null,Lg={onError:function(e){si=!0,fa=e}};function Og(e,t,n,r,i,o,a,s,l){si=!1,fa=null,Ng.apply(Lg,arguments)}function zg(e,t,n,r,i,o,a,s,l){if(Og.apply(this,arguments),si){if(si){var u=fa;si=!1,fa=null}else throw Error(j(198));da||(da=!0,Il=u)}}function Kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sf(e){if(Kn(e)!==e)throw Error(j(188))}function $g(e){var t=e.alternate;if(!t){if(t=Kn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Sf(i),e;if(o===r)return Sf(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function lm(e){return e=$g(e),e!==null?um(e):null}function um(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=um(e);if(t!==null)return t;e=e.sibling}return null}var cm=Ge.unstable_scheduleCallback,Cf=Ge.unstable_cancelCallback,Ag=Ge.unstable_shouldYield,Rg=Ge.unstable_requestPaint,le=Ge.unstable_now,Ig=Ge.unstable_getCurrentPriorityLevel,ec=Ge.unstable_ImmediatePriority,fm=Ge.unstable_UserBlockingPriority,pa=Ge.unstable_NormalPriority,Mg=Ge.unstable_LowPriority,dm=Ge.unstable_IdlePriority,Xa=null,Ct=null;function Fg(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Xa,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Wg,Dg=Math.log,Ug=Math.LN2;function Wg(e){return e>>>=0,e===0?32:31-(Dg(e)/Ug|0)|0}var ho=64,go=4194304;function ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ma(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ni(s):(o&=a,o!==0&&(r=ni(o)))}else a=n&~i,a!==0?r=ni(a):o!==0&&(r=ni(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Bg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-pt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Bg(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pm(){var e=ho;return ho<<=1,!(ho&4194240)&&(ho=64),e}function Us(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function Hg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function tc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function mm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hm,nc,gm,vm,ym,Fl=!1,vo=[],an=null,sn=null,ln=null,bi=new Map,ki=new Map,Jt=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ki.delete(t.pointerId)}}function Xr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Qi(t),t!==null&&nc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xg(e,t,n,r,i){switch(t){case"focusin":return an=Xr(an,e,t,n,r,i),!0;case"dragenter":return sn=Xr(sn,e,t,n,r,i),!0;case"mouseover":return ln=Xr(ln,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return bi.set(o,Xr(bi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ki.set(o,Xr(ki.get(o)||null,e,t,n,r,i)),!0}return!1}function xm(e){var t=_n(e.target);if(t!==null){var n=Kn(t);if(n!==null){if(t=n.tag,t===13){if(t=sm(n),t!==null){e.blockedOn=t,ym(e.priority,function(){gm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$l=r,n.target.dispatchEvent(r),$l=null}else return t=Qi(n),t!==null&&nc(t),e.blockedOn=n,!1;t.shift()}return!0}function jf(e,t,n){Bo(e)&&n.delete(t)}function Gg(){Fl=!1,an!==null&&Bo(an)&&(an=null),sn!==null&&Bo(sn)&&(sn=null),ln!==null&&Bo(ln)&&(ln=null),bi.forEach(jf),ki.forEach(jf)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Fl||(Fl=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Gg)))}function Si(e){function t(i){return Gr(i,e)}if(0<vo.length){Gr(vo[0],e);for(var n=1;n<vo.length;n++){var r=vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Gr(an,e),sn!==null&&Gr(sn,e),ln!==null&&Gr(ln,e),bi.forEach(t),ki.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)xm(n),n.blockedOn===null&&Jt.shift()}var xr=Ut.ReactCurrentBatchConfig,ha=!0;function Qg(e,t,n,r){var i=H,o=xr.transition;xr.transition=null;try{H=1,rc(e,t,n,r)}finally{H=i,xr.transition=o}}function Kg(e,t,n,r){var i=H,o=xr.transition;xr.transition=null;try{H=4,rc(e,t,n,r)}finally{H=i,xr.transition=o}}function rc(e,t,n,r){if(ha){var i=Dl(e,t,n,r);if(i===null)qs(e,t,r,ga,n),Ef(e,r);else if(Xg(i,e,t,n,r))r.stopPropagation();else if(Ef(e,r),t&4&&-1<Yg.indexOf(e)){for(;i!==null;){var o=Qi(i);if(o!==null&&hm(o),o=Dl(e,t,n,r),o===null&&qs(e,t,r,ga,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else qs(e,t,r,null,n)}}var ga=null;function Dl(e,t,n,r){if(ga=null,e=Ju(r),e=_n(e),e!==null)if(t=Kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ga=e,null}function wm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ig()){case ec:return 1;case fm:return 4;case pa:case Mg:return 16;case dm:return 536870912;default:return 16}default:return 16}}var tn=null,ic=null,Vo=null;function bm(){if(Vo)return Vo;var e,t=ic,n=t.length,r,i="value"in tn?tn.value:tn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Vo=i.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yo(){return!0}function Pf(){return!1}function Ke(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?yo:Pf,this.isPropagationStopped=Pf,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=Ke(Fr),Gi=re({},Fr,{view:0,detail:0}),qg=Ke(Gi),Ws,Bs,Qr,Ga=re({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(Ws=e.screenX-Qr.screenX,Bs=e.screenY-Qr.screenY):Bs=Ws=0,Qr=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:Bs}}),Tf=Ke(Ga),Zg=re({},Ga,{dataTransfer:0}),Jg=Ke(Zg),ev=re({},Gi,{relatedTarget:0}),Vs=Ke(ev),tv=re({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=Ke(tv),rv=re({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iv=Ke(rv),ov=re({},Fr,{data:0}),_f=Ke(ov),av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lv[e])?!!t[e]:!1}function ac(){return uv}var cv=re({},Gi,{key:function(e){if(e.key){var t=av[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fv=Ke(cv),dv=re({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=Ke(dv),pv=re({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),mv=Ke(pv),hv=re({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),gv=Ke(hv),vv=re({},Ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yv=Ke(vv),xv=[9,13,27,32],sc=$t&&"CompositionEvent"in window,li=null;$t&&"documentMode"in document&&(li=document.documentMode);var wv=$t&&"TextEvent"in window&&!li,km=$t&&(!sc||li&&8<li&&11>=li),Lf=String.fromCharCode(32),Of=!1;function Sm(e,t){switch(e){case"keyup":return xv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function bv(e,t){switch(e){case"compositionend":return Cm(t);case"keypress":return t.which!==32?null:(Of=!0,Lf);case"textInput":return e=t.data,e===Lf&&Of?null:e;default:return null}}function kv(e,t){if(nr)return e==="compositionend"||!sc&&Sm(e,t)?(e=bm(),Vo=ic=tn=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return km&&t.locale!=="ko"?null:t.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sv[e.type]:t==="textarea"}function Em(e,t,n,r){nm(r),t=va(t,"onChange"),0<t.length&&(n=new oc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ui=null,Ci=null;function Cv(e){Rm(e,0)}function Qa(e){var t=or(e);if(Qp(t))return e}function Ev(e,t){if(e==="change")return t}var jm=!1;if($t){var Hs;if($t){var Ys="oninput"in document;if(!Ys){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),Ys=typeof $f.oninput=="function"}Hs=Ys}else Hs=!1;jm=Hs&&(!document.documentMode||9<document.documentMode)}function Af(){ui&&(ui.detachEvent("onpropertychange",Pm),Ci=ui=null)}function Pm(e){if(e.propertyName==="value"&&Qa(Ci)){var t=[];Em(t,Ci,e,Ju(e)),am(Cv,t)}}function jv(e,t,n){e==="focusin"?(Af(),ui=t,Ci=n,ui.attachEvent("onpropertychange",Pm)):e==="focusout"&&Af()}function Pv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qa(Ci)}function Tv(e,t){if(e==="click")return Qa(t)}function _v(e,t){if(e==="input"||e==="change")return Qa(t)}function Nv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Nv;function Ei(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kl.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function If(e,t){var n=Rf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rf(n)}}function Tm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _m(){for(var e=window,t=ca();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ca(e.document)}return t}function lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lv(e){var t=_m(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tm(n.ownerDocument.documentElement,n)){if(r!==null&&lc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=If(n,o);var a=If(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ov=$t&&"documentMode"in document&&11>=document.documentMode,rr=null,Ul=null,ci=null,Wl=!1;function Mf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wl||rr==null||rr!==ca(r)||(r=rr,"selectionStart"in r&&lc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ci&&Ei(ci,r)||(ci=r,r=va(Ul,"onSelect"),0<r.length&&(t=new oc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},Xs={},Nm={};$t&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Ka(e){if(Xs[e])return Xs[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nm)return Xs[e]=t[n];return e}var Lm=Ka("animationend"),Om=Ka("animationiteration"),zm=Ka("animationstart"),$m=Ka("transitionend"),Am=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){Am.set(e,t),Qn(t,[e])}for(var Gs=0;Gs<Ff.length;Gs++){var Qs=Ff[Gs],zv=Qs.toLowerCase(),$v=Qs[0].toUpperCase()+Qs.slice(1);bn(zv,"on"+$v)}bn(Lm,"onAnimationEnd");bn(Om,"onAnimationIteration");bn(zm,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn($m,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Av=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function Df(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zg(r,t,void 0,e),e.currentTarget=null}function Rm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Df(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Df(i,s,u),o=l}}}if(da)throw e=Il,da=!1,Il=null,e}function G(e,t){var n=t[Xl];n===void 0&&(n=t[Xl]=new Set);var r=e+"__bubble";n.has(r)||(Im(t,e,2,!1),n.add(r))}function Ks(e,t,n){var r=0;t&&(r|=4),Im(n,e,r,t)}var wo="_reactListening"+Math.random().toString(36).slice(2);function ji(e){if(!e[wo]){e[wo]=!0,Vp.forEach(function(n){n!=="selectionchange"&&(Av.has(n)||Ks(n,!1,e),Ks(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wo]||(t[wo]=!0,Ks("selectionchange",!1,t))}}function Im(e,t,n,r){switch(wm(t)){case 1:var i=Qg;break;case 4:i=Kg;break;default:i=rc}n=i.bind(null,t,n,e),i=void 0,!Rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=_n(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}am(function(){var u=o,f=Ju(n),p=[];e:{var g=Am.get(e);if(g!==void 0){var y=oc,x=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":y=fv;break;case"focusin":x="focus",y=Vs;break;case"focusout":x="blur",y=Vs;break;case"beforeblur":case"afterblur":y=Vs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=mv;break;case Lm:case Om:case zm:y=nv;break;case $m:y=gv;break;case"scroll":y=qg;break;case"wheel":y=yv;break;case"copy":case"cut":case"paste":y=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Nf}var v=(t&4)!==0,k=!v&&e==="scroll",m=v?g!==null?g+"Capture":null:g;v=[];for(var c=u,h;c!==null;){h=c;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,m!==null&&(w=wi(c,m),w!=null&&v.push(Pi(c,w,h)))),k)break;c=c.return}0<v.length&&(g=new y(g,x,null,n,f),p.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==$l&&(x=n.relatedTarget||n.fromElement)&&(_n(x)||x[At]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?_n(x):null,x!==null&&(k=Kn(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(v=Tf,w="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Nf,w="onPointerLeave",m="onPointerEnter",c="pointer"),k=y==null?g:or(y),h=x==null?g:or(x),g=new v(w,c+"leave",y,n,f),g.target=k,g.relatedTarget=h,w=null,_n(f)===u&&(v=new v(m,c+"enter",x,n,f),v.target=h,v.relatedTarget=k,w=v),k=w,y&&x)t:{for(v=y,m=x,c=0,h=v;h;h=Zn(h))c++;for(h=0,w=m;w;w=Zn(w))h++;for(;0<c-h;)v=Zn(v),c--;for(;0<h-c;)m=Zn(m),h--;for(;c--;){if(v===m||m!==null&&v===m.alternate)break t;v=Zn(v),m=Zn(m)}v=null}else v=null;y!==null&&Uf(p,g,y,v,!1),x!==null&&k!==null&&Uf(p,k,x,v,!0)}}e:{if(g=u?or(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var b=Ev;else if(zf(g))if(jm)b=_v;else{b=Pv;var E=jv}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=Tv);if(b&&(b=b(e,u))){Em(p,b,n,f);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&_l(g,"number",g.value)}switch(E=u?or(u):window,e){case"focusin":(zf(E)||E.contentEditable==="true")&&(rr=E,Ul=u,ci=null);break;case"focusout":ci=Ul=rr=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,Mf(p,n,f);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":Mf(p,n,f)}var S;if(sc)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else nr?Sm(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(km&&n.locale!=="ko"&&(nr||N!=="onCompositionStart"?N==="onCompositionEnd"&&nr&&(S=bm()):(tn=f,ic="value"in tn?tn.value:tn.textContent,nr=!0)),E=va(u,N),0<E.length&&(N=new _f(N,e,null,n,f),p.push({event:N,listeners:E}),S?N.data=S:(S=Cm(n),S!==null&&(N.data=S)))),(S=wv?bv(e,n):kv(e,n))&&(u=va(u,"onBeforeInput"),0<u.length&&(f=new _f("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=S))}Rm(p,t)})}function Pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function va(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wi(e,n),o!=null&&r.unshift(Pi(e,o,i)),o=wi(e,t),o!=null&&r.push(Pi(e,o,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=wi(n,o),l!=null&&a.unshift(Pi(n,l,s))):i||(l=wi(n,o),l!=null&&a.push(Pi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Rv=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function Wf(e){return(typeof e=="string"?e:""+e).replace(Rv,`
`).replace(Iv,"")}function bo(e,t,n){if(t=Wf(t),Wf(e)!==t&&n)throw Error(j(425))}function ya(){}var Bl=null,Vl=null;function Hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,Mv=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(e){return Bf.resolve(null).then(e).catch(Dv)}:Yl;function Dv(e){setTimeout(function(){throw e})}function Zs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Si(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Si(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),kt="__reactFiber$"+Dr,Ti="__reactProps$"+Dr,At="__reactContainer$"+Dr,Xl="__reactEvents$"+Dr,Uv="__reactListeners$"+Dr,Wv="__reactHandles$"+Dr;function _n(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[At]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vf(e);e!==null;){if(n=e[kt])return n;e=Vf(e)}return t}e=n,n=e.parentNode}return null}function Qi(e){return e=e[kt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function qa(e){return e[Ti]||null}var Gl=[],ar=-1;function kn(e){return{current:e}}function q(e){0>ar||(e.current=Gl[ar],Gl[ar]=null,ar--)}function X(e,t){ar++,Gl[ar]=e.current,e.current=t}var vn={},Pe=kn(vn),Re=kn(!1),Wn=vn;function Er(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ie(e){return e=e.childContextTypes,e!=null}function xa(){q(Re),q(Pe)}function Hf(e,t,n){if(Pe.current!==vn)throw Error(j(168));X(Pe,t),X(Re,n)}function Mm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,jg(e)||"Unknown",i));return re({},n,r)}function wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Wn=Pe.current,X(Pe,e),X(Re,Re.current),!0}function Yf(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Mm(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,q(Re),q(Pe),X(Pe,e)):q(Re),X(Re,n)}var Nt=null,Za=!1,Js=!1;function Fm(e){Nt===null?Nt=[e]:Nt.push(e)}function Bv(e){Za=!0,Fm(e)}function Sn(){if(!Js&&Nt!==null){Js=!0;var e=0,t=H;try{var n=Nt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,Za=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(e+1)),cm(ec,Sn),i}finally{H=t,Js=!1}}return null}var sr=[],lr=0,ba=null,ka=0,tt=[],nt=0,Bn=null,Lt=1,Ot="";function Pn(e,t){sr[lr++]=ka,sr[lr++]=ba,ba=e,ka=t}function Dm(e,t,n){tt[nt++]=Lt,tt[nt++]=Ot,tt[nt++]=Bn,Bn=e;var r=Lt;e=Ot;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var o=32-pt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Lt=1<<32-pt(t)+i|n<<i|r,Ot=o+e}else Lt=1<<o|n<<i|r,Ot=e}function uc(e){e.return!==null&&(Pn(e,1),Dm(e,1,0))}function cc(e){for(;e===ba;)ba=sr[--lr],sr[lr]=null,ka=sr[--lr],sr[lr]=null;for(;e===Bn;)Bn=tt[--nt],tt[nt]=null,Ot=tt[--nt],tt[nt]=null,Lt=tt[--nt],tt[nt]=null}var Ye=null,He=null,ee=!1,ft=null;function Um(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,He=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Lt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,He=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(ee){var t=He;if(t){var n=t;if(!Xf(e,t)){if(Ql(e))throw Error(j(418));t=un(n.nextSibling);var r=Ye;t&&Xf(e,t)?Um(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ye=e)}}else{if(Ql(e))throw Error(j(418));e.flags=e.flags&-4097|2,ee=!1,Ye=e}}}function Gf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function ko(e){if(e!==Ye)return!1;if(!ee)return Gf(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hl(e.type,e.memoizedProps)),t&&(t=He)){if(Ql(e))throw Wm(),Error(j(418));for(;t;)Um(e,t),t=un(t.nextSibling)}if(Gf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ye?un(e.stateNode.nextSibling):null;return!0}function Wm(){for(var e=He;e;)e=un(e.nextSibling)}function jr(){He=Ye=null,ee=!1}function fc(e){ft===null?ft=[e]:ft.push(e)}var Vv=Ut.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Sa=kn(null),Ca=null,ur=null,dc=null;function pc(){dc=ur=Ca=null}function mc(e){var t=Sa.current;q(Sa),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wr(e,t){Ca=e,dc=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(dc!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Ca===null)throw Error(j(308));ur=e,Ca.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Nn=null;function hc(e){Nn===null?Nn=[e]:Nn.push(e)}function Bm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rt(e,n)}return i=r.interleaved,i===null?(t.next=t,hc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rt(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tc(e,n)}}function Qf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ea(e,t,n,r){var i=e.updateQueue;Zt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;a=0,f=u=l=null,s=o;do{var g=s.lane,y=s.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,v=s;switch(g=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){p=x.call(y,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(y,p,g):x,g==null)break e;p=re({},p,g);break e;case 2:Zt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=y,l=p):f=f.next=y,a|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Hn|=a,e.lanes=a,e.memoizedState=p}}function Kf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Hm=new Bp.Component().refs;function Zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ja={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=dn(e),o=zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(mt(t,e,i,r),Yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=dn(e),o=zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=cn(e,o,i),t!==null&&(mt(t,e,i,r),Yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=dn(e),i=zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=cn(e,i,r),t!==null&&(mt(t,e,r,n),Yo(t,e,r))}};function qf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,r)||!Ei(i,o):!0}function Ym(e,t,n){var r=!1,i=vn,o=t.contextType;return typeof o=="object"&&o!==null?o=ot(o):(i=Ie(t)?Wn:Pe.current,r=t.contextTypes,o=(r=r!=null)?Er(e,i):vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ja,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ja.enqueueReplaceState(t,t.state,null)}function Jl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Hm,gc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ot(o):(o=Ie(t)?Wn:Pe.current,i.context=Er(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ja.enqueueReplaceState(i,i.state,null),Ea(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===Hm&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function So(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jf(e){var t=e._init;return t(e._payload)}function Xm(e){function t(m,c){if(e){var h=m.deletions;h===null?(m.deletions=[c],m.flags|=16):h.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(m,c){return m=pn(m,c),m.index=0,m.sibling=null,m}function o(m,c,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<c?(m.flags|=2,c):h):(m.flags|=2,c)):(m.flags|=1048576,c)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,c,h,w){return c===null||c.tag!==6?(c=al(h,m.mode,w),c.return=m,c):(c=i(c,h),c.return=m,c)}function l(m,c,h,w){var b=h.type;return b===tr?f(m,c,h.props.children,w,h.key):c!==null&&(c.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qt&&Jf(b)===c.type)?(w=i(c,h.props),w.ref=Kr(m,c,h),w.return=m,w):(w=Zo(h.type,h.key,h.props,null,m.mode,w),w.ref=Kr(m,c,h),w.return=m,w)}function u(m,c,h,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=sl(h,m.mode,w),c.return=m,c):(c=i(c,h.children||[]),c.return=m,c)}function f(m,c,h,w,b){return c===null||c.tag!==7?(c=Rn(h,m.mode,w,b),c.return=m,c):(c=i(c,h),c.return=m,c)}function p(m,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=al(""+c,m.mode,h),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case fo:return h=Zo(c.type,c.key,c.props,null,m.mode,h),h.ref=Kr(m,null,c),h.return=m,h;case er:return c=sl(c,m.mode,h),c.return=m,c;case qt:var w=c._init;return p(m,w(c._payload),h)}if(ti(c)||Hr(c))return c=Rn(c,m.mode,h,null),c.return=m,c;So(m,c)}return null}function g(m,c,h,w){var b=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:s(m,c,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fo:return h.key===b?l(m,c,h,w):null;case er:return h.key===b?u(m,c,h,w):null;case qt:return b=h._init,g(m,c,b(h._payload),w)}if(ti(h)||Hr(h))return b!==null?null:f(m,c,h,w,null);So(m,h)}return null}function y(m,c,h,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(h)||null,s(c,m,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fo:return m=m.get(w.key===null?h:w.key)||null,l(c,m,w,b);case er:return m=m.get(w.key===null?h:w.key)||null,u(c,m,w,b);case qt:var E=w._init;return y(m,c,h,E(w._payload),b)}if(ti(w)||Hr(w))return m=m.get(h)||null,f(c,m,w,b,null);So(c,w)}return null}function x(m,c,h,w){for(var b=null,E=null,S=c,N=c=0,M=null;S!==null&&N<h.length;N++){S.index>N?(M=S,S=null):M=S.sibling;var R=g(m,S,h[N],w);if(R===null){S===null&&(S=M);break}e&&S&&R.alternate===null&&t(m,S),c=o(R,c,N),E===null?b=R:E.sibling=R,E=R,S=M}if(N===h.length)return n(m,S),ee&&Pn(m,N),b;if(S===null){for(;N<h.length;N++)S=p(m,h[N],w),S!==null&&(c=o(S,c,N),E===null?b=S:E.sibling=S,E=S);return ee&&Pn(m,N),b}for(S=r(m,S);N<h.length;N++)M=y(S,m,N,h[N],w),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?N:M.key),c=o(M,c,N),E===null?b=M:E.sibling=M,E=M);return e&&S.forEach(function(De){return t(m,De)}),ee&&Pn(m,N),b}function v(m,c,h,w){var b=Hr(h);if(typeof b!="function")throw Error(j(150));if(h=b.call(h),h==null)throw Error(j(151));for(var E=b=null,S=c,N=c=0,M=null,R=h.next();S!==null&&!R.done;N++,R=h.next()){S.index>N?(M=S,S=null):M=S.sibling;var De=g(m,S,R.value,w);if(De===null){S===null&&(S=M);break}e&&S&&De.alternate===null&&t(m,S),c=o(De,c,N),E===null?b=De:E.sibling=De,E=De,S=M}if(R.done)return n(m,S),ee&&Pn(m,N),b;if(S===null){for(;!R.done;N++,R=h.next())R=p(m,R.value,w),R!==null&&(c=o(R,c,N),E===null?b=R:E.sibling=R,E=R);return ee&&Pn(m,N),b}for(S=r(m,S);!R.done;N++,R=h.next())R=y(S,m,N,R.value,w),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?N:R.key),c=o(R,c,N),E===null?b=R:E.sibling=R,E=R);return e&&S.forEach(function(Cn){return t(m,Cn)}),ee&&Pn(m,N),b}function k(m,c,h,w){if(typeof h=="object"&&h!==null&&h.type===tr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case fo:e:{for(var b=h.key,E=c;E!==null;){if(E.key===b){if(b=h.type,b===tr){if(E.tag===7){n(m,E.sibling),c=i(E,h.props.children),c.return=m,m=c;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===qt&&Jf(b)===E.type){n(m,E.sibling),c=i(E,h.props),c.ref=Kr(m,E,h),c.return=m,m=c;break e}n(m,E);break}else t(m,E);E=E.sibling}h.type===tr?(c=Rn(h.props.children,m.mode,w,h.key),c.return=m,m=c):(w=Zo(h.type,h.key,h.props,null,m.mode,w),w.ref=Kr(m,c,h),w.return=m,m=w)}return a(m);case er:e:{for(E=h.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(m,c.sibling),c=i(c,h.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=sl(h,m.mode,w),c.return=m,m=c}return a(m);case qt:return E=h._init,k(m,c,E(h._payload),w)}if(ti(h))return x(m,c,h,w);if(Hr(h))return v(m,c,h,w);So(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(m,c.sibling),c=i(c,h),c.return=m,m=c):(n(m,c),c=al(h,m.mode,w),c.return=m,m=c),a(m)):n(m,c)}return k}var Pr=Xm(!0),Gm=Xm(!1),Ki={},Et=kn(Ki),_i=kn(Ki),Ni=kn(Ki);function Ln(e){if(e===Ki)throw Error(j(174));return e}function vc(e,t){switch(X(Ni,t),X(_i,e),X(Et,Ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ll(t,e)}q(Et),X(Et,t)}function Tr(){q(Et),q(_i),q(Ni)}function Qm(e){Ln(Ni.current);var t=Ln(Et.current),n=Ll(t,e.type);t!==n&&(X(_i,e),X(Et,n))}function yc(e){_i.current===e&&(q(Et),q(_i))}var te=kn(0);function ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function xc(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var Xo=Ut.ReactCurrentDispatcher,tl=Ut.ReactCurrentBatchConfig,Vn=0,ne=null,de=null,he=null,Pa=!1,fi=!1,Li=0,Hv=0;function Se(){throw Error(j(321))}function wc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function bc(e,t,n,r,i,o){if(Vn=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?Qv:Kv,e=n(r,i),fi){o=0;do{if(fi=!1,Li=0,25<=o)throw Error(j(301));o+=1,he=de=null,t.updateQueue=null,Xo.current=qv,e=n(r,i)}while(fi)}if(Xo.current=Ta,t=de!==null&&de.next!==null,Vn=0,he=de=ne=null,Pa=!1,t)throw Error(j(300));return e}function kc(){var e=Li!==0;return Li=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ne.memoizedState=he=e:he=he.next=e,he}function at(){if(de===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?ne.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(j(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?ne.memoizedState=he=e:he=he.next=e}return he}function Oi(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=at(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=de,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var f=u.lane;if((Vn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,a=r):l=l.next=p,ne.lanes|=f,Hn|=f}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,gt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ne.lanes|=o,Hn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=at(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);gt(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Km(){}function qm(e,t){var n=ne,r=at(),i=t(),o=!gt(r.memoizedState,i);if(o&&(r.memoizedState=i,$e=!0),r=r.queue,Sc(eh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,zi(9,Jm.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(j(349));Vn&30||Zm(n,t,i)}return i}function Zm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jm(e,t,n,r){t.value=n,t.getSnapshot=r,th(t)&&nh(e)}function eh(e,t,n){return n(function(){th(t)&&nh(e)})}function th(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function nh(e){var t=Rt(e,1);t!==null&&mt(t,e,1,-1)}function ed(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t.queue=e,e=e.dispatch=Gv.bind(null,ne,e),[t.memoizedState,e]}function zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rh(){return at().memoizedState}function Go(e,t,n,r){var i=yt();ne.flags|=e,i.memoizedState=zi(1|t,n,void 0,r===void 0?null:r)}function es(e,t,n,r){var i=at();r=r===void 0?null:r;var o=void 0;if(de!==null){var a=de.memoizedState;if(o=a.destroy,r!==null&&wc(r,a.deps)){i.memoizedState=zi(t,n,o,r);return}}ne.flags|=e,i.memoizedState=zi(1|t,n,o,r)}function td(e,t){return Go(8390656,8,e,t)}function Sc(e,t){return es(2048,8,e,t)}function ih(e,t){return es(4,2,e,t)}function oh(e,t){return es(4,4,e,t)}function ah(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sh(e,t,n){return n=n!=null?n.concat([e]):null,es(4,4,ah.bind(null,t,e),n)}function Cc(){}function lh(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uh(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ch(e,t,n){return Vn&21?(gt(n,t)||(n=pm(),ne.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Yv(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{H=n,tl.transition=r}}function fh(){return at().memoizedState}function Xv(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dh(e))ph(t,n);else if(n=Bm(e,t,n,r),n!==null){var i=Ne();mt(n,e,r,i),mh(n,t,r)}}function Gv(e,t,n){var r=dn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dh(e))ph(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,gt(s,a)){var l=t.interleaved;l===null?(i.next=i,hc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Bm(e,t,i,r),n!==null&&(i=Ne(),mt(n,e,r,i),mh(n,t,r))}}function dh(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function ph(e,t){fi=Pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tc(e,n)}}var Ta={readContext:ot,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Qv={readContext:ot,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:td,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Go(4194308,4,ah.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){return Go(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xv.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:ed,useDebugValue:Cc,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=ed(!1),t=e[0];return e=Yv.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=yt();if(ee){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ve===null)throw Error(j(349));Vn&30||Zm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,td(eh.bind(null,r,o,e),[e]),r.flags|=2048,zi(9,Jm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yt(),t=ve.identifierPrefix;if(ee){var n=Ot,r=Lt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kv={readContext:ot,useCallback:lh,useContext:ot,useEffect:Sc,useImperativeHandle:sh,useInsertionEffect:ih,useLayoutEffect:oh,useMemo:uh,useReducer:nl,useRef:rh,useState:function(){return nl(Oi)},useDebugValue:Cc,useDeferredValue:function(e){var t=at();return ch(t,de.memoizedState,e)},useTransition:function(){var e=nl(Oi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Km,useSyncExternalStore:qm,useId:fh,unstable_isNewReconciler:!1},qv={readContext:ot,useCallback:lh,useContext:ot,useEffect:Sc,useImperativeHandle:sh,useInsertionEffect:ih,useLayoutEffect:oh,useMemo:uh,useReducer:rl,useRef:rh,useState:function(){return rl(Oi)},useDebugValue:Cc,useDeferredValue:function(e){var t=at();return de===null?t.memoizedState=e:ch(t,de.memoizedState,e)},useTransition:function(){var e=rl(Oi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Km,useSyncExternalStore:qm,useId:fh,unstable_isNewReconciler:!1};function _r(e,t){try{var n="",r=t;do n+=Eg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function eu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zv=typeof WeakMap=="function"?WeakMap:Map;function hh(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Na||(Na=!0,cu=r),eu(e,t)},n}function gh(e,t,n){n=zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){eu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){eu(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function nd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dy.bind(null,e,t,n),t.then(e,e))}function rd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function id(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,cn(n,t,1))),n.lanes|=1),e)}var Jv=Ut.ReactCurrentOwner,$e=!1;function Te(e,t,n,r){t.child=e===null?Gm(t,null,n,r):Pr(t,e.child,n,r)}function od(e,t,n,r,i){n=n.render;var o=t.ref;return wr(t,i),r=bc(e,t,n,r,o,i),n=kc(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(ee&&n&&uc(t),t.flags|=1,Te(e,t,r,i),t.child)}function ad(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Oc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vh(e,t,o,r,i)):(e=Zo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(a,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=pn(o,r),e.ref=t.ref,e.return=t,t.child=e}function vh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ei(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,It(e,t,i)}return tu(e,t,n,r,i)}function yh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(fr,Ve),Ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(fr,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(fr,Ve),Ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(fr,Ve),Ve|=r;return Te(e,t,i,n),t.child}function xh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tu(e,t,n,r,i){var o=Ie(n)?Wn:Pe.current;return o=Er(t,o),wr(t,i),n=bc(e,t,n,r,o,i),r=kc(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(ee&&r&&uc(t),t.flags|=1,Te(e,t,n,i),t.child)}function sd(e,t,n,r,i){if(Ie(n)){var o=!0;wa(t)}else o=!1;if(wr(t,i),t.stateNode===null)Qo(e,t),Ym(t,n,r),Jl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Ie(n)?Wn:Pe.current,u=Er(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Zf(t,a,r,u),Zt=!1;var g=t.memoizedState;a.state=g,Ea(t,r,a,i),l=t.memoizedState,s!==r||g!==l||Re.current||Zt?(typeof f=="function"&&(Zl(t,n,f,r),l=t.memoizedState),(s=Zt||qf(t,n,s,r,g,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Vm(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ut(t.type,s),a.props=u,p=t.pendingProps,g=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=ot(l):(l=Ie(n)?Wn:Pe.current,l=Er(t,l));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||g!==l)&&Zf(t,a,r,l),Zt=!1,g=t.memoizedState,a.state=g,Ea(t,r,a,i);var x=t.memoizedState;s!==p||g!==x||Re.current||Zt?(typeof y=="function"&&(Zl(t,n,y,r),x=t.memoizedState),(u=Zt||qf(t,n,u,r,g,x,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return nu(e,t,n,r,o,i)}function nu(e,t,n,r,i,o){xh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Yf(t,n,!1),It(e,t,o);r=t.stateNode,Jv.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Pr(t,e.child,null,o),t.child=Pr(t,null,s,o)):Te(e,t,s,o),t.memoizedState=r.state,i&&Yf(t,n,!0),t.child}function wh(e){var t=e.stateNode;t.pendingContext?Hf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hf(e,t.context,!1),vc(e,t.containerInfo)}function ld(e,t,n,r,i){return jr(),fc(i),t.flags|=256,Te(e,t,n,r),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function bh(e,t,n){var r=t.pendingProps,i=te.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(te,i&1),e===null)return Kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=rs(a,r,0,null),e=Rn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=iu(n),t.memoizedState=ru,e):Ec(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ey(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=pn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=pn(s,o):(o=Rn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?iu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ru,r}return o=e.child,e=o.sibling,r=pn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ec(e,t){return t=rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Co(e,t,n,r){return r!==null&&fc(r),Pr(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ey(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=il(Error(j(422))),Co(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=rs({mode:"visible",children:r.children},i,0,null),o=Rn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Pr(t,e.child,null,a),t.child.memoizedState=iu(a),t.memoizedState=ru,o);if(!(t.mode&1))return Co(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=il(o,r,void 0),Co(e,t,a,r)}if(s=(a&e.childLanes)!==0,$e||s){if(r=ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Rt(e,i),mt(r,e,i,-1))}return Lc(),r=il(Error(j(421))),Co(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=py.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=un(i.nextSibling),Ye=t,ee=!0,ft=null,e!==null&&(tt[nt++]=Lt,tt[nt++]=Ot,tt[nt++]=Bn,Lt=e.id,Ot=e.overflow,Bn=t),t=Ec(t,r.children),t.flags|=4096,t)}function ud(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function ol(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function kh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Te(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,n,t);else if(e.tag===19)ud(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ja(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ol(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ja(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ol(t,!0,n,null,o);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ty(e,t,n){switch(t.tag){case 3:wh(t),jr();break;case 5:Qm(t);break;case 1:Ie(t.type)&&wa(t);break;case 4:vc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(Sa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?bh(e,t,n):(X(te,te.current&1),e=It(e,t,n),e!==null?e.sibling:null);X(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,yh(e,t,n)}return It(e,t,n)}var Sh,ou,Ch,Eh;Sh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ou=function(){};Ch=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(Et.current);var o=null;switch(n){case"input":i=Pl(e,i),r=Pl(e,r),o=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":i=Nl(e,i),r=Nl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ya)}Ol(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Eh=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ny(e,t,n){var r=t.pendingProps;switch(cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ie(t.type)&&xa(),Ce(t),null;case 3:return r=t.stateNode,Tr(),q(Re),q(Pe),xc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(pu(ft),ft=null))),ou(e,t),Ce(t),null;case 5:yc(t);var i=Ln(Ni.current);if(n=t.type,e!==null&&t.stateNode!=null)Ch(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Ce(t),null}if(e=Ln(Et.current),ko(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kt]=t,r[Ti]=o,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<ri.length;i++)G(ri[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":yf(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":wf(r,o),G("invalid",r)}Ol(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&bo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&bo(r.textContent,s,e),i=["children",""+s]):yi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&G("scroll",r)}switch(n){case"input":po(r),xf(r,o,!0);break;case"textarea":po(r),bf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ya)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[kt]=t,e[Ti]=r,Sh(e,t,!1,!1),t.stateNode=e;e:{switch(a=zl(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<ri.length;i++)G(ri[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":yf(e,r),i=Pl(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),G("invalid",e);break;case"textarea":wf(e,r),i=Nl(e,r),G("invalid",e);break;default:i=r}Ol(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?tm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jp(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xi(e,l):typeof l=="number"&&xi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&G("scroll",e):l!=null&&Qu(e,o,l,a))}switch(n){case"input":po(e),xf(e,r,!1);break;case"textarea":po(e),bf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?gr(e,!!r.multiple,o,!1):r.defaultValue!=null&&gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Eh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Ln(Ni.current),Ln(Et.current),ko(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(o=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Ce(t),null;case 13:if(q(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&He!==null&&t.mode&1&&!(t.flags&128))Wm(),jr(),t.flags|=98560,o=!1;else if(o=ko(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[kt]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else ft!==null&&(pu(ft),ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?pe===0&&(pe=3):Lc())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Tr(),ou(e,t),e===null&&ji(t.stateNode.containerInfo),Ce(t),null;case 10:return mc(t.type._context),Ce(t),null;case 17:return Ie(t.type)&&xa(),Ce(t),null;case 19:if(q(te),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)qr(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ja(e),a!==null){for(t.flags|=128,qr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Nr&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ja(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ee)return Ce(t),null}else 2*le()-o.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,qr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,n=te.current,X(te,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Nc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function ry(e,t){switch(cc(t),t.tag){case 1:return Ie(t.type)&&xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),q(Re),q(Pe),xc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yc(t),null;case 13:if(q(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(te),null;case 4:return Tr(),null;case 10:return mc(t.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var Eo=!1,je=!1,iy=typeof WeakSet=="function"?WeakSet:Set,O=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function au(e,t,n){try{n()}catch(r){oe(e,t,r)}}var cd=!1;function oy(e,t){if(Bl=ha,e=_m(),lc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,f=0,p=e,g=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==o||r!==0&&p.nodeType!==3||(l=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break t;if(g===n&&++u===i&&(s=a),g===o&&++f===r&&(l=a),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vl={focusedElem:e,selectionRange:n},ha=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,k=x.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:ut(t.type,v),k);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){oe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return x=cd,cd=!1,x}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&au(t,n,o)}i=i.next}while(i!==r)}}function ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function su(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jh(e){var t=e.alternate;t!==null&&(e.alternate=null,jh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[Ti],delete t[Xl],delete t[Uv],delete t[Wv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ph(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ph(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ya));else if(r!==4&&(e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}function uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(uu(e,t,n),e=e.sibling;e!==null;)uu(e,t,n),e=e.sibling}var xe=null,ct=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Th(e,t,n),n=n.sibling}function Th(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Xa,n)}catch{}switch(n.tag){case 5:je||cr(n,t);case 6:var r=xe,i=ct;xe=null,Yt(e,t,n),xe=r,ct=i,xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ct?(e=xe,n=n.stateNode,e.nodeType===8?Zs(e.parentNode,n):e.nodeType===1&&Zs(e,n),Si(e)):Zs(xe,n.stateNode));break;case 4:r=xe,i=ct,xe=n.stateNode.containerInfo,ct=!0,Yt(e,t,n),xe=r,ct=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&au(n,t,a),i=i.next}while(i!==r)}Yt(e,t,n);break;case 1:if(!je&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Yt(e,t,n),je=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function dd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iy),t.forEach(function(r){var i=my.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,ct=!1;break e;case 3:xe=s.stateNode.containerInfo,ct=!0;break e;case 4:xe=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(xe===null)throw Error(j(160));Th(o,a,i),xe=null,ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_h(t,e),t=t.sibling}function _h(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),vt(e),r&4){try{di(3,e,e.return),ts(3,e)}catch(v){oe(e,e.return,v)}try{di(5,e,e.return)}catch(v){oe(e,e.return,v)}}break;case 1:lt(t,e),vt(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if(lt(t,e),vt(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var i=e.stateNode;try{xi(i,"")}catch(v){oe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Kp(i,o),zl(s,a);var u=zl(s,o);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?tm(i,p):f==="dangerouslySetInnerHTML"?Jp(i,p):f==="children"?xi(i,p):Qu(i,f,p,u)}switch(s){case"input":Tl(i,o);break;case"textarea":qp(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?gr(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?gr(i,!!o.multiple,o.defaultValue,!0):gr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ti]=o}catch(v){oe(e,e.return,v)}}break;case 6:if(lt(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){oe(e,e.return,v)}}break;case 3:if(lt(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(v){oe(e,e.return,v)}break;case 4:lt(t,e),vt(e);break;case 13:lt(t,e),vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tc=le())),r&4&&dd(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||f,lt(t,e),je=u):lt(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(p=O=f;O!==null;){switch(g=O,y=g.child,g.tag){case 0:case 11:case 14:case 15:di(4,g,g.return);break;case 1:cr(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){oe(r,n,v)}}break;case 5:cr(g,g.return);break;case 22:if(g.memoizedState!==null){md(p);continue}}y!==null?(y.return=g,O=y):md(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=em("display",a))}catch(v){oe(e,e.return,v)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){oe(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lt(t,e),vt(e),r&4&&dd(e);break;case 21:break;default:lt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ph(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xi(i,""),r.flags&=-33);var o=fd(e);uu(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=fd(e);lu(e,s,a);break;default:throw Error(j(161))}}catch(l){oe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ay(e,t,n){O=e,Nh(e)}function Nh(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Eo;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||je;s=Eo;var u=je;if(Eo=a,(je=l)&&!u)for(O=i;O!==null;)a=O,l=a.child,a.tag===22&&a.memoizedState!==null?hd(i):l!==null?(l.return=a,O=l):hd(i);for(;o!==null;)O=o,Nh(o),o=o.sibling;O=i,Eo=s,je=u}pd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):pd(e)}}function pd(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||ts(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Kf(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Si(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}je||t.flags&512&&su(t)}catch(g){oe(t,t.return,g)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function md(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function hd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ts(4,t)}catch(l){oe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){oe(t,i,l)}}var o=t.return;try{su(t)}catch(l){oe(t,o,l)}break;case 5:var a=t.return;try{su(t)}catch(l){oe(t,a,l)}}}catch(l){oe(t,t.return,l)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var sy=Math.ceil,_a=Ut.ReactCurrentDispatcher,jc=Ut.ReactCurrentOwner,it=Ut.ReactCurrentBatchConfig,U=0,ve=null,fe=null,be=0,Ve=0,fr=kn(0),pe=0,$i=null,Hn=0,ns=0,Pc=0,pi=null,ze=null,Tc=0,Nr=1/0,Tt=null,Na=!1,cu=null,fn=null,jo=!1,nn=null,La=0,mi=0,fu=null,Ko=-1,qo=0;function Ne(){return U&6?le():Ko!==-1?Ko:Ko=le()}function dn(e){return e.mode&1?U&2&&be!==0?be&-be:Vv.transition!==null?(qo===0&&(qo=pm()),qo):(e=H,e!==0||(e=window.event,e=e===void 0?16:wm(e.type)),e):1}function mt(e,t,n,r){if(50<mi)throw mi=0,fu=null,Error(j(185));Xi(e,n,r),(!(U&2)||e!==ve)&&(e===ve&&(!(U&2)&&(ns|=n),pe===4&&en(e,be)),Me(e,r),n===1&&U===0&&!(t.mode&1)&&(Nr=le()+500,Za&&Sn()))}function Me(e,t){var n=e.callbackNode;Vg(e,t);var r=ma(e,e===ve?be:0);if(r===0)n!==null&&Cf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cf(n),t===1)e.tag===0?Bv(gd.bind(null,e)):Fm(gd.bind(null,e)),Fv(function(){!(U&6)&&Sn()}),n=null;else{switch(mm(r)){case 1:n=ec;break;case 4:n=fm;break;case 16:n=pa;break;case 536870912:n=dm;break;default:n=pa}n=Mh(n,Lh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lh(e,t){if(Ko=-1,qo=0,U&6)throw Error(j(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var r=ma(e,e===ve?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oa(e,r);else{t=r;var i=U;U|=2;var o=zh();(ve!==e||be!==t)&&(Tt=null,Nr=le()+500,An(e,t));do try{cy();break}catch(s){Oh(e,s)}while(1);pc(),_a.current=o,U=i,fe!==null?t=0:(ve=null,be=0,t=pe)}if(t!==0){if(t===2&&(i=Ml(e),i!==0&&(r=i,t=du(e,i))),t===1)throw n=$i,An(e,0),en(e,r),Me(e,le()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!ly(i)&&(t=Oa(e,r),t===2&&(o=Ml(e),o!==0&&(r=o,t=du(e,o))),t===1))throw n=$i,An(e,0),en(e,r),Me(e,le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Tn(e,ze,Tt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=Tc+500-le(),10<t)){if(ma(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yl(Tn.bind(null,e,ze,Tt),t);break}Tn(e,ze,Tt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-pt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sy(r/1960))-r,10<r){e.timeoutHandle=Yl(Tn.bind(null,e,ze,Tt),r);break}Tn(e,ze,Tt);break;case 5:Tn(e,ze,Tt);break;default:throw Error(j(329))}}}return Me(e,le()),e.callbackNode===n?Lh.bind(null,e):null}function du(e,t){var n=pi;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=Oa(e,t),e!==2&&(t=ze,ze=n,t!==null&&pu(t)),e}function pu(e){ze===null?ze=e:ze.push.apply(ze,e)}function ly(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!gt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~Pc,t&=~ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function gd(e){if(U&6)throw Error(j(327));br();var t=ma(e,0);if(!(t&1))return Me(e,le()),null;var n=Oa(e,t);if(e.tag!==0&&n===2){var r=Ml(e);r!==0&&(t=r,n=du(e,r))}if(n===1)throw n=$i,An(e,0),en(e,t),Me(e,le()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,ze,Tt),Me(e,le()),null}function _c(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Nr=le()+500,Za&&Sn())}}function Yn(e){nn!==null&&nn.tag===0&&!(U&6)&&br();var t=U;U|=1;var n=it.transition,r=H;try{if(it.transition=null,H=1,e)return e()}finally{H=r,it.transition=n,U=t,!(U&6)&&Sn()}}function Nc(){Ve=fr.current,q(fr)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mv(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xa();break;case 3:Tr(),q(Re),q(Pe),xc();break;case 5:yc(r);break;case 4:Tr();break;case 13:q(te);break;case 19:q(te);break;case 10:mc(r.type._context);break;case 22:case 23:Nc()}n=n.return}if(ve=e,fe=e=pn(e.current,null),be=Ve=t,pe=0,$i=null,Pc=ns=Hn=0,ze=pi=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Nn=null}return e}function Oh(e,t){do{var n=fe;try{if(pc(),Xo.current=Ta,Pa){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Pa=!1}if(Vn=0,he=de=ne=null,fi=!1,Li=0,jc.current=null,n===null||n.return===null){pe=1,$i=t,fe=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=be,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=rd(a);if(y!==null){y.flags&=-257,id(y,a,s,o,t),y.mode&1&&nd(o,u,t),t=y,l=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(l),t.updateQueue=v}else x.add(l);break e}else{if(!(t&1)){nd(o,u,t),Lc();break e}l=Error(j(426))}}else if(ee&&s.mode&1){var k=rd(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),id(k,a,s,o,t),fc(_r(l,s));break e}}o=l=_r(l,s),pe!==4&&(pe=2),pi===null?pi=[o]:pi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=hh(o,l,t);Qf(o,m);break e;case 1:s=l;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(fn===null||!fn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=gh(o,s,t);Qf(o,w);break e}}o=o.return}while(o!==null)}Ah(n)}catch(b){t=b,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function zh(){var e=_a.current;return _a.current=Ta,e===null?Ta:e}function Lc(){(pe===0||pe===3||pe===2)&&(pe=4),ve===null||!(Hn&268435455)&&!(ns&268435455)||en(ve,be)}function Oa(e,t){var n=U;U|=2;var r=zh();(ve!==e||be!==t)&&(Tt=null,An(e,t));do try{uy();break}catch(i){Oh(e,i)}while(1);if(pc(),U=n,_a.current=r,fe!==null)throw Error(j(261));return ve=null,be=0,pe}function uy(){for(;fe!==null;)$h(fe)}function cy(){for(;fe!==null&&!Ag();)$h(fe)}function $h(e){var t=Ih(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?Ah(e):fe=t,jc.current=null}function Ah(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ry(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,fe=null;return}}else if(n=ny(n,t,Ve),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);pe===0&&(pe=5)}function Tn(e,t,n){var r=H,i=it.transition;try{it.transition=null,H=1,fy(e,t,n,r)}finally{it.transition=i,H=r}return null}function fy(e,t,n,r){do br();while(nn!==null);if(U&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Hg(e,o),e===ve&&(fe=ve=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jo||(jo=!0,Mh(pa,function(){return br(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=it.transition,it.transition=null;var a=H;H=1;var s=U;U|=4,jc.current=null,oy(e,n),_h(n,e),Lv(Vl),ha=!!Bl,Vl=Bl=null,e.current=n,ay(n),Rg(),U=s,H=a,it.transition=o}else e.current=n;if(jo&&(jo=!1,nn=e,La=i),o=e.pendingLanes,o===0&&(fn=null),Fg(n.stateNode),Me(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Na)throw Na=!1,e=cu,cu=null,e;return La&1&&e.tag!==0&&br(),o=e.pendingLanes,o&1?e===fu?mi++:(mi=0,fu=e):mi=0,Sn(),null}function br(){if(nn!==null){var e=mm(La),t=it.transition,n=H;try{if(it.transition=null,H=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,La=0,U&6)throw Error(j(331));var i=U;for(U|=4,O=e.current;O!==null;){var o=O,a=o.child;if(O.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:di(8,f,o)}var p=f.child;if(p!==null)p.return=f,O=p;else for(;O!==null;){f=O;var g=f.sibling,y=f.return;if(jh(f),f===u){O=null;break}if(g!==null){g.return=y,O=g;break}O=y}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}O=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,O=a;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:di(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,O=m;break e}O=o.return}}var c=e.current;for(O=c;O!==null;){a=O;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,O=h;else e:for(a=c;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ts(9,s)}}catch(b){oe(s,s.return,b)}if(s===a){O=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,O=w;break e}O=s.return}}if(U=i,Sn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Xa,e)}catch{}r=!0}return r}finally{H=n,it.transition=t}}return!1}function vd(e,t,n){t=_r(n,t),t=hh(e,t,1),e=cn(e,t,1),t=Ne(),e!==null&&(Xi(e,1,t),Me(e,t))}function oe(e,t,n){if(e.tag===3)vd(e,e,n);else for(;t!==null;){if(t.tag===3){vd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=_r(n,e),e=gh(t,e,1),t=cn(t,e,1),e=Ne(),t!==null&&(Xi(t,1,e),Me(t,e));break}}t=t.return}}function dy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(be&n)===n&&(pe===4||pe===3&&(be&130023424)===be&&500>le()-Tc?An(e,0):Pc|=n),Me(e,t)}function Rh(e,t){t===0&&(e.mode&1?(t=go,go<<=1,!(go&130023424)&&(go=4194304)):t=1);var n=Ne();e=Rt(e,t),e!==null&&(Xi(e,t,n),Me(e,n))}function py(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rh(e,n)}function my(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Rh(e,n)}var Ih;Ih=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,ty(e,t,n);$e=!!(e.flags&131072)}else $e=!1,ee&&t.flags&1048576&&Dm(t,ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qo(e,t),e=t.pendingProps;var i=Er(t,Pe.current);wr(t,n),i=bc(null,t,r,e,i,n);var o=kc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(o=!0,wa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gc(t),i.updater=Ja,t.stateNode=i,i._reactInternals=t,Jl(t,r,e,n),t=nu(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&uc(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gy(r),e=ut(r,e),i){case 0:t=tu(null,t,r,e,n);break e;case 1:t=sd(null,t,r,e,n);break e;case 11:t=od(null,t,r,e,n);break e;case 14:t=ad(null,t,r,ut(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),tu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),sd(e,t,r,i,n);case 3:e:{if(wh(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vm(e,t),Ea(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=_r(Error(j(423)),t),t=ld(e,t,r,n,i);break e}else if(r!==i){i=_r(Error(j(424)),t),t=ld(e,t,r,n,i);break e}else for(He=un(t.stateNode.containerInfo.firstChild),Ye=t,ee=!0,ft=null,n=Gm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){t=It(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Qm(t),e===null&&Kl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Hl(r,i)?a=null:o!==null&&Hl(r,o)&&(t.flags|=32),xh(e,t),Te(e,t,a,n),t.child;case 6:return e===null&&Kl(t),null;case 13:return bh(e,t,n);case 4:return vc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),od(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,X(Sa,r._currentValue),r._currentValue=a,o!==null)if(gt(o.value,a)){if(o.children===i.children&&!Re.current){t=It(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=zt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ql(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ql(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,wr(t,n),i=ot(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),ad(e,t,r,i,n);case 15:return vh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Qo(e,t),t.tag=1,Ie(r)?(e=!0,wa(t)):e=!1,wr(t,n),Ym(t,r,i),Jl(t,r,i,n),nu(null,t,r,!0,e,n);case 19:return kh(e,t,n);case 22:return yh(e,t,n)}throw Error(j(156,t.tag))};function Mh(e,t){return cm(e,t)}function hy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new hy(e,t,n,r)}function Oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gy(e){if(typeof e=="function")return Oc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qu)return 11;if(e===Zu)return 14}return 2}function pn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Oc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case tr:return Rn(n.children,i,o,t);case Ku:a=8,i|=8;break;case Sl:return e=rt(12,n,t,i|2),e.elementType=Sl,e.lanes=o,e;case Cl:return e=rt(13,n,t,i),e.elementType=Cl,e.lanes=o,e;case El:return e=rt(19,n,t,i),e.elementType=El,e.lanes=o,e;case Xp:return rs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hp:a=10;break e;case Yp:a=9;break e;case qu:a=11;break e;case Zu:a=14;break e;case qt:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Rn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function rs(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Xp,e.lanes=n,e.stateNode={isHidden:!1},e}function al(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Us(0),this.expirationTimes=Us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zc(e,t,n,r,i,o,a,s,l){return e=new vy(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=rt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(o),e}function yy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fh(e){if(!e)return vn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Mm(e,n,t)}return t}function Dh(e,t,n,r,i,o,a,s,l){return e=zc(n,r,!0,e,i,o,a,s,l),e.context=Fh(null),n=e.current,r=Ne(),i=dn(n),o=zt(r,i),o.callback=t??null,cn(n,o,i),e.current.lanes=i,Xi(e,i,r),Me(e,r),e}function is(e,t,n,r){var i=t.current,o=Ne(),a=dn(i);return n=Fh(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cn(i,t,a),e!==null&&(mt(e,i,a,o),Yo(e,i,a)),a}function za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){yd(e,t),(e=e.alternate)&&yd(e,t)}function xy(){return null}var Uh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ac(e){this._internalRoot=e}os.prototype.render=Ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));is(e,t,null,null)};os.prototype.unmount=Ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yn(function(){is(null,e,null,null)}),t[At]=null}};function os(e){this._internalRoot=e}os.prototype.unstable_scheduleHydration=function(e){if(e){var t=vm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&xm(e)}};function Rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function as(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xd(){}function wy(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=za(a);o.call(u)}}var a=Dh(t,r,e,0,null,!1,!1,"",xd);return e._reactRootContainer=a,e[At]=a.current,ji(e.nodeType===8?e.parentNode:e),Yn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=za(l);s.call(u)}}var l=zc(e,0,!1,null,null,!1,!1,"",xd);return e._reactRootContainer=l,e[At]=l.current,ji(e.nodeType===8?e.parentNode:e),Yn(function(){is(t,l,n,r)}),l}function ss(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=za(a);s.call(l)}}is(t,a,e,i)}else a=wy(n,t,e,i,r);return za(a)}hm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ni(t.pendingLanes);n!==0&&(tc(t,n|1),Me(t,le()),!(U&6)&&(Nr=le()+500,Sn()))}break;case 13:Yn(function(){var r=Rt(e,1);if(r!==null){var i=Ne();mt(r,e,1,i)}}),$c(e,1)}};nc=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=Ne();mt(t,e,134217728,n)}$c(e,134217728)}};gm=function(e){if(e.tag===13){var t=dn(e),n=Rt(e,t);if(n!==null){var r=Ne();mt(n,e,t,r)}$c(e,t)}};vm=function(){return H};ym=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Al=function(e,t,n){switch(t){case"input":if(Tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qa(r);if(!i)throw Error(j(90));Qp(r),Tl(r,i)}}}break;case"textarea":qp(e,n);break;case"select":t=n.value,t!=null&&gr(e,!!n.multiple,t,!1)}};im=_c;om=Yn;var by={usingClientEntryPoint:!1,Events:[Qi,or,qa,nm,rm,_c]},Zr={findFiberByHostInstance:_n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ky={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lm(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{Xa=Po.inject(ky),Ct=Po}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rc(t))throw Error(j(200));return yy(e,t,null,n)};Qe.createRoot=function(e,t){if(!Rc(e))throw Error(j(299));var n=!1,r="",i=Uh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zc(e,1,!1,null,null,n,!1,r,i),e[At]=t.current,ji(e.nodeType===8?e.parentNode:e),new Ac(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=lm(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Yn(e)};Qe.hydrate=function(e,t,n){if(!as(t))throw Error(j(200));return ss(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Rc(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Uh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Dh(t,null,e,1,n??null,i,!1,o,a),e[At]=t.current,ji(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new os(t)};Qe.render=function(e,t,n){if(!as(t))throw Error(j(200));return ss(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!as(e))throw Error(j(40));return e._reactRootContainer?(Yn(function(){ss(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};Qe.unstable_batchedUpdates=_c;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!as(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return ss(e,t,n,!1,r)};Qe.version="18.2.0-next-9e3b772b8-20220608";function Wh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wh)}catch(e){console.error(e)}}Wh(),Dp.exports=Qe;var Sy=Dp.exports,wd=Sy;bl.createRoot=wd.createRoot,bl.hydrateRoot=wd.hydrateRoot;function mu(){return mu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mu.apply(this,arguments)}function Bh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Cy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ey=Bh(function(e){return Cy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function jy(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Py(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ty=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Py(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=jy(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ee="-ms-",$a="-moz-",W="-webkit-",Vh="comm",Ic="rule",Mc="decl",_y="@import",Hh="@keyframes",Ny="@layer",Ly=Math.abs,ls=String.fromCharCode,Oy=Object.assign;function zy(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function Yh(e){return e.trim()}function $y(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function hu(e,t){return e.indexOf(t)}function we(e,t){return e.charCodeAt(t)|0}function Ai(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function Fc(e){return e.length}function To(e,t){return t.push(e),e}function Ay(e,t){return e.map(t).join("")}var us=1,Lr=1,Xh=0,Fe=0,ue=0,Ur="";function cs(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:us,column:Lr,length:a,return:""}}function Jr(e,t){return Oy(cs("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ry(){return ue}function Iy(){return ue=Fe>0?we(Ur,--Fe):0,Lr--,ue===10&&(Lr=1,us--),ue}function Xe(){return ue=Fe<Xh?we(Ur,Fe++):0,Lr++,ue===10&&(Lr=1,us++),ue}function jt(){return we(Ur,Fe)}function Jo(){return Fe}function qi(e,t){return Ai(Ur,e,t)}function Ri(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gh(e){return us=Lr=1,Xh=xt(Ur=e),Fe=0,[]}function Qh(e){return Ur="",e}function ea(e){return Yh(qi(Fe-1,gu(e===91?e+2:e===40?e+1:e)))}function My(e){for(;(ue=jt())&&ue<33;)Xe();return Ri(e)>2||Ri(ue)>3?"":" "}function Fy(e,t){for(;--t&&Xe()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return qi(e,Jo()+(t<6&&jt()==32&&Xe()==32))}function gu(e){for(;Xe();)switch(ue){case e:return Fe;case 34:case 39:e!==34&&e!==39&&gu(ue);break;case 40:e===41&&gu(e);break;case 92:Xe();break}return Fe}function Dy(e,t){for(;Xe()&&e+ue!==47+10;)if(e+ue===42+42&&jt()===47)break;return"/*"+qi(t,Fe-1)+"*"+ls(e===47?e:Xe())}function Uy(e){for(;!Ri(jt());)Xe();return qi(e,Fe)}function Wy(e){return Qh(ta("",null,null,null,[""],e=Gh(e),0,[0],e))}function ta(e,t,n,r,i,o,a,s,l){for(var u=0,f=0,p=a,g=0,y=0,x=0,v=1,k=1,m=1,c=0,h="",w=i,b=o,E=r,S=h;k;)switch(x=c,c=Xe()){case 40:if(x!=108&&we(S,p-1)==58){hu(S+=B(ea(c),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:S+=ea(c);break;case 9:case 10:case 13:case 32:S+=My(x);break;case 92:S+=Fy(Jo()-1,7);continue;case 47:switch(jt()){case 42:case 47:To(By(Dy(Xe(),Jo()),t,n),l);break;default:S+="/"}break;case 123*v:s[u++]=xt(S)*m;case 125*v:case 59:case 0:switch(c){case 0:case 125:k=0;case 59+f:m==-1&&(S=B(S,/\f/g,"")),y>0&&xt(S)-p&&To(y>32?kd(S+";",r,n,p-1):kd(B(S," ","")+";",r,n,p-2),l);break;case 59:S+=";";default:if(To(E=bd(S,t,n,u,f,i,s,h,w=[],b=[],p),o),c===123)if(f===0)ta(S,t,E,E,w,o,p,s,b);else switch(g===99&&we(S,3)===110?100:g){case 100:case 108:case 109:case 115:ta(e,E,E,r&&To(bd(e,E,E,0,0,i,s,h,i,w=[],p),b),i,b,p,s,r?w:b);break;default:ta(S,E,E,E,[""],b,0,s,b)}}u=f=y=0,v=m=1,h=S="",p=a;break;case 58:p=1+xt(S),y=x;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&Iy()==125)continue}switch(S+=ls(c),c*v){case 38:m=f>0?1:(S+="\f",-1);break;case 44:s[u++]=(xt(S)-1)*m,m=1;break;case 64:jt()===45&&(S+=ea(Xe())),g=jt(),f=p=xt(h=S+=Uy(Jo())),c++;break;case 45:x===45&&xt(S)==2&&(v=0)}}return o}function bd(e,t,n,r,i,o,a,s,l,u,f){for(var p=i-1,g=i===0?o:[""],y=Fc(g),x=0,v=0,k=0;x<r;++x)for(var m=0,c=Ai(e,p+1,p=Ly(v=a[x])),h=e;m<y;++m)(h=Yh(v>0?g[m]+" "+c:B(c,/&\f/g,g[m])))&&(l[k++]=h);return cs(e,t,n,i===0?Ic:s,l,u,f)}function By(e,t,n){return cs(e,t,n,Vh,ls(Ry()),Ai(e,2,-2),0)}function kd(e,t,n,r){return cs(e,t,n,Mc,Ai(e,0,r),Ai(e,r+1,-1),r)}function kr(e,t){for(var n="",r=Fc(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Vy(e,t,n,r){switch(e.type){case Ny:if(e.children.length)break;case _y:case Mc:return e.return=e.return||e.value;case Vh:return"";case Hh:return e.return=e.value+"{"+kr(e.children,r)+"}";case Ic:e.value=e.props.join(",")}return xt(n=kr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Hy(e){var t=Fc(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function Yy(e){return function(t){t.root||(t=t.return)&&e(t)}}var Xy=function(t,n,r){for(var i=0,o=0;i=o,o=jt(),i===38&&o===12&&(n[r]=1),!Ri(o);)Xe();return qi(t,Fe)},Gy=function(t,n){var r=-1,i=44;do switch(Ri(i)){case 0:i===38&&jt()===12&&(n[r]=1),t[r]+=Xy(Fe-1,n,r);break;case 2:t[r]+=ea(i);break;case 4:if(i===44){t[++r]=jt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ls(i)}while(i=Xe());return t},Qy=function(t,n){return Qh(Gy(Gh(t),n))},Sd=new WeakMap,Ky=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Sd.get(r))&&!i){Sd.set(t,!0);for(var o=[],a=Qy(n,o),s=r.props,l=0,u=0;l<a.length;l++)for(var f=0;f<s.length;f++,u++)t.props[u]=o[l]?a[l].replace(/&\f/g,s[f]):s[f]+" "+a[l]}}},qy=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Kh(e,t){switch(zy(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+$a+e+Ee+e+e;case 6828:case 4268:return W+e+Ee+e+e;case 6165:return W+e+Ee+"flex-"+e+e;case 5187:return W+e+B(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Ee+"flex-$1$2")+e;case 5443:return W+e+Ee+"flex-item-"+B(e,/flex-|-self/,"")+e;case 4675:return W+e+Ee+"flex-line-pack"+B(e,/align-content|flex-|-self/,"")+e;case 5548:return W+e+Ee+B(e,"shrink","negative")+e;case 5292:return W+e+Ee+B(e,"basis","preferred-size")+e;case 6060:return W+"box-"+B(e,"-grow","")+W+e+Ee+B(e,"grow","positive")+e;case 4554:return W+B(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+$a+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~hu(e,"stretch")?Kh(B(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(we(e,t+1)!==115)break;case 6444:switch(we(e,xt(e)-3-(~hu(e,"!important")&&10))){case 107:return B(e,":",":"+W)+e;case 101:return B(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+W+(we(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+Ee+"$2box$3")+e}break;case 5936:switch(we(e,t+11)){case 114:return W+e+Ee+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Ee+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Ee+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return W+e+Ee+e+e}return e}var Zy=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Mc:t.return=Kh(t.value,t.length);break;case Hh:return kr([Jr(t,{value:B(t.value,"@","@"+W)})],i);case Ic:if(t.length)return Ay(t.props,function(o){switch($y(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return kr([Jr(t,{props:[B(o,/:(read-\w+)/,":"+$a+"$1")]})],i);case"::placeholder":return kr([Jr(t,{props:[B(o,/:(plac\w+)/,":"+W+"input-$1")]}),Jr(t,{props:[B(o,/:(plac\w+)/,":"+$a+"$1")]}),Jr(t,{props:[B(o,/:(plac\w+)/,Ee+"input-$1")]})],i)}return""})}},Jy=[Zy],ex=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var k=v.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=t.stylisPlugins||Jy,o={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var k=v.getAttribute("data-emotion").split(" "),m=1;m<k.length;m++)o[k[m]]=!0;s.push(v)});var l,u=[Ky,qy];{var f,p=[Vy,Yy(function(v){f.insert(v)})],g=Hy(u.concat(i,p)),y=function(k){return kr(Wy(k),g)};l=function(k,m,c,h){f=c,y(k?k+"{"+m.styles+"}":m.styles),h&&(x.inserted[m.name]=!0)}}var x={key:n,sheet:new Ty({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return x.sheet.hydrate(s),x},qh={exports:{}},Y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=typeof Symbol=="function"&&Symbol.for,Dc=ye?Symbol.for("react.element"):60103,Uc=ye?Symbol.for("react.portal"):60106,fs=ye?Symbol.for("react.fragment"):60107,ds=ye?Symbol.for("react.strict_mode"):60108,ps=ye?Symbol.for("react.profiler"):60114,ms=ye?Symbol.for("react.provider"):60109,hs=ye?Symbol.for("react.context"):60110,Wc=ye?Symbol.for("react.async_mode"):60111,gs=ye?Symbol.for("react.concurrent_mode"):60111,vs=ye?Symbol.for("react.forward_ref"):60112,ys=ye?Symbol.for("react.suspense"):60113,tx=ye?Symbol.for("react.suspense_list"):60120,xs=ye?Symbol.for("react.memo"):60115,ws=ye?Symbol.for("react.lazy"):60116,nx=ye?Symbol.for("react.block"):60121,rx=ye?Symbol.for("react.fundamental"):60117,ix=ye?Symbol.for("react.responder"):60118,ox=ye?Symbol.for("react.scope"):60119;function qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dc:switch(e=e.type,e){case Wc:case gs:case fs:case ps:case ds:case ys:return e;default:switch(e=e&&e.$$typeof,e){case hs:case vs:case ws:case xs:case ms:return e;default:return t}}case Uc:return t}}}function Zh(e){return qe(e)===gs}Y.AsyncMode=Wc;Y.ConcurrentMode=gs;Y.ContextConsumer=hs;Y.ContextProvider=ms;Y.Element=Dc;Y.ForwardRef=vs;Y.Fragment=fs;Y.Lazy=ws;Y.Memo=xs;Y.Portal=Uc;Y.Profiler=ps;Y.StrictMode=ds;Y.Suspense=ys;Y.isAsyncMode=function(e){return Zh(e)||qe(e)===Wc};Y.isConcurrentMode=Zh;Y.isContextConsumer=function(e){return qe(e)===hs};Y.isContextProvider=function(e){return qe(e)===ms};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dc};Y.isForwardRef=function(e){return qe(e)===vs};Y.isFragment=function(e){return qe(e)===fs};Y.isLazy=function(e){return qe(e)===ws};Y.isMemo=function(e){return qe(e)===xs};Y.isPortal=function(e){return qe(e)===Uc};Y.isProfiler=function(e){return qe(e)===ps};Y.isStrictMode=function(e){return qe(e)===ds};Y.isSuspense=function(e){return qe(e)===ys};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fs||e===gs||e===ps||e===ds||e===ys||e===tx||typeof e=="object"&&e!==null&&(e.$$typeof===ws||e.$$typeof===xs||e.$$typeof===ms||e.$$typeof===hs||e.$$typeof===vs||e.$$typeof===rx||e.$$typeof===ix||e.$$typeof===ox||e.$$typeof===nx)};Y.typeOf=qe;qh.exports=Y;var ax=qh.exports,Jh=ax,sx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},e0={};e0[Jh.ForwardRef]=sx;e0[Jh.Memo]=lx;var ux=!0;function cx(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var t0=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||ux===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},fx=function(t,n,r){t0(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function dx(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var n0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},px=/[A-Z]|^ms/g,mx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,r0=function(t){return t.charCodeAt(1)===45},Cd=function(t){return t!=null&&typeof t!="boolean"},ll=Bh(function(e){return r0(e)?e:e.replace(px,"-$&").toLowerCase()}),Ed=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(mx,function(r,i,o){return wt={name:i,styles:o,next:wt},i})}return n0[t]!==1&&!r0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ii(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return wt={name:n.name,styles:n.styles,next:wt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)wt={name:r.name,styles:r.styles,next:wt},r=r.next;var i=n.styles+";";return i}return hx(e,t,n)}case"function":{if(e!==void 0){var o=wt,a=n(e);return wt=o,Ii(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function hx(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ii(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Cd(a)&&(r+=ll(o)+":"+Ed(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Cd(a[s])&&(r+=ll(o)+":"+Ed(o,a[s])+";");else{var l=Ii(e,t,a);switch(o){case"animation":case"animationName":{r+=ll(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var jd=/label:\s*([^\s;\n{]+)\s*(;|$)/g,wt,i0=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";wt=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=Ii(r,n,a)):o+=a[0];for(var s=1;s<t.length;s++)o+=Ii(r,n,t[s]),i&&(o+=a[s]);jd.lastIndex=0;for(var l="",u;(u=jd.exec(o))!==null;)l+="-"+u[1];var f=dx(o)+l;return{name:f,styles:o,next:wt}},gx=function(t){return t()},vx=wl["useInsertionEffect"]?wl["useInsertionEffect"]:!1,yx=vx||gx,o0=C.createContext(typeof HTMLElement<"u"?ex({key:"css"}):null);o0.Provider;var xx=function(t){return C.forwardRef(function(n,r){var i=C.useContext(o0);return t(n,i,r)})},wx=C.createContext({});function bx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i0(t)}var Bc=function(){var t=bx.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},kx=Ey,Sx=function(t){return t!=="theme"},Pd=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?kx:Sx},Td=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},Cx=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return t0(n,r,i),yx(function(){return fx(n,r,i)}),null},Ex=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var s=Td(t,n,r),l=s||Pd(i),u=!l("as");return function(){var f=arguments,p=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&p.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)p.push.apply(p,f);else{p.push(f[0][0]);for(var g=f.length,y=1;y<g;y++)p.push(f[y],f[0][y])}var x=xx(function(v,k,m){var c=u&&v.as||i,h="",w=[],b=v;if(v.theme==null){b={};for(var E in v)b[E]=v[E];b.theme=C.useContext(wx)}typeof v.className=="string"?h=cx(k.registered,w,v.className):v.className!=null&&(h=v.className+" ");var S=i0(p.concat(w),k.registered,b);h+=k.key+"-"+S.name,a!==void 0&&(h+=" "+a);var N=u&&s===void 0?Pd(c):l,M={};for(var R in v)u&&R==="as"||N(R)&&(M[R]=v[R]);return M.className=h,M.ref=m,C.createElement(C.Fragment,null,C.createElement(Cx,{cache:k,serialized:S,isStringTag:typeof c=="string"}),C.createElement(c,M))});return x.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=p,x.__emotion_forwardProp=s,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(v,k){return e(v,mu({},n,k,{shouldForwardProp:Td(x,k,!0)})).apply(void 0,p)},x}},jx=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],F=Ex.bind();jx.forEach(function(e){F[e]=F(e)});const Px=Bc`
  100% {
    transform: rotate(360deg);
  }
`,Tx=Bc`
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
`,_x=Bc`
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
`,Nx=F.div`
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
`,Lx=F.svg`
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
  animation: ${Tx} 1.5s ease-in-out infinite, ${_x} 6s ease-in-out infinite;
  stroke-linecap: round;
`,zx=()=>d.jsx(Nx,{children:d.jsx(Lx,{viewBox:"25 25 50 50",children:d.jsx(Ox,{cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"})})});/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}var rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rn||(rn={}));const _d="popstate";function $x(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return vu("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Aa(i)}return Rx(t,n,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ax(){return Math.random().toString(36).substr(2,8)}function Nd(e,t){return{usr:e.state,key:e.key,idx:t}}function vu(e,t,n,r){return n===void 0&&(n=null),Mi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wr(t):t,{state:n,key:t&&t.key||r||Ax()})}function Aa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Rx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=rn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(Mi({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function p(){s=rn.Pop;let k=f(),m=k==null?null:k-u;u=k,l&&l({action:s,location:v.location,delta:m})}function g(k,m){s=rn.Push;let c=vu(v.location,k,m);n&&n(c,k),u=f()+1;let h=Nd(c,u),w=v.createHref(c);try{a.pushState(h,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(w)}o&&l&&l({action:s,location:v.location,delta:1})}function y(k,m){s=rn.Replace;let c=vu(v.location,k,m);n&&n(c,k),u=f();let h=Nd(c,u),w=v.createHref(c);a.replaceState(h,"",w),o&&l&&l({action:s,location:v.location,delta:0})}function x(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof k=="string"?k:Aa(k);return se(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let v={get action(){return s},get location(){return e(i,a)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(_d,p),l=k,()=>{i.removeEventListener(_d,p),l=null}},createHref(k){return t(i,k)},createURL:x,encodeLocation(k){let m=x(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(k){return a.go(k)}};return v}var Ld;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ld||(Ld={}));function Ix(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Wr(t):t,i=Fi(r.pathname||"/",n);if(i==null)return null;let o=a0(e);Mx(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=Xx(o[s],Qx(i));return a}function a0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=mn([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),a0(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Hx(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of s0(o.path))i(o,a,l)}),t}function s0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=s0(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Mx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fx=/^:\w+$/,Dx=3,Ux=2,Wx=1,Bx=10,Vx=-2,Od=e=>e==="*";function Hx(e,t){let n=e.split("/"),r=n.length;return n.some(Od)&&(r+=Vx),t&&(r+=Ux),n.filter(i=>!Od(i)).reduce((i,o)=>i+(Fx.test(o)?Dx:o===""?Wx:Bx),r)}function Yx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Xx(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=yu({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let p=s.route;o.push({params:r,pathname:mn([i,f.pathname]),pathnameBase:Jx(mn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=mn([i,f.pathnameBase]))}return o}function yu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Gx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,f,p)=>{if(f==="*"){let g=s[p]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return u[f]=Kx(s[p]||"",f),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Gx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Qx(e){try{return decodeURI(e)}catch(t){return Vc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kx(e,t){try{return decodeURIComponent(e)}catch(n){return Vc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Fi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function qx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Wr(e):e;return{pathname:n?n.startsWith("/")?n:Zx(n,t):t,search:e2(r),hash:t2(i)}}function Zx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ul(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function l0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function u0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Wr(e):(i=Mi({},e),se(!i.pathname||!i.pathname.includes("?"),ul("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),ul("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),ul("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let p=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}s=p>=0?t[p]:"/"}let l=qx(i,s),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const mn=e=>e.join("/").replace(/\/\/+/g,"/"),Jx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),e2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,t2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function n2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const c0=["post","put","patch","delete"];new Set(c0);const r2=["get",...c0];new Set(r2);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ra.apply(this,arguments)}const bs=C.createContext(null),f0=C.createContext(null),qn=C.createContext(null),ks=C.createContext(null),Wt=C.createContext({outlet:null,matches:[],isDataRoute:!1}),d0=C.createContext(null);function i2(e,t){let{relative:n}=t===void 0?{}:t;Zi()||se(!1);let{basename:r,navigator:i}=C.useContext(qn),{hash:o,pathname:a,search:s}=Cs(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:mn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Zi(){return C.useContext(ks)!=null}function Ji(){return Zi()||se(!1),C.useContext(ks).location}function p0(e){C.useContext(qn).static||C.useLayoutEffect(e)}function Ss(){let{isDataRoute:e}=C.useContext(Wt);return e?x2():o2()}function o2(){Zi()||se(!1);let e=C.useContext(bs),{basename:t,navigator:n}=C.useContext(qn),{matches:r}=C.useContext(Wt),{pathname:i}=Ji(),o=JSON.stringify(l0(r).map(l=>l.pathnameBase)),a=C.useRef(!1);return p0(()=>{a.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let f=u0(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:mn([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,o,i,e])}const a2=C.createContext(null);function s2(e){let t=C.useContext(Wt).outlet;return t&&C.createElement(a2.Provider,{value:e},t)}function m0(){let{matches:e}=C.useContext(Wt),t=e[e.length-1];return t?t.params:{}}function Cs(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(Wt),{pathname:i}=Ji(),o=JSON.stringify(l0(r).map(a=>a.pathnameBase));return C.useMemo(()=>u0(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function l2(e,t){return u2(e,t)}function u2(e,t,n){Zi()||se(!1);let{navigator:r}=C.useContext(qn),{matches:i}=C.useContext(Wt),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=Ji(),u;if(t){var f;let v=typeof t=="string"?Wr(t):t;s==="/"||(f=v.pathname)!=null&&f.startsWith(s)||se(!1),u=v}else u=l;let p=u.pathname||"/",g=s==="/"?p:p.slice(s.length)||"/",y=Ix(e,{pathname:g}),x=m2(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:mn([s,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?s:mn([s,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return t&&x?C.createElement(ks.Provider,{value:{location:Ra({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:rn.Pop}},x):x}function c2(){let e=y2(),t=n2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const f2=C.createElement(c2,null);class d2 extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Wt.Provider,{value:this.props.routeContext},C.createElement(d0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p2(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(bs);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Wt.Provider,{value:t},r)}function m2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||se(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let f=l.route.id?a==null?void 0:a[l.route.id]:null,p=null;n&&(p=l.route.errorElement||f2);let g=t.concat(o.slice(0,u+1)),y=()=>{let x;return f?x=p:l.route.Component?x=C.createElement(l.route.Component,null):l.route.element?x=l.route.element:x=s,C.createElement(p2,{match:l,routeContext:{outlet:s,matches:g,isDataRoute:n!=null},children:x})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?C.createElement(d2,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var h0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(h0||{}),Ia=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ia||{});function h2(e){let t=C.useContext(bs);return t||se(!1),t}function g2(e){let t=C.useContext(f0);return t||se(!1),t}function v2(e){let t=C.useContext(Wt);return t||se(!1),t}function g0(e){let t=v2(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function y2(){var e;let t=C.useContext(d0),n=g2(Ia.UseRouteError),r=g0(Ia.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function x2(){let{router:e}=h2(h0.UseNavigateStable),t=g0(Ia.UseNavigateStable),n=C.useRef(!1);return p0(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ra({fromRouteId:t},o)))},[e,t])}function w2(e){return s2(e.context)}function Be(e){se(!1)}function b2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=rn.Pop,navigator:o,static:a=!1}=e;Zi()&&se(!1);let s=t.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=Wr(r));let{pathname:u="/",search:f="",hash:p="",state:g=null,key:y="default"}=r,x=C.useMemo(()=>{let v=Fi(u,s);return v==null?null:{location:{pathname:v,search:f,hash:p,state:g,key:y},navigationType:i}},[s,u,f,p,g,y,i]);return x==null?null:C.createElement(qn.Provider,{value:l},C.createElement(ks.Provider,{children:n,value:x}))}function k2(e){let{children:t,location:n}=e;return l2(xu(t),n)}new Promise(()=>{});function xu(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,xu(r.props.children,o));return}r.type!==Be&&se(!1),!r.props.index||!r.props.children||se(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=xu(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma.apply(this,arguments)}function v0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function S2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function C2(e,t){return e.button===0&&(!t||t==="_self")&&!S2(e)}const E2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],j2=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],P2=C.createContext({isTransitioning:!1}),T2="startTransition",zd=wl[T2];function _2(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=$x({window:i,v5Compat:!0}));let a=o.current,[s,l]=C.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=C.useCallback(p=>{u&&zd?zd(()=>l(p)):l(p)},[l,u]);return C.useLayoutEffect(()=>a.listen(f),[a,f]),C.createElement(b2,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}const N2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,In=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:f,unstable_viewTransition:p}=t,g=v0(t,E2),{basename:y}=C.useContext(qn),x,v=!1;if(typeof u=="string"&&L2.test(u)&&(x=u,N2))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),b=Fi(w.pathname,y);w.origin===h.origin&&b!=null?u=b+w.search+w.hash:v=!0}catch{}let k=i2(u,{relative:i}),m=z2(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:i,unstable_viewTransition:p});function c(h){r&&r(h),h.defaultPrevented||m(h)}return C.createElement("a",Ma({},g,{href:x||k,onClick:v||o?r:c,ref:n,target:l}))}),eo=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,unstable_viewTransition:u,children:f}=t,p=v0(t,j2),g=Cs(l,{relative:p.relative}),y=Ji(),x=C.useContext(f0),{navigator:v}=C.useContext(qn),k=x!=null&&$2(g)&&u===!0,m=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,c=y.pathname,h=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(c=c.toLowerCase(),h=h?h.toLowerCase():null,m=m.toLowerCase());let w=c===m||!a&&c.startsWith(m)&&c.charAt(m.length)==="/",b=h!=null&&(h===m||!a&&h.startsWith(m)&&h.charAt(m.length)==="/"),E={isActive:w,isPending:b,isTransitioning:k},S=w?r:void 0,N;typeof o=="function"?N=o(E):N=[o,w?"active":null,b?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let M=typeof s=="function"?s(E):s;return C.createElement(In,Ma({},p,{"aria-current":S,className:N,ref:n,style:M,to:l,unstable_viewTransition:u}),typeof f=="function"?f(E):f)});var wu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wu||(wu={}));var $d;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($d||($d={}));function O2(e){let t=C.useContext(bs);return t||se(!1),t}function z2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,l=Ss(),u=Ji(),f=Cs(e,{relative:a});return C.useCallback(p=>{if(C2(p,n)){p.preventDefault();let g=r!==void 0?r:Aa(u)===Aa(f);l(e,{replace:g,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s})}},[u,l,f,r,i,n,e,o,a,s])}function $2(e,t){t===void 0&&(t={});let n=C.useContext(P2);n==null&&se(!1);let{basename:r}=O2(wu.useViewTransitionState),i=Cs(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Fi(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Fi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return yu(i.pathname,a)!=null||yu(i.pathname,o)!=null}var Ae=function(){return Ae=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ae.apply(this,arguments)};function Fa(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Q="-ms-",hi="-moz-",V="-webkit-",y0="comm",Es="rule",Hc="decl",A2="@import",x0="@keyframes",R2="@layer",I2=Math.abs,Yc=String.fromCharCode,bu=Object.assign;function M2(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function w0(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function I(e,t,n){return e.replace(t,n)}function na(e,t){return e.indexOf(t)}function ge(e,t){return e.charCodeAt(t)|0}function Or(e,t,n){return e.slice(t,n)}function bt(e){return e.length}function b0(e){return e.length}function ii(e,t){return t.push(e),e}function F2(e,t){return e.map(t).join("")}function Ad(e,t){return e.filter(function(n){return!_t(n,t)})}var js=1,zr=1,k0=0,st=0,ce=0,Br="";function Ps(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:js,column:zr,length:a,return:"",siblings:s}}function Kt(e,t){return bu(Ps("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Jn(e){for(;e.root;)e=Kt(e.root,{children:[e]});ii(e,e.siblings)}function D2(){return ce}function U2(){return ce=st>0?ge(Br,--st):0,zr--,ce===10&&(zr=1,js--),ce}function ht(){return ce=st<k0?ge(Br,st++):0,zr++,ce===10&&(zr=1,js++),ce}function Mn(){return ge(Br,st)}function ra(){return st}function Ts(e,t){return Or(Br,e,t)}function ku(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W2(e){return js=zr=1,k0=bt(Br=e),st=0,[]}function B2(e){return Br="",e}function cl(e){return w0(Ts(st-1,Su(e===91?e+2:e===40?e+1:e)))}function V2(e){for(;(ce=Mn())&&ce<33;)ht();return ku(e)>2||ku(ce)>3?"":" "}function H2(e,t){for(;--t&&ht()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Ts(e,ra()+(t<6&&Mn()==32&&ht()==32))}function Su(e){for(;ht();)switch(ce){case e:return st;case 34:case 39:e!==34&&e!==39&&Su(ce);break;case 40:e===41&&Su(e);break;case 92:ht();break}return st}function Y2(e,t){for(;ht()&&e+ce!==47+10;)if(e+ce===42+42&&Mn()===47)break;return"/*"+Ts(t,st-1)+"*"+Yc(e===47?e:ht())}function X2(e){for(;!ku(Mn());)ht();return Ts(e,st)}function G2(e){return B2(ia("",null,null,null,[""],e=W2(e),0,[0],e))}function ia(e,t,n,r,i,o,a,s,l){for(var u=0,f=0,p=a,g=0,y=0,x=0,v=1,k=1,m=1,c=0,h="",w=i,b=o,E=r,S=h;k;)switch(x=c,c=ht()){case 40:if(x!=108&&ge(S,p-1)==58){na(S+=I(cl(c),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:S+=cl(c);break;case 9:case 10:case 13:case 32:S+=V2(x);break;case 92:S+=H2(ra()-1,7);continue;case 47:switch(Mn()){case 42:case 47:ii(Q2(Y2(ht(),ra()),t,n,l),l);break;default:S+="/"}break;case 123*v:s[u++]=bt(S)*m;case 125*v:case 59:case 0:switch(c){case 0:case 125:k=0;case 59+f:m==-1&&(S=I(S,/\f/g,"")),y>0&&bt(S)-p&&ii(y>32?Id(S+";",r,n,p-1,l):Id(I(S," ","")+";",r,n,p-2,l),l);break;case 59:S+=";";default:if(ii(E=Rd(S,t,n,u,f,i,s,h,w=[],b=[],p,o),o),c===123)if(f===0)ia(S,t,E,E,w,o,p,s,b);else switch(g===99&&ge(S,3)===110?100:g){case 100:case 108:case 109:case 115:ia(e,E,E,r&&ii(Rd(e,E,E,0,0,i,s,h,i,w=[],p,b),b),i,b,p,s,r?w:b);break;default:ia(S,E,E,E,[""],b,0,s,b)}}u=f=y=0,v=m=1,h=S="",p=a;break;case 58:p=1+bt(S),y=x;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&U2()==125)continue}switch(S+=Yc(c),c*v){case 38:m=f>0?1:(S+="\f",-1);break;case 44:s[u++]=(bt(S)-1)*m,m=1;break;case 64:Mn()===45&&(S+=cl(ht())),g=Mn(),f=p=bt(h=S+=X2(ra())),c++;break;case 45:x===45&&bt(S)==2&&(v=0)}}return o}function Rd(e,t,n,r,i,o,a,s,l,u,f,p){for(var g=i-1,y=i===0?o:[""],x=b0(y),v=0,k=0,m=0;v<r;++v)for(var c=0,h=Or(e,g+1,g=I2(k=a[v])),w=e;c<x;++c)(w=w0(k>0?y[c]+" "+h:I(h,/&\f/g,y[c])))&&(l[m++]=w);return Ps(e,t,n,i===0?Es:s,l,u,f,p)}function Q2(e,t,n,r){return Ps(e,t,n,y0,Yc(D2()),Or(e,2,-2),0,r)}function Id(e,t,n,r,i){return Ps(e,t,n,Hc,Or(e,0,r),Or(e,r+1,-1),r,i)}function S0(e,t,n){switch(M2(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return hi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+hi+e+Q+e+e;case 5936:switch(ge(e,t+11)){case 114:return V+e+Q+I(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+Q+I(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+Q+I(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+Q+e+e;case 6165:return V+e+Q+"flex-"+e+e;case 5187:return V+e+I(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return V+e+Q+"flex-item-"+I(e,/flex-|-self/g,"")+(_t(e,/flex-|baseline/)?"":Q+"grid-row-"+I(e,/flex-|-self/g,""))+e;case 4675:return V+e+Q+"flex-line-pack"+I(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+Q+I(e,"shrink","negative")+e;case 5292:return V+e+Q+I(e,"basis","preferred-size")+e;case 6060:return V+"box-"+I(e,"-grow","")+V+e+Q+I(e,"grow","positive")+e;case 4554:return V+I(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return I(I(I(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return I(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return I(I(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!_t(e,/flex-|baseline/))return Q+"grid-column-align"+Or(e,t)+e;break;case 2592:case 3360:return Q+I(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,_t(r.props,/grid-\w+-end/)})?~na(e+(n=n[t].value),"span")?e:Q+I(e,"-start","")+e+Q+"grid-row-span:"+(~na(n,"span")?_t(n,/\d+/):+_t(n,/\d+/)-+_t(e,/\d+/))+";":Q+I(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return _t(r.props,/grid-\w+-start/)})?e:Q+I(I(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return I(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return I(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+hi+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~na(e,"stretch")?S0(I(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return I(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return Q+i+":"+o+u+(a?Q+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(ge(e,t+6)===121)return I(e,":",":"+V)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return I(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(ge(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+Q+"$2box$3")+e;case 100:return I(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return I(e,"scroll-","scroll-snap-")+e}return e}function Da(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function K2(e,t,n,r){switch(e.type){case R2:if(e.children.length)break;case A2:case Hc:return e.return=e.return||e.value;case y0:return"";case x0:return e.return=e.value+"{"+Da(e.children,r)+"}";case Es:if(!bt(e.value=e.props.join(",")))return""}return bt(n=Da(e.children,r))?e.return=e.value+"{"+n+"}":""}function q2(e){var t=b0(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function Z2(e){return function(t){t.root||(t=t.return)&&e(t)}}function J2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Hc:e.return=S0(e.value,e.length,n);return;case x0:return Da([Kt(e,{value:I(e.value,"@","@"+V)})],r);case Es:if(e.length)return F2(n=e.props,function(i){switch(_t(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jn(Kt(e,{props:[I(i,/:(read-\w+)/,":"+hi+"$1")]})),Jn(Kt(e,{props:[i]})),bu(e,{props:Ad(n,r)});break;case"::placeholder":Jn(Kt(e,{props:[I(i,/:(plac\w+)/,":"+V+"input-$1")]})),Jn(Kt(e,{props:[I(i,/:(plac\w+)/,":"+hi+"$1")]})),Jn(Kt(e,{props:[I(i,/:(plac\w+)/,Q+"input-$1")]})),Jn(Kt(e,{props:[i]})),bu(e,{props:Ad(n,r)});break}return""})}}var $r=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Xc=typeof window<"u"&&"HTMLElement"in window,ew=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),_s=Object.freeze([]),Ar=Object.freeze({});function tw(e,t,n){return n===void 0&&(n=Ar),e.theme!==n.theme&&e.theme||t||n.theme}var C0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rw=/(^-|-$)/g;function Md(e){return e.replace(nw,"-").replace(rw,"")}var iw=/(a)(d)/gi,Fd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Fd(t%52)+n;return(Fd(t%52)+n).replace(iw,"$1-$2")}var fl,dr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},E0=function(e){return dr(5381,e)};function ow(e){return Cu(E0(e)>>>0)}function aw(e){return e.displayName||e.name||"Component"}function dl(e){return typeof e=="string"&&!0}var j0=typeof Symbol=="function"&&Symbol.for,P0=j0?Symbol.for("react.memo"):60115,sw=j0?Symbol.for("react.forward_ref"):60112,lw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},uw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},T0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cw=((fl={})[sw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fl[P0]=T0,fl);function Dd(e){return("type"in(t=e)&&t.type.$$typeof)===P0?T0:"$$typeof"in e?cw[e.$$typeof]:lw;var t}var fw=Object.defineProperty,dw=Object.getOwnPropertyNames,Ud=Object.getOwnPropertySymbols,pw=Object.getOwnPropertyDescriptor,mw=Object.getPrototypeOf,Wd=Object.prototype;function _0(e,t,n){if(typeof t!="string"){if(Wd){var r=mw(t);r&&r!==Wd&&_0(e,r,n)}var i=dw(t);Ud&&(i=i.concat(Ud(t)));for(var o=Dd(e),a=Dd(t),s=0;s<i.length;++s){var l=i[s];if(!(l in uw||n&&n[l]||a&&l in a||o&&l in o)){var u=pw(t,l);try{fw(e,l,u)}catch{}}}}return e}function Rr(e){return typeof e=="function"}function Gc(e){return typeof e=="object"&&"styledComponentId"in e}function On(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Bd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Di(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Eu(e,t,n){if(n===void 0&&(n=!1),!n&&!Di(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Eu(e[r],t[r]);else if(Di(t))for(var r in t)e[r]=Eu(e[r],t[r]);return e}function Qc(e,t){Object.defineProperty(e,"toString",{value:t})}function to(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var hw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw to(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),oa=new Map,Ua=new Map,pl=1,_o=function(e){if(oa.has(e))return oa.get(e);for(;Ua.has(pl);)pl++;var t=pl++;return oa.set(e,t),Ua.set(t,e),t},gw=function(e,t){oa.set(e,t),Ua.set(t,e)},vw="style[".concat($r,"][").concat("data-styled-version",'="').concat("6.0.3",'"]'),yw=new RegExp("^".concat($r,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xw=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},ww=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(yw);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(gw(f,u),xw(e,f,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function bw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var N0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat($r,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute($r,"active"),r.setAttribute("data-styled-version","6.0.3");var a=bw();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},kw=function(){function e(t){this.element=N0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw to(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Sw=function(){function e(t){this.element=N0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Cw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vd=Xc,Ew={isServer:!Xc,useCSSOMInjection:!ew},L0=function(){function e(t,n,r){t===void 0&&(t=Ar),n===void 0&&(n={});var i=this;this.options=Ae(Ae({},Ew),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Xc&&Vd&&(Vd=!1,function(o){for(var a=document.querySelectorAll(vw),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute($r)!=="active"&&(ww(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Qc(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(p){var g=function(m){return Ua.get(m)}(p);if(g===void 0)return"continue";var y=o.names.get(g),x=a.getGroup(p);if(y===void 0||x.length===0)return"continue";var v="".concat($r,".g").concat(p,'[id="').concat(g,'"]'),k="";y!==void 0&&y.forEach(function(m){m.length>0&&(k+="".concat(m,","))}),l+="".concat(x).concat(v,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},f=0;f<s;f++)u(f);return l}(i)})}return e.registerId=function(t){return _o(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ae(Ae({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Cw(i):r?new kw(i):new Sw(i)}(this.options),new hw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(_o(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(_o(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(_o(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),jw=/&/g,Pw=/^\s*\/\/.*$/gm;function O0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=O0(n.children,t)),n})}function Tw(e){var t,n,r,i=e===void 0?Ar:e,o=i.options,a=o===void 0?Ar:o,s=i.plugins,l=s===void 0?_s:s,u=function(g,y,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},f=l.slice();f.push(function(g){g.type===Es&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(jw,n).replace(r,u))}),a.prefix&&f.push(J2),f.push(K2);var p=function(g,y,x,v){y===void 0&&(y=""),x===void 0&&(x=""),v===void 0&&(v="&"),t=v,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var k=g.replace(Pw,""),m=G2(x||y?"".concat(x," ").concat(y," { ").concat(k," }"):k);a.namespace&&(m=O0(m,a.namespace));var c=[];return Da(m,q2(f.concat(Z2(function(h){return c.push(h)})))),c};return p.hash=l.length?l.reduce(function(g,y){return y.name||to(15),dr(g,y.name)},5381).toString():"",p}var _w=new L0,ju=Tw(),z0=_e.createContext({shouldForwardProp:void 0,styleSheet:_w,stylis:ju});z0.Consumer;_e.createContext(void 0);function Hd(){return C.useContext(z0)}var Nw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ju);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Qc(this,function(){throw to(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ju),this.name+t.hash},e}(),Lw=function(e){return e>="A"&&e<="Z"};function Yd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Lw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var $0=function(e){return e==null||e===!1||e===""},A0=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!$0(o)&&(Array.isArray(o)&&o.isCss||Rr(o)?r.push("".concat(Yd(i),":"),o,";"):Di(o)?r.push.apply(r,Fa(Fa(["".concat(i," {")],A0(o),!1),["}"],!1)):r.push("".concat(Yd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in n0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Fn(e,t,n,r){if($0(e))return[];if(Gc(e))return[".".concat(e.styledComponentId)];if(Rr(e)){if(!Rr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Fn(i,t,n,r)}var o;return e instanceof Nw?n?(e.inject(n,r),[e.getName(r)]):[e]:Di(e)?A0(e):Array.isArray(e)?Array.prototype.concat.apply(_s,e.map(function(a){return Fn(a,t,n,r)})):[e.toString()]}function Ow(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Rr(n)&&!Gc(n))return!1}return!0}var zw=E0("6.0.3"),$w=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ow(t),this.componentId=n,this.baseHash=dr(zw,n),this.baseStyle=r,L0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=On(i,this.staticRulesId);else{var o=Bd(Fn(this.rules,t,n,r)),a=Cu(dr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=On(i,a),this.staticRulesId=a}else{for(var l=dr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")u+=p;else if(p){var g=Bd(Fn(p,t,n,r));l=dr(l,g),u+=g}}if(u){var y=Cu(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=On(i,y)}}return i},e}(),R0=_e.createContext(void 0);R0.Consumer;var ml={};function Aw(e,t,n){var r=Gc(e),i=e,o=!dl(e),a=t.attrs,s=a===void 0?_s:a,l=t.componentId,u=l===void 0?function(h,w){var b=typeof h!="string"?"sc":Md(h);ml[b]=(ml[b]||0)+1;var E="".concat(b,"-").concat(ow("6.0.3"+b+ml[b]));return w?"".concat(w,"-").concat(E):E}(t.displayName,t.parentComponentId):l,f=t.displayName;f===void 0&&function(h){return dl(h)?"styled.".concat(h):"Styled(".concat(aw(h),")")}(e);var p=t.displayName&&t.componentId?"".concat(Md(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;y=function(h,w){return x(h,w)&&v(h,w)}}else y=x}var k=new $w(n,p,r?i.componentStyle:void 0);function m(h,w){return function(b,E,S){var N=b.attrs,M=b.componentStyle,R=b.defaultProps,De=b.foldedComponentIds,Cn=b.styledComponentId,En=b.target,lo=_e.useContext(R0),$s=Hd(),jn=b.shouldForwardProp||$s.shouldForwardProp,Je=function(Pt,Ue,Vt){for(var We,et=Ae(Ae({},Ue),{className:void 0,theme:Vt}),As=0;As<Pt.length;As+=1){var uo=Rr(We=Pt[As])?We(et):We;for(var Ht in uo)et[Ht]=Ht==="className"?On(et[Ht],uo[Ht]):Ht==="style"?Ae(Ae({},et[Ht]),uo[Ht]):uo[Ht]}return Ue.className&&(et.className=On(et.className,Ue.className)),et}(N,E,tw(E,lo,R)||Ar),_=Je.as||En,$={};for(var A in Je)Je[A]===void 0||A[0]==="$"||A==="as"||A==="theme"||(A==="forwardedAs"?$.as=Je.forwardedAs:jn&&!jn(A,_)||($[A]=Je[A]));var J=function(Pt,Ue){var Vt=Hd(),We=Pt.generateAndInjectStyles(Ue,Vt.styleSheet,Vt.stylis);return We}(M,Je),ie=On(De,Cn);return J&&(ie+=" "+J),Je.className&&(ie+=" "+Je.className),$[dl(_)&&!C0.has(_)?"class":"className"]=ie,$.ref=S,C.createElement(_,$)}(c,h,w)}var c=_e.forwardRef(m);return c.attrs=g,c.componentStyle=k,c.shouldForwardProp=y,c.foldedComponentIds=r?On(i.foldedComponentIds,i.styledComponentId):"",c.styledComponentId=p,c.target=r?i.target:e,Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?function(w){for(var b=[],E=1;E<arguments.length;E++)b[E-1]=arguments[E];for(var S=0,N=b;S<N.length;S++)Eu(w,N[S],!0);return w}({},i.defaultProps,h):h}}),Qc(c,function(){return".".concat(c.styledComponentId)}),o&&_0(c,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),c}function Xd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Gd=function(e){return Object.assign(e,{isCss:!0})};function Rw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Rr(e)||Di(e)){var r=e;return Gd(Fn(Xd(_s,Fa([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Fn(i):Gd(Fn(Xd(i,t)))}function Pu(e,t,n){if(n===void 0&&(n=Ar),!t)throw to(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Rw.apply(void 0,Fa([i],o,!1)))};return r.attrs=function(i){return Pu(e,t,Ae(Ae({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Pu(e,t,Ae(Ae({},n),i))},r}var I0=function(e){return Pu(Aw,e)},P=I0;C0.forEach(function(e){P[e]=I0(e)});const Iw=P.div`
  /* max-width: 960px; */
  margin: 0 auto;
  padding: 0;
  position:relative;
`,Mw=P.ul`
display: flex;
`,Fw=P.header`
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
`,Dw=P.span`
font-size:0px;
font-family: 'Marck Script', cursive;
line-height: 1.5em;
color: var(--semiAccentColor);
@media screen and (min-width: 480px) {
      font-size:12px; 
  }
&:hover{
  color: var(--accentColor);
}
`;P.p`
  font-weight: 700;
  margin: 0;
  color: var(--mainColor);
  padding: 2px 4px;
  display: flex;
align-items: center;
&:hover{
  color: var(--accentColor);
}
`;const Uw=P(eo)`
 text-decoration: none;
 color: inherit;
`,Ww=P.div`
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
`,Xt=P(eo)`
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
`;P.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  z-index: 1000;
`;P.header`

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
`;const Bw=P.nav`
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
  `;function Qd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qd(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wa(e){"@babel/helpers - typeof";return Wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wa(e)}function Vw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Hw(e,t,n){return t&&Kd(e.prototype,t),n&&Kd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kc(e,t){return Xw(e)||Qw(e,t)||M0(e,t)||qw()}function no(e){return Yw(e)||Gw(e)||M0(e)||Kw()}function Yw(e){if(Array.isArray(e))return Tu(e)}function Xw(e){if(Array.isArray(e))return e}function Gw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,s;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function M0(e,t){if(e){if(typeof e=="string")return Tu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tu(e,t)}}function Tu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Kw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qd=function(){},qc={},F0={},D0=null,U0={mark:qd,measure:qd};try{typeof window<"u"&&(qc=window),typeof document<"u"&&(F0=document),typeof MutationObserver<"u"&&(D0=MutationObserver),typeof performance<"u"&&(U0=performance)}catch{}var Zw=qc.navigator||{},Zd=Zw.userAgent,Jd=Zd===void 0?"":Zd,yn=qc,Z=F0,ep=D0,No=U0;yn.document;var Bt=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",W0=~Jd.indexOf("MSIE")||~Jd.indexOf("Trident/"),Lo,Oo,zo,$o,Ao,Mt="___FONT_AWESOME___",_u=16,B0="fa",V0="svg-inline--fa",Xn="data-fa-i2svg",Nu="data-fa-pseudo-element",Jw="data-fa-pseudo-element-pending",Zc="data-prefix",Jc="data-icon",tp="fontawesome-i2svg",eb="async",tb=["HTML","HEAD","STYLE","SCRIPT"],H0=function(){try{return!0}catch{return!1}}(),K="classic",ae="sharp",ef=[K,ae];function ro(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Ui=ro((Lo={},me(Lo,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),me(Lo,ae,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Lo)),Wi=ro((Oo={},me(Oo,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),me(Oo,ae,{solid:"fass",regular:"fasr",light:"fasl"}),Oo)),Bi=ro((zo={},me(zo,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),me(zo,ae,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),zo)),nb=ro(($o={},me($o,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),me($o,ae,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),$o)),rb=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Y0="fa-layers-text",ib=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ob=ro((Ao={},me(Ao,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),me(Ao,ae,{900:"fass",400:"fasr",300:"fasl"}),Ao)),X0=[1,2,3,4,5,6,7,8,9,10],ab=X0.concat([11,12,13,14,15,16,17,18,19,20]),sb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vi=new Set;Object.keys(Wi[K]).map(Vi.add.bind(Vi));Object.keys(Wi[ae]).map(Vi.add.bind(Vi));var lb=[].concat(ef,no(Vi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zn.GROUP,zn.SWAP_OPACITY,zn.PRIMARY,zn.SECONDARY]).concat(X0.map(function(e){return"".concat(e,"x")})).concat(ab.map(function(e){return"w-".concat(e)})),gi=yn.FontAwesomeConfig||{};function ub(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function cb(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var fb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fb.forEach(function(e){var t=Kc(e,2),n=t[0],r=t[1],i=cb(ub(n));i!=null&&(gi[r]=i)})}var G0={styleDefault:"solid",familyDefault:"classic",cssPrefix:B0,replacementClass:V0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gi.familyPrefix&&(gi.cssPrefix=gi.familyPrefix);var Ir=L(L({},G0),gi);Ir.autoReplaceSvg||(Ir.observeMutations=!1);var z={};Object.keys(G0).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){Ir[e]=n,vi.forEach(function(r){return r(z)})},get:function(){return Ir[e]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(t){Ir.cssPrefix=t,vi.forEach(function(n){return n(z)})},get:function(){return Ir.cssPrefix}});yn.FontAwesomeConfig=z;var vi=[];function db(e){return vi.push(e),function(){vi.splice(vi.indexOf(e),1)}}var Gt=_u,St={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pb(e){if(!(!e||!Bt)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return Z.head.insertBefore(t,r),e}}var mb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Hi(){for(var e=12,t="";e-- >0;)t+=mb[Math.random()*62|0];return t}function Vr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function tf(e){return e.classList?Vr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Q0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hb(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Q0(e[n]),'" ')},"").trim()}function Ns(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function nf(e){return e.size!==St.size||e.x!==St.x||e.y!==St.y||e.rotate!==St.rotate||e.flipX||e.flipY}function gb(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function vb(e){var t=e.transform,n=e.width,r=n===void 0?_u:n,i=e.height,o=i===void 0?_u:i,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&W0?l+="translate(".concat(t.x/Gt-r/2,"em, ").concat(t.y/Gt-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Gt,"em), calc(-50% + ").concat(t.y/Gt,"em)) "):l+="translate(".concat(t.x/Gt,"em, ").concat(t.y/Gt,"em) "),l+="scale(".concat(t.size/Gt*(t.flipX?-1:1),", ").concat(t.size/Gt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var yb=`:root, :host {
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
}`;function K0(){var e=B0,t=V0,n=z.cssPrefix,r=z.replacementClass,i=yb;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var np=!1;function hl(){z.autoAddCss&&!np&&(pb(K0()),np=!0)}var xb={mixout:function(){return{dom:{css:K0,insertCss:hl}}},hooks:function(){return{beforeDOMElementCreation:function(){hl()},beforeI2svg:function(){hl()}}}},Ft=yn||{};Ft[Mt]||(Ft[Mt]={});Ft[Mt].styles||(Ft[Mt].styles={});Ft[Mt].hooks||(Ft[Mt].hooks={});Ft[Mt].shims||(Ft[Mt].shims=[]);var dt=Ft[Mt],q0=[],wb=function e(){Z.removeEventListener("DOMContentLoaded",e),Ba=1,q0.map(function(t){return t()})},Ba=!1;Bt&&(Ba=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),Ba||Z.addEventListener("DOMContentLoaded",wb));function bb(e){Bt&&(Ba?setTimeout(e,0):q0.push(e))}function io(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?Q0(e):"<".concat(t," ").concat(hb(r),">").concat(o.map(io).join(""),"</").concat(t,">")}function rp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var kb=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},gl=function(t,n,r,i){var o=Object.keys(t),a=o.length,s=i!==void 0?kb(n,i):n,l,u,f;for(r===void 0?(l=1,f=t[o[0]]):(l=0,f=r);l<a;l++)u=o[l],f=s(f,t[u],u,t);return f};function Sb(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Lu(e){var t=Sb(e);return t.length===1?t[0].toString(16):null}function Cb(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ip(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ou(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=ip(t);typeof dt.hooks.addPack=="function"&&!i?dt.hooks.addPack(e,ip(t)):dt.styles[e]=L(L({},dt.styles[e]||{}),o),e==="fas"&&Ou("fa",t)}var Ro,Io,Mo,pr=dt.styles,Eb=dt.shims,jb=(Ro={},me(Ro,K,Object.values(Bi[K])),me(Ro,ae,Object.values(Bi[ae])),Ro),rf=null,Z0={},J0={},e1={},t1={},n1={},Pb=(Io={},me(Io,K,Object.keys(Ui[K])),me(Io,ae,Object.keys(Ui[ae])),Io);function Tb(e){return~lb.indexOf(e)}function _b(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Tb(i)?i:null}var r1=function(){var t=function(o){return gl(pr,function(a,s,l){return a[l]=gl(s,o,{}),a},{})};Z0=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=a})}return i}),J0=t(function(i,o,a){if(i[a]=a,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=a})}return i}),n1=t(function(i,o,a){var s=o[2];return i[a]=a,s.forEach(function(l){i[l]=a}),i});var n="far"in pr||z.autoFetchSvg,r=gl(Eb,function(i,o){var a=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});e1=r.names,t1=r.unicodes,rf=Ls(z.styleDefault,{family:z.familyDefault})};db(function(e){rf=Ls(e.styleDefault,{family:z.familyDefault})});r1();function of(e,t){return(Z0[e]||{})[t]}function Nb(e,t){return(J0[e]||{})[t]}function $n(e,t){return(n1[e]||{})[t]}function i1(e){return e1[e]||{prefix:null,iconName:null}}function Lb(e){var t=t1[e],n=of("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xn(){return rf}var af=function(){return{prefix:null,iconName:null,rest:[]}};function Ls(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,i=Ui[r][e],o=Wi[r][e]||Wi[r][i],a=e in dt.styles?e:null;return o||a||null}var op=(Mo={},me(Mo,K,Object.keys(Bi[K])),me(Mo,ae,Object.keys(Bi[ae])),Mo);function Os(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},me(t,K,"".concat(z.cssPrefix,"-").concat(K)),me(t,ae,"".concat(z.cssPrefix,"-").concat(ae)),t),a=null,s=K;(e.includes(o[K])||e.some(function(u){return op[K].includes(u)}))&&(s=K),(e.includes(o[ae])||e.some(function(u){return op[ae].includes(u)}))&&(s=ae);var l=e.reduce(function(u,f){var p=_b(z.cssPrefix,f);if(pr[f]?(f=jb[s].includes(f)?nb[s][f]:f,a=f,u.prefix=f):Pb[s].indexOf(f)>-1?(a=f,u.prefix=Ls(f,{family:s})):p?u.iconName=p:f!==z.replacementClass&&f!==o[K]&&f!==o[ae]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var g=a==="fa"?i1(u.iconName):{},y=$n(u.prefix,u.iconName);g.prefix&&(a=null),u.iconName=g.iconName||y||u.iconName,u.prefix=g.prefix||u.prefix,u.prefix==="far"&&!pr.far&&pr.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},af());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ae&&(pr.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=$n(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=xn()||"fas"),l}var Ob=function(){function e(){Vw(this,e),this.definitions={}}return Hw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=L(L({},n.definitions[s]||{}),a[s]),Ou(s,a[s]);var l=Bi[K][s];l&&Ou(l,a[s]),r1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],s=a.prefix,l=a.iconName,u=a.icon,f=u[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[s][p]=u)}),n[s][l]=u}),n}}]),e}(),ap=[],mr={},Sr={},zb=Object.keys(Sr);function $b(e,t){var n=t.mixoutsTo;return ap=e,mr={},Object.keys(Sr).forEach(function(r){zb.indexOf(r)===-1&&delete Sr[r]}),ap.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Wa(i[a])==="object"&&Object.keys(i[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=i[a][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){mr[a]||(mr[a]=[]),mr[a].push(o[a])})}r.provides&&r.provides(Sr)}),n}function zu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=mr[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Gn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=mr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Dt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Sr[e]?Sr[e].apply(null,t):void 0}function $u(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||xn();if(t)return t=$n(n,t)||t,rp(o1.definitions,n,t)||rp(dt.styles,n,t)}var o1=new Ob,Ab=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Gn("noAuto")},Rb={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bt?(Gn("beforeI2svg",t),Dt("pseudoElements2svg",t),Dt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,bb(function(){Mb({autoReplaceSvgRoot:n}),Gn("watch",t)})}},Ib={icon:function(t){if(t===null)return null;if(Wa(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$n(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ls(t[0]);return{prefix:r,iconName:$n(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.cssPrefix,"-"))>-1||t.match(rb))){var i=Os(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||xn(),iconName:$n(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=xn();return{prefix:o,iconName:$n(o,t)||t}}}},Ze={noAuto:Ab,config:z,dom:Rb,parse:Ib,library:o1,findIconDefinition:$u,toHtml:io},Mb=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(dt.styles).length>0||z.autoFetchSvg)&&Bt&&z.autoReplaceSvg&&Ze.dom.i2svg({node:r})};function zs(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return io(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Bt){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Fb(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(nf(a)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Ns(L(L({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Db(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(z.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:a}),children:r}]}]}function sf(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,s=e.symbol,l=e.title,u=e.maskId,f=e.titleId,p=e.extra,g=e.watchable,y=g===void 0?!1:g,x=r.found?r:n,v=x.width,k=x.height,m=i==="fak",c=[z.replacementClass,o?"".concat(z.cssPrefix,"-").concat(o):""].filter(function(M){return p.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(p.classes).join(" "),h={children:[],attributes:L(L({},p.attributes),{},{"data-prefix":i,"data-icon":o,class:c,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(k)})},w=m&&!~p.classes.indexOf("fa-fw")?{width:"".concat(v/k*16*.0625,"em")}:{};y&&(h.attributes[Xn]=""),l&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(f||Hi())},children:[l]}),delete h.attributes.title);var b=L(L({},h),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:L(L({},w),p.styles)}),E=r.found&&n.found?Dt("generateAbstractMask",b)||{children:[],attributes:{}}:Dt("generateAbstractIcon",b)||{children:[],attributes:{}},S=E.children,N=E.attributes;return b.children=S,b.attributes=N,s?Db(b):Fb(b)}function sp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,u=L(L(L({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(u[Xn]="");var f=L({},a.styles);nf(i)&&(f.transform=vb({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var p=Ns(f);p.length>0&&(u.style=p);var g=[];return g.push({tag:"span",attributes:u,children:[t]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Ub(e){var t=e.content,n=e.title,r=e.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Ns(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var vl=dt.styles;function Au(e){var t=e[0],n=e[1],r=e.slice(4),i=Kc(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(zn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(zn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(zn.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var Wb={found:!1,width:512,height:512};function Bb(e,t){!H0&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ru(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=xn()),new Promise(function(r,i){if(Dt("missingIconAbstract"),n==="fa"){var o=i1(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&vl[t]&&vl[t][e]){var a=vl[t][e];return r(Au(a))}Bb(e,t),r(L(L({},Wb),{},{icon:z.showMissingIcons&&e?Dt("missingIconAbstract")||{}:{}}))})}var lp=function(){},Iu=z.measurePerformance&&No&&No.mark&&No.measure?No:{mark:lp,measure:lp},oi='FA "6.4.0"',Vb=function(t){return Iu.mark("".concat(oi," ").concat(t," begins")),function(){return a1(t)}},a1=function(t){Iu.mark("".concat(oi," ").concat(t," ends")),Iu.measure("".concat(oi," ").concat(t),"".concat(oi," ").concat(t," begins"),"".concat(oi," ").concat(t," ends"))},lf={begin:Vb,end:a1},aa=function(){};function up(e){var t=e.getAttribute?e.getAttribute(Xn):null;return typeof t=="string"}function Hb(e){var t=e.getAttribute?e.getAttribute(Zc):null,n=e.getAttribute?e.getAttribute(Jc):null;return t&&n}function Yb(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function Xb(){if(z.autoReplaceSvg===!0)return sa.replace;var e=sa[z.autoReplaceSvg];return e||sa.replace}function Gb(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function Qb(e){return Z.createElement(e)}function s1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Gb:Qb:n;if(typeof e=="string")return Z.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(s1(a,{ceFn:r}))}),i}function Kb(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var sa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(s1(i),n)}),n.getAttribute(Xn)===null&&z.keepOriginalSource){var r=Z.createComment(Kb(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~tf(n).indexOf(z.replacementClass))return sa.replace(t);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===z.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(s){return io(s)}).join(`
`);n.setAttribute(Xn,""),n.innerHTML=a}};function cp(e){e()}function l1(e,t){var n=typeof t=="function"?t:aa;if(e.length===0)n();else{var r=cp;z.mutateApproach===eb&&(r=yn.requestAnimationFrame||cp),r(function(){var i=Xb(),o=lf.begin("mutate");e.map(i),o(),n()})}}var uf=!1;function u1(){uf=!0}function Mu(){uf=!1}var Va=null;function fp(e){if(ep&&z.observeMutations){var t=e.treeCallback,n=t===void 0?aa:t,r=e.nodeCallback,i=r===void 0?aa:r,o=e.pseudoElementsCallback,a=o===void 0?aa:o,s=e.observeMutationsRoot,l=s===void 0?Z:s;Va=new ep(function(u){if(!uf){var f=xn();Vr(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!up(p.addedNodes[0])&&(z.searchPseudoElements&&a(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&z.searchPseudoElements&&a(p.target.parentNode),p.type==="attributes"&&up(p.target)&&~sb.indexOf(p.attributeName))if(p.attributeName==="class"&&Hb(p.target)){var g=Os(tf(p.target)),y=g.prefix,x=g.iconName;p.target.setAttribute(Zc,y||f),x&&p.target.setAttribute(Jc,x)}else Yb(p.target)&&i(p.target)})}}),Bt&&Va.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qb(){Va&&Va.disconnect()}function Zb(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function Jb(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Os(tf(e));return i.prefix||(i.prefix=xn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Nb(i.prefix,e.innerText)||of(i.prefix,Lu(e.innerText))),!i.iconName&&z.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function ek(e){var t=Vr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Hi()):(t["aria-hidden"]="true",t.focusable="false")),t}function tk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:St,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function dp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Jb(e),r=n.iconName,i=n.prefix,o=n.rest,a=ek(e),s=zu("parseNodeAttributes",{},e),l=t.styleParser?Zb(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:St,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var nk=dt.styles;function c1(e){var t=z.autoReplaceSvg==="nest"?dp(e,{styleParser:!1}):dp(e);return~t.extra.classes.indexOf(Y0)?Dt("generateLayersText",e,t):Dt("generateSvgReplacementMutation",e,t)}var wn=new Set;ef.map(function(e){wn.add("fa-".concat(e))});Object.keys(Ui[K]).map(wn.add.bind(wn));Object.keys(Ui[ae]).map(wn.add.bind(wn));wn=no(wn);function pp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bt)return Promise.resolve();var n=Z.documentElement.classList,r=function(p){return n.add("".concat(tp,"-").concat(p))},i=function(p){return n.remove("".concat(tp,"-").concat(p))},o=z.autoFetchSvg?wn:ef.map(function(f){return"fa-".concat(f)}).concat(Object.keys(nk));o.includes("fa")||o.push("fa");var a=[".".concat(Y0,":not([").concat(Xn,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(Xn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=Vr(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=lf.begin("onTree"),u=s.reduce(function(f,p){try{var g=c1(p);g&&f.push(g)}catch(y){H0||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,p){Promise.all(u).then(function(g){l1(g,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(g){l(),p(g)})})}function rk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;c1(e).then(function(n){n&&l1([n],t)})}function ik(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$u(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:$u(i||{})),e(r,L(L({},n),{},{mask:i}))}}var ok=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?St:r,o=n.symbol,a=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,u=n.maskId,f=u===void 0?null:u,p=n.title,g=p===void 0?null:p,y=n.titleId,x=y===void 0?null:y,v=n.classes,k=v===void 0?[]:v,m=n.attributes,c=m===void 0?{}:m,h=n.styles,w=h===void 0?{}:h;if(t){var b=t.prefix,E=t.iconName,S=t.icon;return zs(L({type:"icon"},t),function(){return Gn("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(g?c["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(x||Hi()):(c["aria-hidden"]="true",c.focusable="false")),sf({icons:{main:Au(S),mask:l?Au(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:E,transform:L(L({},St),i),symbol:a,title:g,maskId:f,titleId:x,extra:{attributes:c,styles:w,classes:k}})})}},ak={mixout:function(){return{icon:ik(ok)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=pp,n.nodeCallback=rk,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Z:r,o=n.callback,a=o===void 0?function(){}:o;return pp(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,f=r.mask,p=r.maskId,g=r.extra;return new Promise(function(y,x){Promise.all([Ru(i,s),f.iconName?Ru(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var k=Kc(v,2),m=k[0],c=k[1];y([n,sf({icons:{main:m,mask:c},prefix:s,iconName:i,transform:l,symbol:u,maskId:p,title:o,titleId:a,extra:g,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,s=n.styles,l=Ns(s);l.length>0&&(i.style=l);var u;return nf(a)&&(u=Dt("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},sk={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return zs({type:"layer"},function(){Gn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(no(o)).join(" ")},children:a}]})}}}},lk={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,s=a===void 0?[]:a,l=r.attributes,u=l===void 0?{}:l,f=r.styles,p=f===void 0?{}:f;return zs({type:"counter",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),Ub({content:n.toString(),title:o,extra:{attributes:u,styles:p,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(no(s))}})})}}}},uk={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?St:i,a=r.title,s=a===void 0?null:a,l=r.classes,u=l===void 0?[]:l,f=r.attributes,p=f===void 0?{}:f,g=r.styles,y=g===void 0?{}:g;return zs({type:"text",content:n},function(){return Gn("beforeDOMElementCreation",{content:n,params:r}),sp({content:n,transform:L(L({},St),o),title:s,extra:{attributes:p,styles:y,classes:["".concat(z.cssPrefix,"-layers-text")].concat(no(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,s=null,l=null;if(W0){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/u,l=f.height/u}return z.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,sp({content:n.innerHTML,width:s,height:l,transform:o,title:i,extra:a,watchable:!0})])}}},ck=new RegExp('"',"ug"),mp=[1105920,1112319];function fk(e){var t=e.replace(ck,""),n=Cb(t,0),r=n>=mp[0]&&n<=mp[1],i=t.length===2?t[0]===t[1]:!1;return{value:Lu(i?t[0]:t),isSecondary:r||i}}function hp(e,t){var n="".concat(Jw).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Vr(e.children),a=o.filter(function(S){return S.getAttribute(Nu)===t})[0],s=yn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ib),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&f!=="none"&&f!==""){var p=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?ae:K,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Wi[g][l[2].toLowerCase()]:ob[g][u],x=fk(p),v=x.value,k=x.isSecondary,m=l[0].startsWith("FontAwesome"),c=of(y,v),h=c;if(m){var w=Lb(v);w.iconName&&w.prefix&&(c=w.iconName,y=w.prefix)}if(c&&!k&&(!a||a.getAttribute(Zc)!==y||a.getAttribute(Jc)!==h)){e.setAttribute(n,h),a&&e.removeChild(a);var b=tk(),E=b.extra;E.attributes[Nu]=t,Ru(c,y).then(function(S){var N=sf(L(L({},b),{},{icons:{main:S,mask:af()},prefix:y,iconName:h,extra:E,watchable:!0})),M=Z.createElement("svg");t==="::before"?e.insertBefore(M,e.firstChild):e.appendChild(M),M.outerHTML=N.map(function(R){return io(R)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function dk(e){return Promise.all([hp(e,"::before"),hp(e,"::after")])}function pk(e){return e.parentNode!==document.head&&!~tb.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gp(e){if(Bt)return new Promise(function(t,n){var r=Vr(e.querySelectorAll("*")).filter(pk).map(dk),i=lf.begin("searchPseudoElements");u1(),Promise.all(r).then(function(){i(),Mu(),t()}).catch(function(){i(),Mu(),n()})})}var mk={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Z:r;z.searchPseudoElements&&gp(i)}}},vp=!1,hk={mixout:function(){return{dom:{unwatch:function(){u1(),vp=!0}}}},hooks:function(){return{bootstrap:function(){fp(zu("mutationObserverCallbacks",{}))},noAuto:function(){qb()},watch:function(n){var r=n.observeMutationsRoot;vp?Mu():fp(zu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},yp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},gk={mixout:function(){return{parse:{transform:function(n){return yp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=yp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(l," ").concat(u," ").concat(f)},g={transform:"translate(".concat(a/2*-1," -256)")},y={outer:s,inner:p,path:g};return{tag:"g",attributes:L({},y.outer),children:[{tag:"g",attributes:L({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),y.path)}]}]}}}},yl={x:0,y:0,width:"100%",height:"100%"};function xp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function vk(e){return e.tag==="g"?e.children:[e]}var yk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Os(i.split(" ").map(function(a){return a.trim()})):af();return o.prefix||(o.prefix=xn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,s=n.maskId,l=n.transform,u=o.width,f=o.icon,p=a.width,g=a.icon,y=gb({transform:l,containerWidth:p,iconWidth:u}),x={tag:"rect",attributes:L(L({},yl),{},{fill:"white"})},v=f.children?{children:f.children.map(xp)}:{},k={tag:"g",attributes:L({},y.inner),children:[xp(L({tag:f.tag,attributes:L(L({},f.attributes),y.path)},v))]},m={tag:"g",attributes:L({},y.outer),children:[k]},c="mask-".concat(s||Hi()),h="clip-".concat(s||Hi()),w={tag:"mask",attributes:L(L({},yl),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,m]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:vk(g)},w]};return r.push(b,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(c,")")},yl)}),{children:r,attributes:i}}}},xk={provides:function(t){var n=!1;yn.matchMedia&&(n=yn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=L(L({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:L(L({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},wk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},bk=[xb,ak,sk,lk,uk,mk,hk,gk,yk,xk,wk];$b(bk,{mixoutsTo:Ze});Ze.noAuto;Ze.config;Ze.library;Ze.dom;var Fu=Ze.parse;Ze.findIconDefinition;Ze.toHtml;var kk=Ze.icon;Ze.layer;Ze.text;Ze.counter;var f1={exports:{}},Sk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ck=Sk,Ek=Ck;function d1(){}function p1(){}p1.resetWarningCache=d1;var jk=function(){function e(r,i,o,a,s,l){if(l!==Ek){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:p1,resetWarningCache:d1};return n.PropTypes=n,n};f1.exports=jk();var Pk=f1.exports;const T=_p(Pk);function wp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function on(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wp(Object(n),!0).forEach(function(r){hr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ha(e){"@babel/helpers - typeof";return Ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ha(e)}function hr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _k(e,t){if(e==null)return{};var n=Tk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Du(e){return Nk(e)||Lk(e)||Ok(e)||zk()}function Nk(e){if(Array.isArray(e))return Uu(e)}function Lk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ok(e,t){if(e){if(typeof e=="string")return Uu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uu(e,t)}}function Uu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $k(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,f=e.spinReverse,p=e.pulse,g=e.fixedWidth,y=e.inverse,x=e.border,v=e.listItem,k=e.flip,m=e.size,c=e.rotation,h=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":g,"fa-inverse":y,"fa-border":x,"fa-li":v,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},hr(t,"fa-".concat(m),typeof m<"u"&&m!==null),hr(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),hr(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),hr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(b){return w[b]?b:null}).filter(function(b){return b})}function Ak(e){return e=e-0,e===e}function m1(e){return Ak(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Rk=["style"];function Ik(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Mk(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=m1(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[Ik(i)]=o:t[i]=o,t},{})}function h1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return h1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=Mk(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[m1(u)]=f}return l},{attrs:{}}),o=n.style,a=o===void 0?{}:o,s=_k(n,Rk);return i.attrs.style=on(on({},i.attrs.style),a),e.apply(void 0,[t.tag,on(on({},i.attrs),s)].concat(Du(r)))}var g1=!1;try{g1=!0}catch{}function Fk(){if(!g1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function bp(e){if(e&&Ha(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Fu.icon)return Fu.icon(e);if(e===null)return null;if(e&&Ha(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?hr({},e,t):{}}var Dn=_e.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,s=e.titleId,l=e.maskId,u=bp(n),f=xl("classes",[].concat(Du($k(e)),Du(o.split(" ")))),p=xl("transform",typeof e.transform=="string"?Fu.transform(e.transform):e.transform),g=xl("mask",bp(r)),y=kk(u,on(on(on(on({},f),p),g),{},{symbol:i,title:a,titleId:s,maskId:l}));if(!y)return Fk("Could not find icon",u),null;var x=y.abstract,v={ref:t};return Object.keys(e).forEach(function(k){Dn.defaultProps.hasOwnProperty(k)||(v[k]=e[k])}),Dk(x[0],v)});Dn.displayName="FontAwesomeIcon";Dn.propTypes={beat:T.bool,border:T.bool,beatFade:T.bool,bounce:T.bool,className:T.string,fade:T.bool,flash:T.bool,mask:T.oneOfType([T.object,T.array,T.string]),maskId:T.string,fixedWidth:T.bool,inverse:T.bool,flip:T.oneOf([!0,!1,"horizontal","vertical","both"]),icon:T.oneOfType([T.object,T.array,T.string]),listItem:T.bool,pull:T.oneOf(["right","left"]),pulse:T.bool,rotation:T.oneOf([0,90,180,270]),shake:T.bool,size:T.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:T.bool,spinPulse:T.bool,spinReverse:T.bool,symbol:T.oneOfType([T.bool,T.string]),title:T.string,titleId:T.string,transform:T.oneOfType([T.string,T.object]),swapOpacity:T.bool};Dn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Dk=h1.bind(null,_e.createElement),Uk={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Wk={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},Bk={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const Vk=P.div`
  padding: 10px;
  margin-bottom: 10px;
  /* margin-left: auto;
  margin-right: auto; */
`,Hk=P.p`
  color: var(--mainColor);
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 12px;
  @media screen and (min-width: 778px) {
margin-bottom: 10px;
font-size: 16px;
  }
`;P(eo)`
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
  scale: 1;
  &:hover,
  &:focus{
    transform: translateY(-2px);
  }
`;const Yk=()=>d.jsxs(Vk,{children:[d.jsx(Hk,{children:"Слідкуйте за нами у соцмережах"}),d.jsx(In,{"aria-label":"youtube link",to:"https://www.youtube.com/@user-ck5dw5yi1l/videos",className:"youtube social",target:"_blank",children:d.jsx(Dn,{style:{color:"#eb3223",marginRight:"20px"},icon:Bk,size:"2x"})}),d.jsx(In,{"aria-label":"facebook link",to:"https://www.facebook.com/kdmsh22",className:"facebook social",target:"_blank",children:d.jsx(Dn,{style:{color:"#4968ad",backgroundColor:"#fff",borderRadius:"50%",marginRight:"20px"},icon:Wk,size:"2x"})}),d.jsx(In,{"aria-label":"instagram link",to:"https://www.instagram.com/kdmsh22/",className:"instagram social",target:"_blank",children:d.jsx(Dn,{style:{color:"#ff4d4d"},icon:Uk,size:"2x"})})]}),Xk=P.footer`
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
  @media screen and (max-width: 400px) {
      flex-direction: column;
  }
`,Gk=P.div`
  color: #212121;
  font-size: 10px;
  padding: 10px 20px;

`,Qk=()=>d.jsx(Gk,{children:d.jsx("p",{children:"Copyright ©TarasPapka 2023"})}),Kk=()=>d.jsxs(Xk,{children:[d.jsx(Yk,{}),d.jsx(Qk,{})]});P.li`
list-style: none;
`;const qk=P.ul`
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
`,Qt=P(eo)`
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
`,v1=({closeMobileMenu:e})=>d.jsxs(qk,{children:[d.jsx(Qt,{to:"/",onClick:e,children:"Головна"}),d.jsx(Qt,{to:"/about",onClick:e,children:"Про нас"}),d.jsx(Qt,{to:"management",onClick:e,children:"Дирекція"}),d.jsx(Qt,{to:"team/1",onClick:e,children:"Викладачі"}),d.jsx(Qt,{to:"reviews",onClick:e,children:"Умови вступу"}),d.jsx(Qt,{to:"/departments",onClick:e,children:"Відділи"}),d.jsx(Qt,{to:"/bands",onClick:e,children:"Колективи"}),d.jsx(Qt,{to:"/contacts",onClick:e,children:"Контакти"})]});v1.propTypes={closeMobileMenu:T.func};const Zk="/KDMSH/assets/xCross-436de7cd.svg",Jk="/KDMSH/assets/mobileMenu-9d967880.svg",e3="/KDMSH/assets/logo-99832143.svg",t3=P.div`
margin-right: 14px;
`,kp=P.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 999;
  transition: scale 1s ease-out;
  &:hover,
  &:focus {
    scale: calc(1.05);
  }

  @media screen and (min-width: 778px) {
    margin-left: 24px;
    width: 38px;
    height: 38px;
  }
`,n3=P.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50px;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 999;
  opacity: hidden;

  background-color: #fff5ed;
/* opacity: ${({isShowMenu:e})=>1}; */
  /* transform: translateY(${({isShowMenu:e})=>e?"0":"-100%"}); */
  /* transition: opacity 3s ease-out, transform 0.3s ease-out; */
`,r3=()=>{const[e,t]=C.useState(!1),n=()=>{t(!0),document.body.classList.add("no-scroll")},r=()=>{t(!1),document.body.classList.remove("no-scroll")};return d.jsxs(t3,{children:[e?d.jsx(kp,{onClick:r,src:Zk,alt:"mobile menu close"}):d.jsx(kp,{onClick:n,src:Jk,alt:"mobile menu"}),e?d.jsx(n3,{children:d.jsx(v1,{closeMobileMenu:r})}):null]})},i3=()=>{const[e,t]=C.useState(!1),n=e3;return C.useEffect(()=>{const r=()=>{};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),C.useEffect(()=>{const r=()=>{window.innerWidth<778?t(!0):t(!1)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),d.jsxs(Iw,{children:[d.jsxs(Fw,{children:[d.jsx(Uw,{to:"/",end:!0,children:d.jsxs(Ww,{children:[d.jsx("img",{src:n,width:"24px",height:"24px",alt:"logo"}),d.jsx(Dw,{children:"КДМШ №22"})]})}),e?d.jsx(d.Fragment,{children:d.jsx(r3,{})}):d.jsx(Bw,{children:d.jsxs(Mw,{children:[d.jsx("li",{children:d.jsx(Xt,{to:"/",end:!0,children:"Головна"})}),d.jsxs("li",{children:[d.jsx(Xt,{to:"/about",children:"Про нас "}),d.jsxs("ul",{className:"sub-menus",children:[d.jsx("li",{children:d.jsx(Xt,{to:"management",children:"Дирекція"})}),d.jsx("li",{children:d.jsx(Xt,{to:"team/1",children:"Викладачі"})}),d.jsx("li",{children:d.jsx(Xt,{to:"reviews",children:"Умови вступу"})})]})]}),d.jsx("li",{children:d.jsx(Xt,{to:"/departments",children:"Відділи"})}),d.jsx("li",{children:d.jsx(Xt,{to:"/bands",children:"Колективи"})}),d.jsx("li",{children:d.jsx(Xt,{to:"/contacts",children:"Контакти"})})]})})]}),d.jsx(w2,{}),d.jsx(Kk,{})]})},o3=F.div`
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
`,a3=F.img`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
  width: 100%;
  height: 500px;
  display: ${e=>e.active?"block":"none"};
  object-fit:cover;
`,y1=F.div`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: var(--accentColor);
  cursor: pointer;
`,s3=F(y1)`
  left: 0.5rem;
`,l3=F(y1)`
  right: 1rem;
`,u3=F.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
`,c3=F.button`
  background-color: ${e=>e.active?"white":"grey"};
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`;var x1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sp=_e.createContext&&_e.createContext(x1),hn=globalThis&&globalThis.__assign||function(){return hn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hn.apply(this,arguments)},f3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function w1(e){return e&&e.map(function(t,n){return _e.createElement(t.tag,hn({key:n},t.attr),w1(t.child))})}function oo(e){return function(t){return _e.createElement(d3,hn({attr:hn({},e.attr)},t),w1(e.child))}}function d3(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,a=f3(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),_e.createElement("svg",hn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:hn(hn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&_e.createElement("title",null,o),e.children)};return Sp!==void 0?_e.createElement(Sp.Consumer,null,function(n){return t(n)}):t(x1)}function p3(e){return oo({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"}}]})(e)}function m3(e){return oo({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}}]})(e)}const b1=({data:e})=>{const[t,n]=C.useState(0),r=()=>{n(t===e.length-1?0:t+1)},i=()=>{n(t===0?e.length-1:t-1)};return d.jsxs(o3,{children:[d.jsx(s3,{onClick:i,children:d.jsx(p3,{style:{width:"2.5em",height:"2.5em",fill:"wheat"}})}),e.map((o,a)=>d.jsx(a3,{src:o.src,alt:o.alt,active:t===a},a)),d.jsx(l3,{onClick:r,children:d.jsx(m3,{style:{width:"2.5em",height:"2.5em",fill:"wheat"}})}),d.jsx(u3,{children:e.map((o,a)=>d.jsx(c3,{active:t===a,onClick:()=>n(a)},a))})]})};b1.propTypes={data:T.arrayOf(T.shape({src:T.string.isRequired,alt:T.string.isRequired})).isRequired};const h3=[{src:"https://i.ibb.co/tPsCykS/22-4-min.jpg",alt:"Image 1 for carousel"},{src:"https://i.ibb.co/wzFfLB6/DSCN6143.jpg",alt:"Image 2 for carousel"},{src:"https://i.ibb.co/RC21V1V/IMG-1981.jpg",alt:"Image 3 for carousel"},{src:"https://i.ibb.co/S3PPn49/261519482-486004376151181-1670904827646877067-n.jpg",alt:"Image 4 for carousel"},{src:"https://i.ibb.co/5hc8PtF/pic5.jpg",alt:"Image 5 for carousel"}];P.img`
 max-width: 100%;
 height: auto;
`;const k1=P.section`
margin-left: auto;
margin-right: auto;
min-height: 700px;
`;P.img`
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;const Cp=P.div`
margin-top: 30px;
height: 70px;
svg {
	width: 100%; height: 100%;
}
svg text {
/* font-size: 40px;  */
	animation: stroke 5s infinite alternate;
  animation-delay: 3s;
  letter-spacing: 1.5px;
	stroke-width: 2;
	stroke: var(--accentColor);
  fill: #fff5ed;
  font-family: 'Marck Script';
	font-size: 3.5vw;
  text-align: center;
  @media screen and (min-width: 480px) {
      font-size:4vw; 
  }
  @media screen and (min-width: 778px) {
      font-size:5vw; 
  }
  @media screen and (min-width: 1200px) {
      font-size: 80px; 
  }
}
@keyframes stroke {
	0%   {
		fill: rgba(255,77,77,0); stroke: rgba(255,77,77,1);
		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 1;
	}
	70%  {fill: rgba(255,77,77,0); stroke: rgba(255,77,77,1); }
	80%  {fill: rgba(255,77,77,0); stroke: rgba(255,77,77,1); stroke-width: 1; }
	100% {
		fill: rgba(255,77,77,1); stroke: rgba(255,77,77,0);
		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
	}

	
}
@media screen and (max-width: 480px) {
height: 50px;
  }
`,S1=P.div`
/* margin: auto; */
min-height: 500px;
@media screen and (min-width: 778px) {
min-height: 700px;
  }
`,ao=P.section`
max-width: 1200px;
/* margin-left: 200px; */
/* margin-bottom:200px; */
font-size: 18px;
line-height:150%;
min-height: 500px;
overflow: auto;

@media screen and (min-width: 778px) {
min-height: 700px;
  }
`,g3=P.div`
margin-left: auto;
margin-right: auto;
padding:10px;

`,Ep=P.p`
font-size: 18px;
line-height: 1.2;
font-family: 'Roboto Slab', serif;
@media screen and (max-width: 480px) {
font-size: 14px;
  }
`,Un=P.h3`
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
`,so=P.div`
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
`,jp=P.div`
margin-top: 30px;
margin-bottom: 10px;
`,v3=P.div`
margin-bottom: 10px;
margin-left: auto;
margin-right: auto;
width: 300px;
display: flex;
flex-direction: column;
/* align-items: center; */
justify-content: center;
gap: 10px;
@media screen and (min-width: 778px) {
flex-direction: row;
width: auto;
  }
`,y3=P.ul`
margin-bottom: 20px;
font-size: 14px;
@media screen and (min-width: 778px) {
font-size: 18px;
  }
`,Fo=P.li`
list-style:square;
margin-left: 30px;
`,x3=P.p`
color: var(--accentColor);
font-size: 12px;
line-height: 1.1;
@media screen and (min-width: 778px) {
font-size: 14px;
  }
`,w3=()=>{const[e,t]=C.useState(window.innerWidth);C.useEffect(()=>{const r=()=>{t(window.innerWidth)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]);const n=e>=778?"24px":"36px";return d.jsx(k1,{children:e>=778?d.jsxs(d.Fragment,{children:[d.jsx(b1,{data:h3}),d.jsx(Cp,{children:d.jsx("svg",{width:"100%",height:"100%",children:d.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",fontSize:n,children:"Запрошуємо вас у світ музики!"})})})]}):d.jsxs(g3,{children:[d.jsx(Cp,{children:d.jsx("svg",{width:"100%",height:"100%",children:d.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle",fontSize:n,children:"Вас вітає Київська музична школа №22!"})})}),d.jsx(Ep,{children:"Для мешканців Святошинського району працює з 1971 року. Школа є державним позашкільним навчальним закладом освіти в галузі культури, здійснює естетичне виховання дітей, учнів, громадян, забезпечуючи принцип єдності і наступності мистецької освіти; проводить навчально-виховну, методичну, просвітницьку роботу."}),d.jsx(Ep,{children:"Учні і викладачі школи є активними учасниками концертного життя не лише Києва, де виступають в Національній філармонії України в проектах КДФ, музеях, бібліотеках, в концертних залах на сценах міста, але й відомі в багатьох містах України та за її межами. Вони мають численні нагороди лауреатів конкурсів, фестивалів у Білорусі, Чехії, Угорщині, Чорногорії, Грузії, Болгарії, Італії, Іспанії, Німеччині, Словенії, Польщі, Канаді, Швеції, Греції та ін."})]})})},b3=()=>d.jsxs(ao,{children:[d.jsx(Un,{children:"Про нас"}),d.jsx(so,{children:d.jsxs("article",{children:[d.jsx("p",{children:"У мальовничому, ошатному куточку Микільської Борщагівки Святошинського району міста Києва, на вулиці Зодчих, 22 - 01 жовтня 1971 року за рішенням №1615 виконавчого комітету Київської міської ради депутатів трудящих та завдяки ентузіазму і зусиллям світлої пам'яті директора Ворони Миколи Івановича, - розпочався перший навчальний рік дитячої музичної школи №22."}),d.jsx("p",{children:"Їй було надано частину приміщення четвертого поверху СШ №196, яку одразу було перебудовано й пристосовано для занять з учнями музичної школи."}),d.jsx("p",{children:"На початок відкриття у школі навчалося 68 учнів. З 1978 по 2017 рік плановий контингент виріс до 410 учнів. З вересня 2017 року школа отримала сучасне, капітально відремонтоване приміщення з великою актовою залою за адресою вулиця Зодчих, 30-а. затверджений міською владою контингент на сьогодні становить 502 учні. "}),d.jsx("p",{children:"50 років - значуща дата. Це половина сторіччя, не одне покоління випускників і сила пам'ятних моментів."}),d.jsx("p",{children:"Школа має не тільки багате минуле, творче сучасне, а й широкі перспективи розвитку в майбутньому. Впевненість у завтрашньому дні ґрунтується на високому професіоналізмі колективу, на багаторічних традиціях, сучасних методиках навчання і виховання, тісній співпраці з випускниками, батьками. "}),d.jsx("p",{children:"Саме людська неповторність викладача визначає обличчя нашого закладу. Глибока шана у нашому серці тим, кого ми називаємо педагогами-ветеранами: це - Триліська Наталія Костянтинівна, Манаєнкова Лариса Олегівна, Рудніцька Ніна Петрівна, Лосєва Евеліна Леонтіївна, Козлова Нонна Олексіївна, Чайка Тетяна Олексіївна, Галаєва Валерія Олександрівна, Іванько Лариса Олександрівна, Єфремова Тетяна Миколаївна, Давидовська Лоліта Ігорівна, Касатова Людмила Федорівна, Уманець Валентина Дмитрівна, Кірш Наталія Євгеніїівна, Кірш Анатолій Якович, Семенова Галина Петрівна, Лук'янчук Наталія Євгеніївна, Пучко Євгенія Федорівна, Васіна Людмила Василівна, Бєлєнок Маргарита Генріховна. Їх щедрого дару душі вистачає не тільки на учнів, адже молоді педагоги вчаться у них високому дару віддавати серце маленьким музикантам."}),d.jsx("p",{children:"Життя невблаганне і сьогодні, на превеликий жаль не змогли святкувати з нами педагоги, які відійшли у вічність - Штанько Володимир Степанович, Малушенко Людмила Сельвестрівна, Колесник Тетяна Львівна, Кір'янов Олександр Миколайович, Вакаренко Валентина Юріївна, Перевозніков Олег Олександрович, Ускова Наталія Владленівна."}),d.jsx("p",{children:"Навчання в школі здійснюється за індивідуальними і груповими дисциплінами: фортепіано, скрипка, віолончель, акордеон, баян, гітара, укулеле, домра, бандура, мандоліна, саксофон, флейта, труба, ударні інструменти, академічний та естрадний вокал, синтезатор, ансамбль, оркестр, історія музичної літератури, сольфеджіо, хор."}),d.jsx("p",{children:"За весь період роботи КДМШ №22 (з 1971 по 2021 рр.) свідоцтва про закінчення школи отримали 2256 учнів. З них 682 учні закінчили вищі навчальні мистецькі заклади та працюють у сфері мистецтва. 32 - працюють викладачами у ДМШ. Колишня випускниця школи Гончарова І.Б. в 2000 році отримала звання «Заслужена артистка України»."})]})})]}),C1=P.div`
 display: flex;
  position: absolute;
  gap: 0.3em;
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
`,k3=P.svg`
  width: 48px;
  margin-left: auto;
  margin-right: auto;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`,S3=P.div`
  height: 220px;
 max-width: 180px;
 margin-bottom: 20px;

  flex-grow: 1;
  flex-basis: 190px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  box-shadow: 0 0 2px 1px var(--accentColor);
  overflow: hidden;

  &:hover ${C1} {
    transform: translateY(100%);
    opacity: 0;
  }
`,C3=P.img`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: var(--base);
  /* background: linear-gradient(to top, #0a3394, #4286f4); */
`,E3=P.p`
font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
`,Pp=P.p`
font-size: 0.7rem;
  line-height: 100%;
  text-align: center;
`,E1=[{url:"https://i.ibb.co/QHZNNTN/image.jpg",name:"Любов Герасимчук",title:"Директор",experience:"1972",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/hyW2xpR/image.jpg",name:"Світлана Філоненко",title:"Заступник директора з навчальної роботи, Викладач",experience:"1995",band:"",department:"Відділ народних інструментів",instrument:"Бандура",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/pRyX9gZ/image.jpg",name:"Олександра Снігур",title:"Директор з виховної роботи, Викладач",experience:"2021",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/THG5FPg/Tamara.webp",name:"Тамара Теліна",title:"Заввідділом, Викладач",experience:"2002",band:"Ансамбль флейтистів",department:"Відділ духових та ударних інструментів",instrument:"Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/236357H/8-S7-A9117-min.jpg",name:"Галина Головацька-Гуль",title:"Заввідділом, Викладач",experience:"1999",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичковий відділ",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/hfh7Nnx/pic3.jpg",name:"Соломія Гуль",title:"Викладач",experience:"2021",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Струнно-смичковий відділ",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/Wxv6gqX/Yehor.webp",name:"Єгор Куриленко",title:"Викладач",experience:"2019",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Відділ духових та ударних інструментів",instrument:"Саксофон, Флейта",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/x6x6d9p/Serhiy.webp",name:"Сергій Левчук",title:"Викладач",experience:"2010",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Відділ духових та ударних інструментів",instrument:"Труба",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/fGpdTBV/Gitar.jpg",name:"Лілія Герасимчук",title:"Викладач",experience:"1992",band:"Ансамбль гітаристів",department:"Відділ народних інструментів",instrument:"Гітара",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/X5LGqJ6/Daniil.webp",name:"Даниїл Голубєв",title:"Викладач",experience:"",band:"Оркестр народної музики 'Барвисті Візерунки'",department:"Відділ народних інструментів",instrument:"Гітара",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/CQ0FgZs/image.jpg",name:"Юлія Лисенко",title:"Викладач",experience:"2019",band:"",department:"Відділ народних інструментів",instrument:"Гітара, Баян",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/CstWvQd/Tetiana.webp",name:"Тетяна Чайка",title:"Викладач",experience:"1972",band:"Оркестр народної музики 'Барвисті Візерунки', Дует 'НоТа'",department:"Відділ концертмейстерства та вокалу",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/phTf61G/image.jpg",name:"Наталія Триліська",title:"Заввідділом, Викладач",experience:"",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Галина Семенова",title:"Викладач",experience:"",band:"",department:"Теоретичний відділ",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Людмила Васіна",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Лоліта Давидовська",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Анастасія Негустова",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Наталія Кірш",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/fYHFLLC/image.jpg",name:"Олена Люта-Новікова",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"Вокал",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/wz7Wrq6/Myronova.jpg",name:"Еліна Миронова",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/vPD6cg5/image.webp",name:"Антон Скірко",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"Вокал",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Ірина Толокольникова",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Богдана Старенька",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"Вокал",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Юлія Шавердашвілі",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"Вокал",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Елеонора Сєдова",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Тетяна Сагірова",title:"Викладач",experience:"",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/9s9gLqc/362138-1519403304-49509-m.jpg",name:"Андрій Дерій",title:"Викладач",experience:"",band:"",department:"Струнно-смичковий відділ",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Людмила Фізер",title:"Викладач",experience:"",band:"",department:"Струнно-смичковий відділ",instrument:"Скрипка",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Михайлина Герасимчук",title:"Викладач",experience:"",band:"",department:"Відділ народних інструментів",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/8jVNXrj/image.jpg",name:"Ірина Хейленко",title:"Викладач",experience:"",band:"Ансамбль 'Пролісок'",department:"Відділ народних інструментів",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Людмила Касатова",title:"Викладач",experience:"",band:"",department:"Відділ народних інструментів",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Мар'яна Загребельна",title:"Викладач",experience:"",band:"",department:"Відділ народних інструментів",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Наталія Лук'янчук",title:"Заввідділом, Викладач",experience:"1999",band:"",department:"Відділ концертмейстерства та вокалу",instrument:"Вокал",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/nw7Q7dV/image.webp",name:"Ірина Іщук",title:"Заввідділом, Викладач",experience:"",band:"",department:"Відділ народних інструментів",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Євгенія Пучко",title:"Викладач",experience:"",band:"Учнівський хор 'Струмочок'",department:"Теоретичний відділ",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/H4GFfhs/128189.jpg",name:"Андрій Качановський",title:"Викладач",experience:"",band:"",department:"Відділ народних інструментів",instrument:"Баян",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/0C3y71P/image.webp",name:"Олексій Алтухов",title:"Викладач",experience:"",band:"",department:"Відділ народних інструментів",instrument:"Гітара",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/VvHvhqt/Valeria.webp",name:"Валерія Швець",title:"Викладач",experience:"",band:"",department:"Струнно-смичковий відділ",instrument:"Віолончель",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/WKp5y6B/Nona.webp",name:"Нона Козлова",title:"Заввідділом, Викладач",experience:"1972",band:"Дует 'НоТа'",department:"Фортепіанний відділ №2",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Оксана Андрієва",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Анастасія Шевченко",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Валерія Галаєва",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Евеліна Лосєва",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Олена Орловська",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/ccJvy6w/122708.jpg",name:"Валентина Уманець",title:"Викладач",experience:"",band:"Фортепіанний дует викладачів 'Unison of hearts'",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Олена Уманець",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/5nyNZyF/image.jpg",name:"Марія Дерій",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/ZTt1BbH/272952377-914201755931909-7806349092602080934-n.jpg",name:"Тетяна Калашникова",title:"Викладач",experience:"",band:"фортепіанний дует викладачів 'Unison of hearts'",department:"Фортепіанний відділ №1",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Олена Заболотня",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №2",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Лариса Іванько",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №2",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Ельміра Сторчак",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №2",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Тетяна Шевнюк",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №2",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Тамара Фіалкова",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №2",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Яна Перетятько",title:"Викладач",experience:"",band:"",department:"Фортепіанний відділ №2",instrument:"Фортепіано",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/mqJbX3T/image.webp",name:"Тетяна Гайова",title:"Заввідділом, Викладач",experience:"",band:"",department:"Теоретичний відділ",instrument:"Сольфеджіо, музлітература",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Management"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Маргарита Бєлєнок",title:"Викладач",experience:"",band:"хор молодших класів",department:"Теоретичний відділ",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Анастасія Песигіна",title:"Викладач",experience:"",band:"",department:"Теоретичний відділ",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/kBGwYmh/hanis.jpg",name:"Надія Ханіс",title:"Викладач",experience:"",band:"",department:"Теоретичний відділ",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/pw0M34Y/766x1024.webp",name:"Юрій Пікуш",title:"Викладач, композитор",experience:"",band:"Клас композиції",department:"Теоретичний відділ",instrument:"Сольфеджіо, музлітература",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Мунір Наіт Буда",title:"Викладач",experience:"",band:"",department:"Відділ духових та ударних інструментів",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Сергій Дружинський",title:"Викладач",experience:"",band:"",department:"Відділ духових та ударних інструментів",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Аліна Фізер",title:"Викладач",experience:"",band:"",department:"Відділ духових та ударних інструментів",instrument:"Ударні інструменти",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"Сергій Семчук",title:"Викладач",experience:"",band:"",department:"Відділ духових та ударних інструментів",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"},{url:"https://i.ibb.co/XxjsWyk/women.png",name:"С.Лук'янчук",title:"Викладач",experience:"",band:"",department:"Відділ духових та ударних інструментів",instrument:"",phone:"+380934139512",description:"Lorem ipsum dolor sit amet, consectetur",section:"Team"}],la=P.div`
display: flex;
gap: 20px;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`,cf=P.li`
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
`,j3=P.div`
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
`,P3=P.p`
 margin: 5px 0 5px;
  font-size: 12px;
  color: var(--mainColor);
  line-height: 1.4;
`,T3=P.p`
  margin: 0;
  font-size: 14px;
  color: var(--mainColor);
  font-weight: 700;
`,_3=P.button`
  padding: 10px;
  border-radius: 8px;
  background: var(--accentColor);
  border: none;
  color: white;
  cursor: pointer;
`,N3=P.img`
  object-fit: contain;
  width: 100%;
  height: 100%;

`,j1=P.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${cf}:hover & {
    transform: scale(0);
  }
`,L3=()=>{const e=E1.filter(t=>t.section==="Management");return d.jsx(la,{children:e.map((t,n)=>d.jsxs(S3,{children:[t.url?d.jsx(C3,{src:t.url,alt:`photo of ${t.name}`}):d.jsx(k3,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),d.jsxs(C1,{children:[d.jsx(E3,{children:t.name}),d.jsx(Pp,{children:t.title}),d.jsx(Pp,{children:t.phone})]})]},n))})},O3=()=>d.jsxs(ao,{children:[d.jsx(Un,{children:"Керівний склад"}),d.jsx(so,{children:d.jsx("article",{children:d.jsx("p",{children:"Сьогодні КДМШ №22 - мистецький заклад, творчий колектив якого, на чолі з директором Любов'ю Василівною Герасимчук (яка очолює школу з 1999 року, до цього з 1978 року - була заступником директора з навчальної роботи) та заступниками директора Філоненко Світланою Леонідівною (яка замінила на посаді заступника директора з навчальної роботи Уманець Олену Миколаївну у 2019 році) та Снігур Олександрою Олегівною (яка на посаді заступника директора з виховної роботи у 2019 році замінила Лисенко Юлію Валеріївну) по праву займає достойне місце серед мистецьких навчальних закладів міста."})})}),d.jsx(L3,{})]});F.div`
`;const z3=F.ul`
  z-index: 2;
  margin: 10px 10px 40px 10px;
`,$3=F.div`
  cursor: pointer;
  margin-bottom: 10px;
`,A3=F.button`
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
`,R3=F.p`
  // position: absolute;
  // z-index: 2;
`,I3=F.div`
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
`;const P1=({currentPage:e,totalPages:t,onChangePage:n,pageType:r})=>{const i=Ss(),o=a=>{i(`/${r}/${a}`),n(a)};return d.jsx(I3,{children:[...Array(t).keys()].map(a=>d.jsx("li",{children:d.jsx(In,{to:`/${r}/${a+1}`,children:d.jsx(A3,{onClick:()=>o(a+1),active:`${e===a+1?"active":""}`,children:d.jsx(R3,{children:a+1})})})},a))})};P1.propTypes={currentPage:T.number,totalPages:T.number,onChangePage:T.func,pageType:T.string};function M3(e){return oo({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}const F3=F.div`
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
  
`,D3=F.div`
  background-color: #fff;
  max-width: 400px;
  position: relative;
  padding: 20px;
  margin: 10px;
  overflow-y: auto;
  border-radius: 24px;
   /* @media screen and (min-width: 768px) {
  margin: 0;
  width: 400px;
  border-radius: 24px;
  } */
`,U3=F.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
   /* @media screen and (min-width: 768px) {
 top: 15px;
  right: 15px;
  } */
`,T1=({isOpen:e,closeModal:t,children:n})=>{const r=o=>{o.stopPropagation()},i=o=>{o.target===o.currentTarget&&t()};return C.useEffect(()=>{e?(document.body.style.overflow="auto",document.documentElement.style.overflow="auto"):(document.body.style.overflow="scroll",document.documentElement.style.overflow="scroll")},[e]),d.jsx(d.Fragment,{children:e&&d.jsx(F3,{onClick:i,children:d.jsxs(D3,{className:"ModalContent",onClick:r,children:[d.jsx(U3,{onClick:t,children:d.jsx(M3,{size:18})}),n]})})})};T1.propTypes={isOpen:T.bool.isRequired,closeModal:T.func.isRequired,children:T.node};const W3=F.div`
font-size: inherit;
@media screen and (min-width: 778px) {
/* margin-bottom:20px;
margin-top:20px */
  }
`,_1=F.div`
width: 100%;
box-sizing: border-box;
border-radius: 20px;
padding: 10px 20px;
 /* padding: 5px 10px; */
 text-align: center;

@media screen and (min-width: 778px) {
    margin-left: auto;
    margin-right: auto;
    /* padding: 10px 20px; */
    /* box-sizing: border-box; */
  }
`,B3=F.img`
object-fit: cover;
width: 100%;
height: 400px;
/* text-align: center; */
border-radius: 20px;
@media screen and (min-width: 778px) {
    /* height: 400px; */
    /* width: 100%; */
    /* border-radius: 20px; */
  }
`;F.div`
text-align: center;

`;const V3=F.svg`
  width: 48px;
  fill: var(--mainColor);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${_1}:hover & {
    transform: scale(0);
  }
`,H3=F.div`
font-size: 14px;
padding: 5px 10px;
@media screen and (min-width: 778px) {
      font-size: 20px;
      padding: 10px 20px;
  }
`,Y3=F.p`
font-weight: 600;
text-transform: uppercase;
font-size: 22px;
margin-bottom: 10px;
line-height: 1.5;

@media screen and (min-width: 778px) {
      font-size: 24px; 
      /* text-transform: uppercase; */
      margin-bottom: 15px;
  }
`,X3=F.p`
/* text-transform: uppercase; */
/* font-size: 3vw; */
font-size: 20px;
/* color: var(--accentColor); */
/* padding-bottom: 10px;
margin-bottom: 10px; */
/* border-bottom: 1px solid var(--accentColor); */
/* 
@media screen and (min-width: 778px) {
      font-size: 20px;
  } */
`,G3=F.p`
/* margin-left: 10px; */
color: var(--accentColor);
border-bottom: 1px solid var(--accentColor);
padding-bottom: 10px;
font-size: 20px;
`;F.p`
/* font-size: 14px; */
`;const Q3=F.p`
margin-bottom: 20px;
font-size: 18px;
`,Tp=F.span`
font-weight: 600;
margin-right: 10px;
color:var(--accentColor);
font-size: 18px;
/* @media screen and (min-width: 778px) {
      font-size: 20px;
  } */
`;F.button`

`;const K3=F.p`
/* font-size: 14px; */
`,N1=({name:e,title:t,img:n,instrument:r,band:i,department:o})=>d.jsxs(W3,{children:[d.jsx(_1,{children:n?d.jsx(B3,{src:n,alt:`photo of ${e}`}):d.jsx(V3,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})})}),d.jsxs(H3,{children:[d.jsx(Y3,{children:e}),d.jsx(X3,{children:t}),d.jsx(G3,{children:o}),d.jsxs(K3,{children:[d.jsx(Tp,{children:"Інструмент:"}),r]}),d.jsxs(Q3,{children:[d.jsx(Tp,{children:"Колективи:"}),i]})]})]});N1.propTypes={id:T.number,name:T.string,title:T.string,phone:T.string,img:T.string,description:T.string,instrument:T.string,band:T.string,department:T.string};const L1=({data:e})=>{const[t,n]=C.useState(!1),[r,i]=C.useState(null),o=s=>{i(s),n(!t)},a=s=>{la.current&&!la.current.contains(s.target)&&n(!1)};return C.useEffect(()=>{const s=l=>{l.key==="Escape"&&t&&n(!1)};return document.addEventListener("keydown",s),document.addEventListener("click",a),()=>{document.removeEventListener("keydown",s),document.removeEventListener("click",a)}},[t]),d.jsxs(la,{children:[e.map((s,l)=>d.jsxs(cf,{children:[s.url?d.jsx(N3,{src:s.url,alt:`photo of ${s.name}`}):d.jsx(j1,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),d.jsxs(j3,{children:[d.jsx(T3,{children:s.name}),d.jsx(P3,{children:s.title}),d.jsx(_3,{onClick:()=>o(s),children:"Детальніше"})]})]},l)),t&&r&&d.jsx(T1,{isOpen:t,closeModal:()=>n(!1),children:d.jsx(N1,{name:r.name,title:r.title,description:r.description,phone:r.phone,img:r.url,instrument:r.instrument,band:r.band,department:r.department})})]})};L1.propTypes={data:T.array.isRequired};function q3(e,t){let n;return function(...i){const o=()=>{n=null,e(...i)};clearTimeout(n),n=setTimeout(o,t)}()}const O1=({data:e})=>{const[t,n]=C.useState(15),[r,i]=C.useState(1),o=()=>{window.innerWidth>778?n(15):n(6)};C.useEffect(()=>{const s=q3(o,200);return o(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const a=s=>{i(s)};return d.jsxs(k1,{children:[d.jsx(z3,{children:d.jsx(L1,{data:e.slice((r-1)*t,r*t)})}),d.jsx($3,{children:d.jsx(P1,{currentPage:r,totalPages:Math.ceil(e.length/t),onChangePage:a,pageType:"team"})})]})};O1.propTypes={data:T.array.isRequired};const Z3=P.div`
position: relative;
width: 100%;
@media only screen and (min-width: 1200px) {  
    width: 260px;
  }
`,z1=P.input`
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
`,J3=P(z1)`
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
`,Wu=({value:e,onFilterChange:t,inputStyle:n,placeholder:r})=>{let i;return n==="active"?i=z1:n==="secondary"&&(i=J3),d.jsx(Z3,{children:d.jsx(i,{type:"text",name:"text",placeholder:r,value:e,onChange:o=>t(o.target.value)})})};Wu.propTypes={value:T.string,inputStyle:T.string.isRequired,placeholder:T.string,onFilterChange:T.func.isRequired};function e4(e){return oo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function t4(e){return oo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(e)}const n4=P.div`
  position: relative;
  width:100%;
   @media only screen and (min-width: 1200px) {
    width: 300px;
  }
`,r4=P.button`
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
`,i4=P.div`
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
`,o4=P.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: var(--subColor);
  }
`,a4=P.div`
  color: var(--subColor);
  font-size: 17px;
`,$1=({options:e,value:t,onChange:n,placeholder:r,onFilterChange:i})=>{const[o,a]=C.useState(!1),[s,l]=C.useState(t||""),u=p=>{p!==s&&(l(p),n(p),i(p)),a(!1)},f=()=>{a(!o)};return d.jsxs(n4,{onClick:f,children:[d.jsx(r4,{children:r?s||d.jsx(a4,{children:r}):s}),o?d.jsx(t4,{width:20,height:20,style:{position:"absolute",top:"20px",right:"20px"}}):d.jsx(e4,{style:{position:"absolute",top:"20px",right:"20px"}}),o&&d.jsx(i4,{open:o,children:e.map(p=>d.jsx(o4,{onClick:()=>u(p),children:p},p))})]})};$1.propTypes={options:T.arrayOf(T.string),value:T.string,onChange:T.func,placeholder:T.string,onFilterChange:T.func};const ff=P.button`
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

`;P.span`
 font-size: 15px;
 z-index: 3;
 position: relative;
 font-weight: 600;
`;const s4=P.div`
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
`,A1=({onFilterChange:e,data:t})=>{const[n]=C.useState(t),[r,i]=C.useState([]),[o,a]=C.useState([]),[s,l]=C.useState([]),[u,f]=C.useState("Виберіть відділ"),[p,g]=C.useState(""),[y,x]=C.useState("");C.useEffect(()=>{f("Виберіть відділ"),g(""),x("")},[]),C.useEffect(()=>{const k=Array.from(new Set(n.map(h=>h.department))),m=Array.from(new Set(n.map(h=>h.title))),c=Array.from(new Set(n.map(h=>h.name)));i(["Виберіть відділ",...k]),a(["Пошук за прізвищем",...c]),l(["Пошук за посадою",...m])},[n]);const v=()=>{const k={department:u.toLowerCase().trim(),name:p.toLowerCase().trim(),title:y.toLowerCase().trim()},m=n.filter(c=>{const h=k.department==="виберіть відділ"||c.department.toLowerCase()===k.department,w=k.name===""||c.name.toLowerCase().trim().includes(k.name),b=k.title===""||c.title.toLowerCase().trim().includes(k.title);return h&&w&&b});e(m),f("Виберіть відділ"),g(""),x("")};return d.jsxs(s4,{children:[d.jsx($1,{options:r,value:u,onChange:k=>f(k),placeholder:"Виберіть відділ",onFilterChange:k=>f(k)},t.id),d.jsx(Wu,{options:o,value:p,onFilterChange:k=>g(k),inputStyle:"active",placeholder:"Пошук за прізвищем",name:"name"}),d.jsx(Wu,{options:s,value:y,onFilterChange:k=>x(k),inputStyle:"active",placeholder:"Пошук за посадою",name:"title"}),d.jsx(ff,{style:{margin:"0px"},onClick:v,children:"Пошук"})]})};A1.propTypes={data:T.array.isRequired,onFilterChange:T.func.isRequired};const R1=()=>{const[e,t]=C.useState(E1),n=r=>{t(r)};return d.jsxs(ao,{children:[d.jsx(Un,{children:"Викладацький склад"}),d.jsx(A1,{onFilterChange:n,data:e}),d.jsx(O1,{data:e})]})};R1.propTypes={data:T.array};const l4="/KDMSH/assets/Заява на вступ КДМШ №22-b33d6b4e.pdf",u4="/KDMSH/assets/Заява на пільги КДМШ№22-f2aa1bf6.pdf",c4="/KDMSH/assets/Заява КДМШ про перебіг воєнних дій-f25f68ce.pdf",f4=P.div`
  margin: 20px;
`,d4=P.a`
  background-color: var(--accentColor);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background-color: var(--semiAccentColor);
  }
`,ua=({url:e,urlName:t})=>d.jsx(f4,{children:d.jsx(d4,{href:e,download:t,children:t})});ua.propTypes={url:T.string,urlName:T.string};const p4=()=>d.jsxs(ao,{children:[d.jsxs("div",{children:[d.jsx(Un,{children:"Умови вступу"}),d.jsx(so,{children:"До школи приймаються діти віком від 5 років у залежності від обраного музичного інструменту. Навчання у школі проводиться на таких відділах: - фортепіанному; - струнно-смичковому: скрипка,  віолончель; - народних інструментів: баян, акордеон, гітара; - духових та ударних інструментів: флейта, саксофон, труба, ударні інструменти; - хоровому. Вступ до школи  відбувається на конкурсній основі на підставі вступних  прослуховувань перевірки музичних здібностей, що включає в себе:  виконання (спів) пісні за власним вибором, повторення за вчителем нескладного ритму та мелодії."})]}),d.jsxs(jp,{children:[d.jsx(Un,{children:"Перелік документів, які необхідні для вступу до школи:"}),d.jsxs(y3,{children:[d.jsx(Fo,{children:"Заява"}),d.jsx(Fo,{children:"Копія свідоцтва про народження"}),d.jsx(Fo,{children:"Медична довідка."}),d.jsx(Fo,{children:"Копія ідентифікаційного коду (за наявності)"})]}),d.jsx(x3,{children:"*Для здобувачів, що навчаються на пільговій основі, передбачен інший пакет документів."}),d.jsxs(jp,{children:[d.jsx(Un,{children:"Форми для скачування"}),d.jsxs(v3,{children:[d.jsx(ua,{url:l4,urlName:"Заява на вступ"}),d.jsx(ua,{url:u4,urlName:"Заява на пільги"}),d.jsx(ua,{url:c4,urlName:"Заява про перебіг воєнних дій"})]})]})]})]}),I1=[{id:"a-1",name:"Фортепіанний відділ №1",photo:"https://i.ibb.co/r2kmFgN/1-2022.jpg",about:"Гра на фортепіано - це захоплива подорож для дітей у світ музики та можливість виявити свій музичний потенціал та розвинути творчі здібності. Цей чудовий інструмент надає можливість дітям виразити свої почуття та емоції через музику, розвиваючи в них музичний слух і вміння читати ноти. Гра на фортепіано також сприяє поліпшенню координації рук, розвитку концентрації та терпіння. Безсумнівно, цей інструмент відкриває двері до неймовірного світу музики, який зачаровує та надихає юних музикантів."},{id:"a-8",name:"Фортепіанний відділ №2",photo:"https://i.ibb.co/tH3nzfG/2.jpg",about:"Гра на фортепіано - це захоплива подорож для дітей у світ музики та можливість виявити свій музичний потенціал та розвинути творчі здібності. Цей чудовий інструмент надає можливість дітям виразити свої почуття та емоції через музику, розвиваючи в них музичний слух і вміння читати ноти. Гра на фортепіано також сприяє поліпшенню координації рук, розвитку концентрації та терпіння. Безсумнівно, цей інструмент відкриває двері до неймовірного світу музики, який зачаровує та надихає юних музикантів."},{id:"a-2",name:"Струнно-смичковий відділ",photo:"https://i.ibb.co/jrbbY7z/pexels-pixabay-210854.jpg",about:"Гра на струнно-смичкових інструментах - це захоплюючий світ, який дає дітям відкрити в собі музичну магію. Вони зможуть відчути власні обрані ноти, створюючи чарівні мелодії, що сповнені почуттями та виразністю. Гра на скрипці, віолончелі або альту розвиває в дітях вміння слухати, концентруватися і сприяє виробленню гармонійного почуття ритму. Крім того, ці інструменти навчають відповідальності, адже для досягнення високих результатів потрібно вкладати час та наполегливість. Грати на струнно-смичкових інструментах - це завжди цікаво та вдячно, адже вони дарують можливість створювати чарівну музику."},{id:"a-3",name:"Відділ предмету за вибором",photo:"https://i.ibb.co/RNtNjTy/pexels-teddy-yang-2254140.jpg",about:"Гра на духових інструментах - це неймовірна пригода для дітей, яка запрошує у музичний світ. Вони зможуть відчути себе справжніми музикантами, навчившись грати на трубі, саксофоні, флейті та інших інструментах. Ця діяльність сприяє розвитку дихальної системи та допомагає покращити контроль над диханням. Гра на духових інструментах також вчить дітей спілкуватися мовою музики та виражати свої почуття через звуки. Вона робить музику доступною і захоплюючою, а також допомагає формувати вміння слухати та сприймати мелодію. Це чудовий спосіб для дітей виразити свою індивідуальність та розкрити свій творчий потенціал."},{id:"a-4",name:"Відділ духових та ударних інструментів ",photo:"https://i.ibb.co/XJKYNGg/pexels-josh-sorenson-995301.jpg",about:"Гра на ударних інструментах - це особливий спосіб виплеснути свою енергію. Діти зможуть віднайти у собі справжнього ударника, навчившись грати на барабанах, ксилофоні, дзвіночках і багатьох інших інструментах. Гра на ударних інструментах розвиває координацію рук та розвиток моторики, а також допомагає дітям вчитися працювати в команді та слухати одне одного у музичному виконанні. Це чудовий спосіб для дітей виразити свої почуття через ритм і створити музику власноруч. Ударні інструменти роблять музику неймовірно захопливою і доступною для маленьких музикантів."},{id:"a-5",name:"Відділ народних інструментів",photo:"https://i.ibb.co/3FLhwtw/pexels-pixabay-33597.jpg",about:"Народні інструменти, такі як гітара, бандура, баян та інші, відкривають дітям чарівний світ музики, насичений культурними традиціями. Граючи на цих інструментах, діти пізнають багатство своєї спадщини і вчаться виконувати мелодії, які були передані з покоління в покоління. Народні інструменти допомагають зберігати і популяризувати унікальні музичні традиції та вчать дітей цінувати різноманіття культур. Завдяки навчанню на народних інструментах, діти можуть долучитися до світу української, а також інших національних музичних мистецтв та стати частиною неперевершеної музичної спадщини."},{id:"a-6",name:"Відділ концертмейстерства та вокалу",photo:"https://i.ibb.co/T1pCW3k/image.jpg",about:"Вокальне мистецтво - це дивовижний світ виразності та музичної гармонії. У нашій музичній школі, діти отримають можливість розкрити свій вокальний талант під керівництвом досвідчених викладачів. Ми пропонуємо індивідуальні та групові заняття вокалом, де діти вивчають основи вокальної техніки, розвивають свій голос, та вчаться виконувати улюблені пісні. Вокальне навчання розширює музичний горизонт дітей і дарує їм можливість виразити свої почуття та емоції через музику."},{id:"a-7",name:"Теоретичний відділ",photo:"https://i.ibb.co/8YPYJQn/image.jpg",about:"Музично-теоретичний відділ нашої школи є важливою складовою частиною музичної освіти для дітей. Тут діти здобувають теоретичні знання, які є основою для розуміння музики. Вони вивчають музичну нотацію, ритміку, гармонію, історію музики та багато іншого. Навички, отримані в музично-теоретичному відділі, допомагають дітям краще розуміти та виконувати музику на своїх інструментах або вокально. Відкривши для себе музичну теорію, діти розкривають перед собою безмежні можливості у музичному світі."}],m4=()=>I1,h4=e=>I1.find(t=>t.id===e),M1=[{id:"q-1",name:"Оркестр народної музики 'Барвисті Візерунки'",photo:"https://i.ibb.co/4Nw2QkK/orhestra3.jpg",about:"Гордістю школи є оркестр народної музики «Барвисті візерунки» (керівник Галина Головацька-Гуль), створений в жовтні 2008 року. Репертуар оркестру складається з обробок пісень і танців народів світу. Колектив веде активну концертну діяльність, має численні нагороди багатьох міжнародних конкурсів та фестивалів як в Україні так і за кордоном – у Чехії, Угорщині, Болгарії, Італії та ін. Керівник оркестру - викладач Галина Головацька-Гуль, саме вона наполегливо відкриває в душах своїх вихованців чарівний світ музики та гармонії. Звичайно, велика роль належить обдарованим і талановитим викладачам струнно-смичкового, духового та відділу народних інструментів школи, з учнів яких і складається колектив."},{id:"q-2",name:"Фортепіанний дует 'Но-Та'",photo:"https://i.ibb.co/Khng8mg/Nota.jpg",about:"Фортепіанний дует 'НоТа' у складі викладачів - Нонни Козлової і Тетяни Чайки (лауреати Міжнародних премій 'Дружба' та ім. С.Гулака-Артемовського), вже більше 40 років дарує свою яскраву, емоційну, неперевершену майстерність слухачам, популяризуючи як творчість автора відомого романсу 'Хризантеми' Миколи Харито, так і у власному перекладенні для фортепіанного ансамблю перлин української класики та народних пісень. Їх виступи завжди супроводжуються аваціями глядацької аудиторії. За час своєї творчої діяльності вони дали біля 700 концертів на найрізноманітніших сценах України та зарубіжжя. "},{id:"q-3",name:'Дитячий хор "Струмочок"',photo:"https://i.ibb.co/mztr6F7/IMG-20230120-160646-225.jpg",about:"Керівник: Євгенія Пучко, концертмейстер: Наталія Лук’янчук"},{id:"q-4",name:"Ансамбль скрипалів 'Унісон'",photo:"https://i.ibb.co/FDxTGJX/image.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-5",name:"Ансамбль флейтистів 'Вітерець'",photo:"https://i.ibb.co/5WKxV46/IMG-20230508-154004-124.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-6",name:"Вокальний дует",photo:"./src/assets/img/pexels-dmitry-demidov-3783471.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-7",name:"фольклорний гурт 'Рахта'",photo:"https://i.ibb.co/pRP3tMd/2.jpg",about:"lorem ipsum dolor sit amet, consectetur"},{id:"q-8",name:"Ансамблі гітаристів",photo:"https://i.ibb.co/PNQPh2b/pic2.jpg",about:"Активну концертну діяльність ведуть ансамблі гітаристів «Палітра», «Лілея», до складу яких входять викладачі Лілія Герасимчук, Тамара Теліна, Юлія Лисенко. Ансамблі майстерно та яскраво виступають на конкурсних сценах України, Білорусі, беруть участь у численних благодійних концертах.	Талановиті викладачі КДМШ №22 успішно поєднують педагогічну й артистичну діяльність та вписують свою сторінку в історію української музичної культури."},{id:"q-9",name:"Дитячий музичний театральний колектив 'Пташечки'",photo:"https://i.ibb.co/pZFmyzf/6.jpg",about:'У 2015 році в школі створено дитячий музичний театральний колектив "Пташечки" (керівник Триліська Наталія Костянтинівна, концертмейстер і постановник Кірш Наталія Євгеніївна). В творчому доробку колективу налічується 1 дитяча опера («З друзями біда – не біда»), 2 мюзикли («Пригоди трьох кошенят» і «День народження Принцеси») та кілька театралізованих музичних вистав (українська сюїта «А у нас на Україні» та постановка на пісню, написану Наталією Триліською у співавторстві з Наталією Кірш - «Україна моя»). Колектив «Пташечки» – неодноразовий лауреат Всеукраїнських та Міжнародних конкурсів.'}],g4=()=>M1,v4=e=>M1.find(t=>t.id===e),y4=P.img`
width: 100%;
height: 200px;
object-fit: contain;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`,x4=P.div`
display: flex;
margin-left: 10px;
flex-direction: column;
@media screen and (min-width: 778px) {
  margin-left: 20px;
  }

`,F1=P.p`

  color: var(--accentColor);
  font-size: 1.1em;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
    @media screen and (min-width: 778px) {
  font-size: 1.5em;
  }
`,D1=P.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
  color: var(--mainColor);
  @media screen and (min-width: 778px) {
  font-size: 1.2em;
  }
`,U1=P.div`
margin-bottom: 20px;
margin: auto;
min-height: 700px;
`,w4=P.div`
  display: flex;
  position: relative;
  max-width: auto;
  max-height: auto;
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
  width: auto;
  object-fit: contain;
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
    transition: all 0.8s ease-out;
  color: rgba(255, 255, 255, 0.8);
}
&:hover .Title{
  transition: all 0.5s ease-out;
  color: var(--mainColor);
}
@media screen and (max-width: 777px) {
  flex-direction: column;
  }

`,W1=P.div`
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
`,B1=P.div`
   margin-top: -4px;
  margin-right: -4px;
  color: var(--mainColor);
  font-family: courier, sans;
`,b4=P.div`
font-size: 14px;
margin-left: auto;
    margin-right: auto;
    width: 280px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
> ul{
  font-size: 12px;
}
@media screen and (min-width: 360px) {
  width: auto;
  }

@media screen and (min-width: 778px) {
  font-size: 20px;
  padding: 20px;
  > ul{
  font-size: 16px;
}
  }
  @media screen and (min-width: 1050px) {
  width: 970px;
  }
`,k4=P.article`
width: 100%;
`,V1=P.div`
     width:100%;
    /* margin-bottom: 100px; */
    /* min-height: 700px; */
`,H1=P.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
`,Y1=P.li`
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
    object-fit: contain;
    margin-top: 10px;
    border: 1px solid var(--border-header);
    width: 100%;
    border-radius: 15px;
      margin-left: auto;
  margin-right: auto;
  }
`,X1=P.img`
width: 100%;
height: 140px;
object-fit: cover;
border-radius: 15px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
`,G1=P(eo)`
    display: block;
    max-width: 250px;
    height: 200px;
    text-decoration: none;
    color: currentColor;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width:768px) and (max-width:1199px) {
        height: 100%;
    }
`,Q1=P.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.2;
    letter-spacing: 0.06em;
    text-align: center;
    padding: 10px;
    /* margin-top: 2%;
    margin-bottom: 2%; */
    /* height: 60px; */
`,K1=({departments:e})=>d.jsx(V1,{children:d.jsx(H1,{children:e.map(t=>d.jsx(Y1,{children:d.jsxs(G1,{to:`${t.id}`,children:[d.jsx(X1,{src:t.photo,alt:t.name}),d.jsx(Q1,{children:t.name})]})},t.id))})});K1.propTypes={departments:T.arrayOf(T.shape({id:T.string.isRequired,name:T.string.isRequired})).isRequired};const S4=()=>{const e=m4();return d.jsxs(S1,{children:[d.jsx(K1,{departments:e}),d.jsx(so,{children:d.jsx(k4,{children:d.jsxs(b4,{children:["В школі працює 8 відділів, які очолюють висококваліфіковані викладачі:",d.jsxs("ul",{children:[d.jsx("li",{children:"Фортепіанний відділ №1: Триліська Н.К.,"}),d.jsx("li",{children:"Фортепіанний відділ №2: Козлова Н.О.,"}),d.jsx("li",{children:"Відділ народних інструментів: Іщук І.В.,"}),d.jsx("li",{children:"Струнно-смичковий відділ: Головацька-Гуль Г.В.,"}),d.jsx("li",{children:"Відділ духових та ударних інструментів: Теліна Т.К.,"}),d.jsx("li",{children:"Відділ предмету за вибором: Лосєва Е.Л.,"}),d.jsx("li",{children:"Відділ концертмейстерства та вокалу: Лук'янчук Н.Є.,"}),d.jsx("li",{children:"Теоретичний відділ: Гайова Т.М."})]})]})})})]})},C4=()=>{const{id:e}=m0(),t=h4(e),n=Ss(),r=()=>{n(-1)};return d.jsxs(U1,{children:[d.jsxs(w4,{children:[d.jsx(y4,{src:t.photo,alt:t.name,onError:i=>{i.target.style.display="none";const o=document.createElement("div");o.style.width="100%",o.style.height="200px",o.style.border="1px solid var(--accentColor)",o.style.backgroundColor="linear-gradient(to right, #fff5ed 0 90%)",i.target.parentNode.insertBefore(o,i.target)}}),d.jsxs(x4,{children:[d.jsx(F1,{children:t.name}),d.jsx(D1,{children:t.about})]}),d.jsx(W1,{children:d.jsx(B1,{})})]}),d.jsx(ff,{"aria-label":"go back",onClick:r,children:"Повернутися назад"})]})},q1=({bands:e})=>d.jsx(V1,{children:d.jsx(H1,{children:e.map(t=>d.jsx(Y1,{children:d.jsxs(G1,{to:`${t.id}`,children:[t.photo?d.jsx(X1,{src:t.photo,alt:`photo of ${t.name}`}):d.jsx(j1,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"})}),d.jsx(Q1,{children:t.name})]})},t.id))})});q1.propTypes={bands:T.arrayOf(T.shape({id:T.string.isRequired,name:T.string.isRequired})).isRequired};const E4=()=>{const e=g4();return d.jsx(S1,{children:d.jsx(q1,{bands:e})})},j4=P.div`
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
`,P4=P.img`
width: 100%;
height: auto;
/* object-fit: cover; */
object-fit: contain;
border-radius: 15px;
 /* box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px; */
 @media screen and (min-width: 778px) {
  height: 400px;
  }
`,T4=()=>{const{id:e}=m0(),t=v4(e),n=Ss(),r=()=>{n(-1)};return d.jsxs(U1,{children:[d.jsxs(j4,{children:[d.jsx(P4,{src:t.photo,alt:t.name,onError:i=>{i.target.style.display="none";const o=document.createElement("div");o.style.width="100%",o.style.height="200px",o.style.border="1px solid var(--accentColor)",o.style.backgroundColor="linear-gradient(to right, #fff5ed 0 90%)",i.target.parentNode.insertBefore(o,i.target)}}),d.jsx(F1,{children:t.name}),d.jsx(D1,{children:t.about}),d.jsx(W1,{children:d.jsx(B1,{})})]}),d.jsx(ff,{"aria-label":"go back",onClick:r,children:"Повернутися назад"})]})},_4=P.div`
margin: auto;
min-height: 700px;
`,N4=P.h2`
font-family: 'Montserrat', sans-serif;
font-size: 24px;
font-weight: 600;
text-align: center;
color: var(--accentColor);
@media screen and (min-width: 558px) {
    font-size: 36px;
  }
`,L4=P.div`
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
`,O4=P.img`
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
`,z4=P.address`
/* border: 1px solid var(--accentColor); */
padding: 20px;
font-size: 14px;
border-radius: 10px;
box-sizing: border-box;
width: 300px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

ul{
  width: 100%;
}

@media screen and (min-width: 558px) {
    width: 400px;
    ul{
  width: 400px;
}
  }
@media screen and (min-width: 1100px) {
    font-size: 18px;
    margin-left: 30px;
    box-shadow: none;

  }
`,Do=P.span`
font-weight: 600;
margin-right: 20px;

color: var(--accentColor);
`,$4="/KDMSH/assets/map-a7958fcf.png",A4=()=>d.jsxs(_4,{children:[d.jsx(N4,{children:"Контактна інформація"}),d.jsxs(L4,{children:[d.jsx(d.Fragment,{children:d.jsx(O4,{src:$4,alt:"map",width:"500px",height:"500px"})}),d.jsx(z4,{children:d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx(Do,{children:"Адреса:"})," вулиця Зодчих, 30а, ",d.jsx("br",{}),"Київ, 03194"]}),d.jsxs("li",{children:[d.jsx(Do,{children:"Телефон:"}),d.jsx(In,{to:"tel:+380934139512",style:{textDecoration:"none",color:"#212121"},children:"(093) 413-95-12"})]}),d.jsxs("li",{children:[d.jsx(Do,{children:"Email:"}),d.jsx(In,{to:"mailto:dmsh22@ukr.net",target:"_blank",style:{textDecoration:"none",color:"#212121"},children:"dmsh22@ukr.net"})]}),d.jsxs("li",{children:[d.jsx(Do,{children:"Розклад роботи:"})," ",d.jsx("br",{})," пн-пт: 10.00 - 20.00 ",d.jsx("br",{})," cб: 10.00 - 16.00 ",d.jsx("br",{})," нд: вихідний"]})]})})]})]}),R4=()=>d.jsx(ao,{children:d.jsxs(so,{children:[d.jsx(Un,{children:"Про нас"}),"Для мешканців Святошинського району працює з 1971 року. Школа є державним позашкільним навчальним закладом освіти в галузі культури, здійснює естетичне виховання дітей, учнів, громадян, забезпечуючи принцип єдності і наступності мистецької освіти; проводить навчально-виховну, методичну, просвітницьку роботу."]})}),I4=()=>d.jsx(C.Suspense,{fallback:d.jsx(zx,{}),children:d.jsx(k2,{children:d.jsxs(Be,{path:"/",element:d.jsx(i3,{}),children:[d.jsx(Be,{index:!0,element:d.jsx(w3,{})}),d.jsx(Be,{path:"about",element:d.jsx(b3,{})}),d.jsx(Be,{path:"school",element:d.jsx(R4,{})}),d.jsx(Be,{path:"management",element:d.jsx(O3,{})}),d.jsx(Be,{path:"team/:currentPage",element:d.jsx(R1,{})}),d.jsx(Be,{path:"reviews",element:d.jsx(p4,{})}),d.jsx(Be,{path:"departments",element:d.jsx(S4,{})}),d.jsx(Be,{path:"departments/:id",element:d.jsx(C4,{})}),d.jsx(Be,{path:"bands",element:d.jsx(E4,{})}),d.jsx(Be,{path:"bands/:id",element:d.jsx(T4,{})}),d.jsx(Be,{path:"contacts",element:d.jsx(A4,{})})]})})});function M4(){return d.jsx(d.Fragment,{children:d.jsx(I4,{})})}bl.createRoot(document.getElementById("root")).render(d.jsx(_2,{basename:"/KDMSH",children:d.jsx(M4,{})}));
