<template>
	<view>
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#e4007f,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="go"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">我的卖单 </div>
				</div>
				<!---->
				<div class="uni-page-head-ft"></div>
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>

		<view class="tab-title">
			<view class="tab-item">
				<div class="lava" :style="{left:left}"></div>
				<span class="tab-item-span " :class="{'tab-item-span-active':state==-2}" @click="clickState(-2,'0')">全部</span>
				<span class="tab-item-span " :class="{'tab-item-span-active':state==0}" @click="clickState(0,'20%')">未出售</span>
				<span class="tab-item-span " :class="{'tab-item-span-active':state==1}" @click="clickState(1,'40%')">部分出售</span>
				<span class="tab-item-span " :class="{'tab-item-span-active':state==3}" @click="clickState(3,'60%')">已完成</span>
				<span class="tab-item-span " :class="{'tab-item-span-active':state==11}" @click="clickState(11,'80%')">已撤销</span>
			</view>
		</view>

		<view class="br"></view>
		<view class="trade-order-list" v-for="(item,index) in salemyList">
			<view class="trade-order-title">
				<view class="trade-order-title-span">
					{{item.createTime}}
				</view>
				<!-- 0未匹配 1部分匹配 2全部匹配 3完成 11撤销 -->
				<view class="trade-order-status" v-if="item.state==0">未出售</view>
				<view class="trade-order-status" v-else-if="item.state==1">部分出售</view>
				<view class="trade-order-status" v-else-if="item.state==3">已完成</view>
				<view class="trade-order-status" v-else>已撤销</view>
			</view>
			<view class="trade-order-info-a">
				<view class="trade-order-content">
					<h3>发布 渠豆卖单</h3>
					<p>价格：{{item.price}}</p>
					<p>数量：{{item.number}}</p>
				</view>
				<view class="trade-order-number">
					<h1>{{item.surplus}}</h1>
					<span>剩余</span>
				</view>

			</view>
			<view class="trade-order-operate">
				<view style="float: right;">
					<view class="btn-xiang active" @click="goTradeSaleOrderDetails(item)">详情</view>
					<view class="btn-xiang " @click="revokeTransaction(index,item.id)">撤销</view>
				</view>
			</view>
		</view>
		<!-- <a class="load-more-a" v-if="saletotal==salemyList.length">没有数据了</a> -->
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				token: "",
				salepageIndex: 1,
				salepageSize: 10,
				salemyList: [],
				saletotal: 0,
				state:-2,
				left:'0'
			};
		},
		onLoad: function() {
			this.token = uni.getStorageSync('token');

			this.getMySaleListEntity();
		},
		onReachBottom: function() {
			if (this.salemyList.length < this.saletotal) {
				this.salepageIndex++;
				this.getMySaleListEntity();
			}
		},
		onPullDownRefresh: function() {
			this.salepageIndex = 1;
			this.salemyList = [];
			this.getMySaleListEntity();
		},

		methods: {
			go() {
				uni.navigateTo({
					url: '/pages/Trade/TradeByAccount'
				});
			},
			clickState(e,l){
				this.state=e;
				this.left=l
				
				this.salemyList = [];
				this.getMySaleListEntity();
			},
			goTradeSaleOrderDetails(item) {

				uni.navigateTo({
					url: "/pages/Trade/TradeSaleOrderDetails?item=" + JSON.stringify(item)
				})
			},
			getMySaleListEntity() {
				var _this = this
				var params = {
					pageIndex: _this.salepageIndex,
					pageSize: _this.salepageSize,
					state: _this.state
				}
				uni.request({
					url: _this.ApiGateWay + '/sale/Transaction/GetSaleListUserEntity',
					data: params,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							if (res.data.errorCode == 0) {
								_this.salemyList = _this.salemyList.concat(res.data.list);
								_this.saletotal = res.data.total;
								console.log(_this.salemyList);
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
			},
			revokeTransaction(index, Id) {
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + '/sale/Transaction/RevokeTransaction?Id=' + Id,
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res)
						if (Helper.CheckData(res)) {
							_this.salemyList[index].state = 11;
							uni.showModal({
								title: '提示',
								content: '撤销成功',
								confirmColor: '#5A83E9',
								showCancel: false,
							});
						} else {
							uni.showToast({
								title: res.data.errorMessage,
								icon: "none"
							})
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

			///////////////////////


		}
	}
</script>


<style scoped>
	page {
		background: #F5F5F5;
	}

	.br {
		height: 100rpx;
	}

	.tab-title {
		width: 100%;
		background: #fff;
		overflow: hidden;
		position: fixed;
		left: 0;
		z-index: 999;
	}

	.lava {
		width: 20%;
		height: 80rpx;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
		transition: 0.5s;
	}
	.lava::after{		
		    width: 50%;
		    height: 4rpx;
		    content: '';
		    background: #ff5a5a;
		    border-radius: 4rpx;
		    position: absolute;
		    bottom: 0;
		    left: 25%;
	}
	
	.tab-item {
		table-layout: fixed;
		position: relative;
	}

	.tab-item-span {
		width: 20%;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		text-align: center;
		color: #555;
		display: block;
		float: left;
		position: relative;
		z-index: 2;
	}

	.tab-item-span-active {
		color: #ff5a5a;	
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

	.trade-order-operate {

		border-top: #eee 1px solid;
		overflow: hidden;
		padding: .3rem .5rem;
	}

	.btn-xiang {
		height: 1.3rem;
		line-height: 1.3rem;
		font-size: .72rem;
		color: #999;
		border: #ddd 1px solid;
		border-radius: .55rem;
		display: block;
		float: left;
		margin-left: .3rem;
		padding: 0 .72rem;
	}

	.active {
		color: #333;
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
