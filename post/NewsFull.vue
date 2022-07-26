<template>
<div>
    <div v-if="post != null" style="font-family: 'Ubuntu'">
        <div class="poster_wrapper"> 
            <img v-bind:src="API + 'post/image/' + post.id" width="709px" v-bind:alt="post.title">
        </div>
        
        <div v-html="post.fullText" class="post_content"></div> 

        <!--div class="post_content">


<div>
	<h1>Обновление LoliChaosMagic</h1>
	
	<p>Дорогие игроки!</p>
	<p>Наш аддон <em>LoliChaosMagic </em>был обновлен и наполнен новым контентом. Добавлены новые ритуалы, классы, горны и реликвия!</p>
	<p>С помощью новых предметов мы постарались развить PvP- и PvE-составляющую наших магических серверов.</p>
	<cite>Аддон LoliChaosMagic установлен на серверах<br>Magic RPG и ARS Magic RPG</cite>
	<h2>Ритуалы<span class="article_anchor_button" id="ritualy"></span></h2>
	<h3>Ритуал снятия чар (потребляет 30к Силы Алтаря)</h3>
	<p>Снимает со всех предметов в радиусе 5-ти блоков зачарования и спавнит зачарованные книги с теми же зачарованиями.</p>
	<center><img src="https://static.loliland.ru/posts/lolichaosmagic/z1.jpg" width="550px"></center>
	
	<h3>Ритуал усиления чар (потребляет 70к Силы Алтаря)<span class="article_anchor_button" id="ritual-usilenia-char-potreblyaet-70k-sily-altarya"></span></h3>
	<p>Все предметы в радиусе 5-ти блоков будут усилены. К уровню каждого зачарования прибавится единица. Если уровень 10-тый и выше —усиления не произойдет.</p>
	<center><img src="https://static.loliland.ru/posts/lolichaosmagic/z2.jpg" width="550px"></center>
	<h3>Ритуал убийства по области (потребляет 70к Силы Алтаря)</h3>
	<p>Все существа в радиусе 10-ти блоков будут убиты.</p>
	<center><img src="https://static.loliland.ru/posts/lolichaosmagic/z3.jpg" width="550px"></center>
	<h3>Ритуал получения ДНК (потребляет 70к Силы Алтаря)</h3>
	<p>Вы получите ДНК всех игроков в радиусе 15-ти блоков.</p>
	<center><img src="https://static.loliland.ru/posts/lolichaosmagic/z4.jpg" width="550px"></center>
	<h3>Ритуал обнуления (потребляет 75к Силы Алтаря)<span class="article_anchor_button" id="ritual-obnulenia-potreblyaet-75k-sily-altarya"></span></h3>
	<p>По ДНК может «обнулять» игроков: превращать их обратно в людей, если они в форме волка, обнулять уровень опыта, ХП (почти до 0), обнулять баффы и многое другое.</p>
	<center><img src="https://static.loliland.ru/posts/lolichaosmagic/z5.jpg" width="550px"></center>
	<h3>Ритуал удачи (Потребляет 2к Силы Алтаря)<span class="article_anchor_button" id="ritual-udachi-potreblyaet-2k-sily-altarya"></span></h3>
	<p>После активации игроку случайно выпадает один из ритуалов <em>Witchery</em>. Какой именно выпал — сообщается в чат. 
    Так как в <em>Witchery</em> много ритуалов, требующих соблюдения определенных условий, при их несоблюдении предмет для активации ритуала удачи будет возвращен. </p>
	<center><img src="https://static.loliland.ru/posts/lolichaosmagic/z6.jpg" width="550px"></center>
	<h3>Ритуал демонизации (Потребляет 80к Силы Алтаря)<span class="article_anchor_button" id="ritual-demonizatsii-potreblyaet-80k-sily-altarya"></span></h3>
	<p>После активации все демоны (мобы) в радиусе 12 блоков будут уничтожены. 
    После того как умрут 150 демонов или больше, ритуал будет остановлен, а игроку присвоен первый уровень демона.</p>
	<center><img src="https://static.loliland.ru/posts/lolichaosmagic/z7.jpg" width="550px"></center>
	<h3>Ритуал экзорцизма (потребляет 30к Силы Алтаря)<span class="article_anchor_button" id="ritual-ekzortsizma-potreblyaet-30k-sily-altarya"></span></h3>
	<p>Убирает у активирующего уровень демонизации.</p>
	<center><img src="https://static.loliland.ru/posts/lolichaosmagic/z8.jpg" width="550px"></center>
	<h3>Ритуал восполнения крови (потребляет 1к Силы Алтаря)<span class="article_anchor_button" id="ritual-vospolnenia-krovi-potreblyaet-1k-sily-altarya"></span></h3>
	<p>Восполняет кровь всем вампирам, которые стоят в радиусе 10 блоков.</p>
	<center><img src="https://static.loliland.ru/posts/lolichaosmagic/z9.jpg" width="550px"></center>
	<h3>Ритуал очистки крови (потребляет 100к Силы Алтаря)<span class="article_anchor_button" id="ritual-ochistki-krovi-potreblyaet-100k-sily-altarya"></span></h3>
	<p>Для ритуала необходимо быть вампиром 10-го уровня. После ритуала вы потеряете этот уровень и получите 1-ый уровень чистокровного вампира.</p>
	<center><img src="https://static.loliland.ru/posts/lolichaosmagic/z10.jpg" width="550px"></center>
	<h2>Классы<span class="article_anchor_button" id="klassy"></span></h2>
	<h3>Демон<span class="article_anchor_button" id="demon"></span></h3>
	<p>Превращение в демона возможно только через ритуал демонизации. Игрок, ставший демоном, автоматически теряет уровень вампиризма и ликантропии.</p>
	<blockquote><strong>Важный момент</strong>: Гибридов демонов с вампирами/оборотнями быть не может, произойдет автоматическое обнуление.</blockquote>
	<h3>Физические характеристики класса:<span class="article_anchor_button" id="fizicheskie-kharakteristiki-klassa"></span></h3>
	<p><strong>Сильные стороны данного класса:</strong></p>
	<p>Множитель урона равен уровню класса, деленному на 2.</p>
	<p>Повышенная регенерация здоровья.</p>
	<p>Нет урона от падения.</p>
	<p>Полная защита от огня/лавы <strong>(от 2-го уровня класса)</strong>.</p>
	<p>При ударе поджигает цель на 60 секунд <strong>(от 3-го уровня класса)</strong>.</p>
	<p>Наносит удары огненным типом урона <strong>(от 3-го уровня класса)</strong>.</p>
	<p>Может быстрее наносить удары, а также полностью игнорировать временную неуязвимость от <em>Божественного амулета</em> и <em>Кольца семи солнц</em> из <em>Forgotten Relics</em> <strong>(от 8-го уровня класса)</strong>.</p>
	<p><strong>Слабые стороны данного класса:</strong></p>
	<p>Отключена возможность взаимодействовать с вампирическими куклами в силу баланса.</p>
	<p><strong>Повышение уровня:</strong></p>
	<p>Для перехода на <strong>2 уровень</strong> нужно убить 5000 существ.</p>
	<p>Для перехода на <strong>3 уровень</strong> нужно нанести более 20000000 урона.</p>
	<p>Для перехода на <strong>4 уровень</strong> нужно убить 200 големов.</p>
	<p>Для перехода на <strong>5 уровень</strong> нужно надеть сет смерти.</p>
	<p>Для перехода на <strong>6 уровень</strong> нужно провести ритуал адской инфузии.</p>
	<p>Для перехода на <strong>7 уровень</strong> нужно иметь в инвентаре <em>куклу защиты от смерти</em>.</p>
	<p>Для перехода на <strong>8 уровень</strong> нужно поспать на высоте выше 100 блоков.</p>
	<p>Для перехода на <strong>9 уровень</strong> нужно иметь более 750 ХП.</p>
	<p>Для перехода на <strong>10 уровень </strong>нужно умереть от магии.</p>
	<h3>Король демонов<span class="article_anchor_button" id="korol-demonov"></span></h3>
	<p>Коронация проходит в ночное время, для неё нужно иметь 10-тый уровень класса «Демон» и 350 очков.</p>
	<blockquote><strong>Важный момент</strong>: Коронация проходит не сразу, а через некоторое время. Очки накапливаются пассивно. Если у короля был понижен или убран уровень класса «Демон», его статус автоматически аннулируется. </blockquote>
	<p><strong>Особенности</strong>:</p>
	<p>Если у короля меньше 50% от максимального здоровья, по нему проходит в 3 раза меньше урона.</p>
	<p>По королю проходит в 2 раза меньше магического урона ночью.</p>
	<p>Если у противника есть что-то, что снижает входящий по нему урон до 50 и ниже, вы все равно будете бить в 10 раз сильнее. </p>
	<h3>Чистокровный вампир<span class="article_anchor_button" id="chistokrovny-vampir"></span></h3>
	<p>Этот класс способен стать гибридом со всеми другими классами, в том числе с демоном, не считая обычного вампира. </p>
	<blockquote><strong>Важный момент: </strong>Став чистокровным вампиром, вы теряете уровень обычного, а став обычным — теряете уровень чистокровного. В отличие от обычного вампира, чистокровного нельзя убить огнем. Этот класс сможет убить только ещё одно существо, в чьих жилах течет та же кровь. Больше способов нет. </blockquote>
	<blockquote>У этого класса всего один-единственный уровень, множитель урона в два раза выше чем у демона 10-го уровня. </blockquote>
	<blockquote>Чтобы избежать дисбаланса при гибриде этих двух классов, работать будет только множитель урона демона. Таким образом, чистокровный вампир имеет урон больше, чем гибрид демона и чистокровного вампира 10-го уровня.</blockquote>
	<p><strong>Особенности:</strong></p>
	<p>Чистокровный вампир убивает обычного за один удар.</p>
	<p>У чистокровного вампира бесконечная кровь.</p>
	<p>Чистокровный вампир не получает негативных эффектов от солнца.</p>
	<p>Если у чистокровного в инвентаре находится предмет <em>лунное сердце</em>, тогда на него будут пассивно накладываться эффекты силы, сопротивления, регенерации и огнестойкости 4-го уровня.</p>
	<h2>Предметы<span class="article_anchor_button" id="predmety"></span></h2>
	<h3>Горны призыва<span class="article_anchor_button" id="gorny-prizyva"></span></h3>
	<p>Добавлены горны, способные призвать сразу несколько мобов. </p>
	<p><strong>Горн призыва Хобгоблинов<br></strong>Призывает 2 хобгоблинов.</p>
	<p><strong>Горн призыва Шабашных ведьм<br></strong>Призывает 5 шабашных ведьм.</p>
	<p><strong>Лунное сердце<br></strong>Не даёт вампирам умереть на солнце, гореть или получать негативные эффекты. Чистокровным вампирам даётся преимущество в виде накладывания эффектов силы, сопротивления, регенерации и огнестойкости 4-го уровня.</p>
	<h2>Заключение<span class="article_anchor_button" id="zaklyuchenie"></span></h2>
	<p>Спасибо, что остаетесь с нами! Мы постараемся и дальше разрабатывать новый уникальный контент для наших игроков.</p>
</div>


        </div-->

        <!--div>
