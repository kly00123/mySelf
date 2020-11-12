<template>
	<view class="page">
		<!-- 手机号 -->
		<uni-page-head uni-page-head-type="default">
				<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
					<div class="uni-page-head-hd">
						<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
					</div>
					<div class="uni-page-head-bd">
						<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">用户注册</div>
					</div>
					<!---->
				</div>
				<div class="uni-placeholder"></div>
			</uni-page-head>
		<view class="phone">
			<view style="width: 100upx;">手机号</view>
			<view class="phone_A"><input placeholder="请输入手机号" maxlength="11" v-model="userPhone" class="input" /></view>
		</view>
		<!-- 验证码 -->
		<view class="phone" style="margin-top: 58upx;">
			<view style="width: 100upx;">验证码</view>
			<view class="phone_A_S">
				<input v-model="checkCode" maxlength="6" placeholder="请输入验证码" class="input" />				
				<view class="getcode" @click="GetCheckCode" v-if="timecount==60">{{checkcode_btn}}</view>
				<view class="getcode" v-else style="background-color: #666666">{{checkcode_btn}}</view>
			</view>
		</view>
		<view class="phone" style="margin-top: 74upx;">
			<view style="width: 100upx;">密码</view>
			<view class="phone_A"><input v-model="userPass" placeholder="请输入新密码" class="input" /></view>
		</view>

		<view class="phone" style="margin-top: 58upx;">
			<view style="width: 100upx;"></view>
			<view class="phone_A"><input v-model="userPass_2" placeholder="请再次确认新密码" class="input" /></view>
		</view>
		<!-- 再次 -->
		<view class="phone" style="margin-top: 36upx;margin-left: 90upx;margin-right: 24upx;">
			<view class="font_A">
				<text style="color: #F56C6C;">注:</text>
				密码需要填6-20位字符，可由英文字母、数字组成，不能含空格
			</view>
		</view>
		<view style="padding-left: 30upx;"><checkbox value="cb" @tap="btnLicense"  :checked="license"  color="#F56C6C" style="transform:scale(0.7)" /><text  @click="goLicense">阅读并同意注册协议</text></view>
		<view class="btn" @click="goReg()">确认</view>
	</view>
</template>

<script>
	import Helper from "@/function.js"
	import Md5Unit from '@/pages/utils/md5.js'	
