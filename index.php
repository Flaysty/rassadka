<html lang="ru-RU">

<head>
    <title>Рассадка-на-свадьбе.рф
    </title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link href="css/jquery-ui.min.css" media="all" rel="stylesheet" type="text/css">
    <link href="css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css">
    <link href="css/main.css" media="screen" rel="stylesheet" type="text/css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.43/polyfill.min.js" integrity="sha512-lvWiOP+aMKHllm4THsjzNleVuGOh0WGniJ3lgu/nvCbex1LlaQSxySUjAu/LTJw9FhnSL/PVYoQcckg1Q03+fQ==" crossorigin="anonymous"></script>
	
    <script type="text/javascript" src="js/jquery-2.2.1.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/jquery.ui.touch-punch.min.js"></script>

    <script type="text/javascript" src="js/main.js"></script>
	
	
</head>

<body>

	
<div id="backdrop"></div>
<div id='pop_up' class="auth">
    <ul class="auth__tabs">
        <li id="reg-form-link" class="auth__link active">Регистрация</li>
        <li id="login-form-link" class="auth__link">Вход</li>
    </ul>

    <p class="header__subtitle">Для сохранения выполните регистрацию или вход</p>

    <div id="reg">	
        <h3 class="header__title">Регистрация</h3>
        <form method='post' id="reg_form">
            <input class="auth__input" type='name' name='name' placeholder='Имя' required /><br /><br />
            <input class="auth__input" type='email' name='email' placeholder='Электронная почта' required /><br /><br />
            <input class="auth__input" type='password' name='password' placeholder='Пароль' required /><br /><br />
            <input class="auth__input" type='password' name='r_password' placeholder='Повторите пароль' required /><br /><br />
            <input class="auth__button" type='submit' name='submit' value='Регистрация' />
        </form>
    </div>
        
    <div id="login-form">
        <h3 class="header__title">Вход</h3>
        <form method='post' id="log_form">
            <input class="auth__input" type='email' name='email' placeholder='Электронная почта' required /><br /><br />
            <input class="auth__input" type='password' name='password' placeholder='Пароль' required /><br /><br />
            <input class="auth__button" type='submit' name='submit' value='Войти' />
        </form>
    </div>

    <a href='javascript:void(0);' id='not_now' class="auth__forgot_link">Не сейчас</a>
