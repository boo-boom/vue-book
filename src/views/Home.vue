<template>
  <div class="home">
    <div class="d-1">qwe我企鹅</div>
    <span class="icon-bright"></span>
    <div id="reader"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Epub from 'epubjs'

export default {
  name: 'home',
  computed: {
    ...mapGetters(['test'])
  },
  mounted() {
    console.log(this.test)
    // this.$store.dispatch('setTest', 10).then(() => {
    //   console.log(this.$store.state.test)
    // })
    // this.$store.dispatch('setBookTest', 9).then(() => {
    //   console.log(this.$store.state.book.book_test)
    // })

    this.book = new Epub('/2017_Book_FashionFigures.epub')
    this.book.renderTo('reader', {
      width: window.innerWidth,
      height: window.innerWidth
    }).display()
  }
}
</script>

<style lang="scss" scoped>
.d-1 {
  width: 375px;
  background: #000;
}
</style>
