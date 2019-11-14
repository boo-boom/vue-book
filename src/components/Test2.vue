<template>
  <div class="test">test2: {{this.$attrs.info2}}</div>
</template>

<script>
export default {
  name: 'test2',
  mounted() {
    this.$emit('emitSetMsg2', '使用$listeners，与来自孙子组件进行emit通讯')

    /**
     * 任意组件利用$root进行通讯
     * 1. this.$root.$emit 发布一个事件
     * 2. this.$root.$on 接收该事件
     */
    this.$root.$on('rootEmit', val => {
      console.log(val)
    })
  }
}
</script>
