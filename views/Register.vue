<template>
    <div>
        <div class="page_header">
            <div class="page_text_header">
                Регистрация
            </div>
        </div>

        <div v-if="isAuthenticated">
            <center>
                Данная страница не доступна после авторизации.<br>
                Если вы считаете, что это ошибка, сообщите администратору.
            </center>
        </div>
        <div v-else>
            <div class="section-how" style="margin-top: 4px;">
                <span class="num-1">
                    01
                </span>
                <div class="reved">
                    <div class="arrow-road"></div>
                    <span class="name-form">
                        Придумайте себе ник
                        <p class="reveria">Минимум 4 символа, максимум 16</p>
                    </span>
                    <input placeholder="Логин" class="registration_short_field" v-model="input.login">
                </div>
            </div>

            <div class="section-how">
                <span class="num-2">
                    02
                </span>
                <div class="reved">
                    <div class="arrow-road"></div>
                    <span class="name-form">
                        Email адрес
                        <p class="reveria">Нужен для восстановления пароля</p>
                    </span>
                    <input placeholder="Почта" class="registration_short_field" v-model="input.email">
                </div>
            </div>

            <div class="section-how">
                <span class="num-3">
                    03
                </span>
                <div class="reved">
                    <div class="arrow-road"></div>
                    <span class="name-form">
                        Пароль
                        <p class="reveria">Максимально сложный</p>
                    </span>
                    <input type="password" placeholder="Пароль" v-model="input.password">
                </div>
            </div>

            <div class="section-how">
                <span class="num-4">
                    04
                </span>
                <div class="reved">
                    <div class="arrow-road"></div>
                    <span class="name-form">
                        Повторите пароль
                        <p class="reveria">Убедиться, что не допущены ошибки</p>
                    </span>
                    <input type="password" id="password-repeat" placeholder="Повторите пароль" v-model="input.re_password">
                </div>
            </div>

            <div class="down-reg">
                <button type="submit" name="submit" class="register" v-on:click="emitClick();">Зарегистрироваться</button>
            </div>
            
            <center style="margin-top:20px;">
                <span>
                    Нажимая расположенную выше кнопку «Зарегистрироваться»,<br> я принимаю условия и соглашаюсь с
                    <a href="/rules" target="_blank">Правилами Игры</a>,
                    <a href="/privacy" target="_blank">Политикой конфиденциальности</a>,
                    <a href="/public_offer" target="_blank">Публичной офертой</a>.
                </span>
            </center>
        </div>
    </div>
</template>

<script>
    import { EventBus } from '@/main.js';
    export default {
        name: 'Register',
        data() {
            return {
                input: {
                    login: "",
                    email: "",
                    password: "",
                    re_password: ""
                }
            }
        },
        methods: {
            emitClick() {
                console.log('Source: ' + this.source)
                if(this.input.password.length < 8) {
                    this.$root.$emit('notice_error', 'Минимальная длинна пароля 8 символов!', '');
                    return
                }
                this.$root.$emit('send_websocket', `{"packet":"account.register","data":{"url":"${this.source}", "login":"${this.input.login}","email":"${this.input.email}","password":"${this.input.password}","re_password":"${this.input.re_password}"}}`)
            }, 
            listener(packet, data) {
                if(packet != 'account.register') {
                    return;
                }
                if (data.type === 'success') {
                    this.$root.$emit('notice_success', 'Вы успешно зарегистрировались', '');
                    this.$store.commit('auth', {
                        login: data.login,
                        accessToken: data.accessToken,
                        balance: data.balance,
                        coins: data.coins,
                        permission: data.permission,
                        avatar: data.avatar
                    });

                    const cred = new PasswordCredential({
                        id: data.login,
                        password: this.input.password,
                        name: `${data.login}`,
                    })
                    
                    navigator.credentials.store(cred)

                    this.$router.push('/start');
                    return;
                }
                 
                switch (data.error) {
                    case 0:
                        this.$root.$emit('notice_error', 'Вы уже авторизированы', '');
                        break;
                    case 1:
                        this.$root.$emit('notice_error', 'Данный пользователь уже зарегистрировался', '');
                        break;
                    case 2:
                        this.$root.$emit('notice_error', 'Пароли не совпали', '');
                        break;
                    case 3:
                        this.$root.$emit('notice_error', 'Некорректная почта', '');
                        break;
                    case 4:
                        this.$root.$emit('notice_error', 'Минимальная длинна логина 5 символов', '');
                        break;
                    case 5:
                        this.$root.$emit('notice_error', 'Максимальная длинна логина 20 символов', '');
                        break;
                    case 6:
                        this.$root.$emit('notice_error', 'Логин может состоять только из "0-9", "A-z", "_"', '');
                        break;
                    case 7:
                        this.$root.$emit('notice_error', 'Произошла ошибка во время регистрации :c', '');
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
            },
            source() {
                return this.$store.state.source;
            }
        },
        created() {
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
	height: 100px
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
span.num-3 {
	background: linear-gradient( 45deg, #fb881b, #fac75e);
	padding: 15px 18px;
	color: #fff;
	font-size: 22px;
	font-weight: 700;
	border-radius: 3px;
	box-shadow: 0 10px 45px 0 rgba(191, 137, 17, .35);
	float: left
}
span.num-3:after {
	content: "";
    width: 13px;
    height: 13px;
    margin-left: 0px;
    margin-top: -29px;
	background: #fed592;
	display: -webkit-inline-box;
	position: absolute;
	border-radius: 3px;
	border: 7px solid #fb8a1e;
	box-shadow: 0 10px 45px 0 #fb8e22;
}
span.num-4 {
	background: linear-gradient( 45deg, #5261d5, #43a1ef);
	padding: 15px 18px;
	color: #fff;
	font-size: 22px;
	font-weight: 700;
	border-radius: 3px;
	box-shadow: 0 10px 45px 0 rgba(80, 107, 217, .35);
	float: left
}
span.num-4:after {
	content: "";
    width: 13px;
    height: 13px;
    margin-left: 0px;
    margin-top: -29px;
	background: #c5ceff;
	display: -webkit-inline-box;
	position: absolute;
	border-radius: 3px;
	border: 7px solid #4c7ce0;
	box-shadow: 0 10px 45px 0 #5165d7;
}
.reved {
	display: flex;
    background: #ffd085ba;
	border-radius: 3px;
	font-size: 14px;
	color: #89939d;
	font-weight: 700;
	padding: 15px 20px;
	height: 90px!important;
    width: 84%;
	float: right
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
    margin: 4px 0 3px;
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
	outline: none
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
	margin-top: 25px;
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
