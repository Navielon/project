<template>
<div>
    <div class="page_header">
        <div class="page_text_header">
            Набор в команду
        </div>
    </div>
    <center>
        Модератор — это неотъемлемая частичка проекта, человек,
         берущий на себя великую ношу по защите наших серверов от недобросовестного пользователя. 
        Такому человеку администрация вменяет определенный набор полномочий в обмен на безвозмездное служение на благо нашего проекта!
    </center>
    <br/>
    <div class="moder">
        <div class="section primary">
            <h3 style="text-align: center;">Заявка в хелперы</h3>
            <p>Хочешь отличиться среди равных и считаешь, что именно ты готов на великие свершения? Звание хелпера — это отличная возможность проверить себя и свои силы! </p>
            <div class="fieldset">
                <div class="row">
                    <h5 class="col-12 col-sm-4" style="height: 0px;line-height: 0px; margin-top: 13px; margin-bottom: 1px;">Выберите сервер</h5>
                    <div class="col">
                        <select class="form-control form-control-lg custom-select">
                            <option value="12">SandBox #1</option>
                            <option value="13">NanoTech #1</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="general">
                <div data-key="mods" class="fieldset" style="display: block;">
                    <div class="row align-items-center">
                        <div class="col-12 col-sm-4">
                            <h5>Как Вас зовут</h5></div>
                        <div class="col">
                            <input placeholder="Фамилия, имя и отчество" class="input3">
                        </div>
                    </div>
                    <div class="row align-items-center my-2">
                        <div class="col-12 col-sm-4">
                            <h5>Сколько Вам лет</h5></div>
                        <div class="col">
                            <input placeholder="Возраст" class="input3">
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-12 col-sm-4">
                            <h5>Место жительства</h5></div>
                        <div class="col">
                            <input placeholder="Город" class="input3">
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-12 col-sm-4">
                            <h5>Ваш Discord</h5></div>
                        <div class="col">
                            <input placeholder="Ник#ID" class="input3">
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-12 col-sm-4">
                            <h5>О себе</h5></div>
                        <div class="col">
                            <textarea @keyup="textAreaAdjust()" @keypress="textAreaAdjust()" ref="textarea" style="min-height: 180px; height: 180px;" placeholder="Вы многогранный и разносторонний человек? Расскажите о себе и своих увлечениях, это должно быть мини-сочинения не менее, чем на 150 слов!" rows="4" class="input3"></textarea>
                        </div>
                    </div>
                    <div class="btn-drop noselect">Отправить заявку</div>
                </div>
            </div>
        </div>
    </div>

    <div class="moder noselect">
        <div class="section primary" style="animation: none; margin-top: 20px; background: linear-gradient(145deg, #ff4161, #faa069 55%);">
            <h3 style="text-align: center;">Основные обязанности Хелпера</h3>
            <p>
                1. Поддержка игроков советами и подсказками.<br/>
                2. Мониторинг чата.<br/>
                3. Передача Гл.Админам критичных и важных ошибок и проблем игроков.
            </p>
        </div>
    </div>

    <div class="moder noselect">
        <div class="section primary" style="animation: none; margin-top: 20px; background: linear-gradient(145deg, rgb(184, 65, 255), rgb(105, 168, 250);">
            <h3 style="text-align: center;">Основные требования к Хелперу</h3>
            <p>
                1. Наличие голосовой связи.<br/>
                2. Адекватность и терпимость.<br/>
                3. Грамотность русской речи, пунктуация.<br/>
                4. Онлайн минимум 2 часа в день.<br/>
                5. Отсутствие серьезных нарушений.<br/>
                6. Коммуникабельность и корректность в общении с игроками.<br/>
                7. Знание правил проекта и умение быстро в них ориентироваться.
            </p>
        </div>
    </div>

</div>
</template>

