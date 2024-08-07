function qs(arr:number[], lo:number, hi:number): void{
  if (lo => hi) {
  return; 
  }

  const pivotIdx = partition(arr, lo, hi)

  qs(arr,lo, pivotIdx -1)
  qs(arr,pivotIdx+1, hi)
}

function partition(arr:number[], lo:number, hi:number): number {
  const pivot = arr[hi]

  let idx = lo - 1 
 for(let i = lo; i < hi; i++) {
    if(arr[i] <= pivot){
      idx++ 
      const tmp = arr[i]
      arr[i] = arr[idx]
     arr[idx] = tmp 
    }
  }

  idx++
  arr[hi] = arr[idx]
  arr[idx] = pivot 
 
  return idx;
}

export default function quicksort (arr:number[]): void {
 return qs(arr,0, arr.length - 1)
}


const result = quicksort([1,3,10,4,6])

console.log(result);
console.log('yo');


