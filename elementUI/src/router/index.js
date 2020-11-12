import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/bujurongqi',
      component:()=>import('../components/布局容器')
    },
    {
      path:'/radio',
      component:()=>import('../components/radio')
    },
    {
      path:'/checkbox',
      component:()=>import('../components/checkbox')
    },
    {
      path:'/input',
      component:()=>import('../components/input')
    },
  ]
})
