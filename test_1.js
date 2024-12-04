const getNumOfCar = (passengers, cars) => {
  const totalPassenger = passengers.reduce((a, b) => a + b, 0);
  cars.sort((a, b) => b - a);
  let passenger = cars[0];
  let index = 1;

  while (passenger < totalPassenger) {
    passenger += cars[index];
    index++;
  }

  return index;
};

console.log(getNumOfCar([1, 4, 1], [1, 5, 1]));
console.log(getNumOfCar([4, 4, 2, 4], [5, 5, 2, 5]));
console.log(getNumOfCar([2, 3, 4, 2], [2, 5, 7, 2]));
