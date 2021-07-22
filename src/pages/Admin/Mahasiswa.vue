<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div class="title-content">Data Mahasiswa</div>
              <div class="d-flex">
                <a href="#" type="button" class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#tambah">
                  + Tambah
                </a>
                <button type="button" class="btn btn-warning text-white">
                  Import Excel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-6">
                <label class="form-label">Fakultas</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-lg-3 col-md-4 col-6">
                <label class="form-label">Prodi</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="card-shadow mb-3">
          <div class="p-3">
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">NAMA</th>
                    <th scope="col">PRODI</th>
                    <th scope="col">FAKULTAS</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">TELEPON</th>
                    <th scope="col">AKSI</th>
                  </tr>
                </thead>
                <tbody v-if="dataMahasiswa">
                  <tr class="align-middle" v-for="(items, index) in dataMahasiswa" :key="index">
                    <td>
                      <div>
                        <div class="d-flex align-items-center">
                          <div
                            class="image d-flex align-items-center justify-content-center"
                          >
                            <img
                              src="../../assets/images/profile.jpeg"
                              alt=""
                            />
                          </div>
                          <div class="ms-3">
                            <div class="main-text">{{items.nama}}</div>
                            <div class="sub-text">{{items.nim}}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="main-text">Teknik Perminyakan</div>
                        <div class="sub-text">Gugus 1</div>
                      </div>
                    </td>
                    <td>{{items.prodi.fakultas.nama}}</td>
                    <td>{{items.email}}</td>
                    <td>0873324213</td>
                    <td>
                      <div class="d-flex">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm me-2"
                        >
                          <i class="fas fa-eye"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-warning btn-sm text-white me-2"
                        >
                          <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger btn-sm"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
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
    <div class="modal fade"  id="tambah" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" style="max-width: 750px;">
				<div class="modal-content" style="border: none;border-radius: 20px !important;">
					<button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					<div class="modal-body modal-tambah">
						<div class="judul-modal-tambah">
							<h3>Tambah Mahasiswa</h3>
						</div>
            <hr>
						<form action="" @submit.prevent="tambahMahasiswa">
							<div class="row">
								<div class="col-lg-6">
									<div class="form-group">
										<label for="nama">Nama <span class="text-info">*</span></label>
										<input type="text" v-model="tambah.nama" name="nama" id="nama" class="form-control" placeholder="Nama Mahasiswa">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label for="nim">NIM <span class="text-info">*</span></label>
										<input type="text" v-model="tambah.nim" name="nim" id="nim" class="form-control" placeholder="Nomor Induk Mahasiswa">
									</div>
								</div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="email">Email <span class="text-info">*</span></label>
                    <input type="email" v-model="tambah.email" name="email" id="email" class="form-control" placeholder="example@gmail.com">
                  </div>
                </div>
                <div class="col-lg-6">
									<div class="form-group">
										<label for="nomor">Nomor Telepon <span class="text-info">*</span></label>
										<input type="number" v-model="tambah.nomor" name="nomor" id="nomor" class="form-control" placeholder="081234567890">
									</div>
								</div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="tgllahir">Tanggal Lahir</label>
                    <input type="date" name="tgllahir" id="tgllahir" class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="prodi">Prodi <span class="text-info">*</span></label>
                    <select name="prodi" v-model="tambah.prodi" id="prodi" class="form-select">
                      <option value="" selected>Pilih Prodi</option>
                      <option :value="items.kode" v-for="(items,index) in dataProdi" :key="index">{{items.nama}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="gugus">Gugus <span class="text-info">*</span></label>
                    <select name="gugus" v-model="tambah.gugus" id="gugus" class="form-select">
                      <option value="" selected>Pilih Gugus</option>
                      <option :value="items.pemandu_id" v-for="(items,index) in dataGugus" :key="index">{{items.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="fakultas">Fakultas <span class="text-info">*</span></label>
                    <select name="fakultas" v-model="tambah.fakultas" id="fakultas" class="form-select">
                      <option value="" selected>Pilih Fakultas</option>
                      <option :value="items.id" v-for="(items,index) in dataFakultas" :key="index">{{items.nama}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="alamat">Alamat Mahasiswa</label>
                    <textarea name="alamat" id="alamat" style="height: 72px;" cols="30" rows="4" class="form-control" placeholder="Masukkan Alamat"></textarea>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="foto">Foto Mahasiswa</label>
                    <input type="file" name="foto" id="foto" class="form-control">
                  </div>
                </div>
								<div class="col-lg-12 footer-modal">
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-primary" style="margin-right: 24px;">Tambah</button>
                    <button class="btn btn-outline-primary">Batal</button>
                  </div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import axios from 'axios';
/* eslint-env jquery */

export default {
  data: function() {
    return {
      width: null,
      dataMahasiswa: null,
      dataProdi: null,
      dataGugus: null,
      dataFakultas: null,
      tambah: {
        prodi: '',
        nama: null,
        nim: null,
        gugus: '',
        fakultas: '',
        email: null,
        nomor: null,
        foto: null,
        alamat: null,
        tgllahir: null,
      }
    };
  },
  methods: {
    tambahMahasiswa() {
      axios.post('https://gmedia.primakom.co.id/gmedia/superadmin/mahasiswa', {
        nim : this.tambah.nim,
        nama: this.tambah.nama,
        email: this.tambah.email,
        gugus_id: this.tambah.gugus,
        prodi_id: this.tambah.prodi,
        alamat: this.tambah.alamat,
        foto: this.tambah.foto,
        fakultas_id: this.tambah.fakultas,
        tgllahir: this.tambah.tgllahir,
        nohp: this.tambah.nomor
      }, {
        headers: {
          Authorization: localStorage.token
        }
      })
    }
  },
  mounted() {
    this.width = $(document).width();

    axios.get('https://gmedia.primakom.co.id/gmedia/superadmin/mahasiswa', {
      headers: {
        Authorization : localStorage.token
      }
    }).then((result) => {
      console.log(result)
      this.dataMahasiswa = result.data.data
      $(document).ready(function() {
        $(".table").DataTable();
      });
    }).catch((err) => {
      console.log(err)
    });
    axios.get('https://gmedia.primakom.co.id/gmedia/superadmin/prodi', {
      headers: {
        Authorization : localStorage.token
      }
    }).then((result) => {
      console.log(result)
      this.dataProdi = result.data.data
    }).catch((err) => {
      console.log(err)
    });
    axios.get('https://gmedia.primakom.co.id/gmedia/superadmin/gugus', {
      headers: {
        Authorization : localStorage.token
      }
    }).then((result) => {
      console.log(result)
      this.dataGugus = result.data.data
    }).catch((err) => {
      console.log(err)
    });
    axios.get('https://gmedia.primakom.co.id/gmedia/superadmin/fakultas', {
      headers: {
        Authorization : localStorage.token
      }
    }).then((result) => {
      console.log(result)
      this.dataFakultas = result.data.data
    }).catch((err) => {
      console.log(err)
    });
  },
};
</script>

<style scoped>
.modal-tambah{
  padding: 33px 33px 0 33px;
}
.modal-tambah form{
  padding-top: 16px;
}
.modal-tambah .form-control{
  height: 36px;
  border-radius: 8px !important;
  background: #F8F8F8;
}
.modal-tambah .form-control::placeholder{
  color: rgba(175, 181, 192, 1);
  font-weight: 400;
  font-size: 14px;
}
.judul-modal-tambah h3{
  margin-bottom: 22px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
}
.footer-modal{
  margin-bottom: 32px;
}
.footer-modal .btn{
  width: 100px;
  height: 36px;
}
</style>