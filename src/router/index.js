import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
import OverviewView from '../views/Overview.vue'

import CollectorView from '../views/Collector.vue'
import CollectorAddView from '../views/CollectorAdd.vue'
import HostView from '../views/Host.vue'

import DockerContainersView from '../views/DockerContainers.vue'
import DockerHostsView from '../views/DockerHosts.vue'
import DockerNetworksView from '../views/DockerNetworks.vue'
import DockerVolumesView from '../views/DockerVolumes.vue'


Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { path: '/', meta:{auth: false}, component: HomeView },
    { path: '/login', meta:{auth: false}, component: LoginView },
    { path: '/overview', meta:{auth: true}, component: OverviewView },
    { path: '/collector/add', meta:{auth: true}, component: CollectorAddView },
    { path: '/collector/:id', meta:{auth: true}, component: CollectorView },
    { path: '/host/:id', meta:{auth: true}, component: HostView },
    { path: '/docker/hosts', meta:{auth: true}, component: DockerHostsView },
    { path: '/docker/containers', meta:{auth: true}, component: DockerContainersView },
    //{ path: '/docker/host/:host_id/container/:container_id', auth: true, component: DockerContainerView },
    { path: '/docker/networks', meta:{auth: true}, component: DockerNetworksView },
    //{ path: '/docker/host/:host_id/network/:network_id', auth: true, component: DockerNetworkView },
    { path: '/docker/volumes', meta:{auth: true}, component: DockerVolumesView }
    //{ path: '/docker/host/:host_id/volume/:volume_id', auth: true, component: DockerVolumeView },
    //{ path: '*', component: NotFoundComponent }
  ]
});
// check if route requires authentication
router.beforeEach(function (to,from,next) {
  //console.log("beforeEach",to,from,next,this);

  console.log("beforeEach",to.meta.auth, router.app.$backend.auth().currentUser );
  if (to.meta.auth && router.app.$backend.auth().currentUser == null) { //TODO not use global app but pass by router
     localStorage.loginBackPath=to.path;
     next("/login");
  } else {
     next();
  }
})
export default router;
