(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-task-recevie"],{"031b":function(t,e,i){var n=i("e52a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("931188f8",n,!0,{sourceMap:!1,shadowMode:!1})},"123b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAC+UlEQVRYR82YS0hUYRTHf2cc0hZJRPRw4SIKWkQQtBB6QIsWYWQQokISBA0UgTOWEbSxRdjDZgaj6CHUIrIX9DKwhVAqRbQpWrSIQgh6hwoGzejMiXvn7aRzvzsjdrffOf/53XPOPd85Ixg8GmQRHrYCm4E1KFUIK5MSH4HPwFugn0meyWF+OpUXJ4YaZD0ejgE7ndinbZQHCB3i52UhvxlB9BxVTHISobmQUIHzHqK0yhG+Tmc3LYiG2Q7cASqKhEi5R1B2SYDH/9LLA1EQwviAiyUCmCrjo4VuETT7IB8kSAsewrMEkZL1iZ8r04Ik0/HIAGIImLTtlWqEFQa+deLnYco+HRG7MGN8MKoJZYsEeGpzhOhFqDUAiTBBtbTx3fLJgITpARoNhKwoFANi/dRN8dOUBkn2iVdGEIl0FAsCMTbIIZ7bEdEw94ybValA4Jb4aZRk2/5lHI3SgUCEStEwDVau5hRE2W2BnAcOzDHIZdEQAwib5hhkwAJ5n3WVm/EoAQkkurCGeQOsNRNIWw9bqcnp+UZCynEJ0J4EGQEWGvlnjEf/DxBlzAKx2rrJHZF5j9JFxE7NILDRVUhLBaIMWiAXgP2uQKAPoc/2jdOBMN+VjmJ/vk0IN1wJlMopToNoJ4vx8qNUmi50IvxhaeLSC3Efoc6FSPEuyl0JUJ8AOUsNZbxwoTqE0kwMxWvfVzXGGso6CfA6MxiFuIawx0AoxigV0p4YFbWLcuL8BsoMNK6Kn72WfQbkNMuYxzBQ7lAozgSV0mb/OMla+wZ4HPqPE2VVatfJmeI1RC1Cr0Mha0L7guBDiKN0A8sd+8bZJq3JTz87IikBDeLDwyXHgu4MW8RPV7Zr/l6jCCH2zSJMHkROjUx9MQ2zA7htUDOFYjNOnPrsdMwYkexDPcMSvHSWYAm/TpQ2V0t4DlAnG/FyEOz51uljLd3W1njC6hOFnBz9P5Iu5FMswEsdHnu0XI1QbQ9DVl0JIyifgHco/UR5IkcZKwSQOv8Lna4M7iYxpbUAAAAASUVORK5CYII="},"1e4f":function(t,e,i){"use strict";i.r(e);var n=i("7a5a"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"1e72":function(t,e,i){"use strict";var n=i("031b"),a=i.n(n);a.a},5318:function(t,e,i){t.exports=i.p+"static/img/noways.83f15f12.png"},"7a5a":function(t,e,i){"use strict";var n=i("ee27");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("36fb")),o={data:function(){return{sendType:1,token:"",imgSvr:"",total:0,message:"用户通过领取任务端口获悉热门就业、创业、商业等信息，完成任务再获得商家高额悬赏奖励。",firstList:[],listShiYong:[],threeList:[],orderType:["待发货","已发货","已收货"],lastList:[],pageIndex:1,pageSize:15}},onLoad:function(t){this.imgSvr=this.ImgServer,this.token=uni.getStorageSync("token"),this.getFirstList(1);var e=JSON.parse(t.tbIndex);console.log(e)},onReachBottom:function(){this.firstList.length<this.total&&(this.pageIndex++,this.getFirstList(1))},onPullDownRefresh:function(){this.pageIndex=1,this.firstList=[],this.getFirstList(1)},onShow:function(){},onPageScroll:function(t){},filters:{formatDate:function(t){var e=new Date(t),i=e.getMonth()+1,n=e.getHours();n<10&&(n="0"+n);var a=e.getMinutes();a<10&&(a="0"+a);var o=e.getFullYear()+"-"+i+"-"+e.getDate()+" "+n+":"+a;return o}},methods:{btnClick:function(t){1==t&&this.getFirstList(1),this.sendType=t,2==t&&this.getShiList(2),3==t&&this.getthreeList(3),4==t&&this.getlastList(4)},goIndex:function(){uni.switchTab({url:"/pages/index/index"})},showType:function(t){this.tabbarIndex=t},toGoods:function(t){console.log(t),uni.navigateTo({url:"/pages/trading/togoods/togoods?item="+JSON.stringify(t)})},goDelivery:function(t){console.log(t),uni.navigateTo({url:"/pages/trading/order/delivery?id?="+orderId})},payment:function(t){uni.navigateTo({url:"/pages/live/payment?item="+JSON.stringify(t)})},mytasorder:function(t){console.log(t),t.url="",uni.navigateTo({url:"/pages/mytask/mytaskorder?item="+JSON.stringify(t)})},goCreate:function(t){uni.navigateTo({url:"/pages/mytask/create?item="+JSON.stringify(t)})},goTaskDetails:function(t){console.log(t);var e=this;console.log("status:"+status),uni.showLoading({title:"加载中..."}),uni.request({url:e.ApiGateWay+"/sale/shopping/ReceiveShoppingOrder?id="+t,data:"",header:{Authorization:e.token},method:"POST",dataType:"json",success:function(t){a.default.CheckData(t)&&console.log("成功！！！")},complete:function(){uni.hideLoading()},fail:function(t){uni.stopPullDownRefresh()}})},getFirstList:function(t){var e=this;console.log("status:"+t),uni.showLoading({title:"加载中..."});var i={pageIndex:e.pageIndex,pageSize:e.pageSize,taskType:t};uni.request({url:e.ApiGateWay+"/sale/Member/GetTaskList",data:i,header:{Authorization:e.token},method:"POST",dataType:"json",success:function(t){if(console.log(t),a.default.CheckData(t)){t.errorCode,t.errorMessage,t.list,t.total,t.totalPage;e.firstList=e.firstList.concat(t.data.list),e.total=t.data.total}},complete:function(){uni.hideLoading()},fail:function(t){uni.stopPullDownRefresh()}})},getShiList:function(t){var e=this;console.log("status:"+t),uni.showLoading({title:"加载中..."});var i={pageIndex:e.pageIndex,pageSize:e.pageSize,taskType:t};uni.request({url:e.ApiGateWay+"/sale/Member/GetTaskList",data:i,header:{Authorization:e.token},method:"POST",dataType:"json",success:function(t){if(console.log(t),a.default.CheckData(t)){t.errorCode,t.errorMessage,t.list,t.total,t.totalPage;e.total=t.data.total,e.listShiYong=t.data.list,console.log(t)}},complete:function(){uni.hideLoading()},fail:function(t){uni.stopPullDownRefresh()}})},getthreeList:function(t){var e=this;console.log("status:"+t),uni.showLoading({title:"加载中..."});var i={pageIndex:e.pageIndex,pageSize:e.pageSize,taskType:t};uni.request({url:e.ApiGateWay+"/sale/Member/GetTaskList",data:i,header:{Authorization:e.token},method:"POST",dataType:"json",success:function(t){if(console.log(t),a.default.CheckData(t)){t.errorCode,t.errorMessage,t.list,t.total,t.totalPage;e.total=t.data.total,e.threeList=t.data.list,console.log(t)}},complete:function(){uni.hideLoading()},fail:function(t){uni.stopPullDownRefresh()}})},getlastList:function(t){var e=this;console.log("status:"+t),uni.showLoading({title:"加载中..."});var i={pageIndex:e.pageIndex,pageSize:e.pageSize,taskType:t};uni.request({url:e.ApiGateWay+"/sale/Member/GetTaskList",data:i,header:{Authorization:e.token},method:"POST",dataType:"json",success:function(t){if(a.default.CheckData(t)){t.errorCode,t.errorMessage,t.list,t.total,t.totalPage;e.total=t.data.total,e.lastList=t.data.list}},complete:function(){uni.hideLoading()},fail:function(t){uni.stopPullDownRefresh()}})},bank:function(){uni.navigateBack({delta:1})}}};e.default=o},8673:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("uni-page-head",{attrs:{"uni-page-head-type":"default"}},[n("div",{staticClass:"uni-page-head",staticStyle:{background:"linear-gradient(90deg,#762f93,#e23b93,#f08300)",color:"rgb(255, 255, 255)"}},[n("div",{staticClass:"uni-page-head-hd"},[n("div",{staticClass:"uni-page-head-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goIndex.apply(void 0,arguments)}}},[n("i",{staticClass:"uni-btn-icon",staticStyle:{color:"rgb(255, 255, 255)","font-size":"27px"}},[t._v("")])])]),n("div",{staticClass:"uni-page-head-bd"},[n("div",{staticClass:"uni-page-head__title",staticStyle:{"font-size":"16px",opacity:"1"}},[t._v("领取任务")])])])]),n("v-uni-view",{staticStyle:{height:"300rpx","z-index":"0",width:"100%","border-radius":"50rpx","box-shadow":"1px 1px 5px rgb(130, 105, 105)"}},[n("v-uni-swiper",{staticStyle:{height:"300rpx"},attrs:{autoplay:!1,interval:3e3,duration:1e3,"indicator-color":"#FFFFFF","indicator-active-color":"#FFFFFF"}},[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{staticClass:"uni-top",staticStyle:{"border-radius":"50rpx"},attrs:{src:i("d51e")}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"one_box"},[n("v-uni-view",{staticClass:"one_col",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnClick(1)}}},[n("v-uni-view",{class:1===t.sendType?"one_col_title color_333333":"one_col_title"},[t._v("集赞涨粉")]),n("v-uni-view",{class:1===t.sendType?"nav_bottom nav_bottom_act":"nav_bottom"})],1),n("v-uni-view",{staticClass:"one_col",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnClick(2)}}},[n("v-uni-view",{class:2===t.sendType?"one_col_title color_333333":"one_col_title"},[t._v("店铺关注")]),n("v-uni-view",{class:2===t.sendType?"nav_bottom nav_bottom_act":"nav_bottom"})],1),n("v-uni-view",{staticClass:"one_col",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnClick(3)}}},[n("v-uni-view",{class:3===t.sendType?"one_col_title color_333333":"one_col_title"},[t._v("应用下载")]),n("v-uni-view",{class:3===t.sendType?"nav_bottom nav_bottom_act":"nav_bottom"})],1),n("v-uni-view",{staticClass:"one_col",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnClick(4)}}},[n("v-uni-view",{class:4===t.sendType?"one_col_title color_333333":"one_col_title"},[t._v("微信获客")]),n("v-uni-view",{class:4===t.sendType?"nav_bottom nav_bottom_act":"nav_bottom"})],1)],1),n("v-uni-view",{staticClass:"starorder"},[n("v-uni-image",{staticStyle:{width:"34rpx",height:"34rpx"},attrs:{src:i("123b")}}),n("v-uni-text",{staticStyle:{color:"#FF9000","margin-left":"16rpx"}},[t._v("Tips")]),n("v-uni-view",{staticStyle:{color:"darkgray","font-size":"12px"}},[t._v(t._s(t.message))])],1),1==t.sendType?n("v-uni-view",{attrs:{id:"id-1"}},t._l(t.firstList,(function(e){return n("v-uni-view",{staticClass:"starorder"},[n("v-uni-view",{staticClass:"number"},[n("v-uni-view",{staticClass:"uni-number"},[n("v-uni-view",[t._v("集赞涨粉")])],1),n("v-uni-view",{staticClass:"uni-numbers"},[n("v-uni-view",{staticStyle:{"font-size":"36rpx"}},[t._v(t._s(e.price)+"豆")])],1)],1),n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"uni-starorder"}),n("v-uni-view",{staticClass:"uni-starorder"},[n("v-uni-view",{staticClass:"uni-numberr"},[t._v(t._s(e.description))]),n("v-uni-view",{staticClass:"btnss",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.mytasorder(e)}}},[t._v("领取任务")])],1)],1)})),1):t._e(),2==t.sendType?n("v-uni-view",{attrs:{id:"id-2"}},t._l(t.listShiYong,(function(e,i){return n("v-uni-view",{staticClass:"starorder"},[n("v-uni-view",{staticClass:"number"},[n("v-uni-view",{staticClass:"uni-number"},[n("v-uni-view",[t._v("店铺关注")])],1),n("v-uni-view",{staticClass:"uni-numbers"},[n("v-uni-view",{staticStyle:{"font-size":"36rpx"}},[t._v(t._s(e.price)+"豆")])],1)],1),n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"uni-starorder"}),n("v-uni-view",{staticClass:"uni-starorder"},[n("v-uni-view",{staticClass:"uni-numberr"},[t._v(t._s(e.description))]),n("v-uni-view",{staticClass:"btnss",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.mytasorder(e)}}},[t._v("领取任务")])],1)],1)})),1):t._e(),3==t.sendType?n("v-uni-view",{attrs:{id:"id-3"}},t._l(t.threeList,(function(e){return n("v-uni-view",{staticClass:"starorder"},[n("v-uni-view",{staticClass:"number"},[n("v-uni-view",{staticClass:"uni-number"},[n("v-uni-view",[t._v("应用下载")])],1),n("v-uni-view",{staticClass:"uni-numbers"},[n("v-uni-view",{staticStyle:{"font-size":"36rpx"}},[t._v(t._s(e.price)+"豆")])],1)],1),n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"uni-starorder"}),n("v-uni-view",{staticClass:"uni-starorder"},[n("v-uni-view",{staticClass:"uni-numberr"},[t._v(t._s(e.description))]),n("v-uni-view",{staticClass:"btnss",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.mytasorder(e)}}},[t._v("领取任务")])],1)],1)})),1):t._e(),4==t.sendType?n("v-uni-view",{attrs:{id:"id-4"}},t._l(t.lastList,(function(e){return n("v-uni-view",{staticClass:"starorder"},[n("v-uni-view",{staticClass:"number"},[n("v-uni-view",{staticClass:"uni-number"},[n("v-uni-view",[t._v("微信获客")])],1),n("v-uni-view",{staticClass:"uni-numbers"},[n("v-uni-view",{staticStyle:{"font-size":"36rpx"}},[t._v(t._s(e.price)+"豆")])],1)],1),n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"uni-starorder"}),n("v-uni-view",{staticClass:"uni-starorder"},[n("v-uni-view",{staticClass:"uni-numberr"},[t._v(t._s(e.description))]),n("v-uni-view",{staticClass:"btnss",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.mytasorder(e)}}},[t._v("领取任务")])],1)],1)})),1):t._e(),0==t.total?n("v-uni-view",{staticClass:"nodata"},[n("v-uni-view",[n("v-uni-image",{staticStyle:{width:"250upx",height:"164upx"},attrs:{src:i("5318")}})],1),t._v("暂无任务")],1):t._e()],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"87df":function(t,e,i){"use strict";i.r(e);var n=i("8673"),a=i("1e4f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("1e72");var s,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"21c7e1c6",null,!1,n["a"],s);e["default"]=l.exports},d51e:function(t,e,i){t.exports=i.p+"static/img/lingqu.4b26ff49.png"},e52a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-21c7e1c6]{width:95%;margin:0 auto;background:#f5f5f5}.date[data-v-21c7e1c6]{margin-right:%?24?%;font-size:%?26?%;font-family:PingFang SC;font-weight:400;color:#999;opacity:1}.nav_num[data-v-21c7e1c6]{margin-left:%?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;font-family:PingFang SC;font-weight:400;color:#666;opacity:1}.cricle[data-v-21c7e1c6]{width:%?72?%;height:%?72?%;background:#007aff;margin-left:%?24?%;border-radius:50%;opacity:1;position:relative;z-index:0}.title[data-v-21c7e1c6]{height:%?128?%;background:#f04f43;opacity:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;line-height:%?128?%;padding-top:%?24?%;font-size:%?34?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}.left[data-v-21c7e1c6]{width:%?24?%;height:%?48?%;margin-left:%?24?%}.slogan_dis[data-v-21c7e1c6]{display:none}.one_box[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#666;height:%?90?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;background-color:#fff\n\t\t/* padding-top: 18rpx; */}.uni-top[data-v-21c7e1c6]{width:100%;height:%?300?%}.one_col[data-v-21c7e1c6]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.one_col_title[data-v-21c7e1c6]{height:%?72?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#999}.color_333333[data-v-21c7e1c6]{color:#333}.nav_bottom[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?4?%;width:%?110?%;border-bottom:%?4?% solid #fff}.nav_bottom_act[data-v-21c7e1c6]{border-bottom:%?4?% solid #f04f43}.one_box1[data-v-21c7e1c6]{height:%?1074?%;background:#fff;opacity:1}.one_team[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?150?%;border-bottom:%?1?% solid #f5f5f5}.one_team-a[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?16?%}.textoder[data-v-21c7e1c6]{height:%?100?%;background:#fff;opacity:1;margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding-left:%?24?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;font-family:PingFang SC;font-weight:400;color:#333;opacity:1}.textoder-a[data-v-21c7e1c6]{height:%?260?%;background:#fff;opacity:1;border-radius:%?12?%;margin-top:%?20?%}.starorder[data-v-21c7e1c6]{background:#fff;opacity:1;border-radius:%?12?%;margin-top:%?20?%;\n\t\t/* margin-left: 24rpx;\n\t\t\tmargin-right: 24rpx; */padding:%?20?%;box-shadow:1px 1px 5px silver;margin-bottom:%?30?%}.starorder[data-v-21c7e1c6]:last-child{margin-bottom:%?30?%}.number[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.uni-number[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;font-family:PingFang SC;font-weight:700;color:#333;opacity:1}.uni-numberr[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;font-family:PingFang SC;font-weight:700;color:#a9a9a9;opacity:1;width:%?450?%}.uni-starorder[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.nodata[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;font-family:PingFang SC;font-weight:400;text-align:center;color:#666;opacity:1;margin-top:%?160?%}.line[data-v-21c7e1c6]{height:%?2?%;background:rgba(0,0,0,.1);opacity:1}.btnss[data-v-21c7e1c6]{width:%?134?%;height:%?60?%;background:#f02f30;border-radius:%?8?%;margin-top:%?10?%;line-height:%?60?%;text-align:center;font-size:%?32?%;font-weight:400;color:#fff;opacity:1;float:right;padding:0 10px}.uni-starorder_A[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-weight:700}.uni-starorder_b[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;font-size:%?28?%;font-family:PingFang SC;font-weight:400;margin-top:%?22?%;\n\t\t/* margin-left: 42rpx; */color:#a0a0a0;opacity:1}.btns[data-v-21c7e1c6]{width:%?134?%;height:%?60?%;background:#f02f30;opacity:1;border-radius:%?8?%;margin-top:%?52?%;line-height:%?60?%;text-align:center;font-size:%?32?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}.uni-numbers[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-family:PingFang SC;font-weight:700;color:#f02f30;opacity:1}.btn[data-v-21c7e1c6]{width:%?60?%;height:%?28?%;border:%?2?% solid #ff9000;opacity:1;line-height:%?28?%;border-radius:%?4?%;font-size:%?20?%;font-family:PingFang SC;font-weight:400;text-align:center;color:#ff9000;opacity:1}.textoder-b[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?90?%;border-bottom:%?1?% solid #f5f5f5;font-size:%?30?%;font-family:PingFang SC;font-weight:700;color:#333;opacity:1}.noways[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.btnShi[data-v-21c7e1c6]{width:%?134?%;height:%?60?%;margin-left:%?164?%;background:-webkit-linear-gradient(286deg,#fa5c6c,#ff5737);background:linear-gradient(164deg,#fa5c6c,#ff5737);opacity:1;border-radius:%?8?%;line-height:%?60?%;text-align:center;font-size:%?32?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}.noway[data-v-21c7e1c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.textoder-c[data-v-21c7e1c6]{margin-left:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\t/* align-items: flex-start; */font-size:%?28?%;font-family:PingFang SC;font-weight:400;margin-top:%?22?%;color:#333;opacity:1}.btn[data-v-21c7e1c6]{width:%?134?%;height:%?60?%;margin-right:%?22?%;background:-webkit-linear-gradient(286deg,#fa5c6c,#ff5737);background:linear-gradient(164deg,#fa5c6c,#ff5737);opacity:1;border-radius:%?8?%;line-height:%?60?%;text-align:center;font-size:%?32?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}body.?%PAGE?%[data-v-21c7e1c6]{background:#f5f5f5}",""]),t.exports=e}}]);