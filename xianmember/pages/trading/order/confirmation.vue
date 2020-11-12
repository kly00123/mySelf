<template>
	<view>
		<!-- 收货地址 -->
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goGoods"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">确认订单</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
		<view class="addr" @tap="selectAddress">
			<view class="icon">
				<image src="../../../static/img/addricon.png" mode=""></image>
			</view>
			<view class="right">
				<view class="tel-name">
					<view class="name">
						{{recinfo.userName}}
					</view>
					<view class="tel">
						{{recinfo.userPhone}}
					</view>
				</view>
				<view class="addres">
					{{recinfo.address}}
					{{recinfo.fullAddress}}
				</view>
			</view>
		</view>
		<!-- 购买商品列表 -->
		<view class="buy-list">
			<view class="row" v-for="(row,index) in buylist" :key="index">
				<view class="goods-info">
					<view class="img">
						<image :src="imgSvr + row.img"></image>
					</view>
					<view class="info">
						<view class="title">{{row.name}}</view>
						<view class="spec">数量:{{row.num}}</view>
						<view class="price-number">
							<view class="price">渠豆:{{row.qudou*row.num}}<span :class="(row.money>0)?'':'slogan_dis'">+{{ (row.money*row.num).toFixed(2) }}元</span></view>
							<view class="number">
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 提示-备注 -->
		<!-- 		<view class="order">
			<view class="row">
				<view class="left">
					备注 :
				</view>
				<view class="right">
					<input placeholder="选填,备注内容" v-model="note" />
				</view>
			</view>
		</view> -->
		<!-- 明细 -->
		<view class="detail">
			<view class="row">
				<view class="nominal">
					商品金额
				</view>
				<view class="content">
					￥{{goodsPrice|toFixed}}
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					渠豆数量
				</view>
				<view class="content">
					{{qudou}}豆
				</view>
			</view>
		</view>
		<view class="blck">

		</view>
		<view class="footer">
			<view class="settlement">
				<!-- 				<view class="sum">合计:<view class="money">￥{{sumPrice|toFixed}}</view></view> -->
				<view class="btn" @click="toPay">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				slogan: 0,
				buylist: [], //订单列表
				goodsPrice: 0.0, //商品合计价格
				sumPrice: 0.0, //用户付款价格
				freight: 20.00, //运费
				note: '', //备注
				imgSvr:'',
				int: 1200, //抵扣积分
				deduction: 0, //抵扣价格
				recinfo: [],
				getAdr:[]
			};
		},
		onLoad: function(options) {
			uni.getStorage({
				key: 'isDefaultList',
				success: (e) => {
					this.recinfo = e.data[0];
					uni.removeStorage({
						key: 'isDefaultList'
					})
				}
			})
			uni.getStorage({
				key: 'selectAddress',
				success: (e) => {
					this.recinfo = e.data;
					uni.removeStorage({
						key: 'selectAddress'
					})
				}
			})
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			this.getAdress();
		},
		onShow() {
			//页面显示时，加载订单信息
			uni.getStorage({
				key: 'isDefaultList',
				success: (e) => {
					this.recinfo = e.data[0];
					uni.removeStorage({
						key: 'isDefaultList'
					})
					// uni.getStorage({
					// 	key: 'selectAddress',
					// 	success: (e) => {
					// 		this.recinfo = e.data;
					// 		uni.removeStorage({
					// 			key: 'selectAddress'
					// 		})
					// 	}
					// })
				}
			})
			uni.getStorage({
				key: 'buylist',
				success: (ret) => {
					//console.log(this.buylist);
					this.buylist = ret.data;
					this.goodsPrice = 0;
					this.qudou = 0;
					//合计
					//	console.log(ret.data);
					let len = this.buylist.length;
					for (let i = 0; i < len; i++) {
						this.goodsPrice = this.goodsPrice + (this.buylist[i].num * this.buylist[i].money);
						if (!this.buylist[i].money) {
							this.goodsPrice = 0
						}
						this.qudou = this.qudou + (this.buylist[i].num * this.buylist[i].qudou);
					}
					this.deduction = this.int / 100;
					// this.sumPrice = this.goodsPrice-this.deduction;
					this.sumPrice = this.goodsPrice;
					
				}
			});
		},
		onHide() {

		},
		onBackPress() {
			//页面后退时候，清除订单信息
			this.clearOrder();
		},
		filters: {
			toFixed: function(x) {
				return parseFloat(x).toFixed(2);
			}
		},
		methods: {
			clearOrder() {
				uni.removeStorage({
					key: 'buylist',
					success: (res) => {
						this.buylist = [];
						console.log('remove buylist success');
					}
				});
			},
			goGoods(){
				uni.navigateTo({
				    url: "/pages/trading/trading"
				});
			},
			getAdress(){
				var _this = this;
				var getAdr=[];
				uni.request({
					url: _this.ApiGateWay + '/sale/shopping/GetAddressBymemberId',
					data: '',
					method: 'post',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						if (Helper.CheckData(res)) {
							for(var i=0;i<res.data.list.length;i++){
								if (1==res.data.list[i].isDefault){
									getAdr.push(res.data.list[i])
									_this.getAdr=getAdr[0]
								}
							}
							// _this.adressList = res.data.list;
							//console.log(_this.getAdr);
						} else {
			
						}
					},
					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
						uni.hideLoading();
					}
								
								
				})
			},
			toPay() {
				var _this = this;
				//商品列表
				let paymentOrder = [];
				let goodsid = [];
				//console.log(this.recinfo.id);
				let len = this.buylist.length;
				for (let i = 0; i < len; i++) {
					paymentOrder.push(this.buylist[i]);
					goodsid.push(this.buylist[i].id);
				}
				// console.log(paymentOrder);
				console.log(paymentOrder[0].id);
				//var productId = paymentOrder[0].id;
				var parmas={
					productId: paymentOrder[0].id,
					addressId: _this.recinfo.id,
					num: paymentOrder[0].num
				}
				console.log(parmas);
				if (!parmas.addressId){
						uni.showModal({
							title: "信息提示",
							content: "请填写收货地址！！！",
							showCancel: false
						})
							return;
							
				}
				uni.request({
					url: _this.ApiGateWay + '/sale/shopping/BuyProduct',
					data:parmas,
					method: 'POST',
					dataType: 'json',
					async: false,
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						if (Helper.CheckData(res)) {
							uni.showLoading({
								title: '正在提交订单...',
							})
							setTimeout(() => {
								uni.setStorage({
									key: 'paymentOrder',
									data: paymentOrder,
									success: () => {
										console.log(res);
										uni.hideLoading();
										uni.redirectTo({
											url: '../success/success'
										})
									}
								})
							}, 1000)
						}
						else{
							uni.showModal({
								title: "信息提示",
								content: res.data.errorMessage,
								showCancel: false
							})
							return;
						}
					},
					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
						uni.hideLoading();
					}


				})
				if (paymentOrder.length == 0) {
					uni.showToast({
						title: '订单信息有误，请重新购买',
						icon: 'none'
					});
					return;
				}
				//本地模拟订单提交UI效果

			},
			// getInfo() {
			// 	var _this = this;
			// 	uni.showLoading({
			// 		title: "请稍候..."
			// 	})
			// 	uni.request({
			// 		url: _this.ApiGateWay + '/sale/Member/GetInfo',
			// 		data: "",
			// 		method: 'POST',
			// 		dataType: 'json',
			// 		header: {
			// 			Authorization: _this.token
			// 		},
			// 		success: function(res) {
			// 			if (Helper.CheckData(res)) {
			// 				_this.info = res.data.data;
			// 				_this.info.money=_this.info.money-_this.goodsPrice;
			// 				console.log(_this.info.money);
			// 			} else {

			// 			}
			// 		},
			// 		fail: function() {
			// 			uni.hideLoading();
			// 		},
			// 		complete: function() {
			// 			uni.hideLoading();
			// 		}


			// 	})
			// },
			//选择收货地址
			selectAddress() {
				uni.navigateTo({
					url: '../address/address?type=select'
				})
			}
		}
	}
