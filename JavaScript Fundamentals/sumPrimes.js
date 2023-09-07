//Function for summing all primes up to num
//A number is prime if it is not divisible by any integer between 2 and its square root
//Recursively adds primes from num down to 2
function sumPrimes(num) {
  //Edge case, 2 is the smallest prime
  if (num == 2) return 2;
  //Checking if num is prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    //If num is not prime, do not add to primes and move on to next number
    if (num % i == 0) return sumPrimes(num - 1);
  }
  //If num is prime, add num and all smaller primes
  return num + sumPrimes(num - 1);
}
