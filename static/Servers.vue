<template>
<div>
    <div class="bg"></div>

    <div class="text">
        НАЧАТЬ ИГРАТЬ
    </div>

    <router-link to="/register" class="btn btn-reg">СОЗДАТЬ АККАУНТ</router-link>
    <router-link to="/launcher" class="btn btn-launcher">CКАЧАТЬ ЛАУНЧЕР</router-link>
    <router-link to="/servers" class="btn btn-servers">СПИСОК СЕРВЕРОВ</router-link>
</div>
</template>

<script>
    export default {
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
    .bg {
        background: url(/assets/img/page_start.png) bottom no-repeat;
        width: 988px;
        height: 522px;
        margin-left: -16px;
        margin-top: -34px;
        position: absolute;
    }

    .text {
        font-size: 72px;
        font-family: 'BosaNova';
        color: #ae105e;
        text-align: center;
        margin-top: 31px;
        position: relative;
    }

    .btn {
        color: #fff;
        padding: 10px;
        font-size: 30px;
        font-family: 'BosaNova';
        text-align: center;
        border-radius: 30px;
        width: 287px;
        height: 52px;
        position: relative;
        display: inline-block;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin-top: 347px;
        cursor: pointer;
    }
    .btn:hover {
        text-decoration: none;
        cursor: pointer;
    }

    .btn-reg {
        margin-left: 12px;
        background: #04a101;
    }
    .btn-reg:hover {
        background: #058303;
    }

    .btn-launcher {
        margin-left: 34px;
        background: #0185d1;
    }
    .btn-launcher:hover {
        background: #036fad;
    }

    .btn-servers {
        margin-left: 38px;
        background: #d1014a;
    }
    .btn-servers:hover {
        background: #a5043c;
    }
</style>
