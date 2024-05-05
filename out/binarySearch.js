var binarySearch = function (hayStack, needle) {
    var lowIndex = 0;
    var highIndex = hayStack.length;
    do {
        var midPointIndex = Math.floor(lowIndex + (highIndex - lowIndex) / 2);
        var midPointValue = hayStack[midPointIndex];
        if (midPointValue === needle) {
            return true;
        }
        else if (midPointValue > needle) {
            highIndex = midPointIndex;
        }
        else {
            lowIndex = midPointIndex + 1;
        }
    } while (lowIndex < highIndex);
    return false;
};
console.log(binarySearch([1, 2, 3, 4], 4));
//# sourceMappingURL=binarySearch.js.map