(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-list-list"],{"0cba":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.menu[data-v-c7447474]{position:fixed;left:0;width:calc(100% - %?60?%);z-index:99;background-color:#fff}.menus[data-v-c7447474]{position:fixed;left:0;z-index:99;background-color:#fff}.tags[data-v-c7447474]{font-size:14px;background-color:#f5f6f8;color:#909399;border-radius:%?40?%;margin-right:%?20?%;line-height:%?60?%;padding:0 %?40?%;white-space:nowrap}.tag-active[data-v-c7447474]{background-image:linear-gradient(100deg,#fcfc44,#f8c93c);color:#333;box-shadow:0 0 10px #fff8ab;-webkit-animation:tiaobig-data-v-c7447474 .8s ease-in-out alternate infinite;animation:tiaobig-data-v-c7447474 .8s ease-in-out alternate infinite;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes tiaobig-data-v-c7447474{0%{-webkit-transform:scale(.98);transform:scale(.98)}25%{-webkit-transform:scale(1.08);transform:scale(1.08)}50%{-webkit-transform:scale(.94);transform:scale(.94)}75%{-webkit-transform:scale(1.06);transform:scale(1.06)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes tiaobig-data-v-c7447474{0%{-webkit-transform:scale(.98);transform:scale(.98)}25%{-webkit-transform:scale(1.08);transform:scale(1.08)}50%{-webkit-transform:scale(.94);transform:scale(.94)}75%{-webkit-transform:scale(1.06);transform:scale(1.06)}100%{-webkit-transform:scale(1);transform:scale(1)}}.tab[data-v-c7447474]{position:relative;width:%?215?%;height:%?350?%;border-radius:%?16?%;margin-right:%?15?%;margin-bottom:%?15?%}.tab uni-image[data-v-c7447474]{border-radius:%?16?%;display:block}.tab .array[data-v-c7447474]{position:absolute;top:%?18?%;right:%?0?%;color:#fff;background-color:rgba(0,0,0,.4);padding:%?0?% %?12?% 0 %?16?%;border-radius:%?20?% 0 0 %?20?%;font-size:12px}.back[data-v-c7447474]{position:fixed;right:%?-80?%;width:%?80?%;height:%?80?%;border-radius:%?80?%;padding:%?8?%;box-shadow:0 0 16px rgba(0,0,0,.2);transition-property:right;transition-duration:.6s}.back uni-image[data-v-c7447474]{display:block}.back .text[data-v-c7447474]{font-size:12px}.backSearch[data-v-c7447474]{bottom:%?200?%;background-color:#efb336}.backSearch .text[data-v-c7447474]{color:#fff}.backTop[data-v-c7447474]{bottom:%?100?%;background-color:#fff}.backTop .text[data-v-c7447474]{color:#efb336}.backTop_show[data-v-c7447474]{right:%?20?%!important}.backTop_hide[data-v-c7447474]{right:%?-80?%!important}',""]),e.exports=t},"31aa":function(e,t,a){var n=a("0cba");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("375e08d0",n,!0,{sourceMap:!1,shadowMode:!1})},a528:function(e,t,a){"use strict";var n=a("31aa"),i=a.n(n);i.a},c81d:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return n}));var n={uLoadmore:a("b51c").default,uSkeleton:a("e172").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"query"}),"ranking"==e.modelType?a("v-uni-view",{staticClass:"menu ",staticStyle:{display:"flex","justify-content":"space-around",margin:"15rpx"},style:{top:e.navbarTop+"px"}},[a("v-uni-view",{staticClass:"tags",class:"hot"==e.modelId?"tag-active":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cateClick("ranking","hot")}}},[e._v("热门榜")]),a("v-uni-view",{staticClass:"tags",class:"zan"==e.modelId?"tag-active":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cateClick("ranking","zan")}}},[e._v("点赞榜")]),a("v-uni-view",{staticClass:"tags",class:"coll"==e.modelId?"tag-active":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cateClick("ranking","coll")}}},[e._v("收藏榜")])],1):e._e(),"category"==e.modelType?a("v-uni-scroll-view",{staticClass:"menus",style:{top:e.navbarTop+"px"},attrs:{"scroll-x":!0,"scroll-into-view":e.rolldistance,"scroll-with-animation":!0}},[a("v-uni-view",{staticClass:"u-p-b-15 u-p-t-15 u-flex u-row-left"},[a("v-uni-view",{staticStyle:{padding:"0 16rpx"},attrs:{id:"akun1"}}),a("v-uni-view",{staticClass:"tags",class:-1==e.modelId?"tag-active":"",attrs:{id:"akun2"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cateClick("category",-1,"akun1")}}},[e._v("最新")]),a("v-uni-view",{staticClass:"tags",class:-2==e.modelId?"tag-active":"",attrs:{id:"akun3"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cateClick("category",-2,"akun1")}}},[e._v("热门")]),e._l(e.categoryList,(function(t,n){return a("v-uni-view",{key:n,staticClass:"tags",class:t._id==e.modelId?"tag-active":"",attrs:{id:"akun"+(n+4)},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.cateClick("category",t._id,"akun"+(n+2))}}},[e._v(e._s(t.name))])})),a("v-uni-view",{staticStyle:{width:"40rpx"}},[e._v("ㅤ")])],2)],1):e._e(),a("v-uni-view",{staticClass:"u-skeleton"},[e.skeletonLoad&&"search"!=e.modelType&&"tags"!=e.modelType?a("v-uni-view",{staticClass:"menu ",staticStyle:{display:"flex","justify-content":"space-around",margin:"15rpx"}},[a("v-uni-view",{staticClass:"tags u-skeleton-circle"},[e._v("最新")]),a("v-uni-view",{staticClass:"tags u-skeleton-circle"},[e._v("最新")]),a("v-uni-view",{staticClass:"tags u-skeleton-circle"},[e._v("最新")]),a("v-uni-view",{staticClass:"tags u-skeleton-circle"},[e._v("最新")])],1):e._e(),"search"!=e.modelType&&"tags"!=e.modelType?a("v-uni-view",{staticStyle:{height:"80rpx"}}):e._e(),a("v-uni-view",{},[a("v-uni-view",{staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"flex-start",padding:"20rpx 0 0  40rpx"}},[e._l(e.coverList,(function(t,n){return[[a("v-uni-view",{staticClass:"tab u-skeleton-fillet",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.detail(t._id,e.index_,t.images)}}},[a("v-uni-image",{staticStyle:{width:"215rpx",height:"350rpx"},attrs:{src:t.image,mode:"aspectFill"}})],1)],0!=n&&n%20===0?a("v-uni-view",{key:n+"_1",staticClass:"u-p-b-20",staticStyle:{width:"calc(100% - 40rpx)"}},[a("v-uni-ad",{attrs:{"unit-id":"adunit-fb8f34b96c853c81"}})],1):e._e()]}))],2)],1),e.noData?a("v-uni-view",{staticStyle:{width:"100vw",height:"50vh","padding-top":"200rpx","background-color":"#FFFFFF",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},[a("v-uni-view",{},[a("v-uni-image",{staticStyle:{width:"300rpx",height:"300rpx"},attrs:{src:"/static/nodata.png"}})],1),a("v-uni-view",{staticClass:"u-tips-color u-font-12 u-p-t-30"},[e._v("没有数据哦~")])],1):e._e()],1),e.noData?e._e():a("v-uni-view",{},[a("u-loadmore",{attrs:{status:e.loadStatus,"font-size":24,"margin-top":30,"margin-bottom":30,color:"#B8B8B8"}})],1),a("v-uni-view",{staticClass:"safe-area-inset-bottom"},[a("v-uni-view",{staticStyle:{height:"1px"}})],1),a("u-skeleton",{attrs:{loading:e.skeletonLoad,animation:!0,bgColor:"#FFF","el-color":"#F3F3F3"}}),a("v-uni-view",{staticClass:"back backTop u-flex u-flex-col u-row-center u-col-center",class:e.backShow?"backTop_show":"backTop_hide",staticStyle:{display:"flex","justify-content":"center","flex-direction":"column"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.backTop.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{width:"36rpx",height:"36rpx"},attrs:{src:"/static/backtop.png"}}),a("v-uni-view",{staticClass:"text"},[e._v("顶部")])],1),a("v-uni-view",{staticClass:"back backSearch u-flex u-flex-col u-row-center u-col-center",class:e.backShow?"backTop_show":"backTop_hide",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{width:"30rpx",height:"30rpx"},attrs:{src:"/static/search.png"}}),a("v-uni-view",{staticClass:"text"},[e._v("搜索")])],1)],1)},c=[]},c9f3:function(e,t,a){"use strict";a.r(t);var n=a("c81d"),i=a("d7d3");for(var c in i)["default"].indexOf(c)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(c);a("a528");var s=a("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"c7447474",null,!1,n["a"],void 0);t["default"]=o.exports},d390:function(e,t,a){"use strict";(function(e){a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ac1f"),a("e9c4"),a("99af"),a("e25e");var i=n(a("c7eb")),c=n(a("1da1")),s={data:function(){return{noData:!1,skeletonLoad:!0,title:"",modelType:"",modelPid:0,modelId:0,navbarTop:0,coverList:[{images:["https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png"]}],categoryList:[],pageIndex:0,loadStatus:"loadmore",rolldistance:"",adFlag:!0,backShow:!1}},onLoad:function(e){var t=this;return(0,c.default)((0,i.default)().mark((function a(){var n,c,s,o,r;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.type,c=e.pid,s=e.id,o=t,o.modelType=n,o.modelPid=c,o.modelId=s,"ranking"==n?o.title="排行榜":"category"==n?(o.title="分类",o.getCategory()):"search"==n?o.title=n:"tags"==n&&(o.title=s),a.next=8,o.getList(n,s,2);case 8:r=uni.createSelectorQuery().in(o),r.select(".query").boundingClientRect((function(e){o.navbarTop=e.top})).exec(),setTimeout((function(){o.skeletonLoad=!1}),200);case 11:case"end":return a.stop()}}),a)})))()},methods:{detail:function(e,t,a){var n=JSON.stringify(a);uni.navigateTo({url:"/pages/detail/detail?id="+e+"&index="+t+"&images="+n})},cateClick:function(e,t,a){t!=this.modelId&&(a&&(this.rolldistance=a),this.noData=!1,this.modelId=t,this.getList(e,t,1))},getList:function(t,a,n){var s=this;return(0,c.default)((0,i.default)().mark((function c(){var o,r,l,d,u;return(0,i.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(console.log(t,a,n),o=s,r=o.coverList,1==n&&(o.coverList=[],r=[],o.pageIndex=0),o.pageIndex=o.pageIndex+1,o.loadStatus="loading",l={},"search"!=t){i.next=13;break}return i.next=10,e.callFunction({name:"query_list",data:{dbName:"myou-imgs",search:a,pageIndex:o.pageIndex,pageSize:10}});case 10:l=i.sent,i.next=33;break;case 13:if("ranking"!=t){i.next=21;break}return d={status:1},u={},"hot"==a?u={name:"view",type:"desc"}:"zan"==a?u={name:"zan",type:"desc"}:"coll"==a&&(u={name:"coll",type:"desc"}),i.next=18,e.callFunction({name:"query_list",data:{dbName:"myou-imgs",filter:d,order:u,pageIndex:o.pageIndex,pageSize:10}});case 18:l=i.sent,i.next=33;break;case 21:if("category"!=t){i.next=29;break}return d={status:1},u={name:"time",type:"desc"},-1==a?u={name:"time",type:"desc"}:-2==a?u={name:"view",type:"desc"}:d={category_id:a,status:1},i.next=26,e.callFunction({name:"query_list",data:{dbName:"myou-imgs",filter:d,order:u,pageIndex:o.pageIndex,pageSize:5}});case 26:l=i.sent,i.next=33;break;case 29:if("tags"!=t){i.next=33;break}return i.next=32,e.callFunction({name:"query_list",data:{dbName:"myou-imgs",tags:a,pageIndex:o.pageIndex,pageSize:5}});case 32:l=i.sent;case 33:l.result.hasMore?o.loadStatus="loadmore":o.loadStatus="nomore",2==n&&(r=[]),r=r.concat(l.result.data),console.log("newList",r),o.coverList=r,0==o.coverList.length?o.noData=!0:o.noData=!1;case 39:case"end":return i.stop()}}),c)})))()},getCategory:function(){var t=this;return(0,c.default)((0,i.default)().mark((function a(){var n,c;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t,a.next=3,e.callFunction({name:"query_list",data:{dbName:"myou-img-category",order:{name:"sort",type:"desc"},pageIndex:1,pageSize:20}});case 3:c=a.sent,n.categoryList=c.result.data,n.rolldistance="akun"+(parseInt(n.modelPid)+2),console.log(n.rolldistance);case 7:case"end":return a.stop()}}),a)})))()},adLoad:function(){this.adFlag=!0},adError:function(e){this.adFlag=!1},adClose:function(){this.adFlag=!1},search:function(){uni.navigateTo({url:"/pages/search/search"})},backTop:function(){uni.pageScrollTo({scrollTop:0,duration:300})}},onPageScroll:function(e){e.scrollTop>1e3?this.backShow=!0:this.backShow=!1},onReachBottom:function(){var e=this;return(0,c.default)((0,i.default)().mark((function t(){var a;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,"nomore"!=a.loadStatus){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,a.getList(a.modelType,a.modelId);case 5:case"end":return t.stop()}}),t)})))()}};t.default=s}).call(this,a("a9ff")["default"])},d7d3:function(e,t,a){"use strict";a.r(t);var n=a("d390"),i=a.n(n);for(var c in n)["default"].indexOf(c)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(c);t["default"]=i.a}}]);