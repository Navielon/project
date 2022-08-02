<template>
<div> 
    <img src="/assets/img/pages/about/loliland.jpg" class="noselect loliland" draggable="false"/>


    <div class="screen" style="background: url(/assets/img/pages/about/screen_3.png) 0% 0% / cover;"></div>
    <img src="/assets/img/pages/about/1.png" class="noselect number" draggable="false"/>
    <div class="line">
        <div class="title">Магазин блоков</div>
        <div class="tag">Приобретите за монеты или рубли любую вещь в игре!</div>
    </div>

    <div class="screen" style="background: url(/assets/img/pages/about/screen_4.png) 0% 0% / cover; background-position: right; background-position-x: 140px;"></div>
    <img src="/assets/img/pages/about/2.png" class="noselect number" draggable="false"/>
    <div class="line">
        <div class="title">Новый чат & модуль телепортации</div>
        <div class="tag">Используйте красивый чат и удобно телепортируйтесь!</div>
    </div>

    <div class="screen" style="background: url(/assets/img/pages/about/screen_5.png) 0% 0% / cover;"></div>
    <img src="/assets/img/pages/about/3.png" class="noselect number" draggable="false"/>
    <div class="line">
        <div class="title">Меню варпов</div>
        <div class="tag">Создайте свой варп и посещайте варпы других игроков!</div>
    </div>

    <center>
        <img src="/assets/img/pages/about/girl.png" class="noselect girl" draggable="false"/>
    </center>

    <div @click="top">
        <router-link to="/start" tag="div" class="start"></router-link>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        top() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
    .loliland {
        width: 708px;
        margin-left: -17px;
        margin-top: -19px;
    }

    .screen {
        width: 542px;
        height: 266px;
        margin-left: 149px;
        margin-top: -3px;
    }

    .number {
        margin-left: -20px;
        position: absolute;
        margin-top: -266px;
    }

    .line {
        background: url(/assets/img/pages/about/line.jpg) 0% 0% / cover;
        width: 708px;
        height: 90px;
        margin-left: -17px;
        position: relative;
        font-family: 'Ubuntu';
        text-align: center;
        color: white;
        z-index: 100;
    }

    .title {
        font-weight: bold;
        font-size: 35px;
        padding-top: 12px;
    }

    .tag {
        font-size: 20px;
    }

    .girl {
        margin-top: 31px;
    }

    .start {
        background: url(/assets/img/pages/about/start.png) 0% 0% / cover;
        width: 404px;
        height: 120px;
        cursor: pointer;
        transition: 0.3s;
        position: absolute;
        margin-top: -160px;
        margin-left: 140px;
    }

    .start:hover {
        background: url(/assets/img/pages/about/start_hover.png) 0% 0% / cover;
    }
</style>
