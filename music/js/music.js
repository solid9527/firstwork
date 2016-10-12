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

    $('.playrow').click(function(){
        $('.playrow').removeClass('playactive');
      $(this).addClass('playactive');
        $('.playrow').find('img').attr('src','img/play.png');
      $('img',this).attr('src','img/active.png');
    });
};
$(document).ready(main);
