<template>

    <div class="forum_section_page">

    <div class="f_header_wrapper3">

        <div class="arrow_left">
            <div class="tooltip">
                <router-link tag="div" to="/forum" class="back-icon fa fa-arrow-circle-left"/>
                <span class="tooltiptext noselect" style="width: 140px;margin-left: -72px;bottom: 60px;">Вернуться к списку серверов</span>
            </div>
        </div>

        <div class="f_header_wrapper1">
            <div class="f_header_wrapper2">
                <h1 class="f_section_h1">{{ section_name }}</h1>
            </div>
        </div>

        <div class="arrow_right">
            <div class="tooltip">
                <router-link tag="div" :to="'/forum/start_discussion/' + this.$route.params.id" class="back-icon fa fa-plus-circle"/>
                <span class="tooltiptext noselect" style="width: 140px;margin-left: -72px;bottom: 60px;">Создать новую тему</span>
            </div>
        </div>

    </div>

        <div class="f_section_main_page">

            <div class="f_section_main_page_top">

            </div>

            <div v-for="(topic, index) in topics" :key="index" class="f_section_main_page_main">
                
                <img class="topic_girl" :src="'https://api.loliland.ru/avatar/' + topic.owner">
                <div class="f_section_clm1">
                    <router-link class="topic_header" :to="'/forum/topic/' + topic.id">{{ topic.topic }}</router-link>
                    <p class="topic_author">Автор: <router-link class="f_s_name" :to="'/user/' + topic.owner">{{ topic.owner }}</router-link>, {{ getFormatTime(topic.date) }}</p>
                </div>

                <div class="flex1">
                    <p class="answers">{{ answers_fix(topic.answers) }}</p>
                    <p class="views">{{ views_fix(topic.views) }}</p>
                </div>
                <img class="f_image" :src="'/assets/img/' + topic.avatar" alt="">
                <div class="flex3">
                    <router-link class="nick" :to="'/user/' + topic.nick">{{ topic.nick }}</router-link>
                    <time class="time" datetime="2019-11-09T12:25:46Z" title="09.11.2019 14:25 " data-short="1 час">{{ topic.author_time }}</time>
                </div>

            </div>

            <div class="f_section_main_page_bottom">
                <div class="pager noselect">
				    <ul>
                        <li class="btn control" v-if="currentPage > 1" @click="prevPage">назад</li>
                        <ul class="inline_ul" v-for="(page, index) in pageList" :key="index">
                            <li class="btn number" :class="checkActive(page)" @click="newActive(page)">{{ page }}</li>
                        </ul>
				    	<li class="btn control" v-if="maxPage > currentPage" @click="nextPage">вперёд</li>
				    	<li class="label">страница {{ currentPage }} из {{ maxPage }}</li>
				    </ul>
			    </div>
            </div>  

        </div>
    </div>

</template>

