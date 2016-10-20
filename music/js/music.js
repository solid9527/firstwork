var main = function() {

  $('#menu-toggle').click(function() { //關於
      $('.mobilenav').fadeToggle(300);
  });



    var scrollTo = function(a) {
        $('html,body').animate({
            scrollTop: $(a).offset().top
        }, 800);
    };

    $('.allartists').click(function() {
        scrollTo('.artistslist');
    });

    $('.toNews').click(function() {
        scrollTo('.news');
    });

    //$('.toEvent').click(scrollTo('.eventslist'));

    $('.toEvent').click(function() {
        scrollTo('.eventslist');
    });

    $('.toPhoto').click(function() {
        scrollTo('.instagram');
    });

    $('.playrow').click(function() {
        $('.playrow').removeClass('playactive');
        $(this).addClass('playactive');
        $('.playrow').find('img').attr('src', 'img/play.png');
        $('img', this).attr('src', 'img/active.png');
    });

    $('.coverBar').hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(scrollImages, 15);
    });

    var artlistpre = $('.artlist').css('opacity');
    $('.artlist').hover(function() {
        $(this).css('opacity', '1');
    }, function() {
        $('.artlist').css('opacity', artlistpre);
    });
};
$(document).ready(main);
