function firstFunction(callback) {
  setTimeout(() => {
    console.log("First function completed");
    callback();
  }, 1000);
}

function secondFunction(callback) {
  setTimeout(() => {
    console.log("Second function completed");
    callback();
  }, 1000);
}

function thirdFunction() {
  setTimeout(() => {
    console.log("Third function completed");
  }, 1000);
}

// firstFunction(() => {
//   secondFunction(() => {
//     thirdFunction();
//   });
// });

firstFunction(secondFunction(thirdFunction));
