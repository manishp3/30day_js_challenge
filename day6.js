// let arr=[]

// arr.push(23)
// arr.push(12)
// arr.push(45)
// arr.push(10)
// arr.push(5)


// console.log(arr);

// arr.unshift(11)
// console.log(arr);

// // arr.map((dob)=>console.log(dob*dob));
// // arr.filter(ar>3 console.log(ar))

// // console.log( arr.filter(num=>num>10));
// let arr=[1,2,3,4,5]
// arr.forEach((num)=>{
//     console.log(num);
// })



function createMatrix(r,c){
    let array=[];
    for(let i=0;i<r;i++){
            let row=[];
        for(j=0;j<c;j++){
            row.push(0);
        }
        array.push(row)
    }
    return array
}

console.log(createMatrix(2,3));


// function create2DArray(rows, cols) {
//      let array = [];
//     for (let i = 0; i < rows; i++) {
//         // Create an empty row
//         let row = [];
        
//         // Loop to create columns in the current row
//         for (let j = 0; j < cols; j++) {
//             // Initialize each element with a default value, e.g., 0
//             row.push(0);
//         }
        
//         // Add the row to the array
//         array.push(row);
//     }

//     return array;
// }

// // Usage example:
// let rows = 3;
// let cols = 4;
// let my2DArray = create2DArray(rows, cols);

// console.log(my2DArray);
