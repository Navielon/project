<template>
<div>
    <div class="votes_header noselect"> 
        <img style="width: 708px;" src="/assets/img/votes/header.png" />
    </div>

    <div style="font-family: 'Ubuntu';">
        Голосуя за наш проект в топах, Вы помогаете нам продвигать его в рейтингах, 
        а мы в качестве благодарности начисляем Вам <b>по 15 монет</b>. <br/>
        Вы их можете обменять на любой сервер и покупать кейсы или предметы в игре!
    </div>
    <div class="loli-line" style="margin-top: 7px;">
        <div style="margin-top:10px; margin-bottom: -17px;">
            <h1 style="font-size: 36px; margin-top: -10px; margin-bottom: 4px; color: #f5334a;">
                <b>Как голосовать?</b>
            </h1>
        </div>
        <br/>
 	</div>
    <div>
        <h2 style="font-size: 16px; margin-bottom: 3px;"><b>Процесс голосования состоит из трёх этапов</b></h2>
        <ol style="margin: 0px;padding: 0px;padding-left: 40px;font-size: 14px;color: rgb(62, 62, 62);">
            <li>Авторизация на сайте с помощью аккаунта социальной сети "ВКонтакте".</li>
            <li>Ввод своего никнейма. Важно ввести никнейм правильно, иначе бонус не придёт!</li>
            <li>Проголосовать.</li>
        </ol>
        <div class="green_box">
            Бонус зачисляется автоматически на Ваш счёт сразу же после голосования.
        </div>
    </div>

    <div class="loli-line">
        <div style="margin-top:10px; margin-bottom: -17px;">
            <h1 style="font-size: 36px; margin-top: -10px; margin-bottom: 4px; color: #f5334a;">
                <b>Награды</b>
            </h1>
        </div>
        <br/>
 	</div>
    <div>
        <span style="color: rgb(62, 62, 62);  font-size: 14px;">В конце каждого месяца мы выдаём награды самым активным голосующим, занявших призовые места в&nbsp;</span>
        <router-link to="/top" style="font-size: 14px;">топе голосующих</router-link>
        <span>.</span>
        <ul class="dots" style="margin: 0px;padding: 1px 0px 1px 20px;list-style: none;color: rgb(62, 62, 62);font-size: 14px;">
            <li><b>1 место:</b>&nbsp;300 монет</li>
            <li><b>2 место:</b>&nbsp;200 монет</li>
            <li><b>3 место:</b>&nbsp;100 монет</li>
        </ul>
    </div>

    <div class="loli-line">
        <div style="margin-top:10px; margin-bottom: -17px;">
            <h1 style="font-size: 36px; margin-top: -10px; margin-bottom: 4px; color: #f5334a;">
                <b>ТОПЫ</b>
            </h1>
        </div>
        <br/>
 	</div>

    <center>
        <a href="http://monitoringminecraft.ru/top/loliland/" target="_blank">
            <div class="bonus_box_wrapper noselect">
                <h4>Monitoring Minecraft</h4>
                15 мон.
            </div>
        </a>

        <a href="http://minecraftrating.ru/projects/loliland/" target="_blank">
            <div class="bonus_box_wrapper noselect" style="background: linear-gradient(45deg, #7F00FF, #E100FF);">
                <h4>Minecraft Rating</h4>
                15 мон.
            </div>
        </a>

        <a href="https://topcraft.ru/servers/10312/" target="_blank">
            <div class="bonus_box_wrapper noselect" style="background: linear-gradient(45deg,#02e453,#0a7708);">
                <h4>Top <br/> Craft</h4>
                15 мон.
            </div>
        </a>
    </center>

    <div v-if="isAuthenticated && isPendingLogin2FA">

    </div>
</div>
</template>

<script>
    export default { 
        name: 'Bonus',
        computed: {
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
        	    return this.$store.state.auth.pendingLogin2FA
            }
        }
    }
</script>

<style scoped>
    .votes_header {
        margin-left: -17px;
        margin-top: -18px;
    }

    .bonus_box_wrapper {
        position: relative;
        padding: 20px;
        background: linear-gradient(45deg, #ffbc00, #ff0063);
        color: #FFFFFF;
        border-radius: 105px;
        transition: 0.5s;
        width: 130px;
        height: 130px;
        text-align: center;
        font-size: 25px;
        font-family: 'Ubuntu';
        display: inline-block;
        margin-inline-end: 15px;
        margin-top: 10px;
        overflow: hidden;
        box-shadow: 0 10px 15px rgba(0,0,0,.1);
    }
    .bonus_box_wrapper:hover {
        transform: scale(1.1);
    }
    .bonus_box_wrapper::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40%;
        background: rgba(255, 255, 255, .1);
        z-index: 1;
        -webkit-transform: skewY(-5deg) scale(1.5);
        transform: skewY(-5deg) scale(1.5);
    }
    .bonus_box_wrapper h4 {
        margin-top: 10px;
        font-size: 16px;
        margin-bottom: 4px;
    }
    .loli-line {
        text-align: center;
        overflow: hidden;
        border-bottom: 3px solid #ca1e0e;;
        width: 500px;
        margin: 0 auto;
        padding-left: 40px;
        padding-right: 40px;
        margin-bottom: 16px;
    }
    .green_box {
        margin: 4px 0px;
        padding: 8px 10px;
        border: 1px solid rgb(216, 242, 185);
        font-stretch: inherit;
        font-size: 12.5px;
        line-height: normal;
        vertical-align: baseline;
        cursor: inherit;
        color: rgb(101, 159, 25);
        text-shadow: rgb(255, 255, 255) 0px 1px 0px;
        border-radius: 2px;
        word-spacing: 0px;
        background: rgb(242, 250, 227);
        margin-top: 14px;
        font-weight: bolder;
        text-align: center;
    }
</style>

