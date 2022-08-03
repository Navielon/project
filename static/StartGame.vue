<template>
<div>
    <center>
        <div class="teammates_title">
            <span class="team_header_big">Как начать игру на LoliLand?</span>
        </div>

        <div class="start-big_text">
			<span class="start-middle_cube"></span>
			1. Зарегистрируйтесь
		</div>
		<div class="start-small_text">Создайте аккаунт, чтобы начать приключение</div>
        <router-link to="/register" class="balance_btn btn_sign_in middle_sign_in_btn justify_left_btn" style="width: 233px;">
            <span class="balance_btn_light"><b>Регистрация</b></span>
        </router-link>

		<div class="start-big_text">
			<span class="start-middle_cube"></span>
			2. Скачайте лаунчер
		</div>
		<div class="start-small_text">Загрузите клиент для своей операционной системы</div>

		<div data-aos="flip-up" data-aos-duration="400">
			<div class="referral_second_wrapper">
				<div class="referral_second_wrapper_item">
					<div class="download_mini_header">Windows</div>
					<a href="https://static.loliland.ru/LoliLand.exe" target="_blank" class="balance_btn btn_sign_in middle_sign_in_btn justify_left_btn" @click="download()">
						<font-awesome-icon class="download_icon" :icon="['fab', 'windows']"/>
						<span class="balance_btn_light">Скачать для <b>Windows</b></span>
					</a>
					<div class="how_to_get_kits_left download_image1"></div>
				</div>
			</div>
		</div>
		<div data-aos="fade-up" data-aos-duration="400" data-aos-offset="50">
			<div key="rules_bottom" class="rules_bottom">
				<span class="start-rigester_line"></span>
				<div class="smth_went_wrong_txt"><b>Не запускается лаунчер? <br/> Что-то пошло не так?</b></div>
				<div class="ask_tech_div">
					<a href="https://vk.com/im?media=&sel=-180476635" target="_blank" class="ask_tech_btm"><b>Тех. поддержка</b></a>
				</div>
			</div>
		</div>
        <br/> 
        <img src="/assets/img/pages/start/anime.png" class="noselect girl" draggable="false"/>
    </center>
    
</div>
</template>

<script>
export default {
    computed: {
        source() {
            return this.$store.state.source;
        }
    },
    methods: {
        top() {
            window.scrollTo(0, 0);
        },
        download() {
            this.$root.$emit('send_websocket', `{"packet":"source.launcher","data":{"url": "${this.source}"}}`);
        }
    }
}
</script>

