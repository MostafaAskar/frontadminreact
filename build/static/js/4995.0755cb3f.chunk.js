"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4995],{13945:(e,r,d)=>{function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}d.d(r,{Z:()=>i})},84017:(e,r,d)=>{function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const i=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===d?`${i} ${r}`:`${r} ${i}`}d.d(r,{Z:()=>i})},84995:(e,r,d)=>{d.r(r),d.d(r,{default:()=>Y});var i=d(47313),t=d(99096),o=d(77181),n=d(45705),a=d(78508),l=d(97890),s=d(2717),v=d(90954),u=d(24511),c=d(80314),f=d(13945),p=d(84017),h=d(70816),_=d.n(h),m=d(10924),y=d(46417);const{RangePicker:g}=t.Z;function Y(){var e,r,d,t,h,Y,x;const{type:w}=(0,l.UO)(),M=(0,s.I0)(),{t:Z}=(0,u.$)(),{defaultCurrency:k}=(0,s.v9)((e=>e.currency),s.wU),D=[{title:Z("order.id"),is_show:!0,dataIndex:"order_id",key:"order_id",sorter:!0,render:e=>(0,y.jsxs)("span",{className:"text-hover",children:["#",e]})},{title:Z("order.total_price"),is_show:!0,dataIndex:"transaction",key:"transaction",render:(e,r)=>{var d;return(0,y.jsx)("span",{children:(0,p.Z)(null===r||void 0===r||null===(d=r.order)||void 0===d?void 0:d.total_price,k.symbol)})}},{title:Z("coupon.price"),is_show:!0,dataIndex:"coupon_price",key:"coupon_price",render:e=>(0,p.Z)(e)},{title:Z("total.cashback"),is_show:!0,dataIndex:"point_histories",key:"point_histories",render:e=>{var r;return(0,p.Z)(null===e||void 0===e||null===(r=e[0])||void 0===r?void 0:r.price)}},{title:Z("delivery.fee"),is_show:!0,dataIndex:"delivery_fee",key:"delivery_fee",render:(e,r)=>{var d;return(0,p.Z)(null===r||void 0===r||null===(d=r.order)||void 0===d?void 0:d.delivery_fee)}},{title:Z("service.fee"),is_show:!0,dataIndex:"service_fee",key:"service_fee",render:(e,r)=>{var d;return(0,p.Z)(((null===r||void 0===r||null===(d=r.order)||void 0===d?void 0:d.service_fee)||0)+((null===r||void 0===r?void 0:r.order.commission_fee)||0))}},{title:Z("seller.fee"),is_show:!0,dataIndex:"seller_fee",key:"seller_fee",render:(e,r)=>{var d;return(0,p.Z)(null===r||void 0===r||null===(d=r.order)||void 0===d?void 0:d.seller_fee)}},{title:Z("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:e=>{var r;return Z(null===e||void 0===e||null===(r=e.payment_system)||void 0===r?void 0:r.tag)||"-"}}],{activeMenu:j}=(0,s.v9)((e=>e.menu),s.wU),[b,I]=(0,i.useState)(_()().subtract(1,"month"),_()()),{list:$,loading:C,params:P,meta:A}=(0,s.v9)((e=>e.paymentToPartners),s.wU),z=j.data,N={search:null===z||void 0===z?void 0:z.search,sort:null===z||void 0===z?void 0:z.sort,column:null===z||void 0===z?void 0:z.column,perPage:null===z||void 0===z?void 0:z.perPage,page:null===z||void 0===z?void 0:z.page,user_id:null===z||void 0===z?void 0:z.user_id,shop_id:null!==(null===(e=j.data)||void 0===e?void 0:e.shop_id)?null===(r=j.data)||void 0===r?void 0:r.shop_id:null,date_from:Array.isArray(b)?null===(d=b[0])||void 0===d?void 0:d.format("YYYY-MM-DD"):_()().subtract(1,"month").format("YYYY-MM-DD"),date_to:Array.isArray(b)?null===(t=b[1])||void 0===t?void 0:t.format("YYYY-MM-DD"):_()().format("YYYY-MM-DD"),type:w};(0,c.Z)((()=>{M((0,m.W$)(N))}),[z,b,w]);return(0,i.useEffect)((()=>{null!==j&&void 0!==j&&j.refetch&&(M((0,m.W$)(N)),M((0,v.A_)(j)))}),[null===j||void 0===j?void 0:j.refetch]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o.Z,{children:(0,y.jsx)("div",{className:"flex justify-content-space-between",children:(0,y.jsx)(n.Z,{wrap:!0,className:"order-filter",style:{flex:1,width:"100%"},children:(0,y.jsx)(g,{value:b,onChange:e=>{var r,d;r=r=>{var d,i;return{...r,date_from:null===e||void 0===e||null===(d=e[0])||void 0===d?void 0:d.format("YYYY-MM-DD"),date_to:null===e||void 0===e||null===(i=e[1])||void 0===i?void 0:i.format("YYYY-MM-DD")}},M((0,v.nc)({activeMenu:j,data:{...z,[d]:r}})),I(e)},disabledDate:e=>e&&e>_()().endOf("day"),style:{width:"100%"}})})})}),(0,y.jsx)(o.Z,{children:(0,y.jsx)(a.Z,{scroll:{x:!0},columns:null===D||void 0===D?void 0:D.filter((e=>e.is_show)),dataSource:$,loading:C,pagination:{pageSize:P.perPage,page:(null===(h=j.data)||void 0===h?void 0:h.page)||1,total:null===A||void 0===A?void 0:A.total,defaultCurrent:null===(Y=j.data)||void 0===Y?void 0:Y.page,current:null===(x=j.data)||void 0===x?void 0:x.page},rowKey:e=>e.id,onChange:function(e,r,d){const{pageSize:i,current:t}=e,{field:o,order:n}=d,a=(0,f.Z)(n);M((0,v.nc)({activeMenu:j,data:{...z,perPage:i,page:t,column:o,sort:a}}))}})})]})}}}]);