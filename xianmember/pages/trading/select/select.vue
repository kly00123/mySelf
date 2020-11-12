<template>
	<view>
		<view class="shop" @click="goShopSelect">1.商品列表</view>
		<view class="shop" @click="goOrderSelect">2.订单列表</view>
		<view class="shop" @click="goUpdate">3.兑换名额</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goShopSelect(){
				uni.navigateTo({
					url:'/pages/trading/uplode/update'
				})
			},
			goUpdate(){
				uni.navigateTo({
					url:'/pages/trading/select/sel/update'
				})
			},
			goOrderSelect(){
				uni.navigateTo({
					url:'/pages/trading/order/totalOrder'
				})
			}
		}
	}
</script>

<style>
.shop{
	font-size: 20px;
}
</style>
