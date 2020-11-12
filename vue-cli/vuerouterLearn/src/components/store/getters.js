export default {
    //类似于机算属性computed
    more(state){
        //   return state.student.filter(s=>{
        //     return s.age > 20
            return state.student.filter(s=>s.age>20)  //注意上面箭头函数返回也要写return 只有一行可以简写
    },
    moreLength(state,getters){  //注意 这里所有函数只能接受两个参数，一个是state，一个是getters本身
          return getters.more.length
    },
    getMore(state){
        let b=[]
      return function(age){
            return state.student.filter(s=>s.age>age)    //如果要往里面传递参数就需要构建函数通过函数返回值实现
        //     console.log(a);
        //     for (let i of a)
        //     {
        //       b.push(i.name)
        //     }  
        //    return b.toString()
          
        }
    }
}