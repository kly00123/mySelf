<template>
	    <view id="top">
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
			<view style="font-size: 30rpx; margin-top:50rpx; magrin-left:10rpx;">合伙人政策：</view>
					<view style="font-size: 30rpx;">趣赞2.0针对合伙人给予50个代理端口，直接推荐享受75%的推荐收益，同步享有所有推荐收益5%的收益，享受所有用户推荐额度任务收益4%，代理费用具体可通过公司招商了解具体详情。</view>
				<view style="float:right;margin-top:100rpx;">招商热线：028-6237-5015</view>
			<button type="default" style="width:90%;margin-top:60rpx;" @click="enroll()">成为合伙人</button>
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
	#top{
	            position: absolute;
	            width: 100%px;
	            height: 800rpx;
	            left: 0px;
	            top: -400rpx;
	            bottom: 0px;
	            right: 0px;
	            margin: auto;
	            font-size: 20px;
	            color: #555555;
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
