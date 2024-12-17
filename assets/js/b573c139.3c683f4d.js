"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[59036],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},v=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),v=a,m=c["".concat(o,".").concat(v)]||c[v]||d[v]||r;return t?i.createElement(m,l(l({ref:n},u),{},{components:t})):i.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=v;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}v.displayName="MDXCreateElement"},26071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={id:"skill",title:"Skill",description:"Behaviour Twin KIT"},l=void 0,s={unversionedId:"kits/behaviour-twin-kit/development-view/skill",id:"version-24.08/kits/behaviour-twin-kit/development-view/skill",title:"Skill",description:"Behaviour Twin KIT",source:"@site/docs-kits_versioned_docs/version-24.08/kits/behaviour-twin-kit/development-view/skill.md",sourceDirName:"kits/behaviour-twin-kit/development-view",slug:"/kits/behaviour-twin-kit/development-view/skill",permalink:"/docs-kits/24.08/kits/behaviour-twin-kit/development-view/skill",draft:!1,tags:[],version:"24.08",frontMatter:{id:"skill",title:"Skill",description:"Behaviour Twin KIT"},sidebar:"kits",previous:{title:"Service Bindings",permalink:"/docs-kits/24.08/kits/behaviour-twin-kit/development-view/service-bindings"},next:{title:"Guidance And Resources",permalink:"/docs-kits/24.08/kits/behaviour-twin-kit/development-view/guidance-and-resources"}},o={},p=[{value:"OVERVIEW",id:"overview",level:2},{value:"SKILL REGISTRATION",id:"skill-registration",level:2},{value:"SKILL INVOCATION",id:"skill-invocation",level:2}],u={toc:p};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{display:"block"}},(0,a.kt)("div",{style:{display:"inline-block",verticalAlign:"top"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Behaviour Twin KIT banner",src:t(3266).Z,width:"51",height:"42"}))),(0,a.kt)("div",{style:{display:"inline-block",fontSize:17,color:"rgb(255,166,1)",marginLeft:7,verticalAlign:"top",paddingTop:6}},"Behaviour Twin KIT")),(0,a.kt)("p",null,"Applies to role: ",(0,a.kt)("em",{parentName:"p"},"skill provider")," and ",(0,a.kt)("em",{parentName:"p"},"consumer")),(0,a.kt)("h2",{id:"overview"},"OVERVIEW"),(0,a.kt)("p",null,"Skills, even for the same logic, can be defined in a variety of ways. Depending on the requirements of a use case, some approaches may be beneficial."),(0,a.kt)("p",null,"For the ",(0,a.kt)("a",{parentName:"p",href:"../use-cases/overview"},"template use cases"),", there are different approaches shown:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("strong",{parentName:"p"},"more straight forward approach")," is shown in the ",(0,a.kt)("a",{parentName:"p",href:"../use-cases/rul/development-view/skill"},"Remaining useful Life use case"),". There, ",(0,a.kt)("strong",{parentName:"p"},"the skill knows the calculation function's type and its parameters"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("strong",{parentName:"p"},"more flexible approach")," is shown in the ",(0,a.kt)("a",{parentName:"p",href:"../use-cases/hi/development-view/skill"},"Health Indicator use case"),". There, ",(0,a.kt)("strong",{parentName:"p"},"the skill resolves the function's input parameters and matches it with data assets"),"."))),(0,a.kt)("h2",{id:"skill-registration"},"SKILL REGISTRATION"),(0,a.kt)("p",null,"It a skill should be provided, it has to be registered over the ",(0,a.kt)("em",{parentName:"p"},"Agent Plane API"),". The registration is done by posting a parametrized SPARQL query as a string, and set the skill name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location '{{consumerAgentPlane}}/api/agent/skill?asset=SkillAsset?consumer=RemainingUsefulLife&distributionMode=CONSUMER&isFederated=false' \\\n--header 'Content-Type: application/sparql-query' \\\n--data-raw 'SELECT ?vehicle ?vin ?aggregate ?assembly ?supplier ?distanceKm ?timeHours WHERE {\n\n  VALUES (?vin ?aggregate ?ls_type) {\n      (\"@vin\"^^xsd:string \"Differential Gear\"^^xsd:string \"GearOil\"^^xsd:string)\n  }\n\n  bpnl:BPNL000000000OEM cx-common:hasConnector ?oemEDC .\n  ?oemEDC cx-common:offers [ rdfs:isDefinedBy <https://w3id.org/catenax/ontology/reliability> ; cx-common:id ?reliabilityAssetId ] .\n\n  SERVICE ?oemEDC {\n      GRAPH ?reliabilityAssetId {\n\n        ...\n'\n")),(0,a.kt)("h2",{id:"skill-invocation"},"SKILL INVOCATION"),(0,a.kt)("p",null,"A registered skill is available over the ",(0,a.kt)("em",{parentName:"p"},"Agent Plane API")," by the skill asset name (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"RemainingUsefulLife"),") and can be called also for a list of input variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'curl --location \'{{consumerAgentPlane}}/api/agent?asset=SkillAsset?consumer=RemainingUsefulLife\' \\\n--header \'Content-Type: application/sparql-results+json\' \\\n--data \'{\n    "head": { "vars": [ "vin" ] },\n    "results": { "bindings": [\n            { "vin": { "type": "literal", "value": "FNLQNRVCOFLHAQ" } },\n            { "vin": { "type": "literal", "value": "FGPTXINYZAVJYK" } }\n        ]\n    }\n}\'\n')),(0,a.kt)("p",null,"The results for the given VINs of the above example are provided as bindings for the requested variables in the skill itself and look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "head": {\n    "vars": [\n      "vehicle",\n      "vin",\n      "aggregate",\n      "assembly",\n      "supplier",\n      "distanceKm",\n      "timeHours"\n    ]\n  },\n  "results": {\n    "bindings": [\n      {\n        "vehicle": {\n          "type": "uri",\n          "value": "urn:uuid:8d6e2e3f-6798-4e1d-8eae-eb4318a7d487"\n        },\n        "vin": {\n          "type": "literal",\n          "value": "RGZCDKEJHDSNCB"\n        },\n        "aggregate": {\n          "type": "literal",\n          "value": "Differential Gear"\n        },\n        "assembly": {\n          "type": "uri",\n          "value": "urn:uuid:b6309b8a-20c0-4e7d-b782-a7c303bb7da4"\n        },\n        "supplier": {\n          "type": "uri",\n          "value": "bpn:legal:BPNL00000003B2OM"\n        },\n        "distanceKm": {\n          "type": "literal",\n          "datatype": "http://www.w3.org/2001/XMLSchema#int",\n          "value": "159633"\n        },\n        "timeHours": {\n          "type": "literal",\n          "datatype": "http://www.w3.org/2001/XMLSchema#float",\n          "value": "3127.4"\n        }\n      },\n      {\n        "vehicle": {\n          "type": "uri",\n          "value": "urn:uuid:79d19614-b699-4716-b232-ef250e1c1772"\n        },\n        "vin": {\n          "type": "literal",\n          "value": "FNLQNRVCOFLHAQ"\n        },\n        "aggregate": {\n          "type": "literal",\n          "value": "Differential Gear"\n        },\n        "assembly": {\n          "type": "uri",\n          "value": "urn:uuid:4773625a-5e56-4879-abed-475be29bd664"\n        },\n        "supplier": {\n          "type": "uri",\n          "value": "bpn:legal:BPNL00000003B2OM"\n        },\n        "distanceKm": {\n          "type": "literal",\n          "datatype": "http://www.w3.org/2001/XMLSchema#int",\n          "value": "180627"\n        },\n        "timeHours": {\n          "type": "literal",\n          "datatype": "http://www.w3.org/2001/XMLSchema#float",\n          "value": "2058.1"\n        }\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"If all the given VINs are not found on OEM side, a empty binding is returned:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "head": {\n        "vars": [\n            "vehicle",\n            "vin",\n            "aggregate",\n            "assembly",\n            "supplier",\n            "distanceKm",\n            "timeHours"\n        ]\n    },\n    "results": {\n        "bindings": []\n    }\n}\n')))}c.isMDXComponent=!0},3266:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/behaviour-twin-kit-icon-mini-60cb99261b60d4cf2c9a200a41301ee2.svg"}}]);