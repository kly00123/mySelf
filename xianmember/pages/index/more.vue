<template>
	<view class="page">

			<view class="newtask">
				<view class="row_1">
					<view class="row_2" @click="clickGenduo()">
						<view  class="new-newbulletion" style="background-image: url(../../static/adver.png);background-size: cover;background-position: center; margin-top:10rpx;"></view>
						<!-- -->
							<view class="newtask_mess_1" >生活类</view>
					</view>
					<view class="row_3" @click="clickGenduo()">
						<view  class="new-newbulletion" style="background-image: url(../../static/culture.png);background-size: cover;background-position: center;margin-top:-16rpx;"></view>
						<!-- <image src="../../static/protect.png" class="new-newbulletion"> -->
							<view class="newtask_mess_1">娱乐类</view>
					</view>
				</view>
				<view class="barsty">
					<view class="newtask_bar_2"></view>
					<view class="newtask_bar_3"></view>
				</view>
				<view class="under">
				<view class="row_1">
					<view class="row_2" @click="clickGenduo()">
						 <view  class="new-newbulletion" style="background-image: url(../../static/game.png);background-size: cover;background-position: center;"></view> 
						<!-- <image src="../../static/propaganda.png" class="new-newbulletion"> -->
							<view class="newtask_mess_1">文化类</view>
					</view>
					<view class="row_3" @click="clickGenduo()">
						<view  class="new-newbulletion" style="background-image: url(../../static/life.png);background-size: cover;background-position: center;"></view> 
						<!-- <image src="../../static/take.png" class="new-newbulletion"> -->
							<view class="newtask_mess_1">广告类</view>
					</view>
				</view>
				<view class="row_1"  @tap="clickGenduo()">
				</view>
			</view>
			<view class="newtask_bar"></view>
			</view>
	</view>
</template>

<script>
	import Helper from '@/function.js';
	import loadMore from '../../components/load-more.vue';
	export default {
		onLoad(){
			
		},
		methods: {
			clickGenduo() {
				uni.showModal({
					content: "火爆招商中...",
					showCancel: false
				})
			}
		},

	}
</script>

