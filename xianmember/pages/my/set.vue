<template>
	<view class="page">
	<!-- 	<view class="title">
			<image src="../../static/leftjt.png" class="left"@click="baCk()"></image>
			<view style="margin-left: 16rpx;">设置</view>
		</view> -->
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">系统设置</div>
				</div>
				<!---->
			</div>
		</uni-page-head>

		<!-- 设置 -->
		<view class="setup">
			
			<!-- 密码 -->
			<view class="per" style="border-bottom: none;" @click="pwd()">
				<view>修改密码</view>
				<view class="uni-per">
					<image src="../../static/icons.png" class="icons" >
					</image>
				</view>
			</view>
		</view>
		<!-- 联系客户 -->
		<view class="setup" style="margin-top: 20rpx;" >
			<!-- 密码 -->
			<view class="per" style="border-bottom: none;" @click="praise()">
				<view>关于我们</view>
				<view class="uni-per">
					<image src="../../static/icons.png" class="icons" >
					</image>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="uni-btn" @click="goExitApp">
			退出登录
		</view>

	</view>

</template>

<script>
	export default {

		data() {

			return {
				phone: '400-0000-000',
			}
		},

		methods: {
			goExitApp(){
				uni.showModal({
					title:"信息提示",
					content:"是否确认退出程序",
					success:function(res){
						if (res.confirm){
							uni.removeStorageSync("token");
							uni.reLaunch({
								url:"/pages/sign/sign"
							})
							
						}
					}
				})	
			},
			getCall() {
				uni.makePhoneCall({
					phoneNumber: this.phone
				});
			},
			/* 跳转修改密码 */
			pwd() {
				uni.navigateTo({
					url: "/pages/my/pwd"
				})


			},
			goIndex(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
			baCk(){
				uni.switchTab({
					url:'/pages/my/my'
				})
			},
			praise() {
				uni.navigateTo({
					url: "/pages/my/praise"
				})
			},
			/* 性别选择 */
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				this.index = e.target.value;
			},
			// showMulLinkageThreePicker() {
			// 	this.$refs.mpvueCityPicker.show();
			// },

			// onCancel(e) {
			// 	console.log(e);
			// },

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

	.setup {
		/* height: 188rpx; */
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

	.uni-btn {


		width: 100%;
		height: 94rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		line-height: 94rpx;
		text-align: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(240, 79, 67, 1);
		opacity: 1;
		bottom: 0;
		position: fixed;
	}
</style>
