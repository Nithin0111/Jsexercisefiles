const days = ['Mon','Tue','Wed','Thu','Fri','Sat']
 
let sayhello  = function() {
     
    console.log("Greetings to the user");
 
}

days.forEach(sayhello)
//here we can also do this by using call back that means a function having no name passing directly function 
//argument in the foreach loop see down the example
days.forEach(function() {
    console.log("greetings to the user");
});
//now using this concept to loop through the array
days.forEach(function(i) {//here i is the reference variable like we use in loops like
    console.log(i);       //for (i=0;i<n;i++) same i
})
days.forEach(function(i,j) {
    console.log(`day at ${j} is ${i}`); //here always the first paramedter is always the data like in this case
     //mon,tue,wed,....and the second
    //parameter is always the index like 0,1,2.....      
})
