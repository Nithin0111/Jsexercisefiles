//simple if else program
var Autheticate = 'teacher'
if (Autheticate === 'user')
{
    console.log("Greetings message for user")
    console.log("Grant access for all the courses")
}
else if(Autheticate === 'teacher')
{
    console.log("Greetings message for teacher")
    console.log("Grant access to all his couses to edit the content if any")
}
else{
    console.log("MESSAGE:please verify your email")
    console.log("send user a verification email")
}
//simple grading program
var marks = 10
if (marks === 10)
{
    console.log("sugoi")
}
else if (marks >= 7)
{
    console.log("sugoi dhathibayo")
}