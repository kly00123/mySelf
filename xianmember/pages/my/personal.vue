<template>
	<view class="page">
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">个人中心</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
		<view class="content">
			<view class="per">
				<view>头像</view>
				<view class="uni-per" @click="selectPic">
					<view class="cricle">
						<image src="../../static/logo.png" v-if="info.avatar==null" style="width: 72rpx;height: 72rpx;"></image>
						<image :src="imgSvr+info.avatar" v-else style="width: 72rpx;height: 72rpx;"></image>
					</view>
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<!-- 姓名 -->
			<view class="per">
				<view>姓名</view>
				<view class="uni-per">
					<input placeholder="请输入姓名" v-model="info.userName" class="input" />
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<view class="per">
				<view>微信号</view>
				<view class="uni-per">
					<input placeholder="请输入微信号" v-model="info.wechatCode" class="input" />
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<!-- 手机号 -->
			<view class="per">
				<view>手机号</view>
				<view class="uni-per">
					<view class="uni-num">{{info.userPhone}}</view>
					<view class="icons"></view>
				</view>
			</view>
			
			
			<!-- 性别 -->
			<view class="per" style="border-bottom: none;">
				<view>性别</view>
				<view class="uni-per">
					<view class="uni-flex uni-row input-line">
						<picker @change="bindPickerChange" :value="index" :range="array" style="flex: 1;">
							<view style="color: #999999;">{{ array[info.sex] }}</view>
						</picker>
					</view>
					<image src="../../static/icons.png" class="icons">
					</image>
				</view>
			</view>

		</view>

		<!-- 底部 -->
		<view class="bottoms" @click="saveData">
			保存
		</view>

		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>


</template>

<script>
	import Helper from '@/function.js';
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '../../common/city.data.js';
	export default {
		components: {
			mpvueCityPicker
		},
		data() {

			return {
				imgSvr: "",
				token: "",
				info: {},
				array: ['男', '女'],

			}
		},
		onLoad: function() {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			this.getInfo()
		},

		methods: {
			getInfo() {
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetInfo',
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);

						if (Helper.CheckData(res)) {
							if (Helper.isEmpty(res.data.data.sex))
							{
								res.data.data.sex = 0;
							}
							
							if (Helper.isEmpty(res.data.data.userName))
							{
								res.data.data.userName = "";
							}
							
							if (Helper.isEmpty(res.data.data.wechatCode))
							{
								res.data.data.wechatCode = "";
							}
							
							_this.info = res.data.data;
							
							
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
			saveData() {
				var _this = this;
				
				if (Helper.isEmpty(this.info.avatar))
				{
					uni.showToast({
						title:"请上传头像",
						icon:"none"
					})
					
					return;
				}
				
				if (Helper.isEmpty(this.info.userName))
				{
					uni.showToast({
						title:"请输入姓名",
						icon:"none"
					})
					
					return;
				}
				
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/EditMemberInfo',
					data: _this.info,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);

						if (Helper.CheckData(res)) {
							uni.showModal({
								title: "信息提示",
								content: "信息修改成功",
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
		margin-top:-80rpx;
		height: 376rpx;
		background: rgba(255, 255, 255, 1);
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
		margin-top: 140rpx;
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