<template>
    <div class="block-container">
        <div class="block-header">{{this.isAuthenticated ? "Ваш профиль" : "Авторизация"}}</div>
        <div class="block-body">
            <div class="block-mini"/>
            <div>
                <div v-if="!isConnected">
                    <div class="lds-ring" style="margin-top: 0px;"><div></div><div></div><div></div><div></div></div>
                    <div class="loading-text">Загрузка...</div>
                </div>
                <div v-else>
                    <div v-if="isPendingLogin2FA">
                        <center>
                            Ожидание потверждения двухфакторной авторизации <br /> <br />
                            <div v-on:click="resetLogin2FA" class="button_profile rred noselect">
                                Выйти
                            </div>
                        </center>
                    </div>
                    <div v-else-if="!isAuthenticated">
                        <form v-on:submit.prevent>
                            <input type="text" v-model="authInputLogin" placeholder="Логин" style="margin-top:10px;"><br>
                            <input type="password" v-model="authInputPassword" placeholder="Пароль" style="margin-top:10px;">
                            <div class="btn-drop" v-on:click="handleSubmit">
                                Войти
                            </div>
                            <div class="login_form_links">
                                <center>
                                    <router-link tag="a" to="/register" class="reg-uss" style="font-size:14px;">
                                        Регистрация
                                    </router-link> <br/>
                                    <router-link tag="a" to="/reset" class="rest-pass" style="font-size:14px;margin-top: -24px;">
                                        Забыли пароль?
                                    </router-link>
                                </center>
                            </div>
                            <div style="padding-top:10px"/>
                        </form>
                    </div>
                    <div v-else>
                        <router-link :to="'/user/' + auth.login" tag="div" class="profile_avatar noselect">
                            <div :style="'background: url(' + auth.avatar + ') center center / cover;'"/>
                        </router-link>
                        <div class="profile_div">
                            <div class="tooltip">
                                <router-link :to="'/user/' + auth.login" class="profile_name">{{auth.login}} </router-link>
                                <span class="tooltiptext noselect" style="width: 150px;margin-left: -72px;">
                                    Перейти в профиль
                                </span>
                            </div>
                            <br/>
                            <div class="badge">{{auth.permission.translated}}</div> 
                            <div class="badge green" style="margin-inline-start: 5px;">{{auth.balance}}₽</div>
                        </div>

                        <center style="margin-top: 22px; position: relative;">
                            <div v-if="auth.coins > 0" style="margin-top: 41px; margin-bottom: 10px;font-weight: bold;">
                            <div>У Вас {{auth.coins}} монет.</div>
                            <router-link to="/transfer">Перевести на сервер!</router-link>
                            </div>

                            <!--div v-on:click="handleOpenMessenger" class="button_profile bblue noselect" style="font-size: 14px;margin-top: -2px;">
                                Личные сообщения
                            </div-->
                            <router-link to="/cabinet/pay" class="button_a">
                                <div class="button_profile light_red noselect">
                                    Пополнить счет
                                </div>
                            </router-link>
                            <router-link to="/cabinet" class="button_a">
                                <div class="button_profile light_red noselect">
                                    Личный кабинет
                                </div>
                            </router-link>
                            <!--router-link to="/shops" class="button_a">
                                <div class="button_profile light_red noselect">
                                    Магазин
                                </div>
                            </router-link-->

                            <router-link to="/bonus" class="button_a">
                                <div class="button_profile ggreen left_btn noselect">
                                    Бонусы
                                </div>
                            </router-link>
                            <router-link to="/votes" class="button_a">
                                <div class="button_profile ggreen right_btn noselect">
                                    Голоса
                                </div>
                            </router-link>
                            <div style="clear: both;"></div>

                            <router-link to="/top" class="button_a">
                                <div class="button_profile min_button noselect">
                                    Топ игроков
                                </div>
                            </router-link>
                            <router-link to="/team" class="button_a">
                                <div class="button_profile min_button noselect">
                                    Команда проекта
                                </div>
                            </router-link>
                            <!--router-link to="/referal" class="button_a">
                                <div class="button_profile min_button noselect">
                                    Пригласить друга
                                </div>
                            </router-link-->
                            <router-link to="/settings" class="button_a">
                                <div class="button_profile min_button noselect">
                                    Настройки
                                </div>
                            </router-link>

                            <div v-on:click="handleLogout" class="button_profile rred noselect">
                                Выйти
                            </div>
                            <div style="padding-top:20px"/>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-bottom"></div>
    </div>
</template>

