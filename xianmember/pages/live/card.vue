<template>
	<view class="page">
		<!-- 顶部 -->
		<!-- <view class="title" @click="bank()">
			<image src="../../static/leftjt.png" class="left"></image>
			<view style="margin-left: 16rpx;color: #FFFFFF;">支付收银台</view>
		</view> -->
		<!--  价格-->
	
		<!-- 支付方式 -->
		<view class="way">
			<!-- <view class="alipay"  @click="btnClick(0)">
				<view class="uni-alipay">
					<image src="../../static/alipay.png" style="width: 28rpx;height: 28rpx;"></image>
					<view style="margin-left: 16rpx;">支付宝支付</view>
				</view>

				<image src="../../static/gouxuan.png" v-if="payType==0" style="width: 32rpx;height: 32rpx;"></image>
				<image src="../../static/nogouxuan.png" v-else style="width: 32rpx;height: 32rpx;"></image>
			</view> -->
			
			<image src="../../static/service.jpg" style="width: 200px; height: 200px; margin: 0 auto;"></image>
			<text>添加客户微信咨询购买</text>
			<!-- <view class="alipay" @click="btnClick(1)">
				<view class="uni-alipay">
					<image src="../../static/wx.png" style="width: 28rpx;height: 28rpx;"></image>
					<view style="margin-left: 16rpx;">微信支付</view>
				</view>

				<image src="../../static/gouxuan.png" v-if="payType==1" style="width: 32rpx;height: 32rpx;" ></image>
				<image src="../../static/nogouxuan.png" v-else style="width: 32rpx;height: 32rpx;" ></image>
			</view> -->
			<!-- 立即支付 -->
			<!-- <view class="uni-pay" @click="payOrder">
				立即支付
			</view> -->

		</view>


	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				token:"",
				info:{},
				payType:0,
			}


		},
		onLoad:function(options){
			//this.token = uni.getStorageSync('token');
			//this.info = JSON.parse(options.item);
		},
		
		methods: {
			btnClick(val){
				this.payType = val;
			},
			payOrder(){
				uni.showLoading({
					title:"正在下单..."
				})
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/PayTaskPackage?taskPackageId="+_this.info.id + "&payType="+_this.payType,
					data:"",
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
				
						if (Helper.CheckData(res)) {
							var qrcode = res.data.data;
							
							uni.showModal({
								title:"是否支付完成了",
								content:"为了避免订单超时,请尽快完成支付",
								confirmText:"已完成",
								success:function(res){
									if (res.confirm){
										uni.navigateTo({
											url:"/pages/my/release"
										})
									}
									else
									{
										uni.switchTab({
											url:"/pages/live/live"
										})
									}
								}
							})
							
							var url = navigator.userAgent;
							if (url.indexOf("cdridge-android") > 0) {				
								wv.goUrl(qrcode)
							} else {
								location.href = qrcode;
							}
							
							
							//判断环境---跳支付宝链接
							// //#ifdef H5
							
							// location.href = qrcode;
							// //#endif
							
							//goUrl
							
							//#ifdef APP-PLUS
							//plus.runtime.openURL(qrcode);
							//#endif
						}
				
					},
					complete() {
						uni.hideLoading();
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
					}
				});
			}
			// bank() {
   //             uni.navigateBack({
   //             	delta:1
   //             })
			// }

		}

	}
</script>

<style>
	page {
		background: #F5F5F5;


	}

	.title {

		height: 128rpx;
		background: #F04F43;
		opacity: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		line-height: 128rpx;
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

	.price {

		height: 258rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

	}

	.uni-price {


		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-bottom: 10rpx;
		color: rgba(102, 102, 102, 1);
		opacity: 1;

	}

	.uni-price-a {
		font-size: 48rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-bottom: 10rpx;
		color: rgba(255, 89, 89, 1);
		opacity: 1;

	}

	.uni-date {

		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;

	}

	.way {
		margin-top: 20rpx;
		height: 928rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.alipay {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-left: 24rpx;
		margin-right: 24rpx;
		line-height: 84rpx;
		padding-top: 24rpx;
		border-bottom: 1rpx solid #EBEBEB;


	}

	.uni-alipay {
		display: flex;
		flex-direction: row;
		align-items: center;

		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;

		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.uni-pay {
		width: 90%;
		height: 92rpx;
		line-height: 92rpx;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;
		text-align: center;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;
		margin-top: 242rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;


	}
</style>
