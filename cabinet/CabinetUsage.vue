<template>
	<div>
		<div class="panel-bg" style="padding-bottom: 0px;" v-if="chatServers != null">
			<div class="panel-header" style="margin-bottom:0px">
                Настройки игрового чата
            </div>
            <div class="chat" v-if="selectServerChat == null">
                <center v-if="Object.keys(chatServers).length > 0">
                    <div class="info" style="padding-top: 87px;">Выберите сервер</div>
                    <select id="server_select" name="server" style="margin-top: 7px" @change="onChangeServerChat()" v-model="selectServerChat">
                        <option :selected="true" value="null" disabled>Выберите сервер</option>
                        <option v-for="server in chatServers" v-bind:key="server.server + server.num" v-bind:value="getServer(server)">{{server.name}}</option>
                    </select>
                </center>
                <center v-else style="height: 100%; backdrop-filter: blur(4px); filter: drop-shadow(0px 2px 2px #222222bf);">
                    <img src="/assets/img/cabinet/chat/lock.png" class="noselect" />
                    <div class="info noselect" style="padding-top: 7px; font-family: NeoSans;font-size: 20px; letter-spacing: 0px;width: 97%;position: absolute; padding-left: 3%;color: wheat;">
                        Чтобы получить возможность устанавливать и настраивать Ваш личный префикс или менять цвет никнейма,
                        Вам необходима привилегия Ultra или выше, или возможность Изменение префикса.
                    </div>
                </center>
            </div>
            <div class="chat" v-if="selectServerChat != null">
                <div class="text">
                    <center>
                        <select id="server_select" name="server" style="margin-top: 37px" @change="onChangeServerChat()" v-model="selectServerChat">
                            <option :selected="true" value="null" disabled>Выберите сервер</option>
                            <option v-for="server in chatServers" v-bind:key="server.server + server.num" v-bind:value="getServer(server)">{{server.name}}</option>
                        </select>

                        <div v-if="loadChat">
                            <div style="margin-top: 15px;">
                                <img draggable=false v-for="tab in tabs" :key="tab" @click="currentTab = tab" :src="'/assets/img/cabinet/chat/' + tab + '.png'" :class="{tab: true, noselect: true, tab_active: currentTab == tab}"/>
                            </div>

                            <div class="msg">
                                <div class="icon">
                                    <img draggable=false :src="'/assets/img/cabinet/chat/rectangle_' + currentTab + '.png'" style="width: 60px;">
                                    <img draggable=false v-bind:src="auth.avatar" style="width: 54px; margin-left: 3px; margin-top: 3px;">
                                    <img draggable=false :src="'/assets/img/cabinet/chat/icon_' + currentTab + '.png'" style="width: 24px; margin-left: -10px; margin-top: -10px;">
                                </div>
                                <div class="prefix">
                                    <font color="#b1b1b1">[</font><span contentEditable="true" @click="editPrefix = true" ref="prefix" v-html="prefixHtml" :class="{edit: editPrefix != null && editPrefix == true}"/><font color="#b1b1b1">] </font>
                                    <span :class="{edit: editPrefix != null && editPrefix == false}" :style="{color: colorUser, cursor: 'pointer'}" @click="editPrefix = false">
                                        {{auth.login}}
                                    </span>
                                </div>
                                <div class="love" >
                                    Я люблю LoliLand!
                                </div>
                            </div>
                            <div style="clear: both" />
                            <button class="btn-drop" v-on:click.prevent="colored()">Раскрасить</button>
                        </div>
                        <div v-else-if="loadChat != null">
                            <div class="lds-ring" style="margin-left: 0px;"><div></div><div></div><div></div><div></div></div>
                            <div class="loading-text" style="color: white;">Загрузка...</div>
                        </div>
                    </center>
                </div>
                <div class="colorpicker" v-if="editPrefix == null">
                    <div class="ui-box green" style="width: 94%;margin-top: 50px;">
                        <b>Примечание:</b>
                        <div>
                            - Для редактирования никнейма нажмите на него и выберите цвет.
                        </div>
                        <div>
                            - Для редактирования префикса выделите нужную область и выберите цвет.
                        </div>
                        <div>
                            - Вы можете написать свой префикс.
                        </div>
                        <div>
                            - Нажимайте "Раскрасить", чтобы сохранить свои изменения!
                        </div>
                    </div>
                </div>
                <color-picker v-else-if="editPrefix == true" class="colorpicker" v-model="color"></color-picker>
                <color-picker v-else-if="editPrefix == false" class="colorpicker" v-model="colorUser"></color-picker>
            </div>
		</div>

        <div class="panel-bg" v-if="activeAility != null && Object.keys(activeAility).length > 0">
            <div class="panel-header">
                Ваши дополнительные возможности
            </div>
            <div v-for="(ability, index) in activeAility" v-bind:key="ability.buy + ability.end + ability.server + ability.serverNumber">
                <div class="permission" :style="'background-image:url(/assets/img/cabinet/cmd/' + ability.name + '.png)'">
                    <div class="permission-icon noselect">
                        <img draggable=false width=48px v-bind:src="'/assets/img/cabinet/cmd/' + ability.name +'_icon.png'" />
                    </div>
                    <div class="permission-content">
                        <div class="permission_info_title">
                            <div class="permission_a">{{getTranslate(ability.translate)}} | 
                                <div style="float: right; margin-left: 5px;font-size: 14px;margin-top: 2px;font-family: 'NeoSans';">
                                    {{ability.server}} #{{ability.serverNumber}}
                                </div>
                            </div>
                            <div style="float: right;display: flex;position: absolute; margin-left: 299px;margin-top: -13px;font-size: 15px;">
                                <div class="buy noselect" v-if="ability.end != -1" style="width: 160px;" v-on:click="extend('month', ability.system, ability.serverNumber, ability.name)">
                                    Продлить <br/> на 1 мес. за {{ability.priceMonth}} руб.
                                </div>
                                <div class="buy noselect" v-if="ability.end != -1" style="width: 109px;" v-on:click="extend('forever', ability.system, ability.serverNumber, ability.name)">
                                    Навсегда <br/> за {{ability.priceForever}} руб.
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 25px; position: absolute; width: 715px;">
                            <div class="permission_info_progressbar">
                                <div class="progress-bar" v-bind:style="{width: getPercent(ability.buy, ability.end)}"></div>
                            </div>
                        </div>
                        <div class="date">
                            От {{getDate("%d %f %y %H:%M", ability.buy)}} до {{getDate("%d %f %y %H:%M", ability.end)}}
                        </div>
                    </div>
                    <div style="clear:both"></div>
                </div>
                <div v-if="index != Object.keys(activeAility).length-1" style="margin-top: 9px;"/>
            </div>
        </div>

        <div class="panel-bg">
			<div class="panel-header" style="margin-bottom: 15px;">
                Покупка дополнительных возможностей
            </div>
            <div v-if="!loadAbilities">
                <div class="lds-ring" style="margin-top: 0px;"><div></div><div></div><div></div><div></div></div>
                <div class="loading-text">Загрузка...</div>
            </div>
            <div v-else>
                <center>
                    <div style="width: 640px">
                        <div :class="{'panel-cmd-active': true, noselect: true, selected_ability: currentAbility == a}" v-for="a in ability" :key="a.nmae" v-on:click="clickAbility(a)" :style="'background-image:url(/assets/img/cabinet/cmd/' + a.name + '.png)'">
                            <p>{{a.translate}}</p><span class="descy">{{a.desc}}</span>
                        </div>
                    </div>

                    <transition name="fade">
                        <div v-if="currentAbility != null && serversAility == null">
                            <div class="lds-ring" style="margin-left: 0px;margin-top: 10px;"><div></div><div></div><div></div><div></div></div>
                            <div class="loading-text">Загрузка...</div>
                        </div>
                        <div v-else-if="serversAility != null">
                            <div class="info" style="margin-top: 15px;">Выберите сервер:</div>

                            <select id="server_select" name="server" class="form-control" v-model="selectServerAvility">
                                <option :selected="true" value="null" disabled>Выберите сервер</option>
                                <option v-for="server in serversAility" v-bind:key="server.server + server.num" v-bind:value="getServer(server)">{{server.name}}</option>
                            </select>
                        </div>
                    </transition>
                    <transition name="fade">
                        <div v-if="selectServerAvility != null">
                            <div class="info" style="margin-top: 15px;margin-bottom: 0px;">Выберите время действия "{{currentAbility.translate}}":</div>
                            <label class="pure-material-slider" style="width: 540px;">
                                <input type="range" min="0" max="3" step="1" v-model="valueTime">
                            </label>
                            <div style="position: absolute; margin-top: -9px; font-family: 'NeoSans';">
                                1 месяц
                            </div>
                            <div style="position: absolute; margin-left: 547px; margin-top: -9px; font-family: 'NeoSans';">
                                Вечность
                            </div>
                            <div style="font-family: 'NeoSansBold';">
                                {{getTime()}}
                            </div>

                            <div class="buy_btn noselect" v-on:click="buy()">
                                Купить за {{getMoney()}} руб.
                            </div>
                        </div>
                    </transition>
                </center>
            </div>
		</div>

        <div class="panel-bg" v-if="activeAility != null && Object.keys(activeAility).length > 0">
            <div class="panel-header" style="margin-bottom: 15px;">
                Перенести возможность
            </div>

            <center>
                <div class="info">Выберите возможность:</div>
                <div style="margin-left: 13px; margin-top: -16px;">
                    <div class="ability noselect" style="margin-top: 11px;" v-for="group in activeAility" v-bind:key="group.buy + group.end + group.server + group.serverNumber">
                        <a v-on:click="funcSelectAbilityTransfer(group)">
                            <div v-bind:class="{ico: true, current_icon: selectAbilityTransfer != null && selectAbilityTransfer.name == group.name && selectAbilityTransfer.server == group.server && selectAbilityTransfer.serverNumber == group.serverNumber}">
                                <img draggable=false width=48px v-bind:src="'/assets/img/cabinet/cmd/' + group.name +'_icon.png'" />
                            </div>
                            <b v-bind:class="{current_text: selectAbilityTransfer != null && selectAbilityTransfer.name == group.name && selectAbilityTransfer.server == group.server && selectAbilityTransfer.serverNumber == group.serverNumber}">
                                {{(group.translate)}}
                                <br/>
                                {{group.server}} #{{group.serverNumber}}
                            </b>
                        </a>
                    </div>
                </div>

                <div v-if="selectAbilityTransfer != null && !isLoadServers">
                    <div class="lds-ring" style="margin-left: 0px;margin-top: 10px;"><div></div><div></div><div></div><div></div></div>
                    <div class="loading-text">Загрузка...</div>
                </div>

                <div v-else-if="isLoadServers">
                    <div class="info" style="margin-top: 15px;">Выберите сервер, где хотите стать круче:</div>

                    <select id="server_select" name="server" class="form-control" v-model="selectServerTransfer">
                        <option :selected="true" value="null" disabled>Выберите сервер</option>
                        <option v-for="server in serversTransfer" v-bind:key="server.server + server.num" v-bind:value="getServer(server)">{{server.name}}</option>
                    </select>

                    <div class="buy_btn noselect" v-on:click="transfer()" v-if="selectServerTransfer != null">
                        Перенести за {{moneyTransfer}} руб.
                    </div>
                </div>

            </center>
        </div>

        <div class="panel-bg" v-if="spawnServers != null">
			<div class="panel-header" style="margin-bottom: 15px;">
                Бесплатная телепортация на спавн
            </div>
            <center>
                <div style="font-size: 25px; font-family: 'NeoSansBold'; margin-bottom: -10px;">Вы застряли?</div>
                <p>Попали в ловушку и не можете выбраться самостоятельно? Выберите сервер и моментально телепортируйтесь на спавн по кнопке ниже!</p>

                <div class="info" style="margin-top: 25px;">Выберите сервер:</div>
                
                <select id="server_select" name="server" class="form-control" v-model="selectSpawn">
                    <option :selected="true" value="null" disabled>Выберите сервер</option>
                    <option v-for="server in spawnServers" v-bind:key="server.server + server.num" v-bind:value="getServer(server)">{{server.name}}</option>
                </select>

                <div class="buy_btn noselect" v-on:click="spawn()" v-if="selectSpawn != null">
                    Телепортироваться на спавн!
                </div>
            </center>
		</div>
	</div>
