"use strict";

var currentShape

$(document).ready(function () {

    //карта по умолчанию
    var def = '<div id="work_place" class="v1vin" style="position: relative; background-color: rgb(210, 196, 167); left: 0px; top: 0px; width: 100%; height: 100%; transform: scale(1, 1);"><div class="vin" id="v1"></div><div id="center_aling"></div></div>';

    $("#main_work_screen").html(def);

    //столы по умолчанию
    var def_tables = '<div class="new_table mg ui-resizable ui-draggable ui-draggable-handle" data-id="310924699" data-type="mg" data-places="2,0,0,0,0" style="max-height: 226px; max-width: 403px; min-height: 113px; min-width: 201.5px; left: 3px; top: -202px;"><div class="remove_tbl"></div><div class="stul_guest s1" data-stul_guest_id="309110360"><div class="input_out"><div class="input"><input type="text" value="Жених" class="input_name"></div></div><img src="images/tables/chair.svg"></div><div class="stul_guest s2" data-stul_guest_id="309110360"><div class="input_out"><div class="input"><input type="text" value="Невеста" class="input_name"></div></div><img src="images/tables/chair.svg"></div><img src="images/tables/mg.png"><div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div></div><div class="new_table table round ui-resizable ui-draggable ui-draggable-handle" data-id="317730942" data-type="round" data-places="0,0,0,0,6" style="max-height: 356px; max-width: 355px; min-height: 178px; min-width: 177.5px; left: -597px; top: 6px;"><div class="remove_tbl"></div><img src="images/tables/round.png"><div class="stul_guest" data-stul_guest_id="602151099" style="transform: rotate(0deg);"><div class="input_out"><div class="input" style="transform: rotate(360deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="stul_guest" data-stul_guest_id="9096598" style="transform: rotate(60deg);"><div class="input_out"><div class="input" style="transform: rotate(300deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="stul_guest" data-stul_guest_id="890964687" style="transform: rotate(120deg);"><div class="input_out"><div class="input" style="transform: rotate(240deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="stul_guest" data-stul_guest_id="372073738" style="transform: rotate(180deg);"><div class="input_out"><div class="input" style="transform: rotate(180deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="stul_guest" data-stul_guest_id="225992895" style="transform: rotate(240deg);"><div class="input_out"><div class="input" style="transform: rotate(120deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="stul_guest" data-stul_guest_id="667764769" style="transform: rotate(300deg);"><div class="input_out"><div class="input" style="transform: rotate(60deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div></div><div class="new_table table square_x3 ui-resizable ui-draggable ui-draggable-handle" data-id="912189811" data-type="square" data-places="3,3,3,3,0" style="max-height: 406px; max-width: 406px; min-height: 203px; min-width: 203px; left: 3px; top: 83px;"><div class="remove_tbl"></div><img src="images/tables/square_x3.png"> <div class="stul_guest s1" style="transform: rotate(0deg);" data-stul_guest_id="501106586"><div class="input_out"><div class="input" style="transform: rotate(360deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"> </div><div class="stul_guest s2" style="transform: rotate(0deg);" data-stul_guest_id="835530154"><div class="input_out"><div class="input" style="transform: rotate(360deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"> </div><div class="stul_guest s3" style="transform: rotate(0deg);" data-stul_guest_id="332285666"><div class="input_out"><div class="input" style="transform: rotate(360deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"> </div><div class="stul_guest s4" style="transform: rotate(90deg);" data-stul_guest_id="717586924"><div class="input_out"><div class="input" style="transform: rotate(270deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"> </div><div class="stul_guest s5" style="transform: rotate(90deg);" data-stul_guest_id="541809988"><div class="input_out"><div class="input" style="transform: rotate(270deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"></div><div class="stul_guest s6" style="transform: rotate(90deg);" data-stul_guest_id="494859870"><div class="input_out"><div class="input" style="transform: rotate(270deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"> </div><div class="stul_guest s1" style="transform: rotate(180deg);" data-stul_guest_id="987102655"><div class="input_out"><div class="input" style="transform: rotate(180deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"> </div><div class="stul_guest s2" style="transform: rotate(180deg);" data-stul_guest_id="911852910"><div class="input_out"><div class="input" style="transform: rotate(180deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"> </div><div class="stul_guest s3" style="transform: rotate(180deg);" data-stul_guest_id="881246585"><div class="input_out"><div class="input" style="transform: rotate(180deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"> </div><div class="stul_guest s4" style="transform: rotate(270deg);" data-stul_guest_id="665285687"><div class="input_out"><div class="input" style="transform: rotate(90deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"> </div><div class="stul_guest s5" style="transform: rotate(270deg);" data-stul_guest_id="939856282"><div class="input_out"><div class="input" style="transform: rotate(90deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"> </div><div class="stul_guest s6" style="transform: rotate(270deg);" data-stul_guest_id="67138850"><div class="input_out"><div class="input" style="transform: rotate(90deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div></div><img src="images/tables/chair.svg"> </div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div></div><div class="new_table table round ui-resizable ui-draggable ui-draggable-handle" data-id="651161229" data-type="round" data-places="0,0,0,0,6" style="max-height: 356px; max-width: 355px; min-height: 178px; min-width: 177.5px; left: 669px; top: 12px;"> <div class="remove_tbl"></div><img src="images/tables/round.png"><div class="stul_guest" data-stul_guest_id="276413096" style="transform: rotate(0deg);"><div class="input_out"><div class="input" style="transform: rotate(360deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="stul_guest" data-stul_guest_id="207672238" style="transform: rotate(60deg);"><div class="input_out"><div class="input" style="transform: rotate(300deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="stul_guest" data-stul_guest_id="951537927" style="transform: rotate(120deg);"><div class="input_out"><div class="input" style="transform: rotate(240deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="stul_guest" data-stul_guest_id="818930060" style="transform: rotate(180deg);"><div class="input_out"><div class="input" style="transform: rotate(180deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="stul_guest" data-stul_guest_id="587934240" style="transform: rotate(240deg);"><div class="input_out"><div class="input" style="transform: rotate(120deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="stul_guest" data-stul_guest_id="908532244" style="transform: rotate(300deg);"><div class="input_out"><div class="input" style="transform: rotate(60deg);"><input type="text" value="Фамилия Имя" class="input_name"><input type="text" value="Отчество" class="input_family"></div></div><img src="images/tables/chair.svg"></div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div></div>';
	
	//автосохранение
	function autosave() {
		if ($("#logout").html()) {
		
		} else {
			setTimeout(function(){
  				saveSeat();
				//alert("123");
			}, 30000); //1000 - 1 секунда
		}
	}
	
	
	if ($("#logout").html()) {
		
	} else {
		loadMap();
	}
	
	
	
	
	function loadMap() {
	
		
	var url = window.location.hostname;	
	var seatId = window.location.href.substr(window.location.href.lastIndexOf('=') + 1); //seat_id
		
    var fileUrl = '/save/' + seatId + '.json';

    var ajaxUrl = 'https://' + url + fileUrl;

    $.getJSON(ajaxUrl, function (data) {
        $("#header__title").html(data.header); //заголовок
        $("#header__subtitle").html(data.subheader); //подзаголовок
        $("body").css("background-color", data.background_color); //цвет фона
        $("#work_place").css("background-color", data.background_color); //цвет фона
        $(".color_picker__value").css("background-color", data.background_color); //цвет индикатора

        //цвет палитры
        $(".pallete__item").removeClass("active");
        $('[data-color="' + data.background_color + '"]').addClass("active");

        //тип рамки
        if (data.frame__item == 'v1') {
            $(".vin").attr("id", data.frame__item);
        } else if (data.frame__item == 'v2') {
            $("#work_place").removeClass("v1vin");
            $(".vin").attr("id", data.frame__item);
            $(".vin").html('<div class="left_top"></div><div class="top"></div><div class="right_top"></div><div class="left_bottom"></div><div class="bottom"></div><div class="right_bottom"></div><div class="left"></div><div class="right"></div>');
        } else if (data.frame__item == 'v3') {
            $("#work_place").removeClass("v1vin");
            $(".vin").attr("id", data.frame__item);
            $(".vin").html('<div class="outer"></div><div class="inner"></div>');
        }

        $(".frame__item").removeClass("active");
        $('[data-frame="' + data.frame__item + '"]').addClass("active");

        //ширина и высота рассадки
        $("#work_place").css("width", data.work_place_width);
        $("#work_place").css("height", data.work_place_height);

        var tables_count = data.tables.table_id.length; //количество столов


        for (var i = 0; i < tables_count; i++) {
            var top = data.tables.table_params.places[i].split(',');
            var left = data.tables.table_params.places[i].split(',');
            var right = data.tables.table_params.places[i].split(',');
            var bottom = data.tables.table_params.places[i].split(',');
            var around = data.tables.table_params.places[i].split(',');

            var coordinate = data.tables.table_params.coordinate[i].split(',');
            var table_size = data.tables.table_params.table_size[i].split(',');

            window.currentShape = {
                table_id: data.tables.table_id[i],
                type: data.tables.table_type[i],
                selected: {
                    top: Number(top[0]),
                    left: Number(left[1]),
                    right: Number(right[2]),
                    bottom: Number(bottom[3]),
                    around: Number(around[4])
                },
                coordinate: {
                    topc: coordinate[0],
                    leftc: coordinate[1]
                },
                table_size: {
                    table_width: table_size[0],
                    table_height: table_size[1]
                }
            };
            //добавление стола
            addNewTable();
            //координаты стола
            $('.new_table[data-id="' + currentShape.table_id + '"]').css("top", currentShape.coordinate.topc);
            $('.new_table[data-id="' + currentShape.table_id + '"]').css("left", currentShape.coordinate.leftc);
            //размеры стола
            $('.new_table[data-id="' + currentShape.table_id + '"]').css("width", currentShape.table_size.table_width);
            $('.new_table[data-id="' + currentShape.table_id + '"]').css("height", currentShape.table_size.table_height);
        }
        //Имя Фамилия Отчество
        var c_count = data.tables.chairs.chair_id.length; //количество стульев

        for (var j = 0; j < c_count; j++) {
            $('.input_name').eq(j).val(data.tables.chairs.str1[j]);
            $('.input_family').eq(j).val(data.tables.chairs.str2[j]);
        }
		
    });
		
		/*
	if ($("#logout").html()) {
        initialize();
    } else {
        //$('.remove_tbl').remove();
		//$('.ui-resizable-handle').remove();
        $(".input_name").attr("readonly", "readonly");
        $(".input_family").attr("readonly", "readonly");
        $('#header__title').attr('contenteditable', 'false');
        $('#header__subtitle').attr('contenteditable', 'false');
    }
    */
		return false;
}
	
	function saveSeat (actual) {
            //параметры рассадки
            var header__title = $("#header__title").html(); //заголовок
            var header__subtitle = $("#header__subtitle").html(); //подзаголовок
            var background_color = $(".pallete__item.active").attr("data-color"); //цвет фона
            var frame__item = $(".frame__item.active").attr("data-frame"); //тип рамки
            var work_place_width = $("#work_place").css("width"); //ширина расскадки
            var work_place_height = $("#work_place").css("height"); //высота расскадки
            //id стола
            var table_id = $('.new_table[data-id]').map(function () {
                return this.dataset.id;
            }).get();
            //тип стола
            var table_type = $('.new_table[data-type]').map(function () {
                return this.dataset.type;
            }).get();
            //тип рассадки
            var places = $('.new_table[data-places]').map(function () {
                return this.dataset.places;
            }).get();
            //координаты стола
            var coordinate = $('.new_table').map(function () {
                return this.style.top + ',' + this.style.left;
            }).get();
            //размер стола
            var table_size = $('.new_table').map(function () {
                return this.style.width + ',' + this.style.height;
            }).get();
            //id стула
            var chair_id = $('.stul_guest[data-stul_guest_id]').map(function () {
                return this.dataset.stul_guest_id;
            }).get();
            //строка1
            var str1 = $('.input_name').map(function () {
                return this.value;
            }).get();
            //строка2
            var str2 = $('.input_family').map(function () {
                return this.value;
            }).get();

            var params = {
                header: header__title,
                subheader: header__subtitle,
                background_color: background_color,
                frame__item: frame__item,
                work_place_width: work_place_width,
                work_place_height: work_place_height,
                tables: {
                    table_id: table_id,
                    table_type: table_type,
                    table_params: {
                        places: places,
                        coordinate: coordinate,
                        table_size: table_size
                    },
                    chairs: {
                        chair_id: chair_id,
                        str1: str1,
                        str2: str2
                    }
                }
            };

            var data = JSON.stringify(params);
			
			if ($("#logout").html()) {
				
				$.ajax({
                type: 'POST',
                url: 'save/sendmail.php',
                success: function (data) {
                    alert("Письмо отправлено: " + data);
                }
            });
			
			if(actual == "actual") {
				$.ajax({
                	type: 'POST',
                	url: 'save/save.php?actual=actual',
                	data: data,
                	dataType: 'json',
                	success: function (arr) {
                    	alert("Рассадка сохранена!");
						history.pushState(null, null, "https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/index.php?seat_id=" + JSON.stringify(arr.seat_id).split('"').join(''));
                	}
            	});
			} else {
				$.ajax({
                	type: 'POST',
                	url: 'save/save.php',
					data: data,
                	dataType: 'json',
                	success: function (arr) {
                    	alert("Рассадка сохранена!");
						history.pushState(null, null, "https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/index.php?seat_id=" + JSON.stringify(arr.seat_id).split('"').join(''));
						//window.s_id = JSON.stringify(arr.seat_id).split('"').join('');
                	}
            	});
			}
			
			} else {
				
				var sessid = getCookie("PHPSESSID");
				
				$.ajax({
                	type: 'POST',
                	url: 'save/autosave.php?sessid='+sessid,
					data: data,
                	dataType: 'json',
                	success: function () {
						
						
 						
						
                    	alert("Автосохранение рассадки!");
						//alert(getCookie("PHPSESSID"));
						
						//history.pushState(null, null, "https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/index.php?seat_id=" + JSON.stringify(arr.seat_id).split('"').join(''));
						//window.s_id = JSON.stringify(arr.seat_id).split('"').join('');
                	}
            	});
			}
			
			
            
		return false;
		}
	
    //сохранение карты json
	
	
    $("#save_to_send").click(function () {
        //pop_up
        if (getCookie("id")) {
            //Вход выполнен(Всплывающее окно регистрации\входа не вызывается)
			saveSeat();
        } else {
            //Вход НЕ ВЫПОЛНЕН - вызвать окно входа\регистраци
            showLoginScreen();
        }
		//return false;
    });
	
	
	$('[value=Регистрация]').click(function () {
		var form = $("#reg_form").serialize();
				
		$.ajax({
        	type: 'POST',
            url: 'script/reg.php',
            data: form, 
            dataType: 'json',
            success: function (arr) {

				alert(JSON.stringify(arr.error));
				
				$("#pop_up").fadeOut(300);
        		$('#backdrop').fadeOut(300);
				
				if(getCookie("id")) {
					$(".share_btn").css("display", "inline-block");
					if ($("#logout").html()) {
		
					} else {
						$("#edit").remove();
						
					$(".header__actions").append("<div id='logout' class='d-flex save_btn'><a href='https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/logout.php'><p>Выйти</p></a></div>");
					}
				}
				
				saveSeat();
				
				alert(s_id); 
				
				//alert("У пользователя есть рассадка");
				/*
				var url = window.location.hostname;
				var seatId = window.location.href.substr(66, 14); //seat_id
    			var fileUrl = '/save/' + seatId + '.json';

    			var ajaxUrl = 'https://' + url + fileUrl;
				*/
				
				history.pushState(null, null, "https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/index.php?seat_id=" + "s_id");
				
				
					
				loadMap();
		
            }
		});
		return false;
	});
	
	
	
	$('[value=Войти]').click(function () {
		var form = $("#log_form").serialize();
		
		$.ajax({
            type: 'POST',
            url: 'script/login.php',
            data: form, 
            dataType: 'json',
            success: function (arr_error) {
				
				alert(JSON.stringify(arr_error.error));
				
				$("#pop_up").fadeOut(300);
        		$('#backdrop').fadeOut(300);
				
				if(getCookie("id")) {
					$(".share_btn").css("display", "inline-block");
					if ($("#logout").html()) {
		
					} else {
						$("#edit").remove();
						
						$('.options').css("display", "block");
						$(".save_btn").css("display", "flex");
        				$("#delete_btn").css("display", "flex");
						$(".new_table").prepend('<div class="remove_tbl"></div>');
						$(".input_name").removeAttr("readonly");
        				$(".input_family").removeAttr("readonly");
						$('#header__title').attr('contenteditable', 'true');
        				$('#header__subtitle').attr('contenteditable', 'true');
						
						initialize();
						
						$("#work_place").resizable().draggable().disableSelection();
					
					$(".header__actions").append("<div id='logout' class='d-flex save_btn'><a href='https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/logout.php'><p>Выйти</p></a></div>");
					}
				}
				
				saveSeat("actual");
				
				
				history.pushState(null, null, "https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/index.php?seat_id=" + JSON.stringify(arr.seat_id).split('"').join(''));
				$("#center_aling").html(""); //очистить рассадку по умолчанию

				loadMap();	
				
            }
       	});
		return false;
	});
	
	
	
	if(getCookie("id")) {
			//$(".share_btn").css("display", "block");
		if ($("#logout").html()) {
			
		} else {
			
			$(".header__actions").append("<div id='logout' class='d-flex save_btn'><a href='https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/logout.php'><p>Выйти</p></a></div>");
		}
	}
	
	function getCookie(name) {
    	var value = "; " + document.cookie;
    	var parts = value.split("; " + name + "=");
    	if (parts.length == 2) return parts.pop().split(";").shift();
	}
	
    window.wlahref = window.location.href;
    window.homeloc = "https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/";
	
	if (wlahref.match(/utm/)) {
	   window.wlahref = "https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/";
	}


    if ($("#logout").html()) { //вход выполнен
        //загрузва карты пользователя
        $("#work_place").resizable().draggable().disableSelection();
    } else if (wlahref !== homeloc) { //просмотр рассадки
		$('.options').css("display", "none");
		$(".save_btn").css("display", "none");
        $("#delete_btn").css("display", "none");
        $(".header__actions").append('<div id="edit" class="d-flex save_btn"><p>Редактировать</p></div>');
		
		$(".input_name").attr("readonly", "readonly");
        $(".input_family").attr("readonly", "readonly");
        $('#header__title').attr('contenteditable', 'false');
        $('#header__subtitle').attr('contenteditable', 'false');
    } else if (wlahref == homeloc) { //вход не выполнен рассадка по умолчанию
        $("#center_aling").html(def_tables);
        $(".ui-resizable-handle").remove();
        initialize();
		
        $("#work_place").resizable().draggable().disableSelection();
		
		$(".share_btn").css("display", "none");
    } 

    //редактировать рассадку

    $("#edit").click(function () {
        showLoginScreen()
        $("#pop_up").children("p").html("Выполните вход для редактирования");
        $("#reg").remove();
        $(".auth__tabs").remove();
        $('#login-form').fadeIn(300)
    });

function deleteSeat () {
            $.ajax({
                type: 'POST',
                url: 'save/delete.php',
                //data: {data: 'delete'},
                //dataType: 'json',
                success: function (data) {
                    window.location.href = "https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/";
                    alert("Рассадка заархивирована и очищена!");
                }
            });
		}

    //очистить и архивировать рассадку	
    $("#delete_btn").click(function () {
        //pop_up
        if ($("#logout").html()) {
            //Вход выполнен(Всплывающее окно регистрации\входа не вызывается)
			deleteSeat();
        } else {
            //Вход НЕ ВЫПОЛНЕН - вызвать окно входа\регистраци
            showLoginScreen()
        }


        $(".new_table").remove();
    });


    $(".share_btn").click(function () {
        //alert("Поделиться ссылкой: " + wlahref);
        $("#social").css("display", "block");

    });

    
    //$("#work_place").resizable().draggable().disableSelection();
	
	


    $(".new_table").click(function () {
        $(".new_table").css("z-index", "1");
        $(this).css("z-index", "2");
    });

    $('.pallete__item').each(function () {
        var colorHex = $(this).data('color');
        var isActive = $(this).hasClass('active');

        if (isActive) {
            $("#work_place, body").css("background-color", colorHex);
            $('.color_picker__value').css("background-color", colorHex);
        }
        $(this).css('background', colorHex);
    });

    $('.remove_tbl').click(function () {
		autosave();
        $(this).closest('.new_table').remove();
    });
	
	$('.input').keypress(function () {
		autosave();
    });


    $('.seating__item').click(function () {
        var isSelected = $(this).hasClass('active')
        if (isSelected) {
            $(this).removeClass('active')
            $('.table_popup').fadeOut(300)
        } else {
            $('.seating__item').removeClass('active')
            $('.popup').fadeOut(100)
            $(this).addClass('active')
            var newTable = generateTablePopup($(this).data('type'))
            $(".popup__table").html(newTable)
            createPopperTable()
            $('.table_popup').fadeIn(300)

            var popupAddBtn = document.querySelector('.popup__add_button')
            popupAddBtn.addEventListener('click', addNewTable)
			
			$('.popup__add_button').click(function(){
				autosave();
			});
			

            $('.popup__count').click(function () {
                if (currentShape && currentShape.type == 'round') {
                    var selCount = $(this).data('count')
                    $('div[data-direction="around"]').removeClass('active')
                    $(`div[data-direction="around"][data-count="${selCount}"]`).addClass('active')
                    currentShape.selected.around = selCount
                }
                if (currentShape && currentShape.type == 'rect') {
                    var selCount = $(this).data('count')
                    var direction = $(this).data('direction')
                    if (currentShape.selected.top == 0 && (direction == 'left' || direction == 'right') && selCount == 0) {
                        return;
                    }
                    if (currentShape.selected.left == 0 && (direction == 'top' || direction == 'bottom') && selCount == 0) {
                        return;
                    }
                    if (direction == 'top' || direction == 'bottom') {
                        changeDirectionState(['top', 'bottom'], selCount)
                    }
                    if (direction == 'left' || direction == 'right') {
                        changeDirectionState(['left', 'right'], selCount)
                    }
                }
                if (currentShape && currentShape.type == 'square') {
                    var selCount = $(this).data('count')
                    var direction = $(this).data('direction')
                    changeDirectionState(['top', 'bottom', 'left', 'right'], selCount)
                }
                if (currentShape && currentShape.type == 'p') {
                    var selCount = $(this).data('count')
                    var direction = $(this).data('direction')
                    if (direction == 'top') {
                        changeDirectionState(['top'], selCount)
                    }
                    if (direction == 'left' || direction == 'right') {
                        changeDirectionState(['left', 'right'], selCount)
                    }
                }
                if (currentShape && currentShape.type == 't') {
                    var selCount = $(this).data('count')
                    var direction = $(this).data('direction')
                    if (direction == 'top') {
                        changeDirectionState(['top'], selCount)
                    }
                    if (direction == 'left' || direction == 'right') {
                        changeDirectionState(['left', 'right'], selCount)
                    }
                    if (direction == 'bottom') {
                        changeDirectionState(['bottom'], selCount)
                    }
                }
            })
            // $(document).on('click', '.popup__add_button', addNewTable)
        }
    })




    $('.table__item').click(function () {
        $('#m_main').fadeOut(300)
        $('#' + $(this).data('href')).show("slide", { direction: "right" }, 300);
        var newTable = generateTablePopup($(this).data('type'))
        $(".m_table__inner").html(newTable)
        $('.table_popup').fadeIn(0)

        var popupAddBtn = document.querySelector('.popup__add_button')
        popupAddBtn.addEventListener('click', addNewTable)
		
		$('.popup__add_button').click(function(){
			autosave();
		});
		

        $('.popup__count').click(function () {
            if (currentShape && currentShape.type == 'round') {
                var selCount = $(this).data('count')
                $('div[data-direction="around"]').removeClass('active')
                $(`div[data-direction="around"][data-count="${selCount}"]`).addClass('active')
                currentShape.selected.around = selCount
            }
            if (currentShape && currentShape.type == 'rect') {
                var selCount = $(this).data('count')
                var direction = $(this).data('direction')
                if (currentShape.selected.top == 0 && (direction == 'left' || direction == 'right') && selCount == 0) {
                    return;
                }
                if (currentShape.selected.left == 0 && (direction == 'top' || direction == 'bottom') && selCount == 0) {
                    return;
                }
                if (direction == 'top' || direction == 'bottom') {
                    changeDirectionState(['top', 'bottom'], selCount)
                }
                if (direction == 'left' || direction == 'right') {
                    changeDirectionState(['left', 'right'], selCount)
                }
            }
            if (currentShape && currentShape.type == 'square') {
                var selCount = $(this).data('count')
                var direction = $(this).data('direction')
                changeDirectionState(['top', 'bottom', 'left', 'right'], selCount)
            }
            if (currentShape && currentShape.type == 'p') {
                var selCount = $(this).data('count')
                var direction = $(this).data('direction')
                if (direction == 'top') {
                    changeDirectionState(['top'], selCount)
                }
                if (direction == 'left' || direction == 'right') {
                    changeDirectionState(['left', 'right'], selCount)
                }
            }
        })
    })







    function changeDirectionState(arr, count) {
        return arr.map(direction => {
            $(`div[data-direction="${direction}"]`).removeClass('active')
            $(`div[data-direction="${direction}"][data-count="${count}"]`).addClass('active')
            currentShape.selected[direction] = count
        })
    }

    $('.burger').click(function () {
        $('#m_main').fadeIn(300)
    })

    $('.mobile_menu .close').click(function () {
        $('.mobile_menu').fadeOut(300)
    })

    $('.popup__close').click(function () {
        $('.popup').removeClass('active').fadeOut(100)
    })

    $(".mobile_menu__item").click(function () {
        $('#m_main').fadeOut(300)
        $('#' + $(this).data('href')).show("slide", { direction: "right" }, 300);
    });

    $(".m_back").click(function () {
        $('.mobile_menu').fadeOut(300)
        $('#m_main').show("slide", { direction: "left" }, 300);
    });



    $('.pallete__item').click(function () {
        var colorHex = $(this).data('color')
        $('.pallete__item').removeClass('active')
        $(this).addClass('active')
        $("#work_place, body").css("background-color", colorHex)
        $('.color_picker__value').css("background-color", colorHex)
    })


    $('.options__item').click(function () {
        var popupId = $(this).data('target')
        if ($('#' + popupId).hasClass('active')) {
            $('#' + popupId).removeClass('active').fadeOut(100)
        } else {
            $('.popup').removeClass('active').fadeOut(100)
            $('#' + popupId).addClass('active').fadeIn(300)
        }
    })


    $('.frame__item').click(function () {
        var frameId = $(this).data('frame')
        if (frameId == 'v1') {
            $('#work_place').addClass('v1vin')
        } else {
            $('#work_place').removeClass('v1vin')
        }
        addVin(frames[frameId])
        $('.frame__item').removeClass('active')
        $(this).addClass('active')
    })

    $('.options__item').each(function (e) {
        var popupId = $(this).data('target')
        var attach = document.querySelector('[data-target=' + popupId + ']')
        var popup = document.getElementById(popupId)

        Popper.createPopper(attach, popup, {
            placement: 'right-start',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 13],
                    },
                },
            ],
        })
    })

    // If an event gets to the body
    $("body").click(function () {
        $(".popup").fadeOut().removeClass("active");
        $(".seating__item").removeClass("active");
    });

    // Prevent events from getting pass .popup
    $(".popup, .options__item, .seating__item, .table__item, .mobile_menu, .popup__table").click(function (e) {
        e.stopPropagation();
    });

    $(window).on('wheel', function (event) {
        $(".popup").fadeOut().removeClass("active");
        return event.originalEvent.deltaY < 0 ? zoomInFn() : zoomOutFn()
    });

    $(document).keyup(function (e) {
        if (e.which == 27) {
            $('.popup').fadeOut(100);
        }
    });

    function createPopperTable() {
        const button = document.querySelector('.seating');
        const tooltip = document.querySelector('.table_popup');

        Popper.createPopper(button, tooltip, {
            placement: 'right-start',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 13],
                    },
                },
            ],
        });

    }
	
	
	

});



