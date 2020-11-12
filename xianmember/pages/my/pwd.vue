<template>
	<view class="page">
		<!-- <view class="title" @click="bank()">
			<image src="../../static/leftjt.png" class="left"></image>
			<view style="margin-left: 16rpx;">修改密码</view>
		</view>
 -->
		<!-- 设置 -->
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">修改密码</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
		<view class="setup">
			<view class="per">
				<view>原密码</view>
				<view class="uni-per">
					<input placeholder="请输入原密码" v-model="oldPass" class="input" />
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<!-- 密码 -->
			<view class="per">
				<view>新密码</view>
				<view class="uni-per">
					<input placeholder="请输入新密码" v-model="newPass" class="input" />
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<view class="per">
				<view>确认新密码</view>
				<view class="uni-per">
					<input placeholder="请输入确认新密码" v-model="newPass_2" class="input" />
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>

		</view>

		<!-- 底部 -->
		<view class="uni-btns" @click="sendData">
			保存
		</view>

	</view>

</template>

<script>
	import Helper from '@/function.js';
	import Md5Unit from '@/pages/utils/md5.js'	
	export default {

		data() {
			return {
				token: "",
				oldPass:"",
				newPass:"",
				newPass_2:""
			}
		},
		onLoad: function() {
			this.token = uni.getStorageSync('token');
		},
		methods: {
			goIndex(){
				uni.navigateBack({
				    delta: 1
				});
			},
			sendData(){
				var _this = this;
				if (Helper.isEmpty(this.oldPass) || this.oldPass.length < 6)
				{
					uni.showToast({
						title:"请输入6位以上原密码",
						icon:"none"
					})
					
					return;
				}
				
				if (Helper.isEmpty(this.newPass) || this.newPass.length < 6)
				{
					uni.showToast({
						title:"请输入6位以上新密码",
						icon:"none"
					})
					
					return;
				}
				
				if (this.newPass != this.newPass_2)
				{
					uni.showToast({
						title:"两次密码输入不一致",
						icon:"none"
					})
					
					return;
				}
				
				var oldMd5 = Md5Unit.hex_md5(this.oldPass);
				var newMd5 = Md5Unit.hex_md5(this.newPass);
				
				var params={
					oldPass:oldMd5,
					newPass:newMd5
				}
				
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/EditMemberPass',
					data: params,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);
							
						if (Helper.CheckData(res)) {
							uni.showModal({
								title:"信息提示",
								content:"修改成功",
								showCancel:false,
								success:function(res){
									uni.navigateBack({
										delta:1
									})
								}
							})		
						} else {
							uni.showModal({
								title:"出错了",
								content:res.data.errorMessage,
								showCancel:false,
								
							})		
						}
					},
					fail: function() {
						//uni.hideLoading();
					},
					complete: function() {
						//uni.hideLoading();
					}
							
							
				})
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

	.setup {
		margin-top:-80rpx;
		height: 282rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;


	}

	.input {

		text-align: right
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

	.uni-btns {


		width: 702rpx;
		height: 92rpx;
		background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;
		margin-top: 442rpx;
		line-height: 92rpx;
		text-align: center;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-left: 24rpx;
		margin-right: 24rpx;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}
</style>
