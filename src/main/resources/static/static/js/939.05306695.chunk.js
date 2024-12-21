"use strict";(self.webpackChunkstarter_bt5=self.webpackChunkstarter_bt5||[]).push([[939],{4939:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(5043),o=r(3216),c=r(4505),a=r(9157),s=r(8353),l=r(5299),i=r(1658),u=r(6259),b=r(579);const f=()=>{const{id:e}=(0,o.g)(),t=(0,o.Zp)(),[r,f]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{const t=await(0,c.Nr)(e);f(t.data)}catch(t){console.error("Error fetching ToDo details:",t)}})()}),[e]),r?(0,b.jsx)(a.A,{children:(0,b.jsxs)(s.A,{children:[(0,b.jsx)(l.A,{tag:"h5",children:r.title}),(0,b.jsxs)(i.A,{children:["Date: ",r.date]}),(0,b.jsxs)(i.A,{children:["Time: ",r.time||"N/A"]}),(0,b.jsxs)(i.A,{children:["Description: ",r.description||"No description"]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(u.A,{onClick:()=>t("/todo_list"),color:"secondary",className:"me-2",children:"Back to List"}),(0,b.jsx)(u.A,{onClick:()=>t("/todo_update/".concat(e)),color:"primary",children:"Update ToDo"})]})]})}):(0,b.jsx)("p",{children:"Loading..."})}},4505:(e,t,r)=>{r.d(t,{L3:()=>s,Nr:()=>a,Tk:()=>c,Ys:()=>i,uy:()=>l});var n=r(5091);const o="http://localhost:8080/todo",c=async()=>await n.A.get(o),a=async e=>await n.A.get("".concat(o,"/").concat(e)),s=async e=>await n.A.post("".concat(o),e),l=async(e,t)=>await n.A.put("".concat(o,"/").concat(e),t),i=async e=>await n.A.delete("".concat(o,"/").concat(e))},6259:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(5043),o=r(5173),c=r.n(o),a=r(8139),s=r.n(a),l=r(6794),i=["className","cssModule","variant","innerRef"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d={active:c().bool,"aria-label":c().string,onClick:c().func,variant:c().oneOf(["white"]),className:c().string,cssModule:c().object,innerRef:c().oneOfType([c().object,c().string,c().func])};function O(e){var t=e.className,r=(e.cssModule,e.variant),o=e.innerRef,c=p(e,i),a=(0,l.qO)(s()(t,"btn-close",r&&"btn-close-".concat(r)));return n.createElement("button",u({ref:o,type:"button",className:a},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"aria-label":"close"},c)))}O.propTypes=d;const y=O;var g=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m={active:c().bool,"aria-label":c().string,block:c().bool,children:c().node,className:c().string,cssModule:c().object,close:c().bool,color:c().string,disabled:c().bool,innerRef:c().oneOfType([c().object,c().func,c().string]),onClick:c().func,outline:c().bool,size:c().string,tag:l.Wx};function h(e){var t=(0,n.useCallback)((function(t){if(!e.disabled)return e.onClick?e.onClick(t):void 0;t.preventDefault()}),[e.onClick,e.disabled]),r=e.active,o=e["aria-label"],c=e.block,a=e.className,i=e.close,u=e.cssModule,b=e.color,f=void 0===b?"secondary":b,p=e.outline,d=e.size,O=e.tag,m=void 0===O?"button":O,h=e.innerRef,w=j(e,g);if(i)return n.createElement(y,w);var x="btn".concat(p?"-outline":"","-").concat(f),N=(0,l.qO)(s()(a,"btn",x,!!d&&"btn-".concat(d),!!c&&"d-block w-100",{active:r,disabled:e.disabled}),u);return w.href&&"button"===m&&(m="a"),n.createElement(m,v({type:"button"===m&&w.onClick?"button":void 0},w,{className:N,ref:h,onClick:t,"aria-label":o}))}h.propTypes=m;const w=h},9157:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(5043),o=r(5173),c=r.n(o),a=r(8139),s=r.n(a),l=r(6794),i=["className","cssModule","color","body","inverse","outline","tag","innerRef"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={body:c().bool,className:c().string,color:c().string,cssModule:c().object,innerRef:c().oneOfType([c().object,c().string,c().func]),inverse:c().bool,outline:c().bool,tag:l.Wx};function p(e){var t=e.className,r=e.cssModule,o=e.color,c=e.body,a=e.inverse,f=e.outline,p=e.tag,d=void 0===p?"div":p,O=e.innerRef,y=b(e,i),g=(0,l.qO)(s()(t,"card",!!a&&"text-white",!!c&&"card-body",!!o&&"".concat(f?"border":"bg","-").concat(o)),r);return n.createElement(d,u({},y,{className:g,ref:O}))}p.propTypes=f;const d=p},8353:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(5043),o=r(5173),c=r.n(o),a=r(8139),s=r.n(a),l=r(6794),i=["className","cssModule","innerRef","tag"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={className:c().string,cssModule:c().object,innerRef:c().oneOfType([c().object,c().string,c().func]),tag:l.Wx};function p(e){var t=e.className,r=e.cssModule,o=e.innerRef,c=e.tag,a=void 0===c?"div":c,f=b(e,i),p=(0,l.qO)(s()(t,"card-body"),r);return n.createElement(a,u({},f,{className:p,ref:o}))}p.propTypes=f;const d=p},1658:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(5043),o=r(5173),c=r.n(o),a=r(8139),s=r.n(a),l=r(6794),i=["className","cssModule","tag"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={className:c().string,cssModule:c().object,tag:l.Wx};function p(e){var t=e.className,r=e.cssModule,o=e.tag,c=void 0===o?"p":o,a=b(e,i),f=(0,l.qO)(s()(t,"card-text"),r);return n.createElement(c,u({},a,{className:f}))}p.propTypes=f;const d=p},5299:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(5043),o=r(5173),c=r.n(o),a=r(8139),s=r.n(a),l=r(6794),i=["className","cssModule","tag"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={className:c().string,cssModule:c().object,tag:l.Wx};function p(e){var t=e.className,r=e.cssModule,o=e.tag,c=void 0===o?"div":o,a=b(e,i),f=(0,l.qO)(s()(t,"card-title"),r);return n.createElement(c,u({},a,{className:f}))}p.propTypes=f;const d=p}}]);
//# sourceMappingURL=939.05306695.chunk.js.map