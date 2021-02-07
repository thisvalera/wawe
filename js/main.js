$(function () {

    $(window).scroll(function(){
        if ( $(window).scrollTop() >= 600 ){
            $('.header__top').css('background-color', 'rgb(36, 33, 33, 0.5)');
        }
        else {
            $('.header__top').css('background-color','transparent');
        }
    });

    $(".menu a, .footer-logo ").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.slider-blog-items').slick({
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 341,
                settings: {
                    dots: false
                }
            }
        ]
    });

    $('.menu__btn, .menu a').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.header__top-inner').toggleClass('header__top-inner--active');
        $('.menu__list-item').toggleClass('menu__list-item--active');
        $('.menu__btn').toggleClass('menu__btn--active');

    });

    var mixer = mixitup('.gallery__content');
});