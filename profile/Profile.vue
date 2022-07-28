<template>
<div>
    <div v-if="isLoadedMain">
        <div v-if="findUser">
            <div class="page_header">
                <div class="page_text_header">
                    {{login}}
                </div>
            </div>

			<div class="nav-tabs noselect">
				<center>
					<router-link :to="getLink('')" v-bind:class="{active: isActive('')}">Главная</router-link>
					<router-link :to="getLink('/statistics')" v-bind:class="{active: isActive('/statistics')}">Статистика</router-link>

					<router-link v-if="isAuthenticated && (auth.login == login || canCheckHistory)" :to="getLink('/history')" v-bind:class="{active: isActive('/history')}">История</router-link>
					<router-link v-if="isAuthenticated && auth.login == login" :to="getLink('/tokens')" v-bind:class="{active: isActive('/tokens')}">Активность</router-link>
				</center>
			</div>

			<transition name="component-fade">
				<router-view></router-view>
			</transition>
        </div>
        <div v-else>
            Пользователь не найден
        </div>
    </div>
    <div v-else>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <div class="loading-text">Загрузка...</div>
    </div>
</div>
</template>

<script>
    import { EventBus } from '@/main.js';
    import * as main from '@/main.js';

    export default {
        name: 'Profile',
        data () {
            return {
                login: null,
                isLoadedMain: false,
				findUser: true,
				canCheckHistory: false
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
			getLink(tab) {
                return '/user/' + this.login + tab;
            },
            isActive(tab) {
                var url = '/user/' + this.login + tab;
                return url == this.$route.path || url+'/' == this.$route.path; 
            },
            listener(packet, data) {
                if(packet === 'account.hasProfile') {
                    this.isLoadedMain = true;
                    if (data.type != 'success') {
						this.findUser = false;
						return;
					} 
					this.canCheckHistory = data.canCheckHistory;
                }
            },
            loadData(login) {
                this.login = login;
                this.$root.$emit('send_websocket', `{"packet":"account.hasProfile","data":{"login": "${login}"}}`);
            }
        },
        watch: {
            '$route' (to, from) {
                this.loadData(to.params.login);
            }
        },
        created() {
			this.loadData(this.$route.params.login);
            EventBus.$on('onProcessPacket', this.listener);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
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

    .nav-tabs {
        border-bottom: 2px solid #f6cb7c;
        border-top: 2px solid rgb(255, 195, 85);
        list-style: none;
        margin-right: 10px;
        margin-left: 10px;
        background: #ffdda4;
        box-shadow: 0 5px 15px rgba(255, 0, 0, 0.16);
    }
    .nav-tabs a:hover {
        background: rgb(246, 203, 124);
        color: #c31212;
    }
    .nav-tabs a.active {
        background: rgb(255, 195, 85);
        color: #c31212;
    }
    .nav-tabs a {
        padding: 8px 11px;
        color: #ff6868;
        margin-right: 2px;
        display: block;
        cursor: pointer;
        display: inline-block;
        text-transform: uppercase;
        text-decoration: none;
        font-family: NeoSansBold;
        transition: 0.4s;
    }
</style>
