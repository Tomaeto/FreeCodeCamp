//Function for finding the missing character in a sequence
//Compares current character with next character, if char codes are not sequential then return missing character
//Else, return undefined
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) + 1 !== str.charCodeAt(i+1))
      return String.fromCharCode(str.charCodeAt(i) + 1)
  }
  return undefined
}
