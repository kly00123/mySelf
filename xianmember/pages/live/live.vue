<template>
	<view class="page">	
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
							<view v-if="item.taskRank==0">获赞：{{item.disQuota}}</view>
							<view v-else>获赞+关注：{{item.disQuota}}</view>
							<!-- <view>悬赏金额：{{item.taskPrice}}元</view> -->
							<!-- <view>赠送：每天{{item.taskGetCount}}条,最高{{item.taskPrice}}元的接单任务</view> -->
						</view>

					</view>
					<view class="btns" @click="payment(item)">
						购买
					</view>
			</view>
		</view>
		<!-- 2 -->
		
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				array:[],
				list: [],
				token:""

			}

		},
		onLoad: function() {
			this.token = uni.getStorageSync('token');
			this.getList();
		},
		methods: {
			paymentCard(){
				uni.navigateTo({
					url:"/pages/live/card"
				})
			},
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
							if(res.data.list[i].taskTypeListId===1&&res.data.list[i].taskLevel<5){
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
			payment(item) {
				uni.navigateTo({
					url: '/pages/live/payment?item=' + JSON.stringify(item)
				})


			}

		}


	}
</script>

<style>
	page {
		background: #fff;


	}

	.starorder {
		
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 20rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		padding:20rpx;
		box-shadow: 1px 1px 5px #C0C0C0;
		margin-bottom: 40rpx;
	}
.starorder:last-child{
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
		background:#f02f30;
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
		color:rgb(160, 160, 160);
		opacity: 1;

	}


</style>
