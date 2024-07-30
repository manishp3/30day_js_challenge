
// function checkNum(){
//     try{
//         throw new Error("This is an intentionally error throwed")
//     }
//     catch(err){
//        console.log("error throwed :",err.message);
//     }
// }

// checkNum()


// function checkNum(num1,num2){
//     try{
//         if(num1/num2==0){
//             throw new Error("An denominator is zero:")
//         }
//         else{
//             console.log("denominator is not zero");
//         }
//     }
//     catch(err){
//         console.log("throwd :",err.message);
//     }
//     finally{
//         console.log("end of execution flow");
//     }

// }

// checkNum(1,1)


// function checkStr(str){
//     if(str===''){
//         throw new Error("string is empty please check")
//     }
//     else{
//         console.log("Strign is not empty :"+str);
//     }
// }

// try{
//     checkStr('manish')
// }
// catch(err){
//     console.log(err.message);
// }


// console.log(oneP);


// class customError extends Error{
//     constructor(message){
//         super(message)
//         this.name="empty data send"
//     }
//     }
    
//     const msg=""
//     function someError(str){
//         try{
//             if(str!==''){
//                 console.log("string is not empty :" +str);
//             }
//             else{
//                 throw new customError("This is a custom error")
//             }
//         }
//         catch(err){
//             console.log(err.name+err.message);
//         }
//     }
    
//     someError(msg)

// function randomPromise(){
//     return new Promise((res,rej)=>{
//         const data=Math.random()*1;
//         if(data>0.5){
//             res("i am resolved" +data)
//         }
//         else{
//             rej(new Error("i am not resolved"+data))
//         }
//     })
// }

// async function checkData(){
//     try{
//         const data=await randomPromise()
//         console.log(data);
//     }
//     catch(err){
//         console.log(err.message);
//     }
// }

// checkData()
// const URL='https://jsonplaceholder.typicode.com/todos/1';    
//  function check(){ new Promise((res,rej)=>{
//       res(URL)
// }).then((res)=> res.json())
// .then((data)=>console.log(data.title))
// .catch((err)=>{
//     console.log(err.message +"failed to load data during API");
// })

// }


// async function check(){
//     try{
//         const data=await fetch(URL)
//         const res=await data.json()
//         console.log(res.title);
//     }
//     catch(err){
//         console.log(err.message);
//     }
// }

// check()

// function check(num){
//     try{
//         if(num==1){
//         console.log("TRY");
//         }
//         else{
//             throw new Error("i am failed")
//         }
//     }
//     catch(err){
//         console.log(err.message +" error message");
//     }
//     finally{
//         console.log("finlaluae");
//     }
// }

// check(2)


// class customErr extends Error{
//     constructor(msg){
//         super(msg)
//         this.name="i am erro throwed"
//     }
// }

// function checkError(num){
//     try{
//         if(num==1){
//         console.log("i m not error ok!");
//         }
//         else{
//             throw new customErr("thorwed error")
//         }
//     }
//     catch (err){
//         console.log(err.name + "  "+err.message);
//     }
// }

// checkError(2)




const ran=Math.floor(Math.random()*50)+1
const url=`https://jsonplacehlder.typicode.com/todos/${ran}`

async function checkData(){
    try{
        const data=await fetch(url)
        if(!data.ok){
            throw new Error("please check the link provdied is invalid ")
        }
        const res=await data.json();
        console.log(res.title);
    }
    catch(err){
        console.log(err.message);
    }
}

checkData()