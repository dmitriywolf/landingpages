$(function () {
    /* Fixed Header
    =============================*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Navigation Smooth Scroll
    =============================*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');
        navToggle.removeClass('burger--close');
        header.removeClass('show');


        $("html, body").animate({
            scrollTop: elementOffset - 65
        }, 1200);
    });

    /* Navigation Burger Nav Toggle
    =============================*/
    let nav = $("#navigation");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        header.toggleClass('show');
        nav.toggleClass('show');
        navToggle.toggleClass('burger--close');

    })
});