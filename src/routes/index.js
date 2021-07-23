/* eslint-env disabled */

import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import Logout from '../pages/Auth/Logout.vue';

// Admin
import DashboardAdmin from "../pages/Admin/index.vue";
import PresensiMaster from "../pages/Admin/Presensi.vue";
import MahasiswaMaster from "../pages/Admin/Mahasiswa.vue";
import BankSoal from "../pages/Admin/BankSoal.vue";
import BuatSoalEsai from "../pages/Admin/BuatSoalEsai.vue";
import BuatSoalPG from "../pages/Admin/BuatSoalPG.vue";
import TugasMaster from "../pages/Admin/Penugasan.vue";
import StreamingMaster from "../pages/Admin/Streaming.vue";

// Pemandu
import DashboardPemandu from "../pages/Pemandu/index.vue";
import PresensiPemandu from "../pages/Pemandu/Presensi.vue";
import MahasiswaPemandu from "../pages/Pemandu/Mahasiswa.vue";

// Mahasiswa
import DashboardMahasiswa from "../pages/Mahasiswa/index.vue";
import ConferenceMahasiswa from "../pages/Mahasiswa/Conference.vue";
import TugasMahasiswa from "../pages/Mahasiswa/Tugas.vue";
import KuisMahasiswa from "../pages/Mahasiswa/Kuis.vue";
import AktivitasMahasiswa from "../pages/Mahasiswa/Aktivitas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: LandingPage,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
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
  {
    path: "/admin/bank-soal",
    name: "Bank Soal",
    component: BankSoal,
  },
  {
    path: "/admin/bank-soal/tambah-esai",
    name: "Buat Soal Esai",
    component: BuatSoalEsai,
  },
  {
    path: "/admin/bank-soal/tambah-pilihan-ganda",
    name: "Buat Soal Pilihan Ganda",
    component: BuatSoalPG,
  },
  {
    path: "/admin/tugas",
    name: "Tugas Master",
    component: TugasMaster,
  },
  {
    path: "/admin/streaming",
    name: "Streaming Master",
    component: StreamingMaster,
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
    path: "/dashboard/kuis",
    name: "Kuis Mahasiswa",
    component: KuisMahasiswa
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
