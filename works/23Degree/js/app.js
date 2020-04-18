window.addEventListener('DOMContentLoaded', () => {
    'use strict';

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

    //


});





