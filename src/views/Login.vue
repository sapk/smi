<template lang="pug">
  div(id="Login-view" class="text-xs-center") Login Form
    br
    br
    v-btn(
      class="red white--text"
      v-bind:loading="googleLoading"
      v-on:click.native="loginGoogle"
      v-bind:disabled="googleLoading"
    ) Sign in with Google
      v-icon(left) account_circle
</template>

<script>
  //var firebase = require('firebase/app');
  var auth = require('firebase/auth');

  export default {
    data () {
     return {
        "googleLoading": false,
     };
    },
    mounted () {
      //console.log("Login: backend",this.$backend);
      this.$emit('view', this.meta())
    },
    preFetch () {
      return this.methods.meta()
    },
    methods: {
      meta () {
        return {
          title: "Login | Simple Monitor Interface",
          page_title: "Login"
        }
      },
      loader (load) {
        this[load] = !this[load]
        setTimeout(() => this[load] = false, 3000)
      },
      loginGoogle () {
        this.loader('googleLoading')
        var provider = new auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        this.$backend.auth().signInWithRedirect(provider);
      }
    }
  }
</script>
