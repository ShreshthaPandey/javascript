const marvelHero = ["thor", "ironMan" , "spiderMan"]
const dc = ["superMan" , "flash" , "batMan"]

//marvelHero.push(dc)

// console.log(marvelHero);
// console.log(marvelHero[3]);
// console.log(marvelHero[3][1]);

//  const allHero = marvelHero.concat(dc);
// console.log(allHero);

const myHero = [...marvelHero,...dc] //spread fn
// console.log(myHero)

const another_arr = [1,2,3 ,[4,5,6] , [7,8,9]]
const real_arr = another_arr.flat(Infinity)
console.log(real_arr)


