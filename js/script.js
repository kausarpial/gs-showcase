$(document).ready(function () {
    'use strict';
});

$(window).on('scroll', function () {
    'use strict';
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.main-nav').addClass('nav-bg');
    } else {
        $('.main-nav').removeClass('nav-bg');
    }
});