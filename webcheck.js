let userEmail = 'abc1234'
let password = '123456'
let userchecker = function(mystring){
if ((mystring.includes(123)) && (mystring.length > 6))
{
    console.log('true');
}else{
    console.log('false');}
    
}
let passchecker = function (pass) {
    if ((pass.includes(123)) && (pass.length > 6)) {
        console.log('true');
    }else{
    console.log('false');}
}
userchecker(userEmail)
passchecker(password)
//here these mystring.includes are the innbuilt types
//check more of this documentation at https://developer.mozilla.org/en-US/docs/Web/JavaScript