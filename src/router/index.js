import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
import OverviewView from '../views/Overview.vue'

import CollectorView from '../views/Collector.vue'
import HostView from '../views/Host.vue'

import DockerContainersView from '../views/DockerContainers.vue'
import DockerHostsView from '../views/DockerHosts.vue'
import DockerNetworksView from '../views/DockerNetworks.vue'
import DockerVolumesView from '../views/DockerVolumes.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', auth: false, component: HomeView },
    { path: '/login', auth: false, component: LoginView },
    { path: '/overview', auth: true, component: OverviewView },
    { path: '/collector/:id', auth: true, component: CollectorView },
    { path: '/host/:id', auth: true, component: HostView },
    { path: '/docker/hosts', auth: true, component: DockerHostsView },
    { path: '/docker/containers', auth: true, component: DockerContainersView },
    //{ path: '/docker/host/:host_id/container/:container_id', auth: true, component: DockerContainerView },
    { path: '/docker/networks', auth: true, component: DockerNetworksView },
    //{ path: '/docker/host/:host_id/network/:network_id', auth: true, component: DockerNetworkView },
    { path: '/docker/volumes', auth: true, component: DockerVolumesView }
    //{ path: '/docker/host/:host_id/volume/:volume_id', auth: true, component: DockerVolumeView },
  ]
})
//TODO enforce forbidden without auth
