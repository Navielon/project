<template>
<div>
	<div class="store_page_wrapper">
        <div class="section_content">
		   <div id="item_ajax_list">				
				<table class="item_table hovered" style="border-collapse: collapse;">
					<thead>
						<tr class="unselectable">
							<th style="width: 40px;"></th>
							<th>Название</th>
							<th style="text-align: center; width: 80px;">Кол-во</th>
							<th style="width: 80px;">Сумма</th>
							<th style="width: 30px; text-align: center;"><i class="fa fa-bars fa-standart-size"></i></th>
						</tr>
					</thead>
					<tbody style="background-color: #faebd7c7;">
						<tr>
							<td class="unselectable">
								<img class="item_image" src="//static.red-server.ru/uploads/items/4c8f1a0f884886b6ffcfd4191e62b75e5bc511c5bc88e287c01f40c400d0d957.png" alt="" />
							</td>
							<td>
								<span class="item_name">
									Камень
								</span>
							</td>
							<td class="item_number unselectable">
								<span class="item_number">64</span>
							</td>
							<td class="item_price unselectable">
								<span class="price_value">4 <span class="price_cur">руб.</span></span>
							</td>
							<td class="unselectable">
								<div class="tooltip">
									<span class="entry_control danger tip">
										<i class="fa fa-trash-o"></i>
									</span>
									<span class="tooltiptext noselect" style="width: 100px;margin-left: -51px;">Убрать</span>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<form method="post" action="">
					<div class="cart_statusbar unselectable clearfix">
						<div class="right">
							К оплате: <div class="cart_sum"><span class="value">4</span> <span class="cur">руб.</span></div>
							<button type="submit" class="button green">Оплатить</button>
						</div>
						В Вашей корзине 1 предмет
					</div>
					<input type="hidden" name="submit" value="1" />
					<input type="hidden" name="csrf" value="f4e693d2691ad7dcc57b619f67a502b96e07efff" />
					<input type="hidden" name="my_sum" value="4" />
				</form>
			</div>
		</div>
	</div>
</div>
</template>

<script>
    export default { 
        name: 'ShopServerCart',
    }
</script>

