import{j as e}from"./jsx-runtime-BnIj46N_.js";import{r}from"./index-CsdIBAqE.js";import{A as p}from"./AudiButton-CBBZSCmo.js";function T({buttonText:o,buttonType:n,toastText:i,toastTheme:l,duration:a}){const[u,t]=r.useState(!1),[m,s]=r.useState(!1);function d(){t(!0),s(!1),a&&setTimeout(()=>{s(!0),setTimeout(()=>{t(!1)},500)},a)}function c(){s(!0),setTimeout(()=>{t(!1)},500)}return e.jsxs("div",{className:"ToastContainer",children:[e.jsx(p,{buttonType:n,text:o,click:()=>d()}),e.jsxs("div",{className:`${u?"Toast":"closedToast"} ${m?"ToastClosing":""} toast-theme-${l}`,children:[e.jsx("span",{className:"ToastText",children:i}),e.jsx("span",{className:"ToastClose",onClick:()=>c(),children:"X"})]})]})}T.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{buttonType:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},buttonText:{required:!0,tsType:{name:"string"},description:""},toastText:{required:!0,tsType:{name:"string"},description:""},toastTheme:{required:!0,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""}}};export{T};
