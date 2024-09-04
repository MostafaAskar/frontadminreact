"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6547],{73431:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(47313),l=n(39180),r=n(2717),o=n(28830),c=n(60535),s=n(46417);const i=()=>{const e=(0,r.I0)(),{languages:t,defaultLang:n}=(0,r.v9)((e=>e.formLang),r.wU);(0,a.useEffect)((()=>{c.Z.getAllActive().then((t=>{let{data:n}=t;e((0,o.dc)(n)),e((0,o.mh)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,o.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,s.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},36547:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(47313),l=n(97890),r=n(23560),o=n(10976),c=n(77181),s=n(68197),i=n(59624),u=n(66672),d=n(74294),p=n(86345),f=n(59491),v=n(72652),h=n(2717),m=n(90954),y=n(31055),b=n(40901),x=n(73431),g=n(24511),Z=n(46417);function C(){const{t:e}=(0,g.$)(),{activeMenu:t}=(0,h.v9)((e=>e.menu),h.wU),{id:n}=(0,l.UO)(),C=(0,h.I0)(),[k]=o.Z.useForm(),j=(0,l.s0)(),[E,O]=(0,a.useState)(!1),[w,P]=(0,a.useState)(!1),{defaultLang:N,languages:I}=(0,h.v9)((e=>e.formLang),h.wU);(0,a.useEffect)((()=>()=>{const e=k.getFieldsValue(!0);C((0,m.nc)({activeMenu:t,data:e}))}),[]);const F=e=>{O(!0),y.Z.getById(e).then((e=>{let{data:t}=e;const n=function(e){if(!e)return{};const{translations:t}=e,n=I.map((e=>{var n;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title}}));return Object.assign({},...n)}(t);k.setFieldsValue({...t,...n})})).finally((()=>{O(!1),C((0,m.A_)(t))}))};return(0,a.useEffect)((()=>{t.refetch&&F(n)}),[t.refetch]),(0,Z.jsx)(c.Z,{title:e("edit.unit"),extra:(0,Z.jsx)(x.Z,{}),children:E?(0,Z.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,Z.jsx)(v.Z,{size:"large",className:"py-5"})}):(0,Z.jsxs)(o.Z,{name:"basic",layout:"vertical",onFinish:a=>{const l={...a,active:a.active?1:0};P(!0);const o="catalog/units";y.Z.update(n,l).then((()=>{r.Am.success(e("successfully.updated")),C((0,m.ph)({...t,nextUrl:o})),j(`/${o}`),C((0,b.S)())})).finally((()=>P(!1)))},form:k,initialValues:{...t.data},children:[(0,Z.jsxs)(s.Z,{gutter:12,children:[(0,Z.jsx)(i.Z,{span:12,children:I.map(((t,n)=>(0,Z.jsx)(o.Z.Item,{label:e("title"),name:`title[${t.locale}]`,rules:[{required:t.locale===N,message:e("required")}],hidden:t.locale!==N,children:(0,Z.jsx)(u.Z,{})},"title"+n)))}),(0,Z.jsx)(i.Z,{span:12,children:(0,Z.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,Z.jsx)(o.Z.Item,{label:e("position"),name:"position",rules:[{required:!0,message:e("required")}],children:(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(d.Z.Option,{value:"after",children:e("after")}),(0,Z.jsx)(d.Z.Option,{value:"before",children:e("before")})]})})})}),(0,Z.jsx)(i.Z,{span:6,children:(0,Z.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,Z.jsx)(o.Z.Item,{label:e("active"),name:"active",valuePropName:"checked",children:(0,Z.jsx)(p.Z,{})})})})]}),(0,Z.jsx)(f.Z,{type:"primary",htmlType:"submit",loading:w,children:e("submit")})]})})}},39180:(e,t,n)=>{n.d(t,{ZP:()=>F});var a=n(4942),l=n(87462),r=n(47313),o=n(56482),c=n(46123),s=n.n(c),i=n(16945),u=n(4431),d=n(91964),p=r.createContext(null),f=p.Provider;const v=p;var h=r.createContext(null),m=h.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},b=function(e,t){var n,c=r.useContext(v),p=r.useContext(h),f=r.useContext(d.E_),m=f.getPrefixCls,b=f.direction,x=r.useRef(),g=(0,i.sQ)(t,x),Z=(0,r.useContext)(u.aM).isFormItemInput,C=e.prefixCls,k=e.className,j=e.children,E=e.style,O=y(e,["prefixCls","className","children","style"]),w=m("radio",C),P="button"===((null===c||void 0===c?void 0:c.optionType)||p)?"".concat(w,"-button"):w,N=(0,l.Z)({},O);c&&(N.name=c.name,N.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===c||void 0===c?void 0:c.onChange)||void 0===a||a.call(c,t)},N.checked=e.value===c.value,N.disabled=e.disabled||c.disabled);var I=s()("".concat(P,"-wrapper"),(n={},(0,a.Z)(n,"".concat(P,"-wrapper-checked"),N.checked),(0,a.Z)(n,"".concat(P,"-wrapper-disabled"),N.disabled),(0,a.Z)(n,"".concat(P,"-wrapper-rtl"),"rtl"===b),(0,a.Z)(n,"".concat(P,"-wrapper-in-form-item"),Z),n),k);return r.createElement("label",{className:I,style:E,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(o.Z,(0,l.Z)({},N,{type:"radio",prefixCls:P,ref:g})),void 0!==j?r.createElement("span",null,j):null)},x=r.forwardRef(b);x.displayName="Radio";const g=x;var Z=n(29439),C=n(10288),k=n(21631),j=n(81176),E=r.forwardRef((function(e,t){var n=r.useContext(d.E_),o=n.getPrefixCls,c=n.direction,i=r.useContext(k.Z),u=(0,C.Z)(e.defaultValue,{value:e.value}),p=(0,Z.Z)(u,2),v=p[0],h=p[1];return r.createElement(f,{value:{onChange:function(t){var n=v,a=t.target.value;"value"in e||h(a);var l=e.onChange;l&&a!==n&&l(t)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,f=e.options,h=e.buttonStyle,m=void 0===h?"outline":h,y=e.disabled,b=e.children,x=e.size,Z=e.style,C=e.id,k=e.onMouseEnter,E=e.onMouseLeave,O=o("radio",u),w="".concat(O,"-group"),P=b;f&&f.length>0&&(P=f.map((function(e){return"string"===typeof e||"number"===typeof e?r.createElement(g,{key:e.toString(),prefixCls:O,disabled:y,value:e,checked:v===e},e):r.createElement(g,{key:"radio-group-value-options-".concat(e.value),prefixCls:O,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var N=x||i,I=s()(w,"".concat(w,"-").concat(m),(n={},(0,a.Z)(n,"".concat(w,"-").concat(N),N),(0,a.Z)(n,"".concat(w,"-rtl"),"rtl"===c),n),p);return r.createElement("div",(0,l.Z)({},(0,j.Z)(e),{className:I,style:Z,onMouseEnter:k,onMouseLeave:E,id:C,ref:t}),P)}())}));const O=r.memo(E);var w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},P=function(e,t){var n=r.useContext(d.E_).getPrefixCls,a=e.prefixCls,o=w(e,["prefixCls"]),c=n("radio",a);return r.createElement(m,{value:"button"},r.createElement(g,(0,l.Z)({prefixCls:c},o,{type:"radio",ref:t})))};const N=r.forwardRef(P);var I=g;I.Button=N,I.Group=O;const F=I},56482:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),l=n(4942),r=n(45987),o=n(1413),c=n(15671),s=n(43144),i=n(60136),u=n(54062),d=n(47313),p=n(46123),f=n.n(p),v=function(e){(0,i.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,c.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,l=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,o.Z)((0,o.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,s.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,c=t.style,s=t.name,i=t.id,u=t.type,p=t.disabled,v=t.readOnly,h=t.tabIndex,m=t.onClick,y=t.onFocus,b=t.onBlur,x=t.onKeyDown,g=t.onKeyPress,Z=t.onKeyUp,C=t.autoFocus,k=t.value,j=t.required,E=(0,r.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),O=Object.keys(E).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e}),{}),w=this.state.checked,P=f()(n,o,(e={},(0,l.Z)(e,"".concat(n,"-checked"),w),(0,l.Z)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:P,style:c},d.createElement("input",(0,a.Z)({name:s,id:i,type:u,required:j,readOnly:v,disabled:p,tabIndex:h,className:"".concat(n,"-input"),checked:!!w,onClick:m,onFocus:y,onBlur:b,onKeyUp:Z,onKeyDown:x,onKeyPress:g,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},O)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,o.Z)((0,o.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=v}}]);