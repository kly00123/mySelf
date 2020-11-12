<template>
	<view class="page">
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">任务详情</div>
				</div>
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>
		<view class="content">
			<view style="text-align: center;">
				<image src="../../static/taskImg.jpg" style="width: 426rpx;height: 356rpx;"></image>
			</view>
			<view class="card">
				<ul class="table-view ">
					<li>
						<a>
							<div class="media-body">
								<a style="font-size: 32rpx;font-weight: bold;display: flex;">任务编号：{{info.taskNo}}
									<image v-if="info.taskRank==0" src='../../static/uni-task.png' style="width: 40rpx;height: 40rpx;vertical-align:middle;"></image>
									<image v-else src='../../static/star.png' style="width: 40rpx;height: 40rpx;vertical-align:middle;"></image>
								</a>
								<a style="font-size: 24rpx;color:#D3D3D3;">悬赏总额<text class="textRed" style="margin-left: 10rpx;font-size: 32rpx;">{{info.price*info.quota}}</text></a>
							</div>
						</a>
					</li>
					<li>
						<a>
							<image src="../../static/task/1.png" v-if="info.taskType==1" style="width: 140rpx;height: 140rpx;float:left;margin-right: 14rpx;"></image>
							<image src="../../static/task/2.png" v-if="info.taskType==2" style="width: 140rpx;height: 140rpx;float:left;margin-right: 14rpx;"></image>
							<image src="../../static/task/3.png" v-if="info.taskType==3" style="width: 140rpx;height: 140rpx;float:left;margin-right: 14rpx;"></image>
							<image src="../../static/task/4.png" v-if="info.taskType==4" style="width: 140rpx;height: 140rpx;float:left;margin-right: 14rpx;"></image>
							<div>
								<p class="text_P">任务奖励：<text class="textRed">{{info.price}}/次</text></p>
								<p class="text_P">任务要求：
									<text class="textRed" v-if="info.taskType==1">点赞+关注</text>
									<text class="textRed" v-if="info.taskType==2">关注</text>
									<text class="textRed" v-if="info.taskType==3">下载应用</text>
									<text class="textRed" v-if="info.taskType==4">添加微信</text>
								</p>

								<p class="text_P">剩余数量：<text class="textRed">{{info.quota-info.useQuota}}</text></p>
							</div>
						</a>
					</li>
					<li>
						<a>
							<div>

								<p class="text_P">任务描述：<text style="font-size: 28rpx;color:#a0a0a0">{{info.description==null||info.description==""?"暂无":info.description}}</text></p>

							</div>
						</a>
					</li>
				</ul>
			</view>
			 <view class="card" style="margin-bottom: 120rpx;">
				<ul class="table-view " style="margin-top: 0px;margin-bottom: 0px;">
					<li class="table-view-li">
						<a>
							<div class="media-body">
								<a style="font-size: 30rpx;font-weight: bold;color:#5d5d5d">当前排名</a>
								<!-- <a style="font-size: 30rpx;color:#838383;">全部排名 ></a> -->
							</div>
						</a>
					</li>
					<li class="table-view-li" v-for="(item,index) in taskList">
						<a>
							<div class="media-body">
								<a style="line-height: 60rpx;font-size: 28rpx;">{{index+1}}									
									<image :src="imgSvr+item.avatar" v-if="item.avatar!=null&&item.avatar!=''" class="media-body-a-img" ></image>
									<image src="../../static/header.png" v-else  class="media-body-a-img"></image>	
									{{item.userPhone}}
								</a>
								<!-- <a style="color: #AFAFAF;font-size: 28rpx;">5824<image src="../../static/star.png" style="width: 40rpx;height: 40rpx;float:left"></image></a> -->
								<a style="color: #AFAFAF;font-size: 22rpx;">已获得<text class="textRed">￥{{item.money}}<text style="font-size: 22rpx;">豆</text></text></a>
							</div>
						</a>
					</li>
				</ul>
			</view>
		</view>
		<view class="btn" style="background:#ed3132" @click="getTask(info.id)">领取任务</view>
		<!-- 编号-->		
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				token: 10,
				info: {},				
				imgPath: "",
				imgSvr: "",
				taskList: [],
				pageIndex: 1,
				pageSize: 10,
			}

		},
		onLoad: function(option) {
			// console.log(option.item);
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');			
			this.info.price = 0;
			this.info.quota = 0;
			this.info.useQuota = 0;
			this.info.id=0;
			this.info = JSON.parse(option.item);		
			 // console.log(this.info.id);
			  // this.getTask(this.info.id);			
		},

		onShow: function() {
			this.pageIndex = 1;
			this.taskList = [];		
			this.getTaskList();

		},
		// onReachBottom: function() {
		// 	if (this.taskList.length < this.total) {
		// 		this.pageIndex++;
		// 		this.getTaskList();
		// 	}
		// },
		// onPullDownRefresh: function() {
		// 	this.pageIndex = 1;
		// 	this.taskList = [];
		// 	this.getTaskList();
		// },

		methods: {
		getTaskList() {
			var _this = this
			var params = {				
				pageIndex: _this.pageIndex,
				pageSize: _this.pageSize			
			}
			uni.request({
				url: _this.ApiGateWay + '/sale/Member/GetUserAchievementDesc',
				data: params,
				method: 'POST',
				dataType: 'json',
				header: {
					Authorization: _this.token
				},
				success: function(res) {					
					if (Helper.CheckData(res)) {
						_this.taskList = _this.taskList.concat(res.data.list);
						//显示数量
						//_this.total = res.data.total;
						// console.log(_this.taskList);
		
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
		goIndex(){
				uni.navigateBack({
					delta:1
				})
		},
		getTask(id) {
			var _this = this;
		 console.log(id);
			uni.showLoading({
				title: "加载中..."
			})
			uni.request({
				url: _this.ApiGateWay + '/sale/Member/MemberGetTask?id=' + id,
				header: {
					Authorization: _this.token
				},
				method: 'POST',
				dataType: 'json',
				success: function(res) {
					if (Helper.CheckData(res)) {
						res = res.data;	
						// console.log('1');
						uni.showModal({
							title: '提示',
							content: '领取成功',
							confirmColor: '#5A83E9',
							showCancel: false,
							success:function(){
								uni.navigateBack();
							}
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
		
		
		}

	}
</script>

<style>
	page {
		background-color: #FFFFFF;

	}

	.card {
		font-size: 14px;
		position: relative;
		overflow: hidden;
		border-radius: 5px;
		background-color: #fff;
		background-clip: padding-box;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
		margin-top: 20px;
		margin-bottom: 20px;

	}

	.content {
		margin: 0 20px;
	}

	.table-view {
		padding: 0px 20rpx 20rpx 20rpx;
		margin-top: 20px;
		margin-left: 10px;
		margin-right: 10px;
		margin-bottom: 30px;
	}

	.table-view li {
		list-style-type: none;
		font-size: 14px;
	}

	.table-view-li:last-child::after {
		height: 0px;
	}

	.table-view-li {
		position: relative;
		overflow: hidden;
		padding: 11px 15px;
	}

	.table-view-li::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15px;
		height: 1px;
		content: '';
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.textRed {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #ed3132;
	}

	.text_P {
		font-size: 28rpx;
		font-weight: 600;
		margin: 14rpx 0;
		color: #4d4d4d;
	}

	.media-body {
		display: flex;
		justify-content: space-between;
		align-items: center
	}
	.media-body-a-img{		
		width: 60rpx;
		height: 60rpx;
		border-radius:40rpx;
		margin: 0 10rpx;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
		vertical-align:middle;
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

	.leftline {

		width: 1rpx;
		height: 118rpx;
		background: rgba(235, 235, 235, 1);
		opacity: 1;
	}

	.uni-ordernum {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex: 1;
		padding-left: 24rpx;
		padding-right: 24rpx;
		border-top: 1upx solid #F5F5F5;
		height: 88rpx;
		line-height: 88rpx;
		align-items: center;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 144, 0, 1);
		opacity: 1;

	}

	.uni-order {

		display: flex;
		flex-direction: column;
		/* height: 376rpx; */
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;

	}

	.uni-order-f {

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex: 1;
		margin-left: 24rpx;
		/* padding-right: 24rpx; */
		/* padding-top: 26rpx; */
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		line-height: 94rpx;
		border-bottom: 1upx solid #F5F5F5;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.date {
		/* height: 188rpx; */
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;

	}

	.bulletin {
		height: 568rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;

	}

	.bulletin-font {

		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-left: 24rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-top: 26rpx;
	}

	.uni-photo {
		width: 542rpx;
		height: 380rpx;
		background: rgba(245, 245, 245, 1);
		opacity: 1;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-radius: 8rpx;
		text-align: center;
		margin-top: 26rpx;
		margin-left: 104rpx;
		margin-right: 104rpx;

	}

	.bottom {

		width: 100%;
		height: 118rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;
		bottom: 0;
		position: fixed;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.openvideo {

		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		margin-left: 120rpx;
		margin-right: 118rpx;


	}

	.btn {
		flex: 1;
		/* width: 162px; */
		height: 46px;
		/* background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%); */
		background: rgb(237, 49, 50) none repeat scroll 0% 0%;
		position: fixed;
		bottom: 0px;
		width: 100%;
		opacity: 1;
		border-radius: 4px;
		font-size: 17px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		line-height: 46px;
	}
</style>
