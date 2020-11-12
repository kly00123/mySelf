<template>
	<!-- 顶部 -->
	
	<view class="page">
		<!-- <view class="title" @click="bank()">
			<image src="../../static/left.png" class="left"></image>
			<view style="margin-left: 16rpx;">提现</view>
		</view> -->
		<!-- 银行 -->
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">提现</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
		<view class="uni-back" @click="chooseback()">
			<view v-if="bankInfo.bankName !=undefined">{{bankInfo.bankName}}({{bankInfo.cardNo}})</view>
			<view class="addback">
				<view>选择银行卡</view>
				<image src="../../static/icons.png" style="width: 13rpx;height: 20rpx;margin-left: 28rpx;"></image>
			</view>
		</view>
		<!--提现金额  -->
		<view class="uni-writhdrawals">
			<view class="uni-writhdrawals-q">
				<view>提现金额</view>
			</view>
			<view class="uni-writhdrawals-h">
				<view class="uni-writhdrawals-e">
					<view class="fehao">￥</view>
				<!-- 	 <view style="font-size: 100rpx;">33.000</view> -->
					<input class="inputs" type="digit" v-model="money" @blur="checkInput" />
				</view>

				<!-- <view class="all" @click="setMoney">全部</view> -->
			</view>
			<!-- 可用 -->
			<view class="fonts">
				可用余额{{balance}}元
			</view>
			<!-- 超过可提现余额 -->
			<!-- <view class="fonts"style="color: #F04F43;">
				超过可提现余额
			</view> -->
		</view>
		<!-- 底部 -->
		<view class="btn" @click="goSendData()">
			预计两小时到账，确认提现
		</view>

	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				token: "",
				balance: 0,
				bankInfo: {},
				money: ""
			}


		},
		onLoad: function() {
			this.token = uni.getStorageSync('token');
			uni.removeStorageSync("bank");
			this.bankInfo={};
			this.getData();
		},
		onShow: function() {
			var item = uni.getStorageSync("bank");
			if (!Helper.isEmpty(item)) {
				this.bankInfo = item;
			}
		},
		methods: {
			checkInput(e) {

				if (parseFloat(this.money) > parseFloat(this.balance)) {
					this.money = this.balance + ""
					console.log(this.money, this.balance)
				} else {

				}
			},
			setMoney() {
				this.money = this.balance;
			},
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
						console.log(res);

						if (Helper.CheckData(res)) {
							_this.balance = res.data.data.moneyQuota;
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
			goSendData() {
				//
				if (!Helper.validMoney(this.money)) {
					uni.showModal({
						title: "出错了",
						content: "请输入正确的金额",
						showCancel: false,
					})
					return;
				}

				if (Helper.isEmpty(this.bankInfo.bankName)) {
					uni.showModal({
						title: "出错了",
						content: "请选择提现银行卡",
						showCancel: false,
					})
					return;
				}

				if (parseFloat(this.money) > parseFloat(this.balance)) {
					this.money = this.balance
				}

				var _this = this;
				var params = {
					"money": this.money,
					"bankName": this.bankInfo.bankName,
					"subBankName": this.bankInfo.subBankName,
					"cardNo": this.bankInfo.cardNo,
					"accountName": this.bankInfo.accountName,
				}

				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/MemberAddMoneyOrders',
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
								content: res.data.errorMessage,
								showCancel: false,
								success:function(res){
									uni.reLaunch({
										url: '/pages/my/result?bankName=' + _this.bankInfo.bankName + "&money=" + _this.money
									});
								}
							})
							
						} else {
							uni.showModal({
								title: "出错了",
								content: res.data.errorMessage,
								showCancel: false,
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
			chooseback() {
				uni.removeStorageSync("bank")
				this.bankInfo={};
				uni.navigateTo({
					url: '/pages/my/chooseback'
				});
			},
			goIndex(){
				uni.navigateBack({
					delta: 1
				})
			},
			bank() {
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

	.all {

		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-right: 24rpx;
		color: rgba(240, 79, 67, 1);
		opacity: 1;
	}

	.inputs {

		width: 328rpx;
		height: 240rpx;
		font-size: 100rpx;
		font-family: PingFang SC;
		font-weight: bold;

		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.fehao {


		font-size: 64rpx;
		font-family: PingFang SC;
		font-weight: bold;
		margin-left: 24rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
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

	.left {

		width: 24rpx;
		height: 48rpx;
		margin-left: 24rpx;

	}

	.uni-writhdrawals-e {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.uni-back {


		height: 94rpx;
		margin-top: -82rpx;
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

	.uni-writhdrawals {
		margin-top: 32rpx;
		height: 366rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;


	}

	.uni-writhdrawals-q {



		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		padding-left: 24rpx;
		padding-top: 24rpx;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
	}

	.uni-writhdrawals-h {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* margin-left: 24rpx; */
		align-items: center;
		/* margin-right: 24rpx; */
		height: 228rpx;
		border-bottom: 1upx solid#EBEBEB;
	}

	.btn {
		margin-left: 24rpx;
		margin-right: 24rpx;
		width: 702rpx;
		height: 92rpx;
		background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;
		text-align: center;
		line-height: 92rpx;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-top: 44rpx;

		opacity: 1;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}
</style>
