// Only change code below this line
var myPet = {
  name: "Grof",
  species: "Rotvajler",
  legs: 4,
  friends: ["Rik", "Don"],
};
function myFunction(myObj) {
  return myObj;
}
// Only change code above this line
console.log(myFunction(myPet.name)); //Change this line
module.exports = { myPet, myFunction };
