window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //Fixed Header
    const navHeader = () => {
        let header = document.querySelector('#header');
        let intro = document.querySelector('.intro');
        let introH = intro.offsetHeight;
        let scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        let nav = document.querySelector('.nav');
        let navToggle = document.querySelector('.burger__wrapper');

        //Fixed Header
        window.addEventListener('scroll', () => {
            introH = intro.offsetHeight;
            scrollPos = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPos > introH) {
                header.classList.add('fixed', 'animated', 'fadeIn', 'show');
            } else {
                header.classList.remove('fixed', 'fadeIn', 'show');
            }

            if (scrollPos < introH && nav.classList.contains('show')) {
                header.classList.add('show');
            }
        });

        //Navigation
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();

            if (scrollPos < introH) {
                header.classList.toggle('show');
            }

            nav.classList.toggle('show');
            navToggle.classList.toggle('burger--close');

        });

    };
    navHeader();


    //Filter
    const filter = () => {

        const menu = document.querySelector('.portfolio__nav'),
            items = menu.querySelectorAll('div'),
            btnAll = menu.querySelector('.all'),
            btnExteriors = menu.querySelector('.exteriors'),
            btnInteriors = menu.querySelector('.interiors'),
            btnPublicInteriors = menu.querySelector('.public-interiors'),

            wrapper = document.querySelector('.portfolio__list'),
            markAll = wrapper.querySelectorAll('.all'),
            markExteriors = wrapper.querySelectorAll('.exteriors'),
            markInteriors = wrapper.querySelectorAll('.interiors'),
            markPublicInteriors = wrapper.querySelectorAll('.public-interiors');


        const typeFilter = (markType) => {
            markAll.forEach(mark => {

                //Скрыть все элементы
                mark.style.display = 'none';
                //Удаляем классы анимации
                mark.classList.remove('animated', 'fadeIn');

            });

            if (markType) {
                markType.forEach(mark => {
                    mark.style.display = 'block';
                    mark.classList.add('animated', 'fadeIn');

                });
            }
        };


        btnAll.addEventListener('click', () => {
            typeFilter(markAll);
        });

        btnExteriors.addEventListener('click', () => {
            typeFilter(markExteriors);
        });

        btnInteriors.addEventListener('click', () => {
            typeFilter(markInteriors);
        });

        btnPublicInteriors.addEventListener('click', () => {
            typeFilter(markPublicInteriors);
        });

        menu.addEventListener('click', (e) => {
            let target = e.target;

            if (target && target.tagName === 'DIV') {
                items.forEach(btn => btn.classList.remove('is-active'));
                target.classList.add('is-active');
            }
        });
    };
    filter();

    //Slider
    const sliders = (slides, dir, prev, next) => {

        let slideIndex = 1,
            paused = false;

        const items = document.querySelectorAll(slides);


        //Функция показа слайда
        function showSlides(n) {

            //Проверка
            if (n > items.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = items.length;
            }

            //Скрываем все слайды
            items.forEach(item => {
                item.classList.add('animated');
                item.style.display = 'none';
            });

            //Показываем один слайд
            items[slideIndex - 1].style.display = "flex";
        }

        showSlides(slideIndex);


        //Будем передавать либо 1 либо -1
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }


        //Если не были переданы селекторы кнопок то этот код не сработает и не сломает логику
        try {
            const prevBtn = document.querySelector(prev),
                nextBtn = document.querySelector(next);

            //При нажатии на кнопки меняются слайды
            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            });

            nextBtn.addEventListener('click', () => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            });


        } catch (e) {
        }

        //Направление движения слайдов вертикальное/горизонтальное
        //Смена слайдов каждые 4 секунды
        function activateAnimation() {
            if (dir === 'vertical') {

                paused = setInterval(function () {
                    plusSlides(1);
                    items[slideIndex - 1].classList.add('slideInDown');
                }, 4000)
            } else {
                paused = setInterval(function () {
                    plusSlides(1);
                    items[slideIndex - 1].classList.remove('slideInRight');
                    items[slideIndex - 1].classList.add('slideInLeft');
                }, 4000)
            }
        }

        activateAnimation();

        //При наведении на слайд автоматическое смещение прекращается
        items[0].parentNode.addEventListener('mouseenter', () => {
            clearInterval(paused);
        });

        items[0].parentNode.addEventListener('mouseleave', () => {
            activateAnimation();
        });


    };
    sliders('.quote-item-slider', '', '', '');

    //Smooth Scroll
    const scrolling = (upSelector) => {
        //Функция PageUp
        const upElem = document.querySelector(upSelector);

        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 1650) {
                upElem.classList.add('animated', 'fadeIn');
                upElem.classList.remove('fadeOut');
            } else {
                upElem.classList.add('fadeOut');
                upElem.classList.remove('fadeIn');
            }
        });

        //Scrolling with Request Animation Frame
        let links = document.querySelectorAll('[href^="#"]'),
            speed = 0.2;

        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();

                let widthTop = document.documentElement.scrollTop,
                    hash = this.hash,
                    toBlock = document.querySelector(hash).getBoundingClientRect().top,
                    start = null;

                requestAnimationFrame(step);

                function step(time) {
                    if (start === null) {
                        start = time;
                    }

                    let progress = time - start,
                        r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                    if (r !== widthTop + toBlock) {
                        requestAnimationFrame(step)
                    } else {
                        location.hash = hash;
                    }
                }
            });
        });
    };
    scrolling('.pageup');


});






