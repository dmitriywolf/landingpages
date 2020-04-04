// Modal windows
let modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (event) => {
            if (event.target) {
                event.preventDefault();
            }

            modal.style.display = 'block';
            // document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            // document.body.style.overflow = '';
        });
    }

    let popupEngineerButton = document.querySelector('.popup--engineer__button'),
        popupEngineer = document.querySelector('.popup--engineer'),
        popupEngineerClose = document.querySelector('.popup--engineer .popup__close');

    bindModal(popupEngineerButton, popupEngineer, popupEngineerClose);
};


modals();








