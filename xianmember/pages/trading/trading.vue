<template>
	<!-- 	<view class="flow-box" :style="'height: ' + loadingTop + 'rpx'" ref="flow_box">
		<view v-for="product in productList" :key="product.goods_id" class="item good_item" v-show="productList[product.objId].goods_id" :class="productList[product.goods_id].right ? 'right' : 'left'" :style="{top: productList[product.objId].top + 'rpx'}"
		  @tap="toGoods(product)">
			<view class="goods_img">
				<image :src="product.img" mode="widthFix"></image>
			</view>
			<view class="title">{{ product.name }}</view>
			<view class="info">
<view class="price">￥{{ product.price }}</view>
						<view class="slogan">趣豆:{{ product.slogan }}个<span :class="(product.money>0)?'':'slogan_dis'">+{{ product.money }}元</span></view>
			</view>
		</view>
	</view> -->
	<view>
	<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">兑换中心</div>
				</div>
				<!---->
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>
		<view style="height:300rpx ;relative;z-index: 0;margin-top:-80rpx;width:100%;border-radius:50rpx;hidden;box-shadow:1px 1px 5px rgb(130, 105, 105);">
			<swiper :autoplay="false" :interval="3000" :duration="1000" indicator-color="#FFFFFF" indicator-active-color="#FFFFFF"
			 style="height:300rpx">
				<swiper-item>
					<view class="swiper-item" >
						<image src="../../static/duitu.png" style="border-radius:50rpx;" class="uni-top" @click="down"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	<view class="goods-list">
		<view class="starorder">
			<image src="../../static/no.png" style="width: 34rpx;height: 34rpx;"><text style="color: #FF9000;margin-left:16rpx;" >Tips</text></image>
			<view style="color:darkgray;font-size: 12px;">{{message}}</view>
		</view>
		<view class="product-list">
			<view class="product" v-for="product in productLis" :key="product.id" @tap="toGoods(product)"v-if="2>product.id">
				<image mode="widthFix" :src="product.img" style="height:180px;"></image>
				<!-- <image :src="'../../static/task/'+product.status+'.png'"  mode="widthFix" style="height:184px;"></image> -->
				<view class="name">{{ product.name }}</view>
				<view class="info">
					<view :class="(product.id>2)?'price':'slogan_dis'">￥{{ product.price }}</view>
					<view :class="(product.id>2)?'slogan':'slogan_dis'">渠豆:{{ product.qudou }}个<span :class="(product.money>0)?'':'slogan_dis'">+{{ product.money }}元</span></view>
				</view>
			</view>
		</view>
	</view>
	<view class="goods-list1">
		<view class="product-list">
			<view class="product" v-for="product in productList" :key="product.id" @tap="toGoods(product)">
				<!-- <image mode="widthFix" :src="product.coverImg" style="height:184px;"></image> -->
				<image :src="imgSvr + product.coverImg" style="height:184px;"></image>
				<view class="name">{{ product.name }}</view>
				<view class="info">
					<view class="price">￥{{ product.price }}</view>
					<view class="slogan">渠豆:{{ product.qudou }}个<span :class="(product.money>0)?'':'slogan_dis'">+{{ product.money }}元</span></view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				productList:[],
				positionList: {},
				loadingTop: 0,
				imgSvr:'',
				pageIndex: 1,
				pageSize: 14,
				total: 0,
				status: 1,
				message:"渠赞与城市酷选及商家进行合作，渠豆直接用于兑换现金、商品、服务等。",
				leftHistoryTop: 0,
				rightHistoryTop: 0,
				productLis: [{
						id: 0,
						img: '/static/img/goods/duihuan.png',
						name: '渠豆兑换余额',
						select: '3',
						price: '',
						qudou: '', //趣豆
						money: '' //余额
					},
					{
							id: 1,
							img: '/static/img/goods/dh.png',
							name: '渠豆升级代理',
							select: '4',
							price: '',
							qudou: '', //趣豆
							money: '' //余额
						},
					{
						id: 6,
						img: '/static/img/goods/wz1.jpg',
						name: '王者荣耀点券180点券',
						price: '18',
						select: '2',
						qudou: '500',
						money: '0'
					},
					{
						id: 7,
						img: '/static/img/goods/wz2.jpg',
						name: '王者荣耀300点券',
						price: '30',
						select: '2',
						qudou: '750',
						money: '0'
					},
					{
						id: 8,
						img: '/static/img/goods/wz3.jpg',
						name: '王者荣耀680点券',
						select: '2',
						price: '68',
						qudou: '1500',
						money: '0'
					},
					{
						id: 9,
						img: '/static/img/goods/wz4.jpg',
						name: '王者荣耀3480点券',
						price: '348',
						select: '2',
						qudou: '7200',
						money: '0'
					}
				],
			}
		},
		onLoad: function(option) {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			this.getInfo();
		},
		onReachBottom: function() {
			if (this.productList.length < this.total) {
				this.pageIndex++;
				this.getInfo();
			}
		},
		onPullDownRefresh: function() {
			this.pageIndex = 1;
			this.productList = [];
			this.getInfo();
		},
		onshow(){
		},
		methods: {
			toGoods(e) {
				if (e.select==2) {
					uni.navigateTo({
						url: 'goods/point?id=' + e.id + "&qudou=" + e.qudou + '&name=' + e.name
					});
				}
				if (e.select==3) {
					uni.navigateTo({
						url: '/pages/trading/goods/change'
					});
				}
				if (e.select==4) {
					uni.navigateTo({
						url: 'goods/partner?id=' + e.id
					});
				}
				else{
					uni.showToast({
						title: '商品' + e.id,
						icon: 'none'
					});
					uni.navigateTo({
						url: 'goods/goods?id=' + e.id
					});
					}
			},
			goIndex(){
				uni.switchTab({
				    url: '/pages/index/index'
				});
			},		
			down(){
				uni.navigateTo({
				    url: '/pages/invite/chengshi'
				});
			},
			getInfo() {
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				var parmas={
					status:1,
					pageIndex:_this.pageIndex,
					pageSize:_this.pageSize				
				}
				uni.request({
					url: _this.ApiGateWay + '/sale/shoppingProduct/GetProducts',
					data: parmas,
					method: 'post',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						if (Helper.CheckData(res)) {
							_this.productList =_this.productList.concat(res.data.list);
							_this.total=res.data.total;
							console.log(_this.productList);

						} else {

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
			},
		}

	};
</script>

<style lang="scss">
	.goods-list {
margin-top:-80rpx;
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
		}

		image {
			width: 30upx;
			height: 30upx;
		}
	}
	.goods-list1 {
	margin-top:-20rpx;
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
			}
	
			image {
				width: 30upx;
				height: 30upx;
			}
		}
	.starorder {
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 100rpx;
		/* margin-left: 24rpx;
			margin-right: 24rpx; */
		padding: 20rpx;
		border-bottom: solid 0.5px #eee;
		margin-bottom: 40rpx;
	}
	.uni-top {
		width: 100%;
		height: 300rpx;
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
				flex-direction: column;
				justify-content: space-between;
				// align-items: flex-end;
				width: 92%;
				padding: 10upx 4% 10upx 4%;

				.price {
					text-decoration: line-through;
					color: #848484;
					font-size: 30upx;
					font-weight: 600;
				}

				.slogan {
					color: #fe1d59;
					font-size: 24upx;

					#span {
						font-size: 50px;
					}
				}

				.slogan_dis {
					display: none;
				}
			}
		}
	}
</style>
