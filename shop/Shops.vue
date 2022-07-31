<template>
<div>
    <div class="page_header">
        <div class="page_text_header">
            Список магазинов
        </div>
    </div>

    <div v-if="!isAuthenticated">
        <center>
            Залогинтесь, чтобы получить доступ к данному разделу
        </center>
    </div>
    <div v-else-if="isPendingLogin2FA">
        <center>
            Подтвердите двухфакторную аунтификацию, чтобы получить доступ к данному разделу 
        </center>
    </div>
    <div v-else>

        <div class="exshop-server-select-div">
            <div class="exshop-server-select-icon">
                <img src="/assets/img/shop/blocks.png">
            </div>
            <div class="exshop-server-name-block">
                <div class="exshop-server-name-title">
                    Игровые предметы
                </div>
            </div>
            <div class="exshop-server-select-button">
                <router-link to="/shop">В магазин</router-link>
            </div>
        </div>

        <div class="exshop-server-select-div" style="margin-left: 1px;">
            <div class="exshop-server-select-icon">
                <img src="/assets/img/shop/kits.png">
            </div>
            <div class="exshop-server-name-block">
                <div class="exshop-server-name-title">
                    Кит-Наборы
                </div>
            </div>
            <div class="exshop-server-select-button">
                <router-link to="/shop">В магазин</router-link>
            </div>
        </div>

        <div class="exshop-server-select-div">
            <div class="exshop-server-select-icon">
                <img src="/assets/img/shop/mods.png">
            </div>
            <div class="exshop-server-name-block">
                <div class="exshop-server-name-title">
                    Модификации
                </div>
            </div>
            <div class="exshop-server-select-button">
                <router-link to="/shop">В магазин</router-link>
            </div>
        </div>

        <div class="exshop-server-select-div" style="margin-left: 1px;">
            <div class="exshop-server-select-icon">
                <img src="/assets/img/shop/pixelmon.png">
            </div>
            <div class="exshop-server-name-block">
                <div class="exshop-server-name-title">
                    Покемоны
                </div>
            </div>
            <div class="exshop-server-select-button">
                <router-link to="/shop">В магазин</router-link>
            </div>
        </div>

    </div>
</div>
</template>

<script>
    export default { 
        name: 'Shops',
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
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
        position: absolute;
        width: 670px;
        height: 100%;
    }

    .exshop-server-select-div {
        width: 330px;
    height: 200px;
    float: left;
    margin-left: -15px;
    text-align: center;
    position: relative;
    }

.exshop-server-select-icon {
    position: relative;
}
.exshop-server-select-icon img {
    width: 127px;
    position: absolute;
    left: 7px;
    top: 2px;
}
.exshop-server-name-block {
    width: 248px;
    height: 85px;
    position: absolute;
    left: 122px;
    top: 10px;
    background: url(/assets/img/shop/server_title.png) 0% 0% / cover no-repeat;
}
.exshop-server-select-button {
    width: 222px;
    height: 101px;
    position: absolute;
    left: 130px;
    top: 81px;
}
.exshop-server-name-title {
    font-size: 19px;
    text-align: center;
    line-height: 80px;
    font-family: 'Ubuntu';
    color: rgb(249, 249, 248);
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    height: 95px;
}
.exshop-server-select-button a:hover {
    text-shadow: 1px 2px 6px rgba(202, 115, 11, 0.99);
}

.exshop-server-select-button:after {
    content: '';
    background: url(/assets/img/shop/start_button_hover.png) no-repeat;
    z-index: 10;
    opacity: 0;
}
.exshop-server-select-button::before {
    content: "";
    z-index: 5;
    background: url(/assets/img/shop/start_button.png) no-repeat;
}
.exshop-server-select-button a, .exshop-server-select-button::before, .exshop-server-select-button::after {
    width: 222px;
    height: 101px;
    background-size: cover;
    display: block;
    position: absolute;
    transition: all 0.5s ease 0s;
}
.exshop-server-select-button a {
    text-shadow: rgba(0, 121, 14, 0.99) 1px 2px 6px;
    font-size: 20px;
    z-index: 15;
    line-height: 78px;
    font-family: 'Ubuntu';
    color: rgb(255, 255, 255);
    text-indent: 25px;
    text-decoration: none;
}
.exshop-server-select-button:hover:after {
	opacity: 1;
}

.exshop-server-select-button:hover:before {
	opacity: 0;
}
</style>

