// function Random() {
//     arguments[0] = arguments[0] ? arguments[0] : 1;
//     arguments[1] = arguments[1] ? arguments[1] : 6;
//     arguments[1] -= arguments[0];
//     return Math.floor( arguments[0] + Math.random() * arguments[1]);
// }

// document.write( Random( 9, 10 ) );

function Random(min, max) {

    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }

    return Math.floor( min + Math.random() * (max - min + 1) );
}

document.write( Random( 5, 2 ) );


/**
 * @param {string} str
 * @description Функция делает первую букву заглавной
 * @return {string} Возвращает строку с заглавным первым символом
 */