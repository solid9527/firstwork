
var main = function(){
  var imgcount =1;

    $('#past').click(function(){
        $('#past').hide();
        $('#ul').append('<li>誰無過去？！</li>');

    });

  $('#about').click(function(){
    $('.about').fadeToggle();
    pview();
  });

  $('#skill').click(function(){
    $('.skill').slideToggle(800);
  });

  $('#fu').click(function(){
    $('.img').addClass('active-img');
  });

  $('.arrow-next').click(function(){
    imgcount++;
    var img = $('.active-img');
    var nextImg = img.next();
    var dot = $('.active-dot');
    var nextDot = dot.next();
    if(nextImg.length===0){
      nextImg = $('.img').first();
      imgcount=1;
      nextDot = $('.dot').first();
    }
   pview();


    img.slideUp(100).removeClass('active-img');
    nextImg.slideDown(100).addClass('active-img');
    dot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });

  $('.arrow-prev').click(function(){
    imgcount--;
    var img = $('.active-img');
    var prevImg = img.prev();
    var dot = $('.active-dot');
    var prevDot = dot.prev();
    if(prevImg.length ===0){
      prevImg = $('.img').last();
      imgcount=4;
      prevDot = $('.dot').last();
    }
       pview();

    img.slideUp(200).removeClass('active-img');
    prevImg.slideDown(200).addClass('active-img');
    dot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

  var pview = function(){
    switch(imgcount) {
    case 1:
            $('.img-01').show();
            $('.img-02').hide();
            $('.img-03').hide();
            $('.img-04').hide();
              break;
    case 2:
            $('.img-01').hide();
            $('.img-02').show();
            $('.img-03').hide();
            $('.img-04').hide();
            break;
            case 3:
                    $('.img-01').hide();
                    $('.img-02').hide();
                    $('.img-03').show();
                    $('.img-04').hide();
                    break;
                    case 4:
                            $('.img-01').hide();
                            $('.img-02').hide();
                            $('.img-03').hide();
                            $('.img-04').show();
                            break;
                          }
                        };
};
$(document).ready(main);
