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
									<div v-for="(item,messageIndex) in messages" :key="messageIndex">
										<b v-if="formatMessage (item).formattedDate">
											{{formatMessage (item).formattedDate}}
										</b>
										<code>
											{{item}}
										</code>
									</div>
									<!-- <div id="pesan_id" class="d-flex mb-4">
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
									</div> -->
								</div>
								<div class="row send-input">
									<div class="d-flex">
										<input type="text" v-model="pesannya" class="form-control" placeholder="Tulis Pesan...">
										<button class="btn btn-primary send-button" @click="kirimpesan">S</button>
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
import rcApi from '../Api/Index'
import {RealTimeAPI} from 'rocket.chat.realtime.api.rxjs'
/* eslint-env jquery */
let api = null

export default {
  data: function() {
    return {
			webSocketUrl: 'wss://gmedia-chat.primakom.co.id/websocket',
			connectedToApi: true,
			loggedIn: false,
			userId: 'ZkehsvNwF2dfYbE6G',
			authToken: 'O8kwYjJNUjot-4SagpN_8UjLbv2DG5FZKQPHAW2LnxV',
			username: 'gmedia190190',
			password: '190190gmediaaselole00',
			roomName: 'GENERAL',
			roomId: '',
			roomConnected: false,
			newMessage: '',
			messages: [],
			errors: [],
			lastSync: new Date ().getTime (),
			syncInterval: 30000,
      width: null,
			pesannya: null,
    };
  },
  mounted() {
		const realtime = new RealTimeAPI(this.webSocketUrl)
		api = rcApi.connectToRocketChat (this.webSocketUrl)
		api.onError (error => this.errors.push (error))
		// api.onCompletion (() => {
		// 	// this.recoWs()
		// 	// this.loginss()
		// 	console.log ("finished")
		// })
		console.log(realtime.keepAlive())
		api.onMessage (message => {
			this.messages.push(message)
			// console.log(message)
			// if(message.msg == 'ping'){
			// 	realtime.keepAlive()
			// 	api = rcApi.connectToRocketChat (this.webSocketUrl)
			// 	console.log('pong!');
			// 	api.sendMessage(({"msg": "pong","params": [
			// 		'GENERAL',
			// 		false
			// 	]}));
			// 	return;
			// }
		})
		api.connectToServer ()
			.subscribe (() => {
				// api = rcApi.connectToRocketChat (this.webSocketUrl)
				// realtime.keepAlive()
				api.keepAlive () // Ping Server
			},
			(error) => {
				this.errors.push (error)
			})

		// vérification pour mobile devices
		setInterval (function () {
			let now = new Date ().getTime ()
			// console.log ('verify sync')
			if ((now - this.lastSync) > this.syncInterval) {
				console.log ('out of sync')
				this.syncPage()
			}
		}, 2000) // vérifie toutes les 1 sec que 30 sec ont passé depuis la dernière synchro
    this.width = $(document).width();

    $(document).ready(function() {
      $(".table").DataTable();
    });
		this.loginss()
  },
	methods: {
		recows2() {
        api = rcApi.connectToRocketChat (this.webSocketUrl)
        api.onError (error => this.errors.push (error))
        api.onCompletion (() => console.log ("finished"))
        api.onMessage (message => {
          this.messages.push (message)
        })
        api.connectToServer ()
          .subscribe (() => {
              api.keepAlive () // Ping Server
            },
            (error) => {
              this.errors.push (error)
            }
          )
					this.loginss()
      },
		recoWs() {
			api = rcApi.connectToRocketChat (this.webSocketUrl)
			api.onError (error => this.errors.push (error))
			api.onCompletion (() => console.log ("finished") )
			api.onMessage (message => {
				this.messages.push (message)
			})
			api.connectToServer ()
				.subscribe (() => {
						api.keepAlive () // Ping Server
					},
					(error) => {
						this.errors.push (error)
					}
				)
		},
		formatMessage(message) {
			let result = {message}
			if (message.fields !== undefined &&
				message.fields.args !== undefined &&
				message.fields.args.length > 0 &&
				message.fields.args[0].ts !== undefined &&
				message.fields.args[0].ts.$date !== undefined
			) {
				result.formattedDate = new Date (message.fields.args[0].ts.$date)
			}
			return result
		},
		loginss() {
			api.loginWithAuthToken (localStorage.tkn)
				.subscribe (apiEvent => {
				if (apiEvent.msg === 'result') {
					// success
					this.messages.push(apiEvent.msg)
					this.connectRoom()
				}
			}, (error) => {
				this.errors.push (error)
			})
		},
		syncPage() {
			this.lastSync = new Date ().getTime ()
			console.log ('Synch')
			if (this.connectedToApi && api && api.webSocket !== null && api.webSocket.socket == null) {
				// on log et on redémarre la fenêtre
				console.log ('reload')
				window.location.reload ()
			}
		},
		connectRoom() {
			api.sendMessage ({
				"msg": "sub",
				"id": '' + new Date ().getTime (),
				"name": "stream-room-messages",
				"params": [
					'GENERAL',
					false
				]
			})
		},
		kirimpesan() {
			api.sendMessage ({
				"msg": "method",
				"method": "sendMessage",
				"id": '' + new Date ().getTime (),
				"params": [
					{
						"_id": '' + new Date ().getTime (),
						"rid": 'GENERAL',
						"msg": this.pesannya
					}
				]
			})
			this.pesannya = ''
		},
	}
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