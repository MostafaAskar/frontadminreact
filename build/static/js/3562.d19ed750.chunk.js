"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3562],{83562:(l,i,t)=>{t.r(i),t.d(i,{default:()=>p});var e=t(47313),o=t(10976),n=t(92664),a=t(75336),d=t(2717),u=t(97890),v=t(50447),r=t(51282),s=t(90954),c=t(46417);function p(){const l=(0,d.I0)(),[i]=o.Z.useForm(),{activeMenu:t}=(0,d.v9)((l=>l.menu),d.wU),{languages:p}=(0,d.v9)((l=>l.formLang),d.wU),{id:m}=(0,u.UO)(),[f,h]=(0,e.useState)(!1);(0,e.useEffect)((()=>{t.refetch&&(e=>{h(!0),v.Z.getById(e,{type:"look"}).then((e=>{var o,n,a,d,u,v;const r=null===e||void 0===e?void 0:e.data,c={[`title[${null===r||void 0===r||null===(o=r.translation)||void 0===o?void 0:o.locale}]`]:null===r||void 0===r||null===(n=r.translation)||void 0===n?void 0:n.title,[`description[${null===r||void 0===r||null===(a=r.translation)||void 0===a?void 0:a.locale}]`]:null===r||void 0===r||null===(d=r.translation)||void 0===d?void 0:d.description,products:null===r||void 0===r||null===(u=r.products)||void 0===u?void 0:u.map((l=>{var i;return{label:null===l||void 0===l||null===(i=l.translation)||void 0===i?void 0:i.title,value:null===l||void 0===l?void 0:l.id,key:null===l||void 0===l?void 0:l.id}})),image:null===r||void 0===r||null===(v=r.galleries)||void 0===v?void 0:v.map((l=>({uid:l.id,name:l.path,url:l.path}))),active:Boolean(null===r||void 0===r?void 0:r.active)};i.setFieldsValue(c),l((0,s.nc)({activeMenu:t,data:c}))})).finally((()=>{h(!1),l((0,s.A_)(t))}))})(m)}),[t.refetch]);return(0,c.jsx)(e.Fragment,{children:f?(0,c.jsx)(r.Z,{}):(0,c.jsx)(n.Z,{form:i,handleSubmit:(l,i)=>{const t={type:"look",active:Number(l.active),title:(0,a.Z)(p,l,"title"),description:(0,a.Z)(p,l,"description"),products:l.products.map((l=>l.value)),images:i.map((l=>l.name))};return v.Z.update(m,t)}})})}}}]);