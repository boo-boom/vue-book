<template>
  <div class="test-router">
    query: { a: {{this.$route.query.a || this.$route.params.a || "???"}}, b: {{this.$route.query.b || this.$route.params.b || "???"}} }
  </div>
</template>

<script>
export default {
  name: 'test-router',
  mounted() {
    console.log('$route', this.$route)
  }
}
</script>
