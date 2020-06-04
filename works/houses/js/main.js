window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let header = $("#header");
    let intro = $("#intro");
    let introHeight;
    let scrollPosition;

    /* Fixed Header
     * ====================================================*/
    $(window).on("scroll load resize", function () {
        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();

        if (scrollPosition > introHeight) {
            header.addClass('fixed fadeInDown animated');
        } else {
            header.removeClass('fixed fadeInDown');
        }
    });

    /*Smooth Scroll
    * =====================================================*/
    let pageUp = $(".pageup");
    let $page = $('html, body');

    //Показ/скрытие pageUp
    $(window).on("scroll load resize", function () {
        scrollPosition = $(this).scrollTop();
        if (scrollPosition > 1300) {
            pageUp.addClass('fadeIn animated');
            pageUp.removeClass('fadeOut');
        } else {
            pageUp.addClass('fadeOut');
            pageUp.removeClass('fadeIn');
        }
    });

    //Анимированный плавный скрол
    $('a[href^="#"]').on("click", function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

    /*Tabs Projects
    * =====================================================*/
    $('.projects-nav').on("click", ".tab-nav", function () {
        let tabsNav = $(".tab-nav"),
            tabsContent = $(".tab-content");
        tabsNav.removeClass("active");
        tabsContent.removeClass("active fadeIn");
        $(this).addClass("active");
        tabsContent.eq($(this).index()).addClass("active animated fadeIn");
        tabsContent.eq($(this).index()).slick("setPosition");
        return false;
    });

    /*Projects Slider
    * =========================================*/
    $('.projects__slider').slick({
        autoplay: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*Design Slider
    * =========================================*/
    $('.design__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*Answers
    =========================================*/
    let asks = $('.asks__item');

    asks.each(function () {

        $(this).on('click',  function (e) {
            e.preventDefault();
            let answer = $(this).find('.answer');
            answer.addClass('show');
        });

        $(this).on('click', '.answer__close-icon', function (event) {
            event.stopPropagation();
            $(this).closest('.answer').removeClass('show');
        });
    });

    /*Forms
    * =======================================*/
    const forms = () => {

        //Все формы и поля
        const form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('input'),
            phoneInput = document.querySelectorAll('input[name="user-phone"]');

        //Проверка ввода номера телефона: Убрать все не числовые значения
        phoneInput.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            });
        });

        //Объект сообщений
        const message = {
            loading: 'Загрузка...',
            success: 'Мы свяжемся с вами в течении 15 минут!',
            failure: 'Что-то пошло не так...'
        };

        //Функция отправки запроса
        const postData = async (url, data) => {
            document.querySelector('.status').textContent = message.loading;

            let res = await fetch(url, {
                method: "POST",
                body: data
            });

            return await res.text();
        };

        //Функция очистки полей
        const clearFields = () => {
            inputs.forEach(item => {
                item.value = "";
            });
        };

        form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                //Блок показа ответа
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.appendChild(statusMessage);

                //Собираем все данные с формы
                let formData = new FormData(item);

                //Отправляем запрос на сервер
                postData('server.php', formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = message.success;
                    })
                    .catch(() => statusMessage.textContent = message.failure)
                    .finally(() => {
                        clearFields();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 4000);
                    });

            });
        });


    };

    forms();

});