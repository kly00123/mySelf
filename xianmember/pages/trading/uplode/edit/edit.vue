<template>
	<view class="page">
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">上传商品</div>
				</div>
				<!---->
			</div>
		</uni-page-head>
		<view class="content">
			<view class="per">
				<view>商品名称</view>
				<view class="uni-per">
					<input placeholder="请输入商品名称" v-model="info.name" class="input" />
					<image src="../../../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<view class="per">
				<view>商品副标题</view>
				<view class="uni-per">
					<input placeholder="请输入商品副标题" v-model="info.subTitle" class="input" />
					<image src="../../../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<!-- 手机号 -->
			<view class="per">
				<view>参考价</view>
				<view class="uni-per">
					<input placeholder="请输入参考价" v-model="info.price" class="input" />
					<image src="../../../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<view class="per">
				<view>渠豆</view>
				<view class="uni-per">
					<input placeholder="请输入渠豆" v-model="info.qudou" class="input" />
					<image src="../../../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<view class="per">
				<view>需要支付余额</view>
				<view class="uni-per">
					<input placeholder="请输入支付余额" v-model="info.money" class="input" />
					<image src="../../../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<view class="per">
				<view>库存</view>
				<view class="uni-per">
					<input placeholder="请输入库存" v-model="info.stock" class="input" />
					<image src="../../../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<view class="perr">
				<view>商品详情</view>
				<view class="uni-textarea">
					<textarea placeholder="请输入商品详情" v-model="info.detail" />
					</view>
				</view>
				<view class="perr">
					<view>是否上架</view>
			<radio-group class="uni-list" @change="radioChange">
				<view class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
					<view>
						<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
					</view>
					<label class="label-2-text" :for="item.name">
						<text>{{item.value}}</text>
					</label>
				</view>
			</radio-group>
					</view>
			<view>
				<view style="margin-left:28rpx;">商品轮播图</view>
	<view>
<img-uploadd :imgArr="imgArrayy" imgCount="4" ref="imgUploadd"></img-uploadd>
<button type="default" @click="submit">提交</button>
</view>
			</view>
			<view>
							<view style="margin-left:28rpx;">商品详情图</view>
				<view>
			<img-upload :imgArr="imgArray" imgCount="3" ref="imgUpload" ></img-upload>
			<button type="default" @click="submit1">提交</button>
			</view>
						</view>
		</view>
		<!-- 底部 -->
		<view class="bottoms" @click="saveData">
			保存
		</view>
	</view>
