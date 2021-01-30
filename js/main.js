"use strict";

var currentShape

$(document).ready(function () {
    var nn = window.location.hash.substring(1);
    var screenWidth = window.screen.width;

    if (nn != '') {
        var aa = '/save/' + nn + '.txt';
    } else {
        if (screenWidth > 480) {
            var aa = '/save/start.txt';
        }
        else {
            var aa = '/save/start_mobile.txt';
        }
    }

    $.ajax({
        context: this,
        url: aa,
        dataType: "text",
        success: function (data) {
            $("#main_work_screen").html(data)
            
            $(".ui-resizable-handle").remove();
            $("#work_place").resizable().draggable().disableSelection()

            initialize()

            $(".new_table").click(function () {
                $(".new_table").css("z-index", "1");
                $(this).css("z-index", "2");
            });

            $('.pallete__item').each(function() {
                var colorHex = $(this).data('color')
                var isActive = $(this).hasClass('active')
                if (isActive) {
                    $("#work_place, body").css("background-color", colorHex)
                    $('.color_picker__value').css("background-color", colorHex)
                }
                $(this).css('background', colorHex)
            })

        }
    });


    $('.seating__item').click(function() {
        var isSelected = $(this).hasClass('active');
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




    $('.table__item').click(function() {
        $('#m_main').fadeOut(300)
        $('#' + $(this).data('href')).show("slide", { direction: "right" }, 300);
        var newTable = generateTablePopup($(this).data('type'))
        $(".m_table__inner").html(newTable)
        $('.table_popup').fadeIn(0)

        var popupAddBtn = document.querySelector('.popup__add_button')
        popupAddBtn.addEventListener('click', addNewTable)

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

    $('.burger').click(function() {
        $('#m_main').fadeIn(300)
    })

    $('.mobile_menu .close').click(function() {
        $('.mobile_menu').fadeOut(300)
    })

    $('.popup__close').click(function() {
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

    

    $('.pallete__item').click(function() {
        var colorHex = $(this).data('color')
        $('.pallete__item').removeClass('active')
        $(this).addClass('active')
        $("#work_place, body").css("background-color", colorHex)
        $('.color_picker__value').css("background-color", colorHex)
    })


    $('.options__item').click(function() {
        var popupId = $(this).data('target')
        if ($('#' + popupId).hasClass('active')) {
            $('#' + popupId).removeClass('active').fadeOut(100)
        } else {
            $('.popup').removeClass('active').fadeOut(100)
            $('#'+popupId).addClass('active').fadeIn(300)
        }
    })


    $('.frame__item').click(function() {
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

    $('.options__item').each(function(e) {
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

    $(window).on('wheel', function(event){
        $(".popup").fadeOut().removeClass("active");
        return event.originalEvent.deltaY < 0 ? zoomInFn() : zoomOutFn()
    });

    $(document).keyup(function(e) {
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
$(document).ready(function () {
    $("#menu_open").click(function () {
        $("#menu").toggle(0);
        if ($("#menu").is(':visible')) {
            $("#menu_open i").removeClass("mdi-menu").addClass("mdi-close");
        } else {
            $("#menu_open i").removeClass("mdi-close").addClass("mdi-menu");
        }
    });
    $("#delete_btn").click(function () {
        $(".new_table").remove();
    });
    $("#work_place").draggable();
    // $("#select_bg_bg").change(function () {
    //     var a = $(this).val();
    //     $("#work_place, body").css("background-color", a)
    // });
    $("#select_vin_vin").change(function () {
        var av = $(this).val();
        if (av != 1) {
            $("#work_place").append("<div class='vin' id='" + av + "'><div class='left_top'></div><div class='top'></div><div class='right_top'></div><div class='left_bottom'></div><div class='bottom'></div><div class='right_bottom'></div><div class='left'></div><div class='right'></div></div>")
        } else {
            $("#work_place").append("<div class='vin' id='" + av + "'><img src='/images/vin2/v1.png' class='vin1_v1'></div>")
        }
    });
    $("#add_table_btn").click(function () {
        var b = $("#select_table").val();
        if (b != null) {
            if (b === 'mg') {
                $("#center_aling").append("<div class='new_table mg_table'><div class='remove_tbl'></div><div class='input_out input_out_muj'><div class='input'><input type='text' placeholder='Жених' class='input_name'></div></div><div class='input_out input_out_jen'><div class='input'><input type='text' placeholder='Невеста' class='input_name'></div></div><img src='images/mg.png'></div>");
            } else {
                var n = $(".guest_table").length + 1;

                $("#center_aling").append("<div class='new_table guest_table' data-id='" + n + "'><div class='remove_tbl'></div><div class='num_table'>" + n + "</div><img src='images/stol.png'></div>");
                let i = 0;
                while (i < b) { // выводит 0, затем 1, затем 2
                    var nn = i + 1;
                    var l = 360 / b;
                    var ll = nn * l;
                    var antll = 360 - ll;
                    $(".guest_table[data-id='" + n + "']").append("<div class='stul_guest' style='transform: rotate(" + ll + "deg);'><div class='input_out' style='transform: rotate(" + antll + "deg);'><div class='input'><input type='text' value='имя' class='input_name'><input type='text' value='Фамилия' class='input_family'></div></div><img src='images/stul.png'></div>");
                    i++;
                }

            }
        }


        $(".new_table")
            .resizable({
                
            }).draggable({
                drag: function (event, ui) {

                    var c = $("#cur_zoom").val();

                    ui.position.left = ui.position.left / c
                    ui.position.top = ui.position.top / c

                }
            });

        $('.remove_tbl').click(function () {
            $(this).closest('.new_table').remove();
        });

        $(".new_table").click(function () {
            $(".new_table").css("z-index", "1");
            $(this).css("z-index", "2");

        });

    });




    $(".new_table").click(function () {
        $(".new_table").css("z-index", "1");
        $(this).css("z-index", "2");
    });


    $("#ZoomIn").click(zoomInFn);
    $("#ZoomOut").click(zoomOutFn);
    $("#save_a_sand").submit(function (e) {
        var a = $.now();
        var b = $("#main_work_screen").html();
        $("#save_to_send_input").val(a);
        $("#save_to_send_text").val(b);
        window.location.hash = a;
        e.preventDefault(); // avoid to execute the actual submit of the form.
        var arba = window.location.href;
        var form = $(this);
        var url = '/save/save.php';

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes the form's elements.
            success: function (data) {
                if (data) {
                    //alert(data);
                    alert("Скопируйте ссылку и отправьте " + arba);
                } else {
                    //alert("Вход не выполнен");
                    window.location.href = 'https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/reg.php?sand=' + a;
                }

            }
        });


    });
});
jQuery(document).on('touchstart', 'input[type=text]', function () { $(this).focus() })

jQuery(document).on('touchstart', '.remove_tbl', function () { $(this).closest('.new_table').remove() })

jQuery(document).on('touchstart', '.new_table', function () {
    $(".new_table").css("z-index", "1");
    $(this).css("z-index", "2");
})


function zoomInFn() {
    var c = $("#cur_zoom").val();
    var cc = c * 12 / 10;
    $("#cur_zoom").val(cc);
    $("#work_place").css("transform", "scale(" + cc + "," + cc + "")
    $('#ZoomIn').removeClass('animate').addClass('animate')
    setTimeout(function() {
        $('#ZoomIn').removeClass('animate')
    }, 100)
}
function zoomOutFn() {
    var c = $("#cur_zoom").val();
    var cc = c / 12 * 10;
    $("#cur_zoom").val(cc);
    $("#work_place").css("transform", "scale(" + cc + "," + cc + "")
    $('#ZoomOut').removeClass('animate').addClass('animate')
    setTimeout(function() {
        $('#ZoomOut').removeClass('animate')
    }, 100)
}

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
        places: { top: ['',''], left: [], right: [], bottom: [], around: [] },
        selected: { top: '', left: null, right: null, bottom: null, around: null},
        shape: '',
    },
    round: {
        name: 'Круглый стол',
        type: 'round',
        places: { top: [], left: [], right: [], bottom: [], around: [5, 6, 7, 8, 9, 10, 11, 12] },
        selected: { top: null, left: null, right: null, bottom: null, around: 5},
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
        places: { top: [6, 8, 10], left: [8, 10, 12, 14, 16],  right: [8, 10, 12, 14, 16], bottom: [0, 1], around: [] },
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
        $("#center_aling").append(`
            <div class="new_table mg">
                <div class="remove_tbl"></div>
                <div class="stul_guest s1">
                    <div class="input_out">
                        <div class="input">
                            <input type="text" value="Жених" class="input_name">
                        </div>
                    </div>
                    <img src="images/tables/chair.png">
                </div>
                <div class="stul_guest s2">
                    <div class="input_out">
                        <div class="input">
                            <input type="text" value="Невеста" class="input_name">
                        </div>
                    </div>
                    <img src="images/tables/chair.png">
                </div>
                <img src="images/tables/mg.png">
            </div>
        `);
    }

    if (currentShape.type == 'round') {
        $("#center_aling").append(generateRoundTable(currentShape.selected.around));
    }

    if (currentShape.type == 'square') {
        $("#center_aling").append(generateSquareTable(currentShape.selected.top));
    }

    if (currentShape.type == 'rect') {
        $("#center_aling").append(generateRectangleTable(currentShape.selected.top, currentShape.selected.left));
    }

    if (currentShape.type == 'p') {
        $("#center_aling").append(generatePTable(currentShape.selected.top, currentShape.selected.left));
    }

    if (currentShape.type == 't') {
        $("#center_aling").append(generateTTable(currentShape.selected.top, currentShape.selected.left, currentShape.selected.bottom));
    }



    initialize()

    $('.remove_tbl').click(function () {
        $(this).closest('.new_table').remove();
    });

    $(".new_table").click(function () {
        $(".new_table").css("z-index", "1");
        $(this).css("z-index", "2");
    });
}

$.fn.redraw = function () {
    $(this).each(function () {
        var redraw = this.offsetHeight;
    });
};

function initialize () {
    $(".new_table").each(function() {
        $(this).css('max-height', $(this).height())
        $(this).css('max-width', $(this).width())
        $(this).css('min-height', $(this).height() / 2)
        $(this).css('min-width', $(this).width() / 2)
    }).resizable({
        aspectRatio: true,
        maxHeight: $(this).height(), //300
        minHeight:  $(this).height() / 2, //100
        minWidth: $(this).width() / 2,
        maxWidth: $(this).width(),
        resize: function () {
            var w = $(this).width()
            var fact = $(this).width() / parseInt($(this).css('max-width'));
            var ww = 8 * fact;
            var www = 10 * fact;
            var wwa = 8 * fact;
            var wwb = 25 * fact;
            $(this).find(".input input").css("height", www).css("line-height", www).css("font-size", wwa);
            $(this).find(".num_table").css("font-size", ww);
            $(this).find(".input").css("height", wwb);
            $(this).find(".input_out").css("height", wwb);
        }
    }).draggable({
        drag: function( event, ui ) {
            var c = $("#cur_zoom").val();
            ui.position.left = ui.position.left / c
            ui.position.top = ui.position.top / c
        }
    });
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
                                            <div class="popup__count ${table.selected.left == n? 'active' : ''}" data-count="${n}" data-direction="left">
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
    const interval = 360/num
    let result = ''
    for (let i = 0; i < num; i++) {
        result += `
            <div class="stul_guest" style="transform: rotate(${i * interval}deg);">
                <div class="input_out">
                    <div class="input" style="transform: rotate(${360 - (i * interval)}deg);">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.png">
            </div>
        `
    }
    return `
        <div class="new_table table round">
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
            result += `
                <div class="stul_guest top${i}">
                    <div class="input_out">
                        <div class="input"><input type="text" value="Фамилия Имя" class="input_name">
                            <input type="text" value="Отчество" class="input_family">
                        </div>
                    </div>
                    <img src="images/tables/chair.png">
                </div>
                <div class="stul_guest bottom${i}">
                    <div class="input_out">
                        <div class="input" style="transform: rotate(180deg);">
                            <input type="text" value="Фамилия Имя" class="input_name">
                            <input type="text" value="Отчество" class="input_family">
                        </div>
                    </div>
                    <img src="images/tables/chair.png">
                </div>
            `
        }
    } else if (x == 1) {
        result += `
                <div class="stul_guest top0">
                    <div class="input_out">
                        <div class="input"><input type="text" value="Фамилия Имя" class="input_name">
                            <input type="text" value="Отчество" class="input_family">
                        </div>
                    </div>
                    <img src="images/tables/chair.png">
                </div>
                <div class="stul_guest bottom0">
                    <div class="input_out">
                        <div class="input" style="transform: rotate(180deg);">
                            <input type="text" value="Фамилия Имя" class="input_name">
                            <input type="text" value="Отчество" class="input_family">
                        </div>
                    </div>
                    <img src="images/tables/chair.png">
                </div>
            `
    }
    for (let i = 0; i < y; i++) {
        result += `
            <div class="stul_guest s${i + 1}">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.png" style="transform: rotate(90deg);">
            </div>
        `
    }
    for (let i = 0; i < y; i++) {
        result += `
            <div class="stul_guest s${i + y + 1}">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.png" style="transform: rotate(270deg);">
            </div>
        `
    }
    return `
        <div class="new_table table rect rect_x${y}${x == 0 ? ' zero' : ''}">
            <div class="remove_tbl"></div>
            <img src="images/tables/rect_x${y}.png">
            ${result}
        </div>
    `
}

function generatePTable(x, y) {
    let result = ''
    for (let i = 1; i <= x; i++) {
        result += `
            <div class="stul_guest top${i}">
                <div class="input_out">
                    <div class="input"><input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.png">
            </div>
        `
    }
    for (let i = 0; i < y; i++) {
        result += `
            <div class="stul_guest s${i + 1}">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.png" style="transform: rotate(90deg);">
            </div>
        `
    }
    for (let i = 0; i < y; i++) {
        result += `
            <div class="stul_guest s${i + y + 1}">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.png" style="transform: rotate(270deg);">
            </div>
        `
    }
    return `
        <div class="new_table table p p_x${y}${x == 2 ? ' top2' : ' top6'}">
            <div class="remove_tbl"></div>
            <img src="images/tables/p${y}.png">
            ${result}
        </div>
    `
}

function generateTTable(x, y, b) {
    let result = ''
    for (let i = 1; i <= x; i++) {
        result += `
            <div class="stul_guest top${i}">
                <div class="input_out">
                    <div class="input"><input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.png">
            </div>
        `
    }
    for (let i = 0; i < y; i++) {
        result += `
            <div class="stul_guest s${i + 1}">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.png" style="transform: rotate(90deg);">
            </div>
        `
    }
    for (let i = 0; i < y; i++) {
        result += `
            <div class="stul_guest s${i + y + 1}">
                <div class="input_out">
                    <div class="input">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.png" style="transform: rotate(270deg);">
            </div>
        `
    }
    if (b == 1) {
        result += `
            <div class="stul_guest bottom1"  style="transform: rotate(180deg);">
                <div class="input_out">
                    <div class="input" style="transform: rotate(180deg);">
                        <input type="text" value="Фамилия Имя" class="input_name">
                        <input type="text" value="Отчество" class="input_family">
                    </div>
                </div>
                <img src="images/tables/chair.png">
            </div>
        `
    }
    return `
        <div class="new_table table t t_x${y}${x == 6 ? ' top6' : ''}${x == 8 ? ' top8' : ''}${x == 10 ? ' top10' : ''}${b == 1 ? ' bottom1' : ''}">
            <div class="remove_tbl"></div>
            <img src="images/tables/t${y}.png">
            ${result}
        </div>
    `
}

function generateSquareTable(x) {
    let result = ''
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j <= x; j++) {
            result += `
                <div class="stul_guest s${(i == 0 || i == 2) ? j : j + x}" style="transform: rotate(${i * 90}deg);">
                    <div class="input_out">
                        <div class="input" style="transform: rotate(${360 - 90 * i}deg);"> <input type="text" value="Фамилия Имя" class="input_name"> <input type="text" value="Отчество" class="input_family"> </div>
                    </div>
                    <img src="images/tables/chair.png"> 
                </div>
            `
        }
    }
    
    return `
        <div class="new_table table square_x${x}">
            <div class="remove_tbl"></div>
            <img src="images/tables/square_x${x}.png"> 
            ${result}
        </div>
    `
}