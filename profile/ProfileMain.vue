<template>
<div>
    <div class="s_box skin-show">
        <div class="bg-skin-cloak">
            <div class="opa-you-skin-not-skin noselect" v-on:click="visibleSkin = !visibleSkin">
                <div v-if="visibleSkin">
                    Показать плащ
                </div>
                <div v-else>
                    Показать скин
                </div>
            </div>

            <div v-show="visibleSkin" id="senpaiskin2">
                <div :style="styleSkin"></div>
            </div>

            <div v-show="!visibleSkin" class="cloack-user" style="display: block; position: relative;overflow: hidden;">
                <div :style="styleSkin" class="cape-blur"></div>
                <img v-bind:src="urlCape" style="height: 60%; margin-top: 20%; position: inherit; -webkit-box-shadow: 0 5px 17px rgba(0, 0, 0, 0.46); box-shadow: 0 5px 17px rgba(0, 0, 0, 0.46);" />
            </div>
        </div>

        <div class="panel-sp" style="padding: 0px; overflow: hidden;">
            <div v-if="!isLoad">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                <div class="loading-text">Загрузка...</div>
            </div>
            <div v-else>
                <div class="profile_avatar noselect">
                    <img v-bind:src="getAvatar" draggable=false>
                </div>

                <div style="position: relative; margin-top: -357px;">
                    <div class="panel-header">
                        Основная информация
                    </div>

                    <img style="width: 60px; float: left; margin-left: 10px;" class="noselect" src="/assets/img/team/register_icon.png" />
                    <div style="position: absolute; margin-top: 10px; margin-left: 82px;"><b>Дата регистрации:</b></div>
                    <div style="position: absolute; margin-top: 31px; margin-left: 82px;">{{getDate("%d %m %y", info.registerDate)}}</div>
                    <div style="clear: both" /> <br/>

                    <img style="width: 60px; float: left; margin-left: 10px;" class="noselect" src="/assets/img/team/group.png" />
                    <div style="margin-top: 10px; margin-left: 82px;"><b>Привилегия:</b></div>
                    <div style="margin-top: 3px; margin-left: 82px;">{{info.group.translated}}</div>
                    <div style="clear: both" /> <br/>
                </div>
            </div>
        </div>
    </div>

    <div v-if="isLoad">
        <div class="panel-bg" v-if="Object.keys(info.groups).length > 0">
            <div class="panel-header">
                Привилегии игрока {{login}}
            </div>
            <div class="permission" v-for="group in info.groups" v-bind:key="group.buy + group.end + group.server + group.serverNumber">
                <div class="permission-icon noselect">
                    <img width=48px draggable=false v-bind:src="'/assets/img/cabinet/crystal_' + getCrystalName(group.name) +'.png'" />
                </div>
                <div class="permission-content">
                    <div class="permission_info_title">
                        <div class="permission_a">{{group.group}} | 
                            <div style="float: right; margin-left: 5px;font-size: 14px;margin-top: 2px;font-family: 'NeoSans';">
                                {{group.server}} #{{group.serverNumber}}
                            </div>
                        </div>
                        <div style="float: right;display: flex;position: absolute; margin-left: 299px;margin-top: -13px;font-size: 15px;">
                            
                        </div>
                    </div>
                    
                    <div style="margin-top: 25px; position: absolute; width: 715px;">
                        <div class="permission_info_progressbar">
                            <div class="progress-bar" v-bind:style="{width: getPercent(group.buy, group.end)}"></div>
                        </div>
                    </div>
                    <div class="date">
                        От {{getDate("%d %f %y %H:%M", group.buy)}} до {{getDate("%d %f %y %H:%M", group.end)}}
                    </div>
                </div>
                <div style="clear:both"></div>
            </div>
        </div>

        <div class="panel-bg" v-if="info.abilities != null && Object.keys(info.abilities).length > 0">
            <div class="panel-header">
                Дополнительные возможности игрока {{login}}
            </div>
            <div v-for="(ability, index) in info.abilities" v-bind:key="ability.buy + ability.end + ability.server + ability.serverNumber">
                <div class="permission ability" :style="'background-image:url(/assets/img/cabinet/cmd/' + ability.name + '.png)'">
                    <div class="permission-icon noselect">
                        <img width=48px draggable=false v-bind:src="'/assets/img/cabinet/cmd/' + ability.name +'_icon.png'" style="position: absolute;margin-top: 10px;" />
                    </div>
                    <div class="permission-content">
                        <div class="permission_info_title">
                            <div class="permission_a">{{ability.translate}} | 
                                <div style="float: right; margin-left: 5px;font-size: 14px;margin-top: 2px;font-family: 'NeoSans';">
                                    {{ability.server}} #{{ability.serverNumber}}
                                </div>
                            </div>
                            <div style="float: right;display: flex;position: absolute; margin-left: 299px;margin-top: -13px;font-size: 15px;">
                              
                            </div>
                        </div>
                        
                        <div style="margin-top: 25px; position: absolute; width: 715px;">
                            <div class="permission_info_progressbar">
                                <div class="progress-bar" v-bind:style="{width: getPercent(ability.buy, ability.end)}"></div>
                            </div>
                        </div>
                        <div class="date">
                            От {{getDate("%d %f %y %H:%M", ability.buy)}} до {{getDate("%d %f %y %H:%M", ability.end)}}
                        </div>
                    </div>
                    <div style="clear:both"></div>
                </div>
                <div v-if="index != Object.keys(info.abilities).length-1" style="margin-top: 9px;"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import { EventBus, API } from '@/main.js';
    import * as main from '@/main.js';

    export default {
        name: 'ProfileMain',
        data () {
            return {
                login: '',
                isLoad: false,
                skin3d: null,
                imgSkin: null,
                imgCape: null,
                urlCape: null,
                styleSkin: '',
                visibleSkin: true,
                info: null
            }
        },
        computed: {
            auth() {
                return this.$store.state.auth
            },
            getAvatar() {
                if(this.login == this.auth.login) {
                    return this.auth.avatar;
                }  
                return API + 'avatar/' + this.login;
            }
        },
        methods: {
            getCrystalName(group) {
                switch(group) {
                    case 'vip':
                    case 'premium':
                    case 'deluxe':
                    case 'ultra':
                    case 'legendary':
                        return group;
                }
                return 'none';
            },
            getDate(format, value) {
                if(value == -1) {
                    return "скончания времен"
                }
                return main.getDate(format, value);
            },
            getPercent(start, end) {
                if(end == - 1) {
                    return '100%';
                }
                var max = end - start;
                var current = end - new Date().getTime();
                if(current < 0) {
                    current = 0;
                }
                return current/max*100+'%'
            }, 
            listener(packet, data) {
                if(packet === 'account.profile') {
                    if (data.type == 'success') {
                        this.info = data.info;
                        this.isLoad = true;
                    } 
                }
            },
            loadData(login) {
                this.login = login;
                this.urlCape = API + 'cape/' + this.login;
                this.styleSkin = 'background: url(' + API + 'raw/skin/' + this.login + ') center / cover ';
                if(this.skin3d != null) {
                    this.skin3d.changeSkin(API + 'raw/skin/' + this.login);
                }
                this.$root.$emit('send_websocket', `{"packet":"account.profile","data":{"login": "${login}"}}`);
            }
        },
        watch: {
            '$route' (to, from) {
                console.log("+")
                this.loadData(to.params.login);
            }
        },
        created() {
            this.loadData(this.$route.params.login);
            this.$nextTick(() => {
                this.skin3d = new senpai_IAM_NOT_KYSY_PROFILE(); 
                this.skin3d.changeSkin(API + 'raw/skin/' + this.login);
            })
            EventBus.$on('onProcessPacket', this.listener);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
        }
    }
