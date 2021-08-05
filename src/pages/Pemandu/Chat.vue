<template>
  <div class="dashboard">
    <NavbarPemandu :widthContent="width" />
    <div :class="`content ${width > 992 ? '' : 'hide'}`">
      <div class="section">
        <div class="card-shadow mb-3" style="overflow: hidden;">
					<div class="row g-0">
						<div class="col-lg-4 border-end " style="border-color: rgba(221, 224, 228, 1)">
							<div>
								<div class="padding-name-chat borbot-name-top">
									<div class="d-flex w-100">
										<div class="img-name-chat">
											<img src="../../assets/icons/profile.svg" alt="">
										</div>
										<div class="form-group mb-0 search-name-chat">
											<input placeholder="Cari..." type="text" class="form-control icon-awesome" name="" id="">
										</div>
									</div>
								</div>
							</div>
							<h3 class="title-name-chat">Percakapan</h3>
							<div class="row g-0" v-if="listChat">
								<div class="col-12" v-for="(item,index) in listChat.update.slice().reverse()" :key="index">
									<div class="d-flex align-items-center padding-name-chat card-name-chat" @click="getChat(item._id)">
										<!-- <img src="../../assets/icons/profile.svg" alt=""> -->
										<div class="img-profile-chat">
											<p v-if="item.name">{{item.name.charAt(0)}}</p>
											<p v-else>{{item.usernames[0].charAt(0)}}</p>
										</div>
										<div class="info-name">
											<h4 v-if="item.name">{{item.name}}</h4>
											<h4 v-else>{{item.usernames[0]}}</h4>
											<p>{{item.lastMessage.msg}}</p>
										</div>
										<div class="tanggal-chat">
											<!-- <p>5 Juli 2021</p> -->
											<p>{{getTimes(item.ts.$date)}}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-8">
							<div class="message-box">
								<div class="name-chat">
									<div class="d-flex align-items-center">
										<img class="profile-42" src="../../assets/icons/profile.svg" alt="">
										<h3 class="name-profile">Admin Pemandu</h3>
									</div>
									<div class="d-flex align-items-center">
										<img style="margin-right: 35px" src="../../assets/icons/search-2.svg" alt="">
										<img src="../../assets/icons/burger-circle.svg" alt="">
									</div>
								</div>
								<div class="box-message" id="box-message">
									<div v-if="recconect === true" class="ifdisconnect">
										<button @click="reconnects" class="btn btn-primary">Recconect</button>
									</div>
									<div v-else v-for="(items, index) in isiChats" :key="index">
										<div id="pesan_id" :class="`mb-4 d-flex ${items.uid === user.uid ? 'chatme' : ''}`">
											<div :class="`${items.uid === user.uid ? '' : 'd-flex'}`">
												<div :class="`img ${items.uid === user.uid ? 'd-none' : 'd-flex'} align-self-end justify-content-center`">
													{{items.initial}}
												</div>
												<div style="max-width: calc(271px - 45px)">
													<h6 class="text-box-name">{{items.nama}}</h6>
													<div class="text-section box-chat">
														<div class="chat-content">
															{{items.value}}
														</div>
														<small class="times">{{items.date}}</small>
													</div>
												</div>
											</div>
											<div :class="`img ${items.uid === user.uid ? 'd-flex' : 'd-none'} aa align-self-end justify-content-center`">
												{{items.initial}}
											</div>
										</div>
									</div>
								</div>
								<form action="" @submit.prevent="kirimpesan">
									<div class="send-box">
										<input type="text" name="sendmsg" id="sendmsg" class="form-control " v-model="pesann" placeholder="Tulis Pesan..">
										<div>
											<button class="btn btn-primary profile-42 ms-3"><img src="../../assets/icons/plane.svg" alt=""></button>
										</div>
									</div>
								</form>
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
import moment from 'moment'
let api

/* eslint-disable no-undef */

