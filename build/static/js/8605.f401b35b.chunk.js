"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8605],{75049:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(10976),n=(s(47313),s(47168)),l=s(24511),i=s(2717),r=s(97421),d=s(46417);function o(e){let{setLocation:t,form:s,item:o,idx:c,defaultLang:u}=e;const{t:m}=(0,l.$)(),{google_map_key:g}=(0,i.v9)((e=>e.globalSettings.settings),i.wU),{ref:p}=(0,n.usePlacesWidget)({apiKey:g||r.kr,onPlaceSelected:e=>{const a={lat:null===e||void 0===e?void 0:e.geometry.location.lat(),lng:null===e||void 0===e?void 0:e.geometry.location.lng()};t(a),s.setFieldsValue({[`address[${u}]`]:null===e||void 0===e?void 0:e.formatted_address})}});return(0,d.jsx)(a.Z.Item,{label:m("address"),name:`address[${null===o||void 0===o?void 0:o.locale}]`,rules:[{required:(null===o||void 0===o?void 0:o.locale)===u,message:m("required")}],hidden:(null===o||void 0===o?void 0:o.locale)!==u,children:(0,d.jsx)("input",{className:"address-input",ref:p,placeholder:""})},"address"+c)}},80812:(e,t,s)=>{s.d(t,{Z:()=>F});var a=s(47313),n=s(10976),l=s(45705),i=s(59491),r=s(97890),d=s(68197),o=s(59624),c=s(77181),u=s(66672),m=s(86345),g=s(16124),p=s(46155),h=s(74294),x=s(52421),Z=s(49986),j=s(2717),v=s(24511),_=s(30763),f=s(97388),y=s(75049),b=s(5764),w=s(98447),I=s(74551),q=s(45005),L=s(13622),S=s(61197),k=s(46417);const O=e=>{let{logoImage:t,setLogoImage:s,backImage:l,setBackImage:r,form:O,location:A,setLocation:P,user:C}=e;const{t:F}=(0,v.$)(),[E,M]=(0,a.useState)(null),[N,B]=(0,a.useState)(null),[R,U]=(0,a.useState)(null),{defaultLang:$,languages:T}=(0,j.v9)((e=>e.formLang),j.wU);const G=()=>{M(!0),U(!0)},H=()=>{B(!0),U(!0)},Y=()=>{M(!1),B(!1)};return(0,k.jsxs)(d.Z,{gutter:12,children:[(0,k.jsx)(o.Z,{span:24,children:(0,k.jsx)(c.Z,{children:(0,k.jsxs)(d.Z,{gutter:12,children:[(0,k.jsx)(o.Z,{span:4,children:(0,k.jsx)(n.Z.Item,{label:F("logo.image"),children:(0,k.jsx)(b.Z,{type:"shops/logo",imageList:t,setImageList:s,form:O,multiple:!1,name:"logo_img"})})}),(0,k.jsx)(o.Z,{span:4,children:(0,k.jsx)(n.Z.Item,{label:F("background.image"),children:(0,k.jsx)(b.Z,{type:"shops/background",imageList:l,setImageList:r,form:O,multiple:!1,name:"background_img"})})}),(0,k.jsx)(o.Z,{span:10,children:(0,k.jsx)(n.Z.Item,{label:F("status.note"),name:"status_note",children:(0,k.jsx)(x.Z,{rows:4})})}),(0,k.jsx)(o.Z,{span:4,children:(0,k.jsx)(n.Z.Item,{name:"status",label:F("status"),children:(0,k.jsx)(u.Z,{disabled:!0})})}),(0,k.jsx)(o.Z,{span:2,children:(0,k.jsx)(n.Z.Item,{label:F("open"),name:"open",valuePropName:"checked",children:(0,k.jsx)(m.Z,{disabled:!0})})})]})})}),(0,k.jsx)(o.Z,{span:24,children:(0,k.jsx)(c.Z,{title:F("general"),children:(0,k.jsxs)(d.Z,{gutter:12,children:[(0,k.jsx)(o.Z,{span:12,children:(0,k.jsxs)(d.Z,{gutter:12,children:[(0,k.jsx)(o.Z,{span:24,children:T.map(((e,t)=>(0,k.jsx)(n.Z.Item,{label:F("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===$,message:F("required")},{min:2,message:F("title.required")}],hidden:e.locale!==$,children:(0,k.jsx)(u.Z,{})},"title"+t)))}),(0,k.jsx)(o.Z,{span:24,children:(0,k.jsx)(n.Z.Item,{label:F("phone"),name:"phone",rules:[{required:!0,message:F("required")}],children:(0,k.jsx)(g.Z,{min:0,className:"w-100"})})})]})}),(0,k.jsx)(o.Z,{span:12,children:T.map(((e,t)=>(0,k.jsx)(n.Z.Item,{label:F("description"),name:`description[${e.locale}]`,rules:[{required:e.locale===$,message:F("required")},{min:3,message:F("required")}],hidden:e.locale!==$,children:(0,k.jsx)(x.Z,{rows:4})},"desc"+t)))}),(0,k.jsx)(o.Z,{span:8,children:(0,k.jsx)(n.Z.Item,{label:F("restaurant.tags"),name:"tags",rules:[{required:!1,message:F("required")}],children:(0,k.jsx)(L.R,{mode:"multiple",fetchOptions:async function(e){U(!1);const t={search:e};return S.Z.getAll(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:(null===(t=e.translation)||void 0===t?void 0:t.title)||"no name",value:e.id}}))}))},refetch:R})})}),(0,k.jsx)(o.Z,{span:8,children:(0,k.jsx)(n.Z.Item,{label:F("seller"),name:"user",rules:[{required:!0,message:F("required")}],children:(0,k.jsx)(L.R,{disabled:C,fetchOptions:async function(e){const t={search:e,roles:"user","empty-shop":1};return U(!1),Z.Z.search(t).then((e=>e.data.map((e=>({label:e.firstname+" "+(e.lastname?e.lastname:""),value:e.id})))))},refetch:R,dropdownRender:e=>(0,k.jsxs)(k.Fragment,{children:[e,(0,k.jsx)(p.Z,{style:{margin:"8px 0"}}),(0,k.jsx)(i.Z,{className:"w-100",disabled:C,icon:(0,k.jsx)(w.Z,{}),onClick:G,children:F("add.user")})]})})})}),(0,k.jsx)(o.Z,{span:8,children:(0,k.jsx)(n.Z.Item,{label:F("categories"),name:"categories",rules:[{required:!0,message:F("required")}],children:(0,k.jsx)(L.R,{mode:"multiple",fetchOptions:async function(e){const t={search:e,type:"shop"};return U(!1),_.Z.getAll(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:(null===(t=e.translation)||void 0===t?void 0:t.title)||"no name",value:e.id}}))}))},refetch:R,dropdownRender:e=>(0,k.jsxs)(k.Fragment,{children:[e,(0,k.jsx)(p.Z,{style:{margin:"8px 0"}}),(0,k.jsx)(i.Z,{className:"w-100",icon:(0,k.jsx)(w.Z,{}),onClick:H,children:F("add.category")})]})})})})]})})}),(0,k.jsx)(o.Z,{span:8,children:(0,k.jsx)(c.Z,{title:F("delivery"),children:(0,k.jsxs)(d.Z,{gutter:8,children:[(0,k.jsx)(o.Z,{span:12,children:(0,k.jsx)(n.Z.Item,{name:"price",label:F("min.price"),rules:[{required:!0,message:F("required")}],children:(0,k.jsx)(g.Z,{className:"w-100"})})}),(0,k.jsx)(o.Z,{span:12,children:(0,k.jsx)(n.Z.Item,{name:"price_per_km",label:F("price.per.km"),rules:[{required:!0,message:F("required")}],children:(0,k.jsx)(g.Z,{className:"w-100"})})})]})})}),(0,k.jsx)(o.Z,{span:8,children:(0,k.jsx)(c.Z,{title:F("delivery.time"),children:(0,k.jsxs)(d.Z,{gutter:12,children:[(0,k.jsx)(o.Z,{span:12,children:(0,k.jsx)(n.Z.Item,{name:"delivery_time_type",label:F("delivery_time_type"),rules:[{required:!0,message:F("required")}],children:(0,k.jsxs)(h.Z,{className:"w-100",children:[(0,k.jsx)(h.Z.Option,{value:"minute",label:F("minutes")}),(0,k.jsx)(h.Z.Option,{value:"hour",label:F("hour")})]})})}),(0,k.jsx)(o.Z,{span:12,children:(0,k.jsx)(n.Z.Item,{name:"delivery_time_from",label:F("delivery_time_from"),rules:[{required:!0,message:F("required")}],children:(0,k.jsx)(g.Z,{className:"w-100"})})}),(0,k.jsx)(o.Z,{span:12,children:(0,k.jsx)(n.Z.Item,{name:"delivery_time_to",label:F("delivery_time_to"),rules:[{required:!0,message:F("required")}],children:(0,k.jsx)(g.Z,{className:"w-100"})})})]})})}),(0,k.jsx)(o.Z,{span:8,children:(0,k.jsx)(c.Z,{title:F("order.info"),children:(0,k.jsxs)(d.Z,{gutter:12,children:[(0,k.jsx)(o.Z,{span:12,children:(0,k.jsx)(n.Z.Item,{label:F("min.amount"),name:"min_amount",rules:[{required:!0,message:F("required")}],children:(0,k.jsx)(g.Z,{min:0,className:"w-100"})})}),(0,k.jsx)(o.Z,{span:12,children:(0,k.jsx)(n.Z.Item,{label:F("tax"),name:"tax",rules:[{required:!0,message:F("required")}],children:(0,k.jsx)(g.Z,{min:0,addonAfter:"%",className:"w-100"})})}),(0,k.jsx)(o.Z,{span:12,children:(0,k.jsx)(n.Z.Item,{label:F("admin.comission"),name:"percentage",rules:[{required:!0,message:F("required")}],children:(0,k.jsx)(g.Z,{min:0,className:"w-100",addonAfter:"%"})})})]})})}),(0,k.jsx)(o.Z,{span:24,children:(0,k.jsx)(c.Z,{title:F("address"),children:(0,k.jsxs)(d.Z,{gutter:12,children:[(0,k.jsx)(o.Z,{span:12,children:T.map(((e,t)=>(0,k.jsx)(y.Z,{setLocation:P,form:O,item:e,idx:t,defaultLang:$},t)))}),(0,k.jsx)(o.Z,{span:24,children:(0,k.jsx)(f.Z,{location:A,setLocation:P,setAddress:e=>O.setFieldsValue({[`address[${$}]`]:e})})})]})})}),E&&(0,k.jsx)(I.Z,{visible:E,handleCancel:()=>Y()}),N&&(0,k.jsx)(q.Z,{visible:N,handleCancel:()=>Y()})]})};var A=s(90954),P=s(53149),C=s(17649);const F=e=>{var t,s,d,o,c,u,m,g,p;let{next:h,action_type:x="",user:Z}=e;const{t:_}=(0,v.$)(),[f]=n.Z.useForm(),y=(0,r.s0)(),b=(0,j.I0)(),{uuid:w}=(0,r.UO)(),{activeMenu:I}=(0,j.v9)((e=>e.menu),j.wU),[q,L]=(0,a.useState)(!1),[S,F]=(0,a.useState)(null!==(t=I.data)&&void 0!==t&&t.logo_img?[null===(s=I.data)||void 0===s?void 0:s.logo_img]:[]),[E,M]=(0,a.useState)(null!==(d=I.data)&&void 0!==d&&d.background_img?[null===(o=I.data)||void 0===o?void 0:o.background_img]:[]),{settings:N}=(0,j.v9)((e=>e.globalSettings),j.wU),[B,R]=(0,a.useState)(null!==I&&void 0!==I&&null!==(c=I.data)&&void 0!==c&&c.location?{lat:parseFloat(null===I||void 0===I||null===(u=I.data)||void 0===u||null===(m=u.location)||void 0===m?void 0:m.latitude),lng:parseFloat(null===I||void 0===I||null===(g=I.data)||void 0===g||null===(p=g.location)||void 0===p?void 0:p.longitude)}:(0,C.Z)(N));(0,a.useEffect)((()=>()=>{const e=f.getFieldsValue(!0);e.open_time=JSON.stringify(null===e||void 0===e?void 0:e.open_time),e.close_time=JSON.stringify(null===e||void 0===e?void 0:e.close_time),b((0,A.nc)({activeMenu:I,data:{...I.data,...e}}))}),[]);return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(n.Z,{form:f,name:"basic",layout:"vertical",onFinish:e=>{var t,s,a;L(!0);const n={...e,"images[0]":null===(t=S[0])||void 0===t?void 0:t.name,"images[1]":null===(s=E[0])||void 0===s?void 0:s.name,delivery_time_type:e.delivery_time_type,delivery_time_to:e.delivery_time_to,delivery_time_from:e.delivery_time_from,categories:e.categories.map((e=>e.value)),tags:null===e||void 0===e||null===(a=e.tags)||void 0===a?void 0:a.map((e=>e.value)),user_id:e.user.value,open:void 0,"location[latitude]":B.lat,"location[longitude]":B.lng,user:void 0,delivery_time:0,type:"restaurant"};"edit"===x?function(e,t){P.Z.update(w,t).then((()=>{b((0,A.nc)({activeMenu:I,data:e})),h()})).catch((e=>console.error(e))).finally((()=>L(!1)))}(e,n):function(e,t){P.Z.create(t).then((t=>{let{data:s}=t;b((0,A.SS)({id:`restaurant-${s.uuid}`,url:`restaurant/${s.uuid}`,name:_("add.restaurant"),data:{...s,background_img:{name:null===s||void 0===s?void 0:s.background_img},logo_img:{name:null===s||void 0===s?void 0:s.logo_img},...e},refetch:!1})),y(`/restaurant/${s.uuid}?step=1`)})).catch((e=>console.error(e))).finally((()=>L(!1)))}(e,n)},initialValues:{open:!1,status:"new",...I.data},children:[(0,k.jsx)(O,{logoImage:S,setLogoImage:F,backImage:E,setBackImage:M,form:f,location:B,setLocation:R,user:Z}),(0,k.jsx)(l.Z,{children:(0,k.jsx)(i.Z,{type:"primary",htmlType:"submit",loading:q,children:_("next")})})]})})}},49062:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h,steps:()=>p});var a=s(47313),n=s(2717),l=s(73431),i=s(24511),r=s(83999),d=s(77181),o=s(80812),c=s(48662),u=s(47918),m=s(46417);const{Step:g}=r.Z,p=[{title:"restaurant",content:"First-content"},{title:"map",content:"Second-content"},{title:"delivery",content:"Third-content"}],h=()=>{var e;const{t:t}=(0,i.$)(),{activeMenu:s}=(0,n.v9)((e=>e.menu),n.wU),[h,x]=(0,a.useState)((null===(e=s.data)||void 0===e?void 0:e.step)||0),Z=()=>{x(h+1)},j=()=>{x(h-1)};return(0,m.jsxs)(d.Z,{title:t("add.restaurant"),extra:(0,m.jsx)(l.Z,{}),children:[(0,m.jsx)(r.Z,{current:h,children:p.map((e=>(0,m.jsx)(g,{title:t(e.title)},e.title)))}),(0,m.jsxs)("div",{className:"steps-content",children:["First-content"===p[h].content&&(0,m.jsx)(o.Z,{next:Z,user:!1}),"Second-content"===p[h].content&&(0,m.jsx)(u.Z,{next:Z,prev:j}),"Third-content"===p[h].content&&(0,m.jsx)(c.Z,{next:Z,prev:j})]})]})}},48662:(e,t,s)=>{s.d(t,{Z:()=>p});var a=s(10976),n=s(47313),l=s(51282),i=s(70816),r=s.n(i),d=s(78790),o=s(49682),c=s(97890),u=s(21429),m=s(22899),g=s(46417);const p=e=>{let{next:t,prev:s}=e;const[i]=a.Z.useForm(),[p,h]=(0,n.useState)([]),[x,Z]=(0,n.useState)(new Array(7).fill(!1)),[j,v]=(0,n.useState)(!1),[_,f]=(0,n.useState)(!1),{uuid:y}=(0,c.UO)();return(0,n.useEffect)((()=>{i.setFieldsValue({working_days:u.P}),y&&(f(!0),o.Z.getById(y).then((e=>{h(e.data.closed_dates.filter((e=>e.day>r()(new Date).format("YYYY-MM-DD"))).map((e=>new Date(e.day))))})),d.Z.getById(y).then((e=>{Z(0!==e.data.dates.length?e.data.dates.map((e=>e.disabled)):[]),0!==e.data.dates.length&&i.setFieldsValue({working_days:e.data.dates.map((e=>({title:e.day,from:r()(e.from,"HH:mm:ss"),to:r()(e.to,"HH:mm:ss"),disabled:Boolean(e.disabled)})))})})).finally((()=>f(!1))))}),[]),(0,g.jsx)(g.Fragment,{children:_?(0,g.jsx)(l.Z,{}):(0,g.jsx)(m.Z,{onFinish:e=>{v(!0);const s={dates:p?p.map((e=>r()(e).format("YYYY-MM-DD"))):void 0},a={dates:e.working_days.map((e=>({day:e.title,from:r()(e.from?e.from:"00").format("HH-mm"),to:r()(e.to?e.to:"00").format("HH-mm"),disabled:e.disabled})))};o.Z.update(y,s).then((()=>{t()})).finally((()=>v(!1))),0!==e.working_days.length&&d.Z.update(y,a).then((()=>{t()})).finally((()=>v(!1)))},prev:s,form:i,lines:x,loadingBtn:j,days:p,setDays:h,setLines:Z,weeks:u.P})})}},56236:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GOOGLE_MAP_SCRIPT_BASE_URL=void 0;t.GOOGLE_MAP_SCRIPT_BASE_URL="https://maps.googleapis.com/maps/api/js"},39003:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.loadGoogleMapScript=t.isBrowser=void 0;var s="undefined"!==typeof window&&window.document;t.isBrowser=s;t.loadGoogleMapScript=function(e,t){if(!s)return Promise.resolve();if("undefined"!==typeof google&&google.maps&&google.maps.api)return Promise.resolve();var a=document.querySelectorAll('script[src*="'.concat(e,'"]'));if(a&&a.length)return new Promise((function(e){if("undefined"!==typeof google)return e();a[0].addEventListener("load",(function(){return e()}))}));var n=new URL(t);n.searchParams.set("callback","__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__");var l=document.createElement("script");return l.src=n.toString(),new Promise((function(e){window.__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__=e,document.body.appendChild(l)}))}}}]);