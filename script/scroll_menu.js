$(function () {

    var $menu = $('.menu_btn ul li'),
        $contents = $('.contents > div');

    $menu.click(function () {
        var idx = $(this).index();
        var section = $contents.eq(idx);
        var sectionDistance = section.offset().top;
        $('html,body').stop().animate({
            scrollTop: sectionDistance
        });
    });

    $(window).scroll(function () {
        $contents.each(function () {
            if ($(this).offset().top <= $(window).scrollTop()) {
                var idx = $(this).index();
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
        });
    });

});
