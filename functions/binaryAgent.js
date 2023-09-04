//Function for converting a string of binary into alphanumeric characters
//Splits the string into each binary sequence, converts each sequence into an ASCII character, and rejoins characters
function binaryAgent(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = String.fromCharCode(parseInt(words[i], 2));
  }
  return words.join('')
}
