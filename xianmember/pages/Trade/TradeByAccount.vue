<template>

	<view>
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#e4007f,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">交易市场</div>
				</div>
				<!---->
				<div class="uni-page-head-ft"></div>
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>
		<view class="content">
			<!-- 我的趣豆，余额 -->
			<view class="balance">
				<view class="balance-a balance-b">
					<span>渠豆</span>
					<p>{{money}}</p>
				</view>
				<view class="balance-a">
					<span>余额</span>
					<p>{{moneyQuota}}</p>
				</view>
			</view>
			<!-- 当前价格 -->
		<!-- 当前价格 -->
		   <view class="price-update">
		    <view><span class="price-update-span1">昨日</span><span class="price-update-span2">{{priceTime.yesterday}}</span></view>
		    <view><span class="price-update-span1">今日</span><span class="price-update-span2">{{priceTime.sameday}}</span></view>
		    <view><span class="price-update-span1">明日预计</span><span class="price-update-span2">{{priceTime.tomorrow}}</span></view>
		   </view>
			<!-- 发布 -->
			
			<view class="trade-order">
				<view class="trade-order-1" @click="goReleaseSell">
					<i class="trade-order-i trade-order-1-i"></i>
					<span class="trade-order-span">发布卖单</span>
				</view>
				<view class="trade-order-1" @click="goTradeSaleOrder">
					<i class="trade-order-i trade-order-3-i"></i>
					<span class="trade-order-span">我的卖单</span>
				</view>
				<view class="trade-order-1" @click="goTradeOrder">
					<i class="trade-order-i trade-order-4-i"></i>
					<span class="trade-order-span" >交易记录</span>
				</view>
			</view>
			<view class="price-update" v-if="priceTime.total">
				<view><span class="price-update-span1">总成交量</span><span class="price-update-span2">{{priceTime.total}}</span></view>
				<view><span class="price-update-span1">今日成交量</span><span class="price-update-span2">{{priceTime.todayTotal}}</span></view>
			</view>
			<!-- 购买 -->
			<view class="starorder">
				<image src="../../static/no.png" style="width: 34rpx;height: 34rpx;"><text style="color: #FF9000;margin-left:16rpx;" >Tips</text></image>
				<view style="color:darkgray;font-size: 12px;">{{message}}</view>
			</view>
			<view class="trade-tab">
				<view class="trade-list-content" v-for="(item, index) in saleList">
					<image src="../../static/logo.png" class="header" mode=""></image>
					<view class="trade-list-item">
						<span class="trade-list-item-span1">{{item.userPhone}}</span>
						<span class="trade-list-item-span2">{{item.price}}</span>
					</view>
					<view class="trade-list-item">
						<span class="trade-list-item-span3">{{item.surplus}}个</span>
						<span class="trade-list-item-span4" @click="getBuy(index,item)">购买</span>
					</view>
				</view>

			</view>

			<uni-modal style="" v-if="action">
				<div class="uni-mask"></div>
				<div class="uni-modal">
					<div class="uni-modal__hd"><strong class="uni-modal__title">购买</strong></div>
					<div class="uni-modal__bd">
						<label class="release-label"><span style="float: left;">限额</span></label>
						<input class="uni-input modal-input" disabled type="number" v-model="item.surplus" maxlength="7"  />						
					</div>
					<div class="uni-modal__bd">
						<label class="release-label"><span style="float: left;">价格</span></label>
						<input class="uni-input modal-input" disabled type="number" v-model="item.price" maxlength="7"  />						
					</div>
					<div  class="uni-modal__bd">
						<label class="release-label"><span style="float: left;">数量</span></label>
						<input id="inbox" class="uni-input modal-input" focus placeholder="请输入购买数量" placeholder-style="color:#ffa6b4" type="number" v-model="buyNumber" @input="keUp" maxlength="7"  />						
					</div>
					<div class="uni-modal__bd">
						<label class="release-label"><span style="float: left;">实付金额</span></label>
						<input type="number" class="modal-input" disabled maxlength="7" v-model="buyMoney" />						
					</div>
					<div class="uni-modal__ft">
						<!---->
						<div class="uni-modal__btn uni-modal__btn_primary" style="color: rgb(90, 131, 233);" @click="addBuyListEntity"> 确定 </div>
						<div class="uni-modal__btn uni-modal__btn_primary" style="color: rgb(90, 131, 233);" @click="noBuy"> 取消 </div>
					</div>
				</div>
			</uni-modal>

		</view>
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				token: "",
				saleList: [],
				pageIndex: 1,
				pageSize: 10,
				total: 0,
				focus: false,
				money: 0,
				moneyQuota: 0,
			    message:"将赚到的渠豆通过市场进行变现，通过价值波动，获得更多利润。",
				priceTime: {},
				action:false,
				index:0,
				item:"",
				buyNumber:"",
				buyMoney:0
			}
		},
		onLoad: function() {
			this.token = uni.getStorageSync('token');
			console.log("1111")
			this.getUserLevelList();
			this.getSaleListEntity();
			this.getPriceTimeEntity()
		},
		onShow: function() {

		},
		onReachBottom: function() {
			if (this.saleList.length < this.total) {
				this.pageIndex++;
				this.getSaleListEntity();
			}
		},
		onPullDownRefresh: function() {
			this.pageIndex = 1;
			this.saleList = [];
			this.getSaleListEntity();
		},
		mounted () {
		document.getElementById('inbox').focus()
		},
		methods: {
			goIndex(){
				uni.switchTab({
				    url: '/pages/index/index'
				});
			}
			,
			keUp(event) {
				
				if (event.detail.value.length == 1) {
					this.buyNumber = event.detail.value.replace(/[^1-9]/g, '')
				} else {
					this.buyNumber = event.detail.value.replace(/\D/g, '')
				}
				
				this.buyNumber=this.buyNumber * 1;
				
				this.buyMoney= this.formatNumber(this.item.price * this.buyNumber,0.001);				
			},
			formatNumber(num, step) {
				//格式化数字，保留几位小数
				let stepStr = '' + step;
				let index = stepStr.indexOf('.');
				let len = index > -1 ? stepStr.length - index - 1 : 0;
				let offestNum = parseInt(1 + Array(('' + len).length + 1).join(0)) * 0.1;
				let tmpNum = num * offestNum;
				return ((parseInt(tmpNum / step + (step > 1 ? 1 : step) * 0.5) * step) / offestNum).toFixed(len);
			},
			goReleaseSell() {
				uni.navigateTo({
					url: '/pages/Trade/ReleaseSell'
				});
			},
			goTradeSaleOrder(){
				uni.navigateTo({
					url: '/pages/Trade/TradeSaleOrder'
				});
			},
			goTradeOrder(){
				uni.navigateTo({
					url: '/pages/Trade/TradeOrder'
				});
			},
			//获取用户渠豆余额
			getUserLevelList() {
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + "/sale/Transaction/GetMemberMoney",
					data: "",
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {

						if (Helper.CheckData(res)) {
							console.log(res)
							_this.money = res.data.data.money;
							_this.moneyQuota = res.data.data.moneyQuota

						}

					},
					complete() {
						uni.hideLoading();
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
					}
				});
			},
			getPriceTimeEntity() {
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + "/sale/Transaction/GetPriceTimeEntity",
					data: "",
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res)
						if (Helper.CheckData(res)) {
							// _this.slideMin = res.data.data.minPercentage - _this.step;
							// _this.slideMax = res.data.data.maxPercentage;
							// _this.rangeValues[0] = _this.slideMin;
							// _this.price = res.data.data.price;
							// _this.salePrice = res.data.data.price;
							// _this.thisPrice = res.data.data.price;
							_this.priceTime = res.data.data;
						}
			
					},
					complete() {
						uni.hideLoading();
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
					}
				});
			},
			
			getSaleListEntity() {
				var _this = this
				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					state: -1
				}
				uni.request({
					url: _this.ApiGateWay + '/sale/Transaction/GetSaleListEntity',
					data: params,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						if (Helper.CheckData(res)) {
							if (res.data.errorCode == 0) {
								_this.saleList = _this.saleList.concat(res.data.list);
								_this.total = res.data.total;
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
			getBuy(index,item) {				
				this.index=index;
				this.item=item;
				this.action=true;
			},
			noBuy(){
				this.index=0;
				this.item=0;
				this.action=false;
				this.buyNumber="";
				this.buyMoney=0;
			},
			//购买趣豆
			addBuyListEntity() {
				var _this = this;		
				
				if(this.item.surplus<_this.buyNumber)
				{
					uni.showToast({
						title: "购买数量不能大于别人出售数量",
						icon: "none"
					})
					return;
				}
				
				if(this.moneyQuota<this.buyMoney)
				{
					uni.showToast({
						title: "余额不足",
						icon: "none"
					})
					return;
				}
				
				uni.request({
					url: _this.ApiGateWay + '/sale/Transaction/AddBuyListEntity?saleId=' + this.item.id+'&number='+_this.buyNumber,
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res)
						if (Helper.CheckData(res)) {
							_this.getUserLevelList();
							
							if(_this.saleList[_this.index].surplus>_this.buyNumber){
								_this.saleList[_this.index].surplus=_this.saleList[_this.index].surplus-_this.buyNumber
							}else{
								_this.saleList.splice(_this.index, 1);
							}
							
							_this.noBuy();
							uni.showModal({
								title: '提示',
								content: '购买成功',
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
			},
			
			////////////////////
		}
	}
</script>

<style scoped>
	.content {}

	.balance {
		padding: 40rpx 0;
		background: linear-gradient(90deg, #e4007f, #f08300);
		overflow: hidden;
	}
	.starorder {
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		/* margin-left: 24rpx;
			margin-right: 24rpx; */
		padding: 20rpx;
		border-bottom:solid 0.5px #eee;
	}
	.balance-a {
		color: #fff;
		text-align: center;
		position: relative;
		width: 50%;
		float: left;
	}

	.balance-a span {
		font-size: 26rpx;
	}

	.balance-a p {
		font-size: 42rpx;
	}

	.balance-b::after {
		width: 2rpx;
		height: 50rpx;
		content: '';
		background: rgba(255, 255, 255, .5);
		position: absolute;
		right: 0;
		top: 25%;
	}


	.price-update {
		height: 72rpx;
		display: flex;
		justify-content: space-around;
		border-bottom: 1rpx solid #eee;
		padding: 4rpx 0;
		line-height: 60rpx;
	}

	.price-update-span1 {
		color: #aaa;
		font-size: 23rpx;
	}

	.price-update-span2 {
		color: #333;
		font-size: 23rpx;
		margin-left: 10rpx
	}


	.trade-order {
		background: #fff;
		border-bottom: #eee 20rpx solid;
		display: flex;
		justify-content: space-around;
		overflow: hidden;
	}

	.trade-order-1 {
		padding: 20rpx 0;
		text-align: center;
		width: 100%;
	}

	.trade-order-i {
		width: 80rpx;
		height: 80rpx;
		display: block;
		background-repeat: no-repeat;
		background-position: center;
		margin: 0 auto;
	}

	.trade-order-1-i {
		background-image: url(../../static/trade_icon_1.svg);
	}

	.trade-order-3-i {
		background-image: url(../../static/trade_icon_3.svg);
	}

	.trade-order-4-i {
		background-image: url(../../static/trade_icon_4.svg);
	}

	.trade-order-span {
		font-size: 24rpx;
	}

	.trade-tab {
		overflow: hidden;
		position: relative;
	}

	.trade-list-content {
		background: #fff;
		border-bottom: #f1f1f1 1px solid;
		overflow: hidden;
		padding: 4rpx;
		position: relative;
		padding: 26rpx 26rpx;
	}

	.header {
		width: 88rpx;
		height: 88rpx;
		border-radius: 50%;
		float: left;
		margin-right: 26rpx;
	}

	.trade-list-item {
		display: flex;
		justify-content: space-between;
	}

	.trade-list-item-span1 {
		font-size: 28rpx;
		color: #333;
	}

	.trade-list-item-span2 {
		font-size: 30rpx;
		color: #ff5a5a;

	}

	.trade-list-item-span3 {
		font-size: 28rpx;
		color: #999;
	}

	.trade-list-item-span4 {
		font-size: 28rpx;
		color: #333;
		border: 1px #78BC43 solid;
		color: #78BC43;
		border-radius: 10%;
		width: 80rpx;
		text-align: center;
		cursor: pointer;
	}
	
	
	/* 购买 */
	
	.uni-modal__bd{
		padding: 0.8em 1.6em 0.8em;
		border-top:1px solid #d5d5d6;
		text-align: initial;
		color:#333333
	}
	.release-label {
		width: 35%;
		float: left;
		font-size: 14px;
		line-height: 1.8;
		padding: 0 30rpx;
	}
	.modal-input{
		color: #ff5a5a;
	}
</style>
