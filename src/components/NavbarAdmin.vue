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
            BEM KM UPN "Veteran" Yogyakarta
          </div>
        </div>
      </router-link>
      <div class="height-hide">
        <div class="menu-wrapper">
          <router-link :to="{ name: 'Dashboard Admin' }">
            <div
              :class="
                `item ${
                  $route.fullPath == '/admin' ? 'active' : ''
                } d-flex align-items-center`
              "
            >
              <div
                style="width: 20px"
                class="icons d-flex justify-content-center me-2"
              >
                <img class="none" src="../assets/icons/dashboard.svg" alt="" />
                <img
                  class="active"
                  src="../assets/icons/dashboard-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Dashboard</div>
            </div>
          </router-link>
        </div>
        <div class="menu-wrapper">
          <div class="menu-name">Menu</div>
          <router-link :to="{ name: 'Presensi Master' }">
            <div
              :class="
                `item ${
                  link[2] == 'presensi' ? 'active' : ''
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
              <div class="text">Data Presensi</div>
            </div>
          </router-link>

          <router-link :to="{ name: 'Mahasiswa Master' }">
            <div
              :class="
                `item ${
                  link[2] == 'mahasiswa' ? 'active' : ''
                } d-flex align-items-center`
              "
            >
              <div
                style="width: 20px"
                class="icons d-flex justify-content-center me-2"
              >
                <img class="none" src="../assets/icons/mahasiswa.svg" alt="" />
                <img
                  class="active"
                  src="../assets/icons/mahasiswa-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Data Mahasiswa</div>
            </div>
          </router-link>

          <router-link :to="{ name: 'Pemandu Master' }">
            <div
              :class="
                `item ${
                  link[2] == 'pemandu' ? 'active' : ''
                } d-flex align-items-center`
              "
            >
              <div
                style="width: 20px"
                class="icons d-flex justify-content-center me-2"
              >
                <img class="none" src="../assets/icons/mahasiswa.svg" alt="" />
                <img
                  class="active"
                  src="../assets/icons/mahasiswa-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Data Pemandu</div>
            </div>
          </router-link>

          <router-link :to="{ name: 'Kegiatan Master' }">
            <div
              :class="
                `item ${
                  $route.fullPath == '/admin/kegiatan' ? 'active' : ''
                } d-flex align-items-center`
              "
            >
              <div
                style="width: 20px"
                class="icons d-flex justify-content-center me-2"
              >
                <img class="none" src="../assets/icons/jadwal.svg" alt="" />
                <img
                  class="active"
                  src="../assets/icons/jadwal-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Jadwal Kegiatan</div>
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
          <div class="collapse show" id="order">
            <router-link :to="{ name: 'Bank Soal' }">
              <div
                :class="
                  `item sub ${
                    link[2] == 'bank-soal' ? 'active' : ''
                  } d-flex align-items-center`
                "
              >
                <div class="icons">
                  <img
                    style="width: 10px;height: 10px;"
                    class="none"
                    src="../assets/icons/circle.svg"
                    alt=""
                  />
                  <img
                    style="width: 10px;height: 10px;"
                    class="active"
                    src="../assets/icons/circle-active.svg"
                    alt=""
                  />
                </div>
                <div class="text">Bank Soal</div>
              </div>
            </router-link>
            <router-link :to="{ name: 'Tugas Master' }">
              <div
                :class="
                  `item sub ${
                    link[2] == 'tugas' ? 'active' : ''
                  } d-flex align-items-center`
                "
              >
                <div class="icons">
                  <img
                    style="width: 10px;height: 10px;"
                    class="none"
                    src="../assets/icons/circle.svg"
                    alt=""
                  />
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
            <router-link :to="{ name: 'Penilaian Master' }">
              <div
                :class="
                  `item sub ${
                    link[2] == 'penilaian' ? 'active' : ''
                  } d-flex align-items-center`
                "
              >
                <div class="icons">
                  <img
                    style="width: 10px;height: 10px;"
                    class="none"
                    src="../assets/icons/circle.svg"
                    alt=""
                  />
                  <img
                    style="width: 10px;height: 10px;"
                    class="active"
                    src="../assets/icons/circle-active.svg"
                    alt=""
                  />
                </div>
                <div class="text">Penilaian</div>
              </div>
            </router-link>
          </div>
          <router-link :to="{ name: 'Streaming Master' }">
            <div
              :class="
                `item ${
                  $route.fullPath == '/admin/streaming' ? 'active' : ''
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

          <router-link :to="{ name: 'Kontent Master' }">
            <div
              :class="
                `item ${
                  link[2] == 'konten' ? 'active' : ''
                } d-flex align-items-center`
              "
            >
              <div
                style="width: 20px"
                class="icons d-flex justify-content-center me-2"
              >
                <img class="none" src="../assets/icons/setting.svg" alt="" />
                <img
                  class="active"
                  src="../assets/icons/setting-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Konten & Informasi</div>
            </div>
          </router-link>
          <router-link :to="{ name: 'User Management' }">
            <div
              :class="
                `item ${
                  link[2] == 'usermanagement' ? 'active' : ''
                } d-flex align-items-center`
              "
              data-bs-toggle="collapse"
              data-bs-target="#userManagement"
              aria-expanded="false"
              aria-controls="order"
            >
              <div
                style="width: 20px"
                class="icons d-flex justify-content-center me-2"
              >
                <img class="none" src="../assets/icons/user.svg" alt="" />
                <img
                  class="active"
                  src="../assets/icons/user-active.svg"
                  alt=""
                />
              </div>
              <div class="text">User Management</div>
            </div>
          </router-link>
          <router-link :to="{ name: 'Gugus Master' }">
            <div
              :class="
                `item ${
                  link[2] == 'gugus' ? 'active' : ''
                } d-flex align-items-center`
              "
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="order"
            >
              <div
                style="width: 20px"
                class="icons d-flex justify-content-center me-2"
              >
                <img class="none" src="../assets/icons/user.svg" alt="" />
                <img
                  class="active"
                  src="../assets/icons/user-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Data Gugus</div>
            </div>
          </router-link>
          <router-link :to="{ name: 'Fakultas Master' }">
            <div
              :class="
                `item ${
                  link[2] == 'fakultas' ? 'active' : ''
                } d-flex align-items-center`
              "
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="order"
            >
              <div
                style="width: 20px"
                class="icons d-flex justify-content-center me-2"
              >
                <img class="none" src="../assets/icons/user.svg" alt="" />
                <img
                  class="active"
                  src="../assets/icons/user-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Data Fakultas</div>
            </div>
          </router-link>
          <router-link :to="{ name: 'Prodi Master' }">
            <div
              :class="
                `item ${
                  link[2] == 'prodi' ? 'active' : ''
                } d-flex align-items-center`
              "
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="order"
            >
              <div
                style="width: 20px"
                class="icons d-flex justify-content-center me-2"
              >
                <img class="none" src="../assets/icons/user.svg" alt="" />
                <img
                  class="active"
                  src="../assets/icons/user-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Data Prodi</div>
            </div>
          </router-link>
          <router-link :to="{ name: 'Fakultas Master' }">
            <div
              :class="
                `item ${
                  link[2] == 'fakultas' ? 'active' : ''
                } d-flex align-items-center`
              "
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="order"
            >
              <div
                style="width: 20px"
                class="icons d-flex justify-content-center me-2"
              >
                <img class="none" src="../assets/icons/user.svg" alt="" />
                <img
                  class="active"
                  src="../assets/icons/user-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Data Fakultas</div>
            </div>
          </router-link>
          <!-- <div class="collapse show" id="userManagement">
            <router-link :to="{ name: 'Pemandu Master' }">
              <div
                :class="
                  `item sub ${
                    link[2] == 'pemandu' ? 'active' : ''
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
                <div class="text">Pemandu</div>
              </div>
            </router-link>
          </div> -->
        </div>
        <div class="menu-wrapper">
          <div class="menu-name">Lainnya</div>
          <router-link :to="{ name: 'Logout' }">
            <div class="item logout d-flex align-items-center">
              <div class="icons">
                <img class="none" src="../assets/icons/login.svg" alt="" />
                <img
                  class="active"
                  src="../assets/icons/login-active.svg"
                  alt=""
                />
              </div>
              <div class="text">Logout</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div :class="`content ${$attrs.widthContent > 992 ? '' : 'hide'}`">
      <div class="section pt-3 mb-5">
        <nav>
          <div class="card-shadow">
            <div class="py-2 px-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="menu-bar" @click="sidebar">
                  <i class="fas fa-bars"></i>
                </div>
                <div class="d-flex align-items-center">
                  <!-- <div class="notif position-relative me-4">
                    <img src="../assets/icons/notif.svg" alt="" width="19" />
                    <div
                      class="notif-count d-flex align-items-center justify-content-center"
                    >
                      4
                    </div>
                  </div> -->
                  <div class="d-flex align-items-center" v-if="userData">
                    <div class="text-end me-2">
                      <div class="username">{{ userData.data.nama }}</div>
                      <div class="role">Superadmin</div>
                    </div>
                    <div
                      class="profile align-items-center justify-content-center"
                    >
                      <img
                        src="../assets/ilustrasi/avatar-superadmin.svg"
                        alt=""
                        v-if="
                          userData.data.foto == '' ||
                            userData.data.foto == 'foto.jpg'
                        "
                      />
                      <img :src="userData.data.foto" v-else alt="" />
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
    this.$store.dispatch("getAdmin");
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

<style scoped></style>
