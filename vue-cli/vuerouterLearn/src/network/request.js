//--------------------------------------------------
//封装第三方软件的好处在于只用修改封装里的东西 用自己写的函数引入页面里的话，后期如果第三方软件出了问题需要引入其他第三方软件的话 只需要改封装里的函数即可，而不是每个页面引入 到时候每个页面都需要更改 太麻烦了。
import axios from 'axios'

export function request(config){
    //1.创建axios实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000/',
        timeout:5000
    })

    //axios拦截器（这个过程在最后调用then之前。意思响应拦截器的数据会最终返回到then的res里）
    instance.interceptors.request.use(config =>{
        //请求拦截器的作用：
        //1.config中一些信息不符合服务器要求，比如params里的参数 
        //2.每次发送网络请求时，希望有一个转动图标 可以在这里添加，然后在response里的return里移除样式
        //3.某些网络请求（比如登录需要携带token），必须携带一些特殊信息
        console.log(config);
        return config //这里必须return 不然数据流就会卡在这里
    }),err =>{
        console.log(err);
    }
   
    instance.interceptors.response.use(res =>{
        //相应拦截器的作用：
        //1.对返回的数据进行处理
        return res.data  //必须return
    }),err =>{
        console.log(err);
    }

   // return Promise 因为axios.create本身就是一个Promise.所以这里其实不用写Promise 直接return出去在main.js里接受就行
     return instance(config)  //返回的就是一个Promise

}

export function req(config){   //这种方法就显得多余。因为axios.create本身就是一个Promise，就是上面的方法
     new Promise((resolve,reject) =>{
        const instance = axios.create({
            baseURL:'http://123.207.32.32:8000/',
            timeout:5000,
        })
       instance(config)
        .then(res =>{
            console.log(res);
        }).catch(err =>{
            console.log(err);
        })
     })
}       