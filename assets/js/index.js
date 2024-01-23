let string = "Строка"
let num = 20;
let bool = true
let nothing = null


let man = {

    name: "Ваня",
    age: "23", 
    isSick: false,
    
}

let h1 = document.getElementsByTagName("h1");
console.log(h1);
// h1[0].style.fontSize = "14px";
// h1[0].innerText = "Другой текст";

let theme = document.getElementById("lightmode");

let link = document.querySelector(".about h2");
let links = document.querySelectorAll(".link");
console.log(link, links);

let background = document.querySelector("body");
console.log("background.style.backgroundImage");


let check = document.getElementById("lightmode");
check.onclick = function() {
    background.style.backgroundImage = "url(./assets/images/background-dark.png)";
}
