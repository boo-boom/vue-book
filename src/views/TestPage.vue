<template>
  <div class="test-page">
    <!-- 自定义全局组件，Vue.use调用 -->
    <Loading />
    <!-- is属性的使用 / 子组件向父组件通讯 -->
    <div
      is="Test1"
      info1="is属性的使用 / 父组件向自组件通讯"
      info2="使用$attrs传给子孙组件的参数: 在子孙组件中必须props中没有注册该属性，如 props: ['info1']，则孙组件中无法利用$attrs获取info1"
      @emitSetMsg1="getMsg1"
      @emitSetMsg2="getMsg2"
      ref="test1">
    </div>

    <div ref="div1">test1: {{emitMsg1}}</div>
    <div ref="div2">test2: {{emitMsg2}}</div>

    <router-link to="/testRouter?a=1&b=2">使用router-link组件进行路由传参</router-link>
    <div class="div-link" @click="goTestRouter()">使用编程式导航进行路由传参</div>
  </div>
</template>

<script>
import Test1 from '@/components/Test1'

export default {
  name: 'TestPage',
  components: { Test1 },
  data() {
    return {
      emitMsg1: '',
      emitMsg2: ''
    }
  },
  mounted() {
    // 父组件调用子组件事件
    this.$refs.test1.pointMsg()
    // 修改子组件内某一dom样式
    this.$refs.test1.$el.querySelector('.p-1').style.color = 'red'
    // 修改当前组件内的dom样式
    this.$refs.div1.style.color = 'blue'
  },
  methods: {
    getMsg1(val) {
      this.emitMsg1 = val
    },
    getMsg2(val) {
      this.emitMsg2 = val
    },
    goTestRouter() {
      // query: 使用path作为路由标识，参数由url的方式传递
      this.$router.push({
        path: '/testRouter',
        query: {
          a: 1,
          b: 2
        }
      })
      // params: 使用name作为路由标识，使用对象的方式传递，刷新即清除
      // this.$router.push({
      //   name: 'testRouter',
      //   params: {
      //     a: 3,
      //     b: 4
      //   }
      // })
    }
  }
}
</script>

<style lang="scss">
.test-page {
  .div-link {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
