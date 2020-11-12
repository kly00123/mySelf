<template>
	<view class="page">
  <table  class="top-left" style="font-size: 24rpx;">
  	    <tr>
  	        <td>套餐等级</td>
  	        <td>余额任务数量 </td>
  	        <td>任务接单权限</td>
  			 <td>每日赚取额度上限</td>
  			<td>购买赠送余额</td>
  			<td>直推奖励额度</td>
  			<td>间推奖励额度</td>
  			<td>注册或推广新用户奖励（余额）</td>
  	    </tr>
  	     <tr>
  	        <td>网红套餐96元</td>
  			<td>不限</td>
  	        <td>网红任务
  0.2元及以下</td>
  			<td>20元</td>
  			<td>40元</td>
  			<td>20%</td>
  			<td>4%</td>
  			<td>66</td>
  	    </tr>
  		<tr>
  		    <td>达人套餐196元</td>
  			<td>不限</td>
  		    <td>达人任务
  0.4元及以下</td>
  			<td>50元</td>
  			<td>100元</td>
  			<td>30%</td>
  			<td>6%</td>
  			<td>66</td>
  		</tr>
  		<tr>
  		    <td>明星套餐296元</td>
  			<td>不限</td>
  		    <td>明星任务
  0.6元及以下</td>
  			<td>90元</td>
  			<td>180元</td>
  			<td>40%</td>
  			<td>8%</td>
  			<td>66</td>
  		</tr>
  		<tr>
  		    <td>巨星套餐996元</td>
  			<td>不限</td>
  		    <td>巨星任务
  1.8元及以下</td>
  			<td>350元</td>
  			<td>700元</td>
  			<td>50%</td>
  			<td>10%</td>
  			<td>66</td>
  		</tr>
  
  	</table>
		<view style="width:94%;margin:0 auto;">
		<button type="default" style="width:90%;margin-top:60rpx;" @tap="user()">成为会员</button>
	</view>
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
	
			user(){
				uni.navigateTo({
					url: '/pages/live/live'
				});
			}
			
			
		
		},
	
	};
</script>

<style>
	.page{
		 position: absolute;
		            width: 100%;
		            height: 300px;
		            left: 0px;
		            top: -400rpx;
		            bottom: 0px;
		            right: 0px;
		            margin: auto;
		            font-size: 12px;
		            color: #555555;
	}
	.top-left td{
	        border: 1px  solid #CCC;
	    }
		.top-left{
			width:94%;
			border: 1px solid #CCC;
			margin: auto;
			text-align: center;
			margin-top:-80rpx;
		}
</style>
