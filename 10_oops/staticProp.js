class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username ${this.username}`)
    }
   static createId(){ // dont give access to all object created from this class
        return `123`
    }
}

const hitesh = new user("hitesh")

//console.log(hitesh.createId())

class Teacher extends user{
    constructor( username , email){

         super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone" , "i@gmail.com")

iphone.logMe()
console.log(iphone.createId()) // since fn was static so it also not allow to inherit to its child also