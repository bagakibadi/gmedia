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
                  Soal {{ type == "esai" ? "Esai" : "Pilihan Ganda" }}
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
                      @click="changeType('esai')"
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
                      @click="changeType('pg')"
                    >
                      <div
                        class="d-flex justify-content-center me-2"
                        style="width: 20px;"
                      >
                        <img src="../../assets/icons/pilihan_ganda.svg" alt="" />
                      </div>
                      <div>Pilihan Ganda</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end mb-3">
          <router-link
            v-if="type == 'esai'"
            :to="{ name: 'Buat Soal Esai' }"
            class="btn btn-success"
            type="button"
          >
            + Buat Soal Esai
          </router-link>
          <router-link
            v-else-if="type == 'pg'"
            :to="{ name: 'Buat Soal Pilihan Ganda' }"
            class="btn btn-success"
            type="button"
          >
            + Buat Soal Pilihan Ganda
          </router-link>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6">
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
                <div class="mb-4">
                  <div class="fw-bold mb-1">Soal</div>
                  <div style="font-size: 16px; font-weight: 300;">
                    Add .active to items in the dropdown to style them as
                    active. To convey the active state to assistive
                    technologies, use the aria-current attribute — using the
                    page value for the current page, or true for the current
                    item in a set.
                  </div>
                </div>
                <div>
                  <div class="fw-bold mb-1">Bobot Soal</div>
                  <span
                    class="px-3 py-1 fw-bold d-inline-block primary text-primary"
                    style="font-size: 16px; border-radius: 7px;"
                    >30</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
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
                <div class="mb-4">
                  <div
                    class="img-question d-flex align-items-center justify-content-center"
                  >
                    <img src="../../assets/tentang.jpg" alt="" />
                  </div>
                </div>
                <div class="mb-4">
                  <div class="fw-bold mb-1">Soal</div>
                  <div style="font-size: 16px; font-weight: 300;">
                    Add .active to items in the dropdown to style them as
                    active. To convey the active state to assistive
                    technologies, use the aria-current attribute — using the
                    page value for the current page, or true for the current
                    item in a set.
                  </div>
                </div>
                <div>
                  <div class="fw-bold mb-1">Bobot Soal</div>
                  <span
                    class="px-3 py-1 fw-bold d-inline-block primary text-primary"
                    style="font-size: 16px; border-radius: 7px;"
                    >30</span
                  >
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
