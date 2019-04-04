// let min = 3 , max = 10;
 
// let is_chislo_prostoe = true;// будем проверять является ли число простым

// /**
//  * 
//  * @param {number} min 
//  * @param {number} max 
//  */
// Resheto(min, max);
// function Resheto(min, max) {
    
//     for (let i = min; i <= max; i++) {
        
//         for (let j = 2; j < i; j++) {
            
//             if ( i % j == 0 ) {

//                 // is_chislo_prostoe = false;
//                 break;

//                 console.log(123);

//             }

//             if ( j == i - 1 ) {
//                 console.log(i);
//             }
            
//         }

//         // if (is_chislo_prostoe) console.log(i);
//         // is_chislo_prostoe = true;
//     }

// }

// // 7 = 2*3+1; is_prostoe
// // 6 = 2*3; ne_prostoe
// // 12 = 3*4/6*2/2*2*3; ne_prostoe

// console.log(`Вариант вывода 1`);
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
// for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//         const value = salaries[key];
//         console.log(`key = ${key}, value = ${value}`);
//     }
// }

// console.log(`Вариант вывода 2`);
// var salaries = {
//     "0": 100,
//     "1": 300,
//     "5": 250
// };
// for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//         const value = salaries[key];
//         console.log(`key = ${key}, value = ${value}`);
//     }
// }

// console.log(`Вариант вывода 3`);
// var salaries = [ 100, 300, 250 ];
// for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//         const value = salaries[key];
//         console.log(`key = ${key}, value = ${value}`);
//     }
// }

// console.log(`Вариант вывода 4`);
// var salaries = {
//     0: 100,
//     1: 300,
//     5: 250
// };
// for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//         const value = salaries[key];
//         console.log(`key = ${key}, value = ${value}`);
//     }
// }

// window.myName = "Sasha";

// console.log(window.myName);

let cols = 4, rows = 4;

let counter = 1;

var arr = [];

for (let a = 0; a < cols; a++) {
    arr[a] = [];
}

for (let i = 0, j = 0, k = cols, l = rows; i < k, j < l, k > i, l > j; i++, j++, k--, l--) {
    
    arr[i][j] = counter++;
}

console.log(arr);