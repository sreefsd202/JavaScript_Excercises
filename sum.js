function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i]; // square each element and add to sum
  }

  return sum;
}
const numbers = [2, 3, 4,5];
console.log("Sum of squares:", sum(numbers));