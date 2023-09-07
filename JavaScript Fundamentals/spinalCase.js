//Function for returning a string in spinal case (all lowercase, words joined with a dash)
//Splits string by spaces, underscores, and where the next char is uppercase, rejoins with dashes, and sets to lowercase
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}
