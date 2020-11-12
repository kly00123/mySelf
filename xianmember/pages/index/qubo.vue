<template>
	<view class="content">
		<!-- 头部 -->
		<!-- <image src="../../static/head.png" style="width:100%;height:260rpx;"></image> -->
		<view class="passby"></view>
		<!-- 显示区域 -->
       <view class="list">
		   <view id="id-0" class="left">
			<view class="newtask">
				<view class="row_1">
					<view class="row_2" @click="user()">
						   <image src="../../static/user.png.png" style="width: 50rpx; height: 50rpx;padding-left:18rpx">
						<!-- -->
							<view class="newtask_mess_1" >了解会员</view>
					</view>
					<view class="row_3" @click="partner()">
						  <image src="../../static/partner.png.png" style="width: 50rpx; height: 50rpx;padding-left:66rpx">
						<!-- <image src="../../static/take.png" class="new-newbulletion"> -->
							<view class="newtask_mess_1">了解合伙人</view>
					</view>
				</view>
				<view class="barsty">
					<view class="newtask_bar_2"></view>
					<view class="newtask_bar_3"></view>
				</view>
				<view class="under">
					<view class="row_1"  @click="agency()">
						<view class="row_2" >
							 <image src="../../static/agency.png" style="width: 50rpx; height: 50rpx;padding-left:18rpx">
							<!-- <image src="../../static/service.png" class="new-newbulletion"></image> -->
								<view class="newtask_mess_1">了解代理</view>
						</view>
					</view>
				<view class="row_5">
					<view class="row_2" @click="policy()">
						 <image src="../../static/policy.png" style="width: 50rpx; height: 50rpx;padding-left:18rpx">
						<!-- <image src="../../static/propaganda.png" class="new-newbulletion"> -->
							<view class="newtask_mess_1">了解政策</view>
					</view>
				</view>
			</view>
			<view class="barsty">
				<view class="newtask_bar_2"></view>
				<view class="newtask_bar_3"></view>
			</view>
			<view class="under">
					<view class="row_1"  @click="dealers()">
						<view class="row_2" >
							 <image src="../../static/project.png" style="width: 50rpx; height: 50rpx;padding-left:18rpx">
							<!-- <image src="../../static/service.png" class="new-newbulletion"></image> -->
								<view class="newtask_mess_1">了解经销商</view>
						</view>
					</view>
				<view class="row_5">
					<view class="row_2" @click="vendor()">
						 <image src="../../static/vendor.png" style="width: 50rpx; height: 50rpx;padding-left:18rpx">
						<!-- <image src="../../static/propaganda.png" class="new-newbulletion"> -->
							<view class="newtask_mess_1">了解代理商</view>
					</view>
				</view>
			</view>
			</view>
<!-- <view class="newtask_bar"></view> -->
		   </view>
	   </view>
	</view>


</template>

<script>

export default {
	data() {
		return {
			tabCur: 0,
			sendType:0,
			toplist:[{
				name:'推荐用户',
				id:'yonghu',
			},{
				name:'推荐兼职',
				id:'jianzhi',
			}],
			navList: [
				{
					orderList: [{
						state: 0,
						text: '推荐用户',
						user:'了解会员',
						partner:'了解合伙人',
						agency:'了解代理',
						policy:'了解政策',
					}]
				},
				{
					orderList: [{
						state: 1,
						text: '推荐兼职',
						recommed:'兼职推荐',
						project:'项目推荐',
						vendor:'供应商推荐',
					}]
				}
			]
		};
	},

	onLoad(options) {
		// 页面显示是默认选中第一个
		this.tabCurrentIndex = 0;
	},
	methods: {
		changeTab(e) {
			this.tabCurrentIndex = e.target.current;
		},
		btnClick(index) {
			//console.log(index);
			if (this.sendType == index) {
				return;
			}
		
			this.pageIndex = 1;
		
			this.sendType = index;
		},
		left(){
        this.$refs.btn.style.backgroundColor="#ff0000";
		},
		right(){
			this.$refs.view.style.backgroundColor="#ff0000";
		},
		user() {
			uni.navigateTo({
				url: '/pages/part/user'
			});
		},
		partner() {
			uni.navigateTo({
				url: '/pages/part/partner'
			});
		},
		agency() {
			uni.navigateTo({
				url: '/pages/part/agency'
			});
		},
		policy() {
			uni.navigateTo({
				url: '/pages/part/policy'
			});
		},
		recommed() {
			uni.navigateTo({
				url: '/pages/part/recommed'
			});
		},
		project() {
			uni.navigateTo({
				url: '/pages/part/project'
			});
		},
		dealers(){
				uni.navigateTo({
					url: '/pages/part/dealers'
				});
		},
		vendor() {
			uni.navigateTo({
				url: '/pages/part/vendor'
			});
		},
		ontabchange(){
			 let index = e.target.current || e.detail.current;
		},
		//顶部tab点击
			tabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
				var aId = e.currentTarget.dataset.id;
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
			},
	},

};
</script>

