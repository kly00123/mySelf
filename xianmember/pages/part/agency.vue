<template>
	<view class="page">
		<table  class="top-left" >
		    <tr>
		        <td style="font-size: 30rpx;">名称</td>
		        <td >端口</td>
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
		<view style="padding:10rpx;">
		<view style="font-size:38rpx;margin-top:50rpx;">
			代理商政策:
			</view>
			<view style="font-size: 30rpx; magrin-left:10rpx;">
趣赞2.0针对代理商给予30个代理端口，直接推荐享受70%的推荐收益，享受所有直推用户推荐额度任务收益3%，代理费用具体可通过公司招商了解具体详情；同时公司针对以前代理商账户，将享受单个账户70%推荐收益，可直接用于提现。
			 </view>
			<view style="float:left;margin-top:100rpx;">招商热线：028-6237-5015</view>
			</view>
			<button type="default" style="width:100%;margin-top:160rpx;font-size: 30rpx;" @click="agency()">成为代理</button>
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
	
			agency(){
				uni.navigateTo({
					url: '/pages/part/enroll'
				});
			}
			
			
		
		},
	
	};
</script>

<style>
	@font-face {

	}
	.page{
		font-size:40rpx;
		padding:10rpx;
	}
	#top{
	            position: absolute;
	            width: 100%px;
	            height: 800rpx;
	            left: 0px;
	            top: -600rpx;
	            bottom: 0px;
	            right: 0px;
	            margin: auto;
	            font-size: 20px;
	            color: #555555;
	        }
	
	.top-left{
	        border: 2rpx solid #CCC;   
			margin: auto;
	       }
		    .top-left td{
		           border: 2rpx solid #CCC;
		       }
</style>
