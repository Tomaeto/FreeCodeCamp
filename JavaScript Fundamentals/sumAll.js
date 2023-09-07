//Function for summing all values in a range
//arr contains inclusive bounds of range
function sumAll(arr) {
  let small = Math.min(arr[0],arr[1]);
  let big = Math.max(arr[0],arr[1]);
  let result = 0;
  for (let i = small; i <= big; i++) {
    result += i;
  }
  return result;

}
