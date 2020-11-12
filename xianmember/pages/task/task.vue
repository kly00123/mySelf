<template>
	<view class="page">

		<!-- 筛选 -->
		<view class="screen">
			<!--任务等级  -->
			<view :class="menuIndex == 0 ? 'nav1 narcolor' : 'nav1'" @click="openGrademask">
				<view class="carstr">
					<view>任务等级</view>
					<image src="../../static/down.png" :class="{transform:isGrade}" style="width: 14rpx;height: 9rpx;margin-left: 10rpx;"></image>
				</view>
			</view>
			<!-- 任务类别-->
			<view :class="menuIndex == 1 ? 'nav1 narcolor' : 'nav1'" @click="openTypemask">
				<view class="carstr">
					<view>任务类型</view>
					<image src="../../static/down.png" :class="{transform:isType}" style="width: 14rpx;height: 9rpx;margin-left: 10rpx;"></image>
				</view>
			</view>
		</view>
		<!-- 筛选的交互 -->
		<!-- 车辆状态 -->
		<view class="mask" v-if="ismask == true" @click="openmask"></view>
		<view class="smakcontent " v-if="ismask == true">
			<view class="menu-row" v-for="(item, index) in menuList" @click="selectMenu(item)">
				<view :class="item.isChecked ? 'str_font_act' : 'str_font'">{{ item.name }}</view>
				<image src="../../static/tup.png" style="width: 37rpx;height: 29rpx;" v-if="item.isChecked"></image>
			</view>
		</view>
		<view class="content">
			<!-- 内容 -->
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
									<text style="font-weight:500;color:#999 ;" v-if="item.taskRank==0">点赞</text>
									<text style="font-weight:500;color:#999 ;" v-else="item.taskRank==1">点赞+关注</text>
								</view>
								<view style="font-weight:600;color:#FF2A43">任务佣金：
									<text style="color: #FF2A43;">{{item.price}}元</text>
								</view>
								<!-- <view >剩余：126</view> -->
							</view>
						</view>
					</view>
				</view>
			</block>

			<!-- 无数据的时候-->
			<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
			<view class="nodata" v-if="total==0">
				<view>
					<image src="../../static/noways.png" style="width: 250upx;height: 164upx;"></image>
				</view>
				占无任务
			</view>
		</view>
	</view>
</template>

