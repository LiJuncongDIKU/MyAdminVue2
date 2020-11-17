import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Input, Button } from 'element-ui'

// 设置默认的UI大小
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.use(Input)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
