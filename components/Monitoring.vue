<template>
<div>
    <div class="block_margin"/>

    <div v-if="monInfo == null">
        <div class="lds-ring" style="text-align: left;margin-top: 0px;"><div></div><div></div><div></div><div></div></div>
        <div class="loading-text">Загрузка...</div>
    </div>
    <div v-else>
        <div class="server" v-for="(server, name) in monInfo.servers" v-bind:key="name">
            <div class="server_icon noselect">
                <router-link v-bind:to="'/server/' + name" tag="img" width=44px draggable=false v-bind:src="'/assets/img/servers/' + name + '.png'" style="cursor: pointer;" />
            </div>
            <div class="server_content">
                <router-link v-bind:to="'/server/' + name" class="server_name">{{server.name}}</router-link>
                <div class="server_version"> {{server.version}}</div>

                <div v-if="server.count > 1" :class="{server_list:true, active:displayed.includes(name), noselect:true}" @click="display(name)">
                    {{server.count}}
                </div>
                
                <div v-if="server.online != -1" class="server_online noselect">
                    <div class="tooltip">
                        {{server.online}}
                        <span class="tooltiptext noselect" style="width: 100px;margin-left: -51px;">
                            Текущий онлайн
                        </span>
                    </div>
                </div>
                <div v-else class="server_online noselect">
                    <div class="tooltip">
                        -
                        <span class="tooltiptext noselect" style="width: 100px;margin-left: -51px;">
                            Сервер выключен
                        </span>
                    </div>
                </div>
            </div>
            <div class="server_progress_bg">
                <div v-if="server.online == -1" class="server_progress"></div>
                <div v-else class="server_progress" 
                    v-bind:style="{width: Math.min(getOnline(server.online, server.max_online) * 81, 81)+'%' }"></div>
            </div>
            <transition name="monitoring-fade">
                <div v-show="displayed.includes(name)" class="server_category">
                    <div class="server_mini" v-for="(srv, number) in server.servers" v-bind:key="number">
                        <div class="server_mini_name">{{server.name}} #{{number}}</div>
                        
                        <div v-if="srv.online != -1" class="server_mini_online noselect">
                            <div class="tooltip">
                                {{srv.online}}
                                <span class="tooltiptext noselect" style="width: 100px;margin-left: -51px;">
                                    Текущий онлайн
                                </span>
                            </div>
                        </div>
                        <div v-else class="server_mini_online noselect">
                            <div class="tooltip">
                                -
                                <span class="tooltiptext noselect" style="width: 100px;margin-left: -51px;">
                                    Сервер выключен
                                </span>
                            </div>
                        </div>

                        <div class="server_mini_progress_bg">
                            <div v-if="srv.online == -1" class="server_mini_progress"></div>
                            <div v-else class="server_mini_progress" 
                                v-bind:style="{width: Math.min(srv.online/srv.max_online*72*1.5, 72)+'%' }"></div>
                        </div>
                    </div>
                </div>
            </transition>
            <div style="clear:both"></div>
        </div>
        
        <div style="margin-left: 46px; margin-right: 5px; margin-top: 10px;width: 190px;font-family: 'Ubuntu';">
            <div class="stroke_left">Текущий онлайн:</div>
            <div class="stroke_right">{{monInfo.current_online}}</div>
            <div class="stroke_left">Дневной рекорд:</div>
            <div class="stroke_right">{{monInfo.record_online_day}}</div>
            <div class="stroke_left">Абсолютный рекорд:</div>
            <div class="stroke_right">{{monInfo.record_online_absolute}}</div>
        </div>
        <div style="clear:both"></div>
        <router-link to="/online">
            <div class="statistic_online"></div>
        </router-link>
    </div>
</div>
</template>

