(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/chooseback"],{2253:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("24a9"));function u(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{token:"",list:[]}},onLoad:function(){this.token=t.getStorageSync("token"),this.getList()},onShow:function(){t.removeStorageSync("bank")},methods:{goBack:function(){t.navigateBack({delta:1})},getList:function(){var e=this;t.showLoading({title:"请稍候..."}),t.request({url:e.ApiGateWay+"/sale/Member/MemberGetBankAccountList",data:{pageIndex:1,pageSize:100},method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){console.log(a(t," at pages\\my\\chooseback.vue:69")),o.default.CheckData(t)&&(e.list=t.data.list)},fail:function(){t.hideLoading()},complete:function(){t.hideLoading()}})},selectBank:function(e){t.setStorageSync("bank",e),t.navigateBack({delta:1})}}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},"8f92":function(t,e,n){"use strict";var a=n("de42"),o=n.n(a);o.a},9215:function(t,e,n){"use strict";(function(t){n("b82d"),n("921b");a(n("66fd"));var e=a(n("ee27"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"95f7":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return a})},a3cb:function(t,e,n){"use strict";n.r(e);var a=n("2253"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},de42:function(t,e,n){},ee27:function(t,e,n){"use strict";n.r(e);var a=n("95f7"),o=n("a3cb");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("8f92");var c,i=n("f0c5"),r=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=r.exports}},[["9215","common/runtime","common/vendor"]]]);