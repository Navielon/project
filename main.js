import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCookie from 'vue-cookie'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import 'vue-snotify/styles/material.css'
import VueAgile from 'vue-agile'
Vue.use(VueAgile)

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 
Vue.use(VueSweetalert2);

import { VueReCaptcha } from 'vue-recaptcha-v3'
Vue.use(VueReCaptcha, { siteKey: '6LfvJbwUAAAAAOU7JtORR4YJGvqHJpacrSZ6H9hU' })

Vue.config.productionTip = false;

const options = {
    toast: {
        position: SnotifyPosition.rightTop
    }
}
Vue.use(Snotify, options)

Vue.use(VueCookie); 

router.beforeEach((to, from, next) => {
    if(store.state.messengerOpen) {
        store.commit('setMessengerOpen', false);
        setTimeout(
            () => {
                document.documentElement.style.overflow = 'auto';
                store.commit('setStopScroll', false);
            }, 750
        );
        next(false);
    } else {
        document.title = to.meta.title + ' - LoliLand';
        next();
    }
})

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.hashCode = function() {
    var s = this;
    var h = 0, l = s.length, i = 0;
    if (l > 0 )
        while (i < l)
            h = (h << 5) - h + s.charCodeAt(i++) | 0;
    return h;
};

String.prototype.toRGB = function() {
    var hash = 0;
    if (this.length === 0) return hash;
    for (var i = 0; i < this.length; i++) {
        hash = this.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    var rgb = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 255;
        rgb[i] = value;
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

String.prototype.toColor = function() {
	var colors = ["#e51c23", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#5677fc", "#03a9f4", "#00bcd4", "#009688", "#259b24", "#8bc34a", "#afb42b", "#ff9800", "#ff5722", "#795548", "#607d8b"]
	
    var hash = 0;
	if (this.length === 0) return hash;
    for (var i = 0; i < this.length; i++) {
        hash = this.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    hash = ((hash % colors.length) + colors.length) % colors.length;
    return colors[hash];
}

export const EventBus = new Vue()
export const WEBSOCKET = "wss://api.loliland.ru:443/ws";
export const API = "https://api.loliland.ru/";

export function getDate(format, time){
    if(time == null) {
        return "undefined";
    }
    var date = new Date(parseInt(time));
    var monthsPlural = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    var dayNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    var day = date.getDate();
    var wday = date.getDay();
    if(wday == 0) wday = 7;
    wday = dayNames[wday - 1].toLowerCase();
    var month = months[date.getMonth()];
    var monthshort = month.substr(0, 3);
    var year = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();

    var monthPlural = monthsPlural[date.getMonth()];

    if(min < 10) min = "0" + min;
    format = format.replace("%d", day);
    format = format.replace("%mplr", monthPlural);
    format = format.replace("%m", month);
    format = format.replace("%f", monthshort);
    format = format.replace("%y", year);
    format = format.replace("%H", hour);
    format = format.replace("%M", min);
    format = format.replace("%D", wday);
    return format;
}

export function getDateConvert(format, time){
    if(time == null) {
        return "undefined";
    }
    //var date = new Date(parseInt(time));
    var date = new Date(parseInt(time)).toLocaleString("en-US", {timeZone: "Europe/Moscow"});
    date = new Date(date);
    var monthsPlural = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    var dayNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    var day = date.getDate();
    var wday = date.getDay();
    if(wday == 0) wday = 7;
    wday = dayNames[wday - 1].toLowerCase();
    var month = months[date.getMonth()];
    var monthshort = month.substr(0, 3);
    var year = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();

    var monthPlural = monthsPlural[date.getMonth()];

    if(min < 10) min = "0" + min;
    format = format.replace("%d", day);
    format = format.replace("%mplr", monthPlural);
    format = format.replace("%m", month);
    format = format.replace("%f", monthshort);
    format = format.replace("%y", year);
    format = format.replace("%H", hour);
    format = format.replace("%M", min);
    format = format.replace("%D", wday);
    return format;
}

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
