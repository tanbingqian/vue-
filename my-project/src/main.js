// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
import store from './store'
import axios from 'axios'

import './assets/css/base'
import './assets/css/home'

import VueAxios from 'vue-axios'
Vue.prototype.axios = axios;
Vue.use(VueAxios, axios);

//路由
import Navigation from 'vue-navigation'
Vue.use(Navigation,{router})//router为路由文件

//引入公共JS
//公共方法
import common from "@/assets/js/common";

Vue.prototype.common = common
Vue.prototype.$fff="传过来的值！"

Vue.use(ElementUI);
Vue.config.productionTip = false



//路由跳转跳转，方便打包app修改
Router.prototype.toQuery = (url, data) => {
  if (url.indexOf('/zh/') >= 0) {
    url = url.replace('/zh', '')
  } else if (url.indexOf('/en/') >= 0) {
    url = url.replace('/en', '')
  }
  // 路由切换动画
  router.push({
    path: '/' + i18n.locale + url,
    query: data,
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
