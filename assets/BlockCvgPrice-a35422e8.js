import{r as t,e as c,j as e,n as i}from"./index-614b6d1c.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="fc0b5894-3795-497f-b496-2f832896ed79",s._sentryDebugIdIdentifier="sentry-dbid-fc0b5894-3795-497f-b496-2f832896ed79")}catch{}})();function a({className:s}){const{cvgPrice:n,cvgPriceProgression:r}=t.useContext(c);return e.jsxs("div",{className:`flex gap-2 align-items-center ${s||""}`,children:[e.jsx("span",{children:" CVG price: "}),e.jsxs("div",{className:"px-2 py-1 text-xl bg-tonic color-black min-w-4rem",children:[" $",i(n,!1,2)||"-"]}),!!r&&r!=="nd"&&e.jsxs("div",{className:"flex flex-column",children:[e.jsxs("div",{className:`text-base ${r>=0?"color-green":"color-red"}`,children:[e.jsx("i",{className:`pi ${r>=0?"pi-caret-up":"pi-caret-down"}`}),r,"%"]}),e.jsx("span",{className:"color-quiet text-xs",children:"(24h)"})]})]})}export{a as B};
