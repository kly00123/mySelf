(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trading-uplode-edit-edit"],{"17e6":function(t,i,e){"use strict";e.r(i);var a=e("3205"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"247d":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"page"},[a("uni-page-head",{attrs:{"uni-page-head-type":"default"}},[a("div",{staticClass:"uni-page-head",staticStyle:{background:"linear-gradient(90deg,#762f93,#e23b93,#f08300)",color:"rgb(255, 255, 255)"}},[a("div",{staticClass:"uni-page-head-hd"},[a("div",{staticClass:"uni-page-head-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goIndex.apply(void 0,arguments)}}},[a("i",{staticClass:"uni-btn-icon",staticStyle:{color:"rgb(255, 255, 255)","font-size":"27px"}},[t._v("")])])]),a("div",{staticClass:"uni-page-head-bd"},[a("div",{staticClass:"uni-page-head__title",staticStyle:{"font-size":"16px",opacity:"1"}},[t._v("上传商品")])])])]),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"per"},[a("v-uni-view",[t._v("商品名称")]),a("v-uni-view",{staticClass:"uni-per"},[a("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入商品名称"},model:{value:t.info.name,callback:function(i){t.$set(t.info,"name",i)},expression:"info.name"}}),a("v-uni-image",{staticClass:"icons",attrs:{src:e("cd7e")}})],1)],1),a("v-uni-view",{staticClass:"per"},[a("v-uni-view",[t._v("商品副标题")]),a("v-uni-view",{staticClass:"uni-per"},[a("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入商品副标题"},model:{value:t.info.subTitle,callback:function(i){t.$set(t.info,"subTitle",i)},expression:"info.subTitle"}}),a("v-uni-image",{staticClass:"icons",attrs:{src:e("cd7e")}})],1)],1),a("v-uni-view",{staticClass:"per"},[a("v-uni-view",[t._v("参考价")]),a("v-uni-view",{staticClass:"uni-per"},[a("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入参考价"},model:{value:t.info.price,callback:function(i){t.$set(t.info,"price",i)},expression:"info.price"}}),a("v-uni-image",{staticClass:"icons",attrs:{src:e("cd7e")}})],1)],1),a("v-uni-view",{staticClass:"per"},[a("v-uni-view",[t._v("渠豆")]),a("v-uni-view",{staticClass:"uni-per"},[a("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入渠豆"},model:{value:t.info.qudou,callback:function(i){t.$set(t.info,"qudou",i)},expression:"info.qudou"}}),a("v-uni-image",{staticClass:"icons",attrs:{src:e("cd7e")}})],1)],1),a("v-uni-view",{staticClass:"per"},[a("v-uni-view",[t._v("需要支付余额")]),a("v-uni-view",{staticClass:"uni-per"},[a("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入支付余额"},model:{value:t.info.money,callback:function(i){t.$set(t.info,"money",i)},expression:"info.money"}}),a("v-uni-image",{staticClass:"icons",attrs:{src:e("cd7e")}})],1)],1),a("v-uni-view",{staticClass:"per"},[a("v-uni-view",[t._v("库存")]),a("v-uni-view",{staticClass:"uni-per"},[a("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入库存"},model:{value:t.info.stock,callback:function(i){t.$set(t.info,"stock",i)},expression:"info.stock"}}),a("v-uni-image",{staticClass:"icons",attrs:{src:e("cd7e")}})],1)],1),a("v-uni-view",{staticClass:"perr"},[a("v-uni-view",[t._v("商品详情")]),a("v-uni-view",{staticClass:"uni-textarea"},[a("v-uni-textarea",{attrs:{placeholder:"请输入商品详情"},model:{value:t.info.detail,callback:function(i){t.$set(t.info,"detail",i)},expression:"info.detail"}})],1)],1),a("v-uni-view",{staticClass:"perr"},[a("v-uni-view",[t._v("是否上架")]),a("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.radioChange.apply(void 0,arguments)}}},t._l(t.radioItems,(function(i,e){return a("v-uni-view",{key:e,staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",[a("v-uni-radio",{attrs:{id:i.name,value:i.name,checked:i.checked}})],1),a("v-uni-label",{staticClass:"label-2-text",attrs:{for:i.name}},[a("v-uni-text",[t._v(t._s(i.value))])],1)],1)})),1)],1),a("v-uni-view",[a("v-uni-view",{staticStyle:{"margin-left":"28rpx"}},[t._v("商品轮播图")]),a("v-uni-view",[a("img-uploadd",{ref:"imgUploadd",attrs:{imgArr:t.imgArrayy,imgCount:"4"}}),a("v-uni-button",{attrs:{type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1),a("v-uni-view",[a("v-uni-view",{staticStyle:{"margin-left":"28rpx"}},[t._v("商品详情图")]),a("v-uni-view",[a("img-upload",{ref:"imgUpload",attrs:{imgArr:t.imgArray,imgCount:"3"}}),a("v-uni-button",{attrs:{type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit1.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1),a("v-uni-view",{staticClass:"bottoms",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.saveData.apply(void 0,arguments)}}},[t._v("保存")])],1)},o=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}))},3205:function(t,i,e){"use strict";var a=e("ee27");e("99af"),e("4160"),e("a434"),e("a9e3"),e("d3b7"),e("25f0"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("d0ff")),o=a(e("36fb")),s=a(e("1afa")),d=a(e("bdc4")),c={components:{imgUpload:s.default,imgUploadd:d.default},data:function(){return{radioItems:[{name:"0",value:"下架"},{name:"1",value:"上架",checked:"true"}],imgTotalPath:[],imgTotalPath1:[],imgArray:[],status:"1",imgArrayy:[],imageList:[],category:"image",imgSvr:"",timetext:"成都市",token:"",info:{},imgList:[],cloudimgList:[],imgCount:4,array:["男","女"],list:[]}},onLoad:function(t){var i=this;this.imgSvr=this.ImgServer,this.token=uni.getStorageSync("token"),this.editType=t.type,"edit"==t.type&&uni.getStorage({key:"addresss",success:function(t){i.info.id=t.data.id,i.info.money=t.data.money,i.info.name=t.data.name,i.info.price=t.data.price,i.info.status=t.data.status,i.info.stock=t.data.stock,i.info.detail=t.data.detail,i.info.qudou=t.data.qudou,i.info.subTitle=t.data.subTitle,i.info.mainImgs=t.data.mainImgs,i.info.subImgs=t.data.subImgs}}),this.getImg(this.info.id)},methods:{bindTextAreaBlur:function(t){},region_change:function(t){this.timetext=t.detail.value},radioChange:function(t){var i=t.detail.value;this.status=Number(i)},getImg:function(t){var i=this;uni.showLoading({title:"加载中..."}),uni.request({url:i.ApiGateWay+"/sale/shoppingProduct/GetProductById?id="+this.info.id,data:"",header:{Authorization:i.token},method:"POST",dataType:"json",success:function(t){o.default.CheckData(t)&&console.log(t)},complete:function(){uni.hideLoading()},fail:function(t){uni.stopPullDownRefresh()}})},submit:function(){var t=this,i=[];this.$refs.imgUploadd.upload((function(e){for(var a=0;a<e.length;a++)i.push(e[a].data);t.imgTotalPath=i,console.log("1111"),console.log(t.imgTotalPath),e.code}))},submit1:function(){var t=this,i=[];this.$refs.imgUpload.upload((function(e){for(var a=0;a<e.length;a++)i.push(e[a].data);t.imgTotalPath1=i,console.log("1111"),console.log(t.imgTotalPath1),e.code}))},goIndex:function(){uni.navigateBack({delta:1})},selectPic:function(){var t=this,i="";uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){i=e.tempFilePaths.toString(),uni.getImageInfo({src:i,success:function(e){var a=e.width,n=e.height,o=a/n;a>300&&(a=300,n=Math.floor(a/o));var s=new Image;s.src=i;var d=document.createElement("canvas"),c=d.getContext("2d");d.width=a,d.height=n,c.clearRect(0,0,a,n),c.drawImage(s,0,0,a,n),i=d.toDataURL("image/jpeg"),t.upload(i)}})}})},selectPic1:function(){var t=this,i="";uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){i=e.tempFilePaths.toString(),uni.getImageInfo({src:i,success:function(e){var a=e.width,n=e.height,o=a/n;a>300&&(a=300,n=Math.floor(a/o));var s=new Image;s.src=i;var d=document.createElement("canvas"),c=d.getContext("2d");d.width=a,d.height=n,c.clearRect(0,0,a,n),c.drawImage(s,0,0,a,n),i=d.toDataURL("image/jpeg"),t.upload(i)}})}})},selectPic2:function(){var t=this,i="";uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){i=e.tempFilePaths.toString(),uni.getImageInfo({src:i,success:function(e){var a=e.width,n=e.height,o=a/n;a>300&&(a=300,n=Math.floor(a/o));var s=new Image;s.src=i;var d=document.createElement("canvas"),c=d.getContext("2d");d.width=a,d.height=n,c.clearRect(0,0,a,n),c.drawImage(s,0,0,a,n),imgPath=d.toDataURL("image/jpeg"),t.upload(i)}})}})},upload:function(t){uni.showLoading({title:"请稍候..."});var i=this;uni.uploadFile({url:i.ApiGateWay+"/sale/image/uploadByFile",filePath:t,name:"file",formData:{path:"/sale/newtask/"},success:function(t){uni.hideLoading();var e=JSON.parse(t.data);0==e.errorCode?(uni.showToast({icon:"success",title:"图片上传成功!"}),i.imgPath=e.data):uni.showModal({title:"提示",content:"图片上传失败",showCancel:!1,success:function(t){}})},fail:function(){uni.hideLoading()},complete:function(){i.upload_field=""}})},saveData:function(){var t=this;if("edit"==this.editType){var i={id:t.info.id,name:t.info.name,stock:t.info.stock,subTitle:t.info.subTitle,price:t.info.price,qudou:t.info.qudou,money:t.info.money,status:t.status,detail:t.info.detail,mainImgUrl:t.imgTotalPath,subImgUrl:t.imgTotalPath1};console.log(i),uni.request({url:t.ApiGateWay+"/sale/shoppingProduct/UpdateProduct",data:i,method:"post",dataType:"json",header:{Authorization:t.token},success:function(){uni.hideLoading(),uni.navigateBack({delta:1})},fail:function(){uni.hideLoading()},complete:function(){uni.hideLoading()}})}if("add"==this.editType){i={name:t.info.name,stock:t.info.stock,subTitle:t.info.subTitle,price:t.info.price,qudou:t.info.qudou,money:t.info.money,status:t.status,detail:t.info.detail,mainImgUrl:t.imgTotalPath,subImgUrl:t.imgTotalPath1};console.log(i),uni.showLoading({title:"请稍候..."}),uni.request({url:t.ApiGateWay+"/sale/shoppingProduct/CreateProduct",data:i,method:"POST",dataType:"json",header:{Authorization:t.token},success:function(t){o.default.CheckData(t)?uni.showModal({title:"信息提示",content:"信息上传成功",showCancel:!1}):uni.showModal({title:"出错了",content:t.data.errorMessage,showCancel:!1})},fail:function(){uni.hideLoading()},complete:function(){uni.hideLoading()}})}},bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.info.sex=t.target.value},imgInfo:function(t){var i=this,e=[];this.imgList.forEach((function(t){e.push(t.path),i.list=e})),console.log(e),uni.previewImage({current:t,loop:!1,urls:e,indicator:"default"})},delImg:function(t){var i=this;uni.showModal({content:"确定删除这张吗",success:function(e){e.confirm?(i.imgList.splice(t,1),i.imgCount++):e.cancel}})},openCamera:function(){var t=this;uni.chooseImage({sourceType:["camera"],count:this.imgCount,sizeType:["compressed"],success:function(i){t.imgList=[].concat((0,n.default)(t.imgList),(0,n.default)(i.tempFiles)),t.imgCount=9-t.imgList.length}})}}};i.default=c},"49c7":function(t,i,e){"use strict";e.r(i);var a=e("247d"),n=e("17e6");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("8e1d");var s,d=e("f0c5"),c=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"4d0c1bd8",null,!1,a["a"],s);i["default"]=c.exports},6581:function(t,i,e){var a=e("f0d4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("f4c693a2",a,!0,{sourceMap:!1,shadowMode:!1})},"8e1d":function(t,i,e){"use strict";var a=e("6581"),n=e.n(a);n.a},f0d4:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,"uni-page-body[data-v-4d0c1bd8]{background:#f5f5f5}.title[data-v-4d0c1bd8]{height:%?128?%;background:#f04f43;opacity:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;line-height:%?128?%;padding-top:%?24?%;font-size:%?34?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}.left[data-v-4d0c1bd8]{width:%?24?%;height:%?48?%;margin-left:%?24?%}.content[data-v-4d0c1bd8]{background:#fff;opacity:1}.uni-textarea[data-v-4d0c1bd8]{background:#fff}.bulletin[data-v-4d0c1bd8]{height:%?568?%;background:#fff;opacity:1;margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.bulletin-font[data-v-4d0c1bd8]{font-size:%?30?%;font-family:PingFang SC;font-weight:400;color:#333;opacity:1;margin-top:%?26?%}.uni-photo[data-v-4d0c1bd8]{width:100%;height:%?244?%;background:#f5f5f5;opacity:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?8?%;text-align:center;margin-top:%?26?%}.perr[data-v-4d0c1bd8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:%?24?%;font-size:%?30?%;font-family:PingFang SC;font-weight:400;border-bottom:%?1?% solid #ebebeb;color:#333;opacity:1}.perrr[data-v-4d0c1bd8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;font-size:%?30?%;font-family:PingFang SC;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-weight:400;border-bottom:%?1?% solid #ebebeb;color:#333;opacity:1}.per[data-v-4d0c1bd8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?24?%;font-size:%?30?%;font-family:PingFang SC;font-weight:400;height:%?92?%;border-bottom:%?1?% solid #ebebeb;color:#333;opacity:1}.icons[data-v-4d0c1bd8]{width:%?13?%;height:%?20?%;margin-right:%?24?%;margin-left:%?24?%}.uni-per[data-v-4d0c1bd8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cricle[data-v-4d0c1bd8]{width:%?72?%;height:%?72?%;background:#fff;border-radius:50%;opacity:1;margin-bottom:%?8?%}.input[data-v-4d0c1bd8]{text-align:right}.uni-num[data-v-4d0c1bd8]{font-size:%?30?%;font-family:PingFang SC;font-weight:400;color:#999;opacity:1}.address[data-v-4d0c1bd8]{height:%?188?%;background:#fff;opacity:1;margin-top:%?20?%}.uni-address[data-v-4d0c1bd8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?24?%;font-size:%?30?%;font-family:PingFang SC;font-weight:400;height:%?94?%;border-bottom:%?1?% solid #ebebeb;color:#333;opacity:1}.bottoms[data-v-4d0c1bd8]{width:%?702?%;height:%?92?%;background:-webkit-linear-gradient(274deg,#fa5c6c,#fa5c6c 7%,#ff5737);background:linear-gradient(176deg,#fa5c6c,#fa5c6c 7%,#ff5737);opacity:1;border-radius:%?8?%;margin-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:%?24?%;line-height:%?92?%;text-align:center;font-size:%?34?%;font-family:PingFang SC;font-weight:400;color:#fff;opacity:1}.back[data-v-4d0c1bd8]{font-size:%?32?%;font-weight:500;line-height:%?48?%;color:#999}.back-hover[data-v-4d0c1bd8]{opacity:.4}.submit-box[data-v-4d0c1bd8]{position:fixed;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;width:%?750?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.submit-btn[data-v-4d0c1bd8]{margin-top:10px;display:inline-block;width:%?670?%;height:%?96?%;line-height:%?96?%;text-align:center;background-color:#6dddcb;opacity:1;border-radius:%?32?%;border-width:%?8?%;border-color:#fff;box-shadow:%?0?% %?8?% %?12?% rgba(0,0,0,.16);border-radius:%?56?%;font-size:%?39?%;font-weight:700;color:#fff}.submit-btn-txt[data-v-4d0c1bd8]{font-size:%?39?%;font-weight:700;line-height:%?47?%;color:#fff;opacity:1}.map-box[data-v-4d0c1bd8]{width:%?484?%;height:%?256?%;border-width:%?4?%;border-color:#fff;box-shadow:%?0?% %?0?% %?24?% rgba(0,0,0,.16);\n\t\t/* border-radius: 12rpx; */position:relative}.map[data-v-4d0c1bd8]{position:absolute;top:0;left:0;right:0;bottom:0;width:%?476?%;height:%?250?%}.map-img[data-v-4d0c1bd8]{position:absolute;top:%?90?%;left:%?156?%;width:%?230?%;height:%?68?%;background-color:rgba(51,51,51,.64);border-width:%?1?%;border-color:transparent;border-radius:34px;font-size:%?28?%;font-weight:700;line-height:%?66?%;color:#fff;text-align:center}.address-box[data-v-4d0c1bd8]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?670?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?15?% %?40?%;margin-bottom:10px}.label[data-v-4d0c1bd8]{font-size:%?36?%;font-weight:700;line-height:%?50?%;color:#222}.label-img[data-v-4d0c1bd8]{padding-left:%?40?%}.address-box-txt[data-v-4d0c1bd8]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.address-txt[data-v-4d0c1bd8]{width:%?484?%;height:%?90?%;font-size:%?32?%;font-weight:500;line-height:%?45?%;color:#333}.add-box[data-v-4d0c1bd8]{padding:%?15?% 0;-webkit-flex-wrap:wrap;flex-wrap:wrap}.add-img-box[data-v-4d0c1bd8]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?750?%;\n\t\t/*padding: 0 40rpx; */padding-left:%?10?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.add-img-item[data-v-4d0c1bd8]{\n\t\t/* width:210rpx;\n\t\t\theight:210rpx; */width:%?200?%;height:%?200?%;border-radius:%?24?%;position:relative;padding:%?9?% 0;margin-left:%?20?%}.add-img-camera[data-v-4d0c1bd8]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.add-img[data-v-4d0c1bd8]{width:%?200?%;height:%?200?%;border-radius:%?24?%}.add-img-del[data-v-4d0c1bd8]{position:absolute;width:%?40?%;height:%?40?%;right:%?8?%;top:%?17?%;\n\t\t/*background-color: rgba(238, 0, 0, 1); */border-radius:%?20?%}.address-time[data-v-4d0c1bd8]{width:%?484?%;height:%?88?%;background-color:#f5f5f5;opacity:1;border-radius:%?24?%;text-align:center;font-size:%?35?%;font-weight:500;color:#333}.line[data-v-4d0c1bd8]{width:%?750?%;height:1px;-webkit-transform:scaleY(.3);transform:scaleY(.3);background-color:rgba(0,0,0,.5)}body.?%PAGE?%[data-v-4d0c1bd8]{background:#f5f5f5}",""]),t.exports=i}}]);