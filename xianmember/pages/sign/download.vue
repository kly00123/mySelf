<template>
	<view class="page">
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">渠赞</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
		<view class="content">
			<view class="tubiao">
				<image src="../../static/logo.png"></image>
			</view>

			<view class="fenlsid_and" @click="goApp()">
				<img src="../../static/and.png">
				<view class="and_2">
					<p class="and">
						Android版下载</p>
					<p class="size2">
						大小：3 M</p>
				</view>
			</view>
			<p style='text-align: center;color: #a5a5a5;line-height: 28px;font-size: 13px;'>扫描二维码后点击右上角选择在浏览器打开，加载完成后点击Android版下载方可</p>
			<view class="miaoshu">
				<view class="miaoshu_t">
					<img src="../../static/shu.png"><span>介绍</span>
					<p>
						渠赞手机APP下载</p>
				</view>
				<view class="erwei">
					<img src="../../static/t.png">
					<p>
						扫描二维码后点击右上角选择在浏览器打开，加载完成后点击Android版下载方可</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad: function(options) {
			
		},
		methods: {
			goApp() {
				//location.href = "https://cdridge-download.oss-cn-shanghai.aliyuncs.com/qz.apk"
				location.href = "http://quzan.promen.tech/app/quzan.apk"
			},
			goIndex(){
				uni.navigateBack({
					delta:1
				})
			}

		}

	}
</script>

<style>
	page {
		font-size: 12px;

	}

	.content {
		width: 90%;
		margin: -100rpx auto;
	}

	.tubiao {
		width: 44%;
		margin: 0px auto 40px auto;
		padding-top: 30px;
		text-align: center;
	}

	.tubiao image {
		width: 260rpx;
		height: 260rpx;
	}

	.fenlsid_and {
		background: #78bc43;
		border-radius: 8px;
		width: 226px;
		height: 63px;
		margin: 20rpx auto;
		margin-top: 18px;

	}

	.fenlsid_and img {
		float: left;
		width: 40px;
		margin: 8px 20px 0 22px;
	}

	.and_2 {
		float: left;
		color: #fff;
		padding-top: 4px;
	}

	.and {
		font-size: 18px
	}

	.miaoshu {
		margin-top: 80px;
		border-top: 1px #e4e4e4 solid
	}

	.miaoshu_t {
		padding-top: 20px;
	}

	.miaoshu_t span {
		color: #515151;
		font-size: 14px;
		padding-left: 10px;
		line-height: 20px;
	}

	.miaoshu_t p {
		color: #a5a5a5;
		font-size: 12px;
		padding-left: 14px;
		padding-top: 10px;
	}

	.erwei {
		
		margin: 0 auto;
		margin-top: 0px;
		margin-top: 40px;
		text-align: center;
		padding-bottom: 40px;
	}

	.erwei img {
		width: 50%;
	}

	.erwei p {
		color: #a5a5a5;
		line-height: 28px;
		font-size: 13px;
	}
</style>
