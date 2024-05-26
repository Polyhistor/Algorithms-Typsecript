const partitioner = (
  array: number[],
  lowestIndex: number,
  highestIndex: number
): number => {
  // we start from negative one because we should always be behind the actual iteration index
  let pivotIndex = -1;
  const pivot = array[array.length - 1];

  for (let i = 0; i < highestIndex; i++) {
    if (array[i] <= pivot) {
      // let's move the index
      pivotIndex++;

      if (array[i] !== array[pivotIndex]) {
        const temp = array[i];
        array[i] = array[pivotIndex];
        array[i] = temp;
      }
    }
  }
};

const sorter = (array: number[], lowestIndex: number, highestIndex: number) => {
  // corner case
  if (lowestIndex >= highestIndex) {
    return;
  }

  const pivotIndex = partitioner(array, lowestIndex, highestIndex);

  sorter(array, pivotIndex - 1, pivotIndex + 1);
};

const quicksort = (array: number[]) => {
  const pivotIndex = sorter(array, 0, array.length - 1);
};
