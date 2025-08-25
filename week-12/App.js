// let heading = document.getElementById("heading");
// let paragraph = document.getElementById("para");
// let image = document.getElementById("mainImage");
// let button = document.getElementById("actionBtn");

// button.addEventListener("click", function () {
//     heading.innerText = "Hello, JavaScript DOM!";
//     paragraph.style.color = "blue";
//     paragraph.style.fontSize = "20px";
//     image.src = "https://via.placeholder.com/150/0000FF/FFFFFF?text=New+Image";
//     button.innerText = "Style Changed!";
// });



// let div = document.querySelector(".color");
// let btnOne = document.querySelector(".btn-one");
// let btnTwo = document.querySelector(".btn-two");
// let btnThree = document.querySelector(".btn-three");


// btnOne.addEventListener("click", function (){
//     div.style.backgroundColor = "red";
// })
// btnTwo.addEventListener("click", function (){
//     div.style.backgroundColor = "blue";
// })
// btnThree.addEventListener("click", function (){
//     div.style.backgroundColor = "yellow";
// });


// let input = document.querySelector(".inp");
// let par = document.querySelector(".para");

// input.addEventListener("input", function () {
//     par.innerText = "You typed: " + input.value;
// });


// let input = document.querySelector(".inp");
// let p = document.querySelector(".para");


// input.addEventListener("input", function (){
//     if(input.value.length >=6){
//         p.innerText = "strong password";
//         p.style.color = "green";
//     }else{
//         p.innerText = "week password";
//         p.style.color = "red";      
//     }
// })

// DAY 2,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let input = document.querySelector(".inp");
// let ul = document.querySelector(".list");

// input.addEventListener("keydown", function(event){
//     if(event.key === "Enter" && input.value.trim() !== ""){
//         let li = document.createElement("li");
//         li.innerText = input.value;
//         ul.appendChild(li);
//         input.value="";
//     }
// })


// let input = document.querySelector(".inp");
// let task = document.querySelector(".list");

// input.addEventListener("keydown", function(event){
//     if(event.key === "Enter" && input.value.trim() !== ""){
//         let li = document.createElement("li");
//         li.innerText = input.value;

//         // Toggle completed class on click
//         li.addEventListener("click", function(){
//             li.classList.toggle("completed");
//         });

//         // Delete button
//         let dlt = document.createElement("button");
//         dlt.innerText = "Delete";
//         dlt.addEventListener("click", function(event){
//             event.stopPropagation(); // prevent li click
//             li.remove();
//         });

//         li.appendChild(dlt);
//         task.appendChild(li);
//         input.value = ""; // clear input after adding
//     }
// });


// let btn = document.querySelector(".btn");
// let para = document.querySelector(".text");

// btn.addEventListener("click", function(){
//     para.classList.toggle("none");
// })


// let btn = document.querySelector(".btn");
// let body = document.body;

// btn.addEventListener("click", function(){
//     body.classList.toggle("dark-mode");
//     if(body.classList.contains("dark-mode")){
//         btn.innerText = "switch to light mode";
//     }else {
//         btn.innerText = "switch to drak mode";
//     }
// });


// DAY 3,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


// let inp = document.querySelector(".input");
// let para = document.querySelector(".counter");
// let warning = document.querySelector(".warning");

// inp.addEventListener("input", function(){
//     let len = inp.value.length;

//     // Update counter text
//     para.innerText = `${len} / 100 characters`;

//     // If limit exceeded
//     if (len > 100) {
//         inp.value = inp.value.slice(0, 100);        // Stop at 100 characters
//         warning.style.display = "block";            // Show warning
//         para.style.color = "red";                   // Red counter
//     } else {
//         warning.style.display = "none";             // Hide warning
//         para.style.color = len > 80 ? "orange" : "green";  // Color based on length
//     }
// });


// let inp = document.querySelector(".input");
// let count = document.querySelector(".counter");
// let warn = document.querySelector(".warning");

// inp.addEventListener("input", function(){
//     let len = inp.value .length;
//     let word = inp.value.trim().split(/\s+/).filter(Boolean).length;

//     if(len > 150){
//         inp.value = inp.value.slice(0,150);
//         len = 150;
//     }
//     count.innerText = `Word: ${word} | charatcers ${len} / 150`;
//     if(len >=150){
//         warn.style.display = "block";
//         warn.style.color = "red";
//     }else {
//         warn.style.display = "none";
//     }
// })


