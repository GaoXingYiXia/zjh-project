import loading from './loading.vue'


//组件转化为插件
export default {
  install: function (Vue) {
    Vue.component('loading', loading);
    // console.log('loading install',Vue);
    // Vue.component('router-link',routerLink);
    // Vue.component('router-view',routerView);
  }
}
