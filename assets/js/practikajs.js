// let tagBlock = document.getElementsByTagName("div")[0];
// console.log(tagBlock);

// let block = document.querySelector(".block");
// console.log(block);
// let blockid = document.getElementById("blockid");
// console.log(blockid);

// tagBlock.style.width = "200px";
// tagBlock.style.height = "500px";
// tagBlock.style.backgroundColor = "red";

// block.style.width = "500px";
// block.style.height = "500px";
// // block.style.backgroundColor = "green";

// blockid.style.width = "300px";
// blockid.style.height = "500px";
// blockid.style.backgroundColor = "blue";

// blockid.classList;
// console.log(blockid.classList);
// blockid.classList.add("--active");
// blockid.classList.remove("dwq");

let button = document.getElementById("btn");
console.log("button");
let block = document.querySelector(".block");
console.log("block");

let isopen = false;

button.onclick = function() {
    console.log("нажали");
    if (isopen) {
        block.style.display = "none";
        isopen = false;

    } else {

        block.style.display = "block";
        isopen = true;

    }
};