<script>
    import { EventBus } from '@/main.js';
    import { load } from 'recaptcha-v3'

    export default {
        name: 'Auth',
        data () {
            return {
                sendOnOpen: false,
                authInputLogin: "",
                authInputPassword: ""
            }
        },

        computed: {
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
        	    return this.$store.state.auth.pendingLogin2FA
            },
            auth() {
                return this.$store.state.auth
            },
            isConnected () {
        	    return this.$store.state.connected
            }
        },

        methods: {
            handleOpenMessenger() {
                document.documentElement.style.overflow = 'hidden';
                this.$store.commit('setMessengerOpen', true);
                this.$store.commit('setStopScroll', true);
            },
            handleSubmit () {
                this.$store.commit('logout');
                this.sendOnOpen = false;
                this.$recaptcha('login').then((token) => {
                    this.$root.$emit('send_websocket', `{"packet":"account.auth","data":{"recaptcha_v3":"${token}","login":"${this.authInputLogin}","authByToken":false,"key": "${this.authInputPassword}"}}`)
                });
            },
            resetLogin2FA() {
                this.$store.commit('logout');
                this.$root.$emit('notice_success', 'Вы успешно вышли из аккаунта', '');
            },
            handleLogout() {
                this.$root.$emit('send_websocket', `{"packet":"account.logout","data":{}}`)
            }, 
            listener(packet, data) {
                if(packet === 'account.auth' || packet == 'account.authToken') {
                    this.$store.commit('setConnected');
                    
                    if (data.type === 'success') {
                        this.$store.commit('auth', {
                            login: data.login,
                            accessToken: data.accessToken,
                            balance: data.balance,
                            coins: data.coins,
                            permission: data.permission,
                            avatar: data.avatar
                        });
                        
                        if (!this.sendOnOpen) {
                            this.$root.$emit('notice_success', 'Вы успешно авторизовались', '')
                            const cred = new PasswordCredential({
                                id: data.login,
                                password: this.authInputPassword,
                                name: `${data.login}`,
                                iconURL: this.auth.avatar,
                            })
                            navigator.credentials.store(cred)
                        }

                        EventBus.$emit('onAuth');
                        return;
                    } else {
                        switch (data.error) {
                            case 0:
                                if (this.sendOnOpen) {
                                    this.$store.commit('logout');
                                    this.$root.$emit('notice_error', 'Текущая сессия истекла', '');
                                } else 
                                    this.$root.$emit('notice_error', 'Логин или пароль введен не верно', '');
                                break
                            case 1:
                                this.$root.$emit('notice_warning', 'Подтвердите двухфакторную авторизацию', '');
                                this.$store.commit('setPendingLogin2FA', true)
                                break
                            case 2:
                                this.$root.$emit('notice_error', 'Вы уже авторизовались', '');
                                break
                            default: 
                                this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                                break;
                        }
                    }
                    this.sendOnOpen = false;
                }
                
                if(packet === 'account.logout') {
                    this.$root.$emit('notice_success', 'Вы успешно вышли из аккаунта', '');
                    this.$store.commit('logout');
                    EventBus.$emit('onLogout');
                }

                if(packet === 'ping' && data.type === 'error_secure') {
                    if(!this.isPendingLogin2FA) {
                        this.$root.$emit('notice_warning', 'Подтвердите двухфакторную авторизацию', '');
                        this.$store.commit('setPendingLogin2FA', true)
                    }
                }

                if(packet === 'account.secure') {
                    if(data.type === 'accept') {
                        if(this.isPendingLogin2FA) {
                            this.$store.commit('setPendingLogin2FA', false)
                        }
                    } else {
                        this.$store.commit('logout');
                        this.$root.$emit('notice_error', 'Авторизация отменена', '');
                    }
                }
            }
        },
        created () {
            EventBus.$on('onProcessPacket', this.listener);
        },
        mounted () {
            this.$root.$on('open_websocket', () => {
                var login = this.$cookie.get('cashedLogin')
                var token = this.$cookie.get('accessToken')

                if (login != null && token != null) {
                    this.sendOnOpen = true;
                    this.$root.$emit('send_websocket', `{"packet":"account.authToken","data":{"login":"${login}","key": "${token}"}}`)
                } else {
                    this.$store.commit('setConnected')
                }
            });
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
        }
    }
</script>

<style scoped>
.profile_avatar {
    filter: blur(7px);
    width: 252px;
    height: 112px;
    margin-left: 13px;
    cursor: pointer;
}

.profile_avatar div {
    width: 100%;
    height: 100%;
}

