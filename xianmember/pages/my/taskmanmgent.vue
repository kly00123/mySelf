<template>
	<view class="page">
		<!-- <view class="title" @click="bank()">
			<image src="../../static/leftjt.png" class="left"></image>
			<view style="margin-left: 16rpx;">任务管理</view>
		</view> -->
		<!-- 选择 -->
		<view class="one_box">
			<view class="one_col" @click="btnClick(0)">
				<view :class="sendType == 0 ? 'one_col_title color_333333' : 'one_col_title'">全部</view>
				<view :class="sendType == 0 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>

			<view class="one_col" @click="btnClick(1)">
				<view :class="sendType == 1 ? 'one_col_title color_333333' : 'one_col_title'">未结束</view>
				<view :class="sendType == 1 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>
			<view class="one_col" @click="btnClick(2)">
				<view :class="sendType ==2 ? 'one_col_title color_333333' : 'one_col_title'">已结束</view>
				<view :class="sendType == 2 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>


		</view>
		
		
		
		
	</view>

</template>

<script>
	export default {

		data() {

			return {
				sendType: 0,
			}
		},

		methods: {
			btnClick: function(index) {
				console.log(index);
				if (this.sendType == index) {
					return;
				}

				this.sendType = index;
			},
			bank() {

				uni.navigateBack({
					delta: 1
				})
			},



		}

	}
</script>
<style>
	page {

		background: #F5F5F5;

	}

	.date {
		margin-right: 24rpx;

		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 400;

		color: rgba(153, 153, 153, 1);
		opacity: 1;

	}

	.nav_num {

		margin-left: 16rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;


	}

	.cricle {

		width: 72rpx;
		height: 72rpx;
		background: #007AFF;
		margin-left: 24rpx;
		border-radius: 50%;
		opacity: 1;
		position: relative;
		z-index: 0;
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

	.one_box {
		display: flex;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #666666;
		height: 112rpx;
		justify-content: center;
		align-items: flex-end;
		flex-direction: row;
		background-color: #ffffff;
		/* padding-top: 18rpx; */
	}

	.one_col {
		justify-content: center;
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
	}

	.one_col_title {
		height: 72rpx;
		flex: 1;
		color: #999999;
	}

	.color_333333 {
		color: #333333;
	}

	.nav_bottom {
		display: flex;
		justify-content: center;
		height: 4rpx;
		width: 42rpx;
		border-bottom: 4rpx solid #ffffff;
	}

	.nav_bottom_act {
		border-bottom: 4rpx solid #F04F43;
	}

	
</style>