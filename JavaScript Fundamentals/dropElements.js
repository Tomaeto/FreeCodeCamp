//Function for dropping elements from arr while func(arr[0]) is false
//Shifts arr until func returns true or arr becomes empty
function dropElements(arr, func) {
  while (arr.length > 0 && !(func(arr[0]))) arr.shift();
  return arr;
}
