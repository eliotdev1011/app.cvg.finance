import{j as e,Y as i,r as l,af as r}from"./index-614b6d1c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="b7a34c01-63d6-4c53-90a9-ebf956f80b96",s._sentryDebugIdIdentifier="sentry-dbid-b7a34c01-63d6-4c53-90a9-ebf956f80b96")}catch{}})();function c({children:s,className:a}){return e.jsxs("div",{className:`page-header-grid  mb-3 lg:mb-6  ${a||""}`,children:[e.jsx(i,{className:"one  ",children:s?.at(0)}),e.jsx(i,{className:"two   ",children:s?.at(1)})]})}function o({title:s,children:a}){const[n,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"flex align-items-center text-lg gap-2 mb-3 Btn Btn-nostyle",onClick:()=>t(!n),children:[e.jsx("i",{className:"pi pi-info-circle color-tonic"}),e.jsx("span",{className:"text-white",children:s})]}),e.jsx(r,{className:"Dialog-panel",header:void 0,closable:!0,visible:n,style:{width:"40vw"},breakpoints:{"960px":"60vw","641px":"96vw"},onHide:()=>t(!1),dismissableMask:!1,children:e.jsx("div",{className:"my-2 p-2 ",children:a})})]})}export{c as P,o as a};