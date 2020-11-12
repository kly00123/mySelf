<template>
	<view class="page">
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">集赞涨粉</div>
				</div>
				<!---->
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>
		<view style="height:300rpx ;margin-top:-80rpx;relative;z-index: 0;width:100%;border-radius:50rpx;hidden;box-shadow:1px 1px 5px rgb(130, 105, 105);">
			<swiper :autoplay="false" :interval="3000" :duration="1000" indicator-color="#FFFFFF" indicator-active-color="#FFFFFF"
			 style="height:300rpx">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/banner/ll1.png" style="border-radius:50rpx;" class="uni-top"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="one_box">
			<view class="one_col" @click="btnClick(1)">
				<view :class="sendType === 1 ? 'one_col_title color_333333' : 'one_col_title'">发布任务</view>
				<view :class="sendType === 1 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>
			<view class="one_col" @click="btnClick(2)">
				<view :class="sendType ===2 ? 'one_col_title color_333333' : 'one_col_title'">已发布任务</view>
				<view :class="sendType === 2 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>


		</view>
		<!-- 详情 -->
<!-- 		<view class="textoder">
			<image src="../../static/no.png" style="width: 34rpx;height: 34rpx;"></image>
			<view style="margin-left: 18rpx;">已购买的套餐请在<text style="color: #FF9000;">72小时内</text>使用发布任务！</view>
		</view> -->
		<!-- 任务 -->
		<view id="id-0">
			<view class="starorder">
				<image src="../../static/no.png" style="width: 34rpx;height: 34rpx;"><text style="color: #FF9000;margin-left:16rpx;" >Tips</text></image>
				<view style="color:darkgray;font-size: 12px;">{{message}}</view>
			</view>
			<view class="starorder">
				<view class="number">
					<view class="uni-number">
						<view>集赞涨粉/店铺关注</view>
					</view>
					<!-- 价格 -->
					<view class="uni-numbers">
						<view style="font-size: 36rpx;">单价自选</view>
					</view>
				</view>
				<view class="line"></view>
				<!-- 详情 -->
				<view class="uni-starorder">
					<view style="display: flex;flex-direction: column;color:darkgray;">
					<view>获得主动关注</view>
					<view>完成知名度提升</view>
					</view>
					<view class="btns" @click="increass()">
						发布
					</view>
				</view>
			</view>
		</view>
		<view v-if="2==sendType" id="id-2">
			<view class="textoder-a" v-for="item in lastList">
				<view class="textoder-b">
					<view style="margin-left: 20rpx;">{{item.name}}</view>
					<view style="margin-right: 20rpx;color: #F04F43;" v-if="item.state==0">已使用</view>
				</view>
				<view class="textoder-c">
					<!-- <view>获赞：{{item.quota}}</view> -->
					<view class="noways">
						<view class="noway">
							<!-- <view>悬赏金额：{{item.taskPrice}}元</view> -->
							<view>点赞：{{item.quota}}个</view>
						</view>
						<!-- <view class="btn" v-else  @click="goTaskDetails(item)">
																	查看
																</view>
																 -->
					</view>
					<view style="margin-top: 8rpx;color: #999999;">购买时间：{{item.createTime}}</view>
					<!-- <view style="margin-top: 8rpx;color: #999999;">使用时间：2020-01-18 22:55</view> -->
				</view>
			</view>
		</view>
<!-- 		<view class="textoder-a">
		    <view class="textoder-b">
		    	<view style="margin-left: 20rpx;">网红套餐</view>
				<view  style="margin-right: 20rpx;color: #999999;">已使用</view>
		    </view>
			<view class="textoder-c">
				<view>获赞：100</view>
				
				<view class="noways">
					<view class="noway">
						<view>悬赏金额：0.50元</view>
						<view>赠送：每天6条接单任务</view>
					</view>
				
				</view>
				<view style="margin-top: 8rpx;color: #999999;">购买时间：2020-01-18 22:05</view>
			</view>
		</view> -->



	</view>

</template>

