import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 加载全局样式
import './styles/index.less'

new Vue({
  router,   // 只声明一次
  store,    // 只声明一次
  render: h => h(App)
}).$mount('#app')
