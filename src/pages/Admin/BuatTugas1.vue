<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-4">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <a
                  :href="$router.resolve({ name: 'Pilih Gugus' }).href"
                  @click="previous"
                  class="btn btn-primary me-2"
                  type="button"
                >
                  <i class="fas fa-arrow-left"></i>
                </a>
                <div>
                  <div class="title-content">
                    Tambah Tugas
                  </div>
                  <div class="title-type-soal">
                    2 - Atur Tugas dan Pilih Soal
                  </div>
                </div>
              </div>

              <button
                v-if="
                  form.date == '' ||
                    form.judul == '' ||
                    form.dateMulai == '' ||
                    form.timeMulai == '' ||
                    form.dateSelesai == '' ||
                    form.timeSelesai == '' ||
                    form.deskripsi == '' ||
                    checkSoal.length == 0
                "
                class="btn btn-secondary ms-2"
                type="button"
                disabled
              >
                Selanjutnya
              </button>
              <a
                :href="$router.resolve({ name: 'Set Bobot Soal' }).href"
                class="btn btn-primary"
                type="button"
                @click="next"
                v-else
              >
                Selanjutnya
              </a>
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
                        >Waktu Mulai</label
                      >
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Judul Tugas"
                        v-model="form.dateMulai"
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
                        v-model="form.timeMulai"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="mb-3">
                      <label for="judul" class="form-label"
                        >Waktu Berakhir</label
                      >
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Judul Tugas"
                        v-model="form.dateSelesai"
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
                        v-model="form.timeSelesai"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="card-shadow mb-3">
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
            </div>
          </div>
        </div> -->
        <div
          class="card-shadow success text-success mb-3"
          v-if="checkSoal.length > 0"
        >
          <div class="p-3">
            <div class="d-flex align-items-center">
              <i class="fas fa-info-circle me-2" style="font-size: 22px;"></i>
              <div style="font-size: 18px; font-weight: 500;">
                {{ checkSoal.length }} soal telah dipilih.
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center" v-if="!dataSoal">
          <div class="card-shadow">
            <div class="px-5 py-3">
              <Loader text="Sedang memuat data soal." />
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
                  v-model="checkSoal"
                  :value="{
                    id: item.uuid,
                    bobot: null,
                    foto: item.foto,
                    isi: item.isi,
                    kategori: item.kategori,
                    tipe: item.tipe,
                    created_at: formatDate(item.created_at),
                  }"
                />
                <div class="mb-4" v-if="item.foto !== ''">
                  <div
                    class="img-question d-flex align-items-center justify-content-center"
                  >
                    <img :src="item.foto" alt="" class="w-100" />
                  </div>
                </div>
                <div>
                  <div class="fw-bold">
                    Soal
                    <span class="text-capitalize">{{
                      item.tipe.toLowerCase()
                    }}</span>
                  </div>
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
                  </div>
                  <div style="opacity: .5">
                    {{ formatDate(item.created_at) }}
                  </div>
                </div>
              </div>
            </label>
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
                  dataSoal.prev_page_url
                    ? 'bg-primary cursor-pointer'
                    : 'bg-secondary'
                } me-3 d-flex align-items-center justify-content-center`
              "
              @click="navigation(dataSoal.prev_page_url)"
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
                @click="navigation(item.url)"
              >
                {{ item.label }}
              </div>
            </div>
            <div
              :class="
                `pagination-arrow ${
                  dataSoal.next_page_url
                    ? 'bg-primary cursor-pointer'
                    : 'bg-secondary'
                } ms-3 d-flex align-items-center justify-content-center`
              "
              v-if="item.label == 'pagination.next'"
              @click="navigation(dataSoal.next_page_url)"
            >
              <i class="fas fa-chevron-right text-white"></i>
            </div>
          </div>
        </div>
        <Footer />
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
      },
      form: {
        judul: "",
        dateMulai: "",
        timeMulai: "",
        dateSelesai: "",
        timeSelesai: "",
        deskripsi: "",
      },
      dataSoal: null,
      tempSoal: null,
      checkSoal: [],
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).locale("id").format("DD MMM YY");
    },
    previous() {
      localStorage.removeItem("tempSoal");
      var array = JSON.stringify(this.checkSoal);
      var array2 = JSON.stringify(this.form);
      localStorage.tempSoal = array;
      localStorage.tempTugas = array2;
    },
    next() {
      localStorage.removeItem("tempSoal");
      var array = JSON.stringify(this.checkSoal);
      var array2 = JSON.stringify(this.form);
      localStorage.tempSoal = array;
      localStorage.tempTugas = array2;
    },
    navigation(url) {
      if (url) {
        this.dataSoal = null;

        axios
          .get(url, {
            headers: {
              Authorization: localStorage.token,
            },
          })
          .then((res) => {
            console.log(res);
            this.setSoal = [];
            this.dataSoal = res.data.data;
            this.tempSoal = res.data.data.data;
          })
          .catch((err) => {
            console.log(err);
            // localStorage.clear();
          });
      }
    },
    submit() {},
  },
  mounted() {
    this.width = $(document).width();
    var countEditor = 0;

    axios
      .get(this.url + "tugas/superadmin/soal", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then((res) => {
        console.log(res);
        this.setSoal = [];
        this.dataSoal = res.data.data;
        this.tempSoal = res.data.data.data;

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

        setTimeout(() => {
          setInterval(() => {
            // eslint-disable-next-line
            var getText = tinymce.get("deskripsi").getContent();
            this.form.deskripsi = getText;
          }, 1000);
        }, 2000);

        if (localStorage.tempSoal) {
          var tempSoal = JSON.parse(localStorage.tempSoal);
          var tempTugas = JSON.parse(localStorage.tempTugas);
          this.checkSoal = tempSoal;
          this.form = tempTugas;
          setTimeout(() => {
            // eslint-disable-next-line
            tinyMCE.get("deskripsi").setContent(tempTugas.deskripsi);
          }, 2500);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
