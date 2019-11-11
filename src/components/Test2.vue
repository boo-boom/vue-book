<template>
  <div class="test">test2: {{this.$attrs.info2}}</div>
</template>

<script>
export default {
  name: 'test2',
  mounted() {
    this.$emit('emitSetMsg2', '使用$listeners，与来自孙子组件进行emit通讯')
  }
}
</script>
