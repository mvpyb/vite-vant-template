import{r as B,k as C,m as P,e as L,w as o,u as p,o as N,f as e,h as _,g as d,n as f,s as h,i as n,v as T}from"./index-fd628991.js";import{Y as U}from"./index-4aff5138.js";import{L as Y}from"./index-e9814464.js";const j={class:"form-btn"},q={class:"handle"},z=d("a",{href:"javascript:;"},"《用户隐私协议》",-1),H={__name:"register",setup(F){const c="onBlur",t=B({phone:"",password:"",code:""}),u={phone:[{validator:(l,a)=>l?T(l)?!0:"手机号格式不正确！":"请填写手机号码！",trigger:c}],password:[{required:!0,message:"密码不能为空",trigger:c}],code:[{pattern:/\d{6}/,message:"验证码格式不正确",trigger:c}]},b=C(()=>{const{phone:l,password:a,code:r}=t;return!!(l&&a&&r)}),i=P(!1);async function g(){try{f("短信发送成功")}catch{h("获取短信失败，请稍后再试...")}}const w=async l=>{try{f("注册成功")}catch{h("注册失败，请稍后再试...")}};return(l,a)=>{const r=n("van-field"),m=n("van-col"),v=n("van-button"),y=n("van-row"),V=n("van-cell-group"),k=n("van-form"),x=n("van-radio"),S=n("van-radio-group");return N(),L(p(Y),null,{body:o(()=>[e(k,{"label-width":"0",onSubmit:w},{default:o(()=>[e(V,{inset:""},{default:o(()=>[e(r,{modelValue:t.phone,"onUpdate:modelValue":a[0]||(a[0]=s=>t.phone=s),rules:u.phone,name:"phone",label:"",placeholder:"手机号",maxlength:"11",clearable:""},null,8,["modelValue","rules"]),e(p(U),{password:t.password,rules:u.password,placeholder:"登录密码",label:"",maxlength:16,clearable:!0},null,8,["password","rules"]),e(y,{gutter:"20"},{default:o(()=>[e(m,{span:"16"},{default:o(()=>[e(r,{modelValue:t.code,"onUpdate:modelValue":a[1]||(a[1]=s=>t.code=s),rules:u.code,name:"code",label:"",placeholder:"验证码",maxlength:"6",clearable:""},null,8,["modelValue","rules"])]),_:1}),e(m,{span:"8"},{default:o(()=>[e(v,{disabled:!t.phone,plain:"",hairline:"",round:"",size:"small",onClick:g,class:"code-btn"},{default:o(()=>[_("获取验证码")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),d("div",j,[e(v,{round:"",block:"",type:"primary","native-type":"submit",class:"btn-item h50",disabled:!p(b)},{default:o(()=>[_(" 注册 ")]),_:1},8,["disabled"])])]),_:1})]),foot:o(()=>[d("div",null,[d("div",q,[e(S,{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=s=>i.value=s)},{default:o(()=>[e(x,{name:"1","checked-color":"var( --yu-yellow-color )"},{default:o(()=>[_(" 同意"),z]),_:1})]),_:1},8,["modelValue"])])])]),_:1})}}};export{H as default};
