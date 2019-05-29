//my most loved datatype
var superheroes = ['ironman','superman','antman']
superheroes.push('capt.america')
superheroes.pop('superman')
//push operation appends into array and pop deletes from array
console.log(superheroes);
console.log(superheroes[1]);
console.log(superheroes[superheroes.length - 1]);
console.log(`we have ${superheroes.length} superheroes`);
/* if we want to run a js code in console.log we have to use these -> `` and we 
write whatever we need and when we need to write our js code the syntax is
->${jscodehere} the code inside this curly braces only executes and the remaining remains as it is */
console.log("------------------------------------------------------------------------------------");
var arr = [
    "apple",
    "banana",
    "cherry"
];

arr = arr.concat([
    "dragonfruit",
    "elderberry",
    "fig"
]);

console.log(arr);

console.log("------------------------------------------------------------------------------------");

var arr = [1, 2, 3]
arr.unshift(0)
console.log(arr)
/* if you want to append any value to the start of an array that means to the first index
 then you can use unshift() for this purpose.
*/
console.log("----------------------------------------------------------------");

//3 must know methods of arrays
let numbers = ["one","two","three","four","five"]

//start
//to see the number you are shifting you can do console.log(numbers.shift())
numbers.shift()
console.log(numbers); 
//shift shifts one index and unshift inserts at the start
numbers.unshift('Start ')
console.log(numbers);
console.log("--------------------------------------------------------------------------------------------");
//slicing of arrays
numbers.splice(1,2,'Start')
console.log(numbers);
let numbers1 = [1,2,3,4,5]
numbers1.splice(2,1,'Something')
console.log(numbers1);

let numbers2 = [9,8,7,6,5]
numbers2.splice(1,2,'Start')
console.log(numbers2);

