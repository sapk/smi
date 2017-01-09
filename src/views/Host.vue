<template lang="pug">
  div(id="host-view") Host {{ $route.params.id }}
   template(v-if="data && data[$route.params.id]")
     div(class="hostname") Hostname: {{data[$route.params.id].Host.Name}}
     div(class="interfaces") Interfaces :
     v-container(fluid style="padding:20px")
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
     div(v-if="false" class="data") {{data[$route.params.id].Host}}
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
