<template>
  <div class="dashboard">
		<NavbarMahasiswa :widthContent="width" />
		<div :class="`content content-dalem ${width > 992 ? '' : 'hide'}`">
      <div class="section">
				<div class="row">
					<div class="col-lg-12 mb-3">
						<div class="card-shadow mb-3">
							<div class="p-3">
								<h4 class="judul">Tugas</h4>
								<div class="table-responsive">
									<table class="table">
										<thead>
											<tr>
												<th scope="col">JUDUL</th>
												<th scope="col">DEADLINE</th>
												<th scope="col">TUGAS</th>
												<th scope="col">REPORT</th>
												<th scope="col">WAKTU KIRIM</th>
												<th scope="col">STATUS</th>
												<th scope="col">AKSI</th>
											</tr>
										</thead>
										<tbody>
											<tr class="align-middle">
												<td>
													<p class="text-td">
														TP1-W2-S3-R1
													</p>
												</td>
												<td>
													<div>
														<div class="main-text">05 Juli 2021</div>
														<div class="sub-text">00:00:00</div>
													</div>
												</td>
												<td>
													<div class="d-flex justify-content-center align-items-center">
														<img src="../../assets/icons/download.svg" alt="">
													</div>
												</td>
												<td>
													<div class="d-flex justify-content-center align-items-center">
														<img src="../../assets/icons/upload.svg" alt="">
													</div>
												</td>
												<td>
													<div>
														<div class="main-text">05 Juli 2021</div>
														<div class="sub-text">02:30:50</div>
													</div>
												</td>
												<td>
													<span class="badge badge-success text-success">Dinilai</span>
												</td>
												<td>
													<div class="d-flex justify-content-center">
														<button
															type="button"
															class="btn btn-primary btn-sm me-2"
														>
															<i class="fas fa-eye"></i>
														</button>
													</div>
												</td>
											</tr>
											<tr class="align-middle">
												<td>
													<p class="text-td">
														TP9-W1-S2-R15
													</p>
												</td>
												<td>
													<div>
														<div class="main-text">07 Juli 2021</div>
														<div class="sub-text">00:00:00</div>
													</div>
												</td>
												<td>
													<div class="d-flex justify-content-center align-items-center">
														<img src="../../assets/icons/download.svg" alt="">
													</div>
												</td>
												<td>
													<div class="d-flex justify-content-center align-items-center">
														<img src="../../assets/icons/upload.svg" alt="">
													</div>
												</td>
												<td>
													<div>
														<div class="main-text">07 Juli 2021</div>
														<div class="sub-text">02:30:50</div>
													</div>
												</td>
												<td>
													<span class="badge badge-success text-success">Dinilai</span>
												</td>
												<td>
													<div class="d-flex justify-content-center">
														<button
															type="button"
															class="btn btn-primary btn-sm me-2"
														>
															<i class="fas fa-eye"></i>
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
    };
  },
  mounted() {
    this.width = $(document).width();

    $(document).ready(function() {
      $(".table").DataTable();
    });
  },
}
</script>

<style scoped>
tr th{
	text-align: center;
}
tr td{
	text-align: center;
}
.judul{
	color: rgba(40, 40, 40, 1);
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 20px;
}
.badge{
	padding: 8px 18px !important;
	font-size: 14px;
	font-weight: 700;
}
.badge-success{
	background-color: rgba(40, 199, 111, 0.1);
}
.text-success{
	color: rgba(40, 199, 111, 1) !important;
}
</style>