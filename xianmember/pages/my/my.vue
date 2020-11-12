<template>
	<view class="page">
		<!-- <image src="../../static/top-index.png" style="width: 100%;height: 496upx;position: absolute;z-index: 0;"></image> -->
		<!-- 顶部图片 固定 -->
		<!-- <view style="display: flex; flex-direction: column; position: fixed; left: 0; top: 0; right: 0;width: 100%;">
			<image class="mytop"></image>
			<view class="my">
				<image src="../../static/shez.png" style="width: 48rpx;height: 48rpx;margin-right: 24rpx; " @click="shez()"></image>
				<view class="myfont">我的</view>
			</view>
		</view> -->

		<!-- 头像 -->
		<!--地区-->

		<!--地区-->
		<view class="person">
			<view class="uni-person">
				<view class="uni-person-A">
					<image src="../../static/header.png" v-if="info.avatar==null" class="header"></image>
					<image :src="imgSvr+info.avatar" v-else class="header"></image>
					<view class="number">
						<view style="font-size: 24rpx;">{{rankName}}<span :class="(memberType=='普通用户')?'slogan_dis':''">--{{memberType}}</span></view>
						<view>{{info.userPhone}}</view>
						<view style="margin-top: 5px; border: 1px solid #FFFFFF; padding: 5px; border-radius: 5px;" @click="goCredit">信用分:{{info.credit}}</view>
					</view>
				</view>
				<view style="display: flex; flex-direction: column;">
					<image src="../../static/edit.png" class="edit" @click="person()"></image>
					<!-- <image src="../../static/qiandao.png" class="edit" :value="value" @click="sign"></image> -->
				</view>
			</view>
		</view>

		<!--  任务明细-->
		<view class="VIP" @click="goShop()">
			<view class="img">
			</view>
			<view class="title" v-if="info.rank==0">开通VIP会员</view>
			<view class="tis" v-if="info.rank==0">会员特权</view>
			<view class="title"  style="color:gray" v-if="info.rank>0">会员到期时间</view>
			<view class="title" v-if="info.rank>0">{{vipEndtime| formatDate}}</view>
		</view>
		<!--  任务明细-->
		<!-- 订单-余额 -->
		<view class="order">
			<!-- 订单类型 -->
			<view class="list">
				<view class="box" v-for="(row,index) in orderList" :key="index" @tap="toOrderList(index)">
					<view class="img">
						<view class="icon" :class="row.icon"></view>
					</view>
					<view class="text">{{row.text}}</view>
				</view>
			</view>
			<!-- 余额 -->
			<view class="balance-info">
				<view class="left">
					<view class="box" @click="goQudou">
						<view class="num">{{money}}</view>
						<view class="text">渠豆</view>
					</view>
					<view class="box" @click="goMoney">
						<view class="num">{{moneyQuota}}</view>
						<view class="text">余额</view>
					</view>
				</view>
				<view class="right">
					<view class="box" @click="deposit()">
						<view class="img">
							<view style="margin:-10rpx;" class="icon chongzhi"></view>
						</view>
						<view class="text">充值</view>
					</view>
					<view class="box" @tap="balance()">
						<view class="img">
							<view style="margin:-10rpx;" class="icon chongzhi"></view>
						</view>
						<view class="text">提现</view>
					</view>
				</view>
			</view>
		</view>
		<view class="toolbar">
			<view class="title">我的工具栏</view>
			<view class="list">
				<view class="box" v-for="(row,index) in mytoolbarList" :key="index" @tap="toPage(row.url)">
					<view class="img">
						<image :src="row.img"></image>
					</view>
					<view v-if="6==index" @click="goExitApp"></view>
					<view class="text">{{row.text}}</view>
				</view>
			</view>
		</view>
		<!-- 导航明细 -->
	</view>
