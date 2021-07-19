import Vue from 'vue'
import App from './App.vue'
import router from "./routes";
import store from "./stores";
import VueApexCharts from 'vue-apexcharts'
import NavbarAdmin from "./components/NavbarAdmin.vue"
import NavbarPemandu from "./components/NavbarPemandu.vue"
import NavbarMahasiswa from "./components/NavbarMahasiswa.vue"


Vue.config.productionTip = false

// Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
Vue.component('NavbarAdmin', NavbarAdmin)
Vue.component('NavbarPemandu', NavbarPemandu)
Vue.component('NavbarMahasiswa', NavbarMahasiswa)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
