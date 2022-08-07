<template>
<div>
    <div class="bonus_header noselect"> 
        <img style="width: 708px;" src="/assets/img/bonus/header.png" />
    </div>

    <div class="bonus_box_wrapper noselect">
        <div class="bonus_box">
            <h4>LoliLand Бонус</h4>
            Это новая программа поощрения активных пользователей! <br/>
            Вы можете получить монеты за: <br/>
            <!--- <b>Лайк поста - 25 мон</b>. <b>Репост поста - 50 мон</b>. Дата создания поста не должна быть больше 1 недели <br/>-->
            - <b>Ежедневное получение от 10 до 20 монет</b> за подписку на нашу группу в VK
        </div>
    </div>

    <div v-if="!isAuthenticated">
        <center style="margin-top:10px">
            Залогинтесь, чтобы получить доступ к данному разделу
        </center>
    </div>
    <div v-else-if="isPendingLogin2FA">
        <center style="margin-top:10px">
            Подтвердите двухфакторную аунтификацию, чтобы получить доступ к данному разделу 
        </center>
    </div>
    <div v-else>
        <div v-if="loaded">
            <img style="margin-left: 20px; margin-top: 21px;" src="/assets/img/bonus/bonus.png" />
            
            <div :class="{auth: !checkVK, auth_done: checkVK}" v-on:click="loginByVK"/>
            <div :class="{subscribe: !subscribe, subscribe_done: subscribe}" v-on:click="openInNewTab('https://vk.com/loliland')"/>
            <div :class="{msg: !hasMessage, msg_done: hasMessage}" v-on:click="openInNewTab('https://vk.com/im?media=&sel=-180476635')"/>

            <div :class="{give: (checkVK || subscribe || hasMessage), give_disable: !(checkVK || subscribe || hasMessage)}" v-on:click="getBonus"/>

            <div v-if="Object.keys(histories).length > 0">
                <div class="bonus_condition_header noselect" style="margin-top: 10px;">ПОСЛЕДНИЕ ПОЛУЧЕНИЯ БОНУСОВ</div>
                <table>
                    <thead>
                        <tr class="table100-head">
                            <th class="column1">Дата</th>
                            <th class="column2">Бонус</th>
                            <th class="column3body">Награда</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="history in histories" :key="history.date">
                            <td class="column1">{{getDate("%d %f %y %H:%M", history.date)}}</td>
                            <td class="column2">{{history.text}}</td>
                            <td class="column3" style="color: green;"><b>+</b>{{history.price}} <b>мон.</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-else> 
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            <div class="loading-text">Загрузка...</div>
        </div>
    </div>
</div>
</template>

