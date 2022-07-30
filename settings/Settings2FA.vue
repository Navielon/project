<template>
<div>
    <div class="panel-bg">
        <div class="panel-header">
            Что это?
        </div>
        Большинство аккаунтов защищены от проникновений только паролем. 
        Настройте двухэтапную аутентификацию и создайте новую преграду для злоумышленников!
        Даже если мошенник узнает ваш пароль, добраться до социальной сети будет не просто. <br/>
        <b>Мы рекомендуем защитить аккаунт с помощью Telegram или ВК! </b>
    </div>

    <div class="panel-bg">
        <div class="panel-header">
            <img class="noselect" style="width: 28px; margin-top: -4px;" src="/assets/img/icons/vk.png"/> 
            <div style="display: inline-table;position: absolute;margin-top: 0px;width: 310px;margin-left: 13px;">
                Защита с помощью ВК
            </div>
        </div>
        Чтобы активировать защиту, напишите нашему боту: <br/>
        <div class="tooltip" style="display: block;">
            <div class="protect noselect" v-on:click="copy('/protect ' + auth.login + ' ' + auth.accessToken)">
                /protect {{auth.login}} {{auth.accessToken}}
            </div>
            <span class="tooltiptext noselect" style="width: 230px;margin-left: -120px;">
                Нажмите, чтобы скопировать
            </span>
        </div>
        Ссылка на нашего бота: 
        <a href="https://vk.com/im?sel=-178557012" target="_blank" class="protect_url">https://vk.com/LoliLand2FA</a>
    </div>

    <div class="panel-bg">
        <div class="panel-header">
            <img class="noselect" style="width: 28px; margin-top: -4px;" src="/assets/img/icons/telegram.png"/> 
            <div style="display: inline-table;position: absolute;width: 310px;margin-top: 0px;margin-left: 13px;">
                Защита с помощью Telegram
            </div>
        </div>
        Чтобы активировать защиту, напишите нашему боту: <br/>
        <div class="tooltip" style="display: block;">
            <div class="protect noselect" v-on:click="copy('/protect ' + auth.login + ' ' + auth.accessToken)">
                /protect {{auth.login}} {{auth.accessToken}}
            </div>
            <span class="tooltiptext noselect" style="width: 230px;margin-left: -120px;">
                Нажмите, чтобы скопировать
            </span>
        </div>
        Ссылка на нашего бота: 
        <a href="https://t.me/LoliLand2FABot" target="_blank" class="protect_url">https://t.me/LoliLand2FABot</a>
    </div>

    <div class="panel-bg">
        <div class="panel-header">
            Как отключить защиту?
        </div>
        Напишите нашему боту: <br/>
        <div class="tooltip" style="display: block; width: 111px;">
            <div class="protect noselect" v-on:click="copy('/unprotect')">/unprotect</div>
            <span class="tooltiptext noselect" style="width: 230px;margin-left: -120px;">
                Нажмите, чтобы скопировать
            </span>
        </div>
    </div>
</div>
</template>

<script>
    import { EventBus } from '@/main.js';
    import * as main from '@/main.js';

    export default {
        name: 'SettingsTokens',
        computed: {
            auth() {
                return this.$store.state.auth
            }
        },
        methods: {
            fallbackCopyTextToClipboard(text) {
                var textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position="fixed";  //avoid scrolling to bottom
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    var successful = document.execCommand('copy');
                    var msg = successful ? 'successful' : 'unsuccessful';
                    this.$root.$emit('notice_success', 'Команда успешно скопирована!', '');
                } catch (err) {
                    this.$root.$emit('notice_error', 'Oops, unable to copy', '');
                    console.error('Fallback: Oops, unable to copy', err);
                }

                document.body.removeChild(textArea);
            },
            copy(text) {
                if (!navigator.clipboard) {
                    this.fallbackCopyTextToClipboard(text);
                    return;
                }
                var ob = this;
                navigator.clipboard.writeText(text).then(function() {
                    ob.$root.$emit('notice_success', 'Команда успешно скопирована!', '');
                }, function(err) {
                    console.error('Async: Could not copy text: ', err);
                });
            }
        }
    }
</script>

<style scoped> 
    .protect {
        white-space: nowrap;
        overflow: hidden;
        background: #fde1b4a6;
        padding: 5px;
        padding-left: 10px;
        text-overflow: ellipsis;
        border-radius: 15px;
        border: 2px solid #e6be7d;
        margin-top: 3px;
        margin-bottom: 3px;
        font-weight: 900;
        font-family: 'Ubuntu';
        transition: 0.2s;
    }

    .protect:hover {
        background: #fde1b4ce;
        color: #564343;
    }

    .protect_url {
        font-weight: 900;
        font-family: 'Ubuntu';
    }

    .panel-bg {
		background: rgba(0, 0, 0, 0.15);
		border-radius: 2px;
		padding: 10px;
		width: 650px;
		margin-left: 10px;
		-webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
		margin-top: 10px;
	}

    .panel-bg .panel-header {
        text-transform: uppercase;
        width: 650px;
        background-color: #00000047;
        margin: -10px;
        height: 35px;
        padding: 8px;
        font-size: 17px;
        margin-bottom: 9px;
        color: white;
        padding-left: 15px;
    }

    .panel-bg>p {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        text-transform: uppercase;
        color: #6d0b0b;
        font-size: 1em;
        line-height: 0px;
    }
</style>
