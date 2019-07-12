<template>
    <div class="lol">
      <div class="form_line">
        <label>用户名:</label>
        <input v-model="info.name" placeholder="请输入用户名" />
      </div>
      <div class="form_line">
        <label>密码:</label>
        <input v-model="info.passw" placeholder="请输入密码" @keyup.enter="login"/>
      </div>
      <button class="login-btn" :class="{active:active}" @click="login">确认</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
           return{
             info:{
               name:'',
               passw:''
             }
           }
        },
        methods:{
          login(){
            alert("d")
          }
        },
        computed:{
          active(){
             if(!this.common.replace(this.info.passw)){
                return false
             }
                return true
          }
        }
    }
</script>

<style scoped>
  .lol .login-btn{
    height: 40px;
    line-height: 40px;
    background-color: #dbdbdb;
    margin-top: 1.2rem;
    border-radius: .066667rem;
    width: 100%;
    border: none;
  }
  .lol .active{
    background: #82baaf;
  }
</style>
