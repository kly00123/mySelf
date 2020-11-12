export default {
    //异步操作在这里执行，比如说发生网络请求，向后端请求API
    //这里context意为上下文 payload是负载，意为传递过来带的数据
   nameChange(context,payload){
           return new Promise ((resolve,reject) =>{
            setTimeout(() => {
                context.commit('addAdress')      //context.commit的作用域只是action里。 而$store.commit是整个$store对象
                console.log('进入了Promise!')
                console.log(payload)
                resolve('111')    //通过dispatch对Promise的then进行拼接，因为dispatch可以指代整个promise对象
            })
            }, 1000);
   }
}