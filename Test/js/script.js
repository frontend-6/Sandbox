const content = {
    "Трава зеленая?": true,
    "Динозавры путешествуют по земле?": false,
    "19?": false 
}

let howMuchIsRight = 0;

for (const key in content) {
    if (content.hasOwnProperty(key)) {
        const value = content[key];
        value == confirm(`${key}`) ? howMuchIsRight++ : '';
    }
}

alert(`Количество правильных ответов = ${howMuchIsRight}`);

// function ShowAlert() {
//     alert("Вы нажали на кнопку!");
// }