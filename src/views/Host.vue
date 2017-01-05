<template lang="pug">
  div(id="host-view") Host {{ $route.params.id }}
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
          title: "Host "+this.$route.params.id+" | Simple Monitor Interface",
          page_title: "Host "+this.$route.params.id
        }
      }
    }
  }
</script>
