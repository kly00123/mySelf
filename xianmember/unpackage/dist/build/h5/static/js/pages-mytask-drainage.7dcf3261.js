(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mytask-drainage"],{"2ce2":function(e,t,i){"use strict";var a=i("ee27");i("a4d3"),i("e01a"),i("d3b7"),i("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("36fb")),o={data:function(){return{array:["选择任务类型","集赞涨粉","店铺关注"],arr:["选择任务单价","3","8","10","30","50"],arrayIndex:0,arrayNum:0,aim:["选择任务要求","点赞","关注","点赞+关注"],aimIndex:0,price:30,index:0,token:"",taskPackage:{},taskName:"",imgPath:"",imgSvr:"",url:"",info:{},description:"",list:[{id:1,name:"3个",value:3},{id:2,name:"8个",value:8},{id:3,name:"10个",value:10},{id:4,name:"30个",value:30}],number:"",current:-1,packIndex:-1}},onLoad:function(e){this.imgSvr=this.ImgServer,this.token=uni.getStorageSync("token"),this.taskPackage=JSON.parse(e.item),this.getInfo()},onShow:function(){this.getInfo()},methods:{bindPickerChange:function(e){this.arrayIndex=e.target.value,this.price=this.arrayIndex,console.log(e)},PickerChange:function(e){this.arrayNum=e.target.value,console.log(this.arrayNum)},radioChange:function(e){this.packIndex=e.target.value},goIndex:function(){uni.navigateTo({url:"/pages/mytask/promote"})},selectPic:function(){var e=this,t="";uni.chooseImage({count:1,sizeType:["compressed"],success:function(i){t=i.tempFilePaths.toString(),uni.getImageInfo({src:t,success:function(i){var a=i.width,n=i.height,o=a/n;a>300&&(a=300,n=Math.floor(a/o));var r=new Image;r.src=t;var s=document.createElement("canvas"),c=s.getContext("2d");s.width=a,s.height=n,c.clearRect(0,0,a,n),c.drawImage(r,0,0,a,n),t=s.toDataURL("image/jpeg"),e.upload(t)}})}})},upload:function(e){uni.showLoading({title:"请稍候..."});var t=this;uni.uploadFile({url:t.ApiGateWay+"/sale/image/uploadByFile",filePath:e,name:"file",formData:{path:"/sale/newtask/"},success:function(e){uni.hideLoading();var i=JSON.parse(e.data);0==i.errorCode?(uni.showToast({icon:"success",title:"图片上传成功!"}),t.url=i.data):uni.showModal({title:"提示",content:"图片上传失败",showCancel:!1,success:function(e){}})},fail:function(){uni.hideLoading()},complete:function(){t.upload_field=""}})},getInfo:function(){var e=this;uni.showLoading({title:"请稍候..."}),uni.request({url:e.ApiGateWay+"/sale/Member/GetInfo",data:"",method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){n.default.CheckData(t)&&(e.info=t.data.data,console.log(this.info))},fail:function(){uni.hideLoading()},complete:function(){uni.hideLoading()}})},getData:function(){var e=this;uni.showLoading({title:"请稍候..."});e.url;uni.request({url:e.ApiGateWay+"/sale/Member/GetTodayData",data:"",method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){console.log(t),n.default.CheckData(t)&&(e.dataModel=t.data.data,e.moneyQuota=t.data.data.moneyQuota,e.money=t.data.data.money)},fail:function(){uni.hideLoading()},complete:function(){uni.hideLoading()}})},getList:function(){var e=this;uni.request({url:e.ApiGateWay+"/sale/Member/GetTaskPackageDetailsList?taskTypeListId="+e.array[e.index].id+"&taskPackageId="+e.taskPackage.taskPackageId+"&parentId="+e.array[e.index].parentId,data:"",method:"POST",dataType:"json",header:{Authorization:e.token},success:function(t){n.default.CheckData(t)&&(e.list=t.data.list,console.log(e.list))},fail:function(){},complete:function(){uni.hideLoading()}})},bindAimPickerChange:function(e){this.aimIndex=e.target.value},goCreateTask:function(){var e=this,t={orderNo:e.taskPackage.orderNo,taskName:e.taskName,url:e.url,quota:e.quota,description:e.description,aim:e.aimIndex-1,mercId:e.mercId,taskType:3,price:this.price};console.log(t),uni.showLoading({title:"加载中..."}),uni.request({url:e.ApiGateWay+"/sale/Member/CreateTask",data:t,header:{Authorization:e.token},method:"POST",dataType:"json",success:function(e){n.default.CheckData(e)?uni.showModal({title:"信息提示",content:"任务发布成功",showCancel:!1,success:function(e){uni.navigateBack({delta:1})}}):uni.showModal({title:"出错了",content:e.data.errorMessage,showCancel:!1,success:function(e){}})},complete:function(){uni.hideLoading()},fail:function(e){uni.stopPullDownRefresh()}})},getArrayType:function(e){var t=this;uni.request({url:t.ApiGateWay+"/sale/Member/GetTaskTypeListEntity?id="+e,data:"",method:"POST",dataType:"json",header:{Authorization:t.token},success:function(e){n.default.CheckData(e)&&(t.array=e.data.list,console.log(t.array),t.getList(t.taskPackage.taskPackageId,t.taskPackage.typeId))},fail:function(){},complete:function(){uni.hideLoading()}})}}};t.default=o},8845:function(e,t,i){e.exports=i.p+"static/img/icon_plus.b7dcf8a4.svg"},ada1:function(e,t,i){var a=i("f21b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("542d390c",a,!0,{sourceMap:!1,shadowMode:!1})},add2:function(e,t,i){"use strict";var a=i("ada1"),n=i.n(a);n.a},aea1:function(e,t,i){"use strict";i.r(t);var a=i("2ce2"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},bf92:function(e,t,i){"use strict";i.r(t);var a=i("fe34"),n=i("aea1");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("add2");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"18b712e4",null,!1,a["a"],r);t["default"]=c.exports},f21b:function(e,t,i){var a=i("24fb"),n=i("1de5"),o=i("8845");t=a(!1);var r=n(o);t.push([e.i,"uni-page-body[data-v-18b712e4]{background-color:#f5f5f9}.title[data-v-18b712e4]{height:%?128?%;background:#f04f43;opacity:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;line-height:%?128?%;padding-top:%?24?%;font-size:%?34?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}.per-leber[data-v-18b712e4]{width:%?180?%;margin-left:%?24?%}.per-leberr[data-v-18b712e4]{width:%?180?%;margin-left:%?6?%}.uni-photo[data-v-18b712e4]{width:100%;height:%?380?%;background:#f5f5f5;opacity:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?8?%;text-align:center;margin-top:%?26?%}.left[data-v-18b712e4]{width:%?24?%;height:%?48?%;margin-left:%?24?%}.content[data-v-18b712e4]{\n\t/* height: 376rpx; */margin-top:%?-80?%}.per[data-v-18b712e4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n\t/* justify-content: space-between; */-webkit-box-align:center;-webkit-align-items:center;align-items:center;\n\t/* margin-left: 24rpx; */background-color:#fff;font-size:%?30?%;font-family:PingFang SC;font-weight:400;height:%?92?%;border-bottom:%?1?% solid #ebebeb;color:#333;opacity:1}.icons[data-v-18b712e4]{width:%?13?%;height:%?20?%;margin-right:%?24?%;margin-left:%?24?%}.uni-per[data-v-18b712e4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\n\n\t/* display: flex; */\n\t/* flex-direction: row; */-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cricle[data-v-18b712e4]{width:%?72?%;height:%?72?%;background:#fff;border-radius:50%;opacity:1;margin-bottom:%?8?%}.input[data-v-18b712e4]{\n\n\t/* text-align: right; */}.uni-num[data-v-18b712e4]{font-size:%?30?%;font-family:PingFang SC;font-weight:400;color:#999;opacity:1}.address[data-v-18b712e4]{height:%?188?%;background:#fff;opacity:1;margin-top:%?20?%}.uni-address[data-v-18b712e4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?24?%;font-size:%?30?%;font-family:PingFang SC;font-weight:400;height:%?94?%;border-bottom:%?1?% solid #ebebeb;color:#333;opacity:1}.textarea-group[data-v-18b712e4]{padding:%?20?%;background-color:#fff;overflow:hidden}.upload-photo-box[data-v-18b712e4]{width:25%;float:left;position:relative;margin-top:%?30?%}.upload-photo-box-span[data-v-18b712e4]{width:%?40?%;height:%?40?%;border-radius:%?50?%;background-color:#ff940a;color:#fff;text-align:center;position:absolute;z-index:1;top:%?-10?%;right:0;font-size:%?40?%;line-height:%?34?%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.loaded-photo-thumbnail[data-v-18b712e4]{width:%?150?%;height:%?150?%;margin:0 auto;border-radius:%?20?%}.add-photo-btn[data-v-18b712e4]{width:%?150?%;height:%?150?%;margin:0 auto;border:%?2?% #ccc dashed;border-radius:%?20?%;background:url("+r+") no-repeat 50%;background-size:%?80?%}.loaded-photo-thumbnail uni-image[data-v-18b712e4]{width:100%;height:100%;border-radius:%?20?%}.bottoms[data-v-18b712e4]{width:%?702?%;height:%?92?%;background:-webkit-linear-gradient(274deg,#fa5c6c,#fa5c6c 7%,#ff5737);background:linear-gradient(176deg,#fa5c6c,#fa5c6c 7%,#ff5737);opacity:1;border-radius:%?8?%;margin-top:%?100?%;margin-bottom:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:%?24?%;line-height:%?92?%;text-align:center;font-size:%?34?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}body.?%PAGE?%[data-v-18b712e4]{background-color:#f5f5f9}",""]),e.exports=t},fe34:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("uni-page-head",{attrs:{"uni-page-head-type":"default"}},[i("div",{staticClass:"uni-page-head",staticStyle:{background:"linear-gradient(90deg,#762f93,#e23b93,#f08300)",color:"rgb(255, 255, 255)"}},[i("div",{staticClass:"uni-page-head-hd"},[i("div",{staticClass:"uni-page-head-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goIndex.apply(void 0,arguments)}}},[i("i",{staticClass:"uni-btn-icon",staticStyle:{color:"rgb(255, 255, 255)","font-size":"27px"}},[e._v("")])])]),i("div",{staticClass:"uni-page-head-bd"},[i("div",{staticClass:"uni-page-head__title",staticStyle:{"font-size":"16px",opacity:"1"}},[e._v("应用下载")])])]),i("div",{staticClass:"uni-placeholder"})]),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"per"},[i("v-uni-view",{staticClass:"per-leber"},[e._v("任务类型")]),i("v-uni-view",{staticClass:"uni-per"},[e._v("应用下载")])],1),i("v-uni-view",{staticClass:"per"},[i("v-uni-view",{staticClass:"per-leber"},[e._v("任务介绍")]),i("v-uni-view",{staticClass:"uni-per"},[e._v("主动下载应用，截图上传")])],1),i("v-uni-view",{staticClass:"per"},[i("v-uni-view",{staticClass:"per-leber"},[e._v("任务单价")]),i("v-uni-view",{staticClass:"uni-per"},[e._v(e._s(e.price)+"豆")])],1),i("v-uni-view",{staticClass:"per"},[i("v-uni-view",{staticClass:"per-leber"},[e._v("下载地址"),i("span",{staticStyle:{color:"red"}},[e._v("*")])]),i("v-uni-view",{staticClass:"uni-per"},[i("v-uni-input",{staticClass:"input",staticStyle:{"font-size":"30rpx"},attrs:{placeholder:"请输入下载地址"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1)],1),i("v-uni-view",{staticClass:"per"},[i("v-uni-view",{staticClass:"per-leber"},[e._v("任务数量"),i("span",{staticStyle:{color:"red"}},[e._v("*")])]),i("v-uni-view",{staticClass:"uni-per"},[i("v-uni-input",{staticClass:"input",staticStyle:{"font-size":"30rpx"},attrs:{placeholder:"请输入任务数量"},model:{value:e.quota,callback:function(t){e.quota=t},expression:"quota"}})],1)],1),i("v-uni-view",{staticClass:"per"},[i("v-uni-view",{staticClass:"per-leber"},[e._v("邀请码")]),i("v-uni-view",{staticClass:"uni-per"},[i("v-uni-input",{staticClass:"input",staticStyle:{"font-size":"30rpx"},attrs:{placeholder:"请输入推荐邀请码"},model:{value:e.mercId,callback:function(t){e.mercId=t},expression:"mercId"}})],1)],1),i("v-uni-view",{staticStyle:{"margin-left":"20rpx",color:"darkgray"}},[e._v("注:下载地址格式只能是apk")])],1),i("v-uni-view",{staticClass:"bottoms",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goCreateTask.apply(void 0,arguments)}}},[e._v("发布")])],1)},o=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}))}}]);