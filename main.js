// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 
Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/
// first we complete the factory function which return a object with static keys, values
// Then, we create two objects form the factory function and assign the values 
// and then we assign those two objects to a new array called computers;
// and then function called display computer to display one computer values, [Attributes]

function makeComputer(type, color, weight) {
  // TODO: Your code here
  return {
    type: type,
    color: color,
    weight: weight
  }
}

var computer1 = makeComputer('HP', 'black', 250);
var computer2 = makeComputer('Dell', 'Red', 300);

var computers = [computer1, computer];

// Write a function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  // TODO: Your code here
  return obj.type + ', ' + obj.color + ', ' + obj.weight;
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).

Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/

// Describtion
// here the most helper function is map() so we use it to create a new Array and iterate
// over the array of string and push the elements to the new array transformed to uppercase
// just two lines of code do that

function uppercaseAll(arrayOfStrings) {
  // TODO: your code here
  return map(arrayOfStrings, function(element){
    return element.toUpperCase();
  });
}

//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

// Here we can use filter beacause there is a condition that we need to make sure it os true
// so filter iterate over array and assign the elements to new Array IF the condition is true

function highestPopulation(arrayOfObjects) {
  // TODO: your code here
  return filter(arrayOfObjects, function(element, i){
    return (element.population > 500000000);
  });
}

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/
// here we can use map function to iterate over the array
// and assign all the elements divided by 2 to the newArray;

function halveAll(numbers) {
  // your code is here
  return map(numbers, function(element, i){
    return (element / 2);
  });
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/
//using map() we itertate over obj
// and return just the values 
// which is going to assign them to the new Array in map function

function values(obj) {
  // TODO: your code here
  return map(obj, function(value, key){
    return value;
  });
}

//Good Luck :))
