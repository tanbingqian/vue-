<template>
  <div>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div>
      <div>{{message}}</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "search",
        props: {
          message: String  //定义传值的类型<br>    }
        },
        data(){
            return{
              options: [{
                value: '选项1',
                label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎'
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭'
              }],
              value: ''
            }
        }
    }
</script>

<style scoped>

</style>
