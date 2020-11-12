<template>
	<view class="page">
		<!-- <view class="title" @click="bank()">
			<image src="../../static/leftjt.png" class="left"></image>
			<view style="margin-left: 16rpx;">我的套餐</view>
		</view> -->
		<!-- 选择 -->
		<!-- <view class="one_box">
			<view class="one_col" @click="btnClick(-1)">
				<view :class="sendType === -1 ? 'one_col_title color_333333' : 'one_col_title'">全部</view>
				<view :class="sendType === -1 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>

			<view class="one_col" @click="btnClick(1)">
				<view :class="sendType === 1 ? 'one_col_title color_333333' : 'one_col_title'">待使用</view>
				<view :class="sendType === 1 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>
			<view class="one_col" @click="btnClick(2)">
				<view :class="sendType ===2 ? 'one_col_title color_333333' : 'one_col_title'">已使用</view>
				<view :class="sendType === 2 ? 'nav_bottom nav_bottom_act' : 'nav_bottom'"></view>
			</view>


		</view>
		 --><!-- 详情 -->
		<!-- <view class="textoder">
			<image src="../../static/no.png" style="width: 34rpx;height: 34rpx;"></image>
			<view style="margin-left: 18rpx;">已购买的套餐请在<text style="color: #FF9000;">72小时内</text>使用发布任务！</view>
		</view> -->
		<!-- 任务 -->
		
		<!-- 重要 -->
	<!-- 	<view class="textoder-a" v-for="item in list">
            <view class="textoder-b">
            	<view style="margin-left: 20rpx;" v-if="item.taskRank==0">普通任务</view>
				<view style="margin-left: 20rpx;"  v-else>巨星任务</view>				
            </view>
			<view class="textoder-c">
				<view>任务数量：{{item.quota}}</view>				
						
				<view class="noways">
					<view class="noway">
						<view> 已接取：{{item.useQuota}}</view>	
						<view>悬赏金额：{{item.price}}元</view>
						
					</view>
					
					
					<view class="btn"  @click="goTaskDetails(item)">
						查看
					</view>
					
				</view>
				<view style="margin-top: 8rpx;color: #999999;">发布时间：{{item.createTime}}</view>

			</view>
		</view>
		 --><!-- <view class="textoder-a">
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
		
		<view class="nodata" >
			<view>
				<!-- <image src="../../static/noways.png" style="width: 250upx;height: 164upx;"></image> -->
			</view>
			火爆招商中 028-61890259
		</view>
		
	</view>

</template>

<script>
	import Helper from '@/function.js';
	export default {

		data() {

			return {
				sendType: -1,
				token:"",
				list:[],
				pageIndex:1,
				pageSize:15,
			}
		},
		onLoad:function(){
			this.token = uni.getStorageSync('token');
			
		},
		onShow:function(){
			this.pageIndex= 1;
			this.list=[]
			this.getList();
		},

		methods: {
			btnClick: function(index) {
				console.log(index);
				if (this.sendType == index) {
					return;
				}

				this.sendType = index;
				this.pageIndex = 1;
				this.list=[];
				this.getList();
			},
			goCreate(item){
				// console.log(item);
				uni.navigateTo({
					url:"/pages/mytask/create?item="+JSON.stringify(item)
				})
			},
			goTaskDetails(item){
				
				uni.navigateTo({
					url:"/pages/my/taskDetails?item="+JSON.stringify(item)
				})
			}
			,
			getList() {
				var _this = this;
				
				if (_this.sendType == -1)
				{
					var state = ''
				}
				else
				{
					var state = _this.sendType
				}
				
				var params = {
					pageIndex:_this.pageIndex,
					pageSize: _this.pageSize,					
				}
				uni.showLoading({
					title:"加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetMyPublishedTasks",
					data:params,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							_this.list = _this.list.concat(res.data.list);
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
		margin-top: 214upx;
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
		width: 42rpx;
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
	.textoder-a{
		height:346rpx;
		background:rgba(255,255,255,1);
		opacity:1;
		border-radius:12rpx;
		margin-top: 20rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		
	}
	.textoder-b{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
		border-bottom: 1rpx solid #F5F5F5;
		
		font-size:30rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		opacity:1;
	}
	.noways{
		display: flex;
		flex-direction: row;
		flex: 1;
		justify-content: space-between;
		align-items: center;
		
		
	}
	.noway{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		
	}
	.textoder-c{
		
		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		/* align-items: flex-start; */
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:400;
	margin-top: 22rpx;
		color:rgba(51,51,51,1);
		opacity:1;
	}
	.btn{
		
		
		width:134rpx;
		height:60rpx;
		margin-right: 22rpx;
		background:#f02f30;
		opacity:1;
		border-radius:8rpx;
		line-height: 60rpx;
		text-align: center;
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(255,255,255,1);
		opacity:1;
	}
</style>
