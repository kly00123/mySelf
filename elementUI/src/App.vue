<template>
  <div id="app">
  <div class="top">  
    <router-link to="/bujurongqi">布局容器</router-link>
    <router-link to="/radio">单选按钮</router-link>
    <router-link to="/checkbox">多选框</router-link>
    <router-link to="/input">输入</router-link>
  </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
.top{
  padding: 10px;
}
</style>