jQuery(document).on('touchstart', 'input[type=text]', function () { $(this).focus() })

jQuery(document).on('touchstart', '.remove_tbl', function () { $(this).closest('.new_table').remove() })

jQuery(document).on('touchstart', '.new_table', function () {
    $(".new_table").css("z-index", "1");
    $(this).css("z-index", "2");
})


function zoomInFn() {
    console.log('lol')
    var c = $("#cur_zoom").val();
    var cc = c * 12 / 10;
    $("#cur_zoom").val(cc);
    $("#work_place").css("transform", "scale(" + cc + "," + cc + "")
    $('#ZoomIn').removeClass('animate').addClass('animate')
    setTimeout(function () {
        $('#ZoomIn').removeClass('animate')
    }, 100)
}
function zoomOutFn() {
    var c = $("#cur_zoom").val();
    var cc = c / 12 * 10;
    $("#cur_zoom").val(cc);
    $("#work_place").css("transform", "scale(" + cc + "," + cc + "")
    $('#ZoomOut').removeClass('animate').addClass('animate')
    setTimeout(function () {
        $('#ZoomOut').removeClass('animate')
    }, 100)
}

$(document).on('click', "#ZoomIn", zoomInFn);
$(document).on('click', "#ZoomOut", zoomOutFn);



