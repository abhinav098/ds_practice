function isPrimeNumber(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

// console.log(isPrimeNumber(19997));

function maxFourDigitPrimeNumber() {
  const max = 9999;
  let i = 9950;
  let maxPrime = 0;
  while (i < max) {
    i++;
    for (let j = 2; j < max; j++) {
      if (i % j !== 0) {
        console.log(i, j, i % j);
        maxPrime = Math.max(maxPrime, i);
      }
    }
  }
  return maxPrime;
}

console.log(maxFourDigitPrimeNumber());
