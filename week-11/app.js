// let btn = document.querySelector('button');
// console.dir(btn);

// // btn.onclick = function () {
// //     alert("button was clicked");
// // };

// function hi () {
//     alert("HELLO!");
// };
// btn.onclick = hi;

// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick = say;
// }
// function say  () {
//     alert("Helloooooo!");
// };

// let btns = document.querySelectorAll('button');
// for(btn of btns){
    // btn.onclick = hi;
    // btn.onmouseenter = function () {
    //     console.log("you enter a button");
    // };
    // console.dir(btn);
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", hi);
    // btn.addEventListener("dblclick", function () {
        // alert("you double clicked!");
    // });
// }
// function sayHello () {
//     alert("qurban");
// };
// function hi () {
//     alert("hello");
// };

// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// function changeColor () {
    // console.dir(this.innerText);
    // this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

let inp = document.querySelector("input");
inp.addEventListener("keyup", function (event) {
    console.log("code =", event.code);
    if(event.code = "ArrowUp"){
        console.log("character moves forward");
    }else if(event.code == "ArrowDown"){
        console.log("character mover backward");
    }else if(event.code == "Arrowleft"){
        console.log("character mover left");
    }else if(event.code == "Arrowright"){
        console.log("character mover right");
    }
    // console.log(`code = ${event.code}`);
    // console.log("key was pressed");
});

