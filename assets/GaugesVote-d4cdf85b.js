import{aF as Ge,r as n,G as Fe,e as ae,$ as le,j as e,ac as B,ab as E,n as A,a7 as ne,Q as q,aK as Z,Y as L,a6 as Pe,_ as Te}from"./index-614b6d1c.js";import{s as D}from"./lock.service-f4c84d65.js";import{K as G}from"./KeyValueDisplay-ec59a4c2.js";import{P as ee,a as Ie}from"./PageHelp-3dfbb5e1.js";import{H as te}from"./HeaderInfoPanelContainer-15db6aee.js";import{E as M}from"./ErrorDisplay-8be22464.js";import{D as K}from"./dropdown.esm-4d742924.js";import{I as Ae,a as Be}from"./inputnumber.esm-7912d73a.js";import{d as Ue}from"./utils-03ca5988.js";import{g as Le}from"./stakeDaoUtils-f752dab6.js";import{g as Ee}from"./convexUtils-7f054622.js";import"./rewards.service-40a9454a.js";import"./convexStaking-08fe3d07.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new Error().stack;l&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[l]="b21fd470-b86d-4422-b984-b3829d911207",t._sentryDebugIdIdentifier="sentry-dbid-b21fd470-b86d-4422-b984-b3829d911207")}catch{}})();const v=Ge.createContext(null),qe=({children:t})=>{const[l,c]=n.useState(0),[u,x]=n.useState(void 0),[p,y]=n.useState(void 0),[j,g]=n.useState(void 0),[o,w]=n.useState(void 0),[R,Q]=n.useState(void 0),[V,U]=n.useState({newVote:"",actualVotes:[]}),{handleTransaction:oe,notifyError:k}=n.useContext(Fe),[h,C]=n.useState([]),[re,ie]=n.useState(!1),[F,ce]=n.useState(void 0),[P,de]=n.useState(void 0),{actualCycle:T,cvgPrice:$}=n.useContext(ae),[H,ue]=n.useState([{name:"Future Gauges distribution",code:"FUTURE"}]),[O,Y]=n.useState(void 0),[I,_]=n.useState(void 0),{address:z,getSigner:me,isWellConnected:J}=le();n.useEffect(()=>{if(J&&j===void 0&&ve(z),p===void 0&&T&&!T?.loading&&$&&!$?.loading&&pe(),u===void 0&&ge(),H.length===1&&T>=1n){const s=[];for(let a=T-1n;a!==0n;a--)s.push({name:"Cycle "+a,code:a});ue(H.concat(s))}},[u,p,j,J,z]);const ge=()=>{x({loading:!0}),D.getAllGauges().then(s=>{x(s),_(s.graphData),Y({FUTURE:s.graphData})}).catch(s=>{k(s),x({error:!0})})},xe=n.useMemo(()=>{if(!I)return;if(!P&&!F)return I;let s=[...I];if(F&&(s=s.filter(a=>a.name.toLowerCase().includes(F.toLowerCase().trim()))),P){const a=(r,i)=>(r.weight-i.weight)*P;s.sort(a)}return s},[I,F,P]),pe=()=>{y({loading:!0}),D.getHeaderData(T,$).then(s=>{y(s)}).catch(s=>{k(s),y({error:!0})})},fe=async s=>{let a;if(O[s.code]!==void 0)a=O[s.code],_(a);else{const r=s.code;D.getHistoryDataGauges(r,u).then(i=>{a=i,Y({...O,[s.code]:i}),_(a)}).catch(i=>{k(i)})}},he=s=>{U({...V,newVote:s})},je=(s,a)=>{if(a===null)return;const r=[...h],i=r?.find(m=>m.tick===s);i.percent=BigInt(a*100),C(r)},be=(s,a)=>{let r=V.actualVotes;r[a].power=BigInt(s*100),U({...V,actualVotes:r})},we=n.useMemo(()=>o?.gaugeOptionsFiltered?.filter(s=>!h.some(a=>a.gauge===s.code)),[o?.gaugeOptionsFiltered,h]),Ne=(s,a)=>{w({loading:!0}),D.getNftData(s,a).then(r=>{w(r),U({...V,actualVotes:r.nftSlopes})}).catch(r=>{w({error:!0}),k(r)})},ve=s=>{g({loading:!0}),D.getUserData(s).then(a=>{g(a)}).catch(a=>{k(a),g({error:!0})})},W=n.useMemo(()=>{let s=0,a=0,r=0,i=0;const m=V?.actualVotes.filter(d=>d.power>0n).map(d=>{const b=Number(d.power)/100;return a+=b,r=a,s+=d.timeLeft!==0?b:0,{power:b,gauge:d?.address,locked:!!d.timeLeft}}),f=X().find(d=>d.tokenId===R.code)?.votes.map(d=>({...d,power:Number(d?.percent)/100,gauge:d?.gauge,allocated:m?.find(b=>d.gauge===b.gauge&&!b.locked)?.power||0,locked:m?.find(b=>d.gauge===b.gauge&&b.locked)?.power||0}));f?.forEach(d=>{const b=m.find(De=>De.gauge===d.gauge);i+=d.power,b?a+=d.power-b.power:a+=d.power});let N=!0,S;return a>100&&(N=!1,S="Deployed power is greater than available power , Remove votes"),f?.some(d=>d.power===d.allocated)&&(N=!1,S="Some of your votes have no power change, consider removing them."),{pendingVotes:f,canSubmit:N,cannotSubmitReason:S,allocatedPower:a,availablePower:100-a,toBeDeployedPower:i,lockedPower:s,votedPower:r}},[V,R,l,h]),ye=async()=>{try{const a=X()?.map(i=>({tokenId:i.tokenId,votes:[...i.votes].map(m=>({gauge_address:m.gauge,weight:m.percent}))})),r=await me();await D.voteGaugeMultiple(a,r).then(i=>{oe(i,()=>{Q(void 0),w(void 0),C([]),x(void 0),g(void 0)})})}catch(s){k(s)}};function Ve(s){let a=[...h];const r=a.findIndex(i=>i.tick===s);r>-1&&(a.splice(r,1),C(a))}function ke(){const s=W?.pendingVotes?.reduce((f,N)=>f+N.allocated,0)||0,a=100-W.votedPower+s,r=h.length;let i=Math.floor(a/r);const m=a%r;[...Array(r).keys()].forEach(f=>{let N=i;m!==0&&m>f&&N++,h[f].percent=N*100}),C([...h])}function Ce(s,a,r,i,m){let f=[...h];const N=h.find(S=>S.tokenId===a&&S.gauge===r);N?N.percent=m:f.push({label:s,tokenId:a,gauge:r,percent:m,gaugeName:i,tick:Date.now()}),C(f),U({...V,newVote:{code:void 0,label:"select a gauge"}}),c(0)}function X(){function s(i,m,f){return f.indexOf(i)===m}return h.map(i=>i.tokenId).filter(s).map(i=>{const m=h.filter(f=>f.tokenId===i);return{tokenId:i,votes:[...m]}})||[]}const Se={allGauges:u,userData:j,headerData:p,loadNftData:Ne,nftData:o,voteOptions:we,setNewVote:he,votesValues:V,changeInputActualVotes:be,selectedNFT:R,setSelectedNFT:Q,doVoteMulti:ye,multiDetailVisible:re,setMultiDetailVisible:ie,dropdownValuesGauge:H,activeGraph:I,tableRows:xe,updateActiveGraph:fe,updateVote:je,setStackedVotes:C,stackedVotes:h,removeStackedVote:Ve,newGaugeWeight:l,setNewGaugeWeight:c,searchFilter:F,setSearchFilter:ce,searchSort:P,setSearchSort:de,currentVoteState:W,addNewVote:Ce,distributeVote:ke};return e.jsx(v.Provider,{value:Se,children:t})};function Me(){const{headerData:t}=n.useContext(v),{nextDistributionDurations:l,actualCycle:c}=n.useContext(ae);return t?.loading?e.jsxs(ee,{children:[e.jsx(B,{}),e.jsx(B,{})]}):e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx(Ie,{title:"Gauge info",children:e.jsxs(e.Fragment,{children:["Vote for gauges to distribute ",e.jsx("span",{className:"color-tonic",children:"CVG"})," staking rewards among different staking pools.",e.jsx("br",{}),e.jsx("br",{}),"Voting power deployed in a given gauges may not be modified until 10 days (starting from vote submission)."]})}),e.jsx(G,{label:"Current Cycle",value:Number(c),className:"is-highlight"}),e.jsx(G,{label:"Next CVG rewards",value:l?.data?.durationNextCvg,className:"is-highlight"}),e.jsx(G,{label:"Next TDE",value:l?.data?.durationNextTde,className:"is-highlight"})]}),e.jsxs(te,{children:[e.jsx(G,{label:"Total CVG locked",value:E(t?.totalCvgLocked)+" ($"+A(t?.totalCvgLockedDollar)+")",className:"is-highlight"}),e.jsx(G,{label:"Total veCVG",value:E(t?.veTotalSupply),className:"is-highlight"}),e.jsx(G,{label:"Total ysCVG",value:E(t?.ysTotalSupply),className:"is-highlight"})]})]})}function Re({vote:t}){if(t.timeLeft===0&&Number(t.power)===0)return;const l=t.timeLeft?"info-block":"";return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex align-items-stretch  text-sm lg:text-base relative justify-content-center gap-2",children:[e.jsx("span",{className:"flex-basis-33 info-label border-none p-2  white-space-nowrap",children:t.name}),e.jsx("span",{className:`flex-basis-33  p-2 info-block-revert ${l}`,children:Number(t.power)===0?"-":` ${Number(t.power)/100}%`}),e.jsx("span",{className:`flex-basis-33 border-gray border-1 p-2  white-space-nowrap ${l}`,children:t.timeLeft!==0?t.timeLeft:""})]})})}function $e(){const{nftData:t}=n.useContext(v);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-3",children:"Voting Power deployed"}),e.jsx("div",{className:"flex flex-column gap-2",children:t?.nftSlopes&&t?.nftSlopes.length!==0?t?.nftSlopes?.map((l,c)=>e.jsx(Re,{vote:l},c)):"No Voting power deployed"})]})}function He({vote:t}){const{removeStackedVote:l,updateVote:c}=n.useContext(v),x=Ue(p=>{c(t.tick,p.value)},200);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"",children:e.jsxs("div",{className:"flex flex-wrap xl:flex-nowrap xl:justify-content-center align-items-center gap-2",children:[e.jsxs("span",{className:"w-full border-none info-label p-2",children:[t.gaugeName," ",!!t?.allocated&&e.jsxs(e.Fragment,{children:[" ",e.jsxs("span",{className:"text-sm ",children:[" - Actual: ",t.allocated,"% "]})]})]}),e.jsx(Ae,{inputId:"max-buttons",inputClassName:"p-3",className:`appearance-none input-gauge-weight  w-12rem ${t.power===t.allocated&&"border-1 border-red "}`,value:t.power,mode:"decimal",onChange:x,minFractionDigits:2,maxFractionDigits:10,locale:"en-US"}),e.jsx("div",{children:e.jsx("button",{className:"Btn Btn-nostyle",onClick:()=>l(t.tick),children:e.jsx("i",{className:"pi pi-trash color-tonic"})})})]})})})}function Oe(){const{nftData:t,votesValues:l,selectedNFT:c,currentVoteState:u,voteOptions:x,addNewVote:p,distributeVote:y}=n.useContext(v);if(!t)return e.jsx(e.Fragment,{});if(t.error)return e.jsx(M,{});if(t.loading)return e.jsx("div",{className:"my-4",children:e.jsx(ne,{})});const j=(o,w)=>{p("Add vote",c.code,o,w,0n)},g=o=>o?e.jsxs("div",{className:o?.locked||!o?.isUpdatable?"bg-gray":"",children:[e.jsx("span",{children:o?.display}),o&&Number(o?.power)!==0&&e.jsx(e.Fragment,{children:e.jsxs("span",{className:"text-sm",children:[" - ",Number(o?.power)/100,"% "]})}),Number(o?.power)===0&&o&&!o?.isUpdatable&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-sm",children:" - Locked "})})]}):e.jsx("span",{children:"Select a gauge."});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-4",children:e.jsxs("div",{className:"flex align-items-center gap-2",children:[e.jsxs("label",{htmlFor:"add-vote",className:"white-space-nowrap",children:["Add vote:"," "]}),e.jsx(K,{id:"add-vote",filter:!0,className:"w-full",disabled:t.veCvgBalance===0n,itemTemplate:g,valueTemplate:g,value:l?.newVote,options:x,onChange:o=>{!o?.value?.locked&&o?.value?.isUpdatable&&j(o.value.code,o.value.display)},optionDisabled:o=>o.locked||!o.isUpdatable,optionLabel:"display"})]})}),e.jsxs("div",{className:"mb-1 flex flex-column gap-2 ",children:[u?.pendingVotes?.map(o=>e.jsx(He,{vote:o},o.tick)),t.veCvgBalance===0n&&e.jsxs("span",{className:"w-full  color-tonic bg-quiet p-1 ",children:[e.jsx("i",{className:" pi  pi-exclamation-triangle"})," No veCvg balance on this lock token"," "]})]}),u?.pendingVotes?.length>0&&e.jsx("div",{className:"text-right mb-4",children:e.jsxs(q,{className:"Btn Btn-small-action flex-inline align-items-center gap-1",onClick:y,children:[e.jsx("i",{className:"pi pi-sliders-h color-tonic"}),e.jsx("span",{children:"Distribute"})]})})]})}function _e(){const{nftData:t,currentVoteState:l}=n.useContext(v);return t?.error?e.jsxs("div",{children:[" ",e.jsx(M,{})," "]}):t?.loading?e.jsxs("div",{className:"flex  justify-content-center w-full",children:[" ",e.jsx(B,{})," "]}):e.jsxs("div",{className:"flex flex-column gap-2",children:[e.jsxs("div",{className:"flex flex-column lg:flex-row justify-content-between lg:align-items-center",children:[e.jsx("span",{children:"veCVG Balance:"}),e.jsxs("span",{className:"info-block w-10rem",children:[E(t?.veCvgBalance)," veCVG"]})]}),e.jsxs("div",{className:"flex flex-column lg:flex-row justify-content-between  lg:align-items-center",children:[e.jsx("span",{children:"Allocated power:"}),e.jsxs("span",{className:"info-block  w-10rem",children:[A(l.allocatedPower,!0,2)," %",!!l.lockedPower&&e.jsxs("div",{className:"text-xs",children:[e.jsx("span",{children:"Locked: "}),e.jsxs("span",{className:" ",children:[A(l.lockedPower,!0,2)," %"]})]})]})]}),e.jsxs("div",{className:"flex flex-column lg:flex-row justify-content-between  lg:align-items-center",children:[e.jsx("span",{children:"Available power:"}),e.jsxs("span",{className:"info-block  w-10rem",children:[A(l.availablePower,!0,2)," %"]})]})]})}function We(){const{allGauges:t,userData:l,loadNftData:c,selectedNFT:u,setSelectedNFT:x,setStackedVotes:p}=n.useContext(v),y=j=>{c(j.code,t),x(j),p([])};return l?.error?e.jsx(M,{}):!l||l?.loading?e.jsx(ne,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-column gap-3",children:[e.jsx("div",{children:e.jsx(K,{className:"w-full",value:u,options:l,onChange:j=>{y(j.value)},optionLabel:"name",placeholder:"Select a token"})}),e.jsx(_e,{})]})})}function Ke(){const{selectedNFT:t,doVoteMulti:l,currentVoteState:c}=n.useContext(v);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-column gap-2 ",hidden:!t,children:e.jsxs("div",{className:"flex flex-column lg:flex-row justify-content-between lg:align-items-center",children:[e.jsx("span",{children:"Power to be deployed: "}),e.jsxs("span",{className:"info-block w-10rem",children:[c.toBeDeployedPower,"% "]})]})}),e.jsx("div",{className:"mt-5  text-right",children:e.jsx(q,{label:"Submit votes",disabled:!c.canSubmit,className:"Btn",onClick:l,tooltip:c.cannotSubmitReason,tooltipOptions:{showOnDisabled:!0,className:"color-bg-tonic"}})})]})}const Qe=[0,10,20,30,40,50,60,70,80,90,100];function Ye({data:t,index:l}){const c=l*11%Z.length,u=Z[c];return e.jsxs("div",{className:"flex flex-column lg:flex-row align-items-center gap-2 lg:gap-4 w-full  justify-content-between",children:[e.jsxs("div",{className:"lg:flex-basis-33  border-1 p-3 w-full lg:max-w-12rem flex align-items-center gap-3",style:{borderColor:u},children:[e.jsx("div",{children:e.jsx("img",{src:t.logoUrl,alt:"logo",className:"staking-asset-logo w-2rem "})}),e.jsx("div",{children:t.name})]}),e.jsxs("div",{className:"flex flex-column flex-grow-1 gap-2  w-full  ",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("span",{style:{color:u},className:"font-medium w-4rem",children:[t.percent,"%"]}),e.jsxs("div",{className:"flex-grow-1 ",children:[e.jsx("div",{className:"flex justify-content-between w-full h-0-25rem top--0-25rem  relative",children:Qe.map((x,p)=>e.jsx("div",{className:"gauge-progress-ticker"},p))}),e.jsx("div",{className:"w-full h-1rem bg-quiet relative top--0-25rem",children:e.jsx("div",{style:{backgroundColor:u,width:`${t.percentRaw}%`},className:" h-1rem"})})]})]}),e.jsxs("span",{className:"white-space-nowrap",children:[A(t.weight)," veCVG"]})]})]})}function ze(){const{searchFilter:t,setSearchFilter:l,searchSort:c,setSearchSort:u}=n.useContext(v),x=p=>{l(p.target.value)};return e.jsxs("div",{className:"flex flex-column lg:flex-row  gap-2 align-items-center",children:[e.jsx("div",{className:"flex-grow-1",children:e.jsxs("span",{className:"p-input-icon-left  w-full  max-w-30rem ",children:[e.jsx("i",{className:"pi pi-search"}),e.jsx(Be,{type:"search",placeholder:"Search",value:t,onChange:x,className:"bg-none w-full  border-quiet border-1 text-white"})]})}),e.jsxs("div",{className:"flex  gap-1 align-content-end align-items-end",children:[e.jsxs("button",{type:"button",className:` border-quiet border-1 p-2   ${c===1?"bg-disabled-dark text-white":"bg-none color-quiet"}`,onClick:()=>u(1),children:[e.jsx("i",{className:"pi pi-caret-up p-1"}),"%"]}),e.jsxs("button",{type:"button",className:` border-quiet border-1 p-2 ${c===-1?"bg-disabled-dark text-white":"bg-none color-quiet"}`,onClick:()=>u(-1),children:[e.jsx("i",{className:"pi pi-caret-down  p-1 ",style:{fill:"#fff"}})," %"]})]})]})}const se=10;function Je(){const{tableRows:t,dropdownValuesGauge:l,updateActiveGraph:c}=n.useContext(v),[u,x]=n.useState(!1),[p,y]=n.useState(l[0]);if(t===void 0)return e.jsx(B,{});function j(g){if(g===se)return e.jsx(q,{label:`Display all (${t?.length})`,className:"inline Btn  ml-auto",onClick:()=>x(!0)},"Display all")}return e.jsxs("div",{className:"align-content-center",children:[e.jsx(K,{className:" w-full mb-4 max-w-15rem lg:max-w-20rem",value:p,options:l,onChange:g=>{y(g.value),c(g.value)},optionLabel:"name",placeholder:"Select a NFT"}),e.jsxs("div",{className:"flex justify-content-start align-items-start flex-column w-auto lg:gap-3 p-2 gap-4",children:[e.jsx(ze,{}),e.jsxs("div",{className:"flex flex-column lg:gap-3 gap-4  w-full",children:[t.map((g,o)=>{if(!u&&o>=se)return j(o);let w=Le(g.name);return w.logo===void 0&&(w=Ee(g.name)),e.jsx(Ye,{data:{...g,logoUrl:w?.logo,name:w.key||g.name},index:o},o)}),u&&e.jsx(q,{label:"Display less ",className:"Btn inline ml-auto",onClick:()=>x(!1)})]})]})]})}function Xe(){const{allGauges:t}=n.useContext(v),{isWellConnected:l}=le();return t?.error?e.jsx("div",{className:"mt-4 md:mt-6",children:e.jsx(L,{children:e.jsx(M,{})})}):t?.loading?e.jsx("div",{className:"mt-4 md:mt-6",children:e.jsx(L,{children:e.jsx(B,{})})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4 md:mt-6",children:e.jsxs(L,{children:[e.jsx("div",{className:"Panel-title ",children:"Gauges Votes"}),e.jsxs("div",{className:"gauge-layout ",children:[l?e.jsxs(e.Fragment,{children:[e.jsxs("fieldset",{className:"border-dark-gray border-1 p-3  m-0 inline-block  gauge-layout-action",children:[e.jsx("legend",{className:"p-2 color-quiet",children:"Select position & vote"}),e.jsx(We,{}),e.jsx(Oe,{}),e.jsx(Ke,{})]}),e.jsxs("fieldset",{className:"border-dark-gray border-1  p-3 inline-block   gauge-layout-current",children:[e.jsx("legend",{className:"p-2 color-quiet",children:"Current Votes"}),e.jsx($e,{})]})]}):e.jsx("div",{className:"mt-3 ",children:e.jsx(L,{className:"border-gray border-1",children:e.jsx(Pe,{})})}),e.jsxs("fieldset",{className:"border-dark-gray border-1 p-3   inline-block  gauge-layout-total ",children:[e.jsx("legend",{className:"p-2 color-quiet",children:"All gauge vote(s)"}),e.jsx(Je,{})]})]})]})})})}function Ze(){return e.jsx(qe,{children:e.jsx("main",{className:" flex justify-content-center",children:e.jsxs(Te,{children:[e.jsx(Me,{}),e.jsx(Xe,{})]})})})}function gt(){return e.jsx(Ze,{})}export{gt as default};
