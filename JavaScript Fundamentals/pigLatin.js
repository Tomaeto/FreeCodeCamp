//Function for translating a word to Pig Latin
//If word starts with a vowel, return str with 'way' at the end
//Otherwise, move starting consonant(s) to end and add 'ay'
function translatePigLatin(str) {
  if(str.match(/^[aeiou]/i)) return str + 'way'
  const cluster = str.match(/^[^aeiou]+/)[0]
  return str.substring(cluster.length) + cluster + 'ay'
}
