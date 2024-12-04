const getSmallestNumber = (number) => {
  const totalLength = Math.ceil(number / 9);
  const mod = number % 9;
  const intArray = [];
  let lenght = 0;

  while (lenght < totalLength - 1) {
    intArray.push(9);
    lenght++;
  }

  intArray.push(mod);

  return intArray.sort().join("");
};

console.log(getSmallestNumber(16));
console.log(getSmallestNumber(19));
console.log(getSmallestNumber(7));
