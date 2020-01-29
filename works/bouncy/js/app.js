$(function ($) {



















    //Portfolio: https://github.com/desandro/masonry
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 280
    });






    //Team Slider: https://github.com/kenwheeler/slick/
    let slider = $("#teamSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true
    });

    //Testimonials Slider
    let testSlider = $("#testimonialsSlider");

    testSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });


});

