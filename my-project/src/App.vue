<template>
  <div id="app">
    <div class="nav">
      <ul>
        <!--动态设置路由-->
        <router-link :to="index" tag="li">
          <i></i>
          <span>home</span>
        </router-link>
        <!--对象形式-->
        <router-link :to="{path:'/views/document'}" tag="li" active-class="activeClass">
          <i></i>
          <span>document</span>
        </router-link>
        <router-link to="/views/about" tag="li">
          <i></i>
          <span>about</span>
        </router-link>
        <router-link to="/views/user" tag="li">
          <i></i>
          <span>user</span>
        </router-link>
      </ul>
    </div>
    当前路由下标
    {{$route.meta.index}}
    <transition :name="names">
      <router-view class=""/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
       index:'/views/home',  //动态绑定链接
       names:'left'  //设置动态left
    }
  },
  watch:{
    $route(to,from){
      console.log(to.meta.index);   //目标导航下标
      console.log(from.meta.index); //离开导航下标

      if(to.meta.index < from.meta.index){
          this.names='left'
      }else {
          this.names='right'
      }
    }
  }
}
</script>

<style>
  .center{
    text-align: center;
    font-size: 20px;
    left:0;
    position: absolute;
    width:100%;
    height:100%;
    top: 170px;
  }
  .is-active{
    background-color: #fff;
    color:#333;
  }
  .activeClass{
    background-color:#b3b1b1;
    color:#fff;
  }
  /*鼠标移入移出效果*/
  .v-enter{
    opacity: 0;
  }
  .v-enter-to{
    opacity: 1;
  }
  .v-enter-active{
    transition: 1s;
  }
  /*往左运动*/
  .left-enter{
    transform: translateX(100%);
  }

  .left-enter-active,.left-leave-active{
    transition: 1s;
  }

  .left-leave-to{
    transform: translateX(-100%);
  }
  /*往右运动*/
  .right-enter{
    transform: translateX(-100%);
  }
  .right-enter-active,.right-leave-active{
    transition: 1s;
  }

  .right-leave-to{
    transform: translateX(100%);
  }
</style>
