"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[118],{6185:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],r={id:"01-parity-signer",title:"KILT & Parity Signer"},p=void 0,c={unversionedId:"apps/01-parity-signer",id:"apps/01-parity-signer",isDocsHomePage:!1,title:"KILT & Parity Signer",description:"For the more advanced users, it is possible to configure Parity Signer to work as a cold or hot wallet with KILT and PolkadotJS Apps.",source:"@site/docs/apps/01-parity-signer.md",sourceDirName:"apps",slug:"/apps/01-parity-signer",permalink:"/docs/apps/01-parity-signer",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/apps/01-parity-signer.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-parity-signer",title:"KILT & Parity Signer"},sidebar:"apps",previous:{title:"Introduction",permalink:"/docs/apps/introduction"}},d=[{value:"Configure Parity Signer to support KILT",id:"configure-parity-signer-to-support-kilt",children:[],level:2},{value:"Create a KILT account",id:"create-a-kilt-account",children:[],level:2},{value:"Add the account to PolkadotJS Apps",id:"add-the-account-to-polkadotjs-apps",children:[],level:2},{value:"Sign transactions in PolkadotJS Apps",id:"sign-transactions-in-polkadotjs-apps",children:[],level:2}],l={toc:d};function u(t){var e=t.components,r=(0,i.Z)(t,s);return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For the more advanced users, it is possible to configure ",(0,o.kt)("a",{parentName:"p",href:"https://www.parity.io/technologies/signer/"},"Parity Signer")," to work as a cold or hot wallet with KILT and PolkadotJS Apps.\nPlease follow the installation instructions for iOS and Android from the official website."),(0,o.kt)("h2",{id:"configure-parity-signer-to-support-kilt"},"Configure Parity Signer to support KILT"),(0,o.kt)("p",null,"To add KILT Spiritnet to Parity Signer, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fspiritnet.kilt.io%2F#"},"PolkadotJS Apps page for KILT Spiritnet"),", then go to ",(0,o.kt)("strong",{parentName:"p"},"KILT Spiritnet > Settings > Metadata")," and scan the QRCode.\nThis will result in a new network, KILT Spiritnet, being added to the list of networks for which Parity Signer can create accounts and sign transactions."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9652).Z})),(0,o.kt)("h2",{id:"create-a-kilt-account"},"Create a KILT account"),(0,o.kt)("p",null,"Once the KILT blockchain has been added, you can proceed to create your KILT account.\nTo do this, when generating a new account, select the ",(0,o.kt)("strong",{parentName:"p"},"KILT Spiritnet")," network.\nTo verify that the right account has been generate, please check that it starts with the digit ",(0,o.kt)("inlineCode",{parentName:"p"},"4"),", e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"4tFvFquHAZXFs3RiDUxAsHYjAvprLCBDMQZQqax8HqEK3qX2"),"."),(0,o.kt)("h2",{id:"add-the-account-to-polkadotjs-apps"},"Add the account to PolkadotJS Apps"),(0,o.kt)("p",null,"After the account has been created, return to PolkadotJS Apps, and in ",(0,o.kt)("strong",{parentName:"p"},"Accounts > Accounts > My accounts")," select ",(0,o.kt)("strong",{parentName:"p"},"Add via Qr"),".\nIn there, scan the QR that is shown by Parity Signer when clicking on the new KILT account.\nOnce added, the account type will be ",(0,o.kt)("strong",{parentName:"p"},"external"),", meaning that PolkadotJS Apps does not hold the private keys of the account."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8457).Z})),(0,o.kt)("h2",{id:"sign-transactions-in-polkadotjs-apps"},"Sign transactions in PolkadotJS Apps"),(0,o.kt)("p",null,"With the KILT account set up as external, it is now possible to sign transactions using Parity Signer.\nTo do this, prepare any transaction, e.g., a token transfer, and PolkadotJS apps will ask you to sign it with the external app managing the account."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(946).Z})),(0,o.kt)("p",null,"At this point, scan the QR-encoded transaction with the Parity Signer, and then show the QR-encoded ",(0,o.kt)("strong",{parentName:"p"},"signed")," transaction back to PolkadotJS Apps.\nThis will submit the transaction tot he KILT blockchain."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9040).Z})))}u.isMDXComponent=!0},8457:function(t,e,n){e.Z=n.p+"assets/images/polkadotjs-new-qr-811c6623fabad471dbd93b770a9e83f1.png"},9040:function(t,e,n){e.Z=n.p+"assets/images/polkadotjs-signing-b2ab1f1249da6878c53443bff0fb7c53.png"},946:function(t,e,n){e.Z=n.p+"assets/images/polkadotjs-tx-2765626f9a73e8d5129d25c5f33b0aa4.png"},9652:function(t,e,n){e.Z=n.p+"assets/images/polkadotjs-988699335e25b3b6aa0418044a521b46.png"}}]);