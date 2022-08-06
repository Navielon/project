<template>
<div>
    <img src="/assets/img/pages/banlist.png" class="noselect header_img" draggable="false"/>

    <center v-if="banList != null">
        <div class="box_wrapper noselect" v-if="isBan == true">
            <div class="box">
                <h4>Вы забанены на всех серверах :(</h4>
                - Вы можете дождаться разбана<br/>
                - Вы можете купить разбан<br/>

                <div class="btn-drop" @click="unBanBuy()">Купить разбан за 300 рублей</div>
                <div style="clear: both"/>
            </div>
        </div>

        <div class="search_wrapper">
            <input class="input" type="text" name="query" maxlength="16" placeholder="Ник" v-model="search" v-on:input="searchStart()" />
            <span class="panel_icon search"></span>
        </div>
        <div style="clear: both"/>

        <table class="modern playertop_table" style="border-spacing: 0px 1px;">
            <thead>
                <tr>
                <th style="width: 10%;">Ник</th>
                <th> </th>
                <th style="width: 24%;">Забанил</th>
                <th style="width: 15%;">Причина</th>
                <th style="width: 15%; text-align: center;">Дата</th>
                <th style="width: 15%;">Окончание</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(player, index) in banList" v-bind:key="index">
                    <td>
                        <center>
                            <div class="av-timeratew" :style="'background-image: url(' + API + 'avatar/' + player.login + ');'"></div>
                        </center>
                    </td>
                    <td>
                        <div class="padding-text"><router-link class="top_user_link" :to="'/user/' + player.login">{{player.login}}</router-link></div>
                    </td>
                    <td>
                        <div class="padding-text"><router-link class="top_user_link" :to="'/user/' + player.admin">{{player.admin}}</router-link></div>
                    </td>
                    <td>
                        <div class="padding-text" style="text-align: center; color: #443535">
                            {{player.cause}}
                        </div>
                    </td>
                    <td>
                        <div class="padding-text" style="font-size: 12px; text-align: center; margin-top: 8px;">
                            {{getFormatTime(player.timeStart)}}
                        </div>
                    </td>
                    <td>
                        <div class="padding-text" v-if="player.timeEnd != -1" style="font-size: 12px; text-align: center; margin-top: 8px;">
                            {{getFormatTime(player.timeEnd)}}
                        </div>
                        <div v-else class="padding-text" style="font-size: 14px; text-align: center;">
                            Никогда
                        </div>
                    </td> 
                </tr>
            </tbody>
        </table>
        <div style="clear: both"/>
        <div class="pager noselect">
            <ul>
                <li class="btn control" :class="{unactive: currentPage == 1}" @click="prevPage">назад</li>
                <ul class="inline_ul" v-for="(page, index) in pageList" :key="index">
                    <li class="btn number" :class="checkActive(page)" @click="newActive(page)">{{ page }}</li>
                </ul>
                <li class="btn control" :class="{unactive: currentPage >= maxPage}" @click="nextPage">вперёд</li>
                <li class="label">страница {{ currentPage }} из {{ maxPage }}</li>
            </ul>
        </div>
        <div style="height: 30px"/>
    </center>
</div>
</template>

<script>
    import { EventBus, API } from '@/main.js'; 
    import * as main from '@/main.js'; 
    export default {  
        name: 'Bans',
        data () {
            return {
                banList: null,
				isLoad: false,
				maxPage: 0,
                currentPage: 1,
                search: '',
                isBan: false
            }
        },
        computed: {
            pageList() {
                let arr = []
                let min = 5
                let max = this.currentPage+5
                if(max > this.maxPage) {
                    max = this.maxPage
                }
                if(this.maxPage < 6) {
                    min = this.maxPage
                }
                for(let i = 0; i <= min; i++) {
					let page = max - min + i;
					if(page <= 0 || page > this.maxPage) 
						continue;
                    arr.push(page)
                }
                return arr
            },
            API() {
                return API;
            },
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            }
        },
        methods: {
            unBanBuy() {
                this.$root.$emit('send_websocket', `{"packet":"banlist.un.buy","data":{}}`);
            },
            searchStart() {
                this.sendToServer();
            },
            getFormatTime(time) {
                return main.getDate("%d %m %y %H:%M", time);
            },
            nextPage() {
				if(this.maxPage > this.currentPage) {
					this.currentPage++
					this.sendToServer()
				}
            },
            prevPage() {
				if(this.currentPage > 1) {
					this.currentPage--
					this.sendToServer()
				}
			},
			newActive(page) {
				this.currentPage = page
				this.sendToServer()
			},
			sendToServer() {
				this.$root.$emit('send_websocket', `{"packet":"banlist.load","data":{"page": "${this.currentPage}", "search": "${this.search}"}}`);
			},
			checkActive(page) {
                return {
                    active: this.currentPage == page
                }
            },
            listener(packet, data) {
                if(packet === 'banlist.load') {
                    if (data.type === 'success') {
                        this.banList = data.bans;
                        this.maxPage = data.pages;
                        this.isBan = data.isBan;
                    } 
                }
                if(packet === 'banlist.un.buy') {
                    if (data.type === 'success') {
                        this.$root.$emit('notice_success', 'Вы успешно купили разбан!', '');
                        this.isBan = false;
                        this.sendToServer();
                    } else {
                        switch (data.error) {
                            case 0:
                                this.$root.$emit('notice_error', 'Вы не авторизированы', '');
                                break
                            case 1:
                                this.$root.$emit('notice_error', 'Вы не забанены!', '');
                                break
                            case 2:
                                var price = data.price;
                                this.$root.$emit('notice_error', 'Недостаточно денег на балансе, не хватает ' + price + " руб.", '');
                                break
                            case 3:
                                this.$root.$emit('notice_error', 'Проверка баланса не завершилась успешно!', '');
                                break
                            default: 
                                this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
                                break;
                        }
                    }
                }
            },
            onAuth() {
                this.$root.$emit('send_websocket', `{"packet":"banlist.load","data":{}}`);
            }
        },
        mounted() {
            this.onAuth();
            EventBus.$on('onAuth', this.onAuth);
        },
        created() {
            EventBus.$on('onProcessPacket', this.listener);
            EventBus.$off('onAuth', this.onAuth);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
            EventBus.$off('onAuth', this.onAuth);
        }
    }