// let pass = document.querySelector(".password");
// let btn = document.querySelector(".toggle");
// let p = document.querySelector(".para");
// btn.addEventListener("click", function(){
//     if(pass.type === "password"){
//         pass.type = "text";
//         btn.innerText = "hide"; 
//         if(pass.value.length > 5){
//             p.innerText = "Strong password";
//         }else{
//             p.innerText = "weak Password";
//         };
//     }else{
//         pass.type = "password";
//         btn.innerText = "show";
//     }
// });


// Day  4,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// console.log("Start");

// setTimeout(function() {
//     console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");


// console.log("i am gabbar singe");
// setTimeout(() => {
//     console.log("you are not");
    
// }, 3000);

// console.log("end ");

// let count = 0;

// let intervalId = setInterval(function() {
//     console.log("Count:", count);
//     count++;

//     if(count > 4){
//         clearInterval(intervalId); // Stop repeating
//     }
// }, 1000);


// let count = 0;
// let intr = setInterval(function (){
//     console.log("count:", count);
//     count++;
//     if(count>8){
//         clearInterval(intr);
//     }
// }, 1000);



// let list = document.querySelector(".list");

// list.addEventListener("click", function(event) {
//     if(event.target.tagName === "LI"){
//         event.target.style.color = "blue";
//         console.log("You clicked:", event.target.innerText);
//     }
// });


// let li = document.querySelector(".list");
// li.addEventListener("click", function(event){
//     if(event.target.tagName === "LI"){
//         alert("you clicked:", event.target.innerText);
//     }
// });

// let list = document.querySelector(".todo-list");

// list.addEventListener("click", function(event) {
//     if(event.target.tagName === "LI"){
//         event.target.classList.toggle("done");
//     }
// });


// let list = document.querySelector(".todo-list");

// list.addEventListener("click", function(event){
//     if (event.target.classList.contains("delete-btn")) {
//         let li = event.target.parentElement;
//         li.remove();

//         // Optional Bonus: Check if list is empty now
//         if (list.children.length === 0) {
//             alert("List is empty!");
//         }
//     }
// });




// let inp = document.querySelector(".todo-input");
// let btn = document.querySelector(".add-btn");
// let ul = document.querySelector(".todo-list");

// inp.addEventListener("click", function(){
//     let task = inp.value.trim();
//     if(task !=""){
//         let newLi = document.createElement("li");
//         newLi.innertext = "task";
//         ul.appendChild(newLi);
//         ul.innerText = "";
//     }

// });



let inp = document.querySelector(".todo-input");
let btn = document.querySelector(".add-btn");
let ul = document.querySelector(".todo-list");

btn.addEventListener("click", function () {
    let task = inp.value.trim();

    if (task !== "") {
        let newLi = document.createElement("li");
        newLi.innerText = task;

        // Toggle 'done' class on click
        newLi.addEventListener("click", function () {
            newLi.classList.toggle("done");
        });

        ul.appendChild(newLi);
        inp.value = "";
    }
});




// DAY 5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// localStorage.setItem("name", "Muhammadfaisalkhan");
// let userName = localStorage.getItem("name");
// console.log(userName);

// localStorage.removeItem("name");


// localStorage.setItem("favColor", "Green");
// let favCol = localStorage.getItem("favColor");
// console.log(favCol);

// localStorage.removeItem("favColor");



// sessionStorage.setItem("favProgrammingLanguage", "javascript");

// let favPro = sessionStorage.getItem("favProgrammingLanguage");
// console.log(favPro); // javascript

// // Correct: use the key name
// sessionStorage.removeItem("favProgrammingLanguage");

// console.log(sessionStorage.getItem("favProgrammingLanguage")); // null



sessionStorage.setItem("name", "MFaisalKhan");
sessionStorage.setItem("age", "20");
sessionStorage.setItem("sem", "4th");

let nm = sessionStorage.getItem("name");
let ag = sessionStorage.getItem("age");
let sm = sessionStorage.getItem("sem");

console.log(nm);
console.log(ag);
console.log(sm);

sessionStorage.removeItem("name");
sessionStorage.removeItem("age");
sessionStorage.removeItem("sem");


sessionStorage.setItem("name", "MFaisalKhan");
sessionStorage.setItem("age", "20");
sessionStorage.setItem("sem", "4th");

console.log(sessionStorage.length);
sessionStorage.clear();

console.log(sessionStorage.length);

let usedSp = JSON.stringify(sessionStorage).length;
console.log(`used space: ${usedSp} characters`);