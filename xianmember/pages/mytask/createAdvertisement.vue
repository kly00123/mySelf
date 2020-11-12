<template>
	<view class="page">
		<!-- 顶部 -->
		<!-- <view class="title" @click="bank()">
			<image src="../../static/leftjt.png" class="left"></image>
			<view style="margin-left: 16rpx;">个人资料</view>
		</view> -->
		<!-- 中间 -->
		<view class="content">
			<!-- 姓名 -->
			<view class="per">
				<view style="width: 180rpx;">任务名</view>
				<view class="uni-per">
					<input placeholder="请输入任务名" v-model="taskName" class="input" />

				</view>
			</view>

			<view class="per">
				<view style="width: 180rpx;">任务类型</view>
				<view class="uni-per">

					<view style="color: #999999;">广告宣传</view>

				</view>
			</view>
			<view style="margin-left: 20px;">
				<radio-group @change="radioChange">
					<label style="flex-direction: row; display: flex; line-height: 40px;" v-for="(item, index) in list" :key="item.id">
						<view>
							<radio :value="item.id+''" />
						</view>
						<view style="font-size: 32rpx;">{{item.name}}</view>
					</label>
				</radio-group>
			</view>
			<!-- <view class="per">
				<view style="width: 180rpx;">任务要求</view>
				<view class="uni-per">
					<picker @change="bindAimPickerChange" :value="aimIndex" :range="aim" style="flex: 1;">
							<view style="color: #999999;">{{ aim[aimIndex] }}</view>
					</picker>
				</view>
			</view> -->



			<view class="uni-void">
				<video id="myVideo" @error="videoErrorCallback" v-if="src&&video==1" :src="src" enable-danmu controls></video>
				<view class="uni-void" @tap="chooseVideo" v-else>
					<h3 style="line-height: 400rpx;">请选择视频</h3>
				</view>
			</view>
			<view class="per">
				<view style="width: 180rpx;">视频链接</view>
				<view class="uni-per">
					<input placeholder="请输入视屏链接" v-model="srcUrl" class="input" />
				</view>
			</view>
			<view class="uni-btn-v" @tap="sendSrcUrl">
				<button class="page-body-button butt">确认视频地址</button>
			</view>



			<view class="uni-per">
				<textarea value="" maxlength="300" style="width: 98%;padding: 8rpx;background-color: #F5F5F5;" placeholder="请输入任务介绍"
				 v-model="description" />
				</view>
			

		</view>
		<!-- 地址 -->
		<!-- 	<view class="address">
			<view class="uni-address">
				<view class="uni-flex uni-row input-line" @click="showMulLinkageThreePicker">
					<view class="wk-title">地址</view>
					<view style="flex: 1;"></view>
				</view>
				<image src="../../static/icons.png" class="icons"></image>
			</view>

			
			<view class="uni-address" style="border-bottom: none;">
				<view>详细地址</view>
				<view class="uni-per">
					<input placeholder="请输入详细地址" class="input" />
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
		</view> -->
		<!-- 底部 -->
		<view class="bottoms" @click="goCreateTask">
			发布
		</view>


	</view>


</template>

