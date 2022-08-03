<template>
<div>
    <img src="/assets/img/rewards.png" class="noselect header_img" draggable="false"/>
    
    <div class="loli-line">
        <div style="margin-top:10px; margin-bottom: -17px;">
            <h1 style="font-size: 36px; margin-top: -10px; margin-bottom: 4px; color: #f5334a;">
                <b>Топ играющих</b>
            </h1>
        </div>
        <br/>
 	</div>
    <div>
        <span style="color: rgb(62, 62, 62);  font-size: 14px;">В конце каждого месяца мы выдаём награды самым активным игрокам, занявших призовые места в&nbsp;</span>
        <router-link to="/top" style="font-size: 14px;">топе играющих</router-link>
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
                <b>Время в игре</b>
            </h1>
        </div>
        <br/>
 	</div>
    <div>
        <span style="color: rgb(62, 62, 62);  font-size: 14px;">Награда 5 монет, за каждые пол часа, которые Вы проведете на любом нашем сервере</span>
    </div>

</div>
</template>

<script>
    import { EventBus, API } from '@/main.js';
    export default { 
        name: 'PlayRewards',
        data() {
            return {
                groups: []
            }
        }
    }
</script>

<style scoped>
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
</style>

