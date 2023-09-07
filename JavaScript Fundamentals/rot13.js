//Function for decoding a string using the ROT13 cipher
//The ROT13 cipher shifts the ASCII value of each character up by 13
//Shifts ASCII of each character back by 13, looping if value drops below 'A'
//Assumes all strings are in uppercase
function rot13(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    //Only decodes alphabet characters
    if (str[i].match(/[A-Z]/)) {
      let charCode = str.charCodeAt(i) - 13;
      //If charCode drops below 65 ('A'), loops around to 90 ('Z') and subtracts the remaining amount
      if (charCode < 65)
        charCode = 90 - (12 - (str.charCodeAt(i) - 65));
      result = result.concat(String.fromCharCode(charCode));
    }
    //If character is not alphabetical, concatenates to string w/o decoding
    else result = result.concat(str[i]);
  }
  console.log(result)
  return result
}
