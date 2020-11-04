<template>
<div>
  <el-checkbox-group v-model="checkList" @change="aa">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
    </div>
</template>
<script>
 const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data () {
      return {
          checkList: ['复选框 A'],
 checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
        handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        console.log(this.checkedCities)
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      aa(){
          console.log(this.checkList)
      }
    },
  }
</script>