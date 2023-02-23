(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-role-add"],{3983:function(e,t,a){"use strict";var n=a("88e06"),r=a.n(n);r.a},"44e3":function(e,t,a){"use strict";(function(e){a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("5530"));a("caad"),a("2532"),a("b64b"),a("d3b7");var i=a("da89"),o=e.database();o.command;function s(e){var t={};for(var a in i.validator)e.includes(a)&&(t[a]=i.validator[a]);return t}var u={data:function(){var e={role_id:"",role_name:"",permission:[],comment:"",create_date:null};return{formData:e,formOptions:{},rules:(0,r.default)({},s(Object.keys(e)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var e=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(t){e.submitForm(t)})).catch((function(){uni.hideLoading()}))},submitForm:function(e){var t=this;o.collection("uni-id-roles").add(e).then((function(e){uni.showToast({title:"新增成功"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};t.default=u}).call(this,a("a9ff")["default"])},8635:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={uniForms:a("f6fa").default,uniFormsItem:a("e1c2").default,uniEasyinput:a("6e84").default,uniDataCheckbox:a("10fb").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:e.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"role_id",label:"唯一ID",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"角色唯一标识，不可修改，不允许重复",trim:"both"},model:{value:e.formData.role_id,callback:function(t){e.$set(e.formData,"role_id",t)},expression:"formData.role_id"}})],1),a("uni-forms-item",{attrs:{name:"role_name",label:"名称",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"角色名称",trim:"both"},model:{value:e.formData.role_name,callback:function(t){e.$set(e.formData,"role_name",t)},expression:"formData.role_name"}})],1),a("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"permission",label:"权限"}},[a("uni-data-checkbox",{attrs:{multiple:!0,collection:"uni-id-permissions","page-size":500,field:"permission_name as text, permission_id as value"},model:{value:e.formData.permission,callback:function(t){e.$set(e.formData,"permission",t)},expression:"formData.permission"}})],1),a("uni-forms-item",{attrs:{name:"comment",label:"备注"}},[a("uni-easyinput",{attrs:{type:"textarea",placeholder:"备注",trim:"both"},model:{value:e.formData.comment,callback:function(t){e.$set(e.formData,"comment",t)},expression:"formData.comment"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.submit")))]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[e._v(e._s(e.$t("common.button.back")))])],1)],1)],1)],1)},i=[]},"88e06":function(e,t,a){var n=a("de8c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("4f06").default;r("184235e6",n,!0,{sourceMap:!1,shadowMode:!1})},bf85:function(e,t,a){"use strict";a.r(t);var n=a("44e3"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},da89:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=void 0,t.filterToWhere=function(e,t){var a={};for(var n in e){var o=e[n],s=o.type,u=o.value;switch(s){case"search":"string"===typeof u&&u.length&&(a[n]=new RegExp(u));break;case"select":if(u.length){var l,c=[],f=(0,i.default)(u);try{for(f.s();!(l=f.n()).done;){var d=l.value;c.push(t.eq(d))}}catch(D){f.e(D)}finally{f.f()}a[n]=t.or(c)}break;case"range":if(u.length){var m=u[0],v=u[1];a[n]=t.and([t.gte(m),t.lte(v)])}break;case"date":if(u.length){var p=(0,r.default)(u,2),b=p[0],h=p[1],_=new Date(b),g=new Date(h);a[n]=t.and([t.gte(_),t.lte(g)])}break;case"timestamp":if(u.length){var y=(0,r.default)(u,2),w=y[0],x=y[1];a[n]=t.and([t.gte(w),t.lte(x)])}break}}return a},t.validator=void 0;var r=n(a("3835")),i=n(a("b85c"));a("4d63"),a("c607"),a("ac1f"),a("2c3e"),a("25f0"),a("14d9");t.validator={role_id:{rules:[{required:!0},{format:"string"}],label:"唯一ID"},role_name:{rules:[{required:!0},{format:"string"}],label:"名称"},permission:{rules:[{format:"array"}],label:"权限"},comment:{rules:[{format:"string"}],label:"备注"},create_date:{rules:[{format:"timestamp"}]}};t.enumConverter={}},de8c:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"[data-v-693a729b] .uni-forms-item__label{width:90px!important}",""]),e.exports=t},f09d:function(e,t,a){"use strict";a.r(t);var n=a("8635"),r=a("bf85");for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("3983");var o=a("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"693a729b",null,!1,n["a"],void 0);t["default"]=s.exports}}]);