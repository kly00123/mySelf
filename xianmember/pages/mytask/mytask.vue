<template>
	<view class="page">
		<!-- 列表选择 -->
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">我的任务 </div>
				</div>
				<!---->
				<div class="uni-page-head-ft"></div>
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>
		<view class="one_box">
			<view class="one_col" @click="btnClick(0)">
				<view :class="sendType == 0 ? 'one_col_title color_333333' : 'one_col_title'">待完成</view>
				<view :class="sendType == 0 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>

			<view class="one_col" @click="btnClick(1)">
				<view :class="sendType == 1 ? 'one_col_title color_333333' : 'one_col_title'">待审核</view>
				<view :class="sendType == 1 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>

			<view class="one_col" style="border-right: medium" @click="btnClick(2)">
				<view :class="sendType == 2 ? 'one_col_title color_333333' : 'one_col_title'">已完成</view>
				<view :class="sendType == 2 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>
		</view>
		<!-- 我的任务详情 -->
		<block v-for="(item,index) in myTasklist">
			<view class="starorder" v-if="item.state == 2" style="height: 60px;">
				<view class="number">
					<view class="uni-number">
						<view>任务编号:{{item.orderNo}}</view>
					</view>
					<!-- 价格 -->

				</view>
				<view class="uni-numbers" style="padding-left: 10px;">
					时间:{{item.createTime}}
				</view>
			</view>
			<view class="starorder" v-else>
				<view class="number">
					<view class="uni-number">
						<view>任务编号:{{item.taskNo}}</view>

						<view class="btn" v-if="item.taskRank==1">
							<image src="../../static/star.png" class="uni-task-a"></image>
						</view>
						<view v-else class="btn">
							<image src="../../static/uni-task.png" class="uni-task-a"></image>
						</view>
					</view>
					<!-- 时间 -->
					<view class="uni-numbers">
						{{item.createTime}}
					</view>
				</view>
				<view class="line"></view>
				<!-- 详情 -->
				<view class="uni-starorder">
					<view class="uni-starorder_A">
						<image :src="'../../static/task/'+item.taskType+'.png'" class="uni-starorderS"></image>
						<view class="uni-starorder_b">
							<view class="whiteSpace" style="font-weight:600;">任务描述：
								<text style="font-weight:500;color:#999 ;">{{item.description==null||item.description==""?"暂无":item.description}}</text>
							</view>
							<view :class="(0==item.state)?'btnss':'slogan_dis'" @click="mytasorder(item)" >
								开始任务
							</view>
							<view style="font-weight:600;" class="whiteSpace">任务需求：
								<text style="font-weight:500;color:#999 ;" v-if="item.taskType==0||item.taskType==1">点赞+关注</text>
								<text style="font-weight:500;color:#999 ;" v-if="item.taskType==2">关注</text>
								<text style="font-weight:500;color:#999 ;" v-if="item.taskType==3">下载应用</text>
								<text style="font-weight:500;color:#999 ;" v-if="item.taskType==4">添加微信号</text>
							</view>
							<view style="font-weight:600;color:#FF2A43">任务佣金：
								<text style="color: #FF2A43;">{{item.price}}豆</text>
							</view>
							<!-- <view >剩余：126</view> -->
						</view>

					</view>


				</view>
			</view>
		</block>

		<!-- 无数据的时候-->
		<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
		<view class="nodata" v-if="total==0">
			<view>
				<image src="../../static/noways.png" style="width: 250upx;height: 164upx;"></image>
			</view>
			暂无任务
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


		methods: {
			/* 调用列表自己的任务 */
			getMyTaskList() {
				var _this = this;
				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					state: _this.sendType
				};
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetMyTaskList',
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
				    url: '/pages/index/index'
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
		-webkit-line-clamp: 1;
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
		flex-direction: row;
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
		margin-top: 40rpx;
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
