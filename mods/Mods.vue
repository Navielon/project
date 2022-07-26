<template>
<div>
    <div class="page_header">
        <div class="page_text_header">
            Моды
        </div>
    </div>
     <div class="search_wrapper">
        <input class="input" type="text" name="query" maxlength="26" placeholder="Название мода" v-model="search" v-on:input="searchStart()" />
        <span class="panel_icon search"></span>
    </div>
    <div style="clear: both"/>

    <div v-if="mods != null">
        <div class="news_post" v-for="item in mods" v-bind:key="item.title">
            <div class="short_post_image">
                <div class="wrap">
                    <router-link tag="a" v-bind:to="'/mods/' + item.url">
                        <img v-bind:src="API + 'mod.avatar?mod=' + item.url" v-bind:alt='item.name'>
                    </router-link>
                </div>
            </div>

            <div class="post_contents">
                <div class="post_head">
                <h2>
                    <router-link tag="a" v-bind:to="'/mods/' + item.url">
                    {{item.name}}
                    </router-link>
                </h2>
                <div v-if="item.versions.length == 0" class="post_date"></div>
                <div class="post_date" :style="'background-color: ' + getColorVersion(version)" v-for="version in item.versions" :key="version">
                    {{version}}
                </div>
                </div>
                <div v-html="item.shortDesc" class="post_text"></div>
            </div>
            <div style="clear:both"></div>

            <div class="footer">
                <div class="info">
                    Просмотров: {{item.views}}
                </div>
                <router-link tag="a" v-bind:to="'/mods/' + item.url" class="detail"/>
            </div>
            <div style="clear:both"></div>
        </div>
    </div>
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
</div>
</template>

<script>
    import axios from 'axios'
    import * as main from '@/main.js'; 
    import { API } from '@/main.js'; 

    export default {
        name: 'Mods',
        data () {
            return {
                mods: null,
                isLoad: false,
                maxPage: 0,
                currentPage: 1,
                search: '',
            }
        },
        computed: {
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
            },
            API() {
                return API;
            }
        },
        methods: {
            searchStart() {
                this.load();
            },
            getColorVersion(version) {
                var hash = version.hashCode(); 
                var r = (hash & 0xFF0000) >> 16;
                var g = (hash & 0x00FF00) >> 8;
                var b = hash & 0x0000FF;
                return 'rgb(' + r + ', ' + g + ', ' + b + ')';
            },
            nextPage() {
				if(this.maxPage > this.currentPage) {
					this.currentPage++
					this.load()
				}
            },
            prevPage() {
				if(this.currentPage > 1) {
					this.currentPage--
					this.load()
				}
			},
			newActive(page) {
				this.currentPage = page
				this.load()
			},
			checkActive(page) {
                return {
                    active: this.currentPage == page
                }
            },
            load() {
                this.isLoad = false;
                axios.get(API + "mod.list?page=" + this.currentPage + '&search=' + this.search)
                .then(res => {
                    this.mods = res.data.mods;
                    this.isLoad = true;
                    this.maxPage = res.data.pages;
                })
            }
        },
        created() { 
            this.load();
        }
    }
</script>

<style scoped>
    .news_post {
        margin-top: -20px;
    }

    .news_post .short_post_image {
        width: 160px;
        height: 160px;
        overflow: hidden;
        border-radius: 50%;
        float: left;
        background-color: #f7d59f;
        border: 4px solid #ffce7a;
        margin-left: 10px;
        transition: border-color 0.5s ease;
        margin-top: 22px;
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
        height: 110px;
        margin-top: 20px;
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
        position: absolute;
    }

    .news_post .post_date {
        color: #FFF;
        display: inline-block;
        margin: 5px 0;
        background: #13ad0d;
        height: 24px;
        font-size: 13px;
        line-height: 24px;
        border-radius: 12px;
        padding: 0 10px;
        margin-inline-end: 6px;
        margin-top: 50px;
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

    .search_wrapper {
		box-sizing: border-box;
		width: 100%;
		height: 38px;
		background: #FFFFFF;
		border: 2px solid #3498DB;
		border-radius: 4px;
		position: relative;
		margin-bottom: 10px;
	}

    .search_wrapper .panel_icon {
		display: block;
		width: 20px;
		height: 20px;
		background: url('/assets/img/shop/bar_icons.svg') no-repeat;
		position: absolute;
	}
	.search_wrapper .panel_icon.search {
		background-position: -20px 0;
		top: 7px;
		left: 7px;
		pointer-events: none;
	}

    .input {
		box-sizing: border-box;
		display: block;
		width: 100%;
		height: 34px;
		font-size: 14px;
		padding: 10px;
		padding-left: 32px;
		background: none;
		border: none;
		font-weight: 400;
	}
	.input:focus + .icon { color: #3498DB; }

    .inline_ul {
		display: inline;
	}

	.pager {
		height: 24px;
		font-weight: 400;
		font-size: 12.5px;
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
</style>

