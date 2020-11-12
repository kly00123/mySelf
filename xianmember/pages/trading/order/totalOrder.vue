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
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">订单列表</div>
				</div>
				<!---->
			</div>
		</uni-page-head>
		<view class="one_box">
			<view class="one_col"   @click="btnClick(0)">
				<view :class="sendType === 0 ? 'one_col_title color_333333' : 'one_col_title'">待发货</view>
				<view :class="sendType === 0 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>
			<view  class="one_col"  @click="btnClick(1)">
				<view :class="sendType === 1 ? 'one_col_title color_333333' : 'one_col_title'">已发货</view>
				<view :class="sendType === 1 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>
			<view class="one_col"  @click="btnClick(2)">
				<view :class="sendType ===2 ? 'one_col_title color_333333' : 'one_col_title'">已签收</view>
				<view :class="sendType === 2 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>


		</view>
		<!-- 任务 -->
		<view v-if="0==sendType" id="id-0" >
			<view class="textoder-a" v-for="(item,index) in firstList" @click=goDelivery(item.id)>
				<view class="textoder-b">
					<view style="margin-left: 20rpx;color: #ff5500;font-size: 28rpx;" v-if="item.status==0">{{index}}--待发货</view>
				</view>
				<view class="textoder-c">
					<!-- <view>获赞：{{item.quota}}</view> -->

					<view class="noways">
						<!-- <image src="../../static/img/goods/1.jpg" style="width: 160rpx; height:160rpx;float:left;margin-top:-12rpx;"></image> -->
						<!-- <image :src="'../../static/img/goods/'+item.taskType+'.png'" class="uni-starorderS"></image> -->
						<image :src="imgSvr + item.coverImg"  style="height:108px;width: 290rpx;"></image>
						<view class="noway">
							<view>商品名称：{{item.productName}}</view>
							<view style="color: #999999;word-wrap: break-word">购买时间：{{item.payTime| formatDate}}</view>
						</view>
						<!-- <view class="btn" v-else  @click="goTaskDetails(item)">
																	查看
																</view>
																 -->
					</view>
					<!-- <view style="margin-top: 8rpx;color: #999999;">使用时间：2020-01-18 22:55</view> -->
				</view>
			</view>
		</view>
		<view v-if="1==sendType" id="id-1">
			<view class="textoder-a" v-for="(item,index) in listShiYong">
				<view class="textoder-b">
					<view style="margin-left: 20rpx;color: #ff5500;font-size: 28rpx;" v-if="item.status==1">{{index}}--已发货</view>
				</view>
				<view class="textoder-c">
					<!-- <view>获赞：{{item.quota}}</view> -->

					<view class="noways" @click="toGoods(item)">
						<image :src="imgSvr + item.coverImg"  style="height:108px;width: 290rpx;"></image>
						<view class="noway">
							<view>商品名称：{{item.productName}}</view>
							<view style="color: #999999;word-wrap: break-word">购买时间：{{item.payTime| formatDate}}</view>
						</view>
						<!-- <view class="btn" v-else  @click="goTaskDetails(item)">
																	查看
																</view>
																 -->
					</view>
					<!-- <view style="margin-top: 8rpx;color: #999999;">使用时间：2020-01-18 22:55</view> -->
				</view>
			</view>
		</view>
		<view v-if="2==sendType" id="id-2">
			<view class="textoder-a" v-for="(item,index) in lastList">
				<view class="textoder-b">
					<view style="margin-left: 20rpx;color: #ff5500;font-size: 28rpx;" v-if="item.status==2">{{index}}--已签收</view>
				</view>
				<view class="textoder-c">
					<!-- <view>获赞：{{item.quota}}</view> -->

					<view class="noways">
						<image :src="imgSvr + item.coverImg"  style="height:108px;width: 290rpx;"></image>
						<view class="noway">
							<view>商品名称：{{item.productName}}</view>
							<view style="color: #999999;word-wrap: break-word">购买时间：{{item.payTime| formatDate}}</view>
						</view>
						<!-- <view class="btn" v-else  @click="goTaskDetails(item)">
																	查看
																</view>
																 -->
					</view>
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
				sendType: 0,
				token: "",
				orderId:'',
				imgSvr:'',
				firstList:[],
				listShiYong: [],
				orderType: ['待发货','已发货','已收货'],
				lastList: [],
				pageIndex: 1,
				pageSize: 15,
			}
		},
		onLoad: function(option) {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			this.getFirstList(0);
			// this.getList(this.taskTypeId);
			// this.getShiList(this.taskTypeId);
			//console.log("option: " + JSON.stringify(option));
			 let tbIndex = JSON.parse(option.tbIndex);

		},
		onShow: function() {
			this.pageIndex = 1;
			// this.getList();
		},
		onPageScroll(e){
			return;
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
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
				this.sendType = status;
				if (status == 0) {
					this.getFirstList(0);
				}
				if (status == 1) {
					this.getFirstList(1);
				}
				if (status == 2) {
					this.getFirstList(2);
				}
				// this.sendType = status;
				// this.pageIndex = 1;
				// this.list = [];
				// this.getList();
			},
			goIndex(){
				uni.navigateTo({
				    url: '/pages/trading/select/select'
				});
			},
			goDelivery(id){
				//console.log(id);
				uni.navigateTo({
					url: '/pages/trading/order/delivery?id=' + id
				})
			},
			showType(status){
				this.tabbarIndex = status;
				// this.list = this.orderList[status];
			},
			toGoods(item){
				var _this=this;
				console.log(item);
				uni.navigateTo({
					url: '/pages/trading/togoods/togoods?item=' + JSON.stringify(item)
				})
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
			goTaskDetails(item) {

				uni.navigateTo({
					url: "/pages/my/taskDetails?item=" + JSON.stringify(item)
				})
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
				var _this=this;
				console.log('status:'+status);
				uni.showLoading({
					title: "加载中..."
				})
				var parmas={
					pageIndex:_this.pageIndex,
					status:status
				}
				uni.request({
					url: _this.ApiGateWay + "/sale/shopping/GetAllShoppingOrderEntitys",
					data: parmas,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						//console.log(res);
						if (Helper.CheckData(res)) {
							if(status==0){
								_this.firstList=res.data.list;
								_this.orderId=res.data.list.id
										console.log(res.data.list);
							}
							if(status==1){
								_this.listShiYong=res.data.list;
								_this.orderId=res.data.list.id
										console.log(res.data.list);
							}
							if(status==2){
								_this.lastList=res.data.list;
								_this.orderId=res.data.list.id
										console.log(res.data.list);
							}
							
									//console.log(_this.orderId);
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
				var _this=this;
				console.log('status:'+status);
				uni.showLoading({
					title: "加载中..."
				})
				var parment = {
					pageIndex:_this.pageIndex,
					status : status
				}
				uni.request({
					url: _this.ApiGateWay + "/sale/shopping/GetshoppingOrderEntitys",
					data: parment,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							// for (var i=0;i<res.data.list.length;i++){
							// 	if(1==res.data.list[i].status){
							// 		_this.listShiYong=listShiYong.push(res.data.list[i]);
							// 	}
							// }
							_this.listShiYong=res.data.list;	
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
				var _this=this;
console.log('status:'+status);
var parmas={
	pageIndex:_this.pageIndex,
	status:status
}
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/shopping/GetshoppingOrderEntitys",
					data: parmas,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						if (Helper.CheckData(res)) {
_this.lastList=res.data.list;
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

	.one_box {
		display: flex;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #666666;
		height: 90rpx;
		margin-left:-20rpx;
		width: 105%;
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
		width: 80rpx;
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
		height: 340rpx;
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
		height: 66rpx;
		border-bottom: 1rpx solid #F5F5F5;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.noways {
		margin-right:90rpx;
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
		margin-left:60rpx;

	}

	.textoder-c {
        line-height: 2;
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