<style>
	@font-face {
		font-family: newincon;
		src: url('~@/static/xinziti.otf')
	}
	.menuactive{
		color:#DD524D;
	}
	.top{
		display: flex;
		flex-direction: row;
		justify-content:space-between;
	}
	.left_top{
		display: flex;
		flex-direction: row;
		white-space:nowrap;
	}
	.sty{
		display: none;
	}
	.left{
		display: flex;
		flex-direction: column;
		margin-left:46rpx;
		align-content: center;
		padding:10px;
		flex-wrap:nowrap;
		margin:175rpx auto;
		margin-top:140rpx;
	}
	.passby{
		width:2rpx;
		height:80rpx;
		background-color:#C0C0C0;
		margin:0 auto;
		margin-top:-160rpx;
		margin-bottom: 100rpx;
	}
	.newtask {
		display: flex;
		width: 100%;
		height: 1020rpx;
		flex-direction: column;
		font-family: newincon;
		position: relative;
		margin-top:60rpx;
		}
	.row_1 {
			display: flex;
			width: 100%;
			height: 300rpx;
			            justify-content: center; /* 水平居中 */
			            align-items: center;     /* 垂直居中 */
		     text-align: center;
		}
		.row_5 {
				display: flex;
				width: 100%;
				height: 300rpx;
				  justify-content: center; /* 水平居中 */
				 align-items: center;     /* 垂直居中 */
			     text-align: center;
				 margin-left:-70rpx;
			}
	.under{
			display: flex;
			height: 300rpx;
			            justify-content: center; /* 水平居中 */
			            align-items: center;     /* 垂直居中 */
		     text-align: center;
			 margin:0 -98rpx;
			 margin-right:150rpx;
	}
		.row_2 {
			position: relative;
			flex-direction: column;
			            justify-content: center; /* 水平居中 */
			            align-items: center;     /* 垂直居中 */
			display: flex;
			width: 200rpx;
			height: 220rpx;
			left: 120rpx;
		}
	
		.row_3 {
			display: flex;
			flex-direction: column;
			position: relative;
			width: 200rpx;
			height: 220rpx;
			right: 120rpx;
			margin-top:116rpx;
			margin-left: 400rpx;
		}
	.row_4{
		display: flex; 
		justify-content: center;
		align-items: center;
	}

	.new-newbulletion {
		width: 200rpx;
		height: 200rpx;
		flex-direction: row;
		align-self: flex-end;
	
	}
	.newtask_mess {
		position: relative;
		opacity: 1;
		display: flex;
	}
	.newtask_bar_2 {
		width: 300rpx;
		height: 4rpx;
		background-color: #dddddd;
		opacity: 1;
	}
	.barsty{
		display: flex;
		flex-direction: row;
		 text-align: center;
		 margin:0 auto;
	}
	.newtask_bar_3 {
		width: 300rpx;
		height: 4rpx;
		background-color: #dddddd;
		opacity: 1;
	}
	.newtask_bar {
		width: 4rpx;
		height: 550rpx;
		background-color: #dddddd;
		margin: 0 auto;
		margin-top: -940rpx;
	}
	
	.newtask_mess_1 {
		white-space:nowrap;
		font-size: 32rpx;
		margin-left: 10rpx;
	}
	.new-newbulletionn {
		width: 200rpx;
		height: 60rpx;
		flex-direction: row;
		align-self: flex-end;
	
	}
	.passby_1{
		width:600rpx;
		height:2rpx;
		background-color:#C0C0C0;
		margin:0 auto;
		margin-top:8rpx;
		margin-bottom: 100rpx;
	}
	.passby_2{
		width:2rpx;
		height:420rpx;
		background-color:#C0C0C0;
		margin:0 auto;
		margin-top:-470rpx;
		margin-bottom: 100rpx;
	}
	.right{
		display: flex;
		flex-direction: column;
		align-content: center;
		padding:10px;
		flex-wrap:nowrap;
		margin-right:360rpx;
	}

	.leftmes{
		margin-bottom: 20px;
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
	.one_col {
		position: absolute;
				color:#AFAFAF;
	    height:200rpx;
	    width:90%;
		margin:20rpx auto;
		justify-content: space-around; /* 水平居中 */      
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		background-color: #ffffff;
		/* padding-top: 18rpx; */
		margin:-40rpx 24rpx 24rpx 24rpx;
			border-radius: 5px;
		box-shadow: 1px 1px 5px #CACACA;
	}
	.list{
		color:#AFAFAF;
		font-size:32rpx;
		height:1060rpx;
		width:90%;
		margin:20rpx auto;
		justify-content: space-around; /* 水平居中 */      
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		background-color: #ffffff;
		/* padding-top: 18rpx; */
			border-radius: 5px;
		box-shadow: 1px 1px 10px 1px #CACACA;
	}
	.one_col_title {
		flex: 1;
		color: #999999;
		margin-bottom: 20upx;
		font-size: 16px;
	}
		.color_333333 {
		color: #333333;
	}
	.nav_bottom_act {
		border-bottom: 6rpx solid #F04F43;
	}
	.nav_bottom {
		margin-top:60rpx;
		display: flex;
		justify-content: center;
		height: 1rpx;
		width: 48px;
		border-bottom: 6rpx solid #ffffff;
	}
</style>