<style>
	page {}
	.content{
		margin: 0 40rpx;
		display: flex;
        flex-direction: column;		
	}
	.title{
		display: flex;
		flex-direction: row;
		 justify-content: space-between;
	}
	.title_1{
		display: flex;
		flex-direction: row;
		 justify-content: space-between;
	}
	.more {
		display: flex;
		width: 45%;
		height: 420rpx;
	}

	image {
		width: 100%;
		height: 200rpx;
		border: 2px solid #fff;
		box-sizing: border-box;
	}
	.mess{
		margin-left: 120rpx;
	}
	.newtask_bar {
		width: 4rpx;
		height: 580rpx;
		background-color: #dddddd;
		margin: 0 auto;
		margin-top: -960rpx;
	}
	.newtask_bar_2 {
		width: 300rpx;
		height: 4rpx;
		background-color: #dddddd;
		opacity: 1;
	}
	
	.newtask_bar_3 {
		width: 300rpx;
		height: 4rpx;
		background-color: #dddddd;
		opacity: 1;
	}
	.newtask {
		padding-top:160rpx;
			display: flex;
			width: 100%;
			height: 800rpx;
			flex-direction: column;
			font-family: newincon;
	
		}
	
		.row_1 {
			display: flex;
			width: 100%;
			height: 300rpx;
			            justify-content: space-between; /* 水平居中 */
			            align-items: center;     /* 垂直居中 */
		     text-align: center;
			 margin-bottom: 30rpx;
		}
	
		.row_2 {
			position: relative;
			flex-direction: column;
			            justify-content: center; /* 水平居中 */
			            align-items: center;     /* 垂直居中 */
			display: flex;
			width: 200rpx;
			height: 220rpx;
			left: 100rpx;
		}
	
		.row_3 {
			display: flex;
			flex-direction: column;
			position: relative;
			width: 200rpx;
			height: 220rpx;
			right: 150rpx;
			margin-left: 400rpx;
		}
	.row_4{
		display: flex; justify-content: center;align-items: center;
	}
	.row_5{
		display: flex;
		line-height:100rpx;
		text-align: left;
		vertical-align:bottom;
	}
	.tuijian{
		margin-top:50rpx;
	}
		.newtask_top {
			position: relative;
			opacity: 1;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding-left: 40rpx;
			margin-top: 30rpx;
		}
	
		.newtask_title {
			font-size: 28rpx;
			letter-spacing: 4rpx;
			font-family: newincon;
			padding-left: 30rpx;
		}
		.newtask_title1 {
			font-size: 32rpx;
			letter-spacing: 4rpx;
			font-family: newincon;
			padding-left: 30rpx;
		}
		.newtask_title1 {
			font-size: 32rpx;
			letter-spacing: 4rpx;
			font-family: newincon;
			padding-left: 120rpx;
		}
		.passby {
			width: 100%;
			height: 25rpx;
			background-color: #dddddd;
			margin-top: 20rpx;
		}
	
		.passby_1 {
			width: 100%;
			height: 25rpx;
			background-color: #dddddd;
			margin-top: 100rpx;
		}
	
		.newtask_mess_one {
			margin-left: 100rpx;
			margin-top: -620rpx;
		}
	
		.new-newbulletion {
			width: 244rpx;
			height: 200rpx;
			flex-direction: row;
			align-self: flex-end;
	
		}
	
		.new-newbulletionn {
			width: 200rpx;
			height: 60rpx;
			flex-direction: row;
			align-self: flex-end;
	
		}
	.new-newbulletionn_1{
		width: 256rpx;
		height: 60rpx;
		flex-direction: row;
		align-self: flex-end;
		left:-30rpx;
		top:30rpx;
	}
	.new-newbulletionn_5{
		width: 100rpx;
		height: 60rpx;
		flex-direction: row;
		align-self: flex-end;
		top:-20rpx;
		left:80rpx;
	}
	.new-newbulletionn_2{
		width: 256rpx;
		height: 60rpx;
		flex-direction: row;
		align-self: flex-end;
		right:-30rpx;
		top:30rpx;
	}
	.new-newbulletionn_3{
		width: 256rpx;
		height: 60rpx;
		flex-direction: row;
			top:80rpx;
			left:-30rpx;
		align-self: flex-end;
	}
	.new-newbulletionn_4{
		width: 256rpx;
		height: 60rpx;
			top:80rpx;
			right:-30rpx;
		flex-direction: row;
		align-self: flex-end;
	}
		.newtask_mess {
			position: relative;
			opacity: 1;
			display: flex;
		}
	
		.newtask_mess_1 {
			font-size: 32rpx;
			margin-left: 10rpx;
			padding-top:30rpx;
		}
	.barsty{
		display: flex;
		flex-direction: row;
		 text-align: center;
		 margin:0 auto;
	}
	
		.newtask_message {
			font-size: 16rpx;
			margin-left: 10rpx;
		}
	
	
		.newtask_bar_2 {
			width: 300rpx;
			height: 4rpx;
			background-color: #dddddd;
			opacity: 1;
		}
	
		.newtask_bar_3 {
			width: 300rpx;
			height: 4rpx;
			background-color: #dddddd;
			opacity: 1;
		}
	
		.newtask_bar_4 {
			width: 300rpx;
			height: 6rpx;
			background-color: #dddddd;
			opacity: 0.3;
	
		}
	
		.newtask_bar_5 {
			width: 300rpx;
			height: 6rpx;
			background-color: #dddddd;
			opacity: 0.3;
	
		}
	
	
		.card {
			position: relative;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			min-height: 70rpx;
			justify-content: space-between;
			align-items: center;
	
		}
	
		.card-link {
			display: flex;
			color: #FFFFFF;
			font-weight: bold;
		}
	
		.newtask_tit {
			display: flex;
			margin-left: 40upx;
			margin-top: 20upx;
		}
	
		.newtask_pic {
			width: 6upx;
			height: 26upx;
			margin-top: 6upx;
			background-color: #333333;
		}
	
		.card-link-search {
	
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 48upx;
			font-size: 40upx;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			opacity: 1;
			border: 2rpx solid#F0F0F0;
			border-radius: 50px;
			background-color: #FFFFFF;
			width: 100%;
		}
	
		.return_c {
			width: 60rpx;
			height: 60rpx;
			margin-right: 14rpx;
			margin-left: 14rpx;
		}
	
		.uni-top {
			width: 100%;
			height: 300rpx;
		}
	
	
	.lingqu{
		margin-bottom: 100rpx;
	}
	.tuijian{
		margin-bottom: 80rpx;
	}
		.uni-content {
			width: 95%;
			/* height: 276rpx; */
			background: rgba(255, 255, 255, 1);
			opacity: 1;
			background: #ededed;
			position: relative;
			margin-top: 25rpx;
			margin-left: 14rpx;
		}
	
		.uni-content_a {
			position: relative;
	
			/* height: 228rpx; */
			background: #ededed;
	
			opacity: 1;
	
			/* margin-top: -54rpx; */
			display: flex;
			flex-direction: row;
			justify-content: center;
			justify-content: space-between;
			align-items: center;
		}
	
		.newbulletin {
	
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 30rpx;
			font-weight: 400;
			/* margin-top: 12rpx; */
			color: rgba(51, 51, 51, 1);
			opacity: 1;
	
		}
	
</style>
