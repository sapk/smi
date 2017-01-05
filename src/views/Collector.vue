<template lang="pug">
  div(id="collector-view") Collector {{ $route.params.id }}
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
          title: "Collector "+this.$route.params.id+" | Simple Monitor Interface",
          page_title: "Collector "+this.$route.params.id
        }
      }
    }
  }
</script>