</script>

<style>
canvas {
  position: relative;
  width: 314px;
  margin-top: 10px;
}
</style>

<style scoped>
.profile_avatar {
    transform: scale(1.28);
    padding-top: 40px;
    filter: blur(7px);
    opacity: 0.9;
}

.profile_avatar img {
    width: 100%;
}
.cape-blur {
	-webkit-transform: scale(4);
	transform: scale(4);
	-webkit-filter: blur(10px);
	filter: blur(10px);
	width: 100%;
	height: 100%;
	padding: 50px;
	position: absolute;
	opacity: .6;
	-webkit-transition: .35s;
	transition: .35s;
}
.opa-you-skin-not-skin {
	background: rgba(0,0,0,0.28);
	box-shadow: 0 5px 15px rgba(0,0,0,0.15);
	padding: 5px 8px;
	border-radius: 2px;
	opacity: .85;
	position: absolute;
	display: block;
	right: 0;
	margin: 4px;
	z-index: 999;
	cursor: pointer;
	transition: .2s;
	color: wheat;
	margin-top: 372px;
    width: 142px;
}
.opa-you-skin-not-skin:hover {
	background: rgba(0,0,0,0.78);
	opacity: 1;
}
.cloack-user {
	display: none;
	width: 100%;
	height: 406px;
}
.bg-skin-cloak {
	position: relative;
	text-align: center;
	background: rgba(0, 0, 0, .26);
	display: table;
	margin-right: 20px;
	width: 314px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
	margin-bottom: 5px
}

#senpaiskin2 {
	position: relative;
	overflow: hidden;
	cursor: -webkit-grab;
	width: 314px
}

#senpaiskin2 div {
	transform: scale(4);
	filter: blur(10px);
	width: 100%;
	height: 100%;
	padding: 50px;
	position: absolute;
	opacity: .6;
}

