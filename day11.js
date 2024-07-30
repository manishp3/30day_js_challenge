// const pr1=new Promise((res,rej)=>{
//     setTimeout((res) => {
//         console.log("after 2 seconds");
//     }, 2000);
// })

// console.log(pr1);

// const p2=new Promise((res,rej)=>{

//   setTimeout(() => {
//     console.log("rejected");
//   }, 2000)
// })

// p2.then(()=>{
//     console.log('i am then');
// })
// .catch((err)=>{
//     console.log(err+"Errpr");
// })

// console.log(p2);

// const p3=new Promise((res,rej)=>{
//     fetch('https://jsonplaceholder.typicode.com/posts/2')
//     .then((data)=>console.log(data))
//     // .then((data)=>data.body)
// })

// console.log(p3);

//  const p4= new Promise ((res,rej)=>{
//     await
// })

// async function fetchData(){
//     try{
//         const resp=await fetch("https://jsonplaceholder.typicode.com/posts/3");
//         if(resp.ok){

//         }
//     }
// }

// const p1 = new Promise((res) => {
//   setTimeout(() => {
//     res("i am solve 1");
//   }, 1000);
// });

// const p2 = new Promise((res) => {
//     setTimeout(() => {
//       res("i am solve 2");
//     }, 1000);
//   });

// const p3 = new Promise((res) => {
//     setTimeout(() => {
//       res("i am solve 3");
//     }, 4000);
//   });

//   Promise.all([p1,p2,p3]).then((res)=>{
//     console.log("all solved");
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err.message);
//   })

// const p3 = new Promise((res) => {
//     setTimeout(() => {
//       res("i am solve 3");
//     }, 1000);
//   });

// const p2 = new Promise((res) => {
//     setTimeout(() => {
//       res("i am solve 2");
//     }, 1000);
//     console.log( p3)
//   });

// const p1 = new Promise((res) => {
//     setTimeout(() => {
//       res("i am solve 1");
//     }, 1000);
//     console.log( p2)
//   });

// Promise.race([p1,p2,p3]).then((res)=>{
//   console.log("all solved");
//   console.log(res);
// })
// .catch((err)=>{
//   console.log("First rejected",err.message);
// // })
// const url=fetch('https://jsonplaceholder.typicode.com/todos/1')
// new Promise((res, rej) => {
//   setTimeout(() => {
//     res(url);
//   },100);
// })
//   .then((data) => data.json())
//   .then((res)=>console.log(res.title))
//   .catch((err) => {
//     console.log(err.message);
//   });



// const fetchPromise = fetch('https://jsonplaceholder.typicode.com/todos/1');

// new Promise((res, rej) => {
//   setTimeout(() => {
//     res(fetchPromise);
//   }, 1000);
// })
//   .then((fetchResponse) => fetchResponse.json()) // Convert the response to JSON
//   .then((data) => console.log(data)) // Log the fetched data
//   .catch((err) => {
//     console.log(err.message);
//   });



// new Promise((res,rej)=>{
//     if(t===1){
//         res()
//     }
//     else{
//         rej
//     }
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err.message));

