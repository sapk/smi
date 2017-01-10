<template lang="pug">
  div(id="collector-view" style="padding:20px") Collector {{ $route.params.id }}
   template(v-if="data && data[$route.params.id]")
    div(class="uptime") Uptime :
     span(v-since="data[$route.params.id].Collector.StartTime")
    div(class="update") Last Update :
     span(v-since="data[$route.params.id].Collector.UpdateTime")
    div(class="status") Status :
     span {{data[$route.params.id].Collector.Status}}
</template>

<script>
  import moment from 'moment'
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
    directives: {
      since: {
        // directive definition
        // When the bound element is inserted into the DOM...
        inserted: function (el, binding, vnode) {
          console.log("v-since inserted",el,binding,vnode);
          el.textContent= moment.unix(binding.value).fromNow();
        },
        update: function (el, binding, vnode) {
          console.log("v-since update",el,binding,vnode);
          el.textContent= moment.unix(binding.value).fromNow();
        }
      }
    },
    methods: {
      meta () {
        return {
          title: "Collector "+this.$route.params.id+" | Simple Monitor Interface",
          page_title: "Collector "+this.$route.params.id,
          page_title_style: "font-size:2rem;"
        }
      }
    }
  }
</script>
