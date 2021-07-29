<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content content-dalem ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <router-link
                  :to="{
                    name: 'List Tugas Gugus',
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
                    List Tugas
                  </div>
                  <div class="title-type-soal">
                    {{ $route.params.name_gugus }}
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
      .get(
        this.url +
          "tugas/superadmin/tugas/" +
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

<style scoped>
/* tr th {
  text-align: center;
}
tr td {
  text-align: center;
} */
</style>
