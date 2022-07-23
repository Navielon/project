<template>
    <div>
        <vue-snotify></vue-snotify>
        <div v-bind:class="{ background: true, 'background-full' : isFullPage, 
        blur: !isConnected || isMessengerOpen, 
        stop_scrolling: !isConnected || isMessengerOpen || stopScroll }">
            <div v-bind:class="{'head-background' : true, 'head-background-full' : isFullPage}">
                <div v-bind:class="{'bg-footer' : true, 'bg-footer-full' : isFullPage}">
                    <div class="main-container">
                        <div class="header">
                            <div class="menu"></div>
                            <nav class="noselect">
                            <ul>
                                <router-link to="/">
                                    <div class="image"/>
                                    <div style="height:40px"></div>
                                    <div class="icon_effect"/>
                                    <div class="ico icon_home"></div>
                                    <b>Главная</b>
                                </router-link>
                                <a class="sub">
                                    <div class="image"/>
                                    <div style="height:40px"></div>
                                    <div class="icon_effect"/>
                                    <div class="ico icon_servers"></div>
                                    <b>О серверах</b>

                                    <ul class="sub-nav" style="left: 170px;">
                                        <!--li><router-link to="/server/rpg">- RPG</router-link></li-->
                                        <li><router-link to="/server/hitech">- HiTech</router-link></li>
                                        <li><router-link to="/server/ultra_tech">- UltraTech</router-link></li>
                                        <li><router-link to="/server/fusion_tech">- FusionTech</router-link></li>
                                        <li><router-link to="/server/magic_rpg">- Magic RPG</router-link></li>
                                        <li><router-link to="/server/ars_magic_rpg">- Ars Magic RPG</router-link></li>
                                        <li><router-link to="/server/dark_magic">- DarkMagic</router-link></li>
                                        <li><router-link to="/server/mystery_magic">- MysteryMagic</router-link></li>
                                        <li><router-link to="/server/techno_magic">- TechnoMagic RPG</router-link></li>
                                        <li><router-link to="/server/techno_wizardry">- TechnoWizardry</router-link></li>
                                        <li><router-link to="/server/nano_magic">- NanoMagic RPG</router-link></li>
                                        <li><router-link to="/server/fantasy_tech_rpg">- FantasyTech RPG</router-link></li>
                                        <li><router-link to="/server/spacex">- SpaceX</router-link></li>
                                        <li><router-link to="/server/techno_magic_sky">- TechnoMagic Sky</router-link></li>
                                        <li><router-link to="/server/fantasy_tech_sky">- FantasyTech Sky</router-link></li>
                                        <li><router-link to="/server/pixel_mon">- PixelMon</router-link></li>
                                    </ul>
                                </a>
                                <router-link to="/donate">
                                    <div class="image"/>
                                    <div style="height:40px"></div>
                                    <div class="icon_effect"/>
                                    <div class="ico icon_donate"></div>
                                    <b>Донат</b>
                                </router-link>
                                <router-link to="/rules">
                                    <div class="image"/>
                                    <div style="height:40px"></div>
                                    <div class="icon_effect"/>
                                    <div class="ico icon_rules"></div>
                                    <b>Правила</b>
                                </router-link>
                                <router-link to="/about">
                                    <div class="image"/>
                                    <div style="height:40px"></div>
                                    <div class="icon_effect"/>
                                    <div class="ico icon_project"></div>
                                    <b>О проекте</b>
                                </router-link>
                                <a class="sub">
                                    <div class="image"/>
                                    <div style="height:40px"></div>
                                    <div class="icon_effect"/>
                                    <div class="ico icon_help"></div>
                                    <b>Прочее</b>

                                    <ul class="sub-nav">
                                        <li><a href="https://vk.com/im?media=&sel=-180476635" target="_blank">Помощь</a></li>
                                        <li><a href="https://vk.com/loliland" target="_blank">Мы в ВК</a></li>
                                        <li><a href="https://discord.gg/hyUep5t" target="_blank">Наш Дискорд</a></li>
                                        <li><router-link to="/team">Команда проекта</router-link></li>
                                        <!--li><router-link to="/youtube">Стать Ютубером</router-link></li>
                                        <li><router-link to="/referal">Пригласить друга</router-link></li-->
                                        <li><router-link to="/top">Топ игроков</router-link></li>
                                        <li><router-link to="/bans">Банлист</router-link></li>
                                        <li><router-link to="/votes">Голосовать</router-link></li>
                                        <li><router-link to="/bonus">Бонусы</router-link></li>
                                        <li><router-link to="/play_reward">Награды в игре</router-link></li>
                                        <li><router-link to="/contacts">Контакты</router-link></li>
                                        <!--li><router-link to="/modifications">Наши разработки</router-link></li-->
                                    </ul>
                                </a>
                            </ul>
                            </nav>

                            <router-link to="/start" class="strat_game"/>
                            <div class="strat_anime"/>
                        </div>
                        <div style="clear:both"></div>
                        <div class="main-background-container">
                            <div class="content">
                                <MainContent/>
                                <div class="right-block-container" v-show="!isFullPage">
                                    <div style="float: none;">
                                        <transition name="component-fade">
                                            <RightMenu/>
                                        </transition>
                                    </div>
                                    <div style="clear:both"></div>
                                </div>
                                <div style="clear:both"></div>
                            </div>
                            <div style="clear:both"></div>
                            <div class="footer">
                                <div class="footer-text">
                                    LoliLand 2019-2021
                                    <div class="text_foot">Для интересных предложений: loliland@gmail.com</div>
                                    <a href="/privacy" target="_blank" style="font-size: 15px; color: blanchedalmond;">Политика конфиденциальности</a>, 
                                    <a href="/public_offer" target="_blank" style="font-size: 15px; color: blanchedalmond;">Публичная оферта</a>.
                                </div>
                            </div>
                            <div style="clear:both"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div v-if="!isConnected">
                
            </div>
        </transition>

        <transition name="fade">
            <div v-if="isMessengerOpen" style="width: 100%;">
                <Messenger/>
            </div>
        </transition>

        <transition name="fade">
            <div v-if="closeConnection != null">
                <div v-bind:class="{ preloader_malc: closeConnection != null }" style="background: rgba(1, 0, 15, 0.9);">
                <div id="loader-wrapper" class="noselect">
                    <div id="loader" style="top: auto;left: auto;width: 100%;">
                    <p style="
                        color: rgb(255, 255, 255);
                        margin-left: 0px;
                        width: 100%;
                        font-size: 27px;
                    ">Соединение прервано</p>
                    <div class="update-btn" onclick="document.location.reload(true);">Обновить страницу</div>
                    </div>
                </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import MainContent from './components/main/MainContent'
import RightMenu from './components/main/RightMenu'
import Messenger from './components/messenger/Mesenger'
import { EventBus, WEBSOCKET } from '@/main.js';

export default {
    name: 'App',
    data () {
        return {
            openConnections: false,
            closeConnection: null,
            packets: new Map(),
            packetsSending: [],
            socket: null
        }
    },
    methods: {
        scollUp() {
            const scrollToTop = () => {
                const c = document.documentElement.scrollTop || document.body.scrollTop;
                if (c > 0) {
                    window.requestAnimationFrame(scrollToTop);
                    window.scrollTo(0, c - c / 8);
                }
            };
            scrollToTop();
        },
        sendData: function(msg) {
            var spl = msg.split(':@:');
            var date = spl[0];
            var message = spl[1];
            if(!this.packets.has(spl)) {
                this.packets.set(spl, date);
                
                console.log('Send: ' + message)
                this.socket.send(message);
            } 
        },
        sendPacket: function(msg) {
            var object = this;
            var message = new Date().getMilliseconds() + ":@:" + msg;
            if(this.openConnections && this.socket.readyState == 1) {
                this.sendData(message);
            } else if(!this.openConnections && this.closeConnection == null) {
                this.packetsSending.push(message);
            } else {
                this.closeConnection = true;
            }
        },
        sendPing: function() {
            if(this.isTabActive) {
                this.sendPacket('{"packet":"ping","data":{}}');
            }
        },
        initWebSocket() {
            this.socket = new ReconnectingWebSocket(WEBSOCKET);
            this.socket.debug = true;
            this.socket.timeoutInterval = 5400;

            this.socket.onopen = () => {
                this.openConnections = true;
                this.closeConnection = null;
                this.$root.$emit('open_websocket');
                this.sendPing()
                setInterval(this.sendPing, 15000)
            };

            this.socket.onclose = () => {
                this.closeConnection = true;
                this.openConnections = false;
                clearInterval(this.sendPing);
            };

            this.socket.onerror = () => {
                this.closeConnection = true;
                this.openConnections = false;
                clearInterval(this.sendPing);
            };

            setInterval(this.intervalCheckData, 10);
        },
        intervalCheckData() {
            if(this.openConnections && this.socket.readyState == 1) {
                var message = this.packetsSending.pop();
                if(message != null) {
                    this.sendData(message);
                }
            }
        },
        checkSendData() {
            var object = this;
            this.$root.$on('send_websocket', function(obj) {
                object.sendPacket(obj);
            });
        },
        setFocus() {
            this.$store.commit('setTabActive', true);
        },
        setBlur() {
            this.$store.commit('setTabActive', true);
        },
        noticeSuccess(msg1, msg2) {
            this.$snotify.success(msg1, msg2, {
                timeout: 2500,
                showProgressBar: true,
                closeOnClick: true, 
                pauseOnHover: false
            });
        },
        noticeError(msg1, msg2) {
            this.$snotify.error(msg1, msg2, {
                timeout: 2500,
                showProgressBar: true,
                closeOnClick: true, 
                pauseOnHover: false
            });
        },
        noticeWarning(msg1, msg2) {
            this.$snotify.warning(msg1, msg2, {
                timeout: 2500,
                showProgressBar: true,
                closeOnClick: true, 
                pauseOnHover: false
            });
        }
    },
    created(){
        var object = this;

        var source = this.$cookie.get('source')
        if(source != null) {
            this.$store.commit('source', {
                src: source,
            });
        }

        this.$root.$on('notice_success', this.noticeSuccess);
        this.$root.$on('notice_error', this.noticeError);
        this.$root.$on('notice_warning', this.noticeWarning);

        window.addEventListener('focus', this.setFocus);
        window.addEventListener('blur', this.setBlur);

        this.initWebSocket();
        this.checkSendData();

        this.socket.onmessage = (msg) => {
            let obj = JSON.parse(msg.data);
            console.log(obj);
            if(obj.data.type != null && obj.data.message != null) {
                if(obj.data.type == 'error') {
                    this.$root.$emit('notice_error', obj.data.message, '');
                }
                return;
            }
            EventBus.$emit('onProcessPacket', obj.packet, obj.data);

            if(obj.packet === 'notice.send') {
                if(obj.data.type == 'success') {
                    this.$root.$emit('notice_success', obj.data.notice, '');
                } else if(obj.data.type == 'warning') {
                    this.$root.$emit('notice_warning', obj.data.notice, '');
                } else if(obj.data.type == 'error') {
                    this.$root.$emit('notice_error', obj.data.notice, '');
                }
            }

            if(obj.packet === 'account.updateBalance') {
                this.$store.commit('updateBalance', {
                    balance: obj.data.balance
                });
            }

            if(obj.packet === 'account.updateCoins') {
                this.$store.commit('updateCoins', {
                    coins: obj.data.coins
                });
            }

            if(obj.packet === 'account.updateAvatar') {
                this.$store.commit('updateAvatarState', {
                    avatar: obj.data.avatar
                });
                this.$store.commit('updateAvatar');
            }
        }
    },
    beforeDestroy() {
        clearInterval(this.sendPing); 
        clearInterval(this.intervalCheckData);

        this.$root.$off('notice_success', this.noticeSuccess);
        this.$root.$off('notice_error', this.noticeError);
        this.$root.$off('notice_warning', this.noticeWarning);

        this.socket.onmessage = (msg) => {}
        this.socket.onopen = () => {}
        this.socket.onclose = () => {}
        this.socket.onerror = () => {}
        this.socket.close();
        this.socket = null;
    },
    computed: {
        isConnected () {
            return this.$store.state.connected
        },
        isMessengerOpen () {
            return this.$store.state.messengerOpen
        },
        isFullPage () {
            return this.$store.state.fullPage
        },
        isTabActive () {
            return this.$store.state.tabActive
        },
        stopScroll () {
            return this.$store.state.stopScroll
        },
    },
    components: {
        MainContent, RightMenu, Messenger
    }
}
</script>


