function mostFrequentItem(arr) {
  if (arr.length === 0) return "Array is empty.";

  let frequency = {};
  let maxFreq = 0;
  let mostFrequent;

  for (let item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;

    if (frequency[item] > maxFreq) {
      maxFreq = frequency[item];
      mostFrequent = item;
    }
  }

  return `Most frequent item: ${mostFrequent} (appears ${maxFreq} times)`;
}
console.log(mostFrequentItem([3, "apple", 2, "apple", 3, 3, "banana", 2, 3]));
console.log(mostFrequentItem([]));