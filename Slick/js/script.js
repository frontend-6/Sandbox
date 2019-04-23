$(document).ready(function () {
    
    let options = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    }

    let breakpoints = {
        
    }

    let slider1 = $('.slick1').slick(options);

    options.adaptiveHeight = false;
    let slider2 = $('.slick2').slick(options);

    console.log(options);

    $('.js-button').on('click', function () {
        // options.adaptiveHeight = false;
        $(this).text(slider.slick('slickCurrentSlide'));
        // console.log("CLICKED!!!!!!")
        // console.log(options);
    })

})