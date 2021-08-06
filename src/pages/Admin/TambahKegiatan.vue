<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
					<div class="padding-kegiatan">
						<div class="mb-3">
							<router-link :to="{name: 'Kegiatan Master'}" class="btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Kembali</router-link>
						</div>
						<div class="jadwal-baru">
							<div class="top-tit">
								<h4>Tambah Jadwal Baru</h4>
								<hr class="line">
							</div>
							<div class="row tambahjadwal">
								<div class="col-lg-3">
									<div class="form-group">
										<label for="topik">Topik</label>
										<input type="text" v-model="jadwal.topik" name="topik" id="topik" placeholder="PKK-BN 2021 Sesi 1" class="form-control">
									</div>
								</div>
								<div class="col-lg-3">
									<div class="form-group">
										<label for="start_date">Start Date</label>
										<input type="date" v-model="jadwal.start_date" name="start_date" id="start_date" class="form-control">
									</div>
								</div>
								<div class="col-lg-3">
									<div class="form-group">
										<label for="end_date">End Date</label>
										<input type="date" v-model="jadwal.end_date" name="end_date" id="end_date" class="form-control">
									</div>
								</div>
								<div class="col-lg-3">
									<div class="form-group">
										<label for="lampiran">Lampiran</label>
										<input type="file" name="lampiran" id="lampiran" class="form-control">
									</div>
								</div>
								<div class="col-lg-3">
									<div class="form-group">
										<label for="deskripsi">Deskripsi</label>
										<input type="text" v-model="jadwal.deskripsi" placeholder="Deskripsi" name="deskripsi" id="deskripsi" class="form-control">
									</div>
								</div>
								<div class="col-lg-3">
									<div class="form-group">
										<label for="gugus">Gugus</label>
										<select v-if="dataGugus" name="gugus" id="gugus" class="form-select" v-model="jadwal.gugus_id">
											<option value="" disabled selected>Pilih Gugus</option>
											<option :value="items.uuid" v-for="(items,index) in dataGugus.data" :key="index">{{items.name}}</option>
										</select>
									</div>
								</div>
							</div>
							<div class="padbot">
								<hr class="bot">
							</div>
						</div>
						<div class="jadwal-baru">
							<div class="top-tit">
								<h4>Detail Aktivitas</h4>
								<hr class="line">
							</div>
							<div v-for="(items,index) in jadwal.aktivitas" :key="index.id">
								<div class="row tambahjadwal">
									<div class="col-lg-3">
										<div class="form-group">
											<label for="aktivitas">Aktivitas</label>
											<input type="text" v-model="jadwal.aktivitas[index].nama" placeholder="PKK-BN 2021 Sesi 2" class="form-control">
										</div>
									</div>
									<div class="col-lg-3">
										<div class="form-group">
											<label for="start_date">Start Time</label>
											<input type="datetime-local" v-model="jadwal.aktivitas[index].start_time" id="start_date" class="form-control">
										</div>
									</div>
									<div class="col-lg-3">
										<div class="form-group">
											<label for="end_date">End Time</label>
											<input type="datetime-local" v-model="jadwal.aktivitas[index].end_time" name="end_date" id="end_date" class="form-control">
										</div>
									</div>
									<div class="col-lg-3">
										<div class="form-group">
											<label for="tipe">Tipe Aktivitas</label>
											<select v-if="dataTipe" class="form-select" name="tipe" required id="tipe" v-model="jadwal.aktivitas[index].tipe">
												<option value="" disabled selected>Pilih Tipe</option>
												<option :value="items.uuid" v-for="(items, index) in dataTipe.data" :key="index">{{items.nama}}</option>
											</select>
										</div>
									</div>
									<div class="col-lg-3" v-if="jadwal.aktivitas[index].tipe === 'eff1e631-3e18-4b91-a6e2-6a29af4b1554'">
										<div class="form-group">
											<label for="tugas">Tugas</label>
											<select name="tugas" v-model="jadwal.aktivitas[index].link" id="tugas" class="form-select">
												<option value="" selected disabled>Pilih Tugas</option>
												<option :value="items.uuid" v-for="(items, index) in dataTugas" :key="index">{{items.nama}}</option>
											</select>
										</div>
									</div>
									<div class="col-lg-3" v-if="jadwal.aktivitas[index].tipe === 'abadf8ed-1ef6-4857-add1-9b6b9bc911b1'">
										<div class="form-group">
											<label for="video">Link Meeting</label>
											<input type="text" v-model="jadwal.aktivitas[index].link" name="video" id="video" class="form-control" placeholder="Cth: https://zoom.us/">
										</div>
									</div>
									<div class="col-lg-3" v-if="jadwal.aktivitas[index].tipe === 'ac23eded-d09b-41d2-92c7-a082f7621a21'">
										<div class="form-group">
											<label for="tugas">Streaming</label>
											<select name="tugas" v-model="jadwal.aktivitas[index].link" id="tugas" class="form-select">
												<option value="" selected disabled>Pilih Streaming</option>
												<option :value="items.uuid" v-for="(items,index) in dataStreaming" :key="index">{{items.nama}}</option>
											</select>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="deskripsi">Deskripsi</label>
											<input type="text" v-model="jadwal.aktivitas[index].deskripsi" placeholder="Deskripsi" name="deskripsi" id="deskripsi" class="form-control">
										</div>
									</div>
									<div class="col-lg-3">
										<div class="form-group h-75">
											<div class="d-flex h-100 align-items-end">
												<button class="btn btn-danger"><i class="fa fa-trash"></i> Hapus</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<button @click="addfields" class="btn btn-outline-primary button-tambah-baris"><img src="../../assets/icons/add_circle.svg" alt=""> Tambah Baris</button>
							</div>
							<div class="padbot">
								<hr class="bot">
							</div>
							<div class="d-flex justify-content-end">
								<div>
									<button @click="kirimKegiatan" class="btn btn-primary submit-jadwal">Submit Jadwal</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
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
			dataTipe: null,
			dataGugus: null,
			jadwal: {
				topik: null,
				aktivitas: [{ nama: '', start_time: '', end_time: '',tipe: '', link: '', deskripsi: '', }],
				lampiran: null,
				gugus_id: ''
			},
			dataStreaming: null,
			dataTugas: null
		}
	},
	methods: {
		getGugus() {
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
		},
		getTipe() {
			axios.get('https://gmedia.primakom.co.id/gmedia/superadmin/tipeaktivitas', {
				headers: {
					Authorization: localStorage.token
				}
			}).then((result) => {
				this.dataTipe = result.data.data
			}).catch((err) => {
				console.log(err)
			});
		},
		addfields() {
			this.jadwal.aktivitas.push({ nama: '', start_time: '', end_time: '',tipe: '', link: '', deskripsi: '', })
		},
		upload(asd) {
      var reader = new FileReader();
      reader.onload = (e) => {
        console.log(e)
				this.jadwal.lampiran = e.target.result
				.replace("data:", "")
				.replace(/^.+,/, "");
      };
      reader.onerror = function(error) {
        alert(error);
      };
      reader.readAsDataURL(asd);
    },
		kirimKegiatan() {
			if (document.getElementById('lampiran').files[0]) {
        this.upload(document.getElementById('lampiran').files[0])
      } else {
        this.jadwal.lampiran = null
      }
			setTimeout(() => {
				axios.post('https://gmedia.primakom.co.id/gmedia/superadmin/kegiatanaktivitas', this.jadwal, {
					headers: {
						Authorization : localStorage.token
					}
				}).then((result) => {
					console.log(result)
					if(result.data.success) {
						Swal.fire(
							'Berhasil Tambah!',
							result.data.message,
							'success'
						).then((a) => {
							if(a.isConfirmed) {
								window.location.reload()
							}
						}).catch((err) => {
							window.location.reload()
							console.log(err)
						});
					} else if (result.data.message == "Unauthorize") {
						localStorage.clear()
						console.log('el')
						this.$router.push({ name: 'Landing Page' })
					} else{
						Swal.fire(
							'Gagal!',
							result.data.message,
							'warning'
						)
					}
				}).catch((err) => {
					console.log(err)
				});
			}, 1000);
		},
		getListStream() {
			axios.get('https://gmedia.primakom.co.id/gmedia/superadmin/konferensi', {
				headers: {
					Authorization: localStorage.token
				}
			}).then((result) => {
				this.dataStreaming = result.data.data
			}).catch((err) => {
				console.log(err)
			});
		},
		getListTugas() {
			axios.get('https://gmedia.primakom.co.id/gmedia/superadmin/tugas', {
				headers: {
					Authorization: localStorage.token
				}
			}).then((result) => {
				this.dataTugas = result.data.data
			}).catch((err) => {
				console.log(err)
			});
		}
	},
	mounted() {
    this.width = $(document).width();
		this.getTipe()
		this.getGugus()
		this.getListStream()
		this.getListTugas()
	}
}
</script>

