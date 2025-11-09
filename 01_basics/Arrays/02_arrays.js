// const marvelheros=["spiderman","ironman","thor","hulk"];
// const bollywoodheros=["salman","shahrukh","aamir","ranbir"];
// marvelheros.push(bollywoodheros); // array chya aat made array yet ahe by push method
// console.log(marvelheros);

// const allheros=marvelheros.concat(bollywoodheros); //concat donhi array la as a object array treat karta
// console.log(allheros); //concat combines two array and returns a new arrray

//spreadout operator
// const allheros=[...marvelheros,...bollywoodheros]; //glass jenva fodto tho spread hoto 
// console.log(allheros); //spread operator combines two array and returns a new arrray

//flat operator
const newarray=[1,2,3,4[5,6,7,8],6,9,0,1,[2,5,6,8]];
console.log(newarray);
const anotherarray=newarray.flat(Infinity); //return sub arrays into single array
console.log(anotherarray); //flat operator flattens the array i.e removes nested arrays
