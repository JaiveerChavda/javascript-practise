

// for(let i = 0; i < 10; i++){
// if(i === 5){
//     continue
// }
// console.log(`number is ${i}`);

// }

// function countSelected(selectObject) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//       if (selectObject.options[i].selected) {
//         numberSelected++;
//       }
//     }
//     return numberSelected;
//   }
  
//   const btn = document.getElementById("btn");
  
//   btn.addEventListener("click", () => {
//     const musicTypes = document.selectForm.musicTypes;
//     console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
//   });
  

// let j = 0
// let p = 0
// // do {
// //     j++;
// //     // console.log(`here is ${j}`);
    
// // } while (j < 2);

// while(j < 5){
//     j++;
//     p += j;

//     while(p < 4){
//             if(p == 3){
//                 continue;
//             }
//     }
//     // if(j == 2){
//     //     continue;
//     // }


//     console.log(`${j} and p is ${p}`);
// }

// let a = [1,2,3,4,5];

// for(i = 0; i < a.length; i++){
//     if(a[i] == 3){
//         continue;
//     }
//     console.log(`here is ${a[i]}`);
// }

// let i = 0;
// let j = 10;

// checkiandj: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkj: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue checkj;
//     }
//     console.log(j, "is odd.");
//   }

//   console.log("i =", i);
//   console.log("j =", j);
// }

/*
1st iteration 
0,10
1,9 
*/

// for in loop example

let user = {
    name: 'jaiveer chavda',
    age: 23,
    job: undefined    
}
user.job = 'web developer'
   

for (const key in user) {
    let kahai = 'jsone';
    console.log(user[key]);
}

// function logkar(){
    // var json = 'jMack';
// }

console.log(kahai);
// let users = ['jaivver','suresh','sohil','mohit'];

// for(var user of users){
// console.log(`user name is ${user}`);
// }

// users.forEach((user,index) => {
//     console.log(`${index} : ${user}`);
// });
