<template>
<div>
    
</div>
</template>

<script>
    import * as main from '@/main.js';
    import { EventBus } from '@/main.js';
    export default { 
        name: 'Source',
        mounted() {
            var source = this.$route.params.source;
            this.$store.commit('source', {
                src: source,
            });
            this.$router.push('/start');
            this.$root.$emit('send_websocket', `{"packet":"source.redirect","data":{"url": "${source}"}}`);
        },
    }
</script>
