# vuerrouterlearn

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
#0.前端发送请求并不是直接请求数据，而是先将html+css+js代码发送给静态资源服务器（类似于nginx）进行处理，然后请求数据发送到提供API接口的服务器（apache）
#1.后端渲染
后端路由处理的是URL和页面之间的映射关系
浏览器请求一个URL发送到服务器，服务器通过正则对该URL进行匹配，然后交给一个Controller处理。一种技术（PHP或jsp(java server page)等），通过HTML+css+java，java代码作用是将数据从数据库中读取，并动态的渲染的页面上，将页面在后端写好，发送给客户端进行显示。完成了一个IO操作

#2.前端渲染（前后端分离）
后端只负责提供数据，不负责任何页面的内容
浏览器中显示的网页中大部分内容，都是由前端写的JS代码在浏览器中执行，最终渲染出来的网页
#3.前端路由（SPA页面，单页面富应用。single page web application,整个网页只有一个HTML页面） SPA最主要的特点就是前后端分离的基础上加了一层前端路由
用于映射浏览器URL和大的JS文件里面渲染哪一部分进行匹配，前端路由管理这些映射关系
一个网页只有一个html一个css一个js，静态资源服务器请求，浏览器请求另外的页面时，会从JS代码中找到对应的映射关系进行渲染页面，一个URL对应一个页面（组件）
前端路由的核心：改变URL，但是页面不进行整体刷新（抽取一部分JS代码对页面进行渲染）


-----------------------------------------------
路由的两种模式（修改URL但是页面不刷新）
------ 当前URL为http://localhost:8080/#/
1.hash location下的一个属性 location.hash //  location.hash = "aaa"; 地址改为 http://localhost:8080/#/aaa
2.history的各种属性(引入栈的概念 先进后出)  //
 2.1 history.pushState 向栈里面填充路由 （可回退，因为会不停的向栈里填充路由）//接受三个参数 history.pushState({},'','aaa') 地址改为 http://localhost:8080/#/aaa
 2.2 history.replaceState 相当于替换栈顶（replace替换的意思。不可回退，因为栈里始终只有一个）
 2.3 history.go 搭配pushState使用（go(1)就是前进一个 go(-1)就是后退一个）
 2.4 history.forward() 搭配pushState使用 forward前进的意思 前进一个
 2.5 hisrory.back() 搭配pushState使用 后退一个

 --------------------------------------------------
 路由配置
 1.安装 npm install vue-router --save  (因为运行时依旧会依赖vue-router 故用save)
 2.因为vue-router是一个插件，所以可以用Vue.use()来安装路由功能
  2.1 导入路由对象，并调用Vue.use(VueRouter)
  2.2 创建路由实例，并且传入路由映射配置
  2.3 在Vue实例中挂载创建的路由实例

  ------------------------------------------------
  Vue-router的步骤：
  1.创建路由组件
  export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})
  2.配置路由映射：组件和路径的映射关系
  3.使用路由：router-link绑定路由 router-view显示组件内容

  ////$route为当前router跳转对象里面可以获取name、path、query、params等

$router为VueRouter实例，想要导航到不同URL，则使用$router.push方法
$router为VueRouter实例,下面有一个routes属性，属性里有许多的路由，而处于活跃的路由就是$route
这两个属性都继承于自于Vue的原型 也就是Vue 相当于是Vue.propotype.$router和Vue.propotype.$route


-----------------------------------------------------------
link-router属性
tag="xxx" 表示标签类型 默认是a标签 可以设置为button li等等标签
replace 只需要写一个replace 表示replaceStafe
linkActiveClass:"active" 在路由实例添加active 比如点击一个标签让它变红

-----------------------------------------------------------
动态路由的绑定
1.通过v-bind对 <router-link :to="'/user/'+userId">里的to进行动态绑定 
2.userId要在App.vue的data里注册
3.如果想在拿到活跃页面的路由信息。可以通过$route属性

-----------------------------------------------------------
URL：
协议：//主机：端口号/路径？查询#hash
scheme://host:port/path?query#fragment
