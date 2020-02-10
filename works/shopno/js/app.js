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


});