function addVin(vin) {
    $(".vin").replaceWith(vin)
}

var frames = {
    v1: "<div class='vin' id='v1'></div>",
    v2: "<div class='vin' id='v2'><div class='left_top'></div><div class='top'></div><div class='right_top'></div><div class='left_bottom'></div><div class='bottom'></div><div class='right_bottom'></div><div class='left'></div><div class='right'></div></div>",
    v3: "<div class='vin' id='v3'><div class='outer'></div><div class='inner'></div></div>"
}

var tableTypes = {
    spouses: {
        name: 'Жених и невеста',
        type: 'mg',
        places: { top: ['', ''], left: [], right: [], bottom: [], around: [] }, //top: ['','']
        selected: { top: '', left: null, right: null, bottom: null, around: null },
        shape: '',
    },
    round: {
        name: 'Круглый стол',
        type: 'round',
        places: { top: [], left: [], right: [], bottom: [], around: [5, 6, 7, 8, 9, 10, 11, 12] },
        selected: { top: null, left: null, right: null, bottom: null, around: 5 },
        shape: '',
    },
    rectangle: {
        name: 'Прямоугольный стол',
        type: 'rect',
        places: { top: [0, 1, 2], left: [0, 4, 6, 8, 10, 12, 14, 16, 18], right: [0, 4, 6, 8, 10, 12, 14, 16, 18], bottom: [0, 1, 2], around: [] },
        selected: { top: 1, left: 8, right: 8, bottom: 1, around: null },
        shape: '',
    },
    square: {
        name: 'Квадратный стол',
        type: 'square',
        places: { top: [2, 3, 4, 6], left: [2, 3, 4, 6], right: [2, 3, 4, 6], bottom: [2, 3, 4, 6], around: [] },
        selected: { top: 3, left: 3, right: 3, bottom: 3, around: null },
        shape: '',
    },
    p: {
        name: 'Буквой П',
        type: 'p',
        places: { top: [2, 6], left: [10, 12, 15, 18], right: [10, 12, 15, 18], bottom: [], around: [] },
        selected: { top: 2, left: 12, right: 12, bottom: null, around: null },
        shape: `<svg width="84" height="157" viewBox="0 0 84 157" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="84" height="27" rx="3" fill="#E2E2E2"/><rect width="32" height="157" rx="3" fill="#E2E2E2"/><rect x="52" width="32" height="157" rx="3" fill="#E2E2E2"/></svg>`,
    },
    t: {
        name: 'Буквой Т',
        type: 't',
        places: { top: [6, 8, 10], left: [8, 10, 12, 14, 16], right: [8, 10, 12, 14, 16], bottom: [0, 1], around: [] },
        selected: { top: 8, left: 8, right: 8, bottom: 1, around: null },
        shape: `<svg width="125" height="212" viewBox="0 0 125 212" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="125" height="27" rx="3" fill="#E2E2E2"/><rect x="47" width="32" height="212" rx="3" fill="#E2E2E2"/></svg>`,
    }
}

