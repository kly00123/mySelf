(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Trade-TradeOrder"],{"25aa":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-page-head",{attrs:{"uni-page-head-type":"default"}},[a("div",{staticClass:"uni-page-head",staticStyle:{background:"linear-gradient(90deg,#e4007f,#f08300)",color:"rgb(255, 255, 255)"}},[a("div",{staticClass:"uni-page-head-hd"},[a("div",{staticClass:"uni-page-head-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go.apply(void 0,arguments)}}},[a("i",{staticClass:"uni-btn-icon",staticStyle:{color:"rgb(255, 255, 255)","font-size":"27px"}},[t._v("")])])]),a("div",{staticClass:"uni-page-head-bd"},[a("div",{staticClass:"uni-page-head__title",staticStyle:{"font-size":"16px",opacity:"1"}},[t._v("交易记录")])]),a("div",{staticClass:"uni-page-head-ft"})]),a("div",{staticClass:"uni-placeholder"})]),t._l(t.buyList,(function(e,i){return a("v-uni-view",{staticClass:"trade-order-list"},[a("v-uni-view",{staticClass:"trade-order-title"},[a("v-uni-view",{staticClass:"trade-order-title-span"},[t._v(t._s(e.createTime))]),a("v-uni-view",{staticClass:"trade-order-status"},[t._v("已完成")])],1),a("v-uni-view",{staticClass:"trade-order-info-a"},[a("v-uni-view",{staticClass:"trade-order-content"},[a("h3",[t._v("购买 渠豆订单")]),a("p",[t._v("价格："+t._s(e.buyPrice))]),a("p",[t._v("数量："+t._s(e.buyNumber))])]),a("v-uni-view",{staticClass:"trade-order-number"},[a("h1",[t._v(t._s(e.buyMoney))]),a("span",[t._v("余额支付")])])],1)],1)}))],2)},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},"3ec5":function(t,e,a){"use strict";var i=a("bea1"),n=a.n(i);n.a},"4e3d":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-37a3c494]{background:#f5f5f5}.trade-order-list[data-v-37a3c494]{background-color:#fff;margin-bottom:%?20?%}.trade-order-title[data-v-37a3c494]{border-bottom:#eee 1px solid;overflow:hidden;padding:%?20?% %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.trade-order-title-span[data-v-37a3c494]{font-size:.7rem;color:#999;display:block}.trade-order-status[data-v-37a3c494]{font-size:.7rem;color:#ff5a5a;display:block}.trade-order-info-a[data-v-37a3c494]{min-height:3.6rem;overflow:hidden;display:block;padding:.6rem .5rem .6rem .5rem;position:relative}.trade-order-content h3[data-v-37a3c494]{font-size:.8rem;color:#333;padding-bottom:.3rem;font-weight:400}.trade-order-content p[data-v-37a3c494]{font-size:.7rem;color:#999}.trade-order-number[data-v-37a3c494]{text-align:right;position:absolute;right:.5rem;top:1rem}.trade-order-number h1[data-v-37a3c494]{font-size:1.1rem;color:#333;padding-bottom:.3rem;font-weight:400}.trade-order-number span[data-v-37a3c494]{font-size:.65rem;color:#aaa;display:block}.load-more-a[data-v-37a3c494]{width:100%;font-size:.9rem;color:#555;text-align:center;display:block;padding:1rem 0}body.?%PAGE?%[data-v-37a3c494]{background:#f5f5f5}",""]),t.exports=e},bea1:function(t,e,a){var i=a("4e3d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("17e3fa9d",i,!0,{sourceMap:!1,shadowMode:!1})},c58e:function(t,e,a){"use strict";a.r(e);var i=a("ef60"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},ef60:function(t,e,a){"use strict";var i=a("ee27");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("36fb")),o={data:function(){return{token:"",buypageIndex:1,buypageSize:10,buyList:[],buytotal:0}},onLoad:function(){this.token=uni.getStorageSync("token"),console.log("111"),this.getBuyListEntity()},onReachBottom:function(){this.buyList.length<this.buytotal&&(this.buypageIndex++,this.getBuyListEntity())},onPullDownRefresh:function(){this.buypageIndex=1,this.buyList=[],this.getBuyListEntity()},methods:{go:function(){uni.navigateTo({url:"/pages/Trade/TradeByAccount"})},getBuyListEntity:function(){var t=this,e={pageIndex:t.buypageIndex,pageSize:t.buypageSize};uni.request({url:t.ApiGateWay+"/sale/Transaction/GetBuyListEntity",data:e,method:"POST",dataType:"json",header:{Authorization:t.token},success:function(e){console.log(e),n.default.CheckData(e)&&0==e.data.errorCode&&(t.buyList=t.buyList.concat(e.data.list),t.buytotal=e.data.total,console.log(t.saleList))},fail:function(){uni.hideLoading()},complete:function(){uni.hideLoading(),uni.stopPullDownRefresh()}})}}};e.default=o},efe1:function(t,e,a){"use strict";a.r(e);var i=a("25aa"),n=a("c58e");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("3ec5");var r,s=a("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"37a3c494",null,!1,i["a"],r);e["default"]=d.exports}}]);