<template>
<div>
	<div v-if="mod != null">
		<img :src="API + 'mod.logo?mod=' + urlId" style="width: 708px; margin-left: -17px; margin-top: -19px;" />

		<div class="description">{{mod.description}}</div>
		<div class="servers"> 
			<div class="head">Сервера с модом {{mod.name}}</div> 
			
			<center style="margin-top: 10px">
				<div class="server" v-for="server in mod.servers" :key="server.url">
					<router-link target="_blank" :to="'/server/' + server.url" class="server_link">
						<div class="server-icon noselect">
							<img width=44px v-bind:src="'/assets/img/servers/' + server.url + '.png'" style="filter: drop-shadow(0px 2px 2px #222222bf);cursor: pointer;" />
						</div>
						{{server.name}}
					</router-link>
				</div>
			</center>
		</div>
	</div>

</div>
</template>

<script>
	import axios from 'axios'
	import * as main from '@/main.js';
	import { API, EventBus } from '@/main.js'; 

	export default {
		name: 'ModPage',
		data () {
            return {
				urlId: null,
                mod: null
            }
        },
        computed: {
            API() {
                return API;
            }
        },
        methods: {
            loadData(params) {
				this.urlId = params.mod;
                axios.get(API + "mod.get?mod=" + this.urlId)
                .then(res => {
					this.mod = res.data.data;
					document.title =  'Играть с модом ' + this.mod.name + ' - LoliLand';
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
        }
	}
</script>

<style scoped>
.description {
	text-align: justify;
	font-family: 'Ubuntu';
	margin-top: 9px;
	margin-bottom: 9px;
}

.head {
	color: #810101;
	background: linear-gradient(45deg, #810101, #e00);
	background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 25px;
	font-weight: bolder;
	font-family: 'Ubuntu';
	text-align: center;
	text-transform: uppercase;
}

.server {
	display: inline-block;
    margin-inline-end: 14px;
    text-align: center;
    font-size: 19px;
    font-family: "NeoSansBold";
}
.server_link {
	text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.16);
}
.server_link:hover {
	text-decoration: none;
}
</style>
