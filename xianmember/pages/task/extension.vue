<template>
	<view class="page">
		<block v-for="(item, index) in taskList">
			<view class="starorder">
				<view class="number">
					<view class="uni-number">
						<view>任务编号:{{item.taskNo}}</view>
						<view class="btn" v-if="item.taskRank==0">
							<image src="../../static/uni-task.png" class="uni-task-a"></image>
						</view>
						<view class="btn" v-else>
							<image src="../../static/star.png" class="uni-task-a"></image>
						</view>
					</view>

					<view class="uni-numbers">
						<view style="font-size: 24rpx;">￥</view>
						<view style="font-size: 36rpx;">{{item.price}}</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="uni-starorder">
					<view class="uni-starorder_A">
						<image :src="'../../static/task/'+item.taskType+'.png'" class="uni-starorderS"></image>
						<view class="uni-starorder_b">
							<view class="whiteSpace" style="font-weight:600;">任务描述：
								<text style="font-weight:500;color:#999 ;">{{item.description==null||item.description==""?"暂无":item.description}}</text>
							</view>
							<!-- <view class="btnss" @click="getTask(index, item.id)">
										领取任务
									</view> -->
							<view class="btnss" @click="mytasorder(item)">
								领取任务
							</view>
							<view style="font-weight:600;" class="whiteSpace">任务需求：
								<text style="font-weight:500;color:#999 ;" v-if="item.taskType==21">观看广告</text>
								<text style="font-weight:500;color:#999 ;" v-else="item.taskType==22">关注商铺</text>
							</view>
							<view style="font-weight:600;color:#FF2A43">已领取/总数：
								<text style="color: #FF2A43;">{{item.useQuota}}/{{item.quota}}</text>
							</view>
							<!-- <view >剩余：126</view> -->
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import Helper from '@/function.js';

	export default {
		data() {
			return {
				array:[],
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
				taskType: 2
			}
		},
		onLoad: function(options) {
			this.token = uni.getStorageSync('token');			

		},
		// onLoad:function(){
		// 	_self=this;
		// 	setTimeout(function(){
		// 		_self.duration=20;
		// 	},3000);
		// },
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
			/* 获得所有任务列表 */
			getTaskList() {
				var array=[];
				var _this = this
				var params = {
					state: _this.state,
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					taskNo: _this.taskNo,
					taskType: _this.taskType
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
							for(var i=0;i<res.data.list.length;i++){
								if(res.data.list[i].taskType==22){
									 array.push(res.data.list[i]);
									_this.List=array;
								}
								
							}
							console.log(array);
							_this.taskList = _this.taskList.concat(array);
							_this.total = res.data.total;
							
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
							cosnole.log(res);
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
				// console.log("==========")
				// console.log(JSON.parse('{"userPhone":"185****3497","taskNo":"7","id":"71bf0a21-5a1e-4507-92c4-497ad073c15f","mercId":"0f11ae8e-e523-4644-bde0-2d633f5512bc","memberId":"00068c97-a650-4744-961a-0c05508a03cc","name":"","price":0.5,"taskType":22,"taskRank":0,"aim":-1,"url":"https://market.m.taobao.com/app/tb-source-app/wz111/pages/impression?pathInfo=shop/impression&userId=669922406&shopId=64768695&wh_weex=true&pageId=0&alisite=true","quota":20000,"useQuota":0,"createTime":"2020-06-30 11:18:37","endTime":null,"state":0,"description":"bestway旗舰店"}'))
				// console.log("==========")
				// return;
				item.url="";
				if(Number(item.quota)==Number(item.useQuota)){
					uni.showModal({
					title: '提示',
					content: '任务已领完!',
					confirmColor: '#5A83E9',
					showCancel: false,
					})
				}
				else{
				uni.navigateTo({
					
					url: "/pages/mytask/mytaskorder?item="+JSON.stringify(item)
				})
}

			},
			onClickSwiper(id) {

				uni.navigateTo({
					url: '/pages/news/details?id=' + id
				})

			}

		},
	};
</script>

<style>
	page{	background: #F5F5F5;
		padding: 20rpx 20rpx;
	}
	.uni-starorder {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

	}
.starorder {
		height: 258rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 20rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		padding: 0 20px 20px 20px
	}
	
	.number {
	
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		padding-top: 24rpx;
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
		border-radius:20rpx ;
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
</style>
