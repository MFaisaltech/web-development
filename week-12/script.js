//DAY 1://
//ASYNC FUNCTION//
//--------------------------------------------------//


// async function greet() {
//     throw " 404 page not found";
//     return "hello!";
// }
// greet()
// .then((result) =>{
//     console.log("promise was resolved");
//     console.log("result was: ", result);
// })
// .catch((err)=> {
//     console.log("promise was rejected", err);
// });

// let demo = async () => {
//     return 5;
// };

//AWAIT-----------------//

// function getNum() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }

// h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> {
//             let num = Math.floor(Math.random()*5)+1;
//             if(num >3){
//                 reject("promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed");
//         }, delay);
//   });

// }
// async function demo(){
//     try{
//         await changeColor("red", 1000);
//         await changeColor("yello", 1000);
//         await changeColor("blue", 1000);
//     } catch (err){
//         console.log("error caught");
//         console.log(err);
//     }
//     let a = 5;
//     console.log(a);
//     console.log('new num is:', a+3);
// }


//API--------------------------//

// let url = "https:catfact.ninja/fact/";

// fetch(url)
// .then((res)=> {
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1:",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2:", data2.fetch);
// })
// .catch((err)=>{
//     console.log(err)
// });


//async with fetch----------------------//


// let url = "https:catfact.ninja/fact/";
// async function getFact() {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(DataTransfer.fact);
// }
// console.log("bye");

//async with AXIOS image API----------------------//

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async ()=>{
//     let link = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("scr", link)
// });
// let url = "https:catfact.ninja/fact/";

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     }catch (e) {
//         console.log("erroor:", e);
//         return "no image found";
//     }
// }

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () =>{
//     let country = document.querySelector("input").value;
//     console.log(country);
//     let collArr = await getCollages(country);
//     console.log(collArr);
//     show(collArr);
// });

// function show(collArr){
//     let list = document.querySelector("#list");
//     list.innerText ="";
//     for(col of collArr){
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name
//         list.appendChild(li);
//     }
// }


// async function getCollages(country) {
//     try{ 
//         let res = await axios.get(url+country);
//         return res.data;
//     } catch(e) {
//         console.log("error:", e);
//     }
// }



// let gallery = document.getElementById("catGallery");
// let btn = document.getElementById("loadCtas");

// async function getcats(){
//   try {
//     let responce = await fetch("https://api.thecatapi.com/v1/images/search?limit=5&has_breeds=1", {
//       headers: {
//        "x-api-key": "live_5wUiWKhD76OIN4Rxt62sMqiKfXmnKmVbW3SqBcRhUaSnV6zTxb2hONOy81d4fwC2"
//      }
//     });
//     let data = await responce.json();
//     console.log(data);
//     gallery.innerHTML = "";

//     data.forEch( => {
//       let img = document.createElement("img");
//       img.src = cat.url;
//       img.classList.add("cat-image");


//       let info = document.createElement("p");
//       if(cat.breeds && cat.breeds.length > 0){
//         let breed = cat.breeds[0];
//         info.textContent = `${breed.name}- ${breed.tempermant}`;
//       }else{
//         info.textContent = "not defined";
//       }

//       let catCard = document.createElement("div");
//       catCard.classList.add("cat-card");
//       catCard.appendChild(img);
//       catCard.appendChild(info);

//       gallery.appendChild(catCard);
//     });

//   } catch (error) {
//     console.log("error", error);
//   }
// }
// btn.addEventListener("click", getCats);


// day4

let gallery = document.getElementById("dogGallery");
let msg = document.getElementById("message");
let btn = document.getElementById("loadDogs");


async function getDogs() {
  try{
    gallery.innerHTML = "";
    message.textContent = "loading.....";

    let response  = await fetch("https://dog.ceo/api/breeds/image/random/3");
    if(!response.ok) throw new  error(`"something went wrong ${response.status}`);

    message.textContent = "";
    let data = await response.json();

    data.message.forEach(dogUrl => {
      let img = document.createElement("img");
      img.src= dogUrl;
      img.classList.add("dog-image");


      let card = document.createElement("div");
      card.classList.add("dog-div");
      card.appendChild(img);
      gallery.appendChild(card);
    });
  }
  catch(error){
    message.textContent = "";
    let errMsg = document.createElement("p");
    errMsg.id = "error";
    errMsg.textContent = `something went wrone ${error.message}`;
    gallery.append(errMsg);
  }
}
btn.addEventListener("click", getDogs);