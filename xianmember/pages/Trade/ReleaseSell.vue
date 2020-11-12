<template>
	<view>
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#e4007f,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="go"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">发布渠豆 出售订单</div>
				</div>
				<!---->
				<div class="uni-page-head-ft"></div>
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>
		<view class="content">
			<!-- 我的渠豆，余额 -->
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
			<!-- 发布卖单 -->
			<view class="content-pre">
				<view class="pre">
					<label class="pre-laber">单价</label>
					<view class="pre-input">
						<input class="uni-input" type="number" @input="inpuPrice" v-model="salePrice" placeholder="请输入价格"/>
					</view>
				</view>

				<!-- <view class="pre">
							<view class="pre" style="border: none;">
								<label class="pre-laber">出售价格</label>
								<view class="pre-input">
									<input class="uni-input" :disabled="disabled" type="number" v-model="salePrice" />
								</view>
							</view>
							<view class="sell-price">
								
								<view>
									<RangeSlider :width="slideWidth" :height="slideHeight" :blockSize="slideBlockSize" :min="slideMin" :max="slideMax"
									 :values="rangeValues" :step="step" :liveMode="isLiveMode" @rangechange="onRangeChange">
										<view slot="minBlock" class="range-slider-block"></view>
										
										<view slot="maxBlock" class="range-slider-block"></view>
										
									</RangeSlider>

								</view>
								<view class="sell-price-text">
									{{rangeValues[1]}}%
								</view>
							</view>

						</view>
					-->
				<view class="pre">
					<label class="pre-laber">出售数量</label>
					<view class="pre-input">
						<input class="uni-input" @input="keUp" type="number" v-model="number" placeholder="请输入出售数量"/>
					</view>
				</view>

				<view class="pre">
					<label class="pre-laber">购买总额</label>
					<view class="pre-input">
						<input class="uni-input" :disabled="disabled" type="number" v-model="saleMoney" />
					</view>
				</view>
				<view class="action-btn">
					<button type="warn" @tap="addSaleListEntity">确认</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Helper from '@/function.js';
	// import RangeSlider from '@/components/range-slider.vue'
	export default {
		// components: {
		// 	RangeSlider
		// },
		data() {
			return {
				token: "",
				money: "",
				moneyQuota: "",
				disabled: true,
				//当前价格
				price: 0,
				thisPrice: 0,
				//出售价格
				salePrice: "",
				//出售数量
				number: "",
				//总金额
				saleMoney: "",
				minNumber: 0,
				rangeValues: [-10, 0],
				slideWidth: 500,
				slideHeight: 10,
				slideBlockSize: 30,

				slideMin: -10.01,
				slideMax: 10,

				isLiveMode: true,
				step: 0.01,
			}
		},
		onLoad: function() {
			this.token = uni.getStorageSync('token');
			this.getUserLevelList();
			//获取当前价格
			 this.getPriceTimeEntity()
		},
		onShow: function() {

		},
		computed: {
			current() {
				return this.show ? 0 : 1;
			}
		},
		methods: {
			inpuPrice(){
				let stepStr= this.salePrice+"";
				
				let index = stepStr.indexOf('.');
				
				let len = index > -1 ? stepStr.length - index - 1 : 0;
				
				if(len>3){	
					uni.showToast({
						title: "价格最多支持三位小数",
						icon: "none"
					})
					this.salePrice ="";					
				}
			}
			,
			keUp(event) {
				if (event.detail.value.length == 1) {
					this.number = event.detail.value.replace(/[^1-9]/g, '')
				} else {
					this.number = event.detail.value.replace(/\D/g, '')
				}

				// this.number = this.number * 1;

				this.saleMoney = this.formatNumber(this.salePrice * this.number, 0.001);

			},
			go() {
				uni.navigateTo({
					url: '/pages/Trade/TradeByAccount'
				});
			},
			onRangeChange: function(e) {

				let mprice = this.thisPrice + this.thisPrice * e.maxValue / 100;
				this.salePrice = this.formatNumber(mprice, 0.001);

				if (this.number) {
					this.saleMoney = this.formatNumber(this.salePrice * this.number, 0.001);
				}
				this.rangeValues = [e.minValue, e.maxValue];

				// console.log(this.rangeValues);
				// console.log(JSON.stringify(e));
			},
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

						if (Helper.CheckData(res)) {
							// _this.slideMin = res.data.data.minPercentage - _this.step;
							// _this.slideMax = res.data.data.maxPercentage;
							// _this.rangeValues[0] = _this.slideMin;
							// _this.price = res.data.data.price;
							// _this.salePrice = res.data.data.price;
							// _this.thisPrice = res.data.data.price;
							_this.minNumber = res.data.data.minNumber;
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
			formatNumber(num, step) {
				//格式化数字，保留几位小数
				let stepStr = '' + step;
				let index = stepStr.indexOf('.');
				let len = index > -1 ? stepStr.length - index - 1 : 0;
				let offestNum = parseInt(1 + Array(('' + len).length + 1).join(0)) * 0.1;
				let tmpNum = num * offestNum;
				return ((parseInt(tmpNum / step + (step > 1 ? 1 : step) * 0.5) * step) / offestNum).toFixed(len);
			},
			addSaleListEntity() {
				var _this = this;
				// uni.showLoading({
				// 	title: "加载中..."
				// })
				if (_this.number > _this.money) {
					uni.showToast({
						title: "你的渠豆不足",
						icon: "none"
					})
					return;
				}

				if (!_this.number) {
					uni.showToast({
						title: "请输入数量",
						icon: "none"
					})
					return;
				}

				if (_this.number % _this.minNumber != 0) {
					uni.showToast({
						title: "数量是" + _this.minNumber + "的倍数",
						icon: "none"
					})
					return;
				}

				if (_this.number < _this.minNumber) {
					uni.showToast({
						title: "数量必须大于" + _this.minNumber,
						icon: "none"
					})
					return;
				}

				uni.request({
					url: _this.ApiGateWay + '/sale/Transaction/AddSaleListEntity?price=' + _this.salePrice + '&number=' + _this.number +
						'&money=' + _this.saleMoney,
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
							_this.rangeValues[1] = 0;
							_this.number = "";
							_this.salePrice = _this.thisPrice;
							_this.saleMoney = "";
							uni.showModal({
								title: '提示',
								content: '发布成功',
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

			/////////


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

	.content-pre {
		border-radius: 4px;
		margin: 40rpx 40rpx;
		padding: 20rpx;
		box-shadow: 1px 1px 10px #C0C0C0
	}

	.pre {
		display: table;
		border-bottom: #f1f1f1 1px solid;
		width: 100%;
	}

	.pre-laber {
		display: table-cell;
		font-size: 30rpx;
		padding: 0 10rpx;
		width:200rpx
	}

	.pre-input {
		display: table-cell;
		font-size: 30rpx !important;
	}

	.uni-input {
		height: 90rpx;
	}

	.sell-price {
		width: 500rpx;
		height: 40rpx;
		position: relative;
		padding: 0 40rpx 0 0;
	}

	.sell-price-text {
		font-size: 30rpx;
		position: absolute;
		right: -50rpx;
		top: -14rpx;
		width: 80rpx;
	}

	.action-btn {
		padding: 20rpx 20rpx;
		margin-top: 50rpx;
	}
</style>
