const container = $('.slider-container'),
    wrapper = $('.slider-wrapper');

$(container).css('max-width', '100%');
$(container).css('overflow', 'auto');
$(wrapper).css('display', 'flex');
$(wrapper).css('transition', '.3s');

let wrapperWidth = 0,
    slides = $(wrapper).children('.slider-item');

for (let i = 0; i < slides.length; i++) {
    wrapperWidth += $(slides[i]).outerWidth();
}

console.log(wrapperWidth);

let current = 0;

function getOffset(_newSlide) {
    
    let width = 0;

    for (let i = 0; i < _newSlide; i++) {
        width += $(slides[i]).outerWidth();
    }

    return width;

}

let autoplay = false;

if (autoplay) {
    setInterval(() => {
    
        if (current + 1 == slides.length + 1) {
            current = 0;
        }
        
        $(wrapper).css("transform", `translateX(-${getOffset(current++)}px)`)
    
    }, 2000);
}

$('.slider-button--next').on('click', function () {
    
    $(wrapper).css("transform", `translateX(-${getOffset(current)}px)`);
    
    current++;
    
    if (current == slides.length) {
        current = 0;
    }
})

$('.slider-button--prev').on('click', function () {
    $(wrapper).css("transform", `translateX(-${getOffset(current)}px)`)
    
    current--;
    
    if (current == -1) {
        current = slides.length - 1;
    }
})