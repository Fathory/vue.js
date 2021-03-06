import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/vue-fontawesome'

Vue.use(VueSidebarMenu)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  el: "#app",
  render: h => h(App),
  router
})

// Vue.createApp(App).mount('#app')
