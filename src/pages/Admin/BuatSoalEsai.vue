<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="title-content">Buat Soal Esai</div>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="bobot">Upload Gambar Soal</label>
                  <input type="file" class="dropify" />
                </div>
                <div class="mb-3">
                  <label for="bobot"
                    >Bobot Soal <span class="text-info">*</span></label
                  >
                  <input
                    type="text"
                    id="bobot"
                    class="form-control"
                    placeholder="Maksimal 100"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="bobot"
                    >Soal <span class="text-info">*</span></label
                  >
                  <textarea id="soal" class="d-none">Hello, World!</textarea>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-4">
              <button
                  class="btn btn-outline-secondary me-3"
                  type="button"
                >
                Batal
              </button>
              <button
                  class="btn btn-primary"
                  type="button"
                >
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

    $(document).ready(function() {
      setTimeout(() => {
        // eslint-disable-next-line
        tinymce.init({
          selector: "#soal",
          menubar: false,
          min_height: 300,
        });
      }, 100);

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
