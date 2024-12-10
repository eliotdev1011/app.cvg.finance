import{r as a,O as m,y as J,U as X,l as M,N as q,I as K,R as L}from"./index-614b6d1c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6375bccf-1b8b-4f90-9573-544eb7a88700",e._sentryDebugIdIdentifier="sentry-dbid-6375bccf-1b8b-4f90-9573-544eb7a88700")}catch{}})();function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},p.apply(this,arguments)}function W(e){if(Array.isArray(e))return e}function Y(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var l,i,b,f,u=[],s=!0,g=!1;try{if(b=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(l=b.call(t)).done)&&(u.push(l.value),u.length!==n);s=!0);}catch(d){g=!0,i=d}finally{try{if(!s&&t.return!=null&&(f=t.return(),Object(f)!==f))return}finally{if(g)throw i}}return u}}function R(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,l=new Array(n);t<n;t++)l[t]=e[t];return l}function z(e,n){if(e){if(typeof e=="string")return R(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(e,n)}}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(e,n){return W(e)||Y(e,n)||z(e,n)||B()}var h=a.forwardRef(function(e,n){var t=a.useState(e.id),l=O(t,2),i=l[0],b=l[1],f=a.useState(e.collapsed),u=O(f,2),s=u[0],g=u[1],d=a.useRef(n),v=a.useRef(null),o=e.toggleable?e.onToggle?e.collapsed:s:!1,E=i+"_header",I=i+"_content",S=function(r){e.toggleable&&(o?w(r):A(r),e.onToggle&&e.onToggle({originalEvent:r,value:!o})),r.preventDefault()},w=function(r){e.onToggle||g(!1),e.onExpand&&e.onExpand(r)},A=function(r){e.onToggle||g(!0),e.onCollapse&&e.onCollapse(r)};a.useImperativeHandle(n,function(){return{props:e,getElement:function(){return d.current},getContent:function(){return v.current}}}),a.useEffect(function(){m.combinedRefs(d,n)},[d,n]),J(function(){i||b(X())});var _=function(){if(e.toggleable){var r=i+"_label",y=o?e.expandIcon:e.collapseIcon;return a.createElement("button",{className:"p-panel-header-icon p-panel-toggler p-link",onClick:S,id:r,"aria-controls":I,"aria-expanded":!o,role:"tab"},K.getJSXIcon(y,void 0,{props:e,collapsed:o}),a.createElement(L,null))}return null},j=function(){var r=m.getJSXElement(e.header,e),y=m.getJSXElement(e.icons,e),N=_(),T=a.createElement("span",{className:"p-panel-title",id:E},r),C=a.createElement("div",{className:"p-panel-icons"},y,N),x=a.createElement("div",{className:"p-panel-header"},T,C);if(e.headerTemplate){var H={className:"p-panel-header",titleClassName:"p-panel-title",iconsClassName:"p-panel-icons",togglerClassName:"p-panel-header-icon p-panel-toggler p-link",togglerIconClassName:o?e.expandIcon:e.collapseIcon,onTogglerClick:S,titleElement:T,iconsElement:C,togglerElement:N,element:x,props:e,collapsed:o};return m.getJSXElement(e.headerTemplate,H)}else if(e.header||e.toggleable)return x;return null},P=function(){return a.createElement(q,{nodeRef:v,classNames:"p-toggleable-content",timeout:{enter:1e3,exit:450},in:!o,unmountOnExit:!0,options:e.transitionOptions},a.createElement("div",{ref:v,className:"p-toggleable-content","aria-hidden":o,role:"region",id:I,"aria-labelledby":E},a.createElement("div",{className:"p-panel-content"},e.children)))},D=m.findDiffKeys(e,h.defaultProps),U=M("p-panel p-component",{"p-panel-toggleable":e.toggleable},e.className),$=j(),k=P();return a.createElement("div",p({id:e.id,ref:d,className:U,style:e.style},D),$,k)});h.displayName="Panel";h.defaultProps={__TYPE:"Panel",id:null,header:null,headerTemplate:null,toggleable:null,style:null,className:null,collapsed:null,expandIcon:"pi pi-plus",collapseIcon:"pi pi-minus",icons:null,transitionOptions:null,onExpand:null,onCollapse:null,onToggle:null};export{h as P};