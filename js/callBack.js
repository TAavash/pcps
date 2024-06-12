// callback function

function greet(name, callback) {
  return callback(name);
}

greet("John", sayName);

function sayName(name) {
  console.log("Hello, " + name);
}
