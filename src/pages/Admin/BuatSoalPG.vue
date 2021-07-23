<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="title-content">Buat Soal Pilihan Ganda</div>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="row">
              <div class="col-lg-6 col-md-10">
                <div class="mb-3">
                  <label for="bobot">Upload Gambar Soal</label>
                  <input type="file" class="dropify" />
                </div>
                <div class="mb-3">
                  <label for="bobot"
                    >Soal <span class="text-info">*</span></label
                  >
                  <textarea id="soalPG" class="d-none">Hello, World!</textarea>
                </div>
                <!-- <div class="mb-3">
                  <label for="bobot"
                    >Bobot Soal <span class="text-info">*</span></label
                  >
                  <input
                    type="text"
                    id="bobot"
                    class="form-control"
                    placeholder="Maksimal 100"
                  />
                </div> -->
              </div>
              <div class="col-lg-6 col-md-10">
                <label for="bobot" class="mb-0"
                  >Jawaban Soal <span class="text-info">*</span></label
                >
                <div style="font-weight: 300;">Tandai jawaban yang benar</div>
                <div class="mt-3">
                  <div
                    class="d-flex align-items-center mb-3"
                    v-for="(item, id) in form.jawaban"
                    :key="id"
                  >
                    <div class="me-3">
                      <label
                        :class="
                          `btn ${
                            form.benar == dataLetter[id]
                              ? 'btn-primary'
                              : 'btn-outline-primary'
                          } mb-0 text-uppercase text-center`
                        "
                        style="border-radius: 100px !important; min-width: 38px; max-width: 38px;"
                        :for="`jawaban${id}`"
                        >{{ dataLetter[id] }}</label
                      >
                      <input
                        type="radio"
                        :value="dataLetter[id]"
                        v-model="form.benar"
                        :id="`jawaban${id}`"
                        class="d-none"
                      />
                    </div>
                    <input
                      class="form-control"
                      type="text"
                      v-model="item.jawaban"
                      :placeholder="`Ketik jawaban ${dataLetter[id].toUpperCase()}`"
                    />
                    <!-- <button class="btn btn-danger ms-3">
                      <i class="fas fa-trash"></i>
                    </button> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-4">
              <router-link :to="{name: 'Bank Soal'}" class="btn btn-outline-secondary me-3" type="button">
                Batal
              </router-link>
              <button class="btn btn-primary" type="button">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-env jquery */

export default {
  data: function() {
    return {
      width: null,
      type: "esai",
      dataLetter: [],
      form: {
        jawaban: [],
        benar: "b",
      },
    };
  },
  methods: {
    changeType(type) {
      console.log(type);
      this.type = type;
    },
  },
  mounted() {
    this.width = $(document).width();

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    this.dataLetter = alphabet;

    for (let i = 0; i < 4; i++) {
      this.form.jawaban.push({
        id: i,
        jawaban: "",
      });
    }

    $(document).ready(function() {
      setTimeout(() => {
        // eslint-disable-next-line
        tinymce.init({
          selector: "#soalPG",
          menubar: false,
          min_height: 300,
        });
      }, 1000);

      $(".dropify").dropify({
        messages: {
          default: "Unggah gambar pendukung soal",
          replace: "Timpa dan upload gambar",
          remove: "hapus",
          error: "Ooops, telah terjadi kesalahan.",
        },
      });
    });
  },
};
</script>
