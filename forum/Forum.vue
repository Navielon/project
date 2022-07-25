<template>

    <div id="forum_section">
        <img src="/assets/img/forum/forum.png" style="width: 708px; margin-left: -17px; margin-top: -19px;" />
        <div id="forum_main">

            <section id="forum_categ">
                <div v-for="(category, index) in forum" :key="index" class="ctg_wrapper">

                    <div class="topic_header_wrapper">
                        <h3 class="topic_header_h3">{{ category.name }}</h3>
                        <svg @click="category_clicked[index] = !category_clicked[index]; methodThatForcesUpdate();" :class="{ rotate: category_clicked[index] }" fill="#f9827f" class="arrow_down_svg" src="/assets/img/arrow_down.svg" alt="" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.819 444.819" style="enable-background:new 0 0 444.819 444.819;" xml:space="preserve"><g><path d="M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693C444.819,130.287,441.295,121.629,434.252,114.203z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                    </div>

                    <div v-if="!category_clicked[index]" class="topic_el_wrapper">

                        <div v-for="(section, index) in category.sections" :key="index" class="topic_el">
                            <div class="topic_inner">
                                <img class="topic_img1" src="/assets/img/loli_topic_img1.png" alt="">
                                <a class="topic_inner_a">
                                    <router-link :to="'/forum/section/' + index">{{ section.name }}</router-link>
                                </a>   
                            </div>
                            <div class="topic_msg">
                                <p class="soobsh_num">{{ numberWithSpaces(section.posts) }}</p>
                                <p class="soobsh">сообщений</p>
                            </div>

                            <div class="topic_author" v-if="section.lastTopic != undefined">
                                <img class="author_img" :src="'https://api.loliland.ru/avatar/' + section.lastTopic.owner">
                                <div class="last_topic">
                                    <router-link class="last_topic_a" :to="'/forum/topic/' + section.lastTopic.id">{{section.lastTopic.topic}}</router-link>
                                    <p class="topic_author_p">Автор: <router-link class="autor_name" :to="'/user/' + section.lastTopic.owner">{{ section.lastTopic.owner }}</router-link></p>
                                    <time>{{ getFormatTime(section.lastTopic.date) }}</time>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
    
                <div id="users_wrapper" class="ctg_wrapper">

                    <div class="topic_header_wrapper">
                        <h3 class="topic_header_h3">Пользователи</h3>
                    </div>

                    <ul class="users_colored">
                        <li v-for="(user, index) in users_online.not_last" :key="index">
                            <router-link :style="{color: user.color}" :to="'/user/' + user.name">{{ user.name + ', ' }}</router-link>
                        </li>
                        <li>
                            <router-link :style="{color: users_online.last.color}" :to="'/user/' + users_online.last.name">{{ users_online.last.name }}</router-link>
                        </li>
                    </ul>

                </div>

            </section>

        </div>
        

    </div>

</template>

<script>
    import { EventBus } from '@/main.js';
    import * as main from '@/main.js';
    export default {
        data () {
            return {
                users_online: {
                    not_last: {},
                    last: {}
                },
                forum: {},
                category_clicked: []
            }
        },
        methods: {
            methodThatForcesUpdate() {
              this.$forceUpdate();
            },
            numberWithSpaces(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            },
            getFormatTime(time) {
                var date = new Date().getTime();

                var minutes = ((date - time) / 1000 / 60).toFixed(0);
                var hours=Math.floor(minutes/60);
                minutes%=60;

                var day=Math.floor(hours/24);
                hours%=24;
                if(day > 3) {
                    return main.getDate("%d %f %y %H:%M", time);
                }
                var str = (day > 0 ? (day + 'дн. ') : (hours > 0 ? (hours + 'ч. ') : (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''))));
                if(str == '') {
                    return 'Только что';
                }
                return str + 'назад'
            },
            answers_tooltip(answer) {
                if(answer.toString().split('').pop() == 1) {
                    return answer + ' ответ'    
                } else if(
                        answer.toString().slice(-2) == '11' ||
                        answer.toString().slice(-2) == '12' ||
                        answer.toString().slice(-2) == '13' ||
                        answer.toString().slice(-2) == '14') 
                {
                    return answer + ' ответов' 
                } else if(
                        answer.toString().split('').pop() == 2 ||
                        answer.toString().split('').pop() == 3 ||
                        answer.toString().split('').pop() == 4) 
                {
                    return answer + ' ответа'
                } else {
                    return answer + ' ответов'
                }
            },
            listener(packet, data) {
                if(packet === 'forum.load') {
                 if (data.type === 'success') {
                    let u_o = data.online

                    this.users_online.last = u_o[Object.keys(u_o)[Object.keys(u_o).length-1]]
                    delete u_o[Object.keys(u_o)[Object.keys(u_o).length-1]]
                    this.users_online.not_last = u_o

                    this.forum = data.forum

                    this.category_clicked = []
                    for(let i = 0; i < Object.keys(this.forum).length; i++) {
                        this.category_clicked.push(false)
                    }

                 }
                }
           }
        },
        created() {
            this.$root.$emit('send_websocket', `{"packet":"forum.load","data":{}}`);
            EventBus.$on('onProcessPacket', this.listener);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
        }
	}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}

