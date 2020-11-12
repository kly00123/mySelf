<template>
	<view>
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#e4007f,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="go"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">卖单记录</div>
				</div>
				<!---->
				<div class="uni-page-head-ft"></div>
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>
		
		<view class="trade-order-list" v-for="(item,index) in buyList">
			<view class="trade-order-title">
				<view class="trade-order-title-span">
					{{item.createTime}}
				</view>
				<view class="trade-order-status">
					已完成
				</view>
			</view>
			<view class="trade-order-info-a">
				<view class="trade-order-content">
					<h3>购买 渠豆订单</h3>
					<p>价格：{{item.buyPrice}}</p>
					<p>数量：{{item.buyNumber}}</p>
				</view>
				<view class="trade-order-number">
					<h1>{{item.buyPrice*item.buyNumber}}</h1>
					<span>余额支付</span>
				</view>
			</view>
		</view>
		<!-- <a class="load-more-a" v-if="buyList.length==0">没有数据</a> -->
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				token:"",
				buypageIndex: 1,
				buypageSize: 10,
				buyList: [],
				buytotal: 0,
				saleEntity:{}
			};
		},
		onLoad: function(option) {
			this.token = uni.getStorageSync('token');
			console.log(JSON.parse(option.item));
			this.saleEntity = JSON.parse(option.item);
			this.getMyBuyListEntity();
		},
		onReachBottom: function() {
			if (this.buyList.length < this.buytotal) {
				this.buypageIndex++;
				this.getMyBuyListEntity();
			}
		},
		onPullDownRefresh: function() {
			this.buypageIndex = 1;
			this.buyList = [];
			this.getMyBuyListEntity();
		},

		methods: {
			go() {
				uni.navigateTo({
					url: '/pages/Trade/TradeSaleOrder'
				});
			},
			//获取我的买单
			getMyBuyListEntity() {
				var _this = this
				console.log("111");
				uni.request({
					url: _this.ApiGateWay + '/sale/Transaction/GetMyBuyListEntity?saleId='+_this.saleEntity.id,
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							if (res.data.errorCode == 0) {								
								_this.buyList = _this.buyList.concat(res.data.list);
								_this.buytotal = res.data.total;
								console.log(_this.saleList);
							}
						}
					},
					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
						uni.hideLoading();
						uni.stopPullDownRefresh()
					}
				});
			}


		}
	}
</script>


<style scoped>
	page {
		background: #F5F5F5;
	}

	.trade-order-list {
		background-color: #fff;
		margin-bottom: 20rpx;
	}

	.trade-order-title {
		border-bottom: #eee 1px solid;
		overflow: hidden;
		padding: 20rpx 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.trade-order-title-span {
		font-size: .7rem;
		color: #999;
		display: block;
	}

	.trade-order-status {
		font-size: .7rem;
		color: #ff5a5a;
		display: block;
	}

	.trade-order-info {}

	.trade-order-info-a {

		min-height: 3.6rem;
		overflow: hidden;
		display: block;
		padding: .6rem .5rem .6rem .5rem;
		position: relative;
	}

	.trade-order-content {}

	.trade-order-content h3 {
		font-size: .8rem;
		color: #333;
		padding-bottom: .3rem;
		font-weight: normal;
	}

	.trade-order-content p {
		font-size: .7rem;
		color: #999;
	}

	.trade-order-number {
		text-align: right;
		position: absolute;
		right: .5rem;
		top: 1rem;
	}

	.trade-order-number h1 {
		font-size: 1.1rem;
		color: #333;
		padding-bottom: .3rem;
		font-weight: normal;
	}

	.trade-order-number span {
		font-size: .65rem;
		color: #aaa;
		display: block;
	}
	
	.load-more-a {
	    width: 100%;
	    font-size: .9rem;
	    color: #555;
	    text-align: center;
	    display: block;
	    padding: 1rem 0;
	}
</style>
