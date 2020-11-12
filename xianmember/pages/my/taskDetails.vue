<template>
	<view class="page">

		<view class="content">
			<!-- <view style="text-align: center;">
				<image src="../../static/taskImg.jpg" style="width: 426rpx;height: 356rpx;"></image>
			</view> -->
			<view class="card">
				<ul class="table-view ">
					<li>
						<a>
							<div class="media-body">
								<a style="font-size: 32rpx;font-weight: bold;display: flex;">任务编号：{{taskPackage.taskNo}}
									<image v-if="taskPackage.taskRank==0" src='../../static/uni-task.png' style="width: 40rpx;height: 40rpx;vertical-align:middle;"></image>
									<image v-else src='../../static/star.png' style="width: 40rpx;height: 40rpx;vertical-align:middle;"></image>
								</a>
								<a style="font-size: 24rpx;color:#D3D3D3;">悬赏总额<text class="textRed" style="margin-left: 10rpx;font-size: 32rpx;">{{parseFloat(taskPackage.quota*taskPackage.price).toFixed(2)}}</text></a>
							</div>
						</a>
					</li>
					<li>
						<a>
							<image src="../../static/task/0.png" style="width: 140rpx;height: 140rpx;float:left;margin-right: 14rpx;"></image>
							<div>
								<p class="text_P">任务奖励：<text class="textRed">{{taskPackage.price}}/次</text></p>
								<p class="text_P">任务要求：
									<text class="textRed" v-if="taskPackage.taskRank==0">点赞</text>
									<text class="textRed" v-else="taskPackage.taskRank==1">点赞+关注</text>
								</p>

								<p class="text_P">剩余数量：<text class="textRed">{{taskPackage.quota-taskPackage.useQuota}}</text></p>
							</div>
						</a>
					</li>
					<li>
						<a>
							<div>

								<p class="text_P">任务描述：<text style="font-size: 28rpx;color:#a0a0a0">{{info.description==null||info.description==""?"暂无":info.description}}</text></p>

							</div>
						</a>
					</li>
				</ul>
			</view>
			<view class="card">
				<ul class="table-view ">
					<!-- <li class="table-view-li">
						<a>
							<div class="media-body">
								<a style="font-size: 30rpx;font-weight: bold;color:#5d5d5d">当前排名</a>
								<a style="font-size: 30rpx;color:#838383;">全部排名 ></a>
							</div>
						</a>
					</li> -->

					<li class="table-view-li" v-for="(item,index) in myTasklist">
						<a>
							<div class="media-body">
								<a style="line-height: 60rpx;font-size: 28rpx;">{{index+1}}
									<image src="../../static/header.png" v-if="item.avatar==null" style="width: 60rpx;height: 60rpx;float:right;border-radius:40rpx;margin: 0 20rpx;box-shadow: 1px 1px 5px #d0cdcd;"></image>
									<image :src="imgSvr+item.avatar" v-else style="width: 60rpx;height: 60rpx;float:right;border-radius:40rpx;margin: 0 10rpx;box-shadow: 1px 1px 5px #d0cdcd;"></image>									
								</a>
								<!-- <a style="color: #AFAFAF;font-size: 28rpx;">5824<image src="../../static/star.png" style="width: 40rpx;height: 40rpx;float:left"></image></a> -->
								<a >
									<text style="color: #AFAFAF;font-size: 22rpx;line-height: 30px;">
									{{item.state==2?"已完成":"未完成"}}
									</text>
								
									
										<view class="btnss" @click="showImg(item.taskPic)" >
											查看
										</view>
									
									</text>
								</a>
							</div>
						</a>
					</li>
					<!-- <li class="table-view-li">
						<a>
							<div class="media-body">
								<a style="line-height: 60rpx;font-size: 28rpx;">1<image src="../../static/star.png" style="width: 40rpx;height: 40rpx;float:right;margin-top: 10rpx;"></image>
									<image src="../../static/task/0.png" style="width: 60rpx;height: 60rpx;float:right;border-radius:40rpx;margin: 0 10rpx;"></image>
								</a>
								<a style="color: #AFAFAF;font-size: 28rpx;">5824<image src="../../static/star.png" style="width: 40rpx;height: 40rpx;float:left"></image></a>
								<a style="color: #AFAFAF;font-size: 22rpx;">已获得<text class="textRed">￥5825<text style="font-size: 22rpx;">元</text></text></a>
							</div>
						</a>
					</li>
				 -->
				</ul>
			</view>
		</view>
		<!-- 编号-->
		
		<view class="uni-modal-c" :style="{display:isOk}">			
			<view class="uni-mask-c"></view>
			<view class="uni-modal-c">
				<view class="uni-modal__hd-c">
					凭证
				</view>
				<view class="uni-modal__bd-c">
					<img :src="imgSvr+img" style="width: 100%;" >
					{{textTishi}}
				</view>
				<view class="uni-modal__ft-c">
					<div class="" style="color: rgb(90, 131, 233);flex:1" @click="closeImg"> 确定 </div>
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
				token: '',
				info: {},
				item: {},
				imgPath: "",
				imgSvr: "",
				sendType: 0,
				myTasklist: [],
				token: '',
				pageIndex: 1,
				pageSize: 10,
				contentText: {
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				taskPackage: {},
				total: -1,
				nodata: false,
				isOk:"none",
				img:"",
				textTishi:""
			}

		},
		onLoad: function(option) {
			this.token = uni.getStorageSync('token');

			this.taskPackage.price = 0;
			this.taskPackage.quota = 0;
			this.taskPackage.useQuota = 0;

			this.taskPackage = JSON.parse(option.item);
			this.imgSvr = this.ImgServer;
			this.total = this.taskPackage.useQuota;							
		},
		onShow: function() {
			this.pageIndex = 1;
			this.myTasklist = [];
			this.selType = -1;

			this.token = uni.getStorageSync('token');
			this.userInfo = uni.getStorageSync('userInfo');
			this.getMyTaskList(this.taskPackage.id);

		},
		onPullDownRefresh: function() {
			this.pageIndex = 1;
			this.myTasklist = [];
			this.getMyTaskList(this.taskPackage.id);
		},
		onReachBottom: function() {		
			if (this.myTasklist.length < this.total) {
				this.pageIndex++;
				this.getMyTaskList(this.taskPackage.id);
			}
		},

		methods: {
			getMyTaskList(taskId) {
				console.log(taskId);
				var _this = this;
				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					state: _this.sendType
				};
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetTaskDetails?taskId=' + taskId,
					data: params,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							let {
								errorCode,
								errorMessage,
								list,
								total,
								totalPage
							} = res;							
							_this.myTasklist = _this.myTasklist.concat(res.data.list);

							// _this.setListStatus();
						} else {

						}


					},

					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
						uni.hideLoading();
						uni.stopPullDownRefresh()
					}
				});
			},
			showImg(taskPic){
				
				// this.isOk="block"
				// this.img=taskPic
				if(taskPic==null||taskPic.length==0){
					console.log(1)
					uni.showToast({
						title: "没有凭证",
						icon: "none"
					})
				}
				else{	
					
					this.isOk="block"				
					var num=taskPic.indexOf("task");
			
					if (taskPic.indexOf("task") > 0) {
						this.textTishi="图片已失效"
						this.img=""	
					}else{						
						this.img=taskPic	
					}					
				}
			}
			,closeImg(){
				this.isOk="none";
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;

	}
	.uni-modal-c {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
    display: block;
    box-sizing: border-box;
	}
	
	.uni-mask-c {
	    position: fixed;
	    z-index: 999;
	    top: 0;
	    right: 0;
	    left: 0;
	    bottom: 0;
	    background: rgba(0,0,0,.6);
	}
	.uni-modal-c .uni-modal-c {
	    position: fixed;
	    z-index: 999;
	    width: 80%;	   
	    top: 50%;
	    left: 50%;
	    -webkit-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	    background-color: #fff;
	    text-align: center;
	    border-radius: 3px;
	    overflow: hidden;
		}
	.uni-modal__hd-c {
	    padding: 1em 1.6em .3em;
	}
	
	.uni-modal__bd-c {
	    padding: 1.3em 1.6em 1.3em;
	    min-height: 40px;
	    font-size: 15px;
	    line-height: 1.4;
	    color: #999;
	    max-height: 400px;
	    overflow-y: auto;
		}
		
		.uni-modal__ft-c {
		    position: relative;
		    line-height: 48px;
		    font-size: 18px;
		    display: -webkit-box;
		    display: -webkit-flex;
		    display: flex;
		}
	.card {
		font-size: 14px;
		position: relative;
		overflow: hidden;
		border-radius: 5px;
		background-color: #fff;
		background-clip: padding-box;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
		margin-top: 20px;
		margin-bottom: 20px;

	}

	.content {
		margin: 0 20px;
	}

	.table-view {
		padding: 0px 20rpx 20rpx 20rpx;
		margin-top: 20px;
		margin-left: 10px;
		margin-right: 10px;
		margin-bottom: 30px;
	}

	.table-view li {
		list-style-type: none;
		font-size: 14px;
	}

	.table-view-li:last-child::after {
		height: 0px;
	}

	.table-view-li {
		position: relative;
		overflow: hidden;
		padding: 11px 15px;
	}

	.table-view-li::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15px;
		height: 1px;
		content: '';
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.textRed {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #ed3132;
	}

	.text_P {
		font-size: 28rpx;
		font-weight: 600;
		margin: 14rpx 0;
		color: #4d4d4d;
	}

	.media-body {
		display: flex;
		justify-content: space-between;
		align-items: center
	}


	.title {
		height: 128rpx;
		background: rgba(255, 255, 255, 1);
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
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

.btnss {			
		background: rgb(240, 47, 48);
		border-radius: 8rpx;
		margin-left: 16rpx;
		line-height: 50rpx;
		text-align: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		float: right;
		padding: 0 12rpx;

	}



	.left {

		width: 24rpx;
		height: 48rpx;
		margin-left: 24rpx;

	}

	.leftline {

		width: 1rpx;
		height: 118rpx;
		background: rgba(235, 235, 235, 1);
		opacity: 1;
	}

	.uni-ordernum {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex: 1;
		padding-left: 24rpx;
		padding-right: 24rpx;
		border-top: 1upx solid #F5F5F5;
		height: 88rpx;
		line-height: 88rpx;
		align-items: center;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 144, 0, 1);
		opacity: 1;

	}

	.uni-order {

		display: flex;
		flex-direction: column;
		/* height: 376rpx; */
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;

	}

	.uni-order-f {

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex: 1;
		margin-left: 24rpx;
		/* padding-right: 24rpx; */
		/* padding-top: 26rpx; */
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		line-height: 94rpx;
		border-bottom: 1upx solid #F5F5F5;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.date {
		/* height: 188rpx; */
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;

	}

	.bulletin {
		height: 568rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;

	}

	.bulletin-font {

		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-left: 24rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-top: 26rpx;
	}

	.uni-photo {
		width: 542rpx;
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
		margin-left: 104rpx;
		margin-right: 104rpx;

	}

	.bottom {

		width: 100%;
		height: 118rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;
		bottom: 0;
		position: fixed;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.openvideo {

		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		margin-left: 120rpx;
		margin-right: 118rpx;


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
</style>
