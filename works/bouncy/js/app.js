$(function () {

    //Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });


    //Smooth Scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");
        navToggle.removeClass("burger--close"); //Удаляем клас измениения бургера


        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 1000);
    });


    //Nav Toggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
        header.toggleClass("header-bg"); //Меняем цвет фона для Header
        navToggle.toggleClass("burger--close"); //Добавляем клас изменения бургера
    });


    //Team Slider: https://github.com/kenwheeler/slick/
    let slider = $("#teamSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true
    });

    //Testimonials Slider
    let testSlider = $("#testimonialsSlider");

    testSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });


    //Portfolio: https://github.com/desandro/masonry
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 280
    });

});

