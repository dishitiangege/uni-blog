(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_a-ucenter-settings-deactivate-deactivate"],{"12d0":function(t,n,e){"use strict";var a=e("545b"),o=e.n(a);o.a},"172e":function(t,n,e){"use strict";(function(t){e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("5530")),i=e("26cb"),c={data:function(){return{}},onLoad:function(){uni.setNavigationBarTitle({title:this.$t("deactivate.navigationBarTitle")})},methods:(0,o.default)((0,o.default)({},(0,i.mapActions)({logout:"user/logout"})),{},{cancel:function(){uni.navigateBack()},nextStep:function(){var n=this;uni.showModal({content:"已经仔细阅读注销提示，知晓可能带来的后果，并确认要注销",complete:function(e){e.confirm?t.callFunction({name:"uni-id-cf",data:{action:"closeAccount"},complete:function(t){console.log(t),0===t.result.code?(uni.showToast({title:"注销成功"}),n.logout(),uni.navigateTo({url:"/pages/ucenter/login-page/index/index"})):uni.showToast({icon:"error",title:t.result.errMsg})}}):uni.navigateBack()}})}})};n.default=c}).call(this,e("a9ff")["default"])},"1ef2":function(t,n,e){"use strict";e.r(n);var a=e("172e"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"545b":function(t,n,e){var a=e("febd");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("731a9fd8",a,!0,{sourceMap:!1,shadowMode:!1})},d21a:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"words",attrs:{space:"emsp"}},[t._v("一、注销是不可逆操作，注销后:\\n \n\t\t\t1.帐号将无法登录、无法找回。\\n\n\t\t\t2.帐号所有信息都会清除(个人身份信息、粉丝数等;发布的作品、评论、点赞等;交易信息等)，你\n\t\t的朋友将无法通过本应用帐号联系你，请自行备份相关\n\t\t信息和数据。\\n\n\t\t\n\t\t二、重要提示\\n\n\t\t\t1.封禁帐号(永久封禁、社交封禁、直播权限封禁)不能申请注销。\\n\n\t\t\t2.注销后，你的身份证、三方帐号(微信、QQ、微博、支付宝)、手机号等绑定关系将解除，解除后可以绑定到其他帐号。\\n\n\t\t\t3.注销后，手机号可以注册新的帐号，新帐号不会存在之前帐号的任何信息(作品、粉丝、评论、个人信息等)。\\n\n\t\t\t4.注销本应用帐号前，需尽快处理帐号下的资金问题。\\n\n\t\t\t5.视具体帐号情况而定，注销最多需要7天。\\n")]),e("v-uni-view",{staticClass:"button-group"},[e("v-uni-button",{staticClass:"next",attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.nextStep.apply(void 0,arguments)}}},[t._v(t._s(t.$t("deactivate.nextStep")))]),e("v-uni-button",{attrs:{type:"warn"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cancel.apply(void 0,arguments)}}},[t._v(t._s(t.$t("deactivate.cancelText")))])],1)],1)},o=[]},ebc0:function(t,n,e){"use strict";e.r(n);var a=e("d21a"),o=e("1ef2");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("12d0");var c=e("f0c5"),u=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"cca9df26",null,!1,a["a"],void 0);n["default"]=u.exports},febd:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".content[data-v-cca9df26]{display:flex;flex-direction:column;font-size:%?28?%}.words[data-v-cca9df26]{padding:0 %?26?%;line-height:%?46?%;margin-top:%?20?%;margin-bottom:80px}.button-group[data-v-cca9df26]{display:flex;flex-direction:row;position:fixed;height:50px;bottom:10px;width:%?750?%;justify-content:center;align-items:center;border-top:solid 1px #e4e6ec;padding-top:10px;background-color:#fff}.button-group uni-button[data-v-cca9df26]{border-radius:100px;border:none;width:%?300?%;height:42px;line-height:42px;font-size:%?32?%}.button-group uni-button[data-v-cca9df26]:after{border:none}.button-group uni-button.next[data-v-cca9df26]{color:#e64340;border:solid 1px #e64340\n}",""]),t.exports=n}}]);