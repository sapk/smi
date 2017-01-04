<template lang="pug">
  v-app(left-fixed-sidebar top-navbar)
    main-nav(v-bind:title="title")
    main
      main-side
      v-content
        v-container(fluid)
          transition(name="slide" mode="out-in")
            router-view(@view="meta")
</template>
<script>
  export default {
    data () {
      return {
        title : "SMI"
      }
    },
    mounted () {
      this.$vuetify.init()
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './style/main.css'
</style>
