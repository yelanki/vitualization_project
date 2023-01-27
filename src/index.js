
//import "./style.css";
import { faker } from '@faker-js/faker'; 


//function to generate contacts
function generator(count){
    const contactsList=[];
    for(let i=1;i<=count;i++){
     contactsList.push({name:faker.name.fullName()})
     
    }
    console.log(contactsList)
    return contactsList;
}; 

const result=generator(1_00_000);


//function to generate and add contacts randomly to the list.
function randomGenerator(result1){
    const intervalRef = setInterval(function(){
    result1.push({name:faker.name.fullName(),mail:faker.internet.email()})
    },60000)
    return function() {
        clearInterval(intervalRef);
    }
}
const clearGenerator = randomGenerator(result);


//function to loop through the contactlist.
const fn=function(arg){
    let r=[];
for(let i=0;i<result.length;i++){
    if(result[i].name.toLowerCase().includes(arg)){
        r.push({name:result[i].name,mail:result[i].mail});
    
    }
}
return r;
}



//cache function to store contacts temporarly and send them to the print as per search list.
function cache(fn){
    const cache={};
    return function (args){
        if(cache.hasOwnProperty(args)){
            console.log("from cache")
            return cache[args]
        }else if(args.length>0){
            let res=fn(args);
            cache[args]=res;
            console.log("generating")
            return res;
        }
    }
}

const create=cache(fn); 


  print(result);

let updateDebouncetext=debouncing(searchValue=>{
    console.log(searchValue)
    const res=create(searchValue);
    console.log("res",res);
            print(res); 
});
        
     


function debouncing(func,delay=100){

let timer;
return (...args)=>{
    clearTimeout(timer);
   timer=setTimeout(()=>{
    func(args)
   },delay);
}
}



const searchResult=document.querySelector(".search");
searchResult.addEventListener("input",function(e){
    const value=e.target.value;
    if(value.length>=0){
        let searchValue=value.toLowerCase();
 updateDebouncetext(searchValue);
  }
});



function print(res){
    console.log(res);
    

const app = document.getElementById("app");
const scrollable = document.querySelector(".scrollable");
const visiable = document.querySelector(".visiable");

scrollable.scrollTop=0;
const max =res.length;
console.log(max)
const height = 30;
const visiHeight = scrollable.clientHeight;
console.log("visi",visiHeight);
const perPage = Math.ceil((visiHeight / height));
const perPageRender = perPage;
console.log("per",perPageRender)

scrollable.style.height = `${perPageRender * height}px`;
visiable.style.height = `${(res.length*height)}px`;
 let startIdx = 1;


render(0,perPageRender);
function render(idx,ppr) {
  console.log(idx,ppr);
  visiable.style.transform = `translateY(${scrollable.scrollTop}px)`;
  if (idx === startIdx && idx !== 1) {
    return;
  }
  startIdx = idx;
  visiable.innerHTML = "";
  for (let i = idx; i <=ppr; i++) {
    const div = document.createElement("div");
    div.style.height = `${height}px`;
    div.style.background = (i + startIdx) % 2 ? "#bbe4f7" : "#f9d1d1";
    div.innerText = `${res[i].name}`;
    visiable.appendChild(div);
  }
}

scrollable.addEventListener("scroll", listener);

function listener() {
  const sTop = scrollable.scrollTop;
  const min =Math.floor(sTop / height);
  const max=(Math.floor((sTop+scrollable.clientHeight)/height));
  render(min,max);
}
  };

















// console.log(res)
//let arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// const app = document.getElementById("app");
// const scrollable = document.querySelector(".scrollable");
// const visiable = document.querySelector(".visiable");

// //
// const max = 500;
// const height = 30;
// const visiHeight = app.clientHeight;
// const perPage = Math.ceil(max / height);
// const perPageRender = perPage + 1;

// scrollable.style.height = `${max * height}px`;
// visiable.style.height = `${perPageRender * height}px`;
// let startIdx = 1;

// render(1);
// function render(idx, morePx) {
//   console.log(idx,morePx);
//   visiable.style.transform = `translateY(${app.scrollTop - morePx}px)`;
//   if (idx === startIdx && idx !== 1) {
//     return;
//   }
//   startIdx = idx;
//   visiable.innerHTML = "";
//   for (let i = 0; i < perPageRender; i++) {
//     const div = document.createElement("div");
//     div.style.height = `${height}px`;
//     div.style.background = (i + startIdx) % 2 ? "#bbe4f7" : "#f9d1d1";
//     div.innerText = `${result[i + startIdx].innerHTML}`;
//     visiable.appendChild(div);
//   }
// }

// app.addEventListener("scroll", listener);

// function listener() {
//   //console.log(+new Date());
//   const sTop = app.scrollTop;
//   const topNum = Math.floor(sTop / height);
//   const morePx = sTop % height;
//   //if((topNum+1)>arr.length)
//   //return;
//   render(topNum + 1, morePx);
// }











