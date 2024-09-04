"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9987],{73431:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(47313),r=n(39180),l=n(2717),o=n(28830),i=n(60535),s=n(46417);const c=()=>{const e=(0,l.I0)(),{languages:t,defaultLang:n}=(0,l.v9)((e=>e.formLang),l.wU);(0,a.useEffect)((()=>{i.Z.getAllActive().then((t=>{let{data:n}=t;e((0,o.dc)(n)),e((0,o.mh)(n.find((e=>1===e.default)).locale))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,o.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,s.jsx)(r.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},79987:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(47313),r=n(10976),l=n(77181),o=n(68197),i=n(59624),s=n(66672),c=n(74294),u=n(86345),d=n(59491),p=n(72652),v=n(23560),m=n(97890),f=n(73431),h=n(52421),y=n(2717),g=n(90954),b=n(30763),x=n(24511),Z=n(5764),k=n(74380),j=n(46417);const C=()=>{var e,t;const{t:n}=(0,x.$)(),C=(0,m.s0)(),w=(0,y.I0)(),{activeMenu:P}=(0,y.v9)((e=>e.menu),y.wU),[E,O]=(0,a.useState)(!1),[I,N]=(0,a.useState)(null!==(e=P.data)&&void 0!==e&&e.image?[null===(t=P.data)||void 0===t?void 0:t.image]:[]),[F]=r.Z.useForm(),[S,K]=(0,a.useState)(!1),[M,L]=(0,a.useState)(null),{uuid:U}=(0,m.UO)(),{defaultLang:q,languages:$}=(0,y.v9)((e=>e.formLang),y.wU);(0,a.useEffect)((()=>()=>{const e=F.getFieldsValue(!0);w((0,g.nc)({activeMenu:P,data:e}))}),[]);const B=e=>({name:e,url:e});function D(e){if(!e)return{};const{translations:t}=e,n=$.map((e=>{var n,a;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,[`description[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...n)}return(0,a.useEffect)((()=>{var e;P.refetch&&(e=U,O(!0),b.Z.getById(e).then((e=>{let t=e.data;const n={...t,...D(t),image:[B(t.img)],keywords:t.keywords.split(",")};F.setFieldsValue(n),N([B(t.img)])})).finally((()=>{O(!1),w((0,g.A_)(P))})))}),[P.refetch]),(0,j.jsx)(l.Z,{title:n("recipe.category.clone"),extra:(0,j.jsx)(f.Z,{}),children:E?(0,j.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,j.jsx)(p.Z,{size:"large",className:"mt-5 pt-5"})}):(0,j.jsxs)(r.Z,{name:"basic",layout:"vertical",onFinish:e=>{var t;K(!0);const a={...e,type:"receipt",active:e.active?1:0,keywords:e.keywords.join(","),parent_id:null,"images[0]":null===(t=I[0])||void 0===t?void 0:t.name},r="catalog/recipe-categories";b.Z.create(a).then((()=>{v.Am.success(n("successfully.updated")),w((0,g.ph)({...P,nextUrl:r})),w((0,k.P2)()),C(`/${r}`)})).catch((e=>L(e.response.data.params))).finally((()=>K(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},active:!0,...P.data},form:F,children:[(0,j.jsxs)(o.Z,{gutter:12,children:[(0,j.jsx)(i.Z,{span:12,children:$.map(((e,t)=>(0,j.jsx)(r.Z.Item,{label:n("name"),name:`title[${e.locale}]`,help:M&&M[`title.${q}`]?M[`title.${q}`][0]:null,validateStatus:M?"error":"success",rules:[{validator:(t,a)=>a||(null===e||void 0===e?void 0:e.locale)!==q?a&&""===(null===a||void 0===a?void 0:a.trim())?Promise.reject(new Error(n("no.empty.space"))):a&&(null===a||void 0===a?void 0:a.trim().length)<2?Promise.reject(new Error(n("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(n("required")))}],hidden:e.locale!==q,children:(0,j.jsx)(s.Z,{})},e.title+t)))}),(0,j.jsx)(i.Z,{span:12,children:$.map(((e,t)=>(0,j.jsx)(r.Z.Item,{label:n("description"),name:`description[${e.locale}]`,rules:[{validator:(t,a)=>a||(null===e||void 0===e?void 0:e.locale)!==q?a&&""===(null===a||void 0===a?void 0:a.trim())?Promise.reject(new Error(n("no.empty.space"))):a&&(null===a||void 0===a?void 0:a.trim().length)<5?Promise.reject(new Error(n("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(n("required")))}],hidden:e.locale!==q,children:(0,j.jsx)(h.Z,{rows:4})},e.locale+t)))}),(0,j.jsx)(i.Z,{span:12,children:(0,j.jsx)(r.Z.Item,{label:n("keywords"),name:"keywords",rules:[{required:!0,message:n("required")}],children:(0,j.jsx)(c.Z,{mode:"tags",style:{width:"100%"}})})}),(0,j.jsx)(i.Z,{span:4,children:(0,j.jsx)(r.Z.Item,{label:n("image"),name:"images",rules:[{validator:()=>0===(null===I||void 0===I?void 0:I.length)?Promise.reject(new Error(n("required"))):Promise.resolve()}],children:(0,j.jsx)(Z.Z,{type:"categories",imageList:I,setImageList:N,form:F,multiple:!1})})}),(0,j.jsx)(i.Z,{span:2,children:(0,j.jsx)(r.Z.Item,{label:n("active"),name:"active",valuePropName:"checked",children:(0,j.jsx)(u.Z,{})})})]}),(0,j.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:S,children:n("submit")})]})})}},39180:(e,t,n)=>{n.d(t,{ZP:()=>F});var a=n(4942),r=n(87462),l=n(47313),o=n(56482),i=n(46123),s=n.n(i),c=n(16945),u=n(4431),d=n(91964),p=l.createContext(null),v=p.Provider;const m=p;var f=l.createContext(null),h=f.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=function(e,t){var n,i=l.useContext(m),p=l.useContext(f),v=l.useContext(d.E_),h=v.getPrefixCls,g=v.direction,b=l.useRef(),x=(0,c.sQ)(t,b),Z=(0,l.useContext)(u.aM).isFormItemInput,k=e.prefixCls,j=e.className,C=e.children,w=e.style,P=y(e,["prefixCls","className","children","style"]),E=h("radio",k),O="button"===((null===i||void 0===i?void 0:i.optionType)||p)?"".concat(E,"-button"):E,I=(0,r.Z)({},P);i&&(I.name=i.name,I.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===i||void 0===i?void 0:i.onChange)||void 0===a||a.call(i,t)},I.checked=e.value===i.value,I.disabled=e.disabled||i.disabled);var N=s()("".concat(O,"-wrapper"),(n={},(0,a.Z)(n,"".concat(O,"-wrapper-checked"),I.checked),(0,a.Z)(n,"".concat(O,"-wrapper-disabled"),I.disabled),(0,a.Z)(n,"".concat(O,"-wrapper-rtl"),"rtl"===g),(0,a.Z)(n,"".concat(O,"-wrapper-in-form-item"),Z),n),j);return l.createElement("label",{className:N,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},l.createElement(o.Z,(0,r.Z)({},I,{type:"radio",prefixCls:O,ref:x})),void 0!==C?l.createElement("span",null,C):null)},b=l.forwardRef(g);b.displayName="Radio";const x=b;var Z=n(29439),k=n(10288),j=n(21631),C=n(81176),w=l.forwardRef((function(e,t){var n=l.useContext(d.E_),o=n.getPrefixCls,i=n.direction,c=l.useContext(j.Z),u=(0,k.Z)(e.defaultValue,{value:e.value}),p=(0,Z.Z)(u,2),m=p[0],f=p[1];return l.createElement(v,{value:{onChange:function(t){var n=m,a=t.target.value;"value"in e||f(a);var r=e.onChange;r&&a!==n&&r(t)},value:m,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,v=e.options,f=e.buttonStyle,h=void 0===f?"outline":f,y=e.disabled,g=e.children,b=e.size,Z=e.style,k=e.id,j=e.onMouseEnter,w=e.onMouseLeave,P=o("radio",u),E="".concat(P,"-group"),O=g;v&&v.length>0&&(O=v.map((function(e){return"string"===typeof e||"number"===typeof e?l.createElement(x,{key:e.toString(),prefixCls:P,disabled:y,value:e,checked:m===e},e):l.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:P,disabled:e.disabled||y,value:e.value,checked:m===e.value,style:e.style},e.label)})));var I=b||c,N=s()(E,"".concat(E,"-").concat(h),(n={},(0,a.Z)(n,"".concat(E,"-").concat(I),I),(0,a.Z)(n,"".concat(E,"-rtl"),"rtl"===i),n),p);return l.createElement("div",(0,r.Z)({},(0,C.Z)(e),{className:N,style:Z,onMouseEnter:j,onMouseLeave:w,id:k,ref:t}),O)}())}));const P=l.memo(w);var E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},O=function(e,t){var n=l.useContext(d.E_).getPrefixCls,a=e.prefixCls,o=E(e,["prefixCls"]),i=n("radio",a);return l.createElement(h,{value:"button"},l.createElement(x,(0,r.Z)({prefixCls:i},o,{type:"radio",ref:t})))};const I=l.forwardRef(O);var N=x;N.Button=I,N.Group=P;const F=N},56482:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),r=n(4942),l=n(45987),o=n(1413),i=n(15671),s=n(43144),c=n(60136),u=n(54062),d=n(47313),p=n(46123),v=n.n(p),m=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,i.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,o.Z)((0,o.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,s.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,i=t.style,s=t.name,c=t.id,u=t.type,p=t.disabled,m=t.readOnly,f=t.tabIndex,h=t.onClick,y=t.onFocus,g=t.onBlur,b=t.onKeyDown,x=t.onKeyPress,Z=t.onKeyUp,k=t.autoFocus,j=t.value,C=t.required,w=(0,l.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),E=this.state.checked,O=v()(n,o,(e={},(0,r.Z)(e,"".concat(n,"-checked"),E),(0,r.Z)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:O,style:i},d.createElement("input",(0,a.Z)({name:s,id:c,type:u,required:C,readOnly:m,disabled:p,tabIndex:f,className:"".concat(n,"-input"),checked:!!E,onClick:h,onFocus:y,onBlur:g,onKeyUp:Z,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:k,ref:this.saveInput,value:j},P)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,o.Z)((0,o.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const f=m}}]);