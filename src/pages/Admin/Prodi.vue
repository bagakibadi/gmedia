<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
					<div class="p-3">
            <div class="d-flex flex-wrap justify-content-between align-items-center">
              <div class="title-content">Data Gugus</div>
              <div class="d-flex">
                <a href="#" type="button" class="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#tambahModal" >
                  + Tambah
                </a>
              </div>
            </div>
          </div>
				</div>
				<div class="card-shadow mb-3">
					<div class="p-3">
						<div class="table-responsive">
							<table id="tablenya" class="table">
                <thead>
                  <tr>
                    <th scope="col">NAMA PRODI</th>
										<th scope="col">KODE PRODI</th>
                    <th scope="col">NAMA FAKULTAS</th>
                    <th scope="col">KODE FAKULTAS</th>
                    <th scope="col">AKSI</th>
                  </tr>
                </thead>
								<tbody v-if="dataProdi">
									<tr v-for="(items,index) in dataProdi" :key="index">
										<td>{{items.nama}}</td>
										<td>{{items.kode}}</td>
										<td>{{items.fakultas.nama}}</td>
										<td>{{items.fakultas.kode}}</td>
										<td>
											<div class="d-flex">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm me-2"
                          data-bs-toggle="modal" data-bs-target="#lihatModal"
                        >
                          <i class="fas fa-eye"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-warning btn-sm text-white me-2"
                          data-bs-toggle="modal" data-bs-target="#editModal"
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
								<!-- <tbody v-if="dataGugus">
                  <tr v-for="(items, index) in dataGugus" :key="index">
                    <td v-if="items.name">
                      {{items.name}}
                    </td>
                    <td v-if="items.pemandu">
                      {{items.pemandu[0].nama}}
                    </td>
                    <td v-if="items.pemandu">
                      {{items.pemandu[0].email}}
                    </td>
                    <td v-if="items.pemandu">
                      {{items.pemandu[0].no_hp}}
                    </td>
                    <td>
                      <div class="d-flex">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm me-2"
                          data-bs-toggle="modal" data-bs-target="#lihatModal"
                        >
                          <i class="fas fa-eye"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-warning btn-sm text-white me-2"
                          data-bs-toggle="modal" data-bs-target="#editModal"
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
                  </tr> -->
									<!-- <tr v-for="(items, index) in dataPemandu" :key="index">
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
											{{items.email}}
										</td>
										<td>
											{{items.no_hp}}
										</td>
										<td>
											<div v-if="items.gugus">
                        <div class="main-text" >{{items.gugus.name}}</div>
                      </div>
											<div v-else>
                        <div class="sub-text"></div>
											</div>
										</td>
										<td>
                      <div class="d-flex">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm me-2"
													@click="openEditPemandu(items.uuid)"
                          data-bs-toggle="modal" data-bs-target="#lihatModal"
                        >
                          <i class="fas fa-eye"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-warning btn-sm text-white me-2"
													@click="openEditPemandu(items.uuid)"
                          data-bs-toggle="modal" data-bs-target="#editModal"
                        >
                          <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger btn-sm"
													@click="hapusPemandu(items.uuid,items.nama)"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </td>
									</tr> -->
								<!-- </tbody> -->
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Edit Gugus</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="container">
							<form action="" v-if="dataOnePemandu" @submit.prevent="editPemandu">
								<div class="row">
									<div class="col-lg-6">
										<div class="form-group">
											<label for="nama">Nama Pemandu</label>
											<div class="check-error">
												<input type="text" name="nama" id="nama" placeholder="Nama Pemandu" class="form-control" v-model="dataOnePemandu.nama">
												<small :class="`text-danger d-flex ${validationEdit.nama.status === true ? 'd-none' : 'd-flex'}`">{{validationEdit.nama.message}}</small>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="email">Email</label>
											<div class="check-error">
												<input type="email" name="email" id="email" class="form-control" placeholder="Contoh: nama@email.com" v-model="dataOnePemandu.email">
												<small :class="`text-danger d-flex ${validationEdit.email.status === true ? 'd-none' : 'd-flex'}`">{{validationEdit.email.message}}</small>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="nohp">Nomor Telepon</label>
											<div class="check-error">
												<input type="number" name="nohp" id="nohp" class="form-control" placeholder="Contoh: 08123456789" v-model="dataOnePemandu.no_hp">
												<small :class="`text-danger d-flex ${validationEdit.no_hp.status === true ? 'd-none' : 'd-flex'}`">{{validationEdit.no_hp.message}}</small>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="gugus">Gugus</label>
											<div class="check-error">
												<select name="gugus" id="gugus" v-model="dataOnePemandu.gugus_id" class="form-select">
													<option value="" selected disabled>Pilih Gugus</option>
													<option :value="items.uuid" v-for="(items,index) in dataGugus" :key="index">{{items.name}}</option>
												</select>
												<small :class="`text-danger d-flex ${validationEdit.gugus_id.status === true ? 'd-none' : 'd-flex'}`">{{validationEdit.gugus_id.message}}</small>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="alamat">Alamat</label>
											<div class="check-error">
												<textarea name="alamat" id="alamat" class="form-control" v-model="dataOnePemandu.alamat" placeholder="Masukkan Alamat" cols="30" rows="10"></textarea>
												<small :class="`text-danger d-flex ${validationEdit.alamat.status === true ? 'd-none' : 'd-flex'}`">{{validationEdit.alamat.message}}</small>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="foto">Foto Pemandu</label>
											<div class="check-error">
												<input type="file" name="foto" id="fotoEdit" :data-default-file="dataOnePemandu.foto" class="dropify">
												<small :class="`text-danger d-flex ${validationEdit.foto.status === true ? 'd-none' : 'd-flex'}`">{{validationEdit.foto.message}}</small>
											</div>
										</div>
									</div>
									<div class="col-lg-12 footer-modal">
										<div class="d-flex justify-content-end">
											<button class="btn btn-primary" style="margin-right: 24px;">Edit</button>
											<a class="btn btn-outline-primary" data-bs-dismiss="modal">Batal</a>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="modal fade" id="lihatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Detail Gugus</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="container">
							<form action="" v-if="dataOnePemandu">
								<div class="row">
									<div class="col-lg-6">
										<div class="form-group">
											<label for="nama">Nama Pemandu</label>
											<input type="text" readonly name="nama" id="nama" placeholder="Nama Pemandu" class="form-control" v-model="dataOnePemandu.nama">
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="email">Email</label>
											<input type="email" readonly name="email" id="email" class="form-control" placeholder="Contoh: nama@email.com" v-model="dataOnePemandu.email">
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="nohp">Nomor Telepon</label>
											<input type="number" readonly name="nohp" id="nohp" class="form-control" placeholder="Contoh: 08123456789" v-model="dataOnePemandu.no_hp">
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="gugus">Gugus</label>
											<select name="gugus" disabled id="gugus" v-model="dataOnePemandu.gugus_id" class="form-select">
												<option value="" selected disabled>Pilih Gugus</option>
												<option :value="items.uuid" v-for="(items,index) in dataGugus" :key="index">{{items.name}}</option>
											</select>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="alamat">Alamat</label>
											<textarea readonly name="alamat" id="alamat" class="form-control" v-model="dataOnePemandu.alamat" placeholder="Masukkan Alamat" cols="30" rows="10"></textarea>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="foto">Foto Pemandu</label>
											<img :src="dataOnePemandu.foto" class="img-show" alt="">
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<a type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</a>
					</div>
				</div>
			</div>
		</div> -->
		<div class="modal fade" id="tambahModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Tambah Prodi</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="container">
							<form action="">
								<div class="row">
									<div class="col-lg-6">
										<div class="form-group">
											<label for="nama">Nama Prodi</label>
											<div class="check-error">
												<input type="text" name="nama" id="nama" placeholder="Nama Prodi" class="form-control" v-model="tambah.name">
												<small :class="`text-danger d-flex ${validationTambah.nama.status === true ? 'd-none' : 'd-flex'}`">{{validationTambah.nama.message}}</small>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="fakultas">Fakultas <span class="text-info">*</span></label>
											<div class="check-error">
												<select name="fakultas" v-model="tambah.fakultas_id" id="fakultas" class="form-select">
													<option value="" selected>Pilih Fakultas</option>
													<option :value="items.uuid" v-for="(items,index) in dataFakultas.data" :key="index">{{items.nama}}</option>
												</select>
												<small :class="`text-danger d-flex ${validationTambah.fakultas_id.status === true ? 'd-none' : 'd-flex'}`">{{validationTambah.fakultas_id.message}}</small>
											</div>
										</div>
									</div>
									<div class="col-lg-12">
										<div class="modal-footer">
											<div class="d-flex justify-content-end">
												<button class="btn btn-primary" style="margin-right: 24px;" type="button">Tambah</button>
												<a href="#" data-bs-dismiss="modal" aria-label="Close" class="btn btn-outline-primary">Batal</a>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