export default {
	data() {
		return {
			parentId: "",
			userPhone:"",
			userPass:"",
			checkCode:"",
			userPass_2:"",
			checkcode_btn:"获取验证码",
			timecount: 60,
			license:false,
		};
	},
	
	onLoad:function(options){
		if (Helper.isEmpty(options.parentId))
		{
			
		}
		else
		{
			this.parentId = options.parentId;
		}
		
		uni.removeStorageSync("token")
	},	
	methods:{
		btnLicense(e){
			this.license = !this.license;
		},
		goIndex(){
			uni.navigateTo({
				url:'/pages/sign/sign'
			})
		},
		goLicense(){
			uni.navigateTo({
				url:"/pages/sign/license"
			})
		},
		GetCheckCode: function() {
			var _this = this;
		
			if (Helper.isEmpty(this.userPhone) || _this.userPhone.length != 11) {
				uni.showModal({
					title: "信息提示",
					content: "请输入正确的手机号",
					showCancel: false
				})
				_this.checkcode_btn = '获取验证码'
				_this.timecount = 60;
				return;
			}
			
			uni.showLoading({
				title:"请等待..."
			})
		
			
			uni.request({
				url: _this.ApiGateWay + "/sale/message/GetCheckCode?type=1&phone=" + _this.userPhone,
				method: "POST",
				success: function(res) {
					uni.hideLoading();
					if (Helper.CheckData(res)) {
						_this.GetCode();
					} else {
						uni.showModal({
							title: "信息提示",
							content: res.data.errorMessage,
							showCancel: false
						})
					}
		
				},
				fail: function() {
					uni.hideLoading();
					uni.showModal({
						title: "信息提示",
						content: "网络错误",
						showCancel: false
					})
				}
		
		
			});
		},
		
		GetCode: function() {
			var _this = this;
		
			if (this.timecount == 0) {
				this.checkcode_btn = '获取验证码'
				this.timecount = 60;
			} else {
				_this.checkcode_btn = _this.timecount + '秒后重发'
				_this.timecount--;
				setTimeout(function() {
					_this.GetCode();
		
				}, 1000)
			}
		
		
		},
	
		goReg(){
			var _this = this;
			if (Helper.isEmpty(this.userPhone) || this.userPhone.length !=11)
			{
				uni.showToast({
					title:"请输入正确的手机号",
					icon:"none"
				})
				
				return;
			}
			
			if (Helper.isEmpty(this.checkCode) || this.checkCode.length != 6)
			{
				uni.showToast({
					title:"请输入6位验证码",
					icon:"none"
				})
				
				return;
			}
			
			if (Helper.isEmpty(this.userPass) || this.userPass.length < 6)
			{
				uni.showToast({
					title:"请输入6位或以上密码",
					icon:"none"
				})
				
				return;
			}
			
			if (this.userPass != this.userPass_2)
			{
				uni.showToast({
					title:"两次密码输入不一致",
					icon:"none"
				})
				
				return;
			}
			
			
			if (!this.license)
			{
				uni.showToast({
					title:"请阅读并同意注册协议",
					icon:"none"
				})
				
				return;
			}
			
			var md5Pass = Md5Unit.hex_md5(this.userPass);;
			
			var params = {
				userPhone: _this.userPhone,
				userPass: md5Pass,
				checkCode: _this.checkCode,
				appId: _this.appId,
				parentId:_this.parentId
			}
			
			uni.request({
				url: _this.ApiGateWay + "/sale/Member/Register",
				data: params,
				dataType:"json",
				method:"POST",
				success:function(res){
					if (Helper.CheckData(res))
					{
						uni.showModal({
							title:"信息提示",
							content:"注册成功,去登录",
							showCancel:false,
							success:function(res){
								if (res.confirm)
								{
									uni.reLaunch({
										url:"/pages/sign/sign"
									})
								}
							}
						})
					}
					else
					{
						uni.showModal({
							title:"出错了",
							content:res.data.errorMessage,
							showCancel:false
						})
					}
				}
				
			})
			
		},
		
		
	}
};
</script>

<style>
page {
	background: #fafafa;
}
.phone {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex: 1;
	margin-left: 24upx;
	margin-right: 24upx;
	font-size: 32upx;
	font-family: PingFang SC;
	font-weight: 400;
	padding-bottom: 18upx;
	color: rgba(51, 51, 51, 1);
	opacity: 1;
}
.phone_A {
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-left: 52upx;
	border-bottom: 1upx solid #f5f5f5;
}
.phone_A_S {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex: 1;
	margin-left: 52upx;
	border-bottom: 1upx solid #f5f5f5;
}

.input {
	font-size: 28upx;
	font-family: PingFang SC;
	font-weight: 400;

	color: rgba(51, 51, 51, 1);
	opacity: 1;
}


.getcode {
	/* font-size: 28upx;
	font-family: PingFang SC;
	font-weight: 400;
	padding-right: 22upx;
	color: #F04F43;
	opacity: 1; */
	width: 200upx;
	height: 88upx;
	background:linear-gradient(176deg,rgba(250,92,108,1) 0%,rgba(250,92,108,1) 7%,rgba(255,87,55,1) 100%);
	opacity:1;
	border-radius: 8upx;
	line-height: 88upx;
	text-align: center;
	
	font-size: 30upx;
	font-family: PingFang SC;
	font-weight: 400;
	color: #FFFFFF;
}


.font_A {
	font-size: 22upx;
	font-family: PingFang SC;
	font-weight: 500;
	margin-left: 88upx;
	margin-right: 24upx;
	color: rgba(102, 102, 102, 1);
	opacity: 1;
}
.btn {
	width: 702upx;
	height: 88upx;
	background:linear-gradient(176deg,rgba(250,92,108,1) 0%,rgba(250,92,108,1) 7%,rgba(255,87,55,1) 100%);
	opacity:1;
	border-radius: 8upx;
	line-height: 88upx;
	text-align: center;

	font-size: 36upx;
	font-family: PingFang SC;
	font-weight: 400;
	margin-left: 24upx;
	margin-right: 24upx;
	margin-top: 46upx;
	color: rgba(255, 255, 255, 1);
	opacity: 1;
}


</style>
