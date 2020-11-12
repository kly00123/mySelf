<template>
	<view class="page">
		<view class="success">密码重置成功，请登录</view>
		<view class="btn" @click="goSign()">回到登录页</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
		goSign(){
			uni.navigateTo({
				url:'/pages/sign/sign'
			})
			
			
			
		}
		
		
		
	}
	
	
};
</script>

<style>
page {
	background: #fafafa;
}
.success {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 292upx;
	font-size: 36upx;
	font-family: PingFang SC;
	font-weight: 400;

	color: rgba(51, 51, 51, 1);
	opacity: 1;
}
.btn {
	width: 702upx;
	height: 88upx;
	background: rgba(35, 107, 255, 1);
	box-shadow: 0upx 4upx 16upx rgba(35, 107, 255, 0.5);
	opacity: 1;
	border-radius: 8upx;
	margin-left: 24upx;
	margin-right: 24upx;
	line-height: 88upx;
	text-align: center;
	font-size: 36upx;
	margin-top: 330upx;
	font-family: PingFang SC;
	font-weight: 400;

	color: rgba(255, 255, 255, 1);
	opacity: 1;
}
</style>
