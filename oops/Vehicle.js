// //js object example


// // property value shorthand example
// function makeUser(name,age){
//     return {
//         name,
//         age,
//         0: 'he the who', //For instance, a number 0 becomes a string "0" when used as a property key:
//     }
// }

// const User = {}

// User.__proto_ = 'jaiveer';

// checking property exists in object or not , is so easy in javascript, 
const car = {
};
// 1 way to check
console.log(car.price  === undefined); 
// 2nd way using in operator
console.log('price' in bike);

// for in loop to walk throuth objects

// let User = {
//     name: 'kishan',
//     5: 0,
//     IsMature: false,
//     1: 22,
// }

// for (let key in User){
//     console.log(User[key])
// }



// check emptiness

// const schedule = {};

// schedule["5:00"] = 500;

// function isEmpty(obj){
//     for(let key in obj){
//         return false;
//     }

//     return true;
    
// }
// console.log(isEmpty(schedule));

// sum object properties
// let salaries = {
 
//   }

// function countSalary(obj){
//     let sum = 0;

//     for(key in obj){
//         sum += obj[key];
//     }
//     console.log(sum);
//     return sum;
// }

// countSalary(salaries);


// Multiply numeric property values by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number' ){
            obj[key] *= 2;
        }
    }
  }
multiplyNumeric(menu);
console.log(menu);


// class example

// class Vehicle{
//     constructor(type,year,maker){
//         this.type = type;
//         this.year = year;
//         this.maker = maker;
//     }

//     getDetails(){
//         return (`The maker of the vehicle is ${this.maker} made in ${this.year} type is ${this.type}`)
//     }

// }