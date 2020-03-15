// function printMyName(name){
//     console.log(name);
// }
// printMyName("Josh");


// Arrow functions
// const multiply = (number) => number *2;
// console.log(multiply(2));

// Exports and Imports (Modules)

// person.js
// const person ={
//     name:'max'
// }
// export default person

// app.js
// import person from './person.js'
// import prs from './person.js'
// person or prs is what you choose to name it as the import from the person.js
// import {baseData} from '.utility.js'
// import {clean} from './utility.js'

// utility.js
// export const clean = () => {...}
// export const baseData = 10;

// JavaScript Classes - First example of Object Oriented JavaScript

// class Human {
//     constructor() {
//         this.gender = 'male';
//     }
//     printGender(){
//         console.log(this.gender);
//     }
//
// }
// class Person extends Human{
//     constructor() {
//         super();
//         this.name = 'Max';
//     }
//
//     printMyName(){
//         console.log(this.name);
//     }
// }
// const person = new Person();
// person.printMyName();
// person.printGender();

// Spread and Rest Operators
// Spread used to split up array elements OR object properties
// Rest Used to merge a list of function arguments into an array

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
};
console.log(newPerson);

const filter = (...args) => {
    return args.filter(el => el === 1);
};
console.log(filter(1,2,3));