<template>
	<view class="page">
		<view class="starorder">
			<!-- 编号-->
			<view class="uni-ordernum">
				<view style="color: #333333;font-size: 36rpx;font-weight: 600;">
					任务编号：{{info.taskNo}}
					<image v-if="info.taskRank==0" src="../../static/star.png" class="uni-task-a"></image>
					<image v-else src="../../static/star.png" class="uni-task-a"></image>
				</view>
				<view style="color: #FF9000;" v-if="info.state==0">未完成</view>
				<view style="color: #FF9000;" v-if="info.state==1">待审核</view>
				<view style="color: #FF9000;" v-if="info.state==2">完成</view>
			</view>
			<!-- 详情-->
			<view class="uni-order">
				<!-- 任务总金额 -->
				<view class="uni-order-f">
					<view>悬赏总额：<text class="uni-order-f-text" v-cloak>{{info.price*info.quota}}元</text></view>
				</view>
				<!-- 任务佣金：-->
				<view class="uni-order-f">
					<view>任务佣金：<text class="uni-order-f-text">{{info.price}}元</text></view>
				</view>
				<!-- 任务需求：-->
				<view class="uni-order-f">
					<view>任务需求：
						<!-- <text class="uni-order-f-text" v-if="info.taskRank==0">点赞</text>
						<text class="uni-order-f-text" v-else>点赞+关注</text> -->
						<text class="uni-order-f-text" >观看视屏15秒</text>
						
					</view>
				
				</view>
				<!-- 任务类别：-->
				<view class="uni-order-f">
					<view>任务类别：
						<text class="uni-order-f-text" >广告</text>
						
					</view>
				</view>
				<!-- 任务等级：-->
				<!-- <view class="uni-order-f" style="border-bottom: none;">
				<view>任务等级：</view>
				<view style="margin-right: 24rpx;" v-if="info.taskRank==0">普通</view>
				<view style="margin-right: 24rpx;" v-if="info.taskRank==1">巨星</view>

			</view> -->
				<!-- 时间--> 
				<!-- <view class="date"> -->
				<view class="uni-order-f">
					<view>领取时间：<text class="uni-order-f-text" >{{info.createTime}}</text></view>
				</view>
				<!-- 任务等级：-->
				<view class="uni-order-f" style="border-bottom: none;">
					<view>任务描述：<text class="uni-order-f-text" style="color:#797979">{{info.description==null||info.description==""?"暂无":info.description}}</text></view>
				</view>
				
				
				<view class="bulletin">
					<video class="uni-void-v"
					:src="info.url" 
					 @play="start" @pause="stop" >
						
					</video>
					<view class="uni-order-f">
						<view>倒计时：<text class="uni-order-f-text" >{{s}}</text></view>
					</view>
				</view>
				<!-- 任务截图-->
				<view class="bulletin">
					<view class="bulletin-font">任务截图：</view>
					<view class="uni-photo" @click="selectPic" v-if="imgPath == null || imgPath == ''">
						<!-- <image class="uni_imgse" src="../../static/jiedan.png" v-if="info.vehicelLicenseImg == null || info.vehicelLicenseImg == ''"></image>
					<image class="uni_imgse" :src="'https://carbanke.oss-cn-shanghai.aliyuncs.com' + info.vehicelLicenseImg" v-else></image> -->
						<image src="../../static/photos.png" style="width: 134rpx;height: 134rpx;"></image>
				
					</view>
					<image :src="imgSvr + imgPath" v-else class="uni-photo"></image>
				
				</view>
				
				<!-- 底部 -->
			</view>
		</view>
		<view class="btn" v-if="info.state == 0" @click="sendTask" style="background: rgb(240, 47, 48)">提交任务</view>
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				token: '',
				info: {},
				item: {},
				imgPath: "",
				imgSvr: "",
				s:15,
				ms:0,
				time:0,
				progress:false
			}		
		},
		onLoad: function(option) {
           
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			var orderNo = option.orderNo;
			//console.log(option);
			this.info.price=0;
			this.info.quota=0;
			this.getTask(orderNo);
			

		},

		onShow: function() {



		},
		onReady() {
			
			
			// var univideoprogress = document.getElementsByClassName("uni-video-progress-container");
			// univideoprogress[0].style.display = "none";
			// univideoprogress = document.getElementsByClassName("uni-video-duration");
			// univideoprogress[0].style.right="48px"
			// univideoprogress[0].style.position="absolute"
			// margin-left: 60%;
		},
		methods: {
			timeupdate_(e){
				if(this.s>0){
					this.s=15-Math.floor(e.detail.currentTime);				
				}else if(this.s<0){
					this.s=0;					
				}
			},
			timer() { //定义计时函数
				this.ms = this.ms + 50; //毫秒
				if (this.ms >= 1000) {
					this.ms = 0;
					this.s = this.s - 1; //秒
					if(this.s==0){
						this.stop()
					}
				}								
			},
			start() { //开始
				if(this.s>0)
				if(this.time==0){
					this.time = setInterval(this.timer, 50);
				}
			},
			
			stop() { //暂停
				clearInterval(this.time);
				this.time=0
			},
			
			getTask(orderNo) {
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})

				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetMyTaskDetails?orderNo=' + orderNo,
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						if (Helper.CheckData(res)) {
							var item = res.data.data;
							_this.imgPath = item.taskPic;
							_this.info = item;
							//console.log(item);
						} else {
							uni.showModal({
								title: "信息提示",
								content: res.data.errorMessage,
								showCancel: false,
								success: function(res) {
									if (res.confirm) {
										uni.switchTab({
											url: "/pages/mytask/mytask"
										})
									}
								}

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
			onCopyResult(type) {
				if (type === 'success') {
					uni.showToast({
						title: "复制成功",
						icon: "none"
					})
				} else {
					console.log(2)
				}
			},
			sendTask() {
				var _this = this;


				if (Helper.isEmpty(_this.imgPath)) {
					uni.showToast({
						title: "请上传图片",
						icon: "none"
					});
					return;
				}
				
				if(_this.s!=0){
					uni.showToast({
						title: "观看15秒以上才能提交任务",
						icon: "none"
					});
					return;
				}
				
				var params = {
					taskPic: _this.imgPath,
					orderNo: _this.info.orderNo
				}

				uni.showLoading({
					title: "请稍候..."
				})


				uni.request({
					url: _this.ApiGateWay + '/sale/Member/SubmitTask',
					data: params,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						if (Helper.CheckData(res)) {
							uni.showModal({
								title: "信息提示",
								content: "提交成功,请等待审核!",
								showCancel: false,
								success: function(res) {
									uni.navigateBack();
									// if (res.confirm) {
									// 	uni.switchTab({
									// 		url: "/pages/mytask/mytask"
									// 	})
									// }
								}
							})
						} else {
							uni.showModal({
								title: "信息提示",
								content: res.data.errorMessage,
								showCancel: false,
								success: function(res) {
									if (res.confirm) {
										uni.switchTab({
											url: "/pages/mytask/mytask"
										})
									}
								}

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
			openUrl() {
				var url = navigator.userAgent;
				if (url.indexOf("cdridge-android") > 0) {
					wv.goUrl(this.info.url)
				} else {
					location.href = this.info.url;
				}


			},
			copyData() {
				var _this = this;
				uni.setClipboardData({
					data: _this.info.url,
					success: function() {
						uni.showToast({
							title: "复制成功",
							icon: "none"
						})
					}
				});
			},
			selectPic1() {
				var _imgPath = '';
				var _this = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						//console.log(JSON.stringify(res.tempFilePaths));
						let _size = res.tempFiles[0].size;

						uni.getImageInfo({
							src: res.tempFilePaths[0],
							success: function(image) {
								_this.upload(image.path);
							}
						});
					}
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
			}
		}

	}
</script>

<style>
	page {
		background: #FFF;

	}
	.uni-void-v{
		width: 100%;
		height: 80%;
	}

	.starorder {
		background-color: #FFFFFF;
		margin: 20rpx;
		padding: 20rpx;
		box-shadow: 1px 1px 5px #CACACA;
	}

	.title {

		height: 128rpx;
		background: rgba(255, 255, 255, 1);
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
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.uni-task-a {

		width: 50rpx;
		height: 49rpx;
		vertical-align: middle;
	}

	.left {

		width: 24rpx;
		height: 48rpx;
		margin-left: 24rpx;

	}

	.leftline {

		width: 1rpx;
		height: 118rpx;
		background: rgba(235, 235, 235, 1);
		opacity: 1;
	}

	.uni-ordernum {

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex: 1;
		border-bottom: 1upx solid #F5F5F5;
		height: 88rpx;
		line-height: 88rpx;
		align-items: center;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;

		color: rgba(255, 144, 0, 1);
		opacity: 1;

	}

	.uni-order {

		display: flex;
		flex-direction: column;
		/* height: 376rpx; */
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 2rpx;

	}

	.uni-order-f {

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex: 1;
		/* padding-right: 24rpx; */
		/* padding-top: 26rpx; */
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 600;
		margin: 14rpx 0;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.uni-order-f-text {
		color: #FF5959;
		font-weight: 400;
	}

	.date {
		/* height: 188rpx; */
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;

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
		height: 380rpx;
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

	.bottom {

		width: 100%;
		height: 118rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;
		bottom: 0;
		position: fixed;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.openvideo {

		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		margin-left: 120rpx;
		margin-right: 118rpx;


	}

	.btn {
		flex: 1;
		/* width: 162px; */
		height: 46px;
		/* background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%); */
		opacity: 1;
		border-radius: 4px;
		font-size: 17px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		line-height: 46px;
	}
</style>
