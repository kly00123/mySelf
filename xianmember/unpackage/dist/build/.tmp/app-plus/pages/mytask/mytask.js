(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mytask/mytask"],{2031:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("24a9"));s(n("d127"));function s(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{sendType:0,myTasklist:[],token:"",pageIndex:1,pageSize:10,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},total:-1,nodata:!1}},onShow:function(){this.pageIndex=1,this.myTasklist=[],this.selType=-1,this.token=t.getStorageSync("token"),this.userInfo=t.getStorageSync("userInfo"),this.getMyTaskList()},onPullDownRefresh:function(){this.pageIndex=1,this.myTasklist=[],this.getMyTaskList()},onReachBottom:function(){this.myTasklist.length<this.total&&(this.pageIndex++,this.getMyTaskList())},methods:{getMyTaskList:function(){var e=this,n={pageIndex:e.pageIndex,pageSize:e.pageSize,state:e.sendType};t.request({url:e.ApiGateWay+"/sale/Member/GetMyTaskList",data:n,method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){if(console.log(a(t+"111"," at pages\\mytask\\mytask.vue:144")),o.default.CheckData(t)){t.errorCode,t.errorMessage,t.list,t.total,t.totalPage;e.total=t.data.total,e.myTasklist=e.myTasklist.concat(t.data.list)}},fail:function(){t.hideLoading()},complete:function(){t.hideLoading(),t.stopPullDownRefresh()}})},btnClick:function(t){console.log(a(t," at pages\\mytask\\mytask.vue:174")),this.sendType!=t&&(this.sendType=t,this.getMyTaskList())},mytasorder:function(e){console.log(a("=========="," at pages\\mytask\\mytask.vue:183")),console.log(a(e," at pages\\mytask\\mytask.vue:184")),console.log(a("=========="," at pages\\mytask\\mytask.vue:185")),t.navigateTo({url:"/pages/mytask/mytaskorder?orderNo="+e.orderNo})}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"31bb":function(t,e,n){"use strict";n.r(e);var a=n("7a00"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},"3f43":function(t,e,n){},"6d32":function(t,e,n){"use strict";n.r(e);var a=n("fcb4"),o=n("a958");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("6f08");var u,r=n("f0c5"),i=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=i.exports},"6f08":function(t,e,n){"use strict";var a=n("3f43"),o=n.n(a);o.a},"7a00":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},data:function(){return{}}};e.default=a},"7b62":function(t,e,n){"use strict";var a=n("9965"),o=n.n(a);o.a},"85e7":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return a})},9965:function(t,e,n){},a958:function(t,e,n){"use strict";n.r(e);var a=n("2031"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},cbca:function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("6d32"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d127:function(t,e,n){"use strict";n.r(e);var a=n("85e7"),o=n("31bb");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("7b62");var u,r=n("f0c5"),i=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=i.exports},fcb4:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return a})}},[["cbca","common/runtime","common/vendor"]]]);