<template>
	<view class="page">
		<table  class="top-left">
		    <tr>
		        <td>名称</td>
		        <td>端口</td>
				<td>推荐返佣</td>
				<td>任务收益</td>
		    </tr>
		     <tr>
		        <td>经销商</td>
		        <td>15</td>
				<td>60%</td>
				<td>2%</td>
		    </tr>
			<tr>
			    <td>代理商</td>
			    <td>30</td>
				<td>70%</td>
				<td>3%</td>
			</tr>
			<tr>
			    <td>合伙人</td>
			    <td>50</td>
				<td>75%+5%</td>
				<td>4%</td>
			</tr>
		</table>
		<view style="float:left">
		<view style="font-size: 36rpx;margin-top:30rpx;">经销商政策</view>
		<view>1.给予15个代理端口</view>
		<view>2.享受直推用户充值金额60%的额度收益</view>
		<view>3.享受所有直推用户额度任务收益的2%</view>
		<view>4.具体可通过公司招商了解具体详情</view>
		</view>
		<view style="font-size: 36rpx;float:right;margin-top:60rpx;">招商热线：028-6237-5015</view>
		<button type="button"  style="width:100%;margin-top:180rpx;" @click="enroll()">成为经销商</button>
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
			enroll(){
				uni.navigateTo({
					url: '/pages/part/enroll'
				});
			}
			
			
		
		},

	};
</script>



<style>
	.page{
		font-size: 30rpx;
		padding:50rpx;
	}
	.top-left{
	        border: 2rpx  #CCC;   
			margin: auto;
			font-size:36rpx;
	       }
		    .top-left td{
				text-align: center;
		           border: 2rpx solid #CCC;
				   font-size:36rpx;
		       }
</style>
