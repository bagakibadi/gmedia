<template>
  <div class="dashboard">
    <NavbarPemandu :widthContent="width" />
    <div :class="`content content-dalem ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <div class="title-content">
                  Hasil Tugas
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-3">
            <div class="card-shadow mb-3">
              <div class="p-3">
                <!-- <h4 class="judul">Tugas</h4> -->
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">JUDUL</th>
                        <th scope="col" class="text-center">MULAI</th>
                        <th scope="col" class="text-center">DEADLINE</th>
                        <th scope="col" class="text-center">STATUS</th>
                        <th scope="col" class="text-center">AKSI</th>
                      </tr>
                    </thead>
                    <tbody v-if="dataTugas">
                      <tr
                        class="align-middle"
                        v-for="(item, id) in dataTugas.data.data"
                        :key="id"
                      >
                        <td>
                          <p class="text-td">
                            {{ item.tugas.nama }}
                          </p>
                        </td>
                        <td class="text-center">
                          <div>
                            <div class="main-text">
                              {{ formatDate(item.tugas.mulai.split(" ")[0]) }}
                            </div>
                            <div class="sub-text">
                              {{ item.tugas.mulai.split(" ")[1] }}
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <div>
                            <div class="main-text">
                              {{ formatDate(item.tugas.selesai.split(" ")[0]) }}
                            </div>
                            <div class="sub-text">
                              {{ item.tugas.selesai.split(" ")[1] }}
                            </div>
                          </div>
                        </td>
                        <td class="text-center">
                          <div
                            class="px-3 py-1 danger text-danger border-radius d-inline-block"
                            style="font-weight: 600;"
                            v-if="item.tugas.pengerjaan.length == 0"
                          >
                            Belum Dikerjakan
                          </div>
                          <div
                            class="px-3 py-1 primary text-primary border-radius d-inline-block"
                            style="font-weight: 600;"
                            v-else-if="item.tugas.dinilai !== item.tugas.pengerjaan.length"
                          >
                            {{ item.tugas.dinilai }}/{{
                              item.tugas.pengerjaan.length
                            }}
                            telah Dinilai
                          </div>
                          <div
                            class="px-3 py-1 success text-success border-radius d-inline-block"
                            style="font-weight: 600;"
                            v-else
                          >
                            Dinilai
                          </div>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <router-link
                              :to="{
                                name: 'Detail Penilaian',
                                params: {
                                  name_gugus: $route.params.name,
                                  id_gugus: $route.params.id,
                                  name_tugas: item.tugas.nama,
                                  id_tugas: item.tugas.uuid,
                                },
                              }"
                              class="
                                btn btn-primary btn-sm
                              "
                              v-if="!item.tugas.penilaian"
                              >Detail</router-link
                            >
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("DD MMM YYYY");
    },
  },
  mounted() {
    this.width = $(document).width();

    axios
      .get(this.url + "tugas/pemandu/tugas/", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then((res) => {
        this.dataTugas = res.data;
        console.log(res);
        setTimeout(() => {
          $(".table").DataTable();
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });

    $(document).ready(function() {});
  },
};
</script>