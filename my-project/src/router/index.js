import Vue from 'vue'
import Router from 'vue-router'
import routerTan from '@/router/router-tan'

Vue.use(Router)
let routers = routerTan.concat(routerTan)
export default new Router({
      mode: 'history',
      path: '/',
      name: 'doc',
      routes:routers,
      linkActiveClass:'is-active'  //设置选中的类名
})
