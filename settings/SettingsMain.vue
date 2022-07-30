<template>
<div>
    <div class="panel-bg" style="height: 230px;">
        <div class="panel-header" style="margin-bottom: 15px;">
            Смена пароля
        </div>
        <center>
            <form v-on:submit.prevent>
                <input type="password" required autocomplete="password" v-model="inputPassword" placeholder="Пароль" style="margin-top:10px;"><br>
                <input type="password" required v-model="inputPassword2" placeholder="Повторите пароль" style="margin-top:10px;">
                <br/>
                <div class="btn-drop" v-on:click="handleSubmit">
                    Сменить пароль
                </div>
                <div style="clear: both" />
            </form>
        </center>
    </div>

    <div class="panel-bg">
        <div class="panel-header" style="margin-bottom: 15px;">
            Приязка аккаунта к VK
        </div>

        <div v-if="hasVK == null">
            <div style="margin-top: 0px;" class="lds-ring"><div></div><div></div><div></div><div></div></div>
            <div class="loading-text">Загрузка...</div>
        </div>
        <div v-else>
            <div v-if="hasVK">
                <img src="/assets/img/icons/vk_full.png" style="width: 130px;margin-top: -15px; float: left;" />

                <div class="protect">
                    {{vkLastName}} {{vkFirstName}}
                </div> 
                <div style="margin-left: 140px;">
                    Ваш VK:  
                    <a :href="'https://vk.com/id' + idVK" target="_blank" class="protect_url">https://vk.com/id{{idVK}}</a>
                </div>

                <div style="clear: both" />
            </div>
            <div v-else>
                <center>
                    <div class="button_give noselect" v-on:click="loginByVK"> 
                        ПРИВЯЗАТЬ СТРАНИЦУ
                    </div>
                </center>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import { EventBus } from '@/main.js';
    import * as main from '@/main.js';

    export default {
        name: 'SettingsMain',
        data () {
            return {
                inputPassword: '',
                inputPassword2: '',
                hasVK: null,
                idVK: 0,
                vkFirstName: '',
                vkLastName: '',
            }
        },
        methods: {
            handleSubmit() {
                if(this.inputPassword.length < 8) {
                    this.$root.$emit('notice_error', 'Минимальная длинна пароля 8 символов!', '');
                    return
                }
                if(this.inputPassword != this.inputPassword2) {
                    this.$root.$emit('notice_error', 'Пароли не совпадают', '');
                    return;
                }
                this.$root.$emit('send_websocket', `{"packet":"account.changePassword","data":{"password":"${this.inputPassword}"}}`)
            },
            loginByVK() {
                VK.init({apiId: 7195488});
                
                var auth = VK.Auth.login((data) => {
                    if(data.status != 'connected') {
                        this.$root.$emit('notice_error', 'Ошибка статуса авторизации VK: ' + data.status, '');
                        return ;
                    }
                    var d = data.session;
                    console.log(d);
                    this.$root.$emit('send_websocket', `{"packet":"account.vk","data":{"expire":"${d.expire}", "mid":"${d.mid}", "secret":"${d.secret}", "sid":"${d.sid}", "sig":"${d.sig}", "first_name":"${d.user.first_name}", "last_name":"${d.user.last_name}"}}`)
                });

                if(auth == false) {
                    this.$root.$emit('notice_error', 'Ошибка авторизации VK!', '');
                } 
            },
            listener(packet, data) {
                if(packet == 'account.vk') {
                    if (data.type === 'success') {
                        this.$root.$emit('send_websocket', `{"packet":"account.hasVK","data":{}}`)
                        this.$root.$emit('notice_success', 'Вы успешно привязали страницу VK!', '');
                    } else {
                        switch (data.error) {
                            case 0:
                                this.$root.$emit('notice_error', 'Текущая сессия истекла', '');
                                break;
                            case 1:
                                this.$root.$emit('notice_error', 'Ошибка данных от VK!', '');
                                break;
                            case 2:
                                this.$root.$emit('notice_error', 'К этой странице VK уже привязан аккаунт!', '');
                                break;
                            default: 
                                this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                                break;
                        }
                    }
                }

                if(packet == 'account.hasVK') {
                    if (data.type === 'success') {
                        this.hasVK = data.vk;
                        this.idVK = data.id;
                        this.vkFirstName = data.first_name;
                        this.vkLastName = data.last_name;
                    } else {
                        switch (data.error) {
                            case 0:
                                this.$root.$emit('notice_error', 'Текущая сессия истекла', '');
                                break;
                            default: 
                                this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                                break;
                        }
                    }
                }

                if(packet == 'account.changePassword') {
                    if (data.type === 'success') {
                        this.$root.$emit('notice_success', 'Вы успешно сменили пароль', '');
                    } else {
                        switch (data.error) {
                            case 0:
                                this.$root.$emit('notice_error', 'Текущая сессия истекла', '');
                                break;
                            default: 
                                this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                                break;
                        }
                    }
                }
            }
        },
        created() {
            EventBus.$on('onProcessPacket', this.listener);
            this.$root.$emit('send_websocket', `{"packet":"account.hasVK","data":{}}`)
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
        },
    }
