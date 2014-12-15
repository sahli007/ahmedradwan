var control_state = "unclicked"
$('#control, .menu-link, .menu-close').on("click",function() {
    if (control_state == "unclicked") {
        // $('#menu').css("-webkit-transform","translateX(100%)");
        $('#wrapper-div').css("-webkit-transform", "translateX(25%)");
        $('#wrapper-div').css("-webkit-filter", "grayscale(1)");
        disable_scroll();
        control_state = "clicked";
    } else {
        $('#wrapper-div').css("-webkit-transform", "translateX(0)");
        $('#wrapper-div').css("-webkit-filter", "grayscale(0)");
        enable_scroll();
        control_state = "unclicked";
        $('#nav-icon2').removeClass('open')

    }
});

var keys = [37, 38, 39, 40];

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
    preventDefault(e);
}

function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}