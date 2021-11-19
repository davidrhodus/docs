"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[191],{2197:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),s=["components"],o={id:"overview",title:"\ud83d\udc53 Overview"},l=void 0,c={unversionedId:"sdk/workshop/overview",id:"sdk/workshop/overview",isDocsHomePage:!1,title:"\ud83d\udc53 Overview",description:"In this tutorial, we'll run through the full story of a claim.",source:"@site/docs/sdk/1-workshop/02-overview.md",sourceDirName:"sdk/1-workshop",slug:"/sdk/workshop/overview",permalink:"/docs/sdk/workshop/overview",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/02-overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"overview",title:"\ud83d\udc53 Overview"},sidebar:"sdk",previous:{title:"\ud83c\udf92 Setup",permalink:"/docs/sdk/workshop/setup"},next:{title:"\ud83d\udc64 Account",permalink:"/docs/sdk/workshop/account"}},d=[],u={toc:d};function p(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, we'll run through the full story of a claim."),(0,i.kt)("p",null,"To do so, three actors will be involved: a ",(0,i.kt)("span",{class:"label-role claimer"},"claimer"),", an ",(0,i.kt)("span",{class:"label-role attester"},"attester")," and a ",(0,i.kt)("span",{class:"label-role verifier"},"verifier"),". You'll be playing all three roles (unless you're in a KILT workshop and different participants are playing different roles)."),(0,i.kt)("p",null,"These three actors will be exchanging various objects; the most important one is the ",(0,i.kt)("inlineCode",{parentName:"p"},"credential"),".\nThis is how an ",(0,i.kt)("inlineCode",{parentName:"p"},"credential")," is created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD\nCTYPE --\x3e claim[claim]\nclaimContents --\x3e claim\nclaimerAddress --\x3e claim\nclaimerIdentity[claimerIdentity] --\x3e requestForAttestation\nclaim --\x3e requestForAttestation\nrequestForAttestation --\x3e attestation[attestation]\nattesterPublicIdentity --\x3e attestation\nattestation --\x3e credential[credential]\nrequestForAttestatIon --\x3e credential[credential]\n")),(0,i.kt)("p",null,"That's a mouthful, but don't worry - we'll dig deeper in the elements of this diagram in the next steps! For now, just keep in mind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A credential has a certain type (CTYPE);"),(0,i.kt)("li",{parentName:"ul"},"Obtaining a credential is a multiple-step process that involves a ",(0,i.kt)("span",{class:"label-role claimer"},"claimer")," - such as a citizen who makes a claim about themselves - and an ",(0,i.kt)("span",{class:"label-role attester"},"attester")," - such as a government agency that certifies this claim. A ",(0,i.kt)("span",{class:"label-role verifier"},"verifier")," - such as a government officer - will later on check the validity of the credential.")),(0,i.kt)("p",null,"OK, let's start by generating KILT identities, and then we'll go on and create a claim."))}p.isMDXComponent=!0}}]);