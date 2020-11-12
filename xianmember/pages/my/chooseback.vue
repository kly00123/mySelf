<template>
	<!-- 顶部 -->
	<view class="page">
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goBack()"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">选择提现账户</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
		<!-- 银行 -->
		<view class="uni-back" v-for="item in list" @click="selectBank(item)">
			<view>{{item.bankName}}-({{item.cardNo}})</view>
			<view class="addback">
				<!-- <view>中国工商银行</view> -->
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
				token: "",
				list: []

			}


		},
		onLoad: function() {
			this.token = uni.getStorageSync('token');
			this.getList();
		},
		onShow: function() {
			uni.removeStorageSync("bank")
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta:1
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
						pageIndex: 1,
						pageSize: 100,
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

			selectBank(item) {
				uni.setStorageSync("bank", item)
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

		height: 128rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
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
</style>
