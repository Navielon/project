<template>

    <div class="forum_disc">

        <section class="disc_header">
            <img class="author_img" src="/assets/img/skin3d.png" alt="">
            <div class="header_info">
                <h2 class="disc_name">{{ "Horizon City" }}</h2>
                <span class="disc_author_span">Автор:<span class="disc_author">{{ " " + "radar764" }}</span></span>
                <time class="disc_date" datetime="2019-11-07T17:44:30Z" title="07.11.2019 19:44 " data-short="21 час">{{ ", " + "21 час назад" + " " }}</time>
                <span class="disc_v">в</span> <span class="disc_topic">{{ " " + "Флудилка" }}</span>
            </div>
        </section>

        <section class="disc_main">

            <div v-for="(answer, index) in answers" :key="index" class="disc_answer">

                <div class="disc_answer_left">
                    <p class="disc_answer_nick">{{ answer.nick }}</p>
                    <img :src="'/assets/img/' + answer.avatar" alt="" class="disc_answer_ava">
                    <img :src="'/assets/img/' + answer.rank" alt="" class="img disc_answer_rank">
                    <div class="disc_answer_rep">
                        <i class="plus_green fa fa-plus-circle">{{ " " + answer.rep }}</i>
                    </div>
                    <p class="disc_answer_publ">{{ answer.pulishes + " публикаций" }}</p>
                    <img :src="'/assets/img/' + answer.badge" alt="" class="disc_answer_badge">
                    <span class="disc_answer_status_span">Статус в игре:</span><br>
                    <span class="disc_answer_status">{{ answer.status }}</span>
                    <div class="disc_answer_overall_online">Онлайн за всё время: <span class="disc_answer_online">{{ answer.online_overall }}</span></div>
                    <div class="disc_answer_month_online">Онлайн за месяц: <span class="disc_answer_online">{{ answer.online_month }}</span></div>
                    <div class="disc_answer_clan">
                        <p class="disc_answer_clan_p">Участник клана</p>
                        <span class="disc_answer_clan_span">{{ answer.clan }}</span>
                    </div>
                </div>

                <div class="disc_answer_right">
                    <p class="disc_answer_published">Опубликовано: <span class="disc_answer_public_date">{{ answer.pulish_date }}</span></p>
                    <div class="answer_content" v-html="answer.content" />
                </div>
            </div>

        </section>

        <section v-if="!isAuthenticated" class="disc_bottom">
            <h3 class="disc_bottom_h3">Создайте аккаунт или войдите в него для комментирования</h3>
            <p class="disc_bottom_p">Вы должны быть пользователем, чтобы оставить комментарий</p>
            <div class="dics_bottom_create_or_login_wrapper">
                <div class="disc_bottom_create">
                    <h4 class="create_acc_h4">Создать аккаунт</h4>
                    <p class="create_acc_p">Зарегистрируйтесь для получения аккаунта. Это просто!</p>
                    <a class="disc_login_button">Зарегистрировать аккаунт</a>
                </div>
                <div class="disc_bottom_login">
                    <h4 class="create_acc_h4">Войти</h4>
                    <p class="create_acc_p">Уже зарегистрированы? Войдите здесь.</p>
                    <a class="disc_login_button">Войти сейчас</a>
                </div>
            </div>
            
        </section>
        
         <div v-else-if="isPendingLogin2FA">
            <center>
                Подтвердите двухфакторную аунтификацию, чтобы получить доступ к данному разделу 
            </center>
        </div>

        <section v-if="isAuthenticated" class="disc_bottom_logged">
            <img :src="'/assets/img/' + answers[1].avatar" alt="" class="disc_b_l_ava">
            <div id="editor">
                <quill-editor v-model="content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)">
                </quill-editor>
                <div class="quill_buttons">
                    <a @click="eraseContent" class="disc_login_button button_left">Стереть</a>
                    <a @click="sendContent" class="disc_login_button button_right">Отправить ответ</a>
                </div>
            </div>
        </section>

    </div>

</template>

