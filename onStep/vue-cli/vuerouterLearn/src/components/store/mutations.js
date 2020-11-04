export default {
    //定义方法（修改state的属性一定是通过mutations，不能通过其他）
    //同步操作在这里执行，注意如果这里有异步请求的话，Devtools不会保存异步的状态，只会保存同步的状态
    //Devtools插件可以记录每一次state改变状态
    add(state){  //这里的state就是上面的state传进来进行调用
        state.counter++;
    },
    incre(state){
        state.counter--;
    },
    addTen(state,payload){  //这里payload接受的是整个对象
        console.log(payload);
       // state.counter +=count
       state.counter +=payload.count
    },
    addClass(state,students){ //传入一个对象
        state.student.push(students)
    },
    addAdress(state){
        state.info.name = 'kly'
        console.log("进入了addAdress")
        //Vue.set(state.info,'adress','洛杉矶') //通过Vue.set的方式向响应式系统里添加属性。只能这样添加 其他添加的不为响应式，就是数据发生了改变 页面数据内容没有发生改变
        //Vue.delete(state.info,'age') //删除对应属性
    }   
}