<style scoped>
    .balance_btn {
    position: relative;
    z-index: 2;
    margin-top: -18px;
    width: 313px;
    height: 42px;
    font-size: 19px;
    font-weight: 400;
    padding-top: 0;
    align-items: center;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    border-radius: 15px;
    text-decoration: none;
    color: #ffffff;
    background: linear-gradient(0deg,#ff8e1a,#ffae58);
    box-shadow: 0px 0px 12px #fab066;
    transition: all 0.2s ease-out;
}
.balance_btn:hover {
    box-shadow: none;
}
.balance_btn:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: linear-gradient(to top, #a943f0, #bd47f4, #d04bf8, #e34ffc, #f554ff);
    transition: opacity 0.2s ease-out;
    z-index: 2;
    opacity: 0;
}
.balance_btn:hover:after {
    box-shadow: 0px 0px 12px #f78fff;
    opacity: 1;
}
.balance_btn_light {
    z-index: 3;
    filter: drop-shadow(0px 0px 3px #fac06b) drop-shadow(0px 0px 9px #fac06b) drop-shadow(0px 0px 15px #fac06b);
}
.balance_btn:hover .balance_btn_light{
    filter: drop-shadow(0px 0px 3px #f78fff) drop-shadow(0px 0px 6px #f78fff) drop-shadow(0px 0px 8px #f78fff);
}
.orange_text {
    color: #f39950;
    cursor: pointer;
    text-decoration: none;
    cursor: pointer;
}
.orange_text:hover {
    text-decoration: underline;
}
	.download_mini_header {
		font-size: 25px;
		font-weight: bold;
		color: #5b5b5b;
		text-align: left;
	}

	.min_games_stats {
		padding-top: 0;
	}

	.buy_prev_btn_wrapper {
		width: auto;
		background: transparent;
	}

	.full_server_start_game_inside {
		padding: 14px 35px;
		margin: 0 auto;
	}

	.reg_stats {
		width: max-content;
		margin-top: 30px;
		padding-top: 20px;
		padding-bottom: 18px;
		border-top: 2px solid rgba(253, 251, 250, 0.2);
		border-bottom: 2px solid rgba(253, 251, 250, 0.2);
	}

	.about_project_header__main {
		font-weight: 500;
		font-size: 30px;
		filter: drop-shadow(0px 0px 6px #e28bff) drop-shadow(0px 0px 12px #e28bff) drop-shadow(0px 0px 18px #e28bff);
	}

	.about_project_header__subt {
		font-size: 14px;
		filter: drop-shadow(0px 0px 6px #e28bff) drop-shadow(0px 0px 12px #e28bff);
	}

	@keyframes blinking_btn {
		50% {
			filter: drop-shadow(0px 0px 3px #f78fff) drop-shadow(0px 0px 9px #f78fff) drop-shadow(0px 0px 12px #f78fff);
		}
	}

	.blinking_btn {
		transition: all 0.5s ease-out;
	}

	.bottom_stats_light {
		color: #ffffff;
	}

	.blinking_btn:hover .bottom_stats_light {
		animation-play-state: paused;
	}

	.blinking_btn:hover {
		filter: drop-shadow(0px 0px 3px #f78fff) drop-shadow(0px 0px 9px #f78fff);
	}

	.bottom_stats_light {
		animation: blinking_btn 1.5s linear infinite;
	}

	.referral_second_wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 12px;
            margin-left: 140px;
	}

	.referral_second_wrapper_item {
		position: relative;
		z-index: 0;
		padding-top: 40px;
		padding-bottom: 36px;
		padding-left: 30px;
		padding-right: 50px;
		border-radius: 15px;
		margin-bottom: 12px;
		background-color: #ffffff94;
	}

	.download_icon {
		z-index: 100;
		font-size: 25px;
		margin-right: 15px;
	}

	.download_icon_java {
		font-size: 32px;
	}

	.rules_bottom {
		margin-top: 40px;
	}

	.user_agree_wrapper {
		margin: 0 auto;
		margin-bottom: 20px;
		width: 290px;
		height: 56px;
		border-top: 2px solid rgba(137, 137, 137, 0.15);
		border-bottom: 2px solid rgba(137, 137, 137, 0.15);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.teammates_title {
		position: relative;
		margin-top: 64px;
		font-weight: bold;
		font-size: 30px;
		color: #5b5b5b;
	}

	.teammate_title_cubes:before {
		z-index: 10;
		position: absolute;
		content: '';
		width: 6px;
		height: 6px;
		top: -38px;
		left: calc(50% - 6px);
		background: #efefef;
		border: 3px solid #f39950;
		transform: rotate(45deg);
	}

	.teammate_title_cubes:after {
		z-index: 10;
		position: absolute;
		content: '';
		width: 6px;
		height: 6px;
		bottom: -38px;
		left: calc(50% - 6px);
		background: #efefef;
		border: 3px solid #f39950;
		transform: rotate(45deg);
	}

	.teammate_title_dec_top:before {
		z-index: -2;
		position: absolute;
		content: '';
		top: -24px;
		left: 50%;
		transform: translateX(-50%);
		width: 208px;
		height: 2px;
		background-color: #f39950;
	}

	.teammate_title_dec_top:after {
		z-index: -2;
		position: absolute;
		content: '';
		top: -25px;
		left: 50%;
		width: 12px;
		height: 12px;
		transform: translate(-50%, -50%) rotate(45deg);
		background-color: #efefef;
	}

	.teammate_title_dec_bottom:before {
		z-index: -2;
		position: absolute;
		content: '';
		bottom: -24px;
		left: 50%;
		transform: translateX(-50%);
		width: 208px;
		height: 2px;
		background-color: #f39950;
	}

	.teammate_title_dec_bottom:after {
		z-index: -2;
		position: absolute;
		content: '';
		bottom: -25px;
		left: 50%;
		width: 12px;
		height: 12px;
		transform: translate(-50%, 50%) rotate(45deg);
		background-color: #efefef;
	}

	.btn_dwn_launcher-dark {
		position: relative;
		box-shadow: none;
		background: #fafafa;
		background: linear-gradient(to top, #101010, #1b1b1b);
		background-repeat: no-repeat;
		background-position: center;
	}

	.btn_dwn_launcher:before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		height: 0%;
		width: 0%;
	}

	.btn_dwn_launcher-dark:after {
		background: linear-gradient(to top, #101010, #1b1b1b);
		background-repeat: no-repeat;
		background-position: center;
	}

	.balance_btn_light {
		font-weight: 400;
		font-size: 19px;
		transition: filter 0.25s ease-out;
	}

	.btn_dwn_launcher-dark .balance_btn_light {
		filter: drop-shadow(0px 0px 4px #ff802a) drop-shadow(0px 0px 7px #ff802a) drop-shadow(0px 0px 12px #ff802a);
	}

	.btn_dwn_launcher-dark:hover .balance_btn_light {
		filter: drop-shadow(0px 0px 4px #e28bff) drop-shadow(0px 0px 7px #e28bff) drop-shadow(0px 0px 12px #f78fff);
	}

	.btn_dwn_launcher-dark:hover .blured_btn-dark {
		background: linear-gradient(to top, #f94aff, #a201c4, #7300c4);
	}

	.middle_sign_in_btn {
		height: 54px;
		padding: 0px 25px;
		margin-top: 18px;
		margin-left: 0;
		align-self: flex-start;
	}

	.left_right_btn {
		margin-top: 0;
	}

	.mod_servers_slider {
		margin-top: 30px;
		margin-bottom: 85px;
		position: relative;
	}

	.mod_servers_slider_header {
		margin-bottom: 8px;
		font-weight: bold;
		font-size: 23px;
		color: #5b5b5b;
	}

	.referral_second_wrapper {
		margin-top: 52px;
	}

	.start-rigester_line {
		position: absolute;
		bottom: -50px;
		left: 50%;
		transform: translateX(-50%);
		width: 360px;
		height: 2px;
		background: rgba(137, 137, 137, 0.15);
	}

	.how_to_get_kits_left {
		position: absolute;
		z-index: -2;
		right: 10px;
		bottom: 0px;
		justify-self: flex-end;
		height: 232px;
		width: 391px;
	}

	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% {
			transform: translateY(0) rotate(45deg);
		}
		40% {
			transform: translateY(-16px) rotate(45deg);
		}
		60% {
			transform: translateY(-8px) rotate(45deg);
		}
	}

	.start-big_text {
		position: relative;
		margin-top: 98px;
		font-size: 25px;
		color: #5b5b5b;
		font-weight: bold;
	}

	.start-middle_cube {
		position: absolute;
		top: -40px;
		left: calc(50% - 12px);
		width: 24px;
		height: 24px;
		border: 5px solid #f0974f;
		transform: rotate(45deg);
		animation: bounce 2s infinite;
	}

	.start-big_text:before {
		position: absolute;
		content: '';
		top: -53px;
		left: calc(50% - 28px);
		width: 10px;
		height: 10px;
		border-left: 5px solid #f0974f;
		border-right: 1px solid #f0974f;
		border-top: 5px solid #f0974f;
		border-bottom: 1px solid #f0974f;
		transform: rotate(45deg);
		animation: bounce 2s infinite;
	}

	.start-big_text:after {
		position: absolute;
		content: '';
		top: -53px;
		left: calc(50% + 12px);
		width: 10px;
		height: 10px;
		border-left: 5px solid #f0974f;
		border-right: 1px solid #f0974f;
		border-top: 5px solid #f0974f;
		border-bottom: 1px solid #f0974f;
		transform: rotate(45deg);
		animation: bounce 2s infinite;
	}

	.start-small_text {
		font-size: 18px;
		color: #5b5b5b;
		font-weight: 400;
	}

	.rules_bottom {
		position: relative;
		margin-top: 62px;
	}

	.rules_bottom > .start-rigester_line {
		bottom: unset;
		top: -30px;
	}

	.download_image1 {
		background: url('/assets/img/launcher/download_mini1.png');
		background-repeat: no-repeat;
	}

	.blured_btn-dark {
		position: absolute;
		left: -3%;
		z-index: -1;
		width: 106%;
		top: 15%;
		height: 70%;
		border-radius: 5px;
		background: linear-gradient(to top, #ff3600, #ff8e09);
		filter: blur(8px);
		opacity: .6;
		transition: opacity 0.25s ease-out;
	}

	.blured_btn-dark:after {
		position: absolute;
		content: '';
		left: 0%;
		width: 100%;
		top: 0%;
		height: 70%;
		z-index: -2;
		border-radius: 5px;
		filter: blur(8px);
		background: linear-gradient(to top, #a943f0, #bd47f4, #d04bf8, #e34ffc, #f554ff);
		transition: all 0.25s ease-out;
		opacity: 0;
	}

	.btn_dwn_launcher-dark:hover .blured_btn-dark:after, .btn_dwn_launcher-dark:hover .overflowed_blured-dark:after {
		opacity: 1;
	}

	.overflowed_blured-dark {
		position: absolute;
		top: 0;
		left: -4px;
		border-radius: 15px;
		z-index: -1;
		background: linear-gradient(0deg,#ff8e1a,#ffae58);
		width: calc(100% + 8px);
		height: 100%;
		box-shadow: none;
		transition: opacity 0.25s ease-out;
	}

	.overflowed_blured-dark:after {
		position: absolute;
		content: '';
		left: 0%;
		top: 0%;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		background: linear-gradient(to top, #a943f0, #bd47f4, #d04bf8, #e34ffc, #f554ff);
		transition: opacity 0.25s ease-out;
		opacity: 0;
	}

	.start-register_btn {
		z-index: unset;
		position: relative;
		margin: 0 auto;
		margin-top: 40px;
		padding: 0 32px;
		height: 60px;
	}

	.start-register_btn_effects1:before {
		z-index: -100;
		position: absolute;
		content: '';
		top: 50%;
		left: -12px;
		width: 14px;
		height: 14px;
		border: 5px solid #f0974f;
		transform: translateY(-50%) rotate(45deg);
	}

	.start-register_btn_effects1:after {
		z-index: -100;
		position: absolute;
		content: '';
		top: 50%;
		left: 0px;
		width: 14px;
		height: 14px;
		border: 5px solid #f0974f;
		transform: translateY(-50%) rotate(45deg);
	}

	.start-register_btn_effects2:before {
		z-index: -100;
		position: absolute;
		content: '';
		top: 50%;
		right: 0px;
		width: 14px;
		height: 14px;
		border: 5px solid #f0974f;
		transform: translateY(-50%) rotate(45deg);
	}

	.start-register_btn_effects2:after {
		z-index: -100;
		position: absolute;
		content: '';
		top: 50%;
		right: -12px;
		width: 14px;
		height: 14px;
		border: 5px solid #f0974f;
		transform: translateY(-50%) rotate(45deg);
	}

	.start-register_btn .balance_btn_light {
		font-weight: bold;
		font-size: 24px;
	}
</style>


<style scoped>
    .girl {
        margin-top: 21px;
    }
    .register {
        position: absolute;
        width: 261px;
        height: 71px;
        background: url('/assets/img/pages/start/register.png') no-repeat;
        cursor: pointer;
        transition: 0.3s;
    }
    .register:hover {
        background: url('/assets/img/pages/start/register_hover.png') no-repeat;
        transition: 0.3s;
    }
    .launcher {
        position: absolute;
        margin-top: -187px;
        margin-left: 240px;
        width: 191px;
        height: 71px;
        background: url('/assets/img/pages/start/launcher.png') no-repeat;
        cursor: pointer;
        transition: 0.3s;
    }
    .launcher:hover {
        background: url('/assets/img/pages/start/launcher_hover.png') no-repeat;
        transition: 0.3s;
    }
</style>
