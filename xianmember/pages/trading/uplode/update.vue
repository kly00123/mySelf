<template>
	<view>
		<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;"></div>
				</div>
				<!---->
			</div>
		</uni-page-head>
		<view class="content">
			<view class="list">
				<view class="row" v-for="(row,index) in addressList" :key="index" @tap="select(row)">
				<view class="uni-starorder">
					<view class="uni-starorder_A">
						<view>{{index}}</view>
						<image :src="imgSvr + row.coverImg" class="uni-starorderS"></image>
					</view>
					<view style="font-weight:600;" class="whiteSpace">
                       商品名称:{{row.name}}
					</view>
				</view>
					<view class="right">
						<view class="icon bianji" @tap.stop="edit(row)">						
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="add">
			<view class="btn" @tap="add">
				<view class="icon tianjia"></view>新增商品
			</view>
		</view>
	</view>
</template>
<script>
	import Helper from '@/function.js';
	export default {
		data() {
			return {
				isSelect:false,
				imgSvr:'',
				addressList:[
					// {id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{"label":"广东省-深圳市-福田区","value":[18,2,1],"cityCode":"440304"},detailed:'深南大道1111号无名摩登大厦6楼A2'},isDefault:true},
					// {id:2,name:"大黑哥",head:"大",tel:"15812341234",address:{region:{"label":"广东省-深圳市-福田区","value":[18,2,1],"cityCode":"440304"},detailed:'深北小道2222号有名公寓502'},isDefault:false},
					// {id:3,name:"老大哥",head:"老",tel:"18155467897",address:{region:{"label":"广东省-深圳市-福田区","value":[18,2,1],"cityCode":"440304"},detailed:'深南大道1111号无名摩登大厦6楼A2'},isDefault:false},
					// {id:4,name:"王小妹",head:"王",tel:"13425654895",address:{region:{"label":"广东省-深圳市-福田区","value":[18,2,1],"cityCode":"440304"},detailed:'深南大道1111号无名摩登大厦6楼A2'},isDefault:false},
				],
				isDefaultList:[]
			};
		},
		onLoad(e) {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			this.getInfo();
			if(e.type=='select'){
				this.isSelect = true;
			}	
		},	
		onShow() {	
			//console.log(JSON.parse(JSON.stringify(this.isDefaultList)));
			uni.getStorage({
				key:'delAddress',
				success: (e) => {
					let len = this.addressList.length;
					console.log(e);
					if(e.data.hasOwnProperty('id')){
						for(let i=0;i<len;i++){
							if(this.addressList[i].id==e.data.id){
								this.addressList.splice(i,1);
								// console.log(addressList[i].id);
								break;
							}
						}
					}
					uni.removeStorage({
						key:'delAddress'
					})
				}
			})
			uni.getStorage({
				key:'saveAddress',
				success: (e) => {
					let len = this.addressList.length;
					if(e.data.hasOwnProperty('id')){
						for(let i=0;i<len;i++){
							if(this.addressList[i].id==e.data.id){
								this.addressList.splice(i,1,e.data);
								break;
							}
						}
					}else{
						let lastid = this.addressList[len-1];
						lastid++;
						e.data.id = lastid;
						this.addressList.push(e.data);
					}
					uni.removeStorage({
						key:'saveAddress'
					})
				}
			})
		},
		methods:{
			edit(row){
				uni.setStorage({
					key:'addresss',
					data:row,
					success() {
						uni.navigateTo({
							url:"edit/edit?type=edit"
						})
					}
				});
				
			},
			goIndex(){
				uni.navigateTo({
					url:"/pages/trading/select/select"
				})
			},
			add(){
				uni.navigateTo({
					url:"edit/edit?type=add"
				})
			},
			  select(row){
				//是否需要返回地址(从订单确认页跳过来选收货地址)
				if(!this.isSelect){
					return ;
				}
				uni.setStorage({
					key:'selectAddress',
					data:row,
					success() {
						uni.navigateBack();
					}
				})
			},
			getInfo() {
				var addressList=[];
				var getAdr=[];
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/shoppingProduct/GetProducts?status='+2,
					data: '',
					method: 'post',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						if (Helper.CheckData(res)) {
							_this.addressList = res.data.list;
                              console.log(res);
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
		}
	}
</script>

<style lang="scss">
view{
	display: flex;
}
	.icon {
		// &.bianji {
		// 	&:before{content:"\e61b";}
		// }
		// &.tianjia {
		// 	&:before{content:"\e81a";}
		// }
	}
	.uni-starorderS {
		width: 400rpx;
		height: 250rpx;
		margin-top: 20rpx;
	
		margin-right: 20rpx;
		float: left;
		border-radius:20rpx
	}
	.whiteSpace {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.add{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
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
	.list{
		flex-wrap: wrap;
		.row{
			width: 96%;
			padding: 20upx 2%;
			.left{
				width: 90upx;
				flex-shrink: 0;
				align-items: center;
				.head{
					width: 70upx;
					height: 70upx;
					background:linear-gradient(to right,#ccc,#aaa);
					color: #fff;
					justify-content: center;
					align-items: center;
					border-radius: 60upx;
					font-size: 35upx;
				}
			}
			.center{
				width: 100%;
				flex-wrap: wrap;
				.name-tel{
					width: 100%;
					align-items: baseline;
					.name{
						font-size: 34upx;
					}
					.tel{
						margin-left: 30upx;
						font-size: 24upx;
						color: #777;
					}
					.default{

						font-size: 22upx;
						
						background-color: #f06c7a;
						color: #fff;
						padding: 0 18upx;
						border-radius: 24upx;
						margin-left: 20upx;
					}
				}
				.address{
					width: 100%;
					font-size: 24upx;
					align-items: baseline;
					color: #777;
				}
			}
			.right{
				flex-shrink: 0;
				align-items: center;
				margin-left: 20upx;
				.icon{
					justify-content: center;
					align-items: center;
					width: 80upx;
					height: 60upx;
					border-left: solid 1upx #aaa;
					font-size: 40upx;
					color: #777;
				}
			}
		}
	}
</style>
