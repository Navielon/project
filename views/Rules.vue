<template>
<div>
    <img src="/assets/img/rules.png" class="noselect header_img" draggable="false"/>

    <center v-for="(r, index) in rules" :key="index">
        <div class="rules">{{index}}</div> 

        <table class="modern">
            <thead>
                <tr>
                <th style="width: 8%;"></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rule, indx) in r" v-bind:key="indx">
                    <td style="text-align: center; vertical-align: middle;">
                        <div style="color: #443535">{{rule.id}}</div>
                    </td>
                    <td>
                        <div style="color: #443535; font-size: 15px;">{{getRule(rule.rule)}}</div>
                        <div v-if="rule.notes != null" class="ui-box green">
                            <b>Примечание:</b>
                            <div v-for="note in rule.notes" :key="note">
                                - {{getNote(note)}}
                            </div>
                        </div>
                        <div v-if="rule.punishments != null" class="ui-box red">
                            <b>Наказание:</b>
                            <div v-for="punishment in rule.punishments" :key="punishment.type">
                                - {{getPunishment(punishment)}}
                                <div class="tooltip" style="position: absolute;">
                                    <img v-if="punishment.time != null" src="/assets/img/icons/question_mark.png" style="cursor: help; width: 28px; position: absolute; margin-left: 8px; margin-top: -6px;" />
                                    <span class="tooltiptext noselect" style="width: 250px;margin-left: -103px;">
                                        <b>Наказания могут быть увеличены за повторное нарушение или на усмотрение администрации.</b>
                                    </span>
                                </div>
                            </div>
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
        name: 'Rules',
        data () {
            return {
                rules: null,
            }
        },
        methods: {
            listener(packet, data) {
                if(packet === 'rules.load') {
                    if (data.type === 'rules') {
                        this.rules = data.rules;
                    } 
                }
            },
            getRule(rule) {
                if(!rule.endsWith('.')) {
                    rule = rule + '.';
                }
                rule = rule[0].toUpperCase() + rule.slice(1); 
                return rule;
            },
            getNote(note) {
                if(!note.endsWith('.')) {
                    note = note + '.';
                }
                note = note[0].toUpperCase() + note.slice(1); 
                return note.trim();
            },
            getPunishment(punishment) {
                var str = '';
                switch(punishment.type) {
                    case 'ban': 
                        str = str + 'Бан ';
                        if(punishment.time != null) {
                            str = str + 'на ' + punishment.time;
                        } else {
                            str = str + 'навсегда';
                        }
                        break;
                    case 'mute': 
                        str = str + 'Мут чата ';
                        if(punishment.time != null) {
                            str = str + 'на ' + punishment.time;
                        } else {
                            str = str + 'навсегда';
                        }
                        break;
                    case 'banhw': 
                        str = str + 'Бан по железу игрока';
                        break;
                    case 'warn': 
                        str = str + 'Предупреждение';
                        break;
                }
                if(punishment.note) {
                    str = str + ' и ' + punishment.note.toLowerCase();
                }
                if(!str.endsWith('.')) {
                    str = str + '.';
                }
                return str.trim();
            }
        },
        mounted() {
            this.$root.$emit('send_websocket', `{"packet":"rules.load","data":{}}`);
        },
        created() {
            EventBus.$on('onProcessPacket', this.listener);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
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
        }
    }
</script>

<style scoped>
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
        position: absolute;
        width: 670px;
        height: 100%;
    }

    .rules {
        color: #fd2f52;
        /*background: linear-gradient(45deg, #810101, #e00);
        background-clip: text;
        -webkit-text-fill-color: transparent;*/
        font-size: 25px;
        font-weight: bolder;
        font-family: 'Ubuntu';
        text-transform: uppercase;
    }

    .ui-box.green {
        color: #659F13;
        background-color: rgba(242, 250, 227, 0.6);
        border-color: #C8DFA5;
    }

    .ui-box.red {
        color: #D85030;
        background-color: rgba(255, 241, 240, 0.6);
        border-color: #F4C1B6;
    }

    .ui-box {
        margin: 4px 0;
        background: rgba(235, 247, 253, 0.6);
        padding: 8px 10px;
        color: #2D7091;
        font-size: 14px;
        border-left: 4px solid #B2CFDD;
        text-align: left;
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
        border-color: #EAEAEA;
        text-align: justify;
    }
</style>

