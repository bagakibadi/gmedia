/* eslint-env disabled */

import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import DashboardAdmin from "../pages/Admin/index.vue";
import DashboardPemandu from "../pages/Pemandu/index.vue";
import DashboardMahasiswa from "../pages/Mahasiswa/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: LandingPage,
  },
  {
    path: "/admin",
    name: "Dashboard Admin",
    component: DashboardAdmin,
  },
  {
    path: "/admin",
    name: "Dashboard Admin",
    component: DashboardAdmin,
  },
  {
    path: "/pemandu",
    name: "Dashboard Pemandu",
    component: DashboardPemandu,
  },
  {
    path: "/dashboard",
    name: "Dashboard Mahasiswa",
    component: DashboardMahasiswa,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
