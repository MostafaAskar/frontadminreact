"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1175],{89802:(e,t,n)=>{n.d(t,{q:()=>r});var s=n(47313),l=n(74294),a=n(72652),i=n(46417);const r=e=>{let{fetchOptions:t,refetch:n=!1,value:r,...o}=e;const[u,c]=(0,s.useState)(!1),[d,h]=(0,s.useState)([]);"object"===typeof(null===r||void 0===r?void 0:r.label)&&null!==(null===r||void 0===r?void 0:r.label)&&(r.label=r.label.value);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.Z,{labelInValue:!0,filterOption:!1,notFoundContent:u?(0,i.jsx)(a.Z,{size:"small"}):"no results",value:r,...o,options:u?[]:d,onFocus:()=>{d.length&&!n||(c(!0),t().then((e=>{h(e),c(!1)})))}})})}},89281:(e,t,n)=>{n.d(t,{h:()=>u});var s=n(47313),l=n(12279),a=n.n(l),i=n(74294),r=n(72652),o=n(46417);const u=e=>{let{fetchOptions:t,debounceTimeout:n=400,onClear:l,refetchOptions:u=!1,...c}=e;const[d,h]=(0,s.useState)(!1),[m,p]=(0,s.useState)([]),v=(0,s.useMemo)((()=>a()((e=>{p([]),h(!0),t(e).then((e=>{p(e),h(!1)}))}),n)),[t,n]);return(0,o.jsx)(i.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:v,onClear:()=>{v(""),l&&l()},notFoundContent:d?(0,o.jsx)(r.Z,{size:"small"}):"no results",...c,options:m,onFocus:()=>{m.length&&!u||v("")}})}},71175:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var s=n(47313),l=n(97890),a=n(23560),i=n(10976),r=n(77181),o=n(68197),u=n(59624),c=n(66672),d=n(16124),h=n(59491),m=n(2717),p=n(90954),v=n(24511),x=n(16895),b=n(73459),j=(n(89802),n(89281)),Z=n(46417);const f=()=>{const{t:e}=(0,v.$)(),{activeMenu:t}=(0,m.v9)((e=>e.menu),m.wU),n=(0,m.I0)(),[f]=i.Z.useForm(),g=(0,l.s0)(),[_,q]=(0,s.useState)(!1);(0,s.useEffect)((()=>()=>{const e=f.getFieldsValue(!0);n((0,p.nc)({activeMenu:t,data:e}))}),[]);return(0,Z.jsx)(r.Z,{title:e("add.booking.table"),children:(0,Z.jsxs)(i.Z,{name:"basic",layout:"vertical",onFinish:s=>{console.log("value",s);const l={...s,chair_count:String(s.chair_count),shop_section_id:s.shop_section_id.value};q(!0);const i="seller/booking/tables";x.Z.create(l).then((()=>{a.Am.success(e("successfully.created")),g(`/${i}`),n((0,p.ph)({...t,nextUrl:i}))})).finally((()=>q(!1)))},form:f,initialValues:{active:!0,...t.data},children:[(0,Z.jsxs)(o.Z,{gutter:12,children:[(0,Z.jsx)(u.Z,{span:12,children:(0,Z.jsx)(i.Z.Item,{label:e("zona"),name:"shop_section_id",rules:[{required:!0,message:e("required")}],children:(0,Z.jsx)(j.h,{fetchOptions:function(e){return b.Z.getAll({search:e}).then((e=>e.data.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:null===e||void 0===e?void 0:e.id}}))))},debounceTimeout:300})})}),(0,Z.jsx)(u.Z,{span:12,children:(0,Z.jsx)(i.Z.Item,{label:"name",name:"name",rules:[{required:!0,message:""}],children:(0,Z.jsx)(c.Z,{})})}),(0,Z.jsx)(u.Z,{span:12,children:(0,Z.jsx)(i.Z.Item,{label:e("chair.count"),name:"chair_count",rules:[{required:!0,message:e("required")}],children:(0,Z.jsx)(d.Z,{className:"w-100"})})}),(0,Z.jsx)(u.Z,{span:12,children:(0,Z.jsx)(i.Z.Item,{label:e("tax"),name:"tax",rules:[{required:!0,message:e("required")}],children:(0,Z.jsx)(d.Z,{className:"w-100"})})})]}),(0,Z.jsx)(h.Z,{type:"primary",htmlType:"submit",loading:_,children:e("submit")})]})})}}}]);