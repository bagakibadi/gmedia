<template>
  <div class="dashboard">
    <NavbarPemandu :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="row">
          <div class="col-lg-5 col-md-6">
            <div class="card-shadow mb-3">
              <div class="p-3">
                <div class="title-content mb-2">Selamat Putra 🎉</div>
                <div style="font-size: 18px;">Presensi terpagi hari ini</div>
                <div class="time-presensi mt-4 mb-3 text-primary">
                  06.32 WIB
                </div>
                <button type="button" class="btn btn-primary">
                  Lihat Presensi
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card-shadow mb-3">
              <div class="p-3"></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-shadow mb-3">
              <div class="p-3"></div>
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
    };
  },
  mounted() {
    this.width = $(document).width();

    $(document).ready(function() {
      $(".table").DataTable();
    });
  },
};
</script>
