<template>
	<view class="page">
		<view class="top ">
			<view class="top_1">
				<view class="title">我的订单</view>
				<view class="more" @click="more()">查看更多订单</view>
			</view>
			<view class="passby"></view>
			<view class="detail">
				<view @click="obligat()">
				<image src="../../static/obligat.png" style="width:70rpx; height:70rpx;"></image>
				<view style="font-size: 26rpx;">待付款</view>
				</view>
				<view @click="wait_goods()">
				<image src="../../static/wait-goods.png" style="width:70rpx; height:70rpx;"></image>
				<view style="font-size: 26rpx;">待发货</view>
				</view>
				<view @click="send_goods()">
				<image src="../../static/send-goods.png" style="width:70rpx; height:70rpx;"></image>
				<view style="font-size: 26rpx;">待收货</view>
				</view>
				<view @click="finished()">
				<image src="../../static/finished.png" style="width:70rpx; height:70rpx;"></image>
				<view style="font-size: 26rpx;">已完成</view>
				</view>
			</view>
		</view>
		<view class="under">
			<view class="top_1">
				<view class="title">热门推荐</view>
			</view>
			<view class="pic">
				<view class="pic_1">
<!-- 					<image src="../../static/1.png.jpg" ></image>
					<image src="../../static/2.png.jpg"></image> -->
				</view>
				<view class="pic_1">
<!-- 					<image src="../../static/1.png.jpg"></image>
					<image src="../../static/2.png.jpg"></image> -->
				</view>
			</view>
			<view class="passby"></view>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
	             obligat(){
					 console.log("obligat!!!");
				 },
				 wait_goods(){
					 console.log("wait_goods!!!");
				 },
				 send_goods(){
					 console.log("send_goods!!!");
				 },
				 finished(){
					 console.log("finished!!!");
				 },
				 more(){
					 console.log("more!!!");
				 }
		},
	};
</script>
<style>
	page{
		background-color: #E5E5E5;
	}
	detail .image{
		padding-left:30rpx;
	}
	.top {
		width: 96%;
		height: 300rpx;
		margin: 20rpx auto;
		border-radius: 10rpx;
		background-color: #FFFFFF;
		box-shadow:1px 1px 5px rgb(130, 105, 105);
		margin-bottom: 40rpx;
	}

	.top_1 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top:6rpx;
		padding-top:30rpx;
	}
.pic{
	display: flex;
	flex-direction: column;
}
.pic_1{
	display: flex;
	flex-direction: row;
}
	.title {
		padding-left: 36rpx;
		font-weight: bold;
		font-size: 36rpx;
		letter-spacing: 3rpx;
	}

	.more {
		font-size: 28rpx;
		padding-top:8rpx;
		margin-right:36rpx;
		opacity: 0.5;
		color: #888888;
		letter-spacing: 4rpx;
	}

	.passby {
		width: 90%;
		height: 4rpx;
		background-color: #dddddd;
		margin: 0 auto;
		margin-top:30rpx;
	}
	.detail{
		width:90%;
		display: flex;
		margin:26rpx auto;
		flex-direction: row;
		justify-content: space-between;
	    opacity: 0.8;
	    color: #888888;
	
	}
	.under{
		margin-top:30rpx;
		width: 96%;
		margin: 20rpx auto;
		border-radius: 10rpx;
		background-color: #FFFFFF;
		box-shadow:1px 1px 5px rgb(130, 105, 105);
		
	}
</style>
