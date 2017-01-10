<template lang="pug">
  div(id="docker-hosts-view" style="padding:20px") Docker -> Hosts
</template>

<script>
  export default {
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
        return {
          title: 'Docker Hosts | Simple Monitor Interface', //TODO use query param for router
          page_title: 'Docker Hosts' //TODO use query param for router
        }
      }
    }
  }
</script>
