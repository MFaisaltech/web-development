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

// let inp = document.querySelector("input");
// inp.addEventListener("keyup", function (event) {
//     console.log("code =", event.code);
//     if(event.code = "ArrowUp"){
//         console.log("character moves forward");
//     }else if(event.code == "ArrowDown"){
//         console.log("character mover backward");
//     }else if(event.code == "Arrowleft"){
//         console.log("character mover left");
//     }else if(event.code == "Arrowright"){
//         console.log("character mover right");
//     }
    // console.log(`code = ${event.code}`);
    // console.log("key was pressed");
// });

// function one () {
//     return 1;
// }
// function two () {
//     return one() + one ();
// }
// function three () {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout (() => {
            h1.style.color=color;
            resolve("color changed!");
        }, delay);
    });
}

changeColor("red", 1000)
.then(()=>{
    console.log("red color wrappped");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("prange color wrapped");
    return changeColor("blue", 1000);
})
.then(()=>{
    console.log("blue color wrapped");
}
)
.catch(()=>{
    console.log("weak connection");
})
// changeColor("red", 1000, () => {
//     changeColor("blue", 1000, () =>{
//         changeColor("green", 1000);
//     });
// });

// setTimeout(()=>{
//     h1.style.color = "red";
// }, 1000);

// setTimeout(()=>{
//     h1.style.color = "blue";
// }, 2000);
// setTimeout(()=>{
//     h1.style.color = "green";
// }, 3000);
// setTimeout(()=>{
//     h1.style.color = "orange";
// }, 4000);
// setTimeout(()=>{
//     h1.style.color = "indigo";
// }, 5000);





// function saveToDB (data, success, failure){
//     let internetSpeed = Math.floor(Math.random() *10);
//     if(internetSpeed >4){
//         success();
//     } else {
//         failure();
//     }
// }
// saveToDB("FAISALKHAN FROM MARDAN", () =>{
//     console.log("success: Data was saved");
//     saveToDB("Hello world", ()=> {
//         console.log("success2: data2 saved");
//     }, () => {
//         console.log("failure2: data not saved");
//         saveToDB("UET", () => {
//             console.log("success3: data saved");
//         }, ()=>{
//             console.log("failure3: weak connection");
//         });
//     });
//  }, 
//  () => {
//         console.log("failure: data was not saved");
//     });

//PROMISES//
//---------------------------------------------------------//

// function saveToDB (data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() *10) +1;
//         if(internetSpeed >4){
//             resolve("success: fullfilled");
//         } else {
//             reject("failure: weak connection");
//         }
//     });
// }


//THEN & CATCH //
//----------------------//
// saveToDB("apna college")
//  .then(()=>{
//     console.log("data1: resolved");
//     return saveToDB("faisalkhan");
// })
//     .then(()=>{
//         console.log("data2: saved");
//     })
// .catch(()=>{
//     console.log("rejected");
// });

// function saveToDB(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1; // 1–10
//         console.log(`Trying to save: "${data}" with speed: ${internetSpeed}`);

//         setTimeout(() => {
//             if (internetSpeed > 4) {
//                 resolve(`✅ Success: "${data}" saved.`);
//             } else {
//                 reject(`❌ Failure: "${data}" not saved (slow internet).`);
//             }
//         }, 1000);
//     });
// }

// saveToDB("apna college")
//     .then((res1) => {
//         console.log("data1: resolved", res1);
//         return saveToDB("faisalkhan");
//     })
//     .then((res2) => {
//         console.log("data2: resolved", res2);
//         return saveToDB("uet peshawar");
//     })
//     .then((res3) => {
//         console.log("data3: resolved", res3);
//     })
//     .catch((err) => {
//         console.log("rejected:", err);
//     });

console.log("Start");

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
