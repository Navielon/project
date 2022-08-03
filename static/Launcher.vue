<template>
<div>
    <div class="bg">
        <div class="text">
            СКАЧАТЬ ЛАУНЧЕР
        </div>

        <div class="text2">
            Выберите лаунчер для вашей системы
        </div>

        <div class="btn bg-win">
            <a href="https://static.loliland.ru/LoliLand.exe" target="_blank" style="text-decoration: none;">
                <div class="button">
                    Для Windows
                </div>
            </a>
        </div>
        <div class="btn bg-linux">
            <a href="https://static.loliland.ru/LoliLand.exe" target="_blank" style="text-decoration: none;">
                <div class="button">
                    Для Linux
                </div>
            </a>
        </div>
        <div class="btn bg-mac">
            <a href="https://static.loliland.ru/LoliLand.exe" target="_blank" style="text-decoration: none;">
                <div class="button">
                    Для MacOS
                </div>
            </a>
        </div>
    </div>
</div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .bg {
        background: url(/assets/img/launcher/bg.png) bottom no-repeat;
        width: 708px;
        height: 369px;
        margin-left: -16px;
        margin-top: -18px;
    }

    .text {
        font-size: 72px;
        font-family: 'BosaNova';
        color: #ae105e;
        text-align: center;
        padding-top: 31px;
    }

    .text2 {
        font-size: 35px;
        font-family: 'BosaNova';
        color: #393939;
        text-align: center;
        margin-top: 11px;
        position: relative;
    }

    .btn {
        color: #fff;
        padding: 10px;
        font-size: 30px;
        font-family: 'BosaNova';
        text-align: center;
        width: 226px;
        height: 284px;
        position: relative;
        display: inline-block;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        cursor: pointer;
    }
    .btn:hover {
        text-decoration: none;
        cursor: pointer;
    }

    .bg-win {
        background: url(/assets/img/launcher/bg-win.png) bottom no-repeat;
    }

    .bg-linux {
        background: url(/assets/img/launcher/bg-linux.png) bottom no-repeat;
    }

    .bg-mac {
        background: url(/assets/img/launcher/bg-mac.png) bottom no-repeat;
    }

    .button {
        width: 171px;
        height: 44px;
        margin-top: 161px;
        margin-left: 30px;
        background: #ffffff57;
        border-radius: 5px;
        font-size: 21px;
        font-family: 'Ubuntu';
        padding-top: 9px;
        cursor: pointer;
        color: #fff;
    }

    .button:hover {
        background: #ffffff44;
        cursor: pointer;
        text-decoration: none;
        color: #fff;
    }
</style>