<script>
    import { EventBus, API } from '@/main.js';
    export default { 
        name: 'TeamEntry',
        data () {
            return {
                servers: null,
            }
        },
        methods: {
            textAreaAdjust() {
                var el = this.$refs.textarea;
                el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "180px";
            },
            getHours(minutes) {
                return (minutes / 60).toFixed(2);
            },
            getFormatTime(minutes) {
                var hours=Math.floor(minutes/60);
                minutes%=60;

                var day=Math.floor(hours/24);
                hours%=24;
                if(day > 0) {
                    return (day > 0 ? (day + 'дн. ') : '') + (hours > 0 ? (hours + 'ч. ') : (minutes > 0 ? (minutes + 'м. ') : ''));
                }
                return (day > 0 ? (day + 'дн. ') : '') + (hours > 0 ? (hours + 'ч. ') : '') + (minutes > 0 ? (minutes + 'м. ') : (day == 0 && hours == 0 ? '0 м. ' : ''));
            },
            getFormatName(server) {
                var spl = server.split(':');
                return spl[2] + " #" + spl[1];
            },
            getFormatUrl(server, user) {
                var spl = server.split(':');
                return "/team/" + spl[0] + "/" + spl[1] + "/" + user;
            },
            listener(packet, data) {
                if(packet === 'team.load') {
                    if (data.type === 'team') {
                        this.servers = data.players;
                    } 
                }
            }
        },
        mounted() {
            this.$root.$emit('send_websocket', `{"packet":"team.load","data":{}}`);
        },
        created() {
            EventBus.$on('onProcessPacket', this.listener);
        },
        beforeDestroy() {
            EventBus.$off('onProcessPacket', this.listener);
        },
        computed: {
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
        	    return this.$store.state.auth.pendingLogin2FA
            },
            API() {
                return API;
            }
        }
    }
</script>