<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import { quillEditor } from 'vue-quill-editor'
    export default {
        components: {
            quillEditor
        },
        data () {
            return {
                content: '',
                editorOption: {
                    placeholder: 'Оставте ответ...',
                    modules: {
                      toolbar: [
                        [{ 'size': ['small', false, 'large'] }],
                        ['bold', 'italic'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        ['link', 'image'],
                        [{ 'align': [] }]
                      ],
                      history: {
                        delay: 1000,
                        maxStack: 50,
                        userOnly: false
                      }
                    }
                },
                answers: {
                    1: {
                        nick: 'master777',
                        avatar: 'skin3d.png',
                        rank: 'deluxe.png',
                        rep: 155,
                        pulishes: 1631,
                        badge: 'brain.png',
                        status: 'Делюкс',
                        online_overall: 1830,
                        online_month: 120,
                        clan: 'Грех',
                        pulish_date: 'Пятница в 12:24',
                        content: ''
                    }
                }
            }
        },   
        methods: {
            eraseContent() {
                this.content = ''
            },
            sendContent() {
                let last_key = Object.keys(this.answers).length
                this.answers[++last_key] = Object.assign({}, this.answers[last_key-1])
                this.answers[last_key].content = this.content
                this.content = ''
            },
            onEditorBlur(quill) {
            },
            onEditorFocus(quill) {
            },
            onEditorReady(quill) {
            },
            onEditorChange({ quill, html, text }) {
              this.content = html
            }
        },
        computed: {
            isAuthenticated () {
             return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
             return this.$store.state.auth.pendingLogin2FA
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
        }
	}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.forum_disc {
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.disc_answer {
    background-color: #fff;
    margin-bottom: 15px;
    display: flex;
}

/* header */
.disc_header {
    margin: 20px 0;
    margin-left: 10px;
    display: flex;
}
.author_img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
}
.disc_name {
    font-size: 28px;
    font-weight: 400;
    line-height: 1.2;
}
.header_info {
    line-height: 21px;
    font-size: 14px;
}
.disc_author {
    color: #000;
}
.disc_author:hover {
    cursor: pointer;
    color: #4588c5;
}
.disc_topic {
    color: #000;
}
.disc_topic:hover {
    cursor: pointer;
    color: #4588c5;
}

/* bottom logged user */
.disc_bottom_logged {
    display: grid;
    grid-template-columns: 5% 95%;
    margin: 15px 0;
    padding: 15px;
    background-color: #e6e8eb;
    font-size: 13px;
    line-height: 18px;
    color: #353c41;
}
.disc_b_l_ava {
    width: 50px;
    height: 50px;
}
#editor {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-items: center;
}

/* bottom */
.disc_bottom {
    padding: 15px;
    background-color: #e6e8eb;
    font-size: 13px;
    line-height: 18px;
    color: #353c41;
    text-align: center;
}
.disc_bottom_h3 {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    color: #000;
}
.disc_bottom_p {
    color: #8d9aa6;
    font-size: 14px;
    line-height: 21px;
}
.dics_bottom_create_or_login_wrapper {
    margin-top: 12px;
    padding: 15px 0;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 1px 0px rgba(0,0,0,0.1);
    border-radius: 3px;
}
.create_acc_h4 {
    font-size: 19px;
    color: #000;
    line-height: 24px;
    font-weight: 400;
}
.create_acc_p {
    line-height: 21px;
    margin-bottom: 5px;
    color: #8d9aa6;
    font-size: 14px;
}

/* left */
.disc_answer_left {
    margin: 0 15px;
    padding: 15px 0;
    text-align: center;
    font-size: 13px;
    line-height: 18px;
    color: #353c41;
}
.disc_answer_nick {
    font-size: 20px;
    line-height: 1.2;
    color: #000;
}
.disc_answer_ava {
    margin: 10px auto;
    display: block;
    width: 80px;
    height: 80px;
}
.plus_green {
    margin-top: 10px;
    color: #5f7a47;
}
.disc_answer_publ {
    color: #8d9aa6;
}
.disc_answer_badge {
    display: block;
    margin: 5px auto;
    width: 32px;
}
.disc_answer_status {
    color: rgb(128, 0, 128);
}
.disc_answer_online {
    font-weight: bold;
    color: rgb(50, 205, 50);
}
.disc_answer_clan_span {
    font-weight: bolder;
    color: #3d6594;
}

/* right */
.disc_answer_right {
    margin-top: 15px;
    margin-left: 10px;
    font-size: 14px;
    color:#000;
}
.disc_answer_published {
    line-height: 20px;
    font-size: 13px;
    color: #8d9aa6;
}
.disc_answer_published:hover {
    cursor: pointer;
    color: #4588c5;
}
.answer_content {
    max-width: 600px;
    font-size: 14px;
    color: #353c41;
    overflow-wrap: break-word;
}

/* buttons */
.disc_login_button {
    text-decoration: none;
    font-size: 12px;
    line-height: 34px;
    padding: 8px 25px;
    background: #3e4148;
    color: #ffffff;
    border-radius: 3px;
}
.disc_login_button:hover {
    cursor: pointer;
    background: #4d5056;
}
.quill_buttons {
    margin-top: 20px;
}
.button_left {
    float: left;
    padding: 0 25px;
    margin-left: 65%;
}
.button_right {
    margin-right: 10px;
    display: block;
    float: right;
    padding: 0 25px;
}

/* quill */
.quill-editor:not(.bubble) .ql-container,
  .quill-editor:not(.bubble) .ql-container .ql-editor {
    height: 30rem;
    padding-bottom: 1rem;
  }
.quill-editor,
  .quill-code {
    background-color: #ecedf0;
    width: 100%;
    float: left;
  }
.quill-code {
    height: auto;
    border: none;
}
.quill-code > .title {
    border: 1px solid #ccc;
    border-left: none;
    height: 3em;
    line-height: 3em;
    text-indent: 1rem;
    font-weight: bold;
}  
.quill-code > code  {
    width: 100%;
    margin: 0;
    padding: 1rem;
    border: 1px solid #ccc;
    border-top: none;
    border-left: none;
    border-radius: 0;
    height: 30rem;
    overflow-y: auto;
}     
</style>
