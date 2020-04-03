// Modal windows
let modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (event) => {
            if (event.target) {
                event.preventDefault();
            }

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    let callEngineerButton = document.querySelector('.popup__engineer__button'),
        modalEngineer = document.querySelector('.popup__engineer'),
        modalEngineerClose = document.querySelector('popup__engineer .popup__close');
};











