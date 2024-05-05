//callback example

let numbers = [2, 3, 4];

let multiply = function (num) {
  return num * 2;
};

let result = numbers.map((num) => multiply(num));
console.log(result);
