import{r as i,aR as g,j as n,aB as j}from"./index-614b6d1c.js";import{V as v}from"./ValueConnectedButton-ea3b8760.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="debd4bd3-61e8-491b-8c57-741ac26bf33c",e._sentryDebugIdIdentifier="sentry-dbid-debd4bd3-61e8-491b-8c57-741ac26bf33c")}catch{}})();function I({processKey:e,allowanceDefinition:t,value:r,valueRaw:d,params:l,label:c,iconSrc:u,perform:f,disabled:x,afterPerform:b,errors:a,className:m}){const{openProcessAction:h}=i.useContext(g),s=i.useRef(null);function p(){h(e,{value:r,valueRaw:d,params:l,label:c,iconSrc:u,perform:f,afterPerform:b},t)}return n.jsxs("div",{className:"inline-block",onMouseEnter:o=>{a?.length>0&&s?.current&&s.current.show(o)},onMouseLeave:()=>{s?.current&&s.current.hide()},children:[n.jsx(v,{handleAction:p,label:c,disabled:x,className:m}),n.jsx(j,{ref:s,dismissable:!0,children:n.jsx("div",{className:"relative Panel  mx-auto text-base max-w-30rem",style:{width:"90%"},children:n.jsx("div",{className:"flex flex-column",children:a?.map((o,y)=>n.jsxs("span",{className:"text-sm font-light color-quiet",children:["- ",o]},y))})})})]})}export{I as P};
