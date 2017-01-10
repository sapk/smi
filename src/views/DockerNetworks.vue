<template lang="pug">
  div(id="docker-networks-view" style="padding:20px") Docker -> Networks
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
          title: 'Docker Networks | Simple Monitor Interface', //TODO use query param for router
          page_title: 'Docker Networks' //TODO use query param for router
        }
      }
    }
  }
</script>
