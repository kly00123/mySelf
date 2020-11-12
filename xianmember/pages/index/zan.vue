<template>
	<view>
		<!-- 任务详情 -->
		<block v-for="(item, index) in taskList">
			<view class="starorder">
				<view class="number">
					<view class="uni-number">
						<view>任务编号:{{item.taskNo}}</view>
						<view class="btn" v-if="item.taskRank==0">
							<image src="../../static/uni-task.png" class="uni-task-a"></image>
						</view>
						<view class="btn" v-else>
							<image src="../../static/star.png" class="uni-task-a"></image>
						</view>
					</view>
		
					<view class="uni-numbers">
						<view style="font-size: 24rpx;">￥</view>
						<view style="font-size: 36rpx;">{{item.price}}</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="uni-starorder">
					<view class="uni-starorder_A">
						<image :src="'../../static/task/'+item.taskType+'.png'" class="uni-starorderS"></image>
						<view class="uni-starorder_b">
							<view class="whiteSpace" style="font-weight:600;">任务描述：
								<text style="font-weight:500;color:#999 ;">{{item.description==null||item.description==""?"暂无":item.description}}</text>
							</view>
							<!-- <view class="btnss" @click="getTask(index, item.id)">
								领取任务
							</view> -->
							<view class="btnss" @click="mytasorder(item)">
								领取任务
							</view>
							<view style="font-weight:600;" class="whiteSpace">任务需求：
								<text style="font-weight:500;color:#999 ;" v-if="item.taskRank==0">点赞</text>
								<text style="font-weight:500;color:#999 ;" v-else="item.taskRank==1">点赞+关注</text>
							</view>
							<view style="font-weight:600;color:#FF2A43">任务佣金：
								<text style="color: #FF2A43;">{{item.price}}元</text>
							</view>
							<!-- <view >剩余：126</view> -->
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import Helper from '@/function.js';



	export default {

		data() {
			return {
				total: 0,
				token: '',
				state: '',
				taskList: [],
				pageIndex: 1,
				pageSize: 15,
				indicatorDots: true,
				phone: '拨打客服电话：400-0515-207',
				autoplay: true,
				interval: 2000,
				duration: 500,
				msg: ["111", "222"],
				sosuo: "none",
				taskNo: ""
			}
		},

		onLoad: function() {
			this.token = uni.getStorageSync('token');

		},
		onShow: function() {
			this.pageIndex = 1;
			this.taskList = [];
			//this.getNewsList();
			this.userInfo = uni.getStorageSync('userInfo');
			this.getTaskList();
		},
		onReachBottom: function() {
			if (this.taskList.length < this.total) {
				this.pageIndex++;
				this.getTaskList();
			}
		}, 
		onPullDownRefresh: function() {
			this.pageIndex = 1;
			this.taskList = [];
			this.getTaskList();
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			getInptValue: function() {

				var _this = this;
				if (_this.taskNo.length >= 1) {
					_this.sosuo = "block";
				} else {
					_this.sosuo = "none";

				}

			},

			getNewsList() {
				var _this = this
				var params = {
					pageIndex: 1,
					pageSize: 5,
				}
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetNewsList',
					data: params,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						//console.log(res);
						if (Helper.CheckData(res)) {
							_this.msg = res.data.list;
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

			/* 获得所有任务列表 */
			getTaskList() {
				console.log("--------------------");
				var _this = this
				var params = {
					state: _this.state,
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					taskNo: _this.taskNo
				}
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetTaskList',
					data: params,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						if (Helper.CheckData(res)) {
							_this.taskList = _this.taskList.concat(res.data.list);
							_this.total = res.data.total;
							console.log(res);
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
			sosuoClick() {
				this.taskList = [];
				this.getTaskList();
				this.taskNo = "";
				this.sosuo = "none";
			},
			/* 领取任务移除 */
			getTask(index, taskId) {
				var _this = this;

				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/MemberGetTask?taskId=' + taskId,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {

						if (Helper.CheckData(res)) {
							res = res.data;
							_this.taskList.splice(index, 1);
							uni.showModal({
								title: '提示',
								content: '领取成功',
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
			mytasorder(item) {
				console.log("==========")
				//console.log(item)
				console.log("==========")

				uni.navigateTo({
					url: '/pages/mytask/mytaskorder?item=' + JSON.stringify(item)
				})


			}
			,onClickSwiper(id){
				
				uni.navigateTo({
					url: '/pages/news/details?id='+id
				})
				
			}
			
			
		
		},

	};
</script>

<style>
	page {}

	.content {
		display: flex;
		flex-direction: column;
		margin: 0 20px;
	}

	.card {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		min-height: 35px;
		justify-content: space-between;
		align-items: center;

	}

	.card-link {
		display: flex;
		color: #FFFFFF;
		font-weight: bold;
	}

	.card-link-search {

		display: flex;
		flex-direction: row;
		align-items: center;
		height: 48upx;
		font-size: 40upx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		border: 2upx solid#F0F0F0;
		border-radius: 50px;
		background-color: #FFFFFF;
		width: 100%;
	}

	.return_c {
		width: 60upx;
		height: 60upx;
		margin-right: 14upx;
		margin-left: 14upx;
	}

	.uni-top {
		width: 100%;
		height: 300rpx;
	}



	.uni-content {
		width: 100%;
		/* height: 276rpx; */
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		/* background: #007AFF; */
		position: relative;
		margin-top: 80rpx
	}

	.uni-content_a {
		position: relative;

		/* height: 228rpx; */
		background: rgba(255, 255, 255, 1);

		opacity: 1;

		/* margin-top: -54rpx; */
		display: flex;
		flex-direction: row;
		justify-content: center;
		justify-content: space-between;
		align-items: center;
	}

	.newbulletin {

		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		/* margin-top: 12rpx; */
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.uni-newbulletion {
		width: 90rpx;
		height: 90rpx;

	}

	.revision {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		flex: 1;
		margin-left: 24rpx;
		margin-right: 24rpx;
		margin-top: 14rpx;


	}

	.uni-revision {

		width: 36rpx;
		height: 36rpx;
		margin-top: 15rpx;
		margin-bottom: 15rpx;

	}

	uni-swiper {
		height: 250rpx;

	}

	.uni-revision_a {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		/* line-height:40px; */
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.uni-right {
		width: 16rpx;
		height: 32rpx;

	}

	.task {
		/* width:750px; */
		margin-top: 40rpx;
		height: 96rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		justify-content: space-between;
		border: 1upx #F5F5F5 solid;
		border-radius: 10px;
		box-shadow: rgb(232, 232, 232) 2px 2px 2px
	}

	.uni-task {
		display: flex;
		flex-direction: row;
		align-items: center;
		border-right: 1upx solid #F5F5F5;
		width: 49.5%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.uni-task-a {

		width: 50rpx;
		height: 49rpx;

	}

	.uni-task-font {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.starorder {
		height: 258rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
		padding: 0 20rpx 20rpx 20rpx;
		box-shadow: 1px 1px 5px #C0C0C0
	}

	.number {

		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		margin-top: 16rpx;
		justify-content: space-between;
	}

	.whiteSpace {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.uni-number {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		margin-left: 20rpx;
		margin-right: 20rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.uni-numbers {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 20rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(255, 89, 89, 1);
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
		margin-top: 8rpx;
		font-size: 14px;
	}

	.uni-starorder {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

	}

	.uni-starorder_A {

		width: 100%;
	}

	.uni-starorderS {
		width: 150rpx;
		height: 150rpx;
		margin-top: 20rpx;
		margin-right: 20rpx;
		float: left;
	}

	.textP {
		font-weight: bold;
		color: rgb(51, 51, 51);
	}

	.text {
		font-weight: initial;
		color: #666;
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
		padding: 0 10px;

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

	}

	.swiper {
		/* flex: 1 !important; */
		width: 100% !important;
		height: 50upx !important;
		/* swiper-item {

			line-height: 50upx !important;

			font-size: 30upx !important;

			color: #F5283A !important;

			font-weight: 700 !important;

			view {

				overflow: hidden !important;

				white-space: nowrap !important;

				text-overflow: ellipsis !important;

			}

		} */
	}
</style>

