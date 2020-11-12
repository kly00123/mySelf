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
			<view class="title">兑换详情</view>
			<radio-group class="uni-list" @change="radioChange">
				<view class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
					<view>
						<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
					</view>
					<label class="label-2-text" :for="item.name">
						<text>{{item.value}}</text>
					</label>
				</view>
			</radio-group>
		</view>
		<view style="float:right;margin-bottom:20px;">注：普通用户只能升级为经销商，经销商只能升级为代理商，代理商只能升级为合伙人。如有疑问可咨询客服。</view>
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
				radioItems: [{
						name: '0',
						value: '普通用户升级为经销商 30万渠豆',
					},
					{
						name: '1',
						value: '经销商升级为代理商 18万渠豆',
					},
					{
						name: '2',
						value: '代理商升级为合伙人 12万渠豆'
					}
				],
			}
		},
		onLoad() {
			this.token = uni.getStorageSync('token');
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
				//console.log(this.num);

			},
			goIndex(){
				uni.navigateTo({
					url:'/pages/trading/trading'
				})
			},
			saveData() {
				var _this = this;
				console.log(_this.num)
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/shopping/QudouToDaili?type=' + _this.num,
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
								content: "升级成功！",
								showCancel: true
							})
						} else {
							uni.showModal({
								title: "提示",
								content: res.data.errorMessage,
								showCancel: false
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
		margin-top:-86rpx;
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
