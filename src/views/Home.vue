<template>
  <div class="home">
    <span class="icon-bright"></span>
    <div id="reader"></div>
  </div>
</template>

<script>
import Epub from 'epubjs'

export default {
  name: 'home',
  mounted() {
    this.book = new Epub('/2017_Book_FashionFigures.epub')
    this.book.renderTo('reader', {
      width: window.innerWidth,
      height: window.innerWidth
    }).display()
  }
}
</script>
