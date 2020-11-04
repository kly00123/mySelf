<template>
      <div>
    <Test></Test>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮1</button>
    <h2>{{name}}</h2>
    </div>
</template>

<script>
import Test from './Test.vue'
export default {
    data(){
        return {
            message:'hello',
            name:'kly'
        }
    },
    components: {
      Test  
    },
    methods:{
        btnClick(){

        }
    }
}
</script>

<style>

</style>