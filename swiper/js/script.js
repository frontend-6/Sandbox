// js goes here
$(document).ready(function () {
    //initialize swiper when document ready
    let options = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            bulletElement: 'li',
            bulletClass: "customclass",
            renderBullet: function (index, className) {
                return '<li class="' + className + '">' + (index + 1) + '</li>';
            }
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    };

    var mySwiper = new Swiper ('.swiper-container', options)
  });