<div>
	<h1 style="text-align: center;">Зимний вайп 2022, новые серверы и обновление уникальных модов</h1>
	<p>Дорогие игроки!</p>
	<p>Пришло время очередного вайпа и новых обновлений.</p>
	<p>В прошлом вайпе мы подготовили обновление наших уникальных модов <em>LoliTechnologies</em>, <em>LoliChaosMagic</em> и <em>LoliMagically. </em>В игру пришли множество предметов и механизмов.</p>
	<p>Что же мы подготовили на этот раз?</p>
	<p>В этот раз открыты сразу <strong>2 новых сервера</strong>: необычный техномагический сервер <strong>TechnoWizardry </strong>на версии 1.7.10<strong> </strong>и магический сервер <strong>MysteryMagic </strong>на версии 1.16.5. Также были обновлены наши уникальные моды <em>LoliMagically</em>, <em>LoliTechnologies </em>и <em>LoliChaosMagic</em>, а еще в игру приходит совершенно новый аддон <em>LoliDragonMight</em>, дополняющий мод <em>Draconic Evolution</em>!</p>
	
    
	<h2 style="text-align: center;">Вайп на всех серверах!</h2>
	<p>Совсем скоро завершится вайп на всех серверах. Зовите друзей и вместе играйте на LoliLand! Успейте первыми исследовать новый мир после вайпа.</p>
	<h3>Важные детали<span class="article_anchor_button" id="vazhnye-detali"></span></h3>
	<p><strong>Монеты<br></strong>Монеты, которые были переведены с сайта на сервер, не сохранены.<br>В личном кабинете на сайте монеты сохранены.</p>
	<p><strong>Донат<br></strong>Привилегии не пропали. Время китов сброшено, их можно будет получить снова.</p>
	<p><strong>Предметы из магазина блоков<br></strong>Предметы, купленные за рубли за неделю до вайпа, могут быть возвращены. Напишите в <a href="https://vk.com/im?media=&amp;sel=-180476635">личные сообщения нашей группы ВК</a>.</p>
	<p><strong>Статистика<br></strong>Статистика была полностью сброшена. Сохранена только статистика по игровому времени.</p>
	<p><strong>Муты<br></strong>Все муты, выданные до вайпа, сняты.</p>
	
    
    <br/>
    <h2 style="text-align: center;">Новые серверы<span class="article_anchor_button" id="novye-servery"></span></h2>
	<p>Встречайте новые серверы на нашем уютном проекте!</p>
	
    <h2>TechnoWizardry на версии 1.7.10<span class="article_anchor_button" id="technowizardry-na-versii-1-7-10"></span></h2>
	<p>Свежая и интересная сборка на версии 1.7.10, похожая на <em>TechnoMagic RPG</em>, но построенная вокруг мода <em>Advent of Ascension</em>. 
    Исследуйте моды <em>EnderIO</em>, <em>AoA</em>, и <em>Witchery</em>, чтобы пройти эту необычную техномагическую сборку. До встречи на новом сервере!</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z2.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z3.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z4.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z5.jpg" width="709px" style="margin-left: -17px;">
	<h3>Новые солнечные панели</h3>
	<p>Мы добавили новые <em>хроматические солнечные панели</em> специально для этого сервера. Чтобы скрафтить их, вам предстоит исследовать мод <em>AoA</em>!</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z6.jpg" width="709px" style="margin-left: -17px;">
	
    <h2>MysteryMagic на версии 1.16.5<span class="article_anchor_button" id="mysterymagic-na-versii-1-16-5"></span></h2>
	<p>На проекте появляется магический сервер на версии 1.16.5! Исследуйте моды <em>Eidolon, Werewolves, Astral Sorcery, Botania, Roots, Feywild, ExtraBotany, Vampirizm, BloodMagic, Ice and Fire, Occultism</em> и изучите новый волшебный мир вдоль и поперек. Приключения уже ждут вас!</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z7.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z8.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z9.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z10.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z11.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z12.jpg" width="709px" style="margin-left: -17px;">
	
    
    <br/><br/><br/>
    <h2 style="text-align: center;">Новый аддон LoliDragonMight<span class="article_anchor_button" id="novy-addon-lolidragonmight"></span></h2>
	<p>Мы добавили новые механизмы, броню и даже дракона, которые дополнят мод <em>Draconic Evolution</em>. 
    Вместе они образуют новый уникальный аддон — <strong>LoliDragonMight</strong>!</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z13.jpg" width="709px" style="margin-left: -17px;">
	<h3>Инфинити дракон<span class="article_anchor_button" id="infiniti-drakon"></span></h3>
	<p>В игру пришел дракон, превосходящий по силе <em>дракона Хаоса — Инфинити дракон! </em>Победите его, чтобы получить ценные и редкие ресурсы. Справиться с ним будет отнюдь не просто!</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z14.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z15.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z16.jpg" width="709px" style="margin-left: -17px;">
	<h3>Спавнер, наполненный хаосом<span class="article_anchor_button" id="spavner-napolnenny-khaosom"></span></h3>
	<p>В игре появился новый механизм — <em>спавнер, наполненный хаосом</em>. Он поможет вам автоматизировать сбор лута, опыта и сделает работу с <em>душами </em>мобов более удобной. Пришло время фармить!</p>
	<p class=" article_decoration_last article_decoration_before">Кстати, еще он сведет к минимуму клиентские и серверные лаги.</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z17.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z18.jpg" width="709px" style="margin-left: -17px;">
	<h3>Броня Хаоса<span class="article_anchor_button" id="bronya-khaosa"></span></h3>
	<p>Встречайте новую <em>броню Хаоса</em>! Чтобы скрафтить новый сет, вам потребуется сначала убить <em>Инфинити дракона</em> и скрафтить множество других предметов! Поверьте, оно того стоит.</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z19.jpg" width="709px" style="margin-left: -17px;">
	<h3>Новые предметы<span class="article_anchor_button" id="novye-predmety"></span></h3>
	<p>Представляем новые предметы, которые будут участвовать в крафтах: <em>продвинутое ядро дракона</em>, <em>сердце инфинити дракона</em> и <em>драконий,</em> <em>пропитанный хаосом</em>.</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z20.jpg" width="709px" style="margin-left: -17px;">
	<h3>Пропитанная хаосом дракониевая руда<span class="article_anchor_button" id="propitannaya-khaosom-drakonievaya-ruda"></span></h3>
	<p>Синтезируйте <em>новую пропитанную хаосом дракониевую руду</em>, чтобы скрафтить новые предметы и броню!</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z21.jpg" width="709px" style="margin-left: -17px;">
	<h3>Новые энергетические передатчики и реле<span class="article_anchor_button" id="novye-energeticheskie-peredatchiki-i-rele"></span></h3>
	<p>В игре появились новые <em>энергетические передатчики</em> и <em>реле</em>. Обычные работают с RF-энергией, а новые предназначены для EU-энергии.</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z22.jpg" width="709px" style="margin-left: -17px;">
	
    
    <br/><br/><br/>
    <h2 style="text-align: center;">Обновление LoliMagically<span class="article_anchor_button" id="obnovlenie-lolimagically"></span></h2>
	<p>В нашем уникальном магическом аддоне <em>LoliMagically </em>появилось три новых механизма! Встречайте их на наших серверах с магическими модами.</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z23.jpg" width="709px" style="margin-left: -17px;">
	<h3>Пробужденная алхимическая конструкция<span class="article_anchor_button" id="probuzhdennaya-alkhimicheskaya-konstruktsia"></span></h3>
	<p>Новая <em>пробужденная алхимическая конструкция</em> поможет синтезировать новые предметы с помощью эссенции. Очень полезный механизм, который точно пригодится игрокам!</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z24.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z25.jpg" width="709px" style="margin-left: -17px;">
	<h3>Кровавый генератор<span class="article_anchor_button" id="krovavy-generator"></span></h3>
	<p>Новый механизм, который поможет вам получать кровь с помощью EU-энергии.</p>
	<p class=" article_decoration_last article_decoration_before">Был добавлен только на техномагические серверы. </p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z26.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z27.jpg" width="709px" style="margin-left: -17px;">
	<h3>Продвинутая алхимическая и химическая установка</h3>
	<p>Этот механизм представляет собой улучшенную версию <em>алхимической и химической установки</em>. Он работает быстрее и эффективнее, а еще его можно подключить к МЭ системе и использовать для автокрафта.</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z28.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z29.jpg" width="709px" style="margin-left: -17px;">
	<h3>Новые руны<span class="article_anchor_button" id="novye-runy"></span></h3>
	<p>В игру пришли два уровня новых улучшенных <em>рун </em>для мода <em>Blood Magic.</em> Они, как вы уже догадались, гораздо эффективнее обычных.</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z30.jpg" width="709px" style="margin-left: -17px;">
	
    
    <br/><br/>
    <h2 style="text-align: center;">Обновление LoliChaosMagic<span class="article_anchor_button" id="obnovlenie-lolichaosmagic"></span></h2>
	<p>Наш уникальный аддон <em>LoliChaosMagic </em>тоже получил обновление: игру пришли 3 новых предмета, 3 новых класса и целых 10 новых ритуалов!</p>
	<h3>Новые предметы<span class="article_anchor_button" id="novye-predmety-2"></span></h3>
	<p>Были добавлены новые <em>горны</em>: <em>горн</em>, призывающий двух <em>хобгоблинов</em>, и <em>горн</em>, призывающий пять <em>шабашных ведьм</em>.</p>
	<p class=" article_decoration_last article_decoration_before">А еще в игре появился новый предмет <em>лунное сердце</em>, который позволит вампирам не умирать на солнце, не гореть и не получать негативных эффектов. Все “неприятности” от солнца убираются. Чистокровным вампирам даются дополнительные эффекты!</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z31.jpg" width="709px" style="margin-left: -17px;">
	<h3>Ритуалы<span class="article_anchor_button" id="ritualy"></span></h3>
	<p>В игре появилось целых <strong>10 новых ритуалов</strong>! <em>Ритуал снятия чар, ритуал усиления чар, ритуал восполнения крови, ритуал очистки крови</em> и другие.</p>
	<p>Мы вскоре подготовим отдельную статью, посвященную всем добавленным ритуалам! А пока все любители мода <em>Witchery </em>могут прочитать о новых ритуалах в книге <em>«Магия кругов».</em></p>
	
    
    
    <br/>
    <h2 style="text-align: center;">Обновление LoliTechnologies<span class="article_anchor_button" id="obnovlenie-lolitechnologies"></span></h2>
	<p>В нашем аддон <em>LoliTechnologies</em>, дополняющем мод <em>Applied Energistics 2</em>, тоже появилось кое-что интересное: <em>ускоренный молекулярный сборщик</em> и новые <em>МЭ ячейки хранения жидкости</em>.</p>
	<img src="https://static.loliland.ru/posts/winter_wipe_2021/z32.jpg" width="709px" style="margin-left: -17px;">
	<h3>Ускоренный молекулярный сборщик<span class="article_anchor_button" id="uskorenny-molekulyarny-sborschik"></span></h3>
	<p>Новый <em>ускоренный молекулярный сборщик</em> работает быстрее, чем обычный, и сможет помочь вам сделать свою МЭ сеть эффективнее.</p>
    <img src="https://static.loliland.ru/posts/winter_wipe_2021/z33.jpg" width="709px" style="margin-left: -17px;">
	<h3>Новые МЭ ячейки хранения жидкости<span class="article_anchor_button" id="novye-me-yacheyki-khranenia-zhidkosti"></span></h3>
	<p>В игру пришли новые <em>МЭ ячейки хранения жидкости</em> с большим объемом!</p>
    <img src="https://static.loliland.ru/posts/winter_wipe_2021/z34.jpg" width="709px" style="margin-left: -17px;">


	<br/>
    <h2 style="text-align: center;">Изменения и исправления<span class="article_anchor_button" id="izmenenia-i-ispravlenia"></span></h2>
	<p>Здесь собраны основные фиксы и исправления, добавленные на серверы, а еще изменения в сборках серверов.</p>
	<h3>Серверы на версии 1.4.7<span class="article_anchor_button" id="servery-na-versii-1-4-7"></span></h3>
	<p>К сожалению, из-за маленького онлайна мы решили закрыть <em>ElectroMagic </em>и <em>PowerMagic RPG</em>.</p>
	<p>Надеемся, игроки с этих серверов смогут найти себе сборку по душе на нашем проекте, ведь мы ни в коем случае не хотим с ними расставаться!</p>
	<h3>Были найдены и исправлены краши в модах:<span class="article_anchor_button" id="byli-naydeny-i-ispravleny-krashi-v-modakh"></span></h3>
	<p><strong>1.7.10: </strong><em>Automagy, Witchery, Arsmagica2, Botania, Bloodmagic, IC2, Witchinggadgets, Divine RPG, Tconstruct, OpenComputers, Nuclearcontrol, Extracells, Matteroverdrive </em></p>
	<p><strong>1.12.2:</strong><em> Ice And Fire, Pixelmonmod, IC2, Bloodmagic, Immersiveengineering , Tconstruct, Embers, Divine RPG, Alfheim </em></p>
	<p><strong>1.16.5: </strong><em>Ice And Fire, Mana-and-artifice, Occultism, Botanicalmachinery, Bloodmagic, Immersiveengineering, Tconstruct</em></p>
	<h3>Изменения по модам на версии 1.7.10:<span class="article_anchor_button" id="izmenenia-po-modam-na-versii-1-7-10"></span></h3>
	<h3>Automagy 1.7.10<span class="article_anchor_button" id="automagy-1-7-10"></span></h3>
	<p>Исправлен дюп <em>свитков</em></p>
	<h3>Witchery 1.7.10<span class="article_anchor_button" id="witchery-1-7-10"></span></h3>
	<p>1) Исправлен гриф взрывом<br>2) Добавлена проверка на приват <em>лорду мучений</em></p>
	<h3>ThaumicExploration 1.7.10<span class="article_anchor_button" id="thaumicexploration-1-7-10"></span></h3>
	<p>1) Исправлена нагрузка от <em>Oblivion Jar<br></em>2) Исправлен дюп <em>банок<br></em>3) Пополнена проверка на приваты <em>Boots of the Meteor<br></em>4) Добавлена проверка на приваты <em>Boots of the Comet</em></p>
	<h3>Thaumcraft 4 1.7.10<span class="article_anchor_button" id="thaumcraft-4-1-7-10"></span></h3>
	<p>Исправлен дюп эссенции</p>
	<h3>WitchingGadgets 1.7.10<span class="article_anchor_button" id="witchinggadgets-1-7-10"></span></h3>
	<p>1) Исправлен дюп <em>капсул </em>через <em>раздатчик<br></em>2) Исправлен гриф через <em>раздатчик</em></p>
	<h3>Ars Magica 2 1.7.10<span class="article_anchor_button" id="ars-magica-2-1-7-10"></span></h3>
	<p>Исправлена смена метадаты у <em>руд</em></p>
	<h3>Thaumic-Dyes 1.7.10<span class="article_anchor_button" id="thaumic-dyes-1-7-10"></span></h3>
	<p><em>Маска смерти </em>больше не наносит урон в привате</p>
	<h3>Thaumic Tinkerer 1.7.10<span class="article_anchor_button" id="thaumic-tinkerer-1-7-10"></span></h3>
	<p>1) Дополнена механика зачарованию <em>огненное прикосновение</em>, теперь оно плавит <em>камень </em>и другие <em>руды<br></em>2) Исправлен визуальный клиентский дюп</p>
	<h3>GraviSuite 1.7.10<span class="article_anchor_button" id="gravisuite-1-7-10"></span></h3>
	<p>Исправлен баг с бесконечным полетом на <em>гравитационном жилете</em></p>
	<h3>ForgottenRelics 1.7.10<span class="article_anchor_button" id="forgottenrelics-1-7-10"></span></h3>
	<p>Исправили работу <em>божественного амулета</em></p>
	<h3>Blood Magic 1.7.10<span class="article_anchor_button" id="blood-magic-1-7-10"></span></h3>
	<p>1) Дополнительно оптимизирована работа <em>ритуалов<br></em>2) Добавлена дополнительная проверка на приваты<br>3) Исправлено 2 дюпа с <em>Rhythm of the Beating Anvil<br></em>4) Исправлен дюп с <em>Focus of the Ellipsoid<br></em>5) Исправлен дюп с <em>Ballad of Alchemy<br></em>6) Исправлен дюп <em>Ritual of the Shepherd<br></em>7) Исправлен баг с <em>бесконечным зельем</em></p>
	<h3>BloodArsenal 1.7.10<span class="article_anchor_button" id="bloodarsenal-1-7-10"></span></h3>
	<p>1) Проделана дополнительная оптимизация работы <em>ритуалов<br></em>2) Добавлена дополнительная проверка на приваты<br>3) Исправлен баг с <em>амулетами</em>, не тратились при крафте</p>
	<h3>Minechem 1.7.10<span class="article_anchor_button" id="minechem-1-7-10"></span></h3>
	<p>Исправлен дюп <em>обсидиана</em></p>
	<h3>PamsHarvestCraft 1.7.10<span class="article_anchor_button" id="pamsharvestcraft-1-7-10"></span></h3>
	<p>Отключен обмен <em>семечек </em>у <em>жителей</em></p>
	<h3>OpenComputers 1.7.10<span class="article_anchor_button" id="opencomputers-1-7-10"></span></h3>
	<p>1) Исправлен дюп с бесконечной установкой блоков<br>2) Исправлен дюп жидкостей<br>3) Исправлена бесконечная посадка растений</p>
	<h3>GalacticraftCore 1.7.10<span class="article_anchor_button" id="galacticraftcore-1-7-10"></span></h3>
	<p>1) Исправлен дюп энергии<br>2) Исправлен дюп через <em>наковальню</em></p>
	<h3>GalaxySpace 1.7.10<span class="article_anchor_button" id="galaxyspace-1-7-10"></span></h3>
	<p>1) Исправлен дюп энергии<br>2) Исправлен дюп через <em>наковальню <br></em>3) Исправлен дюп с бесконечной <em>пустой жидкостной канистрой</em></p>
	<h3>ImmersiveEngineering 1.7.10<span class="article_anchor_button" id="immersiveengineering-1-7-10"></span></h3>
	<p>1) Исправлен баг через <em>наковальню <br></em>2) Исправлен дюп <em>шейдеров</em></p>
	<h3>DraconicEvolution 1.7.10<span class="article_anchor_button" id="draconicevolution-1-7-10"></span></h3>
	<p>Была добавлена дополнительная интеграция с <em>Avaritia</em>: все, что вы копаете <em>кирками </em>или <em>посохом</em>, собирается в <em>кластеры</em></p>
	<h3>AE2 1.7.10<span class="article_anchor_button" id="ae2-1-7-10"></span></h3>
	<p>Ресурсы больше не падают из <em>МЭ структуры</em> при её разрушении</p>
	<h3>AE2 Stuff 1.7.10<span class="article_anchor_button" id="ae2-stuff-1-7-10"></span></h3>
	<p>Улучшена работа <em>камеры выращивания кристаллов</em></p>
	<h3>MatterOverdrive 1.7.10<span class="article_anchor_button" id="matteroverdrive-1-7-10"></span></h3>
	<p>1) Исправлено гриферство <em>сканером материи<br></em>2) Исправлен дюп <em>тританиума<br></em>3) Исправлена работа <em>омнитула</em></p>
	<h3>Divine RPG 1.7.10<span class="article_anchor_button" id="divine-rpg-1-7-10"></span></h3>
	<p><em>Лук синего огня</em> больше не откидывает волной в привате</p>
	<h3>Mekanism 1.7.10<span class="article_anchor_button" id="mekanism-1-7-10"></span></h3>
	<p>Исправлен дюп жидкости через динамический резервуар</p>
	<h3>Изменения по модам на версии 1.12.2:<span class="article_anchor_button" id="izmenenia-po-modam-na-versii-1-12-2"></span></h3>
	<h3>AE2 1.12.2<span class="article_anchor_button" id="ae2-1-12-2"></span></h3>
	<p>Ресурсы больше не падают из <em>МЭ структуры</em> при её разрушении</p>
	<h3>Ice And Fire 1.12.2<span class="article_anchor_button" id="ice-and-fire-1-12-2"></span></h3>
	<p>1) Изменена механика <em>горгоны</em>, теперь она замедляет противника на 30 секунд, а не делает его камнем, что приводило к потери вещей<br>2) Исправлен дюп с бесконечным получением дропа с <em>дракона<br></em>3) <em>Королева Мирмексов</em> больше не разрушает приваты<br>4) Теперь на своих <em>драконов </em>можно садиться даже в чужих приватах<br>5) Исправлен дюп <em>пикси в банке</em></p>
	<h3>Botania 1.12.2<span class="article_anchor_button" id="botania-1-12-2"></span></h3>
	<p>1) <em>Семя разрастания</em> больше не пропадают<br>2) Исправлен дюп через <em>контейнер с красной ниткой<br></em>3) <em>Гайе </em>больше не может ломать блоки</p>
	<h3>Mekanism 1.12.2<span class="article_anchor_button" id="mekanism-1-12-2"></span></h3>
	<p>1) Исправлен баг с получением энергии по <em>проводам<br></em>2) Проведена оптимизация и ограничение лимита предметов в <em>трубах</em></p>
	<h3>Astral Sorcery 1.12.2<span class="article_anchor_button" id="astral-sorcery-1-12-2"></span></h3>
	<p>Добавлена проверка на приваты</p>
	<h3>Avaritia 1.12.2<span class="article_anchor_button" id="avaritia-1-12-2"></span></h3>
	<p>Исправлен дюп <em>яиц дракона</em> с зачарованием <em>«Добыча»</em> </p>
	<h3>IC2 1.12.2<span class="article_anchor_button" id="ic2-1-12-2"></span></h3>
	<p>Отключили взрыв <em>реактора </em>в привате</p>
	<h3>Bewitchment 1.12.2<span class="article_anchor_button" id="bewitchment-1-12-2"></span></h3>
	<p>1) Отключен <em>ритуал смены дня и ночи<br></em>2) Исправлен гриф с <em>зельями<br></em>3) Исправлен дюп <em>метлы<br></em>4) Исправлен баг с бесконечной едой<br>5) Исправлена работа эффекта <em>Fear </em>в приватах <br>6) Зелье <em>Разоблачение </em>больше не выбрасыывает предметы из <em>Baubles</em></p>
	<h3>ImmersiveEngineering 1.12.2<span class="article_anchor_button" id="immersiveengineering-1-12-2"></span></h3>
	<p>1) Исправлен баг через <em>наковальню <br></em>2) Исправлен дюп <em>шейдеров</em></p>
	<h3>ImmersivePetroleum 1.12.2<span class="article_anchor_button" id="immersivepetroleum-1-12-2"></span></h3>
	<p>Исправлен дюп со <em>смазочным устройством</em></p>
	<h3>TConstruct 1.12.2<span class="article_anchor_button" id="tconstruct-1-12-2"></span></h3>
	<p>Добавлена проверка на приваты оружию</p>
	<h3>Divine RPG 1.12.2<span class="article_anchor_button" id="divine-rpg-1-12-2"></span></h3>
	<p><em>Лук синего огня</em> больше не откидывает волной в привате</p>
	<h3>GalacticraftCore 1.12.2<span class="article_anchor_button" id="galacticraftcore-1-12-2"></span></h3>
	<p>1) Исправлен дюп энергии<br>2) Исправлен дюп через <em>наковальню </em></p>
	<h3>GalaxySpace 1.12.2<span class="article_anchor_button" id="galaxyspace-1-12-2"></span></h3>
	<p>1) Исправлен дюп энергии<br>2) Исправлен дюп через <em>наковальню </em></p>
	<h3>ThaumicEnergistics 1.12.2<span class="article_anchor_button" id="thaumicenergistics-1-12-2"></span></h3>
	<p>Исправлен GUI дюп</p>
	<h3>ThaumicAdditions 1.12.2<span class="article_anchor_button" id="thaumicadditions-1-12-2"></span></h3>
	<p>Исправлен дюп через <em>ячейки существа</em></p>
	<h3>Binnie's Mods 1.12.2<span class="article_anchor_button" id="binnie-s-mods-1-12-2"></span></h3>
	<p>Исправлен дюп через <em>field kit </em></p>
	<h3>Изменения по модам на версии 1.16.5:<span class="article_anchor_button" id="izmenenia-po-modam-na-versii-1-16-5"></span></h3>
	<h3>Дополнительные проверки на приват<span class="article_anchor_button" id="dopolnitelnye-proverki-na-privat"></span></h3>
	<p>Убран урон от <em>стрелкового оружия</em></p>
	<h3>AE2 1.16.5<span class="article_anchor_button" id="ae2-1-16-5"></span></h3>
	<p>Ресурсы больше не падают из <em>МЭ структуры</em> при её разрушении</p>
	<h3>Ice And Fire 1.16.5<span class="article_anchor_button" id="ice-and-fire-1-16-5"></span></h3>
	<p>1) Изменена механика <em>горгоны</em>, теперь замедляет противника на 30 секунд, а не делает его камнем, что приводило к потери вещей<br>2) Исправлен дюп с бесконечным получением дропа с <em>дракона<br></em>3) <em>Королева Мирмексов</em> больше не разрушает приваты<br>4) Теперь на своих <em>драконов </em>можно садиться даже в чужих приватах<br>5) Исправлен дюп <em>пикси в банке</em></p>
	<h3>Botania 1.16.5<span class="article_anchor_button" id="botania-1-16-5"></span></h3>
	<p>1) <em>Семя разрастания</em> больше не пропадают<br>2) Исправлен дюп через <em>контейнер с красной ниткой</em></p>
	<h3>ExtendedCrafting 1.16.5<span class="article_anchor_button" id="extendedcrafting-1-16-5"></span></h3>
	<p>Исправлен баг с нагрузкой от <em>базовых авто-верстаков</em></p>
	<h3>ThermalMods 1.16.5<span class="article_anchor_button" id="thermalmods-1-16-5"></span></h3>
	<p>1) Исправлен дюп всех предметов<br>2) Исправлен дюп опыта</p>
	<h3>Astral Sorcery 1.16.5<span class="article_anchor_button" id="astral-sorcery-1-16-5"></span></h3>
	<p>1) Добавлены проверки на приваты<br>2) Исправлен гриф <em>Nocturnal Powder<br></em>3) Исправлено ломание блоков <em>телескопом</em></p>
	<h3>TConstruct 1.16.5<span class="article_anchor_button" id="tconstruct-1-16-5"></span></h3>
	<p>Исправлен дюп блоков через переплавку</p>
	<h3>Mana and Artifice 1.16.5<span class="article_anchor_button" id="mana-and-artifice-1-16-5"></span></h3>
	<p>Исправен дюп <em>Crystal Phylactery</em></p>
	<h3>Create 1.16.5<span class="article_anchor_button" id="create-1-16-5"></span></h3>
	<p>1) Исправлен дюп всех вещей<br>2) Исправлены 2 бага с возможностью стакать нестакающиеся предметы<br>3) Исправлено 2 дюпа с <em>жезлом симметрии<br></em>4) <em>Поршни </em>из этого мода больше не могут забирать и передвигать блоки внутри чужого привата<br>5) <em>Механическая пила</em> больше не ломает приваты<br>6) <em>Механическая дрель</em> больше не ломает приваты<br>7) Исправлен дюп <em>механических ремней <br></em>8) <em>Ручной редактор мира</em> теперь работает только в творческом режиме, добавлена проверка на приваты</p>
	<h3>ImmersiveEngineering 1.16.5<span class="article_anchor_button" id="immersiveengineering-1-16-5"></span></h3>
	<p>1) Исправлен дюп всех предметов<br>2) Исправлен дюп через <em>circuit_table<br></em>3) Исправлен баг через <em>наковальню <br></em>4) Исправлен дюп <em>шейдеров</em></p>
	<h3>BloodMagic 1.16.5<span class="article_anchor_button" id="bloodmagic-1-16-5"></span></h3>
	<p>1) Отключен взрыв следующим предметам <em>Fungal Charge, Controlled Charge, Deforester Charge, Shaped Charge<br></em>2) Отключен <em>ритуал смены дня и ночи<br></em>3) <em>Сигилы </em>больше не могут ставить воду и лаву в чужих приватах<br>4) <em>Сигил воды</em> больше не разрушает <em>сундуки, </em>а создает вокруг них <em>образование воды<br></em>5) <em>Сигил лавы</em> больше не разрушает <em>сундуки</em></p>
	<h3>Industrial Foregoing 1.16.5<span class="article_anchor_button" id="industrial-foregoing-1-16-5"></span></h3>
	<p>Отключен взрыв <em>Infinity Nuke</em></p>
	<h3>TheAbyss2 1.16.5<span class="article_anchor_button" id="theabyss2-1-16-5"></span></h3>
	<p><em>Abyss Thunder Plant</em>: задержка удара молнии теперь составляет 5 секунд, до этого задержки не было</p>
	<h3>Item Filters 1.16.5<span class="article_anchor_button" id="item-filters-1-16-5"></span></h3>
	<p>Исправлен дюп предметов через все виды <em>фильтров</em></p>
	<h3>Eidolon 1.16.5<span class="article_anchor_button" id="eidolon-1-16-5"></span></h3>
	<p>Отключен урон в привате от жезлов <em>жезл пламени душ</em> и жезл <em>хладного пламени</em></p>
	<h2>Заключение<span class="article_anchor_button" id="zaklyuchenie"></span></h2>
	<p>Спасибо, что остаетесь с нами. Мы обязательно продолжим радовать вас новыми разработками и нововведениями. Зовите друзей и успейте первыми исследовать сервер после вайпа!</p>
	<p class=" article_decoration_last article_decoration_before">Мир LoliLand уже ждет вас.</p>
    <img src="https://static.loliland.ru/posts/winter_wipe_2021/z35.jpg" width="709px" style="margin-left: -17px;">
