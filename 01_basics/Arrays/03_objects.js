//Singleton- when the object is created by constructor
//ject.create;

//declare symbol
const mySym=Symbol("Key1");

//object literals
const JsUser={
    name:"Swarda",
    age:22,
    [mySym]:"Swarda", //define a symbol like this[]
    hobbies:["reading","coding","travelling"],
    email:"swardamashere1439@gmail.com"
}
//accesss objects
// console.log(JsUser.email);  //.operator to access object values
// console.log(JsUser["hobbies"]) 
// console.log(JsUser["email"]);

//access Symbol
// console.log (JsUser[mySym]); //string
// console.log(JsUser); // [Symbol(Key1)]: 'Swarda'

//functions
JsUser.greeting=function(){
    console.log("Hello Swarda");
}
JsUser.greeting2=function(){
    console.log(`Hello User2, ${this.name}`); //interpolation
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());