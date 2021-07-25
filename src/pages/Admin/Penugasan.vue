<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="title-content">Penugasan</div>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-5">
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
              <router-link
                v-if="type == 'esai'"
                :to="{ name: 'Buat Soal Esai' }"
                class="btn btn-success"
                type="button"
              >
                + Buat Tugas
              </router-link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card-shadow mb-3">
              <div class="p-3">
                <div class="menu-float-card">
                  <div class="dropstart">
                    <div
                      class="menu-float d-flex align-items-center justify-content-center"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-h"></i>
                    </div>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
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
                <div class="d-flex">
                  <div>G1</div>
                  <div>
                    <div>Gugus 1</div>
                    <div class="d-flex align-items-center">
                      <div>20 Mahasiswa</div>
                    </div>
                  </div>
                </div>
              </div>
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

export default {
  data: function() {
    return {
      width: null,
      type: "esai",
    };
  },
  methods: {
    changeType(type) {
      this.type = type;
    },
  },
  mounted() {
    this.width = $(document).width();

    $(document).ready(function() {
      $(".table").DataTable();
    });
  },
};
</script>