<script>
	import Helper from '@/function.js';

	import loadMore from '../../components/load-more.vue'
	export default {

		data() {
			return {
				token: '',
				nodata: false,
				total: -1,
				pageIndex: 1,
				pageSize: 10,
				state: '', //状态 
				taskRank: '', //任务等级
				taskType: '', //任务类型
				taskList: [],
				menuList: [],
				menuIndex: -1,
				isdown: true,
				ismask: false,
				sortnum: 0,
				isGrade: true,
				isType: true
			};
		},
		onLoad: function(options) {
			this.taskRank = options.rank;
		},
		onShow() {

			this.token = uni.getStorageSync('token');

			this.pageIndex = 1;
			this.taskList = [];
			this.getTaskList();
		},
		onPullDownRefresh() {
			this.pageIndex = 1;
			this.taskList = [];
			this.getTaskList();
			uni.stopPullDownRefresh();
		},

		//上拉加载函数
		onReachBottom: function() {
			if (this.taskList.length < this.total) {
				this.pageIndex++;
				this.getTaskList();
			}

		},
		methods: {
			selectMenu(item) {

				for (var i = 0; i < this.menuList.length; i++) {
					this.menuList[i].isChecked = false;
				}

				item.isChecked = true;
				this.ismask = false;

				if (this.menuIndex == 1) {
					this.taskRank = item.selectstatus;
				}
				if (this.menuIndex == 0) {
					this.taskType = item.selectstatus;
				}

				this.pageIndex = 1;
				this.taskList = [];
				this.getTaskList();
				this.isType=true;
				this.isGrade=true;
			},



			closeallmask() {
				this.ismask = false;
			},

			openTypemask() {
				//console.log(index);		
				this.menuList = [{
						name: '全部',
						isChecked: false,
						selectstatus: -1
					},
					{
						name: '抖音任务',
						isChecked: false,
						selectstatus: 0
					},


					{
						name: '快手任务',
						isChecked: false,
						selectstatus: 1
					}
				];
				this.menuIndex = 0;
				for (var i = 0; i < this.menuList.length; i++) {
					if (this.menuList[i].selectstatus == this.status) {
						this.menuList[i].isChecked = true;
						break;
					}
				}


					console.log("isGrade"+this.isGrade)
				//console.log(this.menuList);
				this.menuIndex = 0;
				if(this.ismask==false){
					this.ismask = true;					
					this.isType=false;
				}else{
					if(this.isGrade==false){
						this.isType=false;
						this.isGrade=true;
					}else{						
						this.ismask = false;				
						this.isType=true;
					}
				}														
			},
			openGrademask() {			
				//console.log(index);
				this.menuList = [{
						name: '全部',
						isChecked: false,
						selectstatus: -1

					},
					{
						name: '普通任务',
						isChecked: false,
						selectstatus: 0

					},
					{
						name: '巨星任务',
						isChecked: false,
						selectstatus: 1
					}
				];

				this.menuIndex = 1;
				for (var i = 0; i < this.menuList.length; i++) {
					if (this.menuList[i].selectstatus == this.vehicelClass) {
						this.menuList[i].isChecked = true;
						break;
					}
				}
				//console.log(this.menuList);
				this.menuIndex = 1;		
				if(this.ismask==false)
				{
					this.ismask = true;		
					this.isGrade=false;
				}else
				{												
					if(this.isType==false)
					{		
						this.isType=true;	
						this.isGrade=false;				
					}else{						
						this.ismask = false;					
						this.isGrade=true;	
					}
				}									
			},

			/* 获得所有任务列表 */
			getTaskList() {
				var _this = this

				var taskRank = _this.taskRank
				if (_this.taskRank == -1) {
					taskRank = ""
				}

				var taskType = _this.taskType
				if (_this.taskType == -1) {
					taskType = ""
				}

				var params = {
					state: _this.state,
					taskType: taskType,
					taskRank: taskRank,
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
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
						//console.log(res);

						if (Helper.CheckData(res)) {
							let {
								errorCode,
								errorMessage,
								list,
								total,
								totalPage
							} = res;
							_this.total = res.data.total;
							_this.taskList = _this.taskList.concat(res.data.list);

							//console.log(_this.taskList);
							// _this.setListStatus();
						} else {
							_this.total = true;
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

			/* 领取任务移除 */
			getTask(index, taskId) {
				var _this = this;
				console.log('点击移除');
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
							uni.showModal({
								title: '提示',
								content: res.data.errorMessage,
								confirmColor: '#5A83E9',
								showCancel: false,
							});
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


			}

		}
	};
</script>

<style>
	page {
		background: #F5F5F5;
	}

	.content {
		display: flex;
		flex-direction: column;
		margin: 0 20px;
	}

	.container_of_slide {

		width: 100%;
		overflow: hidden;

	}

	.transform {

		transform: rotate(-90deg);
	}

	.mask {
		background: rgba(0, 0, 0, 0.5);
		z-index: 100;
		position: absolute;
		top: 240rpx;
		left: 0;
		bottom: 0rpx;
		right: 0;
		position: fixed;
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

	.smakcontent {
		background-color: white;
		position: fixed;
		z-index: 1000;
		position: absolute;
		top: 80rpx;
		left: 0;
		bottom: 900rpx;
		border-top: 1rpx solid#EBEBEB;
		right: 0;
		display: flex;
		flex-direction: column;

		padding-top: 28rpx;
	}

	.menu-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-left: 24rpx;
		padding-right: 26rpx;
		height: 98rpx;
	}

	.str_font {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
		opacity: 1;
	}

	.str_font_act {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #F04F43;
		opacity: 1;
	}

	.strs {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 24rpx;
	}

	.stop {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		padding-left: 24rpx;
		padding-top: 24rpx;
	}

	.group-btn {
		display: flex;
		flex-direction: row;
		height: 264rpx;
		width: 120px;
		/* flex: 1; */
		align-items: center;
	}

	.group-btn .btn-div {
		height: 264rpx;
		color: #fff;
		text-align: center;
		/* padding: 0 20 50 50rpx; */
		font-size: 34rpx;
		width: 120rpx;
		line-height: 264rpx;
	}

	.group-btn .removeM {
		background-color: #f56c6c;
	}

	.search_a {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		/* width: 750px; */
		height: 88rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.group-btn {
		float: left;
	}



	.input {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		opacity: 1;
		margin-left: 24rpx;
	}

	.leftline {
		width: 0rpx;
		height: 32rpx;
		border: 2rpx solid rgba(204, 204, 204, 1);
		opacity: 1;
		margin-right: 24rpx;
	}

	.screen {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-left: 120rpx;
		padding-right: 120rpx;
		z-index: 10000;
		height: 84rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.carstr {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 24rpx;
		margin-top: 26rpx;
	}

	.searched {
		display: flex;
		flex-direction: row;
		justify-content: center;
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
		margin-top: 20rpx;
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
		font-family: PingFang SC;
		font-weight: bold;
		margin-left: 20rpx;
		margin-right: 20rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.uni-number {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
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
		font-family: PingFang SC;
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
		border-radius: 20rpx;
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
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
		float: right;
		padding: 0 10px;

	}

	.uni-starorder_A {

		width: 100%;

	}

	.uni-starorder_b {

		flex-direction: column;
		align-items: flex-start;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-top: 22rpx;
		margin-left: 42rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}
</style>
