//Function for checking if each object in a collection has a property pre that evaluates to true
//Collection is an array of objects, pre is a key that exists in every object
//If any object in collection has a pre that evaluates to false, return false
//Else return true
function truthCheck(collection, pre) {
  for (const obj in collection) {
    if (Boolean(collection[obj][pre]) != true) return false;
  }
  return true
}
