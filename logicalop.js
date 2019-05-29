// && - And operator
// || - or operator
// ! - not operator
let isVerified = true
let isPayed = true
let isLoggedin = true
let isGuest = true
if(isVerified && isPayed && isLoggedin)
{
    console.log("Greetings user")
    console.log("Grant access to the paid course")
}
else if(isVerified || isGuest)
{
    console.log("Grant access to the free course and paid course preview")
}
else{
    console.log("MESSAGE:Please contact admin")
    
}