// Select First character in sentence and capitalize first and last character
console.log(
  "Select First character in sentence // capitalize first and last character"
);

// var str = "hello javascript is a scripting language";

// const newStr = str
//   .split(" ")
//   .map(
//     (newOne) =>
//       newOne.slice(newOne, newOne.length - 1) +
//       newOne.charAt(newOne.length - 1).toUpperCase()
//   )
//   .join(" ");

// console.log(newStr);

//Finding duplicates in array
console.log("Finding duplicates in array useing loop and methods");

// let arr = [1, 2, 4, 7, 8, 4, 3, 1, 2, 5, 7, 8, 4, 3];

//useing methods removes duplicates

// const newArr = arr.filter((item, index) => {
//   if (arr.indexOf(item) !== index) return item;
// });
// console.log(newArr);

//using for loop

// let newArr1 = [];
// for (let i = 0; i < arr.length - 1; i++) {
//   if (newArr1.indexOf(arr[i]) === -1) {
//     newArr1.push(arr[i]);
//   }
// }
// console.log(newArr1);

//Finding Duplicates in Array of objects
console.log("Finding Duplicates in Array of objects");

// let arr = [
//   { name: "madhu", email: "madhu@123" },
//   { name: "malli", email: "malli@123" },
//   { name: "madhu", email: "madhu@123" },
// ];

// const newArr = arr.filter(
//   (value, index, self) =>
//     self.findIndex((it) => it.email === value.email) === index
// );
// console.log(newArr);

//Sorting string useing length
console.log("Sorting string useing length");

// let str = "hi iam madhu what is your name";

// const newStr = str
//   .split(" ")
//   .sort((a, b) => a.length - b.length)
//   .join(" ");
// console.log(newStr);

//Dynomically dispalying number
console.log("Dynomically dispalying number");

// let num = "124523";
// let numArr = [...num];
// let pattern = "**********";
// let patternArr = [...pattern];

// let newPattern = patternArr.splice(
//   patternArr.length - numArr.length,
//   numArr.length,
//   ...numArr
// );
// console.log(patternArr);

//finding middle value in array
console.log("finding middle value in array");

// let arr = [1, 3, 5, 3, 2];

// let newArr = Math.floor(arr.length / 2);
// console.log(arr[newArr]);

//Finding prime number in array
console.log("Finding prime number in array");

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const newArr = arr.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });
// console.log(newArr);

//Reverse the string useing for loop and also sentense
console.log("Reverse the string useing for loop and also sentense");

// let str = "javascript is a scripting lanuage";

// let newStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   newStr = newStr + str[i];
// }
// console.log(
//   newStr
//     .split(" ")
//     .map((newOne) => newOne)
//     .reverse()
//     .join(" ")
// );

//Finding 2 largest number in array useing methods and for loop
console.log("Finding 2 largest number in array useing methods and for loop");

// var arr = [12, 34, 6, 7, 7, 8, 8, 8554, 322, 45];

//useing methods

// const newArr = arr.sort((a, b) => a - b);
// console.log(newArr);
// console.log(newArr[newArr.length - 1], newArr[newArr.length - 2]);

//using loop

// let max = 0;
// let secondMax = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (secondMax < arr[i] && arr[i] !== max) secondMax = arr[i];
// }
// console.log(max, secondMax);

//Sorting array useing for loop
console.log("Sorting array useing for loop");

// var arr = [23, 56, 44, 86, 54, 7, 8, 66, 54, 211, 11];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

//Adding 1 to 50 numbers to array and add 50 arrays to another array useing loop and methods
console.log(
  "Adding 1 to 50 numbers to array and add 50 arrays to another array useing loop and methods"
);

//useing methods

// const newArr = new Array(50).fill(
//   Array.from(new Array(50), (_, index) => index + 1)
// );
// console.log(newArr);

// //using for loop

// let arr = [];
// let newArr = [];
// for (let i = 1; i < 51; i++) {
//   arr.push(i);
// }
// for (let i = 1; i < 51; i++) {
//   newArr.push(arr);
// }
// console.log(newArr);

//Sorting Array of String
console.log("Sorting Array of String");

// let arr = ["sdjfhgv", "wtefr", "wefg", "iwo", "ajuhf"];
// const newArr = Array.from(arr).sort();
// console.log(newArr);

//multiplay numbers if length 1 and add if number is 2
console.log("multiplay numbers if space and add if number");

// const string = "3 56 4 22";

// let newStr = string.split(" ");
// let mult = 1;
// for (let i = 0; i < newStr.length; i++) {
//   if (newStr[i].length > 1) {
//     let sum = 0;
//     for (let j = 0; j < newStr[i].length; j++) {
//       sum = sum + Number(newStr[i][j]);
//     }
//     mult = mult * sum;
//   } else {
//     mult = mult * newStr[i];
//   }
// }

// console.log(mult);

//Exchange number dynamically
console.log("Exchange number dynamically ");

// var str1 = "HJHJHHH";
// var first = [str1[0]];
// str1.split("").map((value) => {
//   if (first.length < 2 && value !== str1[0]) {
//     first.push(value);
//   }
// });
// const newWord = str1
//   .split("")
//   .map((newLetter) => (newLetter === first[0] ? first[1] : first[0]))
//   .join("");
// console.log(newWord);

// for (var index = 0; index < 5; index++) {
//   setTimeout(() => {
//     console.log(index);
//   }, 1000);
// }
