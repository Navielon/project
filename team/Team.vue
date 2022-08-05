<template>
<div>
    <img src="/assets/img/team/team.png" class="noselect header_img" draggable="false"/>

    <center>
        <table class="modern">
            <thead>
                <tr>
                <th style="width: 10%;">Ник</th>
                <th> </th>
                <th style="width: 68%;">Должность</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <center>                   
                            <div class="av-timeratew" :style="'background-image: url(' + API + 'avatar/MrYarik666);'"></div>
                        </center>
                    </td>
                    <td>
                        <div class="padding-text">
                            <router-link class="top_user_link" to="/user/MrYarik666">MrYarik666</router-link>
                        </div>
                    </td>
                    <td>
                        <div class="padding-text" style="color: #443535">Основатель проекта | Java, JS программист</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <center>                   
                            <div class="av-timeratew" :style="'background-image: url(' + API + 'avatar/Tanker);'"></div>
                        </center>
                    </td>
                    <td>
                        <div class="padding-text">
                            <router-link class="top_user_link" to="/user/Tanker">Tanker</router-link>
                        </div>
                    </td>
                    <td>
                        <div class="padding-text" style="color: #443535">Куратор проекта | Геймдизайнер</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <center>                   
                            <div class="av-timeratew" :style="'background-image: url(' + API + 'avatar/Evariste);'"></div>
                        </center>
                    </td>
                    <td>
                        <div class="padding-text">
                            <router-link class="top_user_link" to="/user/Evariste">Evariste</router-link>
                        </div>
                    </td>
                    <td>
                        <div class="padding-text" style="color: #443535">Графический дизайнер | UI/UX-дизайнер</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>

    <div class="promo_section">
        <div class="wrapper">
            <div style="align-items: center;
    display: flex;">
                <div style="width: 50%;">
                    <h2>Набор хелперов</h2>
                    <p>Нами был запущен набор хелперов на все сервера, оформите Вашу заявку и присоединяйтесь к нам!</p>
                </div>
                
                <div style="width: 50%;">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5urvUxSU1vsBlEVwyP-FwV8E1FekyHT7WdWIQdf4VU29z7w/viewform" target="_blank" class="promo_box" style="display: flex;     margin-top: -20px;
    flex-wrap: wrap;
    margin-right: 15px;
    transition: 0.1s;">
                        <div class="col-12 col-sm-7">
                            <h3>Ждём Ваших заявок!</h3>
                            <p>Примкните к стражам порядка на любимом сервере прямо сейчас!</p>
                        </div>
                        <div style="    margin-left: 74px;">
                            <div class="alt_button">Продолжить</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <center v-for="(server, index) in servers" :key="index">
        <div class="server_name">Команда сервера {{getFormatName(index)}}</div> 

        <table class="modern">
            <thead>
                <tr>
                <th style="width: 10%;">Ник</th>
                <th> </th>
                <th style="width: 22%;">Сегодня играл</th>
                <th style="width: 18%;">За месяц</th>
                <th style="width: 19%;" v-if="canAdd(index, '')"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(player, indx) in server" v-bind:key="indx">
                    <td>
                        <center>                   
                            <div class="av-timeratew" :style="'background-image: url(' + API + 'avatar/' + player.login + ');'"></div>
                        </center>
                    </td>
                    <td>
                        <div class="padding-text" style="margin-top: 4px;">
                            <router-link class="top_user_link" :to="'/user/' + player.login">{{player.login}}</router-link>
                            <div>{{player.permission.translated}}</div>
                        </div>
                    </td>
                    <td>
                        <div class="time-text" style="margin-top: 8px;">
                            <b>{{getFormatTime(player.timeDay)}}</b>
                            <small class="small-time">{{player.timeDay}} мин</small>
                        </div>
                    </td>
                    <td>
                        <div class="time-text" style="margin-top: 8px;">
                            <b>{{getFormatTime(player.timeMonth)}}</b>
                            <small class="small-time">{{player.timeMonth}} мин</small>
                        </div>
                    </td>
                    <td v-if="canAddHelper">
                        <div v-if="canAdd(index, player.login)">
                            <div class="tooltip" style="margin-top: 6px; cursor: pointer;">
                                <i class="fa fa-arrow-up" @click="boost(index, player.login, 1)" style="font-size: 30px;color: #6caf03; margin-inline-end: 7px;"></i>
                                <span class="tooltiptext noselect" style="width: 230px;margin-left: -117px;;">
                                    Повысить в должности
                                </span>
                            </div>
                            <div class="tooltip" style="margin-top: 6px; cursor: pointer;">
                                <i class="fa fa-arrow-down" @click="boost(index, player.login, -1)" style="font-size: 30px;color: rgb(3, 135, 175); margin-inline-end: 7px;"></i>
                                <span class="tooltiptext noselect" style="width: 120px; margin-left: -64px;">
                                    Понизить
                                </span>
                            </div>
                            <div class="tooltip" style="margin-top: 6px; cursor: pointer;">
                                <i class="fa fa-times" @click="removeTeamUser(index, player.login)" style="font-size: 30px;color: rgb(191, 0, 0); margin-inline-end: 7px;"></i>
                                <span class="tooltiptext noselect" style="width: 120px; margin-left: -64px;">
                                    Снять
                                </span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>

    <center v-if="canAddHelper">
        <div class="server_name">Добавить нового хелпера в команду</div> <br/> 
        <input class="text_input" type="text" v-model="helper" placeholder="Никнейм"> <br/>
        <select id="server_select" name="server" class="form-control" style="margin-top: 10px;" v-model="selectServer">
            <option :selected="true" value="null" disabled>Выберите сервер</option>
            <option v-for="server in addServers" v-bind:key="server.server + server.num" v-bind:value="getServer(server)">{{server.name}}</option>
        </select>

        <div class="buy_btn noselect" v-on:click="addHelper()" v-if="selectServer != null">
            Выдать привилегию
        </div>
    </center>
    <br>
