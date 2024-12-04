function maxValue(numbers) {
  let mapSubValues = new Map();

  numbers.forEach((number, index) => {
    if (mapSubValues.has(number)) {
      mapSubValues.get(number).lastIndex = index;
    } else {
      mapSubValues.set(number, { firstIndex: index });
    }
  });

  let temp = 0;
  const prefixSum = numbers.reduce((acc, number) => {
    return [...acc, (temp += number)];
  }, []);

  let ans = -1;

  // Find the maximum sum with same first and last value
  mapSubValues.forEach((value) => {
    if (value.lastIndex) {
      ans =
        ans > prefixSum[value.lastIndex] - prefixSum[value.firstIndex - 1]
          ? ans
          : prefixSum[value.lastIndex] - prefixSum[value.firstIndex - 1];
    }
  });

  return ans;
}

console.log(maxValue([1, 3, 5, 2, 4, 18, 2, 3]));
console.log(maxValue([1, 3, 6, 1, 6, 6, 9, 9]));
console.log(maxValue([5, 1, 4, 3]));
