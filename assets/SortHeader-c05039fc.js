import{j as t,ae as c}from"./index-614b6d1c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="8406de41-0771-4efc-8772-fe7056788104",e._sentryDebugIdIdentifier="sentry-dbid-8406de41-0771-4efc-8772-fe7056788104")}catch{}})();function i(e){return e?e?.code===0?t.jsx("div",{className:"flex flex-column  h-full justify-content-center",children:"new"}):t.jsxs("div",{className:"flex flex-column  h-full justify-content-center",children:[" ",t.jsxs("span",{children:["Tkn. ",c(e?.code)]}),t.jsxs("small",{className:"text-xs color-quiet",children:[e?.amount," ",e?.token]})]}):t.jsx("div",{className:"flex flex-column  h-full justify-content-center",children:"-"})}function a({label:e,field:s,onSort:r,filter:n}){const l=n?.sort===s;return t.jsxs("button",{className:"Btn  xl:white-space-nowrap Btn-nostyle color-quiet py-1 text-base flex align-items-center gap-1",onClick:()=>r(s),children:[e,!!n&&t.jsx("i",{className:`w-2rem pi    ${l?n.sortDirection===-1?"pi-sort-down":"pi-sort-up":"pi-sort"} ${l?"color-white":"color-quiet"} `})]})}export{a as S,i as T};
