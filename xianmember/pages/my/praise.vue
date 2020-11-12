<template>
	<view class="page">	
	<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">关于我们</div>
				</div>
				<!---->
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>
	<view style="text-align: center;">
		<image style="width: 300rpx;height:280rpx;" src="../../static/logo.png"></image>
		</view>
		<view class="praise">
			<view style="text-align: center;margin-top:80rpx;">当前版本1.2</view>
			<view class="font">四川雨露均沾供应链管理有限公司版权所有
			</view>
			<view style="text-align: center;">蜀ICP备20025188号</view>
		</view>

	</view>
</template>

<script>
	export default{
	methods:{
		goIndex(){
			uni.navigateBack({
			    delta: 1
			});
		},
	},
	}
</script>

<style>
	page {

		background: #F5F5F5;

	}

	.praise {


		opacity: 1;



	}

	.title {

		height: 128rpx;
		background: #F04F43;
		opacity: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		line-height: 128rpx;
		padding-top: 24rpx;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;
		opacity: 1;

	}

	.left {

		width: 24rpx;
		height: 48rpx;
		margin-left: 24rpx;

	}
	.font{
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:400;
        text-align: center;
		margin-top:550rpx;
		color:rgba(51,51,51,1);
		opacity:1;
		
	}
</style>
