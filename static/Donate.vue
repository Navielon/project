<template>
<div>
    <img src="/assets/img/donate/donate.png" class="noselect header_img" draggable="false"/>

    <center>
        <table class="modern" style="margin-left: -15px;width: 706px;">
            <thead>
                <tr>
                    <th style="font-weight: bolder;">Возможности</th>
                    <th style="width: 8%; text-align: center;font-weight: bolder;">Вип</th>
                    <th style="width: 1%;font-weight: bolder;">Премиум</th>
                    <th style="width: 1%;font-weight: bolder;">Делюкс</th>
                    <th style="width: 1%;font-weight: bolder;">Ультра</th>
                    <th style="width: 1%;font-weight: bolder;">Легенда</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align: left; vertical-align: middle;">
                        <div style="color: #443535">Максимальное кол-во приватов</div>
                    </td>
                    <td class="donate_td2">6</td>
                    <td class="donate_td2">8</td>
                    <td class="donate_td2">10</td>
                    <td class="donate_td2">15</td>
                    <td class="donate_td2">20</td>
                </tr>
                <tr>
                    <td style="text-align: left; vertical-align: middle;">
                        <div style="color: #443535">Максимальный размер привата</div>
                    </td>
                    <td class="donate_td2">50x50</td>
                    <td class="donate_td2">70x70</td>
                    <td class="donate_td2">75x75</td>
                    <td class="donate_td2">80x80</td>
                    <td class="donate_td2">100x100</td>
                </tr>
                <tr>
                    <td style="text-align: left; vertical-align: middle;">
                        <div style="color: #443535">Кол-во бесплатных варпов</div>
                    </td>
                    <td class="donate_td2">2</td>
                    <td class="donate_td2">3</td>
                    <td class="donate_td2">4</td>
                    <td class="donate_td2">5</td>
                    <td class="donate_td2">10</td>
                </tr>
            </tbody>
        </table>
    </center>

    <center>
        <table class="modern" style="margin-left: -15px;margin-top: -24px;width: 706px;">
            <thead>
                <tr>
                    <th></th>
                    <th style="width: 8%;"></th>
                    <th style="width: 90px;"></th>
                    <th style="width: 80px;"></th>
                    <th style="width: 71px;"></th>
                    <th style="width: 83px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in kits" :key="item.name">
                    <td style="text-align: left; vertical-align: middle;">
                        <div style="color: #443535; display: inline-block;" v-html="item.name" />
                        
                        <router-link :to="'kits/' + item.kit">
                        <div v-if="item.kit != null" style="font-size: 14px; color: #7F8C8D;">
                            Посмотреть кит набор
                        </div>
                        </router-link>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="item.vip"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="item.premium"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="item.deluxe"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="item.ultra"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="yes" v-if="item.legenda"></div>
                        <div v-html="no" v-else></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>

    <center>
        <table class="modern" style="margin-left: -15px;margin-top: -24px;width: 706px;">
            <thead>
                <tr>
                    <th></th>
                    <th style="width: 8%;"></th>
                    <th style="width: 90px;"></th>
                    <th style="width: 80px;"></th>
                    <th style="width: 71px;"></th>
                    <th style="width: 83px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.name">
                    <td style="text-align: left; vertical-align: middle;">
                        <div style="color: #443535; display: inline-block;" v-html="item.name" />
                        <div class="tooltip" style="position: absolute;">
                            <img v-if="item.tooltip != null" src="/assets/img/icons/question_mark.png" style="cursor: help; width: 22px; position: absolute; margin-left: 4px; margin-top: -4px;" />
                            <span class="tooltiptext noselect" style="width: 250px;margin-left: -109px;">
                                {{item.tooltip}}
                            </span>
                        </div>
                        
                        <div v-if="item.sub != null" style="font-size: 14px; color: #7F8C8D;">
                            {{item.sub}}
                        </div>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="item.vip"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="item.premium"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="item.deluxe"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="item.ultra"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="yes" v-if="item.legenda"></div>
                        <div v-html="no" v-else></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>

    <center>
        <table class="modern" style="margin-left: -15px;margin-top: -24px;width: 706px;">
            <thead>
                <tr>
                    <th></th>
                    <th style="width: 8%;"></th>
                    <th style="width: 90px;"></th>
                    <th style="width: 80px;"></th>
                    <th style="width: 71px;"></th>
                    <th style="width: 83px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ability in abilities" :key="ability.name">
                    <td style="text-align: left; vertical-align: middle;">
                        <div style="color: #443535" v-html="ability.name" />
                        
                        <div v-if="ability.sub != null" style="font-size: 14px; color: #7F8C8D;">
                            {{ability.sub}}
                        </div>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="ability.vip"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="ability.premium"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="ability.deluxe"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="ok" v-if="ability.ultra"></div>
                        <div v-html="no" v-else></div>
                    </td>
                    <td class="donate_td">
                        <div v-html="yes" v-if="ability.legenda"></div>
                        <div v-html="no" v-else></div>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: right; vertical-align: middle;">
                        <div style="font-weight: bolder;">
                            Стоимость привилегии:
                        </div>
                        <div style="font-size: 14px; color: #7F8C8D;">
                            Привилегия выдаётся на 30 дней.
                        </div>
                    </td>
                    <td class="donate_td" v-for="group in groups" :key="group.name">
                        {{group.priceMonth}}
                        <div style="font-size: 12px; color: #7F8C8D;">
                            рублей
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </center>

