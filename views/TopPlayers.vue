<template>
<div>
    <img src="/assets/img/pages/top.png" class="noselect header_img" draggable="false"/>
    <div class="ui-box green">
        <div style="margin-left: 36px;">
            <div style="font-size: 19px;">
                <b style="background: linear-gradient(45deg, #15620b, #1dbf09); -webkit-background-clip: text;-webkit-text-fill-color: transparent;">Топ богачей - Игровая валюта</b>
            </div>
            <div style="margin-top: 2px;border-bottom-style: dotted;width: 165px; cursor: help; margin-left: 88px;color: #007bff;">
                <router-link to="/money" style="text-decoration: none;">
                    <center>Как заработать деньги?</center>
                </router-link>
            </div>
        </div>

        <div style="float: right; margin-top: -35px;">
            <form method="GET" name="playertop_server_form2">
                Сервер: 
                <span class="ui-selectbox-wrapper">
                    <select class="ui-select" name="server" @change="onChangeServerMoney()" v-model="serverMoney">
                        <option value="">Все серверы</option>
                        <option v-for="server in servers" v-bind:key="server.name" :value="server.server + ':' + server.num">{{server.name}}</option>
                    </select>
                    <span class="selectBox ui-selectbox-dropdown" title="" tabindex="0" style="min-width: 173px;">
                        <span class="selectBox-label">{{serverDisplayMoney}}</span>
                    </span>
                </span>
            </form>
        </div>
    </div>
    <center>
        <table class="modern playertop_table" style="border-spacing: 0px 1px;">
            <thead>
                <tr>
                <th style="width: 8%;">Место</th>
                <th style="width: 10%;">Ник</th>
                <th> </th>
                <th style="width: 29%;">Сервер</th>
                <th style="width: 15%;">Деньги</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(player, index) in topMoney" v-bind:key="index">
                    <td>
                        <div style="font-size: 20px; margin-top: 11px;">
                            <center>{{index}}</center>
                        </div>
                    </td>
                    <td>
                        <center>
                            <div class="av-timeratew" :style="'background-image: url(' + API + 'avatar/' + player.login + ');'"></div>
                        </center>
                    </td>
                    <td>
                        <div class="padding-text"><router-link class="top_user_link" :to="'/user/' + player.login">{{player.login}}</router-link></div>
                    </td>
                    <td>
                        <div class="padding-text" style="color: #443535">{{player.server}} #{{player.server_num}}</div>
                    </td>
                    <td>
                        <div class="padding-text">{{player.money}}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>
    <br>
    <div class="ui-box green">
        <div style="margin-left: 36px;">
            <div style="font-size: 19px;">
                <b style="background: linear-gradient(45deg, #15620b, #1dbf09); -webkit-background-clip: text;-webkit-text-fill-color: transparent;">Топ голосующих</b>
            </div>
            <div style="margin-top: 2px;border-bottom-style: dotted;width: 63px;cursor: help;margin-left: 65px; color: #007bff;">
                <router-link to="/votes" style="text-decoration: none;">
                    <center>Награды</center>
                </router-link>
            </div>
        </div>

        <div style="float: right; margin-top: -35px;">
            <router-link to="/votes">
                <div class="button_vote noselect">
                    Голосовать за проект
                </div>
            </router-link>
        </div>
    </div>
    <center>
        <table class="modern playertop_table" style="border-spacing: 0px 1px;">
            <thead>
                <tr>
                <th style="width: 8%;">Место</th>
                <th style="width: 10%;">Ник</th>
                <th> </th>
                <th style="width: 18%;">Голосов</th>
                <th style="width: 20%;">Время</th>
                </tr>
            </thead>
                <tbody>
                    <tr v-for="(player, index) in topVotes" v-bind:key="index">
                        <td>
                            <div v-if="index == 1" style="position: absolute;margin-left: 4px;">
                                <div class="tooltip">
                                    <img style="width: 43px;" src="/assets/img/top/1.png">
                                    <span class="tooltiptext noselect" style="width: 210px;margin-left: -105px;">
                                        Вознаграждение 300 монет
                                    </span>
                                </div>
                            </div>
                            <div v-else-if="index == 2" style="position: absolute;margin-left: 4px;">
                                <div class="tooltip">
                                    <img style="width: 43px;" src="/assets/img/top/2.png">
                                    <span class="tooltiptext noselect" style="width: 210px;margin-left: -105px;">
                                        Вознаграждение 200 монет
                                    </span>
                                </div>
                            </div>
                            <div v-else-if="index == 3" style="position: absolute;margin-left: 4px;">
                                <div class="tooltip">
                                    <img style="width: 43px;" src="/assets/img/top/3.png">
                                    <span class="tooltiptext noselect" style="width: 210px;margin-left: -105px;">
                                        Вознаграждение 100 монет
                                    </span>
                                </div>
                            </div>
                            <div v-else style="font-size: 20px; margin-top: 11px;">
                                <center>{{index}}</center>
                            </div>
                        </td>
                        <td>
                            <center>                   
                                <div class="av-timeratew" :style="'background-image: url(' + API + 'avatar/' + player.login + ');'"></div>
                            </center>
                        </td>
                        <td>
                            <div class="padding-text">
                                <router-link v-if="index == 1" style="background: linear-gradient(45deg, #810101, #e00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 16px;" class="top_user_link" :to="'/user/' + player.login"><b>{{player.login}}</b></router-link>
                                <router-link v-else-if="index == 2" style="background: linear-gradient(45deg, #ff6a00, #eea500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 16px;" class="top_user_link" :to="'/user/' + player.login"><b>{{player.login}}</b></router-link>
                                <router-link v-else-if="index == 3" style="background: linear-gradient(45deg, #15620b, #23d80d); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 16px;" class="top_user_link" :to="'/user/' + player.login"><b>{{player.login}}</b></router-link>
                                <router-link v-else class="top_user_link" :to="'/user/' + player.login">{{player.login}}</router-link>
                            </div>
                        </td>
                        <td>
                            <div class="padding-text">
                                <div class="tooltip">
                                    {{player.votes}}
                                    <span class="tooltiptext noselect" style="width: 230px;margin-left: -120px;">
                                        <div v-for="(j, index) in player.json" :key="j.lastVote + index">
                                            {{index}} - {{j.votes}}
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="padding-text">
                                <div class="tooltip">
                                    {{getFormatTimeVotes(player.lastVote)}}
                                    <span class="tooltiptext noselect" style="width: 230px;margin-left: -120px;">
                                        <div v-for="(j, index) in player.json" :key="j.lastVote + index">
                                            {{index}} - {{getFormatTimeVotes(j.lastVote)}}
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
        </table>
    </center>
    <br>
    <div class="ui-box green">
        <div style="margin-left: 36px;">
            <div style="font-size: 19px;">
                <b style="background: linear-gradient(45deg, #15620b, #1dbf09); -webkit-background-clip: text;-webkit-text-fill-color: transparent;">Топ играющих</b>
            </div>
            <div style="margin-top: 2px;border-bottom-style: dotted;width: 63px;cursor: help;margin-left: 50px;color: #007bff;">
                <router-link to="/play_reward" style="text-decoration: none;">
                    <center>Награды</center>
                </router-link>
            </div>
        </div>

        <div style="float: right; margin-top: -35px;">
            <form method="GET" name="playertop_server_form">
                <input type="hidden" name="by" value="playtime">
                Сервер: 
                <span class="ui-selectbox-wrapper">
                    <select class="ui-select" name="server" @change="onChangeServerTime()" v-model="serverTime">
                        <option value="">Все серверы</option>
                        <option v-for="server in servers" v-bind:key="server.name" :value="server.server + ':' + server.num">{{server.name}}</option>
                    </select>
                    <span class="selectBox ui-selectbox-dropdown" title="" tabindex="0" style="min-width: 173px;">
                        <span class="selectBox-label">{{serverDisplayTime}}</span>
                    </span>
                </span>
            </form>
        </div>
    </div>
    <center>
        <table class="modern playertop_table" style="border-spacing: 0px 1px;">
            <thead>
                <tr>
                <th style="width: 8%;">Место</th>
                <th style="width: 10%;">Ник</th>
                <th> </th>
                <th style="width: 29%;">Сервер</th>
                <th style="width: 24%;">Время</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(player, index) in topTime" :key="index">
                    <td>
                        <div v-if="index == 1 && serverTime == ''" style="position: absolute;margin-left: 4px;">
                            <div class="tooltip">
                                <img style="width: 43px;" src="/assets/img/top/1.png">
                                <span class="tooltiptext noselect" style="width: 210px;margin-left: -105px;">
                                    Вознаграждение 300 монет
                                </span>
                            </div>
                        </div>
                        <div v-else-if="index == 2 && serverTime == ''" style="position: absolute;margin-left: 4px;">
                            <div class="tooltip">
                                <img style="width: 43px;" src="/assets/img/top/2.png">
                                <span class="tooltiptext noselect" style="width: 210px;margin-left: -105px;">
                                    Вознаграждение 200 монет
                                </span>
                            </div>
                        </div>
                        <div v-else-if="index == 3 && serverTime == ''" style="position: absolute;margin-left: 4px;">
                            <div class="tooltip">
                                <img style="width: 43px;" src="/assets/img/top/3.png">
                                <span class="tooltiptext noselect" style="width: 210px;margin-left: -105px;">
                                    Вознаграждение 100 монет
                                </span>
                            </div>
                        </div>
                        <div v-else style="font-size: 20px; margin-top: 11px;">
                            <center>{{index}}</center>
                        </div>
                    </td>
                    <td>
                        <center>                   
                            <div class="av-timeratew" :style="'background-image: url(' + API + 'avatar/' + player.login + ');'"></div>
                        </center>
                    </td>
                    <td>
                        <div class="padding-text">
                            <router-link v-if="index == 1 && serverTime == ''" style="background: linear-gradient(45deg, #810101, #e00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 16px;" class="top_user_link" :to="'/user/' + player.login"><b>{{player.login}}</b></router-link>
                            <router-link v-else-if="index == 2 && serverTime == ''" style="background: linear-gradient(45deg, #ff6a00, #eea500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 16px;" class="top_user_link" :to="'/user/' + player.login"><b>{{player.login}}</b></router-link>
                            <router-link v-else-if="index == 3 && serverTime == ''" style="background: linear-gradient(45deg, #15620b, #23d80d); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 16px;" class="top_user_link" :to="'/user/' + player.login"><b>{{player.login}}</b></router-link>
                            <router-link v-else class="top_user_link" :to="'/user/' + player.login">{{player.login}}</router-link>
                        </div>
                    </td>
                    <td>
                        <div class="padding-text" style="color: #443535">{{player.server}} #{{player.server_num}}</div>
                    </td>
                    <td>
                        <div class="time-text" style="margin-top: 8px;">
                            <b>{{getFormatTime(player.min)}}</b>
                            <small class="small-time">{{player.min}} мин / {{getHours(player.min)}} ч</small>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>
    <br>