function addNewTable() {
	
	
	
    $(".popup").fadeOut().removeClass("active");
    $(".mobile_menu").fadeOut()
    $(".seating__item ").removeClass('active')
    var n = $(this).data('type');
    console.log(n)

    if (!currentShape) {
        return
    }



    if (currentShape.type == 'mg') {

        if (!currentShape.table_id) {
            var table_id = $('.new_table').length + Math.floor(Math.random() * 1000000000);
        } else {
            var table_id = currentShape.table_id;
        }

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }



        $("#center_aling").append(`
            <div class="new_table mg" data-id="` + table_id + `" data-type="` + tableTypes.spouses.type + `" data-places="2,0,0,0,0">
                <div class="remove_tbl"></div>
                <div class="stul_guest s1" data-stul_guest_id="` + stul_guest_id + `">
                    <div class="input_out">
                        <div class="input">
                            <input type="text" value="Жених" class="input_name">
                        </div>
                    </div>
                    <img src="images/tables/chair.svg">
                </div>
                <div class="stul_guest s2" data-stul_guest_id="` + stul_guest_id + '2' + `">
                    <div class="input_out">
                        <div class="input">
                            <input type="text" value="Невеста" class="input_name">
                        </div>
                    </div>
                    <img src="images/tables/chair.svg">
                </div>
                <img src="images/tables/mg.png">
            </div>
        `);
		
		
    }

    if (currentShape.type == 'round') {
        spawnTable(generateRoundTable(currentShape.selected.around));

    }

    if (currentShape.type == 'square') {
        spawnTable(generateSquareTable(currentShape.selected.top));
    }

    if (currentShape.type == 'rect') {
        spawnTable(generateRectangleTable(currentShape.selected.top, currentShape.selected.left));
    }

    if (currentShape.type == 'p') {
        spawnTable(generatePTable(currentShape.selected.top, currentShape.selected.left));
    }

    if (currentShape.type == 't') {
        spawnTable(generateTTable(currentShape.selected.top, currentShape.selected.left, currentShape.selected.bottom));
    }
	
	
	
	if ($("#logout").html()) {
		initialize();
	} else if (wlahref !== homeloc) { //просмотр рассадки
		$('.remove_tbl').remove();
		
		$(".input_name").attr("readonly", "readonly");
        $(".input_family").attr("readonly", "readonly");
        $('#header__title').attr('contenteditable', 'false');
        $('#header__subtitle').attr('contenteditable', 'false');
	} else if (wlahref == homeloc) { //вход не выполнен рассадка по умолчанию
        initialize();
		
    } 
	
	
}


