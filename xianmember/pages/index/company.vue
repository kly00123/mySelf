<template>
	<view class="page">
		<swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500">
			<swiper-item>
				<image src="../../static/banner/02.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/banner/03.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="container">
			<view class="li-view">
				<image src="../../static/task/0.png" mode="" class="li-view-img"></image>
				<text class="text">抖音</text>
			</view>
			<view class="li-view">
				<image src="../../static/task/0.png" mode="" class="li-view-img"></image>
				<text class="text">抖音</text>
			</view>
			<view class="li-view">
				<image src="../../static/task/0.png" mode="" class="li-view-img"></image>
				<text class="text">抖音</text>
			</view>
		</view>
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {

				"4": [{
					"id": 0,
					"name": "趣赞科技",
					"content": {
						"SubTab": [{
							"SubTabName": "裤子",
							"SubContent": ["休闲裤", ""]
						}]
					}
				}, {
					"id": 1,
					"name": "雨露均沾",
					"content": {
						"SubTab": [{
							"SubTabName": "裤子",
							"SubContent": ["休闲裤", ""]
						}]
					}
				}, {
					"id": 2,
					"name": "龙鼎天下",
					"content": {
						"SubTab": [{
							"SubTabName": "裤子",
							"SubContent": ["休闲裤", ""]
						}]
					}
				}, ]

			}
		},
	};
</script>

<style>
	* {
		font-size: 14px;

		font-family: Arial, Helvetica, sans-serif;
	}

	.page {}

	.container {
		padding: 40rpx;
		box-sizing: border-box;		
	}

	.coname {
		width: 200rpx;
		height: 200rpx;
		background-color: #00BCD4;
	}

	.row {
		display: flex;
		flex-direction: row;
		margin-left: 30rpx;
	}
	.li-view{
		width: 30%;
		float: left;		
		box-sizing: border-box;		
		text-align: center;
		margin: 10rpx;
	}
	.text{
		width: 100%;
		position: relative;
		font-size: 32upx;
		display: flex;
		justify-content: center;
		color: #3c3c3c;
	}
	.li-view-img{
		width: 128rpx;
		height: 128rpx;
	}
	uni-swiper-item uni-image {
		width: 100%;
		height: 100%;
	}
</style>
