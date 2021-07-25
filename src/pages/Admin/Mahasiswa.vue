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
                <a href="#" type="button" class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#tambah" @click="openDropify">
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
                              :src="items.foto"
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
                        <div class="main-text">{{items.prodi.nama}}</div>
                        <div class="sub-text">{{items.gugus.name}}</div>
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
                          @click="openEditMahasiswa(items.uuid)"
                          data-bs-toggle="modal" data-bs-target="#editModal"
                        >
                          <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger btn-sm"
                          @click="hapusMahasiswa(items.uuid,items.nama)"
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
    <div class="modal fade"  id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" style="max-width: 750px;">
				<div class="modal-content" style="border: none;border-radius: 20px !important;">
					<button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					<div class="modal-body modal-tambah" >
						<div class="judul-modal-tambah">
							<h3>Edit Mahasiswa</h3>
						</div>
            <hr>
						<form action="" v-if="editMahasiswaData" @submit.prevent="editMahasiswa">
							<div class="row">
								<div class="col-lg-6">
									<div class="form-group">
										<label for="nama">Nama <span class="text-info">*</span></label>
										<input type="text" v-model="editMahasiswaData.nama" name="nama" id="nama" class="form-control" placeholder="Nama Mahasiswa">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label for="nim">NIM <span class="text-info">*</span></label>
										<input type="text" v-model="editMahasiswaData.nim" name="nim" id="nim" class="form-control" placeholder="Nomor Induk Mahasiswa">
									</div>
								</div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="email">Email <span class="text-info">*</span></label>
                    <input type="email" v-model="editMahasiswaData.email" name="email" id="email" class="form-control" placeholder="example@gmail.com">
                  </div>
                </div>
                <div class="col-lg-6">
									<div class="form-group">
										<label for="nomor">Nomor Telepon <span class="text-info">*</span></label>
										<input type="number" v-model="editMahasiswaData.nohp" name="nomor" id="nomor" class="form-control" placeholder="081234567890">
									</div>
								</div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="tgllahir">Tanggal Lahir</label>
                    <input type="date" name="tgllahir" v-model="editMahasiswaData.tgllahir" id="tgllahir" class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="prodi">Prodi <span class="text-info">*</span></label>
                    <select name="prodi" v-model="editMahasiswaData.prodi_id" id="prodi" class="form-select">
                      <option value="" selected>Pilih Prodi</option>
                      <option :value="items.uuid" v-for="(items,index) in dataProdi.data" :key="index">{{items.nama}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="gugus">Gugus <span class="text-info">*</span></label>
                    <select name="gugus" v-model="editMahasiswaData.gugus_id" id="gugus" class="form-select">
                      <option value="" selected>Pilih Gugus</option>
                      <option :value="items.uuid" v-for="(items,index) in dataGugus.data" :key="index">{{items.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="fakultas">Fakultas <span class="text-info">*</span></label>
                    <select name="fakultas" v-model="editMahasiswaData.prodi.fakultas.uuid" id="fakultas" class="form-select">
                      <option value="" selected>Pilih Fakultas</option>
                      <option :value="items.uuid" v-for="(items,index) in dataFakultas.data" :key="index">{{items.nama}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="alamat">Alamat Mahasiswa</label>
                    <textarea name="alamat" v-model="editMahasiswaData.alamat" id="alamat" style="height: 72px;" cols="30" rows="4" class="form-control" placeholder="Masukkan Alamat"></textarea>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="foto">Foto Mahasiswa</label>
                    <input type="file" :data-default-file="editMahasiswaData.foto" name="foto" id="fotomahasiswa" class="dropify">
                  </div>
                </div>
								<div class="col-lg-12 footer-modal">
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-primary" style="margin-right: 24px;">Edit</button>
                    <a href="#" data-bs-dismiss="modal" aria-label="Close" class="btn btn-outline-primary">Batal</a>
                  </div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    <div class="modal fade" v-if="dataProdi !== null && dataGugus !== null && dataFakultas !== null" id="tambah" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <input type="date" name="tgllahir" v-model="tambah.tgllahir" id="tgllahir" class="form-control">
                  </div>
                </div>
                <div class="col-lg-6" >
                  <div class="form-group" v-if="dataProdi !== null">
                    <label for="prodi">Prodi <span class="text-info">*</span></label>
                    <select name="prodi" v-model="tambah.prodi" id="prodi" class="form-select">
                      <option value="" selected>Pilih Prodi</option>
                      <option :value="items.uuid" v-for="(items,index) in dataProdi.data" :key="index">{{items.nama}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6" >
                  <div class="form-group" v-if="dataGugus !== null">
                    <label for="gugus">Gugus <span class="text-info">*</span></label>
                    <select name="gugus" v-model="tambah.gugus" id="gugus" class="form-select">
                      <option value="" selected>Pilih Gugus</option>
                      <option :value="items.uuid" v-for="(items,index) in dataGugus.data" :key="index">{{items.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6" v-if="dataFakultas">
                  <div class="form-group">
                    <label for="fakultas">Fakultas <span class="text-info">*</span></label>
                    <select name="fakultas" v-model="tambah.fakultas" id="fakultas" class="form-select">
                      <option value="" selected>Pilih Fakultas</option>
                      <option :value="items.uuid" v-for="(items,index) in dataFakultas.data" :key="index">{{items.nama}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="alamat">Alamat Mahasiswa</label>
                    <textarea name="alamat" v-model="tambah.alamat" id="alamat" style="height: 72px;" cols="30" rows="4" class="form-control" placeholder="Masukkan Alamat"></textarea>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label for="foto">Foto Mahasiswa</label>
                    <input type="file" name="foto" id="fotomahasiswa" class="dropify">
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
import Swal from 'sweetalert2';
/* eslint-env jquery */

export default {
  data: function() {
    return {
      fotoEdit: null,
      editMahasiswaData: null,
      width: null,
      dataMahasiswa: null,
      dataProdi: null,
      dataGugus: null,
      dataFakultas: null,
      tambah: {
        nim: null,
        nama: null,
        prodi: '',
        alamat: null,
        gugus: '',
        fakultas: '',
        email: null,
        nomor: null,
        foto: null,
        tgllahir: null,
      }
    };
  },
  methods: {
    uploadEdit(asd) {
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log(e)
        var ee = e.target.result
				this.fotoEdit = ee.replace("data:image/jpeg;base64,", "")
      };
      reader.onerror = function(error) {
        alert(error);
      };
      reader.readAsDataURL(asd);
    },
    openDropify() {
      $(".dropify").dropify({
        messages: {
          default: "Unggah Foto Mahasiswa",
          replace: "Timpa dan upload gambar",
          remove: "hapus",
          error: "Ooops, telah terjadi kesalahan.",
        },
      });
    },
    editMahasiswa() {

      axios.put(`https://gmedia.primakom.co.id/gmedia/superadmin/mahasiswa/${this.editMahasiswaData.uuid}`, {
        nim: this.editMahasiswaData.nim,
        nama: this.editMahasiswaData.nama,
        alamat: this.editMahasiswaData.alamat,
        gugus_id: this.editMahasiswaData.gugus_id,
        email: this.editMahasiswaData.email,
        prodi_id: this.editMahasiswaData.prodi_id,
        foto: '',
        user_id: this.editMahasiswaData.user_id
      }, {
        headers: {
          Authorization: localStorage.token,
          'Content-Type': 'application/json'
        }
      }).then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      });
    },
    openEditMahasiswa(uuidMahasiswa) {
      setTimeout(() => {
        $(".dropify").dropify({
          messages: {
            default: "Unggah Foto Mahasiswa",
            replace: "Timpa dan upload gambar",
            remove: "hapus",
            error: "Ooops, telah terjadi kesalahan.",
          },
        });
      }, 200);
      axios.get(`https://gmedia.primakom.co.id/gmedia/superadmin/mahasiswa/${uuidMahasiswa}`, {
        headers: {
          Authorization: localStorage.token
        }
      }).then((result) => {
        this.editMahasiswaData = result.data.data
      }).catch((err) => {
        console.log(err)
      });
    },
    hapusMahasiswa(uuidMahasiswa, namaMahasiswa) {
      Swal.fire({
        title: `Hapus Akun Mahasiswa ${namaMahasiswa}`,
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`https://gmedia.primakom.co.id/gmedia/superadmin/mahasiswa/${uuidMahasiswa}`, {
            headers: {
              Authorization: localStorage.token
            }
          }).then((res) => {
            console.log(res)
            if(res.data.success) {
              Swal.fire(
                'Deleted!',
                `Akun Mahasiswa ${namaMahasiswa} telah dihapus!`,
                'success'
              ).then(() => {
                window.location.reload()
              }).catch((err) => {
                window.location.reload()
                console.log(err)
              });
            } else{
              Swal.fire(
                'Gagal!',
                res.data.message,
                'warning'
              ).then(() => {
                window.location.reload()
              }).catch((err) => {
                console.log(err)
                window.location.reload()
              });
            }
          }).catch((err) => {
            console.log(err)
          });

        }
      })
    },
    upload(asd) {
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log(e)
        var ee = e.target.result
				this.tambah.foto = ee.replace("data:image/jpeg;base64,", "")
      };
      reader.onerror = function(error) {
        alert(error);
      };
      reader.readAsDataURL(asd);
    },
    tambahMahasiswa() {
      if (document.getElementById('fotomahasiswa').files[0]) {
        this.upload(document.getElementById('fotomahasiswa').files[0])
      } else {
        this.tambah.foto = null
      }
      setTimeout(() => {        
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
        }).then((result) => {
          console.log(result)
          if(result.data.success) {
            Swal.fire(
              'Berhasil',
              `Berhasil Tambah Mahasiswa`,
              'success'
            ).then(() => {
              window.location.reload()
            }).catch(() => {
              window.location.reload()
            });
          }
        }).catch((err) => {
          console.log(err)
        });
      }, 500);
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
  },
  created() {
    $(".dropify").dropify({
      messages: {
        default: "Unggah Foto Mahasiswa",
        replace: "Timpa dan upload gambar",
        remove: "hapus",
        error: "Ooops, telah terjadi kesalahan.",
      },
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
  }
};
</script>

<style scoped>
.form-group .dropify-wrapper{
  border-color: rgba(221, 224, 228, 1) !important;
}
.modal input[type="text"], .modal input[type="email"], .modal input[type="number"], .modal textarea {
  border: none !important;
}
.modal .form-control, .modal .form-select{
  border-color: rgba(221, 224, 228, 1);
}
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