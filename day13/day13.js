// // // function add(a,b){
// // //     return a+b
// // // }


// // // module.exports=add;


// // // function obj(per){

// // //    for (const key in per) {
    
// // //        console.log(per[key]);
        
// // //     }
// // //    }
// // //     console.log(per.name +"hello");
// // //     console.log(per.age);
// // //     console.log(per.std);
// // //     console.log(per.complete);


// // // module.exports=obj

// function add(a,b){
//     console.log(a+b);
// }

// function sub(a,b){
//     console.log(a-b);
// }

// function mul(a,b){
//     console.log(a*b);
// }

// // export default mul
// export {add,sub,mul}

// // math.js
// // 'use strict';
// // "type": "module"
// // function add(a, b) {
// //     return a + b;
// //   }
  
// //   export default add;
  


const _ =require('lodash')

const arr=[1,2,3,1,5,6,1,12]

console.log(_.compact(arr));