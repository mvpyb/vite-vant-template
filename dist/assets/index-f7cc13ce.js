import{Y as u}from"./index-86460cf4.js";import{l as n}from"./index-b0355f41.js";import{J as f,K as w,L as b,M as y,f as s,N as C,O as x,_ as B,b as O,c as S,g as t,w as e,u as i,i as v,o as k,P as I,Q as N,h as o,y as P,z as T,a as D}from"./index-fd628991.js";let _;const U={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let L=f({},U);function V(){({instance:_}=b({setup(){const{state:c,toggle:r}=y();return()=>s(x,C(c,{"onUpdate:show":r}),null)}}))}function A(a){return w?new Promise((c,r)=>{_||V(),_.open(f({},L,a,{callback:d=>{(d==="confirm"?c:r)(d)}}))}):Promise.resolve()}const E=a=>A(f({showCancelButton:!0},a));const m=a=>(P("data-v-7372d945"),a=a(),T(),a),H={class:"section user-section"},W={class:"head"},Y=m(()=>t("div",{class:"title"},"用户中心",-1)),z={class:"head-bg"},F=["src"],G=["src"],J=m(()=>t("div",{class:"card-body clearfix"},[t("div",{class:"avatar fl"},[t("img",{src:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",alt:""})]),t("div",{class:"info fl"},[t("div",{class:"user-name ellipsis"},"Hi,小灰灰"),t("div",{class:"phone ellipsis"},"123****8911")])],-1)),K={class:"body"},M=m(()=>t("div",{class:"foot"},null,-1)),Q={__name:"index",setup(a){const c=O(),r=D();async function d(){try{await E({title:"登出",message:"是否确认退出"}),c.LOGIN_OUT(),await r.push("/login"),window&&window.location.reload()}catch{}}return(h,p)=>{const l=v("van-icon"),g=v("van-nav-bar");return k(),S("div",H,[t("div",W,[s(g,{class:"nav-bar"},{left:e(()=>[s(l,{name:"arrow-left",onClick:p[0]||(p[0]=R=>i(r).push("/"))})]),title:e(()=>[Y]),_:1}),t("div",z,[t("img",{class:"img1",src:i(I),alt:""},null,8,F),t("img",{class:"img2",src:i(N),alt:""},null,8,G)]),s(i(u),{class:"user-info"},{body:e(()=>[J]),_:1})]),t("div",K,[s(i(u),{class:"user-info-card"},{body:e(()=>[s(n,{class:"user-info-list"},{left:e(()=>[o("个人信息")]),right:e(()=>[t("div",null,[o("修改资料 "),s(l,{name:"arrow"})])]),_:1}),s(n,{class:"user-info-list"},{left:e(()=>[o("修改密码")]),right:e(()=>[t("div",null,[s(l,{name:"arrow"})])]),_:1}),s(n,{class:"user-info-list"},{left:e(()=>[o("绑定信息")]),right:e(()=>[t("div",null,[s(l,{name:"arrow"})])]),_:1})]),_:1}),s(i(u),{class:"user-info-card"},{body:e(()=>[s(n,{class:"user-info-list"},{left:e(()=>[o("登录历史")]),right:e(()=>[t("div",null,[o("10:04 13:08 "),s(l,{name:"arrow"})])]),_:1}),s(n,{class:"user-info-list"},{left:e(()=>[o("意见反馈")]),right:e(()=>[t("div",null,[s(l,{name:"arrow"})])]),_:1})]),_:1}),s(i(u),{class:"user-info-card"},{body:e(()=>[s(n,{class:"user-info-list"},{left:e(()=>[o("个人信息")]),right:e(()=>[t("div",null,[o("修改资料 "),s(l,{name:"arrow"})])]),_:1}),s(n,{class:"user-info-list"},{left:e(()=>[o("修改密码")]),right:e(()=>[t("div",null,[s(l,{name:"arrow"})])]),_:1}),s(n,{class:"user-info-list"},{left:e(()=>[o("绑定信息")]),right:e(()=>[t("div",null,[s(l,{name:"arrow"})])]),_:1})]),_:1}),s(i(u),{class:"user-info-card"},{body:e(()=>[s(n,{class:"user-info-list"},{center:e(()=>[t("div",{onClick:d},"退出登录")]),_:1})]),_:1})]),M])}}},X=B(Q,[["__scopeId","data-v-7372d945"]]);export{X as default};