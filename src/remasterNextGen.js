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

class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender(){
        console.log(this.gender);
    }

}
class Person extends Human{
    constructor() {
        super();
        this.name = 'Max';
    }

    printMyName(){
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName();
person.printGender();