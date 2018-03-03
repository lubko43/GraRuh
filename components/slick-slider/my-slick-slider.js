$(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 600,
        fade: true,
        cssEase: 'ease-in',
        arrows: true,
        autoplay: true,
        autoplaySpeed: 15000,
        nextArrow: '<img class="arrow_left" src="./img/img/arrow_left.png">',
        prevArrow: '<img class ="arrow_right" src="./img/img/arrow_right.png">',
    });
});
//var a2a_config = a2a_config || {};
//a2a_config.icon_color = "transparent,#fff";

