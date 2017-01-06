<template lang="pug">
  v-app(left-fixed-sidebar top-navbar :class="state")
    main-nav(v-bind:title="title" v-bind:user="user")
    main
      main-side
      v-content
        v-container(fluid)
          transition(name="slide" mode="out-in")
            router-view(@view="viewLoaded")
    div(id="loading-mask")
      v-progress-circular( v-bind:size="70" indeterminate)
</template>
<script>
  export default {
    data () {
      return {
        title : "SMI",
        state : "loading",
        user: this.$backend.auth().currentUser
      }
    },
    mounted () {
      var app = this;
      this.$vuetify.init()
      this.$vuetify.bus.sub('backend:auth:state-changed', function(state,user){
        console.log("Auth State Changed", state, user, app.$route.path);
        app.state = "loaded";
        app.user = app.$backend.auth().currentUser //Shousld be same as local var user
        if(app.$route.path == "/login" && app.user != null){
          console.log(app.$router)
          if(localStorage.loginBackPath != null && localStorage.loginBackPath != "" && localStorage.loginBackPath != "/login" ){
            //go back before login page
            app.$router.push(localStorage.loginBackPath)
          }else{
            app.$router.push("/") //If no back page go home
          }
        }
      })
    },
    methods: {
      viewLoaded (meta) {
        console.log("viewLoaded",meta)
        if (typeof meta === 'string') {
          return this.title = meta
        }
        this.title = meta.page_title

        this.$vuetify.bus.pub('meta:title', meta.title)
      }
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  #loading-mask
    display: block; position: absolute; left: 0px; top: 0; right: 0px; bottom: 0; z-index:42; background: #000;
    opacity: 1;
    visibility: visible;
    transition: visibility 0.25s, opacity 0.25s linear;
    .progress-circular
      left:50%;
      top:50%;
      margin: -35px 0 0 -35px;
  .loaded #loading-mask
     opacity: 0;
     visibility: hidden;

</style>
