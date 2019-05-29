//assignment
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']

months.forEach(function(i,j) {
    console.log(`Month ${j+1} is ${i}`)
})
//assignment function
let getmygrade = function(mymarks,totalmarks) {
    let mypercentage = (mymarks/totalmarks)*100;
    let mygrade = '';
    if (mypercentage >= 90)
    {
        mygrade = 'A'
    }
    else if (mypercentage >= 70)
    {
        mygrade = 'B'
    }
    else if (mypercentage >= 50)
    {
        mygrade = 'C'
    }
    else
    {
        mygrade = 'D'
    }
    return `you grade is ${mygrade}`
    }
    let myresult = getmygrade(78,100)
    console.log(myresult);
    

