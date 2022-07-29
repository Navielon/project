<template>
    <div>
        <p style="text-align: justify;font-family: 'Ubuntu';"> Дорогие игроки, Вы, наверное, задаетесь вопросом, чем же наши мини-игры лучше других? 
        Только у нас на мини-играх установлены интересные моды! Именно для Вас доступен
        Джетпак из IndustrialCraft или нано-лук из аддона IC2 ComboArmors и много других предметов. Лучшие кирки, 
        мечи и много других инструментов добавят больше интереса к игре.
        А так же мы написали собственную модификацию, которая добавляет различное оружие в игру, что поможет Вам в битве!
        Удачной игры!
        </p>

        <div class="page_header">
            <div class="page_text_header">
                Описание режимов
            </div>
        </div>

        <div class="col-md-3">
            <ul class="nav nav-pills nav-stacked">
                <li v-on:click="openTab('BedWars')" v-bind:class="{active: activeTab == 'BedWars'}"><a>BedWars</a></li>
                <li v-on:click="openTab('SkyWars')" v-bind:class="{active: activeTab == 'SkyWars'}"><a>SkyWars</a></li>
                <li v-on:click="openTab('LuckyWars')" v-bind:class="{active: activeTab == 'LuckyWars'}"><a>LuckyWars</a></li>
                <li v-on:click="openTab('KitWars')" v-bind:class="{active: activeTab == 'KitWars'}"><a>KitWars</a></li>
                <li v-on:click="openTab('HungerGames')" v-bind:class="{active: activeTab == 'HungerGames'}"><a>HungerGames</a></li>
                <li v-on:click="openTab('Agario')" v-bind:class="{active: activeTab == 'Agario'}"><a>Agario</a></li>
                <li v-on:click="openTab('VampireZ')" v-bind:class="{active: activeTab == 'VampireZ'}"><a>VampireZ</a></li>
                <li v-on:click="openTab('Creative')" v-bind:class="{active: activeTab == 'Creative'}"><a>Creative</a></li>
            </ul>
        </div>
        <div class="server_info">
            <div v-if="activeTab == 'BedWars'">
                <b>В BedWars игроки делятся на 2, 4 или больше команд! </b> <br/><br/>

                <b>Задача каждой команды:</b> <br/>Сохранить кровать на своём острове! 
                Вам доступен торговец предметами. И чтобы купить предметы, Вы должны собирать ресурсы 
                - глина, железо, золото или алмазы. 
                Именно за эту валюту Вы покупаете товары и разное оружие у торговца.  <br/><br/>

                <b>Возможности:</b> <br/>
                - Если Ваша кровать на Вашем острове невредима - Вы будете возраждаться 
                после каждой смерти, а если сломана и Вы умерли, тогда Вы проиграли! <br/>
                - Меню торговца можно открыть в любой момент во время игры, нажав на кнопку <b>H</b>.

                <br/><br/>

                <b>Цель игры:</b> Разрушить вражеские кровати на всех островах и убить команды соперников.
            </div>
            <div v-if="activeTab == 'SkyWars'">
                <b>В SkyWars Вы появляетесь на своём острове и в Вашем распоряжении несколько сундуков с предметами.  </b> <br/><br/>

                В центре карты расположен большой остров, на котором сундуки наполнены более крутыми вещами, чем на Вашем острове. 
                Так же в центре карты есть "Легендарный сундук", который открывается раз в 3 минуты и выдаёт очень крутые вещи. 
                На промежуточных островах вещи более крутые, чем на начальном острове. <br/><br/>

                <b>Возможности:</b> <br/>
                - Перед началом игры можно выбрать базовый набор вещей. <br/>
                - Наборы вещей можно улучшать или покупать новые в лобби SkyWars! <br/>
                - Добывая руду, Вы получаете вещи и эффекты!

                <br/><br/>

                <b>Цель игры:</b> Убить всех игроков на карте.
            </div>
            <div v-if="activeTab == 'LuckyWars'">
                <b>В LuckyWars Вы появляетесь на своём острове и в Вашем распоряжении несколько Лаки-блоков.  </b> <br/><br/>

                В центре карты расположен большой остров, на котором есть много Лаки-блоков с более 
                крутыми вещами и с меньшим шансом взрыва, чем на вашем острове. 
                На промежуточных островах вещи более крутые, чем на начальном острове. <br/><br/>

                <b>Возможности:</b> <br/>
                - Перед началом игры можно выбрать базовый набор вещей. <br/>
                - Наборы вещей можно улучшать или покупать новые в лобби LuckyWars! <br/>
                - Добывая Лаки-блоки, Вы можете получить разные предметы или произойдет взрыв.

                <br/><br/>

                <b>Цель игры:</b> Убить всех игроков на карте.
            </div>
            <div v-if="activeTab == 'KitWars'">
                <b>В KitWars игроки делятся на 2, 4 или больше команд! </b> <br/><br/>

                <b>Задача каждой команды:</b> <br/>Убить как можно больше людей в течение 5 минут. 
                <br/>За каждое убийство Вы получаете монеты, именно за них можно докупить любое оружие у торговца. <br/><br/>

                <b>Возможности:</b> <br/>
                - Перед началом игры можно выбрать базовый набор вещей. <br/>
                - Наборы вещей можно улучшать или покупать новые в лобби KitWars! <br/>
                - Меню торговца можно открыть в любой момент во время игры, нажав на кнопку <b>H</b>.<br/>
                - Через 2 минуты игры все наборы вещей улучшаются.

                <br/><br/>

                <b>Цель игры:</b> Побеждает команда, которая убила больше всего игроков!
            </div>
            <div v-if="activeTab == 'HungerGames'">
                <b>В этом режиме игроки появляются на большой карте!</b> 
                <br/><br/>
                После отсчета до начала матча Вы получаете неуязвимость на 30 секунд. 
                Игроки разбегаются и собирают ресурсы с сундуков, расположенных по всей карте. 
                <br/><br/>
                Чем лучше ресурсы - тем больше шансов на победу. 
                После того, как неуязвимость закончится, игроки начинают убивать друг друга! 
                <br/><br/>
                Побеждает тот, кто выжил последним!
            </div>

            <div v-if="activeTab == 'VampireZ'">
                <b>В VampireZ игроки появляются на крупной карте и делятся на две команды: люди и вампиры.</b><br/><br/>
                Задача людей выжить! Задача вампиров - перебить всех людей. 
                Если Вы человек и Вас убивает вампир - Вы возраждаетесь вампиром. <br/><br/>
                Если Вы вампир и Вас убивает человек - Вы бесконечно возраждаетесь вампиром. 
                Обоим командам доступен магазин и специальные возможности. 
                <br/>Магазин можно открыть в любой момент во время игры, нажав на кнопку <b>H</b>.
                <br/><br/>
                Убивая зомби и вампиров, люди зарабатывают деньги. Вамприы зарабатывают, убивая людей. <br/><br/>
                <b>Игра заканчивается, когда люди проживают 20 волн или когда вампиры побеждают всех людей.</b>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ServerMiniGames',
        data () {
            return {
                activeTab: 'BedWars'
            }
        },
        methods: {
            openTab(e) {
                this.activeTab = e;
            }
        }
    }
