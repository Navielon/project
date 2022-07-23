<template>
	<div>
        <div class="panel-bg" style="padding: 0px;">
            <img src="/assets/img/pages/cabinet/skins.png" class="noselect" style="width: 650px; margin-bottom: -3px;" draggable="false"/>
        </div>

		<div class="s_box skin-show">
			<div class="bg-skin-cloak">
				<div class="opa-you-skin-not-skin noselect" v-on:click="visibleSkin = !visibleSkin">
					<div v-if="visibleSkin">
						Показать плащ
					</div>
					<div v-else>
						Показать скин
					</div>
				</div>

				<div v-show="visibleSkin" id="senpaiskin">
					<div :style="styleSkin"></div>
				</div>

				<div v-show="!visibleSkin" class="cloack-user" style="display: block; position: relative;overflow: hidden;">
					<div :style="styleSkin" class="cape-blur"></div>
					<img v-bind:src="urlCape" style="height: 60%; margin-top: 20%; position: inherit; -webkit-box-shadow: 0 5px 17px rgba(0, 0, 0, 0.46); box-shadow: 0 5px 17px rgba(0, 0, 0, 0.46);" />
				</div>
			</div>

			<div class="panel-sp">
				<p>Скин:</p>
				<div style="padding:2px 0;text-align:right;margin-top:-35px">
					<div class="upload_s file-changer noselect" v-on:click="uploadFile(0)">Загрузить</div>
					<div class="upload_s file-changer delete-btn noselect" v-on:click="deleteFile(0)">Удалить</div>
				</div>
				<input type="file" ref="fileInputSkin" accept="image/png" class="file-uploader" @change="processFile($event, 0)"/>

				<br/>

				<p>Плащ:</p>
				<div style="padding:2px 0;text-align:right;margin-top:-35px">
					<div class="upload_s file-changer noselect" v-on:click="uploadFile(1)">Загрузить</div>
					<div class="upload_s file-changer delete-btn noselect" v-on:click="deleteFile(1)">Удалить</div>
				</div>
				<input type="file" ref="fileInputCape" accept="image/png" class="file-uploader" @change="processFile($event, 1)"/>

				<br/><br/>

				<!--p>Каталоги:</p>
				<a class="cataloges-but" style="border: 1px solid #8566a5;background:rgba(154,69,169,.42);margin-top: 1px;">
					Каталог скинов<span class="mdi mdi-chevron-right" style="float:right"></span>
				</a>
				<a class="cataloges-but" style="border: 1px solid #786ace;background:rgba(96,82,210,.42)">
					Каталог плащей<span class="mdi mdi-chevron-right" style="float:right"></span>
				</a-->
			</div>
		</div>

		<div class="panel-bg">
			<div class="panel-header">
				Аватарка
			</div>
			
			<div v-show="avatarOpen">
				<div class="member_avatar" style="float: left;">
					<img v-bind:src="auth.avatar">
				</div>
				<div style="float: right; margin-top: 40px;margin-right: 20px;">
					<div class="upload_s ava-changer noselect" style="width: 179px; text-align: center;" v-on:click="openCropper()">
						Изменить аватарку
					</div> <br/>
					<div class="upload_s file-changer noselect" style="margin-top: 5px;" v-on:click="openDropzone()">
						Загрузить аватарку
					</div> <br/>
					<div class="upload_s file-changer delete-btn noselect" style="width: 179px;text-align: center;margin-top: 8px;" v-on:click="deleteAvatar()">
						Удалить аватарку
					</div>
				</div>
				<div style="clear: both" />
			</div>

			<div v-if="dropzoneOpen">
				<vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" 
				v-on:vdropzone-sending="sendingEvent" v-on:vdropzone-success="vsuccess"></vue-dropzone>
			</div>

			<div v-show="cropperOpen">
				<vue-cropper
				ref="cropper"
				:aspect-ratio="1 / 1"
				:viewMode="1"
				:guides="false"
				:background="false"
				preview=".preview"
				/>

				<div class="preview" />

				<div style="padding: 17px 0px;margin-top: 8px;margin-bottom: 171px;">
					<div class="upload_s file-changer noselect" v-on:click="saveAvatar()">Сохранить изменения</div>
					<div class="upload_s file-changer delete-btn noselect" v-on:click="closeAvatar()">Отмена</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import { EventBus, API } from '@/main.js';

