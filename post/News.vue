<template>
    <div>
        <div class="slides">
            <agile :dots="false" :navButtons="false" :autoplay="true" :speed="300"
            :autoplaySpeed="5000" :fade="true">
                <div class="slide" style="background: url('/assets/img/slides/1.png');"></div>
                <div class="slide" style="background: url('/assets/img/slides/2.png');"></div>
                <div class="slide" style="background: url('/assets/img/slides/3.png');"></div>
                <div class="slide" style="background: url('/assets/img/slides/4.png');"></div>
            </agile>
        </div>

        <div class="page_header">
            <div class="page_text_header">
                Новости
            </div>
        </div>

        <div class="news_post" v-for="item in posts" v-bind:key="item.title">
            <router-link tag="a" v-bind:to="'/post/' + item.id">
                <img style="width: 708px;
    margin-left: -17px;
    margin-top: 11px;
    margin-bottom: -11px;min-height: 250px;" v-bind:src="API + 'post/image/' + item.id" v-bind:alt='item.title'>
            </router-link>

            <div v-html="item.shortText" class="post_text"></div>

            <div class="footer">
                <div class="info">
                    Просмотров: {{item.views}}
                </div>
                <div class="post_date" style="    margin-top: 20px;
    margin-left: 220px;min-width: 117px;
    position: absolute;">
                        {{getDate(item.posted)}}
                    </div>
                <router-link tag="a" v-bind:to="'/post/' + item.id" class="detail"/>
            </div>
            <div style="clear:both"></div>
        </div>

        <!--div class="news_post" v-for="item in posts" v-bind:key="item.title">
            <div class="short_post_image">
                <div class="wrap">
                    <router-link tag="a" v-bind:to="'/post/' + item.id">
                        <img v-bind:src="API + 'post/raw/image/' + item.id" v-bind:alt='item.title'>
                    </router-link>
                </div>
            </div>

            <div class="post_contents">
                <div class="post_head">
                    <h2>
                    <router-link tag="a" v-bind:to="'/post/' + item.id">
                        {{item.title}}
                    </router-link>
                    </h2>
                    <div class="post_date">
                        {{getDate(item.posted)}}
                    </div>
                </div>
                <div v-html="item.shortText" class="post_text"></div>
            </div>
            <div style="clear:both"></div>

            <div class="footer">
                <div class="info">
                    Просмотров: {{item.views}}
                </div>
                <router-link tag="a" v-bind:to="'/post/' + item.id" class="detail"/>
            </div>
            <div style="clear:both"></div>
        </div-->

        <center>
            <div v-if="isFinish">
                На этом всё...
            </div>
            <div v-else>
                <button v-on:click="load" class="btn-drop">Показать более старые новости</button>
            </div>
        </center>
    </div>
</template>

<script>
    import axios from 'axios'
    import * as main from '@/main.js';
    import { API } from '@/main.js'; 

    export default {
        name: 'News',
        data () {
            return {
                posts: [],
                countPosts: 0,
                isFinish: false
            }
        },
        computed: {
            API() {
                return API;
            }
        },
        methods: {
            getDate(value) {
                var format = "%d %m %y";
                return main.getDate(format, value);
            },
            load() {
                if(!this.isFinish) {
                    axios.get(API + "post.list?offset=" + this.countPosts)
                    .then(res => {
                        var i = 0;
                        var keys = Object.keys(res.data.posts);
                        var size = Object.keys(keys).length;
                        for(let d = size-1; d >= 0; d--) {
                            this.posts.push(res.data.posts[keys[d]]);
                            i++;
                        }
                        if(i < 10 && this.countPosts == 0) {
                            this.isFinish = true;
                        }
                        this.countPosts = this.countPosts + i;
                        if(i < 10) {
                            this.isFinish = true;
                        }
                    })
                }
            }
        },
        created() { 
            this.load();
        }
    }
</script>

<style scoped>
    .slides {
        margin-left: -17px;
        margin-top: -18px;
        margin-bottom: 14px;
        width: 708px;
    }
    .slide {
        align-items: center;
        background-color: #666;
        color: #999;
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        min-height: 10rem;
        height: 250px;
    }

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

    .news_post {
        margin-top: -20px;
    }

    .news_post .short_post_image {
        width: 160px;
        height: 160px;
        overflow: hidden;
        border-radius: 50%;
        float: left;
        border: 4px solid #DCDCDA;
        margin-left: 10px;
        transition: border-color 0.5s ease;
    }

    .news_post .short_post_image:hover {
        border-color: #ea2525;
    }

    .news_post .short_post_image>.wrap {
        width: 300px;
        margin-left: -75px;
    }

    .news_post .short_post_image > .wrap img {
        display: block;
        margin: 0 auto;
        height: 160px;
    }

    .news_post .post_contents {
        margin-left: 190px;
    }

    .news_post .post_text {
        font-size: 13.5px;
        line-height: 20.5px;
        text-align: justify;
    }

    .news_post .post_head h2 {
        font-size: 24px;
        font-weight: normal;
        line-height: 26px;
        color: #0A7CAB;
    }

    .news_post .post_date {
        color: #FFF;
        display: table;
        margin: 5px 0;
        background: #13ad0d;
        height: 24px;
        font-size: 13px;
        line-height: 24px;
        border-radius: 12px;
        padding: 0 10px;
        margin-top: -13px;
    }

    .news_post .footer {
        background: url('/assets/img/post_footer.png');
        width: 721px;
        height: 98px;
        margin-left: -28px;
        margin-top: 10px;
    }

    .news_post a {
        cursor: pointer;
        color: #ea254f;
        text-decoration: none;
    }

    .news_post a:hover {
        color: #ea2525;
        text-decoration: underline;
    }

    .news_post a:active {
        color: #5FBC00;
    }

    .footer .detail {
        float: right;
        background: url('/assets/img/post_detail.png') no-repeat;
        width: 127px;
        height: 60px;
        margin-right: 30px;
        margin-top: 9px;
    }

    .footer .detail:hover {
        background: url('/assets/img/post_detail.png') no-repeat 0 -60px;
    }

    .footer .info {
        float: left;
        color: #69490f;
        margin-top: 24px;
        margin-left: 60px;
    }
</style>
