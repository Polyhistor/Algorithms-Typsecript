"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = void 0;
const linearSearch = (haystack, needle) => {
    //   let needleFound = false;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle)
            return true;
    }
    return false;
};
exports.linearSearch = linearSearch;
const myArray = [1, 2, 3, 4];
console.log((0, exports.linearSearch)(myArray, 6));
//# sourceMappingURL=linearsearch.js.map