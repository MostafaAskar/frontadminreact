"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4448],{13622:(e,l,n)=>{n.d(l,{R:()=>s});var i=n(47313),t=n(12279),a=n.n(t),o=n(74294),d=n(72652),r=n(46417);const s=e=>{let{fetchOptions:l,debounceTimeout:n=400,refetch:t=!1,...s}=e;const[u,c]=(0,i.useState)(!1),[v,h]=(0,i.useState)([]),m=(0,i.useMemo)((()=>a()((e=>{h([]),c(!0),l(e).then((e=>{h(e),c(!1)}))}),n)),[l,n]);return(0,r.jsx)(o.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,onClear:()=>m(""),filterOption:!1,onSearch:m,notFoundContent:u?(0,r.jsx)(d.Z,{size:"small"}):"no results",...s,options:v,onFocus:()=>{v.length&&!t||m("")}})}},75336:(e,l,n)=>{function i(e,l){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const i=e.map((e=>({[e.locale]:""===l[`${n}[${e.locale}]`]?void 0:l[`${n}[${e.locale}]`]})));return Object.assign({},...i)}n.d(l,{Z:()=>i})},64448:(e,l,n)=>{n.r(l),n.d(l,{default:()=>p});var i=n(47313),t=n(97890),a=n(23560),o=n(10976),d=n(2717),r=n(90954),s=n(24511),u=n(75336),c=n(13719),v=n(94777),h=n(69766),m=n(46417);const p=()=>{const{t:e}=(0,s.$)(),{activeMenu:l}=(0,d.v9)((e=>e.menu),d.wU),{myShop:n}=(0,d.v9)((e=>e.myShop),d.wU),p=(0,d.I0)(),[g]=o.Z.useForm(),f=(0,t.s0)(),{languages:y}=(0,d.v9)((e=>e.formLang),d.wU);(0,i.useEffect)((()=>()=>{const e=g.getFieldsValue(!0);p((0,r.nc)({activeMenu:l,data:e}))}),[]);return(0,m.jsx)(h.Z,{form:g,handleSubmit:i=>{const{area:t,city:o,country:s,region:h,price:m,fitting_rooms:g,active:j}=i,x={price:m,fitting_rooms:g,active:Number(j),area_id:null===t||void 0===t?void 0:t.value,city_id:null===o||void 0===o?void 0:o.value,country_id:null===s||void 0===s?void 0:s.value,region_id:null===h||void 0===h?void 0:h.value,address:(0,u.Z)(y,i,"address"),shop_id:null===n||void 0===n?void 0:n.id},b="seller/delivery-price";return c.Z.create(x).then((()=>{a.Am.success(e("successfully.created")),(0,d.dC)((()=>{p((0,r.ph)({...l,nextUrl:b})),p((0,v.rf)({}))})),f(`/${b}`)}))}})}},69766:(e,l,n)=>{n.d(l,{Z:()=>Z});var i=n(47313),t=n(2717),a=n(97890),o=n(24511),d=n(10976),r=n(68197),s=n(59624),u=n(77181),c=n(16124),v=n(59491),h=n(13622),m=n(27453),p=n(47139),g=n(79637),f=n(27443),y=n(90954),j=n(13719),x=n(51282),b=n(46417);function Z(e){let{form:l,handleSubmit:n}=e;const{t:Z}=(0,o.$)(),w=(0,t.I0)(),{id:F}=(0,a.UO)(),{activeMenu:$}=(0,t.v9)((e=>e.menu),t.wU),{languages:_,defaultLang:S}=(0,t.v9)((e=>e.formLang),t.wU),{defaultCurrency:k}=(0,t.v9)((e=>e.currency),t.wU),[q,C]=(0,i.useState)(!1),[I,O]=(0,i.useState)(!1),[R,U]=(0,i.useState)({}),{country:N,region:M,city:V}=R;function z(e){if(null===e||void 0===e||!e.translations)return{};const{translations:l}=e,n=_.map((e=>{var n,i;return{[`title[${e.locale}]`]:null===(n=l.find((l=>l.locale===e.locale)))||void 0===n?void 0:n.title,[`address[${e.locale}]`]:null===(i=l.find((l=>l.locale===e.locale)))||void 0===i?void 0:i.address}}));return Object.assign({},...n)}(0,i.useEffect)((()=>()=>{const e=l.getFieldsValue(!0);w((0,y.nc)({activeMenu:$,data:e}))}),[]),(0,i.useEffect)((()=>{$.refetch&&F&&B(F)}),[$.refetch]);const B=()=>{C(!0),j.Z.getById(F).then((e=>{var n,i,t,a,o,d,r,s,u;let{data:c}=e;const{city:v,country:h,region:m,area:p,...g}=c,f=`address[${S}]`,y={area:{label:null===p||void 0===p||null===(n=p.translation)||void 0===n?void 0:n.title,value:null===p||void 0===p?void 0:p.id},city:{label:null===v||void 0===v||null===(i=v.translation)||void 0===i?void 0:i.title,value:null===v||void 0===v?void 0:v.id},country:{label:null===h||void 0===h||null===(t=h.translation)||void 0===t?void 0:t.title,value:null===h||void 0===h?void 0:h.id},region:{label:null===m||void 0===m||null===(a=m.translation)||void 0===a?void 0:a.title,value:null===m||void 0===m?void 0:m.id}},j={...z(c),...y,...g,[f]:null===(o=c.address)||void 0===o?void 0:o[S],shop_id:{label:null===c||void 0===c||null===(d=c.shop)||void 0===d||null===(r=d.translation)||void 0===r?void 0:r.title,value:null===c||void 0===c||null===(s=c.shop)||void 0===s?void 0:s.id,key:null===c||void 0===c||null===(u=c.shop)||void 0===u?void 0:u.id}};l.setFieldsValue(j),U(y)})).catch((e=>{console.error(e)})).finally((()=>{C(!1),w((0,y.A_)($))}))};return q?(0,b.jsx)(x.Z,{}):(0,b.jsxs)(d.Z,{form:l,name:Z(F?"edit.delivery.price":"add.delivery.price"),layout:"vertical",initialValues:{clickable:!0,...$.data},onFinish:e=>{O(!0),n(e).finally((()=>O(!1)))},children:[(0,b.jsxs)(r.Z,{gutter:[24,24],children:[(0,b.jsx)(s.Z,{span:12,children:(0,b.jsxs)(u.Z,{title:Z("deliveryzone"),className:"h-100",children:[(0,b.jsx)(s.Z,{span:24,children:(0,b.jsx)(d.Z.Item,{label:Z("region"),name:"region",rules:[{required:!0,message:Z("required")}],children:(0,b.jsx)(h.R,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10};return m.Z.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,b.jsx)(b.Fragment,{children:e}),refetch:!0,onChange:e=>{U((l=>({...l,region:e}))),l.resetFields(["city","area","country"])}})})}),(0,b.jsx)(s.Z,{span:24,children:(0,b.jsx)(d.Z.Item,{label:Z("country"),name:"country",rules:[{required:!0,message:Z("required")}],children:(0,b.jsx)(h.R,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,region_id:null===M||void 0===M?void 0:M.value};return p.Z.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,b.jsx)(b.Fragment,{children:e}),refetch:!0,onChange:e=>{U((l=>({...l,country:e}))),l.resetFields(["city","area"])},disabled:!Boolean(null===M||void 0===M?void 0:M.value)})})}),(0,b.jsx)(s.Z,{span:24,children:(0,b.jsx)(d.Z.Item,{label:Z("city"),name:"city",rules:[{required:!1,message:Z("required")}],children:(0,b.jsx)(h.R,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,country_id:null===N||void 0===N?void 0:N.value};return g.Z.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,b.jsx)(b.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===N||void 0===N?void 0:N.value),onChange:e=>{U((l=>({...l,city:e}))),l.resetFields(["area"])}})})}),(0,b.jsx)(s.Z,{span:24,children:(0,b.jsx)(d.Z.Item,{label:Z("area"),name:"area",rules:[{required:!1,message:Z("required")}],children:(0,b.jsx)(h.R,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,city_id:null===V||void 0===V?void 0:V.value};return f.Z.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,b.jsx)(b.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===V||void 0===V?void 0:V.value)})})})]})}),(0,b.jsx)(s.Z,{span:12,children:(0,b.jsx)(u.Z,{title:Z("pricing"),className:"h-100",children:(0,b.jsx)(s.Z,{span:24,children:(0,b.jsx)(d.Z.Item,{label:`${Z("price")} (${null===k||void 0===k?void 0:k.symbol})`,name:"price",rules:[{required:!0,message:Z("required")}],children:(0,b.jsx)(c.Z,{className:"w-100"})})})})})]}),(0,b.jsx)("br",{}),(0,b.jsx)("div",{className:"flex-grow-1 d-flex justify-content-end",children:(0,b.jsx)("div",{className:"pb-5",children:(0,b.jsx)(v.Z,{type:"primary",htmlType:"submit",loading:I,children:Z("submit")})})})]})}}}]);