</div>
</template>

<script>
    import { EventBus, API } from '@/main.js';
    export default { 
        name: 'Team',
        data () {
            return {
                servers: null,
                canAddHelper: false,
                helper: '',
                addServers: [],
                selectServer: null
            }
        },
        methods: {
            canAdd(serverLine, login) {
                if(!this.isAuthenticated) {
                    return false;
                }
                if(login == this.auth.login) {
                    return false;
                }
                var spl = serverLine.split(':');
                for(var i in this.addServers) {
                    var serverData = this.addServers[i];
                    if(serverData.server == spl[0] && serverData.num == spl[1]) {
                        return true;
                    }
                }

                return false;
            },
            boost(serverLine, login, b) {
                var splits = serverLine.split(':');
                var server = splits[0];
                var id = splits[1];
                this.$root.$emit('send_websocket', `{"packet":"team.boostUser","data":{"server":"${server}","id":"${id}","helper":"${login}","boost":"${b}"}}`);
            },
            removeTeamUser(serverLine, login) {
                var splits = serverLine.split(':');
                var server = splits[0];
                var id = splits[1];
                this.$root.$emit('send_websocket', `{"packet":"team.removeUser","data":{"server":"${server}","id":"${id}","helper":"${login}"}}`);
            },
            addHelper() {
                var splits = this.selectServer.split(':', 2);
                var server = splits[0];
                var id = splits[1];
                this.$root.$emit('send_websocket', `{"packet":"team.addHelper","data":{"server":"${server}","id":"${id}","helper":"${this.helper}"}}`);
            },
            getServer(server) {
                return server.server + ':' + server.num;
            },
            getHours(minutes) {
                return (minutes / 60).toFixed(2);
            },
            getFormatTime(minutes) {
                var hours=Math.floor(minutes/60);
                minutes%=60;

                var day=Math.floor(hours/24);
                hours%=24;
                if(day > 0) {
                    return (day > 0 ? (day + 'дн. ') : '') + (hours > 0 ? (hours + 'ч. ') : (minutes > 0 ? (minutes + 'м. ') : ''));
                }
                return (day > 0 ? (day + 'дн. ') : '') + (hours > 0 ? (hours + 'ч. ') : '') + (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''));
            },
            getFormatName(server) {
                var spl = server.split(':');
                return spl[2] + " #" + spl[1];
            },
            getFormatUrl(server, user) {
                var spl = server.split(':');
                return "/team/" + spl[0] + "/" + spl[1] + "/" + user;
            },
            listener(packet, data) {
                if(packet === 'team.addHelper' || packet === 'team.boostUser' || packet === 'team.removeUser') {
                    if (data.type === 'success') {
                        this.$root.$emit('send_websocket', `{"packet":"team.load","data":{}}`);
                    }
                }
                
                if(packet === 'team.load') {
                    if (data.type === 'team') {
                        this.servers = data.players;
                        this.canAddHelper = data.canAddHelper;
                        this.addServers = data.servers;
                    } 
                }
            }
        },
        mounted() {
            this.$root.$emit('send_websocket', `{"packet":"team.load","data":{}}`);
        },
        created() {
            EventBus.$on('onProcessPacket', this.listener);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
        },
        computed: {
            auth() {
                return this.$store.state.auth
            },
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
        	    return this.$store.state.auth.pendingLogin2FA
            },
            API() {
                return API;
            }
        }
    }
