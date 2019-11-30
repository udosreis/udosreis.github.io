window.onload = animBckg()

function animBckg() {
    var date = new Date();
    var current_hour = 0
    current_hour = date.getHours()
    current_hour = 15
    if (current_hour < 5) {
        document.getElementsByClassName("backgroundc")[0].style.backgroundImage = "radial-gradient(closest-side at 42% 38%, #081F40 20%, #041022 80%)"
        document.getElementsByClassName("background2")[0].style.opacity = 1
    }
    else if (current_hour < 7) {
        document.getElementsByClassName("backgroundc")[0].style.backgroundImage = "linear-gradient(-180deg, #F09819 0%, #FF512F 100%)"
        document.getElementsByClassName("background2")[0].style.opacity = 0
    }
    else if (current_hour < 17) {
        document.getElementsByClassName("backgroundc")[0].style.backgroundImage = "linear-gradient(0deg, #1488CC 0%, #2B32B2 100%)"
        document.getElementsByClassName("background2")[0].style.opacity = 0
    }
    else if (current_hour < 19) {
        document.getElementsByClassName("backgroundc")[0].style.backgroundImage = "linear-gradient(-180deg, #F09819 0%, #FF512F 100%)"
        document.getElementsByClassName("background2")[0].style.opacity = 0
    }
    else {
        document.getElementsByClassName("backgroundc")[0].style.backgroundImage = "radial-gradient(closest-side at 42% 38%, #081F40 20%, #041022 80%)"
        document.getElementsByClassName("background2")[0].style.opacity = 1
    }
}

//The following was tekn from: Copyright (c) 2019 by Fabio Ottaviani (https://codepen.io/supah/pen/RrzREx)
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function animate() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
  
    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.backgroundc').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });
    window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function(e) {
    var lMouseX = Math.max(-100, Math.min(100, $('.backgroundc').width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $('.backgroundc').height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100;
    lFollowY = (10 * lMouseY) / 100;
    animBckg();
});

animate();
animBckg();