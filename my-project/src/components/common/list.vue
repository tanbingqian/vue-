<template>
    <ul class="list">
      <li v-for="item in data" @click="getTitleHeadle(item.title)">{{item.title}}</li>
    </ul>
</template>

<script>
    export default {
        name: "list",
        props:['data'],
        mounted() {
          console.log(this.data)
        },
        methods:{
          getTitleHeadle(title){
              this.$emit('changeTitle',title)
          }
        }
    }
</script>

<style scoped>
.list li{
  list-style: none;
  list-style: none;
  margin-top:10px;
  margin-bottom: 10px;
  padding-left:20px;
  text-align: left;
  line-height: 30px;
  height:30px;
}
.list li:hover{
  background-color: #2b2e41;
  color:#fff;
}
</style>
