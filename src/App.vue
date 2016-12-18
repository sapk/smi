<template>
  <div id="app">
    <loading :app-version="version" v-show="!isLoaded" ></loading>
    <headernav v-show="isLoaded"></headernav>
    <sidenav v-show="isLoaded"></sidenav>
  </div>
</template>

<script>
/* import Hello from './components/Hello' */
import Package from '../package.json'
import Loading from './components/Loading'
import Headernav from './components/Headernav'
import Sidenav from './components/Sidenav'

export default {
  name: 'app',
  data: function () {
    return {
      isLoaded: true,
      version: Package.version
    }
  },
  components: {
    Loading,
    Headernav,
    Sidenav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
    vertical-align: middle;
}
img {
    border: 0;
}
.img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
}
.pull-left {
    float: left !important;
}
</style>
