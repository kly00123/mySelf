<template>
	<view id="page">
<view style="height:300rpx ;relative;z-index: 0;width:100%;border-radius:50rpx;box-shadow:1px 1px 5px rgb(130, 105, 105);margin-bottom: 2px;">
					<swiper :autoplay="true" :interval="3000" :duration="1000" indicator-color="#FFFFFF" @change="change"
					 indicator-active-color="#FFFFFF" style="height:300rpx">
						<swiper-item>
							<view class="swiper-item" @click="onClickSwiper(41)">
								<image src="../../static/banner/01.png" class="uni-top" style="width:100%;"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item" @click="onClickSwiper(42)">
								<image src="../../static/banner/02.png" class="uni-top" style="width:100%;" ></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/banner/04.png" @click="onClickSwiper(43)" class="uni-top"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/banner/03.png" class="uni-top" style="width:100%;"></image>
							</view>
						</swiper-item>

					</swiper>
				</view>
	    <view class=""></view>
			</view>
		</view>
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				active:0,
				list: [],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
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
				taskNo: "",
				sortlist: [
					{
						id: 1,
						name: 105
					},
					{
						id: '2',
						name: 101
					},
					{
						id: '3',
					    name: 20
					},
				]
				
			}
		},
		onLoad: function() {
				this.token = uni.getStorageSync('token');
		
			},
		onLoad() {
			// uni.showLoading({
			// 	title: '加载中...',
			// 	mask: true
			// });
			let list = [{}];
			for (let i = 0; i < 20; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
				list[i].id = i;
			}
			this.list = list;
			this.listCur = list[0];
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
				goMerc() {
					uni.navigateTo({
						url: '/pages/index/mch'
					});
				},
				goFriend() {
					uni.navigateTo({
						url: 'pages/invite/invite'
					});
				},
				goNewDetails(item) {
					uni.navigateTo({
						url: '/pages/news/details?id=' + item.id
					});
				},
				news() {
					uni.navigateTo({
						url: '/pages/news/new'
					});
				},
				getInptValue: function() {
		
					var _this = this;
					if (_this.taskNo.length >= 1) {
						_this.sosuo = "block";
					} else {
						_this.sosuo = "none";
		
					}
		
				},
				task(val) {
					uni.navigateTo({
						url: '/pages/task/task?rank=' + val
					});
				},
				live() {
					// uni.switchTab({
					// 	url: '/pages/live/live'
					// })
					uni.navigateTo({
						url: '/pages/index/qubo'
					});
				},
		        increas(){
					uni.navigateTo({
						url: '/pages/task/zan'
					});
				},
				invite() {
					uni.navigateTo({
						url: '/pages/invite/invite'
					});
				},
				getGenduo() {
					// uni.switchTab({
					// 	url: '/pages/live/live'
					// })
					uni.navigateTo({
						url: '/pages/index/more'
					});
				},
		
				getCall() {
					// wx.makePhoneCall({
					// 	phoneNumber: this.phone
					// });
					// uni.showModal({
					// 	title: '提示',
					// 	content: '客服系统正在更新',
					// 	confirmColor: '#5A83E9',
					// 	showCancel: false,
					// });
					uni.navigateTo({
						url: '/pages/index/service'
					})
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
								//console.log(_this.taskList);
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
		
		
				},
				onClickSwiper(id) {
		
					uni.navigateTo({
						url: '/pages/news/details?id=' + id
					})
		
				},
		tabSelect(index,id) {
			this.active=index;
			//console.log(id);
              
			// this.tabCur = e.currentTarget.dataset.id;
			// this.mainCur = e.currentTarget.dataset.id;
			// this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			// console.log(e);
			// var aId = e.target.dataset.id;
			// console.log(aId);
		}
		
			},
		
		};
</script>

<style>
	* {
		font-size: 14px;
		color: #333333;
		font-family: Arial, Helvetica, sans-serif;
	}
.active{
	color: #007AFF;
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
		background-color:#DD524D;

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
		right:44rpx;
		margin-left: 14rpx;
	}
.return_b{
	display: flex;
	white-space:nowrap;
	margin-top:-6rpx;
	margin-left:60rpx;
	color:#F8F8F8;
	font-size:30rpx;
}
	.cu-list-tab {
		width: 33%;
		float: left;
		text-align: center;
		height: 200rpx;
	}
.cu-list-tab-text{
	font-size: 24rpx;
	color: #999;
}
	.cu-list-img {
		width: 160rpx;
		height: 140rpx;	
		margin-bottom:20rpx ;
	}
	.end{
		text-align: center;
		padding: 40rpx;
		font-size: 24rpx;
		color: #999;
	}
</style>