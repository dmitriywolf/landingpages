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
            let answer = $(this).find('.answer');
            answer.addClass('show');
        });

        $(this).on('click', '.answer__close-icon', function (event) {
            event.stopPropagation();
            $(this).closest('.answer').removeClass('show');
        });
    });

    //Forms
    const forms = () => {

        //Все формы и поля
        const form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('input'),
            phoneInput = document.querySelectorAll('input[name="user-tel"]');

        //Проверка ввода номера телефона: Убрать все не числовые значения
        phoneInput.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            });
        });

        //Объект сообщений
        const message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Мы свяжемся с вами в течении 5 минут!',
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
                        }, 5000);
                    });

            });
        });


    };

    forms();


});