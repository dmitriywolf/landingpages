// Tab--Glazing
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

//Tab--Decoration
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
    let timer = document.getElementById(id);
    let daysSpan = timer.querySelector('.days');
    let hoursSpan = timer.querySelector('.hours');
    let minutesSpan = timer.querySelector('.minutes');
    let secondsSpan = timer.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaining(endTime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }

    updateClock();
    let timeInterval = setInterval(updateClock, 1000);
}

let dedLine = 'April 23 2020';
setClock('timer', dedLine);


// Modal Windows

//Popup CallBack
let popupCallBack = document.getElementById('popupCallback'),
    popupCallBackButton = document.getElementById('openCallBackPopupButton'),
    popupCallBackCloseButton = document.querySelector('.close--callback-popup');

popupCallBackButton.addEventListener('click', function (evt) {
    popupCallBack.classList.add('show');
});

popupCallBackCloseButton.addEventListener('click', function (evt) {
    popupCallBack.classList.remove('show');
});