</script>

<style lang="scss">
	.addr {
		width: 86%;
		padding: 20upx 3%;
		margin: -40upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;
		display: flex;

		.icon {
			width: 80upx;
			height: 80upx;
			display: flex;
			align-items: center;

			image {
				width: 60upx;
				height: 60upx;
			}
		}

		.tel-name {
			width: 100%;
			display: flex;
			font-size: 32upx;

			.tel {
				margin-left: 40upx;
			}
		}

		.addres {
			width: 100%;
			font-size: 26upx;
			color: #999;
		}
	}

	.slogan_dis {
		display: none;
	}

	.buy-list {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			margin: 30upx 0;

			.goods-info {
				width: 100%;
				display: flex;

				.img {
					width: 22vw;
					height: 22vw;
					border-radius: 10upx;
					overflow: hidden;
					flex-shrink: 0;
					margin-right: 10upx;

					image {
						width: 22vw;
						height: 22vw;
					}
				}

				.info {
					width: 100%;
					height: 24vw;
					margin-top:-12rpx;
					overflow: hidden;
					display: flex;
					flex-wrap: wrap;
					position: relative;

					.title {
						width: 100%;
						font-size: 28upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						// text-align: justify;
						overflow: hidden;
					}

					.spec {
						font-size: 22upx;
						background-color: #f3f3f3;
						color: #a7a7a7;
						height: 40upx;
						display: flex;
						align-items: center;
						padding: 0 10upx;
						border-radius: 20upx;
						margin-bottom: 20vw;
					}

					.price-number {
						position: absolute;
						width: 100%;
						bottom: -12rpx;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						font-size: 28upx;
						height: 40upx;

						.price {
							color: #f06c7a;
						}

						.number {
							display: flex;
							justify-content: center;
							align-items: center;

						}
					}
				}
			}
		}
	}

	.order {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			margin: 20upx 0;
			height: 40upx;
			display: flex;

			.left {
				font-size: 28upx;
			}

			.right {
				margin-left: 40upx;
				font-size: 26upx;
				color: #999;

				input {
					font-size: 26upx;
					color: #999;
				}
			}
		}
	}

	.blck {
		width: 100%;
		height: 100upx;
	}

	.footer {
		width: 92%;
		padding: 0 4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;

		.settlement {
			height: 80upx;
			width: 90%;
			border-radius: 40upx;
			overflow: hidden;
			margin: 0 auto;

			.sum {
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;

				.money {
					font-weight: 600;
				}
			}

			.btn {
				padding: 0 30upx;
				height: 80upx;
				background-color: #f06c7a;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30upx;
				border-radius: 40upx;
			}
		}
	}

	.detail {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			height: 60upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.nominal {
				font-size: 28upx;
			}

			.content {
				font-size: 26upx;
				color: #f06c7a;
			}
		}
	}
</style>
