$(document).ready(function() {
    $(".dragger").draggable();
    $('select').material_select();

    $('#profile_pic').change(function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            $('#work_place').css('background-image', 'url("' + reader.result + '")');
        }
        if (file) {
            reader.readAsDataURL(file);
            $(".text_about").fadeOut(0);
        } else {
            $(".text_about").fadeIn(0);
            $('#work_place').css('background-image', 'none');

        }
    });
    $("#add_more_btn").click(function() {

        var a = $("#names_list").val();
        if (a != '') {
            $("#work_place_a").append("<div class='dragger' style='position:absolute;top:0;right:0'><div class='remove'><i class='mdi mdi-close'></i></div>" + a + "</div>");
            $(".dragger").draggable().resizable({
                maxHeight: 300,
                maxWidth: 300,
                minHeight: 30,
                minWidth: 20
            });
            $(".dragger").each(function() {
                $(this).dblclick(function() {
                    $(this).css('height', 'min-content').css('width', 'min-content');
                });
                $(this).find(".remove").click(function() {
                    $(this).parent(".dragger").remove();
                });
            });
            $("#names_list").removeClass('error');
            $("#names_list").val('');
        } else {

            $("#names_list").addClass('error');
        };
    });
});

$(document).ready(function() {


    'use strict';

    $('.input-file').each(function() {
        var $input = $(this),
            $label = $input.next('.js-labelFile'),
            labelVal = $label.html();

        $input.on('change', function(element) {
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
        });
    });

});
$(document).ready(function() {
    var w = $(window).width();
    var h = $(window).height();
    var ha = h - 60;
    var wa = w;
    var f = w / 80;
    $("#work_place").width(wa).height(ha).css("font-size", f);

});
$(window).resize(function() {
    var w = $(window).width();
    var h = $(window).height();
    var ha = h - 60;
    var wa = w;
    var f = w / 80;
    $("#work_place").width(wa).height(ha).css("font-size", f);

});
$(document).ready(function() {
    $("#menu_btn_open").click(function() {
        $("#left_menu").toggle(0);
        if ($("#left_menu").css('display') == 'none') {
            $("#menu_btn_open i").removeClass("mdi-arrow-left").addClass("mdi-menu");
            var w = $(window).width();
            var h = $(window).height();
            var ha = h - 60;
            var wa = w;
            $("#work_place").width(wa).height(ha).css("margin-left", "0");
        } else {
            $("#menu_btn_open i").removeClass("mdi-menu").addClass("mdi-arrow-left");
            var w = $(window).width();
            var h = $(window).height();
            var ha = h - 60;
            var wa = w;
            $("#work_place").width(wa).height(ha);
        }
    });
});
$(document).ready(function() {
    var test = $("#work_place").get(0);
    // to canvas
    $('#save').click(function(e) {
        html2canvas(test, { useCORS: true }).then(function(canvas) {
            // canvas width
            var canvasWidth = canvas.width;
            // canvas height
            var canvasHeight = canvas.height;
            // render canvas
            // show 'to image' button
            // convert canvas to image

            var img = Canvas2Image.convertToImage(canvas, canvasWidth, canvasHeight);
            // render image
            // save
            var wa = $("#work_place").width();
            var ha = $("#work_place").height();
            let type = "jpeg"; // image type
            let w = wa; // image width
            let h = ha; // image height
            let f = "plan"; // file name
            w = (w === '') ? canvasWidth : w;
            h = (h === '') ? canvasHeight : h;
            // save as image
            Canvas2Image.saveAsImage(canvas, w, h, type, f);
        });
    });

});
$(document).ready(function() {
    $("#bg_style select").change(function() {
        var a = this.value;
        $(".dragger").css("background-color", a);
    });
    $("#font_style select").change(function() {
        var a = this.value;
        $(".dragger").css("color", a);
    });
});