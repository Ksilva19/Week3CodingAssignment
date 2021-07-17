// 1-a
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
const lastItem = ages[ages.length - 1];
const firstItem = ages[0];
console.log(lastItem - firstItem);
 
// 1-b
ages.push(7);
 
console.log(ages);
 
// 1-c
var total = 0;
 
for(let i = 0; i < ages.length; i++) {
    total += ages[i];
}
 
var agesAvg = total / ages.length;
 
console.log(agesAvg) 
 
// 2-a
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
lettersAvg = names.join('').length / names.length;
console.log(lettersAvg);
 
//Question 2-b
for (let i = 0; i < names.length; i++) {
    console.log(names.join(" "));
}
 
// 3
let lastElement = names[names.length - 1];
 
console.log(lastElement);
 
// 4
console.log(names[0]);
 
// 5
let nameLengths = names.map(function (element) {
    return element.length;
}); 
 
console.log(nameLengths)
 
// 6
let reducer = (a, b) => a + b;
 
console.log(nameLengths.reduce(reducer));
 
// 7
function newFunction(word, n) {
    return word.repeat(n);
}
 
console.log(newFunction("Hello", 3));
 
// 8
function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName); 
}
 
createFullName('Kevin', 'Silva-Ramos'); 
 
// 9 
let numArray = [11, 22, 60, 20];
 

function sumArray (incomingArray) {
    let sumOfAll = 0;
    for (let i = 0; i < incomingArray.length; i++) {
        sumOfAll += incomingArray[i];
        // console.log(sumOfAll);
    } 
    if (sumOfAll > 100) {
        return true;
    } 
}
 
console.log(sumArray(numArray));
 
// 10
function getAvg(numArray) {
    let newTotal = numArray.reduce((acc, c) => acc + c, 0);
    return newTotal / numArray.length;
  }
const average1 = getAvg(numArray);
console.log(average1);
 
// 11
let secondArray = [1, 9, 18, 36]
function avgOfSecond(secondArray) {
    let newTotal2 = secondArray.reduce((abb, b) => abb + b, 0);
    return newTotal2 / secondArray.length;
  }
const average2 = avgOfSecond(secondArray);
console.log(average2);
 
function avgOfBoth (bothArrays) {
    if (average1 > average2) {
        return true;
    } else {
        return false;
    }
}
 
console.log(avgOfBoth());
 
// 12
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket >= 10.5) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 30));
 
// 13
let oneArray = ['Shakira', 'Bruno Mars', 'Beyonce', 'Prince', 'Drake']
function myFunction(myArray) { 
    return oneArray.sort(myArray);
}
 
console.log(myFunction());

// I created the function in line 125 to sort the artist names 
// from oneArray alphabetically and then print them to the console.