/* eslint-env disabled */

import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import Logout from "../pages/Auth/Logout.vue";

// Admin
import DashboardAdmin from "../pages/Admin/index.vue";
import PresensiMaster from "../pages/Admin/Presensi.vue";
import MahasiswaMaster from "../pages/Admin/Mahasiswa.vue";
import BankSoal from "../pages/Admin/BankSoal.vue";
import BuatSoalEsai from "../pages/Admin/BuatSoalEsai.vue";
import EditSoalEsai from "../pages/Admin/EditSoalEsai.vue";
import BuatSoalPG from "../pages/Admin/BuatSoalPG.vue";
import EditSoalPG from "../pages/Admin/EditSoalPG.vue";
import BuatSoalUpload from "../pages/Admin/BuatSoalUpload.vue";
import EditSoalUpload from "../pages/Admin/EditSoalUpload.vue";
import TugasMaster from "../pages/Admin/Penugasan.vue";
import PilihGugus from "../pages/Admin/BuatTugas0.vue";
import AturTugas from "../pages/Admin/BuatTugas1.vue";
import BobotSoal from "../pages/Admin/BuatTugas2.vue";
import DetailTugas from "../pages/Admin/DetailTugas.vue";
import PenilaianMaster from "../pages/Admin/Penilaian.vue";
import PenilaianTugas from "../pages/Admin/PenilaianTugasGugus.vue";
import PenilaianDetail from "../pages/Admin/PenilaianDetail.vue";
import StreamingMaster from "../pages/Admin/Streaming.vue";
import kegiatanMaster from "../pages/Admin/Kegiatan.vue";
import TambahKegiatanMaster from "../pages/Admin/TambahKegiatan.vue";
import EditKegiatanMaster from "../pages/Admin/EditKegiatan.vue";
import pemanduMaster from "../pages/Admin/Pemandu.vue";
import userManagement from "../pages/Admin/UserManagement.vue";
import gugusMaster from "../pages/Admin/Gugus.vue";
import prodiMaster from "../pages/Admin/Prodi.vue";

// Pemandu
import DashboardPemandu from "../pages/Pemandu/index.vue";
import PresensiPemandu from "../pages/Pemandu/Presensi.vue";
import MahasiswaPemandu from "../pages/Pemandu/Mahasiswa.vue";
import ChatPemandu from "../pages/Pemandu/Chat.vue";
import PenilaianPemandu from "../pages/Pemandu/PenilaianPemandu.vue";
import PenilaianDetailPemandu from "../pages/Pemandu/PenilaianDetailPemandu.vue";

// Mahasiswa
import DashboardMahasiswa from "../pages/Mahasiswa/index.vue";
import ConferenceMahasiswa from "../pages/Mahasiswa/Conference.vue";
import ListConferenceMahasiswa from "../pages/Mahasiswa/ListConference.vue";
import TugasMahasiswa from "../pages/Mahasiswa/Tugas.vue";
import DoTugas from "../pages/Mahasiswa/DoTugas.vue";
import KuisMahasiswa from "../pages/Mahasiswa/Kuis.vue";
import AktivitasMahasiswa from "../pages/Mahasiswa/Aktivitas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing Page",
    component: LandingPage,
  },
  {
    path: "/logout",
    name: "Logout",
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
    path: "/admin/bank-soal/edit-esai/:id",
    name: "Edit Soal Esai",
    component: EditSoalEsai,
  },
  {
    path: "/admin/bank-soal/tambah-pilihan-ganda",
    name: "Buat Soal Pilihan Ganda",
    component: BuatSoalPG,
  },
  {
    path: "/admin/bank-soal/edit-pilihan-ganda/:id",
    name: "Edit Soal Pilihan Ganda",
    component: EditSoalPG,
  },
  {
    path: "/admin/bank-soal/tambah-upload",
    name: "Buat Soal Upload",
    component: BuatSoalUpload,
  },
  {
    path: "/admin/bank-soal/edit-upload/:id",
    name: "Edit Soal Upload",
    component: EditSoalUpload,
  },
  {
    path: "/admin/tugas",
    name: "Tugas Master",
    component: TugasMaster,
  },
  {
    path: "/admin/tugas/buat-tugas-1",
    name: "Pilih Gugus",
    component: PilihGugus,
  },
  {
    path: "/admin/tugas/buat-tugas-2",
    name: "Atur Tugas",
    component: AturTugas,
  },
  {
    path: "/admin/tugas/buat-tugas-3",
    name: "Set Bobot Soal",
    component: BobotSoal,
  },
  {
    path: "/admin/tugas/detail/:id",
    name: "Detail Tugas",
    component: DetailTugas,
  },
  {
    path: "/admin/penilaian",
    name: "Penilaian Master",
    component: PenilaianMaster,
  },
  {
    path: "/admin/penilaian/:name/:id",
    name: "Penilaian Tugas",
    component: PenilaianTugas,
  },
  {
    path: "/admin/penilaian/:name_gugus/:id_gugus/:name_tugas-:id_tugas",
    name: "Detail Penilaian",
    component: PenilaianDetail,
  },
  {
    path: "/admin/streaming",
    name: "Streaming Master",
    component: StreamingMaster,
  },
  {
    path: "/admin/kegiatan",
    name: "Kegiatan Master",
    component: kegiatanMaster,
  },
  {
    path: "/admin/kegiatan/tambah",
    name: "Tambah Kegiatan Master",
    component: TambahKegiatanMaster,
  },
  {
    path: "/admin/kegiatan/edit/:id",
    name: "Edit Kegiatan Master",
    component: EditKegiatanMaster,
  },
  {
    path: "/admin/pemandu",
    name: "Pemandu Master",
    component: pemanduMaster,
  },
  {
    path: "/admin/usermanagement",
    name: "User Management",
    component: userManagement,
  },
  {
    path: "/admin/gugus",
    name: "Gugus Master",
    component: gugusMaster,
  },
  {
    path: "/admin/prodi",
    name: "Prodi Master",
    component: prodiMaster,
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
  {
    path: "/pemandu/chat",
    name: "Chat Pemandu",
    component: ChatPemandu,
  },
  {
    path: "/pemandu/penilaian",
    name: "Penilaian Pemandu",
    component: PenilaianPemandu,
  },
  {
    path: "/pemandu/penilaian/:name-:id",
    name: "Detail Penilaian",
    component: PenilaianDetailPemandu,
  },

  // Mahasiswa
  {
    path: "/dashboard",
    name: "Dashboard Mahasiswa",
    component: DashboardMahasiswa,
  },
  {
    path: "/dashboard/conference",
    name: "List Conference",
    component: ListConferenceMahasiswa
  },
  {
    path: "/dashboard/conference/:id",
    name: "Conference Mahasiswa",
    component: ConferenceMahasiswa,
  },
  {
    path: "/dashboard/tugas",
    name: "Tugas Mahasiswa",
    component: TugasMahasiswa,
  },
  {
    path: "/dashboard/tugas/:id",
    name: "Do Tugas",
    component: DoTugas,
  },
  {
    path: "/dashboard/kuis",
    name: "Kuis Mahasiswa",
    component: KuisMahasiswa,
  },
  {
    path: "/dashboard/aktivitas",
    name: "Aktivitas Mahasiswa",
    component: AktivitasMahasiswa,
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
