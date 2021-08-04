<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="d-flex flex-wrap justify-content-between align-items-center">
              <div class="title-content">Data Presensi</div>
              <!-- <button type="button" class="btn btn-success">+ Tambah</button> -->
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-6">
                <label class="form-label">Prodi</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-lg-3 col-md-4 col-6">
                <label class="form-label">Tanggal</label>
                <input class="form-control" type="date" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr >
                    <th scope="col">NAMA</th>
                    <th scope="col">PRODI</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">TANGGAL</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="align-middle" v-for="(items, index) in dataPresensi" :key="index">
                    <td >
                      <div>
                        <div class="d-flex align-items-center cursor-pointer" data-bs-toggle="modal" data-bs-target="#lihatPresensi" @click="openPresensi(items.uuid)">
                          <div
                            class="image d-flex align-items-center justify-content-center"
                          >
                            <img
                              :src="items.foto"
                              alt=""
                            />
                          </div>
                          <div class="ms-3 ">
                            <div class="main-text">{{items.user.mahasiswa.nama}}</div>
                            <div class="sub-text">{{items.nim}}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="main-text">{{items.user.mahasiswa.prodi.nama}}</div>
                        <div class="sub-text">{{items.user.mahasiswa.gugus.name}}</div>
                      </div>
                    </td>
                    <td>{{items.user.mahasiswa.email}}</td>
                    <td>
                      <div>
                        <div class="main-text">{{ dateChange(items.created_at) }}</div>
                        <div class="sub-text">Pukul {{timeChange(items.created_at)}} WIB</div>
                      </div>
                    </td>
                    <td>
                      <div v-if="items.jenis === 'masuk'" class="badge-custom success text-success">Masuk</div>
                      <div v-if="items.jenis === 'keluar'" class="badge-custom danger text-danger">Keluar</div>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm text-white"
                        data-bs-toggle="modal" data-bs-target="#lihatPresensi"
                        @click="openPresensi(items.uuid)"
                      >
                        <i class="fas fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade"  id="lihatPresensi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content" v-if="dataOnePresensi">
          <div class="modal-header">
            <h5 class="modal-title">Data Presensi Mahasiswa {{dataOnePresensi.user.mahasiswa.nama}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row" >
              <div class="col-lg-4">
                <img class="img-fluid" :src="dataOnePresensi.foto" alt="">
              </div>
              <div class="col-lg-8">
                <form action="" class="modal-presensi">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="nama">Nama Mahasiswa</label>
                        <input type="text" name="nama" readonly id="nama" v-model="dataOnePresensi.user.mahasiswa.nama" class="form-control">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="nim">NIM Mahasiswa</label>
                        <input type="text" name="nim" readonly id="nim" v-model="dataOnePresensi.user.mahasiswa.nim" class="form-control">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label for="location">Lokasi</label>
                        <textarea name="" id="" style="height: 85px" class=" form-control" readonly v-model="dataOnePresensi.alamat"></textarea>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <div>
                          <label for="status">Status</label>
                        </div>
                        <div v-if="dataOnePresensi.jenis === 'keluar'" class="badge-custom danger text-danger">Keluar</div>
                        <div v-if="dataOnePresensi.jenis === 'masuk'" class="badge-custom success text-success">Masuk</div>
                        <!-- <input type="number" name="long" readonly id="long" v-model="dataOnePresensi.long" class="form-control"> -->
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
/* eslint-env jquery */

export default {
  data: function() {
    return {
      width: null,
      dataPresensi: null,
      dataOnePresensi: null
    };
  },
  methods: {
    openPresensi(a) {
      axios.get(`https://gmedia.primakom.co.id/gmedia/superadmin/presensi/${a}`, {
        headers: {
          Authorization: localStorage.token
        }
      }).then((result) => {
        console.log(result)
        this.dataOnePresensi = result.data.data
      }).catch((err) => {
        console.log(err)
      });
    },
    dateChange(a) {
      return moment(a).lang("id").format('MMMM Do YYYY')
    },
    timeChange(a) {
      return moment(a).lang("id").format('h:mm:ss')
    }
  },
  mounted() {
    this.width = $(document).width();
    axios.get('https://gmedia.primakom.co.id/gmedia/superadmin/presensi', {
      headers: {
        Authorization: localStorage.token
      }
    }).then((result) => {
      console.log(result)
      this.dataPresensi = result.data.data
      $(document).ready(function() {
        $(".table").DataTable({
          pageLength: 25
        });
      });
    }).catch((err) => {
      console.log(err)
    });
  },
};
</script>

<style scoped>
.modal-presensi .form-control {
  height: 36px;
  border-radius: 8px !important;
  background: #F8F8F8;
}
.img-fluid{
  border-radius: 10px;
}
.btn-close{
  /* top: 0; */
  position: relative;
  top: 0;
  right: 0;
}
</style>