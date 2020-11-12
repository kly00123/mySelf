<template>
	<view class="page">
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">获取关注</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
		<view class="content">
			<view class="per">
							<view class="per-leber">任务类型</view>
			<!-- 				<view class="uni-per">
								<input style="font-size: 30rpx;" placeholder="请输入价格" v-model="number" class="input" />
							</view> -->				<view class="uni-per">
								<picker @change="PickerChange" :range="array" :value="arrayNum" v-model="taskName">
									<view style="color: #999999;">{{ array[arrayNum] }}</view>
								</picker>
							</view>
						</view>
			<view class="per">
				<view class="per-leber">链接地址</view>
				<view class="uni-per">
					<input style="font-size: 30rpx;" placeholder="请输入链接地址" v-model="url" class="input" />
				</view>
			</view>
			<view class="per">
				<view class="per-leber">任务单价</view>
<!-- 				<view class="uni-per">
					<input style="font-size: 30rpx;" placeholder="请输入价格" v-model="number" class="input" />
				</view> -->				<view class="uni-per">
					<picker @change="bindPickerChange" :range="arr" :value="arrayIndex" v-model="price">
						<view style="color: #999999;">{{ arr[arrayIndex] }}豆</view>
					</picker>
				</view>
			</view>
			<view class="per">
				<view class="per-leber">任务数量</view>
				<view class="uni-per">
					<input style="font-size: 30rpx;" placeholder="请输入任务数量" v-model="quota" class="input" />
				</view>
			</view>
			<view class="textarea-group">
				<view style="font-size: 30rpx;padding-bottom: 10rpx;">
					任务介绍
				</view>
				<view class="uni-per">
					<textarea value="" maxlength="300" style="width: 100%;font-size: 28rpx;" placeholder="请输入任务介绍" v-model="description" />
					</view>
			</view>

		</view>
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
				array: ['选择任务类型', '集赞涨粉', '店铺关注'],
				arr: ['选择任务单价', '3', '8', '10', '30','50'],
				arrayIndex:0,
				arrayNum:0,
				aim: ['选择任务要求', '点赞', '关注', '点赞+关注'],
				aimIndex: 0,
				index: 0,
				price:0,
				token: "",
				taskPackage: {},
				taskName: "",
				url: "",
				info: {},
				description: "",
				list: [
					{id:1,name:"3个",value:3},
					{id:2,name:"8个",value:8},
					{id:3,name:"10个",value:10},
					{id:4,name:"30个",value:30}
				],
				number:"",
				current: -1,
				packIndex:-1,

			}
		},
		onLoad: function(options) {
			this.token = uni.getStorageSync('token');
			this.taskPackage = JSON.parse(options.item);	
			this.getInfo();
			//console.log(this.taskPackage);
			// this.getArrayType(this.taskPackage.taskTypeListId);
			
		},
		onShow: function() {
			this.getInfo();
		},
		methods: {
			/* 性别选择 */
			bindPickerChange: function(e) {
				// console.log('picker发送选择改变，携带值为', e.target.value);
				this.arrayIndex = e.target.value;
				this.price=this.arrayIndex
				 console.log(e);
			},
			PickerChange: function(e) {
				// console.log('picker发送选择改变，携带值为', e.target.value);
				this.arrayNum = e.target.value;
				console.log(this.arrayNum);
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
			goIndex(){
				uni.navigateBack({
				    delta: 1
				});
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
						if (Helper.CheckData(res)) {
							_this.info = res.data.data;
							console.log(this.info)
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
			 getList() {
				var _this = this;											
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/GetTaskPackageDetailsList?taskTypeListId=' + _this.array[_this.index].id+'&taskPackageId='+_this.taskPackage.taskPackageId+'&parentId='+_this.array[_this.index].parentId,
					data: "",
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						if (Helper.CheckData(res)) {
							_this.list = res.data.list;
							 console.log(_this.list)
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
			bindAimPickerChange(e) {
				this.aimIndex = e.target.value;
			},
			goCreateTask() {
				var _this = this;
				var params = {
					orderNo: _this.taskPackage.orderNo,
					taskName: _this.taskName,
					url: _this.url,
					quota:_this.quota,
					description: _this.description,
					aim: _this.aimIndex - 1,
					taskType: _this.arrayNum,
					price: _this.arr[_this.price]
				}
				console.log(params);
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/CreateTask",
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
									uni.navigateBack({
										delta: 1
									})
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
			getArrayType(id){
				var _this = this;
					uni.request({
						url: _this.ApiGateWay + '/sale/Member/GetTaskTypeListEntity?id=' + id,
						data: "",
						method: 'POST',
						dataType: 'json',
						header: {
							Authorization: _this.token
						},
						success: function(res) {
							// console.log(res + '111');
							if (Helper.CheckData(res)) {
				
								_this.array = res.data.list;
								 console.log(_this.array)
								_this.getList(_this.taskPackage.taskPackageId,_this.taskPackage.typeId);
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

	background-color: #f5f5f9;
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
	
	.per-leber{
		width: 180rpx;
		margin-left: 24rpx;
	}
	
	.left {

		width: 24rpx;
		height: 48rpx;
		margin-left: 24rpx;

	}

	.content {
		/* height: 376rpx; */
		margin-top:-80rpx;
			
	}

	.per {

		display: flex;
		flex-direction: row;
		/* justify-content: space-between; */
		align-items: center;
		/* margin-left: 24rpx; */
		background-color: #FFFFFF;
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
	
	
	.textarea-group{
		padding: 20rpx;
		background-color: #ffffff;
		overflow: hidden;
	}
	.upload-photo-box{
		width: 25%;
		float: left;
		position: relative;
		margin-top: 30rpx;
	}
	.upload-photo-box-span{
		
		width: 40rpx; 
		height: 40rpx; 
		border-radius: 50rpx;
		background-color: rgb(255, 148, 10); 
		color: #FFFFFF;
		text-align: center;
		position: absolute;
		z-index: 1;
		top: -10rpx;
		right: 0;
		font-size: 40rpx;
		line-height: 34rpx;
		transform: rotate(45deg);
	}
	.loaded-photo-thumbnail{
		width: 150rpx;
		height: 150rpx;
		margin: 0 auto;
		border-radius:20rpx
	}
	.add-photo-btn{
		width: 150rpx;
		height: 150rpx;
		margin: 0 auto;
		border: 2rpx #ccc dashed;
		border-radius:20rpx;
		background:url(../../static/icon_plus.svg) no-repeat center;
		background-size: 80rpx;
	}
	.loaded-photo-thumbnail image{
		width: 100%;
		height: 100%;
		border-radius:20rpx ;
	}
	.bottoms {

		width: 702rpx;
		height: 92rpx;
		background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;
		margin-top: 100rpx;
		margin-bottom: 40rpx;
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
</style>
