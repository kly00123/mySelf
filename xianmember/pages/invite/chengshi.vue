<template>
<view>
	<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">城市酷选</div>
				</div>
				<!---->
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>
        <web-view :webview-styles="webviewStyles" src="https://a.app.qq.com/o/simple.jsp?pkgname=com.bldzs.fx"></web-view>
    </view>

</template>

<script>
	export default {
		data() {
			return {
				
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

<style>

</style>
