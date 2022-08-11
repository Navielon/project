<template>
    <div>
        <div class="page_header">
            <div class="page_text_header">
                Восстановление пароля
            </div>
        </div>

        <div v-if="isAuthenticated">
            <center>
                Данная страница не доступна после авторизации.<br>
                Если вы считаете, что это ошибка, сообщите администратору.
            </center>
        </div>
        <div v-else-if="!success">
            <div class="section-how" style="margin-top: 4px;">
                <span class="num-1">
                    01
                </span>
                <div class="reved">
                    <div class="arrow-road"></div>
                    <span class="name-form">
                        Пароль
                    </span>
                    <input type="password" placeholder="Пароль" class="registration_short_field" v-model="input.password">
                </div>
            </div>

            <div class="section-how">
                <span class="num-2">
                    02
                </span>
                <div class="reved">
                    <div class="arrow-road"></div>
                    <span class="name-form">
                        Повторите пароль
                    </span>
                    <input type="password" placeholder="Повторите пароль" class="registration_short_field" v-model="input.re_password">
                </div>
            </div>

            <div class="down-reg">
                <button type="submit" name="submit" class="register" v-on:click="emitClick();">Восстановить пароль</button>
            </div>
        </div>
        <div v-else> 
            <h2 id="reset_send" style="text-align: center; color: #3c3c3c;">
                Вы успешно изменили пароль!
            </h2>
        </div>
    </div>
</template>

<script>
    import { EventBus } from '@/main.js';
    export default {
        name: 'Reset',
        data() {
            return {
				success: false,
				login: '',
				code: '',
                input: {
                    password: "",
                    re_password: ""
                }
            }
        },
        methods: {
            emitClick() {
				if(this.input.password.length < 8) {
                    this.$root.$emit('notice_error', 'Минимальная длинна пароля 8 символов!', '');
                    return
                }
				if(this.input.password != this.input.re_password) {
					this.$root.$emit('notice_error', 'Пароли не совпали', '');
					return;
				}
                this.$recaptcha('restore').then((token) => {
                    this.$root.$emit('send_websocket', `{"packet":"account.restore","data":{"recaptcha_v3":"${token}", "login":"${this.login}","code":"${this.code}","password":"${this.input.password}"}}`)
                });
            }, 
            listener(packet, data) {
                if(packet != 'account.restore') {
                    return;
                }
                if (data.type === 'success') {
                    this.success = true;
                    return;
                }
                 
                switch (data.error) {
                    case 0:
                        this.$root.$emit('notice_error', 'Время для смены пароля по данной ссылке истекло!', '');
                        break;
                    default: 
                        this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                        break;
                }
            }
        },
        computed: {
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            }
		},
		watch: {
            '$route' (to, from) {
				this.login = to.params.login;
				this.code = to.params.code;
            }
        },
        created() {
			this.login = this.$route.params.login;
			this.code = this.$route.params.code;

            EventBus.$on('onProcessPacket', this.listener);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
        }
    }
</script>

<style scoped>
.section-how {
	margin-top: 35px;
	height: 53px
}
span.num-1 {
	background: linear-gradient( 45deg, #64af19, #9bdb01);
	padding: 15px 18px;
	color: #fff;
	font-size: 22px;
	font-weight: 700;
	border-radius: 3px;
	box-shadow: 0 10px 45px 0 rgba(120, 191, 17, .35);
	float: left
}
span.num-1:after {
	content: "";
    width: 13px;
    height: 13px;
    margin-left: 0px;
    margin-top: -29px;
	background: #bbef68;
	display: -webkit-inline-box;
	position: absolute;
	border-radius: 3px;
	border: 7px solid #72ba13;
	box-shadow: 0 10px 45px 0 rgba(120, 191, 17, .35);
}
span.num-2 {
	background: linear-gradient( 45deg, #fe5a73, #fda756);
	padding: 15px 18px;
	color: #fff;
	font-size: 22px;
	font-weight: 700;
	border-radius: 3px;
	box-shadow: 0 10px 45px 0 rgba(191, 57, 17, .35);
	float: left
}
span.num-2:after {
	content: "";
    width: 13px;
    height: 13px;
    margin-left: 0px;
    margin-top: -29px;
	background: #ffa9af;
	display: -webkit-inline-box;
	position: absolute;
	border-radius: 3px;
	border: 7px solid #fe5a73;
	box-shadow: 0 10px 45px 0 rgba(191, 17, 17, .35);
}
.reved {
	display: flex;
    background: #ffd085ba;
	border-radius: 3px;
	font-size: 14px;
	color: #89939d;
	font-weight: 700;
	padding: 15px 20px;
    width: 84%;
	float: right;
    height: 72px !important;
}
.arrow-road {
	position: relative;
    background: #ffd085ba;
}
.arrow-road:after {
	top: 25%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: transparent;
	border-right-color: #ffd085ba;
	border-width: 25px;
	margin-top: -31px;
	margin-left: -60px
}
.arrow-roadx {
	position: relative;
	background: #fff
}
.arrow-roadx:after {
	top: 25%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: transparent;
	border-right-color: #fff;
	border-width: 25px;
	margin-top: 50px;
	margin-left: -55px
}
span.name-form {
	font-size: 16px;
	color: #52565a;
    margin: 12px 0 3px;
	font-weight: 600;
	float: left;
	position: relative;
    width: 199px;
}
p.reveria {
	color: #52565a;
	font-weight: 100;
	font-size: 11px;
    width: 199px;
}
input {
	color: #555758;
	font-size: 14px;
	background: #fff9e7;
	border-bottom: 1px solid #fff;
	border: none;
	padding: 15px;
	width: 250px;
	border-radius: 3px;
	font-weight: 600;
    margin-left: 72px;
	box-shadow: 0 15px 45px rgba(0, 0, 0, .05);
	outline: none;
    height: 40px;
}
.down-reg {
	text-align: center;
	margin: 0 auto;
	display: flex;
    background: #fdd391;
	border-radius: 3px;
	font-size: 14px;
	color: #89939d;
	font-weight: 700;
	margin-top: 33px;
	padding: 15px 20px;
	width: 340px
}
button.register {
	background: linear-gradient(to right, #4f6fdc, #4798ee);
	padding: 0 10px;
	color: #fff;
	border-radius: 3px;
	width: 300px;
	height: 53px;
	border-bottom: 5px solid rgba(255, 255, 255, .25);
	box-shadow: 0 10px 65px 0 #ccd4e0;
	text-decoration: none;
	font-size: 13px;
	font-weight: 600;
	display: inline-block;
	transition: .5s;
	margin: 0 auto;
	line-height: 45px;
	text-align: -webkit-center;
	outline: none!important;
	border-left: 0;
	border-right: 0;
    transition: 1s;
}
button.register:hover {
	box-shadow: 0 20px 45px 0 #ccd4e0;
	background: linear-gradient(to right, #42a4f3, #5260d5);
	-moz-transform: scale(1.05);
	-ms-transform: scale(1.05);
	-webkit-transform: scale(1.05);
	transform: scale(1.05)
}
</style>
