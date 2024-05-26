// // The main quicksort function that initializes the recursive sorting process
// const quickSort = (arr: number[]): void => {
//   qs(arr, 0, arr.length - 1);
// };

// // The recursive function that partitions the array and sorts the sub-arrays
// const qs = (arr: number[], lo: number, hi: number): void => {
//   // Base case: If the subarray has 0 or 1 element, it is already sorted
//   if (lo >= hi) {
//     return;
//   }

//   // Partition the array and get the pivot index
//   const pivotIndex = partition(arr, lo, hi);

//   // Recursively sort the left subarray (elements less than or equal to the pivot)
//   qs(arr, lo, pivotIndex - 1);

//   // Recursively sort the right subarray (elements greater than the pivot)
//   qs(arr, pivotIndex + 1, hi);
// };

// // The partition function that selects a pivot and partitions the array
// const partition = (arr: number[], lo: number, hi: number): number => {
//   // Choose the last element as the pivot
//   const pivot = arr[hi];

//   // Initialize the index of the smaller element
//   let index = lo - 1;

//   // Iterate through the array from lo to hi-1
//   for (let i = lo; i < hi; i++) {
//     // If the current element is smaller than or equal to the pivot
//     if (arr[i] <= pivot) {
//       // Increment the index of the smaller element
//       index++;

//       // Swap the current element with the element at the smaller element index
//       if (arr[i] !== arr[index]) {
//         const temp = arr[i];
//         arr[i] = arr[index];
//         arr[index] = temp;
//       }
//     }
//   }

//   // Place the pivot element in its correct sorted position
//   index++;
//   arr[hi] = arr[index];
//   arr[index] = pivot;

//   // Return the index of the pivot element
//   return index;
// };

// console.log(quickSort([1, 10, 8, 2, 3, 5]));
