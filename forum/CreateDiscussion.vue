<template>

    <div class="create_dis_page">

        <div class="f_header_wrapper1">
            <div class="f_header_wrapper2">
                <h1 class="f_section_h1">Создать новое обсуждение</h1>
            </div>
        </div>

        <div class="new_disc_main">

            <img class="new_disc_main_ava" :src="'https://api.loliland.ru/avatar/MrYarik666'">

            <section class="new_disc_right">

                <input v-model="public_checked" type='checkbox' class='ios8-switch' id='checkbox-1'>
                <label for='checkbox-1'></label>
                <span class="noselect" v-if="public_checked">Публичное обсуждение</span>
                <span class="noselect" v-else>Приватное обсуждение</span>

                <input v-model="content.header" class="new_disc_header_input noselect" type="text" placeholder="Введите заголовок..." style="margin-top:10px;"><br>
                <div id="editor2">
                    <quill-editor v-model="content.body"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)">
                    </quill-editor>
                </div>

                <div class="clearfix"></div>

                <div class="create_dis_bottom">
                    <div class="select_wrapper">
                        <span class="write_in">Написать в: </span>                
                        <select class="select_menu" v-model="selected_option">
                            <option class="option_st" disabled value="">Выберите раздел</option>
                            <option class="option_st" v-for="(section, index) in sections" :key="index" :value="index">{{ section }}</option>
                        </select>
                    </div>

                    <div @click="sendContent" class="btn-drop send_req_but_mg_r">Отправить ответ</div>
                </div>

            </section>
            
        </div>

    </div>

</template>

<script>
    import { EventBus } from '@/main.js';
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
                public_checked: true,
                content: {
                    header: '',
                    body: ''
                },
                sections: {},
                selected_option: '',
                editorOption: {
                    placeholder: 'Ваше сообщение...',
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{ 'header': 1 }, { 'header': 2 }],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'script': 'sub' }, { 'script': 'super' }],
                            [{ 'indent': '-1' }, { 'indent': '+1' }],
                            [{ 'direction': 'rtl' }],
                            [{ 'size': ['small', false, 'large', 'huge'] }],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'font': [] }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'align': [] }],
                            ['clean'],
                            ['link', 'image', 'video']
                        ],
                        history: {
                            delay: 1000,
                            maxStack: 50,
                            userOnly: false
                        }
                    }
                }
            }
        },
        methods: {
            
            listener(packet, data) {
                if(packet === 'forum.preAddTopic') {
                    if (data.type === 'success') {
                        this.sections = data.sections
                        this.selected_option = this.$route.params.id
                    }
                }
            },
            onAuth() {
                this.$root.$emit('send_websocket', `{"packet":"forum.preAddTopic","data":{}}`);
            },
            sendContent() {
                
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
            if(this.isAuthenticated) {
                this.onAuth();
            } else {
                EventBus.$on('onAuth', this.onAuth);
            }
            EventBus.$on('onProcessPacket', this.listener);
        },
        beforeDestroy() {
            EventBus.$off('onAuth', this.onAuth);
        }
	}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.create_dis_page {
    font-family: 'Ubuntu';
    color: #272727;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #4d4d4d !important;
  opacity: 1; /* Firefox */
}
/* select menu */
.select_menu {
    width: 200px;
    background-color: red;
}
select {
    width: 250px;
    height: 32px;
    background: #555;
    background: #fad089 !important;
    box-shadow: none !important;
    border: none !important;
    display: inline-block;
    padding: 0 10px !important;
    color: #90573f !important;
    font-size: 15px !important;
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
    letter-spacing: 0.7px;
    outline: none;
    font-family: 'NeoSans';
    transition: all 0.25s ease-out;
}
.clearfix:after {
   content: " "; /* Older browser do not support empty content */
   visibility: hidden;
   display: block;
   height: 0;
   clear: both;
}

