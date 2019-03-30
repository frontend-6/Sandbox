/**
 * @description Функция возвращяет результат от умножения чисел a и b
 * @param {number} a 
 * @param {number} b
 * @returns {number} a * b
 * @example 2 * 3 = 6
 */
function square( a, b ) {
    return a * b;
}

/**
 * @description запрашиваем у пользователя строку возвращяем число
 * @param {string} string
 * @returns {number} парсит введенное число 
 */
function askNumber( string ) {
    let chislo;
    
    // do {
        
    //     chislo = prompt( string );
        
    // } while ( parseInt(chislo) !== NaN );
    
    return parseInt( chislo );
}

do {
    
    let a = askNumber( 'Введите первое число' );
    
    let b = askNumber( 'Введите второе число' );

    let S = square( a, b );

    alert( `Площадь прямоугольника со сторонами ${a} и ${b} равна ${S}` );

} while ( confirm( "Хотите повторить?" ) );