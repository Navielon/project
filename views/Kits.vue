<template>
<div>
    <div v-if="kits != null">
        <div class="kit">{{group}} наборы</div>
        <div v-for="(server, serverName) in kits" :key="serverName">
            <div v-if="Object.keys(server.items.kits).length > 0">
                <div class="server">{{server.name}}</div>
                <div v-for="(kts, ktsName) in server.items.kits" :key="ktsName" class="items">
                    <div v-for="(item, itemId) in kts.items" :key="itemId" class="item">
                        <div class="tooltip">
                            <img width=44px v-bind:src="API + 'kits.item.image?id=' + itemId" style="filter: drop-shadow(0px 2px 2px #222222bf);cursor: pointer;" />
                            <div class="item_count" v-if="item.stack.count > 1">
                                {{item.stack.count}}
                            </div>
                            <span class="tooltiptext noselect" style="width: 150px;margin-left: -75px;">
                                {{item.stack.display}}<br/>{{item.stack.count}} шт.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
	import axios from 'axios'
    import { EventBus, API } from '@/main.js';
    export default { 
        name: 'Kits',
        data () {
            return {
                group: null,
                kits: null,
            }
        },
        methods: {
           loadData(params) {
				this.group = params.group;
                axios.get(API + "kits.find?group=" + this.group)
                .then(res => {
					this.kits = res.data.data.kits;
                })
            }
        },
        watch: {
            '$route' (to, from) {
                this.loadData(to.params);
            }
		},
        created() { 
            this.loadData(this.$route.params);
        },
        computed: {
            isAuthenticated () {
        	    return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
        	    return this.$store.state.auth.pendingLogin2FA
            },
            API() {
                return API;
            }
        }
    }
</script>

<style scoped>
    .items {
        background-color: #f9f9f973;
        padding-left: 13px;
        border-top: 3px solid #fd6982;
        padding-top: 7px;
        padding-bottom: 7px;
        width: 520px;
        margin-left: 80px;
    }

    .item {
        display: inline-block;
        width: 54px;
        height: 54px;
    }

    .item_count {
        position: absolute;
        margin-top: -21px;
        margin-left: 30px;
        font-family: 'Fredoka One';
        color: white;
        filter: drop-shadow(0px 2px 2px #222222bf);
        font-size: 21px;
        z-index: 1;
    }

    .kit {
        color: #ef082f;
        text-align: center;
        margin-top: 13px;
        font-size: 36px;
        font-weight: bolder;
        font-family: 'Ubuntu';
        text-transform: uppercase;
    }

    .server {
        color: #fd2f52;
        text-align: center;
        margin-top: 13px;
        font-size: 25px;
        font-weight: bolder;
        font-family: 'Ubuntu';
        text-transform: uppercase;
    }
</style>

