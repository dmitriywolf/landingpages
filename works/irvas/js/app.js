// Tab Glazing
let tabGlazing = function () {
    let tabNav = document.querySelectorAll('.glazing-nav-tab');
    let tabContent = document.querySelectorAll('.glazing-tab-content');
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
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};

tabGlazing();

//Tab Decoration
let tabDecoration = function () {
    let tabNavDecoration = document.querySelectorAll('.decoration-nav-tab');
    let tabContentDecoration = document.querySelectorAll('.decoration-tab-content');
    let tabNameDecoration;

    tabNavDecoration.forEach(item => {
        item.addEventListener('click', selectTabNavDecoration)
    });

    function selectTabNavDecoration() {
        tabNavDecoration.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabNameDecoration = this.getAttribute('data-tab-name');
        selectTabContent(tabNameDecoration);
    }

    function selectTabContent(tabNameDecoration) {
        tabContentDecoration.forEach(item => {
            item.classList.contains(tabNameDecoration) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};

tabDecoration();


//Timer
function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(id, endTime) {
    let timer = document.getElementById(id),
        daysSpan = timer.querySelector('.days'),
        hoursSpan = timer.querySelector('.hours'),
        minutesSpan = timer.querySelector('.minutes'),
        secondsSpan = timer.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaining(endTime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = t.hours;
        minutesSpan.innerHTML = t.minutes;
        secondsSpan.innerHTML = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }

    updateClock();
    let timeInterval = setInterval(updateClock, 1000);
}


let dedLine = '2020-04-23';
setClock('timer', dedLine);


// Modal

