//there are many ways to create functions
//here we are using one of the functions
//simple function with no parameters
let sayHello = function()
{
    console.log("greetings to the user")
    console.log("hello user")
}
//calling the function
sayHello()
//creating a function theat takes parameters
let sayHello1 = function(name)
{
    console.log(`greetings to ${name}`)
    console.log(`${name} how are you doing..??`)
}
//calling function using parameters
sayHello1("Nithin")
//another simple fun
let name = function(firstName,lastName)
{
    console.log(`hello ${firstName}`)
    console.log(`happy to have you ${firstName} ${lastName}`)
}

name('john','doe')
//function that returns some value
let address = function(num1,num2)
{
    let added = num1 + num2
    return added
}

console.log(address(1,5))
let result = address(1,5)
console.log(result);

//
let mymultiply = function(num1,num2)
{
    let result = num1 * num2
    return result
}

console.log(
 mymultiply(5,2))

 //default parameters in fun in js
 let guestUser = function(name = 'Noname'/*default param*/, courseCount = 0/*default parameters*/)
 {
    return name + ' your coursecount is ' + courseCount
 }

 console.log(guestUser());
 console.log(guestUser('john',4));
 
 











