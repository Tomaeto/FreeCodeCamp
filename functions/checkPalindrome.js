//Function for checking if a string is a palindrome
function palindrome(str) {
  //Removing non-alphanumeric characters and setting all to lowercase
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  //Iterators for front and end of string
  let front = 0;
  let end = str.length - 1;
  //If current front and end are not the same char, return false
  //Else, move inward
  while (front < end) {
    if (str[front] !== str[end]) {
      return false;
    }
    front++;
    end--;
  }
  //If all checks are valid, return true
  return true
}
