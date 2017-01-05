<template lang="pug">
  div(id="docker-containers-view") Docker -> Containers
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
          title: 'Docker Containers | Simple Monitor Interface', //TODO use query param for router
          page_title: 'Docker Containers' //TODO use query param for router
        }
      }
    }
  }
</script>
