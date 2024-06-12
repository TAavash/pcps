function greet(name) {
   return ( `Hello, ${name}.`);
}

const result = greet('John');
console.log(result); 

function sum(a, b) {
    const sumValue= a + b;
   return sumValue;
}
const sumResult = sum(2, 3);
console.log(sumResult);

 

// function expression
const sub=function(a,b){
    return a-b;
}
const subResult=sub(5,3);
console.log(subResult);

// Arrow function
const mul=(a,b) =>{
    return a*b;
};

// greeting function
const greet = name => `Hello, ${name}.`;
const result2 = greet('John');
console.log(result2);

