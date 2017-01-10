<template lang="pug">
  div(id="collector-add-view")
    v-card
      v-card-row
        v-tabs(id="tabs")
          v-tabs-tabs
            v-tab(href="tabInstall") Install
            v-tab(href="tabStart" selected) Start
            v-tab(href="tabConfig") Config
          v-tabs-items(class="white")
            v-tabs-item(id="tabInstall")
              h6 System :
              code TODO
              h6 Docker :
              code TODO
              h6 Go get :
              code go get -u -v github.com/sapk/sca
              p <b>NB:</b> Copy $GOPATH/bin/sca in /usr/local/bin or add $GOPATH/bin to your PATH
            v-tabs-item(id="tabStart")
              h5 Start a deamon manually for testing :
              code sca daemon -u "{{db}}/user/{{uid}}" -k {{apiKey}} -t "{{refreshToken}}"
              p <b>NB:</b> To maintain the deamon across startup use a system package and copy config file to /etc/sca/config.json.
            v-tabs-item(id="tabConfig")  TODO

</template>

<script>
  export default {
    data () {

     //var u = JSON.parse(JSON.stringify(app.$backend.auth().currentUser)) //TODO better
     return {
       db: this.$backend.config.databaseURL, //TODO don't be base on .config tmp fix
       apiKey: this.$backend.config.apiKey, //TODO don't be base on .config tmp fix
       uid: app.$backend.auth().currentUser.uid,
       //token: u.stsTokenManager.accessToken, //TODO Maybe not usefull ?
       refreshToken: app.$backend.auth().currentUser.refreshToken
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
/*
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100%;
*/
 .card
   /*margin: 0 auto 15% auto;*/
   margin: 10% auto 0 auto;
   width: 80%;
   word-break: break-all;
 .tabs
   margin-bottom: 0;
   width: 100%;
 .tabs__item
   padding: 2rem;
 code
   border-radius: 5px;
   padding: 15px;
   margin: 0 0 25px 0;
</style>