<style scoped>
    input {
        outline: none;
        border: none;
    }
    textarea {
        outline: none;
        border: none;
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

    textarea:focus, input:focus {
        border-color: rgb(255, 255, 255);
    }

    input::-webkit-input-placeholder { color: rgba(255,255,255,0.8);}
    input:-moz-placeholder { color: rgba(255,255,255,0.8);}
    input::-moz-placeholder { color: rgba(255,255,255,0.8);}
    input:-ms-input-placeholder { color: rgba(255,255,255,0.8);}

    textarea::-webkit-input-placeholder { color: rgba(255,255,255,0.8);}
    textarea:-moz-placeholder { color: rgba(255,255,255,0.8);}
    textarea::-moz-placeholder { color: rgba(255,255,255,0.8);}
    textarea:-ms-input-placeholder { color: rgba(255,255,255,0.8);}

    .wrap-input3 {
        width: 100%;
        position: relative;
        border-bottom: 2px solid rgba(255,255,255,0.24);
        margin-bottom: 27px;
    }

.input3 {
    display: block;
    width: 100%;
    background: transparent;
    font-size: 22px;
    color: #fff;
    line-height: 1.2;
    padding: 0 5px;
    border-bottom: inset;
    border-color: rgba(255, 255, 255, 0.562);
    transition: 500ms
}
textarea {
    resize: none;
    overflow: hidden;
}

/*---------------------------------------------*/
input.input3 {
  height: 45px;
}


textarea.input3 {
  min-height: 115px;
  padding-top: 13px;
  padding-bottom: 13px;
}

.col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-auto, .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-auto, .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-auto, .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-auto {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.section {
    border-radius: 30px;
    background-color: #f6f9fc!important;
    padding: 25px;
}
.section.primary {
    background-color: #6977fa!important;
    color: #fff;
}
.section.primary h3, .section.primary h4, .section.primary h5 {
    color: #fff;
}
.section h3 {
    font-weight: 900;
    font-size: 32px;
    color: #454f56;
    margin: 0 0 5px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.col-sm-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
}
.col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
}
.align-items-center {
    align-items: center!important;
}
.moder .section.primary {
	background: linear-gradient(145deg, #ff4161, #fac269 55%);
	background-size: 100%;
	-webkit-animation: moderPrimary 3s infinite;
	animation: moderPrimary 3s infinite;
	overflow: hidden
}

.moder .fieldset {
	border-radius: 15px;
	background: rgba(0, 0, 0, .2);
	padding: 25px;
	margin: 25px 0 0
}

.moder .form-control-lg {
	border: none;
	border-radius: 0;
	line-height: 32px;
	font-size: 21px;
	padding-left: 0;
	padding-right: 0;
	color: #fff;
	box-shadow: none;
	outline: none
}

.moder .form-control-lg::-webkit-input-placeholder {
	color: rgba(0, 0, 0, .5);
	line-height: 32px;
	transition: color .1s ease-in-out
}

.moder .form-control-lg:-moz-placeholder,
.moder .form-control-lg::-moz-placeholder {
	color: rgba(0, 0, 0, .5);
	line-height: 32px;
	transition: color .1s ease-in-out
}

.moder .form-control-lg:-ms-input-placeholder {
	color: rgba(0, 0, 0, .5);
	line-height: 32px;
	transition: color .1s ease-in-out
}

.moder .form-control-lg:hover::-webkit-input-placeholder {
	color: rgba(0, 0, 0, .7)
}

.moder .form-control-lg:hover:-moz-placeholder,
.moder .form-control-lg:hover::-moz-placeholder {
	color: rgba(0, 0, 0, .7)
}

.moder .form-control-lg:hover:-ms-input-placeholder {
	color: rgba(0, 0, 0, .7)
}

.moder .form-control-lg option {
	border: none;
	background: #000;
	font-size: 16px;
	box-shadow: none;
	outline: none
}

.moder select {
	cursor: pointer;
	margin-left: -4px
}

.moder textarea.form-control {
	margin: 8px 0 0;
	padding: 0;
	overflow: auto;
	resize: none
}

.moder h5 {
	line-height: 15px;
    font-size: 16px;
	color: #717597
}

.moder .links {
	margin: 30px 0 -65px;
	text-align: center
}

.moder .links a {
	display: inline-block;
	padding: 20px 35px
}

.moder .general .fieldset {
	display: none
}

.moder .general .view {
	position: relative;
	min-height: 360px
}

@-webkit-keyframes fly {
	0%,
	to {
		top: -60px
	}
	50% {
		top: -90px
	}
}

@keyframes fly {
	0%,
	to {
		top: -60px
	}
	50% {
		top: -90px
	}
}
@-webkit-keyframes moderPrimary {
	0%,
	to {
		background-size: 100%
	}
	50% {
		background-size: 250%
	}
}

@keyframes moderPrimary {
	0%,
	to {
		background-size: 100%
	}
	50% {
		background-size: 250%
	}
}

.moder .general .view:before {
	content: "";
	display: block;
	position: absolute;
	background: url(/assets/img/moder_request.png) no-repeat 100%;
	background-size: contain;
	width: 200%;
	height: 490px;
	top: -60px;
	right: 25px;
	-webkit-animation: fly 3s ease-in-out infinite;
	animation: fly 3s ease-in-out infinite
}

.moder .general h4 {
	font-size: 32px;
	font-weight: 900;
	line-height: 1.3
}

.moder .general p {
	line-height: 1.6;
	margin: 10px 0 0
}

.moder .current {
	background: #fff
}

.moder .current h5 {
	color: #777c7e!important
}

.moder .current small {
	display: block;
	color: #bbb;
	margin: -10px 0 0
}

.moder .current small+small {
	margin: 0
}

.moder .current .form-control.form-control-lg {
	line-height: 48px;
	font-weight: 700;
	font-size: 16px;
	color: #6977fa;
	opacity: .86;
	padding: 0;
	margin: 0
}

.moder .current p.form-control.form-control-lg {
	line-height: 32px
}

.moder .current .failed h5,
.moder .current .success h5 {
	font-weight: 700
}

.moder .current .success h5,
.moder .current .success small+small {
	color: #6977fa!important
}

.moder .current .failed h5,
.moder .current .failed small+small {
	color: #fa6969!important
}
</style>