export default {
	data: function() {
    return {
			width: null,
      user: {
				uid: localStorage.uid
			},
      link: this.$route.fullPath.split("/"),
      dataPemandu: null,
      isiChats: [],
      webSocketUrl: 'wss://gmedia-chat.primakom.co.id/websocket',
      errors: [],
      messagess: [],
      lastSync: new Date ().getTime (),
      syncInterval: 30000,
      connectedToApi: true,
      pesann: null,
      pemanduuid: '',
      dmRoom: '',
      recconect: false,
			listChat: null,
			testChat: null
		}
	},
	methods: {
		reconnects() {
			api = rcApi.connectToRocketChat (this.webSocketUrl)
			api.onError (error => this.errors.push (error))
			api.onCompletion (() =>{
				// this.recconect = true
				console.log ("finished")
			})
			api.onMessage (message => {
				let scrollDown = document.getElementById('box-message')
				if(message.msg === 'result' && message.id === 'getList') {
					this.listChat = message.result
				}
				if(message.msg === 'changed' && message.collection === 'stream-room-messages'){
					let datenya = new Date(message.fields.args[0].ts.$date)
					this.isiChats.push({
						value: message.fields.args[0].msg,
						date: moment(datenya).lang("id").format('h:mm'),
						nama: message.fields.args[0].u.name,
						uid: message.fields.args[0].u._id,
						initial: message.fields.args[0].u.name.charAt(0)
					})
					setTimeout(() => {
						scrollDown.scrollTop = scrollDown.scrollHeight + scrollDown.clientHeight
					}, 200);
					return;
				}
				if(message.msg === 'sub' && message.id === 'stream-room-messages'){
					this.dmRoom = message.params[0]
					// this.connectRoom(message.para)
				}
				if(message.msg === 'result' && message.id === 'oldChat'){
					let dataReverse = message.result.messages.reverse()
					let arraynya = []
					for(let i = 0; i < dataReverse.length; i++) {
						if(message.result.messages[i].u.name) {
							arraynya.push({
								value: dataReverse[i].msg,
								date: moment(new Date(dataReverse[i].ts.$date)).lang("id").format('h:mm'),
								nama: dataReverse[i].u.name,
								uid: dataReverse[i].u._id,
								initial: dataReverse[i].u.name.charAt(0)
							})
						}else {
							console.log('joined')
						}
					}
					this.isiChats = arraynya
					console.log(arraynya)
					setTimeout(() => {
						scrollDown.scrollTop = scrollDown.scrollHeight + scrollDown.clientHeight
					}, 200);
					return;
				}
			})
			api.connectToServer ()
				.subscribe (() => {
					api.keepAlive () // Ping Server
				},
				(error) => {
					this.errors.push (error)
				})

			// vérification pour mobile devices
			setInterval (function () {
				let now = new Date ().getTime ()
				if ((now - this.lastSync) > this.syncInterval) {
					console.log ('out of sync')
					this.syncPage()
				}
			}, 2000) // vérifie toutes les 1 sec que 30 sec ont passé depuis la dernière synchro
			this.loginss()
			setTimeout(() => {
				this.recconect = false
			}, 500);
		},
		kirimpesan() {
			if(this.pesann) {
				api.sendMessage ({
					"msg": "method",
					"method": "sendMessage",
					"id": '' + new Date ().getTime (),
					"params": [
						{
							"_id": '' + new Date ().getTime (),
							"rid": this.dmRoom,
							"msg": this.pesann
						}
					]
				})
				this.pesann = ''
			}
		},
		getChat(idRoom) {
			api.sendMessage({
        "msg": "sub",
        "id": '' + new Date ().getTime (),
        "name": "stream-room-messages",
        "params": [
          idRoom,
          false
        ]
      });
      setTimeout(() => {
        api.sendMessage({
          "msg": "method",
          "method": "loadHistory",
          "id": "oldChat",
          "params": [ idRoom, null, 100000, { "$date": 1480377601 } ]
        })
				this.dmRoom = idRoom
      }, 200);
		},
		getTimes(a) {
			return moment(a).lang("id").format('h:mm')
		},
		getlist(){
      api.sendMessage({
        "msg": "method",
        "method": "rooms/get",
        "id": "getList",
        "params": [ { "$date": 1480377601 } ]
      })
    },
		loginss() {
			api.loginWithAuthToken (localStorage.tkn)
				.subscribe (apiEvent => {
				if (apiEvent.msg === 'result') {
					// success
					this.messagess.push(apiEvent.msg)
					this.getlist()
          // this.createDirectMessage()
					// this.connectRoom()
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
	},
	mounted() {
		this.width = $(document).width();
		api = rcApi.connectToRocketChat (this.webSocketUrl)
		api.onError (error => this.errors.push (error))
		api.onCompletion (() =>{
			this.recconect = true
			console.log ("finished")
		})
		api.onMessage (message => {
			let scrollDown = document.getElementById('box-message')
			if(message.msg === 'result' && message.id === 'getList') {
				this.listChat = message.result
			}
			if(message.msg === 'changed' && message.collection === 'stream-room-messages'){
				let datenya = new Date(message.fields.args[0].ts.$date)
				this.isiChats.push({
					value: message.fields.args[0].msg,
					date: moment(datenya).lang("id").format('h:mm'),
					nama: message.fields.args[0].u.name,
					uid: message.fields.args[0].u._id,
					initial: message.fields.args[0].u.name.charAt(0)
				})
				setTimeout(() => {
					scrollDown.scrollTop = scrollDown.scrollHeight + scrollDown.clientHeight
					this.getlist()
				}, 200);
				return;
			}
			if(message.msg === 'sub' && message.id === 'stream-room-messages'){
				this.dmRoom = message.params[0]
				// this.connectRoom(message.para)
			}
			if(message.msg === 'result' && message.id === 'oldChat'){
				let dataReverse = message.result.messages.reverse()
				let arraynya = []
				for(let i = 0; i < dataReverse.length; i++) {
					if(message.result.messages[i].u.name) {
						arraynya.push({
							value: dataReverse[i].msg,
							date: moment(new Date(dataReverse[i].ts.$date)).lang("id").format('h:mm'),
							nama: dataReverse[i].u.name,
							uid: dataReverse[i].u._id,
							initial: dataReverse[i].u.name.charAt(0)
						})
					}else {
						console.log('joined')
					}
				}
				this.isiChats = arraynya
				console.log(arraynya)
				setTimeout(() => {
					scrollDown.scrollTop = scrollDown.scrollHeight + scrollDown.clientHeight
				}, 200);
				return;
			}
		})
		api.connectToServer ()
			.subscribe (() => {
				api.keepAlive () // Ping Server
			},
			(error) => {
				this.errors.push (error)
			})

		// vérification pour mobile devices
		setInterval (function () {
			let now = new Date ().getTime ()
			if ((now - this.lastSync) > this.syncInterval) {
				console.log ('out of sync')
				this.syncPage()
			}
		}, 2000) // vérifie toutes les 1 sec que 30 sec ont passé depuis la dernière synchro
		this.loginss()
		// setTimeout(() => {
		// 	this.recconect = false
		// }, 1000);
		
	}
}
</script>

<style scoped>
.ifdisconnect{
	z-index: 5;
	top: 0;
	left: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, .2);
}
.img-profile-chat{
	width: 42px;
	height: 42px;
	border-radius: 100%;
	background: #ddd;
	display: flex;
	align-items: center;
	justify-content: center;
}
.img-profile-chat p{
	margin: 0;
}
.card-name-chat{
	cursor: pointer;
}
.card-name-chat:hover{
	background: #e4f3ff;
}
.send-box{
  width: 100%;
  height: 70px;
  padding: 14px 24px;
  background: white;
  display: flex;
}
.box-message{
	padding: 10px 24px;
	height: calc(100% - 70px - 70px);
	overflow-y: auto;
}
.name-chat{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: white;
  padding: 14px 24px;
}
.name-profile{
  margin-left: 12px;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 600;
  color: black;
}
.profile-42{
  width: 42px;
  height: 42px;
  border-radius: 100% !important;
  object-fit: cover;
}
.message-box{
	background-image: url('../../assets/icons/chat-background.svg');
	height: 600px;
	position: relative;
}
.title-name-chat{
	color: rgba(20, 97, 245, 1);
	font-size: 18px;
	font-weight: 700;
	margin: 16px 0 12px 24px;
}
.borbot-name-top{
	border-bottom: 1px solid rgba(221, 224, 228, 1);
}
.search-name-chat{
	margin: 0 0 0 18px;
	width: 100%;
}
.padding-name-chat{
	padding: 16px 24px;
}
.img-name-chat img{
	width: 42px;
	height: 42px;
	border-radius: 100%;
	object-fit: cover;
}
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
	width: calc(100% - 42px - 75px - 12px);
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
.tanggal-chat{
	width: 75px;
}
.tanggal-chat p{
	font-size: 14px;
	text-align: end;
	font-weight: 400;
	color: rgba(79, 86, 101, 1);
}
</style>