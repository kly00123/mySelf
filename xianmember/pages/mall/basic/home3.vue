<template>
	<view>
		<view v-if="showHeader" class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<view v-if="showHeader" class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="addr"></view>
			<view class="input-box">
				
			</view>
			<view class="icon-btn">
				<view class="icon tongzhi" @tap="toMsg"></view>
				<view class="icon setting" @tap="toSetting"></view>
			</view>
		</view>
		<!-- 占位 -->
		<view v-if="showHeader" class="place"></view>
		<!-- 用户信息 -->
<!-- 		<view class="person">
			<view class="uni-person">
				<view class="uni-person-A">
					<image src="../../../static/header.png" v-if="info.avatar==null" class="header"></image>
					<image :src="imgSvr+info.avatar" v-else class="header"></image>
					<view class="number">
						<view>{{info.userPhone}}</view>
						<view style="font-size: 24rpx;">{{rankName}}-（{{levelName}}）</view>
						<view style="margin-top: 10px; border: 1px solid #FFFFFF; padding: 5px; border-radius: 5px;" @click="goCredit">信用分:{{info.credit}}</view>
					</view>
				</view>
				<image src="../../../static/edit.png" class="edit" @click="person()"></image>
			</view>
		</view> -->
		<view class="content" >
			<view class="newtask_tit">
				<!-- <view class="newtask_pic"></view> -->
				<!-- <view class="newtask_title">任务列表</view> -->
			</view>
			<!-- 明细 -->
			<!--  任务明细-->
						<view class="detailedes">
							<view class="uni-detailedes">
								<!-- 普通任务 -->
								<view class="uni-detailedes-a" >
									<view @click="details()">奖金详情</view>
									<view>{{money}}元</view>
								</view>
								<!-- 巨星任务 -->
								<view class="uni-detailedes-a" style="border-right: none;">
									<view @click="lines()">额度详情</view>		
													<view>{{moneyQuota}}元</view>
							</view>
						</view>
					</view>

			<!--  任务明细-->

		</view>
		<!-- VIP banner -->
		<view class="VIP">
			<view class="img">
				<image src="/static/img/VIP.png"></image>
			</view>
			<view class="title">开通VIP会员</view>
			<view class="tis">会员特权</view>
		</view>
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
					<view class="box"  @tap="toDeposit">
						<view class="num">{{user.integral}}</view>
						<view class="text">积分</view>
					</view>
					<view class="box" @tap="toDeposit">
						<view class="num">{{user.envelope}}</view>
						<view class="text">佣金</view>
					</view>
					<view class="box" @tap="toDeposit">
						<view class="num">{{user.balance}}</view>
						<view class="text">余额</view>
					</view>
				</view>
				<view class="right">
					<view class="box" @tap="toDeposit">
						<view class="img">
							<view class="icon chongzhi"></view>
						</view>
						<view class="text">充值</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 工具栏 -->
		<view class="toolbar">
			<view class="title">我的工具栏</view>
			<view class="list">
				<view class="box" v-for="(row,index) in mytoolbarList" :key="index" @tap="toPage(row.url)">
					<view class="img">
						<image :src="row.img"></image>
					</view>
					<view class="text">{{row.text}}</view>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place-bottom"></view>
	</view>
</template>
<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				isfirst:true,
				headerPosition:"fixed",
				timetext: '成都市',
				imgSvr: "",
				token: "",
				info: {},
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
				levelName: "普通用户",
				headerTop:null,
				statusTop:null,
				showHeader:true,
				//个人信息,
				user:{
					username:'游客1002',
					face:'/static/img/face.jpg',
					signature:'点击昵称跳转登录/注册页',
					integral:0,
					balance:0,
					envelope:0
				},
				// 订单类型
				orderList:[
					{text:'待付款',icon:"fukuan"},
					{text:'待发货',icon:"fahuo"},
					{text:'待收货',icon:"shouhuo"},
					{text:'待评价',icon:"pingjia"},
					{text:'退换货',icon:"tuihuo"}
				],
				// 工具栏列表
				mytoolbarList:[
					{url:'../user/keep/keep',text:'我的收藏',img:'/static/img/user/point.png'},
					{url:'../user/coupon/coupon',text:'优惠券',img:'/static/img/user/quan.png'}, 
					{url:'',text:'新客豪礼',img:'/static/img/user/renw.png'},
					{url:'',text:'领红包',img:'/static/img/user/momey.png'},
					
					{url:'../address/address',text:'收货地址',img:'/static/img/user/addr.png'},
					{url:'',text:'账户安全',img:'/static/img/user/security.png'},
					{url:'',text:'银行卡',img:'/static/img/user/bank.png'},
					{url:'',text:'抽奖',img:'/static/img/user/choujiang.png'},
					// {text:'客服',img:'/static/img/user/kefu.png'},
					// {text:'签到',img:'/static/img/user/mingxi.png'}
					
				]
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(function () {
		        uni.stopPullDownRefresh();
		    }, 1000);
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
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
		onReady(){
			//此处，演示,每次页面初次渲染都把登录状态重置
			uni.setStorage({
				key: 'UserInfo',
				data: false,
				success: function () {
				},
				fail:function(e){
				}
			});
		},
		onShow(){
			this.getInfo();
			this.getData();
			uni.getStorage({
				key: 'UserInfo',
				success: (res)=>{
					if(!res.data){
						if(this.isfirst){
							//this.toLogin();
						}
						return ;
					}
					this.user = res.data;
				},
				fail:(e)=>{
					//this.toLogin(); 
				}
			});
		},
		methods: {
			//消息列表
			toMsg(){
				uni.navigateTo({
					url:'../../msg/msg'
				})
			},
			toOrderList(index){
				uni.setStorageSync('tbIndex',index);
				uni.navigateTo({url:'../user/order_list/order_list?tbIndex='+index}) ;
			},
			toSetting(){
				uni.navigateTo({
					url:'../../user/setting/setting'
				})
			},
			toMyQR(){
				uni.navigateTo({
					url:'../../user/myQR/myQR'
				})
			},
			toLogin(){
				uni.showToast({title: '请登录',icon:"none"});
				uni.navigateTo({
					url:'../../login/login'
				})
				this.isfirst = false;
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
			isLogin(){
				//实际应用中,用户登录状态应该用token等方法去维持登录状态.
				const value = uni.getStorageSync('UserInfo');
				if (value) {
					return true;
				}
				return false
			},
			toDeposit(){
				uni.navigateTo({
					url:'../user/deposit/deposit'
				})
			},
			toPage(url){
				if(!url){
					uni.showToast({title: '技术开发中！',icon:"none"});return;
				}
				uni.navigateTo({
					url:url
				})
			}
		}
	} 
