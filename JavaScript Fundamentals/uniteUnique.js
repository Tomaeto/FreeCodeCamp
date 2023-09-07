//Function for finding all unique values within a set of arrays
//Arguments contains a set of arrays with numbers
//Loops through each array in arguments and adds unique values to result array
function uniteUnique(arr) {
  let result = []
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (result.indexOf(arguments[i][j]) < 0)
        result.push(arguments[i][j])
    }
  }
  return result
}
