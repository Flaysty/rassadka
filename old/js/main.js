$(document).ready(function() {
    var nn = window.location.hash.substring(1);
    if (nn != '') {
        var aa = 'https://placernew.inclu.work/save/' + nn + '.txt';
        $.ajax({
            url: aa,
            dataType: "text",
            success: function(data) {
                $("#work_place").html(data);
                $(".dragger").draggable();
                $(".dragger").each(function(i,elem) {
                    $(elem).attr("data-id",i+1);
                });
                // dblclicka();
            }
        });
        
    }else{
        $.ajax({
            url: "https://placernew.inclu.work/save/0.txt",
            dataType: "text",
            success: function(data) {
                $("#work_place").html(data);
                $(".dragger").draggable();
                $(".dragger").each(function(i,elem) {
                    $(elem).attr("data-id",i+1);
                });
                $(".dragger").each(function(){
                    var a = $(this).text();
                    var b = a.replace(" ","<br>");
                    $(this).html(b);
                });
                // dblclicka();
            }
        });
        
    };
});
$(document).ready(function() {
    $(".dragger").draggable();
    $('select').material_select();

    $('#profile_pic').change(function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            $('#work_place').html('<div id="pic_drag"><img src="' + reader.result + '"></div>');
            $("#pic_drag img").load(function() {
                var wr = $(this).width();
                var hr = $(this).height();
                var whr = wr / hr;
                var hwr = hr / wr;
                var w = $(window).width();
                var h = $(window).height();
                var wf = w - 50;
                var hf = h - 50;
                if (wr > w) {
                    $("#pic_drag img").css("width", wf);
                };
                if (hr > h) {
                    $("#pic_drag img").css("height", hf);
                };
                $("#pic_drag").draggable({ containment: "#work_place", scroll: false });
                $("#pic_drag img").resizable({
                    aspectRatio: wr / hr,
                    containment: "#work_place"

                });


            });

        }
        if (file) {
            reader.readAsDataURL(file);
            $("#work_place_a").fadeOut(0);
            $('#print').click(function(e) {
                html2canvas(document.querySelector("#pic_drag")).then(canvas => {
                    $("#canvas").html(canvas);
                    $("#canvas").printThis({
                        importCSS: false,
                        canvas: true,
                        header: "<p>Карта создана на сайте http://карты-офиса.рф</p>"
                    });

                });
            });
            var test = $("#pic_drag").get(0);
            // to canvas
            $('#save').click(function(e) {
                var alfa = $("#pic_drag").append('<div id="watermark">Карта создана на сайте http://карты-офиса.рф</div>');

                html2canvas(document.querySelector("#pic_drag")).then(canvas => {
                    $("#canvas").html(canvas);
                    var canvasWidth = canvas.width * 2;
                    // canvas height
                    var canvasHeight = canvas.height * 2;
                    // render canvas
                    // show 'to image' button
                    // convert canvas to image

                    var img = Canvas2Image.convertToImage(canvas, canvasWidth, canvasHeight);
                    // render image
                    // save
                    var wa = $("#canvas").width();
                    var ha = $("#canvas").height();
                    let type = "jpeg"; // image type
                    let w = wa; // image width
                    let h = ha; // image height
                    let f = "plan"; // file name
                    w = (w === '') ? canvasWidth : w * 2;
                    h = (h === '') ? canvasHeight : h * 2;
                    // save as image
                    Canvas2Image.saveAsImage(canvas, w, h, type, f);
                    $("#watermark").remove();
                });

            });
        } else {
            $('#work_place').find('#pic_drag').remove();
            $("#work_place_a").fadeIn(0);

        }
    });
    $("#add_more_btn").click(function() {

        var a = $("#names_list").val();
        var b = a.replace(" ","<br>");
        var aa = $("#bg_style_elem select").val();
        var ab = $("#font_style_elem select").val();
        var ac = $("#border_style_elem select").val();
        var ad = $("#font_size_elem select").val();
        if (a != '') {
            $("#pic_drag").append("<div class='dragger' style='position:absolute;top:50%;left:50%;background-color:"+aa+";color:"+ab+";border-color:"+ac+";font-size:"+ad+";'>" + b + "</div>");
            $(".dragger").draggable();
            $(".dragger").each(function(i,elem) {
                $(elem).attr("data-id",i+1);
            });
            $("#names_list").removeClass('error');
            $("#names_list").val('');
            $("#add_out_out").fadeOut(0);
            // dblclicka ();
        } else {
            $("#names_list").addClass('error');
        }
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
    var ha = h;
    var wa = w;
    $("#work_place").width(wa).height(ha);
    $("#work_place_a").width(wa).height(ha);

});
$(window).resize(function() {
    var w = $(window).width();
    var h = $(window).height();
    var ha = h;
    var wa = w;
    $("#work_place").width(wa).height(ha);
    $("#work_place_a").width(wa).height(ha);

});
$(document).ready(function() {
    $("#menu_btn_open").click(function() {
        $("#left_menu").toggle(0);
        if ($("#left_menu").css('display') == 'none') {
            $("#menu_btn_open i").removeClass("mdi-arrow-left").addClass("mdi-menu");
        } else {
            $("#menu_btn_open i").removeClass("mdi-menu").addClass("mdi-arrow-left");
        }
    });
});