</div>

<div>
	<h1 style="text-align: center;">Весенний вайп 2022, обновления уникальных модов, LoliEnergyRelics и LoliExtremeBotany</h1>
	
	<p>Дорогие игроки!</p>
	<p>Пришло время очередного вайпа и новых обновлений.</p>
	<p>В <a href="https://vk.com/@loliland-wipe-winter-22">прошлом вайпе</a> мы открыли 2 новых сервера, а также обновили наши уникальные моды <em>LoliMagically</em>, <em>LoliTechnologies </em>и <em>LoliChaosMagic</em>, а еще добавили совершенно новый уникальный аддон — <em>LoliDragonMight</em>.</p>
	<p>Что же мы подготовили на этот раз?</p>
	<p>В этот раз мы вновь разработали обновление для наших уникальных модов <em>LoliMagically</em>, <em>LoliEnergistics</em>, <em>LoliTechnologies</em>, а также добавили 2 новых уникальных аддона: <em>LoliEnergyRelics </em>и<em> LoliExtremeBotany</em>!</p>
	<p>А еще мы внесли в игру огромное количество исправлений и загрузили множество фиксов.</p>
	<p>Читайте статью до конца, чтобы узнать больше!</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r0.png" width="709px" style="margin-left: -17px;" alt="Обложка весеннего обновления 2022">
    <br/><br/>
    
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r1.png" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r2.png" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r3.png" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r4.png" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r5.png" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r6.png" width="709px" style="margin-left: -17px;">
	
	<h2 style="text-align: center;">Вайп на всех серверах!</h2>
	<p>Совсем скоро завершится вайп на всех серверах. Зовите друзей и вместе играйте на LoliLand! Успейте первыми исследовать новый мир после вайпа.</p>
	<h3>Важные детали</h3>
	<p><strong>Монеты<br></strong>Монеты, которые были переведены с сайта на сервер, не сохранены.<br>В личном кабинете на сайте монеты сохранены.</p>
	<p><strong>Донат<br></strong>Привилегии не пропали. Время китов сброшено, их можно будет получить снова.</p>
	<p><strong>Предметы из магазина блоков<br></strong>Предметы, купленные за рубли за неделю до вайпа, могут быть возвращены. Напишите в <a href="https://vk.com/im?media=&amp;sel=-180476635">личные сообщения нашей группы ВК</a>.</p>
	<p><strong>Статистика<br></strong>Статистика была полностью сброшена. Сохранена только статистика по игровому времени.</p>
	<p><strong>Муты<br></strong>Все муты, выданные до вайпа, сняты.</p>
	
    
    <br/><h2 style="text-align: center;">Обновление LoliEnergistics</h2>
	<p>В наш уникальный технический мод <em>LoliEnergistics</em> пришло несколько новых удобных механизмов, которые дополнят вашу МЭ сеть и помогут в развитии и оптимизации базы.</p>
	<p>Новые механизмы можно подключить к МЭ сети, используя <em>МЭ интерфейсы</em>, <em>шины</em>, <em>трубы</em> и так далее.</p>
	<p>Обновление было добавлено на серверы <em>TechnoMagic RPG 1.7.10, TechnoMagic Sky 1.7.10, TechnoWizardry 1.7.10, HiTech 1.7.10 и UltraTech 1.7.10</em>.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r7.jpg" width="709px" style="margin-left: -17px;">
	<h3>Плита телепортации</h3>
	<p>В игре появился новый удобный механизм для телепортации — <em>плита телепортации</em>. Принцип работы очень прост: если встать на плиту, игрок будет телепортирован на заданные координаты.</p>
	<p>Имеет режим работы <em>По сигналу</em>, при котором плита будет телепортировать игрока только при активации <em>редстоуном</em>.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r8.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r9.jpg" width="709px" style="margin-left: -17px;">
	<h3>Кристалл телепортации</h3>
	<p>Используйте этот предмет, чтобы сохранить координаты, на которые <em>плита телепортации</em> будет перемещать игрока. Для этого возьмите <em>кристалл </em>в руку и нажмите Shift + ПКМ, а затем положите его в <em>плиту телепортации</em>.</p>
	<p>Нельзя сохранять координаты, относящиеся к чужому привату.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r10.jpg" width="709px" style="margin-left: -17px;">
	<h3>Квантовый репликатор</h3>
	<p>Более эффективный аналог обычного <em>репликатора. </em>Имеет сразу 3 слота для результата крафта и может производить до 64 предметов за операцию, если хватает материи.</p>
	<p>Также имеет дополнительный слот для более удобной настройки шаблона: в новый слот нужно положить предмет, который требуется произвести.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r11.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r12.jpg" width="709px" style="margin-left: -17px;">
	<h3>Генератор лавы (3 уровня)<span class="article_anchor_button" id="generator-lavy-3-urovnya"></span></h3>
	<p>Генерирует и хранит лаву, используя энергию. Имеет слоты для наполнения хранилищ для жидкостей.</p>
	<p>Имеет три уровня, с каждым уровнем эффективность <em>генератора</em> возрастает:</p>
	<p>1 уровень — 10 бакитов лавы за 100 000 EU<br>2 уровень — 25 бакитов лавы за 100 000 EU<br>3 уровень — 50 бакитов лавы за 100 000 EU</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r13.jpg" width="709px" style="margin-left: -17px;">
	<h3>Объединитель жидкой материи</h3>
	<p>
    Хранит в себе <em>генераторы жидкой материи</em>. Используя этот механизм, можно уменьшить количество механизмов на своей территории и сделать свою МЭ сеть более эффективной. 
    В перспективе этот новый механизм поможет немного оптимизировать работу сервера.
    </p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r14.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r15.jpg" width="709px" style="margin-left: -17px;">
	<h3>Объединитель нейтрония</h3>
	<p>Хранит в себе <em>сингулярные</em> <em>генераторы нейтрония</em>. Также призван помочь с оптимизацией МЭ сети и работы сервера.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r16.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r17.jpg" width="709px" style="margin-left: -17px;">
	<h3>Ферма визеров</h3>
	<p>Перерабатывает <em>головы скелетов-иссушителей</em> и <em>песок душ</em> в <em>звезды ада</em>, используя энергию.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r18.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r19.jpg" width="709px" style="margin-left: -17px;">
	<h3>Совершенная ваджра</h3>
	<p>Аналог обычной <em>ваджры</em>, однако имеющий зачарование на удачу 5.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r20.jpg" width="709px" style="margin-left: -17px;">
	<h3>Новые ускорители</h3>
	<p>Улучшенные версии обычных <em>ускорителей</em>. Были добавлены <em>улучшенный ускоритель</em> (равен 4 обычным) и <em>продвинутый ускоритель </em>(равен 10 обычным).</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r21.jpg" width="709px" style="margin-left: -17px;">
	<h3>Новые галактические панели и ядра</h3>
	<p>Были добавлены две новые солнечные панели: <em>панель с зелеными изогнутыми лучами</em> и <em>ультимативная панель с изогнутыми лучами.</em></p>
	<p>А также были добавлены 5 новых <em>галактических сингулярностей: голубая, зеленая, красная, фиолетовая и золотистая. </em>Они будут участвовать в крафте<em> галактических панелей.</em></p>
	<p>Новые панели и сингулярности были добавлены только на сервер <em>UltraTech 1.7.10</em>.</p>
	
    
    <br/><h2 style="text-align: center;">Обновление LoliMagically<span class="article_anchor_button" id="obnovlenie-lolimagically"></span></h2>
	<p>В наш уникальный магический мод <em>LoliMagically </em>пришло несколько новых механизмов и предметов, призванных сделать игру более удобной и интересной.</p>
	<p>Обновление было добавлено на серверы <em>TechnoMagic RPG 1.7.10</em>, <em>TechnoMagic Sky 1.7.10</em>, <em>TechnoWizardry 1.7.10</em>, <em>Magic RPG 1.7.10 </em>и <em>ArsMagic RPG 1.7.10</em>.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r22.jpg" width="709px" style="margin-left: -17px;">
	<h3>Механический бассейн маны</h3>
	<p>Автоматизированная версия <em>бассейна маны</em> из мода <em>Botania. </em>В специальный слот нужно вставить необходимый <em>катализатор</em>. Также есть отдельный слот для улучшений. Может взаимодействовать с <em>искрами</em>, <em>распространителями маны</em> и <em>бассейнами маны</em>.</p>
	<p>Можно вставить <em>улучшение Асгард</em>.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r23.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r24.jpg" width="709px" style="margin-left: -17px;">
	<h3>Евклидовый генератор эссенций<span class="article_anchor_button" id="evklidovy-generator-essentsy"></span></h3>
	<p>Генерирует <em>эфирные эссенции </em>из мода <em>Thaumcraft</em>, расходуя ману. За одну операцию генерирует 1 <em>эфирную эссенцию</em> и расходует 5 000 маны.</p>
	<p>Поддерживает использование <em>искр </em>из мода <em>Botania</em>.</p>
	<p>Можно вставить <em>улучшение Асгард</em>.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r25.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r26.jpg" width="709px" style="margin-left: -17px;">
	<h3>Улучшение Асгард<span class="article_anchor_button" id="uluchshenie-asgard"></span></h3>
	<p>Улучшение, генерирующее бесконечную ману внутри механизма.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r27.jpg" width="709px" style="margin-left: -17px;">
	<h3>Автоматический синтезатор магических слитков<span class="article_anchor_button" id="avtomaticheskiy-sintezator-magicheskikh-slitkov"></span></h3>
	<p>Аналог обычного <em>синтезатора магических слитков</em>, однако эта версия может работать с <em>МЭ интерфейсами</em>, <em>трубами</em>, <em>воронками</em> и так далее. Чтобы использовать механизм, выложите нужный крафт и нажмите кнопку для запоминания крафта.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r28.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r29.jpg" width="709px" style="margin-left: -17px;">
	<h3>Ферма визеров</h3>
	<p>Аналог <em>фермы визеров</em> из <em>LoliEnergistics</em>, однако эта ферма использует ману, а не энергию.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r30.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r31.jpg" width="709px" style="margin-left: -17px;">
	<h3>Новые стержни и наконечники</h3>
	<p>В игру были добавлены новые стержни и наконечники, которые будут участвовать в крафтах добавленных ранее жезлов.</p>
	<p>Были добавлены <em>легендарный переливающийся металлический стержень</em>, <em>легендарный переливающийся призрачный стержень</em>, <em>легендарный переливающийся дракониевый стержень</em>, <em>легендарный переливающийся многоцветный стержень </em>и соответствующие им<em> наконечники.</em></p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r32.jpg" width="709px" style="margin-left: -17px;">
    

    <br/><br/><h2 style="text-align: center;">Обновление LoliTechnologies</h2>
	<p>
    В этом обновлении мы вновь добавили несколько механизов для нашего уникального аддона <em>LoliTechnologies</em>. 
    Мы не перестаем разрабатывать различные нововведения для МЭ, чтобы у вас была максимально оптимизированная, удобная и совершенная сеть.
    </p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r33.jpg" width="709px" style="margin-left: -17px;">
	<h3>Нейтронный последовательный сборщик</h3>
	<p>Используется для автокрафта сингулярностей. Теперь не нужно строить большие схемы для их автокрафта: новый <em>нейтронный последовательный сборщик</em> способен создать любую сингулярность, даже состоящую из 4к блоков.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r34.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r35.jpg" width="709px" style="margin-left: -17px;">
	<h3>Нейтронный кодировщик</h3>
	<p>Кодирует рецепты для <em>нейтронного последовательного сборщика</em>. </p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r36.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r37.jpg" width="709px" style="margin-left: -17px;">
	<h3>Диск с нейтронными шаблонами</h3>
	<p>Содержит закодированные рецепты для <em>нейтронного последовательного сборщика</em>.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r38.jpg" width="709px" style="margin-left: -17px;">
	<h3>Ядро нейтронных шаблонов</h3>
	<p>Используется для крафта <em>диска с нейронными шаблонами</em>.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r39.jpg" width="350px"></center>
	<h3>Улучшенные беспроводные соединители<span class="article_anchor_button" id="uluchshennye-besprovodnye-soediniteli"></span></h3>
	<p>Улучшенные версии обычного <em>беспроводного соединителя</em>. Можно использовать как доступную альтернативу <em>квантовому мосту</em>. Для привязки новых соединителей используйте <em>набор для настройки беспроводного соединителя</em>.</p>
	<p><em>Улучшенный беспроводной соединитель</em> — содержит до 64 каналов<br><em>Ультимативный беспроводной соединитель</em> — содержит до 128 каналов<br><em>Квантовый беспроводной соединитель</em> — содержит до 256 каналов</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r40.jpg" width="709px" style="margin-left: -17px;">
	<h3>Набор для настройки беспроводного соединителя<span class="article_anchor_button" id="nabor-dlya-nastroyki-besprovodnogo-soedinitelya"></span></h3>
	<p>Используется для настройки новых <em>беспроводных соединителей: </em>для подключения нужно нажать ПКМ по соединителям.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r41.jpg" width="709px" style="margin-left: -17px;">
	<h3>Улучшенный магический сборщик<span class="article_anchor_button" id="uluchshenny-magicheskiy-sborschik"></span></h3>
	<p>Улучшенная версия существующего <em>магического сборщика</em>, однако вместительность была увеличена до 100 000 аспектов.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r42.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r43.jpg" width="709px" style="margin-left: -17px;">
	<h3>Новые МЭ кабели<span class="article_anchor_button" id="novye-me-kabeli"></span></h3>
	<p>Улучшенные версии <em>МЭ плотного кабеля.</em></p>
	<p><em>Улучшенный МЭ кабель</em> — содержит до 64 каналов<br><em>Ультимативный МЭ кабель</em> — содержит до 128 каналов<br><em>Квантовый МЭ кабель</em> — содержит до 256 каналов</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r44.jpg" width="709px" style="margin-left: -17px;">
	<h3>Квантовая карта ускорения<span class="article_anchor_button" id="kvantovaya-karta-uskorenia"></span></h3>
	<p>Улучшенная версия привычной <em>карты ускорения</em>. Мощность увеличена в 6 раз.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r45.jpg" width="709px" style="margin-left: -17px;">
	<h3>Печать Азанора<span class="article_anchor_button" id="pechat-azanora"></span></h3>
	<p>Новое улучшение, нивелирующее затраты вис и эссенции при крафте в <em>магическом сборщике</em> из <em>thaumic energistics</em> и <em>матричном молекулярном сборщике.</em></p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r46.jpg" width="709px" style="margin-left: -17px;">
	


	<br/><br/><h2 style="text-align: center;">Новый аддон LoliEnergyRelics</h2>
	<p>Новый аддон <em>LoliEnergyRelics</em>, появившийся в этом обновлении, призван дополнить технические моды и сделать PvP-составляющую сервера более интересной. Встречайте множество новых реликвий, предметов и даже новый невероятно мощный сет брони!</p>
	<p>Новый аддон <em>LoliEnergyRelics </em>был добавлен на серверы <em>TechnoMagic RPG 1.7.10 и HiTech 1.7.10</em></p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r47.jpg" width="709px" style="margin-left: -17px;">
	<h3>Демоническая броня бесконечности<span class="article_anchor_button" id="demonicheskaya-bronya-beskonechnosti"></span></h3>
	<p>Усиленный аналог обычной <em>брони бесконечности</em>. Если владелец надел эту броню, нанести ему урон можно лишь с помощью <em>демонического меча бесконечности</em>.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r48.jpg" width="709px" style="margin-left: -17px;">
	<h3>Демонический меч бесконечности</h3>
	<p>
    Усиленный аналог <em>обычного меча бесконечности</em>. Способен убить противника в обычной <em>броне бесконечности</em> за один удар. 
    Также это единственный предмет, способный пробить <em>демоническую броню бесконечности</em>. 
    При ударе снимает все эффекты с противника, а затем накладывает иссушение 50 уровня. 
    Скорость ударов выше, чем у обычного <em>меча бесконечности</em>. 
    Также по умолчанию имеет зачарование добычи 20 уровня.
    </p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r49.jpg" width="709px" style="margin-left: -17px;">
	<h3>Усилители</h3>
	<p>В игру были добавлены различные усилители, которые помогут игрокам улучшить некоторые характеристики. Усилители одного вида и уровня не могут работать вместе, однако усилители разного уровня — могут.</p>
	<p><strong>Усилитель урона (1-5 уровень)<br></strong>Усиливает атаки владельца, расходуя энергию. Количество энергии за одно использование зависит от уровня усилителя.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r50.jpg" width="709px" style="margin-left: -17px;">
	<p><strong>Усилитель защиты (1-5 уровень)<br></strong>Улучшает защиту владельца, расходуя энергию, сокращая входящий урон. Эффективность зависит от уровня усилителя.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r51.jpg" width="709px" style="margin-left: -17px;">
	<p><strong>Усилитель регенерации (1-5 уровень)<br></strong>Пассивно восстанавливает здоровье владельца, расходуя энергию. Эффективность зависит от уровня усилителя.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r52.jpg" width="709px" style="margin-left: -17px;">
	<p><strong>Инвентарный EU-генератор (1-5 уровень)<br></strong>Наполняет EU-энергией предметы в инвентаре игрока, в том числе и надетую броню. Имеет 5 уровней.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r53.jpg" width="709px" style="margin-left: -17px;">
	<p><strong>Электролизированное ядро хаоса<br></strong>Предотвращает смерть владельца, полностью восстанавливая ХП. Потребляет 333 333 333 EU за использование. 
    Хранит в себе 999 999 999 EU. Можно использовать сразу несколько ядер. Скорость зарядки ограничена 3 000 000 EU в тик.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r54.jpg" width="350px"></center>
	<p><strong>Ядро воровства силы<br></strong>При ударе обменивает здоровье цели и владельца, если здоровье владельца меньше здоровья цели. 
    Если здоровье цели больше максимального здоровья владельца, владелец просто восстановит здоровье до максимально возможно уровня.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r55.jpg" width="350px"></center>
	<p><strong>Энергетическое зеркало<br></strong>С шансом 50% отражает получаемый удар и возвращает его атакующему, расходуя энергию. Не стакается.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r56.jpg" width="350px"></center>
	<p><strong>Энергетический конвертер урона<br></strong>При использовании изменяет тип входящего и исходящего урона на истинный. 
    При конвертации и входящий, и исходящий урон увеличиваются в несколько раз. Позволяет легко пробивать броню из <em>IC2 </em>и <em>GSuite</em>.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r57.jpg" width="350px"></center>
	<p><strong>Аннулятор баффов<br></strong>При ударе с владельца и с цели снимаются все эффекты. 
    Необязательно бить самим предметом, можно просто держать его в инвентаре во время атаки.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r58.jpg" width="350px"></center>
	<p><strong>Ускоритель копания<br></strong>Увеличивает скорость копания, расходуя энергию.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r59.jpg" width="350px"></center>
	<p><strong>Генератор рандомных баффов<br></strong>Генерирует рандомные баффы.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r60.jpg" width="350px"></center>
	
    
    
    <br/><br/><h2 style="text-align: center;">Новый аддон LoliExtremeBotany</h2>
	<p>Второй новый, пришедший в игру с этим обновлением, называется <em>LoliExtremeBotany</em>. Как и <em>LoliEnergyRelics</em>, он поможет развить PvP-составляющую сервера, однако этот аддон призван дополнить магические, а не технические моды. Встречайте множество новых жезлов с различными механиками, новое оружие, реликвии, новый сет брони и многое другое!</p>
	<p>Новый аддон <em>LoliExtremeBotany</em> был добавлен на серверы <em>Magic RPG 1.7.10</em> и<em> ArsMagic RPG 1.7.10.</em></p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r61.jpg" width="709px" style="margin-left: -17px;">
	<h3>Броня для PvE<span class="article_anchor_button" id="bronya-dlya-pve"></span></h3>
	<p>Улучшенная версия сета из <em>террастали</em>, однако в этой броне вы сможете быстрее копать, бегать, экономить вис (до 80% в полном сете), экономить ману и не только. Защитные свойства этой брони выше, чем у сета из <em>террастали</em>, но ниже, чем у <em>теневого сета</em>. Также есть <em>рунный щит</em>.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r62.jpg" width="709px" style="margin-left: -17px;">
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r63.jpg" width="709px" style="margin-left: -17px;">
	<h3>Жезлы<span class="article_anchor_button" id="zhezly"></span></h3>
	<p>В игру пришли множество жезлов с необычными свойствами, которые призваны сделать сражения более интересными.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r64.jpg" width="709px" style="margin-left: -17px;">
	<p><strong>Ангельский жезл<br></strong>Притягивает игрока к цели на ПКМ.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r65.jpg" width="350px"></center>
	<p><strong>Ионный жезл<br></strong>На ЛКМ стреляет быстрыми снарядами, наносящими 600 магического урона. На ПКМ наносит 10 урона всем окружающим существам.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r66.jpg" width="350px"></center>
	<p><strong>Импульсный жезл<br></strong>На ЛКМ стреляет гравитационными снарядами, наносящими 500 магического урона и накладывающими на цель замедление.
     На ПКМ стреляет более мощными снарядами, наносящими 1500 магического урона, однако расходует больше маны.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r67.jpg" width="350px"></center>
	<p><strong>Жезл силы<br></strong>На ЛКМ выпускает взрывные снаряды, наносящими 900 магического урона, а на ПКМ отталкивает существ от владельца.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r68.jpg" width="350px"></center>
	<p><strong>Жезл хаоса<br></strong>На ЛКМ стреляет гравитационными снарядами, наносящими 3000 урона.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r69.jpg" width="350px"></center>
	<p><strong>Кровавый жезл<br></strong>На ЛКМ стреляет снарядами, наносящими 400 магического урона и при попадании восстанавливающими владельцу 400 ХП. 
    На ПКМ стреляет более мощными снарядами, наносящими 1000 магического урона и накладывающими на цель эффект иссушения.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r70.jpg" width="350px"></center>
	<p><strong>Взрывной жезл<br></strong>На ЛКМ выпускает взрывной снаряд, наносящий 700 урона. На ПКМ создает волну взрывов, наносящих каждый 1000 урона.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r71.jpg" width="350px"></center>
	<p><strong>Мерцающий жезл<br></strong>На ЛКМ выпускает множество снарядов, наносящих магический урон. 
    На ПКМ выпускает 4 снаряда, летящих вверх, которые взрываются при столкновении с целью или блоками.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r72.jpg" width="350px"></center>
	<p><strong>Гравитационный жезл<br></strong>На ЛКМ притягивает владельца к ближайшей цели в радиусе 6 блоков. 
    На ПКМ выпускает гравитационную сферу, притягивающую окружающих существ. Спустя несколько секунд сфера взрывается и подкидывает всех притянутых существ в воздух.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r73.jpg" width="350px"></center>
	<h3>Генератор инфузии (1-6 уровень)<span class="article_anchor_button" id="generator-infuzii-1-6-uroven"></span></h3>
	<p>Восстанавливает инфузию владельцу. Имеет 6 уровней.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r74.jpg" width="709px" style="margin-left: -17px;">
	<h3>Генератор маны (1-6 уровень)<span class="article_anchor_button" id="generator-many-1-6-uroven"></span></h3>
	<p>Наполняет маной предметы в инвентаре игрока, в том числе и надетую броню. Имеет 6 уровней.</p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r75.jpg" width="709px" style="margin-left: -17px;">
	<h3>Иные предметы<span class="article_anchor_button" id="inye-predmety"></span></h3>
	<p>Помимо перечисленного, в мод было добавлено множество иных предметов.</p>
	<p><strong>Убийца Гайи<br></strong>Меч, позволяющий убить Гайю или Флюгеля за 1 удар.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r76.jpg" width="350px"></center>
	<p><strong>Пояс призрака<br></strong>Увеличивает скорость ударов игрока. Эффект тот же, что и при использовании режима демона из <em>LoliChaosMagic</em>.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r77.jpg" width="350px"></center>
	<p><strong>Пояс проникновения<br></strong>С шансом 30% удар игрока игнорирует броню цели.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r78.jpg" width="350px"></center>
	<p><strong>Пояс химеры<br></strong>С шансом 50% нивелирует входящий урон и восстанавливает 1/7 максимального запаса ХП владельца.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r79.jpg" width="350px"></center>
	<p><strong>Пояс против невидимок<br></strong>Раскрывает невидимость в радиусе 16 блоков.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r80.jpg" width="350px"></center>
	<p><strong>Кольцо эльфийского короля<br></strong>Улучшенный аналог кольца из мода <em>Alfheim</em>.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r81.jpg" width="350px"></center>
	<p><strong>Кольцо привода маны<br></strong>Направляет ману из хранилищ маны в инвентаре в находящиеся рядом цветы. Работает не со всеми цветами.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r82.jpg" width="350px"></center>
	<p><strong>Кольцо смерти<br></strong>Наносит периодический урон целям вокруг владельца и самому владельцу, а также накладывает на целей вокруг отрицательные эффекты. 
    Рекомендуется использовать с предметами, имеющими эффект вампиризма.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r83.jpg" width="350px"></center>
	<p><strong>Кольцо семи глэков<br></strong>Кольцо-пасхалка. Все физические атаки, наносящие больше 100 урона блокируются, лава восстанавливает владельцу ХП.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r84.jpg" width="350px"></center>
	<p><strong>Вор инфузии<br></strong>При ударе отнимает инфузию, имеющуюся у цели, и передает владельцу.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r85.jpg" width="350px"></center>
	<p><strong>Том тишины<br></strong>При ударе накладывает на противника эффект оглушения.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r86.jpg" width="350px"></center>
	<p><strong>Лунный амулет<br></strong>Увеличивает в 2 раза урон во время полнолуния.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r87.jpg" width="350px"></center>
	<p><strong>Агрессор мобов<br></strong>Позволяет манипулировать агрессией моба, сталкивая его с другими мобами.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r88.jpg" width="350px"></center>
	<p><strong>Массовый агрессор мобов<br></strong>Позволяет манипулировать агрессией сразу нескольких мобов.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r89.jpg" width="350px"></center>
	<p><strong>Безмолвная вечность<br></strong>Накладывает эффект <em>Вечность </em>на владельца. 
    Он не сможет быстро передвигаться и восстанавливать ХП, однако защита увеличивается в 10 раз.</p>
	<center><img src="https://static.loliland.ru/posts/spring_wipe_2022/r90.jpg" width="350px"></center>


    
	<br/><br/><h2 style="text-align: center;">Изменения и исправления<span class="article_anchor_button" id="izmenenia-i-ispravlenia"></span></h2>
	<p>Здесь собраны основные фиксы и исправления, добавленные на серверы, а еще изменения в сборках серверов.</p>
	<h3>Изменения по серверам:<span class="article_anchor_button" id="izmenenia-po-serveram"></span></h3>
	<h3>HiTech 1.7.10<span class="article_anchor_button" id="hitech-1-7-10"></span></h3>
	<p><strong>Добавлены моды: </strong><em>Ztones</em></p>
	<h3>Ars Magic RPG 1.7.10<span class="article_anchor_button" id="ars-magic-rpg-1-7-10"></span></h3>
	<p><strong>Добавлены моды: </strong><em>Storage Drawers</em></p>
	<h3>TechnoWizardry 1.7.10<span class="article_anchor_button" id="technowizardry-1-7-10"></span></h3>
	<p><strong>Добавлены моды: </strong><em>Wireless Crafting Terminal</em></p>
	<h3>TechnoMagic Sky 1.7.10<span class="article_anchor_button" id="technomagic-sky-1-7-10"></span></h3>
	<p><strong>Добавлены моды: </strong><em>Blood Arsenal, Wireless Crafting Terminal</em></p>
	<h3>FusionTech 1.12.2<span class="article_anchor_button" id="fusiontech-1-12-2"></span></h3>
	<p>Добавлены крафты <em>душ</em>, <em>квантовых генераторов</em></p>
	<h3>DarkMagic 1.12.2<span class="article_anchor_button" id="darkmagic-1-12-2"></span></h3>
	<p><strong>Добавлены моды: </strong><em>Vampires Need Umbrellas, Thaumic Augmentation, Tiny Mob Spawner</em></p>
	<h3>NanoMagic 1.12.2<span class="article_anchor_button" id="nanomagic-1-12-2"></span></h3>
	<p><strong>Добавлены моды: </strong><em>Extra CPUs, AE2 Stuff, ExtraCells 2, Ender IO, Avaritia IO<br></em><strong>Удалены моды: </strong><em>Mekanism, Mekanism Generators, Mekanism Tools</em></p>
	<h3>SpaceX 1.12.2<span class="article_anchor_button" id="spacex-1-12-2"></span></h3>
	<p><strong>Добавлены моды: </strong><em>Extra CPUs, AE2 Stuff, ExtraCells 2</em></p>
	<h3>PixelMon 1.12.2<span class="article_anchor_button" id="pixelmon-1-12-2"></span></h3>
	<p>1) Мод <em>Pixelmon </em><b>обновлен до последней версии 8.4.0</b><br>2) Переработан <em>PokeHunt</em></p>
	<h3>FantasyTech Sky 1.16.5<span class="article_anchor_button" id="fantasytech-sky-1-16-5"></span></h3>
	<p>1) Оптимизирована работа <em>тигелей<br></em>2) Ускорен процесс просеивания через обычное <em>сито:</em> теперь один блок будет просеян за одно нажатие<br>3) Уменьшено время ожидания для призыва существ через <em>бочку<br></em>4) Уменьшено время ожидания для трансформации жидкости в <em>бочке<br></em>5) Блоков, увеличивающих нагрев <em>тигеля </em>для производства лавы, стало больше:</p>
	<p><em>Compressed Crushed Netherrack</em> — 10 ед. нагрева<br><em>Светильник ифрита</em> — 20 ед. нагрева<br><em>Урановые блоки</em> — 30 ед. нагрева<br><em>Блок алхимического угля</em> — 50 ед. нагрева<br><em>Блок топлива мебиуса</em> — 60 ед. нагрева<br><em>Блок эфирного топлива</em> — 80 ед. нагрева<br><em>Блок из темной материи</em> — 100 ед. нагрева<br><em>Блок из красной материи</em> — 150 ед. нагрева</p>
	<p>6) <em>Автоматический молот</em> теперь перерабатывает стак за 1 операцию<br>7) <em>Автоматическое сито</em> теперь перерабатывает стак за 1 операцию<br>8) Все <em>автосита </em>ускорены в 3 раза<br>9) Ускорено появление животных с помощью <em>приманки<br></em>10) Добавлены и переработаны квесты<br>11) Добавлены и переработаны крафты</p>
	<p><strong>Добавлены моды: </strong><em>ProjectEX, Solar Flux Reborn, Custom NPCs<br></em><strong>Удалены моды: </strong><em>Mekanism Generators, Solar Generation, Auxilium</em></p>
	<h3>MysteryMagic 1.16.5<span class="article_anchor_button" id="mysterymagic-1-16-5"></span></h3>
	<p><strong>Добавлены моды: </strong><em>Relics, Storage Drawers, Custom NPCs<br></em><strong>Удалены моды: </strong><em>Tiny Mob Farm, Dungeons</em></p>
	<h3>FantasyTech RPG 1.16.5<span class="article_anchor_button" id="fantasytech-rpg-1-16-5"></span></h3>
	<p><strong>Добавлены моды: </strong><em>Solar Flux Reborn, Productive Bees<br></em><strong>Удалены моды: </strong><em>Mekanism Generators</em></p>
	<h3>Фиксы и исправления<span class="article_anchor_button" id="fixy-i-ispravlenia"></span></h3>
	<h3>LoliMagically 1.7.10<span class="article_anchor_button" id="lolimagically-1-7-10"></span></h3>
	<p>1) Исправлен баг c отрицательным значением крови в <em>кровавом шаре<br></em>2) Теперь <em>улучшенная алхимическая конструкция</em> может взаимодействовать с <em>зеркалами </em>из <em>Thaumcraft<br></em>3) Исправлено взаимодействие с <em>поставщиком эссенции</em> из <em>Thaumic Energistics<br></em>4) Исправлен баг с удалением <em>банки с биркой<br></em>5) Теперь в <em>улучшенной алхимической печи</em> эссенция распределяется по всем слотам для эссенции<br>6) Исправлена работа улучшений <em>удача </em>и <em>скорость<br></em>7) Теперь в <em>инфернальной печи</em> эссенция распределяется по всем слотам для эссенции<br>8) Теперь <em>инфернальная печь</em> может использовать следующие элементы: <em>Алюментум, Нитор, Таум-Слиток, Ртуть, Магический жир, Янтарь, Зачарованная ткань, Фильтр, Фрагмент знаний, Зеркало, Зараженная слизь</em></p>
	<h3>Botanical Machinery 1.7.10<span class="article_anchor_button" id="botanical-machinery-1-7-10"></span></h3>
	<p>Теперь <em>механический бассейн маны</em> может взаимодействовать с <em>вороноками</em>, <em>трубами</em>, <em>интерфейсами </em>и так далее.</p>
	<h3>Applied Energistics 2 1.7.10<span class="article_anchor_button" id="applied-energistics-2-1-7-10"></span></h3>
	<p>1) Исправлен баг с визуальным разбором карточек при нажатии на Shift + ПКМ<br>2) Исправлено отображение количества эссенции в карточках<br>3) Теперь <em>матричный сборщик </em>потребляет эссенцию быстрее<br>4) Теперь <em>пульсирующая центрифуга</em>, <em>МЭ сдавливатель схем</em> и <em>изменчивый агрегатор</em> могут взаимодействовать с <em>МЭ</em> <em>интерфейсами</em></p>
	<h3>LoliDragonMight 1.7.10<span class="article_anchor_button" id="lolidragonmight-1-7-10"></span></h3>
	<p>1) Исправлен баг со слотами в <em>спавнере, наполненном хаосом: </em>если количество предмета превышало свой стак, его невозможно было забрать<br>2) Исправлен дюп энергии через <em>беспроводной передатчик EU</em></p>
	<h3>LoliChaosMagic 1.7.10<span class="article_anchor_button" id="lolichaosmagic-1-7-10"></span></h3>
	<p><strong>Изменения в балансе<br></strong>1) Способность на Shift + ПКМ у <em>темной инфузии</em> теперь не потребляет так много энергии, как раньше<br>2) <em>Белая инфузия</em> теперь не расходует энергию за снятие негативных эффектов и расходует меньше за сохранение жизни<br>3) Пробиваемость <em>темной инфузии </em>повышена<br>4) Теперь <em>анти-вампирический меч</em> убивает обычных вампиров за один удар<br>5) Уровень пассивных эффектов у PvP-куклы повышен на 1<br>6) Квест с убийством мобов был изменен, теперь требуется убить не 50 000 мобов, а только 3 000<br>7) Эффективность <em>инвентарных ускорителей</em> снижена<br>8) Теперь <em>броня хаоса </em>имеет повышенную защиту, уменьшает урон в 80 раз</p>
	<p><strong>Исправления<br></strong>1) <em>Лоствейн </em>3 уровня больше не делает игроков невидимыми<br>2) Теперь при убийстве <em>лоствейном </em>дроп выпадает корректно<br>3. Теперь <em>измеритель инфузии</em> выводит сообщение в основной чат<br>4. У <em>лоствейна</em> 3 уровня больше нет частиц<br>5. Теперь 9 квест с <em>ядром туманности</em> работает корректно<br>6. Теперь противник не регенирирует при ударе по нему с <em>темной инфузией<br></em>7. Исправлен краш с <em>маской ярости</em></p>
	<h3>Blood Magic 1.7.10<span class="article_anchor_button" id="blood-magic-1-7-10"></span></h3>
	<p>Исправлен баг с отрицательным значением крови</p>
	<h3>Forestry 1.7.10<span class="article_anchor_button" id="forestry-1-7-10"></span></h3>
	<p>1) Механизмы ускорены в 8 раз<br>2) Исправлен дюп сот</p>
	<h3>Advent Of Ascension 1.7.10<span class="article_anchor_button" id="advent-of-ascension-1-7-10"></span></h3>
	<p>Добавлена проверка на приват мобу <em>землянин</em></p>
	<h3>Witchery 1.7.10<span class="article_anchor_button" id="witchery-1-7-10"></span></h3>
	<p>1) Исправлены баги во взаимодействии с модом <em>Advent Of Ascension<br></em>2) Добавлена проверка на приват <em>twisting band</em></p>
	<h3>Tainted Magic 1.7.10<span class="article_anchor_button" id="tainted-magic-1-7-10"></span></h3>
	<p>1) Исправлен краш<br>2) Исправлена работа <em>thaumic disassembler</em></p>
	<h3>Minechem 1.7.10<span class="article_anchor_button" id="minechem-1-7-10"></span></h3>
	<p>1) Исправлен баг с <em>проектором<br></em>2) Эффект <em>радиации </em>больше не наносит урон</p>
	<h3>Alfheim 1.7.10<span class="article_anchor_button" id="alfheim-1-7-10"></span></h3>
	<p>1) Исправлен краш<br>2) Оптимизирована прогрузка мира</p>
	<h3>Matter Overdrive 1.7.10<span class="article_anchor_button" id="matter-overdrive-1-7-10"></span></h3>
	<p>1) Исправлен баг с зарядом стака блоков c такими же затратами, как за один блок<br>2) Исправлен баг с бесконечной энергией в <em>реакторе</em></p>
	<h3>AE2 Stuff 1.7.10<span class="article_anchor_button" id="ae2-stuff-1-7-10"></span></h3>
	<p>Теперь <em>высекатель</em> перерабатывает стак за 1 операцию</p>
	<h3>Forgotten Relics 1.7.10<span class="article_anchor_button" id="forgotten-relics-1-7-10"></span></h3>
	<p>1) Исправлен краш<br>2) Улучшена проверка на приват <em>эдикту тысячи проклятых душ<br></em>3) Улучшена проверка на приват <em>Апофеозу<br></em>4) Улучшена проверка на приват <em>тому лунных огней<br></em>5) Улучшена проверка на приват <em>древнему заклятию</em></p>
	<h3>Extra Utilities 1.7.10<span class="article_anchor_button" id="extra-utilities-1-7-10"></span></h3>
	<p>1) Исправлен баг со сменой метадаты<br>2) Ускорена работа <em>флаксового кристалла</em>, теперь он ускоряет <em>сборщик QED</em> так, как ранее ускоряли 10 таких кристаллов</p>
	<h3>Mekanism 1.7.10<span class="article_anchor_button" id="mekanism-1-7-10"></span></h3>
	<p>Исправлен дюп жидкости через <em>электрическую помпу</em></p>
	<h3>Thermal Expansion 1.7.10<span class="article_anchor_button" id="thermal-expansion-1-7-10"></span></h3>
	<p>Исправлен дюп чар</p>
	<h3>ExtraCells 2 1.7.10<span class="article_anchor_button" id="extracells-2-1-7-10"></span></h3>
	<p>Исправлен дюп через <em>цистерну</em></p>
	<h3>Thaumic Exploration 1.7.10 <span class="article_anchor_button" id="thaumic-exploration-1-7-10"></span></h3>
	<p>1) Исправлен баг с миганием неба и зачарованием <em>ночное зрение<br></em>2) Исправлен дюп <em>oblivion jar</em></p>
	<h3>Twilight Forest 1.7.10<span class="article_anchor_button" id="twilight-forest-1-7-10"></span></h3>
	<p>1) Исправлен дюп с <em>посохом смерти<br></em>2) Исправлен гриф с <em>ядром дерева сортировки</em></p>
	<h3>Witching Gadgets 1.7.10<span class="article_anchor_button" id="witching-gadgets-1-7-10"></span></h3>
	<p>Исправлена работа <em>thaumic sauna stove</em></p>
	<h3>Alfheim 1.7.10<span class="article_anchor_button" id="alfheim-1-7-10-2"></span></h3>
	<p>Улучшена проверка на приват</p>
	<h3>Thaumic Tinkerer 1.7.10<span class="article_anchor_button" id="thaumic-tinkerer-1-7-10"></span></h3>
	<p>Исправлен баг с проверкой NBT</p>
	<h3>Ender IO 1.7.10<span class="article_anchor_button" id="ender-io-1-7-10"></span></h3>
	<p>1) Исправлен баг с приватами<br>2) Исправлен краш</p>
	<h3>Forge 1.12.2<span class="article_anchor_button" id="forge-1-12-2"></span></h3>
	<p>1) Проведена оптимизация работы <em>редстоуна<br></em>2) Исправлено 3 краша</p>
	<h3>Pixelmon 1.12.2<span class="article_anchor_button" id="pixelmon-1-12-2-2"></span></h3>
	<p>1) Мод <strong>обновлен до последней версии 8.4.0<br></strong>2) Исправлены краши</p>
	<h3>Thaumic Augmentation 1.12.2<span class="article_anchor_button" id="thaumic-augmentation-1-12-2"></span></h3>
	<p>1) Добавлена проверка на приваты<br>2) Оптимизирована работа линз</p>
	<h3>IndustrialCraft 2 1.12.2<span class="article_anchor_button" id="industrialcraft-2-1-12-2"></span></h3>
	<p>1) Исправлен дюп с <em>промышленным верстаком</em> и <em>кузнечным молотом<br></em>2) Исправлено 4 краша</p>
	<h3>ExtraBotany 1.12.2<span class="article_anchor_button" id="extrabotany-1-12-2"></span></h3>
	<p>1) Добавлено взаимодействие воль из <em>Botania </em>с <em>головным убором боевой горничной Плеяды<br></em>2) Исправлено 3 краша</p>
	<h3>Blood Magic 1.12.2<span class="article_anchor_button" id="blood-magic-1-12-2"></span></h3>
	<p>1) Исправлен дюп <em>разумных инструментов</em> и <em>оружия </em>с зачарованием на добычу<br>2) Исправлен дюп крови<br>3) Исправлено 4 краша</p>
	<h3>Mekanism 1.12.2<span class="article_anchor_button" id="mekanism-1-12-2"></span></h3>
	<p>Исправлен краш</p>
	<h3>Forestry 1.12.2<span class="article_anchor_button" id="forestry-1-12-2"></span></h3>
	<p>1) Исправлен дюп<br>2) Механизмы ускорены в 8 раз</p>
	<h3>LazierAE2 1.12.2<span class="article_anchor_button" id="lazierae2-1-12-2"></span></h3>
	<p>Исправлен краш</p>
	<h3>Ice and Fire 1.12.2<span class="article_anchor_button" id="ice-and-fire-1-12-2"></span></h3>
	<p>Исправлен дюп с <em>пикси</em></p>
	<h3>ExtraCells 1.12.2<span class="article_anchor_button" id="extracells-1-12-2"></span></h3>
	<p>Исправлен дюп со <em>взрывоустойчивым накопителем</em></p>
	<h3>Create 1.16.5<span class="article_anchor_button" id="create-1-16-5"></span></h3>
	<p><em>Схематическая пушка</em> больше не строит в чужих приватах</p>
	<h3>Applied Energistics 2 1.16.5<span class="article_anchor_button" id="applied-energistics-2-1-16-5"></span></h3>
	<p>Добавлена проверка на остаток прочности предмета</p>
	<h3>Mana and Artifice 1.16.5<span class="article_anchor_button" id="mana-and-artifice-1-16-5"></span></h3>
	<p>Мод обновлен до последней версии</p>
	<h3>ExtraBotany 1.16.5<span class="article_anchor_button" id="extrabotany-1-16-5"></span></h3>
	<p><em>Ring of Sacred Sun </em>больше не флудит сообщениями в чат</p>
	<h3>Mekanism 1.16.5<span class="article_anchor_button" id="mekanism-1-16-5"></span></h3>
	<p>Исправлен дюп с <em>атомным разборщиком</em></p>
	<h3>Astral Sorcery 1.16.5<span class="article_anchor_button" id="astral-sorcery-1-16-5"></span></h3>
	<p>1) <em>Formation wand</em> больше не ставит блоки в привате<br>2) Исправлен дюп с <em>formation wand<br></em>3) Исправлено 6 крашей</p>
	<h3>Thermal Expansion 1.16.5<span class="article_anchor_button" id="thermal-expansion-1-16-5"></span></h3>
	<p>1) Исправлено 3 краша<br>2) Исправлен баг с <em>последовательным сборщиком<br></em>3) <em>Магмовый тигель</em> теперь преобразует стак за 1 операцию<br>4) <em>Центробежный сборщик</em> теперь крафтит стак за 1 операцию</p>
	<h3>Industrial Foregoing 1.16.5<span class="article_anchor_button" id="industrial-foregoing-1-16-5"></span></h3>
	<p>1) Исправлен баг с <em>жидкостным экстрактором<br></em>2) Оптимизирована работа <em>жидкостного экстрактора<br></em>3) Исправлено 3 краша</p>
	<h3>Botania 1.16.5<span class="article_anchor_button" id="botania-1-16-5"></span></h3>
	<p>1) Исправлен дюп с <em>воротком<br></em>2) Исправлен дюп с <em>лепестковым аптекарем<br></em>3) Исправлено 7 крашей<br>4) Оптимизирована работа <em>распространителя маны<br></em>5) <em>Линза: вспышка</em> больше не ставит блок света в чужих приватах<br>6) <em>Астролябия </em>больше не ставит в чужих приватах<br>7) <em>Жезл обмена</em> больше не заменяет в чужих приватах<br>8) Отключены взрывы у <em>manastorm charge</em></p>
	<h3>Tiny Mob Farm 1.16.5<span class="article_anchor_button" id="tiny-mob-farm-1-16-5"></span></h3>
	<p>1) Лут с мобов генерируется только при наличии хранилища<br>2) Оптимизирована работа ферм мобов<br>3) Исправлен дюп с не закрывающимся при разрушении блока интерфейсами</p>
	<h3>Storage Drawers 1.16.5<span class="article_anchor_button" id="storage-drawers-1-16-5"></span></h3>
	<p>1) Исправлен краш<br>2) Исправлен дюп с хранилищами</p>
	<h3>Kimetsu no Yaiba 1.16.5<span class="article_anchor_button" id="kimetsu-no-yaiba-1-16-5"></span></h3>
	<p>1) Исправлен дюп опыта<br>2) Оптимизирована работа способностей</p>
	<h3>ProjectE 1.16.5<span class="article_anchor_button" id="projecte-1-16-5"></span></h3>
	<p>1) Исправлен дюп с <em>катаром<br></em>2) Оптимизирована работа сборщиков</p>
	<h3>Occultism 1.16.5<span class="article_anchor_button" id="occultism-1-16-5"></span></h3>
	<p>1) Исправлен краш<br>2) Исправлен баг с опустошением хранилища<br>3) Исправлен дюп с <em>контроллером</em></p>
	<h3>Extended Crafting 1.16.5<span class="article_anchor_button" id="extended-crafting-1-16-5"></span></h3>
	<p>Исправлен дюп с <em>квантовым компрессором</em></p>
	<h3>Vampirism 1.16.5<span class="article_anchor_button" id="vampirism-1-16-5"></span></h3>
	<p>Исправлен краш</p>
	<h3>Werewolves 1.16.5<span class="article_anchor_button" id="werewolves-1-16-5"></span></h3>
	<p>Исправлен краш</p>
	<h3>Ice and Fire 1.16.5<span class="article_anchor_button" id="ice-and-fire-1-16-5"></span></h3>
	<p>Исправлен дюп <em>яиц дракона</em></p>
	<h2>Заключение<span class="article_anchor_button" id="zaklyuchenie"></span></h2>
	<p>Спасибо, что остаетесь с нами. Мы обязательно продолжим радовать вас новыми разработками и нововведениями. Зовите друзей и успейте первыми исследовать сервер после вайпа!</p>
	<p>Мир LoliLand уже ждет вас: <a href="/start" target="_blank" rel="nofollow noopener">Начать игру &gt;</a></p>
	<img src="https://static.loliland.ru/posts/spring_wipe_2022/r91.jpg" width="709px" style="margin-left: -17px;">
