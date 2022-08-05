<template>
<div>
    <div class="page_header">
        <div class="page_text_header">
            {{user}}
        </div>
    </div>
	<div class="ava">
		<img :src="API + 'avatar/' + user" class="avatar" />
	</div>

	<div v-if="player != null">
		<div style="position: absolute; margin-top: -138px; width: 660px;">
			<a style="margin-left: 10px; float: right; filter: drop-shadow(0px 2px 2px #222222bf);" href="https://vk.com/" target="_blank">
				<img style="width: 60px;" class="clickable noselect" src="/assets/img/team/vk.png" />
			</a>
		</div>

		<div style="position: absolute; margin-top: -84px; width: 660px;">
			<a style="margin-left: 10px; float: right; filter: drop-shadow(0px 2px 2px #222222bf);" href="https://discord.com/" target="_blank">
				<img style="width: 53px;" class="clickable noselect" src="/assets/img/team/discord.png" />
			</a>
		</div>

		<img style="width: 60px; float: left; margin-left: 10px;" class="noselect" src="/assets/img/team/register_icon.png" />
		<div style="position: absolute; margin-top: 10px; margin-left: 82px;"><b>Дата регистрации:</b></div>
		<div style="position: absolute; margin-top: 31px; margin-left: 82px;">{{getDate(player.register)}}</div>
		<div style="clear: both" /> <br/>

		<img style="width: 60px; float: left; margin-left: 10px;" class="noselect" src="/assets/img/team/time.png" />
		<div style="margin-top: 10px; margin-left: 82px;"><b>На должности:</b></div>
		<div style="margin-top: 3px; margin-left: 82px;">От {{getDate(player.start)}} | {{getTime(player.start)}}</div>
		<div style="clear: both" /> <br/>

		<img style="width: 60px; float: left; margin-left: 10px;" class="noselect" src="/assets/img/team/group.png" />
		<div style="margin-top: 10px; margin-left: 82px;"><b>Привилегия:</b></div>
		<div style="margin-top: 3px; margin-left: 82px;">{{player.permission}}</div>
		<div style="clear: both" /> <br/>

		<img style="width: 60px; float: left; margin-left: 10px;" class="noselect" src="/assets/img/team/server.png" />
		<div style="margin-top: 10px; margin-left: 82px;"><b>Сервер:</b></div>
		<div style="margin-top: 3px; margin-left: 82px;">{{player.server}}</div>
		<div style="clear: both" /> <br/>

		<div style="float: right" v-if="canEdit">
			<div class="tooltip">
				<img style="width: 60px; margin-left: 10px;" class="clickable noselect" src="/assets/img/team/up.png" />
				<span class="tooltiptext noselect" style="width: 150px;margin-left: -69px;">
					Повысить
				</span>
			</div>
			<div class="tooltip">
				<img style="width: 60px; margin-left: 10px;" class="clickable noselect" src="/assets/img/team/down.png" />
				<span class="tooltiptext noselect" style="width: 150px;margin-left: -69px;">
					Понизить
				</span>
			</div>
			<div class="tooltip">
				<img style="width: 60px; margin-left: 10px;" class="clickable noselect" src="/assets/img/team/delete.png" />
				<span class="tooltiptext noselect" style="width: 150px;margin-left: -69px;">
					Снять
				</span>
			</div>
		</div>
	</div>

</div>
</template>

<script>
	import * as main from '@/main.js';
	import { API, EventBus } from '@/main.js'; 

	export default {
		name: 'TeamUser',
		data () {
            return {
                user: null,
				systemServer: null,
				serverId: null,
				player: null,
				canEdit: false
			}
		},
		methods: {
			listener(packet, data) {
                if(packet === 'team.loadUser') {
                    if (data.type === 'success') {
						this.player = data.player;
						this.canEdit = data.canEdit;
                    } 
                }
			},
			loadData(params) {
				console.log('Load user');
				this.user = params.user;
				this.systemServer = params.server;
				this.serverId = params.id;
				this.$root.$emit('send_websocket', `{"packet":"team.loadUser","data":{"serverName": "${this.systemServer}", "serverId": "${this.serverId}", "user": "${this.user}"}}`);
			},
			getDate(value) {
                var format = "%d %m %y";
                return main.getDate(format, value);
			},
			getTime(value) {
                var min = (Date.now() - value) / 1000 / 60;
                return this.getFormatTime(min);
            },
			getFormatTime(minutes) {
                var hours=Math.floor(minutes/60);
                minutes%=60;

                var day=Math.floor(hours/24);
				hours%=24;
				
				var month=Math.floor(day/30);
				day%=30;
				if(month > 0) {
					return month + 'мес. ' + (day > 0 ? (day + 'дн. ') : '');
				}
                if(day > 0) {
                    return day + 'дн. ' + (hours > 0 ? (hours + 'ч. ') : (minutes > 0 ? (minutes + 'м. ') : ''));
                }
                return (day > 0 ? (day + 'дн. ') : '') + (hours > 0 ? (hours + 'ч. ') : '') + (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''));
            }
		},
		watch: {
            '$route' (to, from) {
                this.loadData(to.params);
            }
		},
		mounted() {
            this.loadData(this.$route.params);
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
.avatar {
	width: 110px;
    display: block;
}
.ava {
	display: block;
    width: 110px;
    height: 110px;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    margin-top: -140px;
}
.clickable {
	transition: 0.4s;
	cursor: pointer;
}
.clickable:hover {
	opacity: 0.7;
}
.page_text_header {
    margin-left: 150px;
    color: rgb(245, 34, 82);
	text-align: left;
}
.page_header {
    background: none;
}
</style>