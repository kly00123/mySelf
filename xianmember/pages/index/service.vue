<template>

	<view style="flex-direction: column;">
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">联系客服</div>
				</div>
				<!---->
			</div>
		</uni-page-head>
		<!-- <web-view :webview-styles="webviewStyles" src="https://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=1388059&configID=512601&jid=7670766382&s=1"></web-view> -->

		<view style="margin-top: 100px; padding-left: 30px; flex-direction: column;">
			<view style="margin-top: 20px;">
				客服热线：028-61982822
			</view>
<!-- 			<view style="margin-top: 20px;">
				商务合作：028-61890259
			</view>
			<view style="margin-top: 20px;">
				投诉与建议：028-61960093
			</view> -->
			
		</view>
		
		<view class="btn" @click="goService">
			在线客服
		</view>
				
	</view>
</template>

<script>
	export default{
		methods:{
			goService(){
				uni.navigateTo({
					url:"/pages/index/online"
				})
			},
			goIndex(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			}
		}
	}
</script>

<style>
	view{
		display: flex;
		
	}
	
	.btn{
		height: 40px;
		background-color: #FF5254;
		color: #FFFFFF;
		margin: 50px;
		justify-content: center;
		align-items: center;
	}
</style>
