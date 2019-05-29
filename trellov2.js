let mytodos = {
    day:'Monday',
    meetings:0,
    meetdone:0,
}

let addmeeting = function (todo,meet = 0) {
    todo.meetings += meet
}

let meetover = function (todo,meet=0) {
    todo.meetdone -= meet
}

let resetday = function (todo) {
    todo.meetings  = 0
    todo.meetdone = 0
}

let getsummaryofday = function (todo) {
    let meetleft = todo.meetings + todo.meetdone
    return `you have ${meetleft} meetings left today!`
}

addmeeting(mytodos,4)
meetover(mytodos,3)
console.log(mytodos);

console.log(getsummaryofday(mytodos));