// const items=[...Array(1000)].map((_,i)=>`item${i+1}`);
//console.log(items);
//  const listContainer=document.getElementById("list-container");
// const list=document.getElementById("list");
// listcontainer.style.height="200px";
//  listcontainer.style.overflow="scroll";
//  list.style.height=`${items.length*20}px`;


// function renderItems(start,end){
//     for(let i=start;i<end;i++){
//         const item=document.createElement("div");
//         item.innerHTML=items[i];
//         list.appendChild(item);
//     }
// };

//  renderItems(0,10);
//  var itemsPerView = 10;
//  var listContainer = document.getElementById("list-container");
//  var list = document.getElementById("list");
 
//  // Create the initial view
//  for (var i = 0; i < itemsPerView; i++) {
//    var item = document.createElement("li");
//    item.innerHTML = items[i];
//    list.appendChild(item);
//  }
 
//  // Add more items as the user scrolls
//  listContainer.addEventListener("scroll", function() {
//     //list.innerHTML="";
//    var scrollBottom = listContainer.scrollTop + listContainer.clientHeight;
//    var listHeight = list.clientHeight;
//    if (scrollBottom > listHeight) {
//      for (var i = itemsPerView; i < itemsPerView + 10; i++) {
//        if (i >= items.length) {
//          break;
//        }
//        var item = document.createElement("li");
//        item.innerHTML = items[i];
//        list.appendChild(item);
//      }
//      itemsPerView += 10;
//    }
//  });





// listcontainer.addEventListener("scroll",()=>{
// //console.log(container.firstChild)
// //const {scrolltop,clientheight}=container;
// const scrolltop=listcontainer.scrollTop;
// const clientheight=listcontainer.clientHeight;
// console.log(scrolltop,clientheight);
// //const start=Math.floor(scrolltop/20);
// var start = listcontainer.scrollTop + listcontainer.clientHeight;
// console.log(start);
// //const end=Math.ceil((scrolltop+clientheight)/20);
// const end=start+2
// console.log(end);

// renderItems(start,end);
// });












// //function to generate contacts
// function generator(count){
//     const contactsList=[];
//     for(let i=1;i<=count;i++){
//      //contactsList.push({name:faker.name.fullName(),mail:faker.internet.email()})
//      const resultItem = document.createElement('li')
//                             //resultItem.style.backgroundColor=(i%2==0)?"#cbb18d":"#b1813e";
//                             resultItem.classList.add('result-item');
//                             const text = document.createTextNode(`${faker.name.fullName()}`);
//                             resultItem.appendChild(text);
//                             contactsList.push(resultItem);
//     }
//     console.log(contactsList)
//     return contactsList;
// }; 

// const result=generator(1_00_000);
// //print(result);


// //function to generate and add contacts randomly to the list.
// function randomGenerator(result1){
//     const intervalRef = setInterval(function(){
//     result1.push({name:faker.name.fullName(),mail:faker.internet.email()})
//     },60000)
//     return function() {
//         clearInterval(intervalRef);
//     }
// }
// const clearGenerator = randomGenerator(result);


// //function to loop through the contactlist.
// const fn=function(arg){
//     let r=[];
// for(let i=0;i<result.length;i++){
//     // if(result[i].name.toLowerCase().includes(arg)){//&&arg.length>=0){
//     //     r.push({name:result[i].name,mail:result[i].mail});
//     if(result[i].innerHTML.toLowerCase().includes(arg)){//&&arg.length>=0){
//         r.push(result[i]); 
// }

// }
// return r;
// }



// //cache function to store contacts temporarly and send them to the print as per search list.
// function cache(fn){
//     const cache={};
//     return function (args){
//         if(cache.hasOwnProperty(args)){
//             console.log("from cache")
//             return cache[args]
//         }else if(args.length>0){
//             let res=fn(args);
//             cache[args]=res;
//             console.log("generating")
//             return res;
//         }
//     }
// }

// const create=cache(fn); 


//   print(result);

// let clear=document.getElementById("list");
// let updateDebouncetext=debouncing(searchValue=>{
//     console.log(searchValue)
//     const res=create(searchValue);
//     console.log("res",res);
//             clear.innerHTML="" ;
//             print(res); 
// });
              


//        function print(res){
//                     for(let i=0;i<res.length;i++){
//                              let list=document.getElementById("list");
//                              res[i].style.backgroundColor=(i%2==0)?"#cbb18d":"#b1813e";
//                             list.appendChild(res[i]);
                        
//                      }
//         };
     




// function debouncing(func,delay=100){

// let timer;
// return (...args)=>{
//     clearTimeout(timer);
//    timer=setTimeout(()=>{
//     func(args)
//    },delay);
// }
// }




// const searchResult=document.querySelector(".search");
// searchResult.addEventListener("input",function(e){
//     const value=e.target.value;
//     if(value.length>=0){
//         let searchValue=value.trim().toLowerCase();
//  updateDebouncetext(searchValue);
//   }
// });
