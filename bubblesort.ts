export const bubbleSort = (array: number[]): number[] => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temporaryValue = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporaryValue;
      }
    }
  }

  return array;
};

console.log(bubbleSort([9, 3, 4, 1, 6, 2, 7, 2]));
