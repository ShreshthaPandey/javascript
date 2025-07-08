// singleton

 // const tinderUser = new Object()

const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.name = "naman"
 tinderUser.isLoggedIn = false



console.log(tinderUser);

const regularUser = {
    email : "abc@gmail.com",
   name : {
    userFullName : {
firstName : "naman",
lastName : "singh"
      }
   }

}
console.log(regularUser)
console.log(regularUser.name)
console.log(regularUser.name.userFullName)

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

const obj3 = {obj1 , obj2}
 
const obj4 = Object.assign(obj1 ,obj2)

const obj5 = Object.assign( {}, obj1 ,obj2)

const obj6 = {...obj1 ,... obj2}

console.log(obj3)
console.log(obj4)
console.log(obj5)
console.log(obj6)

const users = [
{id: 1,
email: "abc@gmail.com"
},
{id: 1,
email: "abc@gmail.com"
},
{id: 1,
email: "abc@gmail.com"
}

]
users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
