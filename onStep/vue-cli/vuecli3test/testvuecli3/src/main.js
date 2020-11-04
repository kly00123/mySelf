import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),   //相当于 render:function(createElement){return createElement(App)}
}).$mount('#app')

//template到真实DOM的过程 runtime-compiler
//1.template->2.ast(abstract syntax tree 抽象语法树) ->3.render函数 ->4.render函数形成vdom(virtual dom虚拟DOM) ->UI(真实DOM)

//runtime-only (性能更高，代码量更少)
//render ->vdom ->UI  //这里的template是通过vue-template-compiler转化到render函数渲染

//runtime-only：将template在打包的时候，就已经编译为render函数(不需要template)
　//　runtime-compiler：在运行的时候才去编译template(需要template)