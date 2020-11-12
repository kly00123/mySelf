<template>
	<view class="page">
		<!-- 列表选择 -->
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">余额明细 </div>
				</div>
				<!---->
				<div class="uni-page-head-ft"></div>
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>
		<!-- 我的任务详情 -->
			<view style="margin-top:-36px;">
		<block v-for="(item,index) in myTasklist">
			<view class="starorder" style="height: 50px;">
				<view class="number">
					<view class="uni-number">
						<view style="color:chocolate;">{{item.remark}}</view>
					</view>
				</view>
				<view class="uni-numbers" style="padding-left: 10px;">
					<view v-if="1==item.type||2==item.type||3==item.type||20==item.type||200==item.type||204==item.type"><span style="color:red">+{{item.money}}</span></view>
					<view v-if="4==item.type||101==item.type||203==item.type">-{{item.money}}</view>
					<view>{{item.createTime| formatDate}}</view>
				</view>
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
			return {

				sendType: 0,
				myTasklist: [],
				token: '',
				pageIndex: 1,
				pageSize: 10,
				contentText: {
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				total: -1,
				nodata: false

			}


		},
		onShow: function() {
			this.pageIndex = 1;
			this.myTasklist = [];
			this.selType = -1;
			this.token = uni.getStorageSync('token');
			this.userInfo = uni.getStorageSync('userInfo');
			this.getMyTaskList();
		},

		onPullDownRefresh: function() {
			this.pageIndex = 1;
			this.myTasklist = [];
			this.getMyTaskList();
		},

		onReachBottom: function() {
			if (this.myTasklist.length < this.total) {
				this.pageIndex++;
				this.getMyTaskList();
			}
		},
		        filters: {
		            formatDate: function(payTime) {
		                var date = new Date(payTime);
		                //date.setTime(value);
		                var month = date.getMonth() + 1;
		                var hours = date.getHours();
		                if (hours < 10)
		                    hours = "0" + hours;
		                var minutes = date.getMinutes();
		                if (minutes < 10)
		                    minutes = "0" + minutes;
		                var time = date.getFullYear() + "-" + month + "-" + date.getDate() +
		                    " " + hours + ":" + minutes;
		                return time;
		            }
		 
		        },

		methods: {
			/* 调用列表自己的任务 */
			getMyTaskList() {
				var _this = this;
				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					type:1,
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
						//console.log(res + '111');
						if (Helper.CheckData(res)) {
							let {
								errorCode,
								errorMessage,
								list,
								total,
								totalPage
							} = res;
							_this.total = res.data.total;
							_this.myTasklist = _this.myTasklist.concat(res.data.list);
							console.log(_this.myTasklist);
							// _this.setListStatus();
						} else {

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
			goIndex(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
			btnClick: function(index) {
				//console.log(index);
				if (this.sendType == index) {
					return;
				}

				this.pageIndex = 1;
				this.myTasklist = [];

				this.sendType = index;
				this.getMyTaskList()
			},
			mytasorder(item) {
				if (item.taskType == 21) {
					uni.navigateTo({
						url: '/pages/mytask/mymissionVideo?orderNo=' + item.orderNo
					})
				} else {
					uni.navigateTo({
						url: '/pages/mytask/mymission?orderNo=' + item.orderNo
					})
				}
			}

		}

	}
</script>

<style>
	page {

		background: #F5F5F5;
	}

	.one_box {
		display: flex;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #666666;
		height: 100rpx;
		justify-content: center;
		align-items: flex-end;
		flex-direction: row;
		background-color: #ffffff;
		/* padding-top: 18rpx; */
		margin: -60rpx 24rpx 24rpx 24rpx;
		border-radius: 5px;
		box-shadow: 1px 1px 5px #CACACA;
	}

	.one_col {
		justify-content: center;
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		border-right: 1px solid #F5F5F5
	}

	.nodata {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		font-family: PingFang SC;
		font-weight: 400;
		text-align: center;
		color: rgba(102, 102, 102, 1);
		opacity: 1;
		margin-top: 214upx;
	}


	.one_col_title {
		flex: 1;
		color: #999999;
		margin-bottom: 20upx;
		font-size: 16px;
	}

	.color_333333 {
		color: #333333;
	}

	.whiteSpace {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}


	.nav_bottom {
		display: flex;
		justify-content: center;
		height: 1rpx;
		width: 96rpx;
		border-bottom: 6rpx solid #ffffff;
	}

	.nav_bottom_act {
		border-bottom: 6rpx solid #F04F43;
	}

	.starorder {
		display: flex;
		flex-direction: row;
		height: 258rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 20rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		padding: 0 20px 20px 20px
	}

	.number {

		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		padding-top: 24rpx;
		justify-content: space-between;


	}

	.uni-number {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;

		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.uni-numbers {
		display: flex;
		flex-direction: column;
		align-items: center;

		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
	}

	.btn>image {
		height: 40rpx;
		width: 40rpx;
		opacity: 1;
	}


	.line {
		height: 1rpx;
		background: rgba(0, 0, 0, 0.1);
		opacity: 1;
		margin-top: 24rpx;
	}

	.uni-starorder {

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

	}

	.uni-starorderS {
		width: 150rpx;
		height: 150rpx;
		margin-top: 20rpx;

		margin-right: 20rpx;
		float: left;
		border-radius:20rpx
	}
				.slogan_dis{
					display: none;
				}
	.btnss {
		width: 134rpx;
		height: 60rpx;
		background: rgb(240, 47, 48);
		border-radius: 8rpx;
		margin-top: 10rpx;

		line-height: 60rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		float: right;
		padding: 0 20rpx;
	}

	.uni-starorder_A {


		width: 100%;
	}

	.uni-starorder_b {
		flex-direction: column;
		align-items: flex-start;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-top: 22rpx;
		margin-left: 42rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		min-width: 600rpx;
	}
</style>
