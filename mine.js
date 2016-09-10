var main = function(){
  var imgcount =1;
  var width = screen.width;
  var height = screen.height;
  $('#width').text(width);
  $('#height').text(height);

  $('#past').click(function(){
        $('#past').hide();
        $('#ul').append('<li class="ani">去掉框線</li>');
        $('.ani').animate({ left: '200px' });
        $('*').css({border: '0px solid black' });
    });

$('#about').click(function(){  //關於
    $('.about').fadeToggle();
    pview();
  });

$('#skill').click(function(){  //技能
    $('.skill').slideToggle(300);
  });


var clickNext = function (){   //下張圖片
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
    img.slideUp(200).removeClass('active-img');
    nextImg.slideDown(200).addClass('active-img');
    dot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  };


var clock =setInterval(clickNext,2500);

$(".img").mouseover(function(){
  clearInterval(clock);
});


$('.arrow-next').click(clickNext);

$('.arrow-prev').click(function(){  //上張圖片
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


$('#rad').click(function(){
var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $('.rad').css({color:'#' + randomColor });


});

var pview = function(){     //判斷圖片編號
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

var jqimg = Array('3.jpg','4.jpg');

var ss =setInterval(function(){
  var imgdexr = Math.floor(Math.random()*jqimg.length);  //亂數banner
  $('#jqbanr').html('<img src=img/'+ jqimg[imgdexr] +' width=150 height=150 /> jq random' +Math.floor(Math.random()*jqimg.length));
  var imgdex = jqimg.length;  //循序banner
  $('#jqban').html('<img src=img/'+ jqimg[i] +' width=150 height=150 /> jq order' +Math.floor(Math.random()*jqimg.length));
i++;
if(i>=imgdex)
   i=0;
},3000);

};
var i=0;
var jsImg = new Array("3.jpg","4.jpg");
       //設定每兩秒執行一次randomImg() ，此行要在 function 之外
      var banner =   function randomImg(){
         //陣列的長度 * 介於0~1間數字 ，然後在取 floor 當照片索引值
      var imgIndex = Math.floor(Math.random()*jsImg.length);
      document.getElementById("banner").innerHTML  = "<img src=img/"+jsImg[imgIndex]+" width=150 height=150>by js random"+imgIndex;
       };

$(document).ready(main);
