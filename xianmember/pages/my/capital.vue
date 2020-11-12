<template>
	<view class="page">
		<!-- 选择 -->
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">资金明细</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
		<view class="choosecapital">
			<view @click="openmask2">资金来源:</view>
			<!-- 筛选-->
			<view :class="isdown == true?'nav1 narcolor':'nav1'" @click="openmask2" style="display: flex;flex-direction: row;align-items: center;">
				<view style="color: #F04F43;margin-left: 18rpx;">{{sortlist[sortnum].title}}</view>
				<image src="../../static/downs.png" style="width: 14rpx;height: 9rpx;margin-left: 8rpx;"></image>
			</view>
			<!-- <view style="color: #F04F43;margin-left: 18rpx;">
				全部
			</view> -->


			<!-- <image src="../../static/downs.png" style="width: 14rpx;height: 9rpx;margin-left: 8rpx;"></image> -->
		</view>


		<!-- <view style="display: flex; flex-direction: row;justify-content: space-between;align-items: center;margin-top: 24rpx;">
			<view class="uni-year">
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
			<view class="totals">共计：<text style="text-align: right;margin-right: 22rpx;">￥3000</text></view>
		</view> -->
		<!-- 任务详情 -->
		<view class="one_record">
			<!--  任务奖励-->
			<block v-for="(item,index) in rewardList">
				<view class="uni-records">
					<view style="font-size: 30rpx; color: #333333;margin-left: 24rpx;" v-if="item.type==5">渠豆任务</view>
				<!-- 	<view style="font-size: 30rpx; color: #333333;margin-left: 24rpx;" v-if="item.type==10">任务分佣</view> -->
				<!-- 	<view style="font-size: 30rpx; color: #333333;margin-left: 24rpx;" v-if="item.type==15">套餐提成</view> -->
					<view style="font-size: 30rpx; color: #333333;margin-left: 24rpx;" v-if="item.type==125">提现</view>
				<!-- 	<view style="font-size: 30rpx; color: #FF5959;margin-left: 24rpx;" v-if="item.type==105">充值消费</view> -->
				<!-- 	<view style="font-size: 30rpx; color: #FF5959;margin-left: 24rpx;" v-if="item.type==1">后台充值</view> -->
					<view style="font-size: 30rpx; color: #FF9000;margin-left: 24rpx;" v-if="item.type==20">提现驳回</view>
					<view style="font-size: 30rpx; color: #FF9000;margin-left: 24rpx;" v-if="item.type==102">购买套餐</view>
					<view style="font-size: 30rpx; color: #FF9000;margin-left: 24rpx;" v-if="item.type==123">套餐返现</view>
				<!-- 	<view style="font-size: 30rpx; color: #FF9000;margin-left: 24rpx;" v-if="item.type==130">直推奖利</view> -->
					<view class="date">
						<view style="font-size: 36rpx; color: #333333;" v-if="item.type==5||item.type==10||item.type==15">+{{item.money}}</view>
						<view style="font-size: 36rpx;color:#FF5959;" v-if="item.type==105||item.type==1||item.type==123||item.type==124||item.type==130">+{{item.money}}</view>
						<view style="font-size: 36rpx;color:#FF5959;" v-if="item.type==20">+{{item.money}}</view>
						<view style="font-size: 36rpx; color: #333333;" v-if="item.type==102||item.type==101">-{{item.money}}</view>
						<view style="font-size:24rpx; color:#999999;">{{item.createTime}}</view>
						<view style="font-size:24rpx; color:#999999;">{{item.remark}}</view>
					</view>
				</view>
			</block>
		</view>
		<!-- 蒙层 -->
		<view class="mask" v-if="ismask2 == true" @click="openmask2"></view>
		<view class="smakcontent smakcontent2" v-if="ismask2 == true">
			<block v-for="(item, index) in sortlist">
				<view v-if="sortnum == index && isdown" class="smakdetail2 narcolor" @click="downselectsort(index)">
					<view>{{item.title}}</view>
					<view>
						<image class="gou" src="../../static/tup.png"></image>
					</view>
					<!-- <view class="uni-icon uni-icon-arrowdown"></view> -->
				</view>
				<view v-else class="smakdetail2" @click="downselectsort(index)">
					<view>{{item.title}}</view>
				</view>
			</block>





		</view>


	</view>

</template>

