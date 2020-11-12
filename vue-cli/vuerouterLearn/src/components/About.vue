<template>
  <div>
      <div>我是关于</div>
      <p>我是关于内容</p>
      <h2>---------------这里是State--------------</h2>
       <h2>{{$store.state.counter}}</h2>
       <button @click="addtion">+</button>
       <button @click="incret">-</button>
       <button @click='addfive(5)'>+5</button>
       <button @click="addStudent">添加学生</button>
        <div>{{$store.state.info}}</div>
       <button @click="addAdress">添加地址</button>
       <h2>---------------这里是getters--------------</h2>
       <div>{{$store.getters.more}}</div>
       <div>{{$store.getters.moreLength}}</div>
      <div>{{$store.getters.getMore(25)}}</div>
       <h2>---------------这里是路由--------------</h2>
      <router-link to="/about/new">新闻</router-link>
      <router-link to="/about/newMessage">公告</router-link>
      <keep-alive>
 <router-view></router-view>
      </keep-alive>
  </div>
</template>
<script>
</script>>
<script type="module">
export default {
name:'About',
data () {
  return {
    path:''
  }
},
methods: {
  addtion(){
    this.$store.commit('add')  //这里拿到Vuex里的共享state 通过$store.commit('定义的函数')获取

  },
  incret(){
    this.$store.commit('incre')
  },
  addfive(count){
   // this.$store.commit(count)
    this.$store.commit({  //这种写法相当于把commit后面的东西作为对象传了过去
      type:'addTen',
      count
    })
  },
  addStudent(){
   const students={name:'444',age:22}
   this.$store.commit('addClass',students)
  },
  addAdress(){
     this.$store.dispatch('nameChange','我是携带的信息').then((res)=>{ //.dispatch推送一个action。Action提交的是mutation，而不是直接变更状态，可以包含任意的异步操作。
       console.log('我是then!')
       console.log(res)
     })
  }
},
beforeCreate () {
  console.log('111')
},
created () {

},
activated () {
 this.$router.replace(this.path).catch(err=>err); //页面处于活跃时当前状态，可以设置默认点击 加入catch防止报错
},

//路由离开前记录当前路由状态，点回去时将path传回，达到keep-alive效果
beforeRouteLeave(to,from,next){
  console.log(this.$route.path);
  this.path = this.$route.path
  next()
}
}
</script>

<style>

</style>