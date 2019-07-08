<template>
  <div style="padding-left:40px;">
    <h2>建议加法计算器</h2>
    <div>
      <input type="button" value="-" @click="dHeadle({de:5})"/>
      <span>{{count}}</span>
      <input type="button" value="+" @click="addHeadle"/>
      <p>{{num2}}</p>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
  export default {
    name: "increment2",
    /*computed:mapState({
        // num:state => state.count  //方法一

        // num:'count'               //方法二

        // num(state){                  //方法三
        //    return state.count +100;
        // }
        // count:'count'                  //方法四
    }),*/

    // computed:mapState(['count']),    //方法五
    mounted(){
      this.$store.dispatch("getListAction")
    },
    computed:{
         abc(){
           return 123
         },
         ...mapGetters({
           num2:'filterCount'
         }),
         ...mapState(['count'])  //...表示拓展运算符
    },
    methods:{
       ...mapActions({
         addHeadle:'addAction'
       }),
      ...mapMutations({
        dHeadle:'dIncrement'
      })
      // dHeadle(){
      //    this.$store.commit("dIncrement",{de:3});
      // }
    }
  }
</script>

<style scoped>
  input{
    width:50px;
    height:30px;
  }
</style>