#forum_section {
    font-family: 'Ubuntu', sans-serif;
}

/* forum navbar */
#nav_section1 {
    display: grid;
    grid-template-columns: repeat(4, max-content) 3fr 1fr;
    grid-gap: 20px;
}
#nav_section1_input {
    margin-right: 10px;
    max-width: 350px;
    background: #fff;
    box-shadow: none;
    font-size: 13px;
    border: 0px;
    width: 150px;
    line-height: 28px;
    height: 24px;
    top: 0px;
    padding: 0px 0px 0px 7px;
    border-radius: 5px;
    -webkit-appearance: textfield;
    overflow: visible;
}

input { font-family: 'FontAwesome'; } /* This is for the placeholder */

.input_wrapper:before {
    cursor: pointer;
    font-size: 13px;
    font-family: 'FontAwesome';
    position: relative;
    left: 127px;
    top: 20px;
    content: "\f002";
}

.nav__section1_a {
    cursor: pointer;
    text-decoration: none;
    color: #000;
    font-size: 14px;
}
#nav_section2 {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-gap: 20px;
    font-size: 13px;
    color: rgba(53,60,65,0.6);
}
.nav_section2_selected {
    color: #000;
}
.nav__section2_a {
    cursor: pointer;
    text-decoration: none;
    color: rgba(53,60,65,0.6);
}


/* forum left column */
.ctg_wrapper {
    margin-top: 15px;
}
#forum_h2 {
    font-weight: 400;
    font-size: 26px;
    margin-top: 40px;
    margin-bottom: 20px;
}
.topic_img1 {
    margin-right: 15px;
    width: 32px;
}
.topic_header_wrapper {
    display: flex;
    justify-content: space-between;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    padding: 14px 0;
    padding-top: 20px;
    background: url(/assets/img/header_page.png);
    margin-left: -28px;
}
.arrow_down_svg {
    margin-right: 20px;
    transition: fill 0.2s ease-out;
}
.arrow_down_svg:hover {
    cursor: pointer;
    fill: #fff;
}
.topic_header_h3 {
    margin-top: 3px;
    padding-left: 42px;
    text-transform: uppercase;
    color: rgb(251, 247, 208);
    text-indent: 5px;
    text-shadow: rgba(0, 0, 0, 0.44) 3px 3px 3px;
}
.topic_el {
    display: grid;
    align-items: center;
    grid-template-columns: 1.7fr 1fr 1fr;
    padding: 12px 20px;
}
.topic_el:nth-child(even) {
    background-color: #fbd69a;
}
.topic_el:nth-child(odd) {
    background-color: #fcdba7;
}
.topic_inner {
    display: flex;
    align-items: center;
}
.topic_msg {
    display: flex;
    flex-direction: column;
}
.topic_inner_a > a {
    font-weight: 500;
    font-size: 16px;
    color: #744a04;
    transition: color 0.25s ease-out;
}
.topic_inner_a > a:hover {
    color: #9b6206;
}
.soobsh {
    color: #613d03;
    font-size: 12px;
    margin: 0 auto;
}
.soobsh_num {
    color: #000;
    font-weight: 300;
    margin: 0 auto;
    margin-bottom: 3px;
}
.topic_author {
    display: flex;
    align-items: flex-start;
    width: 174px;
}
.topic_author_p {
    font-size: 13px;
    line-height: 1.5;
    position: absolute;
    margin-top: 8px;
}
.flex_2 {
    display: flex;
}
time {
    color: #613d03;
    font-size: 12px;
    line-height: 1.3;
    position: absolute;
    margin-top: 24px;
}
.author_img {
    margin-top: 3px;
    margin-right: 12px;
    width: 30px;
}
.last_topic_a {
    font-weight: 500;
    color: #744a04;
    font-size: 13px;
    line-height: 1.3;
    transition: color 0.25s ease-out;
    white-space: nowrap;
    overflow: hidden;
    max-width: 140px;
    text-overflow: clip;
    position: absolute;
    margin-top: -6px;
}
.last_topic_a:hover {
    color: #9b6206;
    cursor: pointer;
}
.users_colored {
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-right: 5px;
    background-color: #fcdba7;
    font-size: 12px;
}

