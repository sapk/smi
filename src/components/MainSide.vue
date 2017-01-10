<template lang="pug">
  v-sidebar(
    id="mainsidebar"
    fixed
    class="blue-grey darken-4"
  )
    div(class="menu-logo" slot="top")
      router-link(
        to="/",
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
    props: {
      data: Object
    },
    data () {
      return {
        app_name: "Simple Monitor Interface",
        items: [
          { href: '/', text: 'Home', icon: 'home' },
          { href: '/overview', text: 'Overview', icon: 'dashboard' },
          {
            /*header: "test",*/
            parent: { text: 'Collectors', icon: 'device_hub'},
            items: [
              { href: '/collector-add', text: 'Add', icon: 'add'},
            ],
          },
          {
            parent: { text: 'Hosts', icon: 'dns'},
            items: []
          },
          {
            parent: { text: 'Docker', icon: 'widgets'},
            items: [
              { href: '/docker/hosts', text: 'Hosts', icon: 'dns' , chip: 0},
              { href: '/docker/containers', text: 'Containers', icon: 'stop' , chip: 0},
              { href: '/docker/networks', text: 'Networks', icon: 'share' , chip: 0},
              { href: '/docker/volumes', text: 'Volumes', icon: 'storage' , chip: 0}
            ]
          },
          { href: '/backend', text: 'Database', icon: 'data_usage' },
          { href: '/alerts', text: 'Alerts', icon: 'message' },
        ]
      }
    },
    mounted () {
      //Monitor data
      var self = this;
      this.$watch('data', function (data) {
        self.updateMenu(self,data);
      })
      console.log(self);
      if(self.data){
        self.updateMenu(self,self.$data.data);
      }
    },
    methods : {
      updateMenu(self,data){
        console.log("Data changed", data, self.$data);

        //Collecors
        self.$data.items[2].items = [
          { href: '/collector-add', text: 'Add', icon: 'add'},
        ];
        //Hosts
        self.$data.items[3].items = [];
        var dhosts = 0, dcontainers = 0, dnetworks = 0, dvolumes = 0;
        Object.keys(data).forEach((key, i, list) => {
            self.$data.items[2].items.unshift({ href: '/collector/'+key, text: key, icon: 'extension'});
            self.$data.items[3].items.unshift({ href: '/host/'+key, text: data[key].Host.Name, icon: 'stop'});

            if (data[key].Docker){ //TODO use systemtime to find if out
              dhosts += 1;
              if(data[key].Docker.Containers)
                dcontainers += Object.keys(data[key].Docker.Containers).length;
                if(data[key].Docker.Networks)
                dnetworks += Object.keys(data[key].Docker.Networks).length;
              if(data[key].Docker.Volumes)
                dvolumes += Object.keys(data[key].Docker.Volumes).length;
            }
        });
        //Docker
        self.$data.items[4].items = [
          { href: '/docker/hosts', text: 'Hosts', icon: 'dns' , chip: dhosts},
          { href: '/docker/containers', text: 'Containers', icon: 'stop' , chip: dcontainers},
          { href: '/docker/networks', text: 'Networks', icon: 'share' , chip: dnetworks},
          { href: '/docker/volumes', text: 'Volumes', icon: 'storage' , chip: dvolumes}
        ];
      }
    }

    /*,
    computed : {
      collectors () {
        //return ["collector0","collector1"];
        return [
          { href: '/host/collector0', text: 'Collector0', icon: 'cogs'},
          { href: '/host/collector1', text: 'Collector1', icon: 'cogs'}
        ];
      },
      hosts () {
        //return ["test0","test1"];
        return [
          { href: '/host/test0', text: 'Test0', icon: ''}
        ];
      }
    }*/
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
    .sidebar__item[href^="/collector/"]
      span
        overflow: hidden;
        word-break: keep-all;
        font-size: 95%;
        white-space: nowrap;
        text-overflow: ellipsis;

  .menu-logo
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
      margin-bottom: 0.3rem;

  .sidebar__item-header
    color: #fff

  .sidebar__item
    color: #fff
</style>
