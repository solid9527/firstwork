function keyFunction() { //偵側鍵盤代碼
    //alert("Key code = " + event.keyCode);
    if (event.keyCode == 27) {
        alert("Esc 的內建功能已被取消！");
        return false;
    } else if (event.keyCode == 8) {
        alert("Backspace 的內建功能已被取消！");
        return false;
    } else if (event.keyCode == 9) {
        alert("Tab 的內建功能已被取消！");
        return false;
    } else if (event.keyCode == 71) {
        document.location = "http://www.google.com";
    } else if (event.keyCode == 65) {   //按a捲動COVERBAR
        var images = $('#coverBar img');
        for (var i = 0; i < images.length; i++) {
            var left = images[i].style.left.substr(0, images[i].style.left.length - 2);
            if (left <= -390) {
                left = 1950;
            }
            images[i].style.left = (left - 50) + "px";
        }
    }
}
//document.onkeydown=keyFunction;   //偵側鍵盤代碼

function scrollImages() {
    //var coverBarDiv = document.getElementById("coverBar");
    //var images = coverBarDiv.getElementsByTagName("img");   用jQuery ez go
    var images = $('#coverBar img');

    for (var i = 0; i < images.length; i++) {
        var left = images[i].style.left.substr(0, images[i].style.left.length - 2);
        if (left <= -390) {
            left = 1950;
        }
        images[i].style.left = (left - 1) + "px";
    }

}

t = setInterval(scrollImages, 15);
