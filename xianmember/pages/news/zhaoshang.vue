<template>
	<!-- 顶部 -->
	<view class="page">
		<!-- 新闻公告 -->
		<view class="bulletin" v-for="item in list" @click="goDetails(item)">
			<view>
				<!-- class="uni-bulletion-font" -->
				<h3 class="h3">{{item.title}}</h3>
				<view class="date">{{item.createTime}}</view>
			</view>
		</view>

		<!-- <view class="look">
				<view class="uni-look"@click="edit()">
					<view>查看详情</view>
					<image src="../../static/rightjt.png" style="width: 16rpx;height: 20rpx;margin-left: 6rpx;"></image>
				</view>
			</view> -->
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				token: "",
				list: [],
				pageIndex: 1,
				pageSize: 15,
				total: 0,
			}


		},
		onLoad: function() {
			this.token = uni.getStorageSync('token');
			this.getList();
		},
		onReachBottom: function() {
			if (this.list.length < this.total) {
				this.pageIndex++;
				this.getList();
			}
		},
		methods: {
			goDetails(item) {
				uni.navigateTo({
					url: '/pages/news/details?id=' + item.id
				});
			},
			getList() {
				var _this = this
				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					state:2
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
						//console.log(res + '111');
						if (Helper.CheckData(res)) {
							_this.list = _this.list.concat(res.data.list);
							_this.total = res.data.total;
							//console.log(_this.list);
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


		}


	}
</script>

<style>
	page {
		background: #FFFFFF;
	}

	h3 {
		height: 84rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.title {

		height: 128rpx;
		background: rgba(255, 255, 255, 1);
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
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.left {

		width: 24rpx;
		height: 48rpx;
		margin-left: 24rpx;

	}

	.bulletin {

		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		/* line-height:302rpx; */
		color: rgba(102, 102, 102, 1);
		/* overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap; */
		background: rgba(255, 255, 255, 1);

		height: 60px;
		margin: 40rpx 20rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 1px 1px 5px #C0C0C0;
	}

	.font {

		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		margin-left: 24rpx;
		margin-right: 24rpx;
		margin-top: 2rpx;


	}

	.uni-bulletion {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		justify-content: space-between;
		margin-left: 24rpx;
		margin-right: 24rpx;
		padding-top: 36rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.uni-bulletion-font {
		font-size: 34rpx;

	}

	.date {

		font-size: 24rpx;
		color: rgba(151, 151, 151);
		opacity: 1;
		float: right
	}

	.font {



		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
	}

	.look {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin-right: 24rpx;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(240, 79, 67, 1);
		opacity: 1;
	}

	.uni-look {

		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 22px;


	}
</style>
