$(function () {

    //Fixed Header  and PageUp
    let header = $("#header");
    let intro = $("#intro");
    let pageUp = $('.pageup');
    let introHeight;
    let scrollPosition = $(window).scrollTop();

    $(window).on("scroll load resize", function () {

        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();

        //Fixed Animate Header
        if (scrollPosition > introHeight) {
            header.addClass('fixed animated fadeIn');
        } else {
            header.removeClass('fixed fadeIn');
        }

        //Animate PageUp
        if (scrollPosition > 1260) {
            pageUp.addClass('animated fadeIn');
            pageUp.removeClass('fadeOut');
        } else {
            pageUp.addClass('fadeOut');
            pageUp.removeClass('fadeIn');
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

    //Slick Slider
    let slider = $('.gallery__list');
    let prevArrow = $('.arrow-previous');
    let nextArrow = $('.arrow-next');

    slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        dots: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //Modals
    let btnPopup = $('.btnCallBack');
    let popupCallBack = $('.popup--callback');
    let popupClose = $('.popup__close-icon');

    btnPopup.on('click', function () {
        popupCallBack.addClass('show');
    });

    popupClose.on('click', function () {
        popupCallBack.removeClass('show');
    });

    //Answers
    let asks = $('.asks__item');


    asks.each(function () {

        $(this).on('click', function () {
            console.log($(this));

            let answer = $(this).find('.answer');
            answer.addClass('show');


        });

        $(this).on('click', '.answer__close-icon', function (event) {
            console.log($(this));
            event.stopPropagation();
            $(this).closest('.answer').removeClass('show');
        });
    });





});