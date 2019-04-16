let data = localStorage.getItem("name") ? localStorage.getItem("name") : '';

let name = data ? JSON.parse(data) : new Array();

function Esche() {
    name.push(prompt("Имя?"));

    Print(name);

    let temp = JSON.stringify(name);  
    
    localStorage.setItem("name", temp);
}

function Print(_message) {
    document.getElementById("app").innerHTML = _message;
}

document.getElementById("js-button").addEventListener("click", Esche);

document.getElementById("js-clear").addEventListener("click", () => {

    console.log(this);

    localStorage.clear();

    Print("");
})