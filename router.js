import Vue from 'vue';
import Router from 'vue-router';

import News from '@/post/News'
import NewsFull from '@/post/NewsFull'

import Statistics from '@/statistic/Statistics'
import StatisticsServer from '@/statistic/StatisticsServer'

import ServerInstance from '@/server/ServerBase'

import Register from '@/views/Register'
import Reset from '@/views/Reset'
import Restore from '@/views/Restore'

import Bonus from '@/views/Bonus'
import Votes from '@/views/Votes'
import Transfer from '@/views/Transfer'
import ErrorNotFount from '@/views/404'

import Cabinet from '@/cabinet/Cabinet'
import CabinetMain from '@/cabinet/CabinetMain.vue'
import CabinetGroups from '@/cabinet/CabinetGroups.vue'
import CabinetPay from '@/cabinet/CabinetPay.vue'
import CabinetUsage from '@/cabinet/CabinetUsage.vue'

import Shop from '@/shop/Shop.vue'
import Shops from '@/shop/Shops.vue'
import ShopServer from '@/shop/ShopServer.vue'
import ShopServerMain from '@/shop/ShopServerMain.vue'
import ShopServerCart from '@/shop/ShopServerCart.vue'
import ShopServerStorage from '@/shop/ShopServerStorage.vue'
import ShopServerHistory from '@/shop/ShopServerHistory.vue'

import StartGame from '@/static/StartGame'
import Launcher from '@/static/Launcher'
import Servers from '@/static/Servers'
import About from '@/static/About'
import Donate from '@/static/Donate'
import PlayRewards from '@/static/PlayRewards'
import Contacts from '@/static/Contacts'

import TopPlayers from '@/views/TopPlayers'

import Forum from '@/forum/Forum'
import ForumSection from '@/forum/ForumSection'
import ForumDiscussion from '@/forum/ForumDiscussion'
import CreateDiscussion from '@/forum/CreateDiscussion'

import Profile from '@/profile/Profile'
import ProfileTokens from '@/profile/ProfileTokens.vue'
import ProfileStatistic from '@/profile/ProfileStatistic.vue'
import ProfileMain from '@/profile/ProfileMain.vue'
import ProfileHistory from '@/profile/ProfileHistory.vue'

import Bans from '@/views/Bans'

import Team from '@/team/Team'
import TeamEntry from '@/team/TeamEntry'
import TeamUser from '@/team/TeamUser'

import Rules from '@/views/Rules'
import PublicOffer from '@/views/PublicOffer'
import Privacy from '@/views/Privacy'

import Source from '@/views/Source'

import Settings from '@/settings/Settings'
import SettingsMain from '@/settings/SettingsMain'
import Settings2FA from '@/settings/Settings2FA'

import Mods from '@/mods/Mods'
import ModPage from '@/mods/ModPage'

import ArtsLoad from '@/arts/ArtsLoad'

