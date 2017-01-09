<template lang="pug">
  header
    v-navbar
      v-navbar-side-icon(v-sidebar:mainsidebar="" class="hidden-md-and-up")
          v-icon reorder
      div(class="navbar__side-title")
        h1(class="text-xs-center text-md-left" v-text="title" v-bind:style="title_style")
      v-navbar-items(v-if="user")
        v-navbar-item( v-bind:item="{ text: user.uid}")
        v-navbar-item( v-bind:item="{ text: user.displayName}")
        v-navbar-item( v-bind:item="{ text: user.email}")
        v-navbar-item( v-bind:item="{ text: user.isAnonymous}")
        v-navbar-item( v-bind:item="{ href: '#', text: 'account_box', icon: true }")
        v-navbar-item( v-on:click.native="logout" v-bind:item="{ href: '#', text: 'exit_to_app', icon: true }")
      v-navbar-items(v-else)
        v-navbar-item( v-bind:item="{ href: '/login', text: 'Login' }")
</template>

<script>
export default {
  data () {return {}},
  props: {
    title: String,
    title_style: String,
    user: Object
  },
  methods: {
    logout: function(){
      this.$backend.auth().signOut();
      this.$router.push("/"); //Go home
    }
  }
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
