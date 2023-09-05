//Function for checking if a given string is a valid phone number format
/* Formats:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/
//Any mix of these formats is considered valid
//If string starts with area code, it must be 1
function telephoneCheck(str) {
  //Regular Expressions for checking validity of phone number
  let reg1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/;
  let reg2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

  return (reg1.test(str) || reg2.test(str)) ? true : false
}
