<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="nominal">
					收件人
				</view>
				<view class="input">
					<input placeholder="请输入收件人姓名" type="text" v-model="userName" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					电话号码
				</view>
				<view class="input">
					<input placeholder="请输入收件人电话号码" type="text" v-model="userPhone" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					所在地区
				</view>
				<view class="input" @tap="chooseCity" v-model="address">
					{{region.label}}
				</view>
				
			</view>
			<view class="row">
				<view class="nominal">
					详细地址
				</view>
				<view class="input">
					<textarea v-model="fullAddress" auto-height="true" placeholder="输入详细地址"></textarea>
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					设置默认地址
				</view>
				<view class="input switch">
					<switch color="#f06c7a" :checked="isDefault" @change=isDefaultChange />
				</view>
			</view>
			<view class="row" v-if="editType=='edit'" @tap="del">
				<view class="del">
					删除收货地址
				</view>
			</view>
		</view>
		<view class="save" @tap="save">
			<view class="btn">
				保存地址
			</view>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValue" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				editType:'edit',
				id:'',
				name:'',
				tel:'',
				detailed:'',
				address:'',
				isDefault:0,
				cityPickerValue: [0, 0, 1],
				themeColor: '#007AFF',
				region:{label:"请点击选择地址",value:[],cityCode:""}
			};
		},
		methods: {
			onCancel(e) {
				//console.log(e)
			},
			chooseCity(e) {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.region = e;
				this.address=this.region.label;
				this.cityPickerValue = e.value;
				//console.log(this.region.label);
			},
			isDefaultChange(e){
				this.isDefault = Number(e.detail.value);
			},
			del(id){
				var _this = this;
				uni.request({
					url: _this.ApiGateWay + '/sale/shopping/DeleteAddress?id='+this.id,
					data: '',
					method: 'post',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success() {
						console.log(_this.id);
						uni.hideLoading();
						uni.redirectTo({
							url:'/pages/trading/address/address'
						});
					},
					fail: function() {
						uni.hideLoading();
					},
					complete: function() {
						uni.hideLoading();
					}
								
								
				})
				// uni.showModal({
				// 	title: '删除提示',
				// 	content: '你将删除这个收货地址',
				// 	success: (res)=>{
				// 		if (res.confirm) {
				// 			uni.setStorage({
				// 				key:'delAddress',
				// 				data:{id:this.id},
				// 				success() {
				// 					uni.navigateBack();
				// 				}
				// 			})
				// 		} else if (res.cancel) {
				// 			console.log('用户点击取消');
				// 		}
				// 	}
				// });
				
			},
			save(){
				var productList=[];
				var _this = this;
				 if(this.editType=='edit'){
					 console.log('这里是edit')
					 var parmas={
						id:_this.id,
					 	userName:_this.userName,
					 	userPhone:_this.userPhone,
					 	address:_this.address,
					 	fullAddress:_this.fullAddress,
					 	isDefault:this.isDefault
					 }
					 console.log(parmas)
				 	uni.request({
				 		url: _this.ApiGateWay + '/sale/shopping/UpdateAddress',
				 		data: parmas,
				 		method: 'post',
				 		dataType: 'json',
				 		header: {
				 			Authorization: _this.token
				 		},
				 		success() {
				 			uni.hideLoading();
				 			uni.redirectTo({
				 				url:'/pages/trading/address/address'
				 			});
				 		},
				 		fail: function() {
				 			uni.hideLoading();
				 		},
				 		complete: function() {
				 			uni.hideLoading();
				 		}				
				 	})
				}
				if(this.editType=='add'){
					 console.log('这里是add')
				if(!this.userName){
					uni.showToast({title:'请输入收件人姓名',icon:'none'});
					return ;
				}
				if(!this.userPhone){
					uni.showToast({title:'请输入收件人电话号码',icon:'none'});
					return ;
				}
				if(!this.fullAddress){
					uni.showToast({title:'请输入收件人详细地址',icon:'none'});
					return ;
				}
				if(this.address==0){
					uni.showToast({title:'请选择收件地址',icon:'none'});
					return ;
				}
				var parmas={
					id:_this.id,
					userName:_this.userName,
					userPhone:_this.userPhone,
					address:_this.address,
					fullAddress:_this.fullAddress,
					isDefault:this.isDefault
				}
				console.log(parmas)
					uni.showLoading({
						title: "请稍候..."
					})
					uni.request({
						url: _this.ApiGateWay + '/sale/shopping/CreateAddress',
						data: parmas,
						method: 'post',
						dataType: 'json',
						header: {
							Authorization: _this.token
						},
						success() {
							uni.hideLoading();
							uni.redirectTo({
								url:'/pages/trading/address/address'
							});
						},
						fail: function() {
							uni.hideLoading();
						},
						complete: function() {
							uni.hideLoading();
						}
				
				
					})
					}
				//实际应用中请提交ajax,模板定时器模拟提交效果
				// setTimeout(()=>{
				// 	uni.setStorage({
				// 		key:'saveAddress',
				// 		data:data,
				// 		success() {
				// 			uni.hideLoading();
				// 			uni.navigateBack();
				// 		}
				// 	})
				// },300)
				
				
			}
		},
		onLoad(e) {
			//获取传递过来的参数
		    this.token = uni.getStorageSync('token');
			this.editType = e.type;
			if(e.type=='edit'){
				uni.getStorage({
					key:'address',
					success: (e) => {
						//console.log(e);
					    this.id = e.data.id;
						this.userName = e.data.userName;
						this.userPhone = e.data.userPhone;
						this.fullAddress = e.data.fullAddress;
					    this.isDefault = e.data.isDefault;
						this.address = e.data.address;
						// this.region = e.data.address.region;
					}
				})
			}
			
		},
		onBackPress() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		},
		getInfo() {
			var productList=[];
			var _this = this;
			uni.showLoading({
				title: "请稍候..."
			})
			uni.request({
				url: _this.ApiGateWay + '/sale/shopping/CreateAddress',
				data: '',
				method: 'post',
				dataType: 'json',
				header: {
					Authorization: _this.token
				},
				success: function(res) {
					if (Helper.CheckData(res)) {
						_this.productList = res.data.list;
						//console.log(res.data);
		
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
	};
</script>
<style lang="scss">

.save{
		view{
			display: flex;
		}
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		display: flex;
		justify-content: center;
		align-items: center;
		.btn{
			box-shadow: 0upx 5upx 10upx rgba(0,0,0,0.4);
			width: 70%;
			height: 80upx;
			border-radius: 80upx;
			background-color: #f06c7a;
			color: #fff;
			justify-content: center;
			align-items: center;
			.icon{
				height: 80upx;
				color: #fff;
				font-size: 30upx;
				justify-content: center;
				align-items: center;
			}
			font-size: 30upx;
		}
	}
	.content{
		display: flex;
		flex-wrap: wrap;
		view{
			display: flex;
		}
		.row{
			width: 94%;
			
			margin: 0 3%;
			border-top: solid 1upx #eee;
			.nominal{
				width: 30%;
				height: 120upx;
				font-weight: 200;
				font-size: 30upx;
				align-items: center;
			}
			.input{
				width: 70%;
				padding: 20upx 0;
				align-items: center;
				font-size: 30upx;
				&.switch{
					justify-content: flex-end;
				}
				.textarea{
					margin: 20upx 0;
					min-height: 120upx;
				}
			}
			.del{
				width: 100%;
				height: 100upx;
				justify-content: center;
				align-items: center;
				font-size: 36upx;
				color: #f06c7a;
				background-color: rgba(255,0,0,0.05);
				border-bottom: solid 1upx #eee;
			}
		}
	}
	
</style>
