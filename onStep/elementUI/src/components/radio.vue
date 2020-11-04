<template>
<div>
    <div>
        <el-radio @change="aa" v-model="label" label="男">男</el-radio>
        <el-radio @change="aa" v-model="label"  label="女">女</el-radio>
    </div>
    <div>
    <el-radio-group v-model="radio1" fill="#CCCCCC" text-color="pink" @change="bb">
      <el-radio-button label="上海" disabled></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州" ></el-radio-button>
      <el-radio-button label="深圳" ></el-radio-button>
    </el-radio-group>
    </div>
    <div>
    <div style="margin-top: 20px">
    <el-radio v-model="radio2" label="1" border size="medium">备选项1</el-radio>
    <el-radio v-model="radio2" label="2" border size="medium">备选项2</el-radio>
    <el-radio v-model="radio2" label="3" border size="medium">备选项2</el-radio>
  </div>
    </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        label:'男',
        label1:'男2',
        radio2:'2',
        radio1: '深圳',

      };
    },
    methods: {
        aa(){
            //属性label是radio里的value
            console.log(this.label);
        },
        bb(){
            console.log(this.radio1)
        }
    },
  }
</script>