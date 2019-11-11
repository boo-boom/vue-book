<template>
  <div class="EbookReader">
    <h1>{{ $route.params.fileName }}</h1>
    <div id="reader"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Epub from 'epubjs'

export default {
  name: 'EbookReader',
  mounted() {
    const fileName = this.$route.params.fileName.split('|').join('/')
    this.setFileName(fileName).then(() => {
      this.initEpub()
    })
  },
  methods: {
    initEpub() {
      const url = `http://127.0.0.1:9999/epub/${this.fileName}.epub`
      this.book = new Epub(url)
      this.rendition = this.book.renderTo('reader', {
        widith: window.widith,
        height: window.height,
        method: 'default'
      })
      this.rendition.display()
      // console.log(this.book)
    },
    ...mapActions(['setFileName'])
  },
  computed: {
    ...mapGetters(['fileName'])
  }
}
</script>
