<template>
<div>
    <img src="/assets/img/pages/settings.png" class="noselect header_img" draggable="false"/>

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
        <div class="nav-tabs noselect">
            <router-link to="/settings" v-bind:class="{active: isActive('/settings')}">Главная</router-link>
            <router-link to="/settings/auth2factor" v-bind:class="{active: isActive('/settings/auth2factor')}">Двухфакторная защита</router-link>
        </div>

        <transition name="component-fade">
            <router-view></router-view>
        </transition>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Settings',
        computed: {
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
        	    return this.$store.state.auth.pendingLogin2FA
            }
        },
        methods: {
            isActive(url) {
                return this.$route.path == url || this.$route.path == (url + '/'); 
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

    .nav-tabs {
        border-bottom: 2px solid rgba(0,0,0,.2);
        list-style: none;
        margin-right: 10px;
        margin-left: 10px;
        background: rgba(80,80,80,0.3);
        padding: 25px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .nav-tabs>a.active, .nav-tabs>a:hover {
        background: rgba(95,95,95,0.28);
        color: #ffe3e3;
        border: none!important;
        border-radius: 2px;
        margin-right: 2px;
    }
    .nav-tabs>a {
        padding: 8px 11px;
        margin-bottom: -2px;
        color: #ffffff;
        margin-right: 2px;
        display: block;
        cursor: pointer;
        float: left;
        text-transform: uppercase;
        margin-top: -16px;
        text-decoration: none;
    }
    
    .panel-bg {
		background: rgba(0, 0, 0, 0.15);
		border-radius: 2px;
		padding: 10px;
		width: 650px;
		margin-left: 10px;
		-webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
		margin-top: 10px;
	}

    .panel-bg .panel-header {
        text-transform: uppercase;
        width: 650px;
        background-color: #00000047;
        margin: -10px;
        height: 35px;
        padding: 8px;
        font-size: 17px;
        margin-bottom: 9px;
        color: white;
        padding-left: 15px;
    }
</style>
