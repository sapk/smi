<template lang="pug">
  div(id="collector-add-view")
    v-card
      v-card-text ./sca daemon -v -r 5m -u "{{db}}/user/{{uid}}" -t "{{token}}"

</template>

<script>
  export default {
    data () {

     var u = JSON.parse(JSON.stringify(app.$backend.auth().currentUser)) //TODO better
     return {
       db: this.$backend.config.databaseURL,
       uid: u.uid,
       token: u.stsTokenManager.accessToken
     };
     //TODO find way in sca to refresh access token with refreshToken ?
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

<style lang="stylus">
#collector-add-view
 .card
  margin: 50px auto;
  max-width: 80%;
  word-break: break-all;
</style>
