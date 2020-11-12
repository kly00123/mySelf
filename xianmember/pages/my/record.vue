<template>
	<view class="page">
		<!-- 选择 -->
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">提现记录</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
		<view class="one_box">
			<view class="one_col" @click="btnClick(null)">
				<view :class="sendType == null ? 'one_col_title color_333333' : 'one_col_title'">全部</view>
				<view :class="sendType ==  null? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>

			<view class="one_col" @click="btnClick(0)">
				<view :class="sendType == 0 ? 'one_col_title color_333333' : 'one_col_title'">待审核</view>
				<view :class="sendType == 0 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>

			<view class="one_col" @click="btnClick(1)">
				<view :class="sendType == 1 ? 'one_col_title color_333333' : 'one_col_title'">审核通过</view>
				<view :class="sendType == 1 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>
			<view class="one_col" @click="btnClick(2)">
				<view :class="sendType == 2 ? 'one_col_title color_333333' : 'one_col_title'">审核不通过</view>
				<view :class="sendType == 2 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>

		</view>
		<!-- 详情 -->
		<view class="one_record">

			<block v-for="(item,index) in recordList">
				<view class="uni-records">
					<view style="font-size: 30rpx; color: #FF5959;margin-left: 24rpx; width: 180rpx;" v-if="item.state==0">待审核</view>
					<view style="font-size: 30rpx; color: #333333;margin-left: 24rpx; width: 180rpx;" v-if="item.state==1">审核通过</view>
					<view style="font-size: 30rpx; color: #FF9000;margin-left: 24rpx; width: 180rpx;" v-if="item.state==2">审核不通过</view>
					<view class="date" style="flex: 1;">
						<view style="font-size: 36rpx; color: #FF5959;" v-if="item.state==0">+{{item.money}}</view>
						<view style="font-size: 36rpx; color: #333333;" v-if="item.state==1">+{{item.money}}</view>
						<view style="font-size: 36rpx; color: #FF9000;" v-if="item.state==2">+{{item.money}}</view>
						<view style="font-size:24rpx; color:#999999;">{{item.createTime}}</view>	
						<view style="font-size:30rpx; color:red; margin-top: 10upx;" v-if="item.reason!=null&&item.reason!=''">失败原因:<text style="color: #666666;">{{item.reason}}</text></view>	
					</view>
					
				</view>
				
			</block>
		</view>
		<!-- 无数据的时候 -->
		
		<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
		<view class="nodata" v-if="total==0">
			<view>
				<image src="../../static/nodata.png" style="width: 250upx;height: 164upx;"></image>
			</view>
			暂无明细
		</view>

	</view>

</template>

<script>
	import Helper from '@/function.js';
	import loadMore from '../../components/load-more.vue';
	export default {

		data() {

			return {
				token: '',
				state: '', //null-全部 0-待审核 1-成功 2-失败
				pageIndex: 1, //第几页
				pageSize: 10, //每页多少行
				sendType: -1,
				recordList: [],
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
			this.recordList = [];
			this.selType = -1;
			this.token = uni.getStorageSync('token');
			this.userInfo = uni.getStorageSync('userInfo');
			this.getMoneyOrdersList();
		},

		methods: {
			btnClick: function(index) {
				console.log(index);
				if (this.sendType == index) {
					return;
				}

				this.sendType = index;
				this.getMoneyOrdersList();
			},
			goIndex(){
				uni.navigateBack({
				    delta: 1
				});
			},
			/* 体现记录的列表 */
			getMoneyOrdersList() {
				var _this = this
				var params = {
					state: _this.sendType, //null-全部 0-待审核 1-成功 2-失败
					pageIndex: _this.pageIndex, //第几页
					pageSize: _this.pageSize, //每页多少行

				};
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/MemberGetMoneyOrdersList',
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
								_this.total = res.data.total;
							}
							_this.recordList = _this.recordList.concat(res.data.list);
							_this.recordList = res.data.list;
							console.log(_this.recordList);
							// _this.setListStatus();
						} else {
							_this.total = true;
						}


					},

					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
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

	.one_box {
		margin-top:-86rpx;
		display: flex;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #666666;
		height: 112rpx;
		justify-content: center;
		align-items: flex-end;
		flex-direction: row;
		background-color: #ffffff;
		/* padding-top: 18rpx; */
	}

	.one_col {
		justify-content: center;
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
	}

	.one_col_title {
		height: 72rpx;
		flex: 1;
		color: #999999;
	}

	.color_333333 {
		color: #333333;
	}

	.nav_bottom {
		display: flex;
		justify-content: center;
		height: 4rpx;
		width: 46rpx;
		border-bottom: 4rpx solid #ffffff;
	}

	.nav_bottom_act {
		border-bottom: 4rpx solid #F04F43;
	}

	.one_record {

		margin-top: 20rpx;
		/* height: 1074rpx; */
		background: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.uni-records {

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		/* height: 148rpx; */
		border-bottom: 1rpx solid #F5F5F5;
		font-family: PingFang SC;
		font-weight: 400;
		opacity: 1;
	}
</style>
