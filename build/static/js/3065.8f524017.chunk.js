"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3065],{55940:(e,t,a)=>{a.d(t,{Z:()=>r});a(47313);var l=a(59491),s=a(47515),n=a(23560),d=a(24511),i=a(79492),o=a(46417);function r(e){let{size:t="",onClick:a,type:r="default",...c}=e;const{t:u}=(0,d.$)(),{isDemo:v}=(0,i.Z)();return(0,o.jsx)(l.Z,{size:t,icon:(0,o.jsx)(s.Z,{}),onClick:e=>{v?n.Am.warning(u("cannot.work.demo")):a(e)},type:r,...c})}},53233:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(47313),s=a(56140),n=a(67251),d=a(45705),i=a(86345),o=a(78267),r=a(37388),c=a(59491),u=a(99587),v=a(24511),h=a(46417);const{Text:p}=s.Z,m=e=>{let{columns:t=[],setColumns:a,style:s,size:m="",iconOnly:x}=e;const{t:g}=(0,v.$)(),[Z,j]=(0,l.useState)(!1),f=(0,h.jsx)(n.Z,{children:null===t||void 0===t?void 0:t.map(((e,l)=>(0,h.jsx)(n.Z.Item,{children:(0,h.jsxs)(d.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:e.title}),(0,h.jsx)(i.Z,{defaultChecked:!0,onClick:()=>function(e){const l=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(l)}(e),disabled:1===l})]})},e+l)))});return(0,h.jsx)(o.Z,{overlay:f,trigger:["click"],onVisibleChange:e=>{j(e)},visible:Z,children:(0,h.jsx)(r.Z,{title:g("change.columns"),children:(0,h.jsx)(c.Z,{style:{...s},size:m,icon:(0,h.jsx)(u.Z,{}),children:x?null:g("Columns")})})})}},51988:(e,t,a)=>{a.d(t,{Z:()=>r});a(47313);var l=a(24511),s=a(66188);const n=a.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",d=a.p+"static/media/noresult.ac4af107751f94856a9c.riv",i=a.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var o=a(46417);const r=function(e){let{id:t="noresult",text:a=""}=e;const{t:r}=(0,l.$)(),c={src:{noproductsfound:n,noresult:d,nosell:i}[t],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,s.useRive)(c);return(0,o.jsxs)("div",{className:"animation-canvas",children:[(0,o.jsx)("div",{style:{width:"100%",height:200},children:(0,o.jsx)(u,{})}),(0,o.jsx)("div",{className:"text",children:r(a)})]})}},41481:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(47313),s=a(66672),n=a(16031),d=a(40765),i=a(46417);function o(e){let{handleChange:t,defaultValue:a,resetSearch:o,...r}=e;const[c,u]=(0,l.useState)(a),v=(0,l.useMemo)((()=>(0,n.debounce)((e=>{t(e)}),800)),[]);return(0,l.useEffect)((()=>{u(a)}),[o]),(0,i.jsx)(s.Z,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,i.jsx)(d.Z,{}),...r})}},89281:(e,t,a)=>{a.d(t,{h:()=>r});var l=a(47313),s=a(12279),n=a.n(s),d=a(74294),i=a(72652),o=a(46417);const r=e=>{let{fetchOptions:t,debounceTimeout:a=400,onClear:s,refetchOptions:r=!1,...c}=e;const[u,v]=(0,l.useState)(!1),[h,p]=(0,l.useState)([]),m=(0,l.useMemo)((()=>n()((e=>{p([]),v(!0),t(e).then((e=>{p(e),v(!1)}))}),a)),[t,a]);return(0,o.jsx)(d.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:m,onClear:()=>{m(""),s&&s()},notFoundContent:u?(0,o.jsx)(i.Z,{size:"small"}):"no results",...c,options:h,onFocus:()=>{h.length&&!r||m("")}})}},13945:(e,t,a)=>{function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{Z:()=>l})},11101:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(34344);const s={getAll:e=>l.Z.get("rest/brands/paginate",{params:e}),getById:(e,t)=>l.Z.get(`rest/brands/${e}`,{params:t})}},29955:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(34344);const s={getAll:e=>l.Z.get("dashboard/seller/categories/paginate",{params:e}),getById:(e,t)=>l.Z.get(`dashboard/seller/categories/${e}`,{params:t}),search:e=>l.Z.get("dashboard/seller/categories/search",{params:e}),paginateSelect:e=>l.Z.get("dashboard/seller/categories/select-paginate",{params:e})}},33454:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var l=a(73591),s=a(24511),n=a(97890),d=a(47313),i=a(54757),o=a(12019),r=a(66407),c=a(47515),u=a(55768),v=a(26824),h=a(66204),p=a(45705),m=a(86345),x=a(59491),g=a(77181),Z=a(78508),j=a(9274),f=a(23560),y=a(97421),b=a(74580),w=a(69658),C=a(2717),_=a(90954),S=a(18333),k=a(95882),I=a(13945),z=a(80314),M=a(41481),N=a(89281),V=a(11101),$=a(29955),A=a(55940),P=a(53233),H=a(3925),O=a(51988),T=a(46417);const{TabPane:R}=l.Z,q=["blue","red","gold","volcano","cyan","lime"],W=["all","published","pending","unpublished"],U=()=>{var e,t,a,U,K,E,F,L,B,D;const{t:Q}=(0,s.$)(),G=(0,C.I0)(),J=(0,n.s0)(),[X,Y]=(0,d.useState)(null),[ee,te]=(0,d.useState)("all"),[ae,le]=(0,d.useState)(null),[se,ne]=(0,d.useState)(!1),[de,ie]=(0,d.useState)(""),oe=()=>{G((0,_.nc)({activeMenu:Ze,data:null}))},[re,ce]=(0,d.useState)([{title:Q("id"),dataIndex:"id",is_show:!0,sorter:(e,t)=>e.id-t.id},{title:Q("image"),dataIndex:"img",is_show:!0,render:(e,t)=>(0,T.jsx)(v.Z,{width:100,src:y.bV+e,placeholder:!0,style:{borderRadius:4}})},{title:Q("name"),dataIndex:"name",is_show:!0},{title:Q("status"),is_show:!0,dataIndex:"status",key:"status",render:e=>(0,T.jsx)("div",{children:"published"===e?(0,T.jsx)(h.Z,{color:"blue",children:Q(e)}):"unpublished"===e?(0,T.jsx)(h.Z,{color:"error",children:Q(e)}):(0,T.jsx)(h.Z,{color:"cyan",children:Q(e)})})},{title:Q("translations"),dataIndex:"locales",is_show:!0,render:(e,t)=>{var a;return(0,T.jsx)(p.Z,{children:null===(a=t.locales)||void 0===a?void 0:a.map(((e,t)=>(0,T.jsx)(h.Z,{className:"text-uppercase",color:[q[t]],children:e})))})}},{title:Q("shop"),dataIndex:"shop_id",is_show:!0,render:(e,t)=>{var a,l;return null===t||void 0===t||null===(a=t.shop)||void 0===a||null===(l=a.translation)||void 0===l?void 0:l.title}},{title:Q("category"),dataIndex:"category_name",is_show:!0},{title:Q("active"),dataIndex:"active",is_show:!0,render:(e,t)=>(0,T.jsx)(m.Z,{onChange:()=>{ue(!0),le(t.uuid),Y(!0)},checked:e})},{title:Q("options"),dataIndex:"options",is_show:!0,render:(e,t)=>(0,T.jsxs)(p.Z,{children:["unpublished"===(null===t||void 0===t?void 0:t.status)&&(null===t||void 0===t?void 0:t.status_note)&&(0,T.jsx)(x.Z,{icon:(0,T.jsx)(i.Z,{}),onClick:()=>{ne(!0),ie(t.status_note)}}),(0,T.jsx)(x.Z,{type:"primary",icon:(0,T.jsx)(o.Z,{}),onClick:()=>(e=>{G((0,_.bL)({id:"product-edit",url:`seller/product/${e.uuid}`,name:Q("edit.product")})),oe(),J(`/seller/product/${e.uuid}`)})(t)}),(0,T.jsx)(x.Z,{icon:(0,T.jsx)(r.Z,{}),onClick:()=>(e=>{G((0,_.bL)({id:"product-clone",url:`seller/product-clone/${e.uuid}`,name:Q("clone.product")})),oe(),J(`/seller/product-clone/${e.uuid}`)})(t)}),(0,T.jsx)(A.Z,{icon:(0,T.jsx)(c.Z,{}),onClick:()=>{ue(!0),le([t.id]),ge(!0),Y(!1)}})]})}]),{setIsModalVisible:ue}=(0,d.useContext)(b._),[ve,he]=(0,d.useState)(!1),[pe,me]=(0,d.useState)(!1),[xe,ge]=(0,d.useState)(null),{activeMenu:Ze}=(0,C.v9)((e=>e.menu),C.wU),{products:je,meta:fe,loading:ye,params:be}=(0,C.v9)((e=>e.product),C.wU),{myShop:we}=(0,C.v9)((e=>e.myShop),C.wU),Ce=(null===(e=Ze.data)||void 0===e?void 0:e.role)||ee,_e=Ze.data,Se={search:null===_e||void 0===_e?void 0:_e.search,brand_id:null===_e||void 0===_e||null===(t=_e.brand)||void 0===t?void 0:t.value,category_id:null===_e||void 0===_e||null===(a=_e.category)||void 0===a?void 0:a.value,status:"all"===Ce?void 0:Ce,sort:null===_e||void 0===_e?void 0:_e.sort,column:null===_e||void 0===_e?void 0:_e.column,perPage:null===_e||void 0===_e?void 0:_e.perPage,page:null===_e||void 0===_e?void 0:_e.page};(0,z.Z)((()=>{G((0,k.MW)(Se))}),[Ze.data]),(0,d.useEffect)((()=>{Ze.refetch&&(G((0,k.MW)(Se)),G((0,_.A_)(Ze)))}),[Ze.refetch]);const ke=e=>{const t=Ze.data;G((0,_.nc)({activeMenu:Ze,data:{...t,...e}}))},Ie={selectedRowKeys:ae,onChange:e=>{le(e)}};return(0,T.jsxs)(d.Fragment,{children:[(0,T.jsx)(g.Z,{className:"p-0",title:Q("product.list"),extra:(0,T.jsxs)(p.Z,{wrap:!0,children:[(0,T.jsx)(N.h,{placeholder:Q("select.category"),fetchOptions:async function(e){const t={search:0===e.length?null:e,type:"main",perPage:5};return $.Z.search(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}))},style:{minWidth:150},onChange:e=>ke({category:e}),value:null===(U=Ze.data)||void 0===U?void 0:U.category}),(0,T.jsx)(N.h,{placeholder:Q("select.brand"),fetchOptions:async function(e){const t={shop_id:null===we||void 0===we?void 0:we.id,search:e};return V.Z.getAll(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.title,value:e.id})))}))},style:{minWidth:150},onChange:e=>ke({brand:e}),value:null===(K=Ze.data)||void 0===K?void 0:K.brand}),(0,T.jsx)(x.Z,{icon:(0,T.jsx)(u.Z,{}),type:"primary",onClick:()=>{G((0,_.bL)({id:"product-add",url:"seller/product/add",name:Q("add.product")})),oe(),J("/seller/product/add")},children:Q("add.product")}),(0,T.jsx)(P.Z,{columns:re,setColumns:ce})]}),children:(0,T.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,T.jsx)(M.Z,{placeholder:Q("search"),handleChange:e=>ke({search:e}),defaultValue:null===(E=Ze.data)||void 0===E?void 0:E.search,resetSearch:!(null!==(F=Ze.data)&&void 0!==F&&F.search),className:"w-25"}),(0,T.jsxs)(p.Z,{wrap:!0,children:[(0,T.jsxs)(x.Z,{onClick:()=>{G((0,_.bL)({id:"seller-product-import",url:"seller/product/import",name:Q("product.import")})),J("/seller/product/import")},children:[(0,T.jsx)(H.o5r,{className:"mr-2"}),Q("import")]}),(0,T.jsxs)(x.Z,{loading:pe,onClick:()=>{var e,t,a,l;me(!0);const s={shop_id:null===we||void 0===we?void 0:we.id,category_id:null===Ze||void 0===Ze||null===(e=Ze.data)||void 0===e||null===(t=e.category)||void 0===t?void 0:t.value,brand_id:null===Ze||void 0===Ze||null===(a=Ze.data)||void 0===a||null===(l=a.brand)||void 0===l?void 0:l.value};S.Z.export(s).then((e=>{const t=y.S0+e.data.file_name;window.location.href=t})).finally((()=>me(!1)))},children:[(0,T.jsx)(H.bwQ,{className:"mr-2"}),Q("export")]}),(0,T.jsx)(A.Z,{size:"",onClick:()=>{null===ae||0===ae.length?f.Am.warning(Q("select.the.product")):(ue(!0),ge(!1))},children:Q("delete.selected")})]})]})}),(0,T.jsxs)(g.Z,{children:[(0,T.jsx)(l.Z,{className:"mt-3",activeKey:Ce,onChange:e=>{ke({role:e,page:1}),te(e)},type:"card",children:W.map((e=>(0,T.jsx)(R,{tab:Q(e)},e)))}),(0,T.jsx)(Z.Z,{locale:{emptyText:(0,T.jsx)(O.Z,{})},scroll:{x:!0},rowSelection:Ie,loading:ye,columns:null===re||void 0===re?void 0:re.filter((e=>e.is_show)),dataSource:je,pagination:{pageSize:be.perPage,page:(null===(L=Ze.data)||void 0===L?void 0:L.page)||1,total:fe.total,defaultCurrent:null===(B=Ze.data)||void 0===B?void 0:B.page,current:null===(D=Ze.data)||void 0===D?void 0:D.page},onChange:function(e,t,a){const{pageSize:l,current:s}=e,{field:n,order:d}=a,i=(0,I.Z)(d);G((0,_.nc)({activeMenu:Ze,data:{...Ze.data,perPage:l,page:s,column:n,sort:i}}))},rowKey:e=>e.id})]}),(0,T.jsx)(w.Z,{click:X?()=>{he(!0),S.Z.setActive(ae).then((()=>{ue(!1),G((0,k.MW)(Se)),f.Am.success(Q("successfully.updated")),Y(!0)})).finally((()=>he(!1)))}:()=>{he(!0);const e={...Object.assign({},...ae.map(((e,t)=>({[`ids[${t}]`]:e}))))};S.Z.delete(e).then((()=>{ue(!1),f.Am.success(Q("successfully.deleted")),G((0,k.MW)(e))})).finally((()=>he(!1)))},text:Q(X?"set.active.product":xe?"delete":"all.delete"),loading:ve,setText:le,setActive:Y}),(0,T.jsxs)(j.Z,{title:"Reject message",closable:!1,visible:se,footer:null,centered:!0,children:[(0,T.jsx)("p",{children:de}),(0,T.jsx)("div",{className:"d-flex justify-content-end",children:(0,T.jsx)(x.Z,{type:"primary",className:"mr-2",onClick:()=>ne(!1),children:"Close"})})]})]})};var K=a(45464),E=a(71810),F=a(4901),L=a(81218);const B={type:"product"};function D(e){var t,a,l;let{parentId:r}=e;const{t:u}=(0,s.$)(),{setIsModalVisible:m}=(0,d.useContext)(b._),[y,S]=(0,d.useState)(!1),[k,M]=(0,d.useState)(!1),[N,V]=(0,d.useState)(""),[$,A]=(0,d.useState)(null),H=(0,C.I0)(),O=(0,n.s0)(),{activeMenu:R}=(0,C.v9)((e=>e.menu),C.wU),{data:q,meta:W,loading:U,params:D}=(0,C.v9)((e=>e.requestModels),C.wU),Q=R.data,{uuid:G}=(0,n.UO)(),J={search:null===Q||void 0===Q?void 0:Q.search,sort:null===Q||void 0===Q?void 0:Q.sort,column:null===Q||void 0===Q?void 0:Q.column,perPage:null===Q||void 0===Q?void 0:Q.perPage,page:null===Q||void 0===Q?void 0:Q.page,parent_id:r,type:"product"},[X,Y]=(0,d.useState)([{title:u("name"),dataIndex:"name",key:"name",is_show:!0,render:(e,t)=>{var a,l,s;return(0,T.jsxs)(p.Z,{children:[null===(a=t.model)||void 0===a?void 0:a.translation.title," ",(0,T.jsx)(F.WFu,{})," ",t.data[`title[${null===(l=t.model)||void 0===l||null===(s=l.translation)||void 0===s?void 0:s.locale}]`]]})}},{title:u("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>{var a,l,s,n;return(0,T.jsxs)(p.Z,{children:[(0,T.jsx)(v.Z,{src:(0,K.Z)(null===(a=t.model)||void 0===a?void 0:a.img),alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0}),(0,T.jsx)(F.WFu,{}),(0,T.jsx)(v.Z,{src:(0,K.Z)((null===(l=t.data.images)||void 0===l||null===(s=l.at(0))||void 0===s?void 0:s.url)||(null===(n=t.data.images)||void 0===n?void 0:n.at(0))),alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})]})}},{title:u("status"),is_show:!0,dataIndex:"status",key:"status",render:(e,t)=>(0,T.jsx)("div",{children:"pending"===e?(0,T.jsx)(h.Z,{color:"blue",children:u(e)}):"canceled"===e?(0,T.jsx)(h.Z,{color:"error",children:u(e)}):(0,T.jsx)(h.Z,{color:"cyan",children:u(e)})})},{title:u("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,T.jsxs)(p.Z,{children:["canceled"===(null===t||void 0===t?void 0:t.status)&&(null===t||void 0===t?void 0:t.status_note)&&(0,T.jsx)(x.Z,{icon:(0,T.jsx)(i.Z,{}),onClick:()=>{M(!0),V(t.status_note)}}),(0,T.jsx)(x.Z,{icon:(0,T.jsx)(o.Z,{}),onClick:()=>(e=>{H((0,_.bL)({url:`seller/product-request/${e.id}`,id:"product_request_edit",name:u("product.request.edit")})),O(`/seller/product-request/${e.id}`,{state:{parentId:r,parentUuid:G}})})(t)}),(0,T.jsx)(x.Z,{danger:!0,icon:(0,T.jsx)(c.Z,{}),type:"primary",onClick:()=>{A([t.id]),m(!0)}})]})}]);(0,d.useEffect)((()=>{H((0,E._7)(J)),H((0,_.A_)(R))}),[R.refetch]),(0,z.Z)((()=>{H((0,E._7)(J))}),[R.data]);const ee={selectedRowKeys:$,onChange:e=>{A(e)}};return(0,T.jsxs)(g.Z,{title:u("requests"),extra:(0,T.jsx)(p.Z,{wrap:!0,children:(0,T.jsx)(P.Z,{columns:X,setColumns:Y})}),children:[(0,T.jsx)(Z.Z,{scroll:{x:!0},rowSelection:ee,columns:null===X||void 0===X?void 0:X.filter((e=>e.is_show)),dataSource:q,pagination:{pageSize:D.perPage,page:(null===(t=R.data)||void 0===t?void 0:t.page)||1,total:W.total,defaultCurrent:null===(a=R.data)||void 0===a?void 0:a.page,current:null===(l=R.data)||void 0===l?void 0:l.page},rowKey:e=>e.key,onChange:function(e,t,a){const{pageSize:l,current:s}=e,{field:n,order:d}=a,i=(0,I.Z)(d);H((0,_.nc)({activeMenu:R,data:{...R.data,perPage:l,page:s,column:n,sort:i}}))},loading:U}),(0,T.jsx)(w.Z,{click:()=>{S(!0);const e={...Object.assign({},...$.map(((e,t)=>({[`ids[${t}]`]:e}))))};L.Z.delete(e).then((()=>{f.Am.success(u("successfully.deleted")),H((0,E._7)(B)),m(!1)})).finally((()=>S(!1)))},text:u("delete"),setText:A,loading:y}),(0,T.jsxs)(j.Z,{title:"Reject message",closable:!1,visible:k,footer:null,centered:!0,children:[(0,T.jsx)("p",{children:N}),(0,T.jsx)("div",{className:"d-flex justify-content-end",children:(0,T.jsx)(x.Z,{type:"primary",className:"mr-2",onClick:()=>M(!1),children:"Close"})})]})]})}function Q(){var e;const{t:t}=(0,s.$)(),a=(0,n.TH)();return(0,T.jsxs)(l.Z,{defaultActiveKey:(null===(e=a.state)||void 0===e?void 0:e.tab)||"list",destroyInactiveTabPane:!0,children:[(0,T.jsx)(l.Z.TabPane,{tab:t("product.list"),children:(0,T.jsx)(U,{})},"list"),(0,T.jsx)(l.Z.TabPane,{tab:t("requests"),children:(0,T.jsx)(D,{})},"request")]})}},55768:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(1413),s=a(47313);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var d=a(17469),i=function(e,t){return s.createElement(d.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:n}))};i.displayName="PlusCircleOutlined";const o=s.forwardRef(i)},99587:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(1413),s=a(47313);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var d=a(17469),i=function(e,t){return s.createElement(d.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:n}))};i.displayName="TableOutlined";const o=s.forwardRef(i)}}]);