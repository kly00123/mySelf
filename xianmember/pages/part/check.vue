<template>
    <view class="page">
        <view class="container">
            <form @submit="formSubmit" @reset="formReset">
				<view class="bulletin">
					<view class="bulletin-font" name="pic_1">营业执照：</view>
					<view class="uni-photo" @click="selectPic_1" v-if="imgsrc1 == null|| imgsrc1 == ''">
						<!-- <image class="uni_imgse" src="../../static/jiedan.png" v-if="info.vehicelLicenseImg == null || info.vehicelLicenseImg == ''"></image>
					<image class="uni_imgse" :src="'https://carbanke.oss-cn-shanghai.aliyuncs.com' + info.vehicelLicenseImg" v-else></image> -->
					<image src="../../static/photos.png" style="width: 134rpx;height: 134rpx;"></image>

					</view>
					<image :src="imgsrc1" v-else class="uni-photo"></image>

				</view>
				<view class="bulletin" name="pic_2">
					<view class="bulletin-font">生产经营许可证：</view>
					<view class="uni-photo" @click="selectPic_2" v-if="imgsrc2 == null || imgsrc2 == ''">
					<image src="../../static/photos.png" style="width: 134rpx;height: 134rpx;"></image>
				
					</view>
					<image :src="imgsrc2" v-else class="uni-photo"></image>
				
				</view>
				<view class="bulletin">
					<view class="bulletin-font" >质量检验检疫报告：</view>
					<view class="uni-photo" name="imgsrc3" @click="selectPic_3" v-if="imgsrc3 == null || imgsrc3 == ''">
					<image src="../../static/photos.png" style="width: 134rpx;height: 134rpx;"></image>
				
					</view>
					<image :src="imgsrc3"  v-else class="uni-photo"></image>
				</view>
                <view class="uni-form-item uni-column">
                    <view class="title">公司或个人名称：</view>
                    <input  class="uni-input" placeholder-style="color:#F76260;border-bottom: 2rpx solid #EBEBEB;" name="公司名称" placeholder="请输入公司名称" />
                </view>
				<view class="uni-form-item uni-column">
				    <view class="title">公司介绍：</view>
				   <textarea placeholder-style="color:#F76260;border-bottom: 2rpx solid #EBEBEB;" required="required" name="公司介绍" placeholder="请填写公司详情"/>
				</view>
				 <view class="uni-textarea">
					 <view class="title">电话：</view>
				                <textarea placeholder-style="color:#F76260" name="电话" placeholder="请填写产品详情"/>
				            </view>
							<view style="float:right">备注：宣传用语符合产品特点及符合相关法律法规</view>
                <view class="uni-btn-v">
                    <button form-type="submit">提交申请</button>
                </view>
            </form>
        </view>
    </view>
