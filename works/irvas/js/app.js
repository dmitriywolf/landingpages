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
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    bindModal('.popup--engineer__button', '.popup--engineer', '.popup--engineer .popup__close');

    bindModal('.popup--callback__button', '.popup--callback', '.popup--callback .popup__close');

    bindModal('.popup--calculate__button', '.popup--calculate', '.popup--calculate .popup__close');
};


modals();