function initialize() {
    $(".new_table").each(function () {
        initializeNewTable($(this))
    })
}

function initializeNewTable(el) {
    if (!el) return;
    $(el).css('max-height', $(el).height())
    $(el).css('max-width', $(el).width())
    $(el).css('min-height', $(el).height() / 2)
    $(el).css('min-width', $(el).width() / 2)
    $(el).resizable({
        aspectRatio: true,
        maxHeight: $(el).height(), //300
        minHeight: $(el).height() / 2, //100
        minWidth: $(el).width() / 2,
        maxWidth: $(el).width(),
        resize: function () {
            var w = $(this).width()
            var fact = $(this).width() / parseInt($(this).css('max-width'));
            var ww = 8 * fact;
            var www = 10 * fact;
            var wwa = 8 * fact;
            var wwb = 25 * fact;
            var wwx = w / parseInt($(this).css('max-width')) * 23;
            $(this).find(".input input").css("height", www).css("line-height", www).css("font-size", wwa);
            $(this).find(".num_table").css("font-size", ww);
            $(this).find(".input").css("height", wwb);
            $(this).find(".input_out").css("height", wwb);
            $(this).find(".remove_tbl").css("height", wwx).css("width", wwx);
            $(this).find(".ui-icon-gripsmall-diagonal-se").css("height", wwx).css("width", wwx);
        }
    }).draggable({
        drag: function (event, ui) {
            var c = $("#cur_zoom").val();
            ui.position.left = ui.position.left / c
            ui.position.top = ui.position.top / c
        }
    }).click(function () {
        $(".new_table").css("z-index", "1");
        $(el).css("z-index", "2");
    });

    $('.remove_tbl').click(function () {
        $(this).closest('.new_table').remove();
    });
}

