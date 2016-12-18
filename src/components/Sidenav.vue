<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <div class="user-panel">
        <div class="pull-left image"></div>
        <div class="pull-left info">
          <div><p class="white">Antoine GIRARD</p></div>
          <a href="javascript:;"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'sidenav'
}
</script>

<style scoped>
p {
    margin: 0 0 10px;
}
.main-sidebar{
    background-color: #222d32;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 50px;
    min-height: 100%;
    width: 230px;
    z-index: 810;
    -webkit-transition: -webkit-transform .3s ease-in-out,width .3s ease-in-out;
    -moz-transition: -moz-transform .3s ease-in-out,width .3s ease-in-out;
    -o-transition: -o-transform .3s ease-in-out,width .3s ease-in-out;
    transition: transform .3s ease-in-out,width .3s ease-in-out;
    white-space: nowrap;
    overflow: hidden;
}
.sidebar {
    padding-bottom: 10px;
}
.user-panel {
    position: relative;
    width: 100%;
    padding: 10px;
    overflow: hidden;
    color: #fff;
    height: 4em;
}
.user-panel > .info {
    padding: 5px 5px 5px 15px;
    line-height: 1;
    position: absolute;
    left: 55px;
}
.user-panel > .info > a {
    text-decoration: none;
    padding-right: 5px;
    margin-top: 3px;
    font-size: 11px;
}
.user-panel > .info > a > .fa, .user-panel > .info > a > .ion, .user-panel > .info > a > .glyphicon {
    margin-right: 3px;
}
</style>