<style scoped>
    .clearfix:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}
	.right {
		float: right;
	}
	.button {
		display: inline-block;
		color: #fff;
		background: #38A0CA;
		height: 30px;
		line-height: 30px;
		text-align: center;
		min-width: 50px;
		cursor: pointer;
		transition: all 0.5s ease;
		transition-property: box-shadow, background-color;
		border-radius: 2px;
		text-shadow: none;
		white-space: nowrap;
		font-size: 13px;
		font-weight: 400;
		user-select: none;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		box-sizing: border-box
	}

	a.button,
	button.button {
		padding: 0 12px;
		text-decoration: none
	}

	body.webkit button.button {
		padding: 0 11px
	}

	.button>.fa {
		font-size: 12px
	}

	.button:hover,
	.button:hover {
		background-color: #5EB2D4;
		color: #FFF;
		box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.15) inset
	}

	.button:active,
	.button.active,
	.button.active {
		transition: none;
		color: #FFF;
		background-color: #3693B9;
		box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15) inset
	}

	button.button,
	input.button {
		margin: 0;
		display: inline-block !important;
		border: none;
		padding-left: 10px;
		padding-right: 10px
	}

	.button.green {
		background-color: #6CB200
	}

	.button.green:hover {
		background-color: #8BC236
	}

	.button.green:active,
	.button.green.active {
		background-color: #6CB200
	}

	.button:disabled,
	.button.disabled {
		cursor: default !important;
		opacity: 0.5;
		box-shadow: none !important
	}

	button.button {
		min-width: 80px
	}

    .store_page_wrapper .section_navigation {
		width: 170px;
		float: left;
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

	/* Информация о текущем разделе слева */
	.store_page_wrapper .section_info_box {
		margin-top: 10px;
		padding: 8px;
		border: 1px solid #ECF0F1;
		border-radius: 3px;
		text-shadow: none;
		margin-bottom: 12px;
		text-align: left;
		font-size: 12.5px;
	}

	/* Таблица со списком предметов */
	.store_page_wrapper .item_table { width: 100%; }
	.store_page_wrapper .item_table > thead > tr > th {
		text-align: left;
		vertical-align: middle;
		border-bottom: 3px solid #6DB201;
		padding: 2px;
		text-transform: uppercase;
		font-weight: 400;
		text-shadow: none;
		font-size: 13px;
	}
	.store_page_wrapper .item_table > thead.hide > tr > th { padding: 0; border-bottom: 1px solid #F0F0F0; }
	.store_page_wrapper .item_table > tbody > tr > td {
		border-bottom: 1px solid #F0F0F0;
		vertical-align: middle;
		padding: 6px 3px;
	}
	.store_page_wrapper .item_table.hovered > tbody > tr > td { transition: background-color 0.1s linear; }
	.store_page_wrapper .item_table.hovered > tbody > tr:hover > td {
		background-color: #F5F7F7;
	}

	.store_page_wrapper .item_table .item_image,
	.store_item_image {
		display: block;
		width: 32px;
		height: 32px;
		margin-left: 2px;
    	margin-top: 3px;
	}

	.store_page_wrapper .item_table .item_name {
		font-weight: 400;
		text-shadow: none;
		font-size: 14px;
	}

	.store_page_wrapper .item_table .item_price {
		color: #7F8C8D;
		line-height: 14px;
	}
	.store_page_wrapper .item_table .item_price > .price_value {
		color: #444444;
		font-weight: 600;
		text-shadow: none;
		font-size: 14px;
	}
	.store_page_wrapper .item_table .item_price > .price_value > .price_cur {
		color: #7F8C8D;
		font-weight: 400;
		font-size: 12.5px;
	}

	.store_page_wrapper .item_table .item_categories {
		font-size: 12.5px;
		color: #7F8C8D;
	}
	.store_page_wrapper .item_table .item_categories > a { color: inherit; }

	.store_page_wrapper .item_table .item_date {
		font-weight: 400;
		text-shadow: none;
		text-align: center;
		color: #7F8C8D;
	}
	.store_page_wrapper .item_table .item_number {
		font-weight: 400;
		text-shadow: none;
		text-align: center;
		font-size: 16px;
	}
	.store_page_wrapper .item_table .item_error { color: #E67E22; font-weight: 400; text-shadow: none; }
	.store_page_wrapper .item_table .item_error > i.fa { font-size: 15px; }

	.store_page_wrapper .discount_badge {
		display: inline-block;
		background: #6CB200;
		font-size: 11px;
		font-weight: 400;
		text-shadow: none;
		color: #FFFFFF;
		height: 17px;
		line-height: 17px;
		padding: 0 4px;
		border-radius: 4px;
		vertical-align: 1px;
	}
	.store_page_wrapper .item_table .discount_badge { margin-top: 3px; }


	/* Кнопки управления в списках */
	.store_page_wrapper .entry_control {
		display: inline-block;
		cursor: pointer;
		font-size: 14px;
		width: 28px;
		height: 28px;
		text-align: center;
		line-height: 28px;
		color: #95A5A6;
		position: relative;
		z-index: 5;
		border-radius: 50%;
	}
	.store_page_wrapper .entry_control:hover, 
	.store_page_wrapper .entry_control:active {
		background-color: #38A0CA;
		color: #FFFFFF;
	}
	.store_page_wrapper .entry_control.danger:hover { background-color: #C0392B; }
	.store_page_wrapper .entry_control:active {
		background-color: #6FB406 !important;
	}
	.store_page_wrapper .entry_control.disabled {
		cursor: not-allowed;
		opacity: 0.3;
		background: none;
		color: #BDC3C7;
	}

	/* Корзина */
	.store_page_wrapper .cart_statusbar {
		padding-top: 10px;
		font-weight: 400;
		text-shadow: none;
		height: 30px;
		line-height: 30px;
		font-size: 15px;
	}
	.store_page_wrapper .cart_sum {
		background: #ECF0F1;
		border-radius: 2px;
		display: inline-block;
		box-sizing: border-box;
		height: 30px;
		line-height: 30px;
		color: #444;
		padding: 0 10px;
		font-weight: 400;
		text-shadow: none;
	}
	.store_page_wrapper .cart_sum > .value { font-size: 16px; }
	.store_page_wrapper .cart_sum > .cur { color: #848E8D; font-size: 12.5px; }

	.store_page_wrapper .item_number_editable {
		display: block;
		text-align: center;
		cursor: text;
		padding: 3px 0;
		border-radius: 3px;
		max-width: 70px;
		margin: 0 auto;
	}
	.store_page_wrapper .item_number_editable:hover { background-color: rgba(52,152,219,0.1); }
</style>

