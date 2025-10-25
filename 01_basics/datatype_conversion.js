// let somenumber=42;
// let stringnumber=String(somenumber);
// console.log(typeof stringnumber); // "string"
// console.log(stringnumber); // "42"


/*+++++++++++++++++++++++++++++Memory types++++++++++++++++++++++++++++++++++++++++*/
//Stack Heap Memory
//Stack(primitive) copy of variable
//Heap(non-primitive)  reference of varibale so that it can change

// let firstname="Swarda";
// let anothername="Mashere" //copy of variable in stack memory
// anothername="swarda mashere"
// console.log(firstname);
// console.log(anothername);
/*+++++++++++++++++++++++++++++Memory types++++++++++++++++++++++++++++++++++++++++*/

let userOne={
    name:"Swarda",
    age:22
}
let userTwo=userOne; //reference of variable in heap memory i.e original value
console.log(userOne);
console.log(userTwo);