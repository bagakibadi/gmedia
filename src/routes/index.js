/* eslint-env disabled */

import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../pages/LandingPage.vue";

// Admin
import DashboardAdmin from "../pages/Admin/index.vue";
import PresensiMaster from "../pages/Admin/Presensi.vue";
import MahasiswaMaster from "../pages/Admin/Mahasiswa.vue";

// Pemandu
import DashboardPemandu from "../pages/Pemandu/index.vue";
import PresensiPemandu from "../pages/Pemandu/Presensi.vue";
import MahasiswaPemandu from "../pages/Pemandu/Mahasiswa.vue";

// Mahasiswa
import DashboardMahasiswa from "../pages/Mahasiswa/index.vue";
import ConferenceMahasiswa from "../pages/Mahasiswa/Conference.vue";
import TugasMahasiswa from "../pages/Mahasiswa/Tugas.vue";
import AktivitasMahasiswa from "../pages/Mahasiswa/Aktivitas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: LandingPage,
  },

  // Admin
  {
    path: "/admin",
    name: "Dashboard Admin",
    component: DashboardAdmin,
  },
  {
    path: "/admin/presensi",
    name: "Presensi Master",
    component: PresensiMaster,
  },
  {
    path: "/admin/mahasiswa",
    name: "Mahasiswa Master",
    component: MahasiswaMaster,
  },

  // Pemandu
  {
    path: "/pemandu",
    name: "Dashboard Pemandu",
    component: DashboardPemandu,
  },
  {
    path: "/pemandu/presensi",
    name: "Presensi Pemandu",
    component: PresensiPemandu,
  },
  {
    path: "/pemandu/mahasiswa",
    name: "Mahasiswa Pemandu",
    component: MahasiswaPemandu,
  },

  // Mahasiswa
  {
    path: "/dashboard",
    name: "Dashboard Mahasiswa",
    component: DashboardMahasiswa,
  },
  {
    path: "/dashboard/conference",
    name: "Conference Mahasiswa",
    component: ConferenceMahasiswa
  },
  {
    path: "/dashboard/tugas",
    name: "Tugas Mahasiswa",
    component: TugasMahasiswa
  },
  {
    path: "/dashboard/aktivitas",
    name: "Aktivitas Mahasiswa",
    component: AktivitasMahasiswa
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
