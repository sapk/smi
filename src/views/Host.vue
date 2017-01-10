<template lang="pug">
  div(id="host-view")
   template(v-if="data && data[$route.params.id]")
     div(style="padding:20px")
      div(class="hostname") Host ID: {{ $route.params.id }}
      div(class="hostname") Hostname: {{data[$route.params.id].Host.Name}}
     v-tabs(id="tabs")
       v-tabs-tabs
         v-tab(href="tabApps") Applications
         v-tab(href="tabStorages" selected) Storage
         v-tab(href="tabInterfaces") Interfaces
       v-tabs-items(class="white")
         v-tabs-item(id="tabApps")
           p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         v-tabs-item(id="tabStorages")
           p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         v-tabs-item(id="tabInterfaces")
           v-container(fluid style="padding:0 20px")
            v-row
             v-col(xs2 v-for="(interface, key) in data[$route.params.id].Host.Interfaces")
               v-card(style="margin-bottom:20px;")
                 v-card-row(class="blue-grey lighten-1")
                   v-card-title(class="white--text") {{interface.Info.Name}}
                 v-card-text
                   v-card-row(height="25px" style="min-height: 2rem;")
                     v-icon(class="mr-1") memory
                     div
                       div {{interface.Info.HardwareAddr}}
                   br
                   v-card-row(height="25px" style="min-height: 2rem;" v-for="(ip, key) in interface.Addrs")
                     v-icon(class="mr-1") language
                     div(class="ip-addr")
                         div {{ip.IP}}/{{ip.Mask}}
                   div(v-if="false") {{interface}}
   template(v-else)
     div(style="padding:20px") Loading ...
</template>

<script>
  export default {
    props: {
      data: Object
    },
    data () {
     return {};
    },
    mounted () {
      this.$emit('view', this.meta())
    },
    preFetch () {
      return this.methods.meta()
    },
    methods: {
      meta () {
        var name = this.$route.params.id;
        if(this.$data.data && this.$data.data[$route.params.id]){
          name = this.$data.data[$route.params.id].Host.Name
        }
        return {
          title: "Host "+name+" | Simple Monitor Interface",
          page_title: "Host "+name,
          page_title_style: "font-size:2rem;"
        }
      }
    }
  }
</script>

<style>
.ip-addr{
  max-width: 87%;
}
.ip-addr>div{
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
