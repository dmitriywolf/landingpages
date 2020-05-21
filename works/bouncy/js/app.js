$(document).ready(function () {
    'use strict';

    //Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed animated shake");
        } else {
            header.removeClass("fixed shake");
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


    // Filter Portfolio
    let $grid = $('.grid');

    $grid.imagesLoaded( function() {
        $grid.isotope({
            itemSelector: '.grid-item'
        });

    });



    $(".portfolio__nav").on('click', 'a', function (event) {
        event.preventDefault();

        $('.portfolio__nav-link').each(function () {
            $(this).removeClass('active');
        });

        $(this).addClass('active');

        let filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });



    //Forms



});