<script>
    import { EventBus } from '@/main.js';
    import * as main from '@/main.js';
    export default {
        data () {
            return {
                currentPage: 1,
                maxPage: 20,
                section_name: '',
                topics: []
            }
        },
        methods: {
            nextPage() {
                this.currentPage++
            },
            prevPage() {
                this.currentPage--
            },
            answers_fix(answer) {
                if(answer == undefined) {
                    return ''
                }
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
            views_fix(answer) {
                if(answer == undefined) {
                    return ''
                }
                if(answer.toString().split('').pop() == 1) {
                    return answer + ' просмотр'    
                } else if(
                        answer.toString().slice(-2) == '11' ||
                        answer.toString().slice(-2) == '12' ||
                        answer.toString().slice(-2) == '13' ||
                        answer.toString().slice(-2) == '14') 
                {
                    return answer + ' просмотров' 
                } else if(
                        answer.toString().split('').pop() == 2 ||
                        answer.toString().split('').pop() == 3 ||
                        answer.toString().split('').pop() == 4) 
                {
                    return answer + ' просмотра'
                } else {
                    return answer + ' просмотров'
                }
            },
            checkActive(page) {
                return {
                    active: this.currentPage == page
                }
            },
            newActive(page) {
                this.currentPage = page
            },
            listener(packet, data) {
                if(packet === 'forum.getTopics') {
                 if (data.type === 'success') {
                    this.maxPage = data.pages
                    this.section_name = data.section
                    this.topics = data.topics
                 }
                }
            },
            getFormatTime(time) {
                var date = new Date().getTime();

                var minutes = ((date - time) / 1000 / 60).toFixed(0);
                var hours=Math.floor(minutes/60);
                minutes%=60;

                var day=Math.floor(hours/24);
                hours%=24;
                if(day > 3) {
                    return main.getDate("%d %f %y %H:%M", value);
                }
                var str = (day > 0 ? (day + 'дн. ') : (hours > 0 ? (hours + 'ч. ') : (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''))));
                if(str == '') {
                    return 'Только что';
                }
                return str + 'назад'
            }
        },
        computed: {
            pageList() {
                let arr = []
                let min = 5
                let max = this.currentPage+5
                if(this.currentPage+5 > this.maxPage) {
                    max = this.maxPage
                }
                if(this.maxPage < 6) {
                    min = this.maxPage
                }
                for(let i = 1; i <= min; i++) {
                    arr.push(max - min + i)
                }
                return arr
            }
        },
		beforeRouteEnter (to, from, next) { 
            next(vm => { 
                vm.$store.commit('setFullPage', true)
                next();
            }) 
        },
        beforeRouteLeave (to, from, next) {
            this.$store.commit('setFullPage', false)
            next();
        },
        created() {
            this.$root.$emit('send_websocket', `{"packet":"forum.getTopics","data":{"id": "${this.$route.params.id}", "page": "1"}}`);
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
.forum_section_page {
    font-family: "Roboto";
}
.f_section_main_page_main {
    padding: 12px 10px;
    display: grid;
    grid-template-columns: 7% 60% 12% 6% 12%;
    justify-content: center;
    align-items: center;
    line-height: 18px;
    font-size: 13px;
}
.f_section_main_page_bottom {
    display: flex;
    justify-content: center;
    background-color: #fff;
    margin-top: 20px;
    margin-left: 40px;
    margin-bottom: 50px;
}
.f_section_main_page_main:nth-child(even) {
    background-color: #fcdba7;
}
.f_section_main_page_main:nth-child(odd) {
    background-color: #fbd69a;
}
.f_header_wrapper1 {
    margin: 0 auto !important;
    width: 730px;
    height: 138px;
    margin-left: -30px;
    background: url(/assets/img/header_page.png);
}
.back-icon {
    font-size: 55px;
    color: #ed5356;
    cursor: pointer;
}
.back-icon:hover {
    color: #eb4144;
}
.f_header_wrapper3 {
    display: grid;
    grid-template-columns: 10% 80% 10%;
}
.f_header_wrapper2 {
    display: flex;
    justify-content: center;
    font-family: "PT Sans Narrow", sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 700;
    color: rgb(251, 247, 208);
    text-indent: 5px;
    text-shadow: rgba(0, 0, 0, 0.44) 3px 3px 3px;
}
.arrow_left {
    color: #eb4144;
    margin: 0 auto;
    margin-top: 25px;
    margin-right: 10px;
}
.arrow_right {
    margin: 0 auto;
    margin-top: 25px;
    margin-left: 10px;
}
.f_section_h1 {
    margin-top: 30px;
    font-size: 32px;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 20px;
}
.author_img {
    width: 30px;
}
.topic_header {
    width: max-content;
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    color: #744a04;
    transition: color 0.25s ease-out;
}
.topic_header:hover {
    cursor: pointer;
    color: #9b6206;
}
.topic_author {
    width: max-content;
    color: #353c41;
    font-size: 13px;
    line-height: 20px;
}
.topic_girl {
    height: 50px;
}
.f_s_name {
    color: #353c41;
    transition: color 0.25s ease-out;
}
.f_s_name:hover {
    color: #ef4444;
    text-decoration: none;
    cursor: pointer;
}
.flex1 {
    display: flex;
    flex-direction: column;
    text-align: right;
}
.flex3 {
    display: flex;
    flex-direction: column;
    text-align: left;
}
.answers {
    color: #353c41;
}
.nick {
    width: max-content;
    color: #353c41;
    font-size: 14px;
    transition: color 0.25s ease-out;
}
.nick:hover {
    cursor: pointer;
    color: #ef4444;
}
.views {
    color: #ef6769;
}
.time {
    width: max-content;
    color: #ef6769;
}
.time:hover {
    cursor: pointer;
    color: #9b6206;
}
.f_image {
    width: 36px;
    height: 36px;
    margin-left: 10px;
    margin-right: 10px;
}

/* pager */
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
.button {
	display: inline-block;
	color: #fff;
	background: #38A0CA;
	height: 30px;
	line-height: 30px;
	text-align: center;
	min-width: 50px;
	cursor: pointer;
	transition: all 0.5s ease;
	transition-property: box-shadow, background-color;
	border-radius: 2px;
	text-shadow: none;
	white-space: nowrap;
	font-size: 13px;
	font-weight: 400;
	user-select: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	box-sizing: border-box
}
a.button,
button.button {
	padding: 0 12px;
	text-decoration: none
}
body.webkit button.button {
	padding: 0 11px
}
.button>.fa {
	font-size: 12px
}
.button:hover,
.button:hover {
	background-color: #5EB2D4;
	color: #FFF;
	box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.15) inset
}
.button:active,
.button.active,
.button.active {
	transition: none;
	color: #FFF;
	background-color: #3693B9;
	box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15) inset
}
button.button,
input.button {
	margin: 0;
	display: inline-block !important;
	border: none;
	padding-left: 10px;
	padding-right: 10px
}
.button.green {
	background-color: #6CB200
}
.button.green:hover {
	background-color: #8BC236
}
.button.green:active,
.button.green.active {
	background-color: #6CB200
}
.button:disabled,
.button.disabled {
	cursor: default !important;
	opacity: 0.5;
	box-shadow: none !important
}
button.button {
	min-width: 80px
}
</style>
