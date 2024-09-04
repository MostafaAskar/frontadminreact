"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5037],{89281:(e,t,r)=>{r.d(t,{h:()=>s});var l=r(47313),o=r(12279),n=r.n(o),d=r(74294),i=r(72652),a=r(46417);const s=e=>{let{fetchOptions:t,debounceTimeout:r=400,onClear:o,refetchOptions:s=!1,...u}=e;const[v,c]=(0,l.useState)(!1),[h,p]=(0,l.useState)([]),f=(0,l.useMemo)((()=>n()((e=>{p([]),c(!0),t(e).then((e=>{p(e),c(!1)}))}),r)),[t,r]);return(0,a.jsx)(d.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:f,onClear:()=>{f(""),o&&o()},notFoundContent:v?(0,a.jsx)(i.Z,{size:"small"}):"no results",...u,options:h,onFocus:()=>{h.length&&!s||f("")}})}},13945:(e,t,r)=>{function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}r.d(t,{Z:()=>l})},84017:(e,t,r)=>{function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const l=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===r?`${l} ${t}`:`${t} ${l}`}r.d(t,{Z:()=>l})},75037:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var l=r(47313),o=r(99096),n=r(77181),d=r(45705),i=r(78508),a=r(97890),s=r(2717),u=r(90954),v=r(24511),c=r(80314),h=r(13945),p=r(84017),f=r(89281),_=r(49986),m=r(70816),y=r.n(m),g=r(53149),x=r(10924),w=r(46417);const{RangePicker:Y}=o.Z;function Z(){var e,t,r,o,m,Z,k;const{type:M}=(0,a.UO)(),j=(0,s.I0)(),D=(0,a.s0)(),{t:b}=(0,v.$)(),{defaultCurrency:C}=(0,s.v9)((e=>e.currency),s.wU),I=[{title:b("order.id"),is_show:!0,dataIndex:"order_id",key:"order_id",sorter:!0,render:e=>(0,w.jsxs)("span",{className:"text-hover",onClick:()=>(e=>{j((0,u.bL)({url:`order/details/${e}`,id:"order_details",name:b("order.details")})),D(`/order/details/${e}`)})(e),children:["#",e]})},{title:b(M),is_show:!0,dataIndex:"user",key:"user",render:(e,t)=>{const r=null===t||void 0===t?void 0:t.user;return(0,w.jsxs)("div",{children:[null===r||void 0===r?void 0:r.firstname," ",(null===r||void 0===r?void 0:r.lastname)||""]})}},{title:b("order.total_price"),is_show:!0,dataIndex:"transaction",key:"transaction",render:(e,t)=>{var r;null===e||void 0===e||e.status;return(0,w.jsx)("span",{children:(0,p.Z)(null===t||void 0===t||null===(r=t.order)||void 0===r?void 0:r.total_price,C.symbol)})}},..."seller"===M?[{title:b("coupon.price"),is_show:!0,dataIndex:"coupon_price",key:"coupon_price",render:e=>(0,p.Z)(e)}]:[],..."seller"===M?[{title:b("total.cashback"),is_show:!0,dataIndex:"point_histories",key:"point_histories",render:e=>{var t;return(0,p.Z)(null===e||void 0===e||null===(t=e[0])||void 0===t?void 0:t.price)}}]:[],{title:b("delivery.fee"),is_show:!0,dataIndex:"delivery_fee",key:"delivery_fee",render:(e,t)=>{var r;return(0,p.Z)(null===t||void 0===t||null===(r=t.order)||void 0===r?void 0:r.delivery_fee)}},..."seller"===M?[{title:b("service.fee"),is_show:!0,dataIndex:"service_fee",key:"service_fee",render:(e,t)=>{var r;return(0,p.Z)(((null===t||void 0===t||null===(r=t.order)||void 0===r?void 0:r.service_fee)||0)+((null===t||void 0===t?void 0:t.order.commission_fee)||0))}}]:[],..."seller"===M?[{title:b("seller.fee"),is_show:!0,dataIndex:"seller_fee",key:"seller_fee",render:(e,t)=>{var r;return(0,p.Z)(null===t||void 0===t||null===(r=t.order)||void 0===r?void 0:r.seller_fee)}}]:[],{title:b("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:e=>{var t;return b(null===e||void 0===e||null===(t=e.payment_system)||void 0===t?void 0:t.tag)||"-"}}],{activeMenu:$}=(0,s.v9)((e=>e.menu),s.wU),[S,O]=(0,l.useState)(y()().subtract(1,"month"),y()()),{completedList:P,loading:A,params:z,meta:F}=(0,s.v9)((e=>e.paymentToPartners),s.wU),N=$.data,U={search:null===N||void 0===N?void 0:N.search,sort:null===N||void 0===N?void 0:N.sort,column:null===N||void 0===N?void 0:N.column,perPage:null===N||void 0===N?void 0:N.perPage,page:null===N||void 0===N?void 0:N.page,user_id:null===N||void 0===N?void 0:N.user_id,shop_id:null!==(null===(e=$.data)||void 0===e?void 0:e.shop_id)?null===(t=$.data)||void 0===t?void 0:t.shop_id:null,date_from:Array.isArray(S)?null===(r=S[0])||void 0===r?void 0:r.format("YYYY-MM-DD"):y()().subtract(1,"month").format("YYYY-MM-DD"),date_to:Array.isArray(S)?null===(o=S[1])||void 0===o?void 0:o.format("YYYY-MM-DD"):y()().format("YYYY-MM-DD"),type:M};(0,c.Z)((()=>{j((0,x.kR)(U))}),[N,S,M]);const R=(e,t)=>{j((0,u.nc)({activeMenu:$,data:{...N,[t]:e}}))};return(0,l.useEffect)((()=>{null!==$&&void 0!==$&&$.refetch&&(j((0,x.kR)(U)),j((0,u.A_)($)))}),[null===$||void 0===$?void 0:$.refetch]),(0,l.useEffect)((()=>()=>{j((0,u.nc)({activeMenu:$,data:{}}))}),[]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(n.Z,{children:(0,w.jsx)("div",{className:"flex justify-content-space-between",children:(0,w.jsxs)(d.Z,{wrap:!0,className:"order-filter",style:{flex:1,width:"100%"},children:[(0,w.jsx)(f.h,{placeholder:b("select.shop"),fetchOptions:async function(e){const t={search:e,status:"approved"};return g.Z.getAll(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}))},style:{width:"100%"},onSelect:e=>R(e.value,"shop_id"),onDeselect:()=>R(null,"shop_id"),allowClear:!0,value:null===N||void 0===N?void 0:N.shop_id}),(0,w.jsx)(f.h,{placeholder:b("select.user"),fetchOptions:async function(e){const t={search:e,perPage:10,role:M};return _.Z.search(t).then((e=>{let{data:t}=e;return t.map((e=>({label:`${e.firstname} ${e.lastname}`,value:e.id})))}))},onSelect:e=>R(e.value,"user_id"),onDeselect:()=>R(null,"user_id"),style:{width:"100%"},value:null===N||void 0===N?void 0:N.user_id}),(0,w.jsx)(Y,{value:S,onChange:e=>{R((t=>{var r,l;return{...t,date_from:null===e||void 0===e||null===(r=e[0])||void 0===r?void 0:r.format("YYYY-MM-DD"),date_to:null===e||void 0===e||null===(l=e[1])||void 0===l?void 0:l.format("YYYY-MM-DD")}})),O(e)},disabledDate:e=>e&&e>y()().endOf("day"),style:{width:"100%"}})]})})}),(0,w.jsx)(n.Z,{children:(0,w.jsx)(i.Z,{scroll:{x:!0},columns:null===I||void 0===I?void 0:I.filter((e=>e.is_show)),dataSource:P,loading:A,pagination:{pageSize:z.perPage,page:(null===(m=$.data)||void 0===m?void 0:m.page)||1,total:null===F||void 0===F?void 0:F.total,defaultCurrent:null===(Z=$.data)||void 0===Z?void 0:Z.page,current:null===(k=$.data)||void 0===k?void 0:k.page},rowKey:e=>null===e||void 0===e?void 0:e.id,onChange:function(e,t,r){const{pageSize:l,current:o}=e,{field:n,order:d}=r,i=(0,h.Z)(d);j((0,u.nc)({activeMenu:$,data:{...N,perPage:l,page:o,column:n,sort:i}}))}})})]})}}}]);