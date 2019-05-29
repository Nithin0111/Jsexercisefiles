//this is extension to scope.js
let king = 'john'

if (true) {
    let king = 'sam'
    if (true) {
        let king = 'fam'
        console.log(king);
        
    }
}
if (true) {
    console.log(king);
    
}
/*Explanation: suppose if we remove the king variable in line 7 it will look for king and it will find at
line 5 so it take the king as sam suppose if we remove the king var at line 5 also then globally declared
king john will be printed suppose if we remove the globally declared king also then an error comes 
saying king is not declared suppose you declared like this king = 'john' then when there is no
iniatialization like let or var or const it will be declared globally and king can be accessed by 
anyone so never declare a variable like that */