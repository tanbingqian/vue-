import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

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
     }
})

export default store
