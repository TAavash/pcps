const numbers = [10, 20, 30, 40, 50];

//   const getNumber=numbers.find((number) =>{
//     return number > 30;
//   });
//   console.log(getNumber);
 

// const filteredNumbers = numbers.filter(num => num > 30);
// console.log(filteredNumbers); // Output: [40, 50]

const squaredNumbers = numbers.map(num => num-2);
console.log(squaredNumbers); // Output: [100, 400, 900, 1600, 2500]