.f_header_wrapper1 {
    margin: 0 auto !important;
    width: 730px;
    height: 138px;
    margin-left: -30px;
    background: url(/assets/img/header_page.png);
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
.f_section_h1 {
    margin-top: 30px;
    font-size: 32px;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 20px;
}
.new_disc_main {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 12% 88%;
}
.create_dis_bottom {
    margin: 0 15px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.new_disc_main_ava {
    margin-top: 10px;
    width: 90px;
    border: 2px solid #e53d43;
}
.write_in {
    font-size: 14px;
    font-weight: 500;
    margin-right: 10px;
}
.new_disc_header_input {
    margin-bottom: 15px;
    display: inline-block;
    height: 36px;
    line-height: 22px;
    vertical-align: middle;
	color: #000;
	font-size: 13px;
	background: #fad089;
	border-bottom: 1px solid #fff;
	border: none;
	padding: 15px;
	width: 100%;
	border-radius: 3px;
	font-weight: 300;
    font-style: italic;
	outline: none;
    box-shadow: 1px 1px 0 0 #f8c163;
}
.btn-drop {
	background: linear-gradient(to right, #ffa857, #fe5a73);
	padding: 0 10px;
	color: #fff;
	border-radius: 3px;
	height: 43px;
	border-bottom: 5px solid rgba(255, 255, 255, .25);
	box-shadow: 0 10px 65px 0 #ccd4e0;
	text-decoration: none;
	font-size: 13px;
	font-weight: 600;
	display: block;
	float: left;
	transition: .5s;
	line-height: 38px;
	text-align: -webkit-center;
	outline: none!important;
	border-left: 0;
	border-right: 0;
    cursor: pointer;
    width: 166px;
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
.send_req_but_mg_r {
    margin-right: 10px;
}
.new_disc_right {
    font-size: 13px;
    line-height: 18px;
}
.disc_login_button {
    color: #494949 !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 20px;
    border: 4px solid #494949 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;
}
.disc_login_button:hover {
    color: #ffffff !important;
    background: #f6b93b;
    border-color: #f6b93b !important;
    transition: all 0.4s ease 0s;
}
/* quill */
.quill-editor:not(.bubble) .ql-container,
  .quill-editor:not(.bubble) .ql-container .ql-editor {
    height: 30rem;
    padding-bottom: 1rem;
  }
.quill-editor,
  .quill-code {
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

/* apple switchbox */
input[type="checkbox"].ios8-switch {
    position: absolute;
    margin: 8px 0 0 16px;    
}

input[type="checkbox"].ios8-switch + label {
    position: relative;
    padding: 5px 0 0 50px;
    line-height: 2.0em;
}
input[type="checkbox"].ios8-switch + label:before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 40px; /* x*5 */
    height: 24px; /* x*3 */
    border-radius: 16px; /* x*2 */
    background: #fff;
    border: 1px solid #d9d9d9;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
input[type="checkbox"].ios8-switch + label:after {
    content: "";
    position: absolute;
    display: block;
    left: 0px;
    top: 0px;
    width: 24px; /* x*3 */
    height: 24px; /* x*3 */
    border-radius: 16px; /* x*2 */
    background: #fff;
    border: 1px solid #d9d9d9;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
input[type="checkbox"].ios8-switch:hover + label:after {
    cursor: pointer;
}
input[type="checkbox"].ios8-switch + label:hover:after {
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
}
input[type="checkbox"].ios8-switch:checked + label:after {
    margin-left: 16px;
}
input[type="checkbox"].ios8-switch:checked + label:before {
    background: linear-gradient(to right, #ffa857, #fe5a73);
}
</style>

<style>
.quill-editor {
    background: #fad089;
    box-shadow: 1px 1px 0 0 #f8c163;
    border-radius: 3px;
}
.ql-container {
    height: 350px;
    border: transparent !important;
}
.ql-toolbar {
    border: transparent !important;
    border-bottom: 1px solid #f6b23e !important;
}
</style>
