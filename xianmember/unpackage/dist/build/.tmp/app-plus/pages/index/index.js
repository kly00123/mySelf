(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"357f":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("24a9"));function o(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{total:0,token:"",state:"",taskList:[],pageIndex:1,pageSize:15,indicatorDots:!0,phone:"拨打客服电话：400-0515-207",autoplay:!0,interval:2e3,duration:500}},onShow:function(){this.pageIndex=1,this.taskList=[],this.token=t.getStorageSync("token"),this.userInfo=t.getStorageSync("userInfo"),this.getTaskList()},onReachBottom:function(){this.taskList.length<this.total&&(this.pageIndex++,this.getTaskList())},onPullDownRefresh:function(){this.pageIndex=1,this.taskList=[],this.getTaskList()},methods:{news:function(){t.navigateTo({url:"/pages/news/new"})},task:function(e){t.navigateTo({url:"/pages/task/task?rank="+e})},live:function(){t.switchTab({url:"/pages/live/live"})},invite:function(){t.navigateTo({url:"/pages/invite/invite"})},getCall:function(){wx.makePhoneCall({phoneNumber:this.phone})},getTaskList:function(){var e=this,n={state:e.state,pageIndex:e.pageIndex,pageSize:e.pageSize};t.request({url:e.ApiGateWay+"/sale/Member/GetTaskList",data:n,method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){console.log(a(t+"111"," at pages\\index\\index.vue:202")),i.default.CheckData(t)&&(e.taskList=e.taskList.concat(t.data.list),e.total=t.data.total,console.log(a(e.taskList," at pages\\index\\index.vue:206")))},fail:function(){t.hideLoading()},complete:function(){t.hideLoading(),t.stopPullDownRefresh()}})},getTask:function(e,n){var a=this;t.showLoading({title:"加载中..."}),t.request({url:a.ApiGateWay+"/sale/Member/MemberGetTask?taskId="+n,header:{Authorization:a.token},method:"POST",dataType:"json",success:function(n){i.default.CheckData(n)?(n=n.data,a.taskList.splice(e,1),t.showModal({title:"提示",content:"领取成功",confirmColor:"#5A83E9",showCancel:!1})):t.showToast({title:n.data.errorMessage,icon:"none"})},complete:function(){t.hideLoading()},fail:function(e){t.stopPullDownRefresh()}})}}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},"35b7":function(t,e,n){"use strict";n.r(e);var a=n("ed03"),i=n("f9c5");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("9812");var s,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=c.exports},"598a":function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("35b7"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5a2e":function(t,e,n){},9812:function(t,e,n){"use strict";var a=n("5a2e"),i=n.n(a);i.a},ed03:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},f9c5:function(t,e,n){"use strict";n.r(e);var a=n("357f"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a}},[["598a","common/runtime","common/vendor"]]]);