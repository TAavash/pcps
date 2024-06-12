// // // // arithmetic operators

// // // // addition
// // // var a = 10;
// // // var b = 20;
// // // var sum = a + b;
// // // console.log(sum);

// // // const name = "John";
// // // const concat= name + b;
// // // console.log(concat);

// // // // subtraction
// // // const sub = a - b;
// // // const sub1 = b-name;

// // // const mulResult = a **3;
// // // console.log(mulResult);

// // // // division
// // // const div = a / b;
// // // console.log(div);

// // // const mod = b % a;
// // // console.log(mod);

// // // console.log(4%5)    // 4

// // // console.log(5%4)    // 1

// // // let z=5;
// // // z++;
// // // z+=2;
// // // z=z+2;
// // // z--;
// // // console.log(z);

// // // // comparison operators
// // // const x = 10;
// // // const y = "10";
// // // console.log(x == y); // true
// // // console.log(x != y);// false
// // // console.log(x===y);// false
// // // console.log(x!==y);

// // // // logical operators
// // // const p = true;
// // // const q = false;
// // // console.log(p && q); // false

// // // console.log(p || q); // true

// // // console.log(!p); // false
// // // console.log(!q); // true

// // const fName="John";
// // const age = 25;
// // const city="New York";
// // console.log("My name is "+fName+" and I am "+age+" years old. I live in "+city);
// // console.log(`My name is ${fName} and I am ${age} years old. I live in ${city}`);

// // const a='10';
// // const b='20';

// // console.log(a*b)

// // let y=5;
// // y++
// // y+=1
// // y=y+1
// // y+=5

// // y--
// // y-=10
// // console.log(y)

// // const f=10;
// // const g=10
// // console.log(f==g)
// // console.log(f===g)
// // console.log(f!=g)
// // console.log(f!==g)

// console.log('10'+ '10')//
// console.log('10' - '10')//
// console.log('10'+ + 10)//
// console.log(10 + + '10')//

// // if(condition){
// //     //code
// // }
// // else{
// //     //code
// // }

// let age=18;
// if(age>=18){
//     console.log('You are eligible to vote');
// }
// else{
//     console.log('You are not eligible to vote');
// }

// // calculate grade based on marks
// let marks=85;
// if(marks>=90){
//     console.log('Grade A');
// }
// else if(marks>=80){
//     console.log('Grade B');
// }
// else if(marks>=70){
//     console.log('Grade C');
// }
// else if(marks>=60){
//     console.log('Grade D');
// }
// else{
//     console.log('Grade F');
// }

// conditions for bmi
// bmi=weight/(height*height)
// underweight: <18.5
// normal: 18.5-24.9
// overweight: 25-29.9
// obesity: >30

let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);
console.log(bmi);
if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("Overweight");
} else {
  console.log("Obesity");
}

// switch case

let day = 2;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
