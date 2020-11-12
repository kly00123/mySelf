<template>
	<view class="content">
		<!-- 头部 -->
		<!-- <image src="../../static/head.png" style="width:100%;height:260rpx;"></image> -->
			<view style="height:300rpx ;relative;z-index: 0;width:100%;margin-left:14rpx;hidden;box-shadow:1px 1px 5px rgb(130, 105, 105);">
				<swiper :autoplay="true" :interval="3000" :duration="1000" indicator-color="#FFFFFF" @change="change"
				 indicator-active-color="#FFFFFF" style="height:300rpx">
					<swiper-item>
						<view class="swiper-item" @click="onClickSwiper(41)">
							<image src="../../static/banner/01.png" class="uni-top"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item" @click="onClickSwiper(42)">
							<image src="../../static/banner/02.png" class="uni-top"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/banner/04.png" @click="onClickSwiper(43)" class="uni-top"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/banner/03.png" class="uni-top"></image>
						</view>
					</swiper-item>
		
				</swiper>
			</view>
		<view class="one_col">
			<view v-for="(item, index) in toplist" :key="index"  :class="[tabCur == index?'menuactive':'']"  @click="tabSelect" :data-id="index">
				<view>{{ item.name}}</view>
			</view>
		</view>
		<view class="passby"></view>
		<!-- 显示区域 -->
	</view>


</template>

<script>
	import Helper from '@/function.js';
	
export default {
	data() {
		return {
			tabCur: 0,
			sendType:0,
			toplist:[{
				name:'成为直播',
				id:'yonghu',
			},{
				name:'直播带货',
				id:'jianzhi',
			}],
			navList: [
				{
					orderList: [{
						state: 0,
						text: '推荐用户',
						user:'了解会员',
						partner:'了解合伙人',
						agency:'了解代理',
						policy:'了解政策',
					}]
				},
				{
					orderList: [{
						state: 1,
						text: '推荐兼职',
						recommed:'兼职推荐',
						project:'项目推荐',
						vendor:'供应商推荐',
					}]
				}
			]
		};
	},

	onLoad(options) {
		// 页面显示是默认选中第一个
		this.tabCurrentIndex = 0;
	},
	methods: {
		changeTab(e) {
			this.tabCurrentIndex = e.target.current;
		},
		btnClick(index) {
			//console.log(index);
			if (this.sendType == index) {
				return;
			}
		
			this.pageIndex = 1;
		
			this.sendType = index;
		},
		left(){
        this.$refs.btn.style.backgroundColor="#ff0000";
		},
		right(){
			this.$refs.view.style.backgroundColor="#ff0000";
		},
		user() {
			uni.navigateTo({
				url: '/pages/part/user'
			});
		},
		partner() {
			uni.navigateTo({
				url: '/pages/part/partner'
			});
		},
		agency() {
			uni.navigateTo({
				url: '/pages/part/agency'
			});
		},
		policy() {
			uni.navigateTo({
				url: '/pages/part/policy'
			});
		},
		recommed() {
			uni.navigateTo({
				url: '/pages/part/recommed'
			});
		},
		project() {
			uni.navigateTo({
				url: '/pages/part/project'
			});
		},
		vendor() {
			uni.navigateTo({
				url: '/pages/part/vendor'
			});
		},
		ontabchange(){
			 let index = e.target.current || e.detail.current;
		},
		//顶部tab点击
			tabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
				var aId = e.currentTarget.dataset.id;
				console.log(aId+'1111111');
			
				var tarGetObj = document.getElementById("id-" + aId);
				tarGetObj.style = "";
				//遍历其他的div，隐藏
				if (aId == 0) {
					var tarGetObj2 = document.getElementById("id-1");
					tarGetObj2.style = "display:none;";
				} else {
					var tarGetObj2 = document.getElementById("id-0");
					tarGetObj2.style = "display:none;";
				}
			},
	},

};
</script>

<style>
	@font-face {
		font-family: newincon;
		src: url('~@/static/xinziti.otf')
	}
	.menuactive{
		color:#DD524D;
	}
	.top{
		display: flex;
		flex-direction: row;
		justify-content:space-between;
	}
	.left_top{
		display: flex;
		flex-direction: row;
		white-space:nowrap;
	}
	.sty{
		display: none;
	}
	.left{
		display: flex;
		flex-direction: column;
		margin-left:46rpx;
		align-content: center;
		padding:10px;
		flex-wrap:nowrap;
		margin:0 auto;
	}
	.passby{
		width:2rpx;
		height:80rpx;
		background-color:#C0C0C0;
		margin:0 auto;
		margin-top:-160rpx;
		margin-bottom: 100rpx;
	}
	.passby_1{
		width:600rpx;
		height:2rpx;
		background-color:#C0C0C0;
		margin:0 auto;
		margin-top:8rpx;
		margin-bottom: 100rpx;
	}
	.right{
		display: flex;
		flex-direction: column;
		align-content: center;
		padding:10px;
		flex-wrap:nowrap;
		margin-right:360rpx;
	}

	.leftmes{
		margin-bottom: 20px;
	}
	.one_box {
		display: flex;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #666666;
		height: 112rpx;
		justify-content: center;
		align-items: flex-end;
		flex-direction: row;
		background-color: #ffffff;
		/* padding-top: 18rpx; */
	}
	.bgcolor {
		background-color: #ededed;
	}
	.one_col {
				color:#AFAFAF;
	    height:200rpx;
	    width:90%;
		margin:20rpx auto;
		justify-content: space-around; /* 水平居中 */      
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		background-color: #ffffff;
		/* padding-top: 18rpx; */
		margin:24rpx 24rpx 24rpx 24rpx;
			border-radius: 5px;
		box-shadow: 1px 1px 5px #CACACA;
	}
	.list{
		color:#AFAFAF;
		font-size:32rpx;
		height:800rpx;
		width:90%;
		margin:20rpx auto;
		justify-content: space-around; /* 水平居中 */      
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		background-color: #ffffff;
		/* padding-top: 18rpx; */
		margin:100rpx 24rpx 24rpx 24rpx;
			border-radius: 5px;
		box-shadow: 4px 5px 5px #CACACA;
	}
	.one_col_title {
		flex: 1;
		color: #999999;
		margin-bottom: 20upx;
		font-size: 16px;
	}
		.color_333333 {
		color: #333333;
	}
	.nav_bottom_act {
		border-bottom: 6rpx solid #F04F43;
	}
	.nav_bottom {
		margin-top:60rpx;
		display: flex;
		justify-content: center;
		height: 1rpx;
		width: 48px;
		border-bottom: 6rpx solid #ffffff;
	}
</style>