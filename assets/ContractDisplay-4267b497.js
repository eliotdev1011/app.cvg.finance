import{r as b,j as e}from"./index-614b6d1c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="2e0853a0-4eb6-4004-a3e1-b26162617f57",s._sentryDebugIdIdentifier="sentry-dbid-2e0853a0-4eb6-4004-a3e1-b26162617f57")}catch{}})();function x({tabs:s,children:r,activeTab:a=0,cssContent:t=void 0,css:n=void 0,cssMenu:d=void 0}){const[l,o]=b.useState(a);return e.jsxs("div",{className:`p-2 border-1 border-dark-gray h-full ${n||""}`,children:[e.jsx("div",{className:`flex flex-wrap gap-3 StakingRowTabInfo-legend  ${d||""} `,children:s.map((c,i)=>e.jsxs("button",{type:"button",onClick:()=>o(i),className:`Btn Btn-nostyle px-2  flex gap-1 align-items-cebter  text-base bg-black   ${l===i?"color-white":"color-quiet"}`,children:[e.jsx("i",{className:"pi pi-caret-right"}),c]},i))}),e.jsx("div",{className:`py-2  h-full ${t||""}`,children:r?.at(l)||e.jsx(e.Fragment,{children:"-"})})]})}const f="https://etherscan.io/";function p({contract:s,className:r,len:a=5,nameCss:t="",addressCss:n=""}){return e.jsx("div",{className:`contract ${r||""}`,children:e.jsx("a",{className:"no-underline",target:"_blank",href:f+"address/"+s.address,rel:"noreferrer",children:e.jsxs("div",{className:"flex  flex-column mb-2 gap-1 ",children:[e.jsxs("div",{className:`text-sm  ${t} `,children:[s.name,":"]}),e.jsxs("div",{className:`text-sm  p-2  bg-quiet  color-tonic ${n}`,children:[s.address?.substring(0,a),"...",s.address?.substring(42-a-1,42)]})]})})})}export{p as C,x as T};