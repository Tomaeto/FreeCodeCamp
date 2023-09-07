//Given an array of values and values to 'destroy,' returns array with those values removed
//Array is first argument, all others are values to destroy
//Gets values to destroy and filters them out of array
function destroyer(arr) {
  let args = [...arguments]
  let removes = args.slice(1,)
  return arr.filter(val => removes.indexOf(val) < 0)
}