</template>
<script>
	import Helper from '@/function.js';
	import imgUpload from '@/components/poiuy-uImgUpload/imgUpload.vue';
	import imgUploadd from '@/components/poiuy-uImgUploadd/imgUpload.vue';
	export default { 
		components: {
		    imgUpload,
			imgUploadd
		},
		data() {
			return {
				radioItems: [{
						name: '0',
						value: '下架'
					},
					{
						name: '1',
						value: '上架',
						checked: 'true'
					}
				],
				imgTotalPath:[],
				imgTotalPath1:[],
				imgArray:[],
				status:'1',
				imgArrayy:[],
				imageList: [],
				category: 'image',
				imgSvr: "",
				timetext: '成都市',
				token: "",
				info: {},
				imgList: [],
				cloudimgList: [],
				imgCount: 4,//最多支持9张上传，可以修改
				array: ['男', '女'],
				list:[]
			}
		},
		onLoad: function(e) {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			this.editType = e.type;
			if(e.type=='edit'){
				uni.getStorage({
					key:'addresss',
					success: (e) => {
						//console.log(e);
					    this.info.id = e.data.id;
						this.info.money = e.data.money;
						this.info.name = e.data.name;
					    this.info.price = e.data.price;
						this.info.status = e.data.status;
						this.info.stock = e.data.stock;
						this.info.detail = e.data.detail;
						this.info.qudou = e.data.qudou;
						this.info.subTitle=e.data.subTitle;
						this.info.mainImgs=e.data.mainImgs;
						this.info.subImgs=e.data.subImgs;
						// this.region = e.data.address.region;
					}
				})
			}
			this.getImg(this.info.id);
		},

		methods: {
			bindTextAreaBlur: function (e) {
				//console.log(e.detail.value)
			},
			region_change : function(e){
			    //console.log(e)
			    this.timetext = e.detail.value;
			},
			radioChange: function(e) {
				var _this = this;
				var checked = e.detail.value;
				this.status = Number(checked);
				//console.log(this.status);
			
			},
			getImg(id) {
				var _this = this;
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/shoppingProduct/GetProductById?id=" + this.info.id,
					data: '',
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						//console.log(res);
						if (Helper.CheckData(res)) {

							console.log(res);
						}

					},
					complete() {
						uni.hideLoading();
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
					}
				});
			},
			submit(){
			         //开始上传图片
					 var _this=this;
					 var arr=[];
			       this.$refs.imgUploadd.upload(res=>{
                        for(var i=0;i<res.length;i++){
							arr.push(res[i].data)
						}
						this.imgTotalPath=arr;
						console.log('1111');
						console.log(this.imgTotalPath);
			           if(res.code==0){
			                //0为正常返回，将回调的线上图片数组 赋值给需要提交的表单里
			                //res.urlArray 线上路径图片数组
			                //TODO
			            }else{
			                //用户没有上传图片的返回 code码为400
			            }
			       });
			},
			submit1(){
			         //开始上传图片
					 var _this=this;
					 var arr=[];
			       this.$refs.imgUpload.upload(res=>{
			            for(var i=0;i<res.length;i++){
							arr.push(res[i].data)
						}
						this.imgTotalPath1=arr;
						console.log('1111');
						console.log(this.imgTotalPath1);
			           if(res.code==0){
			                //0为正常返回，将回调的线上图片数组 赋值给需要提交的表单里
			                //res.urlArray 线上路径图片数组
			                //TODO
			            }else{
			                //用户没有上传图片的返回 code码为400
			            }
			       });
			},
			goIndex(){
uni.navigateBack({
    delta: 1
});
			},
			selectPic() {
				var _this = this
				var imgPath = "";
			
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(res) {
			
						imgPath = res.tempFilePaths.toString()
						uni.getImageInfo({
							src: imgPath,
							success: function(image) {
								let canvasWidth = image.width //图片原始长宽
								let canvasHeight = image.height;
								let base = canvasWidth / canvasHeight;
								//设置画布最大宽度
								if (canvasWidth > 300) {
									canvasWidth = 300;
									canvasHeight = Math.floor(canvasWidth / base);
								}
								let img = new Image();
								img.src = imgPath; // 要压缩的图片  
								let canvas = document.createElement('canvas');
								let ctx = canvas.getContext('2d');
								canvas.width = canvasWidth;
								canvas.height = canvasHeight;
								// 清除画布
								ctx.clearRect(0, 0, canvasWidth, canvasHeight);
								//  将图片画到canvas上面   使用Canvas压缩  
								ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
								// canvas.toDataURL 返回的是一串Base64编码的URL
								// 指定格式 PNG  
								imgPath = canvas.toDataURL("image/jpeg");
								//console.log(imgPath)
								_this.upload(imgPath);
							}
						});
					}
			
				});
			
			},
			selectPic1() {
				var _this = this
				var imgPath1 = "";
			
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(res) {
			
						imgPath1 = res.tempFilePaths.toString()
						uni.getImageInfo({
							src: imgPath1,
							success: function(image) {
								let canvasWidth = image.width //图片原始长宽
								let canvasHeight = image.height;
								let base = canvasWidth / canvasHeight;
								//设置画布最大宽度
								if (canvasWidth > 300) {
									canvasWidth = 300;
									canvasHeight = Math.floor(canvasWidth / base);
								}
								let img = new Image();
								img.src = imgPath1; // 要压缩的图片  
								let canvas = document.createElement('canvas');
								let ctx = canvas.getContext('2d');
								canvas.width = canvasWidth;
								canvas.height = canvasHeight;
								// 清除画布
								ctx.clearRect(0, 0, canvasWidth, canvasHeight);
								//  将图片画到canvas上面   使用Canvas压缩  
								ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
								// canvas.toDataURL 返回的是一串Base64编码的URL
								// 指定格式 PNG  
								imgPath1 = canvas.toDataURL("image/jpeg");
								//console.log(imgPath)
								_this.upload(imgPath1);
							}
						});
					}
			
				});
			
			},
			selectPic2() {
				var _this = this
				var imgPath2 = "";
			
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(res) {
			
						imgPath2 = res.tempFilePaths.toString()
						uni.getImageInfo({
							src: imgPath2,
							success: function(image) {
								let canvasWidth = image.width //图片原始长宽
								let canvasHeight = image.height;
								let base = canvasWidth / canvasHeight;
								//设置画布最大宽度
								if (canvasWidth > 300) {
									canvasWidth = 300;
									canvasHeight = Math.floor(canvasWidth / base);
								}
								let img = new Image();
								img.src = imgPath2; // 要压缩的图片  
								let canvas = document.createElement('canvas');
								let ctx = canvas.getContext('2d');
								canvas.width = canvasWidth;
								canvas.height = canvasHeight;
								// 清除画布
								ctx.clearRect(0, 0, canvasWidth, canvasHeight);
								//  将图片画到canvas上面   使用Canvas压缩  
								ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
								// canvas.toDataURL 返回的是一串Base64编码的URL
								// 指定格式 PNG  
								imgPath = canvas.toDataURL("image/jpeg");
								//console.log(imgPath)
								_this.upload(imgPath2);
							}
						});
					}
			
				});
			
			},
			/* 上传图片 */
			upload(imgurl) {
				//http://localhost:25630
				uni.showLoading({
					title: '请稍候...'
				});
				var _this = this;
			
				uni.uploadFile({
					url: _this.ApiGateWay + '/sale/image/uploadByFile', //仅为示例，非真实的接口地址
					filePath: imgurl, //上传图片的路径
					name: 'file', //对应的key
					formData: {
						path: '/sale/newtask/'
					},
					success: res => {
						uni.hideLoading();
						let _res = JSON.parse(res.data);
						if (_res.errorCode == 0) {
							uni.showToast({
								icon: 'success',
								title: '图片上传成功!'
							});
			
							_this.imgPath = _res.data;
			
							//
						} else {
			
							uni.showModal({
								title: '提示',
								content: '图片上传失败',
								showCancel: false,
								success: function(res) {}
							});
						}
					},
					fail() {
						uni.hideLoading();
					},
					complete() {
						_this.upload_field = '';
					}
				});
			},
			saveData() {
				var _this = this;	
				if(this.editType=='edit'){
					 var parmas={
						id:_this.info.id,
					 	name:_this.info.name,
					 	stock:_this.info.stock,
					 	subTitle:_this.info.subTitle,
					 	price:_this.info.price,
					 	qudou:_this.info.qudou,
					 	money:_this.info.money,
					 	status:_this.status,
					 	detail:_this.info.detail,
					 	mainImgUrl:_this.imgTotalPath,
					 	subImgUrl:_this.imgTotalPath1
					 }
					 console.log(parmas)
				 	uni.request({
				 		url: _this.ApiGateWay + '/sale/shoppingProduct/UpdateProduct',
				 		data: parmas,
				 		method: 'post',
				 		dataType: 'json',
				 		header: {
				 			Authorization: _this.token
				 		},
				 		success() {
				 			uni.hideLoading();
				 		uni.navigateBack({
				 		    delta: 1
				 		});
				 		},
				 		fail: function() {
				 			uni.hideLoading();
				 		},
				 		complete: function() {
				 			uni.hideLoading();
				 		}			
				 	})
				}
				if (this.editType=='add'){
				var parmas={
					name:_this.info.name,
					stock:_this.info.stock,
					subTitle:_this.info.subTitle,
					price:_this.info.price,
					qudou:_this.info.qudou,
					money:_this.info.money,
					status:_this.status,
					detail:_this.info.detail,
					mainImgUrl:_this.imgTotalPath,
					subImgUrl:_this.imgTotalPath1
				}
				console.log(parmas);
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/shoppingProduct/CreateProduct',
					data: parmas,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						// console.log(res);
						if (Helper.CheckData(res)) {
							uni.showModal({
								title: "信息提示",
								content: "信息上传成功",
								showCancel: false
							})
						} else {
							// console.log('111');
							uni.showModal({
								title: "出错了",
								content: res.data.errorMessage,
								showCancel: false
							})
						}
					},
					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
						uni.hideLoading();
					}
				})
				}
			},
			/* 性别选择 */
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				this.info.sex = e.target.value;
			},		
				imgInfo(i) {
					var _this=this;
					let mainImgUrl = [];
					this.imgList.forEach(img => {
						mainImgUrl.push(img.path);	
						this.list=mainImgUrl;
						// _this.upload(mainImgUrl)
					});
					console.log(mainImgUrl);
					//显示图片
					uni.previewImage({
						current: i,
						loop: false,
						urls: mainImgUrl,
						indicator: 'default'
					});
				},
				// upload(mainImgUrl) {
				// 	//http://localhost:25630
				// 	uni.showLoading({
				// 		title: '请稍候...'
				// 	});
				// 	var _this = this;
				// 	uni.uploadFile({
				// 		url: _this.ApiGateWay + '/sale/shoppingProduct/CreateProduct', //仅为示例，非真实的接口地址
				// 		filePath: mainImgUrl, //上传图片的路径
				// 		name: 'file', //对应的key
				// 		success: res => {
				// 			let _res = JSON.parse(res.data);
				// 			if (_res.errorCode == 0) {
				// 				uni.showToast({
				// 					icon: 'success',
				// 					title: '图片上传成功!'
				// 				});
				// 				_this.info.avatar = _res.data;
				
				// 				//
				// 			} else {
				// 				uni.hideLoading();
				// 				uni.showModal({
				// 					title: '提示',
				// 					content: '图片上传失败',
				// 					showCancel: false,
				// 					success: function(res) {}
				// 				});
				// 			}
				// 		},
				// 		complete() {
				// 			_this.upload_field = '';
				// 		}
				// 	});
				// },
				delImg(i) {
					uni.showModal({
						content: '确定删除这张吗',
						success: res => {
							if (res.confirm) {
								this.imgList.splice(i, 1);
								this.imgCount++;
							} else if (res.cancel) {
								
							}
						}
					});
				},
				openCamera() {
					uni.chooseImage({
						sourceType:['camera'],
						count: this.imgCount,
						sizeType: ['compressed'],
						success: e => {
							this.imgList = [...this.imgList, ...e.tempFiles];
							this.imgCount = 9 - this.imgList.length;
							// console.log('imgCount', this.imgCount);
						}
					});
				},
		}

	}
