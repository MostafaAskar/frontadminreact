"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[861],{55940:(e,t,l)=>{l.d(t,{Z:()=>r});l(47313);var n=l(59491),a=l(47515),s=l(23560),i=l(24511),o=l(79492),c=l(46417);function r(e){let{size:t="",onClick:l,type:r="default",...d}=e;const{t:u}=(0,i.$)(),{isDemo:v}=(0,o.Z)();return(0,c.jsx)(n.Z,{size:t,icon:(0,c.jsx)(a.Z,{}),onClick:e=>{v?s.Am.warning(u("cannot.work.demo")):l(e)},type:r,...d})}},53233:(e,t,l)=>{l.d(t,{Z:()=>m});var n=l(47313),a=l(56140),s=l(67251),i=l(45705),o=l(86345),c=l(78267),r=l(37388),d=l(59491),u=l(99587),v=l(24511),h=l(46417);const{Text:p}=a.Z,m=e=>{let{columns:t=[],setColumns:l,style:a,size:m="",iconOnly:f}=e;const{t:g}=(0,v.$)(),[x,Z]=(0,n.useState)(!1),j=(0,h.jsx)(s.Z,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,h.jsx)(s.Z.Item,{children:(0,h.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:e.title}),(0,h.jsx)(o.Z,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));l(n)}(e),disabled:1===n})]})},e+n)))});return(0,h.jsx)(c.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{Z(e)},visible:x,children:(0,h.jsx)(r.Z,{title:g("change.columns"),children:(0,h.jsx)(d.Z,{style:{...a},size:m,icon:(0,h.jsx)(u.Z,{}),children:f?null:g("Columns")})})})}},73431:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(47313),a=l(39180),s=l(2717),i=l(28830),o=l(60535),c=l(46417);const r=()=>{const e=(0,s.I0)(),{languages:t,defaultLang:l}=(0,s.v9)((e=>e.formLang),s.wU);(0,n.useEffect)((()=>{o.Z.getAllActive().then((t=>{let{data:l}=t;e((0,i.dc)(l)),e((0,i.mh)(l.find((e=>1===e.default)).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.ZP.Group,{value:l,onChange:t=>{let{target:{value:l}}=t;e((0,i.mh)(l))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,c.jsx)(a.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},41481:(e,t,l)=>{l.d(t,{Z:()=>c});var n=l(47313),a=l(66672),s=l(16031),i=l(40765),o=l(46417);function c(e){let{handleChange:t,defaultValue:l,resetSearch:c,...r}=e;const[d,u]=(0,n.useState)(l),v=(0,n.useMemo)((()=>(0,s.debounce)((e=>{t(e)}),800)),[]);return(0,n.useEffect)((()=>{u(l)}),[c]),(0,o.jsx)(a.Z,{value:d,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,o.jsx)(i.Z,{}),...r})}},75336:(e,t,l)=>{function n(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const n=e.map((e=>({[e.locale]:""===t[`${l}[${e.locale}]`]?void 0:t[`${l}[${e.locale}]`]})));return Object.assign({},...n)}l.d(t,{Z:()=>n})},861:(e,t,l)=>{l.r(t),l.d(t,{default:()=>T});var n=l(47313),a=l(45705),s=l(59491),i=l(77181),o=l(78508),c=l(31741),r=l(12019),d=l(47515),u=l(55768),v=l(23560),h=l(24511),p=l(13966),m=l(2717),f=l(70814),g=l(90954),x=l(10976),Z=l(9274),j=l(66672),y=l(73431),C=l(75336),b=l(51282),w=l(46417);function z(e){let{modal:t,handleCancel:l,onSuccess:a}=e;const[i]=x.Z.useForm(),{t:o}=(0,h.$)(),c=(0,m.I0)(),[r,d]=(0,n.useState)(!1),[u,g]=(0,n.useState)(!1),{languages:z,defaultLang:k}=(0,m.v9)((e=>e.formLang),m.wU);(0,n.useEffect)((()=>{var e;null!==t&&void 0!==t&&t.id&&(e=t.id,g(!0),p.Z.getGroupById(e).then((e=>{const t=e.data;i.setFieldsValue({...t,...S(t)})})).finally((()=>g(!1))))}),[t]);function S(e){if(!e)return{};const{translations:t}=e,l=z.map((e=>{var l;return{[`title[${e.locale}]`]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title}}));return Object.assign({},...l)}return(0,w.jsx)(Z.Z,{title:null!==t&&void 0!==t&&t.id?o("edit.property.group"):o("add.property.group"),visible:!!t,onCancel:l,footer:[(0,w.jsx)(s.Z,{type:"primary",onClick:()=>i.submit(),loading:r,children:o("save")},"save-button-group"),(0,w.jsx)(s.Z,{type:"default",onClick:l,children:o("cancel")},"cancel-button-group")],children:u?(0,w.jsx)(b.Z,{}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{className:"d-flex justify-content-end",children:(0,w.jsx)(y.Z,{})}),(0,w.jsx)(x.Z,{layout:"vertical",name:"property-group",form:i,onFinish:e=>{const n={title:(0,C.Z)(z,e),type:"text"};null!==t&&void 0!==t&&t.id?function(e,t){d(!0),p.Z.updateGroup(e,t).then((()=>{v.Am.success(o("successfully.updated")),c((0,f.cT)()),l()})).finally((()=>d(!1)))}(null===t||void 0===t?void 0:t.id,n):function(e){d(!0),p.Z.createGroup(e).then((()=>{v.Am.success(o("successfully.created")),l(),c((0,f.cT)()),a&&a()})).finally((()=>d(!1)))}(n)},children:z.map((e=>(0,w.jsx)(x.Z.Item,{rules:[{required:e.locale===k,message:o("required")}],name:`title[${e.locale}]`,label:o("title"),hidden:e.locale!==k,children:(0,w.jsx)(j.Z,{placeholder:o("title")})},"title"+e.locale)))})]})})}var k=l(55940),S=l(83371),V=l(26824),I=l(97421);function $(e){var t;let{open:l,handleClose:s}=e;const{t:i}=(0,h.$)(),[o,c]=(0,n.useState)({}),[r,d]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{d(!0),p.Z.getGroupById(l).then((e=>{c(e.data)})).finally((()=>d(!1)))}),[]),(0,w.jsx)(Z.Z,{closable:!1,visible:l,footer:null,centered:!0,onCancel:s,children:r?(0,w.jsx)(b.Z,{}):(0,w.jsx)(S.Z,{title:`${i("property.group.value")}`,bordered:!0,children:null===o||void 0===o||null===(t=o.values)||void 0===t?void 0:t.map(((e,t)=>(0,w.jsx)(S.Z.Item,{label:o.translation.title,span:3,children:"text"===o.type?e.value:"image"===o.type?(0,w.jsx)(V.Z,{src:I.bV+e.value,alt:"images",width:100,height:80}):(0,w.jsxs)(a.Z,{children:[(0,w.jsx)("div",{className:"extra-color-wrapper-contain",style:{backgroundColor:e.value}}),e.value]})},t)))})})}var H=l(53233),M=l(69658),A=l(74580),G=l(41481),N=l(80314);function T(){var e,t,l,x,Z;const{t:j}=(0,h.$)(),y=(0,m.I0)(),{setIsModalVisible:C}=(0,n.useContext)(A._),{activeMenu:b}=(0,m.v9)((e=>e.menu),m.wU),{propertyGroups:S,meta:V,loading:I}=(0,m.v9)((e=>e.propertyGroup),m.wU),[T,_]=(0,n.useState)(null),[E,P]=(0,n.useState)(null),[O,B]=(0,n.useState)(null),[F,L]=(0,n.useState)(!1),[U,R]=(0,n.useState)(null),q=b.data,K={search:null===q||void 0===q?void 0:q.search,column:null===q||void 0===q?void 0:q.column,perPage:null===q||void 0===q?void 0:q.perPage,sort:null===q||void 0===q?void 0:q.sort,page:null===q||void 0===q?void 0:q.page},[D,J]=(0,n.useState)([{title:j("id"),dataIndex:"id",key:"id",is_show:!0},{title:j("title"),dataIndex:"translation",key:"translation",is_show:!0,render:e=>null===e||void 0===e?void 0:e.title},{title:j("options"),is_show:!0,render:e=>(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(s.Z,{type:"primary",icon:(0,w.jsx)(c.Z,{}),onClick:()=>P(e.id)}),(0,w.jsx)(s.Z,{type:"primary",icon:(0,w.jsx)(r.Z,{}),onClick:()=>B(e)}),(0,w.jsx)(k.Z,{type:"primary",danger:!0,icon:(0,w.jsx)(d.Z,{}),onClick:()=>{C(!0),_([e.id]),R(!0)}})]})}]),Q=()=>{P(null),B(null)};(0,N.Z)((()=>{y((0,f.cT)(K))}),[b.data]),(0,n.useEffect)((()=>{b.refetch&&(y((0,f.cT)(K)),y((0,g.A_)(b)))}),[b.refetch]);const W={selectedRowKeys:T,onChange:e=>{_(e)}};return(0,w.jsxs)(i.Z,{title:j("property.group"),extra:(0,w.jsxs)(a.Z,{wrap:!0,children:[(0,w.jsx)(s.Z,{type:"primary",icon:(0,w.jsx)(u.Z,{}),onClick:()=>B({}),children:j("add.property")}),(0,w.jsx)(k.Z,{size:"",onClick:()=>{null===T||0===T.length?v.Am.warning(j("select.the.product")):(C(!0),R(!1))},children:j("delete.selected")}),(0,w.jsx)(H.Z,{columns:D,setColumns:J})]}),children:[(0,w.jsx)("div",{className:"d-flex justify-content-between",children:(0,w.jsx)(G.Z,{placeholder:j("search"),handleChange:e=>{return t=e,l="search",void y((0,g.nc)({activeMenu:b,data:{...b.data,[l]:t}}));var t,l},defaultValue:null===(e=b.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(t=b.data)&&void 0!==t&&t.search),className:"w-25"})}),(0,w.jsx)(o.Z,{scroll:{x:!0},rowSelection:W,loading:I,columns:null===D||void 0===D?void 0:D.filter((e=>e.is_show)),dataSource:S,rowKey:e=>e.id,pagination:{pageSize:K.perPage,page:(null===(l=b.data)||void 0===l?void 0:l.page)||1,total:V.total,defaultCurrent:null===(x=b.data)||void 0===x?void 0:x.page,current:null===(Z=b.data)||void 0===Z?void 0:Z.page},onChange:function(e,t,l){const{pageSize:n,current:a}=e,{field:s}=l;y((0,g.nc)({activeMenu:b,data:{...b.data,perPage:n,page:a,column:s}}))}}),O&&(0,w.jsx)(z,{modal:O,handleCancel:Q}),(0,w.jsx)(M.Z,{click:()=>{L(!0);const e={...Object.assign({},...T.map(((e,t)=>({[`ids[${t}]`]:e}))))};p.Z.deleteGroup(e).then((()=>{C(!1),v.Am.success(j("successfully.deleted")),_(null),y((0,f.cT)())})).finally((()=>L(!1)))},text:j(U?"delete":"all.delete"),loading:F,setText:_}),E&&(0,w.jsx)($,{open:E,handleClose:Q})]})}},55768:(e,t,l)=>{l.d(t,{Z:()=>c});var n=l(1413),a=l(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=l(17469),o=function(e,t){return a.createElement(i.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};o.displayName="PlusCircleOutlined";const c=a.forwardRef(o)},99587:(e,t,l)=>{l.d(t,{Z:()=>c});var n=l(1413),a=l(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=l(17469),o=function(e,t){return a.createElement(i.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:s}))};o.displayName="TableOutlined";const c=a.forwardRef(o)}}]);