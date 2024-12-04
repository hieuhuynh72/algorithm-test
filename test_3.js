const getTotalEventPair = (numbers) => {
  let totalPair = 0;
  let end = numbers.length - 1;
  let start = 0;

  if ((numbers[start] + numbers[end]) % 2 === 0) {
    totalPair++;
    end--;
    start++;
  }

  for (let index = start; index < end; index++) {
    if ((numbers[index] + numbers[index + 1]) % 2 === 0) {
      index++;
      totalPair++;
    }
  }

  return totalPair;
};

console.log(getTotalEventPair([4, 2, 5, 8, 7, 3, 7]));
console.log(getTotalEventPair([14, 21, 16, 35, 22]));
console.log(getTotalEventPair([5, 5, 5, 5, 5, 5]));
