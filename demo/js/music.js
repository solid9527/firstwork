var main = function() {

    $('.allartists').click(function() {
        $('html,body').animate({
            scrollTop: $('.artistslist').offset().top
        }, 800);
    });

    $('.tonews').click(function() {
        $('html,body').animate({
            scrollTop: $('.news').offset().top
        }, 800);

    });
    var old = $('.tonews').css('color');
    $('.tonews').hover(function() {
        $('.tonews').css('color', 'white');
    }, function() {
        $('.tonews').css('color', old);

    });

};
$(document).ready(main);
