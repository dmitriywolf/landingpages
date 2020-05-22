document.addEventListener('DOMContentLoaded', () => {
    // Modals
    let modals = () => {
        function bindModal(triggerSelector, modalSelector, closeSelector) {

            let trigger = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector);


            trigger.forEach(item => {
                item.addEventListener('click', (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
                    modal.style.display = 'block';
                    modal.classList.add('animated', 'zoomIn');
                    document.body.classList.add('open-popup');
                });
            });

            close.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.classList.remove('open-popup');
            });

            window.addEventListener("keydown", function (e) {
                if (e.keyCode === 27) {
                    e.preventDefault();
                    modal.style.display = 'none';
                    document.body.classList.remove('open-popup');
                }
            });
        }

        bindModal('.popup--engineer__button', '.popup--engineer', '.popup--engineer .popup__close');

        bindModal('.popup--callback__button', '.popup--callback', '.popup--callback .popup__close');

        bindModal('.popup--calculate__button', '.popup--calculate', '.popup--calculate .popup__close');
    };

    modals();

    // Tab
    let tabs = () => {
        function tab(tabNavSelector, tabContentSelector) {

            let tabNav = document.querySelectorAll(tabNavSelector);
            let tabContent = document.querySelectorAll(tabContentSelector);
            let tabName;

            tabNav.forEach(item => {
                item.addEventListener('click', selectTabNav)
            });

            function selectTabNav() {
                tabNav.forEach(item => {
                    item.classList.remove('is-active');
                });
                this.classList.add('is-active');
                tabName = this.getAttribute('data-tab-name');
                selectTabContent(tabName);
            }

            function selectTabContent(tabName) {
                tabContent.forEach(item => {
                    item.classList.contains(tabName) ? item.classList.add('is-active', 'animated', 'zoomIn') :
                        item.classList.remove('is-active', 'zoomIn');
                });
            }
        }

        tab('.decoration-nav-tab', '.decoration-tab-content');
        tab('.glazing-nav-tab', '.glazing-tab-content');

    };

    tabs();

    //Timer
    let timer = () => {

        //Служеьная функция
        let addZero = (number) => {
            if (number <= 9) {
                return '0' + number;
            }
            return number;
        };

        let getTimeRemaining = (endTime) => {
            let time = Date.parse(endTime) - Date.parse(new Date()),
                seconds = Math.floor((time / 1000) % 60),
                minutes = Math.floor((time / 1000 / 60) % 60),
                hours = Math.floor((time / 1000 / 60 / 60) % 24),
                days = Math.floor(time / 1000 / 60 / 60 / 24);
            return {
                'total': time,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        };

        let setTime = (selector, endTime) => {

            let timer = document.querySelector(selector),
                daysSpan = timer.querySelector('.days'),
                hoursSpan = timer.querySelector('.hours'),
                minutesSpan = timer.querySelector('.minutes'),
                secondsSpan = timer.querySelector('.seconds'),

                timeInterval = setInterval(updateClock, 1000);

            //Обновление таймера, записываем в DOM
            function updateClock() {
                let t = getTimeRemaining(endTime);

                daysSpan.textContent = addZero(t.days);
                hoursSpan.textContent = addZero(t.hours);
                minutesSpan.textContent = addZero(t.minutes);
                secondsSpan.textContent = addZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    daysSpan.textContent = "00";
                    hoursSpan.textContent = "00";
                    minutesSpan.textContent = "00";
                    secondsSpan.textContent = "00";

                    clearInterval(timeInterval);
                }
            }

            updateClock();
        };

        let dedLine = 'August 30 2020';

        setTime('#timer', dedLine);
    };

    timer();

    //Forms
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










