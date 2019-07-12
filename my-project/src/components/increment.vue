<template>
    <div style="padding-left:40px;">
      <h2>建议加法计算器</h2>
      <div>
        <input type="button" value="-" @click="dHeadle"/>
        <span>{{num}}</span>
        <input type="button" value="+" @click="addHeadle"/>
        <!--测试大于120不能加-->
        <p>{{num2}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "increment",
        computed:{
           num(){
             return this.$store.state.count
           },
           //大于120就不能加了
           num2(){
             return this.$store.getters.filterCount
           }
        },
        methods:{
          addHeadle(){
             //改变状态，提交metations addIncrement
             //  this.$store.commit('addIncrement')

             //也可以提交名字和后面的参数
             // this.$store.commit('addIncrement',{
             //   n:5
             // })

            //异步请求的时候,触发一个actions
            this.$store.dispatch("addAction")
          },
          //减
          dHeadle(){
            // this.$store.commit('dIncrement')
            //也可以是提交点击的类型(type:'dIncrement')和和传过去的对象(de:10)
            this.$store.commit({
              type:'dIncrement',
              de:10
            })
          }
        }
    }
</script>

<style scoped>
 input{
   width:50px;
   height:30px;
 }
</style>
