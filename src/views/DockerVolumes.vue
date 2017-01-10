<template lang="pug">
  div(id="docker-volumes-view" style="padding:20px") Docker -> Volumes
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
          title: 'Docker Volumes | Simple Monitor Interface', //TODO use query param for router
          page_title: 'Docker Volumes' //TODO use query param for router
        }
      }
    }
  }
</script>
