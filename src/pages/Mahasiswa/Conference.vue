<template>
  <div class="dashboard">
    <NavbarMahasiswa :widthContent="width" />
		<div :class="`content content-dalem ${width > 992 ? '' : 'hide'}`">
      <div class="section">
				<div class="row">
					<div class="col-lg-7">
						<div class="d-flex flex-wrap">
							<div class="d-flex align-items-center info-orang">
								<img src="../../assets/icons/people_alt.svg" alt="">
								<p>Didalam percakapan :</p>
								<div class="total-percakapan">
									4
								</div>
							</div>
							<div class="d-flex align-items-center info-orang">
								<img src="../../assets/icons/person_remove.svg" alt="">
								<p>Didalam percakapan :</p>
								<div class="total-minus">
									2
								</div>
							</div>
						</div>
						<div class="video">
							<img src="../../assets/videoconference.png" alt="">
						</div>
						<div class="d-flex align-items-center subtitle">
							<img src="../../assets/icons/graphic_eq.svg" alt="">
							<div>
								<h6>Brian Barker:</h6>
								<p>Terima kasih atas partisipasinya teman teman semua, jaga kesehatan dan sehat selalu...</p>
							</div>
						</div>
					</div>
					<div class="col-lg-5 mt-sm-3">
						<div class="card-shadow card-chat mb-3">
							<div class="p-3 h-100">
								<div class="d-flex justify-content-between align-items-center">
									<div class="title-content">Chat</div>
								</div>
								<hr>
								<div class="box-message">
									<div id="pesan_id" class="d-flex mb-4">
										<div class="img d-flex align-self-end justify-content-center">
											F
										</div>
										<div>
											<h6 class="text-box-name">Bagus Nur Solayman</h6>
											<div class="text-section box-chat">
												<div class="chat-content">
													Selamat sore juga bu, alhamdulilah sehat dan dijauhkan dari berbagai penyakit
												</div>
											</div>
										</div>
									</div>
									<div id="pesan_id" class="d-flex mb-4 chatme">
										<div>
											<h6 class="text-box-name">Bagus Nur Solayman</h6>
											<div class="text-section box-chat">
												<div class="chat-content">
													Selamat sore juga bu, alhamdulilah sehat dan dijauhkan dari berbagai penyakit
												</div>
											</div>
										</div>
										<div class="img d-flex align-self-end justify-content-center">
											F
										</div>
									</div>
									<div id="pesan_id" class="d-flex mb-4">
										<div class="img d-flex align-self-end justify-content-center">
											F
										</div>
										<div>
											<h6 class="text-box-name">Bagus Nur Solayman</h6>
											<div class="text-section box-chat">
												<div class="chat-content">
													Selamat sore juga bu, alhamdulilah sehat dan dijauhkan dari berbagai penyakit
												</div>
											</div>
										</div>
									</div>
									<div id="pesan_id" class="d-flex mb-4">
										<div class="img d-flex align-self-end justify-content-center">
											F
										</div>
										<div>
											<h6 class="text-box-name">Bagus Nur Solayman</h6>
											<div class="text-section box-chat">
												<div class="chat-content">
													Selamat sore juga bu, alhamdulilah sehat dan dijauhkan dari berbagai penyakit
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="row send-input">
									<div class="d-flex">
										<input type="text" class="form-control" placeholder="Tulis Pesan...">
										<button class="btn btn-primary send-button">S</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="d-flex footerd">
					<div class="col-lg-12">
						<div class="card-shadow">
							<div class="content-footers">
								<div class="d-flex justify-content-between justify-content-sm-center flex-wrap">
									<div class="copy-right d-flex">
										<p>COPYRIGHT © 2021</p>
										<b>PKK-BN 2021</b>
									</div>
									<div class="url-copyright">
										<p>www.primakom.co.id</p>
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
.card-chat{
	height: 500px;
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
.chatme{
	justify-content: flex-end;
}
.box-chat{
	max-width: 290px;
	box-shadow: 0px 2px 5px 2px #00000012 !important;
	border-radius: 10px;
	border-bottom-left-radius: 0;
	padding: 18px;
	background: rgba(20, 104, 245, 1);
	color: white;
	margin: 0 0 0 16px;
}
.chatme .box-chat{
	background: #DDE0E4;
	color: rgba(40, 40, 40, 1);
	margin: 0 16px 0 0;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 0;
}
.text-box-name{
	margin: 0 0 8px 16px;
	font-size: 14px;
	font-weight: 700;
	color: rgba(40, 40, 40, 1);
}
.form-control{
	margin-right: 15px;
	width: calc(100% - 15px - 48px);
	background: rgba(248, 248, 248, 1);
	height: 48px;
	border-radius: 30px !important;
	border: none !important;
}
.box-message{
	height: calc(100% - 134px);
	overflow-y: auto;
}
.send-button{
	width: 48px;
	height: 48px;
	border-radius: 100% !important;
}
.send-input{
	margin-top: 20px;
}
.video{
	width: 100%;
	box-shadow: 0px 2px 18px rgba(3, 5, 16, 0.06);
	border-radius: 8px;
	background: none;
}
.video img{
	width: 100%;
}
</style>