//Function for mapping DNA element pairs from a string
//str contains DNA string, returns array of pairs for each element
//Splits str by each char and creates pairs with the char's corresponding element
function pairElement(str) {
  const pairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };
  return str.split('').map(char => [char, pairs[char]]);
}
