window.addEventListener('DOMContentLoaded', () => {
    'use strict';

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


        // //Portfolio: https://github.com/desandro/masonry
        let $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 280
        });

        $grid.imagesLoaded().progress(function () {
            $grid.masonry('layout');
        });


    });

    /*Filter Portfolio*/
    //Masonry
    // let elem = document.querySelector('.grid');
    // let msnry = new Masonry(elem, {
    //     // options
    //     itemSelector: '.grid-item',
    //     columnWidth: 280
    // });
    //


    const filter = () => {
        const menu = document.querySelector('.portfolio__nav'),
            items = menu.querySelectorAll('a'),
            btnAll = menu.querySelector('.all'),
            btnPrint = menu.querySelector('.print'),
            btnIdentity = menu.querySelector('.identity'),
            btnBranding = menu.querySelector('.branding'),
            btnWeb = menu.querySelector('.web'),
            btnHTML = menu.querySelector('.html'),
            btnWordPress = menu.querySelector('.wordpress'),

            wrapper = document.querySelector('.portfolio__list'),
            markAll = wrapper.querySelectorAll('.all'),
            markPrint = wrapper.querySelectorAll('.print'),
            markIdentity = wrapper.querySelectorAll('.identity'),
            markBranding = wrapper.querySelectorAll('.branding'),
            markWeb = wrapper.querySelectorAll('.web'),
            markHTML = wrapper.querySelectorAll('.html'),
            markWordPress = wrapper.querySelectorAll('.wordpress');


        const typeFilter = (markType) => {
            markAll.forEach(mark => {
                //Скрыть все элементы
                mark.style.display = 'none';
                //Удаляем классы анимации
                mark.classList.remove('animated', 'tada');
            });

            if (markType) {
                markType.forEach(mark => {
                    mark.style.display = 'block';
                    mark.classList.add('animated', 'tada');

                });
            }


        };


        btnAll.addEventListener('click', () => {
            typeFilter(markAll);

        });

        btnPrint.addEventListener('click', () => {
            typeFilter(markPrint);

        });

        btnIdentity.addEventListener('click', () => {
            typeFilter(markIdentity);

        });

        btnBranding.addEventListener('click', () => {
            typeFilter(markBranding);

        });

        btnWeb.addEventListener('click', () => {
            typeFilter(markWeb);

        });

        btnHTML.addEventListener('click', () => {
            typeFilter(markHTML);

        });

        btnWordPress.addEventListener('click', () => {
            typeFilter(markWordPress);

        });

        menu.addEventListener('click', (e) => {
            e.preventDefault();

            let target = e.target;

            if (target && target.tagName === 'A') {
                items.forEach(btn => btn.classList.remove('active'));
                target.classList.add('active');
            }
        });
    };

    filter();


});




