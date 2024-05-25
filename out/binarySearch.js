const binarySearch = (hayStack, needle) => {
    const sortedHayStack = hayStack.sort();
    let lowestIndex = 0;
    let highestIndex = sortedHayStack.length;
    do {
        let midPointIndex = Math.floor(lowestIndex + (highestIndex - lowestIndex) / 2);
        let midPointValue = sortedHayStack[midPointIndex];
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