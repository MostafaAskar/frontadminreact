"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6633],{53233:(e,t,l)=>{l.d(t,{Z:()=>x});var a=l(47313),n=l(56140),s=l(67251),i=l(45705),d=l(86345),r=l(78267),o=l(37388),c=l(59491),u=l(99587),v=l(24511),h=l(46417);const{Text:m}=n.Z,x=e=>{let{columns:t=[],setColumns:l,style:n,size:x="",iconOnly:p}=e;const{t:Z}=(0,v.$)(),[f,g]=(0,a.useState)(!1),j=(0,h.jsx)(s.Z,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,h.jsx)(s.Z.Item,{children:(0,h.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsx)(d.Z,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));l(a)}(e),disabled:1===a})]})},e+a)))});return(0,h.jsx)(r.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{g(e)},visible:f,children:(0,h.jsx)(o.Z,{title:Z("change.columns"),children:(0,h.jsx)(c.Z,{style:{...n},size:x,icon:(0,h.jsx)(u.Z,{}),children:p?null:Z("Columns")})})})}},51988:(e,t,l)=>{l.d(t,{Z:()=>o});l(47313);var a=l(24511),n=l(66188);const s=l.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",i=l.p+"static/media/noresult.ac4af107751f94856a9c.riv",d=l.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var r=l(46417);const o=function(e){let{id:t="noresult",text:l=""}=e;const{t:o}=(0,a.$)(),c={src:{noproductsfound:s,noresult:i,nosell:d}[t],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,n.useRive)(c);return(0,r.jsxs)("div",{className:"animation-canvas",children:[(0,r.jsx)("div",{style:{width:"100%",height:200},children:(0,r.jsx)(u,{})}),(0,r.jsx)("div",{className:"text",children:o(l)})]})}},41481:(e,t,l)=>{l.d(t,{Z:()=>r});var a=l(47313),n=l(66672),s=l(16031),i=l(40765),d=l(46417);function r(e){let{handleChange:t,defaultValue:l,resetSearch:r,...o}=e;const[c,u]=(0,a.useState)(l),v=(0,a.useMemo)((()=>(0,s.debounce)((e=>{t(e)}),800)),[]);return(0,a.useEffect)((()=>{u(l)}),[r]),(0,d.jsx)(n.Z,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,d.jsx)(i.Z,{}),...o})}},89281:(e,t,l)=>{l.d(t,{h:()=>o});var a=l(47313),n=l(12279),s=l.n(n),i=l(74294),d=l(72652),r=l(46417);const o=e=>{let{fetchOptions:t,debounceTimeout:l=400,onClear:n,refetchOptions:o=!1,...c}=e;const[u,v]=(0,a.useState)(!1),[h,m]=(0,a.useState)([]),x=(0,a.useMemo)((()=>s()((e=>{m([]),v(!0),t(e).then((e=>{m(e),v(!1)}))}),l)),[t,l]);return(0,r.jsx)(i.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:x,onClear:()=>{x(""),n&&n()},notFoundContent:u?(0,r.jsx)(d.Z,{size:"small"}):"no results",...c,options:h,onFocus:()=>{h.length&&!o||x("")}})}},13945:(e,t,l)=>{function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}l.d(t,{Z:()=>a})},84017:(e,t,l)=>{function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const a=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===l?`${a} ${t}`:`${t} ${a}`}l.d(t,{Z:()=>a})},94133:(e,t,l)=>{l.r(t),l.d(t,{default:()=>$});var a=l(47313),n=l(66204),s=l(45705),i=l(59491),d=l(37388),r=l(77181),o=l(78508),c=l(97890),u=l(31741),v=l(82138),h=l(15386),m=l(2717),x=l(90954),p=l(74580),Z=l(23560),f=l(24511),g=l(77242),j=l(80314),y=l(13945),b=l(41481),w=l(84017),_=l(53233),C=l(69658),k=l(90046),V=l(75052),z=l(51988),H=l(89281),S=l(34344);const I={getAllRestTables:e=>S.Z.get("rest/booking/tables",{params:e})};var M=l(46417);function $(){var e,t,l,S,$,A;const N=(0,m.I0)(),O=(0,c.s0)(),{t:U}=(0,f.$)(),[T,R]=(0,a.useState)(null),[F,P]=(0,a.useState)(null),{setIsModalVisible:D}=(0,a.useContext)(p._),[E,q]=(0,a.useState)(!1),[B,K]=(0,a.useState)(!1),{defaultCurrency:L}=(0,m.v9)((e=>e.currency),m.wU),[W,G]=(0,a.useState)(null),[J,Q]=(0,a.useState)([{title:U("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:U("table"),dataIndex:"table",key:"table",is_show:!0,render:e=>(0,M.jsx)("div",{children:null===e||void 0===e?void 0:e.name})},{title:U("status"),is_show:!0,dataIndex:"status",key:"status",render:(e,t)=>(0,M.jsx)("div",{children:"new"===e?(0,M.jsx)(n.Z,{color:"blue",children:U(e)}):"canceled"===e?(0,M.jsx)(n.Z,{color:"error",children:U(e)}):(0,M.jsx)(n.Z,{color:"cyan",children:U(e)})})},{title:U("products"),dataIndex:"order_details_count",key:"order_details_count",is_show:!0,render:e=>(0,M.jsxs)("div",{className:"text-lowercase",children:[e||0," ",U("products")]})},{title:U("amount"),dataIndex:"total_price",key:"total_price",is_show:!0,render:e=>(0,w.Z)(e,null===L||void 0===L?void 0:L.symbol)},{title:U("payment.type"),dataIndex:"transaction",key:"transaction",is_show:!0,render:e=>{var t;return U(null===e||void 0===e||null===(t=e.payment_system)||void 0===t?void 0:t.tag)||"-"}},{title:U("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at"},{title:U("options"),key:"options",is_show:!0,render:(e,t)=>(0,M.jsxs)(s.Z,{children:[(0,M.jsx)(i.Z,{icon:(0,M.jsx)(u.Z,{}),onClick:()=>(e=>{N((0,x.bL)({url:`waiter/order/details/${e.id}`,id:"order_details",name:U("order.details")})),O(`/waiter/order/details/${e.id}`)})(t)}),(0,M.jsx)(d.Z,{title:U("assign.to.me"),children:(0,M.jsx)(i.Z,{onClick:()=>(e=>{q(!0),k.Z.attachToMe(e).then((()=>{N((0,g.AU)(ne))})).finally((()=>{q(!1)}))})(t.id),type:"primary",icon:(0,M.jsx)(v.Z,{})})})]})}]),{activeMenu:X}=(0,m.v9)((e=>e.menu),m.wU),{orders:Y,meta:ee,loading:te,params:le}=(0,m.v9)((e=>e.waiterOrder),m.wU),ae=null===X||void 0===X?void 0:X.data,ne={search:null===ae||void 0===ae?void 0:ae.search,sort:null===ae||void 0===ae?void 0:ae.sort,column:null===ae||void 0===ae?void 0:ae.column,perPage:null===ae||void 0===ae?void 0:ae.perPage,page:null===ae||void 0===ae?void 0:ae.page,user_id:null===ae||void 0===ae?void 0:ae.user_id,table_id:null===ae||void 0===ae?void 0:ae.table_id,shop_id:null!==(null===(e=X.data)||void 0===e?void 0:e.shop_id)?null===(t=X.data)||void 0===t?void 0:t.shop_id:null,delivery_type:"dine_in","empty-waiter":1,status:"new"};(0,j.Z)((()=>{N((0,g.AU)(ne))}),[null===X||void 0===X?void 0:X.data]),(0,a.useEffect)((()=>{null!==X&&void 0!==X&&X.refetch&&(N((0,g.AU)(ne)),N((0,x.A_)(X)))}),[null===X||void 0===X?void 0:X.refetch]);const se=(e,t)=>{N((0,x.nc)({activeMenu:X,data:{...ae,[t]:e}}))},ie={selectedRowKeys:T,onChange:e=>{R(e)}};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(r.Z,{children:(0,M.jsxs)(s.Z,{wrap:!0,className:"p-0 mb-0",children:[(0,M.jsx)(b.Z,{placeholder:U("search"),handleChange:e=>se(e,"search"),defaultValue:null===(l=X.data)||void 0===l?void 0:l.search}),(0,M.jsx)(H.h,{placeholder:U("select.table"),fetchOptions:async function(e){const t={search:e,perPage:10};return I.getAllRestTables(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.name,value:e.id})))}))},onSelect:e=>se(e.value,"table_id"),onDeselect:()=>se(null,"table_id"),style:{minWidth:200}}),(0,M.jsx)(i.Z,{icon:(0,M.jsx)(h.Z,{}),onClick:()=>{(0,m.dC)((()=>{N((0,g.H5)()),N((0,x.nc)({activeMenu:X,data:null}))})),N((0,g.AU)({status:"all",page:null===ae||void 0===ae?void 0:ae.page,perPage:10}))},children:U("clear")}),(0,M.jsx)(_.Z,{columns:J,setColumns:Q})]})}),(0,M.jsxs)(r.Z,{children:[(0,M.jsx)(o.Z,{locale:{emptyText:(0,M.jsx)(z.Z,{})},scroll:{x:!0},rowSelection:ie,columns:null===J||void 0===J?void 0:J.filter((e=>e.is_show)),dataSource:Y,loading:te||E,pagination:{pageSize:le.perPage,page:(null===(S=X.data)||void 0===S?void 0:S.page)||1,total:null===ee||void 0===ee?void 0:ee.total,defaultCurrent:null===($=X.data)||void 0===$?void 0:$.page,current:null===(A=X.data)||void 0===A?void 0:A.page},rowKey:e=>e.id,onChange:function(e,t,l){const{pageSize:a,current:n}=e,{field:s,order:i}=l,d=(0,y.Z)(i);N((0,x.nc)({activeMenu:X,data:{...ae,perPage:a,page:n,column:s,sort:d}}))}}),(0,M.jsx)(C.Z,{click:()=>{K(!0);const e={...Object.assign({},...T.map(((e,t)=>({[`ids[${t}]`]:e}))))};k.Z.delete(e).then((()=>{Z.Am.success(U("successfully.deleted")),D(!1),N((0,g.AU)(ne)),P(null)})).finally((()=>K(!1)))},text:U(F?"delete":"all.delete"),loading:B,setText:R})]}),W&&(0,M.jsx)(V.Z,{orderDetails:W,handleCancel:()=>{G(null)}})]})}},75052:(e,t,l)=>{l.d(t,{Z:()=>x});var a=l(47313),n=l(10976),s=l(9274),i=l(59491),d=l(68197),r=l(59624),o=l(74294),c=l(2717),u=l(90046),v=l(90954),h=l(24511),m=l(46417);function x(e){var t;let{orderDetails:l,handleCancel:x}=e;const{t:p}=(0,h.$)(),{activeMenu:Z}=(0,c.v9)((e=>e.menu),c.wU),{deliverymans:f}=(0,c.v9)((e=>e.deliveryman),c.wU),[g]=n.Z.useForm(),j=(0,c.I0)(),[y,b]=(0,a.useState)(!1);return(0,m.jsx)(s.Z,{visible:!!l,title:l.title,onCancel:x,footer:[(0,m.jsx)(i.Z,{type:"primary",onClick:()=>g.submit(),loading:y,children:p("save")}),(0,m.jsx)(i.Z,{type:"default",onClick:x,children:p("cancel")})],children:(0,m.jsx)(n.Z,{form:g,layout:"vertical",onFinish:e=>{const t={...e};b(!0),u.Z.updateDelivery(l.id,t).then((()=>{x(),j((0,v.xo)(Z))})).finally((()=>b(!1)))},initialValues:{deliveryman:null===(t=l.deliveryman)||void 0===t?void 0:t.id},children:(0,m.jsx)(d.Z,{gutter:12,children:(0,m.jsx)(r.Z,{span:24,children:(0,m.jsx)(n.Z.Item,{label:p("deliveryman"),name:"deliveryman",rules:[{required:!0,message:p("required")}],children:(0,m.jsx)(o.Z,{children:f.map(((e,t)=>(0,m.jsxs)(o.Z.Option,{value:e.id,className:"d-block",children:[e.firstname," ",e.lastname||""]},e.id)))})})})})})})}},15386:(e,t,l)=>{l.d(t,{Z:()=>r});var a=l(1413),n=l(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"};var i=l(17469),d=function(e,t){return n.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:s}))};d.displayName="ClearOutlined";const r=n.forwardRef(d)},99587:(e,t,l)=>{l.d(t,{Z:()=>r});var a=l(1413),n=l(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=l(17469),d=function(e,t){return n.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:s}))};d.displayName="TableOutlined";const r=n.forwardRef(d)}}]);