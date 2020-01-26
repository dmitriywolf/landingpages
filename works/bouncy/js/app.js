$(function ($) {

    //Portfolio: https://github.com/desandro/masonry
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 280
    });



    //Slider: https://github.com/kenwheeler/slick/
    let slider = $("#teamSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true
    });


});

