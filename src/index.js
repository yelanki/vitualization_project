
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
//const clearGenerator = randomGenerator(result);


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

let updateDebouncetext=debouncing(searchValue=>{
            const res=create(searchValue);
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
};



const searchResult=document.querySelector(".search");
searchResult.addEventListener("input",function(e){
          const value=e.target.value;
          if(value.length>=0){
               let searchValue=value.toLowerCase();
               updateDebouncetext(searchValue);

            }
        });








    const app = document.getElementById("app");
    const scrollable = document.querySelector(".scrollable");
    const visiable = document.querySelector(".visiable");

 

      print(result);
    //print function to print the names in the page
   function print(res){
         let startIdx = 1;
         app.scrollTop=0;
    
          const height = 30;
          const visiHeight = app.clientHeight;
          const perPage = Math.ceil((visiHeight / height));
          const perPageRender = perPage;
          const max =res.length;
          scrollable.style.height = `${max * height}px`;
    
         render(0,perPageRender);
         function render(idx,ppr) {
               console.log(idx,ppr);
                visiable.style.transform = `translateY(${app.scrollTop-(app.scrollTop%height)}px)`;
               if (idx === startIdx) {
                   return;
                }
                startIdx = idx;
                 visiable.innerHTML = "";
                 for (let i = idx; i <ppr && i<res.length; i++) {
                  console.log("i",i)
                  if(i==res.length){
                       break;
                    }
                      const div = document.createElement("div");
                       div.style.height = `${height}px`;
                       div.style.background = (i + startIdx) % 2 ? "#bbe4f7" : "#f9d1d1";
                       div.innerText = `${res[i].name}`;
                        visiable.appendChild(div);
            }
        }

         app.addEventListener("scroll", listener);

        function listener() {
           const sTop = app.scrollTop;
           console.log("stop",sTop)
           const min =(Math.floor(sTop / height));
           const max=Math.floor((sTop+app.clientHeight)/height);
           render(min,max+1);
        }
    };


//this is list virtualizatin with pure java script







