function calculateCartPrice(...num1) {
    return num1;

}

console.log(calculateCartPrice(200, 300, 400)) // in this case only print 1st value

// so do rest opertor(...num1) => make bundle of all three item and give it to me.... (make an array)

// function calculateCartPrice(val 1, val2, ...num1){
// return num1
// }

// console.log(calculateCartPrice(200, 300, 400, 5000)) => n this case ist two value will be stored in val1 and val2 and rest 2 value will make packet and store in num1

const user = {
    userName : "tanu",
    price: 199
}

function HandleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)
}

HandleObject(user)
HandleObject({          // direclty passing the object
    userName: "sam",
    price: 399
})

// passing arrray in fn

const MyNewArray = [200, 300, 400, 5000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(MyNewArray));

// method 2 to pass array

console.log(returnSecondValue([1, 2, 3, 4, 5]));