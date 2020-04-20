// //Slick Carousel
$(document).ready(function () {

    let carouserCompanies = $('#carouselCompanies');

    carouserCompanies.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                }
            },

        ]
    });

});