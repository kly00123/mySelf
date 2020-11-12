<template>
	<!-- 顶部 -->
	<view class="page">
		<!-- 	<view class="title" @click="bank()">
			<image src="../../static/left.png" class="left"></image>
			<view style="margin-left: 16rpx;">文章详情</view>
		</view> -->
		<!-- 文章详情 -->
		<view class="textfont">{{info.title}}</view>
		<view class="textdate">
			{{info.createTime}}
		</view>
		<view class="uni-textfont">
			<rich-text :nodes="info.memo|formatRichText"></rich-text>
		</view>
	</view>
</template>
<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				token: "",
				list: [],
				pageIndex: 1,
				pageSize: 15,
				total: 0,
				info: {}


			}


		},
		onLoad: function(options) {
			this.token = uni.getStorageSync('token');
			this.getData(options.id);
		},
		methods: {
			getData(id) {
				var _this = this
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetNewsDetails?id=' + id,
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						//console.log(res + '111');
						if (Helper.CheckData(res)) {
							_this.info = res.data.data;
						}
					},
					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
						uni.hideLoading();
						uni.stopPullDownRefresh()
					}
				})
			}


		},
		filters: {
			/**
			 * 处理富文本里的图片宽度自适应
			 * 1.去掉img标签里的style、width、height属性
			 * 2.img标签添加style属性：max-width:100%;height:auto
			 * 3.修改所有style里的width属性为max-width:100%
			 * 4.去掉<br/>标签
			 * @param html
			 * @returns {void|string|*}
			 */
			formatRichText(html) { //控制小程序中图片大小
				let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
					match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
					match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
					return match;
				});
				newContent = newContent.replace(/<br[^>]*\/>/gi, '');
				newContent = newContent.replace(/\<img/gi,
					'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
				return newContent;
			}
		}

	}
</script>

<style>
	page {
		background: #FFFFFF;


	}
	p{
		margin: 10rpx 0;		
	}
	
	
	.title {

		height: 64rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		line-height: 64rpx;
		padding-top: 24rpx;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}
	
	.left {

		width: 24rpx;
		height: 48rpx;
		margin-left: 24rpx;

	}

	.textfont {

		font-size: 40rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-top: 38rpx;
		margin-left: 24rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		text-align: center;

	}

	.textdate {

		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-top: 18rpx;
		color: rgba(204, 204, 204, 1);
		opacity: 1;
		margin-left: 24rpx;
		border-bottom: 1px solid #E5E5E5;
	}

	.uni-textfont {


		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-top: 44rpx;
		margin-left: 22rpx;
		margin-right: 24rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}
</style>
