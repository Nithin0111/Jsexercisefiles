//first application in js i.e todo application
const mytodos = []
mytodos.push("go to gym");
mytodos.push("go to clg");
mytodos.push("go to shop to buy some chocolate");
mytodos.push("give a call to suresh");

mytodos.forEach(function (todo,index) {
    console.log(`your todo no ${index +1} is ${todo}`);
    
})

//using for loop
for (let index = 0; index < mytodos.length; index++) {
    console.log(`your todo no ${index + 1} is ${mytodos[index]}`);
    
}