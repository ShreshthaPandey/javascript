let myName = "tanu    "

console.log(myName.length)
console.log(myName.truelength) //  undefined as no such fn exist

let myHero = ["thor" , "spiderMan"]

let heroPower = {
    thor : "hammer",
    spiderMan  : "sling",

    getSpiderPower : function(){
        console.log(`spider power is ${this.spiderMan}`)
    }
}

// injecting a fn in object

Object.prototype.hitesh = function (){
    console.log("hitesh is present in all object")
}

heroPower.hitesh()

myHero.hitesh() // since object is top level hirerchy and array is at lower level so property will pass to it also

// if anything injected at array level then it will not pass to object

//********************inheritance  **************** */
const user= {
    name : "tanu"
}

const Teacher = {
    makeVdo: true
}

const teachingSupport = {
    isAvailable: false
}

constTASupport = {
    makeAssignment : "js assignment",
    isfree : true,

    __proto__:teachingSupport // giving access of teaching support... prototypal inhertance

}

Teacher.__proto__ = user // prototypal inheritance


/// method 2 =>

    // modern synbtex

    Object.setPrototypeOf(teachingSupport , Teacher)


let user2  = "chaiAurCode     " 

String.prototype.truelength = function(){
    console.log(`${this.name}`)
    console.log(`true length is: ${this.trim().length}`) // jo bula rha use trim kr do hence this is used
}

user2.truelength()

"hitesh  ".truelength()

