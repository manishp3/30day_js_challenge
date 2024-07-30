// // class person {
// //   name = "Manish";
// //   age = 21;
// // static greeting() {
// //     console.log(`my name is ${this.name} and age is ${this.age}`);
// //   }
// //   update() {
// //     this.name = "prince";

// //     console.log(`my name is ${this.name} and age is ${this.age}`);
// //   }
// // }

// // person.greeting()

// // // // const a=new person
// // // // a.greeting()
// // // // a.update()

// // // class student extends person {
// // //   studId = 101;
// // //   // name="Hello"
// // //   constructor(studid) {
// // //     super();
// // //   }
// // //   greeting() {
// // //     console.log(
// // //       `studentId :${this.studId} name :${this.name} Age :${this.age}`
// // //     );
// // //   }
// // // }

// // // const s1 = new student();
// // // s1.greeting();
// // // s1.update()


// // class person{
// //   static greeting(){
// //     console.log("Hello users");
// //   }
// // }

// // // person.greeting()

// // class person{
// //   static count=0;
// //   constructor(){
// //       person.count+=1;
// //       console.log(person.count+"hello");
// //   }
// //   static greeting(){
// //     console.log(`i am called ${this.count} times`);
// //   }
// // }


// // let p1=new person
// // console.log(p1);
// // let p2=new person
// // console.log(p2.greeting());


// class person{
//   constructor(fname,lname){
//     this._fname=fname
//     this._lname=lname
//   }
//   get greet(){
//     return `${this._fname}  and ${this._lname}`
    
//   }
//   greet1(){
//     console.log(`hello my name is ${this._greet}`);
//   }
// }


// const p1=new person;
// console.log( p1.greet1());

