import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//1.安装
Vue.use(Vuex)
//2.创建对象

//单一状态树，单一数据源 Single Source Of Truth 意思尽量不要创建第二个store  
const store = new Vuex.Store({  //注意这里的Vuex 和Store首字母都是大写
    state:{ 
   counter:1000,
   student:[
       {name:'kly',age:18},
       {name:'111',age:25},
       {name:'222',age:30},
       {name:'333',age:35}
    ],
    info:{
name:'klu',
age:18,
    },
   name:'kly'
    },
    mutations,
    actions,
    getters,
    modules: {
        //划分模块，针对不同的模块对里面的相关数据进行保存
       // 在这个模块里写的模块，相当于还是会把各个部分对应到上面总的比如说state，mutations这些里面，只是state调用的时候，比如是a模块，那么调用的时候{{$store.state.a.counter}}
       //getters可以接受三个参数（state,getter,rootState），这里rootState就是$store下面的各种属性，比如拼接字符串可以 return getters.fullname2(这个是模块里的getters) +rootState.counter（这个是$store下面state的counter）
    }
})

//导出对象
export default store

//Vuex状态管理图流程
 //   state -> Vue -component -> Actions -> mutations(Devtools) -> state