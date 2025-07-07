//singleton :- jb constructor ke through bnante hi then singleton bnta hi single instate of each obj

//object literals

const mySym = Symbol("key1") 

const jsUser = {
    name: "tanu",
    age: 18,
    [mySym]: "myKey1", // if want to use as symbol , put in it in a square bracket
    email: "hitest@google.com",
    isloggedIn: false,
    lastDay: ["monday", "saturday"],
    "place" : "raebareli"

}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser.place) // wrong as by this way we cant assess string( as all are stirng but place is explicitely defined as string)

console.log(jsUser["place"])

console.log(jsUser[mySym])

jsUser.email = "hitesh@gmail.com" //assigning new value
console.log(jsUser.email)
Object.freeze(jsUser)
jsUser.email = "tanu@gamil.com"

jsUser.greetings = function(){  // function of object
    console.log("hello Js user");
}
jsUser.greetings2 = function(){  // function of object
    console.log(`hello js user , ${this.name}`);
}  


//console.log(jsUser.greetings())
console.log(jsUser.greetings2())