function spawnTable(markup) {
    const spawnedTable = $(markup).appendTo($("#center_aling"))
    return spawnedTable
}

function generateTablePopup(type) {
    var table = tableTypes[type]
    currentShape = { ...table }

    return `
        <div class="popup table_popup" id="${type}">
            <div class="popup_rel">
                <div class="seating__popup">
                    <div class="table__name">${table.name}</div>
                    <div class="popup__body">
                        <div class="${type}">
                            ${table.places.top.length ? `
                                <div class="d-flex horizontal_count justify-center">
                                    ${table.places.top.map(n => `
                                        <div class="popup__count ${table.selected.top == n ? 'active' : ''}" data-count="${n}" data-direction="top">
                                            <div class="popup__num">${n}</div>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ``}
                        
                            <div class="d-flex align-center justify-center" ${table.places.around.length ? 'style="height: 150px; justify-self: center; align-selft: center;"' : ''}>
                                ${table.places.left.length ? `
                                    <div class="d-flex left_count flex-column">
                                        ${table.places.left.map(n => `
                                            <div class="popup__count ${table.selected.left == n ? 'active' : ''}" data-count="${n}" data-direction="left">
                                                <div class="popup__num">${n}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : ``}
                                ${table.places.around.length ? `
                                    ${table.places.around.map((n, idx) => {
        var gap = 360 / table.places.around.length;
        return `<div class="popup__circle" style="transform: rotate(${gap * idx}deg);"><div class="popup__count popup__circle_num ${table.selected.around == n ? 'active' : ''}" style="transform: rotate(${360 - (gap * idx)}deg);" data-count="${n}" data-direction="around" >${n}</div></div>`
    }).join('')}
                            ` : ``}
                                <div class="popup__table">${table.shape.length ? table.shape : ''}</div>
                                ${table.places.right.length ? `
                                    <div class="d-flex right_count flex-column">
                                        ${table.places.right.map(n => `
                                            <div class="popup__count ${table.selected.right == n ? 'active' : ''}" data-count="${n}" data-direction="right">
                                                <div class="popup__num">${n}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : ``}
                            </div>
                            ${table.places.bottom.length ? `
                                <div class="d-flex horizontal_count justify-center">
                                    ${table.places.bottom.map(n => `
                                        <div class="popup__count ${table.selected.bottom == n ? 'active' : ''}" data-count="${n}" data-direction="bottom">
                                            <div class="popup__num">${n}</div>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ``}
                        </div>
                    </div>
                </div>
                <div class="popup__add_button" data-type="${type}">Добавить стол</div>
            </div>
        </div>
    `
}

function generateRoundTable(num) {
    const interval = 360 / num
    let result = ''

    if (!currentShape.table_id) {
        var table_id = $('.new_table').length + Math.floor(Math.random() * 1000000000);
    } else {
        var table_id = currentShape.table_id;
    }


    for (let i = 0; i < num; i++) {

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }

        result += `
            <div class="stul_guest" data-stul_guest_id="` + stul_guest_id + `" style="transform: rotate(${i * interval}deg);">
                <div class="input_out">
                    <div class="input" style="transform: rotate(${360 - (i * interval)}deg);">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.svg">
            </div>
        `
    }
    return `
        <div class="new_table table round" data-id="` + table_id + `" data-type="round" data-places="` + '0,0,0,0,' + num + `"> 
            <div class="remove_tbl"></div>
            <img src="images/tables/round.png">
            ${result}
        </div>
    `
}

function generateRectangleTable(x, y) {
    let result = ''


    if (x > 1) {
        for (let i = 1; i <= x; i++) {

            if (!currentShape.stul_guest_id) {
                var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
            } else {
                var stul_guest_id = currentShape.stul_guest_id;
            }

            result += `
                <div class="stul_guest top${i}" data-stul_guest_id="` + stul_guest_id + `">
                    <div class="input_out">
                        <div class="input"><input type="text" value="Фамилия Имя" class="input_name">
                            <input type="text" value="Отчество" class="input_family">
                        </div>
                    </div>
                    <img src="images/tables/chair.svg">
                </div>
                <div class="stul_guest bottom${i}" data-stul_guest_id="` + stul_guest_id + '2' + `">
                    <div class="input_out">
                        <div class="input" style="transform: rotate(180deg);">
                            <input type="text" value="Фамилия Имя" class="input_name">
                            <input type="text" value="Отчество" class="input_family">
                        </div>
                    </div>
                    <img src="images/tables/chair.svg">
                </div>
            `
        }
    } else if (x == 1) {

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }

        result += `
                <div class="stul_guest top0" data-stul_guest_id="` + stul_guest_id + `">
                    <div class="input_out">
                        <div class="input"><input type="text" value="Фамилия Имя" class="input_name">
                            <input type="text" value="Отчество" class="input_family">
                        </div>
                    </div>
                    <img src="images/tables/chair.svg">
                </div>
                <div class="stul_guest bottom0" data-stul_guest_id="` + stul_guest_id + '2' + `">
                    <div class="input_out">
                        <div class="input" style="transform: rotate(180deg);">
                            <input type="text" value="Фамилия Имя" class="input_name">
                            <input type="text" value="Отчество" class="input_family">
                        </div>
                    </div>
                    <img src="images/tables/chair.svg">
                </div>
            `
    }



    for (let i = 0; i < y; i++) {

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }

        result += `
            <div class="stul_guest s${i + 1}" data-stul_guest_id="` + stul_guest_id + `">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.svg" style="transform: rotate(90deg);">
            </div>
        `
    }

    if (!currentShape.table_id) {
        var table_id = $('.new_table').length + Math.floor(Math.random() * 1000000000);
    } else {
        var table_id = currentShape.table_id;
    }

    for (let i = 0; i < y; i++) {

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }

        result += `
            <div class="stul_guest s${i + y + 1}" data-stul_guest_id="` + stul_guest_id + `">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.svg" style="transform: rotate(270deg);">
            </div>
        `
    }
    return `
        <div class="new_table table rect rect_x${y}${x == 0 ? ' zero' : ''}" data-id="` + table_id + `" data-type="rect" data-places="` + x + ',' + y + ',' + y + ',' + x + ',' + '0' + `">
            <div class="remove_tbl"></div>
            <img src="images/tables/rect_x${y}.png">
            ${result}
        </div>
    `
}

function generatePTable(x, y) {
    let result = ''

    for (let i = 1; i <= x; i++) {

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }

        result += `
            <div class="stul_guest top${i}" data-stul_guest_id="` + stul_guest_id + `">
                <div class="input_out">
                    <div class="input"><input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.svg">
            </div>
        `
    }
    for (let i = 0; i < y; i++) {

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }

        result += `
            <div class="stul_guest s${i + 1}" data-stul_guest_id="` + stul_guest_id + `">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.svg" style="transform: rotate(90deg);">
            </div>
        `
    }

    if (!currentShape.table_id) {
        var table_id = $('.new_table').length + Math.floor(Math.random() * 1000000000);
    } else {
        var table_id = currentShape.table_id;
    }

    for (let i = 0; i < y; i++) {

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }

        result += `
            <div class="stul_guest s${i + y + 1}" data-stul_guest_id="` + stul_guest_id + `">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.svg" style="transform: rotate(270deg);">
            </div>
        `
    }
    return `
        <div class="new_table table p p_x${y}${x == 2 ? ' top2' : ' top6'}" data-id="` + table_id + `" data-type="p" data-places="` + x + ',' + y + ',' + y + ',' + x + ',' + '0' + `">
            <div class="remove_tbl"></div>
            <img src="images/tables/p${y}.png">
            ${result}
        </div>
    `
}

function generateTTable(x, y, b) {
    let result = ''



    for (let i = 1; i <= x; i++) {

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }

        result += `
            <div class="stul_guest top${i}" data-stul_guest_id="` + stul_guest_id + `">
                <div class="input_out">
                    <div class="input"><input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.svg">
            </div>
        `
    }
    for (let i = 0; i < y; i++) {

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }

        result += `
            <div class="stul_guest s${i + 1}" data-stul_guest_id="` + stul_guest_id + `">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.svg" style="transform: rotate(90deg);">
            </div>
        `
    }
    for (let i = 0; i < y; i++) {

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }

        result += `
            <div class="stul_guest s${i + y + 1}" data-stul_guest_id="` + stul_guest_id + `">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.svg" style="transform: rotate(270deg);">
            </div>
        `
    }

    if (!currentShape.table_id) {
        var table_id = $('.new_table').length + Math.floor(Math.random() * 1000000000);
    } else {
        var table_id = currentShape.table_id;
    }

    if (b == 1) {

        if (!currentShape.stul_guest_id) {
            var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
        } else {
            var stul_guest_id = currentShape.stul_guest_id;
        }

        result += `
            <div class="stul_guest bottom1" style="transform: rotate(180deg);" data-stul_guest_id="` + stul_guest_id + `">
                <div class="input_out">
                    <div class="input" style="transform: rotate(180deg);">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.svg">
            </div>
        `
    }
    return `
        <div class="new_table table t t_x${y}${x == 6 ? ' top6' : ''}${x == 8 ? ' top8' : ''}${x == 10 ? ' top10' : ''}${b == 1 ? ' bottom1' : ''}" data-id="` + table_id + `" data-type="t" data-places="` + x + ',' + y + ',' + y + ',' + b + ',' + '0' + `"> 
            <div class="remove_tbl"></div>
            <img src="images/tables/t${y}.png">
            ${result}
        </div>
    `
}

