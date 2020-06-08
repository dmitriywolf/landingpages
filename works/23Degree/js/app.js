window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //Nav Header
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
                header.classList.add('fixed', 'animated', 'bounceInRight', 'show');
            } else {
                header.classList.remove('fixed', 'bounceInRight', 'show');
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

    //Forms
    const forms = () => {

        let form = document.querySelectorAll('form');
        let inputs = document.querySelectorAll('input');
        let textarea = document.querySelector('textarea');
        let phoneFields = document.querySelectorAll('input[type="tel"]');

        //В полях номера телефона вводить только цифры
        phoneFields.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/\D/, '');
            });
        });

        //Ответы для пользователя
        const answers = {
            loadingMessage: 'Загрузка...',
            successMessage: 'Спасибо за Ваше обращение! Мы свяжемся с Вами в течении 15 минут',
            failMessage: 'Извините! Что-то пошло не так...',
            loadingImg: './img/answer-loading.gif',
            successImg: './img/answer-success.png'
        };

        //Функция отправки запроса
        const postData = async (url, data) => {
            let response = await fetch(url, {
                method: "POST",
                body: data
            });
            return await response.text();
        };

        //Очистка полей формы после отправки
        const clearFields = () => {
            inputs.forEach(input => {
                input.value = "";
            });

            textarea.value = "";
        };

        //Обрабочик на отправку формы Submit
        form.forEach(item => {

            item.addEventListener('submit', (event) => {

                //Отмена стандартного поведения браузера
                event.preventDefault();

                //Блок ответа для пользователя
                let answerPopup = document.createElement('div');
                answerPopup.classList.add('popup__answer');
                document.body.append(answerPopup);

                let answerImg = document.createElement('img');
                answerImg.setAttribute('src', answers.loadingImg);
                answerPopup.append(answerImg);

                let answerText = document.createElement('p');
                answerText.textContent = answers.loadingMessage;
                answerPopup.append(answerText);

                //Собрание всех данных которые ввел пользователь
                const formData = new FormData(item);

                //Осуществляем post запрос
                postData('./server.php', formData)
                //Успешное выполнение
                    .then(response => {
                        console.log(response);
                        answerImg.setAttribute('src', answers.successImg);
                        answerText.textContent = answers.successMessage;
                    })
                    //Обработка ошибки
                    .catch(() => {
                        answerText.textContent = answers.failMessage;
                    })
                    .finally(() => {
                        clearFields();
                        setTimeout(() => {
                            answerPopup.remove();
                        }, 4000);
                    })
            });

        });

    };
    forms();

    //Slider


});







