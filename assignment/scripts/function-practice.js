console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Test - should say "Hello, Victor!', helloName('Victor'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return (firstNumber + secondNumber);

}
console.log('Adding 2 Numbers, 23 & 12 -', addNumbers(23, 12));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNum, secondnum, thirdNum) {
  return (firstNum * secondnum * thirdNum);
}
console.log('TEST - Multiplying 3 numbers, 20 * 2 * 10', multiplyThree(20, 2, 10));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
console.log('TEST - input "12" return true, ', isPositive(12));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array[array.length - 1] != 0) {
    return array[array.length - 1];
  } else {
    return 'undefined';
  }
}
console.log('Test - returning the last item of the Array - [7] :', getLast([12, 2, 3, 6, 7])); //worked correctly

console.log('Test - Checking if an empty Array will return "undefined"', getLast([])); //worked correctly


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  for (i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

console.log('Test - [true]', find('wood', ['tree', 'feather', 'box', 'wood']));
console.log('Test - [true]', find(9, [1, 3, 5, 7, 9]));
console.log('Test - [false]', find('bear', [1, 2, 3, 'bird', 'box', 'plane']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.charAt(0) == letter) {
    return true;
  }
  else return false;
}

console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array1) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array1.length; i++) {
    sum += array1[i];
  }
  return sum;
}
let numArray1 = [1, 4, 6, 7, 8]  // total sum: 26
let numArray2 = [1, 4, 6, 7, 8, 24]  // total sum: 50
let numArray3 = [1, 4, 6, 7, -8]  // total sum: 10
let numArray4 = [0, 4, 6, 7, -20]  // total sum: -3 

console.log('Total sum of numArray1 is: [2]', sumAll(numArray1));  //worked
console.log('Total sum of numArray2 is: [50]', sumAll(numArray2));  //worked
console.log('Total sum of numArray3 is: [10]', sumAll(numArray3));  //worked
console.log('Total sum of numArray4 is: [-3]', sumAll(numArray4));  //worked
console.log('Total sum of numArray5 is: [15]', sumAll([1, 2, 3, 4, 5])); //worked


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let randomNum = [1, 4, -5, 0, 10]; //only positives are: [1, 4, 10]

function positivesOnly(array) {
  let positiveArray = [];

  for (let number of array) {
    if (number > 0) {
      positiveArray.push(number);
    }
  } return positiveArray;
}

console.log('Test - Only positive numbers in array: ', positivesOnly(randomNum));
console.log('Test - Only negative numbers in array: ', positivesOnly([-1, -2, -3, -5, -6]));
console.log('Test - Only positive numbers in array: ', positivesOnly([1, 2, 3, -4, -5, -6]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Create a function that will interate through the array and set the low value and high value of the entire array into a new array.  [1,2,10,5] - - - > [1, 10]
function minMax(array) {
  let newArray = [];
  let min = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  newArray.push(min);
  newArray.push(max);

  return newArray;
}
console.log('TEST - finding minimum and maximum values of the given Array: ', minMax([13, 2, 10, 5]));
