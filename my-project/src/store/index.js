import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let selectModule = ({
   actions:{
     getListAction(){
       axios.get('https://easy-mock.com/mock/5d22f083d5078958511f5cd4/example/mock/594f5d4b9adc231f3569be76/list/list').then((data)=>{
         console.log(data)
       }).catch((error)=>{
         console.log(error)
       })
     }
   }
})
//没放到modules模块的时候这样取值  this.$store.state.tite
//放到modules模块之后这样取值 this.$store.state.selectModule.title

//定义一个容器
let store = new Vuex.Store({
     state:{
       count:100
     },
     //getters类似computed计算属性  大于120不能加
     getters:{
        filterCount(state){
            return state.count >=120 ? 120 : state.count
        }
     },
     mutations:{
       // addIncrement(state){
       //   state.count +=1
       // },

       // dIncrement(state){
       //   state.count -=1
       // },
       //可以这么写
       addIncrement(state,payload){
         state.count +=payload.n
       },
       dIncrement(state,payload){
         state.count -=payload.de
       },
     },
     actions:{
       addAction({commit,dispatch}){ //用es6的结构赋值
           setTimeout(()=>{
             //改变状态 提交mutations
             commit('addIncrement', {n:5});
             dispatch("textAction",{test:'测试'});
             // context.commit('addIncrement', {n:5});
             // context.dispatch("textAction",{test:'测试'});  //执行完上面的Ajax之后再调用执行textAction
           },1000)
       },
       textAction(context,obj){
           console.log(obj)
       }
     },
     modules:{
       selectModule
     }
})

export default store
