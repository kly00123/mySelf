import Vue from 'vue'
import App from './App'
import basics from './pages/mall/basic/home.vue'
Vue.component('basics',basics)

import components from './pages/mall/basic/home2.vue'
Vue.component('components',components)

import car from './pages/mall/basic/car.vue'
Vue.component('car',car)

import plugin from './pages/mall/basic/home3.vue'
Vue.component('plugin',plugin)

import $app from "./common/common.js";
import pageLoading from "./components/pageloading.vue";
Vue.component("page-loading",pageLoading);
import savefile from './components/potato-saveFile.vue'
Vue.component('savefile',savefile)
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);



Vue.config.productionTip = false
//Vue.prototype.ApiGateWay = 'http://47.114.42.190:10306/'
//Vue.prototype.ApiGateWay = 'http://47.114.35.82:10306/'
 // Vue.prototype.ApiGateWay = 'http://localhost:10306/'
 //Vue.prototype.ApiGateWay = 'http://47.114.35.82:10306/'
 Vue.prototype.ApiGateWay = 'http://localhost:10306'
  Vue.prototype.ApiGateWay = 'http://www.promen.tech'
// Vue.prototype.ApiGateWay = 'http://api.great-info.tech'
Vue.prototype.appId = '0f11ae8e-e523-4644-bde0-2d633f5512bc';
// Vue.prototype.appId = 'db6d4271-b3e6-4f94-a95c-e642be6c5c34';
Vue.prototype.ImgServer = "https://cdridge.oss-cn-shanghai.aliyuncs.com"



App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
