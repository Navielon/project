<template>
<div>
    <div class="panel-bg">
        <div class="panel-header">
            История активности
        </div> 
        <div class="settings_activity_history">
            <div class="settings_history_row" v-for="(token, name) in activeTokens" v-bind:key="name">
                <img v-if="token.type == 1" src="/assets/img/icons/computer.png" class="img_token" />
                <img v-if="token.type == 2" :src="'/assets/img/servers/' + token.system + '.png'" class="img_token" />

                <span class="settings_cur_session" v-if="isOnlineToken(token, name)">онлайн</span>
                <div class="tooltip">
                    <div class="settings_history_main_info">
                        <div style="display: contents;" v-if="token.type == 2">Сервер {{token.server}} - </div>
                        {{token.address}}
                        <span class="settings_history_separated" v-if="token.country != null">{{token.country}}</span>
                        <div style="display: contents;" v-if="token.city != null">, {{token.city}}</div>
                    </div>

                    <span class="tooltiptext noselect" style="width: 290px; margin-left: -137px;">
                        {{name}}
                    </span>
                </div>

                <div class="settings_history_add_info">
                    <div style="display: contents;">{{getDate(token.timeCreation)}}</div>
                    - 
                    <div style="display: contents;" v-if="isOnlineToken(token, name)">сейчас</div>
                    <div style="display: contents;" v-else>{{getDate(token.timeLastUse)}}</div>
                </div>
            </div>

            <div class="settings_history_row" v-for="(token, name) in usedTokens" v-bind:key="name">
                <img v-if="token.type == 1" src="/assets/img/icons/computer.png" class="img_token img_off" />
                <img v-if="token.type == 2" :src="'/assets/img/servers/' + token.system + '.png'" class="img_token img_off" />

                <div class="tooltip">
                    <div class="settings_history_main_info settings_old_session">
                        <div style="display: contents;" v-if="token.type == 2">Сервер {{token.server}} - </div>
                        {{token.address}}
                        <span class="settings_history_separated" v-if="token.country != null">{{token.country}}</span>
                        <div style="display: contents;" v-if="token.city != null">, {{token.city}}</div>
                    </div>

                    <span class="tooltiptext noselect" style="width: 290px; margin-left: -137px;">
                        {{name}}
                    </span>
                </div>

                <div class="settings_history_add_info">
                    <div style="display: contents;">{{getDate(token.timeCreation)}}</div>
                    - 
                    <div style="display: contents;">{{getDate(token.timeLastUse)}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import { EventBus } from '@/main.js';
    import * as main from '@/main.js';

    export default {
        name: 'ProfileTokens',
        data () {
            return {
                activeTokens: null,
                usedTokens: null,
            }
        },
        computed: {
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            },
            auth() {
                return this.$store.state.auth
            }
        },
        methods: {
            isOnlineToken(token, name) {
                return token.timeLastUse > new Date().getTime() - 60 * 1000 || name == this.auth.accessToken;
            },
            listener(packet, data) {
                if(packet === 'account.profileTokens') {
                    if (data.type === 'success') {
                        this.activeTokens = data.activeTokens;
                        this.usedTokens = data.usedTokens;
                    } 
                }
            },
            getDate(value) {
                var format = "%d %m %H:%M";
                return main.getDate(format, value);
            },
            onAuth() {
                this.$root.$emit('send_websocket', `{"packet":"account.profileTokens","data":{}}`);
            }
        },
        created() {
            EventBus.$on('onProcessPacket', this.listener);
            if(this.isAuthenticated) {
                this.onAuth();
            } else {
                EventBus.$on('onAuth', this.onAuth);
            }
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
            EventBus.$off('onAuth', this.onAuth);
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
        background: linear-gradient(145deg, rgb(255, 188, 65), rgb(250, 160, 105) 55%);
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

    .img_token {
        height: 48px;
        float: left;
        margin-right: 9px;
    }

    .img_off {
        filter: grayscale(1);
        opacity: 0.6;
    }
    
    .settings_activity_history {
        width: 100%;
        border: none;
        font-size: 12.5px;
    }
    .settings_old_session {
        color: #939393 !important;
    }
    .settings_activity_history .settings_history_row {
        padding: 0 10px 0 0;
        height: 48px;
        line-height: 1.23;
    }
    .settings_activity_history .settings_cur_session {
        float: right;
        height: 48px;
        line-height: 48px;
        color: #4f8cd1;
    }
    .settings_activity_history .settings_history_main_info {
        padding: 8px 0 2px;
        color: #222;
        font-weight: 500;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: auto;
    }
    .settings_history_separated:before{color:#222}
    .settings_activity_history .settings_history_separated {
        margin-left: 7px;
    }
    .settings_history_separated:before{
        content:"\00b7";
        color:#939393;
        padding:0 1px;
        text-decoration:none;
        vertical-align:middle;
        display:inline-block;
        pointer-events:none;
        position:relative;
        left:-3px;
        vertical-align:initial
    }
    .settings_activity_history .settings_history_add_info {
        color: #939393;
        max-width: 450px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>
