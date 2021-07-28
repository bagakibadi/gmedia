<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-4">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <button
                  class="btn btn-primary me-2"
                  type="button"
                  v-if="status == 'tambah'"
                  @click="status = 'default'"
                >
                  <i class="fas fa-arrow-left"></i>
                </button>
                <div>
                  <div class="title-content">
                    {{ status == "default" ? "Penugasan" : "Tambah Tugas" }}
                  </div>
                  <div class="title-type-soal" v-if="status == 'tambah'">
                    1 - Pilih Gugus
                  </div>
                </div>
              </div>
              <button
                class="btn btn-success"
                type="button"
                v-if="status == 'default'"
                @click="status = 'tambah'"
              >
                + Buat Tugas
              </button>
              <div class="d-flex" v-else>
                <button
                  class="btn btn-success"
                  type="button"
                  @click="checkedAll"
                  v-if="setGugus.length !== dataGugus.data.length"
                >
                  Pilih Semua Gugus
                </button>
                <button
                  class="btn btn-danger"
                  type="button"
                  @click="checkedAll"
                  v-else
                >
                  Batalkan Pilih
                </button>
                <div>
                  <button
                    class="btn btn-secondary ms-2"
                    type="button"
                    v-if="setGugus.length == 0"
                    disabled
                  >
                    Selanjutnya
                  </button>
                  <router-link
                    :to="{ name: 'Buat Tugas', params: { gugus: setGugus } }"
                    class="btn btn-primary ms-2"
                    type="button"
                    v-else
                  >
                    Selanjutnya
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="card-shadow mb-5">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <div class="position-relative">
                  <img
                    src="../../assets/icons/search.svg"
                    alt=""
                    class="search-icon"
                  />
                  <input
                    type="text"
                    class="form-control search-custom"
                    placeholder="Cari . . ."
                  />
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="row" v-if="dataGugus">
          <div
            class="col-md-4 col-sm-6"
            v-for="(item, id) in dataGugus.data"
            :key="id"
          >
            <router-link
              :to="{ name: 'Streaming Master' }"
              v-if="status == 'default'"
              style="color: inherit;"
            >
              <div
                class="card-shadow hoverable overflow-hidden position-relative mb-3"
              >
                <div class="p-3 position-relative" style="z-index: 2;">
                  <div class="title-soal mb-5">{{ item.name }}</div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div
                        class="pemandu-img d-flex align-items-center justify-content-center"
                      >
                        <img src="../../assets/images/profile.jpeg" alt="" />
                      </div>
                      <div class="pemandu-gugus ms-2" v-if="item.pemandu[0]">
                        {{ item.pemandu[0].nama }}
                      </div>
                    </div>
                    <div>{{ item.mahasiswa_count }} Mahsiswa</div>
                  </div>
                </div>
                <img
                  class="card-icon-bg"
                  src="../../assets/icons/card-bg.svg"
                  alt=""
                />
              </div>
            </router-link>
            <div v-else>
              <label
                class="card-shadow hoverable overflow-hidden position-relative mb-3 w-100"
                :for="`gugus${id}`"
              >
                <div class="p-3 position-relative" style="z-index: 2;">
                  <div class="d-flex justify-content-between">
                    <div class="title-soal mb-5">{{ item.name }}</div>
                    <input
                      class="form-check-input cursor-pointer"
                      type="checkbox"
                      :id="`gugus${id}`"
                      v-model="setGugus"
                      :value="item.uuid"
                    />
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div
                        class="pemandu-img d-flex align-items-center justify-content-center"
                      >
                        <img src="../../assets/images/profile.jpeg" alt="" />
                      </div>
                      <div class="pemandu-gugus ms-2" v-if="item.pemandu[0]">
                        {{ item.pemandu[0].nama }}
                      </div>
                    </div>
                    <div>{{ item.mahasiswa_count }} Mahsiswa</div>
                  </div>
                </div>
                <img
                  class="card-icon-bg"
                  src="../../assets/icons/card-bg.svg"
                  alt=""
                />
              </label>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-5 pb-5">
          <div
            class="pagination-arrow bg-secondary me-3 d-flex align-items-center justify-content-center"
          >
            <i class="fas fa-chevron-left text-white"></i>
          </div>
          <div class="d-flex align-items-center">
            <div class="pagination-number text-primary px-2 py-1 mx-2">1</div>
            <div class="pagination-number px-2 py-1 mx-2">2</div>
            <div class="pagination-number px-2 py-1 mx-2">3</div>
            <div class="pagination-number px-2 py-1 mx-2">4</div>
            <div class="pagination-number px-2 py-1 mx-2">5</div>
          </div>
          <div
            class="pagination-arrow bg-primary ms-3 d-flex align-items-center justify-content-center"
          >
            <i class="fas fa-chevron-right text-white"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-env jquery */
import axios from "axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["url"]),
  },
  data: function() {
    return {
      width: null,
      dataGugus: null,
      status: "default",
      setGugus: [],
    };
  },
  methods: {
    changeType(type) {
      this.type = type;
    },
    checkedAll() {
      if (this.setGugus.length == this.dataGugus.data.length) {
        this.setGugus = [];
      } else if (this.setGugus.length < this.dataGugus.data.length) {
        this.setGugus = [];
        for (let i = 0; i < this.dataGugus.data.length; i++) {
          this.setGugus.push(this.dataGugus.data[i].uuid);
        }
      } else {
        for (let i = 0; i < this.dataGugus.data.length; i++) {
          this.setGugus.push(this.dataGugus.data[i].uuid);
        }
      }
    },
  },
  mounted() {
    this.width = $(document).width();

    axios
      .get(this.url + "tugas/superadmin/tugas", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then((res) => {
        console.log(res);
        this.dataGugus = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
