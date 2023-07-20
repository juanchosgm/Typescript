"use strict";
const hobbies = ['Sports', 'Cooking'];
// Array Destructing
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const person = {
    firstName: 'Max',
    age: 30
};
// Object Destructing
const { firstName: userName, age } = person;
console.log(userName, age, person);
//# sourceMappingURL=destructing.js.map