<template>
	<view class="page">
		<view class="swiper-item">
			<image src="../../../static/yigoumai.png" class="uni-topp"></image>
		</view>
		<view class="mes">
			<view class="textoder-a">
				<view class="textoder-b">
					<view style="margin-left: 20rpx;color: #ff5500;font-size: 28rpx;">已发货</view>
				</view>
				<view class="textoder-c">
					<!-- <view>获赞：{{item.quota}}</view> -->
					<view class="noways">
						<image :src="imgSvr + info.coverImg"  style="height:108px;width: 480rpx;"></image>
						<view class="noway">
							<view>商品名称：{{info.productName}}</view>
							<view>商品数量：{{info.num}}</view>
							<view>商品数量：{{info.adress}}</view>
							<!-- <view style="color: #999999;word-wrap: break-word">购买时间：{{info.payTime}}</view> -->
						</view>
						<!-- <view class="btn" v-else  @click="goTaskDetails(item)">
																	查看
																</view>
																 -->
					</view>
					<!-- <view style="margin-top: 8rpx;color: #999999;">使用时间：2020-01-18 22:55</view> -->
				</view>
			</view>
			<view style="color: #999999;" class="mid">
				<view class="uni-row">
					<view class="uni-row-a">
						<view>商品总价</view>
					</view>
					<view class="uni-row-a">
						<view style="margin-left:28rpx;color: #999999;">{{info.totalPrice}}渠豆</view>
					</view>
				</view>
				<view class="uni-row">
					<view class="uni-row-a">
						<view>订单号</view>
					</view>
					<view class="uni-row-a">
						<view>{{info.orderNo}}</view>
					</view>
				</view>
				<view class="uni-row">
					<view class="uni-row-a">
						<view>货运公司</view>
					</view>
					<view class="uni-row-a">
						<view>申通</view>
					</view>
				</view>
				<view class="uni-row">
					<view class="uni-row-a">
						<view>折扣</view>
					</view>
					<view class="uni-row-a">
						<view>0</view>
					</view>
				</view>
				<view class="uni-row">
					<view class="uni-row-a">
						<view>需支付</view>
					</view>
					<view class="uni-row-a">
						<view>{{info.totalPrice}}渠豆</view>
					</view>
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
		onLoad(options) {
			this.imgSvr = this.ImgServer;
			this.info = JSON.parse(options.item);
			 console.log(this.info);
		},
		methods: {

		}
	}
</script>

<style>
	.uni-topp {
		height: 220rpx;
		width: 102%;
		margin-left: -8rpx;
	}

	.textoder-a {
		height: 260rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 20rpx;

	}

	.textoder-b {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 66rpx;
		border-bottom: 1rpx solid #F5F5F5;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.noways {
		margin-right: 90rpx;
		display: flex;
		flex-direction: row;
		flex: 1;
		justify-content: space-between;
		align-items: center;


	}

	.noway {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
margin-left:60rpx;
	}

	.textoder-c {
		line-height: 2;
		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		/* align-items: flex-start; */
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-top: 22rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.mid {
		font-size: 28rpx;
		height: 500rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 150rpx;
		padding: 20rpx;
		box-shadow: 1px 1px 5px #C0C0C0;
	}

	.mes {
		padding: 7px;
	}

	.row {
		height: 564rpx;
		background: #FFFFFF;
		margin-left: 24rpx;
		margin-right: 24rpx;
		margin-top: 20rpx;

	}

	.uni-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		justify-content: space-between;
		flex: 1;
		height: 94rpx;
		margin-left: 22rpx;
		border-bottom: 1upx solid #EBEBEB;

	}

	.money {

		width: 38rpx;
		height: 38rpx;

	}

	.uni-row-a {

		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #999999;
		opacity: 1;
	}
</style>
