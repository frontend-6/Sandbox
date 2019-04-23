$(document).ready(function () {
    
    let options = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    }

    let slider = $('.slick').slick(options);

    console.log(options);

    $('.js-button').on('click', function () {
        // options.adaptiveHeight = false;
        $(this).text(slider.slick('slickCurrentSlide'));
        // console.log("CLICKED!!!!!!")
        // console.log(options);
    })

})