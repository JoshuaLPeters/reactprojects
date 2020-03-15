function printMyName(name){
    console.log(name);
}
printMyName("Josh");


// Arrow functions
const multiply = (number) => number *2;
console.log(multiply(2));

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