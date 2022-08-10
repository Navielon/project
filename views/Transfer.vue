<template>
<div>
    <img src="/assets/img/pages/transfer.png" class="noselect header_img" draggable="false"/>

    <br/>
    <center>
        <div style="font-size: 25px; font-family: 'NeoSansBold'; margin-bottom: 10px;">Введите количество монет:</div>
        <input class="text_input" type="number" v-model="money" >

        <div style="font-size: 25px; font-family: 'NeoSansBold'; margin-top: 10px; margin-bottom: 10px;">Выберите сервер:</div>        
        <select id="server_select" name="server" class="form-control" v-model="selectServer">
            <option :selected="true" value="null" disabled>Выберите сервер</option>
            <option v-for="server in servers" v-bind:key="server.server + server.num" v-bind:value="getServer(server)">{{server.name}}</option>
        </select>

        <div class="buy_btn noselect" v-on:click="spawn()" v-if="selectServer != null">
            Отправить на сервер {{money}} мон.
        </div>
    </center>
</div>
</template>

<script>
    import * as main from '@/main.js';
    import { EventBus } from '@/main.js';
    export default { 
        name: 'Bonus',
        data () {
            return {
                servers: null,
                selectServer: null,
                money: 1
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
            spawn() {
                var splits = this.selectServer.split(':', 2);
                var server = splits[0];
                var id = splits[1];
                this.$root.$emit('send_websocket', `{"packet":"transfer.send","data":{"server":"${server}","id":"${id}","money":"${this.money}"}}`);
            },
            getServer(server) {
                return server.server + ':' + server.num;
            },
            listener(packet, data) {
                if(packet === 'transfer.loadServers') {
                    if (data.type === 'success') {
                        this.servers = data.servers;
                    }
                }
                if(packet === 'transfer.send') {
                    if (data.type === 'success') {
                        this.$root.$emit('notice_success', 'Вы успешно перевели бабосик на сервер!', '');
                    } else {
                        switch (data.error) {
                            
                            default: 
                                this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                                break;
                        }
                    }
                }
            }
        },
        mounted() {
            this.$root.$emit('send_websocket', `{"packet":"transfer.loadServers","data":{}}`);
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
</style>

