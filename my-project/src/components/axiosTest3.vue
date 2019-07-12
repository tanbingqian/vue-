<template>
    <div>axios</div>
</template>

<script>
    import axios from "axios"
    import queryString from  "queryString"
    let HTTP = axios.create({
      baseURL:'https://easy-mock.com/mock/5d22f083d5078958511f5cd4/example/',
      timeout:1000,
      params:{
        book:'123'
      },
      headers:{
        'custome-header':'miaov',
        'content-type':'application/x-www-form-urlencoded'
      },
      transformRequst:[function(data){
         console.log(data);
         data.age=30;
         // return data;
         return queryString.stringify(data);
      }],
      transformResponse:[function(data){
        console.log("transformResponse");
        console.log(data);
        return data;
      }]
    })
    export default {
        name: "axiosTest3",
        created(){
          HTTP.post('list-post-test',{
            miaow:'ketang',
            userName:'leo'
          }).then((response)=>{
            console.log(response.data)
          }).catch((error)=>{
            console.log(error)
          });
        }
    }
</script>

<style scoped>

</style>
