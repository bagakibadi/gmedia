<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-4">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <router-link
                  :to="{ name: 'Tugas Master' }"
                  class="btn btn-primary me-2"
                  type="button"
                >
                  <i class="fas fa-arrow-left"></i>
                </router-link>
                <div>
                  <div class="title-content">
                    Tambah Tugas
                  </div>
                  <div class="title-type-soal">
                    2 - Atur Tugas dan Pilih Soal
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="button">
                Simpan
              </button>
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
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="judul" class="form-label">Judul</label>
                  <input
                    type="text"
                    class="form-control"
                    id="judul"
                    placeholder="Judul Tugas"
                    v-model="form.judul"
                  />
                </div>
                <div class="mb-3">
                  <label for="judul" class="form-label">Deskripsi</label>
                  <textarea id="deskripsi" class="d-none"></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-6">
                    <div class="mb-3">
                      <label for="judul" class="form-label"
                        >Tenggat Waktu</label
                      >
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Judul Tugas"
                        v-model="form.date"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-3">
                      <label for="judul" class="form-label" style="opacity: 0;"
                        >date</label
                      >
                      <input
                        type="time"
                        class="form-control"
                        id="judul"
                        placeholder="Judul Tugas"
                        v-model="form.time"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-6">
                <label class="form-label">Tipe Soal</label>
                <select
                  v-model="filter.tipe"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="default" selected disabled
                    >- Pilih Tipe Soal -</option
                  >
                  <option value="essai">Essai</option>
                  <option value="pilihan_ganda">Pilihan Ganda</option>
                  <option value="upload">Upload</option>
                </select>
              </div>
              <div class="col-lg-3 col-md-4 col-6">
                <label class="form-label">Kategori Soal</label>
                <select
                  v-model="filter.kategori"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="default" selected disabled
                    >- Pilih Kategori Soal -</option
                  >
                  <option value="mudah">Mudah</option>
                  <option value="sedang">Sedang</option>
                  <option value="sulit">Sulit</option>
                </select>
              </div>
              <div class="col-lg-3 col-md-4 col-6">
                <label class="form-label">Tanggal</label>
                <input
                  v-model="filter.tanggal"
                  class="form-control"
                  type="date"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="dataSoal">
          <div
            class="col-md-4 col-sm-6"
            v-for="(item, id) in dataSoal.data"
            :key="id"
          >
            <label
              :for="`soal${id}`"
              class="d-block card-shadow hoverable mb-3"
            >
              <div class="p-3">
                <input
                  class="form-check-input cursor-pointer floating-check"
                  type="checkbox"
                  :id="`soal${id}`"
                  @change="checkbox(id, $event)"
                  :value="{ id: item.uuid, bobot: 0 }"
                />
                <div class="mb-4" v-if="item.foto !== ''">
                  <div
                    class="img-question d-flex align-items-center justify-content-center"
                  >
                    <img :src="item.foto" alt="" />
                  </div>
                </div>
                <div>
                  <div class="fw-bold">Soal</div>
                  <div
                    style="font-size: 16px; font-weight: 300;"
                    v-html="item.isi"
                  ></div>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center mt-5"
                >
                  <div>
                    <div
                      class="py-1 d-inline-block px-2 text-success success"
                      style="border-radius: 7px; font-weight: 500;"
                      v-if="item.kategori == 'MUDAH'"
                    >
                      Mudah
                    </div>
                    <div
                      class="py-1 d-inline-block px-2 text-warning warning"
                      style="border-radius: 7px; font-weight: 500;"
                      v-else-if="item.kategori == 'SEDANG'"
                    >
                      Sedang
                    </div>
                    <div
                      class="py-1 d-inline-block px-2 text-danger danger"
                      style="border-radius: 7px; font-weight: 500;"
                      v-else-if="item.kategori == 'SULIT'"
                    >
                      Sulit
                    </div>
                    <input
                      v-if="setSoal[id] !== null"
                      type="number"
                      class="form-control mt-2 number-input"
                      style="width: 105px; border-color: #fb4b4b !important; border-width: 2px;"
                      :id="`bobot${id}`"
                      @change="checkBobot(id)"
                      v-model="setSoal[id].bobot"
                      placeholder="Bobot Soal"
                      min="0"
                      max="100"
                    />
                  </div>
                  <div style="opacity: .5">
                    {{ formatDate(item.created_at) }}
                  </div>
                </div>
              </div>
            </label>
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
import moment from "moment";

export default {
  computed: {
    ...mapState(["url"]),
  },
  data: function() {
    return {
      width: null,
      filter: {
        tipe: "default",
        kategori: "default",
        tanggal: null,
      },
      form: {
        judul: "",
        date: "",
        time: "",
      },
      dataSoal: null,
      tempSoal: null,
      setSoal: [],
    };
  },
  methods: {
    checkBobot(id) {
      console.log(id);
      // var max = parseInt($(selector).attr("max"));
      // var min = parseInt($(selector).attr("min"));
      if (this.setSoal[id].bobot > 100) {
        this.setSoal[id].bobot = 100;
      } else if (this.setSoal[id].bobot < 0) {
        this.setSoal[id].bobot = 0;
      }
    },
    checkbox(id, event) {
      var arr = [...this.setSoal];
      console.log(id);
      if (event.target.checked) {
        console.log("benar");
        arr[id] = {
          id: this.dataSoal.data[id].uuid,
          bobot: "",
        };

        this.setSoal = arr;

        console.log(this.setSoal);
        console.log(this.setSoal[id]);
      } else {
        console.log("salah");
        arr[id] = null;

        this.setSoal = arr;

        console.log(this.setSoal);
        console.log(this.setSoal[id]);
      }
    },
    formatDate(date) {
      return moment(date).format("DD MMMM YY");
    },
    submit() {},
  },
  mounted() {
    this.width = $(document).width();
    var countEditor = 0;

    var editorInterval = setInterval(() => {
      countEditor++;
      // eslint-disable-next-line
      tinymce.init({
        selector: "#deskripsi",
        menubar: false,
        min_height: 250,
      });

      if (countEditor == 5) {
        clearInterval(editorInterval);
      }
    }, 1000);

    axios
      .get(this.url + "tugas/superadmin/soal", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then((res) => {
        console.log(res);
        this.dataSoal = res.data.data;
        this.tempSoal = res.data.data.data;

        for (let i = 0; i < this.tempSoal.length; i++) {
          this.setSoal.push(null);
        }

        setTimeout(() => {
          $(".number-input").on("input", function() {
            var nonNumReg = /[^0-9]/g;
            $(this).val(
              $(this)
                .val()
                .replace(nonNumReg, "")
            );
          });
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
