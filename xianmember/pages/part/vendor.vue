<template>
	<view class="page">
		<view style="font-size: 36rpx;">商家招募政策</view>
		<view>1.免费入驻</view>
		<view>2.只需缴纳质保金4999元</view>
		<view>3.赠送首页广告宣传一个月（只限名额前50名）</view>
		<view>4.具体可通过公司招商了解更多详情</view>
		<view style="font-size: 36rpx;float:right;margin-top:60rpx;">招商热线：028-6237-5015</view>
		<button type="button"  style="width:100%;margin-top:180rpx;" @click="vendor()">成为供应商</button>
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
			}
		},

		onLoad: function() {
			
		},
		onShow: function() {

		},

		methods: {

			vendor(){
				uni.navigateTo({
					url: '/pages/part/check'
				});
			}
			
			
		
		},

	};
</script>



<style>
	.page{
		font-size: 30rpx;
		padding:20rpx;
	}
</style>