<style>
    img {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    .header_img {
        width: 708px; 
        min-height: 250px;
        margin-left: -17px; 
        margin-top: -19px; 
        margin-bottom: 10px;
    }

    .update-btn {
        width: 200px;
        text-align: center;
        margin-left: calc(50% - 100px);
        background-color: rgb(80, 148, 255);
        height: 41px;
        padding: 10px;
        font-size: 17px;
        border-radius: 24px;
        color: antiquewhite;
        cursor: pointer;
    }

    .update-btn:hover {
        background-color: rgb(35, 121, 255);
    }

    /* tooltips */
    [data-tooltip] {
        position: relative;
        z-index: 100000;
    }

    /* Positioning and visibility settings of the tooltip */
    [data-tooltip]:before,
    [data-tooltip]:after {
        position: absolute;
        visibility: hidden;
        opacity: 0;
        left: 50%;
        bottom: calc(100% + 5px);
        pointer-events: none;
        transition: 0.2s;
        will-change: transform;
    }

    /* The actual tooltip with a dynamic width */
    [data-tooltip]:before {
        content: attr(data-tooltip);
        padding: 6px 12px;
        min-width: 50px;
        max-width: 300px;
        width: max-content;
        width: -moz-max-content;
        border-radius: 4px;
        font-size: 13px;
        background-color: rgba(59, 72, 80, 0.9);
        background-image: linear-gradient(30deg,
            rgba(59, 72, 80, 0.44),
            rgba(59, 68, 75, 0.44),
            rgba(60, 82, 88, 0.44));
        box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
        color: #fff;
        text-align: center;
        white-space: pre-wrap;
        transform: translate(-50%, -5px) scale(0.5);
    }

    /* Tooltip arrow */
    [data-tooltip]:after {
        content: '';
        border-style: solid;
        border-width: 5px 5px 0px 5px;
        border-color: rgba(55, 64, 70, 0.9) transparent transparent transparent;
        transition-duration: 0s; 
        transform-origin: top;  
        transform: translateX(-50%) scaleY(0);
    }

    /* Tooltip becomes visible at hover */
    [data-tooltip]:hover:before,
    [data-tooltip]:hover:after {
        visibility: visible;
        opacity: 1;
    }
    /* Scales from 0.5 to 1 -> grow effect */
    [data-tooltip]:hover:before {
        transition-delay: 0.3s;
        transform: translate(-50%, -5px) scale(1);
    }
    /* Slide down effect only on mouseenter (NOT on mouseleave) */
    [data-tooltip]:hover:after {
        transition-delay: 0.5s; /* Starting after the grow effect */
        transition-duration: 0.2s;
        transform: translateX(-50%) scaleY(1);
    }

    .tooltip {
        position: relative;
        display: inline-block;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltiptext:hover {
        visibility: hidden;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    .tooltip:hover .tooltiptext:hover {
        visibility: hidden;
        opacity: 0;
    }

    .tooltiptext {
        visibility: hidden;
        color: #fff;
        font-weight: 400;
        font-size: 13px;
        background: rgba(10, 10, 10, 0.8);
        border-radius: 3px;
        padding: 5px 8px;
        position: absolute;
        text-align: center;
        width: 120px;
        bottom: 115%;
        left: 50%;
        margin-left: -60px;
        z-index: 1500;
        text-shadow: none;
        -webkit-box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 1px 3px rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 1px 3px rgba(0, 0, 0, 0.25);
        font-family: Ubuntu;
        line-height: 14px;
        text-transform: none;
        letter-spacing: normal;
        opacity: 0;
        transition: 0.5s;
    }

    .tooltiptext:after {
        display: block;
        content: "";
        width: 0;
        height: 0;
        border: transparent 4px solid;
        border-top-color: rgba(0, 0, 0, 0.8);
        position: absolute;
        bottom: -8px;
        left: 50%;
        margin-left: -4px
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }

    *:focus {
        outline: none;
    }

    * {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Fredoka+One&display=swap');

    @font-face {
        font-family: 'Verdana Regular';
        src: url('/assets/fonts/verdana.ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Verdana Bold';
        src: url('/assets/fonts/verdana-bold.ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'NeoSans';
        src: url('/assets/fonts/neosans.ttf');
    }

    @font-face {
        font-family: 'NeoSansBold';
        src: url('/assets/fonts/neosansbold.ttf');
    }

    @font-face {
        font-family: 'BosaNova';
        src: url('/assets/fonts/abosanovabold.ttf');
    }

    @font-face {
        font-family: 'PT Sans Narrow';
        src: url('/assets/fonts/PTSansNarrow-Bold.ttf');
    }

    @font-face {
        font-family: 'karmina';
        src: url('/assets/fonts/karmina.otf')
    } 

    @font-face {
        font-family: 'zerotwo';
        src: url('/assets/fonts/KARMINA2.OTF')
    } 

    a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
    }
    a:hover {
        color: #0056b3;
        text-decoration: underline
    }

    .loading-text {
        text-align: center;
        font-family: "NeoSansBold";
        color: #4a4a4ae6;
    }
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
        margin-left: calc(50% - 32px);
        margin-top: 15px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 51px;
        height: 51px;
        margin: 6px;
        border: 6px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .noselect {
        -webkit-touch-callout: none; 
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #e8d460;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #3f8802;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #336d03; 
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .95s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .blur {
        -webkit-filter: blur(6px);
        filter: blur(6px);
    }

    .stop_scrolling {
        overflow: hidden;
        width: calc(100% - 6px);
    }

    .preloader_malc {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(1, 0, 15, 0.75);
        z-index: 99;
        overflow: hidden;
    }

    #loader {
        display: block;
        position: relative;
        left: calc(50% -  75px);
        top: 50%;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 50 auto;
        
        z-index: 1001;
        animation: spin 2s linear infinite;
    }

    #loader-wrapper {
        margin-top: 20%;
    }

    #loader-wrapper .loader-section {
        position: fixed;
        top: 0;
        width: 51%;
        height: 100%;
      
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-blend-mode: multiply;
        z-index: 1000;
        transform: translateX(0);
    }

    #loader-wrapper .loader-section.section-left {
        left: 0;
    }

    #loader-wrapper .loader-section.section-right {
        right: 0;
    }

    .circ-one {
      position: relative;
      display: block;
      width: 50px;
      height: 50px;
      background: rgba(217,91,67,1);
      border-radius: 100%;
      float: left;
      animation: load-x 1s cubic-bezier(0.445, 0.100, 0.550, 0.900) infinite;
    }

    .circ-two {
      position: relative;
      display: block;
      width: 50px;
      height: 50px;
      background: rgba(84,36,55,1);
      border-radius: 100%;
      float: right;
      animation: load-y 1s cubic-bezier(0.445, 0.100, 0.550, 0.900) infinite;
    }

    @keyframes load-x {
      0%   { left: -10px; transform: scale(1); }
      25%  { transform: scale(1.5); z-index: 2; }
      50%  { left: 60px; transform: scale(1); }
      75%  { transform: scale(0.5); z-index: 1; }
      100% { left: -10px; transform: scale(1); }
    }

    @keyframes load-y {
      0%   { right: -10px; transform: scale(1); }
      25%  { transform: scale(0.5); }
      50%  { right: 60px; transform: scale(1); z-index: 1; }
      75%  { transform: scale(1.5); z-index: 2; }
      100% { right: -10px; transform: scale(1); }
    }

    #loader p {
      text-align: center;
      font-family: 'Hanna', serif;
      font-weight: 50;
      color:rgba(192,41,66,1);
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      50% { opacity: 0.5; }
    }
    .loaded #loader-wrapper .loader-section.section-left {
      transform: translateY(-100%);
      transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .loaded #loader-wrapper .loader-section.section-right {
      transform: translateY(100%);
      transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .loaded #loader {
      opacity: 0;
      transition: all 0.3s ease-out;
    }

    .loaded #loader-wrapper {
      visibility: hidden;
      transform: translateX(-100%);
      transition: all 0.3s 1s ease-out;
    }

    body {
        margin: 0px;
        padding: 0px;
        min-width: 1200px;
        background: #868e3b;
        font-family: Verdana;
    }

    .background {
        background: url('/assets/img/body.jpg') repeat-y center;
    }

    .head-background {
        background: url('/assets/img/header.jpg') top center no-repeat;
    }

    .bg-footer {
        background: url('/assets/img/footer.jpg') bottom no-repeat;
    }

    .main-container {
        width:1075px;
        margin:auto;
    }

    .header {
        height: 559px;
        position: relative;
    }

    nav {
        position: absolute;
        top: 451px;
        left: 33px;
        z-index: 100002;
    }
    nav ul {
        list-style: none;
        padding: 0
    }
    nav>ul>a {
        float: left;
        cursor: pointer;
        width: 117px;
        height: 74px;
        text-align: center;
        transition: 1.2s;
        text-decoration: none;
    }
    .image {
        position: absolute;
        width: 117px;
        height: 74px;
        transition: all .4s ease;
        opacity: 0;
    }

    .image:hover {
        transition: all .4s ease;
        background: url(/assets/img/menu_hover.png) top center no-repeat;
        opacity: 1;
    }

    nav>ul>a:hover {
        text-decoration: none;
    }
    
    nav>ul>a:hover .image {
        transition: all .4s ease;
        background: url(/assets/img/menu_hover.png) top center no-repeat;
        opacity: 1;
    }
    
    nav ul a:hover b {
        color: #ffbc62;
    }

    nav>ul>a>b {
        position: relative;
        transition: all .4s ease;
        background-color: #00000096;
        padding: 6px;
        color: #ffffff;
        font-size: 15px;
        letter-spacing: 1px;
        border-radius: 12px;
        font-family: 'Ubuntu';
        text-decoration: none;
    }
    nav>ul>a>b:hover {
        color: #ffbc62;
        text-decoration: none;
    }

    nav ul a .ico {
        position: absolute;
        display: block;
        transition: all .4s ease;
    }
    nav ul a:hover .ico {
        transform: translateY(-5px)
    }

    nav .sub-nav {
        text-align: left;
        position: absolute;
        top: calc(100% - 3px);
        left: calc(100% - 60px);
        background: url(/assets/img/sub-nav.png) repeat;
        padding: 5px 18px;
        width: 220px;
        box-shadow: 0 0 7px rgba(0, 0, 0, 0.8);
        z-index: 100;
        transition: all .3s ease;
        opacity: 0;
        visibility: hidden;
        transform: skewX(5deg) translate(20px, 20px);
        margin-left: -100px;
        margin-top: 2px;
    }
    nav .sub:hover .sub-nav {
        opacity: 1;
        visibility: visible;
        transform: skewX(0deg) translate(0, 0);
        transition: all .5s ease
    }
    nav .sub-nav li a {
        position: relative;
        z-index: 100;
        display: block;
        color: #453d3d !important;
        font-size: 14px;
        text-decoration: none;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #bebaab
    }
    nav .sub-nav li a:after {
        content: '';
        position: absolute;
        left: -18px;
        top: 0;
        height: 100%;
        width: calc(100% + 36px);
        background: rgba(0, 0, 0, 0.1);
        z-index: -1;
        opacity: 0;
        visibility: hidden;
        transform: rotateX(-180deg);
        transition: all .4s ease
    }
    nav .sub-nav li a:hover:after {
        opacity: 1;
        visibility: visible;
        transform: rotateX(0)
    }
    nav .sub-nav li a:hover {
        color: #985e41
    }

    .icon_home {
        width: 60px;
        height: 52px;
        margin-top: -50px;
        margin-left: 31px;
        background: url(/assets/img/icons/home.png) top center;
    }

    .icon_servers {
        width: 68px;
        height: 60px;
        margin-top: -50px;
        margin-left: 25px;
        background: url(/assets/img/icons/servers.png) top center;
    }

    .icon_donate {
        width: 55px;
        height: 63px;
        margin-top: -60px;
        margin-left: 31px;
        background: url(/assets/img/icons/donate.png) top center;
    }

    .icon_rules {
        width: 68px;
        height: 68px;
        margin-top: -60px;
        margin-left: 24px;
        background: url(/assets/img/icons/rules.png) top center;
    }

    .icon_project {
        width: 56px;
        height: 56px;
        margin-top: -52px;
        margin-left: 31px;
        background: url(/assets/img/icons/project.png) top center;
    }

    .icon_help {
        width: 73px;
        height: 63px;
        margin-top: -52px;
        margin-left: 20px;
        background: url(/assets/img/icons/help.png) top center;
    }

    .icon_effect {
        position: absolute;
        width: 116px;
        height: 118px;
        margin-top: -75px;
        background: url(/assets/img/icons/effect.png) center center;
        
        transition: all .4s ease;
        opacity: 0;
    }

    nav>ul>a:hover .icon_effect {
        transition: all .4s ease;
        opacity: 1;
    }

    .m2 {
        background: url(/assets/img/m2.png) -19px -16px;
    }

    .m3 {
        background: url(/assets/img/m3.png) -17px -12px;
    }

    .m4 {
        background: url(/assets/img/m4.png) -11px -19px;
    }

    .m5 {
        background: url(/assets/img/m5.png) -21px -21px;
    }

    .m6 {
        background: url(/assets/img/m6.png) -11px -25px;
    }

    .mforum {
        background: url(/assets/img/m_forum.png) -17px -19px;
    }

    .right-block-container {
        display: inline-block;
        margin-left: 23px;
    }
    .right-block {
        width: 275px;
        background: url(/assets/img/br.png);
        margin-right: 5px;
        padding-bottom: 10px;
        border-bottom: 1px solid #f3c271;
        box-shadow: 0px 1px 0px #ffe5bc;
    }

    .content {
        margin-left: 50px;
    }

    .footer {
        height: 220px;
        margin-left: -39px;
        margin-top: -16px;
        width: 1125px;
    }
    .footer-text {
        color: #ffd08a;
        padding: 64px 0 0 0px;
        font-family: 'Ubuntu';
        font-weight: 600;
        font-size: 20px;
        line-height: 23px;
        margin-left: 623px;
        margin-top: 50px;
        position: absolute;
    }

    .text_foot {
        font-size: 14px;
        line-height: 14px;
        margin-left: 1px;
    }

    .page_header{
        background: url('/assets/img/header_page.png');
        width: 730px;
        height: 138px;
        margin-left: -30px;
    }

    .page_text_header {
        text-align: center;
        font-family: "PT Sans Narrow", sans-serif;
        font-size: 38px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 105px;
        color: rgb(251, 247, 208);
        text-indent: 5px;
        text-shadow: rgba(0, 0, 0, 0.44) 3px 3px 3px;
    }

    a:focus {
        outline: 0;
    }

    .menu {
        z-index: 100000;
        position: absolute;
        top: 432px;
        left: -13px;
        width: 777px;
        height: 188px;
        background: url('/assets/img/menu.png') no-repeat;
    }

    .strat_anime {
        position: absolute;
        top: 266px;
        left: 908px;
        width: 121px;
        height: 200px;
        background: url('/assets/img/start_anime.png') no-repeat;
    }
    .strat_game {
        position: absolute;
        top: 437px;
        left: 750px;
        width: 310px;
        height: 131px;
        background: url('/assets/img/start.png') no-repeat;
        cursor: pointer;
        transition: 0.3s;
    }
    .strat_game:hover {
        background: url('/assets/img/start_hover.png') no-repeat;
        transition: 0.3s;
    }

    @font-face {
        font-family: 'FontAwesome';
        src: url('/assets/fonts/fontawesome-webfont.eot');
        src: url('/assets/fonts/fontawesome-webfont.eot') format('embedded-opentype'), 
        url('/assets/fonts/fontawesome-webfont.woff2') format('woff2'), 
        url('/assets/fonts/fontawesome-webfont.woff') format('woff'), 
        url('/assets/fonts/fontawesome-webfont.ttf') format('truetype'), 
        url('/assets/fonts/fontawesome-webfont.svg') format('svg');

        font-weight: normal;
        font-style: normal
    }

    .fa {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale
    }

    .fa-lg {
        font-size: 1.33333333em;
        line-height: .75em;
        vertical-align: -15%
    }

    .fa-2x {
        font-size: 2em
    }

    .fa-3x {
        font-size: 3em
    }

    .fa-4x {
        font-size: 4em
    }

    .fa-5x {
        font-size: 5em
    }

    .fa-fw {
        width: 1.28571429em;
        text-align: center
    }

    .fa-ul {
        padding-left: 0;
        margin-left: 2.14285714em;
        list-style-type: none
    }

    .fa-ul>li {
        position: relative
    }

    .fa-li {
        position: absolute;
        left: -2.14285714em;
        width: 2.14285714em;
        top: .14285714em;
        text-align: center
    }

    .fa-li.fa-lg {
        left: -1.85714286em
    }

    .fa-border {
        padding: .2em .25em .15em;
        border: solid .08em #eee;
        border-radius: .1em
    }

    .fa-pull-left {
        float: left
    }

    .fa-pull-right {
        float: right
    }

    .fa.fa-pull-left {
        margin-right: .3em
    }

    .fa.fa-pull-right {
        margin-left: .3em
    }

    .pull-right {
        float: right
    }

    .pull-left {
        float: left
    }

    .fa.pull-left {
        margin-right: .3em
    }

    .fa.pull-right {
        margin-left: .3em
    }

    .fa-spin {
        -webkit-animation: fa-spin 2s infinite linear;
        animation: fa-spin 2s infinite linear
    }

    .fa-pulse {
        -webkit-animation: fa-spin 1s infinite steps(8);
        animation: fa-spin 1s infinite steps(8)
    }

    @-webkit-keyframes fa-spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg)
        }
    }

    @keyframes fa-spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg)
        }
        100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg)
        }
    }

    .fa-rotate-90 {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .fa-rotate-180 {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .fa-rotate-270 {
        -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg)
    }

    .fa-flip-horizontal {
        -webkit-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        transform: scale(-1, 1)
    }

    .fa-flip-vertical {
        -webkit-transform: scale(1, -1);
        -ms-transform: scale(1, -1);
        transform: scale(1, -1)
    }

    :root .fa-rotate-90,
    :root .fa-rotate-180,
    :root .fa-rotate-270,
    :root .fa-flip-horizontal,
    :root .fa-flip-vertical {
        filter: none
    }

    .fa-stack {
        position: relative;
        display: inline-block;
        width: 2em;
        height: 2em;
        line-height: 2em;
        vertical-align: middle
    }

    .fa-stack-1x,
    .fa-stack-2x {
        position: absolute;
        left: 0;
        width: 100%;
        text-align: center
    }

    .fa-stack-1x {
        line-height: inherit
    }

    .fa-stack-2x {
        font-size: 2em
    }

    .fa-inverse {
        color: #fff
    }

    .fa-glass:before {
        content: "\f000"
    }

    .fa-music:before {
        content: "\f001"
    }

    .fa-search:before {
        content: "\f002"
    }

    .fa-envelope-o:before {
        content: "\f003"
    }

    .fa-heart:before {
        content: "\f004"
    }

    .fa-star:before {
        content: "\f005"
    }

    .fa-star-o:before {
        content: "\f006"
    }

    .fa-user:before {
        content: "\f007"
    }

    .fa-film:before {
        content: "\f008"
    }

    .fa-th-large:before {
        content: "\f009"
    }

    .fa-th:before {
        content: "\f00a"
    }

    .fa-th-list:before {
        content: "\f00b"
    }

    .fa-check:before {
        content: "\f00c"
    }

    .fa-remove:before,
    .fa-close:before,
    .fa-times:before {
        content: "\f00d"
    }

    .fa-search-plus:before {
        content: "\f00e"
    }

    .fa-search-minus:before {
        content: "\f010"
    }

    .fa-power-off:before {
        content: "\f011"
    }

    .fa-signal:before {
        content: "\f012"
    }

    .fa-gear:before,
    .fa-cog:before {
        content: "\f013"
    }

    .fa-trash-o:before {
        content: "\f014"
    }

    .fa-home:before {
        content: "\f015"
    }

    .fa-file-o:before {
        content: "\f016"
    }

    .fa-clock-o:before {
        content: "\f017"
    }

    .fa-road:before {
        content: "\f018"
    }

    .fa-download:before {
        content: "\f019"
    }

    .fa-arrow-circle-o-down:before {
        content: "\f01a"
    }

    .fa-arrow-circle-o-up:before {
        content: "\f01b"
    }

    .fa-inbox:before {
        content: "\f01c"
    }

    .fa-play-circle-o:before {
        content: "\f01d"
    }

    .fa-rotate-right:before,
    .fa-repeat:before {
        content: "\f01e"
    }

    .fa-refresh:before {
        content: "\f021"
    }

    .fa-list-alt:before {
        content: "\f022"
    }

    .fa-lock:before {
        content: "\f023"
    }

    .fa-flag:before {
        content: "\f024"
    }

    .fa-headphones:before {
        content: "\f025"
    }

    .fa-volume-off:before {
        content: "\f026"
    }

    .fa-volume-down:before {
        content: "\f027"
    }

    .fa-volume-up:before {
        content: "\f028"
    }

    .fa-qrcode:before {
        content: "\f029"
    }

    .fa-barcode:before {
        content: "\f02a"
    }

    .fa-tag:before {
        content: "\f02b"
    }

    .fa-tags:before {
        content: "\f02c"
    }

    .fa-book:before {
        content: "\f02d"
    }

    .fa-bookmark:before {
        content: "\f02e"
    }

    .fa-print:before {
        content: "\f02f"
    }

    .fa-camera:before {
        content: "\f030"
    }

    .fa-font:before {
        content: "\f031"
    }

    .fa-bold:before {
        content: "\f032"
    }

    .fa-italic:before {
        content: "\f033"
    }

    .fa-text-height:before {
        content: "\f034"
    }

    .fa-text-width:before {
        content: "\f035"
    }

    .fa-align-left:before {
        content: "\f036"
    }

    .fa-align-center:before {
        content: "\f037"
    }

    .fa-align-right:before {
        content: "\f038"
    }

    .fa-align-justify:before {
        content: "\f039"
    }

    .fa-list:before {
        content: "\f03a"
    }

    .fa-dedent:before,
    .fa-outdent:before {
        content: "\f03b"
    }

    .fa-indent:before {
        content: "\f03c"
    }

    .fa-video-camera:before {
        content: "\f03d"
    }

    .fa-photo:before,
    .fa-image:before,
    .fa-picture-o:before {
        content: "\f03e"
    }

    .fa-pencil:before {
        content: "\f040"
    }

    .fa-map-marker:before {
        content: "\f041"
    }

    .fa-adjust:before {
        content: "\f042"
    }

    .fa-tint:before {
        content: "\f043"
    }

    .fa-edit:before,
    .fa-pencil-square-o:before {
        content: "\f044"
    }

    .fa-share-square-o:before {
        content: "\f045"
    }

    .fa-check-square-o:before {
        content: "\f046"
    }

    .fa-arrows:before {
        content: "\f047"
    }

    .fa-step-backward:before {
        content: "\f048"
    }

    .fa-fast-backward:before {
        content: "\f049"
    }

    .fa-backward:before {
        content: "\f04a"
    }

    .fa-play:before {
        content: "\f04b"
    }

    .fa-pause:before {
        content: "\f04c"
    }

    .fa-stop:before {
        content: "\f04d"
    }

    .fa-forward:before {
        content: "\f04e"
    }

    .fa-fast-forward:before {
        content: "\f050"
    }

    .fa-step-forward:before {
        content: "\f051"
    }

    .fa-eject:before {
        content: "\f052"
    }

    .fa-chevron-left:before {
        content: "\f053"
    }

    .fa-chevron-right:before {
        content: "\f054"
    }

    .fa-plus-circle:before {
        content: "\f055"
    }

    .fa-minus-circle:before {
        content: "\f056"
    }

    .fa-times-circle:before {
        content: "\f057"
    }

    .fa-check-circle:before {
        content: "\f058"
    }

    .fa-question-circle:before {
        content: "\f059"
    }

    .fa-info-circle:before {
        content: "\f05a"
    }

    .fa-crosshairs:before {
        content: "\f05b"
    }

    .fa-times-circle-o:before {
        content: "\f05c"
    }

    .fa-check-circle-o:before {
        content: "\f05d"
    }

    .fa-ban:before {
        content: "\f05e"
    }

    .fa-arrow-left:before {
        content: "\f060"
    }

    .fa-arrow-right:before {
        content: "\f061"
    }

    .fa-arrow-up:before {
        content: "\f062"
    }

    .fa-arrow-down:before {
        content: "\f063"
    }

    .fa-mail-forward:before,
    .fa-share:before {
        content: "\f064"
    }

    .fa-expand:before {
        content: "\f065"
    }

    .fa-compress:before {
        content: "\f066"
    }

    .fa-plus:before {
        content: "\f067"
    }

    .fa-minus:before {
        content: "\f068"
    }

    .fa-asterisk:before {
        content: "\f069"
    }

    .fa-exclamation-circle:before {
        content: "\f06a"
    }

    .fa-gift:before {
        content: "\f06b"
    }

    .fa-leaf:before {
        content: "\f06c"
    }

    .fa-fire:before {
        content: "\f06d"
    }

    .fa-eye:before {
        content: "\f06e"
    }

    .fa-eye-slash:before {
        content: "\f070"
    }

    .fa-warning:before,
    .fa-exclamation-triangle:before {
        content: "\f071"
    }

    .fa-plane:before {
        content: "\f072"
    }

    .fa-calendar:before {
        content: "\f073"
    }

    .fa-random:before {
        content: "\f074"
    }

    .fa-comment:before {
        content: "\f075"
    }

    .fa-magnet:before {
        content: "\f076"
    }

    .fa-chevron-up:before {
        content: "\f077"
    }

    .fa-chevron-down:before {
        content: "\f078"
    }

    .fa-retweet:before {
        content: "\f079"
    }

    .fa-shopping-cart:before {
        content: "\f07a"
    }

    .fa-folder:before {
        content: "\f07b"
    }

    .fa-folder-open:before {
        content: "\f07c"
    }

    .fa-arrows-v:before {
        content: "\f07d"
    }

    .fa-arrows-h:before {
        content: "\f07e"
    }

    .fa-bar-chart-o:before,
    .fa-bar-chart:before {
        content: "\f080"
    }

    .fa-twitter-square:before {
        content: "\f081"
    }

    .fa-facebook-square:before {
        content: "\f082"
    }

    .fa-camera-retro:before {
        content: "\f083"
    }

    .fa-key:before {
        content: "\f084"
    }

    .fa-gears:before,
    .fa-cogs:before {
        content: "\f085"
    }

    .fa-comments:before {
        content: "\f086"
    }

    .fa-thumbs-o-up:before {
        content: "\f087"
    }

    .fa-thumbs-o-down:before {
        content: "\f088"
    }

    .fa-star-half:before {
        content: "\f089"
    }

    .fa-heart-o:before {
        content: "\f08a"
    }

    .fa-sign-out:before {
        content: "\f08b"
    }

    .fa-linkedin-square:before {
        content: "\f08c"
    }

    .fa-thumb-tack:before {
        content: "\f08d"
    }

    .fa-external-link:before {
        content: "\f08e"
    }

    .fa-sign-in:before {
        content: "\f090"
    }

    .fa-trophy:before {
        content: "\f091"
    }

    .fa-github-square:before {
        content: "\f092"
    }

    .fa-upload:before {
        content: "\f093"
    }

    .fa-lemon-o:before {
        content: "\f094"
    }

    .fa-phone:before {
        content: "\f095"
    }

    .fa-square-o:before {
        content: "\f096"
    }

    .fa-bookmark-o:before {
        content: "\f097"
    }

    .fa-phone-square:before {
        content: "\f098"
    }

    .fa-twitter:before {
        content: "\f099"
    }

    .fa-facebook-f:before,
    .fa-facebook:before {
        content: "\f09a"
    }

    .fa-github:before {
        content: "\f09b"
    }

    .fa-unlock:before {
        content: "\f09c"
    }

    .fa-credit-card:before {
        content: "\f09d"
    }

    .fa-feed:before,
    .fa-rss:before {
        content: "\f09e"
    }

    .fa-hdd-o:before {
        content: "\f0a0"
    }

    .fa-bullhorn:before {
        content: "\f0a1"
    }

    .fa-bell:before {
        content: "\f0f3"
    }

    .fa-certificate:before {
        content: "\f0a3"
    }

    .fa-hand-o-right:before {
        content: "\f0a4"
    }

    .fa-hand-o-left:before {
        content: "\f0a5"
    }

    .fa-hand-o-up:before {
        content: "\f0a6"
    }

    .fa-hand-o-down:before {
        content: "\f0a7"
    }

    .fa-arrow-circle-left:before {
        content: "\f0a8"
    }

    .fa-arrow-circle-right:before {
        content: "\f0a9"
    }

    .fa-arrow-circle-up:before {
        content: "\f0aa"
    }

    .fa-arrow-circle-down:before {
        content: "\f0ab"
    }

    .fa-globe:before {
        content: "\f0ac"
    }

    .fa-wrench:before {
        content: "\f0ad"
    }

    .fa-tasks:before {
        content: "\f0ae"
    }

    .fa-filter:before {
        content: "\f0b0"
    }

    .fa-briefcase:before {
        content: "\f0b1"
    }

    .fa-arrows-alt:before {
        content: "\f0b2"
    }

    .fa-group:before,
    .fa-users:before {
        content: "\f0c0"
    }

    .fa-chain:before,
    .fa-link:before {
        content: "\f0c1"
    }

    .fa-cloud:before {
        content: "\f0c2"
    }

    .fa-flask:before {
        content: "\f0c3"
    }

    .fa-cut:before,
    .fa-scissors:before {
        content: "\f0c4"
    }

    .fa-copy:before,
    .fa-files-o:before {
        content: "\f0c5"
    }

    .fa-paperclip:before {
        content: "\f0c6"
    }

    .fa-save:before,
    .fa-floppy-o:before {
        content: "\f0c7"
    }

    .fa-square:before {
        content: "\f0c8"
    }

    .fa-navicon:before,
    .fa-reorder:before,
    .fa-bars:before {
        content: "\f0c9"
    }

    .fa-list-ul:before {
        content: "\f0ca"
    }

    .fa-list-ol:before {
        content: "\f0cb"
    }

    .fa-strikethrough:before {
        content: "\f0cc"
    }

    .fa-underline:before {
        content: "\f0cd"
    }

    .fa-table:before {
        content: "\f0ce"
    }

    .fa-magic:before {
        content: "\f0d0"
    }

    .fa-truck:before {
        content: "\f0d1"
    }

    .fa-pinterest:before {
        content: "\f0d2"
    }

    .fa-pinterest-square:before {
        content: "\f0d3"
    }

    .fa-google-plus-square:before {
        content: "\f0d4"
    }

    .fa-google-plus:before {
        content: "\f0d5"
    }

    .fa-money:before {
        content: "\f0d6"
    }

    .fa-caret-down:before {
        content: "\f0d7"
    }

    .fa-caret-up:before {
        content: "\f0d8"
    }

    .fa-caret-left:before {
        content: "\f0d9"
    }

    .fa-caret-right:before {
        content: "\f0da"
    }

    .fa-columns:before {
        content: "\f0db"
    }

    .fa-unsorted:before,
    .fa-sort:before {
        content: "\f0dc"
    }

    .fa-sort-down:before,
    .fa-sort-desc:before {
        content: "\f0dd"
    }

    .fa-sort-up:before,
    .fa-sort-asc:before {
        content: "\f0de"
    }

    .fa-envelope:before {
        content: "\f0e0"
    }

    .fa-linkedin:before {
        content: "\f0e1"
    }

    .fa-rotate-left:before,
    .fa-undo:before {
        content: "\f0e2"
    }

    .fa-legal:before,
    .fa-gavel:before {
        content: "\f0e3"
    }

    .fa-dashboard:before,
    .fa-tachometer:before {
        content: "\f0e4"
    }

    .fa-comment-o:before {
        content: "\f0e5"
    }

    .fa-comments-o:before {
        content: "\f0e6"
    }

    .fa-flash:before,
    .fa-bolt:before {
        content: "\f0e7"
    }

    .fa-sitemap:before {
        content: "\f0e8"
    }

    .fa-umbrella:before {
        content: "\f0e9"
    }

    .fa-paste:before,
    .fa-clipboard:before {
        content: "\f0ea"
    }

    .fa-lightbulb-o:before {
        content: "\f0eb"
    }

    .fa-exchange:before {
        content: "\f0ec"
    }

    .fa-cloud-download:before {
        content: "\f0ed"
    }

    .fa-cloud-upload:before {
        content: "\f0ee"
    }

    .fa-user-md:before {
        content: "\f0f0"
    }

    .fa-stethoscope:before {
        content: "\f0f1"
    }

    .fa-suitcase:before {
        content: "\f0f2"
    }

    .fa-bell-o:before {
        content: "\f0a2"
    }

    .fa-coffee:before {
        content: "\f0f4"
    }

    .fa-cutlery:before {
        content: "\f0f5"
    }

    .fa-file-text-o:before {
        content: "\f0f6"
    }

    .fa-building-o:before {
        content: "\f0f7"
    }

    .fa-hospital-o:before {
        content: "\f0f8"
    }

    .fa-ambulance:before {
        content: "\f0f9"
    }

    .fa-medkit:before {
        content: "\f0fa"
    }

    .fa-fighter-jet:before {
        content: "\f0fb"
    }

    .fa-beer:before {
        content: "\f0fc"
    }

    .fa-h-square:before {
        content: "\f0fd"
    }

    .fa-plus-square:before {
        content: "\f0fe"
    }

    .fa-angle-double-left:before {
        content: "\f100"
    }

    .fa-angle-double-right:before {
        content: "\f101"
    }

    .fa-angle-double-up:before {
        content: "\f102"
    }

    .fa-angle-double-down:before {
        content: "\f103"
    }

    .fa-angle-left:before {
        content: "\f104"
    }

    .fa-angle-right:before {
        content: "\f105"
    }

    .fa-angle-up:before {
        content: "\f106"
    }

    .fa-angle-down:before {
        content: "\f107"
    }

    .fa-desktop:before {
        content: "\f108"
    }

    .fa-laptop:before {
        content: "\f109"
    }

    .fa-tablet:before {
        content: "\f10a"
    }

    .fa-mobile-phone:before,
    .fa-mobile:before {
        content: "\f10b"
    }

    .fa-circle-o:before {
        content: "\f10c"
    }

    .fa-quote-left:before {
        content: "\f10d"
    }

    .fa-quote-right:before {
        content: "\f10e"
    }

    .fa-spinner:before {
        content: "\f110"
    }

    .fa-circle:before {
        content: "\f111"
    }

    .fa-mail-reply:before,
    .fa-reply:before {
        content: "\f112"
    }

    .fa-github-alt:before {
        content: "\f113"
    }

    .fa-folder-o:before {
        content: "\f114"
    }

    .fa-folder-open-o:before {
        content: "\f115"
    }

    .fa-smile-o:before {
        content: "\f118"
    }

    .fa-frown-o:before {
        content: "\f119"
    }

    .fa-meh-o:before {
        content: "\f11a"
    }

    .fa-gamepad:before {
        content: "\f11b"
    }

    .fa-keyboard-o:before {
        content: "\f11c"
    }

    .fa-flag-o:before {
        content: "\f11d"
    }

    .fa-flag-checkered:before {
        content: "\f11e"
    }

    .fa-terminal:before {
        content: "\f120"
    }

    .fa-code:before {
        content: "\f121"
    }

    .fa-mail-reply-all:before,
    .fa-reply-all:before {
        content: "\f122"
    }

    .fa-star-half-empty:before,
    .fa-star-half-full:before,
    .fa-star-half-o:before {
        content: "\f123"
    }

    .fa-location-arrow:before {
        content: "\f124"
    }

    .fa-crop:before {
        content: "\f125"
    }

    .fa-code-fork:before {
        content: "\f126"
    }

    .fa-unlink:before,
    .fa-chain-broken:before {
        content: "\f127"
    }

    .fa-question:before {
        content: "\f128"
    }

    .fa-info:before {
        content: "\f129"
    }

    .fa-exclamation:before {
        content: "\f12a"
    }

    .fa-superscript:before {
        content: "\f12b"
    }

    .fa-subscript:before {
        content: "\f12c"
    }

    .fa-eraser:before {
        content: "\f12d"
    }

    .fa-puzzle-piece:before {
        content: "\f12e"
    }

    .fa-microphone:before {
        content: "\f130"
    }

    .fa-microphone-slash:before {
        content: "\f131"
    }

    .fa-shield:before {
        content: "\f132"
    }

    .fa-calendar-o:before {
        content: "\f133"
    }

    .fa-fire-extinguisher:before {
        content: "\f134"
    }

    .fa-rocket:before {
        content: "\f135"
    }

    .fa-maxcdn:before {
        content: "\f136"
    }

    .fa-chevron-circle-left:before {
        content: "\f137"
    }

    .fa-chevron-circle-right:before {
        content: "\f138"
    }

    .fa-chevron-circle-up:before {
        content: "\f139"
    }

    .fa-chevron-circle-down:before {
        content: "\f13a"
    }

    .fa-html5:before {
        content: "\f13b"
    }

    .fa-css3:before {
        content: "\f13c"
    }

    .fa-anchor:before {
        content: "\f13d"
    }

    .fa-unlock-alt:before {
        content: "\f13e"
    }

    .fa-bullseye:before {
        content: "\f140"
    }

    .fa-ellipsis-h:before {
        content: "\f141"
    }

    .fa-ellipsis-v:before {
        content: "\f142"
    }

    .fa-rss-square:before {
        content: "\f143"
    }

    .fa-play-circle:before {
        content: "\f144"
    }

    .fa-ticket:before {
        content: "\f145"
    }

    .fa-minus-square:before {
        content: "\f146"
    }

    .fa-minus-square-o:before {
        content: "\f147"
    }

    .fa-level-up:before {
        content: "\f148"
    }

    .fa-level-down:before {
        content: "\f149"
    }

    .fa-check-square:before {
        content: "\f14a"
    }

    .fa-pencil-square:before {
        content: "\f14b"
    }

    .fa-external-link-square:before {
        content: "\f14c"
    }

    .fa-share-square:before {
        content: "\f14d"
    }

    .fa-compass:before {
        content: "\f14e"
    }

    .fa-toggle-down:before,
    .fa-caret-square-o-down:before {
        content: "\f150"
    }

    .fa-toggle-up:before,
    .fa-caret-square-o-up:before {
        content: "\f151"
    }

    .fa-toggle-right:before,
    .fa-caret-square-o-right:before {
        content: "\f152"
    }

    .fa-euro:before,
    .fa-eur:before {
        content: "\f153"
    }

    .fa-gbp:before {
        content: "\f154"
    }

    .fa-dollar:before,
    .fa-usd:before {
        content: "\f155"
    }

    .fa-rupee:before,
    .fa-inr:before {
        content: "\f156"
    }

    .fa-cny:before,
    .fa-rmb:before,
    .fa-yen:before,
    .fa-jpy:before {
        content: "\f157"
    }

    .fa-ruble:before,
    .fa-rouble:before,
    .fa-rub:before {
        content: "\f158"
    }

    .fa-won:before,
    .fa-krw:before {
        content: "\f159"
    }

    .fa-bitcoin:before,
    .fa-btc:before {
        content: "\f15a"
    }

    .fa-file:before {
        content: "\f15b"
    }

    .fa-file-text:before {
        content: "\f15c"
    }

    .fa-sort-alpha-asc:before {
        content: "\f15d"
    }

    .fa-sort-alpha-desc:before {
        content: "\f15e"
    }

    .fa-sort-amount-asc:before {
        content: "\f160"
    }

    .fa-sort-amount-desc:before {
        content: "\f161"
    }

    .fa-sort-numeric-asc:before {
        content: "\f162"
    }

    .fa-sort-numeric-desc:before {
        content: "\f163"
    }

    .fa-thumbs-up:before {
        content: "\f164"
    }

    .fa-thumbs-down:before {
        content: "\f165"
    }

    .fa-youtube-square:before {
        content: "\f166"
    }

    .fa-youtube:before {
        content: "\f167"
    }

    .fa-xing:before {
        content: "\f168"
    }

    .fa-xing-square:before {
        content: "\f169"
    }

    .fa-youtube-play:before {
        content: "\f16a"
    }

    .fa-dropbox:before {
        content: "\f16b"
    }

    .fa-stack-overflow:before {
        content: "\f16c"
    }

    .fa-instagram:before {
        content: "\f16d"
    }

    .fa-flickr:before {
        content: "\f16e"
    }

    .fa-adn:before {
        content: "\f170"
    }

    .fa-bitbucket:before {
        content: "\f171"
    }

    .fa-bitbucket-square:before {
        content: "\f172"
    }

    .fa-tumblr:before {
        content: "\f173"
    }

    .fa-tumblr-square:before {
        content: "\f174"
    }

    .fa-long-arrow-down:before {
        content: "\f175"
    }

    .fa-long-arrow-up:before {
        content: "\f176"
    }

    .fa-long-arrow-left:before {
        content: "\f177"
    }

    .fa-long-arrow-right:before {
        content: "\f178"
    }

    .fa-apple:before {
        content: "\f179"
    }

    .fa-windows:before {
        content: "\f17a"
    }

    .fa-android:before {
        content: "\f17b"
    }

    .fa-linux:before {
        content: "\f17c"
    }

    .fa-dribbble:before {
        content: "\f17d"
    }

    .fa-skype:before {
        content: "\f17e"
    }

    .fa-foursquare:before {
        content: "\f180"
    }

    .fa-trello:before {
        content: "\f181"
    }

    .fa-female:before {
        content: "\f182"
    }

    .fa-male:before {
        content: "\f183"
    }

    .fa-gittip:before,
    .fa-gratipay:before {
        content: "\f184"
    }

    .fa-sun-o:before {
        content: "\f185"
    }

    .fa-moon-o:before {
        content: "\f186"
    }

    .fa-archive:before {
        content: "\f187"
    }

    .fa-bug:before {
        content: "\f188"
    }

    .fa-vk:before {
        content: "\f189"
    }

    .fa-weibo:before {
        content: "\f18a"
    }

    .fa-renren:before {
        content: "\f18b"
    }

    .fa-pagelines:before {
        content: "\f18c"
    }

    .fa-stack-exchange:before {
        content: "\f18d"
    }

    .fa-arrow-circle-o-right:before {
        content: "\f18e"
    }

    .fa-arrow-circle-o-left:before {
        content: "\f190"
    }

    .fa-toggle-left:before,
    .fa-caret-square-o-left:before {
        content: "\f191"
    }

    .fa-dot-circle-o:before {
        content: "\f192"
    }

    .fa-wheelchair:before {
        content: "\f193"
    }

    .fa-vimeo-square:before {
        content: "\f194"
    }

    .fa-turkish-lira:before,
    .fa-try:before {
        content: "\f195"
    }

    .fa-plus-square-o:before {
        content: "\f196"
    }

    .fa-space-shuttle:before {
        content: "\f197"
    }

    .fa-slack:before {
        content: "\f198"
    }

    .fa-envelope-square:before {
        content: "\f199"
    }

    .fa-wordpress:before {
        content: "\f19a"
    }

    .fa-openid:before {
        content: "\f19b"
    }

    .fa-institution:before,
    .fa-bank:before,
    .fa-university:before {
        content: "\f19c"
    }

    .fa-mortar-board:before,
    .fa-graduation-cap:before {
        content: "\f19d"
    }

    .fa-yahoo:before {
        content: "\f19e"
    }

    .fa-google:before {
        content: "\f1a0"
    }

    .fa-reddit:before {
        content: "\f1a1"
    }

    .fa-reddit-square:before {
        content: "\f1a2"
    }

    .fa-stumbleupon-circle:before {
        content: "\f1a3"
    }

    .fa-stumbleupon:before {
        content: "\f1a4"
    }

    .fa-delicious:before {
        content: "\f1a5"
    }

    .fa-digg:before {
        content: "\f1a6"
    }

    .fa-pied-piper-pp:before {
        content: "\f1a7"
    }

    .fa-pied-piper-alt:before {
        content: "\f1a8"
    }

    .fa-drupal:before {
        content: "\f1a9"
    }

    .fa-joomla:before {
        content: "\f1aa"
    }

    .fa-language:before {
        content: "\f1ab"
    }

    .fa-fax:before {
        content: "\f1ac"
    }

    .fa-building:before {
        content: "\f1ad"
    }

    .fa-child:before {
        content: "\f1ae"
    }

    .fa-paw:before {
        content: "\f1b0"
    }

    .fa-spoon:before {
        content: "\f1b1"
    }

    .fa-cube:before {
        content: "\f1b2"
    }

    .fa-cubes:before {
        content: "\f1b3"
    }

    .fa-behance:before {
        content: "\f1b4"
    }

    .fa-behance-square:before {
        content: "\f1b5"
    }

    .fa-steam:before {
        content: "\f1b6"
    }

    .fa-steam-square:before {
        content: "\f1b7"
    }

    .fa-recycle:before {
        content: "\f1b8"
    }

    .fa-automobile:before,
    .fa-car:before {
        content: "\f1b9"
    }

    .fa-cab:before,
    .fa-taxi:before {
        content: "\f1ba"
    }

    .fa-tree:before {
        content: "\f1bb"
    }

    .fa-spotify:before {
        content: "\f1bc"
    }

    .fa-deviantart:before {
        content: "\f1bd"
    }

    .fa-soundcloud:before {
        content: "\f1be"
    }

    .fa-database:before {
        content: "\f1c0"
    }

    .fa-file-pdf-o:before {
        content: "\f1c1"
    }

    .fa-file-word-o:before {
        content: "\f1c2"
    }

    .fa-file-excel-o:before {
        content: "\f1c3"
    }

    .fa-file-powerpoint-o:before {
        content: "\f1c4"
    }

    .fa-file-photo-o:before,
    .fa-file-picture-o:before,
    .fa-file-image-o:before {
        content: "\f1c5"
    }

    .fa-file-zip-o:before,
    .fa-file-archive-o:before {
        content: "\f1c6"
    }

    .fa-file-sound-o:before,
    .fa-file-audio-o:before {
        content: "\f1c7"
    }

    .fa-file-movie-o:before,
    .fa-file-video-o:before {
        content: "\f1c8"
    }

    .fa-file-code-o:before {
        content: "\f1c9"
    }

    .fa-vine:before {
        content: "\f1ca"
    }

    .fa-codepen:before {
        content: "\f1cb"
    }

    .fa-jsfiddle:before {
        content: "\f1cc"
    }

    .fa-life-bouy:before,
    .fa-life-buoy:before,
    .fa-life-saver:before,
    .fa-support:before,
    .fa-life-ring:before {
        content: "\f1cd"
    }

    .fa-circle-o-notch:before {
        content: "\f1ce"
    }

    .fa-ra:before,
    .fa-resistance:before,
    .fa-rebel:before {
        content: "\f1d0"
    }

    .fa-ge:before,
    .fa-empire:before {
        content: "\f1d1"
    }

    .fa-git-square:before {
        content: "\f1d2"
    }

    .fa-git:before {
        content: "\f1d3"
    }

    .fa-y-combinator-square:before,
    .fa-yc-square:before,
    .fa-hacker-news:before {
        content: "\f1d4"
    }

    .fa-tencent-weibo:before {
        content: "\f1d5"
    }

    .fa-qq:before {
        content: "\f1d6"
    }

    .fa-wechat:before,
    .fa-weixin:before {
        content: "\f1d7"
    }

    .fa-send:before,
    .fa-paper-plane:before {
        content: "\f1d8"
    }

    .fa-send-o:before,
    .fa-paper-plane-o:before {
        content: "\f1d9"
    }

    .fa-history:before {
        content: "\f1da"
    }

    .fa-circle-thin:before {
        content: "\f1db"
    }

    .fa-header:before {
        content: "\f1dc"
    }

    .fa-paragraph:before {
        content: "\f1dd"
    }

    .fa-sliders:before {
        content: "\f1de"
    }

    .fa-share-alt:before {
        content: "\f1e0"
    }

    .fa-share-alt-square:before {
        content: "\f1e1"
    }

    .fa-bomb:before {
        content: "\f1e2"
    }

    .fa-soccer-ball-o:before,
    .fa-futbol-o:before {
        content: "\f1e3"
    }

    .fa-tty:before {
        content: "\f1e4"
    }

    .fa-binoculars:before {
        content: "\f1e5"
    }

    .fa-plug:before {
        content: "\f1e6"
    }

    .fa-slideshare:before {
        content: "\f1e7"
    }

    .fa-twitch:before {
        content: "\f1e8"
    }

    .fa-yelp:before {
        content: "\f1e9"
    }

    .fa-newspaper-o:before {
        content: "\f1ea"
    }

    .fa-wifi:before {
        content: "\f1eb"
    }

    .fa-calculator:before {
        content: "\f1ec"
    }

    .fa-paypal:before {
        content: "\f1ed"
    }

    .fa-google-wallet:before {
        content: "\f1ee"
    }

    .fa-cc-visa:before {
        content: "\f1f0"
    }

    .fa-cc-mastercard:before {
        content: "\f1f1"
    }

    .fa-cc-discover:before {
        content: "\f1f2"
    }

    .fa-cc-amex:before {
        content: "\f1f3"
    }

    .fa-cc-paypal:before {
        content: "\f1f4"
    }

    .fa-cc-stripe:before {
        content: "\f1f5"
    }

    .fa-bell-slash:before {
        content: "\f1f6"
    }

    .fa-bell-slash-o:before {
        content: "\f1f7"
    }

    .fa-trash:before {
        content: "\f1f8"
    }

    .fa-copyright:before {
        content: "\f1f9"
    }

    .fa-at:before {
        content: "\f1fa"
    }

    .fa-eyedropper:before {
        content: "\f1fb"
    }

    .fa-paint-brush:before {
        content: "\f1fc"
    }

    .fa-birthday-cake:before {
        content: "\f1fd"
    }

    .fa-area-chart:before {
        content: "\f1fe"
    }

    .fa-pie-chart:before {
        content: "\f200"
    }

    .fa-line-chart:before {
        content: "\f201"
    }

    .fa-lastfm:before {
        content: "\f202"
    }

    .fa-lastfm-square:before {
        content: "\f203"
    }

    .fa-toggle-off:before {
        content: "\f204"
    }

    .fa-toggle-on:before {
        content: "\f205"
    }

    .fa-bicycle:before {
        content: "\f206"
    }

    .fa-bus:before {
        content: "\f207"
    }

    .fa-ioxhost:before {
        content: "\f208"
    }

    .fa-angellist:before {
        content: "\f209"
    }

    .fa-cc:before {
        content: "\f20a"
    }

    .fa-shekel:before,
    .fa-sheqel:before,
    .fa-ils:before {
        content: "\f20b"
    }

    .fa-meanpath:before {
        content: "\f20c"
    }

    .fa-buysellads:before {
        content: "\f20d"
    }

    .fa-connectdevelop:before {
        content: "\f20e"
    }

    .fa-dashcube:before {
        content: "\f210"
    }

    .fa-forumbee:before {
        content: "\f211"
    }

    .fa-leanpub:before {
        content: "\f212"
    }

    .fa-sellsy:before {
        content: "\f213"
    }

    .fa-shirtsinbulk:before {
        content: "\f214"
    }

    .fa-simplybuilt:before {
        content: "\f215"
    }

    .fa-skyatlas:before {
        content: "\f216"
    }

    .fa-cart-plus:before {
        content: "\f217"
    }

    .fa-cart-arrow-down:before {
        content: "\f218"
    }

    .fa-diamond:before {
        content: "\f219"
    }

    .fa-ship:before {
        content: "\f21a"
    }

    .fa-user-secret:before {
        content: "\f21b"
    }

    .fa-motorcycle:before {
        content: "\f21c"
    }

    .fa-street-view:before {
        content: "\f21d"
    }

    .fa-heartbeat:before {
        content: "\f21e"
    }

    .fa-venus:before {
        content: "\f221"
    }

    .fa-mars:before {
        content: "\f222"
    }

    .fa-mercury:before {
        content: "\f223"
    }

    .fa-intersex:before,
    .fa-transgender:before {
        content: "\f224"
    }

    .fa-transgender-alt:before {
        content: "\f225"
    }

    .fa-venus-double:before {
        content: "\f226"
    }

    .fa-mars-double:before {
        content: "\f227"
    }

    .fa-venus-mars:before {
        content: "\f228"
    }

    .fa-mars-stroke:before {
        content: "\f229"
    }

    .fa-mars-stroke-v:before {
        content: "\f22a"
    }

    .fa-mars-stroke-h:before {
        content: "\f22b"
    }

    .fa-neuter:before {
        content: "\f22c"
    }

    .fa-genderless:before {
        content: "\f22d"
    }

    .fa-facebook-official:before {
        content: "\f230"
    }

    .fa-pinterest-p:before {
        content: "\f231"
    }

    .fa-whatsapp:before {
        content: "\f232"
    }

    .fa-server:before {
        content: "\f233"
    }

    .fa-user-plus:before {
        content: "\f234"
    }

    .fa-user-times:before {
        content: "\f235"
    }

    .fa-hotel:before,
    .fa-bed:before {
        content: "\f236"
    }

    .fa-viacoin:before {
        content: "\f237"
    }

    .fa-train:before {
        content: "\f238"
    }

    .fa-subway:before {
        content: "\f239"
    }

    .fa-medium:before {
        content: "\f23a"
    }

    .fa-yc:before,
    .fa-y-combinator:before {
        content: "\f23b"
    }

    .fa-optin-monster:before {
        content: "\f23c"
    }

    .fa-opencart:before {
        content: "\f23d"
    }

    .fa-expeditedssl:before {
        content: "\f23e"
    }

    .fa-battery-4:before,
    .fa-battery:before,
    .fa-battery-full:before {
        content: "\f240"
    }

    .fa-battery-3:before,
    .fa-battery-three-quarters:before {
        content: "\f241"
    }

    .fa-battery-2:before,
    .fa-battery-half:before {
        content: "\f242"
    }

    .fa-battery-1:before,
    .fa-battery-quarter:before {
        content: "\f243"
    }

    .fa-battery-0:before,
    .fa-battery-empty:before {
        content: "\f244"
    }

    .fa-mouse-pointer:before {
        content: "\f245"
    }

    .fa-i-cursor:before {
        content: "\f246"
    }

    .fa-object-group:before {
        content: "\f247"
    }

    .fa-object-ungroup:before {
        content: "\f248"
    }

    .fa-sticky-note:before {
        content: "\f249"
    }

    .fa-sticky-note-o:before {
        content: "\f24a"
    }

    .fa-cc-jcb:before {
        content: "\f24b"
    }

    .fa-cc-diners-club:before {
        content: "\f24c"
    }

    .fa-clone:before {
        content: "\f24d"
    }

    .fa-balance-scale:before {
        content: "\f24e"
    }

    .fa-hourglass-o:before {
        content: "\f250"
    }

    .fa-hourglass-1:before,
    .fa-hourglass-start:before {
        content: "\f251"
    }

    .fa-hourglass-2:before,
    .fa-hourglass-half:before {
        content: "\f252"
    }

    .fa-hourglass-3:before,
    .fa-hourglass-end:before {
        content: "\f253"
    }

    .fa-hourglass:before {
        content: "\f254"
    }

    .fa-hand-grab-o:before,
    .fa-hand-rock-o:before {
        content: "\f255"
    }

    .fa-hand-stop-o:before,
    .fa-hand-paper-o:before {
        content: "\f256"
    }

    .fa-hand-scissors-o:before {
        content: "\f257"
    }

    .fa-hand-lizard-o:before {
        content: "\f258"
    }

    .fa-hand-spock-o:before {
        content: "\f259"
    }

    .fa-hand-pointer-o:before {
        content: "\f25a"
    }

    .fa-hand-peace-o:before {
        content: "\f25b"
    }

    .fa-trademark:before {
        content: "\f25c"
    }

    .fa-registered:before {
        content: "\f25d"
    }

    .fa-creative-commons:before {
        content: "\f25e"
    }

    .fa-gg:before {
        content: "\f260"
    }

    .fa-gg-circle:before {
        content: "\f261"
    }

    .fa-tripadvisor:before {
        content: "\f262"
    }

    .fa-odnoklassniki:before {
        content: "\f263"
    }

    .fa-odnoklassniki-square:before {
        content: "\f264"
    }

    .fa-get-pocket:before {
        content: "\f265"
    }

    .fa-wikipedia-w:before {
        content: "\f266"
    }

    .fa-safari:before {
        content: "\f267"
    }

    .fa-chrome:before {
        content: "\f268"
    }

    .fa-firefox:before {
        content: "\f269"
    }

    .fa-opera:before {
        content: "\f26a"
    }

    .fa-internet-explorer:before {
        content: "\f26b"
    }

    .fa-tv:before,
    .fa-television:before {
        content: "\f26c"
    }

    .fa-contao:before {
        content: "\f26d"
    }

    .fa-500px:before {
        content: "\f26e"
    }

    .fa-amazon:before {
        content: "\f270"
    }

    .fa-calendar-plus-o:before {
        content: "\f271"
    }

    .fa-calendar-minus-o:before {
        content: "\f272"
    }

    .fa-calendar-times-o:before {
        content: "\f273"
    }

    .fa-calendar-check-o:before {
        content: "\f274"
    }

    .fa-industry:before {
        content: "\f275"
    }

    .fa-map-pin:before {
        content: "\f276"
    }

    .fa-map-signs:before {
        content: "\f277"
    }

    .fa-map-o:before {
        content: "\f278"
    }

    .fa-map:before {
        content: "\f279"
    }

    .fa-commenting:before {
        content: "\f27a"
    }

    .fa-commenting-o:before {
        content: "\f27b"
    }

    .fa-houzz:before {
        content: "\f27c"
    }

    .fa-vimeo:before {
        content: "\f27d"
    }

    .fa-black-tie:before {
        content: "\f27e"
    }

    .fa-fonticons:before {
        content: "\f280"
    }

    .fa-reddit-alien:before {
        content: "\f281"
    }

    .fa-edge:before {
        content: "\f282"
    }

    .fa-credit-card-alt:before {
        content: "\f283"
    }

    .fa-codiepie:before {
        content: "\f284"
    }

    .fa-modx:before {
        content: "\f285"
    }

    .fa-fort-awesome:before {
        content: "\f286"
    }

    .fa-usb:before {
        content: "\f287"
    }

    .fa-product-hunt:before {
        content: "\f288"
    }

    .fa-mixcloud:before {
        content: "\f289"
    }

    .fa-scribd:before {
        content: "\f28a"
    }

    .fa-pause-circle:before {
        content: "\f28b"
    }

    .fa-pause-circle-o:before {
        content: "\f28c"
    }

    .fa-stop-circle:before {
        content: "\f28d"
    }

    .fa-stop-circle-o:before {
        content: "\f28e"
    }

    .fa-shopping-bag:before {
        content: "\f290"
    }

    .fa-shopping-basket:before {
        content: "\f291"
    }

    .fa-hashtag:before {
        content: "\f292"
    }

    .fa-bluetooth:before {
        content: "\f293"
    }

    .fa-bluetooth-b:before {
        content: "\f294"
    }

    .fa-percent:before {
        content: "\f295"
    }

    .fa-gitlab:before {
        content: "\f296"
    }

    .fa-wpbeginner:before {
        content: "\f297"
    }

    .fa-wpforms:before {
        content: "\f298"
    }

    .fa-envira:before {
        content: "\f299"
    }

    .fa-universal-access:before {
        content: "\f29a"
    }

    .fa-wheelchair-alt:before {
        content: "\f29b"
    }

    .fa-question-circle-o:before {
        content: "\f29c"
    }

    .fa-blind:before {
        content: "\f29d"
    }

    .fa-audio-description:before {
        content: "\f29e"
    }

    .fa-volume-control-phone:before {
        content: "\f2a0"
    }

    .fa-braille:before {
        content: "\f2a1"
    }

    .fa-assistive-listening-systems:before {
        content: "\f2a2"
    }

    .fa-asl-interpreting:before,
    .fa-american-sign-language-interpreting:before {
        content: "\f2a3"
    }

    .fa-deafness:before,
    .fa-hard-of-hearing:before,
    .fa-deaf:before {
        content: "\f2a4"
    }

    .fa-glide:before {
        content: "\f2a5"
    }

    .fa-glide-g:before {
        content: "\f2a6"
    }

    .fa-signing:before,
    .fa-sign-language:before {
        content: "\f2a7"
    }

    .fa-low-vision:before {
        content: "\f2a8"
    }

    .fa-viadeo:before {
        content: "\f2a9"
    }

    .fa-viadeo-square:before {
        content: "\f2aa"
    }

    .fa-snapchat:before {
        content: "\f2ab"
    }

    .fa-snapchat-ghost:before {
        content: "\f2ac"
    }

    .fa-snapchat-square:before {
        content: "\f2ad"
    }

    .fa-pied-piper:before {
        content: "\f2ae"
    }

    .fa-first-order:before {
        content: "\f2b0"
    }

    .fa-yoast:before {
        content: "\f2b1"
    }

    .fa-themeisle:before {
        content: "\f2b2"
    }

    .fa-google-plus-circle:before,
    .fa-google-plus-official:before {
        content: "\f2b3"
    }

    .fa-fa:before,
    .fa-font-awesome:before {
        content: "\f2b4"
    }

    .fa-handshake-o:before {
        content: "\f2b5"
    }

    .fa-envelope-open:before {
        content: "\f2b6"
    }

    .fa-envelope-open-o:before {
        content: "\f2b7"
    }

    .fa-linode:before {
        content: "\f2b8"
    }

    .fa-address-book:before {
        content: "\f2b9"
    }

    .fa-address-book-o:before {
        content: "\f2ba"
    }

    .fa-vcard:before,
    .fa-address-card:before {
        content: "\f2bb"
    }

    .fa-vcard-o:before,
    .fa-address-card-o:before {
        content: "\f2bc"
    }

    .fa-user-circle:before {
        content: "\f2bd"
    }

    .fa-user-circle-o:before {
        content: "\f2be"
    }

    .fa-user-o:before {
        content: "\f2c0"
    }

    .fa-id-badge:before {
        content: "\f2c1"
    }

    .fa-drivers-license:before,
    .fa-id-card:before {
        content: "\f2c2"
    }

    .fa-drivers-license-o:before,
    .fa-id-card-o:before {
        content: "\f2c3"
    }

    .fa-quora:before {
        content: "\f2c4"
    }

    .fa-free-code-camp:before {
        content: "\f2c5"
    }

    .fa-telegram:before {
        content: "\f2c6"
    }

    .fa-thermometer-4:before,
    .fa-thermometer:before,
    .fa-thermometer-full:before {
        content: "\f2c7"
    }

    .fa-thermometer-3:before,
    .fa-thermometer-three-quarters:before {
        content: "\f2c8"
    }

    .fa-thermometer-2:before,
    .fa-thermometer-half:before {
        content: "\f2c9"
    }

    .fa-thermometer-1:before,
    .fa-thermometer-quarter:before {
        content: "\f2ca"
    }

    .fa-thermometer-0:before,
    .fa-thermometer-empty:before {
        content: "\f2cb"
    }

    .fa-shower:before {
        content: "\f2cc"
    }

    .fa-bathtub:before,
    .fa-s15:before,
    .fa-bath:before {
        content: "\f2cd"
    }

    .fa-podcast:before {
        content: "\f2ce"
    }

    .fa-window-maximize:before {
        content: "\f2d0"
    }

    .fa-window-minimize:before {
        content: "\f2d1"
    }

    .fa-window-restore:before {
        content: "\f2d2"
    }

    .fa-times-rectangle:before,
    .fa-window-close:before {
        content: "\f2d3"
    }

    .fa-times-rectangle-o:before,
    .fa-window-close-o:before {
        content: "\f2d4"
    }

    .fa-bandcamp:before {
        content: "\f2d5"
    }

    .fa-grav:before {
        content: "\f2d6"
    }

    .fa-etsy:before {
        content: "\f2d7"
    }

    .fa-imdb:before {
        content: "\f2d8"
    }

    .fa-ravelry:before {
        content: "\f2d9"
    }

    .fa-eercast:before {
        content: "\f2da"
    }

    .fa-microchip:before {
        content: "\f2db"
    }

    .fa-snowflake-o:before {
        content: "\f2dc"
    }

    .fa-superpowers:before {
        content: "\f2dd"
    }

    .fa-wpexplorer:before {
        content: "\f2de"
    }

    .fa-meetup:before {
        content: "\f2e0"
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0
    }

    .sr-only-focusable:active,
    .sr-only-focusable:focus {
        position: static;
        width: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        clip: auto
    }
</style>