<script>
	import Helper from '@/function.js';
	export default {

		data() {

			return {
				sendType: 1,
				token: "",
				listShiYong: [],
				list: [],
				message:"渠赞与多家自媒体达成深度战略合作，以助其迅速积累流量并提高平台知名度，打造网红商业价值。个人可通过平台得到更多人的主动关注，完成知名度提升、实现网红效应。",
				lastList: [],
				pageIndex: 1,
				pageSize: 15,
			}
		},
		onLoad: function() {
			this.token = uni.getStorageSync('token');
			this.getList(this.taskTypeId);
			this.getShiList(this.taskTypeId);

		},
		onShow: function() {
			this.pageIndex = 1;
		},

		methods: {
			btnClick: function(index) {
				console.log(index);
				if (this.sendType == index) {
					return;
				}
				this.sendType = index;
				if (index == 2) {
					this.getlastList(1);
					var tarGetObj2 = document.getElementById("id-0");
					tarGetObj2.style = "display:none;";
				}
				if (index==1){
					var tarGetObj2 = document.getElementById("id-0");
					tarGetObj2.style = "display:block;";
				}
				this.sendType = index;
				this.pageIndex = 1;
				this.list = [];
			},
			goIndex(){
				uni.switchTab({
				    url: '/pages/index/index'
				});
			},
			payment(item) {
				uni.navigateTo({
					url: '/pages/live/payment?item=' + JSON.stringify(item)
				})


			},
			goCreate(item) {
				// console.log(item);
				uni.navigateTo({
					url: "/pages/mytask/create?item=" + JSON.stringify(item)
				})
			},
			increass() {
				uni.navigateTo({
					url: "/pages/mytask/increass"
				})
			},
			goNum(){
				uni.navigateTo({
					url: "/pages/my/num"
				})
			},
			goTaskDetails(item) {
				uni.navigateTo({
					url: "/pages/my/taskDetails?item=" + JSON.stringify(item)
				})
			},
			getList() {
				var array = [];
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetTaskPackageList",
					data: "",
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						// console.log(res.data)
						if (Helper.CheckData(res)) {
							// console.log(res.data.list.length);
							for (var i = 0; i < res.data.list.length; i++) {
								if (res.data.list[i].taskTypeListId === 1 && res.data.list[i].taskLevel > 4) {
									array.push(res.data.list[i]);
									_this.list = array;
								}

							}
							//console.log(array);


							// _this.list = res.data.list[1].taskTypeListId;
							//console.log(_this.list);
							// for(var i=0;i<res.data.list.length;i++){
							//   _this.list.i.
							// }
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
			getShiList(taskTypeId) {
				var _this = this;

				if (_this.sendType == -1) {
					var state = ''
				} else {
					var state = _this.sendType
				}

				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					state: 1,
					taskTypeId: taskTypeId
				}
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetMyTaskPackageList",
					data: params,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							_this.listShiYong = res.data.list;
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
			getlastList(taskTypeId) {
				var _this = this;
				if (_this.sendType == -1) {
					var state = ''
				} else {
					var state = _this.sendType
				}

				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					state: 2,
					taskTypeId: taskTypeId
				}
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetMyTaskPackageList",
					data: params,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						if (Helper.CheckData(res)) {
							_this.lastList = res.data.list;
							console.log(res.data.list)
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

			bank() {

				uni.navigateBack({
					delta: 1
				})
			}


		}

	}
</script>
<style>
	page {
        width: 95%;
		margin:0 auto;
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

	.uni-top {
		width: 100%;
		height: 300rpx;
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
		width: 110rpx;
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

	.textoder {
		height: 100rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		display: flex;
		flex-direction: row;
		padding-left: 24rpx;
		align-items: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.textoder-a {
		height: 260rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 20rpx;

	}

	.starorder {
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 20rpx;
		/* margin-left: 24rpx;
			margin-right: 24rpx; */
		padding: 20rpx;
		box-shadow: 1px 1px 5px #C0C0C0;
		margin-bottom: 40rpx;
	}

	.starorder:last-child {
		margin-bottom: 50rpx;
	}

	.number {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
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

	.uni-starorder {

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.line {
		height: 2rpx;
		background: rgba(0, 0, 0, 0.1);
		opacity: 1;

	}

	.uni-starorder_A {

		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight: bold;
	}

	.uni-starorder_b {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-top: 22rpx;
		/* margin-left: 42rpx; */
		color: rgb(160, 160, 160);
		opacity: 1;
	}

	.btns {
		width: 134rpx;
		height: 60rpx;
		background: #f02f30;
		opacity: 1;
		border-radius: 8rpx;
		margin-top: 52rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.uni-numbers {
		display: flex;
		flex-direction: row;
		align-items: center;

		font-family: PingFang SC;
		font-weight: bold;
		color: #f02f30;
		opacity: 1;
	}

	.btn {
		width: 60rpx;
		height: 28rpx;
		border: 2rpx solid rgba(255, 144, 0, 1);
		opacity: 1;
		line-height: 28rpx;
		border-radius: 4rpx;
		font-size: 20rpx;
		font-family: PingFang SC;
		font-weight: 400;
		text-align: center;
		color: rgba(255, 144, 0, 1);
		opacity: 1;
	}

	.textoder-b {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
		border-bottom: 1rpx solid #F5F5F5;

		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.noways {
		display: flex;
		flex-direction: row;
		flex: 1;
		justify-content: space-between;
		align-items: center;


	}

	.btnShi {


		width: 134rpx;
		height: 60rpx;
		margin-left: 164rpx;
		background: linear-gradient(164deg, rgba(250, 92, 108, 1) 0%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.noway {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

	}

	.textoder-c {

		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		/* align-items: flex-start; */
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-top: 22rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.btn {


		width: 134rpx;
		height: 60rpx;
		margin-right: 22rpx;
		background: linear-gradient(164deg, rgba(250, 92, 108, 1) 0%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}
</style>
