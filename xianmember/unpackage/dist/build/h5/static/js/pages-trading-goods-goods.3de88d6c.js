(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trading-goods-goods"],{"45dd":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-page-head",{attrs:{"uni-page-head-type":"default"}},[i("div",{staticClass:"uni-page-head",staticStyle:{background:"linear-gradient(90deg,#762f93,#e23b93,#f08300)",color:"rgb(255, 255, 255)"}},[i("div",{staticClass:"uni-page-head-hd"},[i("div",{staticClass:"uni-page-head-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goIndex.apply(void 0,arguments)}}},[i("i",{staticClass:"uni-btn-icon",staticStyle:{color:"rgb(255, 255, 255)","font-size":"27px"}},[t._v("")])])]),i("div",{staticClass:"uni-page-head-bd"},[i("div",{staticClass:"uni-page-head__title",staticStyle:{"font-size":"16px",opacity:"1"}},[t._v("商品详情")])])]),i("div",{staticClass:"uni-placeholder"})]),i("v-uni-view",[i("v-uni-view",{staticClass:"status",style:{opacity:t.afterHeaderOpacity}}),i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"before",style:{opacity:1-t.afterHeaderOpacity,zIndex:t.beforeHeaderzIndex}},[i("v-uni-view",{staticClass:"back"},[t.showBack?i("v-uni-view",{staticClass:"icon xiangqian",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}):t._e()],1),i("v-uni-view",{staticClass:"middle"}),i("v-uni-view",{staticClass:"icon-btn"},[i("v-uni-view",{staticClass:"icon tongzhi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toMsg.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"icon cart",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.joinCart.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"after",style:{opacity:t.afterHeaderOpacity,zIndex:t.afterHeaderzIndex}},[i("v-uni-view",{staticClass:"back"},[t.showBack?i("v-uni-view",{staticClass:"icon xiangqian",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}):t._e()],1),i("v-uni-view",{staticClass:"middle"},t._l(t.anchorlist,(function(e,a){return i("v-uni-view",{key:a,class:[t.selectAnchor==a?"on":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAnchor(a)}}},[t._v(t._s(e.name))])})),1),i("v-uni-view",{staticClass:"icon-btn"},[i("v-uni-view",{staticClass:"icon tongzhi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toMsg.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"icon cart",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.joinCart.apply(void 0,arguments)}}})],1)],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buy.apply(void 0,arguments)}}},[t._v("立即兑换")])],1)],1),i("v-uni-view",{staticClass:"popup spec",class:t.specClass,on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.discard.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideSpec.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask"}),i("v-uni-view",{staticClass:"layer",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.discard.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"length"},[i("v-uni-view",{staticClass:"text"},[t._v("数量")]),i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"sub",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.sub.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon jian"})],1),i("v-uni-view",{staticClass:"input",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.discard.apply(void 0,arguments)}}},[i("v-uni-input",{attrs:{type:"number"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),i("v-uni-view",{staticClass:"add",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon jia"})],1)],1)],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideSpec.apply(void 0,arguments)}}},[t._v("完成")])],1)],1)],1),i("v-uni-view",{staticClass:"swiper-box"},[i("v-uni-swiper",{attrs:{circular:"true",autoplay:"true"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.arrMain,(function(e){return i("v-uni-swiper-item",{key:e.id},[i("v-uni-image",{attrs:{src:t.imgSvr+e}})],1)})),1),i("v-uni-view",{staticClass:"indicator"},[t._v(t._s(t.currentSwiper+1)+"/"+t._s(t.arrMain.length))])],1),i("v-uni-view",{staticClass:"info-box goods-info"},[i("v-uni-view",{staticClass:"price",model:{value:t.goodsData.price,callback:function(e){t.$set(t.goodsData,"price",e)},expression:"goodsData.price"}},[t._v("￥"+t._s(t.goodsData.price))]),i("v-uni-view",{staticClass:"slogan",model:{value:t.goodsData.qudou,callback:function(e){t.$set(t.goodsData,"qudou",e)},expression:"goodsData.qudou"}},[t._v("渠豆:"+t._s(t.goodsData.qudou)+"个"),i("span",{class:t.goodsData.money>0?"":"slogan_dis"},[t._v("+"+t._s(t.goodsData.money)+"元")])]),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.goodsData.name))]),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.goodsData.detail))])],1),i("v-uni-view",{staticClass:"description"},[i("v-uni-view",{staticClass:"title"},[t._v("———— 商品详情 ————")]),i("v-uni-view",{staticClass:"content"},t._l(t.arrSub,(function(e){return i("v-uni-view",{key:e.id},[i("v-uni-image",{staticStyle:{width:"760rpx",height:"760rpx",bottom:"86rpx"},attrs:{src:t.imgSvr+e}})],1)})),1)],1)],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"4d0e":function(t,e,i){"use strict";i.r(e);var a=i("45dd"),n=i("8235");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9037");var s,d=i("f0c5"),r=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"10600db2",null,!1,a["a"],s);e["default"]=r.exports},8235:function(t,e,i){"use strict";i.r(e);var a=i("8318"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},8318:function(t,e,i){"use strict";var a=i("ee27");i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("36fb")),o=a(i("600e")),s={data:function(){return{beforeHeaderzIndex:11,afterHeaderzIndex:10,beforeHeaderOpacity:1,afterHeaderOpacity:0,goodsData:[],tmpLists:[],arrMain:[],arrSub:[],num:1,showBack:!0,swiperList:[{id:1,img:"https://ae01.alicdn.com/kf/HTB1Mj7iTmzqK1RjSZFjq6zlCFXaP.jpg"},{id:2,img:"https://ae01.alicdn.com/kf/HTB1fbseTmzqK1RjSZFLq6An2XXaL.jpg"},{id:3,img:"https://ae01.alicdn.com/kf/HTB1dPUMThnaK1RjSZFtq6zC2VXa0.jpg"},{id:4,img:"https://ae01.alicdn.com/kf/HTB1OHZrTXzqK1RjSZFvq6AB7VXaw.jpg"}],currentSwiper:0,goodsImg1:[],imgSvr:"",temp:"",anchorlist:[],selectAnchor:0,serviceClass:"",specClass:"",shareClass:"",selectSpec:null,selected:!1,isKeep:!1,descriptionStr:'<div style="text-align:center;"><img width="100%" src="https://ae01.alicdn.com/kf/HTB1t0fUl_Zmx1VjSZFGq6yx2XXa5.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB1LzkjThTpK1RjSZFKq6y2wXXaT.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB18dkiTbvpK1RjSZPiq6zmwXXa8.jpg"/></div>'}},onLoad:function(t){var e=this;this.imgSvr=this.ImgServer,this.token=uni.getStorageSync("token"),this.getInfo(),this.GetData(t.id),uni.getStorage({key:"isDefaultList",success:function(t){e.recinfo=t.data,uni.removeStorage({key:"isDefaultList"})}})},onReady:function(){this.calcAnchor()},onPageScroll:function(t){this.selectAnchor=t.scrollTop>=this.anchorlist[2].top?2:t.scrollTop>=this.anchorlist[1].top?1:0;var e=375;t.scrollTop=t.scrollTop>e?375:t.scrollTop,this.afterHeaderOpacity=t.scrollTop*(1/e),this.beforeHeaderOpacity=1-this.afterHeaderOpacity,this.beforeHeaderzIndex=t.scrollTop>0?10:11,this.afterHeaderzIndex=t.scrollTop>0?11:10},mounted:function(){},methods:{swiperChange:function(t){this.currentSwiper=t.detail.current},toMsg:function(){uni.navigateTo({url:"../msg/msg"})},GetData:function(t){var e=new Array,i=new Array,a=(new Array,this);uni.showLoading({title:"请稍候..."}),uni.request({url:a.ApiGateWay+"/sale/shoppingProduct/GetProductById?id="+t,data:"",method:"post",dataType:"json",header:{Authorization:a.token},success:function(t){if(n.default.CheckData(t)){for(var o in a.goodsData=t.data.data,t.data.data.mainImgs)e.push(t.data.data.mainImgs[o]);for(var s in t.data.data.subImgs)i.push(t.data.data.subImgs[s]);a.arrMain=e,a.arrSub=i,a.temp=t.data.data.mainImgs[0],console.log(t)}},fail:function(){uni.hideLoading()},complete:function(){uni.hideLoading()}});var o=Number(t),s=goodsData[o];this.goodsData=s},getInfo:function(){var t=[],e={userName:"点击添加收货地址"},i=this;uni.showLoading({title:"请稍候..."}),uni.request({url:i.ApiGateWay+"/sale/shopping/GetAddressBymemberId",data:"",method:"post",dataType:"json",header:{Authorization:i.token},success:function(a){if(n.default.CheckData(a)){i.addressList=a.data.list;for(var o=0;o<a.data.list.length;o++)1==a.data.list[o].isDefault&&t.push(a.data.list[o]);0==t.length&&t.push(e),uni.setStorage({key:"isDefaultList",data:t,success:function(){console.log(t)}})}},fail:function(){uni.hideLoading()},complete:function(){uni.hideLoading()}})},toChat:function(){uni.navigateTo({url:"../msg/chat/chat?name=客服008"})},share:function(){this.shareClass="show"},hideShare:function(){var t=this;this.shareClass="hide",setTimeout((function(){t.shareClass="none"}),150)},keep:function(){this.isKeep=!this.isKeep},joinCart:function(){var t=this;if(null==this.selectSpec)return this.showSpec((function(){t.toConfirmations(),uni.showToast({title:"已加入购物车"})}));this.toConfirmations()},buy:function(){var t=this;if(null==this.selectSpec)return this.showSpec((function(){t.toConfirmation()}));this.toConfirmation()},goIndex:function(){uni.navigateTo({url:"/pages/trading/trading"})},toRatings:function(){uni.navigateTo({url:"ratings/ratings"})},toConfirmation:function(){var t=this;0==t.goodsData.money&&(t.num=1),console.log("goodsData:"),console.log(t.goodsData.id);var e=[],i={id:t.goodsData.id,img:t.temp,name:t.goodsData.name,price:t.goodsData.price,num:t.num,money:t.goodsData.money,qudou:t.goodsData.qudou};e.push(i),uni.setStorage({key:"buylist",data:e,success:function(){uni.navigateTo({url:"../order/confirmation"})}})},toConfirmations:function(){var t={id:this.goodsData.id,name:this.goodsData.name,price:this.goodsData.price,num:this.num};o.default.totalArr.push(t)},showComments:function(t){},setSelectSpec:function(t){this.selectSpec=t},sub:function(){this.num<=1||this.num--},add:function(){this.num++},toAnchor:function(t){this.selectAnchor=t,uni.pageScrollTo({scrollTop:this.anchorlist[t].top,duration:200})},calcAnchor:function(){var t=this;this.anchorlist=[{name:"主图",top:0},{name:"评价",top:0},{name:"详情",top:0}];var e=uni.createSelectorQuery().select("#comments");e.boundingClientRect((function(e){var i=0,a=uni.upx2px(100);t.anchorlist[1].top=e.top-a-i,t.anchorlist[2].top=e.bottom-a-i})).exec()},back:function(){uni.navigateBack()},showService:function(){this.serviceClass="show"},hideService:function(){var t=this;this.serviceClass="hide",setTimeout((function(){t.serviceClass="none"}),200)},showSpec:function(t){console.log("show"),this.specClass="show",this.specCallback=t},specCallback:function(){},hideSpec:function(){var t=this;this.specClass="hide",this.specCallback&&this.specCallback(),this.specCallback=!1,setTimeout((function(){t.specClass="none"}),200)},discard:function(){}}};e.default=s},9037:function(t,e,i){"use strict";var a=i("e820"),n=i.n(a);n.a},c7ee:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-10600db2]{background-color:#f8f8f8}@-webkit-keyframes showPopup-data-v-10600db2{0%{opacity:0}100%{opacity:1}}@keyframes showPopup-data-v-10600db2{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes hidePopup-data-v-10600db2{0%{opacity:1}100%{opacity:0}}@keyframes hidePopup-data-v-10600db2{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes showLayer-data-v-10600db2{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes showLayer-data-v-10600db2{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@-webkit-keyframes hideLayer-data-v-10600db2{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes hideLayer-data-v-10600db2{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}.icon[data-v-10600db2]{font-size:%?26?%}.uni-image[data-v-10600db2]{width:%?810?%;height:%?770?%;bottom:%?100?%}.status[data-v-10600db2]{width:100%;height:0;position:fixed;z-index:10;top:0;background-color:#f1f1f1;-webkit-transition:opacity .05s linear;transition:opacity .05s linear}.header[data-v-10600db2]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10}.header .before[data-v-10600db2],\r\n.header .after[data-v-10600db2]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;-webkit-transition:opacity .05s linear;transition:opacity .05s linear}.header .before .back[data-v-10600db2],\r\n.header .after .back[data-v-10600db2]{width:%?125?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0}.header .before .back .icon[data-v-10600db2],\r\n.header .after .back .icon[data-v-10600db2]{margin-left:-10%;width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?42?%}.header .before .middle[data-v-10600db2],\r\n.header .after .middle[data-v-10600db2]{width:100%}.header .before .icon-btn[data-v-10600db2],\r\n.header .after .icon-btn[data-v-10600db2]{width:%?125?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .before .icon-btn .icon[data-v-10600db2],\r\n.header .after .icon-btn .icon[data-v-10600db2]{width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%}.header .before .icon-btn .icon[data-v-10600db2]:first-child,\r\n.header .after .icon-btn .icon[data-v-10600db2]:first-child{margin-right:%?5?%}.header .before .back .icon[data-v-10600db2]{color:#fff;background-color:rgba(0,0,0,.2);border-radius:100%}.header .before .icon-btn .icon[data-v-10600db2]{color:#fff;background-color:rgba(0,0,0,.2);border-radius:100%}.header .after[data-v-10600db2]{background-color:#f1f1f1}.header .after .back .icon[data-v-10600db2]{color:#666}.header .after .icon-btn .icon[data-v-10600db2]{color:#666}.header .after .middle[data-v-10600db2]{font-size:%?32?%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 7%}.header .after .middle uni-view[data-v-10600db2]{width:33.33333%;padding:0 3%;margin:0 3%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header .after .middle uni-view.on[data-v-10600db2]{margin-bottom:%?-4?%;color:#f47952;border-bottom:solid %?4?% #f47952}.swiper-box[data-v-10600db2]{margin-top:%?-82?%;position:relative;width:100%;height:100vw}.swiper-box uni-swiper[data-v-10600db2]{width:100%;height:100vw}.swiper-box uni-swiper uni-swiper-item uni-image[data-v-10600db2]{width:100%;height:100vw}.swiper-box .indicator[data-v-10600db2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?25?%;height:%?40?%;border-radius:%?40?%;font-size:%?22?%;position:absolute;bottom:%?20?%;right:%?20?%;color:#fff;background-color:rgba(0,0,0,.2)}.info-box[data-v-10600db2]{width:92%;padding:%?20?% 4%;background-color:#fff;margin-bottom:%?20?%}.slogan_dis[data-v-10600db2]{display:none}.goods-info .price[data-v-10600db2]{text-decoration:line-through;color:#848484;font-size:%?30?%;font-weight:600}.goods-info .slogan[data-v-10600db2]{color:#fe1d59;font-size:%?24?%;border-bottom:solid .5px #ededed}.goods-info .title[data-v-10600db2]{font-size:%?30?%;color:#a9a9a9;border-bottom:solid 1px #ededed}.spec .row[data-v-10600db2]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 0 %?30?% 0}.spec .row .text[data-v-10600db2]{font-size:%?24?%;color:#a2a2a2;margin-right:%?20?%}.spec .row .content[data-v-10600db2]{font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.spec .row .content .serviceitem[data-v-10600db2]{margin-right:%?10?%}.spec .row .content .sp[data-v-10600db2]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.spec .row .content .sp uni-view[data-v-10600db2]{background-color:#f6f6f6;padding:%?5?% %?10?%;color:#999;margin-right:%?10?%;font-size:%?20?%;border-radius:%?5?%}.spec .row .content .sp uni-view.on[data-v-10600db2]{border:solid %?1?% #f47952;padding:%?4?% %?8?%}.spec .row .arrow[data-v-10600db2]{position:absolute;right:4%}.spec .row .arrow .icon[data-v-10600db2]{color:#ccc}.comments .row[data-v-10600db2]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 0 %?30?% 0}.comments .row .text[data-v-10600db2]{font-size:%?30?%}.comments .row .arrow[data-v-10600db2]{font-size:%?28?%;position:absolute;right:4%;color:#17e6a1}.comments .row .arrow .show[data-v-10600db2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.comments .row .arrow .show .icon[data-v-10600db2]{color:#17e6a1}.comments .comment[data-v-10600db2]{width:100%}.comments .comment .user-info[data-v-10600db2]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.comments .comment .user-info .face[data-v-10600db2]{width:%?40?%;height:%?40?%;margin-right:%?8?%}.comments .comment .user-info .face uni-image[data-v-10600db2]{width:%?40?%;height:%?40?%;border-radius:100%}.comments .comment .user-info .username[data-v-10600db2]{font-size:%?24?%;color:#999}.comments .comment .content[data-v-10600db2]{margin-top:%?10?%;font-size:%?26?%}.description .title[data-v-10600db2]{width:100%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#999}.footer[data-v-10600db2]{position:fixed;bottom:%?0?%;width:92%;padding:0 4%;height:%?99?%;border-top:solid %?1?% #eee;background-color:#fff;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.footer .icons[data-v-10600db2]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?80?%;margin-left:-4%}.footer .icons .box[data-v-10600db2]{width:%?80?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.footer .icons .box .icon[data-v-10600db2]{font-size:%?40?%;color:#828282}.footer .icons .box .text[data-v-10600db2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;font-size:%?22?%;color:#666}.footer .btn[data-v-10600db2]{height:%?80?%;width:90%;border-radius:%?40?%;overflow:hidden;margin:0 auto}.footer .btn .joinCart[data-v-10600db2],\r\n.footer .btn .buy[data-v-10600db2]{height:%?80?%;padding:0 %?40?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.footer .btn .joinCart[data-v-10600db2]{background-color:#f0b46c}.footer .btn .buy[data-v-10600db2]{background-color:#f06c7a}.popup[data-v-10600db2]{position:fixed;top:0;width:100%;height:100%;z-index:20;display:none}.popup .mask[data-v-10600db2]{position:fixed;top:0;width:100%;height:100%;z-index:21;background-color:rgba(0,0,0,.6)}.popup .layer[data-v-10600db2]{position:fixed;z-index:22;bottom:-70%;width:92%;padding:0 4%;height:70%;border-radius:%?20?% %?20?% 0 0;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:space-between;align-content:space-between}.popup .layer .content[data-v-10600db2]{width:100%;padding:%?20?% 0}.popup .layer .btn[data-v-10600db2]{width:100%;height:%?100?%}.popup .layer .btn .button[data-v-10600db2]{width:100%;height:%?80?%;border-radius:%?40?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f47952;font-size:%?28?%}.popup.show[data-v-10600db2]{display:block}.popup.show .mask[data-v-10600db2]{-webkit-animation:showPopup-data-v-10600db2 .2s linear both;animation:showPopup-data-v-10600db2 .2s linear both}.popup.show .layer[data-v-10600db2]{-webkit-animation:showLayer-data-v-10600db2 .2s linear both;animation:showLayer-data-v-10600db2 .2s linear both}.popup.hide[data-v-10600db2]{display:block}.popup.hide .mask[data-v-10600db2]{-webkit-animation:hidePopup-data-v-10600db2 .2s linear both;animation:hidePopup-data-v-10600db2 .2s linear both}.popup.hide .layer[data-v-10600db2]{-webkit-animation:hideLayer-data-v-10600db2 .2s linear both;animation:hideLayer-data-v-10600db2 .2s linear both}.popup.none[data-v-10600db2]{display:none}.popup.service .row[data-v-10600db2]{margin:%?30?% 0}.popup.service .row .title[data-v-10600db2]{font-size:%?30?%;margin:%?10?% 0}.popup.service .row .description[data-v-10600db2]{font-size:%?28?%;color:#999}.popup.spec .title[data-v-10600db2]{font-size:%?30?%;margin:%?30?% 0}.popup.spec .sp[data-v-10600db2]{display:-webkit-box;display:-webkit-flex;display:flex}.popup.spec .sp uni-view[data-v-10600db2]{font-size:%?28?%;padding:%?5?% %?20?%;border-radius:%?8?%;margin:0 %?30?% %?20?% 0;background-color:#f6f6f6}.popup.spec .sp uni-view.on[data-v-10600db2]{padding:%?3?% %?18?%;border:solid %?1?% #f47925}.popup.spec .length[data-v-10600db2]{margin-top:%?30?%;border-top:solid %?1?% #aaa;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:%?20?%}.popup.spec .length .text[data-v-10600db2]{font-size:%?30?%}.popup.spec .length .number[data-v-10600db2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.popup.spec .length .number .input[data-v-10600db2]{width:%?80?%;height:%?60?%;margin:0 %?10?%;background-color:#f3f3f3;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center}.popup.spec .length .number .input uni-input[data-v-10600db2]{width:%?80?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;font-size:%?26?%}.popup.spec .length .number .sub[data-v-10600db2],\r\n.popup.spec .length .number .add[data-v-10600db2]{width:%?60?%;height:%?60?%;background-color:#f3f3f3;border-radius:%?5?%}.popup.spec .length .number .sub .icon[data-v-10600db2],\r\n.popup.spec .length .number .add .icon[data-v-10600db2]{font-size:%?30?%;width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.share[data-v-10600db2]{display:none}.share.show[data-v-10600db2]{display:block}.share.show .mask[data-v-10600db2]{-webkit-animation:showPopup-data-v-10600db2 .15s linear both;animation:showPopup-data-v-10600db2 .15s linear both}.share.show .layer[data-v-10600db2]{-webkit-animation:showLayer-data-v-10600db2 .15s linear both;animation:showLayer-data-v-10600db2 .15s linear both}.share.hide[data-v-10600db2]{display:block}.share.hide .mask[data-v-10600db2]{-webkit-animation:hidePopup-data-v-10600db2 .15s linear both;animation:hidePopup-data-v-10600db2 .15s linear both}.share.hide .layer[data-v-10600db2]{-webkit-animation:hideLayer-data-v-10600db2 .15s linear both;animation:hideLayer-data-v-10600db2 .15s linear both}.share.none[data-v-10600db2]{display:none}.share .mask[data-v-10600db2]{background-color:rgba(0,0,0,.5);position:fixed;width:100%;height:100%;top:0;z-index:11}.share .layer[data-v-10600db2]{width:92%;position:fixed;z-index:12;padding:0 4%;top:100%;background-color:hsla(0,0%,100%,.9)}.share .layer .list[data-v-10600db2]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% 0 %?30?% 0}.share .layer .list .box[data-v-10600db2]{width:25%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.share .layer .list .box uni-image[data-v-10600db2]{width:13.8vw;height:13.8vw}.share .layer .list .box .title[data-v-10600db2]{margin-top:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;font-size:%?26?%}.share .layer .btn[data-v-10600db2]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;border-top:solid %?1?% #666}.share .layer .h1[data-v-10600db2]{width:100%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?34?%}body.?%PAGE?%[data-v-10600db2]{background-color:#f8f8f8}',""]),t.exports=e},e820:function(t,e,i){var a=i("c7ee");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3b940c3c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);