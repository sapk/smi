<template lang="pug">
  div(id="overview-view" style="padding:20px") Overview
</template>

<script>
  export default {
    data () {
     return {};
    },
    mounted () {
      //console.log("Overview: backend",this.$backend);
      this.$emit('view', this.meta())
    },
    preFetch () {
      return this.methods.meta()
    },
    methods: {
      meta () {
        return {
          title: 'Overview | Simple Monitor Interface',
          page_title: 'Overview'
        }
      }
    }
  }
</script>
