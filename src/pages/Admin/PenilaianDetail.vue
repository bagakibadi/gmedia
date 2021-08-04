<template>
  <div class="dashboard penilaian">
    <NavbarAdmin :widthContent="width" />
    <div
      :class="`content content-dalem ${width > 992 ? '' : 'hide'}`"
      v-if="dataTugas"
    >
      <div class="section">
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <router-link
                  :to="{
                    name: 'Penilaian Tugas',
                    params: {
                      name: $route.params.name_gugus,
                      id: $route.params.id_gugus,
                    },
                  }"
                  class="btn btn-primary me-2"
                  type="button"
                >
                  <i class="fas fa-arrow-left"></i>
                </router-link>
                <div>
                  <div class="title-content">
                    Penilaian
                  </div>
                  <div class="title-type-soal">
                    {{ $route.params.name_tugas }}
                  </div>
                </div>
              </div>
              <div
                class="px-3 py-2 danger text-danger border-radius d-inline-block"
                style="font-weight: 600; font-size: 16px;"
              >
                0/20 telah Dinilai
              </div>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3"></div>
        </div>
        <div v-for="(items, id) in dataTugas.data" :key="id">
          <div class="card-shadow mb-3" v-if="!items.dikerjakan">
            <div class="p-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div
                    class="image d-md-flex d-none align-items-center justify-content-center"
                  >
                    <img :src="items.foto" alt="" />
                  </div>
                  <div class="ms-2">
                    <div class="main-text">{{ items.nama }}</div>
                    <div class="sub-text">{{ items.nim }}</div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div
                    class="py-1 px-2 text-danger danger d-inline-block"
                    style="border-radius: 7px; font-weight: 500;"
                  >
                    Belum Dikerjakan
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-shadow mb-3" v-else>
            <div
              class="p-3 collapsed"
              data-bs-toggle="collapse"
              :href="`#nilai${id}`"
              role="button"
              aria-expanded="false"
              :aria-controls="`nilai${id}`"
            >
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div
                    class="image d-md-flex d-none align-items-center justify-content-center"
                  >
                    <img :src="items.foto" alt="" />
                  </div>
                  <div class="ms-2">
                    <div class="main-text">{{ items.nama }}</div>
                    <div class="sub-text">{{ items.nim }}</div>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div
                    class="py-1 px-2 text-warning warning"
                    style="border-radius: 7px; font-weight: 500;"
                  >
                    Belum Dinilai
                  </div>
                  <i class="fas fa-chevron-right ms-3"></i>
                </div>
              </div>
            </div>
            <div class="collapse" :id="`nilai${id}`">
              <div class="soal-section p-3">
                <div
                  class="mb-5"
                  v-for="(soalPG, idPG) in items.soal_pg"
                  :key="soalPG.isi + idPG"
                >
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div
                        class="number-soal primary text-primary d-flex align-items-center justify-content-center"
                      >
                        {{ idPG + 1 }}
                      </div>
                      <div class="type-soal">Soal Pilihan Ganda</div>
                    </div>
                    <div
                      :class="
                        `py-1 px-2 ${
                          soalPG.data_jawaban.benar == 1
                            ? 'text-success success'
                            : 'text-danger danger'
                        }`
                      "
                      style="border-radius: 7px; font-weight: 500;"
                    >
                      {{ soalPG.data_jawaban.nilai }} / {{ soalPG.bobot }}
                    </div>
                  </div>
                  <div style="padding-left: 40px;">
                    <div v-if="soalPG.foto_soal !== ''">
                      <img :src="soalPG.foto_soal" alt="" />
                    </div>
                    <div
                      v-html="soalPG.isi"
                      class="mt-1"
                      style="font-size: 16px; font-weight: 400;"
                    ></div>
                    <div class="mt-2">
                      <div
                        v-for="(kunci, idKunci) in soalPG.kuncijawaban"
                        :key="idKunci"
                      >
                        <div
                          class="d-flex align-items-center mb-3"
                          v-if="kunci.benar == 1"
                        >
                          <div class="me-2">
                            <button
                              class="
                                btn btn-success mb-0 text-uppercase text-center
                              "
                              style="border-radius: 100px !important; min-width: 38px; max-width: 38px;"
                              disabled
                            >
                              {{ dataLetter[idKunci] }}
                            </button>
                          </div>
                          <div
                            class="
                              text-success mb-0 px-1 py-2
                            "
                            style="font-size: 16px; font-weight: 300;"
                          >
                            {{ kunci.jawaban }}
                          </div>
                        </div>
                        <div class="d-flex align-items-center mb-3" v-else>
                          <div class="me-2">
                            <button
                              :class="
                                `btn ${
                                  soalPG.data_jawaban.jawaban == kunci.jawaban
                                    ? 'btn-danger'
                                    : 'btn-outline-primary'
                                } mb-0 text-uppercase text-center`
                              "
                              style="border-radius: 100px !important; min-width: 38px; max-width: 38px;"
                              disabled
                            >
                              {{ dataLetter[idKunci] }}
                            </button>
                          </div>
                          <div
                            :class="
                              `${
                                soalPG.data_jawaban.jawaban == kunci.jawaban
                                  ? 'text-danger fw-normal'
                                  : ''
                              } mb-0 px-1 py-2`
                            "
                            style="font-size: 16px; font-weight: 300;"
                          >
                            {{ kunci.jawaban }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mb-5"
                  v-for="(soalEsai, idEsai) in items.soal_essai"
                  :key="soalEsai.isi + idEsai"
                >
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div
                        :class="
                          `number-soal ${
                            soalEsai.data_jawaban.nilai
                              ? 'primary text-primary'
                              : 'warning text-warning'
                          } d-flex align-items-center justify-content-center`
                        "
                      >
                        {{ items.soal_pg.length + idEsai + 1 }}
                      </div>
                      <div class="type-soal">Soal Pilihan Ganda</div>
                    </div>
                    <div class="d-flex align-items-center">
                      <input
                        class="form-control form-control-sm"
                        type="number"
                        placeholder="Nilai"
                        style="width: 55px;"
                        maxlength="3"
                        v-model="soalEsai.data_jawaban.nilai"
                        @change="checkBobot(id, idEsai)"
                      />
                      <div
                        :class="
                          `py-1 px-2 ${
                            soalEsai.data_jawaban.nilai
                              ? soalEsai.data_jawaban.nilai >= soalEsai.bobot
                                ? 'text-success success'
                                : 'text-primary primary'
                              : 'text-warning warning'
                          } ms-2`
                        "
                        style="border-radius: 7px; font-weight: 500;"
                      >
                        {{
                          soalEsai.data_jawaban.nilai
                            ? soalEsai.data_jawaban.nilai
                            : 0
                        }}
                        / {{ soalEsai.bobot }}
                      </div>
                    </div>
                  </div>
                  <div style="padding-left: 40px;">
                    <div v-if="soalEsai.foto_soal !== ''">
                      <img :src="soalEsai.foto_soal" alt="" />
                    </div>
                    <div
                      v-html="soalEsai.isi"
                      class="mt-1"
                      style="font-size: 16px; font-weight: 400;"
                    ></div>
                    <div class="type-soal mt-3">Jawaban</div>
                    <div class="mt-1">
                      <textarea
                        :id="`esai${id}${idEsai}`"
                        class="d-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  class="mb-5"
                  v-for="(soalUpload, idUpload) in items.soal_upload"
                  :key="soalUpload.isi + idUpload"
                >
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="d-flex align-items-center">
                      <div
                        :class="
                          `number-soal ${
                            soalUpload.data_jawaban.nilai
                              ? 'primary text-primary'
                              : 'warning text-warning'
                          } d-flex align-items-center justify-content-center`
                        "
                      >
                        {{
                          items.soal_pg.length +
                            items.soal_essai.length +
                            idUpload +
                            1
                        }}
                      </div>
                      <div class="type-soal">Soal Upload</div>
                    </div>
                    <div class="d-flex align-items-center">
                      <input
                        class="form-control form-control-sm"
                        type="number"
                        placeholder="Nilai"
                        style="width: 55px;"
                        maxlength="3"
                        v-model="soalUpload.data_jawaban.nilai"
                        @change="checkBobot(id, idUpload)"
                      />
                      <div
                        :class="
                          `py-1 px-2 ${
                            soalUpload.data_jawaban.nilai
                              ? soalUpload.data_jawaban.nilai >=
                                soalUpload.bobot
                                ? 'text-success success'
                                : 'text-primary primary'
                              : 'text-warning warning'
                          } ms-2`
                        "
                        style="border-radius: 7px; font-weight: 500;"
                      >
                        {{
                          soalUpload.data_jawaban.nilai
                            ? soalUpload.data_jawaban.nilai
                            : 0
                        }}
                        / {{ soalUpload.bobot }}
                      </div>
                    </div>
                  </div>
                  <div style="padding-left: 40px;">
                    <div v-if="soalUpload.foto_soal !== ''">
                      <img :src="soalUpload.foto_soal" alt="" />
                    </div>
                    <div
                      v-html="soalUpload.isi"
                      class="mt-1"
                      style="font-size: 16px; font-weight: 400;"
                    ></div>
                    <div class="type-soal mt-3">Jawaban</div>
                    <div class="mt-1">
                      <div
                        class="image-jawaban mb-3"
                        v-if="
                          soalUpload.data_jawaban.ekstensi == 'jpeg' ||
                            soalUpload.data_jawaban.ekstensi == 'jpg' ||
                            soalUpload.data_jawaban.ekstensi == 'png'
                        "
                      >
                        <img :src="soalUpload.data_jawaban.jawaban" alt="" />
                      </div>

                      <div
                        class="mb-3"
                        v-else-if="
                          soalUpload.data_jawaban.ekstensi == 'mov' ||
                            soalUpload.data_jawaban.ekstensi == 'mpeg' ||
                            soalUpload.data_jawaban.ekstensi == 'mp4'
                        "
                      >
                        <video width="400" controls>
                          <source
                            :src="soalUpload.data_jawaban.jawaban"
                            :type="`video/${soalUpload.data_jawaban.ekstensi}`"
                          />
                          Your browser does not support HTML video.
                        </video>
                      </div>

                      <div
                        v-else
                        class="file-other mb-3 p-3 secondary border-radius"
                      >
                        <div class="d-flex align-items-center">
                          <i
                            class="fas fa-info-circle me-2"
                            style="font-size: 22px; opacity: .7;"
                          ></i>
                          <div style="opacity: .7;">
                            File tidak dapat ditampilkan. Anda dapat mendownload
                            file untuk membuka file melalui perangkat anda.
                          </div>
                        </div>
                      </div>

                      <div>
                        <a
                          :href="soalUpload.data_jawaban.jawaban"
                          :download="soalUpload.data_jawaban.nama_file"
                          class="btn btn-primary btn-sm"
                          >Download {{ soalUpload.data_jawaban.nama_file }}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-3">
                <div class="d-flex align-items-center justify-content-between">
                  <div>Nilai Akhir: {{}}</div>
                  <div class="d-flex">
                    <button
                      class="btn btn-success px-4"
                      type="button"
                      @click="submit()"
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
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
import { mapState } from "vuex";
import moment from "moment";

export default {
  computed: {
    ...mapState(["url"]),
  },
  data: function() {
    return {
      width: null,
      dataTugas: null,
      dataLetter: [],
      total: [],
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD MMM YYYY");
    },
    checkBobot(id, idSoal) {
      var bobot = this.dataTugas.data[id].soal_essai[idSoal].bobot;
      var nilai = this.dataTugas.data[id].soal_essai[idSoal].data_jawaban.nilai;
      var arrNilai = [];
      var validation = 0;
      // if(bobot.nilai > ){}
      if (nilai > bobot) {
        nilai = bobot;
        console.log("benar");
      } else if (nilai < 0) {
        nilai = 0;
        console.log("salah");
      }

      this.dataTugas.data[id].soal_essai[idSoal].data_jawaban.nilai = parseInt(
        nilai
      );

      for (let i = 0; i < this.bobotSoal.length; i++) {
        if (this.bobotSoal[i].bobot) {
          arrNilai.push(parseInt(this.bobotSoal[i].bobot));
        } else {
          arrNilai.push(0);
          validation++;
        }

        if (validation == 0) {
          this.isFilledAll = true;
        }
      }

      this.totalBobot = arrNilai.reduce((a, b) => a + b, 0);
    },
  },
  mounted() {
    this.width = $(document).width();
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    this.dataLetter = alphabet;
    var countEditor = 0;

    axios
      .get(
        this.url +
          "tugas/superadmin/tugas/pengerjaan/" +
          this.$route.params.id_gugus +
          "/" +
          this.$route.params.id_tugas,
        {
          headers: {
            Authorization: localStorage.token,
          },
        }
      )
      .then((res) => {
        this.dataTugas = res.data;
        var data = this.dataTugas.data;

        for (let k = 0; k < data.length; k++) {
          if (data[k].dikerjakan) {
            for (let l = 0; l < data[k].soal_essai.length; l++) {
              this.total[k].push({ nilai: 0 });
            }

            // for (let m = 0; m < data[k].soal_upload.length; m++) {
            //   this.total[k].push({ nilai: 0 });
            // }

            // for (let n = 0; n < data[k].soal_pg.length; n++) {
            //   this.total[k].push({ nilai: data[k].soal_pg[n].data_jawaban.nilai });
            // }
          } else {
            this.total.push({ nilai: 0 });
          }
        }

        var editorInterval = setInterval(() => {
          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].soal_essai.length; j++) {
              // eslint-disable-next-line
              tinymce.init({
                selector: `#esai${i}${j}`,
                menubar: false,
                min_height: 400,
                readonly: 1,
              });
            }
          }

          countEditor++;

          if (countEditor == 3) {
            clearInterval(editorInterval);
          }
        }, 1000);

        setTimeout(() => {
          for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].soal_essai.length; j++) {
              // eslint-disable-next-line
              tinyMCE
                .get(`esai${i}${j}`)
                .setContent(data[i].soal_essai[j].data_jawaban.jawaban);
            }
          }
        }, 3500);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    $(document).ready(function() {});
  },
};
</script>
