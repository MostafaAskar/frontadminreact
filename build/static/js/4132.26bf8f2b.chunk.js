(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4132],{75049:(e,s,a)=>{"use strict";a.d(s,{Z:()=>o});var l=a(10976),t=(a(47313),a(47168)),n=a(24511),r=a(2717),i=a(97421),d=a(46417);function o(e){let{setLocation:s,form:a,item:o,idx:u,defaultLang:c}=e;const{t:m}=(0,n.$)(),{google_map_key:p}=(0,r.v9)((e=>e.globalSettings.settings),r.wU),{ref:h}=(0,t.usePlacesWidget)({apiKey:p||i.kr,onPlaceSelected:e=>{const l={lat:null===e||void 0===e?void 0:e.geometry.location.lat(),lng:null===e||void 0===e?void 0:e.geometry.location.lng()};s(l),a.setFieldsValue({[`address[${c}]`]:null===e||void 0===e?void 0:e.formatted_address})}});return(0,d.jsx)(l.Z.Item,{label:m("address"),name:`address[${null===o||void 0===o?void 0:o.locale}]`,rules:[{required:(null===o||void 0===o?void 0:o.locale)===c,message:m("required")}],hidden:(null===o||void 0===o?void 0:o.locale)!==c,children:(0,d.jsx)("input",{className:"address-input",ref:h,placeholder:""})},"address"+u)}},33834:(e,s,a)=>{"use strict";a.d(s,{K:()=>r});var l=a(97890),t=a(74776),n=a.n(t);const r=()=>{const e=(0,l.s0)(),s=(0,l.TH)(),a=n().parse(s.search,{ignoreQueryPrefix:!0});return{values:a,set:(s,l)=>e({search:n().stringify({...a,[s]:l})}),reset:s=>{const l={...a};l[s]&&delete l[s],e({search:n().stringify({...l})})},clear:()=>e({search:n().stringify({})}),merge:s=>e({search:n().stringify({...a,...s})})}}},80812:(e,s,a)=>{"use strict";a.d(s,{Z:()=>A});var l=a(47313),t=a(10976),n=a(45705),r=a(59491),i=a(97890),d=a(68197),o=a(59624),u=a(77181),c=a(66672),m=a(86345),p=a(16124),h=a(46155),g=a(74294),v=a(52421),x=a(49986),Z=a(2717),j=a(24511),f=a(30763),y=a(97388),_=a(75049),w=a(5764),b=a(98447),q=a(74551),I=a(45005),S=a(13622),k=a(61197),L=a(46417);const F=e=>{let{logoImage:s,setLogoImage:a,backImage:n,setBackImage:i,form:F,location:O,setLocation:P,user:N}=e;const{t:A}=(0,j.$)(),[C,E]=(0,l.useState)(null),[M,B]=(0,l.useState)(null),[T,U]=(0,l.useState)(null),{defaultLang:$,languages:R}=(0,Z.v9)((e=>e.formLang),Z.wU);const G=()=>{E(!0),U(!0)},H=()=>{B(!0),U(!0)},V=()=>{E(!1),B(!1)};return(0,L.jsxs)(d.Z,{gutter:12,children:[(0,L.jsx)(o.Z,{span:24,children:(0,L.jsx)(u.Z,{children:(0,L.jsxs)(d.Z,{gutter:12,children:[(0,L.jsx)(o.Z,{span:4,children:(0,L.jsx)(t.Z.Item,{label:A("logo.image"),children:(0,L.jsx)(w.Z,{type:"shops/logo",imageList:s,setImageList:a,form:F,multiple:!1,name:"logo_img"})})}),(0,L.jsx)(o.Z,{span:4,children:(0,L.jsx)(t.Z.Item,{label:A("background.image"),children:(0,L.jsx)(w.Z,{type:"shops/background",imageList:n,setImageList:i,form:F,multiple:!1,name:"background_img"})})}),(0,L.jsx)(o.Z,{span:10,children:(0,L.jsx)(t.Z.Item,{label:A("status.note"),name:"status_note",children:(0,L.jsx)(v.Z,{rows:4})})}),(0,L.jsx)(o.Z,{span:4,children:(0,L.jsx)(t.Z.Item,{name:"status",label:A("status"),children:(0,L.jsx)(c.Z,{disabled:!0})})}),(0,L.jsx)(o.Z,{span:2,children:(0,L.jsx)(t.Z.Item,{label:A("open"),name:"open",valuePropName:"checked",children:(0,L.jsx)(m.Z,{disabled:!0})})})]})})}),(0,L.jsx)(o.Z,{span:24,children:(0,L.jsx)(u.Z,{title:A("general"),children:(0,L.jsxs)(d.Z,{gutter:12,children:[(0,L.jsx)(o.Z,{span:12,children:(0,L.jsxs)(d.Z,{gutter:12,children:[(0,L.jsx)(o.Z,{span:24,children:R.map(((e,s)=>(0,L.jsx)(t.Z.Item,{label:A("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===$,message:A("required")},{min:2,message:A("title.required")}],hidden:e.locale!==$,children:(0,L.jsx)(c.Z,{})},"title"+s)))}),(0,L.jsx)(o.Z,{span:24,children:(0,L.jsx)(t.Z.Item,{label:A("phone"),name:"phone",rules:[{required:!0,message:A("required")}],children:(0,L.jsx)(p.Z,{min:0,className:"w-100"})})})]})}),(0,L.jsx)(o.Z,{span:12,children:R.map(((e,s)=>(0,L.jsx)(t.Z.Item,{label:A("description"),name:`description[${e.locale}]`,rules:[{required:e.locale===$,message:A("required")},{min:3,message:A("required")}],hidden:e.locale!==$,children:(0,L.jsx)(v.Z,{rows:4})},"desc"+s)))}),(0,L.jsx)(o.Z,{span:8,children:(0,L.jsx)(t.Z.Item,{label:A("restaurant.tags"),name:"tags",rules:[{required:!1,message:A("required")}],children:(0,L.jsx)(S.R,{mode:"multiple",fetchOptions:async function(e){U(!1);const s={search:e};return k.Z.getAll(s).then((e=>{let{data:s}=e;return s.map((e=>{var s;return{label:(null===(s=e.translation)||void 0===s?void 0:s.title)||"no name",value:e.id}}))}))},refetch:T})})}),(0,L.jsx)(o.Z,{span:8,children:(0,L.jsx)(t.Z.Item,{label:A("seller"),name:"user",rules:[{required:!0,message:A("required")}],children:(0,L.jsx)(S.R,{disabled:N,fetchOptions:async function(e){const s={search:e,roles:"user","empty-shop":1};return U(!1),x.Z.search(s).then((e=>e.data.map((e=>({label:e.firstname+" "+(e.lastname?e.lastname:""),value:e.id})))))},refetch:T,dropdownRender:e=>(0,L.jsxs)(L.Fragment,{children:[e,(0,L.jsx)(h.Z,{style:{margin:"8px 0"}}),(0,L.jsx)(r.Z,{className:"w-100",disabled:N,icon:(0,L.jsx)(b.Z,{}),onClick:G,children:A("add.user")})]})})})}),(0,L.jsx)(o.Z,{span:8,children:(0,L.jsx)(t.Z.Item,{label:A("categories"),name:"categories",rules:[{required:!0,message:A("required")}],children:(0,L.jsx)(S.R,{mode:"multiple",fetchOptions:async function(e){const s={search:e,type:"shop"};return U(!1),f.Z.getAll(s).then((e=>{let{data:s}=e;return s.map((e=>{var s;return{label:(null===(s=e.translation)||void 0===s?void 0:s.title)||"no name",value:e.id}}))}))},refetch:T,dropdownRender:e=>(0,L.jsxs)(L.Fragment,{children:[e,(0,L.jsx)(h.Z,{style:{margin:"8px 0"}}),(0,L.jsx)(r.Z,{className:"w-100",icon:(0,L.jsx)(b.Z,{}),onClick:H,children:A("add.category")})]})})})})]})})}),(0,L.jsx)(o.Z,{span:8,children:(0,L.jsx)(u.Z,{title:A("delivery"),children:(0,L.jsxs)(d.Z,{gutter:8,children:[(0,L.jsx)(o.Z,{span:12,children:(0,L.jsx)(t.Z.Item,{name:"price",label:A("min.price"),rules:[{required:!0,message:A("required")}],children:(0,L.jsx)(p.Z,{className:"w-100"})})}),(0,L.jsx)(o.Z,{span:12,children:(0,L.jsx)(t.Z.Item,{name:"price_per_km",label:A("price.per.km"),rules:[{required:!0,message:A("required")}],children:(0,L.jsx)(p.Z,{className:"w-100"})})})]})})}),(0,L.jsx)(o.Z,{span:8,children:(0,L.jsx)(u.Z,{title:A("delivery.time"),children:(0,L.jsxs)(d.Z,{gutter:12,children:[(0,L.jsx)(o.Z,{span:12,children:(0,L.jsx)(t.Z.Item,{name:"delivery_time_type",label:A("delivery_time_type"),rules:[{required:!0,message:A("required")}],children:(0,L.jsxs)(g.Z,{className:"w-100",children:[(0,L.jsx)(g.Z.Option,{value:"minute",label:A("minutes")}),(0,L.jsx)(g.Z.Option,{value:"hour",label:A("hour")})]})})}),(0,L.jsx)(o.Z,{span:12,children:(0,L.jsx)(t.Z.Item,{name:"delivery_time_from",label:A("delivery_time_from"),rules:[{required:!0,message:A("required")}],children:(0,L.jsx)(p.Z,{className:"w-100"})})}),(0,L.jsx)(o.Z,{span:12,children:(0,L.jsx)(t.Z.Item,{name:"delivery_time_to",label:A("delivery_time_to"),rules:[{required:!0,message:A("required")}],children:(0,L.jsx)(p.Z,{className:"w-100"})})})]})})}),(0,L.jsx)(o.Z,{span:8,children:(0,L.jsx)(u.Z,{title:A("order.info"),children:(0,L.jsxs)(d.Z,{gutter:12,children:[(0,L.jsx)(o.Z,{span:12,children:(0,L.jsx)(t.Z.Item,{label:A("min.amount"),name:"min_amount",rules:[{required:!0,message:A("required")}],children:(0,L.jsx)(p.Z,{min:0,className:"w-100"})})}),(0,L.jsx)(o.Z,{span:12,children:(0,L.jsx)(t.Z.Item,{label:A("tax"),name:"tax",rules:[{required:!0,message:A("required")}],children:(0,L.jsx)(p.Z,{min:0,addonAfter:"%",className:"w-100"})})}),(0,L.jsx)(o.Z,{span:12,children:(0,L.jsx)(t.Z.Item,{label:A("admin.comission"),name:"percentage",rules:[{required:!0,message:A("required")}],children:(0,L.jsx)(p.Z,{min:0,className:"w-100",addonAfter:"%"})})})]})})}),(0,L.jsx)(o.Z,{span:24,children:(0,L.jsx)(u.Z,{title:A("address"),children:(0,L.jsxs)(d.Z,{gutter:12,children:[(0,L.jsx)(o.Z,{span:12,children:R.map(((e,s)=>(0,L.jsx)(_.Z,{setLocation:P,form:F,item:e,idx:s,defaultLang:$},s)))}),(0,L.jsx)(o.Z,{span:24,children:(0,L.jsx)(y.Z,{location:O,setLocation:P,setAddress:e=>F.setFieldsValue({[`address[${$}]`]:e})})})]})})}),C&&(0,L.jsx)(q.Z,{visible:C,handleCancel:()=>V()}),M&&(0,L.jsx)(I.Z,{visible:M,handleCancel:()=>V()})]})};var O=a(90954),P=a(53149),N=a(17649);const A=e=>{var s,a,d,o,u,c,m,p,h;let{next:g,action_type:v="",user:x}=e;const{t:f}=(0,j.$)(),[y]=t.Z.useForm(),_=(0,i.s0)(),w=(0,Z.I0)(),{uuid:b}=(0,i.UO)(),{activeMenu:q}=(0,Z.v9)((e=>e.menu),Z.wU),[I,S]=(0,l.useState)(!1),[k,A]=(0,l.useState)(null!==(s=q.data)&&void 0!==s&&s.logo_img?[null===(a=q.data)||void 0===a?void 0:a.logo_img]:[]),[C,E]=(0,l.useState)(null!==(d=q.data)&&void 0!==d&&d.background_img?[null===(o=q.data)||void 0===o?void 0:o.background_img]:[]),{settings:M}=(0,Z.v9)((e=>e.globalSettings),Z.wU),[B,T]=(0,l.useState)(null!==q&&void 0!==q&&null!==(u=q.data)&&void 0!==u&&u.location?{lat:parseFloat(null===q||void 0===q||null===(c=q.data)||void 0===c||null===(m=c.location)||void 0===m?void 0:m.latitude),lng:parseFloat(null===q||void 0===q||null===(p=q.data)||void 0===p||null===(h=p.location)||void 0===h?void 0:h.longitude)}:(0,N.Z)(M));(0,l.useEffect)((()=>()=>{const e=y.getFieldsValue(!0);e.open_time=JSON.stringify(null===e||void 0===e?void 0:e.open_time),e.close_time=JSON.stringify(null===e||void 0===e?void 0:e.close_time),w((0,O.nc)({activeMenu:q,data:{...q.data,...e}}))}),[]);return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(t.Z,{form:y,name:"basic",layout:"vertical",onFinish:e=>{var s,a,l;S(!0);const t={...e,"images[0]":null===(s=k[0])||void 0===s?void 0:s.name,"images[1]":null===(a=C[0])||void 0===a?void 0:a.name,delivery_time_type:e.delivery_time_type,delivery_time_to:e.delivery_time_to,delivery_time_from:e.delivery_time_from,categories:e.categories.map((e=>e.value)),tags:null===e||void 0===e||null===(l=e.tags)||void 0===l?void 0:l.map((e=>e.value)),user_id:e.user.value,open:void 0,"location[latitude]":B.lat,"location[longitude]":B.lng,user:void 0,delivery_time:0,type:"restaurant"};"edit"===v?function(e,s){P.Z.update(b,s).then((()=>{w((0,O.nc)({activeMenu:q,data:e})),g()})).catch((e=>console.error(e))).finally((()=>S(!1)))}(e,t):function(e,s){P.Z.create(s).then((s=>{let{data:a}=s;w((0,O.SS)({id:`restaurant-${a.uuid}`,url:`restaurant/${a.uuid}`,name:f("add.restaurant"),data:{...a,background_img:{name:null===a||void 0===a?void 0:a.background_img},logo_img:{name:null===a||void 0===a?void 0:a.logo_img},...e},refetch:!1})),_(`/restaurant/${a.uuid}?step=1`)})).catch((e=>console.error(e))).finally((()=>S(!1)))}(e,t)},initialValues:{open:!1,status:"new",...q.data},children:[(0,L.jsx)(F,{logoImage:k,setLogoImage:A,backImage:C,setBackImage:E,form:y,location:B,setLocation:T,user:x}),(0,L.jsx)(n.Z,{children:(0,L.jsx)(r.Z,{type:"primary",htmlType:"submit",loading:I,children:f("next")})})]})})}},48662:(e,s,a)=>{"use strict";a.d(s,{Z:()=>h});var l=a(10976),t=a(47313),n=a(51282),r=a(70816),i=a.n(r),d=a(78790),o=a(49682),u=a(97890),c=a(21429),m=a(22899),p=a(46417);const h=e=>{let{next:s,prev:a}=e;const[r]=l.Z.useForm(),[h,g]=(0,t.useState)([]),[v,x]=(0,t.useState)(new Array(7).fill(!1)),[Z,j]=(0,t.useState)(!1),[f,y]=(0,t.useState)(!1),{uuid:_}=(0,u.UO)();return(0,t.useEffect)((()=>{r.setFieldsValue({working_days:c.P}),_&&(y(!0),o.Z.getById(_).then((e=>{g(e.data.closed_dates.filter((e=>e.day>i()(new Date).format("YYYY-MM-DD"))).map((e=>new Date(e.day))))})),d.Z.getById(_).then((e=>{x(0!==e.data.dates.length?e.data.dates.map((e=>e.disabled)):[]),0!==e.data.dates.length&&r.setFieldsValue({working_days:e.data.dates.map((e=>({title:e.day,from:i()(e.from,"HH:mm:ss"),to:i()(e.to,"HH:mm:ss"),disabled:Boolean(e.disabled)})))})})).finally((()=>y(!1))))}),[]),(0,p.jsx)(p.Fragment,{children:f?(0,p.jsx)(n.Z,{}):(0,p.jsx)(m.Z,{onFinish:e=>{j(!0);const a={dates:h?h.map((e=>i()(e).format("YYYY-MM-DD"))):void 0},l={dates:e.working_days.map((e=>({day:e.title,from:i()(e.from?e.from:"00").format("HH-mm"),to:i()(e.to?e.to:"00").format("HH-mm"),disabled:e.disabled})))};o.Z.update(_,a).then((()=>{s()})).finally((()=>j(!1))),0!==e.working_days.length&&d.Z.update(_,l).then((()=>{s()})).finally((()=>j(!1)))},prev:a,form:r,lines:v,loadingBtn:Z,days:h,setDays:g,setLines:x,weeks:c.P})})}},28780:(e,s,a)=>{"use strict";a.d(s,{S:()=>l});const l=[{title:"restaurant",content:"First-content"},{title:"map",content:"Second-content"},{title:"delivery",content:"Third-content"},{title:"user",content:"Four-content"}]},2977:(e,s,a)=>{"use strict";a.d(s,{Z:()=>_});var l=a(47313),t=a(10976),n=a(68197),r=a(59624),i=a(66672),d=a(16124),o=a(45705),u=a(59491),c=a(97890),m=a(2717),p=a(49986),h=a(23560),g=a(90954),v=a(70816),x=a.n(v),Z=a(24511),j=a(51282),f=a(79492),y=a(46417);function _(e){var s;let{prev:a}=e;const{isDemo:v}=(0,f.Z)(),{t:_}=(0,Z.$)(),{activeMenu:w}=(0,m.v9)((e=>e.menu),m.wU),b=(0,m.I0)(),q=(0,c.s0)(),[I,S]=(0,l.useState)(null),[k,L]=(0,l.useState)(!1),[F,O]=(0,l.useState)(!1),[P]=t.Z.useForm();console.log(v);return(0,l.useEffect)((()=>{var e,s,a;null!==w&&void 0!==w&&w.data&&(a=null===w||void 0===w||null===(e=w.data)||void 0===e||null===(s=e.seller)||void 0===s?void 0:s.uuid,O(!0),p.Z.getById(a).then((e=>{const s=e.data;P.setFieldsValue({firstname:s.firstname,lastname:s.lastname,email:s.email,phone:s.phone,password_confirmation:s.password_confirmation,password:s.password})})).finally((()=>O(!1))))}),[]),(0,y.jsx)(y.Fragment,{children:F?(0,y.jsx)(j.Z,{}):(0,y.jsx)(t.Z,{form:P,layout:"vertical",initialValues:{gender:"male",role:"admin",...w.data,birthday:null!==(s=w.data)&&void 0!==s&&s.birthday?x()(w.data.birthday):null},onFinish:e=>{var s,a;L(!0);const l={firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,password_confirmation:e.password_confirmation,password:e.password},t="restaurants";p.Z.update(null===w||void 0===w||null===(s=w.data)||void 0===s||null===(a=s.seller)||void 0===a?void 0:a.uuid,l).then((()=>{h.Am.success(_("successfully.updated")),q(`/${t}`),b((0,g.ph)({...w,nextUrl:t}))})).catch((e=>S(e.response.data.params))).finally((()=>L(!1)))},className:"py-4",children:(0,y.jsxs)(n.Z,{gutter:12,children:[(0,y.jsx)(r.Z,{span:12,children:(0,y.jsx)(t.Z.Item,{label:_("firstname"),name:"firstname",help:null!==I&&void 0!==I&&I.firstname?I.firstname[0]:null,validateStatus:null!==I&&void 0!==I&&I.firstname?"error":"success",rules:[{required:!1,message:_("required")}],children:(0,y.jsx)(i.Z,{className:"w-100"})})}),(0,y.jsx)(r.Z,{span:12,children:(0,y.jsx)(t.Z.Item,{label:_("lastname"),name:"lastname",help:null!==I&&void 0!==I&&I.lastname?I.lastname[0]:null,validateStatus:null!==I&&void 0!==I&&I.lastname?"error":"success",rules:[{required:!1,message:_("required")}],children:(0,y.jsx)(i.Z,{className:"w-100"})})}),v||(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r.Z,{span:12,children:(0,y.jsx)(t.Z.Item,{label:_("phone"),name:"phone",help:null!==I&&void 0!==I&&I.phone?I.phone[0]:null,validateStatus:null!==I&&void 0!==I&&I.phone?"error":"success",rules:[{required:!1,message:_("required")}],children:(0,y.jsx)(d.Z,{min:0,className:"w-100"})})}),(0,y.jsx)(r.Z,{span:12,children:(0,y.jsx)(t.Z.Item,{label:_("email"),name:"email",help:null!==I&&void 0!==I&&I.email?I.email[0]:null,validateStatus:null!==I&&void 0!==I&&I.email?"error":"success",rules:[{required:!0,message:_("required")}],children:(0,y.jsx)(i.Z,{type:"email",className:"w-100"})})}),(0,y.jsx)(r.Z,{span:12,children:(0,y.jsx)(t.Z.Item,{label:_("password"),name:"password",help:null!==I&&void 0!==I&&I.password?I.password[0]:null,validateStatus:null!==I&&void 0!==I&&I.password?"error":"success",rules:[{required:!1,message:_("required")}],children:(0,y.jsx)(i.Z.Password,{type:"password",className:"w-100",autoComplete:"off"})})}),(0,y.jsx)(r.Z,{span:12,children:(0,y.jsx)(t.Z.Item,{label:_("password.confirmation"),help:null!==I&&void 0!==I&&I.password_confirmation?I.password_confirmation[0]:null,validateStatus:null!==I&&void 0!==I&&I.password_confirmation?"error":"success",name:"password_confirmation",dependencies:["password"],hasFeedback:!0,rules:[{required:!1,message:_("required")},e=>{let{getFieldValue:s}=e;return{validator:(e,a)=>a&&s("password")!==a?Promise.reject(_("passwords.do.not.match")):Promise.resolve()}}],children:(0,y.jsx)(i.Z.Password,{type:"password",className:"w-100",autoComplete:"off"})})})]}),(0,y.jsx)(r.Z,{span:24,children:(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(u.Z,{type:"primary",htmlType:"submit",loading:k,children:_("save")}),(0,y.jsx)(u.Z,{htmlType:"submit",onClick:()=>a(),children:_("prev")})]})})]})})})}},56236:(e,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.GOOGLE_MAP_SCRIPT_BASE_URL=void 0;s.GOOGLE_MAP_SCRIPT_BASE_URL="https://maps.googleapis.com/maps/api/js"},39003:(e,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.loadGoogleMapScript=s.isBrowser=void 0;var a="undefined"!==typeof window&&window.document;s.isBrowser=a;s.loadGoogleMapScript=function(e,s){if(!a)return Promise.resolve();if("undefined"!==typeof google&&google.maps&&google.maps.api)return Promise.resolve();var l=document.querySelectorAll('script[src*="'.concat(e,'"]'));if(l&&l.length)return new Promise((function(e){if("undefined"!==typeof google)return e();l[0].addEventListener("load",(function(){return e()}))}));var t=new URL(s);t.searchParams.set("callback","__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__");var n=document.createElement("script");return n.src=t.toString(),new Promise((function(e){window.__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__=e,document.body.appendChild(n)}))}},24654:()=>{}}]);