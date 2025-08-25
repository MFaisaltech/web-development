// function saveData() {
//     let name = document.getElementById("name").value;
//     let color = document.getElementById("color").value;
//     let storageType = document.querySelector('input[name="storageType"]:checked').value;

//     if (storageType === "local") {
//         localStorage.setItem("userName", name);
//         localStorage.setItem("favColor", color);
//         alert("Data saved in localStorage ✅");
//     } else {
//         sessionStorage.setItem("userName", name);
//         sessionStorage.setItem("favColor", color);
//         alert("Data saved in sessionStorage ✅");
//     }
// }

// function showData() {
//     let storageType = document.querySelector('input[name="storageType"]:checked').value;
//     let name, color;

//     if (storageType === "local") {
//         name = localStorage.getItem("userName");
//         color = localStorage.getItem("favColor");
//     } else {
//         name = sessionStorage.getItem("userName");
//         color = sessionStorage.getItem("favColor");
//     }

//     document.getElementById("output").innerText = 
//         name && color ? `Name: ${name}, Favorite Color: ${color}` : "No data found ❌";
// }

// function clearData() {
//     let storageType = document.querySelector('input[name="storageType"]:checked').value;

//     if (storageType === "local") {
//         localStorage.clear();
//     } else {
//         sessionStorage.clear();
//     }
//     alert("Storage cleared 🗑️");
// }




// DATE AND TIME 

// function updateClock(){
//     let now = new Date();
//     document.getElementById("clock").textContent = now.toLocaleTimeString();

// } setInterval(updateClock, 1000);
// updateClock();

// function updateClock(){
//     let now = new Date();
//     document.getElementById("clock").textContent = now.toLocaleTimeString();

//     let options = {
//         weekday:'long', month:'long', year:'numeric', day:'numeric' 
//     };
//     document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);

//  }setInterval(updateClock, 1000);
//  updateClock();

// Word Counter
// let inp = document.querySelector(".input");
// let para = document.querySelector(".counter");
// let warn = document.querySelector(".warning");

// inp.addEventListener("input", function(){
//     let text = inp.value;

//     let charCount = text.length;
//     let wordCount = text.trim().split(/\s+/).filter(Boolean).length;

//     para.innerText = (`${charCount} characters | ${wordCount} words`);

//     if(charCount > 100){
//         warn.style.display = "block";
//     }else{
//         warn.style.display = "none";
//     }
// })



// RANDOM QUOTE GEN
// let quotes = [
//     { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
//     { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
//     { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
//     { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
//     { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" }
//   ];
  
//   let btn = document.getElementById("new-quote");
//   let quoteText = document.getElementById("quote");
//   let quoteAuthor = document.getElementById("author");


//   btn.addEventListener("click", function (){
//     let quoteIndex = Math.floor(Math.random() * quotes.length);


//     let randomQuote = quotes[quoteIndex];
//      quoteText.textContent = randomQuote.text;
//      quoteAuthor.textContent = "-" + randomQuote.author;
//   });



//   btn.addEventListener("click", function(){
//     let randomIndex = Math.floor(Math.random() * quotes.length);
//     let randomQuote = quotes[randomIndex];
//     quoteText.textContent = randomQuote.text;
//     quoteAuthor.textContent = "- " + randomQuote.author;
//   });
  

// API,,,,,,,,,,,,,,,,,,,

// let img = document.getElementById("dogImage");
// let btn = document.getElementById("newDog");

// function getCat () {
//   fetch("https://api.thecatapi.com/v1/images/search", {
//     headers: {
//       "x-api-key": "live_pPG15nYhGTYOrOJEbv4n85VAQ7dPIuehEn6BJBJm4IA1NW2wmXLvQLqClnYl8TJs"
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     img.src = data[0].url;
//   })
//   .catch(error => {
//     console.log("unexpected error", error);
//   });
// }
// btn.addEventListener("click", getCat);
// getCat();


// let div = document.getElementById("catGallery");
// let btn = document.getElementById("loadCats");

// function getCat(){
//   fetch("https://api.thecatapi.com/v1/images/search?limit=5",{
//     headers: {
//       "x-api-key": "live_pPG15nYhGTYOrOJEbv4n85VAQ7dPIuehEn6BJBJm4IA1NW2wmXLvQLqClnYl8TJs"
//     }
//   })
//   .then(response => response.json())
//   .then(data => { 
//     div.innerHTML = "";
//     data.forEach(cat => {
//       let img = document.createElement("img");
//       img.src = cat.url;
//       div.appendChild(img);
//     });
// })
// .catch(error => {
//   console.log("find erroe", error);
// })
// }

// btn.addEventListener("click", getCat);


// let div = document.getElementById("catGallery");
// let btn = document.getElementById("loadCats");

// function getCat() {
//   fetch("https://api.thecatapi.com/v1/images/search?limit=5", {
//     headers: {
//       "x-api-key": "live_pPG15nYhGTYOrOJEbv4n85VAQ7dPIuehEn6BJBJm4IA1NW2wmXLvQLqClnYl8TJs"
//     }
//   })
//   .then(response => response.json()) // ✅ fixed
//   .then(data => { 
//     div.innerHTML = ""; // ✅ clear old images
//     data.forEach(cat => {
//       let img = document.createElement("img");
//       img.src = cat.url;
//       div.appendChild(img); // ✅ fixed
//     });
//   })
//   .catch(error => {
//     console.log("find error", error);
//   });
// }

// btn.addEventListener("click", getCat);



// let img = document.getElementById("dogImage");
// let info = document.getElementById("dogInfo");
// let btn = document.getElementById("loadDog");

// function getDog() {
//   fetch("https://api.thedogapi.com/v1/images/search?include_breeds=true", {
//     headers: {
//       "x-api-key": "YOUR_API_KEY_HERE" // Replace with your API key
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data); // See full data
//       let dog = data[0];

//       // Set image
//       img.src = dog.url;

//       // Check if breed info exists
//       if (dog.breeds && dog.breeds.length > 0) {
//         let breed = dog.breeds[0];
//         info.textContent = `${breed.name} — ${breed.temperament}`;
//       } else {
//         info.textContent = "Breed info not available.";
//       }
//     })
//     .catch(error => {
//       console.log("Error fetching dog data:", error);
//     });
// }
// btn.addEventListener("click", getDog);
// getDog(); // Load first dog on page load


// PROMISES ANS ASYNC DAY

// let pizzaOrder = new Promise((resolve, reject)=> {
//   let pizzaReady = true;
//   if(pizzaReady){
//     resolve("delivered");
//   }else{
//     reject("not");
//   }
// });
// pizzaOrder
// .then(message => console.log("success", message))
// .catch(error => console.log("error", error));



// let wat = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("5 sec passed");
//   }, 5000);
// });
// wat.then(message => console.log(message));


// let coffe = new Promise((resolve, reject) => {
//   let order = true;
//   setTimeout(()=> {
//     if(order){
//       resolve("coffee is delivered");
//     }else{
//       reject("cant processed");
//     }
//   }, 2000);
//   });

// coffe.then(message => console.log("success", message))
// .catch(error => console.log("error", error));

// Simulating a coffee order process


// function makeCoffee() {
//   return new Promise((resolve, reject) => {
//     let coffee = true;
//     console.log("coffe is being preparing");
//     setTimeout(()=> {
//       if(coffee){
//         resolve("prepared");
//       }else{
//         reject("not processed");
//       }
//     }, 2000);
//   });
// }

// async function getCoffee() {
//   try{
//     let message = await makeCoffee();
//     console.log("success", message);
//   }catch(error){
//     console.log("error", error);
//   }
// }
// getCoffee();