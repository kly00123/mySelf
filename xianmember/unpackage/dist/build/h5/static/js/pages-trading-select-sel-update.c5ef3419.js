(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trading-select-sel-update"],{"1f75":function(e,t,r){"use strict";var i=r("ee27");r("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("36fb")),a=(r("cfd4"),{data:function(){return{num:"",time:"",timer:"",returnList:""}},onLoad:function(){this.token=uni.getStorageSync("token"),this.getTime(),this.getExchange()},onReachBottom:function(){this.getTime(),this.getExchange()},onPullDownRefresh:function(){this.getTime(),this.getExchange()},onShow:function(){var e=this;uni.getStorage({key:"UserInfo",success:function(t){t.data?e.user=t.data:e.isfirst},fail:function(e){}})},methods:{radioChange:function(e){var t=e.detail.value;this.num=Number(t),console.log(e)},goIndex:function(){uni.navigateTo({url:"/pages/trading/select/select"})},getTime:function(){var e="09:30:05",t=this;uni.request({url:t.ApiGateWay+"/sale/Member/GetTimeNow",data:"",method:"POST",header:{Authorization:t.token},success:function(r){console.log(r),console.log(r.data.errorMessage),n.default.CheckData(r)?(t.time=r.data.data,console.log(t.time),t.time>e?(t.timer=1,console.log(t.timer)):(t.timer=2,console.log(t.timer))):console.log("false!")},fail:function(){uni.hideLoading()},complete:function(){uni.hideLoading(),uni.stopPullDownRefresh()}})},getExchange:function(){var e=this;uni.request({url:e.ApiGateWay+"/sale/shopping/GetExchangeQuotaNow",data:"",method:"POST",header:{Authorization:e.token},success:function(t){for(var r=0;r<t.data.list.length;r++)0==t.data.list[r].type&&(t.data.list[r].quota=t.data.list[r].showQuota,e.returnList=t.data.list);console.log(e.returnList[0]),console.log(e.returnList),n.default.CheckData(t)||console.log("false!")},fail:function(){uni.hideLoading()},complete:function(){uni.hideLoading(),uni.stopPullDownRefresh()}})},saveData:function(){var e=this;console.log(e.num),uni.navigateTo({url:"/pages/trading/select/sel/solo?type="+e.num})}}});t.default=a},"2b97":function(e,t,r){"use strict";var i=r("6123"),n=r.n(i);n.a},6123:function(e,t,r){var i=r("6277");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("6fbb78d5",i,!0,{sourceMap:!1,shadowMode:!1})},6277:function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,".uni-form-item[data-v-1cd30f1e]{padding:%?20?% 0;margin-top:%?-86?%}.row[data-v-1cd30f1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.bottoms[data-v-1cd30f1e]{width:%?702?%;height:%?92?%;background:-webkit-linear-gradient(274deg,#fa5c6c,#fa5c6c 7%,#ff5737);background:linear-gradient(176deg,#fa5c6c,#fa5c6c 7%,#ff5737);opacity:1;border-radius:%?8?%;margin-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:%?24?%;line-height:%?92?%;text-align:center;font-size:%?34?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}",""]),e.exports=t},"97f6":function(e,t,r){"use strict";var i,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"page"},[r("uni-page-head",{attrs:{"uni-page-head-type":"default"}},[r("div",{staticClass:"uni-page-head",staticStyle:{background:"linear-gradient(90deg,#762f93,#e23b93,#f08300)",color:"rgb(255, 255, 255)"}},[r("div",{staticClass:"uni-page-head-hd"},[r("div",{staticClass:"uni-page-head-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goIndex.apply(void 0,arguments)}}},[r("i",{staticClass:"uni-btn-icon",staticStyle:{color:"rgb(255, 255, 255)","font-size":"27px"}},[e._v("")])])]),r("div",{staticClass:"uni-page-head-bd"},[r("div",{staticClass:"uni-page-head__title",staticStyle:{"font-size":"16px",opacity:"1"}},[e._v("兑换中心")])])]),r("div",{staticClass:"uni-placeholder"})]),r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between"}},[r("v-uni-view",{staticClass:"title"},[e._v("兑换详情")]),r("v-uni-view",{staticClass:"title",staticStyle:{"margin-right":"28rpx"}},[e._v("兑换时间 9:30-17:00")])],1),r("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.radioChange.apply(void 0,arguments)}}},e._l(e.returnList,(function(t,i){return r("v-uni-view",{key:i,staticClass:"uni-list-cell uni-list-cell-pd"},[r("v-uni-view",[r("v-uni-radio",{attrs:{id:t.type,value:i,checked:t.checked}})],1),r("v-uni-label",{staticClass:"label-2-text",attrs:{for:t.name}},[r("v-uni-text",[e._v(e._s(t.remark)+"-"),2==e.timer?r("span",[e._v("剩余兑换名额 "+e._s(t.showQuota))]):e._e(),1==e.timer?r("span",[e._v("剩余兑换名额"+e._s(t.quota))]):e._e()])],1)],1)})),1)],1),r("v-uni-view",{staticClass:"bottoms",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveData.apply(void 0,arguments)}}},[e._v("保存")])],1)},a=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i}))},b5ec:function(e,t,r){"use strict";r.r(t);var i=r("97f6"),n=r("bd24");for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r("2b97");var o,s=r("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1cd30f1e",null,!1,i["a"],o);t["default"]=c.exports},bd24:function(e,t,r){"use strict";r.r(t);var i=r("1f75"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},cfd4:function(e,t,r){r("c975"),r("a9e3"),r("4d63"),r("ac1f"),r("25f0"),r("1276"),e.exports={error:"",check:function(e,t){for(var r=0;r<t.length;r++){if(!t[r].checkType)return!0;if(!t[r].name)return!0;if(!t[r].errorMsg)return!0;if(!e[t[r].name])return this.error=t[r].errorMsg,!1;switch(t[r].checkType){case"string":var i=new RegExp("^.{"+t[r].checkRule+"}$");if(!i.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"int":i=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[r].checkRule+"}$");if(!i.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[r].name]))return this.error=t[r].errorMsg,!1;var n=t[r].checkRule.split(",");if(n[0]=Number(n[0]),n[1]=Number(n[1]),e[t[r].name]>n[1]||e[t[r].name]<n[0])return this.error=t[r].errorMsg,!1;break;case"betweenD":i=/^-?[1-9][0-9]?$/;if(!i.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;n=t[r].checkRule.split(",");if(n[0]=Number(n[0]),n[1]=Number(n[1]),e[t[r].name]>n[1]||e[t[r].name]<n[0])return this.error=t[r].errorMsg,!1;break;case"betweenF":i=/^-?[0-9][0-9]?.+[0-9]+$/;if(!i.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;n=t[r].checkRule.split(",");if(n[0]=Number(n[0]),n[1]=Number(n[1]),e[t[r].name]>n[1]||e[t[r].name]<n[0])return this.error=t[r].errorMsg,!1;break;case"same":if(e[t[r].name]!=t[r].checkRule)return this.error=t[r].errorMsg,!1;break;case"notsame":if(e[t[r].name]==t[r].checkRule)return this.error=t[r].errorMsg,!1;break;case"email":i=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!i.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"phoneno":i=/^1[0-9]{10,10}$/;if(!i.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"zipcode":i=/^[0-9]{6}$/;if(!i.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"reg":i=new RegExp(t[r].checkRule);if(!i.test(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"in":if(-1==t[r].checkRule.indexOf(e[t[r].name]))return this.error=t[r].errorMsg,!1;break;case"notnull":if(null==e[t[r].name]||e[t[r].name].length<1)return this.error=t[r].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}}}]);