</div>
</template>

<script>
    import { EventBus, API } from '@/main.js';
    export default { 
        name: 'Donate',
        data() {
            return {
                kits: [
                    {
                        "name": "Использование кит набора Vip",
                        "kit": "vip",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true
                    },
                    {
                        "name": "Использование кит набора Premium",
                        "kit": "premium",
                        "vip": false,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true
                    },
                    {
                        "name": "Использование кит набора DeLuxe",
                        "kit": "deluxe",
                        "vip": false,
                        "premium": false,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true
                    },
                    {
                        "name": "Использование кит набора Ultra",
                        "kit": "ultra",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": true,
                        "legenda": true
                    },
                    {
                        "name": "Использование кит набора Legendary",
                        "kit": "legendary",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": false,
                        "legenda": true
                    },
                ],

                items: [
                    {
                        "name": "Использование Лазера",
                        "sub": "На серверах с модом IndustrialCraft",
                        "tooltip": "Использование разрешено ниже 40 блоков",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true
                    },
                    {
                        "name": "Использование Буровой установки",
                        "sub": "На серверах с модом BuildCraft",
                        "vip": false,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true
                    },
                    {
                        "name": "Использование кирки Землекрушитель",
                        "sub": "На серверах с модом Botania",
                        "vip": false,
                        "premium": false,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true
                    },
                    /*{
                        "name": "Использование Карьера",
                        "sub": "На серверах с модом BuildCraft",
                        "tooltip": "Использование разрешено только в карьерном мире",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": false,
                        "legenda": true
                    },*/
                ],

                abilities: [
                    {
                        "name": "Сохранение инвентаря при смерти",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Сохранение брони при смерти",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Сохранение опыта при смерти",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Вход на заполненный сервер",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Возможность восстановить голод",
                        "sub": "Команда /feed",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Возможность восстановить здоровье",
                        "sub": "Команда /heal",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Узнать, кто находится рядом с Вами",
                        "sub": "Команда /near",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Возможность починить вещь в руке",
                        "sub": "Команда /repair",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    /*{
                        "name": "Доступ к виртуальному верстаку",
                        "sub": "Команда /workbench",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },*/
                    {
                        "name": "Доступ к эндер-сундуку",
                        "sub": "Команда /enderchest",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    /*{
                        "name": "Возможность одеть на голову блок",
                        "sub": "Команда /hat",
                        "vip": true,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },*/


                    {
                        "name": "Возможность полета",
                        "sub": "Команда /fly",
                        "vip": false,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Возвращение к месту смерти",
                        "sub": "Команда /back",
                        "vip": false,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Возможность починить все вещи",
                        "sub": "Команда /repairall",
                        "vip": false,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Возможность потушить себя",
                        "sub": "Команда /xt",
                        "vip": false,
                        "premium": true,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },


                    
                    {
                        "name": "Возможность включить бессмертие",
                        "sub": "Команда /god",
                        "vip": false,
                        "premium": false,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Право телепортации по координатам",
                        "sub": "Команда /tppos",
                        "vip": false,
                        "premium": false,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Выдать себе опыт",
                        "sub": "Команда /exp",
                        "vip": false,
                        "premium": false,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Запустить феерверк",
                        "sub": "Команда /firework",
                        "vip": false,
                        "premium": false,
                        "deluxe": true,
                        "ultra": true,
                        "legenda": true,
                    },


                    {
                        "name": "Возможность смены префикса",
                        "sub": "Личный кабинет - Возможности",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": true,
                        "legenda": true,
                    },
                    /*{
                        "name": "Доступ к виртуальному хранилищу",
                        "sub": "Команда /virtualchest",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": true,
                        "legenda": true,
                    },*/
                    {
                        "name": "Право телепортации на место взгляда",
                        "sub": "Команда /jump",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Вылечить любого игрока",
                        "sub": "Команда /heal <ник>",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": true,
                        "legenda": true,
                    },
                    {
                        "name": "Накормить любого игрока",
                        "sub": "Команда /feed <ник>",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": true,
                        "legenda": true,
                    },


                    {
                        "name": "<b>Изменить скорость передвижения</b>",
                        "sub": "Команда /speed",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": false,
                        "legenda": true,
                    },
                    {
                        "name": "<b>Включить полную невидимость</b>",
                        "sub": "Команда /vanish",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": false,
                        "legenda": true,
                    },
                    {
                        "name": "<b>Телепортация на этаж выше</b>",
                        "sub": "Команда /top",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": false,
                        "legenda": true,
                    },
                    /*{
                        "name": "<b>TreeCapitator рубит деревья</b>",
                        "sub": "Модификация",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": false,
                        "legenda": true,
                    },*/
                    {
                        "name": "<b>Анти-АФК</b>",
                        "sub": "Вас не кикает с сервера",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": false,
                        "legenda": true,
                    },
                    {
                        "name": "<b>Игнорирование анти-флудом</b>",
                        "sub": "Больше нет задержек в чате",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": false,
                        "legenda": true,
                    },
                    {
                        "name": "<b>Возможность писать цветным в чате</b>",
                        "sub": "Выделяйте текст в чате и раскрашивайте!",
                        "vip": false,
                        "premium": false,
                        "deluxe": false,
                        "ultra": false,
                        "legenda": true,
                    },
                ],

                groups: []
            }
        },
        methods: {
            listener(packet, data) {
                if(packet === 'cabinet.loadPriceGroups') {
                    if (data.type === 'success') {
                        this.groups = data.groups;
                    } 
                }
            },
        },
        mounted() {
            this.$root.$emit('send_websocket', `{"packet":"cabinet.loadPriceGroups","data":{}}`);
        },
        created() {
            EventBus.$on('onProcessPacket', this.listener);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
        },
        computed: {
            yes() {
                return '<img src="/assets/img/donate/yes.png" class="noselect" draggable="false" style="width: 29px;opacity: 0.8;" />'
            },
            ok() {
                return '<img src="/assets/img/donate/ok.png" class="noselect" draggable="false" style="width: 29px;opacity: 0.8;" />'
            },
            no() {
                return '<img src="/assets/img/donate/no.png" class="noselect" draggable="false" style="width: 29px;opacity: 0.7;filter: grayscale(0.1);" />'
            }
        }
    }
</script>

<style scoped>
    .rules {
        color: #810101;
        background: linear-gradient(45deg, #810101, #e00);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 25px;
        font-weight: bolder;
        font-family: 'Ubuntu';
        text-transform: uppercase;
    }

    .ui-box.green {
        color: #659F13;
        background-color: #F2FAE3;
        border-color: #C8DFA5;
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

    table.modern {
        width: 100%;
        margin-bottom: 15px;
        border-spacing: 0px 1px;
        font-family: 'Ubuntu'
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
        background-color: rgba(249, 249, 249, 0.616);
        border-color: #EAEAEA;
        text-align: justify;
    }
    .donate_td {
        text-align: center !important; 
        vertical-align: middle !important;
        padding: 0px !important;
        height: 50px;
    }
    .donate_td2 {
        text-align: center !important; 
        vertical-align: middle !important;
        padding: 0px !important;
    }
    tr td:nth-child(2) {
        background: rgba(255, 240, 206, 0.71);
    }
    tr td:nth-child(4) {
        background: rgba(255, 240, 206, 0.71);
    }
    tr td:nth-child(6) {
        background: rgba(255, 240, 206, 0.71);
    }
</style>

