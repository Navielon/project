<template>
    <div v-bind:class="{'main_content_outer' : !isFullPage, 'main_content_outer_full' : isFullPage}">
        <transition name="component-fade">
            <router-view style="float:none; margin-top: 30px;"/>
        </transition>
    </div>
</template>

<script>
    export default {
        computed: {
            isFullPage () {
                return this.$store.state.fullPage
            }
        }
    }
</script>

<style scoped>
    .main_content_outer {
        float: left;
        min-width: 670px;
        max-width: 670px;
        width: 670px;
        word-wrap: break-word;
    }

    .main_content_outer_full {
        min-width: 951px;
        max-width: 951px;
        width: 951px;
        word-wrap: break-word;
        min-height: 1275px;
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
        position: absolute;
        width: 670px;
        height: 100%;
    }
</style>
