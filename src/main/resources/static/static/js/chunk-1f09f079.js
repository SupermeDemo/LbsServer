(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f09f079"],{"0d10":function(e,t,a){},7803:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("p",{staticClass:"title"},[e._v("注册")]),a("mt-field",{attrs:{label:"账号",placeholder:"请输入账号",attr:{maxlength:11}},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),a("mt-field",{attrs:{label:"密码",placeholder:"请输入密码",attr:{maxlength:16},type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-field",{attrs:{label:"密码",placeholder:"请再次输入密码",attr:{maxlength:16},type:"password"},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}}),a("mt-field",{attrs:{label:"用户名",placeholder:"请输入用户名",attr:{maxlength:10}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("div",{staticStyle:{padding:"12px"},on:{touchmove:function(e){e.preventDefault()}}},[a("SliderVerificationCode",{attrs:{height:"40px",sliderWidth:"90px",inactiveValue:"false",activeValue:"true",content:"请滑动通过验证"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),a("div",{staticClass:"button-div"},[a("mt-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.handleRegister(t)}}},[e._v("注册")]),a("mt-button",{staticClass:"register",attrs:{plain:""},nativeOn:{click:function(t){return e.handleBack(t)}}},[e._v("返回登录")])],1),a("LbsNav",{attrs:{propSelected:"user"}})],1)},n=[],s=(a("7f7f"),a("96cf"),a("3b8d")),i=a("bdaa"),c=(a("4be7"),a("76a0")),o=a("cf45"),l=a("3d01"),u={name:"home",components:{Field:c["Field"],LbsNav:l["a"],Header:c["Header"]},data:function(){return{code:!1,userName:"",password:"",password2:"",name:""}},created:function(){},mounted:function(){},methods:{handleRegister:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=this.userName.trim()&&""!=this.password.trim()&&""!=this.name.trim()){e.next=3;break}return Object(o["e"])("请填写完整!"),e.abrupt("return");case 3:if(this.password.trim()===this.password2.trim()){e.next=6;break}return Object(o["e"])("两次密码不同！"),e.abrupt("return");case 6:if(0!=this.code){e.next=9;break}return Object(o["e"])("请滑动验证!"),e.abrupt("return");case 9:return c["Indicator"].open(),e.prev=10,e.next=13,Object(i["y"])(this.name,this.password,this.userName);case 13:t=e.sent,200===t.status?(Object(o["f"])("注册成功"),this.$router.push({path:"/login"})):Object(o["e"])(t.msg||t.error),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](10),Object(o["e"])("网络错误，请稍后重试！");case 20:case"end":return e.stop()}}),e,this,[[10,17]])})));function t(){return e.apply(this,arguments)}return t}(),handleBack:function(){this.$router.push({path:"/login"})}}},d=u,p=(a("a3c0"),a("2877")),m=Object(p["a"])(d,r,n,!1,null,"1f16a195",null);t["default"]=m.exports},a3c0:function(e,t,a){"use strict";var r=a("0d10"),n=a.n(r);n.a}}]);