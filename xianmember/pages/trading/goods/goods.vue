<template>
	<view>
	<uni-page-head uni-page-head-type="default">
			<div class="uni-page-head" style="background:linear-gradient(90deg,#762f93,#e23b93,#f08300); color: rgb(255, 255, 255);">
				<div class="uni-page-head-hd">
					<div class="uni-page-head-btn" @click="goIndex"><i class="uni-btn-icon" style="color: rgb(255, 255, 255); font-size: 27px;"></i></div>
				</div>
				<div class="uni-page-head-bd">
					<div class="uni-page-head__title" style="font-size: 16px; opacity: 1;">商品详情</div>
				</div>
				<!---->
			</div>
			<div class="uni-placeholder"></div>
		</uni-page-head>
	<view>
		<view class="status" :style="{ opacity: afterHeaderOpacity }"></view>
		<view class="header">
			<!-- 头部-默认显示 -->
			<view class="before" :style="{ opacity: 1 - afterHeaderOpacity, zIndex: beforeHeaderzIndex }">
				<view class="back">
					<view class="icon xiangqian" @tap="back" v-if="showBack"></view>
				</view>
				<view class="middle"></view>
				<view class="icon-btn">
					<view class="icon tongzhi" @tap="toMsg"></view>
					<view class="icon cart" @tap="joinCart"></view>
				</view>
			</view>
			<!-- 头部-滚动渐变显示 -->
			<view class="after" :style="{ opacity: afterHeaderOpacity, zIndex: afterHeaderzIndex }">
				<view class="back">
					<view class="icon xiangqian" @tap="back" v-if="showBack"></view>
				</view>
				<view class="middle">
					<view v-for="(anchor,index) in anchorlist" :class="[selectAnchor==index ?'on':'']" :key="index" @tap="toAnchor(index)">{{anchor.name}}</view>
				</view>
				<view class="icon-btn">
					<view class="icon tongzhi" @tap="toMsg"></view>
					<view class="icon cart" @tap="joinCart"></view>
				</view>
			</view>
		</view>
		<!-- 底部菜单 -->
		<view class="footer">
			<view class="btn">
				<view class="buy" @tap="buy">立即兑换</view>
			</view>
		</view>

		<!-- 服务-模态层弹窗 -->
<!-- 		<view class="popup service" :class="serviceClass" @touchmove.stop.prevent="discard" @tap="hideService">
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
					<view class="row" v-for="(item,index) in goodsData.service" :key="index">
						<view class="title">{{item.name}}</view>
						<view class="description">{{item.description}}</view>
					</view>
				</view>
				<view class="btn">
					<view class="button" @tap="hideService">完成</view>
				</view>
			</view>
		</view> -->
		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="discard" @tap="hideSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="content">
<!-- 										<view class="title">选择规格：</view>
					<view class="sp">
						<view v-for="(item,index) in goodsData.spec" :class="[index==selectSpec?'on':'']" @tap="setSelectSpec(index)" :key="index">{{item}}</view>
					</view> -->
					<view class="length">
						<!-- v-if="selectSpec!=null" -->
						<view class="text">数量</view>
						<view class="number">
							<view class="sub" @tap.stop="sub">
								<view class="icon jian"></view>
							</view>
							<view class="input" @tap.stop="discard">
								<input type="number" v-model="num"/>
							</view>
							<view class="add" @tap.stop="add">
								<view class="icon jia"></view>
							</view>
						</view>
					</view>
				</view>
				<view class="btn">
					<view class="button" @tap="hideSpec">完成</view>
				</view>
			</view>
		</view>
		<!-- 商品主图轮播 -->
		<view class="swiper-box">
			<swiper circular="true" autoplay="true" @change="swiperChange">
				<swiper-item v-for="swiper in arrMain" :key="swiper.id">
					<image :src="imgSvr + swiper"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">{{currentSwiper+1}}/{{arrMain.length}}</view>
		</view>
		<!-- 标题 价格 -->
		<view class="info-box goods-info">
			<view class="price" v-model="goodsData.price">￥{{goodsData.price}}</view>
			<view class="slogan" v-model="goodsData.qudou">渠豆:{{ goodsData.qudou }}个<span :class="(goodsData.money>0)?'':'slogan_dis'">+{{ goodsData.money }}元</span></view>
			<view class="title">
				{{goodsData.name}}
			</view>
			<view class="title">{{ goodsData.detail }}</view>
		</view>
		<!-- 服务-规则选择 -->