<script>
    import { EventBus } from '@/main.js';

    export default {
        name: 'Monitoring',
        data () {
            return {
                monInfo: null,
                displayed: [],
            }
        },
        computed: {
            isConnected () {
        	    return this.$store.state.connected
            }
        },
        methods: {
            getOnline(current, max) {
                return Math.pow(current/max, 0.65);
            },
            getScale(server, name) {
                if(name=='hitech')
                    return 2.5;
                if(name=='magic')
                    return 2.7;
                if(name=='techno_magic')
                    return 2.2;

                return 1.7;
            },
            listener(packet, data) {
                if(packet === 'monitoring')
                    this.monInfo = data;
            },
            display(server) {
                var index = this.displayed.indexOf(server);
                if (index !== -1) {
                    this.displayed.splice(index, 1);
                } else {
                    this.displayed.push(server);
                }
            }
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
    .block_margin {
        padding-top: 10px;
    }

    .monitoring-fade-enter-active, .monitoring-fade-leave-active {
        max-height: 500px;
        transition: all 0.25s ease-in;
    }

    .monitoring-fade-enter, .monitoring-fade-leave-to {
        max-height: 0;
        opacity: 0;
        transition: all 0.15s ease-out;
    }
    
    .server {
        width: 100%;
        margin-top: 2px;
    }

    .server_content {
        text-align: left;
        margin-left: 74px;
    }

    .server .server_icon {
        float: left;
        width: 44px;
        height: 44px;
        margin-left: 22px;
        -webkit-filter: drop-shadow(0px 2px 2px #222222bf);
        filter: drop-shadow(0px 2px 2px #222222bf);
    }

    .server .server_version {
        font-family: 'Fredoka One';
        color: #fb9321;
        font-style: italic;
        font-size: 16px;
    }

    .server .server_name {
        font-family: 'Ubuntu';
        color: black;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
    }

    .server .server_name:hover {
        color: rgb(24, 0, 0);
        text-decoration: underline;
    }

    .server .server_online {
        background: url(/assets/img/monitoring/online.png) top center no-repeat;
        text-align: center;
        font-family: 'Fredoka One';
        font-size: 19px;
        line-height: 27px;
        color: white;
        position: absolute;
        width: 53px;
        margin-left: 131px;
        margin-top: -20px;
    }

    .server .server_list {
        background: url(/assets/img/monitoring/servers.png) center right no-repeat;
        text-align: center;
        font-family: 'Ubuntu';
        font-size: 19px;
        line-height: 12px;
        color: #a99e94;
        position: absolute;
        font-weight: bold;
        width: 43px;
        margin-left: 75px;
        margin-top: -12px;
        cursor: pointer;
    }

    .server .server_list:hover {
        color: #8b8884;
    }

    .active {
        background: url(/assets/img/monitoring/servers_active.png) center right no-repeat !important;
        color: #fb9321 !important;
    }

    .server .server_progress_bg {
        background: url(/assets/img/monitoring/progress_bg.png) no-repeat;
        width: 100%;
        height: 10px;
        margin-top: 10px;
        margin-left: 28px;
    }

    .server_progress {
        background: url(/assets/img/monitoring/progress.png) no-repeat;
        height: 10px;
    }

    .server .server_category {
        background: rgba(233, 211, 189, 0.20);
        margin-left: 13px;
        width: 254px;
        margin-top: 7px;
        padding-top: 5px;
        padding-bottom: 15px;
    }

    .server_mini {
        margin-left: 18px;
        padding-top: 10px;
    }
    
    .server_mini .server_mini_name {
        font-size: 18px;
        font-family: "Ubuntu";
        font-weight: bold;
        color: rgba(0,0,0,0.85);
    }

    .server_mini .server_mini_progress_bg {
        background: url(/assets/img/monitoring/mini_progress_bg.png) no-repeat;
        width: 100%;
        height: 10px;
        margin-top: 4px;
    }

    .server_mini_progress {
        background: url(/assets/img/monitoring/mini_progress.png) no-repeat;
        height: 10px;
    }

    .server .server_mini_online {
        background: url(/assets/img/monitoring/online.png) top center no-repeat;
        text-align: center;
        font-family: 'Fredoka One';
        font-size: 19px;
        line-height: 27px;
        color: white;
        position: absolute;
        width: 53px;
        margin-left: 178px;
        margin-top: -18px;
    }


    .stroke_left {
        float: left;
        font-size: 15px;
    }

    .stroke_right {
        float: right;
        font-size: 15px;
    }

    .statistic_online {
        width: 224px;
        height: 50px;
        background: url('/assets/img/statistic_online.png') no-repeat;
        cursor: pointer;
        margin-left: 30px;
        margin-top: 12px;
    }
    .statistic_online:hover {
        background: url('/assets/img/statistic_online.png') no-repeat 0 -55px;
    }
</style>
