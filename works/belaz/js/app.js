$(function () {

    //Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introHeight;
    let scrollPosition = $(window).scrollTop();

    $(window).on("scroll load resize", function () {

        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();

        if (scrollPosition > introHeight) {
            header.addClass('fixed animated fadeIn');
        } else {
            header.removeClass('fixed fadeIn');
        }
    });

    //PageUp
    let pageUp = $('.pageup');

    $(window).on('scroll load resize', function(){

        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();

        if (scrollPosition > introHeight) {
            pageUp.addClass('animated fadeIn');
            pageUp.removeClass('fadeOut');
        } else {
            pageUp.addClass('fadeOut');
            header.removeClass('fadeIn');
        }



    });





    //Smooth Scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 1500);
    });






});