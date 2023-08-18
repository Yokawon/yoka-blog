import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Sidebar from './components/Sidebar/Sidebar.vue'

Vue.use(VueRouter)
Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(Sidebar.name, Sidebar)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