.skin-show {
	display: flex;
	min-width:670px
}
.bg-skin-cloak {
	margin-bottom: 0
}

.panel-sp {
	display: inline-block;
	background: rgba(0, 0, 0, 0.15);
	border-radius: 2px;
	padding: 10px;
  	width: 314px;
	height: 406px;
 	-webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
}
.panel-sp .panel-header {
    text-transform: uppercase;
    width: 650px;
    background-color: #00000047;
    margin: -10px;
    height: 35px;
    padding: 8px;
    font-size: 17px;
    margin-bottom: 9px;
    color: white;
    padding-left: 25px;
}

.s_box {
	margin-bottom: 10px;
	border: 1px solid rgba(255, 255, 255, .05);
	transition: all .3s;
	padding: 10px;
	min-height: 80px;
	background: rgba(255, 255, 255, .05)
}

.cataloges-but {
	padding: .85em 1em;
	margin-top: 6px;
	color: #fff!important;
	display: block;
	text-transform: uppercase;
	opacity: .7;
	transition: .2s;
	cursor: pointer
}

.cataloges-but:hover {
	opacity: 1;
	text-decoration: none;
}
.panel-sp>p {
	display: inline-flex;
	text-transform: uppercase;
	color: #6d0b0b;
	font-size: 1.5em;
	line-height: 12px;
}
.panel-bg {
		background: #ffe0ab;
        border-radius: 2px;
        padding: 10px;
        width: 650px;
        margin-left: 10px;
        margin-top: 10px;
        border-bottom: 2px solid #f6cb7c;
        border-top: 2px solid #f6cb7c;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
	}
    .panel-bg .panel-header {
        text-transform: uppercase;
        width: 650px;
        background: linear-gradient(145deg, rgb(255, 188, 65), rgb(250, 160, 105) 55%);
        margin: -10px;
        height: 35px;
        padding: 8px;
        font-size: 17px;
        margin-bottom: 9px;
        color: #dc0d0d;
        padding-left: 15px;
        font-weight: bold;
        font-family: "Ubuntu";
    }

    .group {
        display: inline-block; 
    }

    .group img {
        -webkit-filter: drop-shadow(0px 2px 2px #222222bf);
        filter: drop-shadow(0px 2px 2px #222222bf);
    }
    .permission .permission-icon {
        float: left;
        width: 48px;
        height: 48px;
    }

    .permission .permission-content {
        margin-left: 50px;
        margin-top: 8px;
    }

    .permission .permission_info_title {
        font-family: Helvetica, Arial, serif;
        font-weight: bold;
        font-size: 16px;
        margin-top: 7px;
        position: absolute;
        width: 572px;
    }

    .permission .date {
        font-weight: 100;
        margin-top: 3px;
        text-align: center;
        clear: both;
        font-family: "NeoSans";
        font-size: 15px;
    }

    .permission-icon img {
        -webkit-filter: drop-shadow(0px 2px 2px #222222bf);
        filter: drop-shadow(0px 2px 2px #222222bf);
    }

    .permission .delete_group {
        box-shadow: 0px 1px 0px rgb(117, 21, 21)!important;
        background: #b82828;
        border-radius: 4px !important;
        color: #fff !important;
        margin-left: 5px;
        padding: 3px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        margin-left: 9px;
        cursor: pointer;
        height: 40px;
        width: 40px;
        font-size: 24px;
        font-family: "NeoSansBold";
        padding-top: 6px;
    }

    .permission .delete_group:hover {
        background: #a52b2bba !important;
        text-decoration: none;
    }

    .permission .buy {
        box-shadow: 0px 1px 0px rgb(21, 117, 29)!important;
        background: #2ba52c;
        border-radius: 19px !important;
        color: #fff !important;
        margin-left: 5px;
        padding: 3px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        margin-left: 3px;
        cursor: pointer;
    }

    .permission .buy:hover {
        background: #2ba52cba !important;
        text-decoration: none;
    }

    .permission .permission_a {
        color: black;
        float: left;
        font-family: "NeoSansBold";
        text-transform: uppercase;
    }

    .permission .permission_info_progressbar {
        width: 80%;
        margin-top: 13px;
        height: 7px;
        background-color: rgba(255, 255, 255, 0.5);
        float: left;
    }

    .permission .progress-bar {
        height: 100%;
        background-color: #18bf33;
        animation: progress-bar-stripes 2s linear infinite;
        background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
        background-size: 30px 30px;
    }

    @keyframes progress-bar-stripes {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 30px 0;
        }
    }

    .ability {
        width: 649px;
        margin-top: -9px;
        margin-bottom: -9px;
        margin-left: -9px;
        background-color: rgba(255, 255, 255, 0.1);
        background-position: right center;
        background-repeat: no-repeat;
        background-size: cover;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #d4006363
    }
</style>
