<template>
	<!-- 顶部 -->
	<view class="page">
<!-- 		<view class="title" @click="bank()">
			<image src="../../static/left.png" class="left"></image>
			<view style="margin-left: 16rpx;">结果详情</view>
		</view> -->
		<!-- 中间 -->
		<view class="content">
			<image src="../../static/gouxuan.png" style="width: 94rpx;height: 94rpx;margin-top: 148rpx;"></image>
			<view class="content-font">提现申请已提交，等待处理...</view>
			<view class="content-back">{{bankName}}({{money}}元)</view>
			<!-- <view class="content-back">2020-01-30 16:05</view> -->
			
			<view class="btn" @click="goBack()">
				返回
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				bankName:"",
				money:0,

			}


		},
		onLoad:function(options){
			this.bankName = options.bankName,
			this.money = options.money;
		},
		methods: {
			goBack() {
				uni.switchTab({
					url:"/pages/my/my"
				})
			}
		}
	}
</script>

<style>
	page {
		background: #FFFFFF;


	}

	.content {


		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.content-back {
		
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:400;
		margin-top: 6rpx;
		color:rgba(153,153,153,1);
		opacity:1;
	}

	.content-font {

		margin-top: 26rpx;
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 400;

		color: rgba(51, 51, 51, 1);
		opacity: 1;
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



	.inputs {

		width: 328rpx;
		height: 140rpxx;
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


	.btn {
		width:324rpx;
		height:92rpx;
		background:linear-gradient(176deg,rgba(250,92,108,1) 0%,rgba(250,92,108,1) 7%,rgba(255,87,55,1) 100%);
		opacity:1;
		border-radius:8rpx;
		margin-top: 374rpx;
		line-height: 92rpx;
		text-align: center;
		font-size:34rpx;
		font-family:PingFang SC;
		font-weight:400;
		
		color:rgba(255,255,255,1);
		opacity:1;

	}
</style>
