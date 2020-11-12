<template>
	<view>
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">合作</div>
				</div>
				<!---->
			</div>
		</uni-page-head>
		<view style="height:300rpx ;relative;z-index: 0;width:100%;border-radius:50rpx;hidden;box-shadow:1px 1px 5px rgb(130, 105, 105);">
			<swiper :autoplay="false" :interval="3000" :duration="1000" indicator-color="#FFFFFF" indicator-active-color="#FFFFFF"
			 style="height:300rpx">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/hezuo.png" style="border-radius:50rpx;" class="uni-top"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="starorder">
			<image src="../../static/no.png" style="width: 34rpx;height: 34rpx;"><text style="color: #FF9000;margin-left:16rpx;" >Tips</text></image>
			<view style="color:darkgray;font-size: 12px;">{{message}}</view>
		</view>
		<view style="font-size: 36rpx;text-align:center;">经销商、代理商、合伙人权限</view>
		<table  class="top-left">
		    <tr>
		        <td>类型</td>
		        <td >直推奖励</td>
				<td>旗下奖励</td>
				<td >商城现金奖励</td>
		    </tr>
		     <tr>
		        <td >经销商</td>
		        <td >50%</td>
				<td >2%</td>
				<td >2%</td>
		    </tr>
			<tr>
			    <td>代理商</td>
			    <td>50%</td>
				<td>3%</td>
				<td>3%</td>
			</tr>
			<tr>
			    <td>合伙人</td>
			    <td>50%</td>
				<td>5%</td>
				<td>5%</td>
			</tr>
		</table>
		<view style="margin-bottom:20px;text-align: center;margin-top:20rpx;">注：普通用户只能升级为经销商，经销商只能升级为代理商，代理商只能升级为合伙人。如有疑问可咨询客服。</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message:"经销商、代理商、合伙人招募，商家入驻，广告位招租，引流养流，平台合作。"
			}
		},
		methods: {
			goIndex(){
				uni.switchTab({
				    url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style lang="scss">
	.top-left{ 
			margin: auto;
			margin-top:35rpx;
			border: solid 0.5px #eee;
			}
		    .top-left td{
				 border-right: solid  0.5px #eee;
				 font-size: 16.5px;
				
		   }
		   .starorder {
		   	background: rgba(255, 255, 255, 1);
		   	opacity: 1;
		   	border-radius: 12rpx;
		   	/* margin-left: 24rpx;
		   		margin-right: 24rpx; */
		   	padding: 20rpx;
		   	border-bottom: solid 0.5px #eee;
		   	margin-bottom: 40rpx;
		   }
		   .uni-top {
		   	width: 100%;
		   	height: 300rpx;
		   }
</style>
