(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/live/live"],{"054b":function(t,e,n){"use strict";var a=n("9c3a"),u=n.n(a);u.a},"19d3":function(t,e,n){"use strict";n.r(e);var a=n("2811"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=u.a},2381:function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},2811:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("24a9"));function u(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{list:[],token:""}},onLoad:function(){this.token=t.getStorageSync("token"),this.getList()},methods:{getList:function(){var e=this;t.request({url:e.ApiGateWay+"/sale/Member/GetTaskPackageList",data:"",header:{Authorization:e.token},method:"POST",dataType:"json",success:function(t){a.default.CheckData(t)&&(e.list=t.data.list)},complete:function(){t.hideLoading()},fail:function(e){t.stopPullDownRefresh()}})},payment:function(e){t.navigateTo({url:"/pages/live/payment?item="+JSON.stringify(e)})}}};e.default=i}).call(this,n("6e42")["default"])},5879:function(t,e,n){"use strict";n.r(e);var a=n("2381"),u=n("19d3");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("054b");var o,c=n("f0c5"),r=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=r.exports},"9c3a":function(t,e,n){},bed5:function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("5879"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["bed5","common/runtime","common/vendor"]]]);