</script>

<style scoped>
.server_info {
    float: right;
    width: 73%;
    background-color: #ffffff78;
    border-radius: 0px 0px 13px 0px;
    height: 364px;
    border-top: 6px solid #1b69ad;
    border-bottom: 6px solid #1b69ad;
    margin-top: -10px;
    padding: 16px;
    padding-top: 12px;
    font-size: 16px;
    font-family: 'Ubuntu';
    text-align: justify;
}

.col-md-3 {
    margin-top: -10px;
    display: inline-block;
    background-color: #ffffffc2;
    border-radius: 0px 0px 0px 13px;
    height: 364px;
    width: 27%;
    border-top: 6px solid #1b69ad;
    border-bottom: 6px solid #1b69ad;
}
.nav {
    padding-left: 10px;
    padding-right: 10px;
  list-style: none;
}
.nav > li {
  position: relative;
  display: block;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
    cursor: pointer;
}
.nav > li > a:hover,
.nav > li > a:focus {
    text-decoration: none;
    background-color: #1d8affa3;
    color: white;
    cursor: pointer;
}
.nav > li.disabled > a {
  color: #777777;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #777777;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eeeeee;
  border-color: #337ab7;
}
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #ddd;
}
.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}
.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}
.nav-tabs > li > a:hover {
  border-color: #eeeeee #eeeeee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
.nav-pills > li {
  float: left;
}
.nav-pills > li > a {
  border-radius: 4px;
}
.nav-pills > li + li {
  margin-left: 2px;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #337ab7;
}
.nav-stacked > li {
  float: none;
}
.nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0;
}

</style>
