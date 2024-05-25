const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

interface Point {
  x: number;
  y: number;
}

const walk = (
  maze: string[],
  wall: string,
  current: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean => {
  // 1. Base Case
  // off the map
  if (
    current.x < 0 ||
    current.x >= maze[0].length ||
    current.y < 0 ||
    current.y >= maze.length
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

  if (seen[current.y][current.x]) {
    return false;
  }

  // 2. Recurse Case (pre, recurse, post)
  // pre
  seen[current.y][current.x] = true;
  path.push(current);

  for (let i = 0; i < direction.length; i++) {
    const [x, y] = direction[i];
    if (
      walk(maze, wall, { x: current.x + x, y: current.y + y }, end, seen, path)
    ) {
      return true;
    }
  }

  // post
  path.pop();
  return false;
};

export const mazeSolver = (
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] => {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);
  return path;
};

const maze = [
  "#########",
  "#S#...#E#",
  "#.#.#.#.#",
  "#.#.#.#.#",
  "#.#.#...#",
  "#.#.###.#",
  "#...#...#",
  "#########",
];
const wall = "#";
const start = { x: 1, y: 1 }; // Position of 'S'
const end = { x: 7, y: 1 }; // Position of 'E'

const path = mazeSolver(maze, wall, start, end);
console.log(path);
