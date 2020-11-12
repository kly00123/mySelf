<template>
	<!-- 顶部 -->
	<view class="page">
		<view class="title" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
			<view class="addchoosebacks"  @click="goBank()">
				<image src="../../static/leftjt.png" class="left"></image>
				<view style="margin-left: 16rpx;">提现账户</view>
			</view>
			<!-- <view style="margin-right:24rpx;color: #F04F43;"> 添加银行卡</view> -->
			<image src="../../static/add.png" style="margin-right:24rpx;width: 48rpx;height: 48rpx;" @click="goAddBank()"></image>

		</view>
		<view style="text-align: center;color: #999999; margin-top: 5px;">长按删除</view>
		<!-- 银行 -->
		<view class="uni-back" v-for="(item, index) in list">
			<view @longtap="delBank(item, index)" style="flex: 1;">{{item.bankName}}-({{item.cardNo}})</view>
			<view class="addback">
				<view class="uni-btns" @click="goAddBank(item)">修改</view> 
				<!-- <image src="../../static/tup.png" style="width:37rpx;height: 29rpx;margin-left: 28rpx;"></image> -->
			</view>
		</view>

		

	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				token:"",
				list:[]

			}


		},
		onLoad:function(){
			this.token = uni.getStorageSync('token');
			
		},
		onShow:function(){
			this.list = []
			this.getList();
		},
		methods: {
			delBank(item, index){
				var _this = this;
				uni.showModal({
					content:"是否确认删除银行卡",
					success:function(res){
						if (res.confirm){
							uni.showLoading({
								title: "请稍候..."
							})
							uni.request({
								url: _this.ApiGateWay + '/sale/Member/MemberDelBankAccount?id='+item.id,
								data:"",
								method: 'POST',
								dataType: 'json',
								header: {
									Authorization: _this.token
								},
								success: function(res) {
									console.log(res);
										
									if (Helper.CheckData(res)) {
										uni.showModal({
											content:"删除成功",
											showCancel:false
										});
										_this.list.splice(index, 1)
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
						}
					}
				})
				
				
			},
			getList() {
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/MemberGetBankAccountList',
					data: {
						pageIndex:1,
						pageSize:100,
					},
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);
			
						if (Helper.CheckData(res)) {
							_this.list = res.data.list
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
			goAddBank(item) {
				uni.navigateTo({
					url: '/pages/my/addbank?item=' + JSON.stringify(item)
				})
			},
			goBank() {
				uni.navigateBack({
					delta: 1
				})


			}


		}


	}
</script>

<style>
	page {
		background: #F5F5F5;
	}
	.fonts {
		margin-top: 22rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-left: 24rpx;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
	}
	.addchoosebacks {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.title {
		height: 114rpx;
		background: #F04F43;
		opacity: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		line-height: 128rpx;
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
.uni-back {
		height: 94rpx;
		margin-top: 32rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		display: flex;
		padding-left: 24rpx;
		flex-direction: row;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		align-items: center;
		justify-content: space-between;
	}
	.addback {
		display: flex;
		padding-right: 24rpx;
		flex-direction: row;
		align-items: center;
		color: #999999;
	}
	.uni-btns {
		width: 120rpx;
		height: 60rpx;
		background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;		
		line-height: 60rpx;
		text-align: center;
		font-size:34rpx;
		font-family:PingFang SC;
		font-weight:400;
		margin-left: 24rpx;
		margin-right: 24rpx;
		color:rgba(255,255,255,1);
		opacity:1;
	}
</style>
