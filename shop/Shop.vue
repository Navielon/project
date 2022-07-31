<template>
<div>
    <div class="page_header">
        <div class="page_text_header">
            <div class="tooltip">
                <router-link tag="div" to="/shops" class="back-icon fa fa-arrow-circle-left" style="margin-left: -290px;;"/>
                <span class="tooltiptext noselect" style="width: 140px;margin-left: -212px;bottom: 76px;">Вернуться к списку магазинов</span>
            </div>
            Магазин блоков
        </div>
    </div>

    <div v-if="!isAuthenticated">
        <center>
            Залогинтесь, чтобы получить доступ к данному разделу
        </center>
    </div>
    <div v-else-if="isPendingLogin2FA">
        <center>
            Подтвердите двухфакторную аунтификацию, чтобы получить доступ к данному разделу 
        </center>
    </div>
    <div v-else>
        <div class="store_page_wrapper">
            <div style="text-align: center;">
                <div class="message_label noselect">
                    Выберите сервер для покупок
                </div>
                <div class="server_list clearfix noselect" style="padding: 15px 0;">
                    <router-link :to="'shop/' + data.server" class="server" v-for="data in servers" v-bind:key="data.server">
                        <div class="icon noselect">
                            <img v-bind:src="'/assets/img/servers/' + data.server + '.png'" alt="" />
                        </div>
                        <div class="label">
                            <h4>{{data.name}}</h4>
                            <div class="text">{{data.items}} предметов в каталоге</div>
                        </div>
                    </router-link>
                </div>
                <div style="font-weight: 400;text-shadow: none;color: rgb(95, 102, 103);margin-top: -5px;font-size: 15px;">
                    Всего предметов: {{items}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import { EventBus } from '@/main.js';
    export default { 
        name: 'Shop',
        data () {
            return {
                servers: null,
                items: 0
            }
        },
        computed: {
            isAuthenticated () {
                return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
                return this.$store.state.auth.pendingLogin2FA
            }
        },
        methods: {
            listener(packet, data) {
                if(packet != 'shop.getAvailableServers') {
                    return;
                }
                if (data.type === 'success') {
                    this.servers = data.servers;
                    this.items = data.items;
                }
            },
            onAuth() {
                 this.$root.$emit('send_websocket', `{"packet":"shop.getAvailableServers","data":{}}`);
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
    .clearfix:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}

    .store_page_wrapper .server_list {
        margin: 0 auto;
        width: 620px;
    }

    .store_page_wrapper .server_list > .server {
        background: #ffffff99;
        display: inline-block;
        margin: 4px;
        margin-top: 0px;
        box-sizing: border-box;
        border: 1px solid #F0F0F0;
        color: inherit;
        cursor: pointer;
        width: 300px;
        padding: 4px;
        text-align: left;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 400;
        text-shadow: none;
        transition: border-color 0.1s linear;
    }
    .store_page_wrapper .server_list > .server:hover:not(:active) {
        border-color: rgba(219, 57, 52, 0.541);
        border-width: 2px;
        padding: 3px;
    }
    .store_page_wrapper .server_list > .server:active {
        border-color: #E0E4E5;
        background-color: #ECF0F1;
        transition: none;
    }
    .store_page_wrapper .server_list > .server > .label {
        margin-left: 75px;
        margin-top: 7px;
        font-size: 12.5px;
        color: #7F8C8D;
    }
    .store_page_wrapper .server_list > .server > .label h4 {
        color: #444;
        font-weight: 300;
        font-size: 22px;
        line-height: 0px;
        position: absolute;
        margin-top: 17px;
    }
    .store_page_wrapper .server_list > .server:hover > .label h4 {
        color: #9e0606;
    }
    .store_page_wrapper .server_list > .server > .label .text {
        position: absolute;
        margin-top: 31px;
    }
    .store_page_wrapper .server_list > .server > .icon {
        width: 64px;
        height: 64px;
        float: left;
        display: block;
        -webkit-filter: drop-shadow(0px 2px 2px #222222bf);
        filter: drop-shadow(0px 2px 2px #222222bf)
    }

    .store_page_wrapper .server_list > .server > .icon img {
        width: 64px;
        height: 64px;
        padding: 5px;
        transition: 0.5s;
        transition-delay: 0s;
        overflow: hidden;
    }

    .store_page_wrapper .server_list > .server:hover > .icon img {
        width: 64px;
        height: 64px;
        transform: scale(1.18) rotate(10deg);
    }
</style>

