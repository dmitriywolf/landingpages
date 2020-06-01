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

export {timer};