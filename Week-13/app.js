let btnOne = document.querySelector(".one");
let btnTwo = document.querySelector(".two");
let display = document.querySelector(".display");

let count = 0;
display.innerText = count;
btnOne.addEventListener("click", function(){
    count++;
    display.innerText = count;
});
btnTwo.addEventListener("click", function(){
    count = 0;
    display.innerText = count;
})