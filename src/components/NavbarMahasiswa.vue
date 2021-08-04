<template>
  <div class="dashboard-navigation">
    <div :class="`sidebar ${$attrs.widthContent > 992 ? '' : 'hide'}`">
      <div
        class="btn btn-light d-flex align-items-center d-lg-none d-block mb-4"
        @click="sidebar"
      >
        <i class="fas fa-times me-2"></i>
        Close
      </div>
      <router-link :to="{ name: 'Index' }">
        <div class="d-flex align-items-center mb-4">
          <img src="../assets/images/logo.png" alt="" style="height: 45px;" />
          <div class="logo-text ms-2">
            PKK-BN
          </div>
        </div>
      </router-link>
      <div class="menu-wrapper">
        <div class="menu-name">Menu</div>
        <router-link :to="{ name: 'Dashboard Mahasiswa' }">
          <div
            :class="
              `item ${
                $route.fullPath == '/dashboard' ? 'active' : ''
              } d-flex align-items-center`
            "
          >
            <div
              style="width: 20px"
              class="icons d-flex justify-content-center me-2"
            >
              <img class="none" src="../assets/icons/presensi.svg" alt="" />
              <img
                class="active"
                src="../assets/icons/presensi-active.svg"
                alt=""
              />
            </div>
            <div class="text">Presensi</div>
          </div>
        </router-link>

        <router-link :to="{ name: 'Aktivitas Mahasiswa' }">
          <div
            :class="
              `item ${
                $route.fullPath == '/dashboard/aktivitas' ? 'active' : ''
              } d-flex align-items-center`
            "
          >
            <div
              style="width: 20px"
              class="icons d-flex justify-content-center me-2"
            >
              <img class="none" src="../assets/icons/Aktivitas.svg" alt="" />
              <img
                class="active"
                src="../assets/icons/Aktivitas-active.svg"
                alt=""
              />
            </div>
            <div class="text">Aktifitas</div>
          </div>
        </router-link>

        <div
          :class="
            `item ${
              link[2] === 'tugas' || link[2] === 'kuis' ? 'collapsed' : ''
            } d-flex align-items-center`
          "
          data-bs-toggle="collapse"
          data-bs-target="#order"
          aria-expanded="false"
          aria-controls="order"
        >
          <div
            style="width: 20px"
            class="icons d-flex justify-content-center me-2"
          >
            <img class="none" src="../assets/icons/penugasan.svg" alt="" />
            <img
              class="active"
              src="../assets/icons/penugasan-active.svg"
              alt=""
            />
          </div>
          <div class="text">Penugasan</div>
        </div>
        <div :class="`collapse ${
          link[2] === 'tugas' || link[2] === 'kuis' ? 'show' : ''
          }`" id="order">
          <router-link :to="{ name: 'Tugas Mahasiswa' }">
            <div
              :class="
                `item sub ${
                  link[2] == 'tugas' ? 'active' : ''
                } d-flex align-items-center`
              "
            >
              <div class="icons">
                <img style="width: 10px;height: 10px;" class="none" src="../assets/icons/circle.svg" alt="" />
                <img
                  style="width: 10px;height: 10px;"
                  class="active"
                  src="../assets/icons/circle-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Tugas</div>
            </div>
          </router-link>
          <!-- <router-link :to="{ name: 'Kuis Mahasiswa' }">
            <div
              :class="
                `item sub ${
                  link[2] == 'kuis' ? 'active' : ''
                } d-flex align-items-center`
              "
            >
              <div class="icons">
                <img style="width: 10px;height: 10px;" class="none" src="../assets/icons/circle.svg" alt="" />
                <img
                  style="width: 10px;height: 10px;"
                  class="active"
                  src="../assets/icons/circle-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Kuis</div>
            </div>
          </router-link> -->
        </div>

        <router-link :to="{ name: 'List Conference' }">
          <div
            :class="
                `item ${
                  link[2] == 'confrence' ? 'active' : ''
                } d-flex align-items-center`
              "
          >
            <div
              style="width: 20px"
              class="icons d-flex justify-content-center me-2"
            >
              <img class="none" src="../assets/icons/streaming.svg" alt="" />
              <img
                class="active"
                src="../assets/icons/streaming-active.svg"
                alt=""
              />
            </div>
            <div class="text">Streaming</div>
          </div>
        </router-link>
      </div>
      <div class="menu-wrapper">
        <div class="menu-name">Lainnya</div>
        <div class="item logout d-flex align-items-center" @click="logout">
          <div class="icons">
            <img class="none" src="../assets/icons/login.svg" alt="" />
            <img
              class="active"
              src="../assets/icons/login-active.svg"
              alt=""
            />
          </div>
          <div class="text">Log out</div>
        </div>
      </div>
    </div>
    <div :class="`content ${$attrs.widthContent > 992 ? '' : 'hide'}`">
      <div class="section pt-3">
        <nav>
          <div class="card-shadow mb-4">
            <div class="py-2 px-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="menu-bar" @click="sidebar">
                  <i class="fas fa-bars"></i>
                </div>
                <div class="d-flex align-items-center">
                  <div class="notif position-relative me-4">
                    <img src="../assets/icons/notif.svg" alt="" width="19" />
                    <div
                      class="notif-count d-flex align-items-center justify-content-center"
                    >
                      4
                    </div>
                  </div>
                  <div class="d-flex align-items-center" v-if="userData">
                    <div class="text-end me-2">
                      <div class="username">{{ userData.data.nama }}</div>
                      <div class="role">Mahasiswa</div>
                    </div>
                    <div
                      class="profile align-items-center justify-content-center"
                    >
                      <img src="../assets/images/profile.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-env jquery */
import Swal from "sweetalert2";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userData"]),
  },
  data: function() {
    return {
      link: this.$route.fullPath.split("/"),
    };
  },
  beforeCreate() {
    this.$store.dispatch("getMahasiswa");
  },
  methods: {
    submit() {
      this.section = 0;
      Swal.fire("Data Berhasil Disimpan", "", "success");
      $("#request-modal").modal("hide");
    },
    sidebar() {
      $(".sidebar").toggleClass("hide");
      $(".content").toggleClass("hide");
    },
    logout() {
      localStorage.clear();
      window.location.replace("/");
    },
  },
  mounted() {},
};
</script>

<style scoped>
</style>