<template>
	<view id="page">
		<!-- 	<view class="card">
			<view class="return_b">商城</view>
			<view class="card-link-search">
				<input type="text" class="return_c" v-model="taskNo" @input="getInptValue()" />
			</view>
			<image class="return_c" src="../../static/search.png"></image>
			<view class="btnss" style="margin-top: 0px;padding: 0px;" @click="sosuoClick()" :style="{display:sosuo}">搜索</view>
		</view> -->
		<view style="height:300rpx ;relative;z-index: 0;width:100%;border-radius:50rpx;hidden;box-shadow:1px 1px 5px rgb(130, 105, 105);">
			<swiper :autoplay="true" :interval="3000" :duration="1000" indicator-color="#FFFFFF" indicator-active-color="#FFFFFF"
			 style="height:300rpx">
				<swiper-item>
					<view class="swiper-item" @click="onClickSwiper(42)">
						<image src="../../static/banner/cpjs.png" class="uni-top"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item" @click="onClickSwiper(42)">
						<image src="../../static/banner/cpxf.png" class="uni-top"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item" @click="onClickSwiper(42)">
						<image src="../../static/banner/qyxf.jpg" class="uni-top"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx)">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in Tab" :key="index" @tap="tabSelect"
				 :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			<view class="VerticalMain" style="height:calc(100vh - 375upx)">
				<view class="uni-view-content" style="overflow: hidden auto; ">
					<view class="navPadding" id="id-0">
						<view class="mid">
							<view style="font-size: 36rpx;color: firebrick;">一、趣赞科技</view>
							<view>
								趣赞科技是一款以解决企业、用户，及海量创客需求为核心根本的多元化综合性商业服务平台，通过解决企业、用户、创客之间的问题，让商业变得更简单高效，在解决企业问题的同时，创造更多商机和就业机会，同步解决用户需求问题。在“趣赞”，用户不仅仅是消费者，更是参与者，真正意义上使趣赞成为链接纽带，让企业利用好互联网工具满足企业所需，让用户更有参与感、成就感。</view>
							<view style="margin-top:20rpx">
								趣赞的成立标志着全新互联网生态圈的建立，我们期望“趣赞”最终建立起多元化、多样性的综合性服务商业平台，我们的使命是通过服务、链接、打通、共享，让人人可参与，人人可共享，让趣赞科技扎根于各行业各动态，为社会做出应有贡献，也为更多用户企业提供商业机会。</view>
							<view style="font-size: 36rpx;color: firebrick;">二、趣赞模式</view>
							<!-- <image src="../../static/qzms.png" style="width: 500rpx;height:500rpx; margin-top:20rpx;"></image> -->
							<view style="font-size: 36rpx;color: firebrick;">三、趣赞优势</view>
							<view style="margin-right:auto">1.技术优势</view>
							<view style="margin-right:auto">以互联网作为底层构架，大数据和人工智能作为技术框架，由数支核心技术团队联合监制</view>
							<view style="margin-right:auto">2.平台优势</view>
							<view style="margin-right:auto">与多家知名短视频公司达成深度战略合作</view>
							<view style="margin-right:auto">3.简单便捷</view>
							<view style="margin-right:auto">整合碎片化价值对接平台最高需求</view>
							<view style="margin-right:auto">4.安全合法</view>
							<view style="margin-right:auto">成立法律专家顾问团，切实履行国家政策</view>
							<view style="margin-right:auto">5.开放合作</view>
							<view style="margin-right:auto;margin-bottom: 30rpx;">真正做到人人皆可参与，人人皆能参与</view>
							<view style="font-size: 36rpx;color: firebrick;">四、趣赞环境</view>
							<!-- <video id="myVideo" class="myVideo" src="../../static/video/qzmovies.mp4"></video> -->
						</view>
					</view>
					<view class="navPadding" id="id-1" style="display:none; ">
						<view style="font-size: 36rpx;color: firebrick;margin-left:160rpx;margin-bottom: 30rpx;">二、雨露均沾</view>
						<view style="margin-top:30rpx;text-decoration:underline;" @click="toRescue1">
							强强联合开启“直播带货”营销新模式-凤凰网
						</view>

					</view>
					<view class="navPadding" id="id-2" style="display:none;">
						<view style="font-size: 36rpx;color: firebrick;margin-left:160rpx;margin-bottom: 30rpx;">三、龙鼎天下</view>
						<view>
							<view @click="goImgList" class="top">
								<image :src="picList[0].picPath"></image>
								<view>{{ picList.length }}张图片</view>
							</view>
							<view class="list">龙鼎集团是由四川龙鼎天下商贸有限公司、四川雨露均沾供应链管理有限公司、四川趣赞新媒体科技有限公司组成。龙鼎集团成立于2017年，公司经过多年发展，在行业内先后取得优异成绩，树立了行业口碑；应当下集团发展需要，隶属于龙鼎集团旗下的“四川趣赞新媒体科技有限公司”成立于2019年，趣赞科技的诞生，标志着龙鼎集团正式进军互联网线上领域。</view>
							<view class="list"></view>
							<view class="list"></view>
						</view>
					</view>
					<view style="display: flex;flex-direction: row;">
						<view class="navPadding" id="id-3" style="display:none;">
							<view>.</view>
						</view>
						<view class="navPadding" id="id-4" style="display:none;">
							<view>.</view>
						</view>
						<view class="navPadding" id="id-5" style="display:none;">
							<view>.</view>
						</view>
					</view>


					<!--<view class="end">
						到底啦

					</view> -->

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
				list: [],
				listShiYong: [],
				listGuang: [],
				endlist: [],
				nextList: [],
				picList: [],
				tal: 0,
				url: 'https://www.toutiao.com/i6821456323691938304',
				url2: 'https://www.toutiao.com/i6821670698746905102',
				url1: 'https://ishare.ifeng.com/c/s/v004tx111c--H7QvMjX47--rBYul1Ekn5RLSeIFs5py12QnR7V1q2WrDFJUo4F9837bJxvHviQVI1Imep6Jxt2PJ9pQQ____?spss=np&aman=bk5daT83c7454h9d4vcc8&from=singlemessage',
				tag: 0,
				src: '',
				tabCur: 0,
				taskTypeId: 22,
				mainCur: 0,
				videoPath: '',
				verticalNavTop: 0,
				load: true,
				total: 0,
				token: '',
				imgSvr: "",
				imgPath: "",
				sosuo: "none",
				taskNo: "",
				"Tab": [{
						"id": 0,
						"name": "趣赞科技",
						"content": {
							"SubTab": [{
								"SubTabName": "裤子",
								"SubContent": ["休闲裤", ""]
							}]
						}
					}, {
						"id": 1,
						"name": "雨露均沾",
						"content": {
							"SubTab": [{
								"SubTabName": "裤子",
								"SubContent": ["休闲裤", ""]
							}]
						}
					}, {
						"id": 2,
						"name": "龙鼎天下",
						"content": {
							"SubTab": [{
								"SubTabName": "裤子",
								"SubContent": ["休闲裤", ""]
							}]
						}
					},
					{
						"id": 3,
						"name": "招募中...",
						"content": {
							"SubTab": [{
								"SubTabName": "裤子",
								"SubContent": ["休闲裤", ""]
							}]
						}
					},
					{
						"id": 4,
						"name": "招募中...",
						"content": {
							"SubTab": [{
								"SubTabName": "裤子",
								"SubContent": ["休闲裤", ""]
							}]
						}
					},
					{
						"id": 5,
						"name": "招募中...",
						"content": {
							"SubTab": [{
								"SubTabName": "裤子",
								"SubContent": ["休闲裤", ""]
							}]
						}
					},
					{
						"id": 5,
						"name": "招募中...",
						"content": {
							"SubTab": [{
								"SubTabName": "裤子",
								"SubContent": ["休闲裤", ""]
							}]
						}
					},
					{
						"id": 6,
						"name": "招募中...",
						"content": {
							"SubTab": [{
								"SubTabName": "裤子",
								"SubContent": ["休闲裤", ""]
							}]
						}
					},
					{
						"id": 7,
						"name": "招募中...",
						"content": {
							"SubTab": [{
								"SubTabName": "裤子",
								"SubContent": ["休闲裤", ""]
							}]
						}
					},
					{
						"id": 8,
						"name": "招募中...",
						"content": {
							"SubTab": [{
								"SubTabName": "裤子",
								"SubContent": ["休闲裤", ""]
							}]
						}
					}
				]

			}
		},
		onLoad: function(option) {
			this.picListInit();
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			this.getList(this.taskTypeId);
			this.getShiList(this.taskTypeId);
			this.getnextList(this.taskTypeId);
			this.getEnd(this.taskTypeId);
		},
		methods: {
			payment(item) {
				uni.navigateTo({
					url: '/pages/live/payment?item=' + JSON.stringify(item)
				})


			},
			picListInit() {
				// 图片列表数据初始化
				this.picList = [{
						picPath: '../../static/ldtx1.jpg'
					},
					{
						picPath: '../../static/ldtx2.jpg'
					},
					{
						picPath: '../../static/ldtx3.jpg'
					}
				];
			},
			goImgList() {
				uni.setStorageSync('imgPreviewPicList', this.picList);
				uni.navigateTo({
					url: '/pages/news/imgList'
				});
			},
			clickPic(index) {
				uni.setStorageSync("currentImgIndex", index);
				uni.navigateTo({
					url: '/pages/news/imgPreview'
				});
			},
			getList(taskTypeId) {

				var _this = this;
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetTaskPackageList?taskTypeId=" + taskTypeId,
					data: "",
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						if (Helper.CheckData(res)) {
							_this.list = res.data.list;
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
			toRescue() {
				window.location.href = this.url;
			},
			toRescue1() {
				window.location.href = this.url1;
			},
			toRescue2() {
				window.location.href = this.url2;
			},
			gettagList(taskTypeId) {
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetTaskPackageList?taskTypeId=" + taskTypeId,
					data: "",
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {

						if (Helper.CheckData(res)) {
							_this.list = res.data.list;
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

			talSelect(num) {
				this.tal = num;
				if (num == 1) {
					this.getnextList(22);
				}

			},
			tagSelect(num) {
				this.tag = num;
				if (num == 1) {
					this.getGuang(21);
				}
			},
			elseSelect(num) {
				this.tag = num;
				if (num == 1) {
					this.getEnd(26);
				}
			},
			goCreate(item) {

				if (item.taskTypeListId == 2) {
					if (item.taskTypeId == 21) {
						uni.navigateTo({
							url: "/pages/mytask/createAdvertisement?item=" + JSON.stringify(item)
						})
						return;
					}

				}

				// console.log(item);
				uni.navigateTo({
					url: "/pages/mytask/create?item=" + JSON.stringify(item)
				})
			},
			goTaskDetails(item) {

				uni.navigateTo({
					url: "/pages/my/taskDetails?item=" + JSON.stringify(item)
				})
			},
			paymentCard() {
				uni.navigateTo({
					url: "/pages/live/card"
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
					taskTypeId: taskTypeId
				}
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetMyTaskPackageList",
					data: params,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							_this.listShiYong.list = res.data.list;
							console.log(res.data.list)
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
			getnextList(taskTypeId) {
				var _this = this;
				if (_this.sendType == -1) {
					var state = ''
				} else {
					var state = _this.sendType
				}

				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					state: state,
					taskTypeId: taskTypeId
				}
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetMyTaskPackageList",
					data: params,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							_this.nextList = res.data.list;
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
			getGuang(taskTypeId) {
				var _this = this;

				if (_this.sendType == -1) {
					var state = ''
				} else {
					var state = _this.sendType
				}

				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					state: state,
					taskTypeId: taskTypeId
				}
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetMyTaskPackageList",
					data: params,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							_this.listGuang = res.data.list;
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
			getEnd(taskTypeId) {
				var _this = this;
				if (_this.sendType == -1) {
					var state = ''
				} else {
					var state = _this.sendType
				}

				var params = {
					pageIndex: _this.pageIndex,
					pageSize: _this.pageSize,
					state: state,
					taskTypeId: taskTypeId
				}
				uni.showLoading({
					title: "加载中..."
				})
				uni.request({
					url: _this.ApiGateWay + "/sale/Member/GetMyTaskPackageList",
					data: params,
					header: {
						Authorization: _this.token
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (Helper.CheckData(res)) {
							_this.endlist = res.data.list;
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
			tabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;

				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
				var aId = e.target.dataset.id;
				if (aId == "1") {
					this.getList(21)
				}
				if (aId == "0") {
					this.getList(22)
				}
				if (aId == "2") {
					this.getList(26)
				}


				var tarGetObj = document.getElementById("id-" + aId);
				tarGetObj.style = "";
				//遍历其他的div，隐藏

				if (aId == 0) {
					var tarGetObj2 = document.getElementById("id-1");
					tarGetObj2.style = "display:none;";
					var tarGetObj3 = document.getElementById("id-2");
					tarGetObj3.style = "display:none;";
					var tarGetObj4 = document.getElementById("id-3");
					tarGetObj4.style = "display:none;";
					var tarGetObj5 = document.getElementById("id-4");
					tarGetObj5.style = "display:none;";
					var tarGetObj5 = document.getElementById("id-5");
					tarGetObj5.style = "display:none;";
				}
				if (aId == 1) {
					var tarGetObj2 = document.getElementById("id-0");
					tarGetObj2.style = "display:none;";
					var tarGetObj3 = document.getElementById("id-2");
					tarGetObj3.style = "display:none;";
					var tarGetObj5 = document.getElementById("id-3");
					tarGetObj5.style = "display:none;";
					var tarGetObj6 = document.getElementById("id-4");
					tarGetObj6.style = "display:none;";
					var tarGetObj6 = document.getElementById("id-5");
					tarGetObj6.style = "display:none;";
				}
				if (aId == 2) {
					var tarGetObj2 = document.getElementById("id-0");
					tarGetObj2.style = "display:none;";
					var tarGetObj3 = document.getElementById("id-1");
					tarGetObj3.style = "display:none;";
					var tarGetObj4 = document.getElementById("id-3");
					tarGetObj4.style = "display:none;";
					var tarGetObj5 = document.getElementById("id-4");
					tarGetObj5.style = "display:none;";
					var tarGetObj5 = document.getElementById("id-5");
					tarGetObj5.style = "display:none;";
				}
				if (aId == 3) {
					var tarGetObj2 = document.getElementById("id-0");
					tarGetObj2.style = "display:none;";
					var tarGetObj3 = document.getElementById("id-1");
					tarGetObj3.style = "display:none;";
					var tarGetObj4 = document.getElementById("id-2");
					tarGetObj4.style = "display:none;";
					var tarGetObj5 = document.getElementById("id-4");
					tarGetObj5.style = "display:none;";
				}
				if (aId == 4) {
					var tarGetObj2 = document.getElementById("id-0");
					tarGetObj2.style = "display:none;";
					var tarGetObj3 = document.getElementById("id-1");
					tarGetObj3.style = "display:none;";
					var tarGetObj4 = document.getElementById("id-2");
					tarGetObj4.style = "display:none;";
					var tarGetObj5 = document.getElementById("id-3");
					tarGetObj5.style = "display:none;";
				}
				if (aId == 5) {
					var tarGetObj2 = document.getElementById("id-0");
					tarGetObj2.style = "display:none;";
					var tarGetObj3 = document.getElementById("id-1");
					tarGetObj3.style = "display:none;";
					var tarGetObj4 = document.getElementById("id-2");
					tarGetObj4.style = "display:none;";
					var tarGetObj5 = document.getElementById("id-3");
					tarGetObj5.style = "display:none;";
					var tarGetObj6 = document.getElementById("id-4");
					tarGetObj6.style = "display:none;";
				}


			}
		},

	};
</script>

<style lang="scss" scoped>
	* {
		font-size: 14px;

		font-family: Arial, Helvetica, sans-serif;
	}

	.page {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		margin: 0 1px;
		font-family: newincon;
	}

	.nav.fixed {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 1024;
		box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
	}

	.flex {
		display: flex;
	}

	.flex-sub {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}

	.text-orange,
	.line-orange,
	.lines-orange {
		color: #f37b1d;
	}

	.nav .cu-item.cur {
		border-bottom: 2px solid;
	}

	.bg-white {
		background-color: #fff;
	}

	.nav .cu-item {
		height: 45px;
		display: inline-block;
		line-height: 45px;
		margin: 0 5px;

	}

	.text-center {
		text-align: center;
	}

	.cu-list>.cu-item {
		transition: all .6s ease-in-out 0s;
		transform: translateX(0upx)
	}

	.cu-list.menu-avatar>.cu-item .content.flex-sub {
		width: calc(100% - 96upx - 60upx - 20upx);
	}

	.screen-swiper {

		min-height: 368rpx;
		box-sizing: border-box;
	}

	.screen-swiper uni-image {
		width: 100%;
		display: block;
		height: 100%;
		margin: 0;
		pointer-events: none;
	}

	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 160upx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
		line-height: 50px;
	}

	.card {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		min-height: 100rpx;
		justify-content: space-between;
		align-items: center;
		background-color: #DD524D;

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

	.card-link-search {

		display: flex;
		flex-direction: row;
		align-items: center;
		height: 38upx;
		font-size: 40upx;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
		border: 2rpx solid#F0F0F0;
		border-radius: 50px;
		background-color: #FFFFFF;
		width: 65%;
	}

	.card-link {
		display: flex;
		color: #FFFFFF;
		font-weight: bold;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	/* .VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	} */

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}


	.uni-view-content {
		width: 100%;
		height: 100%;

	}

	.list {
		padding: 20rpx 20rpx;
	}

	.top {
		width: 100%;
		height: 900rpx;
		position: relative;

		>image {
			width: 100%;
			height: 100%;
		}

		>view {
			background-color: rgba(0, 0, 0, 0.7);
			display: flex;
			color: #fff;
			align-items: center;
			justify-content: center;
			padding: 0 14rpx;
			height: 40rpx;
			position: absolute;
			bottom: 30rpx;
			right: 30rpx;
			font-size: 30rpx;
			border-radius: 4rpx;
		}
	}

	.navPadding {
		padding: 30rpx 20rpx 0 20rpx;
	}

	.myVideo {
		width: 540rpx;
		height: 312rpx;
		margin-bottom: 50rpx;
	}

	.pic_list {
		display: flex;
		flex-direction: column;

		>view {
			flex: 0 0 240rpx;
			height: 240rpx;
			margin: 7.5rpx 0 0 7.5rpx;

			>image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.mid {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* 水平居中 */
		align-items: center;
		/* 垂直居中 */
	}

	.text-cut {
		font-size: 36rpx;
		font-weight: bold;
	}

	.cu-list {
		margin-top: 10rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 10px;
	}

	.return_c {
		width: 60rpx;
		height: 60rpx;
		right: 44rpx;
		margin-left: 14rpx;
	}

	.return_b {
		display: flex;
		white-space: nowrap;
		margin-top: -6rpx;
		margin-left: 60rpx;
		color: #F8F8F8;
		font-size: 30rpx;
	}

	.cu-list-tab {
		width: 33%;
		float: left;
		text-align: center;
		height: 200rpx;
	}

	.cu-list-tab-text {
		font-size: 24rpx;
		color: #999;
	}

	.video {
		display: flex;
		margin: 0 auto;
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

	.cu-list-img {
		width: 160rpx;
		height: 140rpx;
		margin-bottom: 20rpx;
	}

	.uni-photo {
		width: 100%;
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
	}

	.end {
		text-align: center;
		padding: 40rpx;
		font-size: 24rpx;
		color: #999;
	}


	.starorder {

		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 20rpx;
		/* margin-left: 24rpx;
			margin-right: 24rpx; */
		padding: 20rpx;
		box-shadow: 1px 1px 5px #C0C0C0;
		margin-bottom: 40rpx;
	}

	.starorder:last-child {
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
		background: #f02f30;
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
		color: rgb(160, 160, 160);
		opacity: 1;

	}

	.textoder-a {
		height: 300rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;
		border-radius: 12rpx;
		margin-top: 20rpx;
	}

	.textoder-b {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
		border-bottom: 1rpx solid #F5F5F5;

		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.noways {
		display: flex;
		flex-direction: row;
		flex: 1;
		justify-content: space-between;
		align-items: center;


	}

	.noway {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

	}

	.uni-top {
		width: 100%;
		height: 300rpx;
		border-radius: 25rpx;
	}

	.textoder-c {

		margin-left: 20rpx;
		display: flex;
		flex-direction: column;
		/* align-items: flex-start; */
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		margin-top: 22rpx;
		color: rgba(51, 51, 51, 1);
		opacity: 1;
	}

	.btnShi {


		width: 134rpx;
		height: 60rpx;
		margin-right: 22rpx;
		background: linear-gradient(164deg, rgba(250, 92, 108, 1) 0%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}
</style>
