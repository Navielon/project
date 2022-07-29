<template>
    <div>
        <img v-bind:src="'/assets/img/servers/server_' + server + '.jpg'" class="server noselect"/>

        <div v-if="server == 'minigames'">
            <ServerMiniGames/>
        </div>
        <div v-else>
            <div v-if="data == null">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                <div class="loading-text">Загрузка...</div>
            </div>
            <div v-else>
                <div class="description">{{data.description}}</div>
                <table class="modern">
                    <thead>
                        <tr>
                            <th style="width: 50%;">Параметр</th>
                            <th>Значение</th>
                        </tr>
                    </thead>
                    <tbody>	
                        <tr>
                            <td>Версия Minecraft</td>
                            <td>{{data.version}}</td>
                        </tr>
                        <tr>
                            <td>PvP</td>
                            <td v-if="data.pvp == 'PVP'"><span class="badge green">Разрешен</span></td>
                            <td v-if="data.pvp == 'PVE'"><span class="badge red">Запрещен</span></td>
                            <td v-if="data.pvp == 'PVP_PVE'"><span class="badge blue">PVP-PVE</span> 
                                <div class="tooltip">
                                    <i class="fa fa-question quest"></i>
                                    <span class="tooltiptext noselect" style="width: 150px;margin-left: -73px;">
                                        Днем запрещен<br/>Ночью разрешен
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Площадь основного мира</td>
                            <td>20 000 × 20 000 блоков</td>
                        </tr>
                        <tr>
                            <td>Площадь эндер мира</td> 
                            <td>100 000 × 100 000 блоков</td>
                        </tr>
                        <tr>
                            <td>Площадь остальных миров</td>
                            <td>50 000 × 50 000 блоков</td>
                        </tr>
                        <tr>
                            <td style="vertical-align: middle;">Статистика сервера</td>
                            <td>
                                <router-link target="_blank" :to="'/online/' + server + '/' + i" v-for="i in data.severs" :key="i" class="statistic">{{data.name}} #{{i}}</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>

                
                <div class="head" style="margin-top: 20px; font-size: 32px;" v-if="Object.keys(data.mods).length > 0">
                    Модификации сервера
                </div> 

                <div class="mods">
                    <div class="mod" v-for="mod in data.mods" :key="mod.url">
                        <router-link :to="'/mods/' + mod.url" target="_blank">
                            <div class="mod_icon">
                                <img :src="API + 'mod.avatar?mod=' + mod.url">
                            </div>
                            <h3>{{mod.name}}</h3>
                        </router-link>

                        <div class="mod_details">
                            <span class="mod_description">
                                {{mod.desc}}
                            </span>

                            <span class="addons_label" v-if="Object.keys(mod.addons).length > 0">
                                Аддоны:
                            </span>

                            <div class="addons">
                                <span class="addon" v-for="(addon) in mod.addons" :key="addon.url">
                                    <a :href="'/mods/' + addon.url" target="_blank">
                                        <img :src="API + 'mod.avatar?mod=' + addon.url">
                                        <h4>{{addon.name}}</h4>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { API } from '@/main.js'; 
    import axios from 'axios'
    import ServerMiniGames from '@/server/ServerMiniGames'
    export default {
        name: 'Servers',
        data () {
            return {
                data: null,
                server: null
            }
        },
        methods: {
            loadData(server) {
                console.log('Update server');
                this.data = null;
                this.server = server;
                axios.post(API + "server.get?server=" + server).then(res => {
                    if(res.data.type == 'error') {
                        this.$router.push('/error');
                        return;
                    } 
                    this.data = res.data.data;
                    document.title = 'Описание сервера ' + this.data.name + ' - LoliLand';
                });
            }
        },
        watch: {
            '$route' (to, from) {
                this.loadData(to.params.server);
            }
        },
        computed: {
            API() {
                return API;
            }
        },
        created() {
            this.loadData(this.$route.params.server);
        },
        components: {
            ServerMiniGames
        }
    }
</script>

