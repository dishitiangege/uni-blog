(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_a-ucenter-login-page-phone-code-phone-code"],{"0e39":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-9f96407e]{display:flex;box-sizing:border-box;flex-direction:column}.short-code-btn[data-v-9f96407e]{width:%?200?%;height:%?85?%;display:flex;justify-content:center;align-items:center}.inner-text[data-v-9f96407e]{font-size:%?28?%;color:#aaa}.inner-text-active[data-v-9f96407e]{color:#007aff}',""]),t.exports=e},1192:function(t,e,n){"use strict";var a=n("85af"),i=n.n(a);i.a},"119e":function(t,e,n){"use strict";(function(t){n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5fe1")),o={mixins:[i.default],data:function(){return{code:"",phone:"",captcha:!1}},computed:{tipText:function(){return this.$t("common.verifyCodeSend")+"".concat(this.phone,"。")},canSubmit:function(){return 6==this.code.length}},onLoad:function(t){var e=t.phoneNumber;t.phoneArea;this.phone=e},onReady:function(){11==this.phone.length&&this.$refs.sendSmsCode.start()},methods:{submit:function(){var e=this;t.callFunction({name:"uni-id-cf",data:{action:"loginBySms",params:{mobile:this.phone,code:this.code,captcha:this.captcha}},success:function(t){var n=t.result;if(uni.showToast({title:n.msg||n.errMsg,icon:"none"}),"CAPTCHA_REQUIRED"==n.errCode)return e.$refs["popup-captcha"].open();0===n.code&&e.loginSuccess(n)},complete:function(){e.captcha=!1}})}}};e.default=o}).call(this,n("a9ff")["default"])},"1b5d":function(t,e,n){"use strict";n.r(e);var a=n("7e0a"),i=n("c079");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("7c7d");var c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"322d10e0",null,!1,a["a"],void 0);e["default"]=r.exports},3177:function(t,e,n){"use strict";var a=n("c4b9"),i=n.n(a);i.a},"48e4":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniIcons:n("ac1d").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"captcha-box"},[n("v-uni-view",{staticClass:"captcha-img-box"},[t.loging?n("uni-icons",{staticClass:"loding",attrs:{size:"20px",color:"#BBB",type:"spinner-cycle"}}):t._e(),n("v-uni-image",{staticClass:"captcha-img",class:{opacity:t.loging},attrs:{src:t.captchaBase64,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getImageCaptcha.apply(void 0,arguments)}}})],1),n("v-uni-input",{staticClass:"captcha",attrs:{focus:t.focusCaptchaInput,type:"text",inputBorder:!1,maxlength:"4",placeholder:"请输入验证码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusCaptchaInput=!1}},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)},o=[]},"4e0d":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-409f9516]{display:flex;flex-direction:column}.popup-captcha[data-v-409f9516]{display:flex;max-width:600px;width:%?600?%;padding-bottom:0;background-color:#fff;border-radius:10px;flex-direction:column;position:relative}.popup-captcha .content[data-v-409f9516]{padding:1.3em .8em}.popup-captcha .title[data-v-409f9516]{text-align:center;word-wrap:break-word;word-break:break-all;white-space:pre-wrap;font-weight:400;font-size:18px;overflow:hidden;text-overflow:ellipsis;color:#111;margin-bottom:15px}.button-box[data-v-409f9516]{height:44px;border-top:solid 1px #eee;flex-direction:row;align-items:center;justify-content:space-around}.button-box[data-v-409f9516], .btn[data-v-409f9516]{height:44px;line-height:44px}.button-box .btn[data-v-409f9516]{flex:1;margin:1px;text-align:center}.button-box .confirm[data-v-409f9516]{color:#007aff;border-left:solid 1px #eee}',""]),t.exports=e},"4fb5":function(t,e,n){"use strict";n.r(e);var a=n("7ecd"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},5073:function(t,e,n){"use strict";n.r(e);var a=n("ef31"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},5754:function(t,e,n){"use strict";n.r(e);var a=n("6689"),i=n("84a6");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1192");var c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"409f9516",null,!1,a["a"],void 0);e["default"]=r.exports},"5fe1":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),o=n("26cb"),c=a(n("c393")),r={methods:(0,i.default)((0,i.default)({},(0,o.mapMutations)({setUserInfo:"user/login"})),{},{loginSuccess:function(t){(0,c.default)(t),delete t.userInfo.token,"register"==t.type&&(t.userInfo._id=t.uid),this.setUserInfo(t.userInfo)}})},s=r;e.default=s},6689:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniPopup:n("ffed").default,uniCaptcha:n("bf0c9").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-popup",{ref:"popup",attrs:{type:"center"}},[n("v-uni-view",{staticClass:"popup-captcha"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),n("uni-captcha",{attrs:{focus:t.focus,scene:t.scene},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1),n("v-uni-view",{staticClass:"button-box"},[n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-view",{staticClass:"btn confirm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)},o=[]},"7c7d":function(t,e,n){"use strict";var a=n("a478"),i=n.n(a);i.a},"7e0a":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniForms:n("9a6d").default,uniEasyinput:n("7796").default,uniSendSmsCode:n("f322").default,uniQuickLogin:n("3162").default,uniPopupCaptcha:n("5754").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"tit"},[t._v(t._s(t.$t("common.verifyCodePlaceholder")))]),n("v-uni-text",{staticClass:"tip"},[t._v(t._s(t.tipText))]),n("uni-forms",[n("uni-easyinput",{staticClass:"easyinput",attrs:{type:"number",inputBorder:!1,maxlength:"6",placeholder:t.$t("common.verifyCodePlaceholder")},scopedSlots:t._u([{key:"right",fn:function(){return[n("uni-send-sms-code",{ref:"sendSmsCode",attrs:{phone:t.phone}})]},proxy:!0}]),model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),n("v-uni-button",{staticClass:"send-btn",attrs:{disabled:!t.canSubmit,type:t.canSubmit?"primary":"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.login")))])],1),n("uni-quick-login",{attrs:{agree:!0}}),n("uni-popup-captcha",{ref:"popup-captcha",attrs:{scene:"loginBySms"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}})],1)},o=[]},"7ecd":function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f"),n("00b4");var a={name:"uni-send-sms-code",props:{count:{type:[String,Number],default:60},phone:{type:[String,Number],default:""},codeType:{type:String,default:function(){return"login"}}},data:function(){return{reverseNumber:0,reverseTimer:null}},computed:{innerText:function(){return 0==this.reverseNumber?this.$t("common.getVerifyCode"):this.$t("smsCode.resendVerifyCode")+"("+this.reverseNumber+"s)"}},created:function(){this.initClick()},methods:{initClick:function(){var t=this;this.start=function(t,e){var n;return e=e||500,function(){var a=this,i=arguments;n&&clearTimeout(n);var o=!n;n=setTimeout((function(){n=null}),e),o&&t.apply(a,i)}}((function(){0==t.reverseNumber&&t.sendMsg()}))},sendMsg:function(){var e=this;if(!/^1\d{10}$/.test(this.phone))return uni.showToast({title:this.$t("smsCode.phoneErrTip"),icon:"none"});t.callFunction({name:"uni-id-cf",data:{action:"sendSmsCode",params:{mobile:this.phone,type:this.codeType}},success:function(t){var n=t.result;console.log(n),0===n.code?(uni.showToast({title:e.$t("smsCode.sendSuccessTip"),icon:"none"}),e.reverseNumber=Number(e.count),e.getCode(),e.$emit("getCode")):uni.showModal({content:n.msg,showCancel:!1})}})},getCode:function(){var t=this;if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((function(){t.getCode()}),1e3)}}};e.default=a}).call(this,n("a9ff")["default"])},"7fb4":function(t,e,n){"use strict";var a=n("dc9e"),i=n.n(a);i.a},"84a6":function(t,e,n){"use strict";n.r(e);var a=n("9ed1"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"85af":function(t,e,n){var a=n("4e0d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("850f9a16",a,!0,{sourceMap:!1,shadowMode:!1})},"9ed1":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{focus:!1}},props:{modelValue:String,value:String,scene:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}}},computed:{val:{get:function(){return this.value||this.modelValue},set:function(t){this.$emit("input",t)}}},methods:{open:function(){this.focus=!0,this.val="",this.$refs.popup.open()},close:function(){this.focus=!1,this.$refs.popup.close()},confirm:function(){if(!this.val||this.val.length<4)return uni.showToast({title:"请填写验证码",icon:"none"});this.close(),this.$emit("confirm")}}};e.default=a},a478:function(t,e,n){var a=n("aa6a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("18392ff0",a,!0,{sourceMap:!1,shadowMode:!1})},aa6a:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-view[data-v-322d10e0]{display:flex;box-sizing:border-box;flex-direction:column}\n.content[data-v-322d10e0]{padding:0 %?50?%;\r\n\t/* width: 750rpx; */flex:1}.input-box[data-v-322d10e0]{padding:0 15px;margin-bottom:10px;background-color:#f8f8f8;border-radius:6px;font-size:%?28?%}.get-code[data-v-322d10e0]{margin:0;margin-top:15px;background-color:#007aff;color:#fff}.input-box[data-v-322d10e0],\r\n.get-code[data-v-322d10e0]{height:45px;line-height:45px}.title[data-v-322d10e0]{text-align:center;padding-bottom:5px}.tip[data-v-322d10e0]{color:#666;font-size:%?26?%;margin:6px 0}.easyinput[data-v-322d10e0]{background-color:#f8f8f8;border-radius:%?6?%}.send-btn[data-v-322d10e0]{width:100%;margin-top:15px;border-radius:%?6?%}.link[data-v-322d10e0]{color:#04498c}",""]),t.exports=e},bf0c9:function(t,e,n){"use strict";n.r(e);var a=n("48e4"),i=n("5073");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3177");var c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"67fed0b2",null,!1,a["a"],void 0);e["default"]=r.exports},c079:function(t,e,n){"use strict";n.r(e);var a=n("119e"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},c393:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){uni.showToast({title:"登录成功",icon:"none"}),console.log("登录成功",t);var e=0,n=getCurrentPages();n.forEach((function(t,a){n[n.length-a-1].route.split("/"),"login-page"==n[n.length-a-1].route.split("/")[2]&&e++})),uni.navigateBack({delta:e})},n("d3b7"),n("159b")},c4b9:function(t,e,n){var a=n("d08d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("235f2e74",a,!0,{sourceMap:!1,shadowMode:!1})},cb9e:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"short-code-btn",attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"inner-text",class:0==t.reverseNumber?"inner-text-active":""},[t._v(t._s(t.innerText))])],1)},i=[]},d08d:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.captcha-box[data-v-67fed0b2]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;flex:1}.captcha-img-box[data-v-67fed0b2],\n.captcha[data-v-67fed0b2]{height:44px;line-height:44px}.captcha-img-box[data-v-67fed0b2]{position:relative;background-color:#fefae7}.captcha[data-v-67fed0b2]{background-color:#f8f8f8;font-size:14px;flex:1;padding:0 %?20?%;margin-left:%?20?%;box-sizing:border-box}.captcha-img-box[data-v-67fed0b2],\n.captcha-img[data-v-67fed0b2],\n.loding[data-v-67fed0b2]{height:44px!important;width:100px}.captcha-img[data-v-67fed0b2]{cursor:pointer}.loding[data-v-67fed0b2]{z-index:9;color:#bbb;position:absolute;text-align:center;line-height:45px;-webkit-animation:rotate-data-v-67fed0b2 1s linear infinite;animation:rotate-data-v-67fed0b2 1s linear infinite}.opacity[data-v-67fed0b2]{opacity:.5}@-webkit-keyframes rotate-data-v-67fed0b2{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-67fed0b2{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},dc9e:function(t,e,n){var a=n("0e39");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("78b41ba9",a,!0,{sourceMap:!1,shadowMode:!1})},ef31:function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7");var a={props:{modelValue:String,value:String,scene:{type:String,default:function(){return""}},focus:{type:Boolean,default:function(){return!1}}},computed:{val:{get:function(){return this.value||this.modelValue},set:function(t){this.$emit("input",t)}}},data:function(){return{focusCaptchaInput:!1,captchaBase64:"",loging:!1}},watch:{scene:{handler:function(t){t?this.getImageCaptcha(this.focus):uni.showToast({title:"scene不能为空",icon:"none"})},immediate:!0}},methods:{getImageCaptcha:function(){var e=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loging=!0,n&&(this.val="",this.focusCaptchaInput=!0);var a=t.importObject("uni-captcha-co",{customUI:!0});a.getImageCaptcha({scene:this.scene}).then((function(t){e.captchaBase64=t.captchaBase64})).catch((function(t){uni.showToast({title:t.message,icon:"none"})})).finally((function(t){e.loging=!1}))}}};e.default=a}).call(this,n("a9ff")["default"])},f322:function(t,e,n){"use strict";n.r(e);var a=n("cb9e"),i=n("4fb5");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("7fb4");var c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"9f96407e",null,!1,a["a"],void 0);e["default"]=r.exports}}]);