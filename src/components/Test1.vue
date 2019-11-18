<template>
  <div class="test1">
    <p class="p-1">test1: {{info1}}</p>
    <Test2 v-bind="$attrs" v-on="$listeners">
      <p slot="slot-name-1">test2: slot插槽的使用方法</p>
    </Test2>
  </div>
</template>

<script>
import Test2 from '@/components/Test2'

export default {
  name: 'test1',
  components: { Test2 },
  props: ['info1'],
  mounted() {
    this.setMsg1()
    this.pointRootEmit()
  },
  methods: {
    setMsg1() {
      this.$emit('emitSetMsg1', '子组件向父组件通讯')
    },
    pointMsg() {
      console.log('test1: 父组件调用子组件事件')
    },
    pointRootEmit() {
      this.$root.$emit('rootEmit', '任意组件利用$root进行通讯')
    }
  }
}
</script>
