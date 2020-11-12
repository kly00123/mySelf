<template>
	<view id="page">

		<view class="VerticalBox">
			<view class="VerticalMain" style="height:calc(100vh - 375upx)">
				<view class="uni-view-content" style="overflow: hidden auto; ">

					<view class="navPadding" id="id-0">
						<scroll-view scroll-x class="bg-white nav">
							<view class="flex text-center">
								<view class="cu-item flex-sub" :class="0==tal?'text-orange cur':''" @tap="talSelect(0)">
									购买套餐
								</view>
								<view class="cu-item flex-sub" :class="1==tal?'text-orange cur':''" @tap="talSelect(1)">
									使用套餐
								</view>
							</view>
						</scroll-view>
						<view v-if="0==tal">
						<view class="starorder" v-for="item in list">
							<view class="number">
								<view class="uni-number">
									<view>{{item.name}}</view>
								</view>
								<!-- 价格 -->
								<view class="uni-numbers">
									<view style="font-size: 36rpx;">￥</view>
									<view style="font-size: 36rpx;">{{item.price}}</view>
								</view>
							</view>
							<view class="line"></view>
							<!-- 详情 -->
							<view class="uni-starorder">
								<view class="uni-starorder_A">
									<view class="uni-starorder_b">

										<view>获得点赞：{{item.disQuota}}个</view>
										<!-- <view>悬赏金额：{{item.taskPrice}}元</view> -->
										<!-- <view>赠送：每天{{item.taskGetCount}}条,最高{{item.taskPrice}}元的接单任务</view> -->
									</view>

								</view>
								<view class="btns" @click="payment(item)">
									购买
								</view>
							</view>

						</view>
						</view>
							<view class="textoder-a" v-for="item in nextlist">
								<view class="textoder-b">
									<view style="margin-left: 20rpx;">{{item.name}}</view>
									<view style="margin-right: 20rpx;color: #F04F43;" v-if="item.state==1">待使用</view>
									<view style="margin-right: 20rpx;color: #999999;" v-else>已使用</view>
								</view>
								<view class="textoder-c">
									<!-- <view>获赞：{{item.quota}}</view> -->
							
									<view class="noways">
										<view class="noway">
											<!-- <view>悬赏金额：{{item.taskPrice}}元</view> -->
											<view>获得点赞：{{item.quota}}个</view>
										</view>
							
										<view class="btnShi" v-if="item.state==1" @click="goCreate(item)">
											去使用
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


				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				list: [],
				nextlist: [],
				listGuang:[],
				tal: 0,
				tag: 0,
				src: '',
				tabCur: 0,
				taskTypeId: 22,
				mainCur: 0,
				videoPath: '',
				verticalNavTop: 0,
				load: true,
				total: 0,
				token: '',
				imgSvr: "",
				imgPath: "",
				sosuo: "none",
				taskNo: "",
				"Tab": [{
					"id": 0,
					"name": "精准引流",
					"content": {
						"SubTab": [{
							"SubTabName": "裤子",
							"SubContent": ["休闲裤", ""]
						}]
					}
				}, {
					"id": 1,
					"name": "企业宣发",
					"content": {
						"SubTab": [{
							"SubTabName": "裤子",
							"SubContent": ["休闲裤", ""]
						}]
					}
				}, {
					"id": 3,
					"name": "兼职招聘",
					"content": {
						"SubTab": [{
							"SubTabName": "裤子",
							"SubContent": ["休闲裤", ""]
						}]
					}
				}, {
					"id": 4,
					"name": "其他",
					"content": {
						"SubTab": [{
							"SubTabName": "裤子",
							"SubContent": ["休闲裤", ""]
						}]
					}
				}]

			}
		},
		onLoad: function(option) {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			this.getList(this.taskTypeId);
			this.getnextList(this.taskTypeId);
		},
		methods: {
			payment(item) {
				uni.navigateTo({
					url: '/pages/live/payment?item=' + JSON.stringify(item)
				})
			
			
			}
			,
			getList() {
				var array=[];
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetTaskPackageList",
					data:"",
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
                   // console.log(res.data)
						if (Helper.CheckData(res)) {
						// console.log(res.data.list.length);
						for(var i=0;i<res.data.list.length;i++){
							if(res.data.list[i].taskTypeListId===1&&res.data.list[i].taskLevel>4){
								 array.push(res.data.list[i]);
								_this.list=array;
							}
							
						}
						console.log(array);
						
						
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
			gettagList(taskTypeId) {
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetMyTaskPackageList?taskTypeId=" + taskTypeId,
					data: "",
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
			
						if (Helper.CheckData(res)) {
							_this.list = res.data.list;
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

			talSelect(num) {
				this.tal = num;
				if(num==1){
					this.getnextList(22);
				}
				
			},
			tagSelect(num){
				this.tag = num;
				if(num==1){
					this.getGuang(21);
				}				
			},
			goCreate(item) {
			
				if (item.taskTypeListId == 2) {
					if (item.taskTypeId == 21) {
						uni.navigateTo({
							url: "/pages/mytask/createAdvertisement?item=" + JSON.stringify(item)
						})
						return;
					}
			
				}
			
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
			paymentCard(){
				uni.navigateTo({
					url:"/pages/live/card"
				})
			},
			getnextList() {
				var _this = this;

				if (_this.sendType == -1) {
					var state = ''
				} else {
					var state = _this.sendType
				}

				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					state: state,
					taskTypeListId: _this.taskTypeListId
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
							_this.nextlist = _this.list.concat(res.data.list);
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
			getGuang(taskTypeId){
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
					taskTypeId:taskTypeId
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
							_this.listGuang = res.data.list;
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
			tabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;

				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50			
				var aId = e.target.dataset.id;
				
				
				
				// if(aid=="1"){
					
				// 	console.log(aId+"1");
				// }
				
				if(aId=="1"){
					this.getList(21)					
				}else{					
					this.getList(22);
				}
				
				
				var tarGetObj = document.getElementById("id-" + aId);
				tarGetObj.style = "";
				//遍历其他的div，隐藏
				if (aId == 0) {
					var tarGetObj2 = document.getElementById("id-1");
					tarGetObj2.style = "display:none;";
				} else {
					var tarGetObj2 = document.getElementById("id-0");
					tarGetObj2.style = "display:none;";
				}
			}
		},

	};
</script>

<style>
	* {
		font-size: 14px;

		font-family: Arial, Helvetica, sans-serif;
	}

.page{
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	margin: 0 1px;
	font-family: newincon;
}
	.nav.fixed {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 1024;
		box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
	}

	.flex {
		display: flex;
	}

	.flex-sub {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}

	.text-orange,
	.line-orange,
	.lines-orange {
		color: #f37b1d;
	}

	.nav .cu-item.cur {
		border-bottom: 2px solid;
	}

	.bg-white {
		background-color: #fff;
	}

	.nav .cu-item {
		height: 45px;
		display: inline-block;
		line-height: 45px;
		margin: 0 5px;

	}

	.text-center {
		text-align: center;
	}

	.cu-list>.cu-item {
		transition: all .6s ease-in-out 0s;
		transform: translateX(0upx)
	}

	.cu-list.menu-avatar>.cu-item .content.flex-sub {
		width: calc(100% - 96upx - 60upx - 20upx);
	}

	.screen-swiper {

		min-height: 368rpx;
		box-sizing: border-box;
	}

	.screen-swiper uni-image {
		width: 100%;
		display: block;
		height: 100%;
		margin: 0;
		pointer-events: none;
	}

	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 160upx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
		line-height: 50px;
	}

	.card {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		min-height: 100rpx;
		justify-content: space-between;
		align-items: center;
		background-color: #DD524D;

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

	.card-link-search {

		display: flex;
		flex-direction: row;
		align-items: center;
		height: 38upx;
		font-size: 40upx;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		border: 2rpx solid#F0F0F0;
		border-radius: 50px;
		background-color: #FFFFFF;
		width: 65%;
	}

	.card-link {
		display: flex;
		color: #FFFFFF;
		font-weight: bold;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	/* .VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	} */

	.VerticalBox {
		display: flex;
	}
	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}

	.uni-view-content {
		width: 100%;
		height: 100%;

	}

	.navPadding {
		padding: 30rpx 20rpx 0 20rpx;
	}

	.text-cut {
		font-size: 36rpx;
		font-weight: bold;
	}

	.cu-list {
		margin-top: 10rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 10px;
	}

	.return_c {
		width: 60rpx;
		height: 60rpx;
		right: 44rpx;
		margin-left: 14rpx;
	}

	.return_b {
		display: flex;
		white-space: nowrap;
		margin-top: -6rpx;
		margin-left: 60rpx;
		color: #F8F8F8;
		font-size: 30rpx;
	}

	.cu-list-tab {
		width: 33%;
		float: left;
		text-align: center;
		height: 200rpx;
	}

	.cu-list-tab-text {
		font-size: 24rpx;
		color: #999;
	}

	.video {
		display: flex;
		margin: 0 auto;
	}

	.btn {
		flex: 1;
		/* width: 162px; */
		height: 46px;
		/* background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%); */
		opacity: 1;
		border-radius: 4px;
		font-size: 17px;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		line-height: 46px;
	}

	.cu-list-img {
		width: 160rpx;
		height: 140rpx;
		margin-bottom: 20rpx;
	}

	.uni-photo {
		width: 100%;
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
	}

	.end {
		text-align: center;
		padding: 40rpx;
		font-size: 24rpx;
		color: #999;
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

	.line {

		height: 2rpx;
		background: rgba(0, 0, 0, 0.1);
		opacity: 1;

	}

	.uni-starorder {

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;


	}

	.uni-starorderS {
		width: 100rpx;
		height: 100rpx;
		margin-top: 32rpx;
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
	.textoder-a {
			height: 346rpx;
			background: rgba(255, 255, 255, 1);
			opacity: 1;
			border-radius: 12rpx;
			margin-top: 20rpx;
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
	
		.noway {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
	
		}
	.uni-top {
		width: 100%;
		height: 300rpx;
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
	
		.btnShi {
	
	
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