</template>
<script>
    var	_that=this;
    export default {
        data() {
            return {
				imgsrc1:"",
				imgsrc2:"",
				imgsrc3:"",
				imgSvr:""
            }
        },
		onLoad() {
			this.imgSvr = this.ImgServer;
		},
        methods: {
            formSubmit: function(e) {
				var _this=this;
                //console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
                var formdata = e.detail.value;
				 _this.upload(_this.formdata);
                uni.showModal({
                    content: '数据提交成功！请等待审核结果！',
                    showCancel: false
                });

            },
			upload(imgurl_2) {
				//http://localhost:25630
				uni.showLoading({
					title: '请稍候...'
				});
				var _this = this;
			
				uni.uploadFile({
					url: _this.ApiGateWay + '/sale/image/uploadByFile', //仅为示例，非真实的接口地址
					filePath: imgurl_2, //上传图片的路径
					name: 'file', //对应的key
					formData: {
						path: '/sale/newtask/'
					},
					success: res => {
						uni.hideLoading();
						let _res = JSON.parse(res.data);
						if (_res.errorCode == 0) {
							uni.showToast({
								icon: 'success',
								title: '图片上传成功!'
							});
			
							_this.imgPath = _res.data;
			
							//
						} else {
			
							uni.showModal({
								title: '提示',
								content: '图片上传失败',
								showCancel: false,
								success: function(res) {}
							});
						}
					},
					fail() {
						uni.hideLoading();
					},
					complete() {
						_this.upload_field = '';
					}
				});
			},
            formReset: function(e) {
                console.log('清空数据')
            },						
			selectPic_1() {
				var _this = this;
				var imgPath = "";
                var imgsrc1="";
			uni.chooseImage({
			    count: 1, //默认9
			    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album'], //从相册选择
			    success: function (res) {
				//	console.log(res.tempFilePaths[0]);
			     _this.imgsrc1=res.tempFilePaths[0];
				 _this.upload(_this.imgsrc1);
			    }
			});
			
			},
			/* 上传图片 */
			upload(imgurl_1) {
				//http://localhost:25630
				uni.showLoading({
					title: '请稍候...'
				});
				var _this = this;
			
				uni.uploadFile({
					url: _this.ApiGateWay + '/sale/image/uploadByFile', //仅为示例，非真实的接口地址
					filePath: imgurl_1, //上传图片的路径
					name: 'file', //对应的key
					formData: {
						path: '/sale/newtask/'
					},
					success: res => {
						uni.hideLoading();
						let _res = JSON.parse(res.data);
						if (_res.errorCode == 0) {
							uni.showToast({
								icon: 'success',
								title: '图片上传成功!'
							});
			
							_this.imgPath = _res.data;
			
							//
						} else {
			
							uni.showModal({
								title: '提示',
								content: '图片上传失败',
								showCancel: false,
								success: function(res) {}
							});
						}
					},
					fail() {
						uni.hideLoading();
					},
					complete() {
						_this.upload_field = '';
					}
				});
			},
			selectPic_2() {
				var _this = this
				var imgPath = "";
			var imgsrc2="";
			uni.chooseImage({
			    count: 1, //默认9
			    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album'], //从相册选择
			    success: function (res) {
				//	console.log(res.tempFilePaths[0]);
			     _this.imgsrc2=res.tempFilePaths[0];
				  _this.upload(_this.imgsrc2);
			    }
			});
			
			
			},
			/* 上传图片 */
			upload(imgurl_2) {
				//http://localhost:25630
				uni.showLoading({
					title: '请稍候...'
				});
				var _this = this;
			
				uni.uploadFile({
					url: _this.ApiGateWay + '/sale/image/uploadByFile', //仅为示例，非真实的接口地址
					filePath: imgurl_2, //上传图片的路径
					name: 'file', //对应的key
					formData: {
						path: '/sale/newtask/'
					},
					success: res => {
						uni.hideLoading();
						let _res = JSON.parse(res.data);
						if (_res.errorCode == 0) {
							uni.showToast({
								icon: 'success',
								title: '图片上传成功!'
							});
			
							_this.imgPath = _res.data;
			
							//
						} else {
			
							uni.showModal({
								title: '提示',
								content: '图片上传失败',
								showCancel: false,
								success: function(res) {}
							});
						}
					},
					fail() {
						uni.hideLoading();
					},
					complete() {
						_this.upload_field = '';
					}
				});
			},
			selectPic_3() {
				var _this = this
				var imgPath = "";
				_this.imgsrc3=";"
			
			uni.chooseImage({
			    count: 1, //默认9
			    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album'], //从相册选择
			    success: function (res) {
				//	console.log(res.tempFilePaths[0]);
			     _this.imgsrc3=res.tempFilePaths[0];
				 	  _this.upload(_this.imgsrc3);
			    }
			});
			
			
			},
			/* 上传图片 */
			upload(imgurl_3) {
				//http://localhost:25630
				uni.showLoading({
					title: '请稍候...'
				});
				var _this = this;
			
				uni.uploadFile({
					url: _this.ApiGateWay + '/sale/image/uploadByFile', //仅为示例，非真实的接口地址
					filePath: imgurl_3, //上传图片的路径
					name: 'file', //对应的key
					formData: {
						path: '/sale/newtask/'
					},
					success: res => {
						uni.hideLoading();
						let _res = JSON.parse(res.data);
						if (_res.errorCode == 0) {
							uni.showToast({
								icon: 'success',
								title: '图片上传成功!'
							});
			
							_this.imgPath = _res.data;
			
							//
						} else {
			
							uni.showModal({
								title: '提示',
								content: '图片上传失败',
								showCancel: false,
								success: function(res) {}
							});
						}
					},
					fail() {
						uni.hideLoading();
					},
					complete() {
						_this.upload_field = '';
					}
				});
			},
        }
    }
</script>

<style>
    .page {
        font-size: 32rpx;
    }
	.container{
		padding:20rpx;
	}
	.uni-form-item .title {
	        padding: 20rpx 0;
			
	    }
	.uni-photo ::before {
		width: 30%;
		height: 60rpx;
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
	.uni-photo ::after {
		width: 100%;
		height: 500rpx;
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
	.bulletin{
		border-bottom: 2rpx solid #EBEBEB;
	}
	.uni-input{
		border-bottom: 2rpx solid #EBEBEB;
	}
</style>