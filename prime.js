function checkFirstElementPrime(arr) {
  if (arr.length === 0) {
    return "Array is empty.";
  }

  const num = arr[0];

  // Check if it's a number
  if (typeof num !== 'number') {
    return "First element is not a number.";
  }

  // Prime check
  if (num < 2) return `${num} is not a prime number.`;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `${num} is not a prime number.`;
    }
  }

  return `${num} is a prime number.`;
}
console.log(checkFirstElementPrime([7, 4, 10])); 
