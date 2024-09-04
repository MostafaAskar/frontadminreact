"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6761],{89281:(e,i,l)=>{l.d(i,{h:()=>o});var t=l(47313),s=l(12279),a=l.n(s),n=l(74294),r=l(72652),d=l(46417);const o=e=>{let{fetchOptions:i,debounceTimeout:l=400,onClear:s,refetchOptions:o=!1,...c}=e;const[u,m]=(0,t.useState)(!1),[p,v]=(0,t.useState)([]),h=(0,t.useMemo)((()=>a()((e=>{v([]),m(!0),i(e).then((e=>{v(e),m(!1)}))}),l)),[i,l]);return(0,d.jsx)(n.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:h,onClear:()=>{h(""),s&&s()},notFoundContent:u?(0,d.jsx)(r.Z,{size:"small"}):"no results",...c,options:p,onFocus:()=>{p.length&&!o||h("")}})}},385:(e,i,l)=>{l.d(i,{Z:()=>j});var t=l(47313),s=l(10976),a=l(26824),n=l(68197),r=l(59624),d=l(45705),o=l(15178),c=l(9274),u=l(59491),m=l(82138),p=l(47515),v=l(5764),h=l(36104),g=l(24511),x=l(46417);const j=e=>{var i;let{mediaList:l,setMediaList:j,name:f="products"}=e;const{t:Z}=(0,g.$)(),[w]=s.Z.useForm(),[b,y]=(0,t.useState)(null),[N,S]=(0,t.useState)([]),[L,k]=(0,t.useState)(!1),[C,F]=(0,t.useState)(!1),q=async e=>{let{file:i,type:l}=e;i.name?(y("video"===l?(0,x.jsx)("video",{controls:!0,src:i.name,width:450,height:450}):(0,x.jsx)(a.Z,{src:i.name,width:"100%",height:450,alt:"preview-img"})),k(!0)):y(null)},$=e=>({uid:e.title,name:e.title,status:"done",url:e.title,created:!0});return(0,x.jsxs)(n.Z,{gutter:[24,24],children:[(0,x.jsx)(r.Z,{span:24,children:(0,x.jsx)(d.Z,{className:"align-items-start",children:(0,x.jsx)(o.Z,{customRequest:e=>{let{file:i,onSuccess:l}=e;F(!0);const t=new FormData;t.append("image",i),t.append("type",f),h.Z.upload(t).then((e=>{let{data:i}=e;j((e=>({...e,images:[...e.images,{...$(i),isVideo:!0}]}))),l("ok")}))},accept:"video/*",listType:"text",className:"video-upload",multiple:!1,fileList:[],children:(0,x.jsxs)("div",{className:"media-upload",children:[(0,x.jsx)(m.Z,{})," ",(0,x.jsx)("span",{children:Z("upload.video")})]})})})}),(0,x.jsx)(r.Z,{span:24,children:null===l||void 0===l||null===(i=l.previews)||void 0===i?void 0:i.map(((e,i)=>{var t,s;return(0,x.jsxs)(d.Z,{className:"uploaded-file",wrap:!0,children:[(0,x.jsx)("span",{className:"media-item",onClick:()=>q({type:"img",file:null===l||void 0===l?void 0:l.previews[i]}),children:null===l||void 0===l||null===(t=l.previews[i])||void 0===t?void 0:t.name}),(0,x.jsx)("span",{className:"media-item",onClick:()=>q({type:"video",file:null===l||void 0===l?void 0:l.images[i]}),children:null===l||void 0===l||null===(s=l.images[i])||void 0===s?void 0:s.name}),(0,x.jsx)(p.Z,{className:"delete-media-item",onClick:()=>(e=>{const i=l.images.filter(((i,l)=>{if(l!==e)return i})),t=l.previews.filter(((i,l)=>{if(l!==e)return i}));j({images:i,previews:t})})(i)})]})}))}),(0,x.jsx)(c.Z,{title:"Video Preview",visible:L,onCancel:()=>{k(!1)},footer:null,children:b}),(0,x.jsx)(c.Z,{title:"Preview image",visible:C,footer:null,children:(0,x.jsx)(s.Z,{form:w,onFinish:()=>{j((e=>({...e,previews:[...e.previews,...N]}))),S([]),F(!1)},layout:"vertical",children:(0,x.jsxs)(n.Z,{gutter:[24,24],children:[(0,x.jsx)(r.Z,{span:24,children:(0,x.jsx)(s.Z.Item,{label:Z("preview.image"),name:"preview-image",rules:[{required:!(null!==N&&void 0!==N&&N.length),message:Z("required")}],children:(0,x.jsx)(v.Z,{type:f,imageList:N,setImageList:S,multiple:!1,text:"upload.image",form:w})})}),(0,x.jsx)(r.Z,{span:24,className:"d-flex justify-content-end",children:(0,x.jsx)(u.Z,{type:"primary",onClick:()=>w.submit(),children:Z("save")})})]})})})]})}},75336:(e,i,l)=>{function t(e,i){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const t=e.map((e=>({[e.locale]:""===i[`${l}[${e.locale}]`]?void 0:i[`${l}[${e.locale}]`]})));return Object.assign({},...t)}l.d(i,{Z:()=>t})},36761:(e,i,l)=>{l.r(i),l.d(i,{default:()=>g});var t=l(47313),s=l(97890),a=l(23560),n=l(10976),r=l(72652),d=l(2717),o=l(90954),c=l(32447),u=l(54872),m=l(24511),p=l(75336),v=l(20364),h=l(46417);const g=()=>{const{t:e}=(0,m.$)(),{activeMenu:i}=(0,d.v9)((e=>e.menu),d.wU),l=(0,d.I0)(),[g]=n.Z.useForm(),x=(0,s.s0)(),{id:j}=(0,s.UO)(),[f,Z]=(0,t.useState)(!1),{languages:w}=(0,d.v9)((e=>e.formLang),d.wU);(0,t.useEffect)((()=>()=>{const e=g.getFieldsValue(!0);l((0,o.nc)({activeMenu:i,data:e}))}),[]);const b=e=>{const i={images:[],previews:[]},l=e.filter((e=>e.preview)).map((e=>({uid:e.id,name:e.preview,url:e.preview}))),t=e.filter((e=>e.preview)).map((e=>({uid:e.id,name:e.path,url:e.path,isVideo:!0})));return i.previews=l,i.images=t,i};function y(e){if(!e)return{};const{translations:i}=e,l=w.map((e=>{var l,t;return{[`title[${e.locale}]`]:null===(l=i.find((i=>i.locale===e.locale)))||void 0===l?void 0:l.title,[`description[${e.locale}]`]:null===(t=i.find((i=>i.locale===e.locale)))||void 0===t?void 0:t.description}}));return Object.assign({},...l)}return(0,t.useEffect)((()=>{var e;i.refetch&&(e=j,Z(!0),u.Z.getById(e).then((e=>{var t;const s=e.data,a={...s,initialMediaFile:b(e.data.galleries),img:(n=s.galleries,n.map((e=>({uid:e.id,name:e.path,url:e.path,isVideo:Boolean(e.preview)})))),products:null===s||void 0===s||null===(t=s.products)||void 0===t?void 0:t.map((e=>{var i;return{label:null===(i=e.translation)||void 0===i?void 0:i.title,value:e.id}})),...y(s)};var n;g.setFieldsValue(a),l((0,o.nc)({activeMenu:i,data:a}))})).finally((()=>{l((0,o.A_)(i)),Z(!1)})))}),[i.refetch]),(0,h.jsx)(h.Fragment,{children:f?(0,h.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,h.jsx)(r.Z,{size:"large",className:"py-5"})}):(0,h.jsx)(v.Z,{form:g,handleSubmit:(t,s,n)=>{var r;const m=n.images.map((e=>e.name)),v=n.previews.map((e=>e.name)),h={products:null===(r=t.products)||void 0===r?void 0:r.map((e=>e.value)),images:[...m,...s.map((e=>e.name))],previews:v,clickable:!0,title:(0,p.Z)(w,t,"title"),description:(0,p.Z)(w,t,"description")},g="banners";return u.Z.update(j,h).then((()=>{a.Am.success(e("successfully.updated")),(0,d.dC)((()=>{l((0,o.ph)({...i,nextUrl:g})),l((0,c.f)({}))})),x("/banners")}))}})})}},20364:(e,i,l)=>{l.d(i,{Z:()=>x});var t=l(47313),s=l(10976),a=l(68197),n=l(59624),r=l(77181),d=l(66672),o=l(59491),c=l(89281),u=l(5764),m=l(24511),p=l(2717),v=l(17101),h=l(385),g=l(46417);function x(e){var i,l;let{form:x,handleSubmit:j}=e;const{t:f}=(0,m.$)(),{activeMenu:Z}=(0,p.v9)((e=>e.menu),p.wU),{languages:w,defaultLang:b}=(0,p.v9)((e=>e.formLang),p.wU),[y,N]=(0,t.useState)((null===(i=Z.data)||void 0===i?void 0:i.img.filter((e=>!e.isVideo)))||[]),[S,L]=(0,t.useState)(!1),[k,C]=(0,t.useState)((null===Z||void 0===Z||null===(l=Z.data)||void 0===l?void 0:l.initialMediaFile)||{images:[],previews:[]});return(0,g.jsx)(s.Z,{name:"banner-form",layout:"vertical",onFinish:e=>{L(!0),j(e,y,k).finally((()=>L(!1)))},form:x,initialValues:{clickable:!0,...Z.data},className:"d-flex flex-column h-100",children:(0,g.jsxs)(a.Z,{gutter:[24,24],children:[(0,g.jsx)(n.Z,{span:16,children:(0,g.jsxs)(a.Z,{gutter:[24,24],children:[(0,g.jsx)(n.Z,{span:24,children:(0,g.jsx)(r.Z,{title:f("images"),className:"h-100",children:(0,g.jsx)(s.Z.Item,{rules:[{required:!y.length,message:f("required")}],label:f("image"),name:"images",children:(0,g.jsx)(u.Z,{type:"banners",imageList:y,setImageList:N,form:x,length:"1",multiple:!1})})})}),(0,g.jsx)(n.Z,{span:24,children:(0,g.jsx)(r.Z,{title:f("video"),className:"h-100",children:(0,g.jsx)(h.Z,{name:"banners",form:x,mediaList:k,setMediaList:C})})})]})}),(0,g.jsx)(n.Z,{span:8,children:(0,g.jsxs)(r.Z,{title:f("basic.info"),className:"h-100",children:[w.map((e=>(0,g.jsx)(s.Z.Item,{label:f("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===b,message:f("required")},{validator:(e,i)=>i&&""===(null===i||void 0===i?void 0:i.trim())?Promise.reject(new Error(f("no.empty.space"))):i&&(null===i||void 0===i?void 0:i.trim().length)<2?Promise.reject(new Error(f("must.be.at.least.2"))):Promise.resolve()}],hidden:e.locale!==b,children:(0,g.jsx)(d.Z,{maxLength:50})},"title"+e.locale))),w.map((e=>(0,g.jsx)(s.Z.Item,{label:f("description"),name:`description[${e.locale}]`,rules:[{required:e.locale===b,message:f("required")},{validator:(e,i)=>i&&""===(null===i||void 0===i?void 0:i.trim())?Promise.reject(new Error(f("no.empty.space"))):i&&(null===i||void 0===i?void 0:i.trim().length)<5?Promise.reject(new Error(f("must.be.at.least.5"))):Promise.resolve()}],hidden:e.locale!==b,children:(0,g.jsx)(d.Z.TextArea,{maxLength:150})},"description"+e.locale))),(0,g.jsx)(s.Z.Item,{label:f("products"),name:"products",rules:[{required:!0,message:f("required")}],children:(0,g.jsx)(c.h,{mode:"multiple",fetchOptions:function(e){const i={search:e,perPage:10,status:"published"};return v.Z.getAll(i).then((e=>e.data.map((e=>{var i;return{label:null===e||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title,value:e.id,key:e.id}}))))},debounceTimeout:200})})]})}),(0,g.jsx)(n.Z,{span:24,children:(0,g.jsx)("div",{className:"d-flex justify-content-end",children:(0,g.jsx)("div",{className:"pb-5",children:(0,g.jsx)(o.Z,{type:"primary",htmlType:"submit",loading:S,children:f("submit")})})})})]})})}}}]);