</template>
<script>
	import Helper from '@/function.js';
	import regionPicker from "@/components/region-picker/region-picker.vue"
	export default {
		data() {
			return {
				isfirst: true,
				headerPosition: "fixed",
				timetext: '成都市',
				imgSvr: "",
				token: "",
				teamCount: "",
				dataModel: {
					"taskMoney": 0.00,
					"taskProfit": 0.00,
					"taskPackageProfit": 0.00,
					"taskSuperCount": 0,
					"taskCount": 0,
					"useTaskSuperCount": 0,
					"useTaskCount": 0,
					"money": 0.00,
					"todayIncome": 0.0
				},
				rankName: "普通会员",
				memberType: "普通用户",
				headerTop: null,
				statusTop: null,
				showHeader: true,
				timetext: '成都市',
				imgSvr: "",
				token: "",
				vipEndtime:'',
				value: true,
				info: {},
				money: 100,
				teamCount: "",
				orderList: [{
						text: '待发货',
						icon: "fahuo"
					},
					{
						text: '待收货',
						icon: "shouhuo"
					},
					{
						text: '已收货',
						icon: "tuihuo"
					}
				],
				dataModel: {
					"taskMoney": 0.00,
					"taskProfit": 0.00,
					"taskPackageProfit": 0.00,
					"taskSuperCount": 0,
					"taskCount": 0,
					"useTaskSuperCount": 0,
					"useTaskCount": 0,
					"money": 0.00,
					"todayIncome": 0.0
				},
				rankName: "普通会员",
				memberType: "普通用户",
				mytoolbarList: [
					// {url:'/pages/my/balance',text:'账户余额',img:'/static/img/user/zhye.png'},
					{
						url: '/pages/my/bank',
						text: '提现账户',
						img: '/static/img/user/txzh.png'
					},
					{
						url: '/pages/invite/invite',
						text: '我要推广',
						img: '/static/img/user/yqhy.png'
					},
					{
						url: '/pages/my/team',
						text: '我的团队',
						img: '/static/img/user/wdtd.png'
					},
					{
						url: '/pages/news/news',
						text: '新闻公告',
						img: '/static/img/user/xwgg.png'
					},
					{
						url: '/pages/index/online',
						text: '联系客服',
						img: '/static/img/user/lxkf.png'
					},
					{
						url: '/pages/my/set',
						text: '系统设置',
						img: '/static/img/user/xtsz.png'
					},
					{
						url: '/pages/part/project',
						text: '成为商家',
						img: '/static/img/user/zhye.png'
					},
					{
						text: '退出登陆',
						img: '/static/img/user/fbrw.png'
					}
					// {text:'客服',img:'/static/img/user/kefu.png'},
					// {text:'签到',img:'/static/img/user/mingxi.png'}

				]
			}
		},
		components: {
			regionPicker
		},
		onLoad: function() {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			//this.getTeamCount();
		},
		onShow: function() {
			this.getInfo();
			this.getData();
			uni.getStorage({
				key: 'UserInfo',
				success: (res) => {
					if (!res.data) {
						if (this.isfirst) {
							//this.toLogin();
						}
						return;
					}
					this.user = res.data;
				},
				fail: (e) => {
					//this.toLogin(); 
				}
			});

		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
			this.headerTop = e.scrollTop >= 0 ? null : 0;
			this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
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
		mounted() {
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
		},
		methods: {
			goCredit() {
				uni.navigateTo({
					url: "/pages/my/credit"
				})
			},
			details() {
				console.log("11111111111");
				uni.navigateTo({
					url: '/pages/my/capital'
				})
			},
			balance() {
				console.log("11111111111");
				uni.navigateTo({
					url: '/pages/my/balance'
				})
			},
			region_change: function(e) {
				console.log(e)
				this.timetext = e.detail.value;
			},
			toPage(url) {
				if (!url) {
					uni.showModal({
						title: "信息提示",
						content: "是否确认退出程序",
						success: function(res) {
							if (res.confirm) {
								uni.removeStorageSync("token");
								uni.reLaunch({
									url: "/pages/sign/sign"
								})

							}
						}
					})
				}
				uni.navigateTo({
					url: url
				})
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
			news() {
				uni.navigateTo({
					url: '/pages/news/news'
				});
			},
			exchange() {
				uni.navigateTo({
					url: '/pages/my/exchange'
				});
			},
			getTeamCount() {
				var _this = this;

				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetTeamCount',
					data: "",
					method: 'GET',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);

						if (Helper.CheckData(res)) {
							_this.teamCount = (res.data.data.total - 1) + "人";
						} else {

						}
					},
					fail: function() {
						//uni.hideLoading();
					},
					complete: function() {
						//uni.hideLoading();
					}


				})
			},
			initRankName() {
				switch (this.info.rank) {
					case 0:
						this.rankName = "普通用户"
						break;
					case 1:
						this.rankName = "黄金会员"
						break;
					case 2:
						this.rankName = "铂金会员"
						break;
					case 3:
						this.rankName = "钻石会员"
						break;
				}

				switch (this.info.memberType) {
					case 0:
						this.memberType = "普通用户"
						break;
					case 1:
						this.memberType = "经销商"
						break;
					case 2:
						this.memberType = "代理商"
						break;
					case 3:
						this.memberType = "合伙人"
						break;
				}
			},
			getInfo() {
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetInfo',
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);

						if (Helper.CheckData(res)) {
							_this.info = res.data.data;
							_this.initRankName()
						} else {

						}
					},
					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
						uni.hideLoading();
					}


				})
			},
			getData() {
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetTodayData',
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);

						if (Helper.CheckData(res)) {
							_this.dataModel = res.data.data;
							_this.moneyQuota = res.data.data.moneyQuota;
							_this.money = res.data.data.money;
							_this.vipEndtime=res.data.data.vipEndtime;
						} else {

						}
					},
					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
						uni.hideLoading();
					}


				})
			},
			shez() {
				uni.navigateTo({
					url: '/pages/my/set'
				})

			},
			server() {
				console.log("server!!!");
			},
			sign(e) {
				if (this.value = true) {
					this.value = false;
					this.check();
				}
			},
			check() {
				uni.showModal({
					title: '签到成功',
					content: '恭喜您获得渠豆一枚！',
				})

			},
			team() {
				uni.navigateTo({
					url: '/pages/my/team'
				})

			},
			release() {
				uni.navigateTo({
					url: '/pages/my/release'
				})

			},
			my() {
				uni.navigateTo({
					url: '/pages/mytask/mytask'
				})
			},
			person() {
				uni.navigateTo({
					url: '/pages/my/personal'
				})

			},
			lines() {
				console.log('yu e');
				uni.navigateTo({
					url: '/pages/my/capital_lines'
				})
			},
			taskmanmgent() {
				uni.navigateTo({
					url: '/pages/my/taskmanmgent'
				})

			},
			invite() {
				uni.navigateTo({
					url: '/pages/invite/invite'
				})

			},
			myBank() {
				uni.navigateTo({
					url: '/pages/my/bank'
				})
			},
			deposit() {
				uni.navigateTo({
					url: '/pages/trading/deposit/deposit'
				})
			},
			goMoney() {
				uni.navigateTo({
					url: '/pages/my/money'
				})
			},
			goQudou() {
				uni.navigateTo({
					url: '/pages/my/qudou'
				})
			},
			goShop() {
				uni.navigateTo({
					url: '/pages/my/become'
				});
			},
			toOrderList(index) {
				uni.setStorageSync('tbIndex', index);
				uni.navigateTo({
					url: '../my/exchange?tbIndex=' + index
				});
			},
			withdrawals() {
				uni.navigateTo({
					url: '/pages/my/Withdrawals'
				})
			}
		}

	}