import Kits from '@/views/Kits'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', component: News, meta: {title: 'Лучшие сервера с модами'}},
        {path: '/post/:id', component: NewsFull, meta: {title: 'Полная новость'}},

        {path: '/arts/load', component: ArtsLoad, meta: {title: 'Загрузка арта'}},

        {path: '/mods', component: Mods, meta: {title: 'Список модификаций'}},
        {path: '/mods/:mod', component: ModPage, meta: {title: 'Описание модификации'}},

        {path: '/kits/:group', component: Kits, meta: {title: 'Киты'}},

        {path: '/top', component: TopPlayers, meta: {title: 'Топ игроков'}},

        {path: '/online', component: Statistics, meta: {title: 'Статистика онлайна'}},
        {path: '/online/:server/:id', component: StatisticsServer, meta: {title: 'Статистика онлайна'}},
        {path: '/server/:server', component: ServerInstance, meta: {title: 'Описание сервера'}},

        {path: '/register', component: Register, meta: {title: 'Регистрация'}},
        {path: '/reset', component: Reset, meta: {title: 'Восстановление пароля'}},
        {path: '/restore/:login/:code', component: Restore, meta: {title: 'Восстановление пароля'}},
        {path: '/source/:source', component: Source, meta: {title: 'Переход'}},

        {path: '/cabinet/', component: Cabinet, meta: {title: 'Личный кабинет'},
            children: [
                {
                    path: '',
                    component: CabinetMain,
                    meta: {title: 'Личный кабинет'}
                },
                {
                    path: 'group',
                    component: CabinetGroups,
                    meta: {title: 'Привилегии - Личный кабинет'}
                },
                {
                    path: 'pay',
                    component: CabinetPay,
                    meta: {title: 'Пополнение баланса'}
                },
                {
                    path: 'usage',
                    component: CabinetUsage,
                    meta: {title: 'Возможности - Личный кабинет'}
                },
                {
                    path: 'history',
                    component: ProfileHistory,
                    meta: {title: 'История - Личный кабинет'}
                }
            ]
        },

        {path: '/shops', component: Shops, meta: {title: 'Магазины'}},
        {path: '/shop', component: Shop, meta: {title: 'Магазин блоков'}},
        {path: '/shop/:server', component: ShopServer, meta: {title: 'Магазин блоков'},
            children: [
                {
                    path: '',
                    component: ShopServerMain,
                    meta: {title: 'Каталог предметов - Магазин'}
                },
                {
                    path: 'cart',
                    component: ShopServerCart,
                    meta: {title: 'Корзина - Магазин блоков'}
                },
                {
                    path: 'storage',
                    component: ShopServerStorage,
                    meta: {title: 'Склад - Магазин блоков'}
                },
                {
                    path: 'history',
                    component: ShopServerHistory,
                    meta: {title: 'История - Магазин блоков'}
                }
            ]
        },

        {path: '/start', component: StartGame, meta: {title: 'Начать играть'}},
        {path: '/launcher', component: Launcher, meta: {title: 'Скачать лаунчер'}},
        {path: '/servers', component: Servers, meta: {title: 'Лучшие сервера'}},
        {path: '/bonus', component: Bonus, meta: {title: 'Бонусы'}},
        {path: '/votes', component: Votes, meta: {title: 'Голосовать за проект'}},
        {path: '/transfer', component: Transfer, meta: {title: 'Перевести монеты на сервер'}},
        {path: '/donate', component: Donate, meta: {title: 'Платные услуги'}},
        {path: '/about', component: About, meta: {title: 'О проекте'}},
        {path: '/play_reward', component: PlayRewards, meta: {title: 'Награды в игре'}},
        {path: '/contacts', component: Contacts, meta: {title: 'Контакты'}},

        {path: '/forum', component: Forum, meta: {title: 'Форум'}},
        {path: '/forum/section/:id', component: ForumSection, meta: {title: 'Форум'}},
        {path: '/forum/topic/:id', component: ForumDiscussion, meta: {title: 'Обсуждение'}},
        {path: '/forum/start_discussion/:id', component: CreateDiscussion, meta: {title: 'Создать обсуждение'}},

        {path: '/team', component: Team, meta: {title: 'Команда проекта'}},
        {path: '/team/entry', component: TeamEntry, meta: {title: 'Набор хелперов в команду проекта'}},
        {path: '/team/:server/:id/:user', component: TeamUser, meta: {title: 'Информация - Команда проекта'}},

        {path: '/bans', component: Bans, meta: {title: 'Банлист'}},
        {path: '/rules', component: Rules, meta: {title: 'Правила проекта'}},
        {path: '/privacy', component: Privacy, meta: {title: 'Политика конфиденциальности'}},
        {path: '/public_offer', component: PublicOffer, meta: {title: 'Публичная оферта'}},

        {path: '/user/:login', component: Profile, meta: {title: 'Профиль пользователя'},
            children: [
                {
                    path: '',
                    component: ProfileMain,
                    meta: {title: 'Профиль пользователя'}
                },
                {
                    path: 'statistics',
                    component: ProfileStatistic,
                    meta: {title: 'Статистика онлайна - Профиль пользователя'}
                },
                {
                    path: 'tokens',
                    component: ProfileTokens,
                    meta: {title: 'Активность - Профиль пользователя'}
                },
                {
                    path: 'history',
                    component: ProfileHistory,
                    meta: {title: 'История - Профиль пользователя'}
                }
            ]
        },

        {path: '/settings/', component: Settings, meta: {title: 'Настройки'},
            children: [
                {
                    path: '',
                    component: SettingsMain,
                    meta: {title: 'Настройки'}
                },
                {
                    path: 'auth2factor',
                    component: Settings2FA,
                    meta: {title: 'Двухфакторная авторизация'}
                }
            ]
        },

        {path: '*', component: ErrorNotFount, meta: {title: 'Страница не найдена'}},
    ]
});