"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[7517],{55940:(e,t,n)=>{n.d(t,{Z:()=>c});n(47313);var a=n(59491),l=n(47515),o=n(23560),r=n(24511),i=n(79492),s=n(46417);function c(e){let{size:t="",onClick:n,type:c="default",...u}=e;const{t:d}=(0,r.$)(),{isDemo:v}=(0,i.Z)();return(0,s.jsx)(a.Z,{size:t,icon:(0,s.jsx)(l.Z,{}),onClick:e=>{v?o.Am.warning(d("cannot.work.demo")):n(e)},type:c,...u})}},53233:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(47313),l=n(56140),o=n(67251),r=n(45705),i=n(86345),s=n(78267),c=n(37388),u=n(59491),d=n(99587),v=n(24511),f=n(46417);const{Text:p}=l.Z,h=e=>{let{columns:t=[],setColumns:n,style:l,size:h="",iconOnly:m}=e;const{t:x}=(0,v.$)(),[Z,g]=(0,a.useState)(!1),y=(0,f.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,f.jsx)(o.Z.Item,{children:(0,f.jsxs)(r.Z,{className:"d-flex justify-content-between",children:[(0,f.jsx)(p,{children:e.title}),(0,f.jsx)(i.Z,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(a)}(e),disabled:1===a})]})},e+a)))});return(0,f.jsx)(s.Z,{overlay:y,trigger:["click"],onVisibleChange:e=>{g(e)},visible:Z,children:(0,f.jsx)(c.Z,{title:x("change.columns"),children:(0,f.jsx)(u.Z,{style:{...l},size:h,icon:(0,f.jsx)(d.Z,{}),children:m?null:x("Columns")})})})}},13945:(e,t,n)=>{function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:()=>a})},37517:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var a=n(47313),l=n(31741),o=n(47515),r=n(55613),i=n(45705),s=n(59491),c=n(77181),u=n(78508),d=n(23560),v=n(69658),f=n(74580),p=n(2717),h=n(90954),m=n(80314),x=n(13945),Z=n(24511),g=n(94765),y=n(36689),w=n(9274),C=n(83371),b=n(68197),j=n(59624),k=n(26824),V=n(51282),H=n(45464),I=n(70816),S=n.n(I),z=n(46417);function D(e){var t,n,l,o;let{id:r,handleCancel:i}=e;const[c,u]=(0,a.useState)({}),[d,v]=(0,a.useState)(!1),{t:f}=(0,Z.$)();return(0,a.useEffect)((()=>{!function(e){v(!0),g.Z.getById(e).then((e=>u(e.data))).finally((()=>v(!1)))}(r)}),[r]),(0,z.jsx)(w.Z,{visible:!!r,title:f("product.review"),onCancel:i,footer:(0,z.jsx)(s.Z,{type:"default",onClick:i,children:f("cancel")}),children:d?(0,z.jsx)(V.Z,{}):(0,z.jsxs)(C.Z,{bordered:!0,children:[(0,z.jsx)(C.Z.Item,{span:3,label:f("id"),children:null===c||void 0===c?void 0:c.id}),(0,z.jsxs)(C.Z.Item,{span:3,label:f("user"),children:[(null===c||void 0===c||null===(t=c.user)||void 0===t?void 0:t.firstname)||""," ",(null===c||void 0===c||null===(n=c.user)||void 0===n?void 0:n.lastname)||""]}),(0,z.jsx)(C.Z.Item,{span:3,label:f("rating"),children:null===c||void 0===c?void 0:c.rating}),(0,z.jsx)(C.Z.Item,{span:3,label:f("image"),children:(0,z.jsx)(b.Z,{gutter:12,children:null===(l=c.galleries)||void 0===l?void 0:l.map((e=>(0,z.jsx)(j.Z,{children:(0,z.jsx)(k.Z,{width:145,height:100,src:(0,H.Z)(null===e||void 0===e?void 0:e.path),placeholder:!0,className:"rounded",style:{objectFit:"contain"},preview:!1})})))})}),(0,z.jsx)(C.Z.Item,{span:3,label:f("product.id"),children:null===c||void 0===c||null===(o=c.product)||void 0===o?void 0:o.id}),(0,z.jsx)(C.Z.Item,{span:3,label:f("comment"),children:null===c||void 0===c?void 0:c.comment}),(0,z.jsx)(C.Z.Item,{span:3,label:f("created.at"),children:S()(null===c||void 0===c?void 0:c.created_at).format("DD.MM.YYYY HH:mm")})]})})}var E=n(97890),M=n(55940),O=n(53233);function _(){const{t:e}=(0,Z.$)(),t=(0,p.I0)(),n=(0,E.s0)(),[w,C]=(0,a.useState)([{title:e("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:e("user"),dataIndex:"user",key:"user",is_show:!0,render:a=>(0,z.jsxs)("div",{className:"text-hover",onClick:()=>(a=>{t((0,h.bL)({url:`/users/user/${a.uuid}`,id:"user_info",name:e("user.info")})),n(`/users/user/${a.uuid}`,{state:{user_id:a.id}})})(a),children:[(null===a||void 0===a?void 0:a.firstname)||""," ",(null===a||void 0===a?void 0:a.lastname)||""]})},{title:e("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:a=>{var l;return(0,z.jsx)("div",{className:"text-hover",onClick:()=>(a=>{t((0,h.bL)({id:"edit-shop",url:`shop/${a.uuid}`,name:e("edit.shop")})),n(`/shop/${a.uuid}`)})(a),children:null===a||void 0===a||null===(l=a.translation)||void 0===l?void 0:l.title})}},{title:e("product"),dataIndex:"product",key:"product",is_show:!0,render:a=>{var l;return(0,z.jsx)("div",{className:"text-hover",onClick:()=>(a=>{t((0,h.bL)({id:"product-edit",url:`product/${a.uuid}`,name:e("edit.product")})),n(`/product/${a.uuid}`)})(a),children:null===a||void 0===a||null===(l=a.translation)||void 0===l?void 0:l.title})}},{title:e("rating"),dataIndex:"rating",key:"rating",is_show:!0,render:e=>(0,z.jsx)(r.Z,{disabled:!0,defaultValue:e})},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:e=>S()(e).format("DD.MM.YYYY HH:mm")},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,z.jsxs)(i.Z,{children:[(0,z.jsx)(s.Z,{type:"primary",icon:(0,z.jsx)(l.Z,{}),onClick:()=>H(t.id)}),(0,z.jsx)(M.Z,{icon:(0,z.jsx)(o.Z,{}),onClick:()=>{k([t.id]),b(!0),L(!0)}})]})}]),{setIsModalVisible:b}=(0,a.useContext)(f._),[j,k]=(0,a.useState)(null),[V,H]=(0,a.useState)(null),[I,_]=(0,a.useState)(!1),[R,L]=(0,a.useState)(null),{activeMenu:N}=(0,p.v9)((e=>e.menu),p.wU),{reviews:P,meta:$,loading:F,params:T}=(0,p.v9)((e=>e.productReview),p.wU);(0,a.useEffect)((()=>{N.refetch&&(t((0,y.O)()),t((0,h.A_)(N)))}),[N.refetch]),(0,m.Z)((()=>{const e=N.data,n={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,y.O)(n))}),[N.data]);const B={id:j,onChange:e=>{k(e)}};return(0,z.jsxs)(c.Z,{title:e("product.reviews"),extra:(0,z.jsxs)(i.Z,{wrap:!0,children:[(0,z.jsx)(M.Z,{size:"",onClick:()=>{null===j||0===j.length?d.Am.warning(e("select.the.product")):(b(!0),L(!1))},children:e("delete.selected")}),(0,z.jsx)(O.Z,{columns:w,setColumns:C})]}),children:[(0,z.jsx)(u.Z,{scroll:{x:!0},rowSelection:B,columns:null===w||void 0===w?void 0:w.filter((e=>e.is_show)),dataSource:P,pagination:{pageSize:null===T||void 0===T?void 0:T.perPage,page:null===T||void 0===T?void 0:T.page,total:null===$||void 0===$?void 0:$.total,defaultCurrent:null===T||void 0===T?void 0:T.page},rowKey:e=>e.id,onChange:function(e,n,a){const{pageSize:l,current:o}=e,{field:r,order:i}=a,s=(0,x.Z)(i);t((0,h.nc)({activeMenu:N,data:{perPage:l,page:o,column:r,sort:s}}))},loading:F}),(0,z.jsx)(v.Z,{click:()=>{_(!0);const n={...Object.assign({},...j.map(((e,t)=>({[`ids[${t}]`]:e}))))};g.Z.delete(n).then((()=>{d.Am.success(e("successfully.deleted")),t((0,y.O)()),b(!1),L(null)})).finally((()=>{k(null),_(!1)}))},text:e(R?"delete":"all.delete"),setText:k,loading:I}),V&&(0,z.jsx)(D,{id:V,handleCancel:()=>H(null)})]})}},99587:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(1413),l=n(47313);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var r=n(17469),i=function(e,t){return l.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};i.displayName="TableOutlined";const s=l.forwardRef(i)},55613:(e,t,n)=>{n.d(t,{Z:()=>H});var a=n(87462),l=n(47313),o=n(1413),r=n(4942),i=n(15671),s=n(43144),c=n(60136),u=n(54062),d=n(53879),v=n(46123),f=n.n(v),p=n(49242);var h=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).onHover=function(t){var n=e.props;(0,n.onHover)(t,n.index)},e.onClick=function(t){var n=e.props;(0,n.onClick)(t,n.index)},e.onKeyDown=function(t){var n=e.props,a=n.onClick,l=n.index;13===t.keyCode&&a(t,l)},e}return(0,s.Z)(n,[{key:"getClassName",value:function(){var e=this.props,t=e.prefixCls,n=e.index,a=e.value,l=e.allowHalf,o=e.focused,r=n+1,i=t;return 0===a&&0===n&&o?i+=" ".concat(t,"-focused"):l&&a+.5>=r&&a<r?(i+=" ".concat(t,"-half ").concat(t,"-active"),o&&(i+=" ".concat(t,"-focused"))):(i+=" ".concat(t,r<=a?"-full":"-zero"),r===a&&o&&(i+=" ".concat(t,"-focused"))),i}},{key:"render",value:function(){var e=this.onHover,t=this.onClick,n=this.onKeyDown,a=this.props,o=a.disabled,r=a.prefixCls,i=a.character,s=a.characterRender,c=a.index,u=a.count,d=a.value,v="function"===typeof i?i(this.props):i,f=l.createElement("li",{className:this.getClassName()},l.createElement("div",{onClick:o?null:t,onKeyDown:o?null:n,onMouseMove:o?null:e,role:"radio","aria-checked":d>c?"true":"false","aria-posinset":c+1,"aria-setsize":u,tabIndex:o?-1:0},l.createElement("div",{className:"".concat(r,"-first")},v),l.createElement("div",{className:"".concat(r,"-second")},v)));return s&&(f=s(f,this.props)),f}}]),n}(l.Component);function m(){}var x=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,i.Z)(this,n),(a=t.call(this,e)).stars=void 0,a.rate=void 0,a.onHover=function(e,t){var n=a.props.onHoverChange,l=a.getStarValue(t,e.pageX);l!==a.state.cleanedValue&&a.setState({hoverValue:l,cleanedValue:null}),n(l)},a.onMouseLeave=function(){var e=a.props.onHoverChange;a.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},a.onClick=function(e,t){var n=a.props.allowClear,l=a.state.value,o=a.getStarValue(t,e.pageX),r=!1;n&&(r=o===l),a.onMouseLeave(),a.changeValue(r?0:o),a.setState({cleanedValue:r?o:null})},a.onFocus=function(){var e=a.props.onFocus;a.setState({focused:!0}),e&&e()},a.onBlur=function(){var e=a.props.onBlur;a.setState({focused:!1}),e&&e()},a.onKeyDown=function(e){var t=e.keyCode,n=a.props,l=n.count,o=n.allowHalf,r=n.onKeyDown,i="rtl"===n.direction,s=a.state.value;t===p.Z.RIGHT&&s<l&&!i?(s+=o?.5:1,a.changeValue(s),e.preventDefault()):t===p.Z.LEFT&&s>0&&!i||t===p.Z.RIGHT&&s>0&&i?(s-=o?.5:1,a.changeValue(s),e.preventDefault()):t===p.Z.LEFT&&s<l&&i&&(s+=o?.5:1,a.changeValue(s),e.preventDefault()),r&&r(e)},a.saveRef=function(e){return function(t){a.stars[e]=t}},a.saveRate=function(e){a.rate=e};var l=e.value;return void 0===l&&(l=e.defaultValue),a.stars={},a.state={value:l,focused:!1,cleanedValue:null},a}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"getStarDOM",value:function(e){return(0,d.Z)(this.stars[e])}},{key:"getStarValue",value:function(e,t){var n=this.props,a=n.allowHalf,l="rtl"===n.direction,o=e+1;if(a){var r=this.getStarDOM(e),i=function(e){var t=function(e){var t,n,a=e.ownerDocument,l=a.body,o=a&&a.documentElement,r=e.getBoundingClientRect();return t=r.left,n=r.top,{left:t-=o.clientLeft||l.clientLeft||0,top:n-=o.clientTop||l.clientTop||0}}(e),n=e.ownerDocument,a=n.defaultView||n.parentWindow;return t.left+=function(e){var t=e.pageXOffset,n="scrollLeft";if("number"!==typeof t){var a=e.document;"number"!==typeof(t=a.documentElement[n])&&(t=a.body[n])}return t}(a),t.left}(r),s=r.clientWidth;(l&&t-i>s/2||!l&&t-i<s/2)&&(o-=.5)}return o}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"render",value:function(){for(var e=this.props,t=e.count,n=e.allowHalf,a=e.style,o=e.prefixCls,i=e.disabled,s=e.className,c=e.character,u=e.characterRender,d=e.tabIndex,v=e.direction,p=this.state,m=p.value,x=p.hoverValue,Z=p.focused,g=[],y=i?"".concat(o,"-disabled"):"",w=0;w<t;w+=1)g.push(l.createElement(h,{ref:this.saveRef(w),index:w,count:t,disabled:i,prefixCls:"".concat(o,"-star"),allowHalf:n,value:void 0===x?m:x,onClick:this.onClick,onHover:this.onHover,key:w,character:c,characterRender:u,focused:Z}));var C=f()(o,y,s,(0,r.Z)({},"".concat(o,"-rtl"),"rtl"===v));return l.createElement("ul",{className:C,style:a,onMouseLeave:i?null:this.onMouseLeave,tabIndex:i?-1:d,onFocus:i?null:this.onFocus,onBlur:i?null:this.onBlur,onKeyDown:i?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},g)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e&&void 0!==e.value?(0,o.Z)((0,o.Z)({},t),{},{value:e.value}):t}}]),n}(l.Component);x.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:m,character:"\u2605",onHoverChange:m,tabIndex:0,direction:"ltr"};const Z=x;const g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"};var y=n(17469),w=function(e,t){return l.createElement(y.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:t,icon:g}))};w.displayName="StarFilled";const C=l.forwardRef(w);var b=n(37388),j=n(91964),k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},V=l.forwardRef((function(e,t){var n=e.prefixCls,o=e.tooltips,r=k(e,["prefixCls","tooltips"]),i=l.useContext(j.E_),s=i.getPrefixCls,c=i.direction,u=s("rate",n);return l.createElement(Z,(0,a.Z)({ref:t,characterRender:function(e,t){var n=t.index;return o?l.createElement(b.Z,{title:o[n]},e):e}},r,{prefixCls:u,direction:c}))}));V.displayName="Rate",V.defaultProps={character:l.createElement(C,null)};const H=V}}]);