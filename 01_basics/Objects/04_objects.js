//Singleton Objects
// const TinderUser=new Object();
// console.log(TinderUser);
// const TinderUser={} //Non Singleton Object

// const regularUser={
//     email:"Swarda@gmail.com",
//     userName:{
//         FullName:{
//             firstName:"Swarda",
//             LastName:"Mashere"
//         }
//     }
// }
// console.log(regularUser.userName.FullName.LastName)

//Merge two Objects

// const Example={
    
//     1:"hello",
//     2:"jai shree ram",
//     3:"hollaaa"
// }
// const Example2={
//     4:"Swarda",
//     5:"Sachin"
// }
// //{}->target
// //remaing source

// // const Example3=Object.assign({},Example,Example2)
// // console.log(Example3)

// //Spread Operator
// const Example3={...Example,...Example2}
// console.log(Example3)

//destucturing in javascript

const course={
    courname:"JS in Hindi",
    price:"999",
    courseInstructure:"hitesh"
}
//course.courseInstructure //it is good to access the objects but we also have another method
const {courseInstructure:instructure}=course //if you want to change the value of the object you can change it as well
console.log(instructure)