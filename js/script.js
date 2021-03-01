$(document).ready(function () {
    $('.header__burger, .menu__link').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
});


$(function () {
    $("#phone").mask("+7(999) 999-9999");
});

$(function () {
    $("#phone2").mask("+7(999) 999-9999");
});

$(".js-video-button").modalVideo({
    youtube: {
        controls: 0,
        nocookie: true
    }
});


$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
