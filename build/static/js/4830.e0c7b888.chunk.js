"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4830],{14830:(e,t,s)=>{s.r(t),s.d(t,{default:()=>I});var i=s(47313),r=s(31741),d=s(47515),a=s(55613),l=s(45705),n=s(59491),o=s(77181),u=s(78508),c=s(23560),v=s(69658),h=s(74580),p=s(2717),x=s(90954),g=s(80314),m=s(13945),f=s(24511),w=s(94765),j=s(27290),k=s(27266),Z=s(70816),C=s.n(Z),_=s(97890),y=s(55940),S=s(53233),b=s(46417);function I(){const{t:e}=(0,f.$)(),t=(0,p.I0)(),s=(0,_.s0)(),[Z,I]=(0,i.useState)([{title:e("order.id"),dataIndex:"order",key:"order",render:i=>(0,b.jsxs)("div",{className:"text-hover",onClick:()=>(i=>{t((0,x.bL)({id:"order_details",url:`order/details/${i}`,name:e("order.details")})),s(`/order/details/${i}`)})(i.id),children:["#",i.id]}),sorter:!0,is_show:!0},{title:e("user"),dataIndex:"user",key:"user",is_show:!0,render:i=>(0,b.jsxs)("div",{className:"text-hover",onClick:()=>{return r=i,t((0,x.bL)({url:`/users/user/${r.uuid}`,id:"user_info",name:e("user.info")})),void s(`/users/user/${r.uuid}`,{state:{user_id:r.id}});var r},children:[null===i||void 0===i?void 0:i.firstname," ",(null===i||void 0===i?void 0:i.lastname)||""]})},{title:e("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:i=>{var r;return(0,b.jsx)("div",{className:"text-hover",onClick:()=>{return r=i,t((0,x.bL)({id:"edit-shop",url:`shop/${r.uuid}`,name:e("edit.shop")})),void s(`/shop/${r.uuid}`);var r},children:null===i||void 0===i||null===(r=i.translation)||void 0===r?void 0:r.title})}},{title:e("rating"),dataIndex:"rating",key:"rating",is_show:!0,render:e=>(0,b.jsx)(a.Z,{disabled:!0,defaultValue:e})},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:e=>C()(e).format("DD.MM.YYYY")},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,b.jsxs)(l.Z,{children:[(0,b.jsx)(n.Z,{type:"primary",icon:(0,b.jsx)(r.Z,{}),onClick:()=>P(t.id)}),(0,b.jsx)(y.Z,{icon:(0,b.jsx)(d.Z,{}),onClick:()=>{z([t.id]),$(!0),W(!0)}})]})}]),{setIsModalVisible:$}=(0,i.useContext)(h._),[N,z]=(0,i.useState)(null),[M,P]=(0,i.useState)(null),[Y,A]=(0,i.useState)(!1),[L,W]=(0,i.useState)(null),{activeMenu:D}=(0,p.v9)((e=>e.menu),p.wU),{reviews:U,meta:V,loading:E,params:K}=(0,p.v9)((e=>e.orderReview),p.wU);(0,i.useEffect)((()=>{D.refetch&&(t((0,j.WN)()),t((0,x.A_)(D)))}),[D.refetch]),(0,g.Z)((()=>{const e=D.data,s={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,j.WN)(s))}),[D.data]);const O={id:N,onChange:e=>{z(e)}};return(0,b.jsxs)(o.Z,{title:e("order.reviews"),extra:(0,b.jsxs)(l.Z,{wrap:!0,children:[(0,b.jsx)(y.Z,{size:"",onClick:()=>{null===N||0===N.length?c.Am.warning(e("select.the.product")):($(!0),W(!1))},children:e("delete.selected")}),(0,b.jsx)(S.Z,{columns:Z,setColumns:I})]}),children:[(0,b.jsx)(u.Z,{scroll:{x:!0},rowSelection:O,columns:null===Z||void 0===Z?void 0:Z.filter((e=>e.is_show)),dataSource:U,pagination:{pageSize:K.perPage,page:K.page,total:V.total,defaultCurrent:K.page},rowKey:e=>e.id,onChange:function(e,s,i){const{pageSize:r,current:d}=e,{field:a,order:l}=i,n=(0,m.Z)(l);t((0,x.nc)({activeMenu:D,data:{perPage:r,page:d,column:a,sort:n}}))},loading:E}),(0,b.jsx)(v.Z,{click:()=>{A(!0);const s={...Object.assign({},...N.map(((e,t)=>({[`ids[${t}]`]:e}))))};w.Z.delete(s).then((()=>{c.Am.success(e("successfully.deleted")),t((0,j.WN)()),$(!1)})).finally((()=>A(!1)))},text:e(L?"delete":"all.delete"),setText:z,loading:Y}),M&&(0,b.jsx)(k.Z,{id:M,handleCancel:()=>P(null)})]})}}}]);