"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6916],{46916:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var i=n(47313),l=n(10976),a=n(77181),o=n(73431),u=n(97890),d=n(23861),r=n(70816),s=n.n(r),c=n(2717),v=n(90954),p=n(24511),f=n(15366),h=n(83106),m=n(23560),x=n(46417);const Y=()=>{const{t:e}=(0,p.$)(),[t]=l.Z.useForm(),[n,r]=(0,i.useState)(!1),{languages:Y}=(0,c.v9)((e=>e.formLang),c.wU),_=(0,c.I0)(),b=(0,u.s0)(),{id:g}=(0,u.UO)(),{activeMenu:y}=(0,c.v9)((e=>e.menu),c.wU);function M(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,n=Y.map((e=>{var n;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title}}));return Object.assign({},...n)}return(0,i.useEffect)((()=>{y.refetch&&function(e){r(!0),d.Z.getById(e).then((e=>{var n,i,l,a;let{data:o}=e;const u={...o,shop_id:{label:null===o||void 0===o||null===(n=o.shop)||void 0===n||null===(i=n.translation)||void 0===i?void 0:i.title,value:null===o||void 0===o||null===(l=o.shop)||void 0===l?void 0:l.id,key:null===o||void 0===o||null===(a=o.shop)||void 0===a?void 0:a.id},...M(o),expired_at:s()(o.expired_at,"YYYY-MM-DD")};t.setFieldsValue({...u}),_((0,v.nc)({activeMenu:y,data:{...u,expired_at:JSON.stringify(null===u||void 0===u?void 0:u.expired_at)}}))})).finally((()=>{r(!1),_((0,v.A_)(y))}))}(g)}),[y.refetch]),(0,x.jsx)(a.Z,{title:e("edit.coupon"),extra:(0,x.jsx)(o.Z,{}),loading:n,children:(0,x.jsx)(h.Z,{form:t,handleSubmit:t=>{const n={...t,expired_at:s()(t.expired_at).format("YYYY-MM-DD"),qty:Number(t.qty),price:Number(t.price)},i="coupons";d.Z.update(g,n).then((()=>{m.Am.success(e("toast.updated")),(0,c.dC)((()=>{_((0,v.ph)({...y,nextUrl:i})),_((0,f.v)({}))})),b("/coupons")}))}})})}}}]);