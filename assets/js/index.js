let string = "Строка"
let num = 20;
let bool = true
let nothing = null


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
    console.log('Текущий статус:',check.checked)
    if (check.checked == true) {

        background.style.backgroundImage = "url(./assets/images/background-dark.png)";
    
    } else {
    
        background.style.backgroundImage = "url(./assets/images/background-light.png)";
    
    }
};

let massCards = [
    {
        title: "Учёные нашли лекарство от рака!",
        text: "Шок новость! 2024! ВСЕМ ЧИТАТЬ!",
        data: "30.01.2024",
        isPublic: false,
    },

    {
        title: "Учёные нашли лекарство от рака!",
        text: "Шок новость! 2024! ВСЕМ ЧИТАТЬ!",
        data: "30.01.2024",
        isPublic: false,
    },

    {
        title: "Учёные нашли лекарство от рака!",
        text: "Шок новость! 2024! ВСЕМ ЧИТАТЬ!",
        data: "30.01.2024",
        isPublic: false,
    },

    {
        title: "Учёные нашли лекарство от рака!",
        text: "Шок новость! 2024! ВСЕМ ЧИТАТЬ!",
        data: "30.01.2024",
        isPublic: false,
    },

    {
        title: "Учёные нашли лекарство от рака!",
        text: "Шок новость! 2024! ВСЕМ ЧИТАТЬ!",
        data: "30.01.2024",
        isPublic: false,
    },
  

];

let cardList = document.querySelector(".card-list")

for (let i = 0; i < massCards.length; i++) {

    let cardList = document.querySelector(".cardlist");
    cardList.insertAdjacentHTML(
    "afterbegin", 
    `<div class="card">
    <h2>${massCards[0].title}</h2>
    <p>
        ${massCards[0].text}
    </p>
    <h6>
        ${massCards[0].date}
    </h6>
    </div>`

    );

}

