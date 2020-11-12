//使用commonjs的模块化规范
const {add,mul,jian} = require('./js/math')
console.log(add(10,20));
console.log(mul(10,20));
console.log(jian(10,20));
//使用ES6的模块化的规范
import {name,age,height} from "./js/info";
console.log(name,age,height);
//依赖css样式
require('./css/normal.css')