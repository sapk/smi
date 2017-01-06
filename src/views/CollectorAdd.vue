<template lang="pug">
  div(id="collector-view") Collector
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
          title: "Add a collector | Simple Monitor Interface",
          page_title: "Add a collector"
        }
      }
    }
  }
</script>
