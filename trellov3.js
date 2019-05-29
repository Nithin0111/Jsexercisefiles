//if the function is inside an object then it is called as method otherwise it is a function only
let mytodos = {
    day:'Monday',
    meetings :0,
    meetdone : 0,

    addmeetinngs :function(meet) {
        this.meetings += meet
    },

    meetover :function (meet = 0) {
        this.meetdone -= meet
    },

    resetday :function () {
        this.meetings = 0
        this.meetdone = 0
    },

    getsummaryofday :function () {
        let meetleft = this.meetings + this.meetdone
        console.log(`you have ${meetleft} meetings left today!`)
    }
    
}
mytodos.addmeetinngs(4)
mytodos.getsummaryofday()