</script>

<style scoped>
    input {
        height: 48px;
        color: #555758;
        font-size: 20px;
        background: #fdefd8;
        border: none;
        padding: 15px;
        padding-top: 17px;
        width: 256px;
        border-radius: 50px;
        font-weight: 600;
        box-shadow: 0 15px 45px rgba(0, 0, 0, .05);
        outline: none;
    }

    select {
        width: 250px;
        height: 32px;
        background: #555;
        background: #e8cda2 !important;
        box-shadow: none !important;
        border: none !important;
        display: inline-block;
        padding: 0 10px !important;
        color: #90573f !important;
        font-size: 17px !important;
        text-align: center;
        margin-bottom: 10px;
        font-weight: bold;
        letter-spacing: 0.7px;
        outline: none;
        font-family: "NeoSansBold";
    }

    .buy_btn {
        box-shadow: 0px 1px 0px rgb(21, 117, 29)!important;
        background: #2ba52c;
        border-radius: 4px !important;
        color: #fff !important;
        padding: 8px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        margin-left: 9px;
        cursor: pointer;
        height: 35px;
        width: 350px;
        margin-top: 10px;
    }

    .buy_btn:hover {
        background: #2ba52cba !important;
        text-decoration: none;
    }
.promo_section {
	margin: 0 0 -25px;
    padding: 20px 0 0px;
	/*background: url(/assets/img/team_backdrop.svg) no-repeat center 99%, linear-gradient(240deg, hsla(0, 0%, 100%, .1), transparent 25%, hsla(0, 0%, 100%, .1) 0, transparent 50%, hsla(0, 0%, 100%, .1) 0, transparent 75%, hsla(0, 0%, 100%, .1) 0, transparent), #6977fa linear-gradient(90deg, #ff4161, #fac269 85%);
	background-size: 1199px 300px;*/
    height: 260px;
    margin-left: -34px;
    width: 709px;
    min-width: 709px;
}

.promo_section h2 {
	margin: 0 0 20px;
	color: #f54646;
	font-size: 41px;
    text-align: center;
	line-height: 1
}

.promo_section p {
	color: #423535;
	font-size: 20px;
	line-height: 23px;
    text-align: center;
}

.promo_box {
	position: relative;
	padding: 18px 15px;
	border-radius: 6px;
	background: #ffffffd9;
	top: 0;
	box-shadow: 0 2px 3px 0 rgba(19, 52, 110, .12);
	text-decoration: none
}

