<template>
    <div>
      <ul>
          <li>新闻1</li>
          <li>新闻2</li>
          <li>新闻3</li>
          <li>新闻4</li>
      </ul>
      <div>
        <router-link to="/about/new/newMeassge">公告</router-link>
        <router-view></router-view>
      </div>
  </div>
</template>
<script type="module">
import {request} from '../network/request.js'
export default {
name:'New',
methods: {
}
}
</script>

<style>

</style>