//  console.log("////Finding !1st character in a words in sentence"); //////////////////////////////

// var x = "hello I am madhu gowda";

// let y = x
//   .split(" ")
//   .map((splitWord) => splitWord.charAt(0))
//   .join("");
// console.log(y);

// console.log("////Finding Duplicate in array"); ////////////////////////////////////

// let cars = ["apple", "mi", "oppo", "mi"];

// let Duplicates = cars.filter(function (item, index) {
// // to find duplicates
// if (cars.indexOf(item) !== index) return item;
// // to remove duplicates
// if (cars.indexOf(item) === index) return item;
// });
// console.log(Duplicates);

// console.log("////sorting array useing length"); ////////////////////////////////////

// var Sentence = "hi i am madhu ";

// let NewSentence = Sentence.split(" ")
//   .sort(function (a, b) {
//     return a.length - b.length;
//   })
//   .join(" ");
// console.log(NewSentence);

// console.log("////Dynomically dispalying number"); ////////////////////////////////////////////

// let num = "3242";
// let numArr = [...num];

// let pattern = "**********";
// let patternArr = [...pattern];

// let NewAtmNumber = patternArr.splice(
//   patternArr.length - numArr.length,
//   numArr.length,
//   ...numArr
// );

// console.log(patternArr);

// console.log("///Removing duplicate in array of objects"); /////////////////////////////////////

// let NewArray = [
//   { name: "madhu", email: "madhu@gmail.com" },
//   { name: "manu", email: "manu@gmail.com" },
//   { name: "madhu", email: "madhu@gmail.com" },
//   { name: "manju", email: "manju@gmail.com" },
//   { name: "manu", email: "manu@gmail.com" },
// ];

// let ModifiedArray = NewArray.filter(
//   (item, index, findDup) =>
//     index === findDup.findIndex((d) => d.name === item.name)
// );

// console.log(ModifiedArray);

// console.log("////finding middle value in array"); ///////////////////////////////////////////////////

// let midArray = [21, 34, 24, 56, 35, 34, 56];

// var findMid = Math.floor(midArray.length / 2);
// console.log(midArray[findMid]);

// console.log("////Finding prime number in array"); //////////////////////////////////////////

// let priArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let findPrime = priArray.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });
// console.log(findPrime);

// console.log("/////change the names in string"); ////////////////////////////////////////////////
// // //i have a tiger and also lion
// const strr = "i have a dog and also one cat";

// var changeValue = strr.replace("dog", "tiger").replace("cat", "lion");
// console.log(changeValue);

// console.log("/////second largest number"); ///////////////////////////////////////////////

// const array = [23, 67, 37, 37, 37, 487, 557, 557, 4];

// var newArray = array
//   .filter((item, index) => {
//     if (array.indexOf(item) === index) {
//       return item;
//     }
//   })
//   .sort((a, b) => a - b);

// console.log(newArray[newArray.length - 2]);

// console.log("//////this is how this is use"); /////////////////////////////////////////////////

// function outer() {
//   this.name = "madu";
//   this.changeName = function () {};
// }

// const needName = new outer();
// console.log(needName.name);

// console.log("///Capitalize firest character of word in sentence"); /////////////////////////////////////////

// var str1 = "hello madhu and shubham come to my office i need to talk with you";

// const newStr1 = str1
//   .split(" ")
//   .map((toCapital) => toCapital.charAt(0).toUpperCase() + toCapital.slice(1))
//   .join(" ");

// console.log(newStr1);

// console.log("///Convert array to object"); //////////////////////////////////////////

// var arr = ["One", "Two", 3];
// var obj = { ...arr };
// console.log(obj);

// console.log("///Convert object to array"); //////////////////////////////////////////

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// const propertyNames = Object.keys(person);

// console.log(propertyNames);
// const propertyValues = Object.values(person);

// console.log(propertyValues);

// const entries = Object.entries(person);

// console.log(entries);

// console.log("///How to delete key value pairs in objects"); ////////////////////////////////////

// var thisIsObject = {
//   Cow: "Moo",
//   Cat: "Meow",
//   Dog: "Bark",
// };
// console.log(thisIsObject);
// console.log(delete thisIsObject.Cat);
// console.log(thisIsObject);

// console.log("///removeing element from array"); ////////////////////////////////////////////////////

// var array1 = [1, 2, 67, 57, 5, 8, 5, 4];
// const newarr = array1.unshift(); //to remove element in front
// // const newarr = array1.shift(); //to add element in front
// // const newarr = array1.pop(); //to remove element in end
// // const newarr = array1.push(); //to add element in end

// console.log(newarr);
// console.log(array1);

// console.log("///Sort array of string");

// var arr = ["w", "r", "e", "a", "l"];

// const newArr = Array.from(arr).sort();

// console.log(newArr);

// console.log(parseInt("higeeks"));

// console.log("/////Reverseing String useing for loop");

// let str = "javascript";

// var newVar = "";
// for (var i = str.length - 1; i >= 0; i--) {
//   newVar = newVar + str[i];
// }

// console.log(newVar);

// console.log("///Recursion example");

// function countDown(fromNumber) {
//   console.log(fromNumber);

//   let nextNumber = fromNumber - 1;

//   if (nextNumber > 0) {
//     countDown(nextNumber);
//   }
// }
// console.log(countDown(10));