.promo_box:hover {
	top: -8px;
    background: #ffffff8c;
	box-shadow: 0 3px 6px 0 rgba(19, 52, 110, .08), 0 6px 18px 0 rgba(19, 52, 110, .08)
}

.promo_box:hover h3 {
	color: #5b5f83;
}

.promo_box:hover .alt_button {
	background: #fa6969;
	color: #fff
}

.promo_box .col {
	padding: 0
}

.promo_box h3 {
	margin: 0 0 8px;
	font-size: 22px;
	font-weight: 700;
	color: #333;
    text-align: center;
}

.promo_box p {
	font-size: 14.5px;
	line-height: 1.6;
	color: #717597
}

.promo_box .alt_button {
	display: inline-block;
	padding: 14px 28px;
	border: 1px solid #fa6969;
	border-radius: 6px;
	color: #fa6969;
	box-shadow: 0 3px 6px 0 rgba(54, 58, 86, .12)
}

.footer_section {
	padding: 0 0 96px
}

.link {
	display: inline-block;
	font-weight: 700;
	font-size: 20px;
	color: #35435b;
	opacity: 1;
	text-decoration: none
}

.link i {
	line-height: 24px;
	font-size: 21px;
	opacity: .5
}

.link i.fas {
	font-size: 18px
}

.link:not(:last-of-type) {
	margin-right: 30px
}

.link:hover {
	opacity: .7
}

.sub_line {
	padding: 10px 0 0
}

.sub_line p {
	font-size: 16px;
	color: #919bba
}

.sub_line p:last-child {
	margin-top: 25px
}

.sub_line a {
	display: inline-block;
	color: inherit;
	margin: 0 15px 0 0;
	transition: all .2s
}

.sub_line a:hover {
	opacity: .7;
	text-decoration: none
}

.banner {
	display: inline-block;
	background: hsla(0, 0%, 100%, .1);
	border: 1px solid rgba(193, 181, 238, .4);
	font-size: 0;
	opacity: .8
}

.banner:hover {
	opacity: 1
}

@media (max-width:992px) {
	.link {
		margin: 0 10px!important
	}
}

@media (max-width:576px) {
	.promo_section h2 {
		font-size: 42px
	}
	.promo_section p {
		font-size: 20px;
		line-height: 32px
	}
}
    .server_name {
        color: #810101;
        background: linear-gradient(45deg, #810101, #e00);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 25px;
        font-weight: bolder;
        font-family: 'Ubuntu';
    }

    .user_info {
        position: absolute;
        width: 44px; 
        transition: 0.5s;
        opacity: 0.8;
        cursor: pointer;
    }

    .user_info:hover {
        filter: drop-shadow(0px 2px 2px #222222bf);
        opacity: 1;
    }

    .padding-text {
        margin-top: 12px;
    }

    .time-text {
        font-size: 15px;
    }

    .small-time {
        color: rgb(183, 169, 169);
        display: block;
        margin: 2px auto;
        font-weight: bold;
    }

    small {
        font-size: 11px;
    }

    table.modern {
        width: 100%;
        margin-bottom: 15px;
        border-spacing: 0px 1px;
    }

    table.modern td,
    table.modern th {
        padding: 8px 10px;
        vertical-align: top
    }

    table.modern th {
        padding-top: 4px;
        padding-bottom: 4px;
        font-size: 14px;
        text-align: center;
        border-bottom: 3px solid #fd6982;
        font-weight: 400;
        text-align: left;
        text-transform: uppercase
    }

    table.modern td {
        border-bottom: 0px solid #F0F0F0
    }

    table.modern td {
        background-color: #f9f9f973;
        border-color: #EAEAEA
    }

    .av-timeratew {
        width: 36px;
        height: 36px;
        background-size: cover;
        border-radius: 2px;
        padding: 2px 3px;
        transform: skew(-.18rad);
        background-color: #FFF;
        height: 42px;
        width: 42px;
    }
</style>

