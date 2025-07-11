const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

//console.log(values) // for each loop dont return values hence eror

const myNum = [1,2,3,4,5,6,7,8,9]

 const newNums = myNum.filter((num) => num > 4

)

console.log(newNums)

const mynum = myNum.filter((num) => { // if using curly braces then explicitely u have to return ....otherwise see above example
    return num>4
})

console.log(mynum)


const newNum = []

myNum.forEach((num) => {
    if(num>4){
        newNum.push(num)
    }
})
console.log(newNum)