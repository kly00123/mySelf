import Vue from 'vue'
import App from './App'
import router from './router'
import store from './components/store/index'
import axios from 'axios'
import Axios from 'axios'
import {request} from './network/request'
import {req} from './network/request'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router:router,
  render: h => h(App)
})

request({
  url:'/home/multidata'
}).then(res =>{
  console.log(res);
}).catch(err =>{
  console.log(err);
})

// req({
//   url:'/home/multidata'
// })
//这里用到导航守卫，跳转页面时更改title
//这里beforeEach是个前置钩子，也叫回调,hook
router.beforeEach((to, from, next) => {
  //从from路由跳转到to路由
  document.title = to.meta.title
  //document.title = to.matched[0].meta.title
  console.log(to);
  next()
}) 