function generateSquareTable(x) {
    let result = ''

    if (!currentShape.table_id) {
        var table_id = $('.new_table').length + Math.floor(Math.random() * 1000000000);
    } else {
        var table_id = currentShape.table_id;
    }

    for (let i = 0; i < 4; i++) {

        for (let j = 1; j <= x; j++) {
            if (!currentShape.stul_guest_id) {
                var stul_guest_id = $('.stul_guest').length + Math.floor(Math.random() * 1000000000);
            } else {
                var stul_guest_id = currentShape.stul_guest_id;
            }
            result += `
                <div class="stul_guest s${(i == 0 || i == 2) ? j : j + x}" style="transform: rotate(${i * 90}deg);" data-stul_guest_id="` + stul_guest_id + `">
                    <div class="input_out">
                        <div class="input" style="transform: rotate(${360 - 90 * i}deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div>
                    </div>
                    <img src="images/tables/chair.svg"> 
                </div>
            `
        }
    }

    return `
        <div class="new_table table square_x${x}" data-id="` + table_id + `" data-type="square" data-places="` + x + ',' + x + ',' + x + ',' + x + ',' + '0' + `">
            <div class="remove_tbl"></div>
            <img src="images/tables/square_x${x}.png"> 
            ${result}
        </div>
    `
}


function showLoginScreen () {
    $("#pop_up").fadeIn(300)
    $('#backdrop').fadeIn(300)
    $("#login-form-link").click(function () {
        $('#reg').fadeOut(200, function () {
            $("#login-form-link").addClass('active')
            $('#reg-form-link').removeClass('active')
            $('#login-form').fadeIn(200)
        })
    })
    $("#reg-form-link").click(function () {
        $('#login-form').fadeOut(200, function () {
            $("#reg-form-link").addClass('active')
            $('#login-form-link').removeClass('active')
            $('#reg').fadeIn(200)
        })
    })
    $("#not_now").click(function () {
        $("#pop_up").fadeOut(300);
        $('#backdrop').fadeOut(300)
    });
}