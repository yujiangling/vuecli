// 入口文件
import Vue from 'vue'

import App from './App.vue'

const vm = new Vue({
  el: '#app',
  render: c => c(App)
})