<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
			<div class="section">
				<div class="row meet-top">
					<div class="col-lg-6">
						<div class="card-bag">
							<div class="paddingnya">
								<div class="d-flex flex-wrap">
									<div class="type" @click="openMeeting" data-bs-toggle="modal" data-bs-target="#meetingModal">
										<div class="card-type meet">
											<img src="../../assets/icons/Meet.svg" alt="">
										</div>
										<p>Conference Baru</p>
									</div>
									<div class="type">
										<div class="card-type ikut">
											<img src="../../assets/icons/Plus.svg" alt="">
										</div>
										<p>Ikut</p>
									</div>
									<div class="type">
										<div class="card-type ikut">
											<img src="../../assets/icons/agenda.svg" alt="">
										</div>
										<p>Jadwal</p>
									</div>
									<div class="type">
										<div class="card-type ikut">
											<img src="../../assets/icons/Share.svg" alt="">
										</div>
										<p>Bagikan Layar</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="card-bag">
							<div class="row g-0" style="height: 280px;">
								<div class="col-6">
									<div class="position-relative h-100" style="overflow: hidden;">
										<img class="img-stream-right" src="../../assets/icons/image.svg" alt="">
										<div class="pading-dalemnya">
											<div class="border-tengah-dalem">
												<h4>Senin, 13 Juli 2019</h4>
											</div>
										</div>
									</div>
								</div>
								<div class="col-6">
									<div class="d-flex h-100 align-items-center justify-content-center">
										<p class="no-meet">Tidak ada meeting hari ini</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-12" style="margin-top: 58px;">
						<div class="card-shadow">
							<div class="p-3">
								<h4 class="judul-name">Rekaman</h4>
								<div class="table-responsive">
									<table class="table dataTable">
										<thead>
											<tr>
												<th>TOPIK</th>
												<th>THUMBNAILS</th>
												<th>DURASI</th>
												<th>PENGGUNA</th>
												<th>FORMAT</th>
											</tr>
										</thead>
										<tbody>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="meetingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Meeting Baru</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="px-5 py-3 px-sm-2">
							<form action="" class="tambahmeeting">
								<div class="row">
									<div class="col-lg-6">
										<div class="form-group">
											<label for="namaMeeting">Nama Conference</label>
											<input type="text" placeholder="Nama Conference" name="namaMeeting" id="namaMeeting" v-model="tambah.nama" class="form-control">
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="tanggal">Tanggal Mulai</label>
											<input type="date" v-model="tambah.tanggal" class="form-control" name="tanggal" id="tanggal">
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="link_video">Link Video</label>
											<input type="text" placeholder="Cth: https://youtube.com/" class="form-control" name="link_video" id="link_video" v-model="tambah.link_video">
										</div>
									</div>
									<div class="col-lg-6" v-if="dataPemandu">
										<div class="form-group">
											<label for="pemandu">Pemandu</label>
											<select name="pemandu" id="pemandu" v-model="tambah.pemandu_id" class="form-select">
												<option value="" selected disabled> Pilih Pemandu </option>
												<option :value="items.uuid" v-for="(items, index) in dataPemandu" :key="index">{{items.nama}}</option>
											</select>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group">
											<label for="deskripsi">Deskripsi Conference</label>
											<textarea name="deskripsi" id="deskripsi" v-model="tambah.deskripsi" placeholder="Deskripsi Conference" class="form-control" cols="30" rows="10"></textarea>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="modal-footer">
						<a href="#" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</a>
						<button type="button" class="btn btn-primary" @click="tambahMeeting">Tambah Meeting</button>
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
/* eslint-disable no-mixed-spaces-and-tabs */

export default {
	data: function() {
    return {
			dataPemandu: null,
			width: null,
			tambah: {
				link_video: null,
				pemandu_id: '',
				nama: null,
				tanggal: null,
				deskripsi: null
			}
		}
	},
	methods: {
		tambahMeeting(){
			axios.post('https://gmedia.primakom.co.id/gmedia/superadmin/konferensi', this.tambah, {
				headers: {
					Authorization: localStorage.token
				}
			}).then((result) => {
				console.log(result)
				if(result.data.success) {
					Swal.fire(
						'Berhasil!',
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
		},
		openMeeting() {
			console.log('aa')
		}
	},
	mounted() {
		this.width = $(document).width();
		$(document).ready(function() {
			$(".table").DataTable();
		});
		axios.get('https://gmedia.primakom.co.id/gmedia/superadmin/pemandu', {
			headers: {
				Authorization: localStorage.token
			}
		}).then((result) => {
			console.log(result)
			this.dataPemandu = result.data.data.data
		}).catch((err) => {
			console.log(err)
		});
	}
}
</script>

<style scoped>
.tambahmeeting .form-control{
	height: 36px;
	border: none;
  border-radius: 8px !important;
  background: #F8F8F8;
}
textarea.form-control{
	height: 65px !important;
	background: white !important;
	border: 1px solid #ddd !important;
}
.no-meet{
	font-size: 14px;
	font-weight: 400;
	width: 124px;
	color: rgba(11, 19, 42, 1);
	text-align: center;
}
.pading-dalemnya{
	padding: 20px 0 20px 20px;
	width: 100%;
	height: 100%;
}
.border-tengah-dalem{
	border-right: 1px solid rgba(221, 224, 228, 1);
	height: 100%;
}
.pading-dalemnya h4{
	font-size: 18px;
	font-weight: 700;
	color: rgba(40, 40, 40, 1);
}
.img-stream-right{
	position: absolute;
	bottom: 0;
	left: -20px;
}
.card-bag{
	background: white;
	border-radius: 8px;
	box-shadow: 0px 2px 18px rgba(3, 5, 16, 0.06);
	border: none;
	overflow: hidden;
}
.paddingnya{
	padding: 31px 120px 0 120px;
}
.type{
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 25px 31px 25px;
	cursor: pointer;
}
.type p{
	font-size: 14px;
	font-weight: 400;
	margin-bottom: 0;
	color: rgba(11, 19, 42, 1);
}
.card-type{
	width: 68px;
	height: 68px;
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 8px;
}
.card-type.meet{
	background: rgba(255, 170, 41, 1);
}
.card-type.ikut{
	background: rgba(20, 97, 245, 1);
}
@media only screen and (max-width: 600px) {
	.paddingnya {
		padding: 25px !important;
	}
	.meet-top .col-lg-6{
		margin-bottom: 20px;
	}
	.img-stream-right{
		display: none;
	}
	.modal-body .px-5{
		padding-left: 20px !important;
		padding-right: 20px !important;
	}
}
</style>