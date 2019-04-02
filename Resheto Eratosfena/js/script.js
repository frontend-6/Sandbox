let min = 3 , max = 10;

let is_chislo_prostoe = true;// будем проверять является ли число простым

/**
 * 
 * @param {number} min 
 * @param {number} max 
 */
function Resheto(min, max) {
    
    for (let i = min; i <= max; i++) {
        
        for (let j = 2; j < i; j++) {
            
            if ( i % j == 0) {

                // is_chislo_prostoe = false;
                break;

            }

            if ( j == i - 1 ) {
                console.log(i);
            }
            
        }

        // if (is_chislo_prostoe) console.log(i);
        // is_chislo_prostoe = true;
    }

}

Resheto(min, max);
// 7 = 2*3+1; is_prostoe
// 6 = 2*3; ne_prostoe
// 12 = 3*4/6*2/2*2*3; ne_prostoe

console.log(`Вариант вывода 1`);
var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};
for (const key in salaries) {
    if (salaries.hasOwnProperty(key)) {
        const value = salaries[key];
        console.log(`key = ${key}, value = ${value}`);
    }
}

console.log(`Вариант вывода 2`);
var salaries = {
    "0": 100,
    "1": 300,
    "5": 250
};
for (const key in salaries) {
    if (salaries.hasOwnProperty(key)) {
        const value = salaries[key];
        console.log(`key = ${key}, value = ${value}`);
    }
}

console.log(`Вариант вывода 3`);
var salaries = [ 100, 300, 250 ];
for (const key in salaries) {
    if (salaries.hasOwnProperty(key)) {
        const value = salaries[key];
        console.log(`key = ${key}, value = ${value}`);
    }
}

console.log(`Вариант вывода 4`);
var salaries = {
    0: 100,
    1: 300,
    5: 250
};
for (const key in salaries) {
    if (salaries.hasOwnProperty(key)) {
        const value = salaries[key];
        console.log(`key = ${key}, value = ${value}`);
    }
}

window.myName = "Sasha";

console.log(window.myName);