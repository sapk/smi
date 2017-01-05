<template lang="pug">
  div(id="home-view") Hello World
</template>

<script>
  export default {
    data () {
     return {};
    },
    mounted () {
      /*
      console.log("Home: store",this.$store);
      console.log("Home: router",this.$route);
      console.log("Home: backend",this.$backend);
      */
      this.$emit('view', this.meta())
    },
    preFetch () {
      return this.methods.meta()
    },
    methods: {
      meta () {
        return {
          title: 'Home | Simple Monitor Interface',
          page_title: 'Home'
        }
      }
    }
  }
</script>