<script>
    import * as main from '@/main.js';
    import { EventBus } from '@/main.js';
    export default { 
        name: 'Bonus',
        data () {
            return {
                loaded: false,
                checkVK: false,
                subscribe: false,
                hasMessage: false,
                histories: null,
            }
        },
        methods: {
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
            openInNewTab(url) {
                var win = window.open(url, '_blank');
                win.focus();
            },
            getBonus() {
                this.$root.$emit('send_websocket', `{"packet":"bonus.get","data":{}}`)
            },
			getDate(format, value) {
				return main.getDate(format, value);
			},
            listener(packet, data) {
                if(packet == 'account.vk') {
                    if (data.type === 'success') {
                        this.$root.$emit('send_websocket', `{"packet":"bonus.load","data":{}}`)
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

                if(packet == 'bonus.get') {
                    if (data.type === 'success') {
                        this.$root.$emit('send_websocket', `{"packet":"bonus.load","data":{}}`)
                        this.$root.$emit('notice_success', 'Вы успешно получили ' + data.value + ' мон!', '');
                    } else {
                        switch (data.error) {
                            case 0:
                                this.$root.$emit('notice_error', 'Текущая сессия истекла', '');
                                break;
                            case 1:
                                this.$root.$emit('notice_error', 'Вы не привязали свой аккаунт к VK!', '');
                                break;
                            case 2:
                                this.$root.$emit('notice_error', 'Вы не подписаны на нашу группу в VK!', '');
                                break;
                            case 3:
                                this.$root.$emit('notice_error', 'До следующего получения бонуса должно пройти ' + data.time, '');
                                break;
                            case 4:
                                this.$root.$emit('notice_error', 'Обновление баланса не завершилась успешно, попробуйте еще раз!', '');
                                break
                            default: 
                                this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                                break;
                        }
                    }
                }
                
                if(packet === 'bonus.load') {
                    if (data.type === 'success') {
                        this.loaded = true;
                        this.checkVK = data.vk;
                        this.subscribe = data.subscribe;
                        this.hasMessage = data.hasMessage;
                        this.histories = data.histories;
                    } 
                }
            },
            onAuth() {
                this.$root.$emit('send_websocket', `{"packet":"bonus.load","data":{}}`);
            }
        },
        mounted() {
            if(this.isAuthenticated) {
                this.$root.$emit('send_websocket', `{"packet":"bonus.load","data":{}}`);
            }
        },
        created() {
            EventBus.$on('onProcessPacket', this.listener);
            EventBus.$on('onAuth', this.onAuth);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
            EventBus.$off('onAuth', this.onAuth);
        },
        computed: {
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
        	    return this.$store.state.auth.pendingLogin2FA
            }
        }
    }
</script>

<style scoped>
    .give {
        margin-left: 356px;
        margin-top: -3px;
        width: 230px;
        height: 88px;
        cursor: pointer;
        background-image: url(/assets/img/bonus/give.png);
    }
    .give:hover {
        background-image: url(/assets/img/bonus/give_hover.png);
    }

    .give_disable {
        margin-left: 356px;
        margin-top: -3px;
        width: 230px;
        height: 88px;
        background-image: url(/assets/img/bonus/give_disable.png);
    }

    .auth {
        margin-left: 30px;
        margin-top: -519px;
        position: absolute;
        width: 353px;
        height: 129px;
        cursor: pointer;
        background-image: url(/assets/img/bonus/auth.png);
    }
    .auth:hover {
        background-image: url(/assets/img/bonus/auth_hover.png);
    }
    .auth_done {
        margin-left: 30px;
        margin-top: -519px;
        position: absolute;
        width: 353px;
        height: 129px;
        background-image: url(/assets/img/bonus/auth_done.png);
    }

    .subscribe {
        margin-left: 317px;
        margin-top: -334px;
        position: absolute;
        width: 331px;
        height: 137px;
        cursor: pointer;
        background-image: url(/assets/img/bonus/subscribe.png);
    }
    .subscribe:hover {
        background-image: url(/assets/img/bonus/subscribe_hover.png);
    }
    .subscribe_done {
        margin-left: 317px;
        margin-top: -334px;
        position: absolute;
        width: 331px;
        height: 137px;
        background-image: url(/assets/img/bonus/subscribe_done.png);
    }

    .msg {
        margin-left: 49px;
        margin-top: -177px;
        position: absolute;
        width: 372px;
        height: 129px;
        cursor: pointer;
        background-image: url(/assets/img/bonus/msg.png);
    }
    .msg:hover {
        background-image: url(/assets/img/bonus/msg_hover.png);
    }
    .msg_done {
        margin-left: 49px;
        margin-top: -177px;
        position: absolute;
        width: 372px;
        height: 129px;
        background-image: url(/assets/img/bonus/msg_done.png);
    }

    .bonus_header {
        margin-left: -17px;
        margin-top: -18px;
    }
    .button_login {
        position: absolute;
        margin-top: 145px;
        background-color: #fe4200;
        padding: 10px;
        padding-top: 5px;
        font-family: 'BosaNova';
        font-size: 24px;
        color: white;
        width: 240px;
        height: 38px;
        text-align: center;
        border-radius: 47px;
        cursor: pointer;
    }
    .button_login:hover {
        background-color: #fe2600;
    }

    .button_subscribe {
        position: absolute;
        margin-top: 145px;
        background-color: #0083fe;
        padding: 10px;
        padding-top: 5px;
        font-family: 'BosaNova';
        font-size: 24px;
        color: white;
        width: 240px;
        height: 38px;
        text-align: center;
        border-radius: 47px;
        cursor: pointer;
    }
    .button_subscribe:hover {
        background-color: #0066fe;
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
    h4 {
        margin-top: 0px;
        font-size: 20px;
        margin-bottom: 4px;
    }
    .ok_img {
        background: url('/assets/img/bonus/ok.png') 0px 0px no-repeat;
        width: 57px;
        height: 57px;
        position: absolute;
        margin-top: 135px;
    }
    .bonus_box_wrapper {
        padding: 20px;
        background: linear-gradient(45deg, #ffbc00, #ff0063);
        color: #FFFFFF;
        border-radius: 5px;
        margin-top: 15px;
    }
    .bonus_box_wrapper .bonus_box {
        margin: 0 auto;
        width: 630px;
        padding-left: 140px;
        box-sizing: border-box;
        font-size: 14px;
        background: url('/assets/img/bonus/gift-icon.png') 5px 50% no-repeat;
        background-size: 115px 115px;
        text-shadow: none;
        text-align: justify;
    }

    /* Условия получения бонусов */
    .block_condition {
        margin-left: -17px;
        position: absolute;
    }
    .bonus_condition_header {
        color: #4c5c5d;
        text-align: center;
        padding: 10px 0 2px 0;
        margin-bottom: 5px;
        font-weight: bolder;
    }
    table {
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
      margin-left: 3px;
    margin-top: 5px;
}
table * {
  position: relative;
}
table td, table th {
  padding-left: 8px;
}
table thead tr {
  height: 50px;
  background: #464648;
}
table tbody tr {
  height: 50px;
}
table tbody tr:last-child {
  border: 0;
}
table td, table th {
  text-align: left;
}
table td.l, table th.l {
  text-align: right;
}
table td.c, table th.c {
  text-align: center;
}
table td.r, table th.r {
  text-align: center;
}


.table100-head th{
  font-size: 18px;
  color: #fff;
  line-height: 1.2;
  font-weight: unset;
    padding-left: 12px;
}

tbody tr:nth-child(even) {
  background-color: #f5f5f5;
}

tbody tr {
  font-size: 14px;
  color: #808080;
  line-height: 1.2;
  font-weight: unset;
}

tbody tr:hover {
  color: #555555;
  background-color: #f5f5f5;
  cursor: pointer;
}

.column1 {
    width: 168px;
}
.column3body {
    width: 111px;
}
.column3 {
    width: 111px;
    font-size: 19px;
    padding-top: 8px;
}
</style>

