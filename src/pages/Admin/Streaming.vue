<template>
  <div class="dashboard">
    <NavbarAdmin :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
			<div class="section">
				<div class="row">
					<div class="col-lg-6">
						<div class="card-bag">
							<div class="paddingnya">
								<div class="d-flex flex-wrap">
									<div class="type">
										<div class="card-type meet">
											<img src="../../assets/icons/Meet.svg" alt="">
										</div>
										<p>Meeting Baru</p>
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
								<div class="col-lg-6">
									<div class="position-relative h-100" style="overflow: hidden;">
										<img class="img-stream-right" src="../../assets/icons/image.svg" alt="">
										<div class="pading-dalemnya">
											<div class="border-tengah-dalem">
												<h4>Senin, 13 Juli 2019</h4>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="d-flex h-100 align-items-center justify-content-center">
										<p class="no-meet">Tidak ada meeting hari ini</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-12" style="margin-top: 58px;">
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
									<!-- <tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr> -->
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-env jquery */
/* eslint-disable no-mixed-spaces-and-tabs */

export default {
	data: function() {
    return {
			width: null,
		}
	},
	mounted() {
		this.width = $(document).width();
		$(document).ready(function() {
        	$(".table").DataTable();
      	});
	}
}
</script>

<style scoped>
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
</style>