import Vue from 'vue';
import Vuex from 'vuex';
import { API } from '@/main.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        connected: false,
        auth: {
            login: null,
            accessToken: null,
            pendingLogin2FA: false,
            avatar: '',
            balance: 0,
            coins: 0,
            permission: null,
            avatarLoaded: false
        },
        messengerOpen: false,
        fullPage: false,
        source: 'null',
        tabActive: true,
        stopScroll: false,
    },
    getters: {
        authenticated(state) {
            return state.auth.login != null && state.auth.accessToken != null && state.auth.avatar != null && state.auth.permission != null;
        },
        socket(state) {
            return state.socket;
        }
    },
    mutations: {
        setConnected: function (state) {
            state.connected = true
        },
        auth(state, {login, accessToken, balance, coins, permission, avatar}) {
            state.auth.login = login;
            state.auth.accessToken = accessToken;
            state.auth.balance = balance;
            state.auth.coins = coins;
            state.auth.permission = permission;
            state.auth.avatar = API + 'avatar/' + state.auth.login;
            state.auth.pendingLogin2FA = false;
            state.auth.avatarLoaded = avatar;

            Vue.cookie.set('cashedLogin', login, 7);
            Vue.cookie.set('accessToken', accessToken, 7);
        },
        logout(state) {
            state.auth.login = null;
            state.auth.accessToken = null;
            state.auth.pendingLogin2FA = false;
            state.auth.avatar = null;
            state.auth.permission = null;

            Vue.cookie.delete('cashedLogin');
            Vue.cookie.delete('accessToken');
        },
        source(state, {src}) {
            state.source = src;
            Vue.cookie.set('source', src, 365);
        },
        updateAvatar(state) {
            var time = new Date().getTime();
            state.auth.avatar = API + 'avatar/' + state.auth.login + '?date=' + time;
        },
        updateAvatarState(state, {avatar}) {
            state.auth.avatarLoaded = avatar;
        },
        updateBalance(state, {balance}) {
            state.auth.balance = balance;
        },
        updateCoins(state, {coins}) {
            state.auth.coins = coins;
        },
        setPendingLogin2FA: function (state, data) {
            state.auth.pendingLogin2FA = data
        },
        setMessengerOpen: function (state, data) {
            state.messengerOpen = data
        },
        setFullPage: function(state, data) {
            state.fullPage = data
        },
        setTabActive: function(state, data) {
            state.tabActive = data;
        },
        setStopScroll: function(state, data) {
            state.stopScroll = data;
        },
    },
    actions: {

    },
});
