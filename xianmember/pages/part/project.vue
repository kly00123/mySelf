<template>
	<view class="page">
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">商家申请</div>
				</div>
				<!---->
			</div>
		</uni-page-head>
		<view class="content">
			<view class="per">
				<view>姓名</view>
				<view class="uni-per">
					<input placeholder="请输入姓名" v-model="info.name" class="input" />
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<view class="per">
				<view>联系方式</view>
				<view class="uni-per">
					<input placeholder="请输入联系方式" v-model="info.subTitle" class="input" />
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<!-- 手机号 -->
			<view class="perr">
				<view>商品详情</view>
				<view class="uni-textarea">
					<textarea placeholder="请输入商品详情" v-model="info.detail" />
					</view>
				</view>
		</view>
		<!-- 底部 -->
		<view class="bottoms" @click="saveData">
			保存
		</view>
	</view>
</template>
<script>
	import Helper from '@/function.js';
	export default { 
		data() {
			return {
				imgTotalPath:[],
				imgTotalPath1:[],
				imgArray:[],
				imageList: [],
				category: 'image',
				imgSvr: "",
				timetext: '成都市',
				token: "",
				info: {},
				imgList: [],
				cloudimgList: [],
				imgCount: 4,//最多支持9张上传，可以修改
				array: ['男', '女'],
				list:[]
			}
		},
		onLoad: function() {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
		},

		methods: {
			bindTextAreaBlur: function (e) {
				//console.log(e.detail.value)
			},
			region_change : function(e){
			    //console.log(e)
			    this.timetext = e.detail.value;
			},
			goIndex(){
				uni.switchTab({
				    url: '/pages/my/my'
				});
			},
			saveData() {
				var _this = this;	
				var pamars={
					name:_this.info.name,
					stock:_this.info.stock,
					subTitle:_this.info.subTitle,
					price:_this.info.price,
					qudou:_this.info.qudou,
					money:_this.info.money,
					detail:_this.info.detail,
					mainImgUrl:_this.imgTotalPath,
					subImgs:_this.imgTotalPath1
				}
				console.log(pamars);
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/shoppingProduct/CreateProduct',
					data: pamars,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						// console.log(res);
						if (Helper.CheckData(res)) {
							uni.showModal({
								title: "信息提示",
								content: "信息上传成功！客服将尽快和您联系！",
								showCancel: false
							})
						} else {
							// console.log('111');
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
			/* 性别选择 */
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				this.info.sex = e.target.value;
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
		background: rgba(255, 255, 255, 1);
		opacity: 1;
	}
.uni-textarea{
	
	background:#FFF;
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

		color: rgba(51, 51, 51, 1);
		opacity: 1;
		margin-top: 26rpx;
	}

	.uni-photo {
		width: 100%;
		height: 244rpx;
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
.perr{
	display: flex;
	flex-direction: column;
	margin-left: 24rpx;
	
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: 400;
	border-bottom: 1upx solid #EBEBEB;
	color: rgba(51, 51, 51, 1);
	opacity: 1;
}
.perrr{
	display: flex;
	flex-direction: row;
	font-size: 30rpx;
	font-family: PingFang SC;
	justify-content: space-between;
	font-weight: 400;
	border-bottom: 1upx solid #EBEBEB;
	color: rgba(51, 51, 51, 1);
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
		margin-top: 40rpx;
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
	.back {
		font-size: 32rpx;
		font-weight: 500;
		line-height: 48rpx;
		color: rgba(153, 153, 153, 1);
	}
	.back-hover {
		opacity: 0.4;
	}
	.submit-box {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		width: 750rpx;
		justify-content: center;
	}
	.submit-btn {
		margin-top: 10px;
		display: inline-block;
		width: 670rpx;
		height: 96rpx;
		line-height: 96rpx;
		text-align: center;
		background-color: rgba(109, 221, 203, 1);
		opacity: 1;
		border-radius: 32rpx;
		border-width: 8rpx;
		border-color: rgba(255, 255, 255, 1);
		box-shadow: 0rpx 8rpx 12rpx rgba(0, 0, 0, 0.16);
		border-radius: 56rpx;
		font-size: 39rpx;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
	}
	.submit-btn-txt {
		font-size: 39rpx;
		font-weight: bold;
		line-height: 47rpx;
		color: rgba(255, 255, 255, 1);
		opacity: 1;
	}
	.map-box {
		width: 484rpx;
		height: 256rpx;
		border-width: 4rpx;
		border-color: rgba(255, 255, 255, 1);
		box-shadow: 0rpx 0rpx 24rpx rgba(0, 0, 0, 0.16);
		/* border-radius: 12rpx; */
		position: relative;
	}
	.map {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 476rpx;
		height: 250rpx;
	}
	.map-img {
		position: absolute;
		top: 90rpx;
		left: 156rpx;
		width: 230rpx;
		height: 68rpx;
		background-color: rgba(51, 51, 51, 0.64);
		border-width: 1rpx;
		border-color: rgba(0, 0, 0, 0);
		border-radius: 34px;
	
		font-size: 28rpx;
		font-weight: bold;
		line-height: 66rpx;
		color: rgba(255, 255, 255, 1);
		text-align: center;
	}
	.address-box {
		display: flex;
		width: 670rpx;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 15rpx 40rpx;
		margin-bottom: 10px;
	}
	.label {
		font-size: 36rpx;
		font-weight: bold;
		line-height: 50rpx;
		color: #222222;
	}
	.label-img {
		padding-left: 40rpx;
	}
	.address-box-txt {
		align-items: flex-start;
	}
	.address-txt {
		width: 484rpx;
		height: 90rpx;
		font-size: 32rpx;
		font-weight: 500;
		line-height: 45rpx;
		color: rgba(51, 51, 51, 1);
	}
	.add-box {
		padding: 15rpx 0;
		flex-wrap: wrap;
	}
	.add-img-box {
		display: flex;
		width: 750rpx;
		//padding: 0 40rpx;
		padding-left: 10rpx;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.add-img-item {
		/* width:210rpx;
			height:210rpx; */
		width: 200rpx;
		height: 200rpx;
		border-radius: 24rpx;
		position: relative;
		padding: 9rpx 0;
		margin-left: 20rpx;
	}
	.add-img-camera {
		flex: 1;
	}
	.add-img {
		width: 200rpx;
		height: 200rpx;
		border-radius: 24rpx;
	}
	.add-img-del {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		right: 8rpx;
		top: 17rpx;
		//background-color: rgba(238, 0, 0, 1);
		border-radius: 20rpx;
	}
	.address-time {
		width: 484rpx;
		height: 88rpx;
		background-color: rgba(245, 245, 245, 1);
		opacity: 1;
		border-radius: 24rpx;
		text-align: center;
	
		font-size: 35rpx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	.line{
		width: 750rpx;
		height: 1px;
		transform: scaleY(0.3);
		background-color: rgba(0,0,0,0.5);
	}
</style>
