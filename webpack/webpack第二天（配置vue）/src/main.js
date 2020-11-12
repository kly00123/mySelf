//1.使用commonjs的模块化规范
const {add,mul,jian} = require('./js/math')
console.log(add(10,20));
console.log(mul(10,20));
console.log(jian(10,20));
//2.使用ES6的模块化的规范
import {name,age,height} from "./js/info";
console.log(name,age,height);
//3.依赖css样式
require('./css/normal.css')
//4.使用vue进行开发
import Vue from 'vue' 
//1.通过 npm install vue --save安装vue配置文件，保存在node-modules里
//2.会在webpack包里 也就是node-modules里找到刚才安装的vue包
import App from './vue/App.vue'
new Vue({
    el:'#app',    //如果同时存在el和template,template会将el替换掉
    template:'<app/>',
    components:{
        App
    }

})
