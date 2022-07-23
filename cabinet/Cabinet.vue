<template>
<div>
    <img src="/assets/img/pages/cabinet.png" class="noselect header_img" draggable="false"/>

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
            <center>
            <router-link to="/cabinet" v-bind:class="{active: isActive('/cabinet')}">Главная</router-link>
            <router-link to="/cabinet/group" v-bind:class="{active: isActive('/cabinet/group')}">Привилегии</router-link>
            <router-link to="/cabinet/pay" v-bind:class="{active: isActive('/cabinet/pay')}">Пополнить</router-link>
            <router-link to="/cabinet/usage" v-bind:class="{active: isActive('/cabinet/usage')}">Возможности</router-link>
            <router-link to="/cabinet/history" v-bind:class="{active: isActive('/cabinet/history')}">История</router-link>
            </center>
        </div>

        <transition name="component-fade">
            <router-view></router-view>
        </transition>
    </div>
</div>
</template>

<script>
    export default { 
        name: 'Cabinet',
        methods: {
            isActive(url) {
                return this.$route.path == url || this.$route.path == (url + '/'); 
            }
        },
        computed: {
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
        	    return this.$store.state.auth.pendingLogin2FA
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

