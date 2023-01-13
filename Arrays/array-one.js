const strings = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//push
strings.push('e'); //Adds to the end of the array - O(1) - one operation
console.log(strings)

// //pop - takes value off at the end of the array
strings.pop();
strings.pop();
console.log(strings)

// //unshift - Adds value to the beginning of the array
strings.unshift('x');
console.log(strings)
// //splice
strings.splice(2, 0, 'alien');

console.log(strings);
