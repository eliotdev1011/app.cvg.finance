import{B as S,ar as E,as as O,aa as g,b as x,aJ as D,W as Y,ab as A,n as P,s as F,a5 as N}from"./index-614b6d1c.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[t]="e78d5fab-f084-4ed9-8fc8-d7428ce77fa9",d._sentryDebugIdIdentifier="sentry-dbid-e78d5fab-f084-4ed9-8fc8-d7428ce77fa9")}catch{}})();const M=[{inputs:[{internalType:"uint256[]",name:"_tdeIds",type:"uint256[]"},{internalType:"address",name:"_wallet",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{components:[{internalType:"uint256",name:"tdeId",type:"uint256"},{internalType:"uint256",name:"totalYsCheckedIn",type:"uint256"},{components:[{internalType:"contract IERC20",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],internalType:"struct ICommonStruct.TokenAmount[]",name:"totalRewardForDuration",type:"tuple[]"},{components:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"ysCheckedIn",type:"uint256"},{components:[{internalType:"contract IERC20",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],internalType:"struct ICommonStruct.TokenAmount[]",name:"claimableTokens",type:"tuple[]"}],internalType:"struct ClaimYsPerToken[]",name:"claimYsTokenInfos",type:"tuple[]"}],internalType:"struct ClaimYsInfos[]",name:"infos",type:"tuple[]"}],name:"ClaimYsInfosError",type:"error"}],V="0x608060405234801561000f575f80fd5b506040516108dc3803806108dc83398101604081905261002e916105e8565b610038828261003f565b5050610892565b604051633f28890160e11b81526001600160a01b03821660048201525f90730edb88aa3aa665782121fa2509b382f414a0c0ce90637e511202906024015f60405180830381865afa158015610096573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526100bd9190810190610636565b83518151919250905f826001600160401b038111156100de576100de6104d7565b60405190808252806020026020018201604052801561013857816020015b61012560405180608001604052805f81526020015f815260200160608152602001606081525090565b8152602001906001900390816100fc5790505b5090505f5b838110156104b2575f8782815181106101585761015861066f565b60200260200101519050808383815181106101755761017561066f565b60209081029190910101515260405163e64e7e3960e01b81526004810182905273660a45986e9b8f60c41aadebd2941724200fbcf89063e64e7e3990602401602060405180830381865afa1580156101cf573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101f39190610683565b8383815181106102055761020561066f565b60209081029190910181015101526040516334db56d360e21b81526004810182905273660a45986e9b8f60c41aadebd2941724200fbcf89063d36d5b4c906024015f60405180830381865afa158015610260573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610287919081019061069a565b8383815181106102995761029961066f565b6020026020010151604001819052505f846001600160401b038111156102c1576102c16104d7565b60405190808252806020026020018201604052801561031457816020015b61030160405180606001604052805f81526020015f8152602001606081525090565b8152602001906001900390816102df5790505b5090505f5b85811015610485575f8882815181106103345761033461066f565b60200260200101519050604051806060016040528082815260200173660a45986e9b8f60c41aadebd2941724200fbcf86001600160a01b031663c3e17c5c87856040518363ffffffff1660e01b815260040161039a929190918252602082015260400190565b602060405180830381865afa1580156103b5573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103d99190610683565b8152604051630a723d0960e31b8152600481018790526024810184905260209091019073660a45986e9b8f60c41aadebd2941724200fbcf890635391e848906044015f60405180830381865afa158015610435573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261045c919081019061069a565b8152508383815181106104715761047161066f565b602090810291909101015250600101610319565b50808484815181106104995761049961066f565b602090810291909101015160600152505060010161013d565b5080604051639452789d60e01b81526004016104ce919061079f565b60405180910390fd5b634e487b7160e01b5f52604160045260245ffd5b604080519081016001600160401b038111828210171561050d5761050d6104d7565b60405290565b604051601f8201601f191681016001600160401b038111828210171561053b5761053b6104d7565b604052919050565b5f6001600160401b0382111561055b5761055b6104d7565b5060051b60200190565b5f82601f830112610574575f80fd5b8151602061058961058483610543565b610513565b8083825260208201915060208460051b8701019350868411156105aa575f80fd5b602086015b848110156105c657805183529183019183016105af565b509695505050505050565b6001600160a01b03811681146105e5575f80fd5b50565b5f80604083850312156105f9575f80fd5b82516001600160401b0381111561060e575f80fd5b61061a85828601610565565b925050602083015161062b816105d1565b809150509250929050565b5f60208284031215610646575f80fd5b81516001600160401b0381111561065b575f80fd5b61066784828501610565565b949350505050565b634e487b7160e01b5f52603260045260245ffd5b5f60208284031215610693575f80fd5b5051919050565b5f60208083850312156106ab575f80fd5b82516001600160401b038111156106c0575f80fd5b8301601f810185136106d0575f80fd5b80516106de61058482610543565b81815260069190911b820183019083810190878311156106fc575f80fd5b928401925b828410156107465760408489031215610718575f80fd5b6107206104eb565b845161072b816105d1565b81528486015186820152825260409093019290840190610701565b979650505050505050565b5f815180845260208085019450602084015f5b8381101561079457815180516001600160a01b031688528301518388015260409096019590820190600101610764565b509495945050505050565b5f6020808301818452808551808352604092508286019150828160051b8701018488015f5b8381101561088457603f19898403018552815160808151855288820151898601528782015181898701526107fa82870182610751565b606093840151878203888601528051808352908c01949193509091508a830190600581901b84018c015f5b8281101561086c57858203601f190184528651805183528e8101518f8401528d01518d830186905261085986840182610751565b978f0197948f0194925050600101610825565b50998c019997505050938901935050506001016107c4565b509098975050505050505050565b603e8061089e5f395ff3fe60806040525f80fdfea2646970667358221220393c3f5c53a9dabbd68d3fc25b844718e7c66b3611435b04f7f14b917157d98964736f6c63430008180033",j=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_amount",type:"uint256"}],name:"CheckIn",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint8",name:"version",type:"uint8"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"contract IERC20",name:"_token",type:"address"},{indexed:!1,internalType:"uint256",name:"_amount",type:"uint256"}],name:"Recovered",type:"event"},{anonymous:!1,inputs:[{components:[{internalType:"contract IERC20",name:"token",type:"address"},{internalType:"address",name:"distributor",type:"address"}],indexed:!1,internalType:"struct IStkCvg.AddTokenRewardInput[]",name:"_rewardTokens",type:"tuple[]"}],name:"RewardAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"contract IERC20",name:"_reward",type:"address"},{indexed:!0,internalType:"address",name:"_distributor",type:"address"},{indexed:!1,internalType:"bool",name:"_state",type:"bool"}],name:"RewardDistributorApproved",type:"event"},{anonymous:!1,inputs:[{components:[{internalType:"contract IERC20",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],indexed:!1,internalType:"struct ICommonStruct.TokenAmount[]",name:"rewardsDistributed",type:"tuple[]"}],name:"RewardNotified",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_user",type:"address"},{indexed:!0,internalType:"contract IERC20",name:"_rewardToken",type:"address"},{indexed:!1,internalType:"uint256",name:"_reward",type:"uint256"}],name:"RewardPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_user",type:"address"},{indexed:!1,internalType:"uint256",name:"_amount",type:"uint256"}],name:"Withdrawn",type:"event"},{inputs:[],name:"REWARDS_DURATION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"acceptOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{components:[{internalType:"contract IERC20",name:"token",type:"address"},{internalType:"address",name:"distributor",type:"address"}],internalType:"struct IStkCvg.AddTokenRewardInput[]",name:"_addRewards",type:"tuple[]"}],name:"addReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IERC20",name:"_rewardToken",type:"address"},{internalType:"address",name:"_distributor",type:"address"},{internalType:"bool",name:"_approved",type:"bool"}],name:"approveRewardDistributor",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"balanceCheckedIn",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"checkIn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],name:"checkInMultiple",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tdeId",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"claimableRewards",outputs:[{components:[{internalType:"contract IERC20",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],internalType:"struct ICommonStruct.TokenAmount[]",name:"userRewards",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"cvgControlTower",outputs:[{internalType:"contract ICvgControlTowerV2",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"cvgRewards",outputs:[{internalType:"contract ICvgRewards",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getActualTde",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tdeId",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{components:[{internalType:"uint256",name:"tdeId",type:"uint256"},{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"}],internalType:"struct IStkCvg.GetRewardInput[]",name:"_getRewardsInput",type:"tuple[]"}],name:"getRewardMultiple",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tdeId",type:"uint256"}],name:"getRewardsForDuration",outputs:[{components:[{internalType:"contract IERC20",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],internalType:"struct ICommonStruct.TokenAmount[]",name:"totalRewards",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tdeId",type:"uint256"},{internalType:"contract IERC20",name:"_rewardToken",type:"address"}],name:"lastTimeRewardApplicable",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lockingManager",outputs:[{internalType:"contract ILockingPositionManager",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"lockingService",outputs:[{internalType:"contract ILockingPositionService",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"contract IERC20",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],internalType:"struct ICommonStruct.TokenAmount[]",name:"_rewardTokens",type:"tuple[]"}],name:"notifyRewardAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pendingOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IERC20",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenAmount",type:"uint256"}],name:"recoverToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"contract IERC20",name:"",type:"address"}],name:"rewardData",outputs:[{internalType:"uint128",name:"lastUpdateTime",type:"uint128"},{internalType:"uint128",name:"periodFinish",type:"uint128"},{internalType:"uint256",name:"rewardRate",type:"uint256"},{internalType:"uint256",name:"rewardPerTokenStored",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IERC20",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"rewardDistributors",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tdeId",type:"uint256"},{internalType:"contract IERC20",name:"_rewardToken",type:"address"}],name:"rewardPerToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"rewardTokens",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"contract IERC20",name:"",type:"address"}],name:"rewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"totalSupplyCheckedIn",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"contract IERC20",name:"",type:"address"}],name:"userRewardPerTokenPaid",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}];class U{bcService=new S;async getYsCvgData(t){const p=await(await this._getYsStreamerContract(await this.bcService.getStaticProvider())).getActualTde(),o=[[p-1n,p],t],l=new E(M),v=await new O(M,V).getDeployTransaction(...o),_=await this.bcService.excuteChainView(await this.bcService.getStaticProvider(),v,l);let e={},f={};const y=[],w=[];let I=0;_.forEach(async a=>{const m=a.totalRewardForDuration,i=a.claimYsTokenInfos;y.push({tdeId:a.tdeId,tokenIds:[]}),i.length!==0&&i.length!==void 0&&i.forEach(r=>{const n=Number(r.tokenId);if(Number(g(r.ysCheckedIn))!==0){const k=r.claimableTokens;e[n]=e[n]===void 0?{}:e[n];let R=!1;k.length!=null&&k.forEach(c=>{const s=c.token,b=c.amount;b!==0n&&(R=!0),e[n][s]=e[n][s]===void 0?{amountRaw:b}:{amountRaw:e[n][s].amountRaw+b},w.includes(s)||w.push(s)}),R&&y[I].tokenIds.push(n),R&&m.length!=null&&m.forEach(c=>{const s=c.token,h=c.amount*r.ysCheckedIn*119n/(a.totalYsCheckedIn*100n);e[n][s]={...e[n][s],amountReceivedOn1Month:e[n][s]?.amountReceivedOn1Month===void 0?h:e[n][s]?.amountReceivedOn1Month+h}})}}),y[I].tokenIds.length===0?y.pop():I++});const C=await x.getPrices(w);return Object.entries(e).forEach(([a,m])=>{Object.entries(m).forEach(([i,r])=>{const n=Number(D(r.amountRaw,18))*C[i];e[a][i]={...r,...Y[i],amountFormatted:A(r.amountRaw,18,!1),amountDollar:r.amountRaw===0n?0:P(n,0,0),amountDollarReceivedOn1Month:Number(g(r?.amountReceivedOn1Month||0n))*C[i]},f[a]=f[a]===void 0?e[a][i].amountDollarReceivedOn1Month:f[a]+e[a][i].amountDollarReceivedOn1Month})}),{totalsClaimablePerTokens:e,projectionDollarPerToken:f,getRewardsCallInput:y}}async doCheckIn(t,u){return await(await this._getYsStreamerContract(u)).checkIn(t)}async doClaimAll(t,u){return await(await this._getYsStreamerContract(u)).getRewardMultiple(t)}async doClaimOnOneToken(t,u,p){const o=[];u.forEach(T=>{T.tokenIds.includes(Number(t))&&o.push({tdeId:T.tdeId,tokenIds:[t]})});const l=await this._getYsStreamerContract(p);return o.length<=1?await l.getReward(o[0].tdeId,t):await l.getRewardMultiple(o)}async _getYsStreamerContract(t){const{ysStreamer:u}=await F.getStaticData();return new N(u,j,t)}}const z=new U;export{z as s};