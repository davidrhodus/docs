"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[364],{8946:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var n=a(7462),s=a(3366),i=(a(7294),a(3905)),r=["components"],o={id:"attesting",title:"Attesting"},l=void 0,c={unversionedId:"sdk/core-feature/attesting",id:"sdk/core-feature/attesting",isDocsHomePage:!1,title:"Attesting",description:"There are three actors in the KILT workflow: Claimers, Attesters and Verifiers.",source:"@site/docs/sdk/0-core-feature/4_attesting.md",sourceDirName:"sdk/0-core-feature",slug:"/sdk/core-feature/attesting",permalink:"/docs/sdk/core-feature/attesting",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/0-core-feature/4_attesting.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"attesting",title:"Attesting"},sidebar:"sdk",previous:{title:"Requesting Terms and Attestations",permalink:"/docs/sdk/core-feature/requesting-terms-and-attestations"},next:{title:"Verification",permalink:"/docs/sdk/core-feature/verification"}},d=[],u={toc:d};function h(t){var e=t.components,a=(0,s.Z)(t,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are three actors in the KILT workflow: Claimers, Attesters and Verifiers."),(0,i.kt)("p",null,"To create an attestation, the attester first receives a message with a ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestForAttestation")," object from the claimer."),(0,i.kt)("p",null,"The attester then decrypts the message and the KILT SDK automatically checks the validity of the encrypted content, ensuring that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the hash of the encrypted object matches the concatenation of the message, nonce (number that is used once) and date of creation fields of the encrypted object"),(0,i.kt)("li",{parentName:"ul"},"the address of the sender matches the signature of the encrypted message")),(0,i.kt)("p",null,"These ensure that the sender of the message is the owner of the encapsulated claim."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const decryptedMessage = Kilt.Message.decrypt(encryptedMessage, identity);\n")),(0,i.kt)("p",null,"There are several steps to creating the attestation. The attester:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"manually verifies the data inside the claim by checking that all the data fields matching the requirements of the attestation"),(0,i.kt)("li",{parentName:"ul"},"creates an attestation object from the extracted RequestForAttestation and the attester\u2019s address."),(0,i.kt)("li",{parentName:"ul"},"stores the attestation hash on the chain by preparing an unsigned transaction and then submitting it with the attester\u2019s signature.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const attestation = Kilt.Attestation.fromRequestAndPublicIdentity(\n  requestForAttestation,\n  publicIdentity\n);\n\ntransaction = await attestation.store();\n\nawait Kilt.BlockchainUtils.submitSignedTx(transaction, {\n  resolveOn: Kilt.BlockchainUtils.IS_IN_BLOCK,\n});\n")),(0,i.kt)("p",null,"Once this is done, the attester:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creates an ",(0,i.kt)("inlineCode",{parentName:"li"},"AttestedClaim")," object from the ",(0,i.kt)("inlineCode",{parentName:"li"},"RequestForAttestation")," and the attestation objects"),(0,i.kt)("li",{parentName:"ul"},"encrypts the ",(0,i.kt)("inlineCode",{parentName:"li"},"AttestedClaim")," object"),(0,i.kt)("li",{parentName:"ul"},"sends the encrypted ",(0,i.kt)("inlineCode",{parentName:"li"},"AttestedClaim")," object back to the claimer.")),(0,i.kt)("p",null,"The claimer then stores the attestation in their own wallet and can use it as they wish."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const attestedClaim = Kilt.AttestedClaim.fromRequestAndAttestation(\n  requestForAttestation,\n  attestation\n);\n")))}h.isMDXComponent=!0}}]);