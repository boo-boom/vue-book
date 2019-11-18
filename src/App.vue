<template>
  <div id="app">
    <router-link to="test">1. test-page</router-link>
    <br />
    <router-link to="ebook">2. ebook</router-link>
    <br />
    <!-- <p>手动实现router：{{$MRouter}}</p> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
