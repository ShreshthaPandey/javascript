// for
 
for (let i = 0; i < 10 ; i++) {
    const element = i;
    console.log(element)
    
}
const array = [0,1,2,3,4,5]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(i===4) console.log("this is best no")
   else  console.log(i)
    
}

for (let i = 1; i <= 5; i++) {
    console.log("outer loop value", i)
   for (let j = 1; j <=5; j++) {
   // console.log(`inner loop value ${j} and outer loop value is ${i}`)
    console.log(i + '*' + j + "=" + i+j)
    
   }
    
}

//break & continue

for (let i = 0; i <=20; i++) {
    if(i== 5) {
        console.log("detected 5")
        break;
    }
    console.log(i);
    
}

for (let i = 0; i <=20; i++) {
    if(i== 5) {
        console.log("detected 5")
       continue; 
    }
    console.log(i);
    
}

