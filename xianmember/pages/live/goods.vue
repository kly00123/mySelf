<template>
	<view id="page">
		<!-- 	<view class="card">
			<view class="return_b">商城</view>
			<view class="card-link-search">
				<input type="text" class="return_c" v-model="taskNo" @input="getInptValue()" />
			</view>
			<image class="return_c" src="../../static/search.png"></image>
			<view class="btnss" style="margin-top: 0px;padding: 0px;" @click="sosuoClick()" :style="{display:sosuo}">搜索</view>
		</view> -->
				<view style="height:300rpx ;relative;z-index: 0;width:95%;margin-left:14rpx;border-radius:50rpx;hidden;box-shadow:1px 1px 5px rgb(130, 105, 105);">
					<swiper :autoplay="true" :interval="3000" :duration="1000" indicator-color="#FFFFFF"
					 indicator-active-color="#FFFFFF" style="height:300rpx">
					 <swiper-item>
					 	<view class="swiper-item">
					 		<image src="../../static/banner/02.png" @click="onClickSwiper(43)" class="uni-top"></image>
					 	</view>
					 </swiper-item>
						<swiper-item>
							<view class="swiper-item" @click="onClickSwiper(41)">
								<image src="../../static/banner/zzdh.jpg" class="uni-top"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item" @click="onClickSwiper(42)">
								<image src="../../static/banner/dzb.jpg" class="uni-top"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx)">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in Tab" :key="index" @tap="tabSelect"
				 :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			<view class="VerticalMain" style="height:calc(100vh - 375upx)">
				<view class="uni-view-content" style="overflow: hidden auto; ">

					<view class="navPadding" id="id-0">


	

					</view>
	

					<!--<view class="end">
						到底啦

					</view> -->

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
				listShiYong: [],
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
					"name": "商家直播",
					"content": {
						"SubTab": [{
							"SubTabName": "裤子",
							"SubContent": ["休闲裤", ""]
						}]
					}
				}, {
					"id": 1,
					"name": "成为主播",
					"content": {
						"SubTab": [{
							"SubTabName": "裤子",
							"SubContent": ["休闲裤", ""]
						}]
					}
				}, {
					"id": 3,
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
			this.getShiList(this.taskTypeId);
		},
		methods: {
			payment(item) {
				uni.navigateTo({
					url: '/pages/live/payment?item=' + JSON.stringify(item)
				})
			
			
			}
			,
			getList(taskTypeId) {
				
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetTaskPackageList?taskTypeId=" + taskTypeId,
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
			gettagList(taskTypeId) {
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetTaskPackageList?taskTypeId=" + taskTypeId,
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
					this.getShiList(22);
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
