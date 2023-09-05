//Function for converting an integer to a Roman numeral
//Uses modulo operations to get each value in the int and concats the corresponding Roman numerals together
function convertToRoman(num) {
 const values = {
   M: ['', 'M', 'MM', 'MMM'],
   C: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC',  'DCCC', 'CM'],
   X: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
   I: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
 };
  
  let ans =values.M[Math.trunc(num/1000)]
        .concat(values['C'][Math.trunc((num%1000)/100)])
        .concat(values['X'][Math.trunc((num%100)/10)])
        .concat(values['I'][Math.trunc(num%10)])
  return ans
}
