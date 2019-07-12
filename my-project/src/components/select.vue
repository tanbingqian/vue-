<template>
    <div style="padding-left:30px">
      <select-input :is-show.sync="listShow" :title="title"></select-input>
      <list v-show="listShow" :data="listData" @changeTitle="titleHandle"></list>
    </div>
</template>

<script>
    import SelectInput from '@/components/common/selectInput'
    import List from '@/components/common/list'
    let listData = [
      {
        title:'javascript'
      },
      {
        title:'php'
      },
      {
        title:'vue'
      },
      {
        title:'nodejs'
      },
      {
        title:'jquery'
      },
      {
        title:'react'
      },
    ]
    export default {
        name: "select",
        data(){
            return{
              listShow:false,
              listData:listData,
              title:''
            }
        },
        components:{
           SelectInput,
           List
        },
        methods:{
          titleHandle(title){
            console.log(title)
            this.title=title
          }
        }
    }
</script>

<style scoped>
   ul{
     background-color: #f6f6f6;
     width: 200px;
     position: absolute;
   }
</style>
