<template>
	<view class="page">
		<!-- 顶部 -->
<image src="../../static/zhuce.png" style="width: 100%;height: 100%;position: absolute;z-index: 0;"></image>
		<!-- <image src="../../static/top.png" style="width: 100%;height: 496upx;position: absolute;z-index: 0;"></image> -->
		<view style="position: relative;display: flex;justify-content: center;align-items: center;flex-direction: column;">
			<!-- <view style="width:150upx;height:150upx;margin-top: 128upx; background-color: #FFFFFF; display: flex; border-radius: 50%; justify-content: center;align-items: center;">
				<image src="../../static/logo.png" style="width:80upx;height:80upx"></image>
			</view> -->
			<image src="../../static/qzlogo.png" style="width: 120px;height: 120px;margin-top:116rpx;"></image>
			
			<view class="fonts" style="padding-top: 13px;padding-bottom:40px">注册登录</view>
		</view>
		<!-- 中间输入 -->
		<view class="contents">
			<view class="content" >				
				<image class="return_c" src="../../static/my_g.png"></image>
				<input type="text" @blur="logisOk" v-model="info.userPhone" placeholder="请输入手机号" style="color:aliceblue" maxlength="11" @input="getInptValue" />
			</view>
			<!-- 密码 -->
			<view class="content">
				<image class="return_c" src="../../static/pwd.png"></image>
				<input type="text" v-model="info.userPass" placeholder="请输入密码" :password="isShowPass" style="color:aliceblue" @input="getInptValue" />
<!-- 				<image src="../../../static/colseeye.png" style="width: 50upx;height: 33upx;" v-show="isShowPass" @click="showPass"></image>
				<image src="../../static/display_v.png" style="width: 50upx;height: 33upx;" v-show="!isShowPass" @click="showPass"></image> -->
			</view>
			<!-- 登录 -->
			<view class="btn" @click="goIndex" :style="{backgroundColor:isok}" style="letter-spacing:18px;">登录</view>
		
			<!-- 忘记密码 -->
			<view style="display: flex; flex-direction: row;justify-content: space-between;">
			<view class="forgetpwd" @click="goForetpwd()">忘记密码?</view>
			<view style="margin-top: 30rpx;margin-bottom: 40upx;" @click="goApp" v-if="!isApp">
				<view class="btn" style="width: 140px; margin: auto; height: 30px; line-height: 30px; font-size: 14px;">下载安卓APP</view>
			</view>
</view>
		</view>
	</view>
</template>

