let globalvar = 'i am global'
if (true)
{
    //if var localvar = 'i am local' -> this is globally declared annd line 11 can access it 
    let localvar = 'i am local' //declared locally since let is used and line 11 cannot access it
    //globalvar = 'nothin'
    console.log(localvar);
    console.log(globalvar);
    
}
console.log(localvar)
/*console.log(localvar)
this cannot be done because the localvar variable scope is upto the end of if statement only coz it is
declared iside the if statemet so it is only accessable in the if statement only*/
console.log(globalvar);
/*but this can be done coz the variable globalvar is declared globally so it can be accessed anywhere in the
program but here if we override the value of globalvar as in line 5 it will 
affect the whole program and the value of globalvar is changed for the entire program not for the if
condition only*/
/*suppose we have declared the variable using var then the line10 can also be accessible var
keyword declares a variable globally no matter where you declare it so it is best to use let keyword 
unless if you want to declare variable globally */