</script>

<style scoped>
    .btn-drop {
        background: linear-gradient(to right, #ffa857, #fe5a73);
        padding: 0 10px;
        color: #fff;
        border-radius: 3px;
        height: 53px;
        border-bottom: 5px solid rgba(255, 255, 255, .25);
        box-shadow: 0 10px 65px 0 #ccd4e0;
        text-decoration: none;
        font-size: 19px;
        font-weight: 600;
        transition: .5s;
        line-height: 49px;
        text-align: -webkit-center;
        outline: none!important;
        border-left: 0;
        border-right: 0;
        cursor: pointer;
        margin-top: 15px;
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

    .box_wrapper {
        padding: 20px;
        background: linear-gradient(45deg, #ffbc00, #ff0063);
        color: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 15px;
    }
    .box_wrapper h4 {
        margin-top: 0px;
        font-size: 20px;
        margin-bottom: 4px;
    }
    .box_wrapper .box {
        margin: 0 auto;
        width: 630px;
        padding-left: 140px;
        box-sizing: border-box;
        font-size: 14px;
        background: url(/assets/img/banned.png) 5px 50% no-repeat;
        background-size: 115px 92px;
        text-shadow: none;
        text-align: justify;
    }
    .search_wrapper {
		box-sizing: border-box;
		width: 100%;
		height: 38px;
		background: #FFFFFF;
		border: 2px solid #3498DB;
		border-radius: 4px;
		position: relative;
		margin-bottom: 10px;
	}

    .search_wrapper .panel_icon {
		display: block;
		width: 20px;
		height: 20px;
		background: url('/assets/img/shop/bar_icons.svg') no-repeat;
		position: absolute;
	}
	.search_wrapper .panel_icon.search {
		background-position: -20px 0;
		top: 7px;
		left: 7px;
		pointer-events: none;
	}

    .input {
		box-sizing: border-box;
		display: block;
		width: 100%;
		height: 34px;
		font-size: 14px;
		padding: 10px;
		padding-left: 32px;
		background: none;
		border: none;
		font-weight: 400;
	}
	.input:focus + .icon { color: #3498DB; }

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

    .inline_ul {
		display: inline;
	}

	.pager {
		height: 24px;
		font-weight: 400;
		font-size: 12.5px;
		position: absolute;
	}
	.pager ul>li {
		display: block;
		float: left;
		line-height: 24px;
		height: 24px;
		padding: 0 5px;
		margin-right: 3px;
		font-size: 13px
	}
	.pager ul>li.btn {
		cursor: pointer;
		border-radius: 2px;
		text-align: center;
		transition: all 0.2s ease;
		transition-property: color, background-color
	}
	.pager ul>li.btn.number {
		text-align: center;
		min-width: 18px;
		font-size: 15px
	}
	.pager ul>li.btn.control {
		padding: 0 10px;
		text-transform: uppercase
	}
	.pager ul>li.btn:hover,
	.pager ul>li.btn.control {
		background-color: #EDEDED
	}
	.pager ul>li.btn:active {
		color: #FFF;
		background-color: #6FB406;
		transition: none
	}
	.pager ul>li.btn.control:hover {
		background-color: #6FB406;
		color: #fff
	}
	.pager ul>li.btn.active {
		background-color: #38A0CA;
		color: #fff
	}
	.pager ul>li.label {
		color: #666
	}
	.unactive {
		background-color: rgb(160, 160, 160) !important;
		color: rgba(255, 255, 255, 0.75) !important;
	}
</style>

