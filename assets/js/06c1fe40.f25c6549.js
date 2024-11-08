"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[10744],{3905:(e,t,i)=>{i.d(t,{Zo:()=>g,kt:()=>C});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),I=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},g=function(e){var t=I(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=I(i),p=a,C=d["".concat(l,".").concat(p)]||d[p]||c[p]||o;return i?n.createElement(C,r(r({ref:t},g),{},{components:i})):n.createElement(C,r({ref:t},g))}));function C(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var I=2;I<o;I++)r[I]=i[I];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},79310:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>I});var n=i(87462),a=(i(67294),i(3905));const o={id:"versioning",title:"Versioning",description:"Behaviour Twin KIT"},r=void 0,s={unversionedId:"kits/behaviour-twin-kit/adoption-view/versioning",id:"kits/behaviour-twin-kit/adoption-view/versioning",title:"Versioning",description:"Behaviour Twin KIT",source:"@site/docs-kits/kits/behaviour-twin-kit/adoption-view/versioning.md",sourceDirName:"kits/behaviour-twin-kit/adoption-view",slug:"/kits/behaviour-twin-kit/adoption-view/versioning",permalink:"/docs-kits/next/kits/behaviour-twin-kit/adoption-view/versioning",draft:!1,tags:[],version:"current",frontMatter:{id:"versioning",title:"Versioning",description:"Behaviour Twin KIT"},sidebar:"kits",previous:{title:"Knowledge Agent",permalink:"/docs-kits/next/kits/behaviour-twin-kit/adoption-view/knowledge-agent"},next:{title:"To Be Considered",permalink:"/docs-kits/next/kits/behaviour-twin-kit/adoption-view/to-be-considered"}},l={},I=[{value:"CATENA-X RELEASES",id:"catena-x-releases",level:2},{value:"VERSIONING ASSETS",id:"versioning-assets",level:2},{value:"ONTOLOGY CHANGES",id:"ontology-changes",level:2},{value:"DATA AND SERVICE VERSIONS",id:"data-and-service-versions",level:2}],g={toc:I};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{display:"block"}},(0,a.kt)("div",{style:{display:"inline-block",verticalAlign:"top"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Behaviour Twin KIT banner",src:i(3266).Z,width:"51",height:"42"}))),(0,a.kt)("div",{style:{display:"inline-block",fontSize:17,color:"rgb(255,166,1)",marginLeft:7,verticalAlign:"top",paddingTop:6}},"Behaviour Twin KIT")),(0,a.kt)("h2",{id:"catena-x-releases"},"CATENA-X RELEASES"),(0,a.kt)("p",null,"For information about the Catena-X release management, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://catena-x.net/"},"Catena-X website ",(0,a.kt)("img",{alt:"(external link)",src:i(87827).Z,width:"11",height:"11"})),". Implications for Behaviour Twin use cases are mentioned in the section ",(0,a.kt)("a",{parentName:"p",href:"./to-be-considered#versioning-and-breaking-changes"},"To Be Considered"),"."),(0,a.kt)("h2",{id:"versioning-assets"},"VERSIONING ASSETS"),(0,a.kt)("p",null,"All EDC assets must be decorated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"cx-common:version")," within the ",(0,a.kt)("inlineCode",{parentName:"p"},"properties")," list of the asset definitions. This applies to graph assets (data and service binding assets) as well as to skill assets."),(0,a.kt)("h2",{id:"ontology-changes"},"ONTOLOGY CHANGES"),(0,a.kt)("p",null,"In most cases, ontologies are not alternated, but extended. The meaning of nodes/edges must not change."),(0,a.kt)("p",null,"New service or data types must have new types within the ontologies."),(0,a.kt)("p",null,"\u26a0\ufe0f If an ontology gets extended, not all users may be aware of this extension. As a consumer of data or services, you cannot expect that all providers provide the corresponding data until next major release. If required, you may establish a appropriate mechanism in your use case for informing your partners and requiring them to provide the extended data."),(0,a.kt)("h2",{id:"data-and-service-versions"},"DATA AND SERVICE VERSIONS"),(0,a.kt)("p",null,"Versioning of services, but also data is especially helpful if you want to harmonize versions within a use case. The attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"cx-common:version")," within the ",(0,a.kt)("inlineCode",{parentName:"p"},"properties")," list of the asset definitions can be used for this purpose. Using semantic versioning, the feature version number can be harmonized by all participants (e.g. by agreements or standards). Semantic versioning is expressed in the following format: ",(0,a.kt)("inlineCode",{parentName:"p"},"[0-9]+.[0-9]+.[0-9]+(-SNAPSHOT)?")),(0,a.kt)("p",null,"A second option would be an extension of the corresponding ontologies and taxonomies. Then, the version information can be a part of the SHACL description in the graph assets."),(0,a.kt)("p",null,"It's up to the use case to handle the versioning. In skills, both options can be used to determine the desired data and service versions."))}d.isMDXComponent=!0},87827:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaG9zdD0iNjViZDcxMTQ0ZSIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMTEiCiAgIGhlaWdodD0iMTEiCiAgIHZpZXdCb3g9Ii0wLjUgLTAuNSAxMSAxMSIKICAgY29udGVudD0iJmx0O214ZmlsZSZndDsmbHQ7ZGlhZ3JhbSBuYW1lPSZxdW90O1NlaXRlLTEmcXVvdDsgaWQ9JnF1b3Q7ekcyNFhrY1NpZDBqRzVaZzFzSlYmcXVvdDsmZ3Q7MVZaZFQ4TWdGUDAxZlRScHdibjVxUFByeGNSRUU1K3hYRnNpN1cwbzJ6cC92VlJnbExYcVpuenhhWEM0SDl4enp0Z1N1cXk2VzhXYThoNDV5SVNrdkV2b1ZVSUltYzNQelVlUGJDMUN5U0t6U0tFRXQ5Z0FlQlR2NE1EVW9TdkJvWTBDTmFMVW9vbkJIT3NhY2gxaFRDbmN4R0d2S09PdURTdGdCRHptVEk3Ulo4RjFhZEVGbVFmOERrUlIrczdabVp1NFlqN1lUZEtXak9ObUFOSHJoQzRWb3JhcnFsdUM3Tm56dk5pOG15OU9keGRUVU90REV2cXpQbVBONU1vTjV5Nm10MzdhUXVHcUdSZDJ2ZGFnTkhSVHRMTVhYeUZNWmp3QldJRldXeFBuNUQ4Si9Hd0NtMTdyY2tpa3c1alRyOWpWQ2lPYWhadHlldUw1endORHpTOTZsNWhkamJVQkwwdGRtWHBYbVZtMld1RWJMRkdpK295bXI0eWxoSm9UUTFQTm9XK1RtdDJZTU44SmVPU3VNUzhERm1ZVExIaE1nV1JhckdOUFRsSGpPanlnTUZjaGFSZVQ2VlNZeGZrdHJsUU9MbVZvb0wwcWUybWFxUUwwS00zUXliYURzS1lQYUErK1c1Wk8zK0g3NDJBSTJ6N1lZOGYxUVk1WkhPV1lGNG41MjFNcDZ0ZzJKdUpHeUdOTlpPUDhHL012YkhYNkY2N2EvNklmYmF2b05UaE83dDNEOXRzWFlrckNLYWxqY2JQL0lDNkp4SjMvVHR5enFBZzlTT21mZFRUYjhMTnB3OE8vRDNyOUFRPT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7IgogICBpZD0ic3ZnNCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZXh0ZXJuYWwtbGluay5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMy4yICgwOTFlMjBlLCAyMDIzLTExLTI1LCBjdXN0b20pIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3NCIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICAgIGlua3NjYXBlOnpvb209Ijk3LjA1IgogICAgIGlua3NjYXBlOmN4PSI3LjUwMTI4OCIKICAgICBpbmtzY2FwZTpjeT0iMy4wMDM2MDY0IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMTM3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIyNTUyIgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiIC8+CiAgPGRlZnMKICAgICBpZD0iZGVmczEiIC8+CiAgPGcKICAgICBpZD0iZzQiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMsLTcpIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDEzLDEyIHYgNSBIIDMgViA3IGggNSIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDcsMTIgOC4zOSwxMC44NCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2Utd2lkdGg9IjAuMSIKICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIKICAgICAgIHBvaW50ZXItZXZlbnRzPSJub25lIgogICAgICAgaWQ9InBhdGgyIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gMTMsNyA5LjY3LDEyLjM4IDcuMTEsOS4zIFoiCiAgICAgICBmaWxsPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlLXdpZHRoPSIwLjEiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMyIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDUsMTQgOSwxMCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoNCIgLz4KICA8L2c+Cjwvc3ZnPgo="},3266:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/behaviour-twin-kit-icon-mini-60cb99261b60d4cf2c9a200a41301ee2.svg"}}]);