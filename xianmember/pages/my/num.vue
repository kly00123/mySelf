<template>
	<view>
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">客户明细</div>
				</div>
			</div>
		</uni-page-head>
		<view style="margin-top:20rpx;border-bottom: 1upx solid #EBEBEB;">
			已获取用户联系方式个数:{{totalNum}}个
		</view>
		<view class="detail" v-for="item in listShiYong">
			<view>{{item.userPhone}}</view>
		</view>
	</view>
</template>

<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				totalNum: 0,
				lastList: [],
				userId: '',
				pageIndex: 1,
				pageSize: 15
			}
		},
		onLoad(options) {
			this.token = uni.getStorageSync('token');
			this.taskTypeId = options.id;
			this.getShiList(this.taskTypeId);
		},
		methods: {
			goIndex() {
				uni.navigateBack({
					delta: 1
				})
			},
			getShiList(taskTypeId) {
				var _this = this;

				if (_this.sendType == -1) {
					var state = ''
				} else {
					var state = _this.sendType
				}

				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					state: 1,
					taskId: taskTypeId
				}
				console.log(taskTypeId)
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetTaskDetails?taskId=" + taskTypeId,
					data: params,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							_this.listShiYong = res.data.list;
							_this.totalNum=res.data.list.length;
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
		}
	}
</script>

<style>
	.detail {
		display: flex;
		flex-direction: column;
	}
</style>