</script>
<style lang="scss">
	page {
		background: #ffffff;
		background-repeat: no-repeat;
		background-image: url(../../static/top_2.png);
		width: 100%;
	}

	.mytop {

		width: 100%;
		height: 128rpx;
		background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%);
		position: absolute;
	}

	.myfont {
		margin-right: 268rpx;

		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.my {

		position: relative;
		display: flex;
		flex-direction: row-reverse;
		line-height: 128rpx;
		text-align: center;
		align-items: center;
		padding-top: 24rpx;
	}

	.content {
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 20rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		padding: 20rpx;
		box-shadow: 1px 1px 5px #C0C0C0;

	}

	.order {
		width: 84%;
		margin: 30upx 4% 30upx 4%;
		padding: 30upx 4% 20upx 4%;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0, 0, 0, 0.1);
		border-radius: 15upx;

		.list {
			justify-content: space-around;
			display: flex;
			border-bottom: solid 1upx #17e6a1;
			padding-bottom: 10upx;

			.box {
				width: 20%;

				.img {
					width: 100%;
					justify-content: center;
					display: flex;

					.icon {
						font-size: 50upx;
						color: #464646;
					}
				}

				.text {
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 28upx;
					color: #3d3d3d;
				}
			}
		}

		.balance-info {
			display: flex;
			padding: 10upx 0;

			.left {
				width: 50%;
				display: flex;

				.box {
					width: 50%;
					font-size: 28upx;

					.num {
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						color: #ff0000;
					}

					.text {
						width: 100%;
						display: flex;
						justify-content: center;
						color: #3d3d3d;
						font-size: 28upx;
					}
				}
			}

			.right {
				border-left: solid 1upx #17e6a1;
				width: 50%;
				display: flex;

				.box {
					width: 50%;
					font-size: 28upx;

					.img {
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;

						.icon {
							font-size: 45upx;
							color: #e78901;
						}
					}

					.text {
						width: 100%;
						display: flex;
						justify-content: center;
						font-size: 28upx;
						color: #3d3d3d;
					}
				}
			}
		}
	}

	.toolbar {
		width: 92%;
		margin: 25px 4% 0 4%;
		padding: 0 0 20upx 0;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0, 0, 0, 0.1);
		border-radius: 15upx;

		.title {
			padding-top: 10upx;
			margin: 0 0 10upx 3%;
			font-size: 30upx;
			height: 80upx;
			display: flex;
			align-items: center;
		}

		.list {
			display: flex;
			flex-wrap: wrap;

			.box {
				width: 25%;
				margin-bottom: 30upx;

				.img {
					width: 23vw;
					height: 10.5vw;
					display: flex;
					justify-content: center;

					image {
						width: 9vw;
						height: 9vw;
					}
				}

				.text {
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 26upx;
					color: #3d3d3d;
				}
			}
		}
	}

	.VIP {
		width: 90%;
		margin: -65upx auto 20upx auto;
		padding: 30upx 4%;
		background: linear-gradient(to left, #dea96d 0%, #f6d59b 100%);
		box-shadow: 0upx 0upx 25upx rgba(0, 0, 0, 0.2);
		border-radius: 15upx;
		display: flex;
		align-items: center;
	}

	.img {
		flex-shrink: 0;
		width: 60upx;
		height: 60upx;
	}

	.image {
		width: 60upx;
		height: 60upx;
	}

	.title {
		width: 100%;
		color: #796335;
		font-size: 30upx;
	}

	.tis {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		color: #fcf0d0;
		font-size: 26upx;
	}

	.top_title {
		font-size: 36rpx;
		color: #FFFFFF;
		text-align: center;
	}

	.area {
		font-size: 30rpx;
		color: #FAFAFA;
		float: right;
	}

	.area_pic {
		height: 24rpx;
		width: 24rpx;
		padding-top: 14rpx;
	}

	.area_pic::after {
		height: 16rpx;
		width: 16rpx;
		-webkit-transform: rotate(90deg);
	}

	.person {
		margin-top: 50rpx;
		width: 100%;
		height: 290rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		/* line-height: 380rpx; */
		text-align: center;
		align-items: center;
		/* justify-content: center; */
	}

	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #f06c7a;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */

	}

	.header {
		width: 140rpx;
		height: 140rpx;
		border-radius: 100rpx;
		box-shadow: 2rpx 2rpx 10rpx #C8C7CC;
	}

	.uni-person {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex: 1;
		margin-left: 24rpx;
		align-items: center;
		margin-top: -110rpx;
	}

	.header {
		width: 140rpx;
		height: 140rpx;
		border-radius: 100rpx;
		box-shadow: 2rpx 2rpx 10rpx #C8C7CC;
	}

	.edit {
		width: 176rpx;
		height: 69rpx;
	}

	.slogan_dis {
		display: none;
	}

	.uni-person-A {
		display: flex;
		flex-direction: row;
		flex: 1;
		align-items: center;
		font-size: 40rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.number {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: 32rpx;
		font-size: 12px;
	}

	.newtask_tit {
		display: flex;
		margin-left: 18upx;
		margin-top: 20upx;
		opacity: 0.5;
		font-size: 24rpx;
	}

	.newtask_pic {
		width: 4upx;
		height: 26upx;
		margin-top: 6upx;
		background-color: #333333;
	}

	.newtask_tit {
		display: flex;
		margin-left: 40upx;
		margin-top: 20upx;
	}

	.detailed {
		height: 150rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-bottom: 0.5px solid #EBEBEB;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.uni-detailed {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		margin-left: 20rpx;
		margin-right: 20rpx;
		color: rgba(255, 89, 89, 1);
		opacity: 1;
	}

	.detailedes {
		height: 150rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;
		margin-right: 24rpx;
		margin-left: 24rpx;
	}

	.uni-detailedes {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-direction: row;
		justify-content: center;
	}

	.uni-detailedes-a {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* margin-left: 120rpx; */
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		border-right: 1rpx solid #EBEBEB;
		width: 49.5%;

	}

	.row {
		height: 564rpx;
		background: #FFFFFF;
		margin-left: 24rpx;
		margin-right: 24rpx;
		margin-top: 20rpx;
	}

	.uni-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		justify-content: space-between;
		flex: 1;
		height: 94rpx;
		margin-left: 22rpx;
		border-bottom: 1upx solid #EBEBEB;

	}

	.money {
		width: 38rpx;
		height: 38rpx;
	}

	.uni-row-a {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}
</style>
