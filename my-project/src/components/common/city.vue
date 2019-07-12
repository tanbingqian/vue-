<template>
  <div>
    <div>
      我是城市组件-----{{logo}}
    </div>
    <!-- 定义一个子组件传值的方法 -->
    <input type="button" value="点击触发" @click="childClick">
  </div>

</template>

<script>
    export default {
        name: "city",
        data(){
          return{
            childValue:'子组件传过去的'
          }
        },
        props:['logo'],
        methods:{
          childClick () {
            // childByValue是在父组件on监听的方法
            // 第二个参数this.childValue是需要传的值
            this.$emit('childByValue', this.childValue)
          }
        }
    }
</script>

<style scoped>

</style>
