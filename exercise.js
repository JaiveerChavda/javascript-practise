function convertMinutesToSeconds(minutes) {
    return minutes * 60;
}

// console.log(convertMinutesToSeconds(5));

function findQuestionMarkInString(str) { //hello?
    let lastCharacter = str.charAt(str.length - 1);

    return lastCharacter === '?' ? str : str + '?';
}


function findMaxNumInArray(numbers) { //[1,2,4,5]
    let maxNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (maxNumber < numbers[i]) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}
// console.log(findQuestionMarkInString('kemcho'));
// console.log(findQuestionMarkInString('jordarr'));
// console.log(findQuestionMarkInString('su kro cho?'));

// console.log(findMaxNumInArray([1,23,2,42,8]));

function scarsticString(str) {
    let newString = '';

    for (let i = 0; i < str.length; i++) {
        newString += i % 2 == 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }

    return newString;
}

// console.log(scarsticString("hello"));
// console.log(scarsticString("vue is great framework"));


function noSpace(str) {

    // 1st way

    // let newString = '';

    // for(let i = 0; i < str.length; i ++){
    //     if (str[i] !== ' '){
    //         newString += str[i];
    //     }
    // }
    // return newString;
    // 2nd way

    return str.split(' ').join('');
}

function squareSum(numbers) {
    let result = 0;
    // numbers.forEach(number => {
    //    result += number ** 2;
    // });



    return numbers
        .map(num => num * num)
        .reduce((acc, currentValue) => acc + currentValue);
}

// console.log(squareSum([1,2,3])); // 14
// console.log(squareSum([4,5,6])); // 14

function positiveSum(numbers) {
    let sumPositive = 0;

    numbers.forEach(num => { if (num > 0) { sumPositive += num; } })
    // return sumPositive;

    // 2nd way
    return numbers.filter(num => num > 0)
        .reduce((acc, currentValue) => acc + currentValue);

}

// console.log(positiveSum([1,2,3,-4]));
// console.log(positiveSum([100,200,-3,-4,45,-10]));

// exercise 1
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// let date = new Date();

// let options = {
//     weekDay: 'long',
//     dateStyle: 'full',
//     timeStyle: 'full',
// };

// const dateTimeFormat = new Intl.DateTimeFormat('en-IN',options);

// let dateTimeParts = dateTimeFormat.formatToParts(date);
// console.log(dateTimeParts);
// console.log('Today is : ' + dateTimeParts[0].value);

// let hour = ''; 

// for (const type in dateTimeParts) {
//     if(dateTimeParts[type].type == "hour"){
//         hour = parseInt(dateTimeParts[type].value);
//     }   
// };

// let time = ` ${hour} PM : ${date.getMinutes()} : ${date.getSeconds()}`;

// console.log('Current time is : '+time);

// const date = new Date();

const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric' };

// const formatter = new Intl.DateTimeFormat('en-IN', options);

// const [{ value: today }, , { value: hour }, , { value: minute }, , { value: second }, , { value: dayPeriod }] = formatter.formatToParts(date);

// console.log(`Today is: ${today}`);
// console.log(`Current time is: ${hour} ${dayPeriod} : ${minute} : ${second}`);


// exercise 2
// window.print();

// exercise 3

// let date = new Date();

// console.log(
//     new Intl.DateTimeFormat('en-GB',{
//         dateStyle: 'medium',
//         timeStyle: 'full',
//         timeZone: 'IST',
//         hour11: true,
//     }).format(date),
// );

// let mmddyyyy = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`; // Custom format: YYYY-MM-DD
// console.log(mmddyyyy);

// let mmddyyyy2 = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

// console.log(mmddyyyy2);


// exercise 4 

// Function to calculate the area of a triangle using Heron's formula
// function calculateTriangleArea(a, b, c) {
//     // Calculate the semi-perimeter
//     var s = (a + b + c) / 2;
    
//     // Calculate the area using Heron's formula
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
//     return area;
// }

// // Given sides of the triangle
// var side1 = 5;
// var side2 = 6;
// var side3 = 7;

// // Calculate the area
// var triangleArea = calculateTriangleArea(side1, side2, side3);

// // Print the result
// console.log("The area of the triangle with sides " + side1 + ", " + side2 + ", " + side3 + " is: " + triangleArea);


// exercise 5
// reverse the string

// let word="hello world";

// console.log(reverseString('hello world'));