</script>

<style scoped>
    .panel-bg {
		background: rgba(0, 0, 0, 0.15);
		border-radius: 2px;
		padding: 10px;
		width: 650px;
		margin-left: 10px;
		-webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
		margin-top: 10px;
	}

    .protect {
        white-space: nowrap;
        overflow: hidden;
        background: #fde1b4a6;
        padding: 5px;
        padding-left: 10px;
        text-overflow: ellipsis;
        border-radius: 15px;
        border: 2px solid #e6be7d;
        margin-top: 3px;
        margin-bottom: 3px;
        font-weight: 900;
        font-family: 'Ubuntu';
        transition: 0.2s;
        width: fit-content;
        padding-right: 11px;
    }

    .protect_url {
        font-weight: 900;
        font-family: 'Ubuntu';
    }

    .panel-bg .panel-header {
        text-transform: uppercase;
        width: 650px;
        background-color: #00000047;
        margin: -10px;
        height: 35px;
        padding: 8px;
        font-size: 17px;
        margin-bottom: 9px;
        color: white;
        padding-left: 15px;
    }

    .panel-bg>p {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        text-transform: uppercase;
        color: #6d0b0b;
        font-size: 1em;
        line-height: 0px;
    }

    .button_give {
        background-color: #ff424b;
        padding: 10px;
        padding-top: 12px;
        font-family: 'NeoSans';
        font-size: 18px;
        color: white;
        width: 260px;
        height: 45px;
        text-align: center;
        border-radius: 47px;
        cursor: pointer;
    }
    .button_give:hover {
        background-color: #f52630;
    }

    input {
        display: inline-block;
        height: 36px;
        line-height: 22px;
        vertical-align: middle;
        color: #555758;
        font-size: 14px;
        background: #e7eef6;
        border-bottom: 1px solid #fff;
        border: none;
        padding: 15px;
        width: 196px;
        margin-left: 15px;
        border-radius: 3px;
        font-weight: 600;
        box-shadow: 0 15px 45px rgba(0, 0, 0, .05);
        outline: none;
    }
    .btn-drop {
        background: linear-gradient(to right, #ffa857, #fe5a73);
        padding: 0 10px;
        color: #fff;
        border-radius: 3px;
        height: 53px;
        border-bottom: 5px solid rgba(255, 255, 255, .25);
        box-shadow: 0 10px 65px 0 #ccd4e0;
        text-decoration: none;
        font-size: 13px;
        font-weight: 600;
        display: block;
        transition: .5s;
        line-height: 45px;
        text-align: -webkit-center;
        outline: none!important;
        border-left: 0;
        border-right: 0;
        cursor: pointer;
        margin-left: 15px;
        width: 196px;
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
</style>