</div>
</template>

<script>
    import { EventBus, API } from '@/main.js'; 
    export default {  
        name: 'TopPlayers',
        data () {
            return {
                servers: null,
                topMoney: null,
                serverMoney: "",
                serverDisplayMoney: "",

                topTime: null,
                serverTime: "",
                serverDisplayTime: "",

                topVotes: null
            }
        },
        computed: {
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
        	    return this.$store.state.auth.pendingLogin2FA
            }, 
            API() {
                return API;
            }
        },
        methods: {
            getHours(minutes) {
                return (minutes / 60).toFixed(2);
            },
            getFormatTimeVotes(time) {
                var date = new Date().getTime();

                var minutes = ((date - time) / 1000 / 60).toFixed(0);
                var hours=Math.floor(minutes/60);
                minutes%=60;

                var day=Math.floor(hours/24);
                hours%=24;
                var str = (day > 0 ? (day + 'дн. ') : (hours > 0 ? (hours + 'ч. ') : (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''))));
                if(str == '') {
                    return 'Только что';
                }
                return str + 'назад'
            },
            getFormatTime(minutes) {
                var hours=Math.floor(minutes/60);
                minutes%=60;

                var day=Math.floor(hours/24);
                hours%=24;
                return (day > 0 ? (day + 'дн. ') : '') + (hours > 0 ? (hours + 'ч. ') : '') + (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''));
            },
            onChangeServerMoney() {
                if(this.serverMoney == "") {
                    this.serverDisplayMoney = "Все серверы";
                    this.$root.$emit('send_websocket', `{"packet":"top.load","data":{"type":0}}`);
                } else {
                    for(var srv in this.servers) {
                        var server = this.servers[srv];
                        if(server.server + ":" + server.num == this.serverMoney) {
                            this.serverDisplayMoney = server.name;
                            this.$root.$emit('send_websocket', `{"packet":"top.load","data":{"type":0, "server":"${server.server}", "id":"${server.num}"}}`);
                            break;
                        }
                    }
                }
            },
            onChangeServerTime() {
                if(this.serverTime == "") {
                    this.serverDisplayTime = "Все серверы";
                    this.$root.$emit('send_websocket', `{"packet":"top.load","data":{"type":2}}`);
                } else {
                    for(var srv in this.servers) {
                        var server = this.servers[srv];
                        if(server.server + ":" + server.num == this.serverTime) {
                            this.serverDisplayTime = server.name;
                            this.$root.$emit('send_websocket', `{"packet":"top.load","data":{"type":2, "server":"${server.server}", "id":"${server.num}"}}`);
                            break;
                        }
                    }
                }
            },
            listener(packet, data) {
                if(packet === 'top.load') {
                    if (data.type === 'load') {
                        this.servers = data.servers;
                    } 
                    if (data.type === 'top_money') {
                        this.topMoney = data.players;
                    } 
                    if (data.type === 'top_votes') {
                        this.topVotes = data.players;
                    } 
                    if (data.type === 'top_time') {
                        this.topTime = data.players;
                    } 
                }
            }
        },
        mounted() {
            this.onChangeServerMoney();
            this.onChangeServerTime();
            this.$root.$emit('send_websocket', `{"packet":"top.load","data":{"type":-1}}`);
            this.$root.$emit('send_websocket', `{"packet":"top.load","data":{"type":1}}`);
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
    .button_vote {
        color: white;
        text-decoration: none;
        padding: 7px;
        border-radius: 3px;
        background: rgb(78, 130, 186);
	    box-shadow: 0 -3px #29537a inset;
        transition: 0.2s;
        font-family: "NeoSansBold";
        font-size: 16px;
        margin-top: -3px;
        text-transform: uppercase;
    }
    .button_vote:hover { 
        background: #29537a;
    }

    .ui-selectbox-wrapper{position:relative;display:inline-block}.ui-selectbox-wrapper>select{position:absolute;top:0;left:0;bottom:0;width:100% !important;height:auto !important;z-index:5;opacity:0;cursor:pointer}.ui-dialog .ui-selectbox-wrapper>select{z-index:2000}.ui-selectbox-dropdown{display:inline-block;background:#fff;color:#7F8C8D;font-size:13px;font-weight:400;padding:5px
10px;padding-right:17px;cursor:pointer;border:1px
solid #D7D7D7;border-radius:2px;position:relative;text-align:left;min-width:100px;z-index:1;box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;vertical-align:baseline}.ui-selectbox-dropdown:hover{border-color:#C6C6C6}.ui-selectbox-wrapper>select:focus+.ui-selectbox-dropdown{color:#444;border-color:#3498DB;box-shadow:0 0 3px rgba(52,152,219,0.5)}.ui-selectbox-wrapper>select:disabled{cursor:default}.ui-selectbox-wrapper>select:disabled+.ui-selectbox-dropdown{color:#AAAFAF;border-color:#D7D7D7}.ui-selectbox-wrapper>select:disabled+.ui-selectbox-dropdown:before{color:#C1C4C4}

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
        border-bottom: 3px solid #6DB201;
        font-weight: 400;
        text-align: left;
        text-transform: uppercase
    }

    table.modern td {
        border-bottom: 0px solid #F0F0F0
    }

    table.modern td {
        background-color: #F9F9F9;
        border-color: #EAEAEA
    }

    .ui-box.red {
        color: #D85030;
        background-color: #FFF1F0;
        border-color: #F4C1B6;
    }

    .ui-box.green {
        color: #659F13;
        background-color: #F2FAE3;
        border-color: #C8DFA5;
    }

    .ui-box {
        margin: 4px 0;
        background: #EBF7FD;
        padding: 8px 10px;
        color: #2D7091;
        font-size: 13px;
        border-left: 4px solid #B2CFDD;
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

