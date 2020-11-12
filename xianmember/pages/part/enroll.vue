<template>
	<view class="page">
		<view class="content">
			<view class="per">
			</view>
			<!-- 姓名 -->
			<view class="per">
				<view>姓名</view>
				<view class="uni-per">
					<input placeholder="请输入姓名" v-model="info.name" class="input" />
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<!-- 手机号 -->
			<view class="per">
				<view>联系方式</view>
				<view class="uni-per">
					<input placeholder="请输入电话号码" v-model="info.phone" class="input" />
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<view class="per">
				<view>身份证号</view>
				<view class="uni-per">
					<input placeholder="请输入身份证号" v-model="info.idNumber" class="input" />
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
		</view>

		<!-- 底部 -->
<!-- 		<view class="bottoms" @click="saveData" :disabled = "!dis">
			保存
		</view> -->
		<checkbox-group @change="checkboxChange">
			<label style="font-size: 32rpx;
		font-family: PingFang SC;">
				<checkbox  value="check"/>是否了解代理商及合伙人政策
			</label>
		</checkbox-group>
		<button v-bind:disabled="!known" class="bottoms" type ="button" @click="saveData">保存</button> 
	</view>


</template>

<script>
    var  graceChecker = require("../../common/graceChecker.js");
	import Helper from '@/function.js';
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	import cityData from '../../common/city.data.js';
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				known: false,
				imgSvr: "",
				token: "",
				info: {},
			}
		},
		onLoad: function() {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
		},

		methods: {
			checkboxChange: function (e) {
				var values = e.detail.value;
				console.log(values);
				if(Helper.isEmpty(values) == true)
				{
					this.known = false;
				}
				else
				{
					this.known = true;
				}
				console.log(this.known)
			},
			saveData() {
				var _this = this;
				if (Helper.isEmpty(this.info.name))
				{
					uni.showToast({
						title:"请输入姓名",
						icon:"none"
					})
					return;
				}
				if (Helper.isEmpty(this.info.phone.length))
				{
					uni.showToast({
						title:"请输入电话号码",
						icon:"none"
					})
					return;
				}
				if (Helper.isEmpty(this.info.idNumber))
				{
					uni.showToast({
						title:"请输入身份证号",
						icon:"none"
					})
					return;
				}
				if (Helper.isEmpty(this.info.idNumber.length<4))
				{
					uni.showToast({
						title:"请输入身份证号16",
						icon:"none"
					})
					return;
				}
				
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/Member/CreateFranchise',
					data: _this.info,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res);

						if (Helper.CheckData(res)) {
							uni.showModal({
								title: "信息提示",
								content: "信息修改成功",
								showCancel: false
							})
						} else {
							uni.showModal({
								title: "出错了",
								content: res.data.errorMessage,
								showCancel: false
							})
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
			}
		}

</script>

<style>
	page {

		background: #F5F5F5;
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
		height: 376rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
	}

	.per {

		display: flex;
		flex-direction: row;
		justify-content: space-between;
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
		display: flex;
		flex-direction: row;
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

		text-align: right;

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
		margin-top: 60rpx;
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
