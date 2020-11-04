import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')  //懒加载写法，意思为调用的时候再去加载
const User = () => import('../components/User.vue')
const New = () => import('../components/New.vue')
const newMessage = () => import('../components/newMessage.vue')
const Profile = () => import('../components/Profile.vue')
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'
//1.任何Vue的插件，都得通过Vue.use(插件名字)来安装插件，所以有上面的import Router from 'vue-router' ，而Vue.use基于Vue所以import Vue from 'vue'
Vue.use(Router)

//2.创建Router对象
export default new Router({
  //配置路由和组件映射关系
  routes: [
    {
path:'',
redirect:'/home'  //重定向，设置默认首页
    },
    {
      path: '/home',
      component: Home,
      meta: {title:'首页' },  //meta:元素据 描述数据的数据
    },
    {
      path: '/about',
      component: About,
      meta: {title:'关于' },
      children:[   //路由嵌套 增加children属性
        {
          path:'new', //注意这里的path没有/
          component:New,
          meta: {title:'新闻' },
          children:[{       
              path:'newMeassge',
              component:newMessage
          }]
        },
        {
          path:'newMessage', //注意这里的path没有/
          component:newMessage,
          meta: {title:'新闻详情' },
        }
      ]
    },
    {
      path: '/user/:userId', //动态路由绑定
      component: User,
      meta: {title:'用户' },
    },
    {
      path: '/profile', //动态路由绑定
      component: Profile,
      meta: {title:'档案' },
    }
  ],
  mode:'history',  //默认是hash值，会在路径后增加# 
  linkActiveClass:"active"
})


// const routes =[    {
//   path: '/',
//   name: 'HelloWorld',
//   component: HelloWorld
// }]
// const router = new VueRouter({
//   routes,
// })
//3.将routers对象传到Vue实例中
// export default router