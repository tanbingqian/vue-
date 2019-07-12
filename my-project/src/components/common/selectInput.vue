<template>
    <div>
       <input readonly="readonly" class="keyWord" @click="showListHandle" :value="title"/>
       <input type="button" value="GO" class="go"/>
    </div>
</template>

<script>
    export default {
        name: "selectInput",
        props:['isShow','title'],
        data(){
          return{

          }
        },
       computed:{
          initShow(){
             return this.isShow
          }
       },
       methods:{
         showListHandle(){
             this.$emit('update:isShow',!this.initShow);
         }
       }
    }
</script>

<style scoped>
  .keyWord{
    position: relative;
    width:300px;
    height: 40px;
    padding-left:20px;
  }
  .go{
    width:60px;
    height:45px;
    background-color: #ccc;
    border:none;
    color:#fff;
  }
</style>