export default {
	name: 'CabinetMain',
	data () {
		return {
			skin3d: null,
			imgSkin: null,
			imgCape: null,
			urlCape: null,
			styleSkin: '',
			visibleSkin: true,
			dropzoneOpen: false,
			cropperOpen: false,
			avatarOpen: false,
			dropzoneOptions: {
				url: API + 'account.avatarLoad',
				thumbnailWidth: 150,
				maxFilesize: 2.5,
				maxFiles: 1,
				acceptedFiles: "image/*",
				dictDefaultMessage: "Перетащите сюда любую картинку",
				method: "POST",
				headers: { 'Cache-Control': null, 'X-Requested-With': null }
			}
		}
	},
	components: {
		vueDropzone: vue2Dropzone,
		VueCropper
	},
	methods: {
		deleteAvatar() {
			this.$root.$emit('send_websocket', `{"packet":"cabinet.avatarRemove","data":{}}`)
		},
		openCropper() {
			var request = new XMLHttpRequest();
			request.open('GET', API + 'raw/avatar/' + this.auth.login, true);
			request.responseType = 'blob';
			request.onload = () => {
				var reader = new FileReader();
				reader.readAsDataURL(request.response);
				reader.onload = (event) => {
					this.$refs.cropper.replace(event.target.result);
					this.avatarOpen = false;
					this.dropzoneOpen = false;
					this.cropperOpen = true;
				};
			};
			request.send();
		},
		openDropzone() {
			this.avatarOpen = false;
			this.dropzoneOpen = true;
		},
		closeAvatar() {
			if(this.hasAvatar == true) {
				this.avatarOpen = true;
				this.cropperOpen = false;
				this.dropzoneOpen = false;
			} else {
				this.avatarOpen = false;
				this.cropperOpen = false;
				this.dropzoneOpen = true;
			}
		},
		saveAvatar() {
			this.$root.$emit('send_websocket', `{"packet":"cabinet.avatarEdit","data":{"x":"${this.$refs.cropper.getData().x}","y":"${this.$refs.cropper.getData().y}","size": "${this.$refs.cropper.getData().width}"}}`)
		},
		vsuccess(file, response) {
			var res = JSON.parse(response);
			console.log(res);
			if (res.type === 'success') {
				this.$root.$emit('notice_success', 'Аватар успешно загружен', '');
				if (typeof FileReader === 'function') {
					const reader = new FileReader();
					reader.onload = (event) => {
						this.$refs.cropper.replace(event.target.result);
						this.cropperOpen = true;
						this.dropzoneOpen = false;
					};
					reader.readAsDataURL(file);
				} else {
					alert('Sorry, FileReader API not supported');
				}
				console.log("File loaded");
			} else {
				switch (res.error) {
					case -1:
						this.$root.$emit('notice_error', 'Ошибка загрузки аватара :C', '');
						break
					case 0:
						this.$root.$emit('notice_error', 'Вы не авторизированы', '');
						break
					case 1:
						this.$root.$emit('notice_error', 'Данный тип файла не поддерживается', '');
						break
					case 2:
						this.$root.$emit('notice_error', 'Размер картинки больше 512 КБ!', '');
						break
				}
			}
		},
		sendingEvent (file, xhr, formData) {
			formData.append("login", this.auth.login);
			formData.append("access_token", this.auth.accessToken);
			formData.append("file", file);
		},
		deleteFile(type) {
			this.$swal.fire({
				title: 'Вы действительно хотите удалить?',
				text: 'Это действие не возможно отменить',
				type: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Да, удалить!',
				cancelButtonText: 'Нет, я передумал'
			}).then((result) => {
				if (result.value) {
					if(type == 0) {				
						this.$root.$emit('send_websocket', `{"packet":"cabinet.skinRemove","data":{}}`);
					} else {
						this.$root.$emit('send_websocket', `{"packet":"cabinet.cloakRemove","data":{}}`);
					}
				} 
			});
		},
		processFile(event, type) {
			if(type == 0) {
				this.imgSkin = event.target.files[0];
			} else {
				this.imgCape = event.target.files[0];
			}
		},
		updateSkin() {
			var time = new Date().getTime();
			var url = API + 'raw/skin/' + this.auth.login + '?date=' + time;
			this.skin3d.changeSkin(url);
			this.styleSkin = 'background: url(' + url + ') center / cover ';

			this.$store.commit('updateAvatar');
		},
		updateCape() {
			var time = new Date().getTime();
			this.urlCape =  API + 'cape/' + this.auth.login + '?date=' + time;
		},
		uploadFile(type) {
			var f = type == 0 ? this.imgSkin : this.imgCape;
			var u = API + (type == 0 ? 'account.skinLoad' : 'account.cloakLoad');
			if(f == null) {
				this.$root.$emit('notice_error', 'Файл не выбран', '');
				return;
			}
			var formData = new FormData();
			formData.append("login", this.auth.login);
			formData.append("access_token", this.auth.accessToken);
			formData.append("file", f);

			const options = {
				method: 'POST',
				headers: { 'content-type': 'multipart/form-data' },
				data: formData,
				url: u,
			};
		   
			axios(options).then(res => {
				console.log(res.data);
				var input;
				if(type == 0) {
					input = this.$refs.fileInputSkin;
					this.imgSkin = null;
				} else {
					input = this.$refs.fileInputCape;
					this.imgCape = null;
				}
				input.type = 'text';
				input.type = 'file';
				if (res.data.type === 'success') {
			   		if(type == 0) {
						this.$root.$emit('notice_success', 'Скин успешно загружен', '');
						this.updateSkin();
					} else {
						this.$root.$emit('notice_success', 'Плащ успешно загружен', '');
						this.updateCape();
					}
				} else {
					switch (res.data.error) {
						case 0:
							this.errorLoad();
							break
						case 1:
							this.$root.$emit('notice_error', 'Размер изображения не корректный', '');
							break
					}
				}
			}).catch(err => {
				console.log(err);
				this.errorLoad();
			});
		},
		errorLoad() {
			this.$root.$emit('notice_error', 'Файл не загружен! Обновите страницу', '');
		},
		listener(packet, data) {
			if(packet === 'cabinet.skinRemove') {
				if (data.type === 'success') {
					this.$root.$emit('notice_success', 'Скин успешно удален', '');
					this.updateSkin();
				} else {
					this.errorLoad();
				}
			}

			if(packet === 'cabinet.cloakRemove') {
				if (data.type === 'success') {
					this.$root.$emit('notice_success', 'Плащ успешно удален', '');
					this.updateCape();
				} else {
					this.errorLoad();
				}
			}

			if(packet === 'cabinet.avatarRemove') {
				if (data.type === 'success') {
					this.$root.$emit('notice_success', 'Аватар успешно удален', '');
					this.avatarOpen = false;
					this.cropperOpen = false;
					this.dropzoneOpen = true;
				} else {
					switch (data.error) {
						case 0:
							this.$root.$emit('notice_error', 'Вы не авторизированы', '');
						case 1:
							this.$root.$emit('notice_warning', 'У Вас не загружена аватарка!', '');
							break
						default: 
							this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
							break;
					}
				}
			}

			if(packet === 'cabinet.avatarEdit') {
				if (data.type === 'success') {
					this.$root.$emit('notice_success', 'Аватарка успешно сохранена', '');
					this.cropperOpen = false;
					this.dropzoneOpen = false;
					this.avatarOpen = true;
					return;
				} else {
					switch (data.error) {
						case 0:
							this.$root.$emit('notice_error', 'Вы не авторизированы', '');
						case 1:
							this.$root.$emit('notice_warning', 'У Вас не загружена аватарка!', '');
							break
						case 2:
							this.$root.$emit('notice_error', 'Выделенная область слишком большая!', '');
							break
						default: 
							this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
							break;
					}
				}
			}
		},
	},
	computed: {
		auth() {
			return this.$store.state.auth;
		},
		hasAvatar() {
			return this.$store.state.auth.avatarLoaded;
		}
	},
	mounted() {
		this.urlCape = API + 'cape/' + this.auth.login;
		this.styleSkin = 'background: url(' + API + 'raw/skin/' + this.auth.login + ') center / cover ';
		this.$nextTick(() => {
			this.$forceUpdate();
			this.skin3d = new senpai_IAM_NOT_KYSY(); 
			this.skin3d.changeSkin(API + 'raw/skin/' + this.auth.login);
			this.$forceUpdate();
		})
	},
	created() {
		this.dropzoneOpen = !this.hasAvatar;
		this.avatarOpen = this.hasAvatar;
		EventBus.$on('onProcessPacket', this.listener);
	},
	beforeDestroy() {
		EventBus.$off('onProcessPacket', this.listener);
	}
}
</script>

