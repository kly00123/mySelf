<template name="basics">
	<view>
		<!-- 状态栏 -->
		<view v-if="showHeader" class="status" :style="{ position: headerPosition,top:statusTop,opacity: afterHeaderOpacity}"></view>
		<!-- 顶部导航栏 -->
		<view v-if="showHeader" class="header" :style="{ position: headerPosition,top:headerTop,opacity: afterHeaderOpacity }">
			<!-- 定位城市 -->
			<view class="addr">
				<view class="icon location"></view>
				{{ city }}
			</view>
			<!-- 搜索框 -->
			<view class="input-box">
				<input
					placeholder="默认关键字"
					placeholder-style="color:#c0c0c0;"
					@tap="toSearch()"
				/>
				<view class="icon search"></view>
			</view>
			<!-- 右侧图标按钮 -->
			<view class="icon-btn">
				<view class="icon yuyin-home"></view>
				<view class="icon tongzhi" @tap="toMsg"></view>
			</view>
		</view>
		<!-- 占位 -->
		<view v-if="showHeader" class="place"></view>
		<!-- 轮播图 -->
		<view class="swiper">
			<view class="swiper-box">
				<swiper circular="true" autoplay="true" @change="swiperChange">
					<swiper-item v-for="swiper in swiperList" :key="swiper.id">
						<image :src="swiper.img" @tap="toSwiper(swiper)"></image>
					</swiper-item>
				</swiper>
				<view class="indicator">
					<view
						class="dots"
						v-for="(swiper, index) in swiperList"
						:class="[currentSwiper >= index ? 'on' : '']"
						:key="index"
					></view>
				</view>
			</view>
		</view>
		<!-- 分类列表 -->
		<view class="category-list">
			<view
				class="category"
				v-for="(row, index) in categoryList"
				:key="index"
				@tap="toCategory(row)"
			>
				<view class="img"><image :src="row.img"></image></view>
				<view class="text">{{ row.name }}</view>
			</view>
		</view>
		<!-- 广告图 -->
<!-- 		<view class="banner"><image src="/static/banner/01.jpg"></image></view> -->
		<!-- 活动区 -->
		<view class="promotion">
			<view class="text">优惠专区</view>
			<view class="list">
				<view
					class="column"
					v-for="(row, index) in Promotion"
					@tap="toPromotion(row)"
					:key="index"
				>
					<view class="top">
						<view class="title">{{ row.title }}</view>
						<view class="countdown" v-if="row.countdown">
							<view>{{ row.countdown.h }}</view>
							:
							<view>{{ row.countdown.m }}</view>
							:
							<view>{{ row.countdown.s }}</view>
						</view>
					</view>
					<view class="left">
						<view class="ad">{{ row.ad }}</view>
						<view class="into">点击进入</view>
					</view>
					<view class="right"><image :src="row.img"></image></view>
				</view>
			</view>
		</view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="title">
				<image src="/static/img/hua.png"></image>
				猜你喜欢
				<image src="/static/img/hua.png"></image>
			</view>
			<view class="product-list">
				<view
					class="product"
					v-for="product in productList"
					:key="product.goods_id"
					@tap="toGoods(product)"
				>
					<image mode="widthFix" :src="product.img"></image>
					<view class="name">{{ product.name }}</view>
					<view class="info">
						<view class="price">{{ product.price }}</view>
						<view class="slogan">{{ product.slogan }}</view>
					</view>
				</view>
			</view>
			<view class="loading-text">{{ loadingText }}</view>
		</view>
	</view>
</template>

<script>
	import loadPromotion from '@/pages/mall/js/loadPromotion.js';
