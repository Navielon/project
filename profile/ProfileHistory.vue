<template>
	<div>
		<div v-if="!isLoad">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            <div class="loading-text">Загрузка...</div>
        </div>
        <div v-else>
			<div class="panel-bg2">
				<div v-if="Object.keys(histories).length > 0">
					<table>
						<thead>
							<tr class="table100-head">
								<th class="column1">Дата</th>
								<th class="column2">Услуга</th>
								<th class="column3body">Цена</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="history in histories" :key="history.date">
								<td class="column1">{{getDate("%d %f %y %H:%M", history.date)}}</td>
								<td class="column2">{{history.text}}</td>
								<td v-if="history.plus" class="column3" style="color: green;"><b>+</b>{{history.price}} <b>₽</b></td>
								<td v-else class="column3" style="color: darkred;"><b>-</b>{{history.price}} <b>₽</b></td>
							</tr>
						</tbody>
					</table>
					<center>
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
					</center>
				</div>
				<div v-else-if="maxPage == 0">
					<img src="/assets/img/icons/refund.png" style="width: 95px; float: left;"/>
					<div style="margin-top: 37px;float: right;font-size: 17.5px; margin-right: 11px;">
						Платежные операции на Вашем аккаунте не проводились.
					</div>
					<div style="clear:both"/>
				</div>
			</div>
        </div>
	</div>
</template>

<script>
	import * as main from '@/main.js';
	import { EventBus } from '@/main.js';
	export default {
		name: 'CabinetHistory',
		data () {
			return {
				histories: null,
				isLoad: false,
				maxPage: 0,
				currentPage: 1,
				login: '',
			}
		},
		methods: {
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
				this.$root.$emit('send_websocket', `{"packet":"account.history","data":{"login": "${this.login}", "page": "${this.currentPage}"}}`);
			},
			checkActive(page) {
                return {
                    active: this.currentPage == page
                }
            },
			getDate(format, value) {
				return main.getDate(format, value);
			},
			listener(packet, data) {
				if(packet === 'account.history') {
					if (data.type === 'success') {
						this.histories = data.histories;
						this.maxPage = data.pages;
						this.isLoad = true;
					} else {
						switch (data.error) {
							case 0:
								this.$root.$emit('notice_error', 'Текущая сессия истекла', '');
								break;
							case 1:
								this.$root.$emit('notice_error', 'У вас нет прав для просмотра данной истории', '');
								this.$router.push('/user/' + this.login)
								break;
							default: 
								this.$root.$emit('notice_error', 'Обновите страницу', 'Error #' + data.error);
								break;
						}
					}
				}
			},
			updateLogin(params) {
				this.login = params.login;
				if(this.login == null) {
					this.login = this.auth.login;
				}
				this.$root.$emit('send_websocket', `{"packet":"account.history","data":{"login": "${this.login}"}}`);
			},
			onAuth() {
				this.updateLogin(this.$route.params);
			}
		},
		watch: {
            '$route' (to, from) {
				this.updateLogin(to.params);
            }
		},
		created() {
			if(this.isAuthenticated) {
				this.updateLogin(this.$route.params);
			}
			EventBus.$on('onAuth', this.onAuth);
			EventBus.$on('onProcessPacket', this.listener);
		},
		beforeDestroy() {
			EventBus.$off('onProcessPacket', this.listener);
			EventBus.$off('onAuth', this.onAuth);
		},
		computed: {
			auth() {
                return this.$store.state.auth
			},
			isAuthenticated () {
        	    return this.$store.getters.authenticated
            },
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
            }
		},
	}
</script>

<style scoped>
	.panel-bg2 {
		background: rgba(0, 0, 0, 0.15);
		border-radius: 2px;
		width: 650px;
		margin-left: 10px;
		-webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
		margin-top: 10px;
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

table {
  border-spacing: 1;
  border-collapse: collapse;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
table * {
  position: relative;
}
table td, table th {
  padding-left: 8px;
}
table thead tr {
    height: 35px;
    background: linear-gradient(145deg, rgb(255, 188, 65), rgb(250, 160, 105) 55%);
    color: #dc0d0d;
    font-weight: bold;
    font-family: "Ubuntu";
}
table tbody tr {
  height: 50px;
}
table tbody tr:last-child {
  border: 0;
}
table td, table th {
  text-align: left;
}
table td.l, table th.l {
  text-align: right;
}
table td.c, table th.c {
  text-align: center;
}
table td.r, table th.r {
  text-align: center;
}


.table100-head th{
  font-size: 18px;
  line-height: 1.2;
  font-weight: unset;
    padding-left: 12px;
}

tbody tr:nth-child(even) {
  background-color: #ffd388;
}

tbody tr {
	font-size: 14px;
    color: #3a3535;
    background-color: #ffe0ab;
    line-height: 1.2;
    font-weight: unset;
}

.column1 {
    width: 168px;
}
.column3body {
    width: 111px;
}
.column3 {
    width: 111px;
    font-size: 19px;
    padding-top: 8px;
}
</style>
