1.
 splice()//对数组进行操作。接受三个参数，从第几个开始插入，删除几个元素，插入什么内容
2. 
//filter中的回调函数有一个要求：必须返回一个布尔值
//为true时，返回原函数 为false时，函数内部会过滤掉这次n
filter()
const num=[10,20,30,50,110,220];
let newNum=num.filter(function(){
    return n<100 //n指代原数组内每一项
})
console.log(newNum);//[10,20,30,50]

3.
map() //操作数组内的所有值
const newNum=[10,20,30,50]
newNum.map(function(n){
   return n*2;//[20,40,60,100] //n指代原数组内每一项
})
4.
reduce()//对数组内的所有内容进行汇总，比如相乘，相加等等
//接受两个参数，参数一为前一个值（也就是下面列子中两个值相加的值） ，第二值为传入的对象
//return this.books.reduce(function(preValue,book){
//     return preValue + book.price*book.count 
// },0)
const newNum=[10,20,30,50]
newNum.reduce(function(preValue,n){
  return preValue + n;
},0)
//第一次 preValue 0 n 10
//第二次 preValue 10 n 20
//第三次 preValue 30 n 30
//第四次 preValue 60 n 50
//return 110
//上面三个函数可以这样写
const num=[10,20,30,50,110,220];
let total=num.filter(function(n){
    return n<100
}).map(function(n){
    return n*2
}).reduce(function(preValue,n){
    return preValue + n;
},0)    

还可以这样写 
let total=num.filter(n=>n<100).map(n=>n*2).reduce((preValue,n)=>preValue+n);

5.
parseInt()  //字符串转化为数字类型，整数
6.
parseFloat() //字符串转化为数字类型，保留小数点

