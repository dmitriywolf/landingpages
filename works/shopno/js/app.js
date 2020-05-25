$(function () {

    //Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introHeight = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();
    $(window).on("scroll load resize", function () {
        introHeight = intro.innerHeight();

        scrollPosition = $(this).scrollTop();

        if (scrollPosition > introHeight) {
            header.addClass("fixed bounceIn");
        } else {
            header.removeClass("fixed bounceIn");
        }
    });

    //Smooth Scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");
        navToggle.removeClass("burger--close");

        $("html, body").animate({
            scrollTop: elementOffset
        }, 1200);
    });

    //Nav Toggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
        navToggle.toggleClass("burger--close");
    });


    //Services
    let $service = $('.service__item');
    
    
    $service.each(function () {

        let serviceMore = $(this).find('.service__content--more');

        $(this).on('click', '.service__button--know-more', function (event) {
            event.preventDefault();
            serviceMore.addClass('show zoomIn');
        });

        $(this).on('click', '.service__button--close', function (event) {
            event.preventDefault();
            serviceMore.removeClass('show zoomIn');
        });
    });




    //AboutUs Slider
    let aboutUsSlider = $("#aboutUsSlider");
    aboutUsSlider.slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    //Testimonials Slider
    let testimonialsSlider = $("#testimonialsSlider");
    testimonialsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });


});
