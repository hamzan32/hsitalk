import{B as s}from"./row.9a0a899f.js";import{F as i,I as n,C as r}from"./index.8f4140d4.js";import{a as t,F as a,j as e}from"./index.d0d0137d.js";function g(){return t(a,{children:[e("h3",{children:"Sign in"}),t(i,{name:"signin",initialValues:{remember:!1},onFinish:o=>{console.log("Success:",o)},onFinishFailed:o=>{console.log("Failed:",o)},autoComplete:"off",children:[e(i.Item,{name:"email",hasFeedback:!0,label:"Email address",labelCol:{span:24},wrapperCol:{span:24},rules:[{required:!0,message:"Please input your email."},{type:"email",message:"Your email is invalid."}],children:e(n,{placeholder:"Email",size:"large"})}),e(i.Item,{name:"password",hasFeedback:!0,label:"Password",labelCol:{span:24},wrapperCol:{span:24},rules:[{required:!0,message:"Please input your password."},{min:6,message:"Password must be minimum 6 characters."}],children:e(n.Password,{placeholder:"Password",size:"large"})}),t(i.Item,{children:[e(i.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:e(r,{children:"Remember me"})}),e("a",{className:"login-form-forgot",href:"#",children:"Forgot password?"})]}),e("div",{className:"signin-button",children:e(s,{type:"primary",htmlType:"submit",shape:"round",size:"large",children:"Sign In"})})]})]})}export{g as default};