"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
const bubbleSort = (array) => {
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
exports.bubbleSort = bubbleSort;
console.log((0, exports.bubbleSort)([9, 3, 4, 1, 6, 2, 7, 2]));
//# sourceMappingURL=bubblesort.js.map