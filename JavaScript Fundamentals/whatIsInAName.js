//Function for finding objects in collection with the same values as source
//Collection contains objects, source is a single object
//Filters each object in collection for the same values for each key in the source object
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter(obj =>{
    for (let i = 0; i < sourceKeys.length; i++) {
      if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) return false;
    }
    return true;
  })
}
