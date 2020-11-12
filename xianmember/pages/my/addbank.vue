<template>
	<view class="page">
		<!-- 设置 -->
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">添加提现账户 </div>
				</div>
				<!---->
			</div>
		</uni-page-head>
		<view class="setup">
			<view class="per">
				<view>支付宝</view>
				<view class="uni-per">
					<view class="uni-flex uni-row input-line">
						<view style="color: #999999;">支付宝</view>
						<!-- <picker @change="bindPickerChange" :value="index" :range="array" style="flex: 1;">
							<view style="color: #999999;">{{ array[index] }}</view>
						</picker> -->
					</view>
					<image src="../../static/icons.png" class="icons"></image>
				</view>
			</view>
			<!-- 支行名称 -->
			<block v-if="index == 0">				
				<!-- 开户行姓名 -->
				<view class="per">
					<view>支付宝姓名</view>
					<view class="uni-per">
						<input placeholder="请输入支付宝姓名" class="input" v-model="accountName"/>
						<!-- <image src="../../static/icons.png" class="icons"></image> -->
					</view>
				</view>
				<!-- 银行卡卡号 -->
				<view class="per"style="border-bottom: none;">
					<view>支付宝账号</view>
					<view class="uni-per">
						<input placeholder="请输入支付宝账号" class="input" v-model="cardNo"/>
						<!-- <image src="../../static/icons.png" class="icons"></image> -->
					</view>
				</view>
			</block>
			<block v-else>
				<view class="per">
					<view>支行名称</view>
					<view class="uni-per">
						<input placeholder="请输入支行名称" class="input"v-model="subBankName" />
						<!-- <image src="../../static/icons.png" class="icons"></image> -->
					</view>
				</view>
				<!-- 开户行姓名 -->
				<view class="per">
					<view>开户行姓名</view>
					<view class="uni-per">
						<input placeholder="请输入开户行姓名" class="input" v-model="accountName"/>
						<!-- <image src="../../static/icons.png" class="icons"></image> -->
					</view>
				</view>
				<!-- 银行卡卡号 -->
				<view class="per"style="border-bottom: none;">
					<view>银行卡卡号</view>
					<view class="uni-per">
						<input placeholder="请输入银行卡卡号" class="input" v-model="cardNo"/>
						<!-- <image src="../../static/icons.png" class="icons"></image> -->
					</view>
				</view>
			</block>

		</view>

		<!-- 底部 -->
		<view class="uni-btns" @click="getAddbankAccount()">
			保存
		</view>

	</view>

</template>

<script>
	import Helper from '@/function.js';
	export default {

		data() {

			return {
				token:'',
				id:'',
				 bankName:'',//银行	
				subBankName:'',//开户行
				cardNo:'',//银行卡号
				accountName:'',//开户人
				array: ['支付宝'],
				// array: ['支付宝','中国工商银行', '中国农业银行', '中国建设银行', '中国邮政银行', '兴业银行', '中国农村商业银行', '浦发银行', '中兴银行', '中国银行', ],
				index: 0,
			}
		},
		onLoad:function(options){
			if (!Helper.isEmpty(options.item))
			{
				console.log(options.item)
				var item = JSON.parse(options.item);
				this.id = item.id;
				this.bankName = item.bankName;
				this.subBankName= item.subBankName;
				this.accountName= item.accountName;
				this.cardNo= item.cardNo;
				
				console.log(item.cardNo)
				for (var i = 0; i < array.length; i++) {
					if (array[i] == item.bankName)
					{
						this.index = i;
						break;
					}
				}
				
			}
		},
		onShow: function() {
			
			this.token = uni.getStorageSync('token');
			this.userInfo = uni.getStorageSync('userInfo');
			
		},

		methods: {
			/* 新增银行卡接口 */
			getAddbankAccount(){
				var _this=this		
				
				
				var params={
					id:this.id,
					bankName:_this.array[_this.index],//银行
					subBankName:_this.subBankName,//开户行
					cardNo:_this.cardNo,//银行卡号
					accountName:_this.accountName,//开户人
				
				}
				
				var url = _this.ApiGateWay + '/sale/Member/MemberAddBankAccount';
				var content = "添加成功"
				if (!Helper.isEmpty(this.id)){
					var url = _this.ApiGateWay + '/sale/Member/MemberEditBankAccount'
					content = "修改成功"
				}
				
				
				uni.request({				
					url: url,
					data: params,
					method: 'POST',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						console.log(res );
						if (Helper.CheckData(res)) {
							uni.showModal({
								title:"信息提示",
								content:content,
								showCancel:false,
								success:function(res){
									uni.navigateBack({
										delta:1
									})
								}
							})			
							
						}
						else
						{
							uni.showModal({
								title:"出错了",
								content:res.data.errorMessage,
								showCancel:false,								
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
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				this.index = e.target.value;
			},
			goIndex(){
				uni.navigateBack({
					delta:1
				})
			},
			/* fanhui */
			bank() {
				uni.navigateBack({
					delta:1
				})


			},

			/* 性别选择 */
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value);
				this.index = e.target.value;
			},
			// showMulLinkageThreePicker() {
			// 	this.$refs.mpvueCityPicker.show();
			// },

			// onCancel(e) {
			// 	console.log(e);
			// },

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

	.setup {
		height: 376rpx;
		background: rgba(255, 255, 255, 1);
		opacity: 1;


	}

	.input {

		text-align: right;
		margin-right: 24rpx;
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

	.uni-btns {


		width: 702rpx;
		height: 92rpx;
		background: linear-gradient(176deg, rgba(250, 92, 108, 1) 0%, rgba(250, 92, 108, 1) 7%, rgba(255, 87, 55, 1) 100%);
		opacity: 1;
		border-radius: 8rpx;
		margin-top: 442rpx;
		line-height: 92rpx;
		text-align: center;
		font-size:34rpx;
		font-family:PingFang SC;
		font-weight:400;
		margin-left: 24rpx;
		margin-right: 24rpx;
		color:rgba(255,255,255,1);
		opacity:1;
	}
</style>
