<template>
<header class="main-header" id="sidenav">
  <a href="/" class="logo">
    <!-- mini logo for sidebar mini 40x50 pixels -->
    <span class="logo-mini"><img src="../assets/logo.svg" width="36px" height="36px" alt="Logo" class="img-responsive center-block"></span>
    <!-- logo for regular state and mobile devices -->
    <div class="container logo-lg">
      <div class="pull-left image"><img src="../assets/logo.svg" width="36px" height="36px" alt="Logo" class="img-responsive"></div>
      <div class="pull-left info">SMI</div>
    </div>
  </a>
</header>
</template>

<script>
export default {
  name: 'headernav'
}
</script>

<style scoped>
.main-header {
    position: relative;
    max-height: 100px;
    z-index: 1030;
}
.main-header .logo {
   background-color: #367fa9;
   color: #fff;
   border-bottom: 0 solid transparent;
}
.main-header .logo img{
   margin: 7px;
}
.main-header .logo .info{
  margin-top: 5px;
  margin-left: 5px;
  font-size: 180%;
  font-weight: bold;
}
.main-header>.navbar {
	-webkit-transition:margin-left .3s ease-in-out;
	-o-transition:margin-left .3s ease-in-out;
	transition:margin-left .3s ease-in-out;
	margin-bottom:0;
	margin-left:230px;
	border:none;
	min-height:50px;
	border-radius:0
}
.layout-top-nav .main-header>.navbar {
	margin-left:0
}
.main-header #navbar-search-input.form-control {
	background:rgba(255,255,255,0.2);
	border-color:transparent
}

.main-header #navbar-search-input.form-control:focus,.main-header #navbar-search-input.form-control:active {
	border-color:rgba(0,0,0,0.1);
	background:rgba(255,255,255,0.9)
}
.main-header #navbar-search-input.form-control::-moz-placeholder {
	color:#ccc;
	opacity:1
}
.main-header #navbar-search-input.form-control:-ms-input-placeholder {
	color:#ccc
}
.main-header #navbar-search-input.form-control::-webkit-input-placeholder {
	color:#ccc
}
.main-header .navbar-custom-menu,.main-header .navbar-right {
	float:right
}
@media (max-width:991px) {
	.main-header .navbar-custom-menu a,.main-header .navbar-right a {
		color:inherit;
		background:transparent
	}
}
@media (max-width:767px) {
	.main-header .navbar-right {
		float:none
	}
	.navbar-collapse .main-header .navbar-right {
		margin:7.5px -15px
	}
	.main-header .navbar-right>li {
		color:inherit;
		border:0
	}
}
.main-header .sidebar-toggle {
	float:left;
	background-color:transparent;
	background-image:none;
	padding:15px 15px;
	font-family:fontAwesome
}
.main-header .sidebar-toggle:before {
	content:"\f0c9"
}
.main-header .sidebar-toggle:hover {
	color:#fff
}
.main-header .sidebar-toggle:focus,.main-header .sidebar-toggle:active {
	background:transparent
}
.main-header .sidebar-toggle .icon-bar {
	display:none
}
.main-header .navbar .nav>li.user>a>.fa,.main-header .navbar .nav>li.user>a>.glyphicon,.main-header .navbar .nav>li.user>a>.ion {
	margin-right:5px
}
.main-header .navbar .nav>li>a>.label {
	position:absolute;
	top:9px;
	right:7px;
	text-align:center;
	font-size:9px;
	padding:2px 3px;
	line-height:.9
}
.main-header .logo {
	-webkit-transition:width .3s ease-in-out;
	-o-transition:width .3s ease-in-out;
	transition:width .3s ease-in-out;
	display:block;
	float:left;
	height:50px;
	font-size:20px;
	line-height:50px;
	text-align:center;
	width:230px;
	font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
	padding:0 15px;
	font-weight:300;
	overflow:hidden
}
.main-header .logo .logo-lg {
	display:block
}
.main-header .logo .logo-mini {
	display:none
}
.main-header .navbar-brand {
	color:#fff
}
</style>
