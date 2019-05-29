//objects familiar topic but here we use : to assign values not = see eg below
let myYoutubeVideo = {
    title:'Objects',
    author:'Nithin harsha',
    Videoduration:15
}
console.log(myYoutubeVideo);
console.log(`New youtube video by ${myYoutubeVideo.author} title is ${myYoutubeVideo.title}`);

let jscourse = {
    Name:'Javascript',
    Price:799,
    Author:'Hitesh choudhary',
    CourseLength:130,
    Description:'Master js using this course'
}

console.log(`New course by ${jscourse.Author} is ${jscourse.Name} at a discounted price ${jscourse.Price} `);

//changing the data in the object
//suppose you want to change the course name from javascript to python you can do it as below
jscourse.Name = 'Python';//but it changes permanantly in the object
console.log(jscourse);

//function that takes an object and gives object
 let changelength = function (myObject) {
     console.log(`Length of the course is ${myObject.CourseLength + 2}`);
     
 }

 changelength(jscourse);

 //changing the above in more efficient way
 let changelength1 = function (myObject1) {
     return `Length of the course is ${myObject1.CourseLength + 4}`
     
 }

console.log(changelength1(jscourse));
 
//suppose you want to return multiple values
let changelength2 = function (myobj2) {
    return {
        format1: `Length of the course is ${myobj2.CourseLength + 4}`,
        format2: `Length of the course is ${myobj2.CourseLength + 6}`
    }
    
}
console.log(changelength2(jscourse));
//to access two formats seperately
let adOne = changelength2(jscourse);
console.log(adOne.format1);