</div>


	
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(66751294, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/66751294" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-176427613-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-176427613-1');
</script>
	
    <div id="canvas"></div>
    <main id="main_work_screen">
        <div class="tabl"></div>
        <div class="table">
            <div class="table__top"></div>
            <div class="table__middle">
                <div class="table__side table__side-left"></div>
                <div class="table__side table__side-right"></div>
            </div>
            <div class="table__bottom"></div>
        </div>
    </main>
	
    <div class="options">
        <div class="options__item"  data-target="color_popup">
            <div class="options__icon">
                <div class="color_picker">
                    <div class="color_picker__value"></div>
                </div>
            </div>
            <div class="options__container">
                <div class="options__name">Цвет фона</div>
            </div>
            <div class="arrow">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#CACACA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>

        <div class="options__item" data-target="frame_popup">
            <div class="options__icon">
                <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 21.4297C0 22.6706 1.17904 23.327 2.39296 23.607C2.67292 24.8209 3.32942 26 4.57031 26C6.0317 26 6.94703 24.4766 9.44562 24.4766H9.90234C10.3224 24.4766 10.6641 24.8183 10.6641 25.2383C10.6641 25.659 11.0051 26 11.4258 26C11.8465 26 12.1875 25.659 12.1875 25.2383C12.1875 24.8183 12.5292 24.4766 12.9492 24.4766H13.4059C15.9002 24.4766 16.8221 26 18.2812 26C19.5221 26 20.1786 24.8209 20.4586 23.607C21.6725 23.327 22.8516 22.6706 22.8516 21.4297C22.8516 19.9982 21.3281 19.08 21.3281 17.3867V14.5742C21.3281 14.1542 21.6698 13.8125 22.0898 13.8125C22.5105 13.8125 22.8516 13.4715 22.8516 13.0508C22.8516 12.6301 22.5105 12.2891 22.0898 12.2891C21.6698 12.2891 21.3281 11.9474 21.3281 11.5273V8.61336C21.3281 6.67002 22.8516 6.22786 22.8516 4.57031C22.8516 3.32942 21.6725 2.67297 20.4586 2.39296C20.1786 1.17909 19.5221 0 18.2812 0C16.8186 0 15.9073 1.52344 13.4059 1.52344H12.9492C12.5292 1.52344 12.1875 1.18173 12.1875 0.761719C12.1875 0.341047 11.8465 0 11.4258 0C11.0051 0 10.6641 0.341047 10.6641 0.761719C10.6641 1.18173 10.3224 1.52344 9.90234 1.52344H9.44562C6.95251 1.52344 6.02865 0 4.57031 0C3.32942 0 2.67297 1.17909 2.39296 2.39296C1.17909 2.67297 0 3.32942 0 4.57031C0 6.24305 1.52344 6.65681 1.52344 8.61336V11.5273C1.52344 11.9474 1.18173 12.2891 0.761719 12.2891C0.341047 12.2891 0 12.6301 0 13.0508C0 13.4715 0.341047 13.8125 0.761719 13.8125C1.18173 13.8125 1.52344 14.1542 1.52344 14.5742V17.3867C1.52344 19.33 0 19.7722 0 21.4297ZM3.04688 17.3867V14.5742C3.04688 13.9895 2.82613 13.4554 2.4636 13.0508C2.82613 12.6462 3.04688 12.112 3.04688 11.5273V8.61336C3.04688 6.26493 1.52344 5.43588 1.52344 4.57031C1.52344 4.21906 2.47792 3.88152 3.13346 3.80367C3.48557 3.7634 3.7634 3.48557 3.80367 3.13346C3.877 2.4925 4.22013 1.52344 4.57031 1.52344C5.30532 1.52344 6.70917 3.04688 9.44562 3.04688H9.90234C10.4871 3.04688 11.0212 2.82613 11.4258 2.4636C11.8304 2.82613 12.3645 3.04688 12.9492 3.04688H13.4059C16.1453 3.04688 17.5418 1.52344 18.2812 1.52344C18.6325 1.52344 18.97 2.47792 19.0479 3.13341C19.0881 3.4843 19.3658 3.76177 19.7165 3.80346C20.3736 3.88152 21.3281 4.21906 21.3281 4.57031C21.3281 5.43121 19.8047 6.27428 19.8047 8.61336V11.5273C19.8047 12.112 20.0254 12.6462 20.388 13.0508C20.0254 13.4554 19.8047 13.9895 19.8047 14.5742V17.3867C19.8047 19.8482 21.3281 20.511 21.3281 21.4297C21.3281 21.7809 20.3736 22.1185 19.7181 22.1963C19.366 22.2366 19.0882 22.5144 19.0479 22.8665C18.9746 23.5075 18.6314 24.4766 18.2812 24.4766C17.546 24.4766 16.1426 22.9531 13.4059 22.9531H12.9492C12.3645 22.9531 11.8304 23.1739 11.4258 23.5364C11.0212 23.1739 10.4871 22.9531 9.90234 22.9531H9.44562C6.70653 22.9531 5.30954 24.4766 4.57031 24.4766C4.21906 24.4766 3.88157 23.5221 3.80367 22.8665C3.7634 22.5144 3.48557 22.2366 3.13346 22.1963C2.4925 22.1231 1.52344 21.7799 1.52344 21.4297C1.52344 20.5688 3.04688 19.7257 3.04688 17.3867Z" fill="#383838"/>
                    <path d="M5.33203 21.4297H17.5195C17.9402 21.4297 18.2812 21.0886 18.2812 20.668V5.33203C18.2812 4.91136 17.9402 4.57031 17.5195 4.57031H5.33203C4.91136 4.57031 4.57031 4.91136 4.57031 5.33203V20.668C4.57031 21.0886 4.91136 21.4297 5.33203 21.4297ZM6.09375 6.09375H16.7578V19.9062H6.09375V6.09375Z" fill="#383838"/>
                </svg>
            </div>
            <div class="options__container">
                <div class="options__name">Рамка</div>
            </div>
            <div class="arrow">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#CACACA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>

        <div class="seating">
                <div class="seating__title">Добавить стол</div>
                <div class="seating__container">
                    <div class="seating__row">
                        <div class="seating__item" data-type="spouses">
                            <div class="table1"></div>
                        </div>
                        <div class="seating__item" data-type="round">
                            <div class="table2"></div>
                        </div>
                        <div class="seating__item" data-type="rectangle">
                            <div class="table3"></div>
                        </div>
                    </div>
                    <div class="seating__row">
                        <div class="seating__item" data-type="square">
                            <div class="table4"></div>
                        </div>
                        <div class="seating__item" data-type="p">
                            <div class="table5"></div>
                        </div>
                        <div class="seating__item" data-type="t">
                            <div class="table6"></div>
                        </div>
                    </div>
                </div>
        </div>
    </div>

    <div class="popup__table"></div>

    <div class="popup" id="color_popup">
        <div class="popup__container">
            <div class="popup__header">
                <div class="d-flex justify-space-between">
                    <div class="popup__name">Цвета</div>
                    <div class="popup__close">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1L1 10" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 1L10 10" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="popup__body pallete">
                <div class="pallete__item" data-color="#BA94E0"></div>
                <div class="pallete__item" data-color="#FFC2E7"></div>
                <div class="pallete__item" data-color="#F1EBAF"></div>
                <div class="pallete__item" data-color="#AFEED0"></div>
                <div class="pallete__item" data-color="#96E6FF"></div>
                <div class="pallete__item active" data-color="#ECCBB3"></div>
                <div class="pallete__item" data-color="#FFBD81"></div>
                <div class="pallete__item" data-color="#F4B2FF"></div>
                <div class="pallete__item" data-color="#B6B6B6"></div>
                <div class="pallete__item" data-color="#CDEAA8"></div>
                <div class="pallete__item" data-color="#FFA3A3"></div>
                <div class="pallete__item" data-color="#ABCDFF"></div>
            </div>
			
        </div>
        
    </div>

    <div class="popup" id="frame_popup">
        <div class="popup__container">
            <div class="popup__header">
                <div class="d-flex justify-space-between">
                    <div class="popup__name">Выбор рамки</div>
                    <div class="popup__close">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1L1 10" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 1L10 10" stroke="#C4C4C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="popup__body frame">
                <div class="frame__item active" data-frame="v1">
                    <div class="frame1"></div>
                </div>
                <div class="frame__item"  data-frame="v2">
                    <div class="frame2"></div>
                </div>
                <div class="frame__item"  data-frame="v3">
                    <div class="frame3"></div>
                </div>
            </div>
        </div>
    </div>

	<header class="header header--fixed d-flex justify-space-between align-center">

        <div class="header__name">
            <div id="header__title" class="header__title" contenteditable spellcheck="false">Заголовок</div>
            <div id="header__subtitle" class="header__subtitle" contenteditable spellcheck="false">Подзаголовок</div>
        </div>
			
<script type="text/javascript">(function() {
  if (window.pluso)if (typeof window.pluso.start == "function") return;
  if (window.ifpluso==undefined) { window.ifpluso = 1;
    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
    s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
    var h=d[g]('body')[0];
    h.appendChild(s);
  }})();</script>
<div id="social">
	<div class="pluso" data-background="transparent" data-options="big,round,line,horizontal,nocounter,theme=01" data-services="facebook,twitter,vkontakte,odnoklassniki,email" data-url="https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/" data-title="Рассадка на свадьбу" data-description="Рассадка на свадьбу"></div>
</div>
		
        <div class="header__actions d-flex">
			
	
			
            <div class="clear_btn d-flex justify-space-between align-center" id="delete_btn">
                <p>Очистить</p>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1L13 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
    
            <div class="d-flex justify-space-between align-center">
                <form method="post" id="save_a_sand">
                    <input id="save_to_send_input" name="save_to_send_input" type="hidden">
                    <input id="save_to_send_text" name="save_to_send_text" type="hidden">
                    <div id="save_to_send" name="save_to_send" class="save_btn">
						<p>Сохранить</p>
						
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4444 17H1" stroke="#CECECE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.77734 7.22223L7.22179 11.6667L11.6662 7.22223" stroke="#CECECE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.22266 11.6667V1" stroke="#CECECE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </form>
            </div>
            <div class="share_btn d-flex justify-center align-center">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0004 6.81818C15.3561 6.81818 16.455 5.71924 16.455 4.36363C16.455 3.00803 15.3561 1.90909 14.0004 1.90909C12.6448 1.90909 11.5459 3.00803 11.5459 4.36363C11.5459 5.71924 12.6448 6.81818 14.0004 6.81818Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.18208 12.5454C5.53769 12.5454 6.63663 11.4465 6.63663 10.0909C6.63663 8.73529 5.53769 7.63635 4.18208 7.63635C2.82648 7.63635 1.72754 8.73529 1.72754 10.0909C1.72754 11.4465 2.82648 12.5454 4.18208 12.5454Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.0004 18.2727C15.3561 18.2727 16.455 17.1738 16.455 15.8182C16.455 14.4626 15.3561 13.3636 14.0004 13.3636C12.6448 13.3636 11.5459 14.4626 11.5459 15.8182C11.5459 17.1738 12.6448 18.2727 14.0004 18.2727Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.30078 11.3264L11.889 14.5827" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.8808 5.59909L6.30078 8.85545" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

        </div>
    </header>
		
    <div id="zoom_block">
        <input type="hidden" id="cur_zoom" value="1">
        <div id="ZoomIn" class="zoom">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2197 2.97693V21.844" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.78613 12.4104H21.6532" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div id="ZoomOut" class="zoom">
            <svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.78613 2.21973H21.6532" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>

    <div class="burger">
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H21.7023" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 11H21.7023" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 20H21.7023" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>

    <div class="mobile_menu" id="m_main">
        <div class="mobile_menu__header">
            <div class="title">Меню</div>
            <div class="close">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M21 2L2 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 2L21 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="item d-flex justify-center align-center p11">Добавить стол</div>
        <div class="seating__container table_designer">
            <div class="seating__row">
                <div class="table__item" data-href="m_table" data-type="spouses">
                    <div class="table1"></div>
                </div>
                <div class="table__item" data-href="m_table" data-type="round">
                    <div class="table2"></div>
                </div>
                <div class="table__item" data-href="m_table" data-type="rectangle">
                    <div class="table3"></div>
                </div>
            </div>
            <div class="seating__row">
                <div class="table__item" data-href="m_table" data-type="square">
                    <div class="table4"></div>
                </div>
                <div class="table__item" data-href="m_table" data-type="p">
                    <div class="table5"></div>
                </div>
                <div class="table__item" data-href="m_table" data-type="t">
                    <div class="table6"></div>
                </div>
            </div>
        </div>
        <div class="mobile_menu__item d-flex align-center" data-href="m_color">
            <div class="item__left d-flex align-center">
                <div class="item__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="31" viewBox="0 0 28 31" fill="none">
                        <path d="M24.2377 16.4941L13.891 6.14746V4.95339C13.891 2.43048 11.8385 0.37793 9.3156 0.37793C6.79269 0.37793 4.74014 2.43048 4.74014 4.95339V13.5335L0.258444 18.0152C-0.086148 18.3598 -0.086148 18.9185 0.258444 19.2631L10.8636 29.8683C11.0359 30.0405 11.2617 30.1267 11.4875 30.1267C11.7133 30.1267 11.9392 30.0406 12.1114 29.8683L24.2377 17.7419C24.5823 17.3974 24.5823 16.8387 24.2377 16.4941ZM6.50487 4.95339C6.50487 3.40355 7.76576 2.14265 9.3156 2.14265C10.8654 2.14265 12.1263 3.40355 12.1263 4.95339V6.1474L6.50493 11.7688V4.95339H6.50487ZM11.4875 27.9965L2.13023 18.6392L4.44461 16.3248L13.8019 25.6821L11.4875 27.9965ZM15.0497 24.4343L5.69239 15.077L12.1263 8.64308V10.8983C11.5382 11.2142 11.1373 11.8351 11.1373 12.548C11.1373 13.5798 11.9768 14.4193 13.0086 14.4193C14.0405 14.4193 14.88 13.5798 14.88 12.548C14.88 11.8351 14.4791 11.2142 13.891 10.8983V8.64314L22.3659 17.1181L15.0497 24.4343Z" fill="#9B84B9"/>
                        <path d="M25.6254 22.914C25.3388 22.6057 24.9332 22.4287 24.5125 22.4287C24.0918 22.4287 23.6862 22.6056 23.3996 22.914C21.8239 24.6101 21.0249 25.9878 21.0249 27.0091C21.0249 28.9322 22.5894 30.4967 24.5125 30.4967C26.4355 30.4967 28 28.9321 28 27.0091C28 25.9878 27.2011 24.61 25.6254 22.914ZM24.5125 28.732C23.5625 28.732 22.7896 27.9591 22.7896 27.0091C22.7896 26.6078 23.3242 25.6276 24.5125 24.3116C25.7008 25.6277 26.2353 26.6078 26.2353 27.0091C26.2353 27.9591 25.4625 28.732 24.5125 28.732Z" fill="#9B84B9"/>
                    </svg>
                </div>
                <div class="item">Цвет фона</div>
            </div>
            <div class="item__right d-flex align-center">
                <div class="color_picker">
                    <div class="color_picker__value"></div>
                </div>
                <div class="arrow">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L1 9" stroke="#CACACA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="mobile_menu__item d-flex align-center" data-href="m_vin">
            <div class="item__left d-flex align-center">
                <div class="item__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 25 29" fill="none">
                        <path d="M0.28125 23.1807C0.28125 24.523 1.55663 25.2331 2.86974 25.536C3.17257 26.849 3.88272 28.1244 5.225 28.1244C6.80579 28.1244 7.79591 26.4765 10.4987 26.4765H10.9927C11.447 26.4765 11.8167 26.8462 11.8167 27.3005C11.8167 27.7555 12.1856 28.1244 12.6406 28.1244C13.0957 28.1244 13.4646 27.7555 13.4646 27.3005C13.4646 26.8462 13.8342 26.4765 14.2885 26.4765H14.7826C17.4806 26.4765 18.4779 28.1244 20.0562 28.1244C21.3985 28.1244 22.1087 26.849 22.4115 25.536C23.7246 25.2331 25 24.523 25 23.1807C25 21.6323 23.3521 20.639 23.3521 18.8073V15.7651C23.3521 15.3107 23.7217 14.9411 24.176 14.9411C24.6311 14.9411 25 14.5722 25 14.1172C25 13.6621 24.6311 13.2932 24.176 13.2932C23.7217 13.2932 23.3521 12.9236 23.3521 12.4692V9.31716C23.3521 7.21502 25 6.73674 25 4.94375C25 3.60147 23.7246 2.89138 22.4115 2.58849C22.1086 1.27543 21.3985 0 20.0562 0C18.4741 0 17.4884 1.64792 14.7826 1.64792H14.2885C13.8342 1.64792 13.4646 1.27829 13.4646 0.823958C13.4646 0.368914 13.0957 0 12.6406 0C12.1856 0 11.8167 0.368914 11.8167 0.823958C11.8167 1.27829 11.447 1.64792 10.9927 1.64792H10.4987C7.80185 1.64792 6.8025 0 5.225 0C3.88272 0 3.17263 1.27543 2.86974 2.58849C1.55668 2.89138 0.28125 3.60147 0.28125 4.94375C0.28125 6.75316 1.92917 7.20074 1.92917 9.31716V12.4692C1.92917 12.9236 1.55954 13.2932 1.10521 13.2932C0.650164 13.2932 0.28125 13.6621 0.28125 14.1172C0.28125 14.5722 0.650164 14.9411 1.10521 14.9411C1.55954 14.9411 1.92917 15.3107 1.92917 15.7651V18.8073C1.92917 20.9094 0.28125 21.3878 0.28125 23.1807ZM3.57708 18.8073V15.7651C3.57708 15.1326 3.3383 14.5548 2.94615 14.1172C3.3383 13.6795 3.57708 13.1017 3.57708 12.4692V9.31716C3.57708 6.77684 1.92917 5.88004 1.92917 4.94375C1.92917 4.5638 2.96164 4.19867 3.67074 4.11446C4.05163 4.0709 4.35215 3.77038 4.39571 3.38949C4.47503 2.69616 4.8462 1.64792 5.225 1.64792C6.02006 1.64792 7.53862 3.29583 10.4987 3.29583H10.9927C11.6252 3.29583 12.203 3.05705 12.6406 2.6649C13.0783 3.05705 13.656 3.29583 14.2885 3.29583H14.7826C17.7458 3.29583 19.2564 1.64792 20.0562 1.64792C20.4362 1.64792 20.8013 2.68039 20.8855 3.38944C20.929 3.76901 21.2294 4.06915 21.6088 4.11424C22.3196 4.19867 23.3521 4.5638 23.3521 4.94375C23.3521 5.87499 21.7042 6.78695 21.7042 9.31716V12.4692C21.7042 13.1017 21.9429 13.6795 22.3351 14.1172C21.9429 14.5548 21.7042 15.1326 21.7042 15.7651V18.8073C21.7042 21.4699 23.3521 22.1869 23.3521 23.1807C23.3521 23.5606 22.3196 23.9258 21.6105 24.01C21.2296 24.0535 20.9291 24.3541 20.8855 24.735C20.8062 25.4283 20.4351 26.4765 20.0562 26.4765C19.2609 26.4765 17.7428 24.8286 14.7826 24.8286H14.2885C13.656 24.8286 13.0783 25.0674 12.6406 25.4595C12.203 25.0674 11.6252 24.8286 10.9927 24.8286H10.4987C7.53576 24.8286 6.02462 26.4765 5.225 26.4765C4.84505 26.4765 4.47998 25.4441 4.39571 24.735C4.35215 24.3541 4.05163 24.0535 3.67074 24.01C2.97741 23.9307 1.92917 23.5595 1.92917 23.1807C1.92917 22.2495 3.57708 21.3375 3.57708 18.8073Z" fill="#9B84B9"/>
                        <path d="M6.04906 23.1803H19.2324C19.6874 23.1803 20.0563 22.8114 20.0563 22.3563V5.76732C20.0563 5.31227 19.6874 4.94336 19.2324 4.94336H6.04906C5.59401 4.94336 5.2251 5.31227 5.2251 5.76732V22.3563C5.2251 22.8114 5.59401 23.1803 6.04906 23.1803ZM6.87301 6.59128H18.4084V21.5324H6.87301V6.59128Z" fill="#9B84B9"/>
                    </svg>
                </div>
                <div class="item">Рамка</div>
            </div>
            <div class="arrow">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L1 9" stroke="#CACACA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
        </div>
    </div>

    <div class="mobile_menu" id="m_color">
        <div class="mobile_menu__header">
            <div class="d-flex align-center m_back">
                <div class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" viewBox="0 0 6 13" fill="none">
                        <path d="M5 11.0845L1 6.04226L5 1" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="item">Назад</div>
            </div>
            <div class="close">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M21 2L2 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 2L21 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="item d-flex justify-center align-center p11">Выберите цвет</div>
        <div class="popup__body pallete">
                <div class="d-flex align-center justify-between w100">
                    <div class="pallete__item" data-color="#BA94E0"></div>
                    <div class="pallete__item" data-color="#FFC2E7"></div>
                    <div class="pallete__item" data-color="#F1EBAF"></div>
                    <div class="pallete__item" data-color="#AFEED0"></div>
                </div>
                <div class="d-flex align-center justify-between w100">
                    <div class="pallete__item" data-color="#96E6FF"></div>
                    <div class="pallete__item active" data-color="#ECCBB3"></div>
                    <div class="pallete__item" data-color="#FFBD81"></div>
                    <div class="pallete__item" data-color="#F4B2FF"></div>
                </div>
                <div class="d-flex align-center justify-between w100">
                    <div class="pallete__item" data-color="#B6B6B6"></div>
                    <div class="pallete__item" data-color="#CDEAA8"></div>
                    <div class="pallete__item" data-color="#FFA3A3"></div>
                    <div class="pallete__item" data-color="#ABCDFF"></div>
                </div>
            </div>
    </div>


    <div class="mobile_menu" id="m_vin">
        <div class="mobile_menu__header">
            <div class="d-flex align-center m_back">
                <div class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" viewBox="0 0 6 13" fill="none">
                        <path d="M5 11.0845L1 6.04226L5 1" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="item">Назад</div>
            </div>
            <div class="close">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M21 2L2 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 2L21 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="item d-flex justify-center align-center p11">Выбор рамки</div>
        <div class="popup__body frame">
            <div class="d-flex align-center justify-between w100">
                <div class="frame__item active" data-frame="v1">
                    <div class="frame1"></div>
                </div>
                <div class="frame__item"  data-frame="v2">
                    <div class="frame2"></div>
                </div>
            </div>
            <div class="d-flex align-center justify-between w100">
                <div class="frame__item"  data-frame="v3">
                    <div class="frame3"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="mobile_menu" id="m_table">
        <div class="mobile_menu__header">
            <div class="d-flex align-center m_back">
                <div class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" viewBox="0 0 6 13" fill="none">
                        <path d="M5 11.0845L1 6.04226L5 1" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="item">Назад</div>
            </div>
            <div class="close">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M21 2L2 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 2L21 21" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="m_table__inner"></div>
    </div>
	
    <script src="https://unpkg.com/@popperjs/core@2"></script>

</body>

</html>