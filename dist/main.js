/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n// //import \"./style.css\";\n// import { faker } from '@faker-js/faker'; \n\n\n// //function to generate contacts\n// function generator(count){\n//     const contactsList=[];\n//     for(let i=1;i<=count;i++){\n//      contactsList.push({name:faker.name.fullName()})\n     \n//     }\n//     console.log(contactsList)\n//     return contactsList;\n// }; \n\n// const result=generator(1_00_000);\n\n// //function to generate and add contacts randomly to the list.\n// function randomGenerator(result1){\n//     const intervalRef = setInterval(function(){\n//     result1.push({name:faker.name.fullName(),mail:faker.internet.email()})\n//     },60000)\n//     return function() {\n//         clearInterval(intervalRef);\n//     }\n// }\n// //const clearGenerator = randomGenerator(result);\n\n\n// //function to loop through the contactlist.\n// const fn=function(arg){\n//     let r=[];\n//   for(let i=0;i<result.length;i++){\n//       if(result[i].name.toLowerCase().includes(arg)){\n//           r.push({name:result[i].name,mail:result[i].mail});\n    \n//         }\n//     }\n//   return r;\n// }\n\n\n\n// //cache function to store contacts temporarly and send them to the print as per search list.\n// function cache(fn){\n//     const cache={};\n//     return function (args){\n//         if(cache.hasOwnProperty(args)){\n//             console.log(\"from cache\")\n//             return cache[args]\n//         }else if(args.length>0){\n//             let res=fn(args);\n//             cache[args]=res;\n//             console.log(\"generating\")\n//             return res;\n//         }\n//     }\n// }\n\n// const create=cache(fn); \n\n// let updateDebouncetext=debouncing(searchValue=>{\n//             const res=create(searchValue);\n//               print(res); \n// });\n        \n     \n\n\n// function debouncing(func,delay=100){\n\n//       let timer;\n//         return (...args)=>{\n//          clearTimeout(timer);\n//            timer=setTimeout(()=>{\n//                func(args)\n//             },delay);\n//         }\n// };\n\n\n\n// const searchResult=document.querySelector(\".search\");\n// searchResult.addEventListener(\"input\",function(e){\n//           const value=e.target.value;\n//           if(value.length>=0){\n//                let searchValue=value.toLowerCase();\n//                updateDebouncetext(searchValue);\n\n//             }\n//         });\n\n\n\n\n\n\n\n\n//     const app = document.getElementById(\"app\");\n//     const scrollable = document.querySelector(\".scrollable\");\n//     const visiable = document.querySelector(\".visiable\");\n\n \n\n//       print(result);\n//     //print function to print the names in the page\n//    function print(res){\n//          let startIdx = 1;\n//          app.scrollTop=0;\n    \n//           const height = 30;\n//           const visiHeight = app.clientHeight;\n//           const perPage = Math.ceil((visiHeight / height));\n//           const perPageRender = perPage;\n//           const max =res.length;\n//           scrollable.style.height = `${max * height}px`;\n    \n//          render(0,perPageRender);\n//          function render(idx,ppr) {\n//                console.log(idx,ppr);\n//                 visiable.style.transform = `translateY(${app.scrollTop-(app.scrollTop%height)}px)`;\n//                if (idx === startIdx) {\n//                    return;\n//                 }\n//                 startIdx = idx;\n//                  visiable.innerHTML = \"\";\n//                  for (let i = idx; i <ppr && i<res.length; i++) {\n//                   console.log(\"i\",i)\n//                   if(i==res.length){\n//                        break;\n//                     }\n//                       const div = document.createElement(\"div\");\n//                        div.style.height = `${height}px`;\n//                        div.style.background = (i + startIdx) % 2 ? \"#bbe4f7\" : \"#f9d1d1\";\n//                        div.innerText = `${res[i].name}`;\n//                         visiable.appendChild(div);\n//             }\n//         }\n\n//          app.addEventListener(\"scroll\", listener);\n\n//         function listener() {\n//            const sTop = app.scrollTop;\n//            console.log(\"stop\",sTop)\n//            const min =(Math.floor(sTop / height));\n//            const max=Math.floor((sTop+app.clientHeight)/height);\n//            render(min,max+1);\n//         }\n//     };\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://list_virtualization/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;