.users_colored li {
    display: inline;
}

/* forum right column */
.header_right {
    padding: 12px 0;
}
.forum_right_component {
    margin-top: 15px;
    width: 100%;
}
.forum_right_container {
    margin: 0 auto;
}
.autor_name {
    color: #000;
    transition: color 0.25s ease-out;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100px;
    text-overflow: clip;
    position: absolute;
    margin-left: 5px;
}
.autor_name:hover {
    color: #ef4444;
    cursor: pointer;
}
.time_right {
    line-height: 1.5;
}

/* last topic*/
#last_topic_header_wrapper {
    margin-top: 50px;    
}
.users_author {
    padding: 10px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 12px;
    border-top: 1px dashed #f44a47;
}
.users_author:nth-child(odd) {
    background-color: #fcdba7;
}
.users_author:nth-child(even) {
    background-color: #fbd69a;
}
.users_author_first {
    border-top: none;
    padding-top: 15px;
}
.last_topic_left {
    display: flex;
    align-items: flex-start;
}
.last_topic_right {
    position: relative;
    padding: 5px 8px;
    background-color: #f66e6b;
    color: #fff;
    font-size: 11px;
    border-radius: 3px;
}
.last_topic_right::after {
    position: absolute;
    top: 50%;
    margin-top: -6px;
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-width: 5px 5px;
    border-style: solid;
    right: 100%;
    border-color: transparent #f66e6b transparent transparent;
}
.zero_ansrews {
    background-color: #ececec;
    color: #333;
} 
.zero_ansrews::after {
    border-color: transparent #ececec transparent transparent;
} 
.users_img {
    width: 30px;
    margin: 0 5px;
    margin-right: 10px;
    margin-top: 3px;
}

/* moderation*/
.moder_topic {
    margin-left: 5px;
    width: 93%;
    display: flex;
    align-items: flex-start;
    padding: 10px 0;
    font-size: 12px;
    border-top: 1px dashed #f44a47;
}
.moder_right {
    margin-left: 15px;
}
.moder_like {
    margin-right: -15px;	
    display: flex;
    align-items: center;
    float: right;
}
.plus_green {
    color: #5f7a47;
}
.likes_num {
    font-weight: bold !important;
    cursor: default;
}
.heart {
    fill: #353c41;
    transition: fill 0.25s ease-out;
}
.likes {
    font-size: 12px;
    margin-left: 3px;
    color: #353c41;
    transition: color 0.25s ease-out;
}
.moder_reged {
    font-size: 10px;
    line-height: 16px;
}
.moder_name {
    font-weight: bold;
    font-size: 15px;
    color: #744a04;
    line-height: 20px;
    transition: color 0.25s ease-out;
}
.moder_name:hover {
    cursor: pointer;
    color: #9b6206;
}
.moder_pos {
    color: #0467c5;
    font-weight: bold;
    font-size: 12px;
}
.admin {
    color: #B806CC;
}
.delete_border {
    border: none;
}
.moder_reged {
        color: #613d03;
    font-size: 10px;
}
.moder_time {
    font-size: 10px;
}
.moder_img {
    margin: 0 3px;
    margin-top: 3px;
    margin-right: 7px;
}

/* stats */
.stats_wrapper {
    margin: 0 auto;
    padding: 20px 0;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dashed #f44a47;
}
.stats_p {
    color: #744a04;
    font-weight: bolder;
    font-size: 13px;
}
.stats_num {
    font-size: 19px;
    font-weight: 300;
}
.last_stats_container {
    margin-bottom: 50px;
}
.stats_new_user_wrapper {
    margin-top: 20px;
    padding-bottom: 15px;
    display: flex;
    align-items: flex-start;
    font-size: 12px;
}
.new_users_img {
    width: 45px;
    margin: 0 10px;
    margin-top: 3px;
}
.new_user_p {
    font-weight: bolder;
    text-transform: uppercase;
    color: #ef4444;
    font-size: 12px;
}
.new_user_span {
    color: #000;
    font-size: 14px;
    line-height: 1.3;
    transition: color 0.25s ease-out;
}
.new_user_span:hover {
    cursor: pointer;
    color: #ef4444;
}

/* hide styles */
.rotate {
    transform: rotate(90deg);
    /*fill: #d9d9d9;*/
}
.lighten_header {
    background-color: #d0d0d0;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}

</style>
