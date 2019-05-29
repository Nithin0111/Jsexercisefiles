// == only checks whether it is the same value or not but === check
let myvar = 2
let myvar2 = '2'

console.log(myvar == myvar2);
console.log(myvar === myvar2);

// In one word, main difference between "==" and "===" operator is that formerly compares variable by making type correction e.g.if you compare a number with a string with numeric literal, == allows that, but === doesn't allow that, because it not only checks the value but also type of two variable, if two variables are not of the same type "===" return false, while "==" return true. 

// Read more: http://www.java67.com/2013/07/difference-between-equality-strict-vs-operator-in-JavaScript-Interview-Question.html#ixzz5p8wz4mZ7
