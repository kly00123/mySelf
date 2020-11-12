<template>
	<view class="page">
		<!-- 		<view class="title" @click="bank()">
			<image src="../../static/leftjt.png" class="left"></image>
			<view style="margin-left: 16rpx;">我的套餐</view>
		</view> -->
		<!-- 选择 -->
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">领取任务</div>
				</div>
				<!---->
			</div>
		</uni-page-head>
				<view style="height:300rpx ;relative;z-index: 0;width:100%;border-radius:50rpx;hidden;box-shadow:1px 1px 5px rgb(130, 105, 105);">
					<swiper :autoplay="false" :interval="3000" :duration="1000" indicator-color="#FFFFFF" indicator-active-color="#FFFFFF"
					 style="height:300rpx">
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/banner/lingqu.png" style="border-radius:50rpx;" class="uni-top"></image>
							</view>
						</swiper-item>
		
					</swiper>
				</view>
		<view class="one_box">
			<view class="one_col" @click="btnClick(1)">
				<view :class="sendType === 1 ? 'one_col_title color_333333' : 'one_col_title'">集赞涨粉</view>
				<view :class="sendType === 1 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>
			<view class="one_col" @click="btnClick(2)">
				<view :class="sendType ===2 ? 'one_col_title color_333333' : 'one_col_title'">店铺关注</view>
				<view :class="sendType === 2 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>
			<view class="one_col" @click="btnClick(3)">
				<view :class="sendType ===3 ? 'one_col_title color_333333' : 'one_col_title'">应用下载</view>
				<view :class="sendType === 3 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>
			<view class="one_col" @click="btnClick(4)">
				<view :class="sendType ===4 ? 'one_col_title color_333333' : 'one_col_title'">微信获客</view>
				<view :class="sendType === 4 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>


		</view>
				<!-- 详情 -->
		<!-- 		<view class="textoder">
					<image src="../../static/no.png" style="width: 34rpx;height: 34rpx;"></image>
					<view style="margin-left: 18rpx;">已购买的套餐请在<text style="color: #FF9000;">72小时内</text>使用发布任务！</view>
				</view> -->
				<!-- 任务 -->
				<view class="starorder">
					<image src="../../static/no.png" style="width: 34rpx;height: 34rpx;"><text style="color: #FF9000;margin-left:16rpx;" >Tips</text></image>
					<view style="color:darkgray;font-size: 12px;">{{message}}</view>
				</view>
		<!-- 任务 -->
		<view v-if="1==sendType" id="id-1">
			<view class="starorder"  v-for="item in firstList">
				<view class="number">
					<view class="uni-number">
						<view>集赞涨粉</view>
					</view>
					<!-- 价格 -->
					<view class="uni-numbers">
						<view style="font-size: 36rpx;">{{item.price}}豆</view>
					</view>
				</view>
				<view class="line"></view>
				<!-- 详情 -->
				<view class="uni-starorder">
				</view>
				<view class="uni-starorder">
					<view class="uni-numberr">
						{{item.description}}
					</view>
							<view class="btnss" @click="mytasorder(item)">
								领取任务
							</view>
				</view>
			</view>
		</view>
		<view v-if="2==sendType" id="id-2">
			<view class="starorder" v-for="(item,index) in listShiYong">
				<view class="number">
					<view class="uni-number">
						<view>店铺关注</view>
					</view>
					<!-- 价格 -->
					<view class="uni-numbers">
						<view style="font-size: 36rpx;">{{item.price}}豆</view>
					</view>
				</view>
				<view class="line"></view>
				<!-- 详情 -->
				<view class="uni-starorder">
				</view>
				<view class="uni-starorder">
					<view class="uni-numberr">
						{{item.description}}
					</view>
							<view class="btnss" @click="mytasorder(item)">
								领取任务
							</view>
				</view>
			</view>
		</view>
		<view v-if="3==sendType" id="id-3">
			<view class="starorder" v-for="item in threeList">
				<view class="number">
					<view class="uni-number">
						<view>应用下载</view>
					</view>
					<!-- 价格 -->
					<view class="uni-numbers">
						<view style="font-size: 36rpx;">{{item.price}}豆</view>
					</view>
				</view>
				<view class="line"></view>
				<!-- 详情 -->
				<view class="uni-starorder">
				</view>
				<view class="uni-starorder">
					<view class="uni-numberr">
						{{item.description}}
					</view>
							<view class="btnss" @click="mytasorder(item)">
								领取任务
							</view>
				</view>
			</view>
		</view>
		<view v-if="4==sendType" id="id-4">
			<view class="starorder" v-for="item in lastList">
				<view class="number">
					<view class="uni-number">
						<view>微信获客</view>
					</view>
					<!-- 价格 -->
					<view class="uni-numbers">
						<view style="font-size: 36rpx;">{{item.price}}豆</view>
					</view>
				</view>
				<view class="line"></view>
				<!-- 详情 -->
				<view class="uni-starorder">
				</view>
				<view class="uni-starorder">
					<view class="uni-numberr">
						{{item.description}}
					</view>
							<view class="btnss" @click="mytasorder(item)">
								领取任务
							</view>
				</view>
			</view>
		</view>
		<view class="nodata" v-if="total==0">
			<view>
				<image src="../../static/noways.png" style="width: 250upx;height: 164upx;"></image>
			</view>
			暂无任务
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
				imgSvr: '',
				total: 0,
				message:'用户通过领取任务端口获悉热门就业、创业、商业等信息，完成任务再获得商家高额悬赏奖励。',
				firstList: [],
				listShiYong: [],
				threeList:[],
				orderType: ['待发货', '已发货', '已收货'],
				lastList: [],
				pageIndex: 1,
				pageSize: 15,
			}
		},
		onLoad: function(option) {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			this.getFirstList(1);
			// this.getList(this.taskTypeId);
			// this.getShiList(this.taskTypeId);
			//console.log("option: " + JSON.stringify(option));
			let tbIndex = JSON.parse(option.tbIndex);
			console.log(tbIndex);

		},
		onReachBottom: function() {
			if (this.firstList.length < this.total) {
				this.pageIndex++;
				this.getFirstList(1);
			}
		},
		onPullDownRefresh: function() {
			this.pageIndex = 1;
			this.firstList = [];
			this.getFirstList(1);
		},
		onShow: function() {
			// this.getList();
		},
		onPageScroll(e) {
			return;
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
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
			btnClick: function(status) {
				// if (this.sendType == status) {
				// 	return;
				// }
				if (status == 1) {
					this.getFirstList(1);
				}
				this.sendType = status;
				if (status == 2) {
					this.getShiList(2);
				}
				if (status == 3) {
					this.getthreeList(3);
				}
				if (status == 4) {
					this.getlastList(4);
				}
			},
goIndex(){
	uni.switchTab({
		url:'/pages/index/index'
	})
},
			showType(status) {
				this.tabbarIndex = status;
				// this.list = this.orderList[status];
			},
			toGoods(item) {
				var _this = this;
				console.log(item);
				uni.navigateTo({
					url: '/pages/trading/togoods/togoods?item=' + JSON.stringify(item)
				})
			},
			goDelivery(id) {
				console.log(id);
				uni.navigateTo({
					url: '/pages/trading/order/delivery?id?=' + orderId
				})
			},
			payment(item) {
				uni.navigateTo({
					url: '/pages/live/payment?item=' + JSON.stringify(item)
				})


			},
						mytasorder(item) {
							// console.log("==========")
							// console.log(JSON.parse('{"userPhone":"185****3497","taskNo":"7","id":"71bf0a21-5a1e-4507-92c4-497ad073c15f","mercId":"0f11ae8e-e523-4644-bde0-2d633f5512bc","memberId":"00068c97-a650-4744-961a-0c05508a03cc","name":"","price":0.5,"taskType":22,"taskRank":0,"aim":-1,"url":"https://market.m.taobao.com/app/tb-source-app/wz111/pages/impression?pathInfo=shop/impression&userId=669922406&shopId=64768695&wh_weex=true&pageId=0&alisite=true","quota":20000,"useQuota":0,"createTime":"2020-06-30 11:18:37","endTime":null,"state":0,"description":"bestway旗舰店"}'))
							// console.log("==========")
							// return;
							console.log(item);
							item.url="";
							uni.navigateTo({	
								url: "/pages/mytask/mytaskorder?item="+JSON.stringify(item)
							})
						
						
						},
			goCreate(item) {
				// console.log(item);
				uni.navigateTo({
					url: "/pages/mytask/create?item=" + JSON.stringify(item)
				})
			},
			goTaskDetails(id) {
				console.log(id);
				var _this = this;
				console.log('status:' + status);
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/shopping/ReceiveShoppingOrder?id=" + id,
					data: '',
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						//console.log(res);
						if (Helper.CheckData(res)) {
							console.log("成功！！！")
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
			// getList() {
			// 	var array = [];
			// 	var _this = this;
			// 	uni.request({
			// 		url: _this.ApiGateWay + "/sale/Member/GetTaskPackageList",
			// 		data: "",
			// 		header: {
			// 			Authorization: _this.token
			// 		},
			// 		method: 'POST',
			// 		dataType: 'json',
			// 		success: function(res) {
			// 			// console.log(res.data)
			// 			if (Helper.CheckData(res)) {
			// 				// console.log(res.data.list.length);
			// 				for (var i = 0; i < res.data.list.length; i++) {
			// 					if (res.data.list[i].taskTypeListId === 1 && res.data.list[i].taskLevel > 4) {
			// 						array.push(res.data.list[i]);
			// 						_this.list = array;
			// 					}

			// 				}
			// 				//console.log(array);


			// 				// _this.list = res.data.list[1].taskTypeListId;
			// 				//console.log(_this.list);
			// 				// for(var i=0;i<res.data.list.length;i++){
			// 				//   _this.list.i.
			// 				// }
			// 			}

			// 		},
			// 		complete() {
			// 			uni.hideLoading();
			// 		},
			// 		fail: function(res) {
			// 			uni.stopPullDownRefresh();
			// 			console.log(res.errorCode)
			// 		}
			// 	});
			// },
			getFirstList(status) {
				var _this = this;
				console.log('status:' + status);
				uni.showLoading({
					title: "加载中..."
				})
				var parmas={
					pageIndex:_this.pageIndex,
					pageSize:_this.pageSize,
					taskType:status
				}
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetTaskList",
					data: parmas,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							let {
								errorCode,
								errorMessage,
								list,
								total,
								totalPage
							} = res;

							_this.firstList = _this.firstList.concat(res.data.list);
							_this.total = res.data.total;
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
			getShiList(status) {
				var _this = this;
				console.log('status:' + status);
				uni.showLoading({
					title: "加载中..."
				})
				var parmas={
					pageIndex:_this.pageIndex,
					pageSize:_this.pageSize,
					taskType:status
				}
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetTaskList",
					data: parmas,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							let {
								errorCode,
								errorMessage,
								list,
								total,
								totalPage
							} = res;
							// for (var i=0;i<res.data.list.length;i++){
							// 	if(1==res.data.list[i].status){
							// 		_this.listShiYong=listShiYong.push(res.data.list[i]);
							// 	}
							// }
							_this.total = res.data.total;
							_this.listShiYong = res.data.list;
							console.log(res);
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
			getthreeList(status) {
				var _this = this;
				console.log('status:' + status);
				uni.showLoading({
					title: "加载中..."
				})
				var parmas={
					pageIndex:_this.pageIndex,
					pageSize:_this.pageSize,
					taskType:status
				}
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetTaskList",
					data: parmas,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							let {
								errorCode,
								errorMessage,
								list,
								total,
								totalPage
							} = res;
							// for (var i=0;i<res.data.list.length;i++){
							// 	if(1==res.data.list[i].status){
							// 		_this.listShiYong=listShiYong.push(res.data.list[i]);
							// 	}
							// }
							_this.total = res.data.total;
							_this.threeList = res.data.list;
							console.log(res);
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
			getlastList(status) {
				var _this = this;
				console.log('status:' + status);
				uni.showLoading({
					title: "加载中..."
				})
				var parmas={
					pageIndex:_this.pageIndex,
					pageSize:_this.pageSize,
					taskType:status
				}
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetTaskList",
					data: parmas,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						if (Helper.CheckData(res)) {
							let {
								errorCode,
								errorMessage,
								list,
								total,
								totalPage
							} = res;
							_this.total = res.data.total;
							_this.lastList = res.data.list;
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
			},



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
				.slogan_dis{
					display: none;
				}
	.one_box {
		display: flex;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #666666;
		height: 90rpx;
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
		margin-top: 20rpx;
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
		margin-bottom: 30rpx;
	}

	.starorder:last-child {
		margin-bottom: 30rpx;
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
	.uni-numberr {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: darkgray;
		opacity: 1;
		width:450rpx;
	}

	.uni-starorder {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;	
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
		margin-top: 160upx;
	}
	.line {
		height: 2rpx;
		background: rgba(0, 0, 0, 0.1);
		opacity: 1;

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
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		float: right;
		padding: 0 10px;

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