</script>
<style lang="scss">
	page{position: relative;background-color: #fff;}
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #f06c7a;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);//覆盖样式
		/*  #endif  */
		
	}
	.person {
		margin-top: 50rpx;
		width: 100%;
		height: 260rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		/* line-height: 380rpx; */
		text-align: center;
		align-items: center;
		/* justify-content: center; */
	}
	.uni-person {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex: 1;
		margin-left: 24rpx;
		align-items: center;
	
	}
	.number {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: 32rpx;
		font-size: 14px;
	}
	.edit {
	
		width: 176rpx;
		height: 69rpx;
	
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
	.newtask_tit {
		display: flex;
		margin-left: 18upx;
		margin-top: 20upx;
		opacity: 0.5;
		font-size: 24rpx;
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
	.header {
		width: 140rpx;
		height: 140rpx;
		border-radius: 100rpx;
		box-shadow: 2rpx 2rpx 10rpx #C8C7CC;
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
	.header{
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #f06c7a;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		.icon-btn{
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon{
				color: #fff;
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
	}
	.place{
		background-color: #f06c7a;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.place-bottom{
		height: 300upx;
	}
	.user{
		width: 92%;
		padding: 0 4%;
		display: flex;
		align-items: center;
		// position: relative;
		background-color: #f06c7a;
		padding-bottom: 120upx;
		.left{
			width: 20vw;
			height: 20vw;
			flex-shrink: 0;
			margin-right: 20upx;
			border: solid 1upx #fff;
			border-radius: 100%;
			image{
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}
			
		}
		.right{
			width: 100%;
			.username{
				font-size: 36upx;
				color: #fff;
			}
			.signature{
				color: #eee;
				font-size: 28upx;
			}
		}
		.erweima{
			flex-shrink: 0;
			width: 10vw;
			height: 10vw;
			margin-left: 5vw;
			border-radius: 100%;
		
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(to left, #fbbb37 0%,#fcf0d0 105%);
			.icon{
				color: #7b6335;
				font-size: 42upx;
			}
		}
	}
	.order{
		width: 84%;
		margin: 30upx 4% 30upx 4%;
		padding: 30upx 4% 20upx 4%;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		.list{
			display: flex;
			border-bottom: solid 1upx #17e6a1;
			padding-bottom: 10upx;
			.box{
				width: 20%;
				.img{
					width: 100%;
					display: flex;
					justify-content: center;
					.icon{
						font-size: 50upx;
						color: #464646;
					}
				}
				.text{
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 28upx;
					color: #3d3d3d;
				}
			}
		}
		.balance-info{
			display: flex;
			padding: 10upx 0;
			.left{
				width: 75%;
				display: flex;
				.box{
					width: 50%;
					font-size: 28upx;
					
					.num{
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						color: #f9a453;
					}
					.text{
						width: 100%;
						display: flex;
						justify-content: center;
						color: #3d3d3d;
						font-size: 28upx;
					}
				}
			}
			.right{
				border-left: solid 1upx #17e6a1;
				width: 25%;
				.box{
					
					.img{
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						.icon{
							font-size: 45upx;
							color: #e78901;
						}
					}
					.text{
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
	.VIP{
		width: 84%;
		margin: -65upx auto 20upx auto;
		padding: 30upx 4%;
		background: linear-gradient(to left, #dea96d 0%,#f6d59b 100%);
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.2);
		border-radius: 15upx;
		display: flex;
		align-items: center;
		.img{
			flex-shrink: 0;
			width: 60upx;
			height: 60upx;
			image{
				width: 60upx;
				height: 60upx;
			}
		}
		.title{
			width: 100%;
			color: #796335;
			font-size: 30upx;
		}
		.tis{
			width: 100%;
			display: flex;
			justify-content: flex-end;
			color: #fcf0d0;
			font-size: 26upx;
		}
	}
	.toolbar{
		width: 92%;
		margin: 0 4% 0 4%;
		padding: 0 0 20upx 0;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		.title{
			padding-top: 10upx;
			margin: 0 0 10upx 3%;
			font-size: 30upx;
			height: 80upx;
			display: flex;
			align-items: center;
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			.box{
				width: 25%;
				margin-bottom: 30upx;
				.img{
					width: 23vw;
					height: 10.5vw;
					display: flex;
					justify-content: center;
					
					image{
						width: 9vw;
						height: 9vw;
					}
				}
				.text{
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 26upx;
					color: #3d3d3d;
				}
			}
		}
	}
</style>
