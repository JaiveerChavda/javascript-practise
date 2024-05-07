//arrays are ordered list of values;

//for each loop can be used to iterate over arrays.

//array elements which are explicitly defined as undefined are listed.
// let letters = ['first','second','third','fourth'];
//this is not recommended for iterating arrays
// for ( let ele in letters){
    // console.log(letters[ele]);
// }


// --please use this for iterating
// letters.forEach(function(letter) {
//     console.log(letter);
// });


// --Array methods

// 1) concat
// let a = 'jaiho';
// letters = letters.concat(8**8,a,'b','c');

// 2) join
let givenName = ['jaiveer','chavda'];
const full_name = givenName.join('-');

//3) push() - add elements to end of an array
// givenName.push('sinh');

// 4) pop() - delete elements from end of an array
// givenName.pop()

// 5) shift() - method removes element from start of an array
// givenName.shift();

// 6) unshift() - method add element to start of an array
// givenName.unshift('vintage');

// 7) slice() The slice() method extracts a section of an array and returns a new array.
// let sec = letters.slice(1,3);

// 8) at() - The at() method returns the element at the specified index in the array, or undefined
// if the index is out of range. It's notably used for negative indices that access elements from the end of the array.
// console.log(letters.at(-2)); //third

// 9) splice() - method removes elements from an array and (optionally) replaces them. 
//It returns the items which were removed from the array.
// const myArray = [1,'2','3','4'];
// myArray.splice(1,3,undefined,'t','v');
// console.log(myArray); 

// 10) reverse () - The reverse() method reverse the array,
// console.log(letters.reverse());

// 11) flat() - The flat() method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const numbers = [1,2,[3,4,[5,6]]];
// let mixed = numbers.flat();
// console.log(mixed);

//12) sort() = The sort() method sorts the elements of an array in place
// console.log(letters.sort());
let letters = ['first','second','third','fourth','fifth','fourth'];

// 13) indexOf() - which return index of searched element from the array
// console.log(letters.indexOf('fourth'));

// 14) lastIndexOf() - works similar like indexOf but start search from backward
// console.log(letters.lastIndexOf('fourth'));

//15) forEach() - The forEach() method executes callback on every array item and returns undefined.

// 16) map() - the map accepts a callback which will be executed on every array element.
let UpperLetters = letters.map(item => item.toUpperCase() );

// 17) flatMap() - the flatmap runs map and then flat on the arrays elements
// let upperLower = letters.flatMap(item => [item.toUpperCase(),item.toLowerCase()]);
// console.log(upperLower);


// 18) filter() - the  filter method return new array containing the items for which callback returns true.
// let filtered = letters.filter(item => item.startsWith('S'));
// console.log(filtered);

// 19) find() - returns the first item for which the callback returns true
// let findLetter = letters.find(item => item.length >= 6);
// console.log(findLetter);

// 20) findLast() - The findLast() method returns the last item for which callback returned true;
// similar as find but search and return value end of an array

// 21) findIndex() - The findIndex() method returns the index of the first item for which callback returned true.
// let findindex = letters.findIndex(item => item.length >= 6);
// console.log(findindex);
 
// 22) findLastIndex() - method returns the index of the last item for which callback returned true.

// 23) every() - method returns true if callback returns true for every item in the array
// let everylet = letters.every(item => typeof item === 'string');
// console.log(everylet);

//24) The some() method returns true if callback returns true for at least one item in the array.
// let somelet = letters.some(item => item.length >= 6);
// console.log(somelet);

// 25) The reduce() method applies callback(accumulator, currentValue, currentIndex, array) for each value in the array for the purpose of reducing the list of items down to a single value. The reduce function returns the final value returned by callback function.

// const a = [10, 20, 30];
// const total = a.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0,
// );
// console.log(total); // 60

// 26) reduceLast() The reduceRight() method works like reduce(), but starts with the last element.

