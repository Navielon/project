<template>
<div>
    <div class="page_header">
        <div class="page_text_header">
            <div class="tooltip">
                <router-link tag="div" to="/shop" class="back-icon fa fa-arrow-circle-left" style="margin-left: -290px;;"/>
                <span class="tooltiptext noselect" style="width: 140px;margin-left: -212px;bottom: 76px;">Вернуться к списку серверов</span>
            </div>
            Магазин блоков
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
        <div class="store_page_wrapper">
            <div class="section_navigation unselectable">
                <div class="section_menu noselect">
                    <router-link :to="getLink('')" :style="getColor('')" :class="{active: isActive('')}">
                        <i class="fa fa-folder-open-o" aria-hidden="true"></i> Каталог
                    </router-link>
                    <router-link :to="getLink('/cart')" :style="getColor('/cart')" :class="{active: isActive('/cart')}">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i> <span id="store_cart_counter" class="count" style="">1</span>Корзина
                    </router-link>
                    <router-link :to="getLink('/storage')" :style="getColor('/storage')" :class="{active: isActive('/storage')}">
                        <i class="fa fa-hdd-o" aria-hidden="true"></i> <span id="store_storage_counter" class="count" style="display:none">0</span>Склад
                    </router-link>
                    <router-link :to="getLink('/history')" :style="getColor('/history')" :class="{active: isActive('/history')}">
                        <i class="fa fa-hourglass-o" aria-hidden="true"></i> История
                    </router-link>
                </div>
                <div class="filled_box user_balance">
                    <router-link to="/cabinet/pay" class="add_button tip" title="Пополнить"></router-link>
                    <div class="label">На вашем счету</div>
                    <div class="money"><span id="js_user_money">{{getBalance}}</span> руб.</div>
                </div>
            </div>

            <transition name="component-fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</div>
</template>

<script>
    export default { 
        name: 'ShopServer',
        data () {
            return {
                activeTab: 'main'
            }
        },
        methods: {
            openTab(e) {
                this.activeTab = e;
            },
            getLink(tab) {
                var server = this.$route.params.server;
                return '/shop/' + server + tab;
            },
            isActive(tab) {
                var server = this.$route.params.server;
                var url = '/shop/' + server + tab;
                return url == this.$route.path || url+'/' == this.$route.path; 
            },
            getColor(tab) {
                var server = this.$route.params.server;
                var url = '/shop/' + server + tab;
                if(url != this.$route.path) {
                    return '';
                }
                var hash = server.hashCode(); 
                var r = (hash & 0xFF0000) >> 16;
                var g = (hash & 0x00FF00) >> 8;
                var b = hash & 0x0000FF;
                return 'background-color: ' + server.toColor();
            }
        },
        computed: {
            isAuthenticated () {
                return this.$store.getters.authenticated
            },
            isPendingLogin2FA () {
                return this.$store.state.auth.pendingLogin2FA
            },
            getBalance() {
                return this.$store.state.auth.balance
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

.clearfix:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}
.store_page_wrapper .section_navigation {
	width: 170px;
	float: left;
}

.section_menu {
    cursor: pointer;
}
.back-icon {
    cursor: pointer;
}
.back-icon:hover {
    color: rgba(251, 247, 208, 0.77);
}

.store_page_wrapper .section_menu { padding-bottom: 10px; }
.store_page_wrapper .section_menu > a {
	display: block;
	box-sizing: border-box;
	text-decoration: none;
	color: inherit;
	font-size: 14px;
	font-weight: 400;
	text-shadow: none;
	border-radius: 4px;
	padding: 0 10px;
	height: 38px;
	line-height: 38px;
	transition: background 0.1s linear;
	margin-bottom: 2px;
}
.store_page_wrapper .section_menu > a:last-child { margin-bottom: 0; }
.store_page_wrapper .section_menu > a > .count {
	float: right;
	padding: 0 5px;
	display: block;
	background: #3498DB;
	font-size: 11px;
	font-weight: 600;
	height: 16px;
	min-width: 16px;
	text-align: center;
	line-height: 15.5px;
	margin-top: 11px;
	color: #FFFFFF;
	border-radius: 3px;
	box-sizing: border-box;
}
.store_page_wrapper .section_menu > a:hover {
	background-color: #ECF0F1;
}
.store_page_wrapper .section_menu > a:active {
	background-color: #DBDEE0;
	transition: none;
}
.store_page_wrapper .section_menu > a > i.fa {
	font-size: 21px;
	width: 22px;
	vertical-align: -1px;
}
.store_page_wrapper .section_menu > a.active {
	background-color: #3498DB;
	color: #FFFFFF;
}
.store_page_wrapper .section_menu > a.active > .count {
	background-color: #FFFFFF;
	color: #555555;
}

.store_page_wrapper .section_content {
	margin-left: 180px;
}

/* Виджет слева */
.store_page_wrapper .filled_box {
	background: #ECF0F1;
	border-radius: 3px;
	padding: 12px;
	color: #7F8C8D;
	font-weight: 400;
	text-shadow: none;
	font-size: 14px;
}
.store_page_wrapper .filled_box .label {
	text-transform: uppercase;
	font-weight: 300;
	font-size: 12px;
}
.store_page_wrapper .filled_box.user_balance { text-align: center; position: relative; }
.store_page_wrapper .filled_box.user_balance .money { line-height: 23px; }
.store_page_wrapper .filled_box.user_balance .money > span { color: #444; font-size: 23px; }
.store_page_wrapper .filled_box.user_balance .add_button {
	display: block;
	position: absolute;
	top: 0; right: 0; bottom: 0;
	height: auto;
	width: 22px;
	box-sizing: border-box;
	background: url('/assets/img/shop/bar_icons.svg') no-repeat;
	background-position: -39px 50%;
	border-radius: 0 3px 3px 0;
	transition: background-color 0.1s linear;
}
.store_page_wrapper .filled_box.user_balance .add_button:hover { background-color: rgba(127,140,141,0.1); }
.store_page_wrapper .filled_box.user_balance .add_button:active { background-color: rgba(127,140,141,0.2); transition: none; }

</style>

