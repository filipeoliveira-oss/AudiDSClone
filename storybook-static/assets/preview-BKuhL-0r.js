const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-CG-__Msz.js","./iframe-BNs0GBMg.js","./index-CsdIBAqE.js","./react-18-zO7t0qe7.js","./index-CH6V9Xxk.js","./index-BT3Zc4Kg.js","./extends-CCbyfPlC.js","./index-COebWTXQ.js","./index-B101H8TP.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-BNs0GBMg.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-CG-__Msz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
