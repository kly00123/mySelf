<template>
    <div>
      <div>我是用户</div>
      <p>我是用户内容</p>
      <div>{{userId}}</div>
      <button @click="clickMe">点我</button>
  </div>
</template>
<script type="module">
export default {
name:'User',
methods: {
    clickMe(){
       this.$router.replace('/home').catch(err=>err)
    }
},
computed: {
    userId(){
       return this.$route.params.userId
    }
}
}
</script>

<style>

</style>