/* eslint-disable no-undef */

export default {
	data: function() {
    return {
      width: null,
			dataProdi: null,
			dataGugus: null,
			dataOnePemandu: null,
			dataFakultas: null,
			tambah: {
				name: null,
				fakultas_id: ''
			},
			validationTambah: {
				nama: {
					status: true,
					message: null
				},
				fakultas_id: {
					status: true,
					message: null
				}
			},
			validationEdit: {
				nama: {
					status: true,
					message: null
				},
			}
		}
	},
	methods: {
		uploadEdit(asd) {
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log(e)
        var ee = e.target.result
				this.dataOnePemandu.foto = ee.replace("data:image/jpeg;base64,", "")
      };
      reader.onerror = function(error) {
        alert(error);
      };
      reader.readAsDataURL(asd);
    },
		editPemandu() {
			if(this.dataOnePemandu.nama && this.dataOnePemandu.email && this.dataOnePemandu.no_hp && this.dataOnePemandu.gugus_id && this.dataOnePemandu.alamat) {
				if (document.getElementById('fotoEdit').files[0]) {
					this.uploadEdit(document.getElementById('fotoEdit').files[0])
				} else {
					this.dataOnePemandu.foto = null
				}
				setTimeout(() => {
					axios.put(`https://gmedia.primakom.co.id/gmedia/superadmin/pemandu/${this.dataOnePemandu.uuid}`, this.dataOnePemandu, {
						headers: {
							Authorization: localStorage.token
						}
					}).then((result) => {
						console.log(result)
						if(result.data.success){
							Swal.fire(
								'Berhasil Edit!',
								`${result.data.message}!`,
								'success'
							).then(() => {
								window.location.reload()
							}).catch((err) => {
								window.location.reload()
								console.log(err)
							});
						}
					}).catch((err) => {
						console.log(err)
					});
				}, 500);
			}
			if(!this.dataOnePemandu.nama) {
				this.validationEdit.nama.status = false
				this.validationEdit.nama.message = 'Nama Pemandu harus diisi!'
			} else {
				this.validationEdit.nama.status = true
				this.validationEdit.nama.message = null
			}

			if(!this.dataOnePemandu.email) {
				this.validationEdit.email.status = false
				this.validationEdit.email.message = 'Email Pemandu harus diisi!'
			} else {
				this.validationEdit.email.status = true
				this.validationEdit.email.message = null
			}

			if(!this.dataOnePemandu.no_hp) {
				this.validationEdit.no_hp.status = false
				this.validationEdit.no_hp.message = 'Nomor Telepon harus diisi!'
			} else {
				this.validationEdit.no_hp.status = true
				this.validationEdit.no_hp.message = null
			}

			if(!this.dataOnePemandu.gugus_id) {
				this.validationEdit.gugus_id.status = false
				this.validationEdit.gugus_id.message = 'Gugus harus dipilih!'
			} else {
				this.validationEdit.gugus_id.status = true
				this.validationEdit.gugus_id.message = null
			}

			if(!this.dataOnePemandu.alamat) {
				this.validationEdit.alamat.status = false
				this.validationEdit.alamat.message = 'Alamat Pemandu harus diisi!'
			} else {
				this.validationEdit.alamat.status = true
				this.validationEdit.alamat.message = null
			}
		},
		openEditPemandu(uuidPemandu) {
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
			axios.get(`https://gmedia.primakom.co.id/gmedia/superadmin/pemandu/${uuidPemandu}`, {
				headers: {
					Authorization: localStorage.token
				}
			}).then((result) => {
				console.log(result)
				this.dataOnePemandu = result.data.data
			}).catch((err) => {
				console.log(err)
			});
		},
		hapusPemandu(uuidPemandu, namaPemandu) {
			Swal.fire({
        title: `Hapus Akun ${namaPemandu}`,
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
				console.log(result)
				if(result.isConfirmed) {
					axios.delete(`https://gmedia.primakom.co.id/gmedia/superadmin/pemandu/${uuidPemandu}`,{
						headers: {
							Authorization: localStorage.token
						}
					}).then((res) => {
						console.log(res)
						if(res.data.success) {
              Swal.fire(
                'Deleted!',
                `Akun Pemandu ${namaPemandu} telah dihapus!`,
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
					}).catch((errs) => {
						console.log(errs)
					});
				}
			}).catch((err) => {
				console.log(err)
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
		tambahGugus() {
			if(this.tambah.name && this.tambah.pemandu_id) {
        axios.post('https://gmedia.primakom.co.id/gmedia/superadmin/gugus', this.tambah, {
          headers: {
            Authorization: localStorage.token
          }
        }).then((result) => {
          console.log(result)
          if(result.data.success) {
            Swal.fire(
              'Berhasil',
              `${result.data.message}`,
              'success'
            ).then(() => {
              window.location.reload()
            }).catch(() => {
              window.location.reload()
            });
          } else {
            Swal.fire(
              'Gagal',
              `${result.data.message}`,
              'warning'
            ).then(() => {
              window.location.reload()
            }).catch(() => {
              window.location.reload()
            });
          }
        }).catch((err) => {
          console.log(err)
        });
			}
			if(!this.tambah.name) {
				this.validationTambah.nama.status = false
				this.validationTambah.nama.message = 'Nama Pemandu harus diisi!'
			} else {
				this.validationTambah.nama.status = true
				this.validationTambah.nama.message = null
			}

			if(!this.tambah.pemandu_id) {
				this.validationTambah.pemandu_id.status = false
				this.validationTambah.pemandu_id.message = 'Pemandu harus di pilih!'
			} else {
				this.validationTambah.pemandu_id.status = true
				this.validationTambah.pemandu_id.message = null
			}
		}
	},
	mounted() {
		$('.dropify').dropify()
		this.width = $(document).width();
		axios.get('https://gmedia.primakom.co.id/gmedia/superadmin/prodi', {
			headers: {
				Authorization: localStorage.token
			}
		}).then((result) => {
			console.log(result)
			this.dataProdi = result.data.data.data
			if(this.dataProdi){
				setTimeout(() => {
					$('#tablenya').dataTable({
						"ordering": []
					})
				}, 500);
			}
		}).catch((err) => {
			console.log(err)
		});
		axios.get('https://gmedia.primakom.co.id/gmedia/superadmin/gugus', {
			headers: {
				Authorization: localStorage.token
			}
		}).then((result) => {
			console.log(result)
			this.dataGugus = result.data.data
			if(this.dataGugus){
				setTimeout(() => {
					$('#tablenya').dataTable()
				}, 500);
			}
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
}
</script>

<style scoped>
.modal .form-control{
  height: 36px;
  border-radius: 8px !important;
  background: #F8F8F8;
}
.modal input[type="text"], .modal input[type="email"], .modal input[type="number"], .modal textarea {
	border: none !important;
}
.modal .form-control, .modal .form-select{
	border-color: rgba(221, 224, 228, 1);
}
.modal .form-control::placeholder{
	color: rgba(175, 181, 192, 1);
  font-weight: 400;
  font-size: 14px;
}
textarea.form-control{
	height: 65px !important;
	background: white !important;
	border: 1px solid #ddd !important;
}

</style>