<script>
	import Helper from '@/function.js';
	export default {

		data() {

			return {
				array: ['选择任务类型', '抖音', '快手', '微视', '火山'],
				//array: [],
				aim: ['选择任务要求', '点赞', '关注', '点赞+关注'],
				aimIndex: 0,
				index: 0,
				token: "",
				taskPackage: {},
				taskName: "",
				url: "",
				description: "",
				list: [],
				current: -1,
				packIndex:-1,
				src:"",
				video:0,
				srcUrl:"",
				urlVideo:'https://cdridge.oss-cn-shanghai.aliyuncs.com'
			}
		},
		onLoad: function(options) {
			this.token = uni.getStorageSync('token');
			this.taskPackage = JSON.parse(options.item);		
			console.log(this.taskPackage);		
			this.getList(this.taskPackage.taskTypeId,this.taskPackage.taskPackageId);
		},
		
		methods: {
			/* 性别选择 */
				bindPickerChange: function(e) {
					// console.log('picker发送选择改变，携带值为', e.target.value);
					this.index = e.target.value;
				},
				radioChange: function(evt) {
					this.packIndex = evt.target.value;
					// console.log(evt.target.value);
					// for (let i = 0; i < this.list.length; i++) {
						
					// 	if (this.list[i].id == evt.target.value) {
					// 		this.current = i;
					// 		console.log(i)
					// 		break;
					// 	}
					// }
				},
				bindAimPickerChange(e) {
					this.aimIndex = e.target.value;
				},
				goCreateTask() {
					var _this = this;
			
					//------判断
			
					// if (Helper.isEmpty(this.taskName))
					// {
					// 	uni.showToast({
					// 		title:"请输入任务名",
					// 		icon:"none"
					// 	})
			
					// 	return;
					// }
			// 		if (this.index == 0) {
			// 			uni.showToast({
			// 				title: "请选择任务类型",
			// 				icon: "none"
			// 			})
			
			// 			return;
			// 		}
					// if (this.aimIndex == 0)
					// {
					// 	uni.showToast({
					// 		title:"请选择任务要求",
					// 		icon:"none"
					// 	})
			
					// 	return;
					// }
			
					
					
					if (this.packIndex == -1)
					{
						uni.showToast({
							title: "请选择数量",
							icon: "none"
						})
						
						return;
					}
			
					// if (Helper.isEmpty(this.description))
					// {
					// 	uni.showToast({
					// 		title:"请输入任务说明",
					// 		icon:"none"
					// 	})
			
					// 	return;
					// }
					if(this.video!=1){
						
						uni.showToast({
						title:"视屏地址错误",
						icon:"none"
						})
						return;
					}
					
					var params = {
						orderNo: _this.taskPackage.orderNo,
						taskName: _this.taskName,
						url: _this.src,
						description: _this.description,
						aim: _this.aimIndex - 1,
						taskType: _this.taskPackage.taskTypeId,
						packIndex:_this.packIndex
					}
					uni.showLoading({
						title: "加载中..."
					})
					uni.request({
						url: _this.ApiGateWay + "/sale/Member/CreateTaskAdvertisement",
						data: params,
						header: {
							Authorization: _this.token
						},
						method: 'POST',
						dataType: 'json',
						success: function(res) {
			
							if (Helper.CheckData(res)) {
								uni.showModal({
									title: "信息提示",
									content: "任务发布成功",
									showCancel: false,
									success: function(res) {
									uni.navigateTo({
										url: '/pages/news/new'
									});
									}
								})
			
							} else {
								uni.showModal({
									title: "出错了",
									content: res.data.errorMessage,
									showCancel: false,
									success: function(res) {
			
									}
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
				sendSrcUrl(){
					
					this.src=this.srcUrl;
					this.video=1;
					if(this.src&&this.video==1){
						console.log(this.src);	
					}
					
				},
				videoErrorCallback:function(e){				
					 uni.showModal({
						content: "视屏地址错误",
						showCancel: false
					})
				},
				chooseVideo: function() {
							var s=this;
							uni.chooseVideo({
								sourceType: ['album'],
								success: (res) => {
									
									this.src = res.tempFilePath;											
									this.upload(res.tempFilePath) 
								}
							})
				},
				upload(videourl) {
					//http://localhost:25630
					uni.showLoading({
									title: '请稍候...'
					});
								var _this = this;
						
								uni.uploadFile({
									url: _this.ApiGateWay + '/sale/video/UploadByFileVideo', //仅为示例，非真实的接口地址
									filePath: videourl, //上传图片的路径
									name: 'file', //对应的key
									formData: {
										path: '/chen/'
									},
									success: res => {
										uni.hideLoading();
										let _res = JSON.parse(res.data);
										console.log(_res)
										if (_res.errorCode == 0) {
											uni.showToast({
												icon: 'success',
												title: '视屏上传成功!'
											});
						
											_this.src =_this.urlVideo+_res.data;
											_this.srcUrl =_this.urlVideo+_res.data;
											_this.video=1;
											//
										} else {
						
											uni.showModal({
												title: '提示',
												content: '视屏上传失败',
												showCancel: false,
												success: function(res) {}
											});
										}
									},
									fail() {
										uni.hideLoading();
									},
									complete() {
										_this.upload_field = '';
									}
								});
					},
				getList(taskTypeListId,taskPackageId) {
					var _this = this;
									
					
					uni.request({
						url: _this.ApiGateWay + '/sale/Member/GetTaskPackageDetailsList?taskTypeListId=' + taskTypeListId+'&taskPackageId='+taskPackageId,
						data: "",
						method: 'POST',
						dataType: 'json',
						header: {
							Authorization: _this.token
						},
						success: function(res) {
							
							if (Helper.CheckData(res)) {
				
								_this.list = res.data.list;
								// console.log(_this.list)
				
								// _this.setListStatus();
							} else {
				
							}
				
				
						},
				
						fail: function() {
				
						},
						complete: function() {
							uni.hideLoading();
				
						}
					});
				},
				
		}
	}
</script>

<style>
	page {

		background: rgba(255, 255, 255, 1);
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

	.content {
		/* height: 376rpx; */
			border-radius: 4px;
			margin: 40rpx 40rpx;
			padding: 20rpx;
			box-shadow:1px 1px 10px #C0C0C0
	}

	.per {

		display: flex;
		flex-direction: row;
		/* justify-content: space-between; */
		align-items: center;
		margin-left: 24rpx;

		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		height: 92rpx;
		border-bottom: 1upx solid #EBEBEB;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.icons {

		width: 13rpx;
		height: 20rpx;
		margin-right: 24rpx;
		margin-left: 24rpx;
	}

	.uni-per {
		flex: 1;

		/* display: flex; */
		/* flex-direction: row; */
		align-items: center;
	}

	.cricle {

		width: 72rpx;
		height: 72rpx;
		background: rgba(255, 255, 255, 1);
		border-radius: 50%;
		opacity: 1;
		margin-bottom: 8rpx;
	}

	.input {

		/* text-align: right; */

	}

	.uni-num {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		opacity: 1;
	}

	.address {



		height: 188rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		margin-top: 20rpx;
	}

	.uni-address {

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-left: 24rpx;

		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		height: 94rpx;
		border-bottom: 1upx solid #EBEBEB;
		color: rgba(51, 51, 51, 1);
		opacity: 1;

	}

	.bottoms {

		width: 702rpx;
		height: 92rpx;
		background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;
		margin-top: 140rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-left: 24rpx;
		line-height: 92rpx;
		text-align: center;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: 400;

		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}
	.uni-btn-v{
		
		margin: 20rpx 0;
	}
	.uni-void{
		width: 100%;
		height: 450rpx;
		text-align: center;
		background-color: #f8f8f8;
		margin: 20rpx 0;
	}
	#myVideo{
		width: 100%;
		height: 100%;
	}
</style>
