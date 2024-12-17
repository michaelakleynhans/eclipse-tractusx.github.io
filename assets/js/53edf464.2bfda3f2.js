"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[11327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,g=d["".concat(o,".").concat(k)]||d[k]||c[k]||a;return n?l.createElement(g,i(i({ref:t},u),{},{components:n})):l.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={id:"getSkill",title:"Returns a Skill",slug:"skill-get"},i=void 0,s={unversionedId:"kits/knowledge-agents/development-view/api/agent/skill/getSkill",id:"version-24.08/kits/knowledge-agents/development-view/api/agent/skill/getSkill",title:"Returns a Skill",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.08/kits/knowledge-agents/development-view/api/agent/skill/get.mdx",sourceDirName:"kits/knowledge-agents/development-view/api/agent/skill",slug:"/kits/knowledge-agents/development-view/api/agent/skill/skill-get",permalink:"/docs-kits/24.08/kits/knowledge-agents/development-view/api/agent/skill/skill-get",draft:!1,tags:[],version:"24.08",frontMatter:{id:"getSkill",title:"Returns a Skill",slug:"skill-get"},sidebar:"kits",previous:{title:"Register a Skill",permalink:"/docs-kits/24.08/kits/knowledge-agents/development-view/api/agent/skill/agent-skill-post"},next:{title:"Upload a Graph (Asset)",permalink:"/docs-kits/24.08/kits/knowledge-agents/development-view/api/graph/graph-post"}},o={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Code Snippets",id:"code-snippets",level:2},{value:"Responses",id:"responses",level:2},{value:"200",id:"200",level:3},{value:"400",id:"400",level:3},{value:"500",id:"500",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /agent/skill\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Returns a Skill: ")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"in"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asset"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"The Asset Id of the Skill")))),(0,r.kt)("h2",{id:"code-snippets"},"Code Snippets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},"curl --request GET \\\n  --url 'https://knowledge.dev.demo.catena-x.net/consumer-edc-data/BPNL00000003CQI9/api/agent/skill?asset=SkillAsset%3Fconsumer%3DDataspace'\n")),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("h3",{id:"200"},"200"),(0,r.kt)("p",null,"The Skill could be found"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/sparql-query")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example ",(0,r.kt)("inlineCode",{parentName:"strong"},"response")," for ",(0,r.kt)("inlineCode",{parentName:"strong"},"application/sparql-query"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sparql"},'SELECT DISTINCT ?luogo ?indirizzo ?comune WHERE {\n  ?x a cis:CulturalInstituteOrSite ;\n  cis:institutionalCISName ?luogo ;\n  cis:hasSite ?site .\n  ?site cis:siteAddress ?address .\n  ?address clvapit:fullAddress ?indirizzo ;\n          clvapit:hasCity [rdfs:label ?comune] .\n  FILTER regex(str(?comune), "Vinci", "i")\n}  ORDER BY ?luogo LIMIT 100\n')),(0,r.kt)("h3",{id:"400"},"400"),(0,r.kt)("p",null,"the Skill Could not be found."),(0,r.kt)("h3",{id:"500"},"500"),(0,r.kt)("p",null,"Fatal error"),(0,r.kt)("sub",null,(0,r.kt)("sup",null,"(C) 2021,2024 Contributors to the Eclipse Foundation. SPDX-License-Identifier: CC-BY-4.0")))}d.isMDXComponent=!0}}]);