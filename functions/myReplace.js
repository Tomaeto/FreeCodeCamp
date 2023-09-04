//Function for replacing a word in a string
//Replace before with after in str, keeping case of before
function myReplace(str, before, after) {
  //If before's first letter is uppercase, make after's first letter uppercase
  //Else do the opposite
  if (before.match(/^[A-Z]/)) after = after[0].toUpperCase() + after.substring(1,);
  else after = after[0].toLowerCase() + after.substring(1,);
  //Return str with word replaced
  return str.replace(before, after);
}
