// let btn = document.querySelector('button');
// btn.addEventListener("click", function () {
//     let h3 = document.querySelector('h3');
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector('div');
//     div.style.backgroundColor = randomColor;

//     console.log("color update");
//     // console.log("genertae a random number");
// });
// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     // let inp = document.querySelector("input");
//     // console.dir(inp);
//     console.log(user.value);
//     console.log(pass.value);

//     // alert("submitted");
// });

// let user = document.querySelector("#user");
// user.addEventListener("change", function() {
//     console.log("input changed");
//     console.log("finla value =", this.value);

// });
// user.addEventListener("input", function() {
//     console.log("input changed");
//     console.log("finla value =", this.value);

// });

let inp = document.querySelector("#text");
let p = document.querySelector("p");


inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
});