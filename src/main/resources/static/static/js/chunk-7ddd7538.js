(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ddd7538"],{"0aa7":function(e,t,r){},"25c5":function(e,t,r){"use strict";var s=r("0aa7"),n=r.n(s);n.a},"35b0":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pc-login"},[r("el-form",{ref:"loginForm",staticClass:"login-box",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("h3",{staticClass:"login-title"},[e._v("基于LBS的社交网络平台")]),r("el-form-item",{staticStyle:{color:"#fff"},attrs:{label:"账号",prop:"username"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("div",{staticStyle:{margin:"20px 0px","margin-left":"55px"},on:{touchmove:function(e){e.preventDefault()}}},[r("SliderVerificationCode",{attrs:{height:"30px",sliderWidth:"45px",inactiveValue:"false",activeValue:"true",content:"请滑动通过验证"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("loginForm")}}},[e._v("登录")])],1)],1)],1)},n=[],o=(r("96cf"),r("3b8d")),a=r("bdaa"),i={name:"Login",data:function(){return{code:!1,form:{username:"",password:""},rules:{username:[{required:!0,message:"账号不可为空",trigger:"blur"}],password:[{required:!0,message:"密码不可为空",trigger:"blur"}]}}},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){return!!e&&(0==t.code?(t.$message.error("请滑动验证"),!1):void t.handleLogin())}))},handleLogin:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(a["s"])(this.form.username,this.form.password);case 3:t=e.sent,200===t.status?(this.$store.commit("set_token",t.token),sessionStorage.setItem("token",t.token),this.$store.commit("set_userInfo",t.user),sessionStorage.setItem("userInfo",JSON.stringify(t.user)),this.$router.push({path:"/"})):this.$message.error(t.msg||t.error),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.$message.error("网络错误，请稍后重试！");case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()}},c=i,u=(r("25c5"),r("45a1"),r("2877")),l=Object(u["a"])(c,s,n,!1,null,"a66c2fca",null);t["default"]=l.exports},"45a1":function(e,t,r){"use strict";var s=r("96bb"),n=r.n(s);n.a},"96bb":function(e,t,r){}}]);