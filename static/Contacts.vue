<template>
<div>
    <div class="page_header">
        <div class="page_text_header">
            Контакты
        </div>
    </div>

    <div>
        <ul class="dots" style="margin: 0px;padding: 1px 0px 1px 20px;list-style: none;color: rgb(62, 62, 62);font-size: 14px;">
            <li><b>Почта:</b>&nbsp;loliland@gmail.com</li>
            <li><b>Skype:</b>&nbsp;yaroslavmoder</li>
            <li><b>Тех. поддержка:</b>&nbsp;<a href="https://vk.com/im?media=&sel=-180476635" target="_blank">VK</a></li>
            <li><b>Discord:</b>&nbsp;<a href="https://discord.gg/hyUep5t" target="_blank">Подключиться</a></li>
        </ul>
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