<style scoped>
.submit-jadwal{
	width: 134px;
	height: 36px;
	font-size: 14px;
	font-weight: 700;
	margin-bottom: 12px;
}
.button-tambah-baris{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 144px;
	height: 36px;
	font-size: 14px;
	font-weight: 700;
	margin: 12px 0 40px 0;
}
.button-tambah-baris img {
	margin-right: 8px;
}
.padding-kegiatan{
	padding: 20px;
}
.top-tit{
	margin-bottom: 32px;
}
hr.line{
	border: .5px solid rgba(221, 224, 228, 1);
	width: 100%;
	margin: 12px 0;
}
.padbot{
	padding: 0 30px;
	margin-bottom: 40px;
}
hr.bot{
	border: .5px solid rgba(221, 224, 228, 1);
	width: 100%;
}
.form-group{
	margin-bottom: 20px;
}
.jadwal-baru h4{
	font-size: 18px;
	font-weight: 700;
	color: rgba(40, 40, 40, 1);
	margin-bottom: 0px;
}
.tambahjadwal .form-control{
	border-radius: 8px !important;
	height: 36px;
	border: 1px solid rgba(221, 224, 228, 1);
}
.tambahjadwal input[type='text'] {
	background: #F8F8F8;
	border: 1px solid hsl(0, 0%, 97%) !important;
}
</style>