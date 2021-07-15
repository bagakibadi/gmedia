<template>
  <div class="dashboard-navigation">
    <div class="sidebar">
      <router-link :to="{ name: 'Index' }">
        <div class="d-lg-flex align-items-center d-none mb-4">
          <!-- <img src="../assets/images/logo.svg" alt="" style="height: 45px;" /> -->
          <div class="logo-text ms-2">
            KAREEM
          </div>
        </div>
      </router-link>
      <div
        class="btn btn-light d-flex align-items-center d-lg-none d-block mb-4"
        @click="sidebar"
      >
        <i class="fas fa-times me-2"></i>
        Close
      </div>
      <div class="d-flex align-items-center pb-4">
        <div
          class="profile-img d-flex justify-content-center align-items-center"
        >
          <!-- <img src="../assets/images/profile.jpeg" alt="" /> -->
        </div>
        <div class="ms-2">
          <div class="name-member">
            Abin Jatmiko
          </div>
          <div class="title-role">Account Manager</div>
        </div>
      </div>
      <div class="menu-wrapper">
        <router-link :to="{ name: 'Dashboard AM' }">
          <div
            :class="
              `item ${
                $route.fullPath == '/account-manager' ? 'active' : ''
              } d-flex align-items-center`
            "
          >
            <i class="fas fa-home"></i>
            <div class="text">Beranda</div>
          </div>
        </router-link>

        <div
          :class="
            `item ${
              link[2] == 'order' ? 'active' : ''
            } d-flex align-items-center`
          "
          data-bs-toggle="collapse"
          data-bs-target="#order"
          aria-expanded="false"
          aria-controls="order"
        >
          <i class="fas fa-sticky-note"></i>
          <div class="text">Order</div>
        </div>
        <div class="collapse show" id="order">
          <router-link :to="{ name: 'List Penawaran' }">
            <div
              :class="
                `item sub ${
                  link[3] == 'penawaran' ? 'active' : ''
                } d-flex align-items-center`
              "
            >
              <i class="fas fa-minus"></i>
              <div class="text">Penawaran</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="menu-wrapper">
        <div class="item d-flex align-items-center">
          <i class="far fa-user"></i>
          <div class="text">Profile</div>
        </div>
        <div class="item logout d-flex align-items-center">
          <i class="fas fa-sign-out-alt"></i>
          <div class="text">Logout</div>
        </div>
      </div>
    </div>
    <nav>
      <div
        class="main-section d-flex justify-content-between align-items-center"
      >
        <div class="d-lg-none d-block d-flex align-items-center">
          <router-link :to="{ name: 'Index' }">
            <!-- <img src="../assets/images/logo.svg" alt="" style="height: 45px;" /> -->
          </router-link>
          <div class="menu-bar" @click="sidebar">
            <i class="fas fa-bars text-success"></i>
          </div>
        </div>
        <div class="search-section">
          <input type="text" class="form-control" placeholder="Cari" />
          <div
            class="search-btn d-flex justify-content-center align-items-center"
          >
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div class="d-flex">
          <div class="position-relative">
            <div
              class="notif-count d-flex justify-content-center align-items-center"
            >
              10
            </div>
            <div class="notif d-flex align-items-center justify-content-center">
              <i class="fas fa-bell"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
/* eslint-env jquery */
import Swal from "sweetalert2";

export default {
  data: function() {
    return {
      link: this.$route.fullPath.split("/"),
      section: 0,
      user: this.$store.state.userData,
      add: null,
    };
  },
  beforeCreate() {
    this.$store;
    console.log(this.$store.state);
  },
  methods: {
    submit() {
      this.section = 0;
      Swal.fire("Data Berhasil Disimpan", "", "success");
      $("#request-modal").modal("hide");
    },
    sidebar() {
      $(".sidebar").toggleClass("show");
    },
  },
  mounted() {},
};
</script>