// console.log("///NAN Not a number example");

// function sanitise(x) {
//   if (isNaN(x)) {
//     return NaN;
//   }
//   return x;
// }
// console.log(sanitise("2"));

// console.log("////Closures Example");

// function MyFunction() {
//   var name = "madhu";
//   NEWONE();
//   function NEWONE() {
//     console.log(name);
//   }
// }
// MyFunction();

// //OR;

// function myFunction(x) {
//   return function (y) {
//     return function (z) {
//       return function (p) {
//         console.log(x + y + z + p);
//       };
//     };
//   };
// // }

// var arrays = [12, 45, 3, 44, 66, 99, 54, 33];

// const nnewArr = arrays.sort();
// console.log(nnewArr[nnewArr.length - 1], nnewArr[length - 2]);

// var arr = [12, 45, 3, 44, 66, 99, 54, 33];

// let max = 0;
// let secondMax = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     // continue next
//     max = arr[i];
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (secondMax < arr[i] && arr[i] !== max) {
//     secondMax = arr[i];
//   }
// }
// console.log(max, secondMax);

// var array = [23, 56, 44, 86, 54, 7, 8, 66, 54, 211, 11];

// const newArr = array.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }

//   return true;
// });
// console.log(newArr);
// let priArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let findPrime = priArray.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });
// console.log(findPrime);

// let str = "madhugowda";

// let newValue = "";
// for (var i = str.length - 1; i >= 0; i--) {
//   newValue = newValue + str[i];
// }

// console.log(newValue);

// var Arr = [23, 56, 44, 86, 54, 7, 8, 66, 54, 211, 11];

// for (let i = 0; i < Arr.length; i++)
//   for (let j = 0; j < i; j++)
//     if (Arr[i] < Arr[j]) {
//       var x = Arr[i];
//       Arr[i] = Arr[j];
//       Arr[j] = x;
//     }

// console.log( Arr);

// console.log(Array.from(new Array(100), (_, index) => index + 1));

// console.log(Arr.copyWithin(1));

// let str1 = "javasceropdjh";

// let madhu = "";
// for (var i = str1.length - 1; i >= 0; i--) {
//   madhu = madhu + str[i];
// }

// console.log(madhu);

// let Arr1 = [1, 24, 5, 6, 7, 4, 3, 3, 54, 5, 4, 3, 3, 35, 5, 67, 7];

// for (let i = 0; i < Arr1.length; i++)
//   for (let j = 0; j < i; j++)
//     if (Arr1[i] < Arr1[j]) {
//       var shubham = Arr1[i];
//       Arr1[i] = Arr1[j];
//       Arr1[j] = shubham;
//     }

// console.log(Arr1);

// max = 0;
// secondMax = 0;
// for (let i = 0; i < Arr.length; i++) {
//   if (max < Arr[i]) {
//     max = Arr[i];
//   }
// }
// for (let i = 0; i < Arr.length; i++) {
//   if (secondMax < Arr[i] && Arr[i] !== max) {
//     secondMax = Arr[i];
//   }
// }
// console.log(max, secondMax);

// var newAvlue = [];
// // const newArr = Array.from(new Array(50), (_, index) => index + 1);
// // newAvlue = newArr;
// // console.log(newAvlue);

// console.log(
//   "qwqwqw",
//   newArr.map(() => newAvlue)
// );

// var colume = 50;
// var row = 50;
// const multiArray = [];
// const final = [];

// for (let i = 1; i <= row; i++) {
//   multiArray.push(i);
// }

// for (let i = 1; i <= colume; i++) {
//   final.push(multiArray);
// }

// var newArray = multiArray;
// console.log(final);

// console.log(multiArray.map(() => newArray));

// var str2 = "doll is very pretty girl";

// var newStr = "";
// for (var i = str2.length - 1; i >= 0; i--) {
//   newStr = newStr + str2[i];
// }

// console.log(newStr.split(" ").reverse().join(" "));

// var arr = [
//   24, 35, 6, 7, 4, 55, 77, 54, 33, 66, 35, 5, 65, 4, 4343, 55, 43, 3, 3,
// ];

// var newArr2 = arr.filter((number) => {
//   for (let index = 2; index < Math.sqrt(number); index++) {
//     if (number % index === 0) {
//       return false;
//     }
//     return true;
//   }
// });
// console.log(newArr2);

// var arr = [];

// for (let i = 1; i < 50; i++) {
//   arr.push(i);
// }
// console.log(arr);

// var newArr3 = [];
// for (var i = 0; i <= arr.length - 1; i++) {
//   if (newArr3.indexOf(arr[i]) === -1) {
//     newArr3.push(arr[i]);
//   }
// }

// var newValue1 = [];

// var newArr4 = arr.filter((item, index) => {
//   if (arr.indexOf(item) === index) {
//     return item;
//   }
// });
// console.log(newArr4);

// let str4 = "hello what is going on brother";

// let newStr4 = str4
//   .split(" ")
//   .map(
//     (newWord) =>
//       newWord.slice(newWord, newWord.length - 1).toUpperCase() +
//       newWord.charAt(newWord.length - 1).toLowerCase()
//   )
//   .join(" ");

// console.log(newStr4);

// function NewFunction() {
//   console.log("hello madhu");
// }
// var newOne = setTimeout(NewFunction, 3000);
// console.log(newOne);
