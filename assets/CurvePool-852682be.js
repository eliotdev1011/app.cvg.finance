(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="15aec6a7-834d-4a3b-a031-190d27071656",t._sentryDebugIdIdentifier="sentry-dbid-15aec6a7-834d-4a3b-a031-190d27071656")}catch{}})();const e="hh-sol-artifact-1",i="ICrvPoolPlain",a="contracts/interfaces/ICrvPoolPlain.sol",u=[{inputs:[{internalType:"uint256[2]",name:"amounts",type:"uint256[2]"},{internalType:"uint256",name:"min_mint_amount",type:"uint256"}],name:"add_liquidity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[2]",name:"amounts",type:"uint256[2]"},{internalType:"uint256",name:"min_mint_amount",type:"uint256"},{internalType:"address",name:"receiver",type:"address"}],name:"add_liquidity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"arg0",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256[2]",name:"amounts",type:"uint256[2]"}],name:"calc_token_amount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"i",type:"uint256"}],name:"coins",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"int128",name:"i",type:"int128"},{internalType:"int128",name:"j",type:"int128"},{internalType:"uint256",name:"dx",type:"uint256"},{internalType:"uint256",name:"min_dy",type:"uint256"},{internalType:"address",name:"receiver",type:"address"}],name:"exchange",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"int128",name:"i",type:"int128"},{internalType:"int128",name:"j",type:"int128"},{internalType:"uint256",name:"dx",type:"uint256"}],name:"get_dy",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"get_virtual_price",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],y={_format:e,contractName:i,sourceName:a,abi:u};export{y as c};