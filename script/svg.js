$(function () {


    var svg_wrap = $('#svg_wrap');


//    $('.svg_click').click(function () {
//        svg_wrap.addClass('animate');
//    });


    $(window).scroll(function () {

        if ($(this).scrollTop() >1700) {
            svg_wrap.addClass('animate');
        } else {
            svg_wrap.removeClass('animate');
        }

    });


})
