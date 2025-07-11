const myNumers = [1,2,3,4,5,6,7,8,9]

 const newNums = myNumers.map((num)=> num+10) // return value
 //can explicitedly return using curly brackets{ }



 const newNum = myNumers
                         .map((num) => num + 110)
                         .map( (num) => num+1) 
                         .filter((num) => num>=40)//chaining of method as here we are using two methods at a time

 console.log(newNums);
 console.log(newNum)

 //*************************************************** */