<style>
.dropzone {
	min-height: 150px;
	border: 2px solid rgba(0, 0, 0, 0.3);
	background: #ffffff96;
	padding: 20px 20px;
}
.cropper-crop-box, .cropper-view-box {
	border-radius: 50%;
}
.cropper-view-box {
	box-shadow: 0 0 0 1px #39f;
	outline: 0;
}
canvas {
  position: relative;
  width: 314px;
  margin-top: 10px;
}
</style>

<style scoped>
.preview {
	width: 100%;
	height: calc(372px * (9 / 16));
	overflow: hidden;
	margin-top: 11px;
	border-radius: 50%;
	border: 3px solid #1B1B19;
	float: left;
}
.member_avatar {
	display: block;
	width: 164px;
	height: 164px;
	overflow: hidden;
	border-radius: 50%;
	border: 3px solid #1B1B19;
	text-decoration: none;
	background: #FFF;
	margin-left: 11px;
}

.member_avatar>img {
	display: block;
	width: 160px;
	height: auto;
}

.panel-bg {
	background: #ffe0ab;
	border-radius: 2px;
	padding: 10px;
	width: 650px;
	margin-left: 10px;
	margin-top: 10px;
	border-bottom: 2px solid #f6cb7c;
	border-top: 2px solid #f6cb7c;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
}
.panel-bg .panel-header {
	text-transform: uppercase;
	width: 650px;
	background: linear-gradient(145deg, rgb(255, 188, 65), rgba(250, 188, 105, 0.8) 55%);
	margin: -10px;
	height: 35px;
	padding: 8px;
	font-size: 17px;
	margin-bottom: 9px;
	color: #dc0d0d;
	padding-left: 15px;
	font-weight: bold;
	font-family: "Ubuntu";
}

