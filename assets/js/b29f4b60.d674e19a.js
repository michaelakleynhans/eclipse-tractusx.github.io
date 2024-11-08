"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[40271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(n),g=r,u=h["".concat(c,".").concat(g)]||h[g]||d[g]||a;return n?i.createElement(u,o(o({ref:t},l),{},{components:n})):i.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={id:"service-bindings",title:"Service Bindings",description:"Behaviour Twin KIT"},o=void 0,s={unversionedId:"kits/behaviour-twin-kit/development-view/service-bindings",id:"version-24.08/kits/behaviour-twin-kit/development-view/service-bindings",title:"Service Bindings",description:"Behaviour Twin KIT",source:"@site/docs-kits_versioned_docs/version-24.08/kits/behaviour-twin-kit/development-view/service-bindings.md",sourceDirName:"kits/behaviour-twin-kit/development-view",slug:"/kits/behaviour-twin-kit/development-view/service-bindings",permalink:"/docs-kits/kits/behaviour-twin-kit/development-view/service-bindings",draft:!1,tags:[],version:"24.08",frontMatter:{id:"service-bindings",title:"Service Bindings",description:"Behaviour Twin KIT"},sidebar:"kits",previous:{title:"Data Bindings",permalink:"/docs-kits/kits/behaviour-twin-kit/development-view/data-bindings"},next:{title:"Skill",permalink:"/docs-kits/kits/behaviour-twin-kit/development-view/skill"}},c={},p=[{value:"OVERVIEW",id:"overview",level:3},{value:"SERVICE MAPPING TOOL",id:"service-mapping-tool",level:3},{value:"SERVICE MAPPING CONFIGURATION",id:"service-mapping-configuration",level:3},{value:"THE OBLIGATORY LICENSE HEADER",id:"the-obligatory-license-header",level:4},{value:"PREFIXES THAT ARE USED IN THIS EXAMPLE",id:"prefixes-that-are-used-in-this-example",level:4},{value:"RDF4J REPOSITORY",id:"rdf4j-repository",level:4},{value:"FUNCTION DECLARATION",id:"function-declaration",level:4},{value:"FUNCTION ARGUMENTS",id:"function-arguments",level:4},{value:"FUNCTION RESULT",id:"function-result",level:4},{value:"GRAPH ASSET FOR THE SERVICE BINDINGS",id:"graph-asset-for-the-service-bindings",level:3},{value:"GRAPH ASSET DEFINITION",id:"graph-asset-definition",level:4},{value:"POLICY AND CONTRACT FOR THE GRAPH ASSET",id:"policy-and-contract-for-the-graph-asset",level:4}],l={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{style:{display:"block"}},(0,r.kt)("div",{style:{display:"inline-block",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Behaviour Twin KIT banner",src:n(3266).Z,width:"51",height:"42"}))),(0,r.kt)("div",{style:{display:"inline-block",fontSize:17,color:"rgb(255,166,1)",marginLeft:7,verticalAlign:"top",paddingTop:6}},"Behaviour Twin KIT")),(0,r.kt)("p",null,"Applies to role: ",(0,r.kt)("em",{parentName:"p"},"calculation service provider")),(0,r.kt)("h3",{id:"overview"},"OVERVIEW"),(0,r.kt)("p",null,"In many cases, services are provided via REST APIs and are using JSON as input and output format (like in this example for the RuL use case). To include those services into the knowledge graph, you have to bind/map them."),(0,r.kt)("h3",{id:"service-mapping-tool"},"SERVICE MAPPING TOOL"),(0,r.kt)("p",null,"To bind a service to the knowledge graph, you must use a ",(0,r.kt)("strong",{parentName:"p"},"remoting agent"),", also called the ",(0,r.kt)("strong",{parentName:"p"},"service binding agent"),". The ",(0,r.kt)("a",{parentName:"p",href:"../../knowledge-agents/operation-view/provider"},"Agents KIT")," therefore provides a software based on ",(0,r.kt)("a",{parentName:"p",href:"https://rdf4j.org/"},"RDF4J ",(0,r.kt)("img",{alt:"(external link)",src:n(16129).Z,width:"11",height:"11"})),"."),(0,r.kt)("h3",{id:"service-mapping-configuration"},"SERVICE MAPPING CONFIGURATION"),(0,r.kt)("p",null,"To configure the service mapping, a configuration must be provided that formally describes the mapping. The configuration is written in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/turtle/"},"Terse RDF Triple Language ",(0,r.kt)("img",{alt:"(external link)",src:n(16129).Z,width:"11",height:"11"})),", also known as ",(0,r.kt)("em",{parentName:"p"},"Turtle"),". For some detailed information, have a look at the ",(0,r.kt)("a",{parentName:"p",href:"../../knowledge-agents/operation-view/provider"},"Agents KIT's Operation View"),"."),(0,r.kt)("p",null,"In this example, an asynchronous calculation service for gearbox RuL values is bound. It uses the Catena-X notification format as a container for the input data. The content of the notification is a JSON structure with a list of load spectra in it. The input format provides more than one Element (batch processing), but the RuL logic always requires exact one input set per calculation. Therefore, always the first (and only the first) item of the input list is bound. The service binding is defined as follows."),(0,r.kt)("h4",{id:"the-obligatory-license-header"},"THE OBLIGATORY LICENSE HEADER"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ttl"},'################################################################\n# Copyright (c) 2022-2024 T-Systems International GmbH\n# Copyright (c) 2022-2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG) \n# Copyright (c) 2022-2024 ZF Friedrichshafen AG\n# Copyright (c) 2023-2024 Allgemeiner Deutscher Automobil-Club e.V. (ADAC)\n# Copyright (c) 2022-2024 Mercedes-Benz AG\n# Copyright (c) 2022-2024 Contributors to the Catena-X Association\n#\n# See the NOTICE file(s) distributed with this work for additional\n# information regarding copyright ownership.\n#\n# This program and the accompanying materials are made available under the\n# terms of the Apache License, Version 2.0 which is available at\n# https://www.apache.org/licenses/LICENSE-2.0.\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT\n# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the\n# License for the specific language governing permissions and limitations\n# under the License.\n#\n# SPDX-License-Identifier: Apache-2.0\n################################################################\n')),(0,r.kt)("h4",{id:"prefixes-that-are-used-in-this-example"},"PREFIXES THAT ARE USED IN THIS EXAMPLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ttl"},"@prefix rdf:            <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs:           <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix rep:            <http://www.openrdf.org/config/repository#> .\n@prefix sr:             <http://www.openrdf.org/config/repository/sail#> .\n@prefix sail:           <http://www.openrdf.org/config/sail#> .\n@prefix sp:             <http://spinrdf.org/sp#> .\n@prefix xsd:            <http://www.w3.org/2001/XMLSchema#> .\n@prefix json:           <https://json-schema.org/draft/2020-12/schema#> .\n@prefix dcterms:        <http://purl.org/dc/terms/> .\n@prefix cx-fx:          <https://w3id.org/catenax/ontology/function#> .\n@prefix cx-common:      <https://w3id.org/catenax/ontology/common#> .\n@prefix cx-core:        <https://w3id.org/catenax/ontology/core#> .\n@prefix cx-vehicle:     <https://w3id.org/catenax/ontology/vehicle#> .\n@prefix cx-reliability: <https://w3id.org/catenax/ontology/reliability#> .\n@prefix cx-behaviour:   <https://w3id.org/catenax/ontology/behaviour#> .\n")),(0,r.kt)("h4",{id:"rdf4j-repository"},"RDF4J REPOSITORY"),(0,r.kt)("p",null,"The RDF4J repository is the basic configuration that refers to the service object and defines the callback endpoint for an asynchronous response of this service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ttl"},'[] rdf:type rep:Repository ;\n  rep:repositoryID "rul" ;\n  rdfs:label "Remainig Useful Life Functions Repository" ;\n  rep:repositoryImpl [\n      rep:repositoryType "openrdf:SailRepository" ;\n      sr:sailImpl [\n        sail:sailType "org.eclipse.tractusx.agents:Remoting" ;\n        cx-fx:supportsInvocation cx-behaviour:RemainingUsefulLife ;\n        cx-fx:callbackAddress <https://my-remoting-agent.domain/rdf4j-server/callback> ;\n      ]\n  ] .\n')),(0,r.kt)("p",null,"The function type that will be invoked by this binding is defined by the property ",(0,r.kt)("inlineCode",{parentName:"p"},"cx-fx:supportsInvocation"),". In this example, the bound function is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"cx-behaviour:RemainingUsefulLife"),"."),(0,r.kt)("h4",{id:"function-declaration"},"FUNCTION DECLARATION"),(0,r.kt)("p",null,"Definition of the function type ",(0,r.kt)("inlineCode",{parentName:"p"},"cx-behaviour:RemainingUsefulLife")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"cx-fx:Function"),". It defines the endpoint and describes the input and output elements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ttl"},'cx-behaviour:RemainingUsefulLife rdf:type cx-fx:Function ;\n  dcterms:description "Remaining useful Life is an asynchronous batch invocation."@en ;\n  dcterms:title "Remaining useful Life" ;\n  cx-fx:targetUri "http://service-backend:5005/api/rul2" ;\n  cx-fx:invocationMethod "POST-JSON" ;\n#  cx-common:authenticationKey "Authorization" ;\n#  cx-common:authenticationCode "Basic TOKEN" ;\n  cx-fx:invocationMethod "POST-JSON" ;\n  cx-fx:invocationIdProperty "header.notificationID,content.requestRefId" ;\n  cx-fx:callbackProperty "header.respondAssetId" ;\n  cx-fx:input cx-behaviour:notification ;\n  cx-fx:input cx-behaviour:sender ;\n  cx-fx:input cx-behaviour:senderConnector ;\n\n  ...\n\n  cx-fx:input cx-behaviour:headerChannels ;\n  cx-fx:input cx-behaviour:bodyClasses ;\n  cx-fx:input cx-behaviour:bodyCountsList ;\n  cx-fx:result cx-behaviour:RemainingUsefulLifeResult .\n')),(0,r.kt)("h4",{id:"function-arguments"},"FUNCTION ARGUMENTS"),(0,r.kt)("p",null,"The input data that are received from the knowledge graph are converted to the desired JSON format that is requested by the service. Therefore, each value (input parameter) that is represented in the knowledge graph as a separate object must be described with its corresponding JSON path. The argument name represents this JSON path. Default values can be specified in case some values are not present in the knowledge graph."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ttl"},'cx-behaviour:notification rdf:type cx-fx:Argument ;\n  dcterms:description "A default notification output template."@en ;\n  dcterms:title "Notification Template" ;\n  cx-fx:argumentName "." ;\n  cx-fx:dataType json:Object ;\n  cx-fx:priority "-1"^^xsd:integer ;\n  cx-fx:default "{ \\"content\\": { \\"endurancePredictorInputs\\": []}}"^^json:Object .\n\ncx-behaviour:sender rdf:type cx-fx:Argument ;\n  dcterms:description "Sender of the notification as a BPN."@en ;\n  dcterms:title "Notification Sender" ;\n  cx-fx:argumentName "header.senderBPN" ;\n  cx-fx:default "anonymous" .\n\n...\n\n')),(0,r.kt)("h4",{id:"function-result"},"FUNCTION RESULT"),(0,r.kt)("p",null,"The result of the service is also a JSON string. It consists of output values, which are specified each separate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ttl"},'cx-behaviour:RemainingUsefulLifeResult rdf:type cx-fx:Result ;\n  dcterms:description "The asynchronous notification response."@en ;\n  dcterms:title "Asynchronous notification response." ;\n  cx-fx:callbackProperty "header.referencedNotificationID" ;\n  cx-fx:outputProperty "content.endurancePredictorOutputs" ;\n  cx-fx:output cx-behaviour:remainingOperatingHours ;\n  cx-fx:output cx-behaviour:remainingRunningDistance .\n\ncx-behaviour:remainingOperatingHours rdf:type cx-fx:ReturnValue ;\n  dcterms:description "Predicted Operating Hours of Remaining useful Life Response"@en ;\n  dcterms:title "Remaining useful Life Operating Hours" ;\n  cx-fx:valuePath "0.remainingUsefulLife.remainingOperatingHours" ;\n  cx-fx:dataType xsd:float.\n\ncx-behaviour:remainingRunningDistance rdf:type cx-fx:ReturnValue ;\n  dcterms:description "Predicted Distance of Remaining useful Life Response"@en ;\n  dcterms:title "Remaining useful Life Distance" ;\n  cx-fx:valuePath "0.remainingUsefulLife.remainingRunningDistance" ;\n  cx-fx:dataType xsd:int .\n')),(0,r.kt)("h3",{id:"graph-asset-for-the-service-bindings"},"GRAPH ASSET FOR THE SERVICE BINDINGS"),(0,r.kt)("p",null,"To enable the knowledge agent's matchmaking agent to utilize the service binding, a graph asset has to be registered at the calculation service provider's EDC connector. This asset must have a property ",(0,r.kt)("inlineCode",{parentName:"p"},"rdfs:isDefinedBy")," for ontology references and a property ",(0,r.kt)("inlineCode",{parentName:"p"},"sh:shapesGraph")," that defines the shape of the provided graph."),(0,r.kt)("h4",{id:"graph-asset-definition"},"GRAPH ASSET DEFINITION"),(0,r.kt)("p",null,"The following example is a full asset description, that can be registered at the EDC connector."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@context": {\n        "@vocab": "https://w3id.org/edc/v0.0.1/ns/",\n        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",\n        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",\n        "cx-common": "https://w3id.org/catenax/ontology/common#",\n        "xsd": "http://www.w3.org/2001/XMLSchema#",\n        "sh": "http://www.w3.org/ns/shacl#",\n        "cs-taxo": "https://w3id.org/catenax/taxonomy#",\n        "dc": "https://purl.org/dc/terms/"\n    },\n    "@id": "cx-taxo:GraphAsset?supplier=BehaviourTwinRUL", \n    "properties": {\n        "cx-common:name": "Lifetime Prognosis Service for Gearboxes",\n        "cx-common:description": "A sample graph asset/offering referring to a specific prognosis resource.",\n        "cx-common:description@de": "Ein Beispielasset f\xfcr eine Prognosefunktion.",\n        "cx-common:version": "1.12.19",\n        "cx-common:contenttype": "application/json, application/xml",\n        "cx-common:publishedUnderContract": "Contract?supplier=Graph",\n        "dc:type": "cx-taxo:GraphAsset",\n        "rdfs:isDefinedBy": "<https://w3id.org/catenax/ontology/common>,<https://w3id.org/catenax/ontology/core>,<https://w3id.org/catenax/ontology/function>,<https://w3id.org/catenax/ontology/behaviour>,<https://w3id.org/catenax/ontology/behaviour>",\n        "cx-common:implementsProtocol": "cx-common:Protocol?w3c:http:SPARQL",\n        "sh:shapesGraph": "@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\\n@prefix schema: <http://schema.org/> .\\n@prefix sh: <http://www.w3.org/ns/shacl#> .\\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\\n@prefix edc: <https://w3id.org/edc/v0.0.1/ns/> .\\n@prefix cx-common: <https://w3id.org/catenax/ontology/common#> .\\n@prefix cx-core: <https://w3id.org/catenax/ontology/core#> .\\n@prefix cx-vehicle: <https://w3id.org/catenax/ontology/vehicle#> .\\n@prefix cx-fx: <https://w3id.org/catenax/ontology/function#> .\\n@prefix cx-behaviour: <https://w3id.org/catenax/ontology/behaviour#> .\\n@prefix cx-reliability: <https://w3id.org/catenax/ontology/reliability#> .\\n@prefix cx-sh: <https://w3id.org/catenax/ontology/schema#> .\\n@prefix cx-taxo: <https://w3id.org/catenax/taxonomy#> .\\n@prefix : <https://w3id.org/catenax/taxonomy#GraphAsset?supplier=BehaviourTwinRUL&shapeObject=> .\\n\\n# Prognosis Function\\n:PrognosisFunctionShape rdf:type sh:NodeShape ;\\n    sh:targetClass cx-behaviour:PrognosisFunction ;\\n    sh:property [\\n        cx-sh:hasAsArgument cx-reliability:countingMethod ;\\n        sh:path cx-behaviour:countingMethod ;\\n    ] ;\\n    sh:property [\\n        cx-sh:hasAsArgument cx-reliability:countingValu ;\\n        sh:path cx-behaviour:countingValue ;\\n     ;\\n    sh:property [\\n        cx-sh:hasAsArgument cx-reliability:countingUnit ;\\n        sh:path cx-behaviour:countingUni ;\\n     ;\\n    sh:property [\\n        cx-sh:hasAsArgument cx-reliability:channels ;\\n        sh:path cx-behaviour:headerChannel ;\\n     ;\\n    sh:property [\\n        cx-sh:hasAsArgument cx-reliability:classes ;\\n        sh:path cx-behaviour:bodyClasse ;\\n    ] .\\n\\n:RemainingUsefulLifeShape rdf:type sh:NodeShape ;\\n    cx-sh:extensionOf :PrognosisFunctionShape ;\\n    sh:targetClass cx-behaviour:RemainingUsefulLife ;\\n      sh:property[\\n        cx-sh:hasAsArgument cx-reliability:observationO ;\\n        sh:path cx-behaviour:observationType ;\\n        sh:in ( cx-taxo:GearSet cx-taxo:GearOil  ;\\n     ;\\n    sh:property :RemainingUsefulLifeResultShape .\\n\\n:RemainingUsefulLifeResult rdf:type sh:PropertyShape ;\\n    cx-sh:outputOf :RemainingUsefulLifeShape ;\\n    sh:path cx-behaviour:RemainingUsefulLifeResult .\\n",\n        "cx-common:isFederated": "true^^xsd:boolean"\n    },\n    "dataAddress": {\n        "id": "cx-taxo:GraphAsset?supplier=BehaviourTwinRUL", \n        "@type": "DataAddress",\n        "baseUrl": "https://my-remoting-agent.domain/rdf4j-server/repositories/rul",\n        "type": "cx-common:Protocol?w3c:http:SPARQL",\n        "proxyPath": "false",\n        "proxyMethod": "true",\n        "proxyQueryParams": "true",\n        "proxyBody": "true",\n        "authKey": "Authorization",\n        "authCode": "\u2022\u2022\u2022\u2022\u2022\u2022",\n        "cx-common:allowServicePattern": "https://my-remoting-agent.domain/rdf4j-server/repositories/rul"\n    }\n')),(0,r.kt)("p",null,"The property ",(0,r.kt)("inlineCode",{parentName:"p"},"sh:shapesGraph")," contains the graph shape of the offered data, written in ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/shacl/"},"Shapes Constraint Language (SHACL) ",(0,r.kt)("img",{alt:"(external link)",src:n(16129).Z,width:"11",height:"11"})),". It describes the shape of a Remaining useful Life function and its output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shacl"},"@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix schema: <http://schema.org/> .\n@prefix sh: <http://www.w3.org/ns/shacl#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix edc: <https://w3id.org/edc/v0.0.1/ns/> .\n@prefix cx-common: <https://w3id.org/catenax/ontology/common#> .\n@prefix cx-core: <https://w3id.org/catenax/ontology/core#> .\n@prefix cx-vehicle: <https://w3id.org/catenax/ontology/vehicle#> .\n@prefix cx-fx: <https://w3id.org/catenax/ontology/function#> .\n@prefix cx-behaviour: <https://w3id.org/catenax/ontology/behaviour#> .\n@prefix cx-reliability: <https://w3id.org/catenax/ontology/reliability#> .\n@prefix cx-sh: <https://w3id.org/catenax/ontology/schema#> .\n@prefix cx-taxo: <https://w3id.org/catenax/taxonomy#> .\n@prefix : <https://w3id.org/catenax/taxonomy#GraphAsset?supplier=BehaviourTwinRUL&shapeObject=> .\n\n# Prognosis Function\n:PrognosisFunctionShape rdf:type sh:NodeShape ;\n    sh:targetClass cx-behaviour:PrognosisFunction ;\n    sh:property [\n        cx-sh:hasAsArgument cx-reliability:countingMethod ;\n        sh:path cx-behaviour:countingMethod ;\n    ] ;\n    sh:property [\n        cx-sh:hasAsArgument cx-reliability:countingValue ;\n        sh:path cx-behaviour:countingValue ;\n    ] ;\n    sh:property [\n        cx-sh:hasAsArgument cx-reliability:countingUnit ;\n        sh:path cx-behaviour:countingUnit ;\n    ] ;\n    sh:property [\n        cx-sh:hasAsArgument cx-reliability:channels ;\n        sh:path cx-behaviour:headerChannels ;\n    ] ;\n    sh:property [\n        cx-sh:hasAsArgument cx-reliability:classes ;\n        sh:path cx-behaviour:bodyClasses ;\n    ] .\n\n:RemainingUsefulLifeShape rdf:type sh:NodeShape ;\n    cx-sh:extensionOf :PrognosisFunctionShape ;\n    sh:targetClass cx-behaviour:RemainingUsefulLife ;\n      sh:property[\n        cx-sh:hasAsArgument cx-reliability:observationOf ;\n        sh:path cx-behaviour:observationType ;\n        sh:in ( cx-taxo:GearSet cx-taxo:GearOil ) ;\n    ] ;\n    sh:property :RemainingUsefulLifeResultShape .\n\n:RemainingUsefulLifeResult rdf:type sh:PropertyShape ;\n    cx-sh:outputOf :RemainingUsefulLifeShape ;\n    sh:path cx-behaviour:RemainingUsefulLifeResult .\n")),(0,r.kt)("p",null,"This shape describes, what arguments must be provided to the calculation service and which output data are generated by the calculation service."),(0,r.kt)("h4",{id:"policy-and-contract-for-the-graph-asset"},"POLICY AND CONTRACT FOR THE GRAPH ASSET"),(0,r.kt)("p",null,"All assets, including graph assets, must have a related policy and contract definition. These are described in the section ",(0,r.kt)("a",{parentName:"p",href:"./contracts-and-policies"},"Contracts And Policies"),"."))}h.isMDXComponent=!0},16129:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaG9zdD0iNjViZDcxMTQ0ZSIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMTEiCiAgIGhlaWdodD0iMTEiCiAgIHZpZXdCb3g9Ii0wLjUgLTAuNSAxMSAxMSIKICAgY29udGVudD0iJmx0O214ZmlsZSZndDsmbHQ7ZGlhZ3JhbSBuYW1lPSZxdW90O1NlaXRlLTEmcXVvdDsgaWQ9JnF1b3Q7ekcyNFhrY1NpZDBqRzVaZzFzSlYmcXVvdDsmZ3Q7MVZaZFQ4TWdGUDAxZlRScHdibjVxUFByeGNSRUU1K3hYRnNpN1cwbzJ6cC92VlJnbExYcVpuenhhWEM0SDl4enp0Z1N1cXk2VzhXYThoNDV5SVNrdkV2b1ZVSUltYzNQelVlUGJDMUN5U0t6U0tFRXQ5Z0FlQlR2NE1EVW9TdkJvWTBDTmFMVW9vbkJIT3NhY2gxaFRDbmN4R0d2S09PdURTdGdCRHptVEk3Ulo4RjFhZEVGbVFmOERrUlIrczdabVp1NFlqN1lUZEtXak9ObUFOSHJoQzRWb3JhcnFsdUM3Tm56dk5pOG15OU9keGRUVU90REV2cXpQbVBONU1vTjV5Nm10MzdhUXVHcUdSZDJ2ZGFnTkhSVHRMTVhYeUZNWmp3QldJRldXeFBuNUQ4Si9Hd0NtMTdyY2tpa3c1alRyOWpWQ2lPYWhadHlldUw1endORHpTOTZsNWhkamJVQkwwdGRtWHBYbVZtMld1RWJMRkdpK295bXI0eWxoSm9UUTFQTm9XK1RtdDJZTU44SmVPU3VNUzhERm1ZVExIaE1nV1JhckdOUFRsSGpPanlnTUZjaGFSZVQ2VlNZeGZrdHJsUU9MbVZvb0wwcWUybWFxUUwwS00zUXliYURzS1lQYUErK1c1Wk8zK0g3NDJBSTJ6N1lZOGYxUVk1WkhPV1lGNG41MjFNcDZ0ZzJKdUpHeUdOTlpPUDhHL012YkhYNkY2N2EvNklmYmF2b05UaE83dDNEOXRzWFlrckNLYWxqY2JQL0lDNkp4SjMvVHR5enFBZzlTT21mZFRUYjhMTnB3OE8vRDNyOUFRPT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7IgogICBpZD0ic3ZnNCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZXh0ZXJuYWwtbGluay5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMy4yICgwOTFlMjBlLCAyMDIzLTExLTI1LCBjdXN0b20pIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3NCIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICAgIGlua3NjYXBlOnpvb209Ijk3LjA1IgogICAgIGlua3NjYXBlOmN4PSI3LjUwMTI4OCIKICAgICBpbmtzY2FwZTpjeT0iMy4wMDM2MDY0IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMTM3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIyNTUyIgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiIC8+CiAgPGRlZnMKICAgICBpZD0iZGVmczEiIC8+CiAgPGcKICAgICBpZD0iZzQiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMsLTcpIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDEzLDEyIHYgNSBIIDMgViA3IGggNSIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDcsMTIgOC4zOSwxMC44NCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2Utd2lkdGg9IjAuMSIKICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIKICAgICAgIHBvaW50ZXItZXZlbnRzPSJub25lIgogICAgICAgaWQ9InBhdGgyIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gMTMsNyA5LjY3LDEyLjM4IDcuMTEsOS4zIFoiCiAgICAgICBmaWxsPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlLXdpZHRoPSIwLjEiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMyIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDUsMTQgOSwxMCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoNCIgLz4KICA8L2c+Cjwvc3ZnPgo="},3266:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/behaviour-twin-kit-icon-mini-60cb99261b60d4cf2c9a200a41301ee2.svg"}}]);