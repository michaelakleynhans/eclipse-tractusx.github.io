"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[170],{170:(e,t,o)=>{o.d(t,{Z:()=>w});var n=o(87462),c=o(67294),a=o(72389),l=o(86010),s=o(66412),r=o(35281),i=o(37016);const u="codeBlockContainer_Ckt0";function p(e){let{as:t,...o}=e;const a=(0,s.p)(),p=(0,i.QC)(a);return c.createElement(t,(0,n.Z)({},o,{style:p,className:(0,l.Z)(o.className,u,r.k.common.codeBlock)}))}const d={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function m(e){let{children:t,className:o}=e;return c.createElement(p,{as:"pre",tabIndex:0,className:(0,l.Z)(d.codeBlockStandalone,"thin-scrollbar",o)},c.createElement("code",{className:d.codeBlockLines},t))}var y=o(86668),g=o(85448),h=o(23746);const k="codeLine_lJS_",b="codeLineNumber_Tfdd",f="codeLineContent_feaV";function v(e){let{line:t,classNames:o,showLineNumbers:a,getLineProps:s,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=s({line:t,className:(0,l.Z)(o,a&&k)}),u=t.map(((e,t)=>c.createElement("span",(0,n.Z)({key:t},r({token:e,key:t})))));return c.createElement("span",i,a?c.createElement(c.Fragment,null,c.createElement("span",{className:b}),c.createElement("span",{className:f},u)):u,c.createElement("br",null))}var B=o(95999);const N={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function E(e){let{code:t,className:o}=e;const[n,a]=(0,c.useState)(!1),s=(0,c.useRef)(void 0),r=(0,c.useCallback)((()=>{!function(e,t){let{target:o=document.body}=void 0===t?{}:t;const n=document.createElement("textarea"),c=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let l=!1;a.rangeCount>0&&(l=a.getRangeAt(0)),o.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),l&&(a.removeAllRanges(),a.addRange(l)),c&&c.focus()}(t),a(!0),s.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,c.useEffect)((()=>()=>window.clearTimeout(s.current)),[]),c.createElement("button",{type:"button","aria-label":n?(0,B.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,B.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,B.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",o,N.copyButton,n&&N.copyButtonCopied),onClick:r},c.createElement("span",{className:N.copyButtonIcons,"aria-hidden":"true"},c.createElement("svg",{className:N.copyButtonIcon,viewBox:"0 0 24 24"},c.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),c.createElement("svg",{className:N.copyButtonSuccessIcon,viewBox:"0 0 24 24"},c.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const C="wordWrapButtonIcon_Bwma",L="wordWrapButtonEnabled_EoeP";function _(e){let{className:t,onClick:o,isEnabled:n}=e;const a=(0,B.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return c.createElement("button",{type:"button",onClick:o,className:(0,l.Z)("clean-btn",t,n&&L),"aria-label":a,title:a},c.createElement("svg",{className:C,viewBox:"0 0 24 24","aria-hidden":"true"},c.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function T(e){let{children:t,className:o="",metastring:a,title:r,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:k,magicComments:b}}=(0,y.L)(),f=m??(0,i.Vo)(o)??k,B=(0,s.p)(),N=(0,g.F)(),C=(0,i.bc)(a)||r,{lineClassNames:L,code:T}=(0,i.nZ)(t,{metastring:a,language:f,magicComments:b}),w=u??(0,i.nt)(a);return c.createElement(p,{as:"div",className:(0,l.Z)(o,f&&!o.includes(`language-${f}`)&&`language-${f}`)},C&&c.createElement("div",{className:d.codeBlockTitle},C),c.createElement("div",{className:d.codeBlockContent},c.createElement(h.ZP,(0,n.Z)({},h.lG,{theme:B,code:T,language:f??"text"}),(e=>{let{className:t,tokens:o,getLineProps:n,getTokenProps:a}=e;return c.createElement("pre",{tabIndex:0,ref:N.codeBlockRef,className:(0,l.Z)(t,d.codeBlock,"thin-scrollbar")},c.createElement("code",{className:(0,l.Z)(d.codeBlockLines,w&&d.codeBlockLinesWithNumbering)},o.map(((e,t)=>c.createElement(v,{key:t,line:e,getLineProps:n,getTokenProps:a,classNames:L[t],showLineNumbers:w})))))})),c.createElement("div",{className:d.buttonGroup},(N.isEnabled||N.isCodeScrollable)&&c.createElement(_,{className:d.codeButton,onClick:()=>N.toggle(),isEnabled:N.isEnabled}),c.createElement(E,{className:d.codeButton,code:T}))))}function w(e){let{children:t,...o}=e;const l=(0,a.Z)(),s=function(e){return c.Children.toArray(e).some((e=>(0,c.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof s?T:m;return c.createElement(r,(0,n.Z)({key:String(l)},o),s)}},23746:(e,t,o)=>{o.d(t,{ZP:()=>y,lG:()=>l});var n=o(87410);const c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=o(67294),l={Prism:n.Z,theme:c};function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r.apply(this,arguments)}var i=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var o=e.length;return o>0&&e[o-1]===t?e:e.concat(t)},d=function(e,t){var o=e.plain,n=Object.create(null),c=e.styles.reduce((function(e,o){var n=o.languages,c=o.style;return n&&!n.includes(t)||o.types.forEach((function(t){var o=r({},e[t],c);e[t]=o})),e}),n);return c.root=o,c.plain=r({},o,{backgroundColor:null}),c};function m(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(o[n]=e[n]);return o}const y=function(e){function t(){for(var t=this,o=[],n=arguments.length;n--;)o[n]=arguments[n];e.apply(this,o),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var o=e.theme?d(e.theme,e.language):void 0;return t.themeDict=o})),s(this,"getLineProps",(function(e){var o=e.key,n=e.className,c=e.style,a=r({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==c&&(a.style=void 0!==a.style?r({},a.style,c):c),void 0!==o&&(a.key=o),n&&(a.className+=" "+n),a})),s(this,"getStyleForToken",(function(e){var o=e.types,n=e.empty,c=o.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===c&&"plain"===o[0])return n?{display:"inline-block"}:void 0;if(1===c&&!n)return a[o[0]];var l=n?{display:"inline-block"}:{},s=o.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(s))}})),s(this,"getTokenProps",(function(e){var o=e.key,n=e.className,c=e.style,a=e.token,l=r({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==c&&(l.style=void 0!==l.style?r({},l.style,c):c),void 0!==o&&(l.key=o),n&&(l.className+=" "+n),l})),s(this,"tokenize",(function(e,t,o,n){var c={code:t,grammar:o,language:n,tokens:[]};e.hooks.run("before-tokenize",c);var a=c.tokens=e.tokenize(c.code,c.grammar,c.language);return e.hooks.run("after-tokenize",c),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,o=e.language,n=e.code,c=e.children,a=this.getThemeDict(this.props),l=t.languages[o];return c({tokens:function(e){for(var t=[[]],o=[e],n=[0],c=[e.length],a=0,l=0,s=[],r=[s];l>-1;){for(;(a=n[l]++)<c[l];){var d=void 0,m=t[l],y=o[l][a];if("string"==typeof y?(m=l>0?m:["plain"],d=y):(m=p(m,y.type),y.alias&&(m=p(m,y.alias)),d=y.content),"string"==typeof d){var g=d.split(i),h=g.length;s.push({types:m,content:g[0]});for(var k=1;k<h;k++)u(s),r.push(s=[]),s.push({types:m,content:g[k]})}else l++,t.push(m),o.push(d),n.push(0),c.push(d.length)}l--,t.pop(),o.pop(),n.pop(),c.pop()}return u(s),r}(void 0!==l?this.tokenize(t,n,l,o):[n]),className:"prism-code language-"+o,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)}}]);