var ttt = 0;
//高德SDK
export default {
	data() {
		return {
			showHeader:true,
			afterHeaderOpacity: 1,//不透明度
			headerPosition: 'fixed',
			headerTop:null,
			statusTop:null,
			nVueTitle:null,
			city: '成都',
			currentSwiper: 0,
			// 轮播图片
			swiperList: [
				{ id: 1, src: 'url1', img: 'http://shegnqx.oss-cn-beijing.aliyuncs.com/1594190920471.jpg' },
				{ id: 2, src: 'url2', img: 'http://shegnqx.oss-cn-beijing.aliyuncs.com/1594190920471.jpg' },
			],
			// 分类菜单
			categoryList: [
				{ id: 1, name: '办公', img: '/static/mall/01.png' },
				{ id: 2, name: '家电', img: '/static/mall/02.png' },
				{ id: 3, name: '服饰', img: '/static/mall/03.png' },
				{ id: 4, name: '日用', img: '/static/mall/04.png' },
				{ id: 5, name: '蔬果', img: '/static/mall/05.png' },
				{ id: 6, name: '运动', img: '/static/mall/06.png' },
				{ id: 7, name: '书籍', img: '/static/mall/07.png' },
				{ id: 8, name: '文具', img: '/static/mall/08.png' }
			],
			Promotion: [],
			//猜你喜欢列表
			productList: [
				{
					goods_id: 0,
					img: '/static/img/goods/1.jpg',
					name: '索菲丝尔2020夏新品纯色百搭简约法式',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 1,
					img: '/static/img/goods/2.jpg',
					name: '乐町短袖t恤女夏装2020新款宽松韩版',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 2,
					img: '/static/img/goods/3.jpg',
					name: '2020新款法式小众泡泡袖短款方领上衣',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 3,
					img: '/static/img/goods/4.jpg',
					name: '2020新款长袖夏季上衣薄款格子衬衫复',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 4,
					img: '/static/img/goods/5.jpg',
					name: 'OKOJ品牌秋季中长款T恤女2020年新',
					price: '￥168',
					slogan: '1235人付款'
				},
				{
					goods_id: 5,
					img: '/static/img/goods/6.jpg',
					name: '中长款大码宽松网红t恤女ins超火短袖',
					price: '￥168',
					slogan: '1235人付款'
				}
			],
			loadingText: '正在加载...'
		};
	},
	onPageScroll(e) {
		//兼容iOS端下拉时顶部漂移
		this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
		this.headerTop = e.scrollTop>=0?null:0;
		this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
	},
	//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
	onPullDownRefresh() {
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
	onReachBottom() {
		uni.showToast({ title: '触发上拉加载' });
		let len = this.productList.length;
		if (len >= 40) {
			this.loadingText = '到底了';
			return false;
		}
		// 演示,随机加入商品,生成环境请替换为ajax请求

	},
	mounted() {
		//开启定时器
		this.Timer();
		//加载活动专区
		this.loadPromotion();
	},
	methods: {
		//加载Promotion 并设定倒计时,,实际应用中应该是ajax加载此数据。
		//消息列表
		toMsg(){
			uni.navigateTo({
				url:'../../msg/msg'
			})
		},
		loadPromotion()
		         {
					console.log("1");
					let cutTime = new Date();
					let yy = cutTime.getFullYear(),
						mm = cutTime.getMonth() + 1,
						dd = cutTime.getDate();
					let tmpcountdown = yy + '/' + mm + '/' + dd + ' 23:59:59';
					let tmpPromotion = [
						{
							title: '整点秒杀',
							ad: '整天秒杀专区',
							img: '/static/img/goods/3.jpg',
							countdown: false
						},
						{
							title: '限时抢购',
							ad: '每天23点上线',
							img: '/static/img/goods/4.jpg',
							countdown: tmpcountdown
						} //countdown为目标时间，程序会获取当前时间倒数
					];
					//检查倒计时
					for (let i = 0; i < tmpPromotion.length; i++) {
						let row = tmpPromotion[i];
						if (row.countdown) {
							let h = '00',
								m = '00',
								s = '00';
							let currentTime = new Date();
							let cutoffTime = new Date(tmpcountdown);
							if (!(currentTime >= cutoffTime)) {
								let countTime = parseInt(
									(cutoffTime.getTime() - currentTime.getTime()) / 1000
								);
								h = parseInt(countTime / 3600);
								m = parseInt((countTime % 3600) / 60);
								s = countTime % 60;
								h = h < 10 ? '0' + h : h;
								m = m < 10 ? '0' + m : m;
								s = s < 10 ? '0' + s : s;
							}
							tmpPromotion[i].countdown = { h: h, m: m, s: s };
							if(h==16&&m==45&&s==10){
								uni.showModal({
									title: '提示',
									content: '购买成功',
									confirmColor: '#5A83E9',
									showCancel: false,
								});
							}
						}
					}
					 this.Promotion = tmpPromotion;
				},
				Timer() {
					setInterval(() => {
						if (this.Promotion.length > 0) {
							for (let i = 0; i < this.Promotion.length; i++) {
								let row = this.Promotion[i];
								if (row.countdown) {
									if (
										!(
											row.countdown.h == 0 &&
											row.countdown.m == 0 &&
											row.countdown.s == 0
										)
									) 
									{
										if (row.countdown.s > 0) {
											row.countdown.s--;
											row.countdown.s =
												row.countdown.s < 10
													? '0' + row.countdown.s
													: row.countdown.s;
										} else if (row.countdown.m > 0) {
											row.countdown.m--;
											row.countdown.m =
												row.countdown.m < 10
													? '0' + row.countdown.m
													: row.countdown.m;
											row.countdown.s = 59;
										} else if (row.countdown.h > 0) {
											row.countdown.h--;
											row.countdown.h =
												row.countdown.h < 10
													? '0' + row.countdown.h
													: row.countdown.h;
											row.countdown.m = 59;
											row.countdown.s = 59;
										}
										this.Promotion[i].countdown = row.countdown;
									}
								}
							}
						}
					}, 1000);
				},
		//搜索跳转
		toSearch() {
			uni.showToast({ title: '建议跳转到新页面做搜索功能' });
		},
		//轮播图跳转
		toSwiper(e) {
			uni.showToast({ title: e.src, icon: 'none' });
		},
		//分类跳转
		toCategory(e) {
			//uni.showToast({title: e.name,icon:"none"});
			uni.setStorageSync('catName',e.name);
			uni.navigateTo({
				url: '../goods/goods-list/goods-list?cid='+e.id+'&name='+e.name
			});
		},
		//推荐商品跳转
		toPromotion(e) {
			uni.showToast({ title: e.title, icon: 'none' });
		},
		//商品跳转
		toGoods(e) {
			uni.showToast({ title: '商品' + e.goods_id, icon: 'none' });
			uni.navigateTo({
				url: '../goods/goods?goods_id=' + e.goods_id
			});
		},
		//轮播图指示器
		swiperChange(event) {
			this.currentSwiper = event.detail.current;
		}
	}
};
</script>
<style lang="scss">
page{position: relative;background-color: #fff;}

	@font-face {
		font-family: newincon;
		src: url('~@/static/xinziti.otf')
	}

.pullDown-effects{
	position: fixed;
	//top: calc(100upx - 36vw);
	top: 0;
	z-index: 9;
	width: 100%;
	height: 36vw;
	/*  #ifdef  APP-PLUS  */
	padding-top: var(--status-bar-height);
	/*  #endif  */
	image{
		width: 100%;
		height: 36vw;
	}
}
.status {
	width: 100%;
	height: 0;
	position: fixed;
	z-index: 10;
	background-color: #fff;
	top: 0;
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height); //覆盖样式
	/*  #endif  */
}
.header {
	width: 92%;
	padding: 0 4%;
	height: 100upx;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: #fff;

	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */

	.addr {
		width: 120upx;
		height: 60upx;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		font-size: 28upx;
		.icon {
			height: 60upx;
			margin-right: 5upx;
			display: flex;
			align-items: center;
			font-size: 42upx;
			color: #ffc50a;
		}
	}
	.input-box {
		width: 100%;
		height: 60upx;
		background-color: #f5f5f5;
		border-radius: 30upx;
		position: relative;
		display: flex;
		align-items: center;
		.icon {
			display: flex;
			align-items: center;
			position: absolute;
			top: 0;
			right: 0;
			width: 60upx;
			height: 60upx;
			font-size: 34upx;
			color: #c0c0c0;
		}
		input {
			padding-left: 28upx;
			height: 28upx;
			font-size: 28upx;
		}
	}
	.icon-btn {
		width: 120upx;
		height: 60upx;
		flex-shrink: 0;
		display: flex;
		.icon {
			width: 60upx;
			height: 60upx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			font-size: 42upx;
		}
	}
}
.place {
	background-color: #ffffff;
	height: 100upx;
	/*  #ifdef  APP-PLUS  */
	margin-top: var(--status-bar-height);
	/*  #endif  */
}
.swiper {
	width: 100%;
	margin-top: 10upx;
	display: flex;
	justify-content: center;
	.swiper-box {
		width: 92%;
		height: 30.7vw;

		overflow: hidden;
		border-radius: 15upx;
		box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
		//兼容ios，微信小程序
		position: relative;
		z-index: 1;
		swiper {
			width: 100%;
			height: 30.7vw;
			swiper-item {
				image {
					width: 100%;
					height: 30.7vw;
				}
			}
		}
		.indicator {
			position: absolute;
			bottom: 20upx;
			left: 20upx;
			background-color: rgba(255, 255, 255, 0.4);
			width: 150upx;
			height: 5upx;
			border-radius: 3upx;
			overflow: hidden;
			display: flex;
			.dots {
				width: 0upx;
				background-color: rgba(255, 255, 255, 1);
				transition: all 0.3s ease-out;
				&.on {
					width: (100%/3);
				}
			}
		}
	}
}

.category-list {
	width: 92%;
	margin: 0 4%;
	padding: 0 0 30upx 0;
	border-bottom: solid 2upx #f6f6f6;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.category {
		width: 25%;
		margin-top: 50upx;
		display: flex;
		flex-wrap: wrap;
		.img {
			width: 100%;
			display: flex;
			justify-content: center;
			image {
				width: 9vw;
				height: 9vw;
			}
		}
		.text {
			margin-top: 16upx;
			width: 100%;
			display: flex;
			justify-content: center;
			font-size: 24upx;
			color: #3c3c3c;
		}
	}
}
.banner {
	width: 92%;
	margin: 40upx 4%;
	image {
		width: 100%;
		height: 20vw;
		border-radius: 10vw;
		box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.3);
	}
}
.promotion {
	width: 92%;
	margin: 0 4%;
	.text {
		width: 100%;
		height: 60upx;
		font-size: 34upx;
		font-weight: 600;
		margin-top: -10upx;
	}
	.list {
		width: 100%;
		display: flex;
		justify-content: space-between;
		.column {
			width: 43%;
			padding: 15upx 3%;
			background-color: #ebf9f9;
			border-radius: 10upx;
			overflow: hidden;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.top {
				width: 100%;
				height: 40upx;
				display: flex;
				align-items: center;
				margin-bottom: 5upx;
				.title {
					font-size: 30upx;
				}
				.countdown {
					margin-left: 20upx;
					display: flex;
					height: 40upx;
					display: flex;
					align-items: center;
					font-size: 20upx;
					view {
						height: 30upx;
						background-color: #f06c7a;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #fff;
						border-radius: 4upx;
						margin: 0 4upx;
						padding: 0 2upx;
					}
				}
			}
			.left {
				width: 50%;
				height: 18.86vw;
				display: flex;
				flex-wrap: wrap;
				align-content: space-between;
				.ad {
					margin-top: 5upx;
					width: 100%;
					font-size: 22upx;
					color: #acb0b0;
				}
				.into {
					width: 100%;
					font-size: 24upx;
					color: #aaa;
					margin-bottom: 5upx;
				}
			}
			.right {
				width: 18.86vw;
				height: 18.86vw;
				image {
					width: 18.86vw;
					height: 18.86vw;
				}
			}
		}
	}
}
.goods-list {
	// background-color: #f4f4f4;
	.title {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80upx;
		color: #f47825;
		font-size: 30upx;
		margin-top: 10upx;
		image {
			width: 30upx;
			height: 30upx;
		}
	}
	.loading-text {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}
	.product-list {
		width: 92%;
		padding: 0 4% 3vw 4%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.product {
			width: 48%;
			border-radius: 20upx;
			background-color: #fff;
			margin: 0 0 15upx 0;
			box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);
			image {
				width: 100%;
				border-radius: 20upx 20upx 0 0;
			}
			.name {
				width: 92%;
				padding: 10upx 4%;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-align: justify;
				overflow: hidden;
				font-size: 30upx;
			}
			.info {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				width: 92%;
				padding: 10upx 4% 10upx 4%;

				.price {
					color: #e65339;
					font-size: 30upx;
					font-weight: 600;
				}
				.slogan {
					color: #807c87;
					font-size: 24upx;
				}
			}
		}
	}
}
</style>
