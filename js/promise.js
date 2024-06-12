const promise = new Promise((resolve, reject) => {
  let sum = 2 + 3;
  if (sum === 5) {
    setTimeout(() => {
      resolve("Success");
    }, 2000);
  } else {
    reject("Failed");
  }
});
promise.then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
