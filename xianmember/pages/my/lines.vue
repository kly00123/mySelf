<template>
	<view class="page">
		<!-- <view class="title" @click="bank()">
			<image src="../../static/leftjt.png" class="left"></image>
			<view style="margin-left: 16rpx;">余额</view>
		</view> -->
		<!-- 余额 -->
		<view class="uni-money">

			<view class="uni-money-a">额度(元)</view>
			<view class="uni-money-b">
				<view class="uni-money-c">{{moneyQuota}}</view>
				<view class="uni-money-d" @click="withdrawals()">提现</view>
			</view>

		</view>
		<!-- 无银行卡状态 -->
		<view class="noback" @click="addback()" v-if="list.length==0">
			<view class="uni-noback">
				<view style="margin-left: 14rpx;">你还没有可用于提现的银行卡!</view>
			</view>
			<view class="addbtn" >去添加</view>
		</view>
		<!-- 提现记录 -->
		<view class="record" style="margin-top: 32rpx;" @click="record()">
			<view>提现记录</view>
			<image src="../../static/icons.png" class="icons"></image>
		</view>

		<!-- 提现记录 -->
		<view class="record" style="margin-top: 32rpx;" @click="capital()">
			<view>资金明细</view>
			<image src="../../static/icons.png" class="icons"></image>
		</view>
	</view>

</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				token:"",
				balance:0,
				list:[],
				moneyQuota:0
			}
		},
		onLoad:function(){
			this.token = uni.getStorageSync('token');
			this.getData();
			
		},
		onShow:function(){
			this.getList();
		},

		methods: {
			getData() {
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetTodayData',
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {									
						if (Helper.CheckData(res)) {
							_this.balance = res.data.data.money;
							_this.moneyQuota = res.data.data.moneyQuota;
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
			capital() {
				uni.navigateTo({
					url: '/pages/my/capital'
				})

			},
			record() {
				uni.navigateTo({
					url: '/pages/my/record'
				})

			},
			bank() {
				uni.navigateBack({
					delta:1
				})
			},
			addback() {
				uni.navigateTo({
					url: '/pages/my/bank'
				})
			},
			withdrawals() {
				if (this.list.length==0)
				{
					uni.showModal({
						title:"出错了",
						content:"请先添加提现银行卡",
						showCancel:false,								
					})	
					return;
				}
				
				uni.navigateTo({
					url: '/pages/my/Withdrawals'
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

	.uni-money {



		height: 424rpx;
		background: #f02f30;
		opacity: 1;
	}

	.uni-money-a {


		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-left: 22rpx;
		padding-top: 48rpx;
		color: rgba(255, 208, 204, 1);
		opacity: 1;
	}

	.uni-money-b {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-left: 24rpx;
		margin-right: 24rpx;
		margin-top: 40rpx;

	}

	.uni-money-c {


		font-size: 100rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		opacity: 1;

	}

	.uni-money-d {


		width: 104rpx;
		height: 52rpx;
		border: 2rpx solid rgba(255, 255, 255, 1);
		opacity: 1;
		line-height: 52rpx;
		text-align: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;

		color: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 8rpx;

	}

	.noback {
		height: 100rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 24rpx;
		padding-right: 24rpx;
	}

	.uni-noback {

		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
	}

	.addbtn {


		width: 112rpx;
		height: 52rpx;
		border: 2rpx solid rgba(240, 79, 67, 1);
		opacity: 1;
		border-radius: 8rpx;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		line-height: 52rpx;
		text-align: center;
		color: rgba(240, 79, 67, 1);
		opacity: 1;
	}

	.record {



		height: 94rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		padding-left: 24rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}
</style>
