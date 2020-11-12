<template>
	<view>
		<basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<car v-if="PageCur=='car'"></car>
		<plugin v-if="PageCur=='plugin'"></plugin>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">主页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">分类</view>
			</view>
			<view class="action" @click="NavChange" data-cur="car">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'car'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='car'?'text-green':'text-gray'">购物车</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/about' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'basics'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				console.log(e);
			}
		},
		getNewsList() {
			var _this = this
			var params = {
				pageIndex: 1,
				pageSize: 5,
			}
			uni.request({
				url: _this.ApiGateWay + '/sale/Member/GetNewsList',
				data: params,
				method: 'POST',
				dataType: 'json',
				header: {
					Authorization: _this.token
				},
				success: function(res) {
					//console.log(res);
					if (Helper.CheckData(res)) {
						_this.msg = res.data.list;
					}
				},
				fail: function() {
					//uni.hideLoading();
				},
				complete: function() {
					//uni.hideLoading();
					uni.stopPullDownRefresh()
				}
		
		
			})
		
		}
	}
</script>

<style>
@import "../../../colorui/main.css";
@import "../../../colorui/icon.css";
</style>
