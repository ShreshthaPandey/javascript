const myArr = [0,1,2,3,4,5]
const myName = ["tanu", "manu"]
const myArr2 = new Array(1,2,3,4,5)


console.log(myArr[2]);
console.log(myArr2[1]);

// array methods

myArr.push(6)
console.log(myArr)
const n = myArr.length
console.log(myArr[n-1])
myArr.pop()

myArr.unshift(9)

console.log(myArr)

myArr.shift()

console.log(myArr)

console.log(myArr.includes(9))

console.log(myArr.indexOf(9))

const newArr = myArr.join()
console.log( typeof newArr +" "  + newArr)

// slice , splice

console.log("A" , myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B" , myArr)

const myn2 = myArr.splice(1 ,3)
console.log(myn2)

console.log("C" , myArr)
 