$(function () {

    //Variables
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let navToggle = $("#navToggle");
    let nav = $("#nav");

    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            navToggle.addClass("fixed");
            nav.addClass("fixed");
        } else {
            navToggle.removeClass("fixed");
            nav.removeClass("fixed");
        }
    });

    //Nav Toggle
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
        header.toggleClass("header-bg"); //Меняем цвет фона для Header
        navToggle.toggleClass("burger--close"); //Добавляем клас изменения бургера
    });

    //Smooth Scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");
        navToggle.removeClass("burger--close"); //Удаляем клас измениения бургера
        header.removeClass("header-bg");


        $("html, body").animate({
            scrollTop: elementOffset
        }, 1000);
    });
});