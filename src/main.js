import Vue from 'vue'
import App from './App.vue'
import router from "./routes";
import store from "./stores";
import VueApexCharts from 'vue-apexcharts'
import NavbarDashboard from "./components/NavbarDashboard.vue"


Vue.config.productionTip = false
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
Vue.component('NavbarDashboard', NavbarDashboard)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
