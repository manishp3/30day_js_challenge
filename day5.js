// const sum=(a,b)=>{
//     return a+b;
// }


// console.log("sum " +sum(3,4));

// const checkChar=(str,char)=>{
//     if(str.includes(char)){
//         return true
//     }
//     else { return false}
// }

// console.log( checkChar("Manish",'a'));

// function multt(a,b=10){
//     console.log(a*b);
// }

// multt(12)
// let dogBark=()=>{console.log("how how barks");}

// const mainFunction=(func,times)=>{
//     for(let i=0;i<times;i++){
//         func();
//     }
// }


// mainFunction(dogBark,4)

// const helloChekc=(num)=>{
//     if(num%2==0){
//         console.log("Even  :"+num);
//     }
//     else{
//         console.log("Id  :"+num);
//     }
// }
// let number=[5,4,3,2,56,89,90,12]

// number.forEach(helloChekc)

// function checkSquare(num){
//     console.log(num*num);
// }

// let numbers=[4,3,5,6,7,8,9,12]
// numbers.forEach(checkSquare)


const promiseONe=new Promise(function(res,rej){
    console.log("promise");
})

new Promise((res,rej){
    setTimeout(() => {
        res()
    }, 1000);
})

