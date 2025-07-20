// mostly everything in javascript is object
// object has no parent
// jo property object ke hi yoh unke child ke bhui hi like array and string ...
//this is due to inheritance
//function can also behave like a object according to its behavior


function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username , score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){// inserting a function in prototype of createUSer
   this.score+2 // this shows that ke... jisne bhi tumko call kiya ho uska score badha do ...to remove conflict
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai" , 25) // without new keyward ...above injected prototype will not run
const tea =  new createUser("tea" , 250)

chai.printMe()
tea.printMe()
chai.printMe()