// for of loop

// for (const element of object) {
    
// }

// ["" , "" , " "]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(`value of my arr ${num}`)
}

const greetings = "hello world"

for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}


//map


const map = new Map() // map is an object
map.set('IND' , "India")
map.set('usa' , "united states of america")
map.set('fr' , "france")


console.log(map)

for (const key of map) {
 console.log(key)   
}

for (const [key , value] of map) {
    console.log(key , ':-', value)
}


// for of loop  on object

const myobj = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

// for (const [key , value] of myobj) { //error as myobj is not iterable
//     console.log(key , ':-' , value)
// }