$(document).ready(function() {
    $("#save_set_btn").click(function(){
        var ca = $("#bg_style select").val();
        var cb = $("#font_style select").val();
        var cc = $("#font_size select").val();
        var cd = $("#border_style select").val();
        $("#pic_drag").append("<style>.dragger{background-color:" + ca + ";color:" +cb + ";font-size:" + cc + ";border-color:" + cd + "}</style>");
    });
    $("#save_set_all_btn").click(function(){
        var ca = $("#bg_style select").val();
        var cb = $("#font_style select").val();
        var cc = $("#font_size select").val();
        var cd = $("#border_style select").val();
        $(".dragger").each(function(){
           $(this).css("background-color","").css("color","").css("font-size","").css("border-color",""); 
        });
        $("#pic_drag").append("<style>.dragger{background-color:" + ca + ";color:" +cb + ";font-size:" + cc + ";border-color:" + cd + "}</style>");
    });
    // $("#bg_style select").change(function() {
    //     var a = this.value;
    //     $("#pic_drag .dragger").css("background-color", a);
    // });
    // $("#font_style select").change(function() {
    //     var a = this.value;
    //     $("#pic_drag .dragger").css("color", a);
    // });
    // $("#font_size select").change(function() {
    //     var a = this.value;
    //     $("#pic_drag .dragger").css("font-size", a);
    // });
});

$(document).ready(function() {
    $("#remove_map").click(function() {
        $("#work_place").html('');
        $("#profile_pic").val('');
    });
    var fileInc = $("#pic_drag").html();
    if (fileInc != '') {
        $("#work_place_a").fadeOut(0);
        $('#print').click(function(e) {
            html2canvas(document.querySelector("#pic_drag")).then(canvas => {
                $("#canvas").html(canvas);
                $("#canvas").printThis({
                    importCSS: false,
                    canvas: true,
                    header: "<p>Карта создана на сайте http://карты-офиса.рф</p>"
                });

            });
        });
        var test = $("#pic_drag").get(0);
        // to canvas
        $('#save').click(function(e) {
            var alfa = $("#pic_drag").append('<div id="watermark">Карта создана на сайте http://карты-офиса.рф</div>');

            html2canvas(document.querySelector("#pic_drag")).then(canvas => {
                $("#canvas").html(canvas);
                var canvasWidth = canvas.width * 2;
                // canvas height
                var canvasHeight = canvas.height * 2;
                // render canvas
                // show 'to image' button
                // convert canvas to image

                var img = Canvas2Image.convertToImage(canvas, canvasWidth, canvasHeight);
                // render image
                // save
                var wa = $("#canvas").width();
                var ha = $("#canvas").height();
                let type = "jpeg"; // image type
                let w = wa; // image width
                let h = ha; // image height
                let f = "plan"; // file name
                w = (w === '') ? canvasWidth : w * 2;
                h = (h === '') ? canvasHeight : h * 2;
                // save as image
                Canvas2Image.saveAsImage(canvas, w, h, type, f);
                $("#watermark").remove();
            });

        });
        $("#pic_drag").draggable({ containment: "#work_place", scroll: false });
        $("#pic_drag img").resizable({
            aspectRatio: 625 / 633,
            containment: "#work_place"

        });
        $(".dragger").draggable();
        $(".dragger").each(function() {
            $(this).dblclick(function() {
                $(this).fadeOut(0);
            });
        });

    } else {
        $('#work_place').find('#pic_drag').remove();
        $("#work_place_a").fadeIn(0);

    }

});
$(document).ready(function() {
    
    $("#save_a_sand").submit(function(e) {
        var a = $.now();
        var b = $("#work_place").html();
        $("#save_to_send_input").val(a);
        $("#save_to_send_text").val(b);
        window.location.hash = a;
        e.preventDefault(); // avoid to execute the actual submit of the form.
var arba = window.location.href;
        var form = $(this);
        var url = 'https://placernew.inclu.work/save/save.php';

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes the form's elements.
            success: function(data)
{
    $("#save_out_out").fadeOut(0);
               $("#podel_out_out").fadeIn(0);
              $("#urla").val(arba); // show response from the php script.
           }
        });


    });
    $("#save_btns").click(function(){
        $("#save_out_out").fadeIn(0);
    });
    $("#save_close").click(function(){
        $("#save_out_out").fadeOut(0);
    });
    $("#add_new").click(function(){
        $("#add_out_out").fadeIn(0);
    });
    $("#podel_close").click(function(){
        $("#podel_out_out").fadeOut(0);
    });
    $("#add_new_close").click(function(){
        $("#add_out_out").fadeOut(0);
    });
    $("#prefs").click(function(){
        $("#set_out_out").fadeIn(0);
    });
    $("#set_close").click(function(){
        $("#set_out_out").fadeOut(0);
    });
    $("#red_close").click(function(){
        $("#red_out_out").fadeOut(0);
    });
    $("#faq").click(function(){
        $("#helper_out_out").fadeIn(0);
    });
    $("#helper_close").click(function(){
        $("#helper_out_out").fadeOut(0);
    });
    
});

// function dblclicka (){
//         $(".dragger").dblclick(function(){
//             var b = $(this).data("id");
//             var c = $(this).text();
//             $("#red_out_out").fadeIn();
//             $("#red_more_btn").attr("data-rid",b);
//             $("#names_list_red").val(c);
//             $("#red_more_btn").click(function(){
//                 var d = $("#names_list_red").val();
//                 var ca = $("#bg_style_elem_red select").val();
//                 var cb = $("#font_style_elem_red select").val();
//                 var cc = $("#font_size_elem_red select").val();
//                 var cd = $("#border_style_elem_red select").val();
//                 var n = $(this).data("rid");
//                   $(".dragger[data-id="+n+"]").text(d).css("background-color",ca).css("color",cb).css("font-size",cc).css("border-color",cd); 
//                 $("#red_out_out").fadeOut(0);
//             });
//         });
// }