<template>
    <div>
      <h1>我是user{{name}}</h1>
      <div>
        <div class="user-info">
          <router-link v-for="(item,index) in userList" :key="index" :to="{path:'/views/user/'+item.tip+'/'+item.id,query:{info:'follow'}}">
            {{item.userName}}
          </router-link>
        </div>

        <div v-if="userInfo.userName">
          <p>姓名：{{userInfo.userName}}</p>
          <p>性别：{{userInfo.sex}}</p>
          <p>职位：{{userInfo.hobby}}</p>
        </div>
        <div v-if="userInfo.userName" class="user-list">
           <!--<router-link exact to="?info=follow">他的关注</router-link>-->
           <!--<router-link exact to="?info=share">他的分享</router-link>-->
            <router-link exact :to="{path:'', query:{info:'follow'}}">他的关注</router-link>
            <router-link exact :to="{path:'', query:{info:'share'}}">他的分享</router-link>
            <div>
              {{$route.query}}
            </div>
        </div>
        <!-- 引入子组件 定义一个on的方法监听子组件的状态-->
        <Citys :logo="logoMsg" v-on:childByValue="childByValue"></Citys>
      </div>
    </div>
</template>

<script>
  import Citys from '@/components/common/city'
  let data=[
    {
      id:1,
      tip:'vip',
      userName:'leo1',
      sex:'男',
      hobby:'写代码'
    },
    {
      id:2,
      tip:'vip2',
      userName:'leo2',
      sex:'女',
      hobby:'UI设计师（designer）'
    },
    {
      id:3,
      tip:'conmom',
      userName:'leo3',
      sex:'男',
      hobby:'python架构师'
    }
  ]
  export default {
      name: "user",
      data(){
        return{
          userList:data,
          userInfo:{},
          logoMsg:'我是父组件传过来的值',
          name:''
        }
      },
      watch:{
        //监听
        $route(){
          console.log("dd",this.$route.params.userId);
          //路径发生变化，$route会重新赋值，监控这个属性，会执行这个函数
          this.goUser();
        }
      },
      created(){
          //渲染这个组件会调用一次这个生命周期函数
          //复用这个组件，这个函数不会再次被调用
          //地址一旦发生变化，$route会生成一个路由信息对象
          this.goUser();
      },
      methods:{
          goUser(){
            let id= this.$route.params.userId;
            if( id ){
              this.userInfo = this.userList.filter((tmp)=>{
                return tmp.id == id;
              })[0]
            }else {
              this.userInfo = {}
            }
          },

          childByValue: function (childValue) {
            // childValue就是子组件传过来的值
            this.name = childValue
          }
      },
      components:{
        Citys
      }
  }
</script>

<style scoped>
  .user-info{
    margin-top:30px;
    margin-bottom: 20px;
  }
  .user-info a{
    padding:5px 10px;
    background-color: #ccc;
    color:#000;
  }
  .user-info a.is-active{
    color:#fff;
    padding:5px 10px;
    background-color: green;
  }
  .user-list{
    margin-top:30px;
  }
  .user-list.is-active{
    color:#fff;
    padding:5px 10px;
    background-color: green;
  }
</style>
