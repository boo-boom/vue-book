import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/style/index.scss'
import 'amfe-flexible'

// 自定义全局组件
import Loading from '@/components/Loading'
Vue.use(Loading)

Vue.config.productionTip = false

// 全局异常捕捉
const errorHandler = function (err, vm, info) {
  console.error(err)
  // console.log(vm)
  // console.log(info)
}
// 异常时手动调用
Vue.prototype.$throw = (error) => errorHandler(error, this)
Vue.config.errorHandler = errorHandler

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
