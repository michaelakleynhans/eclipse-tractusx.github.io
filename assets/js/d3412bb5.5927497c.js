(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[9185],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||r;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84352:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));n(92272),n(65488),n(85162),n(44765);const r={id:"osim-api",title:"OSim API",description:"OSim API for requesting and receiving simulation results",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},a=void 0,s={unversionedId:"kits/OSim Kit/Software Development View/osim-api",id:"kits/OSim Kit/Software Development View/osim-api",title:"OSim API",description:"OSim API for requesting and receiving simulation results",source:"@site/docs-kits/kits/OSim Kit/Software Development View/01-osim-api.info.mdx",sourceDirName:"kits/OSim Kit/Software Development View",slug:"/kits/OSim Kit/Software Development View/osim-api",permalink:"/docs-kits/next/kits/OSim Kit/Software Development View/osim-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"osim-api",title:"OSim API",description:"OSim API for requesting and receiving simulation results",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs-kits/next/kits/OSim Kit/Adoption View OSim Kit"},next:{title:"Specification",permalink:"/docs-kits/next/kits/OSim Kit/Software Development View/Specification OSim Kit"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 3.0.0"),(0,o.kt)("h1",{id:"osim-api"},"OSim API"),(0,o.kt)("p",null,"OSim API for requesting and receiving simulation results"))}p.isMDXComponent=!0},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(67294),o=n(86010);const r="tabItem_Ymn6";function a(e){let{children:t,hidden:n,className:a}=e;return i.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,a),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n(67294),n(72389)},44765:(e,t,n)=>{"use strict";n(67294),n(93162)},92272:(e,t,n)=>{"use strict";n(67294)},93162:function(e,t,n){var i,o,r;o=[],void 0===(r="function"==typeof(i=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function i(e,t,n){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){c(i.response,t,n)},i.onerror=function(){console.error("could not download file")},i.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(i){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,s=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var s=a.URL||a.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):o(c.href)?i(e,t,n):r(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),n);else if(o(e))i(e,n,a);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return i(e,t,n);var r="application/octet-stream"===e.type,c=/constructor/i.test(a.HTMLElement)||a.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&c||s)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var p=a.URL||a.webkitURL,d=p.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});a.saveAs=c.saveAs=c,e.exports=c})?i.apply(t,o):i)||(e.exports=r)}}]);