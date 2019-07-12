<template>
  <ui-address :regions="regions" @onClick="handleQueryChild" @onSubmit="handleSubmit"/>
</template>
<script>
import Address from './address/index.vue'
export default {
  components:{
    UiAddress:Address,
  },
  data() {
    return {
      areas:[
        { cityId: 1,cityName:'北京', parentCityId:0},
        { cityId: 2,cityName:'上海', parentCityId:0},
        { cityId: 3,cityName:'广东', parentCityId:0},
        { cityId: 4,cityName:'深圳', parentCityId:3},
        { cityId: 5,cityName:'广州', parentCityId:3},
        { cityId: 6,cityName:'东莞', parentCityId:3},
      ],
      regions: [
        { cityId: 1,cityName:'北京', parentCityId:0},
        { cityId: 2,cityName:'上海', parentCityId:0},
        { cityId: 3,cityName:'广东', parentCityId:0},
      ]
    };
  },
  methods:{
    handleQueryChild({ cityId }){
      this.regions = this.areas.filter(item => item.parentCityId === cityId)
    },
    handleSubmit(results){
      console.log(results)
    }
  }
};
</script>
