"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2301],{53233:(e,t,l)=>{l.d(t,{Z:()=>x});var n=l(47313),s=l(56140),a=l(67251),i=l(45705),d=l(86345),o=l(78267),r=l(37388),c=l(59491),u=l(99587),h=l(24511),m=l(46417);const{Text:v}=s.Z,x=e=>{let{columns:t=[],setColumns:l,style:s,size:x="",iconOnly:p}=e;const{t:f}=(0,h.$)(),[Z,j]=(0,n.useState)(!1),g=(0,m.jsx)(a.Z,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,m.jsx)(a.Z.Item,{children:(0,m.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,m.jsx)(v,{children:e.title}),(0,m.jsx)(d.Z,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));l(n)}(e),disabled:1===n})]})},e+n)))});return(0,m.jsx)(o.Z,{overlay:g,trigger:["click"],onVisibleChange:e=>{j(e)},visible:Z,children:(0,m.jsx)(r.Z,{title:f("change.columns"),children:(0,m.jsx)(c.Z,{style:{...s},size:x,icon:(0,m.jsx)(u.Z,{}),children:p?null:f("Columns")})})})}},41481:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(47313),s=l(66672),a=l(16031),i=l(40765),d=l(46417);function o(e){let{handleChange:t,defaultValue:l,resetSearch:o,...r}=e;const[c,u]=(0,n.useState)(l),h=(0,n.useMemo)((()=>(0,a.debounce)((e=>{t(e)}),800)),[]);return(0,n.useEffect)((()=>{u(l)}),[o]),(0,d.jsx)(s.Z,{value:c,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,d.jsx)(i.Z,{}),...r})}},89281:(e,t,l)=>{l.d(t,{h:()=>r});var n=l(47313),s=l(12279),a=l.n(s),i=l(74294),d=l(72652),o=l(46417);const r=e=>{let{fetchOptions:t,debounceTimeout:l=400,onClear:s,refetchOptions:r=!1,...c}=e;const[u,h]=(0,n.useState)(!1),[m,v]=(0,n.useState)([]),x=(0,n.useMemo)((()=>a()((e=>{v([]),h(!0),t(e).then((e=>{v(e),h(!1)}))}),l)),[t,l]);return(0,o.jsx)(i.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:x,onClear:()=>{x(""),s&&s()},notFoundContent:u?(0,o.jsx)(d.Z,{size:"small"}):"no results",...c,options:m,onFocus:()=>{m.length&&!r||x("")}})}},84017:(e,t,l)=>{function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const n=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===l?`${n} ${t}`:`${t} ${n}`}l.d(t,{Z:()=>n})},86067:(e,t,l)=>{l.d(t,{Z:()=>h});var n=l(9274),s=l(59491),a=l(72652),i=l(83371),d=l(84017),o=l(47313),r=l(24511),c=l(98967),u=l(46417);const h=e=>{var t;let{id:l,onClose:h}=e;const{t:m}=(0,r.$)(),[v,x]=(0,o.useState)(!1),[p,f]=(0,o.useState)(null),Z=(0,o.useCallback)((()=>{x(!0),l&&c.Z.getById(l).then((e=>{f(e.data)})).finally((()=>{x(!1)}))}),[l]);return(0,o.useEffect)((()=>{Z()}),[l,Z]),(0,u.jsx)(n.Z,{visible:!!l,title:m("ad.detail"),onCancel:h,footer:[(0,u.jsx)(s.Z,{onClick:h,children:m("close")})],children:v?(0,u.jsx)("div",{className:"flex justify-content-center my-6",children:(0,u.jsx)(a.Z,{})}):(0,u.jsxs)(i.Z,{bordered:!0,children:[(0,u.jsx)(i.Z.Item,{span:3,label:m("title"),children:null===p||void 0===p||null===(t=p.translation)||void 0===t?void 0:t.title}),(0,u.jsx)(i.Z.Item,{span:3,label:m("price"),children:(0,d.Z)(null===p||void 0===p?void 0:p.price)}),(0,u.jsxs)(i.Z.Item,{span:3,label:m("time"),children:[null===p||void 0===p?void 0:p.time," ",null===p||void 0===p?void 0:p.time_type]})]})})}},52301:(e,t,l)=>{l.r(t),l.d(t,{default:()=>I});var n=l(47313),s=l(10976),a=l(45705),i=l(59491),d=l(77181),o=l(78508),r=l(50249),c=l(2717),u=l(24511),h=l(41481),m=l(53233),v=l(90954),x=l(80314),p=l(84017),f=l(98967),Z=l(23560),j=l(97890),g=l(32785),b=l(86067),C=l(9274),y=l(68197),w=l(59624),_=l(89281),z=l(18333),k=l(46417);const S=e=>{let{form:t,id:l,onClose:n,handlePurchase:a,loading:d}=e;const{t:o}=(0,u.$)();return(0,k.jsx)(C.Z,{visible:!!l,title:o("ad.detail"),onCancel:n,footer:[(0,k.jsx)(i.Z,{onClick:n,children:o("close")})],children:(0,k.jsxs)(s.Z,{name:"banner-form",layout:"vertical",onFinish:e=>{var t;const n=null===e||void 0===e||null===(t=e.products)||void 0===t?void 0:t.map((e=>e.value));a({ads_package_id:l,product_ids:n})},form:t,initialValues:{clickable:!0},className:"d-flex flex-column h-100",children:[(0,k.jsx)(y.Z,{gutter:24,children:(0,k.jsx)(w.Z,{span:24,children:(0,k.jsx)(s.Z.Item,{label:o("products"),name:"products",rules:[{required:!0,message:o("required")}],children:(0,k.jsx)(_.h,{mode:"multiple",fetchOptions:function(e){const t={search:e,perPage:10,status:"published"};return z.Z.getAll(t).then((e=>e.data.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}}))))},debounceTimeout:200})})})}),(0,k.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,k.jsx)("div",{className:"pb-5",children:(0,k.jsx)(i.Z,{type:"primary",htmlType:"submit",loading:d,children:o("submit")})})})]})})};function I(){const{t:e}=(0,u.$)(),t=(0,c.I0)(),[l]=s.Z.useForm(),[C,y]=((0,j.s0)(),(0,n.useState)(null)),[w,_]=(0,n.useState)(null),{activeMenu:z}=(0,c.v9)((e=>e.menu),c.wU),{advertList:I,loading:V,meta:N}=(0,c.v9)((e=>e.advert),c.wU),[H,$]=(0,n.useState)(""),[F,M]=(0,n.useState)(!1),[E,O]=(0,n.useState)([{title:e("id"),dataIndex:"id",is_show:!0,sorter:(e,t)=>e.id-t.id},{title:e("title"),dataIndex:"title",is_show:!0,render:(e,t)=>{var l;return(0,k.jsx)("span",{children:null===t||void 0===t||null===(l=t.translation)||void 0===l?void 0:l.title})}},{title:e("price"),dataIndex:"price",is_show:!0,render:e=>(0,p.Z)(e)},{title:e("time"),dataIndex:"time",is_show:!0,render:(e,t)=>(0,k.jsxs)("span",{children:[e," ",t.time_type]})},{title:e("options"),dataIndex:"options",is_show:!0,render:(t,l)=>(0,k.jsxs)(a.Z,{children:[(0,k.jsx)(i.Z,{icon:(0,k.jsx)(g.Z,{}),onClick:()=>y(l.id)}),(0,k.jsx)(i.Z,{onClick:()=>_(l.id),loading:F,children:e("assign")})]})}]),P={perPage:10,page:1,active:1};(0,n.useEffect)((()=>{z.refetch&&(t((0,r.GY)(P)),t((0,v.A_)(z)))}),[z.refetch]),(0,x.Z)((()=>{z.data;const e={search:H};t((0,r.GY)(e))}),[z.data,H]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(d.Z,{className:"p-o",children:(0,k.jsxs)("div",{className:"flex justify-content-between",children:[(0,k.jsx)(h.Z,{style:{maxWidth:"200px"},handleChange:e=>$(e),placeholder:e("search")}),(0,k.jsx)("div",{className:"flex gap-3",children:(0,k.jsx)(m.Z,{columns:E,setColumns:O})})]})}),(0,k.jsx)(d.Z,{children:(0,k.jsx)(o.Z,{scroll:{x:!0},dataSource:I,columns:null===E||void 0===E?void 0:E.filter((e=>e.is_show)),rowKey:e=>e.id,loading:V||F,pagination:{pageSize:N.per_page,page:N.current_page,total:N.total},onChange:e=>{const{pageSize:l,current:n}=e;t((0,r.GY)({perPage:l,page:n}))}})}),(0,k.jsx)(b.Z,{id:C,onClose:()=>y(null)}),(0,k.jsx)(S,{id:w,onClose:()=>_(null),handlePurchase:t=>{let{product_ids:n,ads_package_id:s}=t;M(!0),f.Z.create({ads_package_id:s,product_ids:n}).then((()=>{Z.Am.success(e("assigned.successfully")),l.resetFields()})).finally((()=>{M(!1),_(null)}))},loading:F,form:l})]})}},32785:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(1413),s=l(47313);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M396 512a112 112 0 10224 0 112 112 0 10-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]},name:"eye",theme:"filled"};var i=l(17469),d=function(e,t){return s.createElement(i.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:a}))};d.displayName="EyeFilled";const o=s.forwardRef(d)},99587:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(1413),s=l(47313);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=l(17469),d=function(e,t){return s.createElement(i.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:a}))};d.displayName="TableOutlined";const o=s.forwardRef(d)}}]);