<style scoped>
    .quest {
        margin-left: 5px;
        width: 18px;
        text-align: center;
        line-height: 18px !important;
        height: 18px;
        background: #79cecc;
        font-weight: 400;
        color: #FFF;
        border-radius: 9px;
    }
    .head {
        color: #810101;
        background: linear-gradient(45deg, #810101, #e00);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 25px;
        font-weight: bolder;
        font-family: 'Ubuntu';
        text-align: center;
        text-transform: uppercase;
    }
    .server {
        width: 709px;
        margin-left: -17px;
        margin-top: -18px;
    }
    .description {
        text-align: justify;
        font-family: 'Ubuntu';
        margin-top: 9px;
        margin-bottom: 9px;
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
        background-color: #f9f9f978;
        border-color: #EAEAEA
    }

    .statistic {
        display: block;
        width: fit-content;
        padding: 0px 7px;
        padding-top: 2px;
        height: 22px;
        background: #ff8787;
        font-weight: 400;
        color: #FFF;
        border-radius: 11px;
        text-shadow: none;
        text-decoration: none;
        margin-bottom: 1px;
        text-align: center;
        margin-right: 5px;
        transition: 0.4s;
    }

    .statistic:hover {
        background: #fd5656;
        color: #FFF;
    }

    .badge {
        display: inline-block;
        padding: 0px 7px;
        font-size: 15px;
        line-height: 18px !important;
        height: 18px;
        background: #AFAFAF;
        font-weight: 400;
        color: #FFF;
        border-radius: 9px;
        text-transform: uppercase;
        text-shadow: none;
        text-decoration: none
    }

    a.badge:hover {
        color: #FFF;
        text-decoration: underline
    }

    .badge.green {
        background-color: #6DB201
    }

    .badge.red {
        background-color: #B94A48
    }

    .badge.orange {
        background-color: #ED7914
    }

    .badge.yellow {
        background-color: #DE9500
    }

    .badge.blue {
        background-color: #39A0CA
    }

    .badge.purple {
        background-color: #8B3BC9
    }

    .mods .mod {
        align-items: center;
        width: 100%;
        display: inline-block;
        margin-bottom: -25px;
    }

    .mods .mod a {
        color: #d35970;
        text-decoration: none;
    }
    .mods .mod a:hover {
        color: #c06b7b;
        text-decoration: none;
    }
    .mods .mod a h3 {
        margin-bottom: 0px;
    }
    .mods .mod .mod_icon {
        width: 64px;
        height: 64px;
        float: left;
        margin: 20px;
        display: flex;
        align-items: center;
        border-radius: .5rem;
        background-repeat: no-repeat;
        background-position: center;
        padding: 4px;
        filter: drop-shadow(0px 2px 2px #222222bf);
        margin-left: 1px;
        margin-right: 12px;
    }
    .mods .mod .mod_icon img {
        display: block !important;
        width: 56px;
        height: 56px;
    }
    .mods .mod .mod_details {
        margin-bottom: 20px;
    }
    .mods .mod .mod_description {
        display: inline-block;
        width:  588px;
        font-size: 15px;
        color: #6b6b6b;
        margin-bottom: 6px;
    }
    .mods .mod .addons_label {
        display: block;
        width: 588px;
        font-size: 15px;
        color: #6b6b6b;
    }
    .mods .mod .addons {
        display: table-cell;
        font-family: 'Ubuntu';
    }
    .mods .mod .addons .addon {
        display: inline-block;
        height: 1px;
        margin-right: 10px;
    }
    .mods .mod .addons .addon a {
        color: #343434;
        text-decoration: none;
        display: inline-block;
    }
    .mods .mod .addons .addon a:hover {
        color: #6b6b6b;
        text-decoration: none;
        display: inline-block;
    }
    .mods .mod .addons .addon img {
        display: inline-block !important;
        width: 26px;
        position: absolute;
        margin-right: 4px;
        border-radius: 4px;
        filter: drop-shadow(0px 1px 2px #222222bf);
    }
    .mods .mod .addons .addon h4 {
        display: inherit;
        margin-top: 5px;
        margin-left: 30px;
    }
</style>
