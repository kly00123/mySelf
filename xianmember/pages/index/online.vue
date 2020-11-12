<template>
	<view>
	<view style="margin-top:36rpx;">
		<web-view :webview-styles="webviewStyles" src="https://v1.live800.com/live800/chatClient/chatbox.jsp?companyID=1390049&configID=49061&jid=9302601299&s=1"></web-view>
	</view>
	</view>
</template>

<script>
	//https://v1.live800.com/live800/chatClient/chatbox.jsp?companyID=1390049&configID=49061&jid=9302601299&s=1
	export default{
		methods:{
			goIndex(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			}
		}
	}
</script>

<style>
</style>
