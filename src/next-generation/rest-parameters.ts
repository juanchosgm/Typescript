const add = (...numbers: number[]) => numbers.reduce((currentResult, currentValue) => currentResult + currentValue, 0)
const add2 = (...numbers: [number, number, number]) => numbers.reduce((currentResult, currentValue) => currentResult + currentValue, 0)
const addedNumbers = add(5, 10, 2, 3.7);
const addedNumbers2 = add2(5, 10, 2);
console.log(addedNumbers);