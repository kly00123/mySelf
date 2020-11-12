<template>
	<view class="page">
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
		<view class="uni-form-item uni-column">
			<view style="display: flex;flex-direction: row ;justify-content: space-between;">
				<view class="title">兑换详情</view>
				<view class="title" style="margin-right:28rpx;">兑换时间 9:30-17:00</view>
			</view>
			<radio-group class="uni-list" @change="radioChange">
				<view class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in returnList" :key="index">
					<view>
						<radio :id="item.type" :value="index" :checked="item.checked"></radio>
					</view>
					<label class="label-2-text" :for="item.name">
						<text>{{item.remark}}-<span v-if="timer==2">剩余兑换名额 {{item.showQuota}}</span>
						<span v-if="timer==1"> 剩余兑换名额{{item.quota}}</span>
						</text>
					</label>
				</view>
			</radio-group>
		</view>
		<view class="bottoms" @click="saveData">
			保存
		</view>
	</view>
</template>
<script>
	var graceChecker = require("../../../common/graceChecker.js");
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				num: '',
				time:'',
				timer:'',
				returnList:'',
			}
		},
		onLoad() {
			this.token = uni.getStorageSync('token');
			this.getTime();
			this.getExchange();
		},
		onReachBottom: function() {
			this.getTime();
			this.getExchange();
		},
		onPullDownRefresh: function() {
			this.getTime();
			this.getExchange();
		},
		onShow: function() {
			uni.getStorage({
				key: 'UserInfo',
				success: (res) => {
					if (!res.data) {
						if (this.isfirst) {
							//this.toLogin();
						}
						return;
					}
					this.user = res.data;
				},
				fail: (e) => {
					//this.toLogin(); 
				}
			});

		},
		methods: {
			radioChange: function(e) {
				var _this = this;
				var checked = e.detail.value;
				this.num = Number(checked);
				console.log(e);

			},
			goIndex() {
				uni.navigateBack({
					delta: 1
				});
			},
			getTime() {
				var nowTime="09:30:05"
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetTimeNow',
					data: '',
					method: 'POST',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);
						console.log(res.data.errorMessage);
						if (Helper.CheckData(res)) {
                          _this.time=res.data.data;
						  console.log(_this.time);
						  if (_this.time>nowTime){
							  _this.timer=1;
							  console.log(_this.timer);
						  }
						  else{
							   _this.timer=2;
							  console.log(_this.timer);
						  }
							// if(res.data.data[0]==9&&res.data.data[1]==30&&res.data.data[2]==5){
							// 	_this.getExchange();
							// }
						} else {
							console.log('false!')
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
			getExchange() {
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + '/sale/shopping/GetExchangeQuotaNow',
					data: '',
					method: 'POST',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						
						for (var i=0;i<res.data.list.length;i++){
							if(res.data.list[i].type==0){
								res.data.list[i].quota=res.data.list[i].showQuota;
								_this.returnList=res.data.list; 
							}
						}
						console.log(_this.returnList[0])
						console.log(_this.returnList);
						if (Helper.CheckData(res)) {
							
						} else {
							console.log('false!')
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
			saveData() {
				var _this = this;
				console.log(_this.num)
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/shopping/QudouToMoney?type=' + _this.num,
					data: '',
					method: 'POST',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);
						console.log(res.data.errorMessage);
						if (Helper.CheckData(res)) {
							uni.showModal({
								title: "信息提示",
								content: "兑换成功！",
								showCancel: false,
								success: function() {
									uni.navigateBack();
								}
							})
						} else {
							uni.showModal({
								title: "提示",
								content: res.data.errorMessage,
								showCancel: false,
								success: function() {
									
								}
							})
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
		}
	}
</script>

<style>
	.uni-form-item {

		padding: 20rpx 0;
		margin-top: -86rpx;
	}

	.row {
		display: flex;
		flex-direction: column;

	}

	.bottoms {

		width: 702rpx;
		height: 92rpx;
		background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;
		margin-top: 40rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-left: 24rpx;
		line-height: 92rpx;
		text-align: center;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;

		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}
</style>