// function reverseString(str){
//     let reversed_str = '';
//     for(let i = str.length-1; i >= 0 ; i--){
//         reversed_str  += str[i];
//     }
//     return reversed_str;
// }

// exercise 6 isLeapYear
// function isLeapYear(year) {
//     // Leap years are divisible by 4
//     // But not divisible by 100 unless also divisible by 400
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// // Test the function
// const yearToCheck = 2028;
// if (isLeapYear(yearToCheck)) {
//     console.log(yearToCheck + " is a leap year.");
// } else {
//     console.log(yearToCheck + " is not a leap year.");
// }

// exercise 7 
// find out if 1st January will be a Sunday between 2014 and 2050
// function yearsHavingSundayOn1stJan()
// {
//     for (let year = 2014; year <= 2050; year++) {

//         let date = new Date(year,0,1, 0);

//         let  dayOfWeek = date.getDay();

//         if(dayOfWeek == 0){ //0  means Sunday
//             console.log('1st January is being a Sunday ' + year)
//         }
        
//     }
// }

// console.log(yearsHavingSundayOn1stJan());


// exercise 8
// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  

// function getRandomInt(min,max){
//     min = Math.ceil(0);
//     max = Math.floor(9);
//     let random = Math.random();
//     return Math.floor(random * (max - min + 1) ) + min; 
// }

// let randomNumber = getRandomInt(0,9);

// const userInput = prompt('please enter a number',0);

// let isUserGuessedCorrect = randomNumber == userInput ? true : false;

// let message = isUserGuessedCorrect ? 'Good Work' : 'Not matched';
// console.log(isUserGuessedCorrect);
// console.log(message);
// alert(message);

// 9. Write a JavaScript program to calculate the days left before Christmas.  
// let today = new Date(2024,11,26,0);
// let christmas = new Date(today.getFullYear(), 11,25 , 0);

// let oneDay = 1000 * 60 * 60 * 24;

// if(today.getMonth() == 11 && today.getDate() > 25 ){
//     christmas.setFullYear(today.getFullYear() + 1);
// }

// let  difference = christmas.getTime() - today.getTime();

// let dayRemain =  Math.round(difference / oneDay);


// console.log(`${dayRemain} left before christmas`);

// 10.Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  


// function multiply(){
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value; 
    
//     document.getElementById("result").innerHTML = parseInt(num1)* parseInt(num2);
// }

// function divide(){
//     let num1 = document.getElementById("num1").value;
//     let num2 = document.getElementById("num2").value; 
    
//     document.getElementById("result").innerHTML = parseInt(num1)/ parseInt(num2);
// }

// exercise 11
// Define a function to convert Celsius to Fahrenheit
// function convertToF() {
//     // Store the input Celsius temperature in a variable
//     var cTemp = document.getElementById('c').value;
  
//     // Calculate the equivalent Fahrenheit temperature
//     var cToFahr = cTemp * 9 / 5 + 32;
  
//     // Create a message string describing the conversion result
//     var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
  
//     // Log the message to the console
//     console.log(message);

//     document.getElementById('cresult').innerHTML = cToFahr;
//   }
  
//   // Define a function to convert Fahrenheit to Celsius
//   function convertToC() {
//     // Store the input Fahrenheit temperature in a variable
//     var fTemp = document.getElementById('f').value;
  
//     // Calculate the equivalent Celsius temperature
//     var fToCel = (fTemp - 32) * 5 / 9;
  
//     // Create a message string describing the conversion result
//     var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
  
//     // Log the message to the console
//     console.log(message);
//   }
  
//   Call the cToF function with a Celsius temperature of 60
//   cToF(60);
  
//   Call the fToC function with a Fahrenheit temperature of 45
//   fToC(45); 


// exercise 12

// get the current website url

// alert(document.URL);


// exercise 13

//exercise 14 

// get the file ext

// let filename = 'system.php';

// console.log(filename.split('.').pop());
// let todolist = document.querySelector('ul').style.background = 'cyan';
// document.body.style.background = "red";

// console.log(todolist);

// exercise 18
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

// pairs [25,25] [50,24]

let Pairs = [[13,0],[2,25],[23,34]];

let pairshasfifty = false;

Pairs.forEach(function(pair) {
    if(pair[0] == 50 || pair[1] == 50){
        pairshasfifty = true;
    }

    let sum = pair[0] + pair[1];

    if(sum == 50) {
        pairshasfifty = true;
    }
})


console.log(pairshasfifty);
