import{j as r}from"./jsx-runtime-BnIj46N_.js";import{r as n}from"./index-CsdIBAqE.js";function i(){const[s,o]=n.useState(0),e=()=>{let t=0;const a=setInterval(()=>{t>100?(clearInterval(a),setTimeout(()=>{e()},500)):(o(t),t++)},20);return()=>clearInterval(a)};return n.useEffect(()=>{e()},[]),r.jsx("div",{className:"ContinuosBarContainer",children:r.jsx("div",{className:"ContinuosBarLoaded",style:{width:`${s}%`}})})}i.__docgenInfo={description:"",methods:[],displayName:"ContinuosBar"};export{i as C};
