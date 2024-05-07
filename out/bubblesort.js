"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
var bubbleSort = function (array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                var temporaryValue = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temporaryValue;
            }
        }
    }
    return array;
};
exports.bubbleSort = bubbleSort;
(0, exports.bubbleSort)([3, 4, 1, 6, 2, 7, 9, 2]);
//# sourceMappingURL=bubblesort.js.map