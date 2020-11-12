<template>
	<view class="page">
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">商学院</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
			<view style="height:300rpx ;margin-top:-80rpx;relative;z-index: 0;width:100%;border-radius:50rpx;hidden;box-shadow:1px 1px 5px rgb(130, 105, 105);">
				<swiper :autoplay="false" :interval="3000" :duration="1000" indicator-color="#FFFFFF" indicator-active-color="#FFFFFF"
				 style="height:300rpx">
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/shang.png" style="border-radius:50rpx;" class="uni-top"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="starorder">
				<image src="../../static/no.png" style="width: 34rpx;height: 34rpx;"><text style="color: #FF9000;margin-left:16rpx;" >Tips</text></image>
				<view style="color:darkgray;font-size: 12px;">{{message}}</view>
			</view>
		<view style="font-size: 36rpx;">一、渠赞的玩法</view>
		<view>1、任务专区</view>
		<view style="border-bottom: solid 0.5px #eee;">通过领取企业以及任务发布者发布的任务获得渠豆，任务分为三个板块点赞关注、企业宣传（企业招商）、兼职招聘。</view>
		<view>2、交易专区</view>
		<view style="border-bottom: solid 0.5px #eee;">通过任务领取的豆可在平台内自由交易，交易价格可自由定，同时也可参考交易专区的均价（豆交易可获得余额，余额可提现）</view>
		<view>3、兑换专区</view>
		<view style="border-bottom: solid 0.5px #eee;">通过领取任务和交易专区获得的豆与余额可在兑换商城兑换产品，兑换商城的产品分为三大类，兑换现金类、渠豆兑换类、余额加渠豆。产品可根据自己的需求自己兑换（产品每日会更新，兑换的现金可提现</view>
	    <view style="font-size: 36rpx;margin-top:20rpx;">二、会员等级</view>
		<table  class="top-left">
		    <tr>
		        <td>会员等级</td>
		        <td >充值金额</td>
				<td>日任务豆上限</td>
				<td >直推收益</td>
			<td >渠豆月收益</td>
		    </tr>
		     <tr>
		        <td >普通</td>
		        <td >0</td>
				<td >20</td>
				<td >10%</td>
			<td>600</td>
		    </tr>
			<tr>
			    <td>黄金</td>
			    <td>99</td>
				<td>80</td>
				<td>25%</td>
				<td>2400</td>
			</tr>
			<tr>
			    <td>白金</td>
			    <td>299</td>
				<td>350</td>
				<td>40%</td>
				<td>10500</td>
			</tr>
			<tr>
			    <td>钻石</td>
			    <td>999</td>
				<td>1350</td>
				<td>50%</td>
				<td>40500</td>
			</tr>
		</table>
		<view style="font-size: 36rpx;margin-top:20rpx;">三、渠豆的用途</view>
		<view>1、交易</view>
		<view style="border-bottom: solid 0.5px #eee;">渠豆可在交易市场自由交易，交易可获得余额</view>
		<view>2、兑换</view>
		<view style="border-bottom: solid 0.5px #eee;">渠豆可在兑换专区兑换现金、话费、产品、兑换经销商、代理商、合伙人等。</view>
		<view>3、发布</view>
		<view style="border-bottom: solid 0.5px #eee;">通过渠豆可以在平台发布商业信息以及自己产品推广</view>
		<view style="font-size: 36rpx;margin-top:20rpx;">四、余额用途</view>
		<view>1、提现</view>
		<view style="border-bottom: solid 0.5px #eee;">余额可自由提现，提现时间9:30-17:00,24小时内到账。</view>
		<view>2、交易</view>
		<view style="border-bottom: solid 0.5px #eee;">余额可在渠豆交易市场购买渠豆</view>
		<view>3、购买产品</view>
				<view style="border-bottom: solid 0.5px #eee;">余额可在兑换专区购买自己心仪的产品</view>
						<view style="font-size: 36rpx;margin-top:20rpx;">五、经销商、代理商、合伙人获得途径</view>
						<view>1、经销商获得途径</view>
						<view> ① 直推150有效客户（黄金以上）向客服申请</view>
						<view style="border-bottom: solid 0.5px #eee;"> ② 30万渠豆购买</view>
						<view>2、代理商</view>
						<view>获得经销商资格后</view>
						<view> ① 直推300有效客户（黄金以上）向客服申请</view>
						<view style="border-bottom: solid 0.5px #eee;"> ② 18万渠豆购买</view>
						<view>3、合伙人</view>
						<view>获得代理商资格后</view>
						<view> ① 直推600有效用户（黄金以上）向客服申请</view>
						<view style="border-bottom: solid 0.5px #eee;"> ② 12万渠豆购买</view>
						
						<view style="float:right;margin-bottom:20px;">注：如有疑问可咨询客服</view>

	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				message:"问题解答、创业分享、素材下载，唯有学习才是进步的最佳途径，唯有行动才是成功的最佳哲学，唯有坚持才有成果。"
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
			},
			goIndex(){
				uni.switchTab({
				    url: '/pages/index/index'
				});
			}
			
			
		
		},

	};
</script>



<style lang="scss">
	.page{
		font-size: 30rpx;
		padding:20rpx;
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
		margin-top:12rpx;
	}
	.top-left{ 
			margin: auto;
			margin-top:20rpx;
			border: solid 0.5px #eee;
			}
		    .top-left td{
				 border-right: solid  0.5px #eee;
				 font-size: 15.5px;
				
		   }
		   .uni-top {
		   	width: 100%;
		   	height: 300rpx;
		   }
</style>
