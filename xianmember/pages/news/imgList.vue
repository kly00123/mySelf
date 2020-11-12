<template>
	<view>
		<view class="pic_list">
			<view @tap="clickPic(y)" v-for="(x, y) in imgPreviewPicList" :key="y">
				<image :src="x.picPath"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imgPreviewPicList: [
				{
					picPath: '../../static/ldtx1.jpg'
				},
				{
					picPath: '../../static/ldtx2.jpg'
				},
				{
				   picPath: '../../static/ldtx3.jpg'
				}
			],
		};
	},

	methods: {
		clickPic(index) {
			uni.setStorageSync("currentImgIndex",index);
			uni.navigateTo({
				url: '/pages/news/imgPreview'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.pic_list {
	display: flex;
	flex-direction: row;
	
	> view {
		flex: 0 0 240rpx;
		height: 430rpx;
		margin: 60rpx 0 0 7.5rpx;
		> image {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
