<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-5">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <div class="title-content">Bank Soal</div>
                <div class="title-type-soal">
                  Soal
                  <span class="text-capitalize">{{ type.toLowerCase() }}</span>
                </div>
              </div>
              <div class="dropdown">
                <button
                  class="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  id="tipeSoal"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pilih Tipe Soal
                </button>
                <ul class="dropdown-menu" aria-labelledby="tipeSoal">
                  <li>
                    <div
                      class="dropdown-item cursor-pointer d-flex align-items-center"
                      @click="changeType('ESSAI')"
                    >
                      <div
                        class="d-flex justify-content-center me-2"
                        style="width: 20px;"
                      >
                        <img src="../../assets/icons/essay.svg" alt="" />
                      </div>
                      <div>Esai</div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="dropdown-item cursor-pointer d-flex align-items-center"
                      @click="changeType('PILIHAN GANDA')"
                    >
                      <div
                        class="d-flex justify-content-center me-2"
                        style="width: 20px;"
                      >
                        <img
                          src="../../assets/icons/pilihan_ganda.svg"
                          alt=""
                        />
                      </div>
                      <div>Pilihan Ganda</div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="dropdown-item cursor-pointer d-flex align-items-center"
                      @click="changeType('Upload')"
                    >
                      <div
                        class="d-flex justify-content-center me-2"
                        style="width: 20px;"
                      >
                        <img
                          src="../../assets/icons/pilihan_ganda.svg"
                          alt=""
                        />
                      </div>
                      <div>Upload</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end mb-3">
          <router-link
            v-if="type == 'ESSAI'"
            :to="{ name: 'Buat Soal Esai' }"
            class="btn btn-success"
            type="button"
          >
            + Buat Soal Esai
          </router-link>
          <router-link
            v-else-if="type == 'PILIHAN GANDA'"
            :to="{ name: 'Buat Soal Pilihan Ganda' }"
            class="btn btn-success"
            type="button"
          >
            + Buat Soal Pilihan Ganda
          </router-link>
        </div>
        <div class="row" v-if="dataSoal">
          <div
            class="col-md-4 col-sm-6"
            v-for="(item, id) in dataSoal.data"
            :key="id"
          >
            <div class="card-shadow mb-3">
              <div class="p-3">
                <div class="menu-float-card">
                  <div class="dropstart">
                    <div
                      class="menu-float d-flex align-items-center justify-content-center"
                      :id="`menus${id}`"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <ul class="dropdown-menu" :aria-labelledby="`menus${id}`">
                      <li>
                        <a
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div
                            class="d-flex justify-content-center me-2"
                            style="width: 20px;"
                          >
                            <img src="../../assets/icons/edit.svg" alt="" />
                          </div>
                          <div>Ubah</div>
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div
                            class="d-flex justify-content-center me-2"
                            style="width: 20px;"
                          >
                            <img src="../../assets/icons/hapus.svg" alt="" />
                          </div>
                          <div>Hapus</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mb-4">
                  <div
                    class="img-question d-flex align-items-center justify-content-center"
                  >
                    <img src="../../assets/tentang.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <div class="fw-bold mb-2">Soal</div>
                  <div style="font-size: 16px; font-weight: 300;">
                    {{ item.isi }}
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-5">
                  <div
                    class="py-1 px-2 text-success success"
                    style="border-radius: 7px; font-weight: 500;"
                    v-if="item.kategori == 'MUDAH'"
                  >
                    Mudah
                  </div>
                  <div
                    class="py-1 px-2 text-warning warning"
                    style="border-radius: 7px; font-weight: 500;"
                    v-else-if="item.kategori == 'SEDANG'"
                  >
                    Sedang
                  </div>
                  <div
                    class="py-1 px-2 text-danger danger"
                    style="border-radius: 7px; font-weight: 500;"
                    v-else-if="item.kategori == 'SULIT'"
                  >
                    Sulit
                  </div>
                  <div style="opacity: .5">
                    {{ formatDate(item.created_at) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center mt-5 pb-5"
          v-if="dataSoal"
        >
          <div v-for="(item, id) in dataSoal.links" :key="id">
            <div
              :class="
                `pagination-arrow ${
                  item.active ? 'bg-primary' : 'bg-secondary'
                } me-3 d-flex align-items-center justify-content-center`
              "
              v-if="item.label == 'pagination.previous'"
            >
              <i class="fas fa-chevron-left text-white"></i>
            </div>
            <div
              class="d-flex align-items-center"
              v-if="
                item.label !== 'pagination.previous' &&
                  item.label !== 'pagination.next'
              "
            >
              <div
                :class="
                  `pagination-number ${
                    item.active ? 'text-primary' : ''
                  } px-2 py-1 mx-2`
                "
              >
                {{ item.label }}
              </div>
            </div>
            <div
              :class="
                `pagination-arrow ${
                  item.active ? 'bg-primary' : 'bg-secondary'
                } ms-3 d-flex align-items-center justify-content-center`
              "
              v-if="item.label == 'pagination.next'"
            >
              <i class="fas fa-chevron-right text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-env jquery */
import axios from "axios";
import moment from "moment";

export default {
  data: function() {
    return {
      width: null,
      type: "ESSAI",
      dataSoal: null,
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD MMMM YY");
    },
    changeType(type) {
      this.dataSoal = null;
      this.type = type;
      axios
        .get(
          "https://gmedia.primakom.co.id/tugas/superadmin/soal?tipe=" + type,
          {
            headers: {
              Authorization: localStorage.token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.dataSoal = res.data.data;
        })
        .catch((err) => {
          console.log(err);
          // localStorage.clear();
        });
    },
  },
  mounted() {
    axios
      .get(
        "https://gmedia.primakom.co.id/tugas/superadmin/soal?tipe=" + this.type,
        {
          headers: {
            Authorization: localStorage.token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.dataSoal = res.data.data;
      })
      .catch((err) => {
        console.log(err);
        // localStorage.clear();
      });
    this.width = $(document).width();

    $(document).ready(function() {
      $(".table").DataTable();
    });
  },
};
</script>