</div>


        </div-->
    </div>
</div>
</template>

<script>
    import axios from 'axios'
    import * as main from '../main.js';
    import { API } from '@/main.js'; 

    export default {
        name: 'PostFull',
        data () {
            return {
                post: null
            }
		},
		computed: {
            API() {
                return API;
            }
        },
        methods: {
            getDate(value) {
                var format = "%d %m %y";
                return main.getDate(format, value);
            }
        },
        created() {
            var url = API + "post.get?id=" + this.$route.params.id
            axios.get(url).then(res => {
                this.post = res.data.post
            });
        },
        /*beforeRouteLeave (to, from, next) {
            const answer = window.confirm('Вы хотите уйти? У вас есть несохранённые изменения!')
            if (answer) {
                next()
            } else {
                next(false)
            }
        }*/
    }
</script>

<style scoped>
    .poster_wrapper {
        margin-left: -17px;
        margin-top: -19px;
    }

    .post_content {
        margin-top: 10px;
        font-size: 15.5px;
        text-align: justify;
    }
    
.bc-comment-reply-wrap {
  transition: all .2s ease;
}
.bc-comment-form .bc-comment-reply {
  position: relative;
  margin: 0;
}
.bc-comment-reply-content {
  display: block;
  position: relative;
  padding-left: 10px;
  margin-top: 2px;
  margin-bottom: 5px;
  min-height: 41px;
}
a.bc-comment-reply-content {
  color: #000;
  cursor: pointer;
}
a.bc-comment-reply-content:hover,
a.bc-comment-reply-content:focus {
  color: inherit;
  text-decoration: none;
}
.bc-comment-reply-content:before {
  position: absolute;
  content: '';
  left: 0;
  top: 3px;
  bottom: 4px;
  border-left: 2px solid #2b8bd9;
  border-radius: 1px;
}
.bc-comment-reply-content .bc-comment-head {
  font-weight: 500;
  color: #2481CC;
}
.bc-comment-reply-content .bc-comment-text {
  margin-top: -1px;
}
.bc-comment-reply-content .bc-comment-head,
.bc-comment-reply-content .bc-comment-text {
  font-size: 14px;
  line-height: 21px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bc-comment-form-box {
  display: flex;
  flex-direction: row;
}
.bc-comment-input-wrap {
  position: relative;
  margin-right: 9px;
  flex-grow: 1;
}
.bc-attach-btn {
  position: absolute;
  right: 0;
  transition: all .2s ease;
  background-color: transparent;
}
.btn.bc-attach-btn {
  z-index: 1;
  padding: 8px 9px;
  margin: 5px;
  border-radius: 18px;
}
.bc-attach-btn:before {
  content: '';
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 18px;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='18' viewBox='0 0 16 18' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m8.554 6.442c.393 0 .711.318.711.711v6.326c0 .682.553 1.235 1.235 1.235.682 0 1.235-.553 1.235-1.235v-7.419c0-1.467-1.19-2.657-2.657-2.657-1.467 0-2.657 1.19-2.657 2.657v8.228c0 2.252 1.826 4.078 4.078 4.078 2.252 0 4.078-1.826 4.078-4.078v-4.628-.224c0-.393.318-.711.711-.711.393 0 .711.318.711.711v.224 4.609c0 3.038-2.462 5.5-5.5 5.5-3.038 0-5.5-2.462-5.5-5.5v-8.191c0-2.252 1.826-4.078 4.078-4.078 2.252 0 4.078 1.826 4.078 4.078v7.382c0 1.467-1.19 2.657-2.657 2.657-1.467 0-2.657-1.19-2.657-2.657v-6.307c0-.393.318-.711.711-.711z' fill='%239aa3ae' fill-rule='evenodd' stroke='%2382878b' stroke-width='.2' transform='matrix(-.707 -.707 .707 -.707 7.228 24.006)'/%3E%3C/svg%3E");
}
.bc-comment-input-wrap .input.bc-comment-input {
  font-size: 15px;
  line-height: 22px;
  padding: 10px 44px 10px 16px;
  border-radius: 22px;
  border: 1px solid #DDE4EB;
  box-shadow: none;
  color: #1c1c1c;
  max-height: 132px;
  transition: background-color .2s ease, border .2s ease;
}
.bc-comment-input-wrap .input.empty.bc-comment-input {
  background-color: #f5f6f7;
  border: 1px solid #f5f6f7;
}
.bc-comment-input-wrap .input.bc-comment-input:focus {
  box-shadow: none;
  background-color: #fff;
  border: 1px solid #dde4eb;
}
.bc-comment-input-wrap .input.empty[data-placeholder]:before {
  font-size: 15px;
  line-height: 22px;
  padding-left: 16px;
  padding-right: 16px;
  color: #b1b5ba;
}
.bc-comment-input-wrap .input.empty[data-placeholder]:focus:before {
  color: transparent;
}
.bc-comment-reply {
  padding: 4px 0 9px 17px;
  position: relative;
}
.bc-comment-reply-content {
  margin-top: 0;
  margin-bottom: 0;
}
.bc-submit-comment-btn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: #4ba3e2;
  padding: 0;
}
.bc-submit-comment-btn:hover {
  background-color: #3f99d9;
}
.bc-submit-comment-btn:before {
  display: inline-block;
  content: '';
  width: 20px;
  height: 20px;
  margin: 12px 10px 12px 14px;
  vertical-align: top;
  position: relative;
  background: url('data:image/svg+xml,%3Csvg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m4.536 56.92 51.085-25.568c1.581-.791 2.22-2.713 1.429-4.293-.309-.619-.811-1.12-1.429-1.43l-51.05-25.55c-1.581-.791-3.503-.151-4.294 1.429-.302.603-.406 1.287-.296 1.952l3.077 18.692c.195 1.182 1.157 2.087 2.349 2.208l27.578 2.806c.441.045.781.41.794.853l.015.468c.021.694-.509 1.282-1.201 1.333l-27.11 1.986c-1.228.09-2.232 1.013-2.426 2.228l-3.113 19.521c-.278 1.745.911 3.385 2.656 3.664.661.105 1.338.001 1.936-.299z" fill="%23fff" fill-rule="evenodd" transform="scale(.3333) translate(0 2)"/%3E%3C/svg%3E') no-repeat;
}
.bc-edit-comment-form .bc-submit-comment-btn:before {
  display: inline-block;
  content: '';
  width: 18px;
  height: 13px;
  margin: 17px 12px 14px 14px;
  vertical-align: top;
  position: relative;
  background: url('data:image/svg+xml,%3Csvg height="13" viewBox="0 0 18 13" width="18" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fff" transform="matrix(.707 -.707 .707 .707 0 6.55)"%3E%3Crect height="8.667" rx="1.167" width="2.333"/%3E%3Crect height="2.333" rx="1.167" width="16" x=".333" y="6.333"/%3E%3C/g%3E%3C/svg%3E') no-repeat;
}
.bc-action-btn,
.bc-reply-btn,
.bc-edit-btn,
.bc-edit-cancel-btn {
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: #9DA2A6;
  float: right;
  margin-left: 15px;
  cursor: pointer;
}
.bc-action-btn:hover,
.bc-reply-btn:hover,
.bc-edit-btn:hover,
.bc-edit-cancel-btn:hover {
  color: #9DA2A6;
  text-decoration: underline;
}
.bc-action-btn:focus,
.bc-reply-btn:focus,
.bc-edit-btn:focus,
.bc-edit-cancel-btn:focus {
  text-decoration: none;
}
.bc-reply-close.close {
  top: 0;
  right: 0;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  margin: 3px 5px 0px 14px;
      float: right;
}
.bc-load-more {
  font-weight: 500;
  padding: 9px 15px 8px;
  margin: 12px -15px 7px;
  text-align: center;
  background-color: #4ba3e2;
  color: #fff;
  cursor: pointer;
}
.bc-load-more:hover {
  background-color: #3f99d9;
}
@media (min-width: 494px) {
  .bc-load-more {
    margin-left: -8px;
    margin-right: -8px;
    border-radius: 3px;
  }
}