.profile_div {
    position: relative;
    margin-top: -76px;
    text-align: center;
}
.profile_name {
    font-size: 27px;
    line-height: 17px;
    font-weight: bolder;
    color: #a50909 !important;
    background: linear-gradient(45deg, #650f0f, #e00);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
input {
    display: inline-block;
    height: 36px;
    line-height: 22px;
    vertical-align: middle;
	color: #555758;
	font-size: 14px;
	background: #fff1da !important;
	border-bottom: 1px solid #fff;
	border: none;
	padding: 15px;
	width: 246px;
    margin-left: 15px;
	border-radius: 3px;
	font-weight: 600;
	box-shadow: 0 15px 45px rgba(0, 0, 0, .05);
	outline: none;
    border-radius: 21px;
}

.badge {
    display: inline-block;
    padding: 0px 7px;
    font-size: 14px;
    line-height: 18px !important;
    height: 18px;
    background: #AFAFAF;
    background-color: rgb(230, 34, 96, 0.75);
    font-weight: 400;
    color: #FFF;
    border-radius: 9px;
    text-transform: uppercase;
    text-shadow: none;
    text-decoration: none;
    margin-top: 2px;
    margin-bottom: 2px;
    font-family: "Ubuntu";
    font-weight: bold;
}

.green {
    background-color: rgba(5, 139, 57, 0.993);
}

.member_panel {
    height: 76px;
}

.member_panel .member_avatar {
    display: block;
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid #1B1B19;
    text-decoration: none;
    float: left;
    background: #FFF;
    margin-left: 11px;
    margin-top: -8px;
}

.member_panel .member_avatar>img {
    display: block;
    width: 64px;
    height: auto;
}

.member_panel .member_info {
    margin-left: 90px;
    color: #585858;
    font-size: 14px;
    line-height: 14px;
}

.member_panel .member_info>b {
    font-size: 17px;
    line-height: 17px;
    color: #a50909 !important;
    background: linear-gradient(45deg, #650f0f, #e00);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.member_panel .member_info>b>* {
    color: inherit !important;
}

.button_a {
    text-decoration: none;
}
.button_a:hover {
    text-decoration: none;
}

.button_profile {
	color: white;
	text-decoration: none;
	padding: 7px;
	border-radius: 3px;
	background: #ba7d4e;
	box-shadow: 0 -3px #7A5229 inset;
	transition: 0.2s;
	width: 170px;
    font-family: "NeoSansBold";
	font-size: 16px;
    margin-top: 3px;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 11px;
}
.button_profile:hover { 
	background: #724B27; 
    text-decoration: none;
}

.min_button {
    height: 30px;
    padding-top: 4px;
    font-family: NeoSans;
}

.left_btn {
    width: 83px;
    float: left;
    margin-left: 55px;
}

.right_btn {
    width: 83px;
    float: right;
    margin-right: 55px;
}

.rred {
	background: #852916;
	box-shadow: 0 -3px #54261C inset;
}
.rred:hover {
	background: #54261C;
}

.bblue {
	background: rgb(78, 130, 186);
	box-shadow: 0 -3px #29537a inset;
}
.bblue:hover {
	background: #29537a;
}

.ggreen {
	background: rgba(36, 125, 8, 0.71);
	box-shadow: 0 -3px #1c541c inset;
}
.ggreen:hover {
	background: #1c541c;
}

.light_red {
	background: rgba(218, 68, 64, 0.76);
	box-shadow: 0 -3px #7a2e29 inset;
}
.light_red:hover {
	background: #7a2e29;
}
.btn-drop {
	background: linear-gradient(to right, #ffa857, #fe5a73);
	padding: 4px 12px;
	color: #fff;
	border-radius: 3px;
	height: 53px;
	border-bottom: 5px solid rgba(255, 255, 255, .25);
	box-shadow: 0 10px 65px 0 #ccd4e0;
	text-decoration: none;
	font-size: 25px;
	font-weight: 600;
	display: block;
	float: left;
	transition: .5s;
	line-height: 45px;
	text-align: -webkit-center;
	outline: none!important;
	border-left: 0;
	border-right: 0;
    cursor: pointer;
    margin-left: 17px;
    width: 246px;
    margin-top: 15px;
}
.btn-drop:hover {
	background: linear-gradient(to right, #ffb26b, #ff6a80);
	-moz-transform: scale(1.05);
	-ms-transform: scale(1.05);
	-webkit-transform: scale(1.05);
	transform: scale(1.05);
	outline: none!important;
	border-bottom: 5px solid rgba(255, 255, 255, .25)!important
}
.login_form_links a {
	color: #3444ca!important;
	margin-bottom: 5px;
	display: flow-root;
	padding: 10px;
	margin-bottom: -10px;
	transition: .5s;
	text-align: center;
}
.login_form_links a:hover {
	color: #000!important;
	text-decoration: none
}
</style>
