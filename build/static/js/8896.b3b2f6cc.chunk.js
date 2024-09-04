"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8896],{55940:(e,t,n)=>{n.d(t,{Z:()=>r});n(47313);var i=n(59491),l=n(47515),s=n(23560),c=n(24511),d=n(79492),a=n(46417);function r(e){let{size:t="",onClick:n,type:r="default",...o}=e;const{t:u}=(0,c.$)(),{isDemo:h}=(0,d.Z)();return(0,a.jsx)(i.Z,{size:t,icon:(0,a.jsx)(l.Z,{}),onClick:e=>{h?s.Am.warning(u("cannot.work.demo")):n(e)},type:r,...o})}},53233:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(47313),l=n(56140),s=n(67251),c=n(45705),d=n(86345),a=n(78267),r=n(37388),o=n(59491),u=n(99587),h=n(24511),v=n(46417);const{Text:p}=l.Z,m=e=>{let{columns:t=[],setColumns:n,style:l,size:m="",iconOnly:x}=e;const{t:g}=(0,h.$)(),[Z,f]=(0,i.useState)(!1),y=(0,v.jsx)(s.Z,{children:null===t||void 0===t?void 0:t.map(((e,i)=>(0,v.jsx)(s.Z.Item,{children:(0,v.jsxs)(c.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(p,{children:e.title}),(0,v.jsx)(d.Z,{defaultChecked:!0,onClick:()=>function(e){const i=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(i)}(e),disabled:1===i})]})},e+i)))});return(0,v.jsx)(a.Z,{overlay:y,trigger:["click"],onVisibleChange:e=>{f(e)},visible:Z,children:(0,v.jsx)(r.Z,{title:g("change.columns"),children:(0,v.jsx)(o.Z,{style:{...l},size:m,icon:(0,v.jsx)(u.Z,{}),children:x?null:g("Columns")})})})}},13945:(e,t,n)=>{function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:()=>i})},84017:(e,t,n)=>{function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===n?`${i} ${t}`:`${t} ${i}`}n.d(t,{Z:()=>i})},48896:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var i=n(47313),l=n(12019),s=n(47515),c=n(55768),d=n(26824),a=n(45705),r=n(59491),o=n(77181),u=n(78508),h=n(23560),v=n(69658),p=n(74580),m=n(2717),x=n(97890),g=n(90954),Z=n(24511),f=n(55940),y=n(53233),j=n(80314),w=n(13945),z=n(84017),k=n(64441),C=n(14241),b=n(97421),_=n(46417);const V=()=>{var e;const{t:t}=(0,Z.$)(),n=(0,m.I0)(),V=(0,x.s0)(),{setIsModalVisible:$}=(0,i.useContext)(p._),[H,I]=(0,i.useState)(null),[S,M]=(0,i.useState)(!1),[N,E]=(0,i.useState)(null),{activeMenu:A}=(0,m.v9)((e=>e.menu),m.wU),[O,P]=(0,i.useState)("published"),R=(null===(e=A.data)||void 0===e||e.role,null===A||void 0===A?void 0:A.data),{defaultCurrency:T}=(0,m.v9)((e=>e.currency),m.wU),U={sort:null===R||void 0===R?void 0:R.sort,column:null===R||void 0===R?void 0:R.column,search:null!==R&&void 0!==R&&R.search?R.search:void 0,perPage:null===R||void 0===R?void 0:R.perPage,page:null===R||void 0===R?void 0:R.page},{sellerReciepts:B,meta:F,loading:K}=(0,m.v9)((e=>e.reciept),m.wU),[L,D]=(0,i.useState)([{title:t("id"),dataIndex:"id",key:"id",is_show:!0,sorter:!0},{title:t("title"),dataIndex:"title",key:"title",render:(e,t)=>{var n;return null===(n=t.translation)||void 0===n?void 0:n.title},is_show:!0},{title:t("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,_.jsx)(d.Z,{width:100,src:b.bV+e,preview:!0,placeholder:!0,className:"rounded"})},{title:t("recipe.category"),dataIndex:"category",key:"category",is_show:!0,render:e=>{var t;return null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title}},{title:t("discount"),dataIndex:"discount",key:"discount",is_show:!0,render:(e,t)=>"fix"===t.discount_type?(0,z.Z)(t.discount_price,T.symbol):`${t.discount_price} %`},{title:t("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,i)=>(0,_.jsxs)(a.Z,{children:[(0,_.jsx)(r.Z,{type:"primary",icon:(0,_.jsx)(l.Z,{}),onClick:()=>(e=>{n((0,g.bL)({url:`seller/recept/edit/${e.id}`,id:"recepe_edit",name:t("edit.recepe")})),V(`/seller/recept/edit/${e.id}`,{state:"edit"})})(i)}),(0,_.jsx)(f.Z,{icon:(0,_.jsx)(s.Z,{}),onClick:()=>{I([i.id]),$(!0),E(!0)}})]})}]);(0,j.Z)((()=>{n((0,k.xE)(U))}),[A.data]),(0,i.useEffect)((()=>{A.refetch&&(n((0,k.xE)(U)),n((0,g.A_)(A)))}),[A.refetch]);const q={selectedRowKeys:H,onChange:e=>{I(e)}};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o.Z,{className:"p-0",children:(0,_.jsxs)(a.Z,{wrap:!0,className:"justify-content-end w-100",children:[(0,_.jsx)(f.Z,{size:"",onClick:()=>{null===H||0===H.length?h.Am.warning(t("select.the.product")):($(!0),E(!1))},children:t("delete.selected")}),(0,_.jsx)(r.Z,{type:"primary",icon:(0,_.jsx)(c.Z,{}),onClick:()=>{n((0,g.bL)({id:"recepe_add",url:"seller/recept/add",name:t("add.recepe")})),V("/seller/recept/add")},children:t("add.recepe")}),(0,_.jsx)(y.Z,{columns:L,setColumns:D})]})}),(0,_.jsx)(o.Z,{title:t("recepes"),children:(0,_.jsx)(u.Z,{scroll:{x:!0},rowSelection:q,columns:null===L||void 0===L?void 0:L.filter((e=>e.is_show)),dataSource:B,pagination:{pageSize:F.per_page,page:F.current_page,total:F.total},rowKey:e=>e.id,onChange:function(e,t,i){const{pageSize:l,current:s}=e,{field:c,order:d}=i,a=(0,w.Z)(d);n((0,g.nc)({activeMenu:A,data:{...R,perPage:l,page:s,column:c,sort:a}}))},loading:K})}),(0,_.jsx)(v.Z,{click:()=>{M(!0);const e={...Object.assign({},...H.map(((e,t)=>({[`ids[${t}]`]:e}))))};C.Z.delete(e).then((()=>{h.Am.success(t("successfully.deleted")),n((0,k.xE)(U)),$(!1),E(null)})).finally((()=>{I(null),M(!1)}))},text:t(N?"delete":"all.delete"),setText:I,loading:S})]})}},55768:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(1413),l=n(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var c=n(17469),d=function(e,t){return l.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:s}))};d.displayName="PlusCircleOutlined";const a=l.forwardRef(d)},99587:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(1413),l=n(47313);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var c=n(17469),d=function(e,t){return l.createElement(c.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:s}))};d.displayName="TableOutlined";const a=l.forwardRef(d)}}]);