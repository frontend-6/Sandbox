// const content = {
//     "Трава зеленая?": true,
//     "Динозавры путешествуют по земле?": false,
//     "19?": false 
// }

// let howMuchIsRight = 0;

// for (const key in content) {
//     if (content.hasOwnProperty(key)) {
//         const value = content[key];
//         value == confirm(`${key}`) ? howMuchIsRight++ : '';
//     }
// }

// alert(`Количество правильных ответов = ${howMuchIsRight}`);

// function ShowAlert() {
//     alert("Вы нажали на кнопку!");
// }

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

let sum = 0;

for (const key in salaries) {
    if (salaries.hasOwnProperty(key)) {
        const value = salaries[key];
        sum += value;
    }
}

console.log(sum);

// var salaries = [100, 300, 250];

// salaries[0];
// salaries[2];

// let sum = 0;

// for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//         const value = salaries[key];
//         sum += value;
//     }
// }

// console.log(sum);

// var salaries = [100, 300, 250];
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };

// let sum = 0;

// for (let i = 0; i < salaries.length; i++) {
//     const element = salaries[i];
//     sum += element;
// }
// console.log(sum);