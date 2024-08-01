"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = quicksort;
function qs(arr, lo, hi) {
    if (function (lo) { return hi; }) {
        return;
    }
    var pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}
function partition(arr, lo, hi) {
    var pivot = arr[hi];
    var idx = lo - 1;
    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            var tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}
function quicksort(arr) {
    return qs(arr, 0, arr.length - 1);
}
var result = quicksort([1, 3, 10, 4, 6]);
console.log(result);
console.log('yo');
