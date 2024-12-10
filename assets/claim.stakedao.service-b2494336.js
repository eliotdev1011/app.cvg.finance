import{B as R,s as d,d as y,a2 as A,a8 as h,a4 as I,a5 as p,aq as w,b as D}from"./index-614b6d1c.js";import{s as v,a as S}from"./staking.stakedao.service-87aa0857.js";import{g as f}from"./stakeDaoUtils-f752dab6.js";(function(){try{var m=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(m._sentryDebugIds=m._sentryDebugIds||{},m._sentryDebugIds[o]="e73b1676-ce08-41b8-bca0-c53ab99300f8",m._sentryDebugIdIdentifier="sentry-dbid-e73b1676-ce08-41b8-bca0-c53ab99300f8")}catch{}})();const O="hh-sol-artifact-1",M="SdtRewardDistributor",P="contracts/Staking/StakeDAO/SdtRewardDistributor.sol",N=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint8",name:"version",type:"uint8"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"acceptOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"totalCvgClaimable",type:"uint256"},{components:[{internalType:"contract IERC20",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],internalType:"struct ICommonStruct.TokenAmount[]",name:"totalSdtRewardsClaimable",type:"tuple[]"},{internalType:"uint256",name:"minCvgSdtAmountOut",type:"uint256"},{internalType:"bool",name:"isConvert",type:"bool"}],name:"claimCvgSdtSimple",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{components:[{internalType:"contract ISdtStakingPositionService",name:"stakingContract",type:"address"},{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],internalType:"struct ISdtStakingPositionManager.ClaimSdtStakingContract[]",name:"claimContracts",type:"tuple[]"},{internalType:"uint256",name:"minCvgSdtAmountOut",type:"uint256"},{internalType:"bool",name:"isConvert",type:"bool"},{internalType:"uint256",name:"sdtRewardCount",type:"uint256"}],name:"claimMultipleStaking",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"cvg",outputs:[{internalType:"contract ICvg",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"cvgControlTower",outputs:[{internalType:"contract ICvgControlTower",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"cvgSdt",outputs:[{internalType:"contract IERC20Mintable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract ICvgControlTower",name:"_cvgControlTower",type:"address"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pendingOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"poolCvgSDT",outputs:[{internalType:"contract ICrvPoolPlain",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"sdt",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"sdtStakingPositionManager",outputs:[{internalType:"contract ISdtStakingPositionManager",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract ICrvPoolPlain",name:"_poolCvgSDT",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"setPoolCvgSdtAndApprove",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],_={},E={},C={_format:O,contractName:M,sourceName:P,abi:N,linkReferences:_,deployedLinkReferences:E};class B{bcService=new R;async getRewards(o){const i=await d.getStaticData(),t=await v.getStakingPositionId(o);if(!t?.length)return{rewardTokens:[],result:{},totalSdtCvgRatio:-1};let n=await d.getStakings("stakedao");n=[...n,{stakingContract:i.stakedao.cvgSdtStaking,stakingName:"cvgSDT"}];const a=t.map(async u=>{const l=n.find(T=>T.stakingContract===u.stakingContract),k=await v.getStakingType(l?.stakingContract,l?.stakingName),b=f(l?.stakingName),g=await this.getAllClaimableAmounts(u);return{...await this._getSdtRewards(g),tokenId:Number(u.tokenId),stakingContract:u.stakingContract,logo:b?.logo,stakingName:b?.name||l?.stakingName,cvgRaw:g?.at(0),cvgAmount:y(g?.at(0),18),rewards:await this._addErc20InfoToRewards(g),type:k}}),s=await Promise.all(a),{rewardTokens:e,result:c,allSdt:r}=this._aggregateRewards(s?.flat(1),i.stakedao.sdt);return{rewardTokens:e,result:c,allSdt:r}}_aggregateRewards(o,i){const t=[],n=e=>{t.indexOf(e)===-1&&t.push(e)};let a=0n;const s={};return o.forEach(e=>{if(e.cvgAmount===0&&!e?.rewards?.length)return;s[e.stakingContract]?(s[e.stakingContract].cvgRaw+e.cvgRaw,s[e.stakingContract].cvgAmount+=e.cvgAmount,s[e.stakingContract].rewardsByToken[e.tokenId]=[]):s[e.stakingContract]={items:[],rawData:[],type:e.type,logo:e?.logo,stakingName:f(e.stakingName).name,tokenIds:[e.tokenId],rewardsByToken:{[e.tokenId]:[]},cvgRaw:e.cvgRaw,sdtRaw:0n,cvgSdtRatio:e.cvgSdtRatio,cvgAmount:e.cvgAmount,stakingContract:e.stakingContract};const c=s[e.stakingContract];c.cvgAmount>0&&c.rewardsByToken[e.tokenId].push("cvg"),e?.rewards?.forEach(r=>{r.tokenAddress===i&&(a+=r.amountRaw,s[e.stakingContract].sdtRaw+=r.amountRaw),n(r.tokenAddress);const u=c.items.find(l=>l.tokenAddress===r.tokenAddress);u?(u.amount+=r.amount,u.amountRaw=u.amountRaw+r.amountRaw):(c.items.push(r),c.rewardsByToken[e.tokenId].push(r.tokenAddress))}),c?.tokenIds?.indexOf(e.tokenId)===-1&&c.tokenIds.push(e.tokenId),c.rawData.push(e)}),{rewardTokens:t,result:s,allSdt:a}}_getSdtRewards=async o=>{const i=await d.getStaticData(),t=o?.at(1).find(a=>a.token===i.stakedao.sdt);let n=-1;return t&&t.amount>0n&&(n=await v.getCvgSvgSdtRatio(t.amount,!1)),{sdtRaw:t?.amount||0n,sdtAmount:y(t?.amount||0n,18),cvgSdtRatio:n}};_addErc20InfoToRewards=async o=>{const i=o?.at(0),t=o?.at(1).filter(a=>a.token!==A);let n=[];return i>0n&&n.push({token:"cvg",amount:y(i,18),amountRaw:i,stakingName:"sdtCVG",logo:h}),t&&(n=t.map(async a=>{const s=await I.getErc20INfo(a.token);return{...s,amount:y(a.amount,s?.decimals),amountRaw:a.amount}})),await Promise.all(n)};async getAllClaimableAmounts(o){return await new p(o?.stakingContract,S.abi,await this.bcService.getStaticProvider()).getAllClaimableAmounts(o?.tokenId)}processTotals(o,i){const t={cvgSdt:{other:0,cvg:0,usd:0},lp:{usd:0,cvg:0,other:0},sd:{usd:0,cvg:0,other:0},cvg:{usd:0,amount:0},usd:0,tokens:{}};return Object.values(o).map(n=>{t[n.type].cvg+=n.cvgAmount,t[n.type].usd+=n.cvgAmount*i.cvg,t.usd+=n.cvgAmount*i.cvg,t.cvg.amount+=n.cvgAmount,n.items.map(async a=>{const s=i[a.tokenAddress]||0;t[n.type].usd+=a.amount*s,t.usd+=a.amount*s,t.tokens[a.tokenAddress]||(t.tokens[a.tokenAddress]={amount:0,usd:0}),t.tokens[a.tokenAddress].amount+=a.amount,t.tokens[a.tokenAddress].usd+=a.amount*s,t[n.type].other+=a.amount*s})}),t}getPoolCvgSdtBalanceDebug=async()=>{const o=await d.getStaticData(),i=new p(o?.stakedao.sdt,w.abi,await this.bcService.getStaticProvider()),t=new p(o?.stakedao.cvgSDT,w.abi,await this.bcService.getStaticProvider()),n=await i.balanceOf(o?.stakedao.poolCvgSdt),a=await t.balanceOf(o?.stakedao.poolCvgSdt);return{balanceOfSdt:n,balanceOfCvgSdt:a}};async claimRewardsMultiContract(o,i,t,n,a){const s=await d.getStaticData();return await new p(s?.stakedao.sdtRewardDistributor,C.abi,a).claimMultipleStaking(o,t,i,n?.length)}async claimCvgSdtRewards(o,i,t,n,a){return await new p(i,S.abi,a).claimCvgSdtRewards(BigInt(o),n,t)}async claimRewards(o,i,t,n,a){let s=[];const e=Object.entries(o).map(([l,k])=>(s=[...s,...k],l)),c=[...new Set(s)].length,r=await d.getStaticData(),u=new p(r?.stakedao.sdtRewardDistributor,C.abi,a);if(c===1&&s[0]==="cvg")throw new Error("Cvg only not claimable at the moment ");return await u.claimMultipleStaking([{stakingContract:t,tokenIds:e}],n,i,c)}async getTotalClaimable(o,i){const{rewardTokens:t,result:n}=await this.getRewards(o);if(!Object.keys(n)?.length)return 0;const a=await D.getPrices(t),s={total:{claimable:0},sd:{claimable:0},lp:{claimable:0},cvgSdt:{claimable:0},contracts:{}},e=c=>(s.contracts[c]||(s.contracts[c]={claimable:0}),s.contracts[c]);return Object.values(n).forEach(c=>{const r=e(c.stakingContract);r.claimable+=c.cvgAmount*i,c.items.forEach(u=>{r.claimable+=u.amount*(a[u.tokenAddress]||0)}),s.total.claimable+=r.claimable,s[c.type].claimable+=r.claimable}),s}}const L=new B;export{L as s};