<!-- 		<view class="info-box spec" v-for="goodsData in goodsData">
			<view class="row" @tap="showService">
				<view class="text">服务</view>
				<view class="content">
					<view class="serviceitem" v-for="(item,index) in goodsData.service" :key="index">{{item.name}}</view>
				</view>
				<view class="arrow">
					<view class="icon xiangyou"></view>
				</view>
			</view>
						<view class="row" @tap="showSpec(false)">
				<view class="text">选择</view>
				<view class="content">
					<view>选择规格：</view>
					<view class="sp">
						<view v-for="(item,index) in goodsData.spec" :key="index" :class="[index==selectSpec?'on':'']">{{item}}</view>
					</view>
					
				</view>
				<view class="arrow"><view class="icon xiangyou"></view></view>
			</view>
		</view> -->
		<!-- 详情 -->
		<view class="description">
			<view class="title">———— 商品详情 ————</view>
			<view class="content">
				<!-- <rich-text :nodes="descriptionStr"></rich-text> -->
				<view v-for="swiper in arrSub" :key="swiper.id">
					<image style="width: 760rpx;height:760rpx;bottom: 86rpx;" :src="imgSvr + swiper"></image>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>
<script>
	var that = this;
	import Helper from '@/function.js';
	import car from '../../../common/car.js';
	export default {
		data() {
			return {
				//控制渐变标题栏的参数
				beforeHeaderzIndex: 11, //层级
				afterHeaderzIndex: 10, //层级
				beforeHeaderOpacity: 1, //不透明度
				afterHeaderOpacity: 0, //不透明度
				//是否显示返回按钮
				// #ifndef MP
				goodsData: [],
				tmpLists: [],
				arrMain: [],
				arrSub:[],
				num:1,
				showBack: true,
				// #endif
				//轮播主图数据
				swiperList: [{
						id: 1,
						img: 'https://ae01.alicdn.com/kf/HTB1Mj7iTmzqK1RjSZFjq6zlCFXaP.jpg'
					},
					{
						id: 2,
						img: 'https://ae01.alicdn.com/kf/HTB1fbseTmzqK1RjSZFLq6An2XXaL.jpg'
					},
					{
						id: 3,
						img: 'https://ae01.alicdn.com/kf/HTB1dPUMThnaK1RjSZFtq6zC2VXa0.jpg'
					},
					{
						id: 4,
						img: 'https://ae01.alicdn.com/kf/HTB1OHZrTXzqK1RjSZFvq6AB7VXaw.jpg'
					}
				],
				//轮播图下标
				currentSwiper: 0,
				goodsImg1:[],
				imgSvr:'',
				temp:'',
				anchorlist: [], //导航条锚点
				selectAnchor: 0, //选中锚点
				serviceClass: '', //服务弹窗css类，控制开关动画
				specClass: '', //规格弹窗css类，控制开关动画
				shareClass: '', //分享弹窗css类，控制开关动画
				// 商品信息
				selectSpec: null, //选中规格
				selected: false,
				isKeep: false, //收藏
				//商品描述html
				descriptionStr: '<div style="text-align:center;"><img width="100%" src="https://ae01.alicdn.com/kf/HTB1t0fUl_Zmx1VjSZFGq6yx2XXa5.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB1LzkjThTpK1RjSZFKq6y2wXXaT.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB18dkiTbvpK1RjSZPiq6zmwXXa8.jpg"/></div>'
			};
		},
		onLoad(options) {
			this.imgSvr = this.ImgServer;
			this.token = uni.getStorageSync('token');
			this.getInfo();
			//console.log(car.totalArr+'!!!!!!!');
			// #ifdef MP
			//小程序隐藏返回按钮
			this.showBack = false;
			// #endif
			//option为object类型，会序列化上个页面传递的参数
			//console.log(option.cid); //打印出上个页面传递的参数。
			this.GetData(options.id);
			//console.log(options.id);
			// var that=this;
			// uni.getStorage({
			// key:'buylists',
			//     success: function(res) {
			//       for (let i in res.data) {
			//         that.arr.push(res.data[i])
			//  // console.log(that.arr);
			//       };
			//     }
			// })
			uni.getStorage({
				key: 'isDefaultList',
				success: (e) => {
					this.recinfo = e.data;
					uni.removeStorage({
						key: 'isDefaultList'
					})
				}
			})
		},
		onReady() {
			this.calcAnchor(); //计算锚点高度，页面数据是ajax加载时，请把此行放在数据渲染完成事件中执行以保证高度计算正确
		},
		onPageScroll(e) {
			//锚点切换
			this.selectAnchor = e.scrollTop >= this.anchorlist[2].top ? 2 : e.scrollTop >= this.anchorlist[1].top ? 1 : 0;
			//导航栏渐变
			let tmpY = 375;
			e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
			this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
			this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
			//切换层级
			this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
			this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		// onReachBottom() {
		// 	uni.showToast({ title: '没有更多啦！！！' });
		// },
		mounted() {

		},
		methods: {
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			//消息列表
			toMsg() {
				uni.navigateTo({
					url: '../msg/msg'
				})
			},
			GetData(id) {
				 //console.log(id);
				var tepImgPath = new Array();
				var arr=new Array();
				var Temp=new Array();
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/shoppingProduct/GetProductById?id='+id,
					data: '',
					method: 'post',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						//console.log(res.data.data);
						if (Helper.CheckData(res)) {
							_this.goodsData=res.data.data;
							//console.log(typeof(res.data.data.mainImgs[0]));
							for (var i in res.data.data.mainImgs){
								tepImgPath.push(res.data.data.mainImgs[i])
								//console.log(typeof(res.data.data.mainImgs[i]))
								//console.log(res.data.data.mainImgs[i])
		
							}
							for (var j in res.data.data.subImgs){
								arr.push(res.data.data.subImgs[j])
								//console.log(typeof(res.data.data.mainImgs[i]))
								//console.log(res.data.data.mainImgs[i])
									
							}
							
                            _this.arrMain=tepImgPath;
							_this.arrSub=arr;
							_this.temp=res.data.data.mainImgs[0];
							console.log(res)
							//console.log(res.data.data);
							//console.log(res.data.data);
							//var arr =Array.prototype.push()
							// console.log(res.data.data);
							// console.log(typeof(res.data.data.mainImgs[0]));
							//var arr = Object.values(tepImgPath);
							//console.log(tepImgPath);
							//console.log(_this.goodsData);
							//console.log(_this.goodsData);
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
				let goodsDat = [{
						id: 0,
						name: "索菲丝尔2020夏新品纯色百搭简约法式",
						price: "220",
						number: 1,
						qudou: '5000',
						moeny: 0,
						img: '/static/img/goods/1.jpg',
					},
					{
						id: 1,
						name: "乐町短袖t恤女夏装2020新款宽松韩版",
						price: "127.00",
						qudou: '220',
						money: '300',
						img: '/static/img/goods/2.jpg',
						number: 1,
						spec: ["XS", "S", "M", "L"],
						comment: {
							number: 102,
							userface: '../../static/img/face.jpg',
							username: '大黑哥',
							content: '很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！'
						}
					},
					{
						id: 2,
						name: "2020新款法式小众泡泡袖短款方领上衣",
						price: "199.00",
						qudou: '300',
						money: '100',
						img: '/static/img/goods/3.jpg',
						number: 1,
						comment: {
							number: 102,
							userface: '../../static/img/face.jpg',
							username: '大黑哥',
							content: '很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！'
						}
					}
				];
				//console.log(this.goodsData[1]);
				let good = Number(id)
				//console.log(this.goodsData[good])
				var goodData = goodsData[good];
				this.goodsData = goodData;
				//var goodsData=goodsData[goods_id];
				//console.log(goodsData[good]);
			},
			getInfo() {
				var addressList=[];
				var getAdr=[];
				var parmas={
					userName:'点击添加收货地址'
				}
				var _this = this;
				uni.showLoading({
					title: "请稍候..."
				})
				uni.request({
					url: _this.ApiGateWay + '/sale/shopping/GetAddressBymemberId',
					data: '',
					method: 'post',
					dataType: 'json',
					header: {
						Authorization: _this.token
					},
					success: function(res) {
						if (Helper.CheckData(res)) {
							_this.addressList = res.data.list;
							//console.log(res.data.list);
                           
								for (var i=0;i<res.data.list.length;i++){
									if(1==res.data.list[i].isDefault){
										getAdr.push(res.data.list[i])
									}
								}
								if (0==getAdr.length){
									getAdr.push(parmas)
								}
							   // console.log(res.data.list);
							uni.setStorage({
								key:'isDefaultList',
								data:getAdr,
								success() {
									console.log(getAdr);
								}
							})
							//console.log(this.isDefaultList);
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
			// 客服
			toChat() {
				uni.navigateTo({
					url: "../msg/chat/chat?name=客服008"
				})
			},
			// 分享
			share() {
				this.shareClass = 'show';
			},
			hideShare() {
				this.shareClass = 'hide';
				setTimeout(() => {
					this.shareClass = 'none';
				}, 150);
			},
			//收藏
			keep() {
				this.isKeep = this.isKeep ? false : true;
			},
			// 加入购物车
			joinCart() {
				if (this.selectSpec == null) {
					return this.showSpec(() => {
						this.toConfirmations();
						uni.showToast({
							title: "已加入购物车"
						});
					});
				}
				this.toConfirmations();
			},
			//立即购买
			buy() {
				if (this.selectSpec == null) {
					return this.showSpec(() => {
						this.toConfirmation();
					});
				}
				this.toConfirmation();
			},
			goIndex(){
				uni.navigateTo({
					url: '/pages/trading/trading'
				})
			},
			//商品评论
			toRatings() {
				uni.navigateTo({
					url: 'ratings/ratings'
				})
			},
			//跳转确认订单页面
			toConfirmation() {
				var _this=this;
				if (_this.goodsData.money==0){
					_this.num=1
				}
				console.log('goodsData:')
				console.log(_this.goodsData.id)
				let tmpList = [];
				let goods = {
					id: _this.goodsData.id,
					img: _this.temp,
					name: _this.goodsData.name,
					// spec: '规格:' + this.goodsData.spec[this.selectSpec],
					price: _this.goodsData.price,
					num: _this.num,
					money: _this.goodsData.money,
					qudou: _this.goodsData.qudou
				};
				tmpList.push(goods);
				//console.log(tmpList);
				uni.setStorage({
					key: 'buylist',
					data: tmpList,
					success: () => {
						uni.navigateTo({
							url: '../order/confirmation'
						})
					}
				})
			},
			//加入购物车
			toConfirmations() {
				var tmpLists = [];
				let goods = {
					id: this.goodsData.id,
					// img: this.goodsData.img,
					name: this.goodsData.name,
					// spec: '规格:' + this.goodsData.spec[this.selectSpec],
					price: this.goodsData.price,
					num: this.num
				};
				car.totalArr.push(goods);
				// console.log(car.totalArr);

				// uni.setStorage({
				// 	key:'buylists',
				// 	data:{...that.arr,...tmpLists},
				// 	success: () => {

				// 	}
				// })
			},

			//跳转评论列表
			showComments(goodsid) {

			},
			//选择规格
			setSelectSpec(index) {
				this.selectSpec = index;
			},
			//减少数量
			sub() {
				if (this.num <= 1) {
					return;
				}
				this.num--;
				// console.log(this.counter);
			},
			//增加数量
			add() {
				this.num++;
			},
			//跳转锚点
			toAnchor(index) {
				this.selectAnchor = index;
				uni.pageScrollTo({
					scrollTop: this.anchorlist[index].top,
					duration: 200
				});
			},
			//计算锚点高度
			calcAnchor() {
				this.anchorlist = [{
						name: '主图',
						top: 0
					},
					{
						name: '评价',
						top: 0
					},
					{
						name: '详情',
						top: 0
					}
				]
				let commentsView = uni.createSelectorQuery().select("#comments");
				commentsView.boundingClientRect((data) => {
					let statusbarHeight = 0;
					//APP内还要计算状态栏高度
					// #ifdef APP-PLUS
					statusbarHeight = plus.navigator.getStatusbarHeight()
					// #endif
					let headerHeight = uni.upx2px(100);
					this.anchorlist[1].top = data.top - headerHeight - statusbarHeight;
					this.anchorlist[2].top = data.bottom - headerHeight - statusbarHeight;

				}).exec();
			},
			//返回上一页
			back() {
				uni.navigateBack();
			},
			//服务弹窗
			showService() {
				// console.log('show');
				this.serviceClass = 'show';
			},
			//关闭服务弹窗
			hideService() {
				this.serviceClass = 'hide';
				setTimeout(() => {
					this.serviceClass = 'none';
				}, 200);
			},
			//规格弹窗
			showSpec(fun) {
				console.log('show');
				this.specClass = 'show';
				this.specCallback = fun;
			},
			specCallback() {
				return;
			},
			//关闭规格弹窗
			hideSpec() {
				this.specClass = 'hide';
				//回调
				// this.selectSpec&&
				this.specCallback && this.specCallback();
				this.specCallback = false;
				setTimeout(() => {
					this.specClass = 'none';
				}, 200);
			},
			discard() {
				//丢弃
			}
		}
	};
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}

	@keyframes showPopup {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes hidePopup {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes showLayer {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-100%);
		}
	}

	@keyframes hideLayer {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(0);
		}
	}

	.icon {
		font-size: 26upx;
	}
.uni-image{
	width:810rpx;
	height:770rpx;
	bottom: 100rpx;
}
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
		background-color: #f1f1f1;
		transition: opacity 0.05s linear;
	}

	.header {
		width: 100%;

		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);

		/*  #endif  */
		.before,
		.after {
			width: 92%;
			padding: 0 4%;
			height: 100upx;
			display: flex;
			align-items: center;
			position: fixed;
			top: 0;
			/*  #ifdef  APP-PLUS  */
			top: var(--status-bar-height);
			/*  #endif  */
			transition: opacity 0.05s linear;

			.back {
				width: 125upx;
				height: 60upx;
				flex-shrink: 0;

				.icon {
					margin-left: -10%;
					width: 60upx;
					height: 60upx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 42upx;
				}
			}

			.middle {
				width: 100%;
			}

			.icon-btn {
				width: 125upx;
				height: 60upx;
				flex-shrink: 0;
				display: flex;

				.icon {
					&:first-child {
						margin-right: 5upx;
					}

					width: 60upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 42upx;
				}
			}
		}

		.before {
			.back {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;
				}
			}

			.icon-btn {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;

				}
			}
		}

		.after {
			background-color: #f1f1f1;

			.back {
				.icon {
					color: #666;
				}
			}

			.icon-btn {
				.icon {
					color: #666;
				}
			}

			.middle {
				font-size: 32upx;
				height: 90upx;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 7%;

				view {
					width: (100%/3);
					padding: 0 3%;
					margin: 0 3%;
					display: flex;
					justify-content: center;
					align-items: center;

					&.on {
						margin-bottom: -4upx;
						color: #f47952;
						border-bottom: solid 4upx #f47952;
					}
				}
			}
		}
	}

	.swiper-box {
		margin-top:-82rpx;
		position: relative;
		width: 100%;
		height: 100vw;

		swiper {
			width: 100%;
			height: 100vw;

			swiper-item {
				image {
					width: 100%;
					height: 100vw;
				}
			}
		}

		.indicator {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25upx;
			height: 40upx;
			border-radius: 40upx;
			font-size: 22upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}

	.info-box {
		width: 92%;
		padding: 20upx 4%;
		background-color: #fff;
		margin-bottom: 20upx;
	}

	.slogan_dis {
		display: none;
	}

	.goods-info {
		.price {
			text-decoration: line-through;
			color: #848484;
			font-size: 30upx;
			font-weight: 600;
			
		}

		.slogan {
			color: #fe1d59;
			font-size: 24upx;
						border-bottom: solid 0.5px #ededed;
		}

		.title {
			font-size: 30upx;
			color:darkgray;
			border-bottom: solid 1px #ededed;
		}
	}

	.spec {
		.row {
			width: 100%;
			display: flex;
			align-items: center;
			margin: 0 0 30upx 0;

			.text {
				font-size: 24upx;
				color: #a2a2a2;
				margin-right: 20upx;
			}

			.content {
				font-size: 28upx;
				display: flex;
				flex-wrap: wrap;

				.serviceitem {
					margin-right: 10upx;
				}

				.sp {
					width: 100%;
					display: flex;

					view {
						background-color: #f6f6f6;
						padding: 5upx 10upx;
						color: #999;
						margin-right: 10upx;
						font-size: 20upx;
						border-radius: 5upx;

						&.on {
							border: solid 1upx #f47952;
							padding: 4upx 8upx;
						}
					}
				}
			}

			.arrow {
				position: absolute;
				right: 4%;

				.icon {
					color: #ccc;
				}
			}
		}
	}

	.comments {
		.row {
			width: 100%;
			height: 40upx;
			display: flex;
			align-items: center;
			margin: 0 0 30upx 0;

			.text {
				font-size: 30upx;
			}

			.arrow {
				font-size: 28upx;
				position: absolute;
				right: 4%;
				color: #17e6a1;

				.show {
					display: flex;
					align-items: center;

					.icon {
						color: #17e6a1;
					}
				}
			}
		}

		.comment {
			width: 100%;

			.user-info {
				width: 100%;
				height: 40upx;
				display: flex;
				align-items: center;

				.face {
					width: 40upx;
					height: 40upx;
					margin-right: 8upx;

					image {
						width: 40upx;
						height: 40upx;
						border-radius: 100%;
					}
				}

				.username {
					font-size: 24upx;
					color: #999;
				}
			}

			.content {
				margin-top: 10upx;
				font-size: 26upx;
			}
		}
	}

	.description {
		.title {
			width: 100%;
			height: 80upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: #999;
		}
	}

	.footer {
		position: fixed;
		bottom: 0upx;
		width: 92%;
		padding: 0 4%;
		height: 99upx;
		border-top: solid 1upx #eee;
		background-color: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.icons {
			display: flex;
			height: 80upx;
			margin-left: -4%;

			.box {
				width: 80upx;
				height: 80upx;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;

				.icon {
					font-size: 40upx;
					color: #828282;
				}

				.text {
					display: flex;
					justify-content: center;
					width: 100%;
					font-size: 22upx;
					color: #666;
				}
			}
		}

		.btn {
			height: 80upx;
			width: 90%;
			border-radius: 40upx;
			overflow: hidden;
			margin: 0 auto;

			.joinCart,
			.buy {
				height: 80upx;
				padding: 0 40upx;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28upx;
			}

			.joinCart {
				background-color: #f0b46c;
			}

			.buy {
				background-color: #f06c7a;
			}
		}
	}

	.popup {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 20;
		display: none;

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			position: fixed;
			z-index: 22;
			bottom: -70%;
			width: 92%;
			padding: 0 4%;
			height: 70%;
			border-radius: 20upx 20upx 0 0;
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;

			.content {
				width: 100%;
				padding: 20upx 0;
			}

			.btn {
				width: 100%;
				height: 100upx;

				.button {
					width: 100%;
					height: 80upx;
					border-radius: 40upx;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #f47952;
					font-size: 28upx;
				}
			}
		}

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		&.service {
			.row {
				margin: 30upx 0;

				.title {
					font-size: 30upx;
					margin: 10upx 0;
				}

				.description {
					font-size: 28upx;
					color: #999;
				}
			}
		}

		&.spec {
			.title {
				font-size: 30upx;
				margin: 30upx 0;
			}

			.sp {
				display: flex;

				view {
					font-size: 28upx;
					padding: 5upx 20upx;
					border-radius: 8upx;
					margin: 0 30upx 20upx 0;
					background-color: #f6f6f6;

					&.on {
						padding: 3upx 18upx;
						border: solid 1upx #f47925;
					}
				}
			}

			.length {
				margin-top: 30upx;
				border-top: solid 1upx #aaa;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 20upx;

				.text {
					font-size: 30upx;
				}

				.number {
					display: flex;
					justify-content: center;
					align-items: center;

					.input {
						width: 80upx;
						height: 60upx;
						margin: 0 10upx;
						background-color: #f3f3f3;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;

						input {
							width: 80upx;
							height: 60upx;
							display: flex;
							justify-content: center;
							align-items: center;
							text-align: center;
							font-size: 26upx;
						}
					}

					.sub,
					.add {
						width: 60upx;
						height: 60upx;
						background-color: #f3f3f3;
						border-radius: 5upx;

						.icon {
							font-size: 30upx;
							width: 60upx;
							height: 60upx;
							display: flex;
							justify-content: center;
							align-items: center;

						}
					}
				}
			}

		}
	}

	.share {
		display: none;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.15s linear both;
			}

			.layer {
				animation: showLayer 0.15s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.15s linear both;
			}

			.layer {
				animation: hideLayer 0.15s linear both;
			}
		}

		&.none {
			display: none;
		}

		.mask {
			background-color: rgba(0, 0, 0, .5);
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			z-index: 11;
		}

		.layer {
			width: 92%;
			position: fixed;
			z-index: 12;
			padding: 0 4%;
			top: 100%;
			background-color: rgba(255, 255, 255, 0.9);

			.list {
				width: 100%;
				display: flex;
				padding: 10upx 0 30upx 0;

				.box {
					width: 25%;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;

					image {
						width: 13.8vw;
						height: 13.8vw;
					}

					.title {
						margin-top: 10upx;
						display: flex;
						justify-content: center;
						width: 100%;
						font-size: 26upx;
					}
				}
			}

			.btn {
				width: 100%;
				height: 100upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28upx;
				border-top: solid 1upx #666666;
			}

			.h1 {
				width: 100%;
				height: 80upx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 34upx;
			}
		}
	}
</style>
