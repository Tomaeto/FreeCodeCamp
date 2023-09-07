//Function for summing all odd numbers in the Fibonacci sequence up to num
function sumFibs(num) {
  let cur = 1;
  let prev = 0;
  let result = 0;
  while (cur <= num) {
    if (cur % 2 != 0) result += cur;
    cur += prev;
    prev = cur - prev;
  }
  return result
}