<script>
	import Helper from '@/function.js';
	import loadMore from '../../components/load-more.vue';
	export default {

		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				token: '',
				/* type:'', */
				pageIndex: 1,
				pageSize: 10,
				rewardList: [],
				ismask2: false,
				sendType: 0,
				date: currentDate,
				isdown: true,
				sortnum: 0,
				sortlist: [{
						title: '全部',
						type: -1
					},
					{
						title: '任务奖励',
						type: 5
					},
					{
						title: '提现',
						type: 101
					},
					{
						title: '提现驳回',
						type: 20
					}, {
						title: '购买套餐',
						type: 102
					},{
						title: '套餐返现',
						type: 123
						
					}
				]
			}
		},
		onReachBottom: function() {
			if (this.rewardList.length == this.total) {
				return;

			}

			this.pageIndex++;
			this.getMoneyRecordList();
		},
		onPullDownRefresh: function() {
			this.pageIndex = 1;
			this.rewardList = [];
			this.getMoneyRecordList();
		},

		onShow: function() {
			this.pageIndex = 1;
			this.rewardList = [];
			this.token = uni.getStorageSync('token');
			this.userInfo = uni.getStorageSync('userInfo');
			this.getMoneyRecordList();
		},
		methods: {
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				// let day = date.getDate();

				// if (type === 'start') {
				// 	year = year - 60;
				// } else if (type === 'end') {
				// 	year = year + 2;
				// }
				month = month > 9 ? month : '0' + month;;
				// day = day > 9 ? day : '0' + day;
				return `${year}-${month}`;
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},


			navClick(index) {
				this.isdown = false;
				this.ismask2 = false;
				this.getMoneyRecordList()();
			},
			closeallmask() {
				this.ismask2 = false;

			},
			downselectsort(index) {
				this.isdown = true;
				this.ismask2 = false;
				this.sortnum = index;
				this.pageIndex = 1;
				this.rewardList = [];
				this.getMoneyRecordList();
			},
			goIndex(){
				uni.navigateBack({
				    delta: 1
				});
			},
			openmask2() {
				this.ismask = false;
				console.log('ismaskkkkkkkkkkkkkkk' + this.ismask);
				if (this.ismask2 == false) {
					this.ismask2 = true;
				} else {
					this.ismask2 = false;
				}

			},
			/* 调用资金明细接口 */
			getMoneyRecordList() {
				var _this = this
				var params = {
					type: _this.sortlist[_this.sortnum].type,
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,

				};
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/MemberGetMoneyRecordList',
					data: params,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res + '111');
						if (Helper.CheckData(res)) {
							let {
								errorCode,
								errorMessage,
								list,
								total,
								totalPage
							} = res;
							if (list == null) {

							}
							_this.total = res.data.total;
							_this.rewardList = _this.rewardList.concat(res.data.list);

						} else {
							_this.total = res.data.total;
						}


					},

					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
						uni.stopPullDownRefresh()
						uni.hideLoading();
					}
				});



			}




		}

	}
</script>
<style>
	page {

		background: #F5F5F5;

	}

	.date {
		margin-right: 24rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-end;

	}

	.one_record {

		margin-top: 20rpx;
		/* height: 1180rpx; */
		background: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.uni-records {

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 148rpx;
		border-bottom: 1rpx solid #F5F5F5;
		font-family: PingFang SC;
		font-weight: 400;
		opacity: 1;
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
		color: #FFFFFF;
		opacity: 1;

	}

	.left {

		width: 24rpx;
		height: 48rpx;
		margin-left: 24rpx;
	}

	.smakcontent {
		background-color: #FFFFFF;
		z-index: 1000;
		position: absolute;
		top: 100rpx;
		left: 0;
		/* bottom: 240rpx; */
		right: 0;
		/* // border: 1px solid black; */
		display: flex;
		flex-direction: column;
		padding-left: 24rpx;
		padding-right: 24rpx;
		font-size: 32rpx;
		color: #333333;
		position: fixed;
	}

	.smakcontent2 {
		color: #333333;

	}

	.nav1 {
		display: flex;
		flex-direction: row;
	}

	.narcolor {
		color: #F04F43;
	}

	.gou {

		width: 37rpx;
		height: 29rpx;

	}

	.smakdetail2 {
		display: flex;
		flex-direction: row;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		margin-top: 50rpx;
		margin-bottom: 10rpx;
	}

	.choosecapital {

        margin-top:-86rpx;
		height: 90rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.uni-year {
		width: 234rpx;
		height: 54rpx;
		background: rgba(255, 255, 255, 1);
		border: 1px solid rgba(240, 240, 240, 1);
		opacity: 1;
		border-radius: 30rpx;
		margin-left: 22rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		line-height: 54rpx;

		text-align: center;

	}

	.uni-input {



		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.totals {

		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;

		color: rgba(153, 153, 153, 1);
		opacity: 1;


	}

	.mask {
		background: rgba(0, 0, 0, 0.5);
		z-index: 100;
		position: absolute;
		top: 240rpx;
		left: 0;
		bottom: 0rpx;
		right: 0;
		position: fixed;

	}
</style>
