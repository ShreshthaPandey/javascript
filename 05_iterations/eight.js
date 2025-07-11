const myNums = [1,2,3]

const myTotal = myNums.reduce(function(accumulator, currentvalue){
    console.log(`acc : ${accumulator} and curr : ${currentvalue}`)
return accumulator + currentvalue
}, 0) // 0 is inital value from whre calculation start

console.log(myTotal)


const mytotal = myNums.reduce((acc , curr) => acc+curr , 0) // same code  only written in single line

console.log(mytotal);

const shoppingCart = [
    {
   itemName : "js course",
   price : 2999,
},
{
   itemName : "ps course",
   price : 3999,
},
{
   itemName : "cs course",
   price : 4999,
}

]

const total = shoppingCart.reduce(( acc,item) =>acc+item.price , 0)

console.log(`total amt to pay is : ${total}`)