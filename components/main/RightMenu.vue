<template>
    <div>
        <div class="block-top"/>
        
        <!--div class="block-container">
            <div class="block-header">Голосование</div>
            <div class="block-body">
                <div class="block-mini"/>
                text<br/>text
            </div>
            <div class="block-bottom"></div>
        </div-->

        <Auth/>        

        <div class="block-container">
            <div class="block-header">Мониторинг</div>
            <div class="block-body">
                <div class="block-mini"/>
                <Monitoring/>
            </div>
            <div class="block-bottom"></div>
        </div>

        <div class="block-container">
            <div class="block-header">
                <img src="/assets/img/cake.png" style="position: absolute;margin-left: -55px;margin-top: 12px;"/>
                Бонусы!
                <img src="/assets/img/cake.png" style="position: absolute;margin-left: 15px;margin-top: 12px;"/>
            </div>
            <div class="block-body votes" v-on:click="votes()">
                <div class="block-mini"/>
            </div>
        </div>

        <center style="margin-top: 20px">
        <a href="https://freekassa.ru" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn.freekassa.ru/banners/small-white-2.png" title="Прием платежей">
</a>
        </center>
    </div>
</template>

<script>
import Auth from '../Auth'
import Monitoring from '../Monitoring'

export default {
    name: 'RightMenu',
    components: {Auth, Monitoring},
    methods: {
        votes() {
            this.$router.push('/votes');
            window.scrollTo(0, 0); 
        }
    }
}
</script>

<style>
    .block-top {
        margin-top: 10px;
    }

    .block-container {
        width: 280px;
        margin-left: 2px;
        margin-top: 37px;
    }

    .block-header {
        background: url('/assets/img/block_header.png') top center no-repeat;
        text-align: center;
        font-family: "Ubuntu";
        font-size: 25px;
        font-weight: bold;
        line-height: 55px;
        color: white;
        letter-spacing: 1px;
    }
    
    .block-body {
        margin-top: 20px;
        background: url('/assets/img/block_body.png') top center repeat-y;
    }

    .block-bottom {
        background: url('/assets/img/block_bottom.png') bottom no-repeat;
        min-height: 19px;
    }

    .block-mini {
        background: url(/assets/img/block_mini.png) top center no-repeat;
        min-width: 58px;
        min-height: 50px;
        position: absolute;
        margin-left: 111px;
        margin-top: -14px;
        z-index: 1;
    }

    .votes {
        background: url('/assets/img/votes.png') bottom no-repeat;
        height: 383px;
        cursor: pointer;
        transition: all 0.5s;
    }

    .votes:hover {
        background: url('/assets/img/votes_hover.png') bottom no-repeat;
    }
</style>
