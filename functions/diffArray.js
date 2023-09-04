//Function for returning an array of the unique values in arr1 and arr2
//Filters each array for only the values that are not in the other array and returns array with those values
function diffArray(arr1, arr2) {
  const newArr1 = arr1.filter(val => arr2.indexOf(val) < 0);
  const newArr2 = arr2.filter(val => arr1.indexOf(val) < 0);
  return [...newArr1, ...newArr2]
  
}
