"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2469],{13944:(e,t,s)=>{s.d(t,{Z:()=>h});var l=s(47313),r=s(77181),n=s(58446),i=s(27834),o=s(33533),a=s(46417);const c={position:"absolute",zIndex:"1"},d={position:"absolute",zIndex:"1",right:"0",top:"-2px"},u=e=>{let{title:t,series:s,width:u,height:h,xAxis:v,customOptions:x,card:m,type:p,extra:f,direction:j,bodyClass:g}=e,Z=JSON.parse(JSON.stringify((e=>{switch(e){case"line":default:return o.jd;case"bar":return o.B0;case"area":return o.fT;case"pie":return o.LB}})(p)));const b=window.innerWidth<768,y=()=>{if(N.current){var e;const t=N.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight=`${b?0:null===(e=w.current)||void 0===e?void 0:e.offsetWidth}px`,"rtl"===j&&(t.style.right="auto",t.style.left="0"),b&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,l.useEffect)((()=>{y()}),[]);const w=(0,l.useRef)(null),N=(0,l.useRef)();Z.xaxis={categories:v},x&&(Z={...Z,...x});const k=()=>(0,a.jsx)(i.ZP,{onResize:void setTimeout((()=>{y()}),600),children:(0,a.jsx)("div",{style:"rtl"===j?{direction:"ltr"}:{},className:"chartRef",ref:N,children:(0,a.jsx)(n.Z,{options:Z,type:p,series:s,width:u,height:h})})});return(0,a.jsx)(a.Fragment,{children:m?(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:`position-relative ${g}`,children:[(0,a.jsx)("div",{style:b?{}:c,children:t})&&(0,a.jsx)("h4",{className:"font-weight-bold",style:b?{}:c,children:t}),f&&(0,a.jsx)("div",{ref:w,style:b?{}:d,children:f}),k()]})}):k()})};u.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};const h=u},51988:(e,t,s)=>{s.d(t,{Z:()=>c});s(47313);var l=s(24511),r=s(66188);const n=s.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",i=s.p+"static/media/noresult.ac4af107751f94856a9c.riv",o=s.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var a=s(46417);const c=function(e){let{id:t="noresult",text:s=""}=e;const{t:c}=(0,l.$)(),d={src:{noproductsfound:n,noresult:i,nosell:o}[t],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,r.useRive)(d);return(0,a.jsxs)("div",{className:"animation-canvas",children:[(0,a.jsx)("div",{style:{width:"100%",height:200},children:(0,a.jsx)(u,{})}),(0,a.jsx)("div",{className:"text",children:c(s)})]})}},33533:(e,t,s)=>{s.d(t,{B0:()=>i,DM:()=>l,LB:()=>o,fT:()=>n,jd:()=>r});const l=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],r={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...l],dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},n={...r},i={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[...l],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:e=>`${e}`}}},o={colors:[...l],plotOptions:{pie:{size:200,donut:{labels:{show:!0,total:{show:!1,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce(((e,t)=>e+t),0)+"Orders count"}}},size:"100%"}}},labels:[],dataLabels:{enabled:!0},legend:{show:!0}}},84017:(e,t,s)=>{function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"after";const l=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return"after"===s?`${l} ${t}`:`${t} ${l}`}s.d(t,{Z:()=>l})},58051:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ce});var l=s(47313),r=s(2717),n=s(90954),i=s(37312),o=s(94024),a=s(32442),c=s(51282),d=s(12380),u=s(32714),h=s(68197),v=s(59624),x=s(77181),m=s(24511),p=s(97890),f=s(74294),j=s(72652),g=s(41068),Z=s(70816),b=s.n(Z),y=s(13944),w=s(33533),N=s(46417);function k(){const{t:e}=(0,m.$)(),t=(0,r.I0)(),{counts:s,params:n,loading:i}=(0,r.v9)((e=>e.orderCounts),r.wU),{role:o}=(0,r.v9)((e=>e.auth.user),r.wU),{direction:a}=(0,r.v9)((e=>e.theme.theme),r.wU),c=(0,l.useMemo)((()=>s.map((e=>b()(e.time).format("D MMM")))),[s]),u=(0,l.useMemo)((()=>[{name:e("orders"),data:(null===s||void 0===s?void 0:s.map((e=>e.count)))||[]}]),[s]);return(0,N.jsxs)(x.Z,{className:"h-100",title:e("orders"),extra:(0,N.jsxs)(f.Z,{value:n.time,size:"small",style:{minWidth:110},onSelect:e=>{const s={time:e};switch(t((0,d.KJ)(s)),o){case"admin":t((0,d.n8)(s));break;case"seller":t((0,d._I)(s))}},defaultValue:"subMonth",children:[(0,N.jsx)(f.Z.Option,{value:"subWeek",children:e("this.week")}),(0,N.jsx)(f.Z.Option,{value:"subMonth",children:e("this.month")}),(0,N.jsx)(f.Z.Option,{value:"subYear",children:e("this.year")})]}),children:[i&&(0,N.jsx)("div",{className:"loader",children:(0,N.jsx)(j.Z,{})}),(0,N.jsx)("div",{className:"d-flex",children:(0,N.jsxs)("div",{className:"mr-5",children:[(0,N.jsx)("h2",{className:"font-weight-bold mb-1",children:null===s||void 0===s?void 0:s.reduce(((e,t)=>e+(null===t||void 0===t?void 0:t.count)),0)}),(0,N.jsxs)("p",{children:[(0,N.jsx)(g.Z,{color:w.DM[6]}),e("total.orders.count")]})]})}),(0,N.jsx)("div",{children:(0,N.jsx)(y.Z,{card:!1,series:u,xAxis:c,height:280,customOptions:{colors:[w.DM[6],w.DM[0]],legend:{show:!1},stroke:{width:2.5,curve:"smooth"}},direction:a})})]})}var C=s(84017);function O(){const{t:e}=(0,m.$)(),t=(0,r.I0)(),{defaultCurrency:s}=(0,r.v9)((e=>e.currency),r.wU),{sales:n,params:i,loading:o}=(0,r.v9)((e=>e.orderSales),r.wU),{role:a}=(0,r.v9)((e=>e.auth.user),r.wU),{direction:c}=(0,r.v9)((e=>e.theme.theme),r.wU),d=(0,l.useMemo)((()=>n.map((e=>b()(e.time).format("D MMM")))),[n]),h=(0,l.useMemo)((()=>[{name:e("sales"),data:(null===n||void 0===n?void 0:n.map((e=>e.total_price.toFixed(2))))||[]}]),[n]);return(0,N.jsxs)(x.Z,{className:"h-100",title:e("sales"),extra:(0,N.jsxs)(f.Z,{value:i.time,size:"small",style:{minWidth:110},onSelect:e=>{const s={time:e};switch(t((0,u.wJ)(s)),a){case"admin":t((0,u.yS)(s));break;case"seller":t((0,u.xe)(s))}},defaultValue:"subMonth",children:[(0,N.jsx)(f.Z.Option,{value:"subWeek",children:e("this.week")}),(0,N.jsx)(f.Z.Option,{value:"subMonth",children:e("this.month")}),(0,N.jsx)(f.Z.Option,{value:"subYear",children:e("this.year")})]}),children:[o&&(0,N.jsx)("div",{className:"loader",children:(0,N.jsx)(j.Z,{})}),(0,N.jsx)("div",{className:"d-flex",children:(0,N.jsxs)("div",{className:"mr-5",children:[(0,N.jsx)("h2",{className:"font-weight-bold mb-1",children:(0,C.Z)(n.reduce(((e,t)=>e+t.total_price),0),null===s||void 0===s?void 0:s.symbol,null===s||void 0===s?void 0:s.position)}),(0,N.jsxs)("p",{children:[(0,N.jsx)(g.Z,{color:w.DM[0]}),e("total.sales.amount")]})]})}),(0,N.jsx)("div",{children:(0,N.jsx)(y.Z,{card:!1,type:"area",series:h,xAxis:d,height:280,customOptions:{colors:w.DM,legend:{show:!1},stroke:{width:2.5,curve:"smooth"}},direction:c})})]})}var M=s(14637);function _(e){let{title:t="Orders",value:s=0,subtitle:l}=e;const{defaultCurrency:n}=(0,r.v9)((e=>e.currency),r.wU);return(0,N.jsxs)(x.Z,{children:[t&&(0,N.jsx)("h4",{className:"mb-0",children:t}),(0,N.jsx)("div",{className:""+(t?"mt-3":""),children:(0,N.jsxs)("div",{children:[(0,N.jsx)("div",{className:"d-flex align-items-center",children:(0,N.jsx)("h1",{className:"mb-0 font-weight-bold",children:(0,C.Z)(s,null===n||void 0===n?void 0:n.symbol,null===n||void 0===n?void 0:n.position)})}),l&&(0,N.jsx)("div",{className:"text-gray-light mt-1",children:l})]})})]})}function $(){const{t:e}=(0,m.$)(),{user:t}=(0,r.v9)((e=>e.auth),r.wU);return(0,N.jsx)(x.Z,{children:(0,N.jsx)("div",{className:"d-flex justify-content-between",children:(0,N.jsxs)("div",{children:[(0,N.jsxs)("h2",{children:[e("hello"),", ",t.fullName," \ud83d\udc4b"]}),(0,N.jsx)("p",{children:e("hello.text")})]})})})}var P=s(45705),S=s(26824),I=s(85711),E=s(51988);function z(){const{t:e}=(0,m.$)(),t=(0,r.I0)(),{topCustomers:s,loading:l,params:n}=(0,r.v9)((e=>e.topCustomers),r.wU),{defaultCurrency:i}=(0,r.v9)((e=>e.currency),r.wU),{role:a}=(0,r.v9)((e=>e.auth.user),r.wU),c=(e,s)=>{const l={...n,[e]:s};switch(t((0,o.Ww)(l)),a){case"admin":t((0,o.sl)(l));break;case"seller":t((0,o.n)(l))}};return(0,N.jsxs)(x.Z,{title:e("top.customers"),extra:(0,N.jsxs)(P.Z,{children:[(0,N.jsxs)(f.Z,{value:n.perPage,size:"small",style:{minWidth:110},onSelect:e=>c("perPage",e),children:[(0,N.jsx)(f.Z.Option,{value:5,children:`5 / ${e("page")}`}),(0,N.jsx)(f.Z.Option,{value:10,children:`10 / ${e("page")}`}),(0,N.jsx)(f.Z.Option,{value:50,children:`50 / ${e("page")}`}),(0,N.jsx)(f.Z.Option,{value:100,children:`100 / ${e("page")}`})]}),(0,N.jsxs)(f.Z,{value:n.time,size:"small",style:{minWidth:110},onSelect:e=>c("time",e),defaultValue:"subMonth",children:[(0,N.jsx)(f.Z.Option,{value:"subWeek",children:e("this.week")}),(0,N.jsx)(f.Z.Option,{value:"subMonth",children:e("this.month")}),(0,N.jsx)(f.Z.Option,{value:"subYear",children:e("this.year")})]})]}),className:"h-100",children:[l&&(0,N.jsx)("div",{className:"loader",children:(0,N.jsx)(j.Z,{})}),(0,N.jsx)("div",{style:{overflowY:"auto",maxHeight:370},children:s.length?s.map(((t,s)=>(0,N.jsxs)("div",{className:"w-100 py-3 flex",children:[(0,N.jsxs)("div",{className:"d-flex avatar",children:[(0,N.jsx)(S.Z,{src:(0,I.Z)(t.img),width:40,height:40,preview:!1,className:"rounded"}),(0,N.jsxs)("div",{className:"ml-2 avatar-text",children:[(0,N.jsx)("h5",{className:"title",children:t.firstname+" "+t.lastname}),(0,N.jsx)("div",{className:"text-muted",children:t.phone})]})]}),(0,N.jsx)("div",{className:"d-flex",children:(0,N.jsxs)("div",{className:"mr-3 text-right",children:[(0,N.jsxs)("span",{className:"text-muted",children:[t.count," ",e("orders")]}),(0,N.jsx)("div",{className:"mb-0 h5 font-weight-bold",children:(0,C.Z)(t.total_price,null===i||void 0===i?void 0:i.symbol,null===i||void 0===i?void 0:i.position)})]})})]},s))):(0,N.jsx)(h.Z,{children:(0,N.jsx)(v.Z,{span:24,children:(0,N.jsx)(E.Z,{id:"nosell"})})})})]})}var U=s(45464);function F(){const{t:e}=(0,m.$)(),t=(0,r.I0)(),{topProducts:s,loading:l,params:n}=(0,r.v9)((e=>e.topProducts),r.wU),{role:i}=(0,r.v9)((e=>e.auth.user),r.wU),o=(e,s)=>{const l={...n,[e]:s};switch(t((0,a.ut)(l)),i){case"admin":t((0,a.hT)(l));break;case"seller":t((0,a.t3)(l))}};return(0,N.jsxs)(x.Z,{title:e("top.selled.products"),extra:(0,N.jsxs)(P.Z,{children:[(0,N.jsxs)(f.Z,{value:n.perPage,size:"small",style:{minWidth:110},onSelect:e=>o("perPage",e),children:[(0,N.jsx)(f.Z.Option,{value:5,children:`5 / ${e("page")}`}),(0,N.jsx)(f.Z.Option,{value:10,children:`10 / ${e("page")}`}),(0,N.jsx)(f.Z.Option,{value:50,children:`50 / ${e("page")}`}),(0,N.jsx)(f.Z.Option,{value:100,children:`100 / ${e("page")}`})]}),(0,N.jsxs)(f.Z,{value:n.time,size:"small",style:{minWidth:110},onSelect:e=>o("time",e),defaultValue:"subMonth",children:[(0,N.jsx)(f.Z.Option,{value:"subWeek",children:e("this.week")}),(0,N.jsx)(f.Z.Option,{value:"subMonth",children:e("this.month")}),(0,N.jsx)(f.Z.Option,{value:"subYear",children:e("this.year")})]})]}),className:"h-100",children:[l&&(0,N.jsx)("div",{className:"loader",children:(0,N.jsx)(j.Z,{})}),(0,N.jsx)("div",{style:{overflowY:"auto",maxHeight:370},children:null!==s&&void 0!==s&&s.length?s.map(((t,s)=>{var l,r,n,i;return(0,N.jsxs)("div",{className:"w-100 py-3 flex",children:[(0,N.jsxs)("div",{className:"d-flex avatar",children:[(0,N.jsx)(S.Z,{src:(0,U.Z)(null===t||void 0===t||null===(l=t.product)||void 0===l?void 0:l.img),width:40,height:40,preview:!1,style:{borderRadius:10}}),(0,N.jsx)("div",{className:"ml-2 avatar-text",children:(0,N.jsx)("h5",{className:"title",children:null===t||void 0===t||null===(r=t.product)||void 0===r||null===(n=r.translation)||void 0===n?void 0:n.title})})]}),(0,N.jsx)("div",{className:"d-flex",children:(0,N.jsxs)("div",{className:"mr-3 text-right",children:[(0,N.jsx)("span",{className:"text-muted",children:e("sales")}),(0,N.jsx)("div",{className:"mb-0 h5 font-weight-bold",children:null!==(i=null===t||void 0===t?void 0:t.count)&&void 0!==i?i:0})]})})]},s)})):(0,N.jsx)(h.Z,{children:(0,N.jsx)(v.Z,{span:24,children:(0,N.jsx)(E.Z,{id:"nosell"})})})})]})}var T=s(59491),D=s(10976),A=s(66672),K=s(1413);const R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"}}]},name:"plus-circle",theme:"filled"};var W=s(17469),V=function(e,t){return l.createElement(W.Z,(0,K.Z)((0,K.Z)({},e),{},{ref:t,icon:R}))};V.displayName="PlusCircleFilled";const Y=l.forwardRef(V),L=e=>{let{onFormSubmit:t}=e;const[s]=D.Z.useForm(),{t:l}=(0,m.$)();return(0,N.jsx)(D.Z,{form:s,onFinish:e=>{t(e),s.resetFields()},layout:"horizontal",className:"todo-form",children:(0,N.jsxs)(h.Z,{gutter:20,children:[(0,N.jsx)(v.Z,{xs:24,sm:24,md:12,lg:14,xl:18,children:(0,N.jsx)(D.Z.Item,{name:"name",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(l("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(l("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(l("required")))}],children:(0,N.jsx)(A.Z,{placeholder:l("todo.placeholder")})})}),(0,N.jsx)(v.Z,{xs:24,sm:24,md:12,lg:10,xl:6,children:(0,N.jsxs)(T.Z,{type:"primary",htmlType:"submit",block:!0,children:[(0,N.jsx)(Y,{}),l("todo.add")]})})]})})};var B=s(56140),H=s(42346),q=s(32697);const J=e=>{let{todos:t,onTodoToggle:s}=e;const{t:l}=(0,m.$)();return(0,N.jsxs)(N.Fragment,{children:[0===t.length||(0,N.jsxs)(B.Z.Text,{children:[t.filter((e=>e.isComplete)).length," of ",t.length," ",l("remaining")]}),(0,N.jsx)("div",{style:{maxHeight:"280px",overflowY:"auto"},children:(0,N.jsx)(H.ZP,{locale:{emptyText:l("todo.empty")},dataSource:t,renderItem:e=>(0,N.jsx)(H.ZP.Item,{style:{paddingRight:0,paddingLeft:0},onClick:()=>s(e.id),children:(0,N.jsxs)(P.Z,{className:"w-100 justify-content-between",children:[(0,N.jsxs)(P.Z,{className:"align-items-end",children:[(0,N.jsx)(q.Z,{checked:e.isComplete}),(0,N.jsx)(B.Z.Text,{delete:e.isComplete,children:e.name})]}),(0,N.jsx)(B.Z.Text,{children:b()(e.date).format("MMM DD YYYY hh:mm a")})]})},e.id)})})]})};var G=s(17777);const X=()=>{const e=(0,r.v9)((e=>e.todo.todos)),{t:t}=(0,m.$)(),s=(0,r.I0)();return(0,N.jsxs)(x.Z,{className:"h-100",title:t("todo.list"),extra:(0,N.jsx)(T.Z,{danger:!0,type:"primary",disabled:0===e.filter((e=>e.isComplete)).length,onClick:()=>{s((0,G.Xd)(e.filter((e=>e.isComplete)).map((e=>e.id))))},children:t("archive")}),children:[(0,N.jsx)(L,{onFormSubmit:e=>s((0,G.rk)(e))}),(0,N.jsx)(J,{todos:e,onTodoToggle:e=>s((0,G.wv)(e))})]})},Q=e=>{let{counts:t}=e;const{t:s}=(0,m.$)();return(0,N.jsx)(x.Z,{title:s("orders"),className:"h-100",children:(0,N.jsx)(y.Z,{type:"pie",series:[(null===t||void 0===t?void 0:t.progress_orders_count)||{data:[]},(null===t||void 0===t?void 0:t.delivered_orders_count)||{data:[]},(null===t||void 0===t?void 0:t.cancel_orders_count)||{data:[]}],xAxis:[s("in.progress.orders"),s("delivered.orders"),s("canceled.orders")],customOptions:{labels:[s("in.progress.orders"),s("delivered.orders"),s("canceled.orders")]}})})};function ee(e){let{isSeller:t}=e;const{t:s}=(0,m.$)(),i=(0,p.s0)(),o=(0,r.I0)(),{user:a}=(0,r.v9)((e=>e.auth),r.wU),{counts:c}=(0,r.v9)((e=>e.statisticsCount),r.wU),{theme:d}=(0,r.v9)((e=>e.theme),r.wU),u=(0,l.useMemo)((()=>!!d.parcelMode&&"admin"===(null===a||void 0===a?void 0:a.role)),[d,a]),f=(e,t)=>{const s="report/stock"===e?{id:e,url:e,name:t,refetch:!0,data:{value:"out_of_stock",label:"Out of stock"}}:{id:e,url:e,name:t,refetch:!0};o((0,n.K0)(s)),i(`/${e}`)};return(0,N.jsxs)("div",{children:[(0,N.jsx)($,{}),u?(0,N.jsx)("div",{}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(h.Z,{gutter:16,className:"mt-3",children:[(0,N.jsx)(v.Z,{span:24,children:(0,N.jsx)(x.Z,{children:(0,N.jsx)("span",{style:{fontSize:"1rem"},children:s("last.30.days.statistics")})})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:s("in.progress.orders"),value:null===c||void 0===c?void 0:c.progress_orders_count,color:"purple",onClick:()=>f("seller"===(null===a||void 0===a?void 0:a.role)?"seller/orders?status=new":"orders?status=new",s("in.progress.orders"))})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:s("cancelled.orders"),value:null===c||void 0===c?void 0:c.cancel_orders_count,color:"red",onClick:()=>f("seller"===(null===a||void 0===a?void 0:a.role)?"seller/orders?status=canceled":"orders?status=canceled",s("cancelled.orders"))})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:s("delivered.orders"),value:null===c||void 0===c?void 0:c.delivered_orders_count,color:"green",onClick:()=>f("seller"===(null===a||void 0===a?void 0:a.role)?"seller/orders?status=delivered":"orders?status=delivered",s("delivered.orders"))})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:s("out.of.stock.products"),value:null===c||void 0===c?void 0:c.products_out_of_count,color:"red",onClick:()=>{"admin"===(null===a||void 0===a?void 0:a.role)&&f("report/stock",s("stock"))}})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:s("total.products"),value:null===c||void 0===c?void 0:c.products_count,color:"grey",onClick:()=>f("seller"===(null===a||void 0===a?void 0:a.role)?"seller/products":"catalog/products",s("products"))})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:s("shop.reviews"),value:null===c||void 0===c?void 0:c.reviews_count,color:"purple"})})]}),(0,N.jsxs)(h.Z,{gutter:16,children:[(0,N.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,N.jsx)(_,{title:s("total.earned"),value:null===c||void 0===c?void 0:c.total_earned,subtitle:s("last.30.days")})}),(0,N.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,N.jsx)(_,{title:s("delivery.earning"),value:null===c||void 0===c?void 0:c.delivery_earned,subtitle:s("last.30.days")})}),(0,N.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,N.jsx)(_,{title:s("total.order.tax"),value:null===c||void 0===c?void 0:c.tax_earned,subtitle:s("last.30.days")})}),(0,N.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,N.jsx)(_,{title:s("total.comission"),value:null===c||void 0===c?void 0:c.commission_earned,subtitle:s("last.30.days")})})]}),(0,N.jsxs)(h.Z,{gutter:[24,24],children:[(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)(k,{})}),(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)(X,{})}),(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)(F,{})}),(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)(O,{})}),!t&&(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)(z,{})}),(0,N.jsx)(v.Z,{span:12,children:(0,N.jsx)(Q,{counts:c})})]})]})]})}var te=s(49986);function se(){var e;const{t:t}=(0,m.$)(),[s,n]=(0,l.useState)(null),{counts:i}=(0,r.v9)((e=>e.statisticsCount),r.wU);return(0,l.useEffect)((()=>{te.Z.profileShow().then((e=>{let{data:t}=e;return n(t)}))}),[]),(0,N.jsxs)("div",{children:[(0,N.jsxs)(h.Z,{gutter:16,className:"mt-3",children:[(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:t("total.orders"),value:i.orders_count})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:t("in.progress.orders"),value:i.progress_orders_count})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:t("cancelled.orders"),value:i.cancel_orders_count})}),(0,N.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,N.jsx)(M.Z,{title:t("delivered.orders"),value:i.delivered_orders_count})})]}),(0,N.jsx)(h.Z,{gutter:16,children:(0,N.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,N.jsx)(_,{title:t("balance"),value:null===s||void 0===s||null===(e=s.wallet)||void 0===e?void 0:e.price})})})]})}var le=s(87569);const re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"};var ne=function(e,t){return l.createElement(W.Z,(0,K.Z)((0,K.Z)({},e),{},{ref:t,icon:re}))};ne.displayName="SmileOutlined";const ie=l.forwardRef(ne);function oe(){const{t:e}=(0,m.$)(),t=(0,r.I0)(),s=(0,p.s0)(),{user:l}=(0,r.v9)((e=>e.auth),r.wU);return(0,N.jsx)(x.Z,{children:(0,N.jsx)(le.ZP,{icon:(0,N.jsx)(ie,{}),title:`${e("welcome")}, ${null===l||void 0===l?void 0:l.fullName}`,subTitle:e("welcome.manager"),extra:(0,N.jsx)(T.Z,{type:"primary",onClick:()=>{t((0,n.bL)({id:"orders",url:"orders",name:e("orders")})),s("/orders")},children:e("get.started")})})})}function ae(){const{t:e}=(0,m.$)(),t=(0,r.I0)(),s=(0,p.s0)(),{user:l}=(0,r.v9)((e=>e.auth),r.wU);return(0,N.jsx)(x.Z,{children:(0,N.jsx)(le.ZP,{icon:(0,N.jsx)(ie,{}),title:`${e("welcome")}, ${null===l||void 0===l?void 0:l.fullName}`,subTitle:e("welcome.manager"),extra:(0,N.jsx)(T.Z,{type:"primary",onClick:()=>{t((0,n.bL)({id:"orders",url:"seller/orders",name:e("orders")})),s("/seller/orders")},children:e("get.started")})})})}function ce(){const e=(0,r.I0)(),{activeMenu:t}=(0,r.v9)((e=>e.menu),r.wU),{user:s}=(0,r.v9)((e=>e.auth),r.wU),{loading:h}=(0,r.v9)((e=>e.statisticsCount),r.wU);(0,l.useEffect)((()=>{t.refetch&&(!function(){const t={time:"subMonth"};switch(null===s||void 0===s?void 0:s.role){case"admin":e((0,i.dL)(t)),e((0,o.sl)(t)),e((0,a.hT)(t)),e((0,d.n8)(t)),e((0,u.yS)(t));break;case"manager":e((0,o.sl)(t)),e((0,a.hT)(t));break;case"seller":e((0,i.gm)(t)),e((0,a.t3)(t)),e((0,d._I)(t)),e((0,u.xe)(t));break;case"moderator":default:break;case"deliveryman":e((0,i.Hq)())}}(),e((0,n.A_)(t)))}),[t.refetch]);return(0,N.jsx)("div",{className:"h-100",children:h?(0,N.jsx)(c.Z,{size:"large"}):(()=>{switch(s.role){case"admin":return(0,N.jsx)(ee,{});case"manager":return(0,N.jsx)(oe,{});case"seller":return(0,N.jsx)(ee,{isSeller:!0});case"moderator":return(0,N.jsx)(ae,{});case"deliveryman":return(0,N.jsx)(se,{});case"waiter":return(0,N.jsx)(p.Fg,{to:"/waiter/orders-board",replace:!0});default:return null}})()})}},14637:(e,t,s)=>{s.d(t,{Z:()=>n});s(47313);var l=s(77181),r=s(46417);function n(e){let{title:t="Orders",value:s=0,color:n="grey",onClick:i}=e;return(0,r.jsx)(l.Z,{className:"statistics-card",hoverable:!!i,onClick:i,children:(0,r.jsxs)("div",{className:"card-wrapper",children:[(0,r.jsx)("div",{className:"space"}),(0,r.jsx)("div",{className:"content",children:(0,r.jsx)("h1",{className:"number",children:s})}),(0,r.jsx)("span",{className:`highlighter ${n}`}),t&&(0,r.jsx)("h4",{className:"title",children:t})]})})}},32697:(e,t,s)=>{s.d(t,{Z:()=>N});var l=s(4942),r=s(87462),n=s(47313),i=s(46123),o=s.n(i),a=s(56482),c=s(4431),d=s(93433),u=s(29439),h=s(205),v=s(91964),x=function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(s[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(s[l[r]]=e[l[r]])}return s},m=n.createContext(null),p=function(e,t){var s=e.defaultValue,i=e.children,a=e.options,c=void 0===a?[]:a,p=e.prefixCls,f=e.className,j=e.style,g=e.onChange,Z=x(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),b=n.useContext(v.E_),w=b.getPrefixCls,N=b.direction,k=n.useState(Z.value||s||[]),C=(0,u.Z)(k,2),O=C[0],M=C[1],_=n.useState([]),$=(0,u.Z)(_,2),P=$[0],S=$[1];n.useEffect((function(){"value"in Z&&M(Z.value||[])}),[Z.value]);var I=function(){return c.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},E=w("checkbox",p),z="".concat(E,"-group"),U=(0,h.Z)(Z,["value","disabled"]);c&&c.length>0&&(i=I().map((function(e){return n.createElement(y,{prefixCls:E,key:e.value.toString(),disabled:"disabled"in e?e.disabled:Z.disabled,value:e.value,checked:-1!==O.indexOf(e.value),onChange:e.onChange,className:"".concat(z,"-item"),style:e.style},e.label)})));var F={toggleOption:function(e){var t=O.indexOf(e.value),s=(0,d.Z)(O);-1===t?s.push(e.value):s.splice(t,1),"value"in Z||M(s);var l=I();null===g||void 0===g||g(s.filter((function(e){return-1!==P.indexOf(e)})).sort((function(e,t){return l.findIndex((function(t){return t.value===e}))-l.findIndex((function(e){return e.value===t}))})))},value:O,disabled:Z.disabled,name:Z.name,registerValue:function(e){S((function(t){return[].concat((0,d.Z)(t),[e])}))},cancelValue:function(e){S((function(t){return t.filter((function(t){return t!==e}))}))}},T=o()(z,(0,l.Z)({},"".concat(z,"-rtl"),"rtl"===N),f);return n.createElement("div",(0,r.Z)({className:T,style:j},U,{ref:t}),n.createElement(m.Provider,{value:F},i))},f=n.forwardRef(p);const j=n.memo(f);var g=function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(s[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(s[l[r]]=e[l[r]])}return s},Z=function(e,t){var s,i=e.prefixCls,d=e.className,u=e.children,h=e.indeterminate,x=void 0!==h&&h,p=e.style,f=e.onMouseEnter,j=e.onMouseLeave,Z=e.skipGroup,b=void 0!==Z&&Z,y=g(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),w=n.useContext(v.E_),N=w.getPrefixCls,k=w.direction,C=n.useContext(m),O=(0,n.useContext)(c.aM).isFormItemInput,M=n.useRef(y.value);n.useEffect((function(){null===C||void 0===C||C.registerValue(y.value)}),[]),n.useEffect((function(){if(!b)return y.value!==M.current&&(null===C||void 0===C||C.cancelValue(M.current),null===C||void 0===C||C.registerValue(y.value),M.current=y.value),function(){return null===C||void 0===C?void 0:C.cancelValue(y.value)}}),[y.value]);var _=N("checkbox",i),$=(0,r.Z)({},y);C&&!b&&($.onChange=function(){y.onChange&&y.onChange.apply(y,arguments),C.toggleOption&&C.toggleOption({label:u,value:y.value})},$.name=C.name,$.checked=-1!==C.value.indexOf(y.value),$.disabled=y.disabled||C.disabled);var P=o()((s={},(0,l.Z)(s,"".concat(_,"-wrapper"),!0),(0,l.Z)(s,"".concat(_,"-rtl"),"rtl"===k),(0,l.Z)(s,"".concat(_,"-wrapper-checked"),$.checked),(0,l.Z)(s,"".concat(_,"-wrapper-disabled"),$.disabled),(0,l.Z)(s,"".concat(_,"-wrapper-in-form-item"),O),s),d),S=o()((0,l.Z)({},"".concat(_,"-indeterminate"),x)),I=x?"mixed":void 0;return n.createElement("label",{className:P,style:p,onMouseEnter:f,onMouseLeave:j},n.createElement(a.Z,(0,r.Z)({"aria-checked":I},$,{prefixCls:_,className:S,ref:t})),void 0!==u&&n.createElement("span",null,u))},b=n.forwardRef(Z);b.displayName="Checkbox";const y=b;var w=y;w.Group=j,w.__ANT_CHECKBOX=!0;const N=w},56482:(e,t,s)=>{s.d(t,{Z:()=>m});var l=s(87462),r=s(4942),n=s(45987),i=s(1413),o=s(15671),a=s(43144),c=s(60136),d=s(54062),u=s(47313),h=s(46123),v=s.n(h),x=function(e){(0,c.Z)(s,e);var t=(0,d.Z)(s);function s(e){var l;(0,o.Z)(this,s),(l=t.call(this,e)).handleChange=function(e){var t=l.props,s=t.disabled,r=t.onChange;s||("checked"in l.props||l.setState({checked:e.target.checked}),r&&r({target:(0,i.Z)((0,i.Z)({},l.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},l.saveInput=function(e){l.input=e};var r="checked"in e?e.checked:e.defaultChecked;return l.state={checked:r},l}return(0,a.Z)(s,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,s=t.prefixCls,i=t.className,o=t.style,a=t.name,c=t.id,d=t.type,h=t.disabled,x=t.readOnly,m=t.tabIndex,p=t.onClick,f=t.onFocus,j=t.onBlur,g=t.onKeyDown,Z=t.onKeyPress,b=t.onKeyUp,y=t.autoFocus,w=t.value,N=t.required,k=(0,n.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),C=Object.keys(k).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=k[t]),e}),{}),O=this.state.checked,M=v()(s,i,(e={},(0,r.Z)(e,"".concat(s,"-checked"),O),(0,r.Z)(e,"".concat(s,"-disabled"),h),e));return u.createElement("span",{className:M,style:o},u.createElement("input",(0,l.Z)({name:a,id:c,type:d,required:N,readOnly:x,disabled:h,tabIndex:m,className:"".concat(s,"-input"),checked:!!O,onClick:p,onFocus:f,onBlur:j,onKeyUp:b,onKeyDown:g,onKeyPress:Z,onChange:this.handleChange,autoFocus:y,ref:this.saveInput,value:w},C)),u.createElement("span",{className:"".concat(s,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,i.Z)((0,i.Z)({},t),{},{checked:e.checked}):null}}]),s}(u.Component);x.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=x}}]);