<script>
	import Helper from "@/function.js"
	import Md5Unit from '@/pages/utils/md5.js'

	export default {
		data() {
			return {
				isShowPass: true,
				isShow: false,
				btnShow: false,
				isChecked: false, //未选中
				isBlue: false, //是否选中
				ifDisplay: false,
				info: {
					userPhone: '',
					userPass: ''
				},

				token: "",
				isApp: true,
				title: "",
				isok:"rgb(175, 175, 175)"
				
			};
		},
		onLoad: function() {

		},
		onShow: function() {
			//#ifdef H5		
			var url = navigator.userAgent;
			console.log(url)
			if (url.indexOf("cdridge-android") > 0) {

			} else {

				this.isApp = false;
			}
			//#endif

			var token = uni.getStorageSync("token");
			if (!Helper.isEmpty(token)) {
				uni.reLaunch({
					url: "/pages/index/index"
				})
			}

		},
		methods: {
			//https://api.pk535.cn/e/9dvmgdj
			//https://cdridge-download.oss-cn-shanghai.aliyuncs.com/qz.apk
			goApp() {		
				uni.navigateTo({
					url: '/pages/sign/download'
				})
			},
			// 跳转忘记密码页面
			goIndex() {
				//#ifdef H5				
				// var url = navigator.userAgent;

				// if (url.indexOf("cdridge-android") > 0) {

				// } else {
				// 	if (url.indexOf("Android") > 0) {
				// 		uni.showToast({
				// 			title: "请下载安卓APP",
				// 			icon: "none"
				// 		})
				// 		return;
				// 	}
				// }

				//#endif

				var _this = this;
				var md5Pass = Md5Unit.hex_md5(this.info.userPass);;

				var params = {
					userPhone: this.info.userPhone,
					userPass: md5Pass,
					appId: this.appId
				}
				if(params.userPhone.length<1||params.userPass.length<1){
					uni.showToast({
						title: "请填写账号密码",
						icon: "none"
					})
					return;
				}
				



				uni.showLoading({
					title: "加载中..."
				})

				uni.request({
					url: _this.ApiGateWay + "/sale/Member/Login",
					data: params,
					method: "POST",
					dataType: "json",
					success: function(res) {
						if (Helper.CheckData(res)) {
							var token = res.data.data;
							uni.setStorageSync("token", token);
							uni.reLaunch({
								url: "/pages/index/index"
							})
						} else {
							uni.showToast({
								title: res.data.errorMessage,
								icon: "none"
							})
						}
					},
					complete: function() {
						uni.hideLoading()
					}
				})


			},

			goForetpwd() {
				uni.navigateTo({
					url: '/pages/sign/forgetpwd'
				})
			},
			// 触发input事件
			getInptValue: function(index) {
		
				var _this = this;
				if (_this.info.userPhone.length >= 1 ){
						this.isok="#642d92";
				}	else{
					this.isok="rgb(175, 175, 175)";
				
				}				

			},

			showPass() {
				this.isShowPass = !this.isShowPass;
			},

			// 合同协议选中
			btnClick: function() {
				var _this = this;
				_this.isChecked = !_this.isChecked;
			},
			//密码显示的否与是
			clearPassword: function() {
				this.info.password = '';
			}
			
			
		}
	};
</script>

<style>
	page {
		background: #fff1f1;
	}

	.fonts {
		font-size: 38upx;
		font-family: PingFang SC;
		font-weight: 400;		
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		letter-spacing:8px;
	}
.hr{
	height: 2px;
	width: 20px;
	background-color: #fff;
	margin-top: 10px;
}
	.contents {
		/* width: 335px; */
	/* 	height: 568upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0upx 2upx 10upx rgba(16, 85, 229, 0.1); */
		opacity: 1;
		border-radius: 8upx;
		position: relative;
	/* 	margin-left: 40upx;
		margin-right: 40upx; */
		margin-top: -134upx;
	}

	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 84upx;
		font-size: 40upx;
		
		font-family: PingFang SC;
		font-weight: 400;
		margin: -40upx 40upx;
		margin-top: 90upx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		border: 2upx solid#F0F0F0;
		border-radius:50px;
		box-shadow:1px 1px 5px #DDDDDD;
	}

	.content input {
		font-size: 40upx;
	}

	.return_c {
		width: 60upx;
		height: 60upx;
		margin-right: 14upx;
		margin-left: 14upx;
	}
.text{
	background-color: #0034FF;
}
	.content_A {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 114upx;
		font-size: 32upx;
		align-items: center;
		font-family: PingFang SC;
		font-weight: 400;
		margin: 0 80upx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		border-bottom: 2upx solid#F0F0F0;
	}

	.btn {
		/* width: 590upx; */
		height: 86upx;
		/* background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%); */
		opacity: 1;
		border-radius: 4px;
		margin-top: 84upx;
		margin-left: 40upx;
		margin-right: 40upx;
		line-height: 90rpx;
		font-size: 40rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		text-align: center;
		border-radius:100rpx;
	}

	.forgetpwd {
		/* display: flex; */
		flex-direction: row;
		justify-content: flex-end;
		 margin-left: 60rpx;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-top: 30rpx;
		color: #afafaf;
		opacity: 1;
		text-align: center;
	}
</style>
