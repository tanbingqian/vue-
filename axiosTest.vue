<template>
    <div>dad</div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "axiosTest",
        mounted(){

        },
        created(){
            //方式1
            // axios({
            //   method:'get',
            //   url:'https://www.easy-mock.com/mock/5d22f083d5078958511f5cd4/example/mock/594f5d4b9adc231f3569be76/list/list'
            // }).then((response)=>{
            //   console.log(response)
            //
            // }).catch((error)=>{
            //   console.log(error)
            // })

            //方式2
            // axios.get('https://www.easy-mock.com/mock/5d22f083d5078958511f5cd4/example/mock/594f5d4b9adc231f3569be76/list/list').then((response)=>{
            //    console.log(response)
            // }).catch((error)=>{
            //     console.log(error)
            //   })

          //Get方式传参数
          axios.get('https://www.easy-mock.com/mock/5d22f083d5078958511f5cd4/example/mock/594f5d4b9adc231f3569be76/list/list',{params:{
              abc:'miaov',
              miaow:'ketang'
          }}).then((response)=>{
            console.log(response)
          }).catch((error)=>{
            console.log(error)
          })

        }
    }
</script>

<style scoped>

</style>
