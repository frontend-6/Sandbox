$(document).ready(function () {

    $.fn.simpleSlider = function ( options ){
        let settings = $.extend( {
            dots: false,
            arrows: false
            }, options);
        let slider = this,
            dots = settings.dots,
            arrows = settings.arrows,
            trackClass = '.fe7slider__track',
            dotsClass = '.fe7slider__dots',
            currentPosition = 0;
        
        if (settings.currentPosition) {
            currentPosition = settings.currentPosition - 1;
        }

        console.log(currentPosition);

        if (!slider) {
            console.error("no selector found");
            return false;
        }
        else {
            $(slider).each(function () {
                $(this).addClass('fe7slider');
                $(this).prepend('<div class="fe7slider__track"></div>');

                // получаем общую ширину слайдов для трека
                var trackWidth = 0,
                    imgCount = $(this).children('img').length;
                // SELF - запоминаем текущий слайдер
                var self = $(this);
                $(this).children('img').each(function () {
                    trackWidth += $(this).width();
                    $(self).children(trackClass).append($(this));
                });
                // // присваиваем ширину треку
                $(this).children(trackClass).css('width', `${trackWidth}px`);
                // MAKE DOTS
                if (dots) {
                    $(this).prepend(`
                        <ul class="fe7slider__dots">
                        </ul>
                    `);

                    for (let i = 0; i < imgCount; i++) {
                        if (i == currentPosition) {
                            $(this).children(dotsClass).append('<li class="fe7slider__dot fe7slider__dot--active"></li>');
                        }
                        else {
                            $(this).children(dotsClass).append('<li class="fe7slider__dot"></li>');
                        }
                    }
                    
                    $(dotsClass).on('click', 'li', function () {
                        currentPosition = $(this).index();
                        Move();
                    })
                }
                if (arrows) {
                    $(this).prepend(`
                        <button class="fe7slider__arrow fe7slider__arrow--prev">prev</button>
                        <button class="fe7slider__arrow fe7slider__arrow--next">next</button>
                    `);
                    
                    // обработчик кнопок
                    $(this).children('.fe7slider__arrow').on('click', function () {
                        if ($(this).hasClass('fe7slider__arrow--prev')) {
                            currentPosition--;
                            // если новый текущий слайд больше чем количество слайдов идем в начало
                            if (currentPosition == -1) {
                                currentPosition = imgCount - 1;
                            }
                        }
                        if ($(this).hasClass('fe7slider__arrow--next')) {
                            currentPosition++;
                            // если новый текущий слайд больше чем количество слайдов идем в начало
                            if (currentPosition == imgCount) {
                                currentPosition = 0;
                            }
                        }
                        Move();
                    })
                }
                // функция перемещения трека до текущего слайда
                function Move() {
                    // смещение трека в px
                    var offset = 0;
                    // считаем сумму ширин каждой картинки то текущей
                    $(self).find('img').each(function (i) {
                        if (i < currentPosition) {
                            offset += $(this).width();
                        }
                    });
                    
                    if (offset == trackWidth) {
                        offset = 0;
                    }
                    // записываем смещение в css
                    $(self).children(trackClass).css('transform', `translateX(-${offset}px)`);

                    if (dots) {
                        $(self).find(dotsClass).children().each(function () {
                            $(this).removeClass('fe7slider__dot--active');
                            if ($(this).index() == currentPosition) {
                                $(this).addClass('fe7slider__dot--active');
                            }
                        })
                    }
                }
                Move();

            })
        }
    }

    $('.slider2').simpleSlider({
        dots: true,
        // arrows: true
    });

    $('.slider1').simpleSlider({
        // dots: true,
        arrows: true,
        currentPosition: 2
    });

    $('.slider3').simpleSlider({
        dots: true,
        arrows: true
    });

})