<template>
    <div>
      <div>我是档案</div>
      <p>我是档案内容</p>
      <div>{{name}}</div>
  </div>
</template>
<script  type="module">
export default {
name:'Profile',
computed:{
  name(){
        return this.$route.query.name  //接受参数，通过$route下面的query接受，query是查询的意思
  }
}
}
</script>
<style>

</style>