.cape-blur {
	-webkit-transform: scale(4);
	transform: scale(4);
	-webkit-filter: blur(10px);
	filter: blur(10px);
	width: 100%;
	height: 100%;
	padding: 50px;
	position: absolute;
	opacity: .6;
	-webkit-transition: .35s;
	transition: .35s;
}
.opa-you-skin-not-skin {
	background: rgba(0,0,0,0.28);
	box-shadow: 0 5px 15px rgba(0,0,0,0.15);
	padding: 5px 8px;
	border-radius: 2px;
	opacity: .85;
	position: absolute;
	display: block;
	right: 0;
	margin: 4px;
	z-index: 999;
	cursor: pointer;
	transition: .2s;
	color: wheat;
	margin-top: 372px;
    width: 142px;
}
.opa-you-skin-not-skin:hover {
	background: rgba(0,0,0,0.78);
	opacity: 1;
}
.cloack-user {
	display: none;
	width: 100%;
	height: 406px;
}
.file-uploader {
	background: #ffe8c5b3;
	padding: 10px 5px;
	width: 290px;
	border: 1px dashed #f9ce9f;
	color: #a16f45;
	font-family: "Neo Sans Pro";
	font-size: 13px;
	-webkit-transition: 0.3s ease;
	transition: 0.3s ease;
	outline: none;
	height: 40px;
	margin-top: 10px;
}

