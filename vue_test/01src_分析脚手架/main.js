/**
 * 该文件是整个项目的入口文件
 */

// 引入语法
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
