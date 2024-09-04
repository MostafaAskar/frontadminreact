"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[958],{55940:(e,t,a)=>{a.d(t,{Z:()=>r});a(47313);var s=a(59491),n=a(47515),i=a(23560),l=a(24511),d=a(79492),c=a(46417);function r(e){let{size:t="",onClick:a,type:r="default",...o}=e;const{t:u}=(0,l.$)(),{isDemo:h}=(0,d.Z)();return(0,c.jsx)(s.Z,{size:t,icon:(0,c.jsx)(n.Z,{}),onClick:e=>{h?i.Am.warning(u("cannot.work.demo")):a(e)},type:r,...o})}},53233:(e,t,a)=>{a.d(t,{Z:()=>x});var s=a(47313),n=a(56140),i=a(67251),l=a(45705),d=a(86345),c=a(78267),r=a(37388),o=a(59491),u=a(99587),h=a(24511),v=a(46417);const{Text:m}=n.Z,x=e=>{let{columns:t=[],setColumns:a,style:n,size:x="",iconOnly:p}=e;const{t:Z}=(0,h.$)(),[f,g]=(0,s.useState)(!1),j=(0,v.jsx)(i.Z,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,v.jsx)(i.Z.Item,{children:(0,v.jsxs)(l.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(d.Z,{defaultChecked:!0,onClick:()=>function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(c.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{g(e)},visible:f,children:(0,v.jsx)(r.Z,{title:Z("change.columns"),children:(0,v.jsx)(o.Z,{style:{...n},size:x,icon:(0,v.jsx)(u.Z,{}),children:p?null:Z("Columns")})})})}},41481:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(47313),n=a(66672),i=a(16031),l=a(40765),d=a(46417);function c(e){let{handleChange:t,defaultValue:a,resetSearch:c,...r}=e;const[o,u]=(0,s.useState)(a),h=(0,s.useMemo)((()=>(0,i.debounce)((e=>{t(e)}),800)),[]);return(0,s.useEffect)((()=>{u(a)}),[c]),(0,d.jsx)(n.Z,{value:o,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,d.jsx)(l.Z,{}),...r})}},50958:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var s=a(47313),n=a(86345),i=a(45705),l=a(59491),d=a(77181),c=a(78508),r=a(12019),o=a(47515),u=a(55768),h=a(53213),v=a(50249),m=a(2717),x=a(24511),p=a(41481),Z=a(55940),f=a(97890),g=a(69658),j=a(74580),w=a(23560),y=a(53233),z=a(90954),C=a(80314),_=a(46417);function b(){const{t:e}=(0,x.$)(),t=(0,m.I0)(),a=(0,f.s0)(),{activeMenu:b}=(0,m.v9)((e=>e.menu),m.wU),{advertList:k,loading:V,meta:I}=(0,m.v9)((e=>e.advert),m.wU),[S,H]=(0,s.useState)(null),[A,M]=(0,s.useState)(null),[N,$]=(0,s.useState)(""),[G,E]=(0,s.useState)(null),{setIsModalVisible:O}=(0,s.useContext)(j._),[L,P]=(0,s.useState)(!1),[T,B]=(0,s.useState)([{title:e("id"),dataIndex:"id",is_show:!0,sorter:(e,t)=>e.id-t.id},{title:e("title"),dataIndex:"title",is_show:!0,render:(e,t)=>{var a;return(0,_.jsx)("span",{children:null===t||void 0===t||null===(a=t.translation)||void 0===a?void 0:a.title})}},{title:e("price"),dataIndex:"price",is_show:!0},{title:e("time"),dataIndex:"time",is_show:!0},{title:e("time.type"),dataIndex:"time_type",is_show:!0},{title:e("type"),dataIndex:"type",is_show:!0},{title:e("active"),dataIndex:"active",is_show:!0,render:(e,t)=>(0,_.jsx)(n.Z,{onChange:()=>{O(!0),H(t.id),E(!0)},checked:e})},{title:e("options"),dataIndex:"options",is_show:!0,render:(e,t)=>(0,_.jsxs)(i.Z,{children:[(0,_.jsx)(l.Z,{type:"primary",icon:(0,_.jsx)(r.Z,{}),onClick:()=>U(t)}),(0,_.jsx)(Z.Z,{icon:(0,_.jsx)(o.Z,{}),onClick:()=>{O(!0),H([t.id]),M(!0),E(!1)}})]})}]),R={perPage:10,page:1},U=s=>{t((0,z.bL)({url:`advert/${s.id}`,id:"ad_edit",name:e("edit.ad")})),a(`/advert/${s.id}`)};(0,s.useEffect)((()=>{b.refetch&&(t((0,v.GA)(R)),t((0,z.A_)(b)))}),[b.refetch]),(0,C.Z)((()=>{b.data;const e={search:N};t((0,v.GA)(e))}),[b.data,N]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(d.Z,{className:"p-o",children:(0,_.jsxs)("div",{className:"flex justify-content-between",children:[(0,_.jsx)(p.Z,{style:{maxWidth:"200px"},handleChange:e=>$(e),placeholder:e("search")}),(0,_.jsxs)("div",{className:"flex gap-3",children:[(0,_.jsx)(y.Z,{columns:T,setColumns:B}),(0,_.jsx)(l.Z,{icon:(0,_.jsx)(u.Z,{}),type:"primary",className:"ml-3",onClick:()=>{t((0,z.bL)({id:"advert-add",url:"advert/add",name:e("add.advert")})),t((0,z.nc)({activeMenu:b,data:null})),a("/advert/add")},children:e("add.advert")})]})]})}),(0,_.jsx)(d.Z,{children:(0,_.jsx)(c.Z,{scroll:{x:!0},dataSource:k,columns:null===T||void 0===T?void 0:T.filter((e=>e.is_show)),rowKey:e=>e.id,loading:L||V,pagination:{pageSize:I.per_page,page:I.current_page,total:I.total},onChange:e=>{const{pageSize:a,current:s}=e;t((0,v.GA)({perPage:a,page:s}))}})}),(0,_.jsx)(g.Z,{click:G?()=>{P(!0),h.Z.setActive(S).then((()=>{O(!1),t((0,v.GA)(R)),w.Am.success(e("successfully.updated")),E(!1)})).finally((()=>P(!1)))}:()=>{P(!0);const a={...Object.assign({},...S.map(((e,t)=>({[`ids[${t}]`]:e}))))};h.Z.delete(a).then((()=>{O(!1),w.Am.success(e("successfully.deleted")),t((0,v.GA)(R)),M(null),E(!1)})).finally((()=>{P(!1),H(null)}))},text:e(G?"set.active.advert":A?"delete":"all.delete"),setText:H,setActive:E})]})}},55768:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(1413),n=a(47313);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var l=a(17469),d=function(e,t){return n.createElement(l.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:i}))};d.displayName="PlusCircleOutlined";const c=n.forwardRef(d)},99587:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(1413),n=a(47313);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var l=a(17469),d=function(e,t){return n.createElement(l.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:i}))};d.displayName="TableOutlined";const c=n.forwardRef(d)}}]);