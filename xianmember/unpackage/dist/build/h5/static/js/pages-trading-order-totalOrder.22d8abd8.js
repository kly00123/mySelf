(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trading-order-totalOrder"],{"02d5":function(t,e,i){"use strict";var n=i("214c"),a=i.n(n);a.a},1388:function(t,e,i){"use strict";i.r(e);var n=i("2310"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"214c":function(t,e,i){var n=i("6c1a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("bd934a82",n,!0,{sourceMap:!1,shadowMode:!1})},2310:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("36fb")),o={data:function(){return{sendType:0,token:"",orderId:"",imgSvr:"",firstList:[],listShiYong:[],orderType:["待发货","已发货","已收货"],lastList:[],pageIndex:1,pageSize:15}},onLoad:function(t){this.imgSvr=this.ImgServer,this.token=uni.getStorageSync("token"),this.getFirstList(0);JSON.parse(t.tbIndex)},onShow:function(){this.pageIndex=1},onPageScroll:function(t){},filters:{formatDate:function(t){var e=new Date(t),i=e.getMonth()+1,n=e.getHours();n<10&&(n="0"+n);var a=e.getMinutes();a<10&&(a="0"+a);var o=e.getFullYear()+"-"+i+"-"+e.getDate()+" "+n+":"+a;return o}},methods:{btnClick:function(t){this.sendType=t,0==t&&this.getFirstList(0),1==t&&this.getFirstList(1),2==t&&this.getFirstList(2)},goIndex:function(){uni.navigateTo({url:"/pages/trading/select/select"})},goDelivery:function(t){uni.navigateTo({url:"/pages/trading/order/delivery?id="+t})},showType:function(t){this.tabbarIndex=t},toGoods:function(t){console.log(t),uni.navigateTo({url:"/pages/trading/togoods/togoods?item="+JSON.stringify(t)})},payment:function(t){uni.navigateTo({url:"/pages/live/payment?item="+JSON.stringify(t)})},goCreate:function(t){uni.navigateTo({url:"/pages/mytask/create?item="+JSON.stringify(t)})},goTaskDetails:function(t){uni.navigateTo({url:"/pages/my/taskDetails?item="+JSON.stringify(t)})},getFirstList:function(t){var e=this;console.log("status:"+t),uni.showLoading({title:"加载中..."});var i={pageIndex:e.pageIndex,status:t};uni.request({url:e.ApiGateWay+"/sale/shopping/GetAllShoppingOrderEntitys",data:i,header:{Authorization:e.token},method:"POST",dataType:"json",success:function(i){a.default.CheckData(i)&&(0==t&&(e.firstList=i.data.list,e.orderId=i.data.list.id,console.log(i.data.list)),1==t&&(e.listShiYong=i.data.list,e.orderId=i.data.list.id,console.log(i.data.list)),2==t&&(e.lastList=i.data.list,e.orderId=i.data.list.id,console.log(i.data.list)))},complete:function(){uni.hideLoading()},fail:function(t){uni.stopPullDownRefresh()}})},getShiList:function(t){var e=this;console.log("status:"+t),uni.showLoading({title:"加载中..."});var i={pageIndex:e.pageIndex,status:t};uni.request({url:e.ApiGateWay+"/sale/shopping/GetshoppingOrderEntitys",data:i,header:{Authorization:e.token},method:"POST",dataType:"json",success:function(t){console.log(t),a.default.CheckData(t)&&(e.listShiYong=t.data.list)},complete:function(){uni.hideLoading()},fail:function(t){uni.stopPullDownRefresh()}})},getlastList:function(t){var e=this;console.log("status:"+t);var i={pageIndex:e.pageIndex,status:t};uni.showLoading({title:"加载中..."}),uni.request({url:e.ApiGateWay+"/sale/shopping/GetshoppingOrderEntitys",data:i,header:{Authorization:e.token},method:"POST",dataType:"json",success:function(t){a.default.CheckData(t)&&(e.lastList=t.data.list)},complete:function(){uni.hideLoading()},fail:function(t){uni.stopPullDownRefresh()}})},bank:function(){uni.navigateBack({delta:1})}}};e.default=o},"5de7":function(t,e,i){"use strict";i.r(e);var n=i("efa7"),a=i("1388");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("02d5");var r,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"1df08829",null,!1,n["a"],r);e["default"]=s.exports},"6c1a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-1df08829]{width:95%;margin:0 auto;background:#f5f5f5}.date[data-v-1df08829]{margin-right:%?24?%;font-size:%?26?%;font-family:PingFang SC;font-weight:400;color:#999;opacity:1}.nav_num[data-v-1df08829]{margin-left:%?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;font-family:PingFang SC;font-weight:400;color:#666;opacity:1}.cricle[data-v-1df08829]{width:%?72?%;height:%?72?%;background:#007aff;margin-left:%?24?%;border-radius:50%;opacity:1;position:relative;z-index:0}.title[data-v-1df08829]{height:%?128?%;background:#f04f43;opacity:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;line-height:%?128?%;padding-top:%?24?%;font-size:%?34?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}.left[data-v-1df08829]{width:%?24?%;height:%?48?%;margin-left:%?24?%}.one_box[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#666;height:%?90?%;margin-left:%?-20?%;width:105%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;background-color:#fff\n\t\t/* padding-top: 18rpx; */}.uni-top[data-v-1df08829]{width:100%;height:%?300?%}.one_col[data-v-1df08829]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.one_col_title[data-v-1df08829]{height:%?72?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#999}.color_333333[data-v-1df08829]{color:#333}.nav_bottom[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?4?%;width:%?80?%;border-bottom:%?4?% solid #fff}.nav_bottom_act[data-v-1df08829]{border-bottom:%?4?% solid #f04f43}.one_box1[data-v-1df08829]{height:%?1074?%;background:#fff;opacity:1}.one_team[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?150?%;border-bottom:%?1?% solid #f5f5f5}.one_team-a[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?16?%}.textoder[data-v-1df08829]{height:%?100?%;background:#fff;opacity:1;margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding-left:%?24?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;font-family:PingFang SC;font-weight:400;color:#333;opacity:1}.textoder-a[data-v-1df08829]{height:%?340?%;background:#fff;opacity:1;border-radius:%?12?%;margin-top:%?20?%}.starorder[data-v-1df08829]{background:#fff;opacity:1;border-radius:%?12?%;margin-top:%?20?%;\n\t\t/* margin-left: 24rpx;\n\t\t\tmargin-right: 24rpx; */padding:%?20?%;box-shadow:1px 1px 5px silver;margin-bottom:%?40?%}.starorder[data-v-1df08829]:last-child{margin-bottom:%?50?%}.number[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-number[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;font-family:PingFang SC;font-weight:700;color:#333;opacity:1}.uni-starorder[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.line[data-v-1df08829]{height:%?2?%;background:rgba(0,0,0,.1);opacity:1}.uni-starorder_A[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-weight:700}.uni-starorder_b[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;font-size:%?28?%;font-family:PingFang SC;font-weight:400;margin-top:%?22?%;\n\t\t/* margin-left: 42rpx; */color:#a0a0a0;opacity:1}.btns[data-v-1df08829]{width:%?134?%;height:%?60?%;background:#f02f30;opacity:1;border-radius:%?8?%;margin-top:%?52?%;line-height:%?60?%;text-align:center;font-size:%?32?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}.uni-numbers[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-family:PingFang SC;font-weight:700;color:#f02f30;opacity:1}.btn[data-v-1df08829]{width:%?60?%;height:%?28?%;border:%?2?% solid #ff9000;opacity:1;line-height:%?28?%;border-radius:%?4?%;font-size:%?20?%;font-family:PingFang SC;font-weight:400;text-align:center;color:#ff9000;opacity:1}.textoder-b[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?66?%;border-bottom:%?1?% solid #f5f5f5;font-size:%?30?%;font-family:PingFang SC;font-weight:700;color:#333;opacity:1}.noways[data-v-1df08829]{margin-right:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.btnShi[data-v-1df08829]{width:%?134?%;height:%?60?%;margin-left:%?164?%;background:-webkit-linear-gradient(286deg,#fa5c6c,#ff5737);background:linear-gradient(164deg,#fa5c6c,#ff5737);opacity:1;border-radius:%?8?%;line-height:%?60?%;text-align:center;font-size:%?32?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}.noway[data-v-1df08829]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;margin-left:%?60?%}.textoder-c[data-v-1df08829]{line-height:2;margin-left:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\t/* align-items: flex-start; */font-size:%?28?%;font-family:PingFang SC;font-weight:400;margin-top:%?22?%;color:#333;opacity:1}.btn[data-v-1df08829]{width:%?134?%;height:%?60?%;margin-right:%?22?%;background:-webkit-linear-gradient(286deg,#fa5c6c,#ff5737);background:linear-gradient(164deg,#fa5c6c,#ff5737);opacity:1;border-radius:%?8?%;line-height:%?60?%;text-align:center;font-size:%?32?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}body.?%PAGE?%[data-v-1df08829]{background:#f5f5f5}",""]),t.exports=e},efa7:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("uni-page-head",{attrs:{"uni-page-head-type":"default"}},[i("div",{staticClass:"uni-page-head",staticStyle:{background:"linear-gradient(90deg,#762f93,#e23b93,#f08300)",color:"rgb(255, 255, 255)"}},[i("div",{staticClass:"uni-page-head-hd"},[i("div",{staticClass:"uni-page-head-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goIndex.apply(void 0,arguments)}}},[i("i",{staticClass:"uni-btn-icon",staticStyle:{color:"rgb(255, 255, 255)","font-size":"27px"}},[t._v("")])])]),i("div",{staticClass:"uni-page-head-bd"},[i("div",{staticClass:"uni-page-head__title",staticStyle:{"font-size":"16px",opacity:"1"}},[t._v("订单列表")])])])]),i("v-uni-view",{staticClass:"one_box"},[i("v-uni-view",{staticClass:"one_col",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnClick(0)}}},[i("v-uni-view",{class:0===t.sendType?"one_col_title color_333333":"one_col_title"},[t._v("待发货")]),i("v-uni-view",{class:0===t.sendType?"nav_bottom nav_bottom_act":"nav_bottom"})],1),i("v-uni-view",{staticClass:"one_col",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnClick(1)}}},[i("v-uni-view",{class:1===t.sendType?"one_col_title color_333333":"one_col_title"},[t._v("已发货")]),i("v-uni-view",{class:1===t.sendType?"nav_bottom nav_bottom_act":"nav_bottom"})],1),i("v-uni-view",{staticClass:"one_col",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnClick(2)}}},[i("v-uni-view",{class:2===t.sendType?"one_col_title color_333333":"one_col_title"},[t._v("已签收")]),i("v-uni-view",{class:2===t.sendType?"nav_bottom nav_bottom_act":"nav_bottom"})],1)],1),0==t.sendType?i("v-uni-view",{attrs:{id:"id-0"}},t._l(t.firstList,(function(e,n){return i("v-uni-view",{staticClass:"textoder-a",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDelivery(e.id)}}},[i("v-uni-view",{staticClass:"textoder-b"},[0==e.status?i("v-uni-view",{staticStyle:{"margin-left":"20rpx",color:"#ff5500","font-size":"28rpx"}},[t._v(t._s(n)+"--待发货")]):t._e()],1),i("v-uni-view",{staticClass:"textoder-c"},[i("v-uni-view",{staticClass:"noways"},[i("v-uni-image",{staticStyle:{height:"108px",width:"290rpx"},attrs:{src:t.imgSvr+e.coverImg}}),i("v-uni-view",{staticClass:"noway"},[i("v-uni-view",[t._v("商品名称："+t._s(e.productName))]),i("v-uni-view",{staticStyle:{color:"#999999","word-wrap":"break-word"}},[t._v("购买时间："+t._s(t._f("formatDate")(e.payTime)))])],1)],1)],1)],1)})),1):t._e(),1==t.sendType?i("v-uni-view",{attrs:{id:"id-1"}},t._l(t.listShiYong,(function(e,n){return i("v-uni-view",{staticClass:"textoder-a"},[i("v-uni-view",{staticClass:"textoder-b"},[1==e.status?i("v-uni-view",{staticStyle:{"margin-left":"20rpx",color:"#ff5500","font-size":"28rpx"}},[t._v(t._s(n)+"--已发货")]):t._e()],1),i("v-uni-view",{staticClass:"textoder-c"},[i("v-uni-view",{staticClass:"noways",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoods(e)}}},[i("v-uni-image",{staticStyle:{height:"108px",width:"290rpx"},attrs:{src:t.imgSvr+e.coverImg}}),i("v-uni-view",{staticClass:"noway"},[i("v-uni-view",[t._v("商品名称："+t._s(e.productName))]),i("v-uni-view",{staticStyle:{color:"#999999","word-wrap":"break-word"}},[t._v("购买时间："+t._s(t._f("formatDate")(e.payTime)))])],1)],1)],1)],1)})),1):t._e(),2==t.sendType?i("v-uni-view",{attrs:{id:"id-2"}},t._l(t.lastList,(function(e,n){return i("v-uni-view",{staticClass:"textoder-a"},[i("v-uni-view",{staticClass:"textoder-b"},[2==e.status?i("v-uni-view",{staticStyle:{"margin-left":"20rpx",color:"#ff5500","font-size":"28rpx"}},[t._v(t._s(n)+"--已签收")]):t._e()],1),i("v-uni-view",{staticClass:"textoder-c"},[i("v-uni-view",{staticClass:"noways"},[i("v-uni-image",{staticStyle:{height:"108px",width:"290rpx"},attrs:{src:t.imgSvr+e.coverImg}}),i("v-uni-view",{staticClass:"noway"},[i("v-uni-view",[t._v("商品名称："+t._s(e.productName))]),i("v-uni-view",{staticStyle:{color:"#999999","word-wrap":"break-word"}},[t._v("购买时间："+t._s(t._f("formatDate")(e.payTime)))])],1)],1)],1)],1)})),1):t._e()],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))}}]);