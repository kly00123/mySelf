(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-zhaoshang"],{"056d":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"passby"}),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"left",attrs:{id:"id-0"}},[n("v-uni-view",{staticClass:"newtask"},[n("v-uni-view",{staticClass:"row_1"},[n("v-uni-view",{staticClass:"row_2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.user()}}},[n("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx","padding-left":"18rpx"},attrs:{src:i("ecc3")}}),n("v-uni-view",{staticClass:"newtask_mess_1"},[t._v("了解会员")])],1),n("v-uni-view",{staticClass:"row_3",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.partner()}}},[n("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx","padding-left":"66rpx"},attrs:{src:i("cd6b")}}),n("v-uni-view",{staticClass:"newtask_mess_1"},[t._v("了解合伙人")])],1)],1),n("v-uni-view",{staticClass:"barsty"},[n("v-uni-view",{staticClass:"newtask_bar_2"}),n("v-uni-view",{staticClass:"newtask_bar_3"})],1),n("v-uni-view",{staticClass:"under"},[n("v-uni-view",{staticClass:"row_1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agency()}}},[n("v-uni-view",{staticClass:"row_2"},[n("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx","padding-left":"18rpx"},attrs:{src:i("3ab2")}}),n("v-uni-view",{staticClass:"newtask_mess_1"},[t._v("了解代理")])],1)],1),n("v-uni-view",{staticClass:"row_5"},[n("v-uni-view",{staticClass:"row_2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.policy()}}},[n("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx","padding-left":"18rpx"},attrs:{src:i("9969")}}),n("v-uni-view",{staticClass:"newtask_mess_1"},[t._v("了解政策")])],1)],1)],1),n("v-uni-view",{staticClass:"barsty"},[n("v-uni-view",{staticClass:"newtask_bar_2"}),n("v-uni-view",{staticClass:"newtask_bar_3"})],1),n("v-uni-view",{staticClass:"under"},[n("v-uni-view",{staticClass:"row_1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dealers()}}},[n("v-uni-view",{staticClass:"row_2"},[n("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx","padding-left":"18rpx"},attrs:{src:i("2162")}}),n("v-uni-view",{staticClass:"newtask_mess_1"},[t._v("了解经销商")])],1)],1),n("v-uni-view",{staticClass:"row_5"},[n("v-uni-view",{staticClass:"row_2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.vendor()}}},[n("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx","padding-left":"18rpx"},attrs:{src:i("06df")}}),n("v-uni-view",{staticClass:"newtask_mess_1"},[t._v("了解供应商")])],1)],1)],1)],1)],1)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"06df":function(t,e,i){t.exports=i.p+"static/img/vendor.b91b21bd.png"},2162:function(t,e,i){t.exports=i.p+"static/img/project.2dfb8761.png"},"3ab2":function(t,e,i){t.exports=i.p+"static/img/agency.c9e264f6.png"},"65ea":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{tabCur:0,sendType:0,toplist:[{name:"推荐用户",id:"yonghu"},{name:"推荐兼职",id:"jianzhi"}],navList:[{orderList:[{state:0,text:"推荐用户",user:"了解会员",partner:"了解合伙人",agency:"了解代理",policy:"了解政策"}]},{orderList:[{state:1,text:"推荐兼职",recommed:"兼职推荐",project:"项目推荐",vendor:"供应商推荐"}]}]}},onLoad:function(t){this.tabCurrentIndex=0},methods:{changeTab:function(t){this.tabCurrentIndex=t.target.current},btnClick:function(t){this.sendType!=t&&(this.pageIndex=1,this.sendType=t)},left:function(){this.$refs.btn.style.backgroundColor="#ff0000"},right:function(){this.$refs.view.style.backgroundColor="#ff0000"},user:function(){uni.navigateTo({url:"/pages/part/user"})},partner:function(){uni.navigateTo({url:"/pages/part/partner"})},agency:function(){uni.navigateTo({url:"/pages/part/agency"})},policy:function(){uni.navigateTo({url:"/pages/part/policy"})},recommed:function(){uni.navigateTo({url:"/pages/part/recommed"})},project:function(){uni.navigateTo({url:"/pages/part/project"})},dealers:function(){uni.navigateTo({url:"/pages/part/dealers"})},vendor:function(){uni.navigateTo({url:"/pages/part/vendor"})},ontabchange:function(){e.target.current||e.detail.current},tabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1);var e=t.currentTarget.dataset.id,i=document.getElementById("id-"+e);if(i.style="",0==e){var n=document.getElementById("id-1");n.style="display:none;"}else{n=document.getElementById("id-0");n.style="display:none;"}}}};i.default=a},"98a9":function(t,e,i){"use strict";i.r(e);var n=i("056d"),a=i("d8b9");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("ae77");var c,r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"238cbbcc",null,!1,n["a"],c);e["default"]=s.exports},9969:function(t,e,i){t.exports=i.p+"static/img/policy.14b4b680.png"},ae77:function(t,e,i){"use strict";var n=i("d320"),a=i.n(n);a.a},cd6b:function(t,e,i){t.exports=i.p+"static/img/partner.png.9437481a.png"},d198:function(t,e,i){var n=i("24fb"),a=i("1de5"),o=i("9c58");e=n(!1);var c=a(o);e.push([t.i,"@font-face{font-family:newincon;src:url("+c+")}.menuactive[data-v-238cbbcc]{color:#dd524d}.top[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.left_top[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;white-space:nowrap}.sty[data-v-238cbbcc]{display:none}.left[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:%?46?%;-webkit-align-content:center;align-content:center;padding:10px;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;margin:%?175?% auto;margin-top:%?140?%}.passby[data-v-238cbbcc]{width:%?2?%;height:%?80?%;background-color:silver;margin:0 auto;margin-top:%?-160?%;margin-bottom:%?100?%}.newtask[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?1020?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-family:newincon;position:relative;margin-top:%?60?%}.row_1[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?300?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center; /* 水平居中 */-webkit-box-align:center;-webkit-align-items:center;align-items:center;     /* 垂直居中 */text-align:center}.row_5[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?300?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center; /* 水平居中 */-webkit-box-align:center;-webkit-align-items:center;align-items:center;     /* 垂直居中 */text-align:center;margin-left:%?-70?%}.under[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?300?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center; /* 水平居中 */-webkit-box-align:center;-webkit-align-items:center;align-items:center;     /* 垂直居中 */text-align:center;margin:0 %?-98?%;margin-right:%?150?%}.row_2[data-v-238cbbcc]{position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center; /* 水平居中 */-webkit-box-align:center;-webkit-align-items:center;align-items:center;     /* 垂直居中 */display:-webkit-box;display:-webkit-flex;display:flex;width:%?200?%;height:%?220?%;left:%?120?%}.row_3[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative;width:%?200?%;height:%?220?%;right:%?120?%;margin-top:%?116?%;margin-left:%?400?%}.row_4[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-newbulletion[data-v-238cbbcc]{width:%?200?%;height:%?200?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-align-self:flex-end;align-self:flex-end}.newtask_mess[data-v-238cbbcc]{position:relative;opacity:1;display:-webkit-box;display:-webkit-flex;display:flex}.newtask_bar_2[data-v-238cbbcc]{width:%?300?%;height:%?4?%;background-color:#ddd;opacity:1}.barsty[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;text-align:center;margin:0 auto}.newtask_bar_3[data-v-238cbbcc]{width:%?300?%;height:%?4?%;background-color:#ddd;opacity:1}.newtask_bar[data-v-238cbbcc]{width:%?4?%;height:%?550?%;background-color:#ddd;margin:0 auto;margin-top:%?-940?%}.newtask_mess_1[data-v-238cbbcc]{white-space:nowrap;font-size:%?32?%;margin-left:%?10?%;margin-top:%?10?%}.new-newbulletionn[data-v-238cbbcc]{width:%?200?%;height:%?60?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-align-self:flex-end;align-self:flex-end}.passby_1[data-v-238cbbcc]{width:%?600?%;height:%?2?%;background-color:silver;margin:0 auto;margin-top:%?8?%;margin-bottom:%?100?%}.passby_2[data-v-238cbbcc]{width:%?2?%;height:%?420?%;background-color:silver;margin:0 auto;margin-top:%?-470?%;margin-bottom:%?100?%}.right[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-align-content:center;align-content:center;padding:10px;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;margin-right:%?360?%}.leftmes[data-v-238cbbcc]{margin-bottom:20px}.one_box[data-v-238cbbcc]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#666;height:%?112?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;background-color:#fff\n\t/* padding-top: 18rpx; */}.one_col[data-v-238cbbcc]{position:absolute;color:#afafaf;height:%?200?%;width:90%;margin:%?20?% auto;-webkit-justify-content:space-around;justify-content:space-around; /* 水平居中 */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;\n\t/* padding-top: 18rpx; */margin:%?-40?% %?24?% %?24?% %?24?%;border-radius:5px;box-shadow:1px 1px 5px #cacaca}.list[data-v-238cbbcc]{color:#afafaf;font-size:%?32?%;height:%?1060?%;width:90%;margin:%?20?% auto;-webkit-justify-content:space-around;justify-content:space-around; /* 水平居中 */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;\n\t/* padding-top: 18rpx; */border-radius:5px;box-shadow:1px 1px 10px 1px #cacaca}.one_col_title[data-v-238cbbcc]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#999;margin-bottom:%?20?%;font-size:16px}.color_333333[data-v-238cbbcc]{color:#333}.nav_bottom_act[data-v-238cbbcc]{border-bottom:%?6?% solid #f04f43}.nav_bottom[data-v-238cbbcc]{margin-top:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?1?%;width:48px;border-bottom:%?6?% solid #fff}",""]),t.exports=e},d320:function(t,e,i){var n=i("d198");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("170320f9",n,!0,{sourceMap:!1,shadowMode:!1})},d8b9:function(t,e,i){"use strict";i.r(e);var n=i("65ea"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},ecc3:function(t,e,i){t.exports=i.p+"static/img/user.png.68231948.png"}}]);