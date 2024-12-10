import{B as r,aC as o,s as p,a5 as s,b1 as u}from"./index-614b6d1c.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="3f6e1aee-a528-4eed-8b8d-1b905232dfdf",a._sentryDebugIdIdentifier="sentry-dbid-3f6e1aee-a528-4eed-8b8d-1b905232dfdf")}catch{}})();const d="hh-sol-artifact-1",y="SdtFeeCollector",c="contracts/Rewards/StakeDAO/SdtFeeCollector.sol",l=[{inputs:[{internalType:"contract ICvgControlTower",name:"_cvgControlTower",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"rootFees",type:"uint256"}],name:"SetUpRootFees",type:"event"},{anonymous:!1,inputs:[{components:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint96",name:"feePercentage",type:"uint96"}],indexed:!1,internalType:"struct SdtFeeCollector.Fees[]",name:"feesRepartition",type:"tuple[]"}],name:"SetUpRootRepartition",type:"event"},{inputs:[],name:"acceptOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"feesRepartition",outputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint96",name:"feePercentage",type:"uint96"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pendingOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rootFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"sdt",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint96",name:"feePercentage",type:"uint96"}],internalType:"struct SdtFeeCollector.Fees[]",name:"_newFeesRepartition",type:"tuple[]"}],name:"setUpFeesRepartition",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newRootFees",type:"uint256"}],name:"setUpRootFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawSdt",outputs:[],stateMutability:"nonpayable",type:"function"}],m={_format:d,contractName:y,sourceName:c,abi:l};class t{bcService=new r;static rootFees=17500n;async getStaticData(e){const i=await this._getCvgRewardsContract(e,await this.bcService.getStaticProvider()).lastUpdatedTimestamp();return{lastUpdatedTimestamp:o(i)*1e3}}async getRootFees(){if(t.rootFees)return t.rootFees;const e=await p.getStaticData(),n=new s(e.stakedao.sdtFeeCollector,m.abi,await this.bcService.getStaticProvider());return t.rootFees=await n.rootFees(),t.rootFees}_getCvgRewardsContract(e,n){return new s(e,u.abi,n)}}const b=new t;export{b as s};