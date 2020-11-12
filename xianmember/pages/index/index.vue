<template>
	<view class="page">
		<view class="swiper-item">
			<image src="../../static/top_1.png" class="uni-topp"></image>
		</view>
		<view class="content">
			<!-- 顶部轮播图 -->
			<view class="bgcolor">
				<view style="height:300rpx ;relative;z-index: 0;width:90%;margin:0 auto;border-radius:50rpx;hidden;box-shadow:1px 1px 5px rgb(130, 105, 105);">
					<swiper :autoplay="true" :interval="5000" :duration="1000" indicator-color="#FFFFFF" @change="change"
					 indicator-active-color="#FFFFFF" style="height:300rpx">
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/banner/1.png" style="border-radius: 50rpx;" class="uni-top"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/banner/2.png" style="border-radius: 50rpx;" @click="onClickSwiper(43)" class="uni-top"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/banner/3.png" style="border-radius:50rpx;" class="uni-top"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/banner/4.png" style="border-radius: 50rpx;" class="uni-top"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="../../static/banner/5.png" style="border-radius: 50rpx;" class="uni-top"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<!--中间  -->
				<view class="uni-content">
					<view class="uni-content_a">
						<view class="newbulletin" @click="goShop()">
							<image src="../../static/vip.png" style="width:100rpx;height:100rpx;" class="uni-newbulletion"></image>
							<view>会员</view>
						</view>
						<view class="newbulletin" @click="goStudy()">
							<image src="../../static/sxy.png" class="uni-newbulletion" style="width:100rpx;height:100rpx;"></image>
							<view>商学院</view>
						</view>
						<view class="newbulletin" @click="level() ">
							<image src="../../static/hz.png" class="uni-newbulletion" style="width:100rpx;height:100rpx;"></image>
							<view>合作</view>
						</view>
						<view class="newbulletin" @click="deposit()">
							<image src="../../static/cz.png" class="uni-newbulletion" style="width:100rpx;height:100rpx;"></image>
							<view>充值</view>
						</view>

						<view class="newbulletin" @click="balance()">
							<image src="../../static/tixian.png" class="uni-newbulletion" style="width:100rpx;height:100rpx;"></image>
							<view>提现</view>
						</view>

					</view>
				</view>
			</view>
			<!-- 任务发布 -->
			<view class="newtask">
				<view class="under">
					<view @click="increas(1)">
						<image src="../../static/jzzf.png" style="width:330rpx;height:190rpx;left:-6rpx;border-radius:50rpx"></image>
					</view>
					<view @click="promote()">
						<image src="../../static/tgxc.png" style="width:330rpx;height:190rpx;right:-6rpx;border-radius:50rpx"></image>
						<!-- <image src="../../static/propaganda.png" class="new-newbulletion"> -->
					</view>
				</view>
				<view class="under_2">
					<view @click="goZan()">
						<image src="../../static/lqrw.png" style="width:220rpx;height:200rpx;left:-6rpx;border-radius:50rpx"></image>
					</view>
					<view @click="goTradeByAccount()">
						<image src="../../static/jys.png" style="width:220rpx;height:200rpx;border-radius:50rpx"></image>
						<!-- <image src="../../static/propaganda.png" class="new-newbulletion"> -->
					</view>
					<view @click="goexchange()">
						<image src="../../static/dh_1.png" style="width:220rpx;height:200rpx;right:-6rpx;border-radius:50rpx"></image>
						<!-- <image src="../../static/propaganda.png" class="new-newbulletion"> -->
					</view>
				</view>
			</view>
			<!-- 	<view class="newtask_bar"></view> -->
			<!-- 			<view class="lingqu">
				<view class="passby_1"></view>
				<view class="newtask_tit">
					<view class="newtask_pic"></view>
					<view class="newtask_title">领取任务</view>
				</view>
				<view style="display: flex; flex-direction: row;">
					<view style="margin-left:144rpx;font-size:30rpx;color: peru;padding-top:20rpx">奖金任务</view>
					<view style="margin-left:238rpx;font-size:30rpx;color: peru;padding-top:20rpx">额度任务</view>
				</view>
				<view class="Task_details">
					<view class="row_4">
						<image src="../../static/thumbs.png" class="new-newbulletionn_1" @click="goZan()">
							<image src="../../static/inviroment.png" class="new-newbulletionn_2" @click="goEnterprise()">

					</view>
					<view class="row_4">
						<image src="../../static/share.png" class="new-newbulletionn_3" @click="invite()">
							<image src="../../static/ljgz.png" class="new-newbulletionn_4" @click="newss()">

					</view>
					<view class="row_4">
						<image src="../../static/become.png" class="new-newbulletionn_7" @click="part()">
							<image src="../../static/grjz.png" class="new-newbulletionn_8" style="border-radius: 50rpx;" @click="goFriend()">
					</view>
				</view>
			</view> -->

			<view class="tuijian">
				<!-- 	<view class="passby"></view> -->
				<view class="newtask_tit">
					<!-- <view class="newtask_pic"></view> -->
					<view class="newtask_title">推荐</view>
				</view>
				<view class="textBox">
					<view class="live">
						<image class="new-newbulletionn_5">
					</view>
					<transition name="slide">
						<p class="text" style="color: red;font-size: 12.5px;" :key="text.id">{{text.val}}</p>
					</transition>
				</view>
				<view class="row_5">
					<!-- @click="user(35)" -->
					<image src="../../static/laba.png" class="new-newbulletionn_5">
						<view class="newtask_title1">全新互联网众创平台震撼上线</view>
				</view>
				<view class="row_5">
					<!-- @click="down(18)" -->
					<image src="../../static/laba.png" class="new-newbulletionn_5">
						<view class="newtask_title1">恭喜商家入驻渠赞平台</view>
				</view>
				<view class="row_5">
					<!-- @click="down(18)" -->
					<image src="../../static/laba.png" class="new-newbulletionn_5">
						<view class="newtask_title1">渠赞与城市酷选达成战略合作</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Helper from '@/function.js';


	export default {
		name: 'scroll',
		data() {
			return {
				textArr: [
                    // '恭喜尾号5657成功兑换了Apple/苹果iPhone11Pro',
					 '恭喜尾号6657成功兑换了Apple/苹果16寸MackBook',
					 '恭喜尾号5987成功兑换了71.42余额',
					 '恭喜尾号3339成功兑换了250余额',
					 '恭喜尾号9663成功兑换了71.42余额',
					 '恭喜尾号3321成功兑换了Apple/苹果27寸IMac',
					 '恭喜尾号3677成功兑换了250余额',
					 '恭喜尾号7721成功兑换了250余额',
					 '恭喜尾号2325成功兑换了5.55余额',
					'恭喜尾号2325成功兑换了5.55余额',
					'恭喜尾号9865成功兑换了5.55余额',
					'恭喜尾号3231成功兑换了18.75余额',
					'恭喜尾号4876成功兑换了5.55余额',
					'恭喜尾号1245成功兑换了18.75余额',
					'恭喜尾号8743成功兑换了71.42余额',
					'恭喜尾号4465成功兑换了250余额',
					'恭喜尾号7778成功兑换了250余额',
					'恭喜尾号6543成功兑换了5.55余额',
					'恭喜尾号5543成功兑换了18.75余额',
					'恭喜尾号7456成功兑换了18.75余额',
					'恭喜尾号4642成功兑换了71.42余额',
					'恭喜尾号5732成功兑换了250余额',
					'恭喜尾号6832成功兑换了71.42余额',
					'恭喜尾号5478成功兑换了250余额',
					'恭喜尾号2853成功兑换了250余额',
					'恭喜尾号6832成功兑换了1000余额',
					'恭喜尾号6724成功兑换了18.75余额',
					'恭喜尾号3567成功兑换了71.42余额',
					'恭喜尾号7686成功兑换了250余额',
					'恭喜尾号1547成功兑换了250余额',
					'恭喜尾号7112成功兑换了5.55余额',
					'恭喜尾号6547成功兑换了1000余额',
					'恭喜尾号2267成功兑换了18.75余额',
					'恭喜尾号9547成功兑换了71.42余额',
					'恭喜尾号3258成功兑换了250余额',
					'恭喜尾号8954成功兑换了250余额',
					'恭喜尾号8876成功兑换了5.55余额',
					'恭喜尾号3359成功兑换了1000余额',
					'恭喜尾号6647成功兑换了18.75余额',
				],
				number: 0,
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
		computed: {
			text() {
				return {
					id: this.number,
					val: this.textArr[this.number]
				}
			}
		},
		mounted() {
			this.startMove()
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
			startMove() {
				// eslint-disable-next-line
				let timer = setTimeout(() => {
					if (this.number === this.textArr.length) {
						this.number = 0;
					} else {
						this.number += 1;
					}
					this.startMove();
				}, 2000); // 滚动不需要停顿则将2000改成动画持续时间
			},
			goZan() {
				uni.navigateTo({
					url: '/pages/task/recevie'
				});
			},
			goTradeByAccount() {
				uni.navigateTo({
					url: '/pages/Trade/TradeByAccount'
				});
			},
			goFriend() {
				uni.navigateTo({
					url: '/pages/business/business'
				});
			},
			goqubo() {
				uni.navigateTo({
					url: '/pages/index/qubo'
				});

			},
			goNewDetails(item) {
				uni.navigateTo({
					url: '/pages/news/details?id=' + item.id
				});
			},
			newss() {
				uni.navigateTo({
					url: '/pages/task/extension'
				});
			},
			increas(id) {
				uni.navigateTo({
					url: '/pages/my/release?id=' + id
				});
				// uni.navigateTo({
				// 	url: '/pages/index/zan'
				// });
			},
			user(id) {
				uni.navigateTo({
					url: '/pages/news/details?id=' + id
				});
			},
			down(id) {
				uni.navigateTo({
					url: '/pages/news/details?id=' + id
				});

			},
			veno() {
				uni.navigateTo({
					url: '/pages/part/check'
				})
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
			business() {
				uni.navigateTo({
					url: '/pages/index/business'
				});
			},
			goexchange() {
				uni.navigateTo({
					url: '/pages/trading/trading'
				});
			},
			goods() {
				uni.navigateTo({
					url: '/pages/live/goods'
				});
			},
			newfile() {
				uni.navigateTo({
					url: '/pages/index/newfile'
				});
			},
			bring() {
				uni.navigateTo({
					url: '/pages/index/bring'
				});
			},
			part() {
				uni.navigateTo({
					url: '/pages/live/live',
				});
			},
			level() {
				uni.navigateTo({
					url: '/pages/invite/compare',
				});
			},
			deposit() {
				uni.navigateTo({
					url: '/pages/trading/deposit/deposit'
				})
			},
			balance() {
				uni.navigateTo({
					url: '/pages/my/balance'
				})
			},
			zhaoshang() {
				uni.navigateTo({
					url: '/pages/index/zhaoshang'
				});
			},
			goStudy() {
				uni.navigateTo({
					url: '/pages/part/study'
				});
			},
			goShop() {
				uni.navigateTo({
					url: '/pages/my/become'
				});
			},
			invite() {
				uni.navigateTo({
					url: '/pages/invite/invite'
				});
			},
			news() {
				uni.navigateTo({
					url: '/pages/news/new'
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
			zhibo() {
				uni.showModal({
					content: "技术开发中...",
					showCancel: false
				})
			},
			promote() {
				uni.navigateTo({
					url: '/pages/mytask/promote'
				});
			},
			myBank() {
				uni.navigateTo({
					url: '/pages/my/bank'
				})
			},
			qubo() {
				uni.showModal({
					content: "技术开发中...",
					showCancel: false
				})
			},
			goEnterprise() {
				// uni.navigateTo({
				// 	url: '/pages/my/release?id=1'
				// });
				uni.navigateTo({
					url: '/pages/task/enterprise'
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
							console.log("111" + res.data);
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

				// uni.navigateTo({
				// 	url: '/pages/news/details?id=' + id
				// })

			}



		},

	};
</script>

<style>
	page {
		background-color: #ededed;
	}

	@font-face {
		font-family: newincon;
		src: url('~@/static/xinziti.otf')
	}

	.content {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		margin: -280rpx 1px;
		font-family: newincon;
	}

	.newtask {
		display: flex;
		background-color: #ededed;
		width: 100%;
		flex-direction: column;
		font-family: newincon;
		margin-top: -20rpx;

	}

	.row_1 {
		display: flex;
		width: 100%;
		height: 300rpx;
		justify-content: space-between;
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
		text-align: center;
	}

	.under {
		display: flex;
		height: 300rpx;
		justify-content: center;
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
		text-align: center;
	}

	.under_2 {
		display: flex;
		height: 300rpx;
		justify-content: center;
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
		text-align: center;
		margin-top: -80rpx;
	}

	.row_2 {
		position: relative;
		flex-direction: column;
		justify-content: center;
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
		display: flex;
		width: 200rpx;
		height: 220rpx;
		left: 138rpx;
	}

	.row_3 {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 200rpx;
		height: 220rpx;
		right: 120rpx;
		margin-left: 400rpx;
	}

	.row_4 {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.row_5 {
		display: flex;
		height: 60rpx;
		text-align: left;
		vertical-align: bottom;
	}

	.tuijian {
		width: 90%;
		margin: 0 auto;
		margin-top: 20rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: -22rpx;
		/* margin-left: 24rpx;
			margin-right: 24rpx; */
		padding: 20rpx;
		box-shadow: 1px 1px 5px #C0C0C0;
		margin-bottom: 40rpx;
	}

	.newtask_top {
		position: relative;
		opacity: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 40rpx;
		margin-top: 30rpx;
	}

	.newtask_title {
		font-size: 28rpx;
		letter-spacing: 4rpx;
		font-family: newincon;
		margin-top: -22rpx;
	}

	.newtask_title1 {
		font-size: 26rpx;
		letter-spacing: 4rpx;
		font-family: newincon;
		padding-left: 20rpx;
		margin-top: 20rpx;
	}


	.passby {
		width: 100%;
		height: 2rpx;
		background-color: #dddddd;
	}

	.passby_1 {
		width: 100%;
		height: 25rpx;
		background-color: #dddddd;
		margin-top: -200rpx;
	}

	.newtask_mess_one {
		margin-left: 100rpx;
		margin-top: -620rpx;
	}

	.new-newbulletion {
		width: 144rpx;
		height: 200rpx;
		flex-direction: row;
		align-self: flex-end;
		margin: 0 auto;

	}

	.new-newbulletionn {
		width: 200rpx;
		height: 60rpx;
		flex-direction: row;
		align-self: flex-end;

	}

	<style scoped>h2 {
		padding: 20px 0
	}

	.textBox {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 40px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
	}

	.text {
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		top: 36rpx;
		margin-left: 70rpx;
		width: 100%;
		position: absolute;
		bottom: 0;
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: all 1s linear;
	}

	.slide-enter {
		transform: translateY(20px) scale(1);
		opacity: 1;
	}

	.slide-leave-to {
		transform: translateY(-20px) scale(0.8);
		opacity: 0;
	}

	.new-newbulletionn_1 {
		width: 256rpx;
		height: 60rpx;
		flex-direction: row;
		align-self: flex-end;
		left: -50rpx;
		top: 30rpx;
	}

	.new-newbulletionn_9 {
		width: 50rpx;
		height: 50rpx;
		flex-direction: row;
		align-self: flex-end;
		top: 40rpx;
		left: 66rpx;
	}

	.new-newbulletionn_5 {
		width: 50rpx;
		height: 38rpx;
		flex-direction: row;
		align-self: flex-end;
	}

	@keyframes scaleDraw {

		/*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
		0% {
			transform: scale(1);
			/*开始为原始大小*/
		}

		25% {
			transform: scale(1.2);
			/*放大1.1倍*/
		}

		50% {
			transform: scale(1);
		}

		75% {
			transform: scale(1.2);
		}
	}

	.live {
		margin-top: 34rpx;
		margin-left: 6rpx;
		background: url("../../static/lb.png");
		background-size: 50rpx 38rpx;
		background-repeat: no-repeat;
		-webkit-animation-name: scaleDraw;
		/*关键帧名称*/
		-webkit-animation-timing-function: ease-in-out;
		/*动画的速度曲线*/
		-webkit-animation-iteration-count: infinite;
		/*动画播放的次数*/
		-webkit-animation-duration: 3s;
		/*动画所花费的时间*/
	}

	.new-newbulletionn_2 {
		width: 256rpx;
		height: 60rpx;
		flex-direction: row;
		align-self: flex-end;
		right: -50rpx;
		top: 30rpx;
	}

	.new-newbulletionn_3 {
		width: 256rpx;
		height: 60rpx;
		flex-direction: row;
		top: 80rpx;
		left: -50rpx;
		align-self: flex-end;
	}

	.new-newbulletionn_4 {
		width: 256rpx;
		height: 60rpx;
		top: 80rpx;
		right: -50rpx;
		flex-direction: row;
		align-self: flex-end;
	}

	.new-newbulletionn_7 {
		width: 256rpx;
		height: 60rpx;
		flex-direction: row;
		top: 130rpx;
		left: -50rpx;
		align-self: flex-end;
	}

	.new-newbulletionn_8 {
		width: 256rpx;
		height: 60rpx;
		top: 130rpx;
		right: -50rpx;
		flex-direction: row;
		align-self: flex-end;
	}

	.newtask_mess {
		position: relative;
		opacity: 1;
		display: flex;
	}

	.newtask_mess_1 {
		font-size: 32rpx;
		margin-left: 10rpx;
	}

	.barsty {
		display: flex;
		flex-direction: row;
		text-align: center;
		margin: 0 auto;
	}

	.newtask_message {
		font-size: 18rpx;
		margin-left: 10rpx;
	}

	.newtask_bar {
		width: 4rpx;
		height: 550rpx;
		background-color: #dddddd;
		margin: 0 auto;
		margin-top: -700rpx;
	}

	.newtask_bar_2 {
		width: 300rpx;
		height: 4rpx;
		background-color: #dddddd;
		opacity: 1;
	}

	.newtask_bar_3 {
		width: 300rpx;
		height: 4rpx;
		background-color: #dddddd;
		opacity: 1;
	}

	.newtask_bar_4 {
		width: 300rpx;
		height: 6rpx;
		background-color: #dddddd;
		opacity: 0.3;

	}

	.newtask_bar_5 {
		width: 300rpx;
		height: 6rpx;
		background-color: #dddddd;
		opacity: 0.3;

	}


	.card {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		min-height: 70rpx;
		justify-content: space-between;
		align-items: center;

	}

	.card-link {
		display: flex;
		color: #FFFFFF;
		font-weight: bold;
	}

	.newtask_tit {
		display: flex;
		border-bottom: solid 1px #ededed;
	}

	.newtask_pic {
		width: 6upx;
		height: 26upx;
		margin-top: 6upx;
		background-color: #333333;
	}

	.card-link-search {

		display: flex;
		flex-direction: row;
		align-items: center;
		height: 48upx;
		font-size: 40upx;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		border: 2rpx solid#F0F0F0;
		border-radius: 50px;
		background-color: #FFFFFF;
		width: 100%;
	}

	.return_c {
		width: 60rpx;
		height: 60rpx;
		margin-right: 14rpx;
		margin-left: 14rpx;
	}

	.uni-topp {
		height: 300rpx;
		width: 102%;
		margin-left: -8rpx;
	}

	.uni-top {
		width: 100%;
		height: 300rpx;
	}


	.lingqu {
		margin-bottom: 110rpx;
	}

	.tuijian {
		margin-bottom: 100rpx;
	}

	.uni-content {
		width: 95%;
		/* height: 276rpx; */
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		background: #ededed;
		position: relative;
		margin-top: 20rpx;
		margin-left: 14rpx;
	}

	.uni-content_a {
		position: relative;

		/* height: 228rpx; */
		background: #ededed;

		opacity: 1;

		/* margin-top: -54rpx; */
		display: flex;
		flex-direction: row;
		justify-content: center;
		justify-content: space-around;
		align-items: center;
	}

	.newbulletin {

		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 30rpx;
		font-weight: 400;
		/* margin-top: 12rpx; */
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.uni-newbulletion {
		width: 90rpx;
		height: 90rpx;
		border-radius: 50rpx;

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
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.bgcolor {
		background-color: #ededed;
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
