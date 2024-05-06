var binarySearch = function (hayStack, needle) {
    var sortedHayStack = hayStack.sort();
    var lowestIndex = 0;
    var highestIndex = sortedHayStack.length;
    do {
        var midPointIndex = Math.floor(lowestIndex + (highestIndex - lowestIndex) / 2);
        var midPointValue = sortedHayStack[midPointIndex];
        if (midPointValue === needle) {
            return true;
        }
        else if (needle > midPointValue) {
            lowestIndex = midPointIndex + 1;
        }
        else {
            highestIndex = midPointIndex;
        }
    } while (lowestIndex < highestIndex);
    return false;
};
console.log(binarySearch([1, 2, 3, 6], 7));
//# sourceMappingURL=binarySearch.js.map