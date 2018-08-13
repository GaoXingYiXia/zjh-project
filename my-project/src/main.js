import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
Vue.prototype.$http = axios; //  全局方法
import qs from "qs"; //post中data数据的 请求转化
Vue.prototype.$qs = qs;

axios.defaults.withCredentials = true //------中 cookie 关键

import Mui from 'vue-awesome-mui';
Vue.use(Mui);

import loading from './loading'; //引入loading插件
Vue.use(loading); //安装

//用axios请求数据的时候才能控制loading
// Add a request interceptor  ----拦截器
axios.interceptors.request.use(function (config) {
  store.dispatch('VIEW_LOADING', true);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  store.dispatch('VIEW_LOADING', false);
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});





Vue.config.productionTip = false
// import './assets/css/mui.css'
import './assets/css/amazeui.css'
import './assets/js/jquery.min'
import './assets/js/common'


import store from './store' //默认index

let vm = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store,

})

// console.log(vm);
