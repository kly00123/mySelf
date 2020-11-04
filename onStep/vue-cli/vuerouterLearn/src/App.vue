<template>
  <div id="app">
    <router-link to="/home" tag="button" replace >首页</router-link>
    <!-- <router-link to="/about" tag="button" replace>关于</router-link> -->
    <!-- <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link> -->
    <!-- 路由传参通过动态绑定to,后面跟的是一个对象，-->
    <router-link :to="{path:'/profile',query:{name:'kly',age:'25',height:'1.88'}}" tag="button" replace>档案</router-link>
    <!-- <button @click="goHome">首页</button> -->
    <button @click="goAbout">关于</button> 
    <button @click="goUser">用户</button> 
    <keep-alive>
<router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="module">
export default {
  name: 'App',
  data(){
    return{
userId:'kly',
path:'/new/newMessage'
    }
},
created () {
         document.title= '首页'
},
  methods: {
    goHome(){
     this.$router.replace('/home').catch(err=>err)  //每个Vue组件里都有$router属性不用注册。这里用代码实现跳转
     console.log(this.$route);
     console.log(this.$router);
    },
    goAbout(){    //通过函数跳转和传值。
      // this.$router.push({
      //   path:'/about',
      //   query:{
      //     name:'kly',
      //     age:'18'
      //   }
      // })
       this.$router.replace('/about').catch(err=>err)
    },
    goUser(){
      this.$router.replace('/user/' + this.userId).catch(err=>err) //通过函数传递参数（params）
    },
  },
  activated () {
    
  },
  deactivated () {
    
  },
  beforeDestroy () {
    this.path = this.$route.path
  }
}
</script>

<style>
.active{
  color:#f00
}
</style>
