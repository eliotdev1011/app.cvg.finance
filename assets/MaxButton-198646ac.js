import{r as i,O as u,l as A,T,R as k,j as B,Q as _}from"./index-614b6d1c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="87a1b1f3-23d0-4f36-af68-46abfd118edd",e._sentryDebugIdIdentifier="sentry-dbid-87a1b1f3-23d0-4f36-af68-46abfd118edd")}catch{}})();function D(){return D=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},D.apply(this,arguments)}function O(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=e[t];return l}function F(e){if(Array.isArray(e))return O(e)}function R(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function N(e,a){if(e){if(typeof e=="string")return O(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,a)}}function K(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(e){return F(e)||R(e)||N(e)||K()}function L(e){if(Array.isArray(e))return e}function P(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var l,m,o,c,s=[],f=!0,y=!1;try{if(o=(t=t.call(e)).next,a===0){if(Object(t)!==t)return;f=!1}else for(;!(f=(l=o.call(t)).done)&&(s.push(l.value),s.length!==a);f=!0);}catch(h){y=!0,m=h}finally{try{if(!f&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(y)throw m}}return s}}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(e,a){return L(e)||P(e,a)||N(e,a)||V()}var j=i.memo(function(e){var a=i.useState(!1),t=$(a,2),l=t[0],m=t[1],o=function(r){e.onClick&&e.onClick({originalEvent:r,option:e.option})},c=function(){m(!0)},s=function(){m(!1)},f=function(r){var n=r.which;n===32&&(o(r),r.preventDefault())},y=function(){return e.template?u.getJSXElement(e.template,e.option):i.createElement("span",{className:"p-button-label p-c"},e.label)},h=A("p-button p-component",{"p-highlight":e.selected,"p-disabled":e.disabled,"p-focus":l},e.className),E=y();return i.createElement("div",{className:h,role:"button","aria-label":e.label,"aria-pressed":e.selected,onClick:o,onKeyDown:f,tabIndex:e.tabIndex,onFocus:c,onBlur:s},E,!e.disabled&&i.createElement(k,null))});j.displayName="SelectButtonItem";var w=i.memo(i.forwardRef(function(e,a){var t=i.useRef(null),l=function(n){if(!(e.disabled||c(n.option))){var d=s(n.option);if(!(d&&!e.unselectable)){var b=o(n.option),v;if(e.multiple){var S=e.value?C(e.value):[];v=d?S.filter(function(I){return!u.equals(I,b,e.dataKey)}):[].concat(C(S),[b])}else v=d?null:b;e.onChange&&e.onChange({originalEvent:n.originalEvent,value:v,stopPropagation:function(){},preventDefault:function(){},target:{name:e.name,id:e.id,value:v}})}}},m=function(n){return e.optionLabel?u.resolveFieldData(n,e.optionLabel):n&&n.label!==void 0?n.label:n},o=function(n){return e.optionValue?u.resolveFieldData(n,e.optionValue):n&&n.value!==void 0?n.value:n},c=function(n){return e.optionDisabled?u.isFunction(e.optionDisabled)?e.optionDisabled(n):u.resolveFieldData(n,e.optionDisabled):n&&n.disabled!==void 0?n.disabled:!1},s=function(n){var d=o(n);if(e.multiple){if(e.value&&e.value.length)return e.value.some(function(b){return u.equals(b,d,e.dataKey)})}else return u.equals(e.value,d,e.dataKey);return!1},f=function(){return e.options&&e.options.length?e.options.map(function(n,d){var b=e.disabled||c(n),v=m(n),S=b?null:0,I=s(n),x=v+"_"+d;return i.createElement(j,{key:x,label:v,className:n.className,option:n,onClick:l,template:e.itemTemplate,selected:I,tabIndex:S,disabled:b})}):null};i.useImperativeHandle(a,function(){return{props:e,getElement:function(){return t.current}}});var y=u.isNotEmpty(e.tooltip),h=u.findDiffKeys(e,w.defaultProps),E=A("p-selectbutton p-buttonset p-component",e.className),g=f();return i.createElement(i.Fragment,null,i.createElement("div",D({ref:t,id:e.id,className:E,style:e.style},h,{role:"group"}),g),y&&i.createElement(T,D({target:t,content:e.tooltip},e.tooltipOptions)))}));w.displayName="SelectButton";w.defaultProps={__TYPE:"SelectButton",id:null,value:null,options:null,optionLabel:null,optionValue:null,optionDisabled:null,tabIndex:null,multiple:!1,unselectable:!0,disabled:!1,style:null,className:null,dataKey:null,tooltip:null,tooltipOptions:null,itemTemplate:null,onChange:null};function H({setValue:e,available:a,label:t="max",className:l="ml-2"}){return B.jsx(_,{disabled:!a,label:t,className:`Btn  Btn-small-action ${l||""}`,onClick:e})}export{H as M,w as S};
