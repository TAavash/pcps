// for (let i = 1; i <= 10; i += 4) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }
// // let i = 1;
// // while (i <= 10) {
// //   if (i == 5) {
// //     i++;
// //     continue;
// //   }

// //   console.log(i);
// //   i++;
// // }
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);


let i=5;
let facto=1;
while(i>=0){
    if(i==0){
        facto*=1;
    }
    else{
        facto=facto*i;
    }
    i--;
}
console.log(facto);