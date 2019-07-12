<template>
    <div>
      dda
    </div>
</template>

<script>
    import axios from 'axios'
    //定义一个是实列化对象
    let HTTP = axios.create({
       baseURL:'https://easy-mock.com/mock/5d22f083d5078958511f5cd4/example/mock/594f5d4b9adc231f3569be76/',
       timeout:1000,   //1表示1毫秒 设置1毫秒会显示超时
       responseType:'json', //设置对JSON数据修改成对象形式
       params:{
         book:"123"
       },
       headers:{
           'custome-header':'miaov'
       },
    })
    export default {
        name: "axiosTest2",
        data(){
          return{

          }
        },
        created(){
          HTTP.get('list/list').then((response)=>{
            console.log(response)
          }).catch((error)=>{
            console.log(error);
          });
        }
    }
</script>

<style scoped>

</style>
