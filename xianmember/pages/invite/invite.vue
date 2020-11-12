<template>
	<view class="page">
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">分享</div>
				</div>
			</div>
		</uni-page-head>
		<image :src="shareUrl" :style="'height:'+windowHeight + 'px;'+'width:'+windowWidth + 'px;'" style="margin-top: 20rpx;"
		 @error="getError"></image>
		<!-- 		<view class="title" @click="bank()">
			<image src="../../static/leftjt.png" class="left"></image>
			<view style="margin-left: 16rpx;">邀请好友</view>
		</view> -->
		<!-- 		<view class="content">
			<view class="contentfont">加入我们，开启财富之旅！</view>
			<image :src="shareUrl" class="codes"></image>
			<view class="btn">分享</view>
		</view> -->
		<view style="display: flex; flex-direction: row;">
			<view class="cbtn" style="margin-top: 20px; background-color: #FFFFFF;" @click="rePic">重新生成</view>
			<view class="btn" style="margin-top: 20px;" @click="savePic">保存图片</view>

		</view>

	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {

			return {
				token: "",
				shareUrl: "",
				windowWidth: 0,
				windowHeight: 0,
			}


		},
		onLoad: function() {
			var {
				windowWidth,
				windowHeight
			} = uni.getSystemInfoSync();

			this.windowHeight = windowHeight * 0.76;
			this.windowWidth = windowWidth - (100 * 0.64);

			console.log(windowWidth, windowHeight)
			this.token = uni.getStorageSync('token');
			this.getShareUrl();

		},
		methods: {
			getError(e) {
				console.log(e)
			},
			goIndex() {
				uni.switchTab({
					url: '/pages/my/my'
				});
			},
			bank() {
				uni.navigateBack({
					delta: 1
				})
			},
			savePic() {
				var _this = this;
				// uni.showLoading({
				// 	title:"请稍候..."
				// });
				// uni.downloadFile({
				// 	url: _this.shareUrl,
				// 	success: (res) => {
				// 		console.log(res)
				// 		if (res.statusCode === 200) {
				// 			uni.saveImageToPhotosAlbum({
				// 				filePath: res.tempFilePath,
				// 				success: function() {
				// 					uni.showToast({
				// 						title: "保存成功",
				// 						icon: "none"
				// 					});
				// 				},
				// 				fail: function() {
				// 					uni.showToast({
				// 						title: "保存失败，请稍后重试",
				// 						icon: "none"
				// 					});
				// 				}
				// 			});
				// 		}
				// 	},
				// 	complete:function(){
				// 		uni.hideLoading()
				// 	}
				// })
				//#ifdef H5
				var url = navigator.userAgent;
				console.log(url)
				if (url.indexOf("cdridge-android") > 0) {
					wv.savePic(this.shareUrl)
				} else {				
					uni.showModal({
						content:"点击下载后将会保存到本地相册",
						showCancel:false
					})
					location.href = this.ImgServer = this.shareUrl;
				}
				//#endif


			},

			rePic() {
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetReShareUrl',
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);

						if (Helper.CheckData(res)) {
							_this.shareUrl = _this.ImgServer + res.data.data;
							console.log("11111");
							console.log(_this.shareUrl);
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

			getShareUrl() {
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetShareUrl',
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);

						if (Helper.CheckData(res)) {
							_this.shareUrl = _this.ImgServer + res.data.data;
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


		}

	}
</script>

<style>
	page {

		/* background: linear-gradient(95deg, rgba(250, 81, 103, 1) 0%, rgba(244, 93, 44, 1) 100%); */
		opacity: 1;

	}

	.page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.btn {
		/* position: fixed;
		bottom: 0;
		left:0;
		right: 0;
		height: 40px;
		background-color: #FFFFFF; */
		/* width:70%; */
		padding-left: 10px;
		padding-right: 10px;
		margin: 20px;
		height: 46px;
		background: #f02f30;
		opacity: 1;
		border-radius: 4px;
		font-size: 17px;
		font-family: PingFang SC;
		font-weight: 400;
		line-height: 46px;
		color: rgba(255, 255, 255, 1);
		text-align: center;
	}


	.cbtn {
		/* position: fixed;
		bottom: 0;
		left:0;
		right: 0;
		height: 40px;
		background-color: #FFFFFF; */
		/* width:70%; */
		padding-left: 10px;
		padding-right: 10px;
		margin: 20px;
		height: 46px;
		border: 1px solid #FF5254;
		color: #ff5254;
		opacity: 1;
		border-radius: 4px;
		font-size: 17px;
		font-family: PingFang SC;
		font-weight: 400;
		line-height: 46px;
		/* color:rgba(255,255,255,1); */
		text-align: center;
	}
</style>