.bc-list-empty-wrap {
  transition: opacity .2s ease, visibility .2s ease;
}
.bc-list-empty-wrap.ohide {
  height: 0;
}
.bc-list-empty {
  font-size: 14px;
  line-height: 22px;
  color: #70767b;
  padding: 32px 0;
  text-align: center;
}

.bc-post {
  margin: 25px -3px 25px 0;
}
.bc-post iframe {
  vertical-align: top;
}
.bc-post * {
    box-sizing: content-box;
}
.bc-post .tgme_widget_message_user_photo,
.bc-post .tgme_widget_message_user_photo img {
  font-size: 17px;
  vertical-align: middle;
  line-height: 38px;
  width: 38px;
  height: 38px;
  border-radius: 19px;
}
.bc-post .tgme_widget_message_bubble {
  margin-left: 0;
}


.bc-comment {
  display: block;
  font-size: 14px;
  line-height: 22px;
  padding: 7px;
  margin: 0 -15px;
  position: relative;
  min-height: 58px;
  transition: all .2s ease;
}
a.bc-comment:hover {
  text-decoration: none;
}
a.bc-comment:focus {
  box-shadow: none;
  outline: none;
  text-decoration: none;
}
.bc-comment-photo {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 38px;
  height: 38px;
  border-radius: 22px;
  background: #efefef;
  text-align: center;
  overflow: hidden;
  margin-right: 12px;
  float: left;
}
a.bc-comment-photo:hover,
a.bc-comment-photo:focus {
  text-decoration: none;
}
.bc0 { background-color: #e56555; } .tc0, .tc0:hover { color: #ca5650; }
.bc1 { background-color: #f28c48; } .tc1, .tc1:hover { color: #d87b29; }
.bc2 { background-color: #8e85ee; } .tc2, .tc2:hover { color: #7170d5; }
.bc3 { background-color: #76c84d; } .tc3, .tc3:hover { color: #50b232; }
.bc4 { background-color: #5fbed5; } .tc4, .tc4:hover { color: #55a8bd; }
.bc5 { background-color: #549cdd; } .tc5, .tc5:hover { color: #4e92cc; }
.bc6 { background-color: #f2749a; } .tc6, .tc6:hover { color: #e5638a; }

.bc-comment-photo img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.bc-comment-photo:before {
  content: attr(data-content);
  font-size: 15px;
  vertical-align: middle;
  line-height: 40px;
  color: #fff;
}
.bc-comment-author-flex {
  padding-bottom: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.bc-comment-author-flex .bc-comment-author-name {
  overflow: hidden;
  margin-right: 0;
  flex-shrink: 1;
  font-weight: 500;
}
.bc-comment-author-flex .bc-comment-author-name > .name {
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bc-comment-author-flex .bc-comment-date,
.bc-comment-author-flex .bc-comment-voting {
  white-space: nowrap;
  margin-top: 2px;
  margin-left: 8px;
  line-height: 20px;
}
.bc-comment-author-flex .bc-comment-actions {
  margin-right: -5px;
  padding-left: 3px;
  white-space: nowrap;
  text-align: right;
  flex-grow: 1;
}
.bc-comment-author-flex .bc-comment-actions .bc-reply-btn,
.bc-comment-author-flex .bc-comment-actions .bc-edit-btn,
.bc-comment-author-flex .bc-comment-actions .bc-edit-cancel-btn {
  margin-left: 12px;
  float: none;
}
.bc-comment-author {
  font-size: 15px;
  font-weight: 500;
  color: #000;
  margin-bottom: 1px;
}

.bc-comment-like,
.bc-comment-dislike {
  position: relative;
  pointer-events: visible;
  display: inline-block;
  vertical-align: 0;
  font-size: 13px;
  font-weight: 500;
  color: #9DA2A6;
  height: 18px;
  cursor: pointer;
  /*transition: color .2s ease;*/
}
.bc-comment-dislike {
  display: none;
  margin-left: 15px;
}
.bc-comment-like:before,
.bc-comment-dislike:before {
  display: inline-block;
  content: '';
  width: 16px;
  height: 16px;
  vertical-align: top;
  position: relative;
}
.bc-comment-like:before {
  top: 1px;
  background: url('data:image/svg+xml,%3Csvg height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m3.34712935 19.8555842 5.45197263-10.57316098c.73509745-1.27167797 2.06235672-4.28242322 3.51213222-4.28242322h18.305758c1.9476378 0 3.3830078.57849476 3.3830078 1.29101894v20.02892816c0 1.1233158-.799747 2.2042421-1.5756832 3.009638l-12.6053622 11.6567657c-1.4805025.0922093-2.452447-.282783-2.9158337-1.1249768-.6950799-1.2632903-.5310974-3.154234-.4290005-3.6205157l2.1175956-10.1419572h-11.50784136c-2.24613106 0-4.08387464.0726838-4.08387464-2.2587259v-2.2890204c0-.5934497.12251624-1.1657048.34712935-1.6955706zm36.31953735-14.8555842h2.6666666c1.4727592 0 2.6666667 1.17525253 2.6666667 2.625v15.75c0 1.4497475-1.1939075 2.625-2.6666667 2.625h-2.6666666c-1.4727592 0-2.6666667-1.1752525-2.6666667-2.625v-15.75c0-1.44974747 1.1939075-2.625 2.6666667-2.625z" fill="%23a6afba" transform="matrix(-1 0 0 -1 48 46)"/%3E%3C/svg%3E') no-repeat;
}
body.bc-icons-outlined .bc-comments .bc-comment-like:before,
.bc-preview-wrap.bc-icons-outlined .bc-comment-like:before {
  background: url('data:image/svg+xml,%3Csvg height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%23969A9E" stroke-width="3.344444" transform="matrix(1 0 0 -1 2 42)"%3E%3Cpath d="m11.1111265 15.6710938 5.6718102-11.15358339c.7647385-1.3414878 3.6569939-4.51751041 6.5469895-4.51751041h12.1506544c2.0261715 0 7.4921245.09098884 7.4921245.84262763l.0272949 21.64769577c0 1.1849811-.8319949 2.3252457-1.6392189 3.1748546l-13.1136429 12.3204235c-1.5402001.0972713-2.551336-.2983066-3.0334075-1.1867333-.7231074-1.3326397-.5525127-2.3773883-.446299-2.869267l1.9891906-10.5396862c.097874-.5185835-.2431784-1.0183211-.761762-1.1161951-.0584277-.0110273-.1177573-.0165771-.1772166-.0165771h-10.8190967c-2.3367009 0-4.248547.0766739-4.248547-2.3827205v-2.414678c0-.6260277.1274564-1.2296972.3611265-1.7886505z" transform="matrix(-1 0 0 1 53.75 0)"/%3E%3Cpath d="m2.9 0h7.85v23.8027778h-7.85c-1.18741221 0-2.15-.9625878-2.15-2.15v-19.5027778c0-1.18741221.96258779-2.15 2.15-2.15z"/%3E%3C/g%3E%3C/svg%3E') no-repeat;
}
.liked .bc-comment-like:before,
body.bc-icons-outlined .bc-comments .liked .bc-comment-like:before,
.bc-preview-wrap.bc-icons-outlined .liked .bc-comment-like:before {
  background: url('data:image/svg+xml,%3Csvg height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m3.34712935 19.8555842 5.45197263-10.57316098c.73509745-1.27167797 2.06235672-4.28242322 3.51213222-4.28242322h18.305758c1.9476378 0 3.3830078.57849476 3.3830078 1.29101894v20.02892816c0 1.1233158-.799747 2.2042421-1.5756832 3.009638l-12.6053622 11.6567657c-1.4805025.0922093-2.452447-.282783-2.9158337-1.1249768-.6950799-1.2632903-.5310974-3.154234-.4290005-3.6205157l2.1175956-10.1419572h-11.50784136c-2.24613106 0-4.08387464.0726838-4.08387464-2.2587259v-2.2890204c0-.5934497.12251624-1.1657048.34712935-1.6955706zm36.31953735-14.8555842h2.6666666c1.4727592 0 2.6666667 1.17525253 2.6666667 2.625v15.75c0 1.4497475-1.1939075 2.625-2.6666667 2.625h-2.6666666c-1.4727592 0-2.6666667-1.1752525-2.6666667-2.625v-15.75c0-1.44974747 1.1939075-2.625 2.6666667-2.625z" fill="%233da0f0" transform="matrix(-1 0 0 -1 48 46)"/%3E%3C/svg%3E') no-repeat;
}
.bc-comment-dislike:before {
  top: 3px;
  background: url('data:image/svg+xml,%3Csvg height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m3.34712935 22.8555842 5.45197263-10.573161c.73509745-1.271678 2.06235672-4.2824232 3.51213222-4.2824232h18.305758c1.9476378 0 3.3830078.57849476 3.3830078 1.29101894v20.02892816c0 1.1233158-.799747 2.2042421-1.5756832 3.009638l-12.6053622 11.6567657c-1.4805025.0922093-2.452447-.282783-2.9158337-1.1249768-.6950799-1.2632903-.5310974-3.154234-.4290005-3.6205157l2.1175956-10.1419572h-11.50784136c-2.24613106 0-4.08387464.0726838-4.08387464-2.2587259v-2.2890204c0-.5934497.12251624-1.1657048.34712935-1.6955706zm36.31953735-14.8555842h2.6666666c1.4727592 0 2.6666667 1.17525253 2.6666667 2.625v15.75c0 1.4497475-1.1939075 2.625-2.6666667 2.625h-2.6666666c-1.4727592 0-2.6666667-1.1752525-2.6666667-2.625v-15.75c0-1.44974747 1.1939075-2.625 2.6666667-2.625z" fill="%23a6afba" transform="matrix(-1 0 0 1 48 0)"/%3E%3C/svg%3E') no-repeat;
}
body.bc-icons-outlined .bc-comments .bc-comment-dislike:before,
.bc-preview-wrap.bc-icons-outlined .bc-comment-dislike:before {
  background: url('data:image/svg+xml,%3Csvg height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" stroke="%23969A9E" stroke-width="3.344444" transform="translate(2 7)"%3E%3Cpath d="m11.1111265 15.6710938 5.6718102-11.15358339c.7647385-1.3414878 3.6569939-4.51751041 6.5469895-4.51751041h12.1506544c2.0261715 0 7.4921245.09098884 7.4921245.84262763l.0272949 21.64769577c0 1.1849811-.8319949 2.3252457-1.6392189 3.1748546l-13.1136429 12.3204235c-1.5402001.0972713-2.551336-.2983066-3.0334075-1.1867333-.7231074-1.3326397-.5525127-2.3773883-.446299-2.869267l1.9891906-10.5396862c.097874-.5185835-.2431784-1.0183211-.761762-1.1161951-.0584277-.0110273-.1177573-.0165771-.1772166-.0165771h-10.8190967c-2.3367009 0-4.248547.0766739-4.248547-2.3827205v-2.414678c0-.6260277.1274564-1.2296972.3611265-1.7886505z" transform="matrix(-1 0 0 1 53.75 0)"/%3E%3Cpath d="m2.9 0h7.85v23.8027778h-7.85c-1.18741221 0-2.15-.9625878-2.15-2.15v-19.5027778c0-1.18741221.96258779-2.15 2.15-2.15z"/%3E%3C/g%3E%3C/svg%3E') no-repeat;
}
.disliked .bc-comment-dislike:before,
body.bc-icons-outlined .bc-comments .disliked .bc-comment-dislike:before,
.bc-preview-wrap.bc-icons-outlined .disliked .bc-comment-dislike:before {
  background: url('data:image/svg+xml,%3Csvg height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m3.34712935 22.8555842 5.45197263-10.573161c.73509745-1.271678 2.06235672-4.2824232 3.51213222-4.2824232h18.305758c1.9476378 0 3.3830078.57849476 3.3830078 1.29101894v20.02892816c0 1.1233158-.799747 2.2042421-1.5756832 3.009638l-12.6053622 11.6567657c-1.4805025.0922093-2.452447-.282783-2.9158337-1.1249768-.6950799-1.2632903-.5310974-3.154234-.4290005-3.6205157l2.1175956-10.1419572h-11.50784136c-2.24613106 0-4.08387464.0726838-4.08387464-2.2587259v-2.2890204c0-.5934497.12251624-1.1657048.34712935-1.6955706zm36.31953735-14.8555842h2.6666666c1.4727592 0 2.6666667 1.17525253 2.6666667 2.625v15.75c0 1.4497475-1.1939075 2.625-2.6666667 2.625h-2.6666666c-1.4727592 0-2.6666667-1.1752525-2.6666667-2.625v-15.75c0-1.44974747 1.1939075-2.625 2.6666667-2.625z" fill="%233da0f0" transform="matrix(-1 0 0 1 48 0)"/%3E%3C/svg%3E') no-repeat;
}
.bc-comment-like .value,
.bc-comment-dislike .value {
  margin-left: 4px;
}
.bc-comment-like .value:empty,
.bc-comment-dislike .value:empty {
  margin-left: 0;
}
.liked .bc-comment-like,
.disliked .bc-comment-dislike {
  color: #2b8fe1;
}

.bc-more-btn {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  vertical-align: top;
  margin: -1px 0;
  background: url('data:image/svg+xml,%3Csvg height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23C9CDD1" fill-rule="evenodd"%3E%3Ccircle cx="38.999018" cy="24.00123" r="5" transform="matrix(.05233596 .99862953 -.99862953 .05233596 60.926304 -16.200469)"/%3E%3Ccircle cx="8.999018" cy="24.00123" r="5" transform="matrix(.05233596 .99862953 -.99862953 .05233596 32.496383 13.758418)"/%3E%3Ccircle cx="23.999018" cy="24.00123" r="5" transform="matrix(.05233596 .99862953 -.99862953 .05233596 46.711344 -1.221026)"/%3E%3C/g%3E%3C/svg%3E') no-repeat center;
}
.bc-more-btn.dropdown-toggle:hover,
.open .bc-more-btn.dropdown-toggle {
  background-color: #f5f6f7;
}

.like-tooltip-wrap {
  position: absolute;
  width: 270px;
  left: 0;
  bottom: 100%;
  text-align: left;
  pointer-events: none;
  margin-bottom: 7px;
  z-index: 1;
}
.like-tooltip {
  display: inline-block;
  max-width: 100%;
  font-weight: normal;
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  border-radius: 3px;
  background: rgba(64, 64, 64, .95);
  padding: 8px 15px;
  color: #fff;
  z-index: 4;
  text-transform: none;
  pointer-events: none;
  transition: all .15s ease;
  transform: translateY(-10px);
  visibility: hidden;
  opacity: 0;
  cursor: auto;
}
.like-tooltip:after {
  content: '';
  border: solid;
  border-width: 6px 8px;
  border-color: rgba(64, 64, 64, .95) transparent transparent;
  display: inline-block;
  position: absolute;
  top: 100%;
  left: 18px;
  right: auto;
  margin: 0 -8px;
}
:hover > .like-tooltip-wrap .like-tooltip {
  transition-delay: .3s;
  transform: translateY(0);
  visibility: visible;
  opacity: 1;
}
:hover > .like-tooltip-wrap.tt-hidden .like-tooltip {
  transition-delay: 0s;
  transform: translateY(-10px);
  visibility: hidden;
  opacity: 0;
}


.bc-comment {
  border-radius: 2px;
  background: transparent;
}
.bc-comment.highlight {
  background: #f0f6fa;
}
.bc-comment .anchor {
  position: absolute;
  top: -60px;
}
.bc-comment-body {
  margin-left: 50px;
  margin-right: 5px;
}
.bc-comment-author-name {
  margin-right: 4px;
}
.bc-comment-date {
  font-size: 13px;
  font-weight: normal;
  white-space: nowrap;
  color: #9DA2A6;
}
.bc-comment-date:hover,
.bc-comment-date:focus {
  color: #9DA2A6;
}
.bc-comment-date:focus {
  text-decoration: none;
}
.bc-comment-text {
  font-size: 15px;
  line-height: 21px;
  word-break: break-word;
  margin-bottom: -1px;
}
.bc-comment-footer {
  line-height: 20px;
  padding-top: 5px;
}
.bc-comment-footer .bc-action-btn {
  color: #9DA2A6;
  -webkit-font-smoothing: antialiased;
  float: none;
}
body.bc-icons-outlined .bc-comments .bc-comment-footer .bc-action-btn,
.bc-preview-wrap.bc-icons-outlined .bc-comment-footer .bc-action-btn {
  font-weight: normal;
  -webkit-font-smoothing: auto;
}
.bc-comment-edit {
  transition: all .2s ease;
}
.bc-comment-edit .bc-comment-form {
  padding: 14px 0;
}
.bc-comment-edit-label {
  font-size: 13px;
  line-height: 18px;
  white-space: nowrap;
  color: #9DA2A6;
  margin-bottom: 2px;
}
.bc-comment .bc-comment-edit-label,
.bc-comment .bc-edit-cancel-btn,
.bc-comment .bc-comment-edit,
.bc-comment.edit .bc-action-btn,
.bc-comment.edit .bc-comment-footer,
.bc-comment.edit .bc-comment-box .bc-comment-reply-content,
.bc-comment.edit .bc-comment-box .bc-comment-file,
.bc-comment.edit .bc-comment-box .bc-comment-text {
  display: none;
}
.bc-comment.edit .bc-comment-edit,
.bc-comment.edit .bc-comment-edit-label {
  display: block;
}
.bc-comment.edit .bc-edit-cancel-btn {
  display: inline;
}
.bc-comment-file-wrap {
  transition: all .2s ease;
  overflow: hidden;
}
.bc-comment-file {
  display: block;
  margin: 6px 0 11px;
}
a.bc-comment-file:hover {
  text-decoration: none;
}
.bc-comment-file-close.close {
  position: absolute;
  top: 0;
  right: 0;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  margin: 0 5px 0 14px;
}
.bc-comment-file-thumb-box {
  /*display: inline-block;*/
  vertical-align: top;
  position: relative;
  max-width: 320px;
}
.bc-comment-form .bc-comment-file-thumb-box {
  border-radius: 2px;
  padding-right: 53px;
  max-width: 100%;
  overflow: hidden;
}
.bc-comment-file-thumb-wrap {
  max-width: 100%;
}
.bc-comment-file-thumb {
  vertical-align: top;
  background: #efefef no-repeat center;
  background-size: cover;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
}
.bc-comment-file-thumb:before {
  content: '';
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background: #fff;
  visibility: hidden;
  opacity: 0;
  transition: all ease .2s;
}
.bc-comment-thumb {
  float: left;
  margin: 3px 8px 0 0;
  width: 34px;
  height: 34px;
  border-radius: 2px;
  background: #efefef no-repeat center;
  background-size: cover;
}
.file-loading .bc-comment-file-thumb:before {
  visibility: visible;
  opacity: 0.3;
}
.bc-comment-file-image {
  border-radius: 2px;
  max-width: 100%;
}
.bc-comment-reply-file {
  color: #81868a;
}
.bc-comment-file-progress-wrap {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: scale3d(0, 0, 1);
  visibility: hidden;
  opacity: 0.2;
  transform-origin: 50%;
  transition: all ease .2s;
}
.file-loading .bc-comment-file-progress-wrap {
  transform: scale3d(1, 1, 1);
  visibility: visible;
  opacity: 1;
}
.bc-comment-file-progress-bg {
  fill: rgba(0, 0, 0, .7);
}
.bc-comment-file-progress {
  transition: stroke-dashoffset ease .3s, stroke-dasharray ease .3s, stroke-width ease .3s, r ease .3s;
  stroke: #fff;
  stroke-width: 0;
  stroke-linecap: round;
  fill: transparent;
  stroke-width: 1.5px;
  transform: rotateZ(-90deg);
  transform-origin: 50%;
  stroke-dasharray: 106px;
}
.file-loading .bc-comment-file-progress {
  animation: upload-circle linear 2s infinite;
  stroke-dasharray: 106px;
}
.file-loaded .bc-comment-file-progress {
  animation: upload-circle linear 2s infinite;
  stroke-dashoffset: 0;
  stroke-dasharray: 125px;
}
.bc-comment-file-title {
  font-size: 14px;
  line-height: 23px;
  font-weight: 500;
  margin-top: 10px;
  margin-right: 15px;
  color: #000;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: flex;
}
.bc-comment-file-title .filename {
  overflow: hidden;
  text-overflow: ellipsis
}
.bc-comment-file-title:hover:before{
  text-decoration: underline;
}
.bc-comment-file-label {
  font-size: 13px;
  line-height: 23px;
  color: #70767b;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bc-comment-file-loaded {
  display: inline-block;
  vertical-align: top;
  position: relative;
  transition: all .2s ease;
}
.bc-comment-file-loaded:before,
.bc-comment-file-loaded:after {
  content: attr(data-loaded);
  display: inline-block;
}
.bc-comment-file-loaded:before {
  visibility: hidden;
}
.bc-comment-file-loaded:after {
  position: absolute;
  right: 0;
}
.bc-comment-form .bc-comment-files {
  margin: 10px 0 15px;
}
.bc-comment-form .bc-comment-file {
  padding: 0 0 10px;
  margin: 0;
}
.bc-comment-form .bc-comment-file:last-child {
  padding: 3px 0 10px 17px;
}
.bc-comments-footer {
  padding: 7px;
}
.bc-comments-footer-content {
  max-width: 630px;
  margin: 0 auto;
}
.bc-comment-login {
  position: relative;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}
.bc-comment-login iframe {
  vertical-align: top;
  transform-origin: 0 0;
  transform: scale3d(1, 1.1, 1);
  width: 100% !important;
  opacity: 0.01;
}
.bc-comment-login-btn {
  font-size: 14px;
  line-height: 20px;
  padding: 12px 15px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: #4ba3e2;
  color: #fff;
  cursor: pointer;
}
a.bc-bot-open-btn,
a.bc-websites-open-btn,
.bc-website-login-btn {
  margin-top: 25px;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  padding: 11px 25px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: #3092e6;
  color: #fff;
  cursor: pointer;
}
a.bc-bot-open-btn:hover,
a.bc-websites-open-btn:hover,
.bc-website-login-btn:hover {
  background-color: #2789DE;
  text-decoration: none;
  color: #fff;
}
a.bc-websites-open-btn {
  padding: 11px 35px;
}
.bc-comment-login-btn:before,
.bc-website-login-btn:before,
.bc-bot-open-btn:before {
  display: inline-block;
  content: '';
  width: 20px;
  height: 17px;
  margin-right: 15px;
  vertical-align: top;
  position: relative;
  top: 2px;
  background: url('data:image/svg+xml,%3Csvg height="17" viewBox="0 0 20 17" width="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m1.375 7.318c5.369-2.399 8.949-3.98 10.74-4.744 5.114-2.182 6.177-2.561 6.87-2.574.152-.003.493.036.713.22.187.155.238.364.262.511.025.147.055.482.031.744-.277 2.987-1.476 10.235-2.086 13.58-.259 1.416-.767 1.89-1.259 1.937-1.069.101-1.882-.725-2.917-1.422-1.621-1.09-1.636-.811-3.174-1.911-1.376-.983-1.084-2.256-.048-3.36.271-.289 3.799-4.174 3.89-4.573.011-.05.138-.698.03-.796-.107-.098-.606-.101-.72-.075-.163.038-2.447 1.6-6.852 4.686-.735.518-1.401.77-1.997.757-.658-.015-1.923-.382-2.863-.695-1.153-.385-2.07-.588-1.99-1.241.041-.34.498-.688 1.37-1.044z" fill="%23fff" fill-rule="evenodd"/%3E%3C/svg%3E') no-repeat;
}
.bc-arrow-footer {
  position: fixed;
  left: 0;
  bottom: 19px;
  right: 0;
  max-width: 494px;
  margin: 0 auto;
}
.bc-arrow-down {
  position: absolute;
  left: 6px;
  bottom: 0;
  display: inline-block;
  vertical-align: top;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.07);
  transition: all .15s ease;
  cursor: pointer;
}
.bc-arrow-down.ohide {
  transform: scale3d(0, 0, 1);
}
.bc-arrow-down:before {
  display: inline-block;
  content: '';
  width: 15px;
  height: 16px;
  margin: 12px 12px 12px 13px;
  vertical-align: top;
  position: relative;
  background: url('data:image/svg+xml,%3Csvg height="16" viewBox="0 0 15 16" width="15" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%238397b0" fill-rule="evenodd"%3E%3Crect height="14.666667" rx="1" width="2" x="6.424026"/%3E%3Cpath d="m10.4309644 6.34027176c.5522848 0 1 .44771525 1 1v8.00000004c0 .5522847-.4477152 1-1 1-.55228474 0-.99999999-.4477153-.99999999-1v-8.00000004c0-.55228475.44771525-1 .99999999-1z" transform="matrix(.70710678 .70710678 -.70710678 .70710678 11.073942 -4.054317)"/%3E%3Cpath d="m4.33333333 6.34027176c.55228475 0 1 .44771525 1 1v8.00000004c0 .5522847-.44771525 1-1 1-.55228475 0-1-.4477153-1-1v-8.00000004c0-.55228475.44771525-1 1-1z" transform="matrix(.70710678 -.70710678 -.70710678 -.70710678 9.287987 22.423184)"/%3E%3C/g%3E%3C/svg%3E') no-repeat;
}
.bc-arrow-down.has-new:before {
  margin-top: 13px;
}
.bc-badge {
  display: inline-block;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  padding: 2px 5px 1px 6px;
  min-width: 19px;
  border-radius: 10px;
  background: #4ba3e2;
  color: #fff;
  vertical-align: top;
  text-align: center;
  opacity: 0;
  transition: opacity .2s ease;
}
.bc-arrow-down .bc-badge-wrap {
  pointer-events: none;
  position: absolute;
  width: 200%;
  left: -50%;
  text-align: center;
  top: -12px;
}
.bc-arrow-down.has-new .bc-badge {
  pointer-events: auto;
  opacity: 1;
}


.bc-comment-box,
.bc-comment-deleted {
  transition: all .2s ease;
}
.bc-comment.deleted .bc-comment-box {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.bc-comment-deleted {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 15px auto 56px;
  height: 20px;
  line-height: 20px;
  color: #9DA2A6;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
.bc-comment-deleted.moder-deleted {
  height: 40px;
}
.bc-comment.deleted .bc-comment-deleted {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.bc-restore-btn,
.bc-delete-all-btn {
  cursor: pointer;
}

.bc-comment-reply-wrap,
.bc-comment-edit-wrap {
  transition: all .2s ease;
  overflow: hidden;
}
.bc-comment-reply {
  position: relative;
}
.bc-comment-reply-icon {
  position: absolute;
  display: inline-block;
  width: 17px;
  height: 14px;
  left: 20px;
  top: 42px;
  background-image: url("data:image/svg+xml,%3Csvg width='17' height='14' viewBox='0 0 17 14' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(1 -1.5)'%3E%3Cpath d='m0 13v-2c0-2.209 1.791-4 4-4h9' stroke='%23c0c0c0' stroke-linecap='round' stroke-linejoin='bevel' stroke-width='2'/%3E%3Cg fill='%23c0c0c0'%3E%3Cpath d='m12.763 5.274c0.418-0.0230.7770.2970.80.7150.0020.0280.0020.056 0 0.085l-0.379 6.779c-0.0270.483-0.4120.868-0.8950.895-0.4180.023-0.777-0.297-0.8-0.715-0.002-0.028-0.002-0.056 0-0.085l0.379-6.779c0.027-0.4830.412-0.8680.895-0.895z' transform='matrix(.707 .707 -.707 .707 10.394 -6.072)'/%3E%3Cpath d='m12.7630.394c0.418-0.0230.7770.2970.80.7150.0020.0280.0020.056 0 0.085l-0.379 6.779c-0.0270.483-0.4120.868-0.8950.895-0.4180.023-0.777-0.297-0.8-0.715-0.002-0.028-0.002-0.056 0-0.085l0.379-6.779c0.027-0.4830.412-0.8680.895-0.895z' transform='matrix(.707 -.707 -.707 -.707 6.943 16.763)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.bc-comment-new-reply .bc-comment-reply-icon {
  top: 32px;
}
.bc-input-field + .bc-input-field {
  margin-top: 7px;
}
.bc-comment-delete {
  margin-left: 7px;
}
.bc-reply-form {
  margin-top: 5px;
}
.bc-reply-form .form-group:last-child,
.bc-comment-form .form-group:last-child {
  margin-bottom: 0;
}
.bc-comment-header {
  font-size: 13px;
  line-height: 22px;
  font-weight: 500;
  text-transform: uppercase;
  color: #000;
}



.bc-back {
  padding: 18px 19px;
  vertical-align: top;
  margin: 0 0 0 -15px;
  cursor: pointer;
}
.bc-back:before {
  position: relative;
  top: 2px;
  content: '';
  display: inline-block;
  width: 18px;
  height: 16px;
  background: url('/img/translations/icons.png?8') no-repeat -5px -105px;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .bc-back:before {
    background-image: url('/img/translations/icons_2x.png?8');
    background-size: 26px 752px;
  }
}

.bc-subheader {
  font-size: 16px;
  font-weight: 500;
  padding: 15px 0;
  margin: 0;
}
.bc-subheader .bc-badge {
  font-size: 12px;
  line-height: 18px;
  padding: 3px 7px 2px;
  min-width: 19px;
  margin-left: 7px;
}

.bc-section-block {
  padding: 20px 15px 0 56px;
}
.bc-actions {
  display: inline-block;
  margin-left: -13px;
}
.bc-action-item {
  display: block;
  position: relative;
  padding: 11px 40px 11px 58px;
  font-weight: 500;
}
/*.bc-action-item:hover {
  text-decoration: none;
}
.bc-action-item .bc-action-label:hover {
  text-decoration: underline;
}*/
.bc-action-item:before {
  position: absolute;
  top: 4px;
  left: 6px;
  display: inline-block;
  width: 32px;
  height: 32px;
  content: '';
  background: url('/img/translations/icons.png?8') no-repeat -10px -548px;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .bc-action-item:before {
    background-image: url('/img/translations/icons_2x.png?8');
    background-size: 26px 752px;
  }
}
.action-share:before {
  background-position: 6px -453px;
}
.action-edit:before {
  background-position: 4px -485px;
}
.action-team:before {
  background-position: 1px -514px;
}

.arrow-link {
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
}
.arrow-link:after {
  display: inline-block;
  width: 8px;
  height: 12px;
  content: '';
  background: url('/img/translations/icons.png?8') no-repeat -10px -548px;
  margin-left: 7px;
  vertical-align: -1px;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .arrow-link:after {
    background-image: url('/img/translations/icons_2x.png?8');
    background-size: 26px 752px;
  }
}

.form-group .input {
  direction: ltr;
  unicode-bidi: isolate;
}
.form-group.rtl {
  text-align: right;
}
.form-group.rtl .input {
  direction: rtl;
}

.fill {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.fullname {
  font-weight: 500;
  border-bottom: 1px solid #de8833;
}
.my.fullname {
  border-bottom: 3px double #de8833;
}
a.fullname:hover {
  text-decoration: none;
  border-bottom-color: inherit;
}

.close {
  position: relative;
  width: 22px;
  height: 22px;
  opacity: 1;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  display: inline-block;
  position: absolute;
  background: #c0c0c0;
  left: 50%;
  top: 50%;
  content: '';
  width: 16px;
  height: 2px;
  margin: -1px 0 0 -8px;
  border-radius: 1px;
  transform: rotateZ(45deg) scaleY(.95);
  transition: background-color .2s ease;
}
.close:after {
  transform: rotateZ(-45deg) scaleY(.95);
}
.close:hover:before,
.close:hover:after {
  background: #a8a8a8;
}

.ohide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.shide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  height: 0 !important;
}

.sxhide {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  width: 0 !important;
}

.no-transition,
.no-transition * {
  transition: none !important;
}

.popup-buttons .btn-link {
  padding: 8px 12px 6px;
  border-radius: 2px;
}
.popup-buttons .btn-link + .btn-link {
  margin-left: 2px;
}
.popup-buttons .btn-link:hover {
  background: #e6f1f7;
  text-decoration: none;
}
.popup-buttons .btn-link:active {
  background: #d4e6f1;
}
.popup-buttons .btn-link:focus {
  text-decoration: none;
}
.btn.disabled,
.btn[disabled],
.popup-buttons .btn-link.disabled,
.popup-buttons .btn-link[disabled] {
  color: #b5d1e6;
  opacity: 1;
}

.toast-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 45px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease;
  pointer-events: none;
}
.toast {
  max-width: 270px;
  max-height: 270px;
  background: rgba(61, 65, 69, 0.93);
  color: #fff;
  padding: 10px 24px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
}

.input {
  white-space: pre-wrap;
  position: relative;
  z-index: 0;
}
.input.empty[data-placeholder] {
  position: relative;
}
.input.empty[data-placeholder]:before {
  position: absolute;
  left: 0;
  right: 0;
  content: attr(data-placeholder);
  transition: color .2s ease;
  color: #919699;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}
.input.empty[data-placeholder]:focus:before {
  color: #ccc;
}
input.bc-form-control,
textarea.bc-form-control,
.input.bc-form-control {
  padding-left: 0;
  padding-right: 0;
  border: none;
  height: auto;
  resize: none;
  box-shadow: inset 0 -1px 0 #f0f0f0;
  transition: box-shadow .2s ease, color .2s ease;
}
input.bc-form-control + .bc-form-control-underline {
  box-shadow: 0 -1px 0 #f0f0f0;
  transition: box-shadow .2s ease;
  margin-bottom: -2px;
  height: 2px;
}
input.bc-form-control[readonly],
textarea.bc-form-control[readonly],
.input.bc-form-control[readonly],
input.bc-form-control[disabled],
textarea.bc-form-control[disabled],
.input.bc-form-control[disabled] {
  cursor: auto;
  background: #fff;
}
input.bc-form-control:focus,
textarea.bc-form-control:focus,
.input.bc-form-control:focus {
  box-shadow: inset 0 -2px 0 #39ade7;
}
input.bc-form-control:focus + .bc-form-control-underline {
  box-shadow: 0 -2px 0 #39ade7;
}
input.bc-form-control[readonly]:focus,
textarea.bc-form-control[readonly]:focus,
.input.bc-form-control[readonly]:focus,
input.bc-form-control[disabled]:focus,
textarea.bc-form-control[disabled]:focus,
.input.bc-form-control[disabled]:focus {
  box-shadow: inset 0 -1px 0 #f0f0f0;
}
.input.bc-form-control {
  word-break: break-word;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.input.bc-form-control::-webkit-scrollbar {
  display: none;
}

.login-popup-container section {
  line-height: 23px;
  max-width: 600px;
}
.login-popup-container h2 {
  font-size: 24px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.login-popup-container p {
  margin-bottom: 18px;
}
.login-popup-container p.help-block {
  margin-top: 18px;
  margin-bottom: -7px;
}
.login-popup-container .form-control {
  max-width: 280px;
}

.dots-animated:after {
  position: absolute;
  display: inline-block;
  animation: dotty steps(1, end) 1s infinite;
  content: '...';
}

@-webkit-keyframes dotty {
  0%, 100% { content: '';    }
  25%      { content: '.';   }
  50%      { content: '..';  }
  75%      { content: '...'; }
}
@keyframes dotty {
  0%, 100% { content: '';    }
  25%      { content: '.';   }
  50%      { content: '..';  }
  75%      { content: '...'; }
}

@-webkit-keyframes upload-circle {
  from { transform: rotateZ(-90deg); }
  to   { transform: rotateZ(270deg); }
}
@keyframes upload-circle {
  from { transform: rotateZ(-90deg); }
  to   { transform: rotateZ(270deg); }
}

.input-group .input-dropdown {
  display: table-cell;
  position: relative;
}
.input-dropdown .form-control {
  height: auto;
  border: transparent;
  background: transparent;
  color: #222;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 11px 16px 11px 1px;
  margin-left: -1px;
  border-radius: 0 !important;
  transition: color .2s ease;
}
.form-control::-webkit-input-placeholder {
  transition: color .2s ease;
  color: #999;
}
.form-control::-moz-placeholder {
  transition: color .2s ease;
  color: #999;
}
.form-control:-ms-input-placeholder {
  transition: color .2s ease;
  color: #999;
}
.form-control:focus::-webkit-input-placeholder {
  color: #ccc;
}
.form-control:focus::-moz-placeholder {
  color: #ccc;
}
.form-control:focus:-ms-input-placeholder {
  color: #ccc;
}
.has-section-status .input-dropdown .form-control {
  padding-right: 50px;
}


.progress-bar {
  width: 0;
  transition: width .4s linear, box-shadow .3s ease;
}
.progress-bar.no-transition {
  transition: none;
}
.progress-bar.no-shown {
  box-shadow: inset 0 0 0 #39ade7;
}

header .progress-bar {
  position: absolute;
  z-index: 1;
  bottom: 0;
  height: 3px;
  box-shadow: inset 0 -2px 0 #39ade7;
}

.btn-inactive {
  cursor: auto;
  pointer-events: none;
}

.popup-form {
  margin: 25px 0 0;
  overflow: visible !important;
}


.popup-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.6);
  z-index: 101;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.popup {
  max-width: 100%;
  word-wrap: break-word;
  margin: 15px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, .3);
}
.popup section {
  position: relative;
  padding-bottom: 40px;
}
.popup h4 {
  font-size: 18px;
  margin: 5px 0 18px;
}
.popup h4 ~ h4 {
  margin-top: 25px;
}
.popup-body {
  padding: 20px 24px;
}
.login-popup-container .popup-body {
  padding: 15px 25px 25px;
}
@media (min-width: 560px) {
  .popup {
    margin: 50px;
  }
  .popup-body {
    padding: 30px 35px;
  }
  .login-popup-container .popup-body {
    padding: 50px 60px;
  }
}
@media (min-width: 768px) {
  .popup {
    max-width: 600px;
  }
}
.popup .popup-text {
  margin: 0;
  font-size: 16px;
  line-height: 19px;
  position: relative;
  min-width: 160px;
  z-index: 1;
}
.popup .popup-buttons {
  margin: -17px -15px -10px;
  position: absolute;
  right: 0;
  bottom: 0;
}



.form-group label,
.popup-text b,
.bc-markdown strong {
  font-weight: 500;
}
.form-group-buttons {
  margin-top: 30px;
}


a.bc-header-right-btn,
button.bc-header-right-btn {
  font-size: 12px;
  line-height: 14px;
  padding: 4px 10px 3px;
  margin: 1px 0 1px 7px;
  border-radius: 3px;
  position: relative;
  float: right;
  z-index: 1;
}

.bc-dropdown-wrap {
  position: relative;
}
.bc-dropdown.dropdown-toggle {
  cursor: pointer;
}
.bc-menu-btn.dropdown-toggle:hover,
.open .bc-menu-btn.dropdown-toggle {
  background-color: #f5f6f7;
}
.bc-dropdown-wrap span.dropdown-menu {
  left: auto;
  right: 0;
  margin: -2px 3px -2px 0;
  border: 1px solid rgba(0, 0, 0, .06);
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  border-radius: 4px;
  overflow: hidden;
  min-width: 150px;
}
.bc-dropdown-wrap.top span.dropdown-menu {
  top: auto;
  bottom: 100%;
}
.bc-dropdown-wrap span.dropdown-menu > ul.dropdown-menu {
  position: static;
  display: block;
  float: none;
  border: none;
  box-shadow: none;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 0;
  min-width: 0;
  margin: 0 -20px 0 0;
  padding: 7px 20px 7px 0;
  max-height: 235px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.bc-dropdown-wrap ul.dropdown-menu > li > .bc-dropdown-item {
  display: block;
  cursor: pointer;
  padding: 6px 15px;
  margin: 0;
  position: relative;
  color: #222;
}
.bc-dropdown-wrap ul.dropdown-menu > li > .bc-dropdown-item:hover,
.bc-dropdown-wrap ul.dropdown-menu > li > .bc-dropdown-item:focus {
  background-color: #f4f4f4;
  color: #222;
}
.bc-dropdown-wrap ul.dropdown-menu > li.selected > .bc-dropdown-item:after {
  content: '';
  display: inline-block;
  position: absolute;
  pointer-events: none;
  bottom: 0;
  right: 0;
  top: 0;
  margin: auto 13px;
  width: 15px;
  height: 12px;
  background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 15 12" width="15" height="12" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M 2 6 L 5.5 9.5 L 13 3" stroke="%23228fe1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/%3E%3C/svg%3E');
}
.bc-dropdown-wrap ul.dropdown-menu > li.disabled > .bc-dropdown-item {
  color: #9DA2A6;
  pointer-events: none;
  cursor: auto;
}
.bc-action-btn span.dropdown-menu {
  font-weight: normal;
  margin: 0 -1px 0 0;
}
.bc-action-btn span.dropdown-menu > ul.dropdown-menu {
  font-size: 13px;
  padding-top: 2px;
  padding-bottom: 2px;
}
.bc-action-btn ul.dropdown-menu > li > .bc-dropdown-item {
  padding: 6px 12px 5px;
}
.bc-action-btn.open:hover {
  text-decoration: none;
}
.bc-places-wrap {
  display: inline-block;
  position: relative;
  margin: 10px 0 0 4px;
  float: right;
}
.bc-places-wrap .bc-dropdown {
  font-weight: 500;
  text-align: center;
  width: 36px;
}

.bc-user-admin .bc-delete-all-item,
.bc-user-moder .bc-delete-all-item,
.bc-user-admin .bc-delete-all-btn,
.bc-user-moder .bc-delete-all-btn,
.bc-user-admin .bc-promote-admin-item,
.bc-user-moder .bc-promote-moder-item,
.bc-admin-item,
.bc-moder-item,
.bc-demote-item {
  display: none;
}
.bc-user-admin .bc-comment-deleted.moder-deleted,
.bc-user-moder .bc-comment-deleted.moder-deleted {
  height: 20px;
}
.bc-user-admin .bc-admin-item,
.bc-user-moder .bc-moder-item,
.bc-user-admin .bc-demote-item,
.bc-user-moder .bc-demote-item {
  display: block;
}

.form-group-nolabel {
  margin-top: -15px;
}
.bc-form-label {
  display: block;
  font-size: 15px;
  line-height: 15px;
  color: #8a8a8a;
  margin-bottom: 0;
  position: relative;
  z-index: 1;
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
  transition: all .2s ease;
  margin-top: 5px;
  top: 23px;
}
.form-group .bc-form-label {
  font-weight: normal;
}
.field-has-value .bc-form-label,
.field-focused .bc-form-label {
  pointer-events: auto;
  font-size: 13px;
  font-weight: 500;
  color: #8a8a8a;
  top: 0;
}
.field-focused .bc-form-label {
  color: #2481cc;
}
.bc-form-input {
  overflow: hidden;
}
.bc-form-input .bc-form-control {
  font-size: 15px;
  line-height: 18px;
  padding-top: 6px;
  padding-bottom: 10px;
}
.bc-form-input .btn-primary {
  font-size: 14px;
  line-height: 16px;
  padding: 10px 21px 8px;
}
.bc-form-input .help-block {
  font-size: 13px;
  line-height: 15px;
  color: #8a8a8a;
  margin-top: 9px;
  margin-bottom: 0;
  -webkit-font-smoothing: antialiased;
}
.bc-form-owner-name {
  white-space: nowrap;
  line-height: 32px;
  font-weight: 500;
  padding: 10px 0 0;
}
.bc-form-text {
  white-space: nowrap;
  line-height: 32px;
}
.bc-form-photo,
.bc-form-photo img {
  display: inline-block;
  vertical-align: top;
  width: 32px;
  height: 32px;
  border-radius: 16px;
}
.bc-form-photo {
  position: relative;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none !important;
  font-size: 17px;
  line-height: 34px;
  margin-right: 10px;
  color: #fff;
  background: #e57979;
  overflow: hidden;
}
.bc-form-photo:before {
  content: attr(data-content);
  font-weight: 500;
}
.bc-form-photo img {
  position: absolute;
  left: 0;
  top: 0;
}
.bc-form-input .bc-embed-code {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 13px;
  padding-top: 8px;
  padding-bottom: 8px;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
  text-align: left;
  -webkit-appearance: none;
}

.bc-preview-wrap {
  padding: 10px 8px 0;
}

.bc-row {
  margin: 0 -9px;
}
.bc-row:before,
.bc-row:after {
  content: ' ';
  display: table;
}
.bc-row:after {
  clear: both;
}
.bc-col-6 {
  width: 50%;
  float: left;
  padding: 0 8px;
}

.bc-back-btn {
  display: inline-block;
  width: 37px;
  height: 36px;
  float: left;
  padding: 10px;
  margin: -8px 20px -10px -10px;
}
.bc-back-btn:before {
  display: inline-block;
  content: '';
  width: 17px;
  height: 16px;
  vertical-align: top;
  background: url('data:image/svg+xml,%3Csvg height="16" viewBox="0 0 17 16" width="17" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23222" fill-rule="evenodd" transform="translate(0 -1)"%3E%3Crect height="2" rx="1" width="15" x="2" y="7.610913"/%3E%3Crect height="11" rx="1" transform="matrix(.70710678 .70710678 -.70710678 .70710678 5.321068 -1.846194)" width="2" x="3.889087"/%3E%3Crect height="11" rx="1" transform="matrix(-.70710678 .70710678 .70710678 .70710678 .214467 -.088835)" width="2" x="4.242641" y="6.853553"/%3E%3C/g%3E%3C/svg%3E') no-repeat;
}

.bc-users-wrap {
  min-height: 35px;
}
.bc-user-row-wrap {
  transition: all .2s ease;
}
.bc-user-row {
  display: block;
}
.bc-user-row-empty {
  display: block;
  font-size: 14px;
  line-height: 22px;
  padding: 7px 0;
  text-align: center;
  color: #8a8a8a;
}
.bc-user-row-empty b {
  font-weight: 500;
}
.bc-user-row-empty.ohide {
  padding: 0;
  height: 0;
}
.bc-user-photo {
  position: relative;
  float: left;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  text-align: center;
  overflow: hidden;
  position: relative;
  margin-top: 12px;
}
.bc-user-photo img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.bc-user-photo:hover {
  text-decoration: none;
}
.bc-user-photo:before {
  content: attr(data-content);
  font-size: 16px;
  vertical-align: middle;
  line-height: 46px;
  color: #fff;
}
.bc-user-body {
  margin-left: 54px;
  padding: 12px 0;
}
.bc-user-row-wrap + .bc-user-row-wrap .bc-user-body {
  border-top: 1px solid #ededed;
}
.bc-user-row-wrap + .bc-user-row-wrap .bc-user-photo {
  margin-top: 13px;
}
.bc-user-name {
  font-weight: 500;
  padding-top: 2px;
}
.bc-user-name a,
.bc-user-name a:hover {
  color: #222;
}
.bc-user-label {
  font-size: 13px;
  line-height: 15px;
  margin: 0 10px;
}
.bc-user-info {
  font-size: 13px;
  line-height: 19px;
  padding-bottom: 2px;
  color: #a8a8a8;
}
.bc-user-info a,
.bc-user-info a:hover {
  color: #a8a8a8;
}
.bc-user-name-only .bc-user-name {
  margin: 14px 0 13px;
}
.bc-user-actions {
  float: right;
  margin: 18px 0;
}

.bc-websites-wrap {
  min-height: 35px;
}
a.bc-website-row-wrap,
a.bc-website-row-wrap:hover {
  transition: all .2s ease;
  text-decoration: none;
}
.bc-website-row {
  display: block;
}
.bc-website-row-empty {
  display: block;
  font-size: 14px;
  line-height: 22px;
  padding: 27px 0;
  text-align: center;
  color: #8a8a8a;
}
.bc-website-row-empty b {
  font-weight: 500;
}
.bc-website-body {
  padding: 12px 0;
}
.bc-website-row-wrap + .bc-website-row-wrap .bc-website-body {
  border-top: 1px solid #ededed;
}
.bc-website-row-wrap + .bc-website-row-wrap .bc-website-photo {
  margin-top: 13px;
}
.bc-website-name {
  font-weight: 500;
  padding-top: 2px;
  color: #000;
}
.bc-website-name a,
.bc-website-name a:hover {
  color: #222;
}
.bc-website-info {
  font-size: 13px;
  line-height: 19px;
  padding-bottom: 2px;
  color: #a8a8a8;
}
.bc-website-info a,
.bc-website-info a:hover {
  color: #a8a8a8;
}
.bc-website-name-only .bc-website-name {
  margin: 14px 0 13px;
}
.bc-website-actions {
  float: right;
  margin: 18px 0;
}

@media (min-width: 494px) {
  .bc-main-content {
    margin: 0 50px;
  }
  .bc-post {
    margin-left: -8px;
  }
  .bc-post .tgme_widget_message_user {
    display: block;
  }
  .bc-post .tgme_widget_message_bubble {
    margin-left: 50px;
  }
  .bc-head-wrap,
  .bc-header-wrap,
  .bc-users-wrap,
  .bc-websites-wrap,
  .bc-channel-box,
  .bc-website-box {
    margin-left: -8px;
    margin-right: -8px;
  }
  .bc-menu-wrap {
    margin-right: -4px;
  }
  .bc-dropdown-wrap span.dropdown-menu {
    margin-right: -1px;
  }
}

.bc-accent-colors {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  max-width: 480px;
  margin: 20px 0 0;
}
.bc-accent-colors .bc-accent-color-item {
  position: relative;
  flex-basis: 42px;
  font-weight: normal;
  text-align: center;
  cursor: pointer;
}
.bc-accent-color-item input.radio {
  position: absolute;
  left: -5000px;
}
.bc-accent-color-item input.radio + .bc-color-circle:after {
  position: absolute;
  left: 0;
  display: inline-block;
  content: '';
  width: 100%;
  height: 100%;
  vertical-align: top;
  background: url('data:image/svg+xml,%3Csvg height="15" viewBox="0 0 18 15" width="18" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fff" fill-rule="evenodd"%3E%3Crect height="8" rx="1.472727" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -5.753048 6.110913)" width="3" x="3" y="6"/%3E%3Crect height="3" rx="1.472727" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -2.081475 9.974874)" width="16" x="3" y="6"/%3E%3C/g%3E%3C/svg%3E') no-repeat center;
  transition: transform 0.12s linear;
  transform: scale3d(0, 0, 1);
}
.bc-accent-color-item input.radio:checked + .bc-color-circle:after {
  transform: scale3d(1, 1, 1);
}
.bc-color-circle {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #319BE6;
}
.bc-color-circle-custom {
  background-color: #F5F5F5;
  color: #F5F5F5;
}
.bc-accent-color-item input.radio + .bc-color-circle-custom:before {
  position: absolute;
  left: 0;
  display: inline-block;
  content: '';
  width: 100%;
  height: 100%;
  vertical-align: top;
  background: url('data:image/svg+xml,%3Csvg height="14" viewBox="0 0 15 14" width="15" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m3.9468491 8.55631162c-1.3103539 0-2.36810946 1.04207749-2.36810946 2.33300928 0 1.0187474-.91566899 1.5553396-1.57873964 1.5553396.72622023.9487571 1.96553085 1.5553395 3.15747928 1.5553395 1.7445073 0 3.15747928-1.3920289 3.15747928-3.1106791 0-1.29093179-1.05775556-2.33300928-2.36810946-2.33300928zm10.8222602-7.28676572-1.0577555-1.04207749c-.3078543-.30329121-.8051572-.30329121-1.1130115 0l-7.07275356 6.96792112 2.170767 2.13859186 7.07275356-6.96792112c.3078543-.30329121.3078543-.79322316 0-1.09651437z" fill="%23bdbdbd"/%3E%3C/svg%3E') no-repeat center;
  transition: opacity 0.12s ease;
}
.bc-color-label {
  font-size: 12px;
  line-height: 14px;
  margin-top: 8px;
  color: #333;
}
.bc-color-label-custom {
  transition: opacity 0.12s ease;
  position: absolute;
  width: 100%;
}
input.bc-color-field {
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  position: relative;
  text-align: center;
  margin-top: 3px;
  padding: 5px 0;
  color: #222;
  width: 52px;
  transition: all .2s ease;
  opacity: 0;
}
.bc-accent-color-item input.radio:checked ~ .bc-color-field {
  opacity: 1;
}
.bc-accent-color-item input.radio:checked ~ .bc-color-circle-custom {
  background-color: currentColor;
}
.bc-accent-color-item input.radio:checked + .bc-color-circle-custom:before,
.bc-accent-color-item input.radio:checked ~ .bc-color-label-custom {
  opacity: 0;
}



.radio-item,
.checkbox-item {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
}
.form-group label.radio-item,
.form-group label.checkbox-item {
  font-weight: normal;
}
.radio-item-block,
.checkbox-item-block {
  display: block;
  margin: 6px 0 1px;
  padding: 5px 0;
  line-height: 20px;
}
.radio-item-block + .radio-item-block,
.checkbox-item-block + .checkbox-item-block {
  margin-top: 1px;
}
.radio-item input.radio,
.checkbox-item input.checkbox {
  position: absolute;
  left: -5000px;
}
.radio-item input.radio ~ .radio-label,
.checkbox-item input.checkbox ~ .checkbox-label {
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  max-width: calc(100% - 31px);
}
.radio-item .radio-input,
.checkbox-item .checkbox-input {
  display: inline-block;
  vertical-align: top;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  transition: opacity 0.12s linear;
}
.radio-item .radio-input + .radio-label,
.checkbox-item .checkbox-input + .checkbox-label {
  margin-left: 11px;
}
.radio-item .radio-input-icon,
.checkbox-item .checkbox-input-icon {
  display: inline-block;
  content: '';
  width: 20px;
  height: 20px;
  border: 2px solid #b3b3b3;
  background: #fff;
  border-radius: 10px;
  vertical-align: top;
  padding: 0;
  cursor: pointer;
  position: relative;
}
.radio-item .radio-input-icon:before,
.checkbox-item .checkbox-input-icon:before {
  display: inline-block;
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #54a9eb;
  border-radius: 10px;
  top: -2px;
  left: -2px;
  transition: opacity 0.12s linear;
  opacity: 0;
}
.radio-item .radio-input-icon:after {
  display: inline-block;
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #54a9eb;
  border-radius: 5px;
  top: 3px;
  left: 3px;
  transition: transform 0.12s linear;
  transform: scale3d(0, 0, 1);
}
.radio-item input.radio:checked + .radio-input .radio-input-icon:before,
.checkbox-item input.checkbox:checked + .checkbox-input .checkbox-input-icon:before {
  opacity: 1;
}
.radio-item input.radio:checked + .radio-input .radio-input-icon:after,
.checkbox-item input.checkbox:checked + .checkbox-input .checkbox-input-icon:after {
  transform: scale3d(1, 1, 1);
}
.checkbox-item .checkbox-input-icon,
.checkbox-item .checkbox-input-icon:before,
.checkbox-item .checkbox-input-icon:after {
  width: 18px;
  height: 18px;
  margin: 1px;
  border-radius: 3px;
}
.checkbox-item .checkbox-input-icon:before {
  margin: 0;
  background-color: #54a9eb;
}
.checkbox-item .checkbox-input-icon:after {
  display: inline-block;
  content: '';
  position: absolute;
  left: -3px;
  top: -3px;
  background: url('data:image/svg+xml,%3Csvg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fff" fill-rule="evenodd"%3E%3Crect height="6" rx="1" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -6.746804 8.368629)" width="2" x="5.728427" y="9.328427"/%3E%3Crect height="11.5" rx="1" transform="matrix(.70710678 .70710678 -.70710678 .70710678 10.712311 -5.169417)" width="2" x="10.596194" y="4.596194"/%3E%3C/g%3E%3C/svg%3E') no-repeat center;
  transition: transform 0.12s linear;
  transform: scale3d(0, 0, 1);
}
.radio-item input.radio:disabled + .radio-input,
.checkbox-item input.checkbox:disabled + .checkbox-input {
  cursor: default;
  pointer-events: none;
  opacity: .65;
}


.bc-color-field-wrap:before {
  content: '#';
  color: #8a8a8a;
  position: absolute;
  padding: 5px 3px;
  z-index: 1;
}
.radio-item-justified .bc-color-field-wrap {
  padding: 0;
  margin: -5px 0 -7px;
}
.radio-item-justified input.bc-color-field {
  text-transform: uppercase;
  padding: 5px 0 7px 15px;
  color: #000;
  width: 70px;
}

@media (max-width: 390px) {
  .radio-item-justified input.radio ~ .justified-wrap,
  .radio-item-justified input.radio ~ .radio-label:after {
    display: none;
  }
  .radio-item-justified input.radio:checked ~ .justified-wrap,
  .radio-item-justified input.radio:checked ~ .radio-label:after {
    display: inline-block;
  }
  .radio-item-justified input.radio:checked ~ .radio-label {
    margin: 0 0 0 8px;
    overflow: hidden;
    width: 0;
  }
}

.bc-customize-box {
  transition: all .2s ease;
}
button.bc-customize-btn {
  font-size: 13px;
  line-height: 19px;
  padding: 8px 10px 6px;
  margin: 10px -10px;
}
.bc-customize-btn:before {
  content: '';
  display: inline-block;
  vertical-align: top;
  width: 18px;
  height: 18px;
  margin-right: 13px;
  position: relative;
  top: -1px;
  background-image: url('data:image/svg+xml,%3Csvg height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="m241 617c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5h1.77c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="%233192E6" transform="translate(-232 -617)"/%3E%3C/svg%3E');
}

body.bc-embed-mode .bc-header-wrap {
  margin-top: 10px;
}
body.bc-embed-mode .bc-settings .bc-header-wrap {
  margin-top: 35px;
}
body.bc-embed-mode .bc-head-wrap,
body.bc-embed-mode .bc-header-wrap,
body.bc-embed-mode .bc-users-wrap,
body.bc-embed-mode .bc-websites-wrap,
body.bc-embed-mode .bc-channel-box,
body.bc-embed-mode .bc-website-box {
  margin-left: 0;
  margin-right: 0;
}
body.bc-embed-mode .bc-load-more {
  margin-left: -8px;
  margin-right: -8px;
  border-radius: 3px;
}
body.bc-embed-mode .bc-content-wrap,
body.bc-embed-mode .bc-arrow-footer,
body.bc-embed-mode .bc-comments-footer-content {
  max-width: none;
}
body.bc-embed-mode .bc-comment-login {
  margin: 0;
}
body.bc-embed-mode .bc-content {
  padding-bottom: 0;
}
body.bc-embed-mode .bc-settings {
  padding-bottom: 40px;
}
@media (min-width: 494px) {
  body.bc-embed-mode .bc-menu-wrap {
    margin-right: -12px;
  }
}

.bc-preview-wrap a,
.bc-preview-wrap a:hover {
  color: #2e87ca;
}

body.bc-name-nocolor .bc-comments .bc-comment-author-name > .name,
.bc-preview-wrap.bc-name-nocolor .bc-comment-author-name > .name {
  color: #292929;
}

body.bc-dislikes-enabled .bc-comment-dislike,
.bc-preview-wrap.bc-dislikes-enabled .bc-comment-dislike {
  display: inline-block;
}
</style>
