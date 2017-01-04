<template lang="pug">
  v-sidebar(
    id="mainsidebar"
    fixed
  )
    div(class="vuetify" slot="top")
      router-link(
        to="/about",
        class="sidebar__logo"
      )
        img(
          src="/public/logo.svg"
          height="100"
          width="100"
          alt="SMI Logo"
        )
      h1(v-text="app_name")
      a(href="https://github.com/sapk/smi/releases/tag/v0.0.0" target="_blank") v0.0.0
      div(class="sidebar__links")
        a(href="https://github.com/sapk/smi" target="_blank")
          img(src="/public/social/github.png" alt="github")
        a(href="https://twitter.com/sapk" target="_blank")
          img(src="/public/social/twitter.png" alt="twitter")
        a(href="mailto:sapk@sapk.fr")
          img(src="/public/social/mail.png" alt="mail")
    v-sidebar-items
      template(v-for="item in items")
        v-sidebar-item-header(v-if="item.header" v-html="item.header")
        v-sidebar-group(v-if="item.items" v-bind:item="item.parent")
          v-sidebar-item(
            v-for="child in item.items"
            v-bind:item="child"
            v-bind:router="item.router"
            v-if="child.href"
            router
          )
            v-chip(class="grey" v-if="child.chip") {{ child.chip }}
        v-sidebar-item(
          v-bind:item="item"
          v-bind:router="item.router"
          v-else-if="item.href"
          router
        )
          v-chip(class="green" v-if="item.chip") {{ item.chip }}
</template>

<script>
  export default {
    data () {
      return {
        app_name: "Simple Monitor Interface",
        items: [
          { href: '/', text: 'Home', icon: 'home' },
          { href: '/overview', text: 'Overview', icon: 'dashboard' },
          {
            /*header: "test",*/
            parent: { href: '/collectors', text: 'Collectors', icon: 'device_hub'},
            items: [
            ],
          },
          {
            parent: { href: '/hosts', text: 'Hosts', icon: 'dns'},
            items: [
            ]
          },
          {
            parent: { href: '/dockers', text: 'Dockers', icon: 'widgets'},
            items: [
              { href: '/dockers/containers', text: 'Containers', icon: 'stop' , chip: '10'},
              { href: '/dockers/hosts', text: 'Hosts', icon: 'dns' , chip: '10'},
              { href: '/dockers/networks', text: 'Networks', icon: 'share' , chip: '10'},
              { href: '/dockers/volumes', text: 'Volumes', icon: 'storage' , chip: '10'}
            ]
          },
          { href: '/alerts', text: 'Alerts', icon: 'message' },
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import '../style/settings/_variables'

  .sidebar
    background: $grey.darken-3

    &__links
      margin: 1rem
      display: flex
      justify-content: center
      align-items: center

      a
        color: #fff
        text-align: center
        text-decoration: none
        margin: 0 .5rem

        img
          height: 25px

        i
          padding: 0

  .vuetify
    text-align: center
    border-bottom: 1px solid rgba(#fff, .1)
    margin: 0 0 1rem
    padding: 1rem 0 0

    .sidebar__logo
      display: block
      position: relative
      margin-bottom: 1rem
      text-decoration: none

      img
        height: 100px

    a,h1
      color: #fff
    h1
      font-size: 1.3rem;
      font-weight: bold;

  .sidebar__item-header
    color: #fff

  .sidebar__item
    color: #fff
</style>
