function myFunction(param) {
  // Only change code below this line
  var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar",
  };
  delete lion[param];
  return lion;
  // Only change code below this line
}
console.log(myFunction("roar")); // Change this line
module.exports = myFunction;
