<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div
              class="d-flex flex-wrap justify-content-between align-items-center"
            >
              <div class="title-content">Data Presensi</div>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div
              class="d-flex flex-column flex-md-row align-items-end justify-content-between"
            >
              <div class="d-flex">
                <div class="me-2" style="max-width: 200px;">
                  <label class="form-label">Prodi</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="filter.prodi"
                    @change="filterData"
                  >
                    <option value="default" selected disabled
                      >- Pilih Prodi -</option
                    >
                    <option
                      :value="prodi.uuid"
                      v-for="(prodi, idProdi) in dataProdi"
                      :key="idProdi"
                      >{{ prodi.nama }}</option
                    >
                  </select>
                </div>
                <div style="max-width: 200px;">
                  <label class="form-label">Tanggal</label>
                  <input
                    class="form-control"
                    type="date"
                    v-model="filter.tanggal"
                    @change="filterData"
                  />
                </div>
              </div>
              <button
                type="button"
                class="btn btn-danger mt-3 mt-md-0"
                v-if="isFilter"
                @click="resetFilterData"
              >
                Reset Filter
              </button>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <Loader text="Sedang memuat data presensi." v-if="!dataPresensi" />
            <div class="table-responsive" v-else>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">NAMA</th>
                    <th scope="col">PRODI</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">TANGGAL</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="align-middle"
                    v-for="(items, index) in dataPresensi.data"
                    :key="index"
                  >
                    <td>
                      <div>
                        <div
                          class="d-flex align-items-center cursor-pointer"
                          data-bs-toggle="modal"
                          data-bs-target="#lihatPresensi"
                          @click="openPresensi(items.uuid)"
                        >
                          <div
                            class="image d-flex align-items-center justify-content-center"
                          >
                            <img :src="items.foto" alt="" />
                          </div>
                          <div class="ms-3 ">
                            <div class="main-text">
                              {{ items.user.mahasiswa.nama }}
                            </div>
                            <div class="sub-text">{{ items.nim }}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="main-text">
                          {{ items.user.mahasiswa.prodi.nama }}
                        </div>
                        <div class="sub-text">
                          {{ items.user.mahasiswa.gugus.name }}
                        </div>
                      </div>
                    </td>
                    <td>{{ items.user.mahasiswa.email }}</td>
                    <td>
                      <div>
                        <div class="main-text">
                          {{ dateChange(items.created_at) }}
                        </div>
                        <div class="sub-text">
                          Pukul {{ timeChange(items.created_at) }} WIB
                        </div>
                      </div>
                    </td>
                    <td>
                      <div
                        v-if="items.jenis === 'masuk'"
                        class="badge-custom success text-success"
                      >
                        Masuk
                      </div>
                      <div
                        v-if="items.jenis === 'keluar'"
                        class="badge-custom danger text-danger"
                      >
                        Keluar
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm text-white"
                        data-bs-toggle="modal"
                        data-bs-target="#lihatPresensi"
                        @click="openPresensi(items.uuid)"
                      >
                        <i class="fas fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Pagination :data="dataPresensi" :function="navigation" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
    <div
      class="modal fade"
      id="lihatPresensi"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content" v-if="dataOnePresensi">
          <div class="modal-header">
            <h5 class="modal-title">
              Data Presensi Mahasiswa {{ dataOnePresensi.user.mahasiswa.nama }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <Loader text="Sedang memuat detail presensi." v-if="loaderPopUp" />
            <div class="row" v-else>
              <div class="col-lg-4">
                <img class="img-fluid" :src="dataOnePresensi.foto" alt="" />
                <div class="form-group mt-3">
                  <div>
                    <label for="status">Status</label>
                  </div>
                  <div
                    v-if="dataOnePresensi.jenis === 'keluar'"
                    class="badge-custom danger text-danger"
                  >
                    Keluar
                  </div>
                  <div
                    v-if="dataOnePresensi.jenis === 'masuk'"
                    class="badge-custom success text-success"
                  >
                    Masuk
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <form action="" class="modal-presensi">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="nama">Nama Mahasiswa</label>
                        <input
                          type="text"
                          name="nama"
                          readonly
                          id="nama"
                          v-model="dataOnePresensi.user.mahasiswa.nama"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="nim">NIM Mahasiswa</label>
                        <input
                          type="text"
                          name="nim"
                          readonly
                          id="nim"
                          v-model="dataOnePresensi.user.mahasiswa.nim"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group mb-2">
                        <label for="location">Lokasi</label>
                        <textarea
                          name=""
                          id=""
                          style="height: 85px"
                          class=" form-control"
                          readonly
                          v-model="dataOnePresensi.alamat"
                        ></textarea>
                      </div>
                      <div id="map" style="height: 500px;"></div>
                    </div>
                    <div class="col-lg-6"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { mapState } from 'vuex';
/* eslint-env jquery */

export default {
  computed: {
    ...mapState(['url'])
  },
  data: function() {
    return {
      width: null,
      dataPresensi: null,
      dataOnePresensi: null,
      dataProdi: null,
      loaderPopUp: false,
      isFilter: false,
      filter: {
        prodi: "default",
        tanggal: null,
      },
    };
  },
  methods: {
    navigation(url) {
      if (url) {
        this.dataPresensi = null;

        axios
          .get(url, {
            headers: {
              Authorization: localStorage.token,
            },
          })
          .then((res) => {
            console.log(res);
            this.dataPresensi = res.data.data;

            $(document).ready(function() {
              $(".table").DataTable({
                pageLength: 25,
                ordering: false,
                paging: false,
                info: false,
              });
            });
          })
          .catch((err) => {
            console.log(err);
            // localStorage.clear();
          });
      }
    },
    filterData() {
      this.dataPresensi = null;
      (this.isFilter = true),
        axios
          .post(
            `${this.url}bemkm/superadmin/presensi/filter`,
            {
              prodi_id:
                this.filter.prodi == "default" || this.filter.prodi == "all"
                  ? null
                  : this.filter.prodi,
              tanggal: this.filter.tanggal ? this.filter.tanggal : null,
            },
            {
              headers: {
                Authorization: localStorage.token,
              },
            }
          )
          .then((res) => {
            this.dataPresensi = res.data.data;
            $(document).ready(function() {
              $(".table").DataTable({
                pageLength: 25,
                ordering: false,
                paging: false,
                info: false,
              });
            });
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    },
    resetFilterData() {
      this.dataPresensi = null;
      this.filter.prodi = "default";
      this.filter.tanggal = null;
      (this.isFilter = false),
        axios
          .get(`${this.url}bemkm/superadmin/presensi`, {
            headers: {
              Authorization: localStorage.token,
            },
          })
          .then((result) => {
            console.log(result);
            this.dataPresensi = result.data.data;

            this.loader = false;
            $(document).ready(function() {
              $(".table").DataTable({
                pageLength: 25,
                ordering: false,
                paging: false,
                info: false,
              });
            });
          })
          .catch((err) => {
            console.log(err);
          });
    },
    openPresensi(a) {
      this.loaderPopUp = true;
      axios
        .get(`${this.url}bemkm/superadmin/presensi/${a}`, {
          headers: {
            Authorization: localStorage.token,
          },
        })
        .then((result) => {
          console.log(result);
          this.dataOnePresensi = result.data.data;
          this.loaderPopUp = false;

          setTimeout(() => {
            /*eslint-disable */
            const map = new google.maps.Map(document.getElementById("map"), {
              zoom: 14,
              center: new google.maps.LatLng(
                result.data.data.lat,
                result.data.data.long
              ),
              scrollwheel: false,
              draggable: true,
            });
            const infowindow = new google.maps.InfoWindow();
            const marker = new google.maps.Marker({
              position: new google.maps.LatLng(
                result.data.data.lat,
                result.data.data.long
              ),
              // icon: {
              //   url: "../../aasets/ilustrasi/marker.svg",
              //   scaledSize: new google.maps.Size(45, 50),
              // },
              map: map,
            });

            /*eslint-enable */
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    dateChange(a) {
      return moment(a)
        .locale("id")
        .format("DD MMMM YYYY");
    },
    timeChange(a) {
      return moment(a)
        .locale("id")
        .format("h:mm:ss");
    },
  },
  mounted() {
    this.width = $(document).width();
    axios
      .get(`${this.url}bemkm/superadmin/presensi`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then((result) => {
        console.log(result);
        this.dataPresensi = result.data.data;

        this.loader = false;
        $(document).ready(function() {
          $(".table").DataTable({
            pageLength: 25,
            ordering: false,
            paging: false,
            info: false,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${this.url}bemkm/superadmin/prodi`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then((result) => {
        console.log(result);
        this.dataProdi = result.data.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.modal-presensi .form-control {
  height: 36px;
  border-radius: 8px !important;
  background: #f8f8f8;
}
.img-fluid {
  border-radius: 10px;
}
.btn-close {
  /* top: 0; */
  position: relative;
  top: 0;
  right: 0;
}
</style>
