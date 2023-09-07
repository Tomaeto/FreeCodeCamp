//Function for converting a given object's altitute into its orbital period
//arr is an array of objects with a name field and avgAlt field
//Returns an array of objects containing the given object's name and orbital period
//Orbital Period is defined as T = 2*PI*sqrt( (avgAlt + earthRadius)^3 / GM )
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push({name:arr[i].name, orbitalPeriod:
      Math.round(2*Math.PI* Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt,3)/GM))})
  }
  return result
}