.s_box {
	margin-bottom: 10px;
	border: 1px solid rgba(255, 255, 255, .05);
	transition: all .3s;
	padding: 10px;
	min-height: 80px;
	background: rgba(255, 255, 255, .05)
}

select {
	width: 100%;
	cursor: pointer;
	color: #fff;
	padding: 3.5px;
	background-color: rgba(255, 255, 255, 0.13);
	border: 1px solid rgba(255, 255, 255, 0.19);
	outline: none
}

.bg-skin-cloak {
	position: relative;
	text-align: center;
	background: rgba(0, 0, 0, .26);
	display: table;
	margin-right: 20px;
	width: 314px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
	margin-bottom: 5px
}

#senpaiskin {
	position: relative;
	overflow: hidden;
	cursor: -webkit-grab;
	width: 314px
}

.file-changer {
	padding: 4px 8px;
	margin: 1px;
	color: #fff;
	cursor: pointer;
	transition: .23s;
	border-radius: 2px;
	opacity: .6;
	display: inline-table;
 	float: right;
	margin-top: -12px;
	background: #673ab7;
}

.file-changer:hover {
	background: #673ab7;
	color: #cebaf1;
	box-shadow: 0 5px 15px rgba(87, 45, 160, 0.47);
	opacity: 1;
	transform: translate(-1px, -1px)
}


.ava-changer {
	padding: 4px 8px;
	margin: 1px;
	color: #fff;
	cursor: pointer;
	transition: .23s;
	border-radius: 2px;
	opacity: .6;
	display: inline-table;
 	float: right;
	margin-top: -12px;
	background: #3a7bb7;
}

.ava-changer:hover {
	background: #3a85b7;
	color: #bad8f1;
	box-shadow: 0 5px 15px rgba(45, 114, 160, 0.47);
	opacity: 1;
	transform: translate(-1px, -1px)
}

.delete-btn {
	background: #b73a4b;
}

.delete-btn:hover {
	background: #b73a4b;
  	color: #e8bbbb;
	box-shadow: 0 5px 15px rgba(160, 45, 45, 0.47);
}

#senpaiskin div {
	transform: scale(4);
	filter: blur(10px);
	width: 100%;
	height: 100%;
	padding: 50px;
	position: absolute;
	opacity: .6;
}

.skin-show {
	display: flex;
	min-width:670px
}
.bg-skin-cloak {
	margin-bottom: 0
}

.panel-sp {
	display: inline-block;
	background: rgba(0, 0, 0, 0.15);
	border-radius: 2px;
	padding: 10px;
  	width: 314px;
	height: 406px;
 	-webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
}

.cataloges-but {
	padding: .85em 1em;
	margin-top: 6px;
	color: #fff!important;
	display: block;
	text-transform: uppercase;
	opacity: .7;
	transition: .2s;
	cursor: pointer
}

.cataloges-but:hover {
	opacity: 1;
	text-decoration: none;
}
.panel-sp>p {
	display: inline-flex;
	text-transform: uppercase;
	color: #6d0b0b;
	font-size: 1.5em;
	line-height: 12px;
}
</style>
