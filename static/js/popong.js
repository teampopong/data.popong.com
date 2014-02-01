(function () {

var DEFAULT_SCROLL_TIME = 700;
var $body;
var $header;
var $logo;

$(function () {
    $body = $('body');
    $header = $('header .container');
    $logo = $('.logo');
    $('#menu a').click(function () {
        var href = $(this).attr('href'),
            $elem = href !== '#' && $(href) || $('body');
        smoothScrollTo($elem);
        return false;
    });
    updateHeader();
    $(window).scroll(updateHeader);
});

function smoothScrollTo($elem, t, ease) {
    t = t || DEFAULT_SCROLL_TIME;
    ease = ease || 'easeInOutQuart';
    console.log(t, ease, $elem.position().top, menuHeight());
    $body.stop().animate({
        scrollTop: $elem.position().top - menuHeight()
    }, t, ease);
}

function updateHeader() {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    $logo.toggle(top < 40);
    $header.toggleClass('large', top < 40);
}

function menuHeight() {
    return $header.height();
}

}());
