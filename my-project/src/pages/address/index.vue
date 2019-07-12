<template>
  <div class="address">
      <div class="content">
          <div class="title">选择区域</div>
          <div class="con">
              <div v-if="areas.length" class="checbox-item" v-for="(item,index) in areas" :key="item.cityId">
                  <input type="checkbox" :checked="item.checked" :value="item.cityId" @click="handleCheck(index)">
                  <span @click="handleClick(item)">{{item.cityName}}</span>
              </div>
              <div v-if="!areas.length">当前区域下为空</div>
          </div>
          <div class="button"><button>取消</button><button @click="handleSubmit()">确定</button></div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['regions'],
  computed:{
      areas(){
          return this.regions.map(item => ({
              ...item,
              checked:false,
          }))
      }
  },
  methods: {
    handleClick(item) {
      this.$emit('onClick',item);
    },
    handleCheck(index){
        this.regions[index].checked = !this.regions[index].checked
    },
    handleSubmit(){
        const results = this.regions.reduce((arr,item) => {
            if(item.checked){
                arr =  arr.concat([item.cityId])
            }
            return arr
        },[])
        this.$emit('onSubmit',results);
    }
  },
};
</script>

<style lang="less">
    .address{
        background: rgba(0, 0, 0, .3);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 999;
        .content{
            padding: 20px;
            width: 600px;
            height: 360px;
            background-color: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            .title{
                padding: 10px 0;
            }
        }
        .checbox-item{
            display: inline-block;
            margin: 10px 10px;
            span{
                cursor: pointer;
            }
        }
    }
</style>
