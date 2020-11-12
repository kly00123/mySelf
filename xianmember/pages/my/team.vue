<template>
	<view class="page">
		<!-- <view class="title" @click="bank()">
			<image src="../../static/leftjt.png" class="left"></image>
			<view style="margin-left: 16rpx;">我的团队</view>
		</view> -->
		<!-- 选择 -->
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">我的团队</div>
				</div>
				<!---->
			</div>
		</uni-page-head>
		<view style="display: flex; align-items: center; flex-direction: row; height: 40px;justify-content: center; "><view style="padding: 15px;">总数:{{teamTotal}}/总消费人数:{{teamPayTotal}}</view> </view>
		
		<view class="one_box">
			<view class="one_col" @click="btnClick(1)">
				<view :class="level == 1 ? 'one_col_title color_333333' : 'one_col_title'">一级团队({{teamInfo.one}})</view>
				<view :class="level == 1 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>

			<view class="one_col" @click="btnClick(2)">
				<view :class="level == 2 ? 'one_col_title color_333333' : 'one_col_title'">二级团队({{teamInfo.two}})</view>
				<view :class="level == 2 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>
		</view>

		<!-- 详情 -->
		<view class="one_box1">
			<view class="one_team" v-for="item in list">
				<view class="one_team-a">
					<view class="cricle">
						<!-- <image src="../../static/touxiang.png" style="width: 72rpx;height: 72rpx;position: absolute;"></image> -->
					</view>
					<view class="nav_num">
						<view style="font-size: 32rpx;color: #333333;">{{item.userPhone}}</view>
						<view style="font-size: 24rpx;color: #666666;margin-top: 6rpx;">{{item.rankStr}}</view>
					</view>

				</view>
				<view class="date">{{item.createTime}}</view>
			</view>



		</view>

	</view>

</template>

<script>
	import Helper from '@/function.js';
	export default {

		data() {

			return {
				level: 1,
				token: "",
				list: [],
				pageIndex: 1,
				pageSize: 15,
				teamInfo: {},
				total: 0,
				teamTotal:"--",
				info:{},
				teamPayTotal:0,
			}
		},
		onLoad: function() {
			this.token = uni.getStorageSync('token');
			this.getTeamCount();
			this.getTeamTotalCount();
			this.getOneTeam();
			this.getInfo();
		},

		onReachBottom: function() {
			if (this.list.length == this.total) {
				return;
			}

			this.pageIndex++;
			this.getOneTeam();
		},

		onPullDownRefresh: function() {
			this.pageIndex = 1;
			this.list = [];
			this.getOneTeam();
		},

		methods: {
			getInfo() {
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetInfo',
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);
			
						if (Helper.CheckData(res)) {
							_this.info = res.data.data;
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
			goIndex(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
			getTeamCount() {
				var _this = this;

				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetTeamCount',
					data: "",
					method: 'GET',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);

						if (Helper.CheckData(res)) {
							_this.teamInfo = res.data.data;
						} else {

						}
					},
					fail: function() {
						//uni.hideLoading();
					},
					complete: function() {
						//uni.hideLoading();
					}


				})
			},
			getTeamTotalCount() {
				var _this = this;
			
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetTeamTotalCount',
					data: "",
					method: 'GET',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);
			
						if (Helper.CheckData(res)) {
							_this.teamTotal = res.data.data.total - 1;
							_this.teamPayTotal = res.data.data.teamPayTotal;
						} else {
			
						}
					},
					fail: function() {
						//uni.hideLoading();
					},
					complete: function() {
						//uni.hideLoading();
					}
			
			
				})
			},
			getOneTeam() {
				var _this = this;
				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					level: _this.level
				}
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetTeam',
					data: params,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);

						if (Helper.CheckData(res)) {

							for (var i = 0; i < res.data.list.length; i++) {
								var rank = res.data.list[i].rank;
								var type = res.data.list[i].memberType;
								var typeStr = "";
								var rankStr = "";
								switch (type) {
									case 0:
										typeStr = "普通用户";
										break;
									case 1:
										typeStr = "经销商";
										break;
									case 2:
										typeStr = "代理商";
										break;
									case 3:
										typeStr = "合伙人";
										break;

								}


								switch (rank) {
									case 0:
										rankStr = "普通用户";
										break;
									case 1:
										rankStr = "黄金会员";
										break;
									case 2:
										rankStr = "铂金会员";
										break;
									case 3:
										rankStr = "钻石会员";
										break;
								}
								res.data.list[i].rankStr = rankStr + "-" + typeStr;
							}
							_this.list = _this.list.concat(res.data.list);
							_this.total = res.data.total;
						} else {

						}
					},
					fail: function() {
						//uni.hideLoading();
					},
					complete: function() {
						//uni.hideLoading();
						uni.stopPullDownRefresh()
					}


				})
			},
			btnClick: function(index) {
				console.log(index);
				if (this.level == index) {
					return;
				}

				this.level = index;
				this.pageIndex = 1;
				this.list = [];
				this.getOneTeam()
			},
			bank() {

				uni.navigateBack({
					delta: 1
				})
			},



		}

	}
</script>
<style>
	page {

		background: #F5F5F5;

	}

	.date {
		margin-right: 24rpx;

		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 400;

		color: rgba(153, 153, 153, 1);
		opacity: 1;

	}

	.nav_num {

		margin-left: 16rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
		opacity: 1;


	}

	.cricle {

		width: 72rpx;
		height: 72rpx;
		background: #007AFF;
		margin-left: 24rpx;
		border-radius: 50%;
		opacity: 1;
		position: relative;
		z-index: 0;
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
		width: 88rpx;
		border-bottom: 4rpx solid #ffffff;
	}

	.nav_bottom_act {
		border-bottom: 4rpx solid #F04F43;
	}

	.one_box1 {


		height: 1074rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.one_team {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		justify-content: space-between;
		height: 150rpx;
		border-bottom: 1rpx solid #F5F5F5;

	}

	.one_team-a {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 16rpx;
	}
	
	.btns {
		width: 110rpx;
		height: 50rpx;
		background: linear-gradient(164deg, rgba(250, 92, 108, 1) 0%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;

		line-height: 50rpx;
		text-align: center;
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	
	
	}
</style>