</script>

<style>
	page {

		background: #F5F5F5;
	}

	.title {

		height: 128rpx;
		background: #F04F43;
		opacity: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		line-height: 128rpx;
		padding-top: 24rpx;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		opacity: 1;

	}

	.left {

		width: 24rpx;
		height: 48rpx;
		margin-left: 24rpx;

	}

	.content {
		background: rgba(255, 255, 255, 1);
		opacity: 1;
	}
.uni-textarea{
	
	background:#FFF;
}
	.bulletin {
		height: 568rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;

	}

	.bulletin-font {

		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;

		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-top: 26rpx;
	}

	.uni-photo {
		width: 100%;
		height: 244rpx;
		background: rgba(245, 245, 245, 1);
		opacity: 1;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-radius: 8rpx;
		text-align: center;
		margin-top: 26rpx;
	}
.perr{
	display: flex;
	flex-direction: column;
	margin-left: 24rpx;
	
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: 400;
	border-bottom: 1upx solid #EBEBEB;
	color: rgba(51, 51, 51, 1);
	opacity: 1;
}
.perrr{
	display: flex;
	flex-direction: row;
	font-size: 30rpx;
	font-family: PingFang SC;
	justify-content: space-between;
	font-weight: 400;
	border-bottom: 1upx solid #EBEBEB;
	color: rgba(51, 51, 51, 1);
	opacity: 1;
}
	.per {

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-left: 24rpx;

		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		height: 92rpx;
		border-bottom: 1upx solid #EBEBEB;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.icons {

		width: 13rpx;
		height: 20rpx;
		margin-right: 24rpx;
		margin-left: 24rpx;
	}

	.uni-per {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.cricle {

		width: 72rpx;
		height: 72rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 50%;
		opacity: 1;
		margin-bottom: 8rpx;
	}

	.input {

		text-align: right;

	}

	.uni-num {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
	}

	.address {



		height: 188rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;
	}

	.uni-address {

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-left: 24rpx;

		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		height: 94rpx;
		border-bottom: 1upx solid #EBEBEB;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.bottoms {

		width: 702rpx;
		height: 92rpx;
		background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;
		margin-top: 40rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-left: 24rpx;
		line-height: 92rpx;
		text-align: center;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;

		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}
	.back {
		font-size: 32rpx;
		font-weight: 500;
		line-height: 48rpx;
		color: rgba(153, 153, 153, 1);
	}
	.back-hover {
		opacity: 0.4;
	}
	.submit-box {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		width: 750rpx;
		justify-content: center;
	}
	.submit-btn {
		margin-top: 10px;
		display: inline-block;
		width: 670rpx;
		height: 96rpx;
		line-height: 96rpx;
		text-align: center;
		background-color: rgba(109, 221, 203, 1);
		opacity: 1;
		border-radius: 32rpx;
		border-width: 8rpx;
		border-color: rgba(255, 255, 255, 1);
		box-shadow: 0rpx 8rpx 12rpx rgba(0, 0, 0, 0.16);
		border-radius: 56rpx;
		font-size: 39rpx;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
	}
	.submit-btn-txt {
		font-size: 39rpx;
		font-weight: bold;
		line-height: 47rpx;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}
	.map-box {
		width: 484rpx;
		height: 256rpx;
		border-width: 4rpx;
		border-color: rgba(255, 255, 255, 1);
		box-shadow: 0rpx 0rpx 24rpx rgba(0, 0, 0, 0.16);
		/* border-radius: 12rpx; */
		position: relative;
	}
	.map {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 476rpx;
		height: 250rpx;
	}
	.map-img {
		position: absolute;
		top: 90rpx;
		left: 156rpx;
		width: 230rpx;
		height: 68rpx;
		background-color: rgba(51, 51, 51, 0.64);
		border-width: 1rpx;
		border-color: rgba(0, 0, 0, 0);
		border-radius: 34px;
	
		font-size: 28rpx;
		font-weight: bold;
		line-height: 66rpx;
		color: rgba(255, 255, 255, 1);
		text-align: center;
	}
	.address-box {
		display: flex;
		width: 670rpx;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 15rpx 40rpx;
		margin-bottom: 10px;
	}
	.label {
		font-size: 36rpx;
		font-weight: bold;
		line-height: 50rpx;
		color: #222222;
	}
	.label-img {
		padding-left: 40rpx;
	}
	.address-box-txt {
		align-items: flex-start;
	}
	.address-txt {
		width: 484rpx;
		height: 90rpx;
		font-size: 32rpx;
		font-weight: 500;
		line-height: 45rpx;
		color: rgba(51, 51, 51, 1);
	}
	.add-box {
		padding: 15rpx 0;
		flex-wrap: wrap;
	}
	.add-img-box {
		display: flex;
		width: 750rpx;
		//padding: 0 40rpx;
		padding-left: 10rpx;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.add-img-item {
		/* width:210rpx;
			height:210rpx; */
		width: 200rpx;
		height: 200rpx;
		border-radius: 24rpx;
		position: relative;
		padding: 9rpx 0;
		margin-left: 20rpx;
	}
	.add-img-camera {
		flex: 1;
	}
	.add-img {
		width: 200rpx;
		height: 200rpx;
		border-radius: 24rpx;
	}
	.add-img-del {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		right: 8rpx;
		top: 17rpx;
		//background-color: rgba(238, 0, 0, 1);
		border-radius: 20rpx;
	}
	.address-time {
		width: 484rpx;
		height: 88rpx;
		background-color: rgba(245, 245, 245, 1);
		opacity: 1;
		border-radius: 24rpx;
		text-align: center;
	
		font-size: 35rpx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	.line{
		width: 750rpx;
		height: 1px;
		transform: scaleY(0.3);
		background-color: rgba(0,0,0,0.5);
	}
</style>
