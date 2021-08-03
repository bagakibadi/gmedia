<template>
  <div class="dashboard">
    <NavbarPemandu :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3">
					<div class="row g-0">
						<div class="col-lg-4 border-end " style="border-color: rgba(221, 224, 228, 1)">
							<div class="row">
								<div class="col-12">
									<div class="d-flex align-items-center px-3 py-2">
										<img src="../../assets/icons/profile.svg" alt="">
										<div class="info-name">
											<h4>Bagus Nur Solayman</h4>
											<p>Tugas Terbaru</p>
										</div>
										<div class="tanggal-chat">
											<p>5 Juli 2021</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-8">
							<div class="message-box">
								<div class="mb-4 d-flex chatme">
									<div class="no-me">
										<div data-v-4610f4d6="" class="img d-none align-self-end justify-content-center"> 1 </div>
										<div style="max-width: 100%">
											<h6 data-v-4610f4d6="" class="text-box-name">12345678911</h6>
											<div data-v-4610f4d6="" class="text-section box-chat">
												<div data-v-4610f4d6="" class="chat-content">
													ha
												</div>
												<small data-v-4610f4d6="" class="times">
													11:42
												</small>
											</div>
										</div>
									</div>
									<div data-v-4610f4d6="" class="img d-flex aa align-self-end justify-content-center"> 1 </div>
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
/* eslint-disable no-undef */

export default {
	data: function() {
    return {
      width: null,
		}
	},
	mounted() {
		$('.dropify').dropify()
		this.width = $(document).width();
	}
}
</script>

<style scoped>
.chatme .no-me{
  display: block !important;
}
.no-me{
  display: flex;
}
.chatme{
	justify-content: flex-end;
}
.box-chat{
	position: relative;
	max-width: 290px;
	box-shadow: 0px 2px 5px 2px #00000012 !important;
	border-radius: 10px;
	border-bottom-left-radius: 0;
	/* padding: 18px; */
	padding: 6px 60px 8px 9px;
	/* background: rgba(20, 104, 245, 1); */
	background: rgba(114, 142, 224, 1);
	color: white;
	margin: 0 0 0 16px;
}
.chatme small.times{
	color: #333 !important;
}
.box-chat small.times{
	position: absolute;
	right: 10px;
	bottom: 3px;
	font-size: 10px;
	color: #ddd;
}
.chatme .box-chat{
	background: #DDE0E4;
	color: rgba(40, 40, 40, 1);
	margin: 0 16px 0 0;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 0;
}
.chatme .text-box-name{
	text-align: end;
	margin: 0 20px 8px 0;
}
.text-box-name{
	margin: 0 0 8px 16px;
	font-size: 14px;
	font-weight: 700;
	color: rgba(40, 40, 40, 1);
}

.img{
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
}
.info-name{
	margin: 0 0 0 12px;
	width: calc(100% - 42px - 75px - 15px);
}
.info-name h4{
	font-size: 16px;
	font-weight: 600;
	color: black;
	margin: 0;
}
.info-name p{
	color: rgba(79, 86, 101, 1);
	font-size: 14px;
	font-weight: 400;
	margin: 6px 0 0 0;
}
.tanggal-chat p{
	font-size: 14px;
	font-weight: 400;
	color: rgba(79, 86, 101, 1);
}
</style>