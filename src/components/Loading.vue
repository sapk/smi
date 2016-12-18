<template>
  <div id="loading">
    <img width="256px" height="256px" src="../assets/logo.svg">
    <h2>Application v{{appVersion}} loading ...</h2>
    <div class="mention">Icons made by <a href="http://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: ['appVersion']
}
</script>

<style scoped>
#loading{
  margin-top: 60px;
}
#loading>h2 {
  margin-top: 28px;
}
#loading>.mention {
  font-size: 62%;
  color: #999;
  position: fixed;
  bottom: 10px;
  right: 25px;
}
#loading>.mention a {
  color: #999;
}
</style>
