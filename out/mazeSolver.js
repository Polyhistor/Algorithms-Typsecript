"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mazeSolver = void 0;
const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];
const walk = (maze, wall, current, end, seen, path) => {
    // 1. Base Case
    // off the map
    if (current.x < 0 || // off the grid of X from left
        current.x >= maze[0].length || // off the grid of X from right
        current.y < 0 || // off the grid from top
        current.y >= maze.length // off the grid from bottom
    ) {
        return false;
    }
    // on a wall
    if (maze[current.y][current.x] === wall) {
        return false;
    }
    // reached the end
    if (current.x === end.x && current.y === end.y) {
        path.push(end);
        return true;
    }
    // already seen
    if (seen[current.y][current.x]) {
        return false;
    }
    // 2. Recurse Case (pre, recurse, post)
    // pre
    seen[current.y][current.x] = true;
    path.push(current);
    for (let i = 0; i < direction.length; i++) {
        const [x, y] = direction[i];
        if (walk(maze, wall, { x: current.x + x, y: current.y + y }, end, seen, path)) {
            // by this point we have recursed and stored so many functions, and this return true, ends the whole recursion which makes the stack of functions to be called in a FILO order
            return true;
        }
    }
    // post
    path.pop();
    return false;
};
const mazeSolver = (maze, wall, start, end) => {
    const seen = [];
    const path = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);
    return path;
};
exports.mazeSolver = mazeSolver;
const maze = [
    "#########",
    "#S#...#E#",
    "#.#.#.###",
    "#.#.#.#.#",
    "#.#.#...#",
    "#.#.###.#",
    "#...#...#",
    "#########",
];
const wall = "#";
const start = { x: 1, y: 1 }; // Position of 'S'
const end = { x: 7, y: 1 }; // Position of 'E'
const path = (0, exports.mazeSolver)(maze, wall, start, end);
console.log(path);
//# sourceMappingURL=mazeSolver.js.map