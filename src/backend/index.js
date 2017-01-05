var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var config = require('./config.json');


/** //TODO maybe ?
//Get result of a redirect
db.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var db.gaccesstoken = result.credential.accessToken;
        }
        // The signed-in user info.
        var user = result.user;
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // [START_EXCLUDE]
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have already signed up with a different auth provider for that email.');
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        } else {
          console.error(error);
        }
        // [END_EXCLUDE]
      });
/**/

//console.log("Setting db config");

export default {
  install: function(Vue, options){
      //console.log("Setting db install");
      var db = firebase.initializeApp(config);
      db.auth().onAuthStateChanged(function (user) {
          db.vueRoot.$vuetify.bus.pub('backend:auth:state-changed', user != null , user)
      	}, function(error) {
      	  console.log(error)
      })
      Object.defineProperty(Vue.prototype, '$backend', {
        get () { db.vueRoot = this.$root; return db } //Link to Object //TODO use a { return this.$root._backend } linked to init root obj
      })
  }
}
