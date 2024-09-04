"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2050],{53233:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(47313),l=n(56140),o=n(67251),a=n(45705),s=n(86345),d=n(78267),r=n(37388),c=n(59491),u=n(99587),v=n(24511),h=n(46417);const{Text:m}=l.Z,p=e=>{let{columns:t=[],setColumns:n,style:l,size:p="",iconOnly:x}=e;const{t:g}=(0,v.$)(),[f,Z]=(0,i.useState)(!1),j=(0,h.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map(((e,i)=>(0,h.jsx)(o.Z.Item,{children:(0,h.jsxs)(a.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsx)(s.Z,{defaultChecked:!0,onClick:()=>function(e){const i=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(i)}(e),disabled:1===i})]})},e+i)))});return(0,h.jsx)(d.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{Z(e)},visible:f,children:(0,h.jsx)(r.Z,{title:g("change.columns"),children:(0,h.jsx)(c.Z,{style:{...l},size:p,icon:(0,h.jsx)(u.Z,{}),children:x?null:g("Columns")})})})}},13945:(e,t,n)=>{function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:()=>i})},82050:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var i=n(47313),l=n(66204),o=n(77181),a=n(45705),s=n(78508),d=n(2717),r=n(90954),c=n(24511),u=n(53233),v=n(79464),h=n(13945),m=n(70816),p=n.n(m),x=n(80314),g=n(46417);const f=()=>{var e,t,n;const{t:m}=(0,c.$)(),f=(0,d.I0)(),{activeMenu:Z}=(0,d.v9)((e=>e.menu),d.wU),{bonus:j,meta:w,loading:b,params:z}=(0,d.v9)((e=>e.bonusList),d.wU),k=null===Z||void 0===Z?void 0:Z.data,y={sort:null===k||void 0===k?void 0:k.sort,column:null===k||void 0===k?void 0:k.column,perPage:null===k||void 0===k?void 0:k.perPage,page:null===k||void 0===k?void 0:k.page},[C,V]=(0,i.useState)([{title:m("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:m("bonus.stock"),dataIndex:"bonusStock",key:"bonusStock",is_show:!0,render:(e,t)=>{var n,i;return null===e||void 0===e||null===(n=e.product)||void 0===n||null===(i=n.translation)||void 0===i?void 0:i.title}},{title:m("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:(e,t)=>{var n,i;return null===(n=t.shop)||void 0===n||null===(i=n.translation)||void 0===i?void 0:i.title}},{title:m("expired.at"),dataIndex:"expired_at",key:"expired_at",is_show:!0,render:e=>(0,g.jsx)("div",{children:p()(new Date).isBefore(e)?(0,g.jsx)(l.Z,{color:"blue",children:e}):(0,g.jsx)(l.Z,{color:"error",children:e})})}]);return(0,i.useEffect)((()=>{Z.refetch&&(0,d.dC)((()=>{f((0,v.u)(y)),f((0,r.A_)(Z))}))}),[Z.refetch]),(0,x.Z)((()=>{f((0,v.u)(y))}),[Z.data]),(0,g.jsx)(o.Z,{title:m("bonuses.list"),extra:(0,g.jsx)(a.Z,{children:(0,g.jsx)(u.Z,{columns:C,setColumns:V})}),children:(0,g.jsx)(s.Z,{scroll:{x:!0},columns:null===C||void 0===C?void 0:C.filter((e=>e.is_show)),dataSource:j,pagination:{pageSize:z.perPage,page:(null===(e=Z.data)||void 0===e?void 0:e.page)||1,total:w.total,defaultCurrent:null===(t=Z.data)||void 0===t?void 0:t.page,current:null===(n=Z.data)||void 0===n?void 0:n.page},rowKey:e=>e.id,loading:b,onChange:function(e,t,n){const{pageSize:i,current:l}=e,{field:o,order:a}=n,s=(0,h.Z)(a);f((0,r.nc)({activeMenu:Z,data:{...Z.data,perPage:i,page:l,column:o,sort:s}}))}})})}},99587:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(1413),l=n(47313);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=n(17469),s=function(e,t){return l.createElement(a.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:o}))};s.displayName="TableOutlined";const d=l.forwardRef(s)}}]);