</template>

<script>
import * as main from '@/main.js';
import { EventBus } from '@/main.js';
import ColorPicker from 'vue-iro-color-picker';

export default {
    name: 'CabinetUsage',
    data () {
        return {
            loadAbilities: false,
            activeAility: null,
            ability: null,
            currentAbility: null,
            serversAility: null,
            valueTime: 0,
            selectServerAvility: null,

            isLoadServers: false,
            selectAbilityTransfer: null,
            selectServerTransfer: null,
            serversTransfer: null,
            moneyTransfer: null,

            loadChat: null,
            editPrefix: null,
            currentTab: 'GLOBAL',
            tabs: ["GLOBAL", "LOCAL", "TRADE"],
            selectServerChat: null,
            chatServers: null,
            color: '#FFFFFF',
            colorUser: '#FFFFFF',
            prefix: '',
            prefixHex: '',
            prefixHtml: '',
            
            spawnServers: null,
            selectSpawn: null
        }
    },
    components: {
        'color-picker': ColorPicker
    },
    computed: {
        auth() {
            return this.$store.state.auth
        }
    },
    methods: {
        spawn() {
            var splits = this.selectSpawn.split(':', 2);
            var server = splits[0];
            var id = splits[1];
            this.$root.$emit('send_websocket', `{"packet":"cabinet.sendSpawn","data":{"server":"${server}","id":"${id}"}}`);
        },
        onChangeServerChat() {
            this.loadChat = false;
            var splits = this.selectServerChat.split(':', 2);
            var server = splits[0];
            var id = splits[1];
            this.$root.$emit('send_websocket', `{"packet":"cabinet.loadChat","data":{"server":"${server}","id":"${id}"}}`);
        },
        colored() {
            document.execCommand('foreColor', false, this.color);
            this.prefixHex = this.convertHtmlToHEX(this.$refs.prefix.innerHTML);
            this.prefixHtml = this.convertHexToHTML(this.prefixHex);
            var splits = this.selectServerChat.split(':', 2);
            var server = splits[0];
            var id = splits[1];
            this.$root.$emit('send_websocket', `{"packet":"cabinet.setChat","data":{"server":"${server}","id":"${id}","prefix":"${this.prefixHex}","color":"${this.colorUser}"}}`);
        },
        convertHtmlToHEX(str) {
            if(str[0] !== '<')
                str = '#FFFFFF' + str
            let no_lower_hex = false
            while(true) {
                let index = str.search('color="')
                if(index == -1) 
                    break
                str = this.spliceSplit(str, index, 14, str.substring(index + 7, index + 14).toUpperCase())
            }
            str = str.replaceAll('</font><font ', '')  
            str = str.replaceAll('</font>', '#FFFFFF') 
            str = str.replaceAll('<font ', '')
            str = str.replaceAll('">', '')
            return str
        },
        convertHexToHTML(str) {
            if(str.search('(#[0-9A-F]{6})') == -1){
                return str;
            }
            let replacer = '';
            let results = [];
            let result = '';
            for(let i = 0; i < str.length; i++){
                if(replacer == '' && str[i] == '#') {
                    replacer = '#'
                }
                else if(replacer != '') {
                    if(/^#[0-9A-F]{6}$/i.test(replacer) == true){
                        results.push(replacer);
                        replacer = '';
                    }
                    else replacer += str[i]
                }
            }
            for(let i of results) {
                str = str.replace(i,' ')
            }
            str = str.trim().split(' ');
            for(let i = 0; i < results.length; i++) {
                if(results[i] == '#FFFFFF') result += str[i]
                else result+= `<font color=${results[i]}>${str[i]}</font>`
            }
            result = result.replaceAll("#FFFFFF", "")
            result = result.replaceAll("undefined", "")
            return result
        },
        spliceSplit(str, index, count, add) {
            var ar = str.split('');
            ar.splice(index, count, add);
            return ar.join('');
        },
        funcSelectAbilityTransfer(ability) {
            this.selectAbilityTransfer = ability;
            this.isLoadServers = false;
            this.selectServerTransfer = null;
            this.serversTransfer = null;
            this.$root.$emit('send_websocket', `{"packet":"cabinet.getAvailableTransfersAbility","data":{"ability":"${ability.name}", "server":"${ability.system}", "id":"${ability.serverNumber}"}}`);
        },
        clickAbility(ability) {
            this.currentAbility = ability;
            this.serversAility = null;
            this.selectServerAvility = null;
            this.valueTime = 0;
            this.$root.$emit('send_websocket', `{"packet":"cabinet.loadAbilities","data":{"name":"${this.currentAbility.name}"}}`);
        },
        buy() {
            this.$root.$emit('send_websocket', `{"packet":"cabinet.abilitiesBuy","data":{"server":"${this.selectServerAvility}","ability":"${this.currentAbility.name}","time":"${this.valueTime}"}}`);
        },
        extend(type, server, number, ability) {
            this.$root.$emit('send_websocket', `{"packet":"cabinet.abilitiesExtend","data":{"server":"${server}","id":"${number}","ability":"${ability}","type":"${type}"}}`);
        },
        transfer() {
            this.$root.$emit('send_websocket', `{"packet":"cabinet.abilitiesTransfer","data":{"serverTo":"${this.selectServerTransfer}","ability":"${this.selectAbilityTransfer.name}", "server":"${this.selectAbilityTransfer.system}", "id":"${this.selectAbilityTransfer.serverNumber}"}}`);
        },
        getTranslate(name) {
            if(name.length > 14) {
                return name.substring(0, 14) + '...';
            }
            return name;
        },
        getServer(server) {
            return server.server + ':' + server.num;
        },
        getMoney() {
            if(this.valueTime == 0) {
                return this.currentAbility.priceMonth;
            } else if(this.valueTime == 1) {
                return this.currentAbility.priceMonthThree;
            } else if(this.valueTime == 2) {
                return this.currentAbility.priceMonthSix;
            } 
            return this.currentAbility.priceForever;
        },
        getTime() {
            if(this.valueTime == 0) {
                return "1 месяц";
            } else if(this.valueTime == 1) {
                return "3 месяца";
            } else if(this.valueTime == 2) {
                return "6 месяцев";
            } 
            return "Вечность";
        },
        getPercent(start, end) {
            if(end == - 1) {
                return '100%';
            }
            var max = end - start;
            var current = end - new Date().getTime();
            if(current < 0) {
                current = 0;
            }
            return current/max*100+'%'
        }, 
        getDate(format, value) {
            if(value == -1) {
                return "скончания времен"
            }
            
            return main.getDate(format, value);
        },
        listener(packet, data) {
            if(packet === 'cabinet.loadAbilities') {
				if (data.type === 'success') {
                    this.loadAbilities = true;
                    this.activeAility = data.active;
                    this.ability = data.ability;
                }

                if (data.type === 'servers') {
                    this.serversAility = data.servers;
                }
            }

            if(packet === 'cabinet.loadChat') {
				if (data.type === 'success') {
                    this.chatServers = data.servers;
                }

                if (data.type === 'chat') {
                    this.loadChat = true;
                    this.prefix = data.prefix;
                    this.prefixHtml = this.convertHexToHTML(this.prefix);
                    this.prefixHex = this.convertHtmlToHEX(this.prefixHtml);
                    this.colorUser = data.color;
                }
            }

            if(packet === 'cabinet.loadSpawnServers') {
				if (data.type === 'success') {
                    this.spawnServers = data.servers;
                }
            }

            if(packet === 'cabinet.sendSpawn') {
				if (data.type === 'success') {
                    this.$root.$emit('notice_success', 'Вы успешно отправили запрос на телепортацию!', '');
                } else {
                    switch (data.error) {
                        case 0:
                            this.$root.$emit('notice_error', 'Вы не авторизированы', '');
                            break
                        case 1:
                            this.$root.$emit('notice_error', 'Сервер не найден!', '');
                            break
                        case 2:
                            this.$root.$emit('notice_error', 'Сервер перезагружается. Повторите это действие через 1 минуту!', '');
                            break
                        default: 
                            this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                            break;
                    }
                }
            }

            if(packet === 'cabinet.setChat') {
				if (data.type === 'success') {
                    this.$root.$emit('notice_success', 'Вы успешно обновили стиль своего сообщения!', '');
                } else {
                    switch (data.error) {
                        case 0:
                            this.$root.$emit('notice_error', 'Вы не авторизированы', '');
                            break
                        default: 
                            this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                            break;
                    }
                }
            }

            if(packet === 'cabinet.abilitiesBuy') {
				if (data.type === 'success') {
                    this.currentAbility = null;
                    this.serversAility = null;
                    this.selectServerAvility = null;
                    this.valueTime = 0;

                    this.$root.$emit('notice_success', 'Вы успешно купили возможность!', '');
                    this.$root.$emit('send_websocket', `{"packet":"cabinet.loadAbilities","data":{}}`);
                    this.$root.$emit('send_websocket', `{"packet":"cabinet.loadChat","data":{}}`);
                } else {
                    switch (data.error) {
                        case 0:
                            this.$root.$emit('notice_error', 'Вы не авторизированы', '');
                            break
                        case 1:
                            this.$root.$emit('notice_error', 'Сервер не найден', '');
                            break
                        case 2:
                            this.$root.$emit('notice_error', 'Данная возможность не найдена', '');
                            break
                        case 3:
                            var price = data.price;
                            this.$root.$emit('notice_error', 'Недостаточно денег на балансе, не хватает ' + price + " руб.", '');
                            break
                        case 4:
                            this.$root.$emit('notice_error', 'Данная возможность уже есть на данном сервере', '');
                            break
                        case 5:
                            this.$root.$emit('notice_error', 'Проверка баланса не завершилась успешно!', '');
                            break
                        default: 
                            this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                            break;
                    }
                }
            }

            if(packet === 'cabinet.abilitiesExtend') {
				if (data.type === 'success') {
                    this.$root.$emit('notice_success', 'Вы успешно продлили возможность!', '');
                    this.$root.$emit('send_websocket', `{"packet":"cabinet.loadAbilities","data":{}}`);
                } else {
                    switch (data.error) {
                        case 0:
                            this.$root.$emit('notice_error', 'Вы не авторизированы', '');
                            break
                        case 1:
                            this.$root.$emit('notice_error', 'Сервер не найден', '');
                            break
                        case 2:
                            this.$root.$emit('notice_error', 'Данная возможность не найдена', '');
                            break
                        case 3:
                            this.$root.$emit('notice_error', 'Данная возможность не может быть продлена', '');
                            break
                        case 4:
                            this.$root.$emit('notice_error', 'Параметры не указаны', '');
                            break
                        case 5:
                            var price = data.price;
                            this.$root.$emit('notice_error', 'Недостаточно денег на балансе, не хватает ' + price + " руб.", '');
                            break
                        case 6:
                            this.$root.$emit('notice_error', 'Проверка баланса не завершилась успешно!', '');
                            break
                        default: 
                            this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                            break;
                    }
                }
            }

            if(packet === 'cabinet.getAvailableTransfersAbility') {
				if (data.type === 'success') {
                    this.isLoadServers = true;
                    this.serversTransfer = data.servers;
                    this.moneyTransfer = data.price;
                } else {
                    switch (data.error) {
                        case 0:
                            this.$root.$emit('notice_error', 'Вы не авторизированы', '');
                            break
                        case 1:
                            this.$root.$emit('notice_error', 'Данная возможность не найдена', '');
                            break
                        case 2:
                            this.$root.$emit('notice_error', 'Сервер не найден', '');
                            break
                        case 3:
                            this.$root.$emit('notice_error', 'Данная возможность не найдена', '');
                            break
                        default: 
                            this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                            break;
                    }
                }
            }

            if(packet === 'cabinet.abilitiesTransfer') {
				if (data.type === 'success') {
                    this.selectAbilityTransfer = null;
                    this.isLoadServers = false;
                    this.selectServerTransfer = null;
                    this.serversTransfer = null;

                    this.$root.$emit('notice_success', 'Вы успешно перенесли возможность!', '');
                    this.$root.$emit('send_websocket', `{"packet":"cabinet.loadAbilities","data":{}}`);
                    this.$root.$emit('send_websocket', `{"packet":"cabinet.loadChat","data":{}}`);
                } else {
                    switch (data.error) {
                        case 0:
                            this.$root.$emit('notice_error', 'Вы не авторизированы', '');
                            break
                        case 1:
                            this.$root.$emit('notice_error', 'Сервер не найден', '');
                            break
                        case 2:
                            this.$root.$emit('notice_error', 'Данная возможность не найдена', '');
                            break
                        case 3:
                            var price = data.price;
                            this.$root.$emit('notice_error', 'Недостаточно денег на балансе, не хватает ' + price + " руб.", '');
                            break
                        case 4:
                            this.$root.$emit('notice_error', 'У Вас уже есть данная возможность на данном сервере', '');
                            break
                        case 5:
                            this.$root.$emit('notice_error', 'Проверка баланса не завершилась успешно!', '');
                            break
                        default: 
                            this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                            break;
                    }
                }
            }

        }
    },
    mounted() {
        this.$root.$emit('send_websocket', `{"packet":"cabinet.loadAbilities","data":{}}`);
        this.$root.$emit('send_websocket', `{"packet":"cabinet.loadChat","data":{}}`);
        this.$root.$emit('send_websocket', `{"packet":"cabinet.loadSpawnServers","data":{}}`);
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
    .ui-box.green {
        color: #3c6502;
        background-color: #f2fae3b8;
        border-color: #538808;
    }

    .ui-box.red {
        color: #D85030;
        background-color: #FFF1F0;
        border-color: #F4C1B6;
    }

    .ui-box {
        margin: 4px 0;
        background: #EBF7FD;
        padding: 8px 10px;
        color: #2D7091;
        font-size: 14px;
        border-left: 4px solid #B2CFDD;
    }
    
    .chat {
        width: 649px;
        height: 330px;
        margin-left: -9px;
        background-color: rgba(255, 255, 255, 0.1);
        background-position: right center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("/assets/img/cabinet/chat.png");
    }

    .btn-drop {
        background: linear-gradient(to right, #ffa857, #fe5a73);
        padding: 0 10px;
        color: #fff;
        border-radius: 3px;
        height: 53px;
        border-bottom: 5px solid rgba(255, 255, 255, .25);
        box-shadow: 0 3px 33px 0 #580909;
        text-decoration: none;
        font-size: 20px;
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
        width: 196px;
        position: absolute;
        margin-top: 100px;
        margin-left: 61px;
        border-top-width: 0px;
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

    .colored {
        margin-top: 78px;
    }

    .tab {
        height: 25px; 
        margin-left: 8px;
        transition: 0.5s;
        cursor: pointer;
        opacity: 0.6;
    }

    .tab:hover {
        opacity: 0.9;
    }

    .tab_active {
        opacity: 1;
    }

    .msg {
        float: left;
        margin-left: 28px;
        margin-top: 14px;
    }

    .msg .icon img {
        position: absolute;
    }

    .msg .prefix {
        color: white;
        font-family: 'Ubuntu';
        position: absolute;
        margin-left: 72px;
        font-size: 20px;
        margin-top: 6px;
        white-space: nowrap;
        overflow: hidden;
        max-width: 225px;
        text-overflow: clip;
    }

    .msg .love {
        color: white;
        font-family: 'Ubuntu';
        position: absolute;
        margin-left: 72px;
        font-size: 20px;
        margin-top: 33px;
    }

    .edit {
        border-radius: 12px;
        padding: 2px 4px;
        background-color: rgba(40, 40, 44, 0.71);
        border: 2px solid #222;
    }

    .chat .text {
        float: left;
        backdrop-filter: blur(4px);
        background-color: #00000066;
        width: 50%;
        height: 100%;
    }

    .chat .text .input {
        display: inline-block;
        height: 48px;
        line-height: 22px;
        vertical-align: middle;
        color: #FFF;
        font-size: 20px;
        background: #555758;
        border-bottom: 1px solid #fff;
        border: none;
        padding: 15px;
        width: 256px;
        border-radius: 3px;
        font-weight: 600;
        -webkit-box-shadow: 0 15px 45px rgba(0, 0, 0, .05);
        box-shadow: 0 15px 45px rgba(0, 0, 0, .05);
        outline: none;
        filter: drop-shadow(0px 2px 2px #222222bf);
    }

    .chat .colorpicker {
        padding-top: 15px;
        padding-left: 14px;
        backdrop-filter: blur(2px);
        background-color: #00000047;
        width: 50%;
        height: 100%;
        float: right;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

    .ability {
        display: inline-block; 
    }

    .ability img {
        -webkit-filter: drop-shadow(0px 2px 2px #222222bf);
        filter: drop-shadow(0px 2px 2px #222222bf);
    }

    a {
        display: inline-block;
        height: 74px;
        padding: 0 30px 0 4px;
        text-transform: uppercase;
        font-size: 17px;
        text-decoration: none;
        cursor: pointer;
        text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.16);
        font-family: "NeoSans";
    }
    a:hover {
        text-decoration: none;
    }
    a .ico {
        display: block;
        width: 40px;
        height: 40px;
        margin-left: -3px;
        margin-bottom: 7px;
        transition: all .4s ease;
    }
    a:hover .ico {
        transform: translateY(-5px)
    }

    .current_icon {
        transform: translateY(-5px)
    }

    .current_text {
        color:#920303;
    }

    .permission {
        width: 649px;
        margin-top: -9px;
        margin-bottom: -9px;
        margin-left: -9px;
        background-color: rgba(255, 255, 255, 0.1);
        background-position: right center;
        background-repeat: no-repeat;
        background-size: cover;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #d4006363
    }

    .permission .progress-bar {
        height: 100%;
        background-color: #18bf33;
        animation: progress-bar-stripes 2s linear infinite;
        background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
        background-size: 30px 30px;
    }

    @keyframes progress-bar-stripes {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 30px 0;
        }
    }

    .permission .permission-icon {
        float: left;
        width: 48px;
        height: 48px;
    }

    .permission .permission-content {
        margin-left: 59px;
        margin-top: 8px;
    }

    .permission .permission_info_title {
        font-family: Helvetica, Arial, serif;
        font-weight: bold;
        font-size: 16px;
        margin-top: 10px;
        position: absolute;
        width: 572px;
    }

    .permission .date {
        font-weight: 100;
        margin-top: 3px;
        text-align: center;
        clear: both;
        font-family: "NeoSans";
        font-size: 15px;
    }

    .permission-icon img {
        filter: drop-shadow(0px 2px 2px #222222bf);
        position: absolute;
        margin-top: 10px;
        margin-left: 6px;
    }

    .permission .delete_group {
        box-shadow: 0px 1px 0px rgb(117, 21, 21)!important;
        background: #b82828;
        border-radius: 4px !important;
        color: #fff !important;
        margin-left: 5px;
        padding: 3px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        margin-left: 9px;
        cursor: pointer;
        height: 40px;
        width: 40px;
        font-size: 24px;
        font-family: "NeoSansBold";
        padding-top: 6px;
    }

    .permission .delete_group:hover {
        background: #a52b2bba !important;
        text-decoration: none;
    }

    .permission .buy {
        box-shadow: 0px 1px 0px rgb(21, 117, 29)!important;
        background: #2ba52c;
        border-radius: 19px !important;
        color: #fff !important;
        margin-top: 6px;
        padding: 1px;
        font-size: 13px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        margin-left: 3px;
        cursor: pointer;
    }

    .permission .buy:hover {
        background: #2ba52cba !important;
        text-decoration: none;
    }

    .permission .permission_a {
        color: black;
        float: left;
        font-family: "NeoSans";
        text-transform: uppercase;
    }

    .permission .permission_info_progressbar {
        width: 80%;
        margin-top: 13px;
        height: 7px;
        background-color: rgba(255, 255, 255, 0.5);
        float: left;
    }

    .panel-cmd-active {
        padding: 15px 10px;
        transition: .2s;
        background-color: rgba(255, 255, 255, 0.1);
        background-position: right center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        position: relative;
        display: inline-block;
        width: 310px;
        margin-inline-end: 10px;
    }

    .panel-cmd-active {
        opacity: 0.8
    }

    .panel-cmd-active:hover {
        opacity: 1;
        background-color: rgba(23, 22, 22, 0.55)
    }

    .panel-cmd-active p {
        opacity: 1;
        color: black;
        margin: 0;
        font-weight: 700
    }

    .panel-cmd-active p {
        transition: .2s;
    }

    .descy {
        transition: .2s;
    }

    .panel-cmd-active:hover .descy {
        color: rgba(255, 255, 255, 0.795);
        filter: drop-shadow(0px 2px 2px #222222bf);
    }

    .panel-cmd-active:hover p {
        color: rgba(255, 255, 255, 0.795);
        filter: drop-shadow(0px 2px 2px #222222bf);
    }

    .selected_ability {
        opacity: 1;
        background-color: rgba(23, 22, 22, 0.55)
    }
    .selected_ability p {
        color: rgba(255, 255, 255, 0.795);
        filter: drop-shadow(0px 2px 2px #222222bf);
    }
    .selected_ability .descy {
        color: rgba(255, 255, 255, 0.795);
        filter: drop-shadow(0px 2px 2px #222222bf);
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

    .info {
        margin-bottom: 10px;
        text-transform: uppercase;
        font-family: "zerotwo";
        font-size: 40px;
        letter-spacing: 3px;
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

    .pure-material-slider {
        --pure-material-safari-helper1: rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.04);
        --pure-material-safari-helper2: rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.12);
        --pure-material-safari-helper3: rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.16);
        --pure-material-safari-helper4: rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.24);
        display: inline-block;
        width: 200px;
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
        font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
        font-size: 16px;
        line-height: 1.5;
    }

    /* Input */
    .pure-material-slider > input {
        -webkit-appearance: none;
        position: relative;
        top: 24px;
        display: block;
        margin: 0 0 -36px;
        width: 100%;
        height: 36px;
        background-color: transparent;
        cursor: pointer;
    }

    /* Without Span */
    .pure-material-slider > input:last-child {
        position: static;
        margin: 0;
    }

    /* Span */
    .pure-material-slider > span {
        display: inline-block;
        margin-bottom: 36px;
    }

    /* Focus */
    .pure-material-slider > input:focus {
        outline: none;
    }

    /* Disabled */
    .pure-material-slider > input:disabled {
        cursor: default;
        opacity: 0.38;
    }

    .pure-material-slider > input:disabled + span {
        color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    }

    /* Webkit | Track */
    .pure-material-slider > input::-webkit-slider-runnable-track {
        margin: 17px 0;
        border-radius: 1px;
        width: 100%;
        height: 2px;
        background-color: rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.24);
    }

    /* Webkit | Thumb */
    .pure-material-slider > input::-webkit-slider-thumb {
        appearance: none;
        -webkit-appearance: none;
        border: none;
        border-radius: 50%;
        height: 2px;
        width: 2px;
        background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        transform: scale(6, 6);
        transition: box-shadow 0.2s;
    }

    /* Webkit | Hover, Focus */
    .pure-material-slider:hover > input::-webkit-slider-thumb {
        box-shadow: 0 0 0 2px var(--pure-material-safari-helper1);
    }

    .pure-material-slider > input:focus::-webkit-slider-thumb {
        box-shadow: 0 0 0 2px var(--pure-material-safari-helper2);
    }

    .pure-material-slider:hover > input:focus::-webkit-slider-thumb {
        box-shadow: 0 0 0 2px var(--pure-material-safari-helper3);
    }

    /* Webkit | Active */
    .pure-material-slider > input:active::-webkit-slider-thumb {
        box-shadow: 0 0 0 2px var(--pure-material-safari-helper4) !important;
    }

    /* Webkit | Disabled */
    .pure-material-slider > input:disabled::-webkit-slider-runnable-track {
        background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    }

    .pure-material-slider > input:disabled::-webkit-slider-thumb {
        background-color: rgb(var(--pure-material-onsurface-rgb, 0, 0, 0));
        color: rgb(var(--pure-material-surface-rgb, 255, 255, 255)); /* Safari */
        box-shadow: 0 0 0 1px rgb(var(--pure-material-surface-rgb, 255, 255, 255)) !important;
        transform: scale(4, 4);
    }

    /* Moz | Track */
    .pure-material-slider > input::-moz-range-track {
        margin: 17px 0;
        border-radius: 1px;
        width: 100%;
        height: 2px;
        background-color: rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.24);
    }

    /* Moz | Thumb */
    .pure-material-slider > input::-moz-range-thumb {
        appearance: none;
        -moz-appearance: none;
        border: none;
        border-radius: 50%;
        height: 2px;
        width: 2px;
        background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        transform: scale(6, 6);
        transition: box-shadow 0.2s;
    }

    /* Moz | Progress */
    .pure-material-slider > input::-moz-range-progress {
        border-radius: 1px;
        height: 2px;
        background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    }

    /* Moz | Hover, Focus */
    .pure-material-slider:hover > input:hover::-moz-range-thumb {
        box-shadow: 0 0 0 2px rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.04);
    }

    .pure-material-slider > input:focus::-moz-range-thumb {
        box-shadow: 0 0 0 2px rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.12);
    }

    .pure-material-slider:hover > input:focus::-moz-range-thumb {
        box-shadow: 0 0 0 2px rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.16);
    }

    /* Moz | Active */
    .pure-material-slider > input:active::-moz-range-thumb {
        box-shadow: 0 0 0 2px rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.24) !important;
    }

    /* Moz | Disabled */
    .pure-material-slider > input:disabled::-moz-range-track {
        background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    }

    .pure-material-slider > input:disabled::-moz-range-progress {
        background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    }

    .pure-material-slider > input:disabled::-moz-range-thumb {
        background-color: rgb(var(--pure-material-onsurface-rgb, 0, 0, 0));
        box-shadow: 0 0 0 1px rgb(var(--pure-material-surface-rgb, 255, 255, 255)) !important;
        transform: scale(4, 4);
    }

    .pure-material-slider > input::-moz-focus-outer {
        border: none;
    }

    /* MS | Track */
    .pure-material-slider > input::-ms-track {
        box-sizing: border-box;
        margin: 17px 0;
        border: none;
        border-radius: 1px;
        padding: 0 17px;
        width: 100%;
        height: 2px;
        background-color: transparent;
    }

    .pure-material-slider > input::-ms-fill-lower {
        border-radius: 1px;
        height: 2px;
        background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    }

    /* MS | Progress */
    .pure-material-slider > input::-ms-fill-upper {
        border-radius: 1px;
        height: 2px;
        background-color: rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.24);
    }

    /* MS | Thumb */
    .pure-material-slider > input::-ms-thumb {
        appearance: none;
        margin: 0 17px;
        border: none;
        border-radius: 50%;
        height: 2px;
        width: 2px;
        background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
        transform: scale(6, 6);
        transition: box-shadow 0.2s;
    }

    /* MS | Hover, Focus */
    .pure-material-slider:hover > input::-ms-thumb {
        box-shadow: 0 0 0 2px rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.04);
    }

    .pure-material-slider > input:focus::-ms-thumb {
        box-shadow: 0 0 0 2px rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.12);
    }

    .pure-material-slider:hover > input:focus::-ms-thumb {
        box-shadow: 0 0 0 2px rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.16);
    }

    /* MS | Active */
    .pure-material-slider > input:active::-ms-thumb {
        box-shadow: 0 0 0 2px rgba(var(--pure-material-primary-rgb, 33, 150, 243), 0.24) !important;
    }

    /* MS | Disabled */
    .pure-material-slider > input:disabled::-ms-fill-lower {
        background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    }

    .pure-material-slider > input:disabled::-ms-fill-upper {
        background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
        opacity: 0.38;
    }

    .pure-material-slider > input:disabled::-ms-thumb {
        background-color: rgb(var(--pure-material-onsurface-rgb, 0, 0, 0));
        box-shadow: 0 0 0 1px rgb(var(--pure-material-surface-rgb, 255, 255, 255)) !important;
        transform: scale(4, 4);
    }
</style>
