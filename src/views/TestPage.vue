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
      @click="pointTestMsg"
      ref="test1">
    </div>

    <div ref="div1">test1: {{emitMsg1}}</div>
    <div ref="div2">test2: {{emitMsg2}}</div>

    <router-link to="/testRouter?a=1&b=2">使用router-link组件进行路由传参</router-link>
    <div class="div-link" @click="goTestRouter()">使用编程式导航进行路由传参</div>

    <p class="p-style">class="red blue": 样式覆盖与class顺序无关，与css样式顺序有关</p>

    <p>action异步操作：{{count}}</p>

    <!-- 横竖显示全部图片 -->
    <div class="img-box">
      <img src="./../assets/img/img_1.jpg" alt="img-1">
    </div>
    <div class="img-box">
      <img src="./../assets/img/img_2.jpg" alt="img-2">
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import wx from 'jWeixin'
import { mapGetters, mapActions } from 'vuex'
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
    // $children获取子孙组件函数，可进行通讯
    this.$refs.test1.$children[0].pointTest2Msg()
    // 父组件调用子组件事件
    this.$refs.test1.pointMsg()
    // 修改子组件内某一dom样式
    this.$refs.test1.$el.querySelector('.p-1').style.color = 'red'
    // 修改当前组件内的dom样式
    this.$refs.div1.style.color = 'blue'
    // 异步action
    this.actionAsyncCommit()

    // 引入cdn方式的包
    $('#app').css('color', 'red')
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: '', // 必填，公众号的唯一标识
      timestamp: 123, // 必填，生成签名的时间戳
      nonceStr: '', // 必填，生成签名的随机串
      signature: '', // 必填，签名
      jsApiList: [] // 必填，需要使用的JS接口列表
    })
    wx.ready(function() {
      // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
      console.log(123123)
    })
    wx.error(function(res) {
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      console.log(123123, res)
    })
  },
  methods: {
    getMsg1(val) {
      this.emitMsg1 = val
    },
    getMsg2(val) {
      this.emitMsg2 = val
    },
    pointTestMsg() {
      console.log('这是父级组件')
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
    },
    ...mapActions(['actionAsyncCommit'])
  },
  computed: {
    ...mapGetters(['count'])
  }
}
</script>

<style lang="scss" scoped>
.test-page {
  .div-link {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
  // .blue {
  //   background: blue;
  // }
  // .red {
  //   background: red;
  // }
  .p-style:last-child {
    background-color: red;
  }
  // first-child失效：前面必须没有兄弟节点，可用div包一层
  .p-style:first-of-type {
    background-color: yellow;
  }
  // 显示全部图片
  .img-box {
    border: 1px solid red;
    box-sizing: border-box;
    width: 100px;
    height: 100px;

    // 使用定位
    // overflow: hidden;
    // position: relative;

    // 使用表格布局
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 0;
  }
  .img-box > img {
    // 使用定位
    // position: absolute;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // margin: auto;
    // max-width: 100%;
    // max-height: 100%;
    // // background: url("./../assets/img/img_1.jpg") no-repeat center center / 100%;

    // 使用表格
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
