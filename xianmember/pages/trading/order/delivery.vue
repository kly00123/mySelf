<template>
	<view class="page">
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">发货信息</div>
				</div>
				<!---->
			</div>
		</uni-page-head>
		<view class="content">
			<!-- 手机号 -->
			<view class="per">
				<view>用户名称</view>
				<view class="uni-per">
					<view class="uni-num" style="margin-left:280rpx;">{{info.userName}}</view>
					<view class="icons"></view>
				</view>
			</view>
			<view class="per">
				<view>联系方式</view>
				<view class="uni-per">
					<view class="uni-num" style="margin-left:280rpx;">{{info.userPhone}}</view>
					<view class="icons"></view>
				</view>
			</view>
			<view class="per">
				<view>详细地址</view>
				<view class="uni-per">
					<view class="uni-num" style="margin-left:280rpx;">{{info.address}}{{info.fullAddress}}</view>
					<view class="icons"></view>
				</view>
			</view>
			<view class="per">
				<view>商品数量</view>
				<view class="uni-per">
					<view class="uni-num" style="margin-left:280rpx;">{{info.num}}</view>
					<view class="icons"></view>
				</view>
			</view>
			<view class="per">
				<view>快递公司</view>
				<view class="uni-per">
					<input placeholder="请输入快递公司" v-model="info.courier" class="input" />
					<image src="../../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<view class="per">
				<view>快递单号</view>
				<view class="uni-per">
					<input placeholder="请输入快递单号" v-model="info.courierNumber" class="input" />
					<image src="../../../static/icons.png" class="icons"></image>
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
	export default {
		data() {
			return {
				imageList: [],
				orderId: '',
				category: 'image',
				imgSvr: "",
				timetext: '成都市',
				token: "",
				info: {},
				array: ['男', '女'],
				pickerName: {}
			}
		},
		onLoad: function(options) {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			//console.log(options);
			this.orderId = options.id;
			this.getInfo(this.orderId);
		},
		methods: {
			goIndex() {
				uni.navigateTo({
					url: '/pages/trading/order/totalOrder'
				})
			},
			getInfo(id) {
				var _this = this;
				console.log(_this.orderId)
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/shopping/GetshoppingOrderEntityById?id='+_this.orderId,
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						if (Helper.CheckData(res)) {
							_this.info = res.data.data;
							console.log(11111111);
							console.log(res);

						} else {

						}
					},
					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
						uni.hideLoading();
					}
				})
			},
			bindTextAreaBlur: function(e) {
				console.log(e.detail.value)
			},
			region_change: function(e) {
				console.log(e)
				this.timetext = e.detail.value;
			},
			onPickerChange(e) {
				console.log(e.detail.value);
				this.pickerName = this.pickerList[e.detail.value];
			},
			saveData() {
				console.log(this.orderId)
				var _this = this;
				var parmas = {
					orderId: this.orderId,
					courier: _this.info.courier,
					courierNumber: _this.info.courierNumber
				}
				console.log(parmas)
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/shopping/DeliverShoppingOrder?orderId=' + this.orderId + "&courier=" + _this.info
						.courier + "&courierNumber=" + _this.info.courierNumber,
					data: '',
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						//console.log(_this.info);
						if (Helper.CheckData(res)) {
							uni.showModal({
								content: "信息上传成功！",
								showCancel: false
							})
						} else {
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
			},
			/* 性别选择 */
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				this.info.sex = e.target.value;
			},
			thisValue() {
				console.log(this.value);
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
								if (canvasWidth > 500) {
									canvasWidth = 500;
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
								imgPath = canvas.toDataURL("image/png");
								console.log(imgPath)
								_this.upload(imgPath);
							}
						});
					},

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
						path: '/user/avatar/'
					},
					success: res => {
						let _res = JSON.parse(res.data);
						if (_res.errorCode == 0) {
							uni.showToast({
								icon: 'success',
								title: '图片上传成功!'
							});

							_this.info.avatar = _res.data;

							//
						} else {
							uni.hideLoading();
							uni.showModal({
								title: '提示',
								content: '图片上传失败',
								showCancel: false,
								success: function(res) {}
							});
						}
					},
					complete() {
						_this.upload_field = '';
					}
				});
			}
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

	.uni-textarea {

		background: #FFF;
	}

	.perr {
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

	.uni-column {
		align-items: center;
		height: 100rpx;
		display: flex;
		font-family: PingFang SC;
		margin-left: 24rpx;
		font-size: 30rpx;
		border-bottom: 1upx solid #EBEBEB;
	}

	.title_1 {
		padding-top: 20rpx;
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

	.per_1 {
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
		margin-right: 24rpx;
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
</style>
