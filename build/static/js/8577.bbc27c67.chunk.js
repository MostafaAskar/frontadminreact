"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8577],{55940:(e,t,s)=>{s.d(t,{Z:()=>o});s(47313);var n=s(59491),l=s(47515),i=s(23560),a=s(24511),r=s(79492),d=s(46417);function o(e){let{size:t="",onClick:s,type:o="default",...c}=e;const{t:u}=(0,a.$)(),{isDemo:h}=(0,r.Z)();return(0,d.jsx)(n.Z,{size:t,icon:(0,d.jsx)(l.Z,{}),onClick:e=>{h?i.Am.warning(u("cannot.work.demo")):s(e)},type:o,...c})}},53233:(e,t,s)=>{s.d(t,{Z:()=>v});var n=s(47313),l=s(56140),i=s(67251),a=s(45705),r=s(86345),d=s(78267),o=s(37388),c=s(59491),u=s(99587),h=s(24511),m=s(46417);const{Text:x}=l.Z,v=e=>{let{columns:t=[],setColumns:s,style:l,size:v="",iconOnly:f}=e;const{t:Z}=(0,h.$)(),[j,w]=(0,n.useState)(!1),g=(0,m.jsx)(i.Z,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,m.jsx)(i.Z.Item,{children:(0,m.jsxs)(a.Z,{className:"d-flex justify-content-between",children:[(0,m.jsx)(x,{children:e.title}),(0,m.jsx)(r.Z,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));s(n)}(e),disabled:1===n})]})},e+n)))});return(0,m.jsx)(d.Z,{overlay:g,trigger:["click"],onVisibleChange:e=>{w(e)},visible:j,children:(0,m.jsx)(o.Z,{title:Z("change.columns"),children:(0,m.jsx)(c.Z,{style:{...l},size:v,icon:(0,m.jsx)(u.Z,{}),children:f?null:Z("Columns")})})})}},8577:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var n=s(47313),l=s(66204),i=s(45705),a=s(59491),r=s(77181),d=s(78508),o=s(97890),c=s(31741),u=s(69658),h=s(74580),m=s(2717),x=s(90954),v=s(23560),f=s(24511),Z=s(55940),j=s(53233),w=s(74198),g=s(65122),p=s(70816),z=s.n(p),k=s(46417);function y(){const{t:e}=(0,f.$)(),t=(0,m.I0)(),s=(0,o.s0)(),[p,y]=(0,n.useState)([{title:e("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:e("client"),is_show:!0,dataIndex:"user",key:"user",render:(e,t)=>{var s,n;return(0,k.jsxs)("div",{children:[null===(s=t.order.user)||void 0===s?void 0:s.firstname," ",(null===(n=t.order.user)||void 0===n?void 0:n.lastname)||""]})}},{title:e("status"),is_show:!0,dataIndex:"status",key:"status",render:t=>(0,k.jsx)("div",{children:"new"===t?(0,k.jsx)(l.Z,{color:"blue",children:e(t)}):"canceled"===t?(0,k.jsx)(l.Z,{color:"error",children:e(t)}):(0,k.jsx)(l.Z,{color:"cyan",children:e(t)})})},{title:e("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at",render:e=>z()(e).format("YYYY-MM-DD HH:mm")},{title:e("options"),is_show:!0,key:"options",render:(n,l)=>(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(a.Z,{icon:(0,k.jsx)(c.Z,{}),onClick:()=>(n=>{t((0,x.bL)({url:`seller/refund/details/${n}`,id:"refund_details",name:e("refund.details")})),s(`/seller/refund/details/${n}`)})(l.id)}),(0,k.jsx)(Z.Z,{onClick:()=>{b([l.id]),C(!0),S(!0)}})]})}]),{setIsModalVisible:C}=(0,n.useContext)(h._),[_,b]=(0,n.useState)(null),[H,V]=(0,n.useState)(!1),[I,S]=(0,n.useState)(null),{activeMenu:M}=(0,m.v9)((e=>e.menu),m.wU),{refund:$,meta:A,loading:Y}=(0,m.v9)((e=>e.refund),m.wU);(0,n.useEffect)((()=>{M.refetch&&(t((0,w.wz)({})),t((0,x.A_)(M)))}),[M.refetch]);const D={id:_,onChange:e=>{b(e)}};return(0,k.jsxs)(r.Z,{title:e("refunds"),extra:(0,k.jsxs)(i.Z,{wrap:!0,children:[(0,k.jsx)(Z.Z,{className:"",onClick:()=>{null===_||0===_.length?v.Am.warning(e("select.the.product")):(C(!0),S(!1))},children:e("delete.selected")}),(0,k.jsx)(j.Z,{columns:p,setColumns:y})]}),children:[(0,k.jsx)(d.Z,{scroll:{x:!0},rowSelection:D,columns:null===p||void 0===p?void 0:p.filter((e=>e.is_show)),dataSource:$,pagination:{pageSize:A.per_page,page:A.current_page,total:A.total},rowKey:e=>e.id,loading:Y,onChange:e=>{const{pageSize:s,current:n}=e;t((0,w.wz)({perPage:s,page:n}))}}),(0,k.jsx)(u.Z,{click:()=>{V(!0);const s={...Object.assign({},..._.map(((e,t)=>({[`ids[${t}]`]:e}))))};g.Z.delete(s).then((()=>{t((0,w.wz)()),v.Am.success(e("successfully.deleted"))})).finally((()=>{C(!1),V(!1)}))},text:e(I?"delete":"all.delete"),loading:H,setText:b})]})}},99587:(e,t,s)=>{s.d(t,{Z:()=>d});var n=s(1413),l=s(47313);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=s(17469),r=function(e,t){return l.createElement(a.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:i}))};r.displayName="TableOutlined";const d=l.forwardRef(r)}}]);