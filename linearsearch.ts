export const linearSearch = (haystack: number[], needle: number): boolean => {
  //   let needleFound = false;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }

  return false;
};

const myArray = [1, 2, 3, 4];
console.log(linearSearch(myArray, 6));
