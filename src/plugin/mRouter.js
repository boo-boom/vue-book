let Vue

class MRouter {
  constructor(options) {
    this.$options = options
    this.routeMap = {}
    // 利用vue的响应机制，路由切换时做对应的响应
    this.app = new Vue({
      data: {
        current: '/test'
      }
    })
  }
  static install(_Vue) {
    Vue = _Vue
    Vue.mixin({
      beforeCreate() {
        Vue.prototype.$MRouter = '路由注册成功！！'
        if (this.$options.router) {
          this.$options.router.init()
        }
      }
    })
  }
  init() {
    // 启动整个路由 - 由插件use负责启动
    // 1. 监听hashchange事件
    this.bindEvents()
    this.createRouteMap()
    this.initComponent()
    console.log(this.routeMap)
    // 2. 处理函数表
    // 3. 初始化组件：router-view router-link
    // 4. 生命周期，路由守卫
  }
  bindEvents() {
    // console.log(this.$options.router.init)
    window.addEventListener('load', this.onHashChange.bind(this), false)
    window.addEventListener('hashchange', this.onHashChange.bind(this), false)
  }
  onHashChange(e) {
    console.log('hash改变了')
  }
  createRouteMap() {
    // 将路由数组转换成对象
    this.$options.routes.forEach(item => {
      this.routeMap[item.path] = item
    })
  }
  initComponent() {
    console.log(this.app.current)
    Vue.component('router-view', {
      render: h => {
        const component = this.routeMap[this.app.current].component
        return h(component)
      }
    })
  }
}

export default MRouter
