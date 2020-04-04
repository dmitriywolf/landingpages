// Modal windows
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
                item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
            });
        }
    }

    tab('.decoration-nav-tab', '.decoration-tab-content');
    tab('.glazing-nav-tab', '.glazing-tab-content');

};

tabs();










