<template>
  <div class="test1">
    <p class="p-1">test1: {{info1}}</p>
    <Test2 v-bind="$attrs" v-on="$listeners" />
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
  },
  methods: {
    setMsg1() {
      this.$emit('emitSetMsg1', '子组件向父组件通讯')
    },
    pointMsg() {
      console.log('test1: 父组件调用子组件事件')
    }
  }
}
</script>
