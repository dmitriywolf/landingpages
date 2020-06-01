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

export {tabs};