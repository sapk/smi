<template lang="pug">
  header
    v-navbar
      v-navbar-side-icon(v-sidebar:mainsidebar="" class="hidden-md-and-up")
          v-icon reorder
      div(class="navbar__side-title")
        h1(class="text-xs-center text-md-left" v-text="title")
</template>

<script>
export default {
  data () {},
  props: {
    title: String
  },
}
</script>

<style lang="stylus">
  @import '../style/settings/_variables'

  header
    .navbar
      align-items: center
      color: #fff
      padding: 2rem 0

      &__side-icon
        margin: 0 1rem

      &__side-title
        display: flex
        flex: 1
        align-items: space-between
        justify-content: space-between
        flex-direction: column
        margin: 0 2rem

        @media screen and (max-width: $grid-breakpoints.sm)
          margin: 0 1rem
      h1
        letter-spacing: 1px
        color: #fff
        font-size: 3rem
        font-weight: 400
        margin: 0
        word-break: break-word

        @media screen and (max-width: $grid-breakpoints.sm)
          font-size: 9vw
</style>
