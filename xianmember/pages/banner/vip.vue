<template>
	<view>
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">会员福利</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
			<view  style="color:red;font-size:18px;margin-top:-30px;">成为会员,万元福利等你拿!</view>
			<view style="display: flex;flex-direction: column;">
			<view>一、黄金会员(价值350元)</view>
			<view style="margin-left:10px;">
			<view>
				1：AI测肤价值99元在线测试皮肤状态
			</view>
			<view>2：网购代金券200元</view>
			<view style="border-bottom: solid 1px #ededed;">3：咪咕阅读月卡</view>
			</view>
            <view>二、铂金会员(价值4576元)</view>
			<view style="margin-left:10px;">
            <view>
            	1：AI测肤价值99元在线测试皮肤状态
            </view>
            <view>2：网购代金券500元</view>
			 <view>3：少儿英语礼包 价值498元</view>
			  <view>4：3000元重疾险</view>
            <view style="border-bottom: solid 1px #ededed;">5：体检卡 价值479元父母体检</view>
			</view>
			</view>			
			<view>三、钻石会员(价值9556元)</view>
			<view style="margin-left:10px;">
			<view>
				1：AI测肤价值99元在线测试皮肤状态
			</view>
			<view>2：网购代金券1500元</view>
			<view>3：少儿英语礼包 价值498元</view>
			<view>4：3000元重疾险</view>
			<view>5：体检卡 价值479元父母体检</view>
			<view style="border-bottom: solid 1px #ededed;">6：家庭医生年卡价值3980元全国三甲医院上千名医在线问诊</view>
			</view>
			<view style="text-align: center;margin-top:30rpx;margin-bottom: 30rpx;">
			<image src="../../static/banner/kefu.png" style="height:600rpx;"></image>
			</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				qrUrl:'../../static/banner/kefu.png',
			    isShowPhoto:true,
			}
		},
		methods: {
			goIndex(){
				uni.navigateBack({
				    delta: 1
				});
			},
			        hidePhoto(){
			            this.isShowPhoto = false;
			            uni.showToast({
			                title:'图片已隐藏',
			                icon:'none'
			            })
			        }
		}
	}
</script>

<style>

</style>
